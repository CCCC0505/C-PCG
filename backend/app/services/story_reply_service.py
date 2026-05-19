from .frame_capture import capture_frame_png, image_bytes_to_data_url
from .debug_utils import log_debug
from .errors import ProviderRequestError
from .image_generation_provider import normalize_image_model
from .story_reply_provider import generate_direct_poster_reply, try_generate_live_story_reply
from .story_reply_world import (
    build_fallback_reply,
    build_fallback_scene_analysis,
    build_guardrails_text,
    get_reply_type_meta,
    normalize_reply_type,
)


def _normalize_focus_box(value):
    if not value:
        return None
    if not isinstance(value, dict):
        raise ValueError("focus_box is not supported")

    try:
        x = float(value.get("x", 0))
        y = float(value.get("y", 0))
        width = float(value.get("width", 0))
        height = float(value.get("height", 0))
    except (TypeError, ValueError) as exc:
        raise ValueError("focus_box is not supported") from exc

    x = min(max(x, 0.0), 1.0)
    y = min(max(y, 0.0), 1.0)
    width = min(max(width, 0.0), 1.0)
    height = min(max(height, 0.0), 1.0)

    if width <= 0 or height <= 0:
        return None

    if x + width > 1.0:
        width = 1.0 - x
    if y + height > 1.0:
        height = 1.0 - y

    if width <= 0 or height <= 0:
        return None

    return {
        "x": round(x, 4),
        "y": round(y, 4),
        "width": round(width, 4),
        "height": round(height, 4),
    }


def build_story_reply_response(
    config,
    movie_id: str,
    seconds: float,
    reply_type: str,
    image_model: str = "wan2.7",
    poster_prompt: str = "",
    focus_box=None,
) -> dict:
    debug_steps = []
    movie_key = str(movie_id or "").strip().lower()
    if movie_key not in config["STORY_REPLY_VIDEO_LIBRARY"]:
        raise ValueError("movie_id is not supported")

    normalized_reply_type = normalize_reply_type(reply_type)
    normalized_poster_prompt = str(poster_prompt or "").strip()
    normalized_focus_box = _normalize_focus_box(focus_box)
    video_path = config["STORY_REPLY_VIDEO_LIBRARY"][movie_key]
    reply_type_meta = get_reply_type_meta(normalized_reply_type)

    log_debug(
        debug_steps,
        "story.request.received",
        movie_id=movie_key,
        time=round(seconds, 3),
        reply_type=normalized_reply_type,
        has_focus_box=bool(normalized_focus_box),
        has_poster_prompt=bool(normalized_poster_prompt),
    )

    frame_bytes = capture_frame_png(video_path, seconds)
    frame_url = image_bytes_to_data_url(frame_bytes)
    log_debug(
        debug_steps,
        "story.frame.captured",
        bytes=len(frame_bytes),
        time=round(seconds, 3),
    )

    guardrails = build_guardrails_text(normalized_reply_type)
    normalized_image_model = normalize_image_model(image_model)
    has_text_ai_provider = bool(config.get("DASHSCOPE_API_KEY"))
    has_selected_image_provider = (
        (normalized_image_model == "gpt-image-2" and bool(config.get("FOURZAPI_API_KEY")))
        or (normalized_image_model == "wan2.7" and bool(config.get("DASHSCOPE_API_KEY")))
    )

    if normalized_reply_type == "poster" and has_selected_image_provider:
        try:
            scene = build_fallback_scene_analysis(seconds)
            live_reply = generate_direct_poster_reply(
                config=config,
                scene=scene,
                reply_type=normalized_reply_type,
                image_model=normalized_image_model,
                reply_type_meta=reply_type_meta,
                guardrails=guardrails,
                poster_prompt=normalized_poster_prompt,
                focus_box=normalized_focus_box,
                debug_steps=debug_steps,
                reference_image=frame_url,
            )
            return {
                "status": "ok",
                "movie_id": movie_key,
                "reply_type": normalized_reply_type,
                "poster_prompt": normalized_poster_prompt,
                "selection": normalized_focus_box,
                "mode": live_reply["mode"],
                "frame": {
                    "time": round(seconds, 3),
                    "image_url": frame_url,
                },
                "scene": live_reply["scene"],
                "reply": live_reply["reply"],
                "debug_steps": debug_steps,
            }
        except Exception as exc:
            log_debug(debug_steps, "story.poster.image.failed", image_model=normalized_image_model, error=str(exc))
            raise ProviderRequestError(f"{normalized_image_model} request failed: {exc}") from exc

    if has_text_ai_provider:
        try:
            live_reply = try_generate_live_story_reply(
                config=config,
                reference_image=frame_url,
                seconds=seconds,
                reply_type=normalized_reply_type,
                image_model=normalized_image_model,
                reply_type_meta=reply_type_meta,
                guardrails=guardrails,
                poster_prompt=normalized_poster_prompt,
                focus_box=normalized_focus_box,
                debug_steps=debug_steps,
            )
            return {
                "status": "ok",
                "movie_id": movie_key,
                "reply_type": normalized_reply_type,
                "poster_prompt": normalized_poster_prompt,
                "selection": normalized_focus_box,
                "mode": live_reply["mode"],
                "frame": {
                    "time": round(seconds, 3),
                    "image_url": frame_url,
                },
                "scene": live_reply["scene"],
                "reply": live_reply["reply"],
                "debug_steps": debug_steps,
            }
        except Exception as exc:
            log_debug(debug_steps, "story.ai.failed", error=str(exc))
            raise ProviderRequestError(f"AI provider request failed: {exc}") from exc

    if normalized_reply_type == "poster" and normalized_image_model == "gpt-image-2":
        raise ProviderRequestError("FOURZAPI_API_KEY is not configured, so gpt-image-2 cannot generate posters.")

    if normalized_reply_type == "poster" and normalized_image_model == "wan2.7":
        raise ProviderRequestError("DASHSCOPE_API_KEY is not configured, so wan2.7 cannot generate posters.")

    scene = build_fallback_scene_analysis(seconds)
    reply = build_fallback_reply(
        normalized_reply_type,
        scene,
        poster_prompt=normalized_poster_prompt,
        focus_box=normalized_focus_box,
    )
    if reply["image_status"] == "mock" and not reply["image_url"]:
        reply["image_url"] = frame_url

    return {
        "status": "ok",
        "movie_id": movie_key,
        "reply_type": normalized_reply_type,
        "poster_prompt": normalized_poster_prompt,
        "selection": normalized_focus_box,
        "mode": "local_fallback",
        "frame": {
            "time": round(seconds, 3),
            "image_url": frame_url,
        },
        "scene": scene,
        "reply": reply,
        "debug_steps": debug_steps,
    }
