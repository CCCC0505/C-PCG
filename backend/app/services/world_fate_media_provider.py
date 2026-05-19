import json
import re
from urllib import request

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
        normalized[key] = payload.get(key, fallback)
    return normalized


def _truncate_text(value, limit: int = 700) -> str:
    text = str(value or "").strip()
    if len(text) <= limit:
        return text
    return text[:limit].rstrip() + "..."


def _compact_node_for_planning(node: dict) -> dict:
    return {
        "id": str(node.get("id") or "").strip(),
        "order": node.get("order"),
        "title": _truncate_text(node.get("title"), 120),
        "story_description": _truncate_text(node.get("story_description"), 600),
        "story_note": _truncate_text(node.get("story_note"), 320),
        "seed_key": _truncate_text(node.get("seed_key"), 80),
        "frame_start_hint": _truncate_text(node.get("frame_start_hint"), 420),
        "frame_end_hint": _truncate_text(node.get("frame_end_hint"), 420),
        "frame_logic_reason": _truncate_text(node.get("frame_logic_reason"), 320),
        "has_frame_start": bool(str(node.get("frame_start_url") or "").strip()),
        "has_frame_end": bool(str(node.get("frame_end_url") or "").strip()),
        "has_video": bool(str(node.get("video_url") or "").strip() or str(node.get("video_task_id") or "").strip()),
    }


def _make_qwen_client(config):
    from openai import OpenAI

    return OpenAI(
        api_key=config["DASHSCOPE_API_KEY"],
        base_url=config["DASHSCOPE_BASE_URL"],
    )


def plan_world_fate_frames(config, world_context: dict, modification_text: str, nodes: list, guardrails: str, debug_steps: list) -> dict:
    planning_nodes = [_compact_node_for_planning(node) for node in nodes]
    instruction = (
        f"你是 {world_context['movie_label']} 专用的首尾帧规划器。"
        f"\n限制规则：{guardrails}"
        f"\n当前世界观：{world_context['title']}"
        f"\n世界规则：{world_context['rule']}"
        f"\n用户的剧情修改要求：{modification_text}"
        "\n针对每个剧情节点，请输出用于首帧和尾帧重构的中文提示词。"
        "\n要求："
        "\n1. 首帧与尾帧都必须紧扣该节点剧情，不得跳出 F1 电影世界。"
        "\n2. 提示词要明确人物、地点、镜头、情绪和动作。"
        "\n3. 每个节点输出：id、frame_start_prompt、frame_end_prompt、frame_logic_reason。"
        "\n只输出严格 JSON："
        '{"nodes":[{"id":"","frame_start_prompt":"","frame_end_prompt":"","frame_logic_reason":""}]}'
    )
    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_TEXT_MODEL"],
        messages=[
            {
                "role": "system",
                "content": "You are a structured JSON-only assistant for movie frame planning.",
            },
            {
                "role": "user",
                "content": instruction + "\n\n节点上下文如下，不包含图片 URL：\n" + json.dumps({"nodes": planning_nodes}, ensure_ascii=False),
            },
        ],
        timeout=120,
    )
    raw_text = _extract_message_text(completion.choices[0].message.content)
    return _parse_json(raw_text, {"nodes": []})


def _count_pending_frame_assets(nodes: list) -> int:
    pending = 0
    for node in nodes:
        if not str(node.get("frame_start_url") or "").strip():
            pending += 1
        if not str(node.get("frame_end_url") or "").strip():
            pending += 1
    return pending


