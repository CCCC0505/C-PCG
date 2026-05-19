import base64
import json
import mimetypes
import re
from pathlib import Path
from typing import Dict, List, Tuple

from .debug_utils import log_debug
from .errors import ProviderRequestError
from .frame_capture import capture_frame_png, image_bytes_to_data_url
from .image_generation_provider import generate_image_with_selected_model, normalize_image_model
from .world_fate_world import (
    get_world_fate_anchor_context,
    build_world_fate_fallback_scene,
    get_world_fate_curated_memory,
    get_world_fate_default_hotspots,
    get_world_fate_movie_profile,
)


def _extract_message_text(content) -> str:
    if isinstance(content, str):
        return content.strip()
    if isinstance(content, list):
        parts = []
        for item in content:
            if isinstance(item, dict) and item.get("type") == "text" and item.get("text"):
                parts.append(str(item["text"]).strip())
        return "\n".join(part for part in parts if part)
    return ""


def _clean_json_block(text: str) -> str:
    cleaned = (text or "").strip()
    if cleaned.startswith("```"):
        cleaned = re.sub(r"^```[a-zA-Z0-9_-]*\s*", "", cleaned)
        cleaned = re.sub(r"\s*```$", "", cleaned)
    match = re.search(r"\{.*\}", cleaned, flags=re.DOTALL)
    return match.group(0).strip() if match else cleaned


def _parse_json(raw_text: str, defaults: dict) -> dict:
    try:
        payload = json.loads(_clean_json_block(raw_text))
    except json.JSONDecodeError:
        payload = {}
    normalized = {}
    for key, fallback in defaults.items():
        value = payload.get(key, fallback)
        normalized[key] = value
    return normalized


def _make_qwen_client(config):
    from openai import OpenAI

    return OpenAI(
        api_key=config["DASHSCOPE_API_KEY"],
        base_url=config["DASHSCOPE_BASE_URL"],
    )


def _normalize_movie_id(movie_id: str) -> str:
    return get_world_fate_movie_profile(movie_id)["id"]


def _image_file_to_data_url(path: Path) -> str:
    mime = mimetypes.guess_type(str(path))[0] or "image/png"
    return "data:" + mime + ";base64," + base64.b64encode(path.read_bytes()).decode("ascii")


def _load_world_fate_reference(config, movie_id: str, seconds: float) -> Tuple[str, str]:
    movie_key = _normalize_movie_id(movie_id)
    image_library = config.get("WORLD_FATE_REFERENCE_IMAGE_LIBRARY", {})
    image_path = image_library.get(movie_key)
    if image_path:
        path = Path(image_path)
        if path.exists():
            return movie_key, _image_file_to_data_url(path)

    video_library = config.get("WORLD_FATE_VIDEO_LIBRARY", {}) or config.get("STORY_REPLY_VIDEO_LIBRARY", {})
    if movie_key not in video_library:
        raise ValueError("movie_id is not supported")
    frame_bytes = capture_frame_png(Path(video_library[movie_key]), seconds)
    return movie_key, image_bytes_to_data_url(frame_bytes)


def _analyze_world_fate_reference(config, movie_id: str, reference_image: str, seconds: float, debug_steps: list) -> dict:
    profile = get_world_fate_movie_profile(movie_id)
    instruction = (
        f"你是 {profile['movie_label']} 的剧情理解器。"
        f"\n限制范围：{profile['scope']}"
        f"\n当前参考时间约为 {seconds:.2f} 秒。"
        "\n请基于这张图，输出当前场景的剧情摘要、人物焦点、关系张力、情绪张力与可作为后续改写支点的叙事锚点。"
        "\n所有字段必须使用简体中文。"
        "\n只输出严格 JSON："
        '{"story_beat":"","scene_summary":"","character_focus":"","relationship_tension":"","emotion_tension":"","reply_anchor":"","suggested_sender":""}'
    )
    log_debug(debug_steps, "world_fate.ai.scene.start", model=config["QWEN_VISION_MODEL"], movie_id=movie_id)
    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_VISION_MODEL"],
        messages=[
            {
                "role": "system",
                "content": "你是严格 JSON 输出助手，且只能使用简体中文回答。",
            },
            {
                "role": "user",
                "content": [
                    {"type": "image_url", "image_url": {"url": reference_image}},
                    {"type": "text", "text": instruction},
                ],
            }
        ],
        timeout=120,
    )
    raw_text = _extract_message_text(completion.choices[0].message.content)
    log_debug(debug_steps, "world_fate.ai.scene.success", movie_id=movie_id)
    return _parse_json(
        raw_text,
        {
            "story_beat": "",
            "scene_summary": "",
            "character_focus": "",
            "relationship_tension": "",
            "emotion_tension": "",
            "reply_anchor": "",
            "suggested_sender": "导演台",
        },
    )


