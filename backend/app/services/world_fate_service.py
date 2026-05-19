from .debug_utils import log_debug
from .errors import ProviderRequestError
from .image_generation_provider import normalize_image_model
from .world_fate_media_provider import (
    generate_world_fate_frames_live,
    generate_world_fate_videos_live,
)
from .world_fate_provider import synchronize_world_fate_nodes
from .world_fate_world import (
    build_baseline_nodes,
    build_world_fate_fallback_scene,
    build_world_fate_frame_fallback,
    build_world_fate_fallback,
    build_world_fate_guardrails,
    build_world_fate_video_fallback,
    get_world_context,
    get_world_fate_movie_profile,
    normalize_world_id,
)


def _normalize_nodes(nodes: list) -> list:
    normalized = []
    for index, node in enumerate(nodes):
        normalized.append(
            {
                "id": str(node["id"]).strip(),
                "order": int(node.get("order", index + 1)),
                "title": str(node.get("title") or f"剧情节点 {index + 1:02d}").strip(),
                "seed_key": str(node.get("seed_key") or "").strip(),
                "x": int(float(node.get("x", 0))),
                "y": int(float(node.get("y", 0))),
                "story_description": str(node.get("story_description") or "").strip(),
                "frame_start_url": str(node.get("frame_start_url") or "").strip(),
                "frame_end_url": str(node.get("frame_end_url") or "").strip(),
                "frame_start_hint": str(node.get("frame_start_hint") or "").strip(),
                "frame_end_hint": str(node.get("frame_end_hint") or "").strip(),
                "video_url": str(node.get("video_url") or "").strip(),
                "video_task_id": str(node.get("video_task_id") or "").strip(),
                "video_status": str(node.get("video_status") or "").strip(),
                "video_note": str(node.get("video_note") or "").strip(),
            }
        )
    return sorted(normalized, key=lambda item: item["order"])


def build_world_fate_response(
    config,
    movie_id: str,
    world_id: str,
    world_title: str,
    world_note: str,
    modification_text: str,
    nodes: list,
) -> dict:
    debug_steps = []
    movie_key = str(movie_id or "").strip().lower()
    get_world_fate_movie_profile(movie_key)
    if not modification_text.strip():
        raise ValueError("modification_text is required")
    if not isinstance(nodes, list) or not nodes:
        raise ValueError("nodes are required")

    normalized_world_id = normalize_world_id(world_id)
    world_context = get_world_context(movie_key, normalized_world_id, world_title, world_note)
    normalized_nodes = _normalize_nodes(nodes)
    baseline_nodes = build_baseline_nodes(movie_key, normalized_nodes)
    guardrails = build_world_fate_guardrails(movie_key, world_context)

    log_debug(
        debug_steps,
        "world_fate.request.received",
        movie_id=movie_key,
        world_id=normalized_world_id,
        node_count=len(normalized_nodes),
    )

    has_ai_provider = bool(config.get("DASHSCOPE_API_KEY"))
    if has_ai_provider:
        try:
            result = synchronize_world_fate_nodes(
                config=config,
                world_context=world_context,
                modification_text=modification_text,
                baseline_nodes=baseline_nodes,
                current_nodes=normalized_nodes,
                guardrails=guardrails,
                debug_steps=debug_steps,
            )
            return {
                "status": "ok",
                "mode": "live_ai",
                "movie_id": movie_key,
                "world": world_context,
                "change_summary": str(result.get("change_summary") or "").strip(),
                "nodes": result.get("nodes") or [],
                "debug_steps": debug_steps,
            }
        except Exception as exc:
            log_debug(debug_steps, "world_fate.ai.failed", error=str(exc))
            raise ProviderRequestError(f"AI provider request failed: {exc}")

    raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so AI director plot sync cannot run.")


