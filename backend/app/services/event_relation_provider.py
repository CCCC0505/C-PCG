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
        normalized[key] = payload.get(key, fallback)
    return normalized


def _make_qwen_client(config):
    from openai import OpenAI

    return OpenAI(
        api_key=config["DASHSCOPE_API_KEY"],
        base_url=config["DASHSCOPE_BASE_URL"],
    )


def generate_event_options_live(
    config,
    reference_image: str,
    movie_profile: dict,
    seconds: float,
    main_plot_lock: str,
    fallback_scene: dict,
    fallback_events: list,
    debug_steps: list,
) -> dict:
    instruction = (
        f"你是“{movie_profile['movie_label']}”的 AI 事件导演。"
        "\n你的任务不是复述原剧情，而是基于当前帧生成 3 个用户可选择的“可插入小事件”。"
        "\n这些事件必须发生在当前画面附近，事件本身不能推翻主线，只能改变角色关系，并在后续相关镜头里产生微小变化。"
        f"\n当前时间：{seconds:.2f} 秒。"
        f"\n主线锁定：{main_plot_lock or movie_profile['main_plot']}"
        "\n事件要求："
        "\n1. 只生成 3 个事件。"
        "\n2. 每个事件必须是小事件，例如被看到、被误会、短暂掩护、设备异常、眼神暴露。"
        "\n3. 每个事件必须包含 participants、event_type、risk、relationship_preview、future_scope。"
        "\n4. 输出 scene 时要说明当前帧、人物关系、主线约束、以及“用户选择后才写入事件系统”。"
        "\n5. 只输出严格 JSON，不要 Markdown。格式固定："
        '{"scene":{"scene_summary":"","character_focus":"","relationship_context":"","main_plot":"","insert_event_rule":""},"events":[{"event_id":"","source":"ai_generated_user_choice","title":"","description":"","participants":[],"event_type":"","risk":0.5,"relationship_preview":"","future_scope":""}]}'
    )

    log_debug(debug_steps, "event_relation.ai.options.start", model=config["QWEN_VISION_MODEL"])
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
    parsed = _parse_json(raw_text, {"scene": fallback_scene, "events": fallback_events})
    log_debug(debug_steps, "event_relation.ai.options.success")
    return parsed


def generate_relation_events_live(
    config,
    movie_profile: dict,
    seconds: float,
    scene: dict,
    relation: dict,
    relation_state: str,
    main_plot_lock: str,
    debug_steps: list,
) -> dict:
    selected_relation = (
        f"{relation.get('from', '主角')} -> {relation.get('to', '短线角色')}"
        f" / 当前状态：{relation_state or relation.get('state', '待判断')}"
    )
    instruction = (
        f"你是“{movie_profile['movie_label']}”的 AI 关系事件编排器。"
        "\n你的任务是基于用户刚选中的一条人物关系边，生成 2-3 个可以悬浮在视频画面上的事件选项。"
        "\n这些事件不是本地预设，必须结合当前关系状态、当前帧语义和主线锁定来生成。"
        f"\n当前时间：{seconds:.2f} 秒。"
        f"\n当前场景：{scene.get('scene_summary') or movie_profile['scene_summary']}"
        f"\n人物焦点：{scene.get('character_focus') or movie_profile['character_focus']}"
        f"\n关系上下文：{scene.get('relationship_context') or movie_profile['relationship_context']}"
        f"\n用户选中的关系边：{selected_relation}"
        f"\n主线锁定：{main_plot_lock or scene.get('main_plot') or movie_profile['main_plot']}"
        "\n生成规则："
        "\n1. 只生成 2-3 个小事件，必须围绕这条关系边，不要生成无关角色的大分支。"
        "\n2. 每个事件都要能解释“触发了什么局部表现”以及“阻断了哪些会推翻主线的改写”。"
        "\n3. 事件只影响后续相关角色镜头中的眼神、停顿、站位、让路、回避或一句短台词。"
        "\n4. relationship_preview 必须写成“当前状态 -> 新状态”。"
        "\n5. risk 必须是 0 到 1 的数字。"
        "\n6. 只输出严格 JSON，不要 Markdown。格式固定："
        '{"events":[{"event_id":"","source":"ai_relation_event","title":"","description":"","participants":[],"event_type":"","risk":0.5,"relationship_preview":"","future_scope":"","trigger_rule":"","blocked_change":""}]}'
    )

    log_debug(debug_steps, "event_relation.ai.relation_events.start", model=config["QWEN_TEXT_MODEL"])
    completion = _make_qwen_client(config).chat.completions.create(
        model=config["QWEN_TEXT_MODEL"],
        messages=[
            {
                "role": "user",
                "content": instruction,
            }
        ],
        timeout=90,
    )
    raw_text = _extract_message_text(completion.choices[0].message.content)
    parsed = _parse_json(raw_text, {"events": []})
    log_debug(debug_steps, "event_relation.ai.relation_events.success")
    return parsed
