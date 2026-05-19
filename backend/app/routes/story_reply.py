from http import HTTPStatus

from flask import current_app, jsonify, request

from . import api_bp
from ..services.errors import ProviderRequestError
from ..services.story_reply_service import build_story_reply_response
from ..services.image_generation_provider import normalize_image_model


@api_bp.route("/story-reply/respond", methods=["POST"])
def story_reply_respond():
    payload = request.get_json(silent=True) or {}

    try:
        movie_id = str(payload.get("movie_id", "f1")).strip().lower()
        seconds = float(payload["time"])
        reply_type = str(payload["reply_type"]).strip()
        image_model = normalize_image_model(payload.get("image_model", "wan2.7"))
        poster_prompt = str(payload.get("poster_prompt", "")).strip()
        focus_box = payload.get("focus_box")
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST

    try:
        result = build_story_reply_response(
            config=current_app.config,
            movie_id=movie_id,
            seconds=seconds,
            reply_type=reply_type,
            image_model=image_model,
            poster_prompt=poster_prompt,
            focus_box=focus_box,
        )
    except ValueError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return (
            jsonify({"status": "error", "error": str(exc)}),
            HTTPStatus.INTERNAL_SERVER_ERROR,
        )

    return jsonify(result), HTTPStatus.OK
