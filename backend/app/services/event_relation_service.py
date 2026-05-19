from pathlib import Path

from .debug_utils import log_debug
from .errors import ProviderRequestError
from .event_relation_provider import generate_event_options_live, generate_relation_events_live
from .event_relation_world import (
    build_event_relation_frame_fallback,
    build_event_relation_fallback_events,
    build_event_relation_fallback_scene,
    build_event_relation_patches,
    build_event_relation_video_fallback,
    get_event_relation_profile,
    infer_event_relation_delta,
)
from .frame_capture import capture_frame_png, image_bytes_to_data_url
from .image_generation_provider import generate_image_with_selected_model


def _get_video_path(config, movie_id: str) -> Path:
    movie_key = str(movie_id or "f1").strip().lower()
    library = config.get("WORLD_FATE_VIDEO_LIBRARY", {}) or config.get("STORY_REPLY_VIDEO_LIBRARY", {})
    if movie_key in library:
        return Path(library[movie_key])
    if "f1" in library:
        return Path(library["f1"])
    raise ValueError("movie_id is not supported")


def _normalize_event(event: dict, seconds: float) -> dict:
    if not isinstance(event, dict):
        raise ValueError("event is required")
    normalized = dict(event)
    normalized["event_id"] = str(normalized.get("event_id") or "ai_insert_event").strip()
    normalized["source"] = "ai_generated_user_choice"
    normalized["selected_by_user"] = True
    normalized["time"] = round(float(normalized.get("time", seconds)), 3)
    normalized["title"] = str(normalized.get("title") or "AI 可插入小事件").strip()
    normalized["description"] = str(normalized.get("description") or "").strip()
    normalized["event_type"] = str(normalized.get("event_type") or "micro_event").strip()
    normalized["risk"] = max(0.0, min(1.0, float(normalized.get("risk", 0.5))))
    normalized["main_plot_locked"] = True
    participants = normalized.get("participants")
    normalized["participants"] = participants if isinstance(participants, list) and participants else ["主角", "短线角色"]
    return normalized


def _normalize_relation(relation: dict) -> dict:
    if not isinstance(relation, dict):
        raise ValueError("relation is required")
    relation_id = str(relation.get("id") or "selected_relation").strip()
    source = str(relation.get("from") or "主角").strip()
    target = str(relation.get("to") or "短线角色").strip()
    state = str(relation.get("state") or "待判断").strip()
    options = relation.get("options")
    return {
        "id": relation_id,
        "from": source,
        "to": target,
        "state": state,
        "options": options if isinstance(options, list) else [],
    }


def _build_event_relation_frame_prompt(profile: dict, event: dict, delta: dict, patches: list, frame_kind: str) -> str:
    relation = f"{delta.get('before', '原关系')} -> {delta.get('after', '新关系')}"
    affected_role = delta.get("from") or "短线角色"
    target = delta.get("to") or "主角"
    first_patch = patches[0] if patches else {}
    patch_prompt = str(first_patch.get("micro_rewrite") or first_patch.get("generation_prompt") or "").strip()
    if len(patch_prompt) > 260:
        patch_prompt = patch_prompt[:260].rstrip() + "..."
    if frame_kind == "start":
        beat = (
            f"局部改写首帧：事件“{event.get('title', 'AI 小事件')}”刚被写入剧情，"
            f"{affected_role}开始注意{target}，关系从{relation}变化。"
        )
    else:
        beat = (
            f"局部改写尾帧：承接事件“{event.get('title', 'AI 小事件')}”，"
            f"{affected_role}对{target}的态度已经可见，但主线仍按原视频推进。"
        )
    return (
        f"{profile['movie_label']}，电影感写实关键帧，横向 16:9。"
        f"{beat} "
        f"关系状态：{relation}。"
        f"局部动作：{patch_prompt} "
        "保持原视频空间连续性，只改眼神、停顿、站位和氛围。不要文字，不要 UI，不要海报排版，不改变主线结果。"
    )


