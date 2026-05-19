from .story_reply_world import build_mock_image_data_url


EVENT_RELATION_PROFILE = {
    "f1": {
        "id": "f1",
        "movie_label": "F1 维修区测试切片",
        "main_plot": "维修区与赛道秩序继续按原视频推进；AI 只能插入小事件，不改变赛车离开维修区的主线。",
        "scene_summary": "当前画面处在维修区出口附近，赛车正在移动，周围有车队人员、维修设备和赛道管理空间。",
        "character_focus": "主角车手、维修技师、赛道工作人员与安保/裁判类角色之间存在短暂但可被放大的关系张力。",
        "relationship_context": "小事件会改变短线角色对主角或车队的注意力、信任、怀疑或配合程度，后续只影响他们再次出现时的表现。",
    },
    "escape": {
        "id": "escape",
        "movie_label": "越狱监管切片",
        "main_plot": "主角仍会执行逃离计划；AI 只能改变狱警、同囚、护士、清洁工等短线角色后续出现时的关注和态度。",
        "scene_summary": "当前画面处于监管空间，主角正在准备行动，监视者与协助者都可能被一个小事件改变关系状态。",
        "character_focus": "主角与狱警、同囚、护士、清洁工之间的短线关系最适合被事件系统微调。",
        "relationship_context": "用户选择的可插入事件会进入事件账本，并持续影响后续相关镜头的眼神、停顿、站位或一句短台词。",
    },
}


def get_event_relation_profile(movie_id: str) -> dict:
    candidate = str(movie_id or "f1").strip().lower()
    return dict(EVENT_RELATION_PROFILE.get(candidate) or EVENT_RELATION_PROFILE["f1"])


def build_event_relation_fallback_scene(movie_id: str, seconds: float) -> dict:
    profile = get_event_relation_profile(movie_id)
    return {
        "movie_label": profile["movie_label"],
        "time_label": f"{seconds:.2f}s",
        "scene_summary": profile["scene_summary"],
        "character_focus": profile["character_focus"],
        "relationship_context": profile["relationship_context"],
        "main_plot": profile["main_plot"],
        "insert_event_rule": "下面的事件不是原剧情事件，而是 AI 基于当前帧生成的可插入小事件；用户选择后才写入事件系统。",
    }


def build_event_relation_fallback_events(movie_id: str, seconds: float) -> list:
    profile = get_event_relation_profile(movie_id)
    if profile["id"] == "escape":
        return [
            {
                "event_id": "guard_notices_metal_reflection",
                "source": "ai_generated_user_choice",
                "time": round(seconds, 3),
                "title": "狱警注意到袖口金属反光",
                "description": "主角收回手臂时露出异常反光，狱警没有当场阻止，但开始把他列为重点观察对象。",
                "participants": ["主角", "狱警"],
                "event_type": "suspicion_seed",
                "risk": 0.78,
                "relationship_preview": "普通监管 -> 高度怀疑",
                "future_scope": "后续狱警出现镜头",
            },
            {
                "event_id": "cellmate_covers_noise",
                "source": "ai_generated_user_choice",
                "time": round(seconds, 3),
                "title": "同囚故意咳嗽掩护异常声响",
                "description": "主角制造的细小声响被同囚用咳嗽盖过，两人之间形成一次不明说的临时共谋。",
                "participants": ["主角", "同囚"],
                "event_type": "cover_alliance",
                "risk": 0.54,
                "relationship_preview": "互相试探 -> 临时共谋",
                "future_scope": "后续同囚同框镜头",
            },
            {
                "event_id": "monitor_blind_spot",
                "source": "ai_generated_user_choice",
                "time": round(seconds, 3),
                "title": "监控屏短暂闪烁造成盲区",
                "description": "监控屏闪烁几秒，值班人员注意力被设备吸走，主角获得一个小范围行动窗口。",
                "participants": ["主角", "值班狱警"],
                "event_type": "attention_gap",
                "risk": 0.66,
                "relationship_preview": "常规巡查 -> 事后追疑",
                "future_scope": "后续值班台与走廊镜头",
            },
        ]

    return [
        {
            "event_id": "marshal_notices_tool_bag",
            "source": "ai_generated_user_choice",
            "time": round(seconds, 3),
            "title": "赛道工作人员注意到工具包被匆忙合上",
            "description": "赛车驶出前，赛道工作人员捕捉到维修区一名技师异常收起工具包，但没有立即中断流程。",
            "participants": ["主角车队", "赛道工作人员"],
            "event_type": "suspicion_seed",
            "risk": 0.74,
            "relationship_preview": "流程监管 -> 重点观察",
            "future_scope": "后续赛道工作人员出现镜头",
        },
        {
            "event_id": "mechanic_covers_radio_delay",
            "source": "ai_generated_user_choice",
            "time": round(seconds, 3),
            "title": "维修技师用无线电延迟帮主角遮掩",
            "description": "一名技师故意延迟回应无线电，让外部人员误以为赛车状态仍在正常确认中。",
            "participants": ["主角车手", "维修技师"],
            "event_type": "cover_alliance",
            "risk": 0.52,
            "relationship_preview": "职业配合 -> 临时共谋",
            "future_scope": "后续车队人员同框镜头",
        },
        {
            "event_id": "camera_operator_lingers",
            "source": "ai_generated_user_choice",
            "time": round(seconds, 3),
            "title": "摄影机异常停留让车队公关开始警觉",
            "description": "镜头在维修区多停留了一秒，车队公关意识到某个细节可能被外界捕捉，开始主动压低风险。",
            "participants": ["主角车队", "车队公关"],
            "event_type": "public_pressure",
            "risk": 0.61,
            "relationship_preview": "常规保护 -> 舆论警戒",
            "future_scope": "后续公关与媒体镜头",
        },
    ]