def _normalize_selection(selection):
    if not selection:
        raise ValueError("selection is required")
    if not isinstance(selection, dict):
        raise ValueError("selection is not supported")

    try:
        x = float(selection.get("x", 0))
        y = float(selection.get("y", 0))
        width = float(selection.get("width", 0))
        height = float(selection.get("height", 0))
    except (TypeError, ValueError) as exc:
        raise ValueError("selection is not supported") from exc

    x = min(max(x, 0.0), 1.0)
    y = min(max(y, 0.0), 1.0)
    width = min(max(width, 0.0), 1.0 - x)
    height = min(max(height, 0.0), 1.0 - y)
    if width <= 0 or height <= 0:
        raise ValueError("selection is not supported")

    return {
        "x": round(x, 4),
        "y": round(y, 4),
        "width": round(width, 4),
        "height": round(height, 4),
    }


def _selection_note(selection: dict) -> str:
    return (
        "选择区域："
        f"距左 {round(selection['x'] * 100)}%，"
        f"距上 {round(selection['y'] * 100)}%，"
        f"宽 {round(selection['width'] * 100)}%，"
        f"高 {round(selection['height'] * 100)}%。"
    )


def _build_space_prompt(scene: dict, anchor_context: str = "") -> str:
    anchor_prompt = (
        "\n以下是影片中已核实存在的潜在线索，只能作为空间真实性和剧情一致性的参考，"
        "不要把它们画成文字标签、按钮、热点标记、发光标注或 UI 浮层：\n"
        f"{anchor_context}\n"
        if anchor_context else ""
    )
    return (
        "请基于当前暂停帧，生成同一时刻、同一空间、同一叙事语境下的 360 度可探索全景图。"
        "输出必须是 2:1 比例的等距柱状全景图（equirectangular panorama），"
        "让观众可以左右环视，而不是普通海报、概念图或单镜头插画。"
        f"场景核心是：{scene.get('scene_summary', '')}。"
        f"人物焦点：{scene.get('character_focus', '')}。"
        f"情绪张力：{scene.get('emotion_tension', '')}。"
        f"关系张力：{scene.get('relationship_tension', '')}。"
        f"{anchor_prompt}"
        "请把当前暂停帧理解成全景中的一个朝向参考，向左右与背后补全同一场景的连续空间。"
        "必须保留电影场景中的真实空间线索、角色朝向、光线来源和环境连续性，"
        "适合后续由用户自行框选物体来读取记忆。"
        "禁止输出宣传海报排版、标题字、边框、拼贴、多宫格或 UI 元素。"
    )


def _resolve_space_image_size(config, image_model: str) -> str:
    normalized_model = normalize_image_model(image_model)
    if normalized_model == "gpt-image-2":
        return str(config.get("GPT_IMAGE2_SPACE_SIZE") or "1792x1024").strip()
    return str(config.get("WAN_IMAGE_PANORAMA_SIZE") or "2048*1024").strip()


def _build_default_hotspots() -> List[Dict[str, object]]:
    return []


def _infer_object_name(selection: dict) -> str:
    center_x = selection["x"] + selection["width"] / 2
    center_y = selection["y"] + selection["height"] / 2
    if selection["width"] >= 0.34 or selection["height"] >= 0.34:
        return "场景主体区域"
    if center_y < 0.3:
        return "顶部结构 / 光源线索"
    if center_y > 0.72:
        return "地面层级 / 下方痕迹"
    if center_x < 0.33:
        return "左侧环境物件"
    if center_x > 0.67:
        return "右侧环境物件"
    return "画面中心主体"


def _build_memory_fallback(scene: dict, selection: dict, seconds: float) -> dict:
    object_name = _infer_object_name(selection)
    related_characters = []
    focus = str(scene.get("character_focus") or "").strip()
    if focus:
        related_characters.append(focus)
    sender = str(scene.get("suggested_sender") or "").strip()
    if sender and sender not in related_characters:
        related_characters.append(sender)

    return {
        "object_name": object_name,
        "ai_reading": (
            f"{object_name} 在这一帧里不是单纯的布景，它更像一个把观众拉进当前情绪张力的入口。"
        ),
        "story_connection": (
            f"它和“{scene.get('scene_summary', '')}”直接相连，说明这个空间细节正在承接当前剧情压力。"
        ),
        "related_characters": related_characters or ["当前关键人物"],
        "related_moment": f"对应视频时间：{seconds:.2f} 秒。{scene.get('reply_anchor', '')}",
        "director_value": (
            f"如果你把镜头重新导向这个区域，可以进一步强调“{scene.get('emotion_tension', '')}”，"
            "并把观众的注意力从单纯看剧情推进，转成主动解读空间线索。"
        ),
        "memory_text": (
            f"{_selection_note(selection)} 这片区域最适合被当作导演线索，因为它能把当前场景里的"
            f"“{scene.get('relationship_tension', '')}”转成更明确的视觉证据。"
        ),
    }


