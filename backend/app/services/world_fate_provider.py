import json
import re

from .debug_utils import log_debug


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


def synchronize_world_fate_nodes(
    config,
    world_context: dict,
    modification_text: str,
    baseline_nodes: list,
    current_nodes: list,
    guardrails: str,
    debug_steps: list,
) -> dict:
    instruction = (
        f"你是 {world_context['movie_label']} 专用的世界命运调节器。"
        f"\n限制规则：{guardrails}"
        f"\n当前世界观：{world_context['title']}"
        f"\n世界规则：{world_context['rule']}"
        f"\n用户的剧情修改要求：{modification_text}"
        "\n你会收到原始剧情节点和当前节点顺序，请你按因果逻辑同步修改全部节点。"
        "\n要求："
        "\n1. 只允许在 F1 电影世界内部修改，不能引入无关 IP。"
        "\n2. 所有节点必须前后衔接，后一个节点要承接前一个节点的变化结果。"
        "\n3. 允许改变冲突方向、角色选择与节奏，但不能无因果跳变。"
        "\n4. 不要返回图片或视频内容，只返回文本化的同步结果。"
        "\n5. 每个节点必须输出：id、title、story_description、logic_reason、frame_start_hint、frame_end_hint、clip_hint。"
        "\n只输出严格 JSON，格式固定为："
        '{"change_summary":"","nodes":[{"id":"","title":"","story_description":"","logic_reason":"","frame_start_hint":"","frame_end_hint":"","clip_hint":""}]}'
    )

    node_payload = {
        "baseline_nodes": baseline_nodes,
        "current_nodes": current_nodes,
    }

    log_debug(
        debug_steps,
        "world_fate.ai.sync.start",
        model=config["QWEN_TEXT_MODEL"],
        world_id=world_context["id"],
    )

    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_TEXT_MODEL"],
        messages=[
            {
                "role": "system",
                "content": "You are a structured JSON-only assistant for movie world fate editing.",
            },
            {
                "role": "user",
                "content": (
                    instruction +
                    "\n\n节点上下文如下：\n" +
                    json.dumps(node_payload, ensure_ascii=False)
                ),
            },
        ],
        timeout=120,
    )

    raw_text = _extract_message_text(completion.choices[0].message.content)
    parsed = _parse_json(
        raw_text,
        {
            "change_summary": "",
            "nodes": [],
        },
    )
    log_debug(debug_steps, "world_fate.ai.sync.success", world_id=world_context["id"])
    return parsed