def _generate_event_relation_wan_frames(config, profile: dict, event: dict, delta: dict, patches: list, debug_steps: list) -> list:
    if not config.get("DASHSCOPE_API_KEY"):
        raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so wan2.7 cannot generate event relation keyframes.")

    frames = []
    specs = [
        ("event_patch_start", "首帧", "start"),
        ("event_patch_end", "尾帧", "end"),
    ]
    for frame_id, label, frame_kind in specs:
        prompt = _build_event_relation_frame_prompt(profile, event, delta, patches, frame_kind)
        try:
            generated = generate_image_with_selected_model(
                config=config,
                prompt=prompt,
                image_model="wan2.7",
                debug_steps=debug_steps,
                size_override=str(config.get("WAN_IMAGE_DEFAULT_SIZE") or "2K"),
                download_result=False,
            )
        except Exception as exc:
            log_debug(debug_steps, "event_relation.frames.wan.failed", frame=frame_kind, error=str(exc))
            raise ProviderRequestError(f"wan2.7 keyframe request failed: {exc}") from exc

        frames.append(
            {
                "id": frame_id,
                "label": label,
                "prompt": prompt,
                "image_url": generated["image_url"],
                "image_status": generated.get("image_status", "generated"),
                "image_model": generated.get("image_model", "wan2.7"),
                "note": "Wan 真实生成的关系微补丁关键帧，视频任务可承接该首尾帧继续生成。",
            }
        )
        log_debug(debug_steps, "event_relation.frames.wan.generated", frame=frame_kind, image_model=frames[-1]["image_model"])
    return frames


def build_event_relation_options_response(
    config,
    movie_id: str,
    seconds: float,
    main_plot_lock: str,
) -> dict:
    debug_steps = []
    movie_key = str(movie_id or "f1").strip().lower()
    profile = get_event_relation_profile(movie_key)
    fallback_scene = build_event_relation_fallback_scene(movie_key, seconds)
    fallback_events = build_event_relation_fallback_events(movie_key, seconds)

    video_path = _get_video_path(config, movie_key)
    frame_bytes = capture_frame_png(video_path, seconds)
    frame_url = image_bytes_to_data_url(frame_bytes)
    log_debug(debug_steps, "event_relation.frame.captured", movie_id=movie_key, time=round(seconds, 3), bytes=len(frame_bytes))

    has_ai_provider = bool(config.get("DASHSCOPE_API_KEY"))
    if has_ai_provider:
        try:
            live = generate_event_options_live(
                config=config,
                reference_image=frame_url,
                movie_profile=profile,
                seconds=seconds,
                main_plot_lock=main_plot_lock,
                fallback_scene=fallback_scene,
                fallback_events=fallback_events,
                debug_steps=debug_steps,
            )
            events = _ensure_three_events(
                live.get("events") if isinstance(live.get("events"), list) else [],
                fallback_events,
            )
            return {
                "status": "ok",
                "mode": "live_ai",
                "movie_id": profile["id"],
                "frame": {"time": round(seconds, 3), "image_url": frame_url},
                "scene": _merge_scene_defaults(live.get("scene") or {}, fallback_scene),
                "events": [_normalize_event(event, seconds) for event in events],
                "debug_steps": debug_steps,
            }
        except Exception as exc:
            log_debug(debug_steps, "event_relation.ai.options.failed", error=str(exc))
            raise ProviderRequestError(f"AI provider request failed: {exc}") from exc

    raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so event relation options cannot run.")


def build_event_relation_relation_events_response(
    config,
    movie_id: str,
    seconds: float,
    scene: dict,
    relation: dict,
    relation_state: str,
    main_plot_lock: str,
) -> dict:
    debug_steps = []
    profile = get_event_relation_profile(movie_id)
    normalized_relation = _normalize_relation(relation)
    normalized_state = str(relation_state or normalized_relation["state"]).strip()

    if not config.get("DASHSCOPE_API_KEY"):
        raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so AI relation event generation cannot run.")

    try:
        live = generate_relation_events_live(
            config=config,
            movie_profile=profile,
            seconds=seconds,
            scene=scene or {},
            relation=normalized_relation,
            relation_state=normalized_state,
            main_plot_lock=main_plot_lock,
            debug_steps=debug_steps,
        )
        events = [event for event in live.get("events", []) if isinstance(event, dict)] if isinstance(live.get("events"), list) else []
        if not events:
            raise ProviderRequestError("AI relation event response did not include usable events.")
        return {
            "status": "ok",
            "mode": "live_ai",
            "movie_id": profile["id"],
            "relation": {**normalized_relation, "state": normalized_state},
            "events": [_normalize_event(event, seconds) for event in events[:3]],
            "debug_steps": debug_steps,
        }
    except ProviderRequestError:
        raise
    except Exception as exc:
        log_debug(debug_steps, "event_relation.ai.relation_events.failed", error=str(exc))
        raise ProviderRequestError(f"AI relation event request failed: {exc}") from exc