def _generate_memory_live(config, reference_image: str, selection: dict, scene: dict, anchor_context: str = "") -> dict:
    anchor_prompt = (
        "\n以下是影片中已核实存在的潜在线索。请只把它们作为判断框选区域的剧情参考；"
        "如果框选区域明显对应其中某个物体，可以输出对应剧情关联；"
        "如果不对应，不要硬套，应该基于用户实际框选区域生成线索：\n"
        f"{anchor_context}"
        if anchor_context else ""
    )
    instruction = (
        "你是电影空间探索中的物体记忆解读器。"
        f"\n当前场景总结：{scene.get('scene_summary', '')}"
        f"\n人物焦点：{scene.get('character_focus', '')}"
        f"\n关系张力：{scene.get('relationship_tension', '')}"
        f"\n情绪张力：{scene.get('emotion_tension', '')}"
        f"\n{_selection_note(selection)}"
        f"{anchor_prompt}"
        "\n请把该区域理解成一个可供导演调用的物体线索。"
        "\n所有字段必须使用简体中文输出。"
        "\n如果画面里的原始文字是英文，也请先用中文概括，不要大段保留英文原文。"
        "\n只输出严格 JSON，字段固定为："
        '{"object_name":"","ai_reading":"","story_connection":"","related_characters":[],"related_moment":"","director_value":"","memory_text":""}'
    )
    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_VISION_MODEL"],
        messages=[
            {
                "role": "system",
                "content": "你是严格 JSON 输出助手，且只能使用简体中文回答。",
            },
            {
                "role": "user",
                "content": [
                    {"type": "image_url", "image_url": {"url": reference_image}},
                    {"type": "text", "text": instruction},
                ],
            }
        ],
        timeout=120,
    )
    raw_text = _extract_message_text(completion.choices[0].message.content)
    parsed = _parse_json(
        raw_text,
        {
            "object_name": "",
            "ai_reading": "",
            "story_connection": "",
            "related_characters": [],
            "related_moment": "",
            "director_value": "",
            "memory_text": "",
        },
    )
    related_characters = parsed.get("related_characters")
    if not isinstance(related_characters, list):
        parsed["related_characters"] = []
    if _memory_payload_needs_chinese_rewrite(parsed):
        parsed = _rewrite_memory_payload_in_chinese(config, parsed)
    return parsed


def _contains_cjk(text: str) -> bool:
    return bool(re.search(r"[\u4e00-\u9fff]", text or ""))


def _memory_payload_needs_chinese_rewrite(memory: dict) -> bool:
    chunks = []
    for key in (
        "object_name",
        "ai_reading",
        "story_connection",
        "related_moment",
        "director_value",
        "memory_text",
    ):
        chunks.append(str(memory.get(key) or "").strip())
    related_characters = memory.get("related_characters")
    if isinstance(related_characters, list):
        chunks.extend(str(item or "").strip() for item in related_characters)
    joined = "\n".join(item for item in chunks if item)
    return bool(re.search(r"[A-Za-z]", joined)) and not _contains_cjk(joined)


def _rewrite_memory_payload_in_chinese(config, memory: dict) -> dict:
    instruction = (
        "请把下面这份物体记忆 JSON 改写成自然、准确、简洁的简体中文版本。"
        "保持字段结构不变，只改写字段内容。"
        "只输出严格 JSON。"
    )
    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_TEXT_MODEL"],
        messages=[
            {
                "role": "system",
                "content": "你是严格 JSON 输出助手，且只能使用简体中文回答。",
            },
            {
                "role": "user",
                "content": instruction + "\n\n" + json.dumps(memory, ensure_ascii=False),
            },
        ],
        timeout=90,
    )
    raw_text = _extract_message_text(completion.choices[0].message.content)
    rewritten = _parse_json(
        raw_text,
        {
            "object_name": str(memory.get("object_name") or ""),
            "ai_reading": str(memory.get("ai_reading") or ""),
            "story_connection": str(memory.get("story_connection") or ""),
            "related_characters": memory.get("related_characters") or [],
            "related_moment": str(memory.get("related_moment") or ""),
            "director_value": str(memory.get("director_value") or ""),
            "memory_text": str(memory.get("memory_text") or ""),
        },
    )
    if not isinstance(rewritten.get("related_characters"), list):
        rewritten["related_characters"] = memory.get("related_characters") or []
    return rewritten