def generate_world_fate_frames_live(config, world_context: dict, modification_text: str, nodes: list, image_model: str, guardrails: str, debug_steps: list) -> dict:
    pending_nodes = [
        node for node in nodes
        if not str(node.get("frame_start_url") or "").strip() or not str(node.get("frame_end_url") or "").strip()
    ]
    total_asset_count = _count_pending_frame_assets(nodes)
    if not pending_nodes:
        return {
            "change_summary": f"“{world_context['title']}”的首尾帧已经全部生成完毕。",
            "nodes": [],
            "processed_asset_count": 0,
            "remaining_asset_count": 0,
            "total_asset_count": 0,
        }

    log_debug(debug_steps, "world_fate.ai.frames.start", world_id=world_context["id"], model=config["QWEN_TEXT_MODEL"])
    plan = plan_world_fate_frames(
        config=config,
        world_context=world_context,
        modification_text=modification_text,
        nodes=pending_nodes,
        guardrails=guardrails,
        debug_steps=debug_steps,
    )
    normalized_image_model = normalize_image_model(image_model)
    batch_budget = max(1, int(config.get("WORLD_FATE_FRAME_BATCH_SIZE", 3)))
    processed_asset_count = 0
    normalized = []
    for node in nodes:
      match = next((item for item in plan.get("nodes", []) if str(item.get("id")) == node["id"]), None)
      start_prompt = str(match.get("frame_start_prompt") or node.get("frame_start_hint") or "").strip() if match else str(node.get("frame_start_hint") or "").strip()
      end_prompt = str(match.get("frame_end_prompt") or node.get("frame_end_hint") or "").strip() if match else str(node.get("frame_end_hint") or "").strip()
      frame_start_url = str(node.get("frame_start_url") or "").strip()
      frame_end_url = str(node.get("frame_end_url") or "").strip()
      if not frame_start_url and start_prompt and batch_budget > 0:
          frame_start_url = generate_image_with_selected_model(config, start_prompt, normalized_image_model, debug_steps)["image_url"]
          batch_budget -= 1
          processed_asset_count += 1
      if not frame_end_url and end_prompt and batch_budget > 0:
          frame_end_url = generate_image_with_selected_model(config, end_prompt, normalized_image_model, debug_steps)["image_url"]
          batch_budget -= 1
          processed_asset_count += 1
      normalized.append(
          {
              "id": node["id"],
              "frame_start_hint": start_prompt or "首帧方案待补充",
              "frame_end_hint": end_prompt or "尾帧方案待补充",
              "frame_start_url": frame_start_url,
              "frame_end_url": frame_end_url,
              "frame_logic_reason": str(match.get("frame_logic_reason") or node.get("frame_logic_reason") or "").strip() if match else str(node.get("frame_logic_reason") or "").strip(),
          }
      )
    remaining_asset_count = _count_pending_frame_assets(normalized)
    return {
        "change_summary": f"已基于“{world_context['title']}”分批生成首尾帧方案。",
        "nodes": normalized,
        "processed_asset_count": processed_asset_count,
        "remaining_asset_count": remaining_asset_count,
        "total_asset_count": total_asset_count,
    }


def plan_world_fate_video(config, world_context: dict, modification_text: str, nodes: list, guardrails: str, debug_steps: list) -> dict:
    planning_nodes = [_compact_node_for_planning(node) for node in nodes]
    instruction = (
        f"你是 {world_context['movie_label']} 专用的视频再创作提示词规划器。"
        f"\n限制规则：{guardrails}"
        f"\n当前世界观：{world_context['title']}"
        f"\n世界规则：{world_context['rule']}"
        f"\n用户的剧情修改要求：{modification_text}"
        "\n请根据每个节点剧情和对应首尾帧，为首尾帧视频生成输出中文提示词。"
        "\n每个节点输出：id、video_prompt、video_note。"
        '\n只输出严格 JSON：{"nodes":[{"id":"","video_prompt":"","video_note":""}]}'
    )
    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_TEXT_MODEL"],
        messages=[
            {
                "role": "system",
                "content": "You are a structured JSON-only assistant for movie keyframe-to-video planning.",
            },
            {
                "role": "user",
                "content": instruction + "\n\n节点上下文如下，不包含首尾帧 URL 或 base64：\n" + json.dumps({"nodes": planning_nodes}, ensure_ascii=False),
            },
        ],
        timeout=120,
    )
    raw_text = _extract_message_text(completion.choices[0].message.content)
    return _parse_json(raw_text, {"nodes": []})


def _count_pending_videos(nodes: list) -> int:
    pending = 0
    for node in nodes:
        has_frames = bool(str(node.get("frame_start_url") or "").strip() and str(node.get("frame_end_url") or "").strip())
        has_video = bool(str(node.get("video_url") or "").strip() or str(node.get("video_task_id") or "").strip())
        if has_frames and not has_video:
            pending += 1
    return pending