def build_event_relation_commit_response(
    config,
    movie_id: str,
    seconds: float,
    scene: dict,
    event: dict,
) -> dict:
    debug_steps = []
    profile = get_event_relation_profile(movie_id)
    normalized_event = _normalize_event(event, seconds)
    relationship_delta = infer_event_relation_delta(normalized_event)
    main_plot_lock = str((scene or {}).get("main_plot") or profile["main_plot"]).strip()
    log_debug(
        debug_steps,
        "event_relation.commit",
        movie_id=profile["id"],
        event_id=normalized_event["event_id"],
    )
    return {
        "status": "ok",
        "mode": "rule_commit",
        "movie_id": profile["id"],
        "event": normalized_event,
        "relationship_delta": relationship_delta,
        "main_plot_lock": main_plot_lock,
        "debug_steps": debug_steps,
    }


def build_event_relation_patches_response(
    config,
    movie_id: str,
    event: dict,
    relationship_delta: dict,
    main_plot_lock: str,
) -> dict:
    debug_steps = []
    profile = get_event_relation_profile(movie_id)
    normalized_event = _normalize_event(event, float(event.get("time", 0)))
    delta = relationship_delta if isinstance(relationship_delta, dict) else infer_event_relation_delta(normalized_event)
    patches = build_event_relation_patches(profile["id"], normalized_event, delta)
    if main_plot_lock:
        for patch in patches:
            patch["locked_plot"] = str(main_plot_lock).strip()
    log_debug(debug_steps, "event_relation.patches", movie_id=profile["id"], patch_count=len(patches))
    return {
        "status": "ok",
        "mode": "rule_patches",
        "movie_id": profile["id"],
        "patches": patches,
        "debug_steps": debug_steps,
    }


def build_event_relation_frames_response(
    config,
    movie_id: str,
    event: dict,
    relationship_delta: dict,
    patches: list,
) -> dict:
    debug_steps = []
    profile = get_event_relation_profile(movie_id)
    normalized_event = _normalize_event(event, float(event.get("time", 0)))
    delta = relationship_delta if isinstance(relationship_delta, dict) else infer_event_relation_delta(normalized_event)
    normalized_patches = patches if isinstance(patches, list) else build_event_relation_patches(profile["id"], normalized_event, delta)
    try:
        frames = _generate_event_relation_wan_frames(config, profile, normalized_event, delta, normalized_patches, debug_steps)
        mode = "wan_keyframes"
        image_model = "wan2.7"
        log_debug(debug_steps, "event_relation.frames.wan.success", movie_id=profile["id"], frame_count=len(frames))
    except ProviderRequestError as exc:
        frames = build_event_relation_frame_fallback(normalized_event, delta, normalized_patches)
        mode = "local_fallback"
        image_model = ""
        log_debug(debug_steps, "event_relation.frames.local_fallback", movie_id=profile["id"], error=str(exc))
    return {
        "status": "ok",
        "mode": mode,
        "movie_id": profile["id"],
        "image_model": image_model,
        "frames": frames,
        "debug_steps": debug_steps,
    }


def build_event_relation_video_response(
    config,
    movie_id: str,
    event: dict,
    relationship_delta: dict,
    patches: list,
    frames: list,
) -> dict:
    debug_steps = []
    profile = get_event_relation_profile(movie_id)
    normalized_event = _normalize_event(event, float(event.get("time", 0)))
    delta = relationship_delta if isinstance(relationship_delta, dict) else infer_event_relation_delta(normalized_event)
    normalized_patches = patches if isinstance(patches, list) else build_event_relation_patches(profile["id"], normalized_event, delta)
    video = build_event_relation_video_fallback(normalized_event, delta, normalized_patches)
    log_debug(debug_steps, "event_relation.video.fallback", movie_id=profile["id"], frame_count=len(frames or []))
    return {
        "status": "ok",
        "mode": "local_fallback",
        "movie_id": profile["id"],
        "change_summary": video["video_note"],
        **video,
        "debug_steps": debug_steps,
    }


def _merge_scene_defaults(scene: dict, defaults: dict) -> dict:
    merged = dict(defaults)
    if isinstance(scene, dict):
        for key, value in scene.items():
            if value not in (None, ""):
                merged[key] = value
    return merged


def _ensure_three_events(events: list, fallback_events: list) -> list:
    normalized = [event for event in events if isinstance(event, dict)]
    seen_ids = {str(event.get("event_id") or "") for event in normalized}
    for fallback in fallback_events:
        fallback_id = str(fallback.get("event_id") or "")
        if len(normalized) >= 3:
            break
        if fallback_id not in seen_ids:
            normalized.append(fallback)
            seen_ids.add(fallback_id)
    return normalized[:3]