def build_world_fate_space_response(
    config,
    movie_id: str,
    seconds: float,
    image_model: str = "wan2.7",
) -> dict:
    debug_steps = []
    movie_key, frame_url = _load_world_fate_reference(config, movie_id, seconds)
    anchor_context = get_world_fate_anchor_context(movie_key)

    scene = build_world_fate_fallback_scene(movie_key, seconds)
    space_image_url = frame_url
    mode = "local_fallback"
    normalized_image_model = normalize_image_model(image_model)
    has_selected_image_provider = (
        (normalized_image_model == "gpt-image-2" and bool(config.get("FOURZAPI_API_KEY")))
        or (normalized_image_model == "wan2.7" and bool(config.get("DASHSCOPE_API_KEY")))
    )

    if config.get("DASHSCOPE_API_KEY"):
        try:
            scene = _analyze_world_fate_reference(config, movie_key, frame_url, seconds, debug_steps)
            image_payload = generate_image_with_selected_model(
                config=config,
                prompt=_build_space_prompt(scene, anchor_context),
                image_model=normalized_image_model,
                debug_steps=debug_steps,
                reference_images=[frame_url],
                size_override=_resolve_space_image_size(config, image_model),
                download_result=True,
            )
            if image_payload.get("image_url"):
                space_image_url = image_payload["image_url"]
                mode = "live_ai"
        except Exception as exc:
            log_debug(debug_steps, "world_fate.space.ai.failed", error=str(exc))
            raise ProviderRequestError(f"AI provider request failed: {exc}")

    elif has_selected_image_provider:
        try:
            image_payload = generate_image_with_selected_model(
                config=config,
                prompt=_build_space_prompt(scene, anchor_context),
                image_model=normalized_image_model,
                debug_steps=debug_steps,
                reference_images=[frame_url],
                size_override=_resolve_space_image_size(config, image_model),
                download_result=True,
            )
            if image_payload.get("image_url"):
                space_image_url = image_payload["image_url"]
                mode = "live_image_direct"
        except Exception as exc:
            log_debug(debug_steps, "world_fate.space.image.failed", image_model=normalized_image_model, error=str(exc))
            raise ProviderRequestError(f"{normalized_image_model} request failed: {exc}") from exc

    else:
        if normalized_image_model == "gpt-image-2":
            raise ProviderRequestError("FOURZAPI_API_KEY is not configured, so gpt-image-2 cannot generate space images.")
        raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so wan2.7 cannot generate space images.")

    return {
        "status": "ok",
        "movie_id": movie_key,
        "mode": mode,
        "frame_image_url": frame_url,
        "space_image_url": space_image_url,
        "scene": scene,
        "hotspots": get_world_fate_default_hotspots(movie_key),
        "space_note": (
            "当前空间图已经就绪。拖动画面浏览，在选择模式下框选物体。"
            if mode == "live_ai"
            else "当前先以参考关键帧作为探索底图，链路已经打通。后续可直接上传你的全景图替换，并自行框选物体。"
        ),
        "debug_steps": debug_steps,
    }


def build_world_fate_memory_response(
    config,
    movie_id: str,
    seconds: float,
    selection,
    space_image_url: str = "",
    scene_summary: str = "",
) -> dict:
    debug_steps = []
    movie_key = _normalize_movie_id(movie_id)
    anchor_context = get_world_fate_anchor_context(movie_key)
    normalized_selection = _normalize_selection(selection)
    hotspot_id = ""
    if isinstance(selection, dict):
        hotspot_id = str(selection.get("hotspot_id") or "").strip()
    _, frame_url = _load_world_fate_reference(config, movie_id, seconds)
    reference_image = str(space_image_url or frame_url).strip()

    scene = build_world_fate_fallback_scene(movie_key, seconds)
    if scene_summary:
        scene["scene_summary"] = str(scene_summary).strip()

    curated_memory = get_world_fate_curated_memory(movie_key, hotspot_id)
    memory = curated_memory or _build_memory_fallback(scene, normalized_selection, seconds)
    mode = "curated_demo" if curated_memory else "local_fallback"

    if not curated_memory and config.get("DASHSCOPE_API_KEY"):
        try:
            scene = _analyze_world_fate_reference(config, movie_key, frame_url, seconds, debug_steps)
            if scene_summary:
                scene["scene_summary"] = str(scene_summary).strip()
            memory = _generate_memory_live(config, reference_image, normalized_selection, scene, anchor_context)
            mode = "live_ai"
        except Exception as exc:
            log_debug(debug_steps, "world_fate.memory.ai.failed", error=str(exc))
            raise ProviderRequestError(f"AI provider request failed: {exc}")
    elif not curated_memory:
        raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so AI object memory cannot run.")

    return {
        "status": "ok",
        "movie_id": movie_key,
        "mode": mode,
        "selection": normalized_selection,
        "scene": scene,
        "memory": memory,
        "debug_steps": debug_steps,
    }