def _submit_wan_keyframe_video(config, start_url: str, end_url: str, prompt: str, debug_steps: list) -> dict:
    if str(start_url or "").startswith("data:") or str(end_url or "").startswith("data:"):
        raise RuntimeError("当前视频生成只支持可直接访问的首尾帧链接。请先使用 wan2.7 生成首尾帧，再提交视频任务。")

    payload = {
        "model": config["WAN_VIDEO_MODEL"],
        "input": {
            "prompt": prompt,
            "media": [
                {"type": "first_frame", "url": start_url},
                {"type": "last_frame", "url": end_url},
            ],
        },
        "parameters": {
            "resolution": config["WAN_VIDEO_DEFAULT_RESOLUTION"],
            "duration": config["WAN_VIDEO_DEFAULT_DURATION"],
            "prompt_extend": config["WAN_VIDEO_PROMPT_EXTEND"],
            "watermark": config["WAN_VIDEO_WATERMARK"],
        },
    }
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    log_debug(debug_steps, "world_fate.ai.video.start", model=config["WAN_VIDEO_MODEL"])
    http_request = request.Request(
        config["WAN_VIDEO_URL"],
        data=body,
        headers={
            "Authorization": f"Bearer {config['DASHSCOPE_API_KEY']}",
            "Content-Type": "application/json",
            "X-DashScope-Async": "enable",
        },
        method="POST",
    )
    timeout_seconds = int(config.get("WAN_VIDEO_REQUEST_TIMEOUT", 180))
    with request.urlopen(http_request, timeout=timeout_seconds) as response:
        raw_body = response.read().decode("utf-8")
    payload = json.loads(raw_body)
    output = payload.get("output") or {}
    return {
        "video_url": str(output.get("video_url") or ""),
        "video_task_id": str(output.get("task_id") or ""),
        "video_status": str(output.get("task_status") or "submitted"),
    }


def generate_world_fate_videos_live(config, world_context: dict, modification_text: str, nodes: list, guardrails: str, debug_steps: list) -> dict:
    eligible_nodes = [
        node for node in nodes
        if str(node.get("frame_start_url") or "").strip()
        and str(node.get("frame_end_url") or "").strip()
        and not str(node.get("video_url") or "").strip()
        and not str(node.get("video_task_id") or "").strip()
    ]
    total_video_count = _count_pending_videos(nodes)
    if not eligible_nodes:
        return {
            "change_summary": f"“{world_context['title']}”当前没有待提交的视频节点。",
            "nodes": [],
            "processed_video_count": 0,
            "remaining_video_count": 0,
            "total_video_count": total_video_count,
        }

    log_debug(debug_steps, "world_fate.ai.video_plan.start", world_id=world_context["id"], model=config["QWEN_TEXT_MODEL"])
    plan = plan_world_fate_video(
        config=config,
        world_context=world_context,
        modification_text=modification_text,
        nodes=eligible_nodes,
        guardrails=guardrails,
        debug_steps=debug_steps,
    )
    batch_budget = max(1, int(config.get("WORLD_FATE_VIDEO_BATCH_SIZE", 1)))
    processed_video_count = 0
    normalized = []
    for node in nodes:
        match = next((item for item in plan.get("nodes", []) if str(item.get("id")) == node["id"]), None)
        video_prompt = _truncate_text(match.get("video_prompt"), 1200) if match else ""
        has_frames = bool(str(node.get("frame_start_url") or "").strip() and str(node.get("frame_end_url") or "").strip())
        has_video = bool(str(node.get("video_url") or "").strip() or str(node.get("video_task_id") or "").strip())
        video_submission = {
            "video_url": str(node.get("video_url") or ""),
            "video_task_id": str(node.get("video_task_id") or ""),
            "video_status": str(node.get("video_status") or ""),
        }
        if (
            match and video_prompt and has_frames and not has_video and batch_budget > 0
        ):
            video_submission = _submit_wan_keyframe_video(
                config,
                node["frame_start_url"],
                node["frame_end_url"],
                video_prompt,
                debug_steps,
            )
            batch_budget -= 1
            processed_video_count += 1
        normalized.append(
            {
                "id": node["id"],
                "video_url": video_submission["video_url"],
                "video_task_id": video_submission["video_task_id"],
                "video_status": video_submission["video_status"],
                "video_note": (
                    str(match.get("video_note") or "已提交视频再创作任务。").strip()
                    if match else str(node.get("video_note") or "").strip()
                ),
                "clip_hint": (
                    "视频生成中，等待万相结果回填。"
                    if video_submission["video_task_id"]
                    else (str(node.get("clip_hint") or "视频待补充").strip() if has_frames else "视频待补充")
                ),
            }
        )
    remaining_video_count = _count_pending_videos(normalized)
    return {
        "change_summary": f"已基于“{world_context['title']}”分批提交首尾帧视频再创作任务。",
        "nodes": normalized,
        "processed_video_count": processed_video_count,
        "remaining_video_count": remaining_video_count,
        "total_video_count": total_video_count,
    }
