from urllib.parse import quote


REPLY_TYPE_LIBRARY = {
    "poster": {
        "label": "海报",
        "kind": "image",
        "accent": "#ff7a2f",
    },
    "private_message": {
        "label": "角色私信",
        "kind": "message",
        "accent": "#6fc2ff",
    },
    "future_scene": {
        "label": "未来场景图",
        "kind": "image",
        "accent": "#4ac08c",
    },
    "parallel_timeline": {
        "label": "平行时空图",
        "kind": "image",
        "accent": "#f1c15a",
    },
}

F1_WORLD_SCOPE = (
    "只允许围绕 F1 电影世界观输出内容，只能使用 Sonny Hayes、Joshua Pearce、"
    "Ruben Cervantes、Kate、APXGP 车队、F1 围场、维修区、赛道、发布会、"
    "训练与比赛这些元素；不要引入其他电影、动漫、超级英雄、科幻宇宙或无关 IP。"
)

F1_STORY_BEATS = [
    {
        "id": "launch",
        "start": 0,
        "end": 18,
        "label": "围场预热",
        "scene_summary": "画面处在预告片的开场动员段，重点是围场秩序、赛事声量和“即将出击”的压迫感。",
        "character_focus": "人物身份还没有完全展开，但 APXGP 所在的赛车世界已经被强势建立。",
        "relationship_tension": "关系张力更偏向“集体备战”与“外界注视”，人物之间的直接冲突尚在蓄势。",
        "emotion_tension": "情绪张力是克制中的高压，像比赛倒计时前最后一口气。",
        "reply_anchor": "把当前这一帧当作正式冲线前的世界定场。",
        "suggested_sender": "Ruben Cervantes",
    },
    {
        "id": "return",
        "start": 18,
        "end": 45,
        "label": "老将回场",
        "scene_summary": "影片正在强调 Sonny Hayes 被重新召回围场后的观望感，环境里带着旧传奇重返赛道的试探。",
        "character_focus": "核心人物是 Sonny Hayes，他在经验与质疑之间重新站回 F1 的正中央。",
        "relationship_tension": "人与车队、人与新规则之间都存在一道还没完全跨过去的信任缝隙。",
        "emotion_tension": "情绪像压着火的回归，不张扬，但每一句话都带着证明自己的重量。",
        "reply_anchor": "让回信围绕“是否还能再跑一次真正的 F1”展开。",
        "suggested_sender": "Sonny Hayes",
    },
    {
        "id": "team_pressure",
        "start": 45,
        "end": 78,
        "label": "车队磨合",
        "scene_summary": "镜头多半落在维修区、车队会议和赛道准备期，强调 APXGP 在时间与成绩上的双重压力。",
        "character_focus": "Sonny Hayes 与 Joshua Pearce 的并置关系正在被放大，老将与新秀同框但还不真正同步。",
        "relationship_tension": "两人的关系处在竞争与互相校准之间，既需要彼此，又不愿被对方定义。",
        "emotion_tension": "情绪是持续拉紧的，像维修区里所有人都知道时间快不够了。",
        "reply_anchor": "回信应强调“队内磨合、成绩压力、经验与锋芒相撞”。",
        "suggested_sender": "Kate",
    },
    {
        "id": "duel",
        "start": 78,
        "end": 104,
        "label": "高速对峙",
        "scene_summary": "预告片已进入赛道高速段，车手、赛车与镜头都在强调速度和极限对峙。",
        "character_focus": "Sonny Hayes 与 Joshua Pearce 的对照最明显，镜头像在比较两种驾驶气质。",
        "relationship_tension": "人物关系已经进入真正的对抗区，合作关系被成绩和自尊心持续挤压。",
        "emotion_tension": "情绪紧绷、危险感强，下一秒像随时会有人犯错或者做出超越常规的选择。",
        "reply_anchor": "把当前帧视作‘两位车手都在逼近极限’的证据。",
        "suggested_sender": "Joshua Pearce",
    },
    {
        "id": "all_in",
        "start": 104,
        "end": 129,
        "label": "孤注一掷",
        "scene_summary": "影片已经逼近预告尾声，画面在放大 APXGP 的终局压力和 Sonny 的最后一次豪赌。",
        "character_focus": "Sonny Hayes 的选择最关键，他不只是要赢比赛，更是在决定自己是否还能定义这段人生。",
        "relationship_tension": "个人执念与团队目标在这一段几乎重合，但代价也被推到最高。",
        "emotion_tension": "情绪处在临界点，悲壮、决绝、昂扬感同时存在。",
        "reply_anchor": "所有回信都可以围绕‘最后一次全押’来写。",
        "suggested_sender": "Sonny Hayes",
    },
]


