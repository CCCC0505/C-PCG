from http import HTTPStatus

from flask import current_app, jsonify, request

from . import api_bp
from ..services.errors import ProviderRequestError
from ..services.image_generation_provider import normalize_image_model
from ..services.world_fate_explorer_service import (
    build_world_fate_memory_response,
    build_world_fate_space_response,
)
from ..services.world_fate_service import (
    build_world_fate_frames_response,
    build_world_fate_response,
    build_world_fate_video_response,
)


@api_bp.route("/world-fate/sync", methods=["POST"])
def world_fate_sync():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_world_fate_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            world_id=str(payload["world_id"]).strip(),
            world_title=str(payload.get("world_title", "")).strip(),
            world_note=str(payload.get("world_note", "")).strip(),
            modification_text=str(payload["modification_text"]).strip(),
            nodes=payload["nodes"],
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/world-fate/space", methods=["POST"])
def world_fate_space():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_world_fate_space_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            seconds=float(payload["time"]),
            image_model=normalize_image_model(payload.get("image_model", "wan2.7")),
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/world-fate/memory", methods=["POST"])
def world_fate_memory():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_world_fate_memory_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            seconds=float(payload["time"]),
            selection=payload["selection"],
            space_image_url=str(payload.get("space_image_url", "")).strip(),
            scene_summary=str(payload.get("scene_summary", "")).strip(),
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/world-fate/frames", methods=["POST"])
def world_fate_frames():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_world_fate_frames_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            world_id=str(payload["world_id"]).strip(),
            world_title=str(payload.get("world_title", "")).strip(),
            world_note=str(payload.get("world_note", "")).strip(),
            modification_text=str(payload.get("modification_text", "")).strip(),
            image_model=normalize_image_model(payload.get("image_model", "wan2.7")),
            nodes=payload["nodes"],
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/world-fate/video", methods=["POST"])
def world_fate_video():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_world_fate_video_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            world_id=str(payload["world_id"]).strip(),
            world_title=str(payload.get("world_title", "")).strip(),
            world_note=str(payload.get("world_note", "")).strip(),
            modification_text=str(payload.get("modification_text", "")).strip(),
            nodes=payload["nodes"],
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK
