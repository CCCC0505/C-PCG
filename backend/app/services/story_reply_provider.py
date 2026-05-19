import json
import re

from .debug_utils import log_debug
from .image_generation_provider import generate_image_with_selected_model, normalize_image_model


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
        normalized[key] = str(value).strip() if isinstance(value, str) else value
    return normalized


def _build_focus_box_note(focus_box) -> str:
    if not focus_box:
        return "未提供框选区域，默认参考整帧构图。"
    return (
        "用户已框选重点区域："
        f"距左 {round(focus_box['x'] * 100)}%，"
        f"距上 {round(focus_box['y'] * 100)}%，"
        f"宽 {round(focus_box['width'] * 100)}%，"
        f"高 {round(focus_box['height'] * 100)}%。"
        "生成海报时请优先保留该区域主体与构图。"
    )


def build_direct_poster_image_prompt(scene: dict, poster_prompt: str, focus_box) -> str:
    focus_box_note = _build_focus_box_note(focus_box)
    user_prompt = str(poster_prompt or "").strip()
    return (
        "生成一张正式电影海报，画面来自 F1 电影世界。"
        "必须保持电影海报质感，强调真实摄影、强叙事张力、主视觉清晰、标题留白和高级调色。"
        "不要生成动漫、超级英雄、科幻机甲、无关 IP、无关角色或赛事外世界观。"
        f"\n当前时间点：{scene.get('story_beat', '')}"
        f"\n当前画面理解：{scene.get('scene_summary', '')}"
        f"\n主体与构图要求：{focus_box_note}"
        f"\n用户补充提示：{user_prompt or '保留当前暂停帧的叙事张力，围绕框选主体生成正式电影海报。'}"
    )


def generate_direct_poster_reply(
    config,
    scene: dict,
    reply_type: str,
    image_model: str,
    reply_type_meta: dict,
    guardrails: str,
    poster_prompt: str,
    focus_box,
    debug_steps: list,
    reference_image: str = "",
) -> dict:
    image_prompt = build_direct_poster_image_prompt(scene, poster_prompt, focus_box)
    image_generation = generate_image_with_selected_model(
        config=config,
        prompt=image_prompt,
        image_model=normalize_image_model(image_model),
        debug_steps=debug_steps,
        reference_images=[reference_image] if reference_image else None,
    )
    return {
        "scene": scene,
        "reply": {
            "type": reply_type,
            "label": reply_type_meta["label"],
            "title": "海报生成结果",
            "sender": "AI 海报生成器",
            "message": "已使用 " + normalize_image_model(image_model) + " 根据当前提示词生成海报图像。",
            "supporting_text": "该链路直接调用图片模型；如果你同时配置 DashScope，系统会先做当前帧视觉理解，再把分析结果交给图片模型。",
            "image_prompt": image_prompt,
            "image_url": image_generation["image_url"],
            "image_status": image_generation["image_status"],
            "image_model": normalize_image_model(image_model),
            "image_error": "",
            "guardrails": guardrails,
        },
        "mode": "live_image_direct",
    }


def _make_qwen_client(config):
    from openai import OpenAI

    return OpenAI(
        api_key=config["DASHSCOPE_API_KEY"],
        base_url=config["DASHSCOPE_BASE_URL"],
    )


def analyze_story_frame(config, reference_image: str, seconds: float, debug_steps: list) -> dict:
    instruction = (
        "你是 F1 电影专用的剧情理解器。"
        "只允许围绕 Sonny Hayes、Joshua Pearce、Ruben Cervantes、Kate、APXGP 车队、"
        "维修区、赛道、发布会、训练和比赛来理解画面。"
        "不要引入其他电影、动漫、科幻设定、超级英雄或无关角色。"
        f"\n当前视频时间点大约为 {seconds:.2f} 秒。"
        "\n请输出严格 JSON，字段固定为："
        '{"story_beat":"","scene_summary":"","character_focus":"","relationship_tension":"","emotion_tension":"","reply_anchor":"","suggested_sender":""}'
    )
    log_debug(debug_steps, "story.ai.scene.start", model=config["QWEN_VISION_MODEL"])
    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_VISION_MODEL"],
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "image_url", "image_url": {"url": reference_image}},
                    {"type": "text", "text": instruction},
                ],
            }
        ],
        timeout=90,
    )
    raw_text = _extract_message_text(completion.choices[0].message.content)
    log_debug(debug_steps, "story.ai.scene.success")
    return _parse_json(
        raw_text,
        {
            "story_beat": "",
            "scene_summary": "",
            "character_focus": "",
            "relationship_tension": "",
            "emotion_tension": "",
            "reply_anchor": "",
            "suggested_sender": "剧情世界",
        },
    )


def generate_story_reply(
    config,
    reference_image: str,
    scene: dict,
    reply_type_meta: dict,
    guardrails: str,
    poster_prompt: str,
    focus_box,
    debug_steps: list,
) -> dict:
    focus_box_note = _build_focus_box_note(focus_box)
    instruction = (
        "你是 F1 电影专用的海报生成器。"
        f"\n输出类型：{reply_type_meta['label']}。"
        f"\n限制规则：{guardrails}"
        f"\n当前场景总结：{scene.get('scene_summary', '')}"
        f"\n人物关系：{scene.get('relationship_tension', '')}"
        f"\n情绪张力：{scene.get('emotion_tension', '')}"
        f"\n回复锚点：{scene.get('reply_anchor', '')}"
        f"\n建议发信人：{scene.get('suggested_sender', '')}"
        f"\n框选区域：{focus_box_note}"
        f"\n海报提示词：{poster_prompt or '未额外补充，默认按当前画面生成海报。'}"
        "\n请输出严格 JSON，不要使用 Markdown。字段固定为："
        '{"title":"","sender":"","message":"","supporting_text":"","image_prompt":""}'
    )
    log_debug(debug_steps, "story.ai.reply.start", model=config["QWEN_VISION_MODEL"], reply_type=reply_type_meta["label"])
    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_VISION_MODEL"],
        messages=[
            {
                "role": "user",
                "content": [
                    {"type": "image_url", "image_url": {"url": reference_image}},
                    {"type": "text", "text": instruction},
                ],
            }
        ],
        timeout=90,
    )
    raw_text = _extract_message_text(completion.choices[0].message.content)
    log_debug(debug_steps, "story.ai.reply.success", reply_type=reply_type_meta["label"])
    return _parse_json(
        raw_text,
        {
            "title": "",
            "sender": scene.get("suggested_sender", "剧情世界"),
            "message": "",
            "supporting_text": "",
            "image_prompt": "",
        },
    )

def try_generate_live_story_reply(
    config,
    reference_image: str,
    seconds: float,
    reply_type: str,
    image_model: str,
    reply_type_meta: dict,
    guardrails: str,
    poster_prompt: str,
    focus_box,
    debug_steps: list,
) -> dict:
    scene = analyze_story_frame(config, reference_image, seconds, debug_steps)
    reply = generate_story_reply(
        config=config,
        reference_image=reference_image,
        scene=scene,
        reply_type_meta=reply_type_meta,
        guardrails=guardrails,
        poster_prompt=poster_prompt,
        focus_box=focus_box,
        debug_steps=debug_steps,
    )

    image_url = ""
    image_status = "not_applicable"
    image_error = ""
    if reply_type_meta["kind"] == "image" and reply.get("image_prompt"):
        image_generation = generate_image_with_selected_model(
            config=config,
            prompt=reply["image_prompt"],
            image_model=normalize_image_model(image_model),
            debug_steps=debug_steps,
        )
        image_url = image_generation["image_url"]
        image_status = image_generation["image_status"]

    return {
        "scene": scene,
        "reply": {
            "type": reply_type,
            "label": reply_type_meta["label"],
            "title": reply.get("title") or f"来自剧情世界的{reply_type_meta['label']}回信",
            "sender": reply.get("sender") or scene.get("suggested_sender", "剧情世界"),
            "message": reply.get("message") or "",
            "supporting_text": reply.get("supporting_text") or "",
            "image_prompt": reply.get("image_prompt") or "",
            "image_url": image_url,
            "image_status": image_status,
            "image_model": normalize_image_model(image_model),
            "image_error": image_error,
            "guardrails": guardrails,
        },
        "mode": "live_ai",
    }