def normalize_reply_type(value: str) -> str:
    candidate = str(value or "").strip()
    if candidate not in REPLY_TYPE_LIBRARY:
        raise ValueError("reply_type is not supported")
    return candidate


def get_reply_type_meta(reply_type: str) -> dict:
    return REPLY_TYPE_LIBRARY[reply_type]


def get_story_beat(seconds: float) -> dict:
    for beat in F1_STORY_BEATS:
        if beat["start"] <= seconds < beat["end"]:
            return beat
    return F1_STORY_BEATS[-1]


def build_fallback_scene_analysis(seconds: float) -> dict:
    beat = get_story_beat(seconds)
    return {
        "story_beat": beat["label"],
        "scene_summary": beat["scene_summary"],
        "character_focus": beat["character_focus"],
        "relationship_tension": beat["relationship_tension"],
        "emotion_tension": beat["emotion_tension"],
        "reply_anchor": beat["reply_anchor"],
        "suggested_sender": beat["suggested_sender"],
        "scope_notice": F1_WORLD_SCOPE,
    }


def build_guardrails_text(reply_type: str) -> str:
    reply_label = get_reply_type_meta(reply_type)["label"]
    return (
        f"{F1_WORLD_SCOPE} 当前输出类型限定为“{reply_label}”。"
        "如果内容与 F1 电影主线不相关，必须自动收束回 APXGP、围场、赛道、车队关系和角色命运。"
    )


def build_mock_image_data_url(title: str, subtitle: str, accent: str, badge: str) -> str:
    svg = f"""
<svg xmlns="http://www.w3.org/2000/svg" width="720" height="960" viewBox="0 0 720 960">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0b1017"/>
      <stop offset="55%" stop-color="#111926"/>
      <stop offset="100%" stop-color="#1d1110"/>
    </linearGradient>
    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="{accent}"/>
      <stop offset="100%" stop-color="#ffffff"/>
    </linearGradient>
  </defs>
  <rect width="720" height="960" rx="36" fill="url(#bg)"/>
  <circle cx="552" cy="188" r="188" fill="{accent}" opacity="0.12"/>
  <circle cx="136" cy="742" r="154" fill="#ffffff" opacity="0.06"/>
  <rect x="64" y="84" width="592" height="4" rx="2" fill="url(#line)"/>
  <text x="64" y="146" fill="#9da8b7" font-size="24" letter-spacing="6">FROM THE STORY WORLD</text>
  <text x="64" y="246" fill="#ffffff" font-size="68" font-weight="700">{title}</text>
  <text x="64" y="318" fill="#c8d1dc" font-size="28">{subtitle}</text>
  <rect x="64" y="646" width="592" height="188" rx="28" fill="#ffffff" opacity="0.05"/>
  <text x="96" y="710" fill="{accent}" font-size="26" letter-spacing="4">{badge}</text>
  <text x="96" y="772" fill="#ffffff" font-size="44" font-weight="700">APXGP / F1 THE MOVIE</text>
  <text x="96" y="820" fill="#aeb8c6" font-size="24">Locked inside the F1 movie story world only.</text>
</svg>
""".strip()
    return "data:image/svg+xml;charset=utf-8," + quote(svg)


def _build_focus_box_note(focus_box) -> str:
    if not focus_box:
        return "未框选具体区域，默认按整帧构图。"
    return (
        "框选范围已锁定："
        f"距左 {round(focus_box['x'] * 100)}%，"
        f"距上 {round(focus_box['y'] * 100)}%，"
        f"宽 {round(focus_box['width'] * 100)}%，"
        f"高 {round(focus_box['height'] * 100)}%。"
    )