def build_world_fate_frames_response(
    config,
    movie_id: str,
    world_id: str,
    world_title: str,
    world_note: str,
    modification_text: str,
    image_model: str,
    nodes: list,
) -> dict:
    debug_steps = []
    movie_key = str(movie_id or "").strip().lower()
    get_world_fate_movie_profile(movie_key)
    if not isinstance(nodes, list) or not nodes:
        raise ValueError("nodes are required")

    normalized_world_id = normalize_world_id(world_id)
    world_context = get_world_context(movie_key, normalized_world_id, world_title, world_note)
    normalized_nodes = _normalize_nodes(nodes)
    guardrails = build_world_fate_guardrails(movie_key, world_context)

    log_debug(
        debug_steps,
        "world_fate.frames.request.received",
        movie_id=movie_key,
        world_id=normalized_world_id,
        node_count=len(normalized_nodes),
    )

    has_ai_provider = bool(config.get("DASHSCOPE_API_KEY"))
    normalized_image_model = normalize_image_model(image_model)
    if has_ai_provider:
        try:
            result = generate_world_fate_frames_live(
                config=config,
                world_context=world_context,
                modification_text=modification_text,
                nodes=normalized_nodes,
                image_model=normalized_image_model,
                guardrails=guardrails,
                debug_steps=debug_steps,
            )
            return {
                "status": "ok",
                "mode": "live_ai",
                "movie_id": movie_key,
                "world": world_context,
                "change_summary": result["change_summary"],
                "nodes": result["nodes"],
                "processed_asset_count": int(result.get("processed_asset_count", 0)),
                "remaining_asset_count": int(result.get("remaining_asset_count", 0)),
                "total_asset_count": int(result.get("total_asset_count", 0)),
                "debug_steps": debug_steps,
            }
        except Exception as exc:
            log_debug(debug_steps, "world_fate.frames.ai.failed", error=str(exc))
            raise ProviderRequestError(f"AI provider request failed: {exc}")

    if normalized_image_model == "gpt-image-2":
        raise ProviderRequestError("DASHSCOPE_API_KEY is required for frame planning, and FOURZAPI_API_KEY is required for gpt-image-2 frame images.")
    raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so AI frame generation cannot run.")


def build_world_fate_video_response(
    config,
    movie_id: str,
    world_id: str,
    world_title: str,
    world_note: str,
    modification_text: str,
    nodes: list,
) -> dict:
    debug_steps = []
    movie_key = str(movie_id or "").strip().lower()
    get_world_fate_movie_profile(movie_key)
    if not isinstance(nodes, list) or not nodes:
        raise ValueError("nodes are required")

    normalized_world_id = normalize_world_id(world_id)
    world_context = get_world_context(movie_key, normalized_world_id, world_title, world_note)
    normalized_nodes = _normalize_nodes(nodes)
    guardrails = build_world_fate_guardrails(movie_key, world_context)

    log_debug(
        debug_steps,
        "world_fate.video.request.received",
        movie_id=movie_key,
        world_id=normalized_world_id,
        node_count=len(normalized_nodes),
    )

    has_ai_provider = bool(config.get("DASHSCOPE_API_KEY"))
    if has_ai_provider:
        try:
            result = generate_world_fate_videos_live(
                config=config,
                world_context=world_context,
                modification_text=modification_text,
                nodes=normalized_nodes,
                guardrails=guardrails,
                debug_steps=debug_steps,
            )
            return {
                "status": "ok",
                "mode": "live_ai_async",
                "movie_id": movie_key,
                "world": world_context,
                "change_summary": result["change_summary"],
                "nodes": result["nodes"],
                "processed_video_count": int(result.get("processed_video_count", 0)),
                "remaining_video_count": int(result.get("remaining_video_count", 0)),
                "total_video_count": int(result.get("total_video_count", 0)),
                "debug_steps": debug_steps,
            }
        except Exception as exc:
            log_debug(debug_steps, "world_fate.video.ai.failed", error=str(exc))
            raise ProviderRequestError(f"AI provider request failed: {exc}")

    raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so AI video generation cannot run.")