def infer_event_relation_delta(event: dict) -> dict:
    event_id = str(event.get("event_id") or "")
    if "cover" in event_id or "alliance" in str(event.get("event_type") or ""):
        return {
            "cause_event_id": event_id,
            "from": _participant_at(event, 1, "协助者"),
            "to": _participant_at(event, 0, "主角"),
            "before": "互相试探",
            "after": "临时共谋",
            "delta": {"suspicion": -10, "attention": 18, "trust": 32},
        }
    if "public" in str(event.get("event_type") or ""):
        return {
            "cause_event_id": event_id,
            "from": _participant_at(event, 1, "公关角色"),
            "to": _participant_at(event, 0, "主角阵营"),
            "before": "常规保护",
            "after": "舆论警戒",
            "delta": {"suspicion": 18, "attention": 30, "trust": -8},
        }
    if "gap" in str(event.get("event_type") or ""):
        return {
            "cause_event_id": event_id,
            "from": _participant_at(event, 1, "监视者"),
            "to": _participant_at(event, 0, "主角"),
            "before": "常规巡查",
            "after": "事后追疑",
            "delta": {"suspicion": 24, "attention": 20, "trust": -12},
        }
    return {
        "cause_event_id": event_id,
        "from": _participant_at(event, 1, "监管者"),
        "to": _participant_at(event, 0, "主角"),
        "before": "普通监管",
        "after": "高度怀疑",
        "delta": {"suspicion": 35, "attention": 25, "trust": -20},
    }


def build_event_relation_patches(movie_id: str, event: dict, relationship_delta: dict) -> list:
    profile = get_event_relation_profile(movie_id)
    affected_role = relationship_delta.get("from") or _participant_at(event, 1, "短线角色")
    target = relationship_delta.get("to") or _participant_at(event, 0, "主角")
    if profile["id"] == "escape":
        base = [
            ("走廊经过镜头", f"{affected_role}经过时多看{target}一眼，脚步放慢，手靠近对讲机。"),
            ("门禁口检查镜头", f"{affected_role}没有阻止主线动作，但站位更靠近门口，形成压迫感。"),
            ("行动前回望镜头", f"{target}准备行动前，镜头补一瞬{affected_role}的警觉表情。"),
        ]
        locked = "主角仍会继续执行逃离计划，短线角色不能提前抓住或阻止主角。"
    else:
        base = [
            ("维修区出口镜头", f"{affected_role}在赛车驶出前多停顿半秒，视线追随{target}阵营。"),
            ("赛道边缘回望镜头", f"{affected_role}重新扫视维修区，暗示前置事件已经进入他的判断。"),
            ("车队通讯镜头", f"相关人员压低声音确认状态，表现出关系变化后的额外警惕。"),
        ]
        locked = "赛车仍按原视频驶出维修区，微补丁不能改变比赛流程和主线结果。"

    return [
        {
            "shot_id": f"patch_{index + 1:02d}",
            "title": title,
            "affected_role": affected_role,
            "rewrite_scope": "future_shots_with_related_role",
            "locked_plot": locked,
            "allowed_changes": ["眼神", "停顿", "站位", "一句短台词", "镜头停留"],
            "forbidden_changes": ["改变主线结果", "新增大动作戏", "让短线角色突然承担主角级戏份"],
            "micro_rewrite": rewrite,
            "generation_prompt": f"电影感局部改写镜头，主线不变，只加强{affected_role}对{target}的关系态度：{rewrite}",
        }
        for index, (title, rewrite) in enumerate(base)
    ]


def build_event_relation_frame_fallback(event: dict, relationship_delta: dict, patches: list) -> list:
    title = event.get("title") or "AI 可插入事件"
    relation = f"{relationship_delta.get('before', '普通关系')} -> {relationship_delta.get('after', '新关系')}"
    first_patch = patches[0] if patches else {}
    prompt = first_patch.get("generation_prompt") or title
    return [
        {
            "id": "event_patch_start",
            "label": "首帧",
            "prompt": f"事件刚被写入：{title}。关系状态：{relation}。",
            "image_url": build_mock_image_data_url("事件首帧", title, "#ffb76c", "START"),
            "note": "本地 fallback 首帧，用于展示微事件进入剧情系统的起点。",
        },
        {
            "id": "event_patch_end",
            "label": "尾帧",
            "prompt": prompt,
            "image_url": build_mock_image_data_url("微补丁尾帧", relationship_delta.get("after", "关系变化"), "#6fc2ff", "END"),
            "note": "本地 fallback 尾帧，用于展示后续镜头被关系状态轻微改写后的结果。",
        },
    ]


def build_event_relation_video_fallback(event: dict, relationship_delta: dict, patches: list) -> dict:
    return {
        "video_url": "",
        "video_task_id": "",
        "video_status": "mock_ready",
        "video_note": (
            f"已准备局部视频微补丁：用户选择“{event.get('title', 'AI 小事件')}”后，"
            f"关系从“{relationship_delta.get('before', '普通关系')}”变为“{relationship_delta.get('after', '新关系')}”。"
            "真实视频生成接入后，只会重做受影响的短线角色镜头。"
        ),
    }


def _participant_at(event: dict, index: int, fallback: str) -> str:
    participants = event.get("participants")
    if isinstance(participants, list) and len(participants) > index:
        return str(participants[index] or fallback)
    return fallback