def build_fallback_reply(reply_type: str, scene: dict, poster_prompt: str = "", focus_box=None) -> dict:
    meta = get_reply_type_meta(reply_type)
    sender = scene.get("suggested_sender", "APXGP")
    guardrails = build_guardrails_text(reply_type)
    shared_note = (
        "当前海报生成严格限定在 F1 电影剧情里，不扩展到其他作品世界。"
    )

    if reply_type == "poster":
        title = "海报生成结果"
        message = (
            "把这一帧理解成 APXGP 即将压上全部筹码的宣传画面：赛道、车队、旧传奇和最后一次机会同时被推到台前。"
        )
        focus_box_note = _build_focus_box_note(focus_box)
        prompt_suffix = poster_prompt or "未额外补充海报提示词，默认按当前画面张力生成。"
        image_prompt = (
            f"F1电影世界观限定，围绕 {scene['story_beat']} 制作院线海报，核心角色聚焦 {sender}，"
            f"强调 {scene['emotion_tension']}，{focus_box_note}"
            f" 海报提示词：{prompt_suffix}"
            " 保留 APXGP 车队与 F1 围场质感，禁止出现无关 IP。"
        )
        return {
            "type": reply_type,
            "label": meta["label"],
            "title": title,
            "sender": "海报生成器",
            "message": message + focus_box_note,
            "supporting_text": shared_note + " " + prompt_suffix,
            "image_prompt": image_prompt,
            "image_url": build_mock_image_data_url("海报样张", scene["story_beat"], meta["accent"], "POSTER"),
            "image_status": "mock",
            "guardrails": guardrails,
        }

    if reply_type == "future_scene":
        title = "来自未来场景图的回信"
        message = (
            "如果这一帧继续沿着当前张力往前推进，下一幕会更靠近车队必须立刻作出选择的未来赛段。"
        )
        image_prompt = (
            f"F1电影世界观限定，生成下一段未来场景图，围绕 {scene['reply_anchor']}，"
            f"突出 {scene['relationship_tension']} 与 {scene['emotion_tension']}，保留 APXGP、维修区或赛道语境。"
        )
        return {
            "type": reply_type,
            "label": meta["label"],
            "title": title,
            "sender": "未来赛段",
            "message": message,
            "supporting_text": shared_note,
            "image_prompt": image_prompt,
            "image_url": build_mock_image_data_url("未来场景", scene["story_beat"], meta["accent"], "FUTURE"),
            "image_status": "mock",
            "guardrails": guardrails,
        }

    if reply_type == "parallel_timeline":
        title = "来自平行时空图的回信"
        message = (
            "平行时空不会跳出 F1 电影本身，只会改写同一世界里的选择后果，例如更激进的超车、不同的车队判断，或更早发生的冲突。"
        )
        image_prompt = (
            f"F1电影世界观限定，生成平行时空图，同一角色与 APXGP 车队设定不变，"
            f"但把 {scene['story_beat']} 改写成另一种结果，核心仍然围绕 {scene['character_focus']}。"
        )
        return {
            "type": reply_type,
            "label": meta["label"],
            "title": title,
            "sender": "平行时空",
            "message": message,
            "supporting_text": shared_note,
            "image_prompt": image_prompt,
            "image_url": build_mock_image_data_url("平行时空", scene["story_beat"], meta["accent"], "PARALLEL"),
            "image_status": "mock",
            "guardrails": guardrails,
        }

    return {
        "type": reply_type,
        "label": meta["label"],
        "title": f"来自 {sender} 的角色私信",
        "sender": sender,
        "message": (
            f"{sender}：别把这一帧只当成一个暂停点。"
            f"它真正说明的是，{scene['relationship_tension']}。"
            "如果你现在还能感觉到那股压力，说明这场比赛已经把你拉进围场里面了。"
        ),
        "supporting_text": shared_note,
        "image_prompt": "",
        "image_url": "",
        "image_status": "not_applicable",
        "guardrails": guardrails,
    }
