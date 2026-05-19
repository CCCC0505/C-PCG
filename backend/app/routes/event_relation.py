from http import HTTPStatus

from flask import current_app, jsonify, request

from . import api_bp
from ..services.errors import ProviderRequestError
from ..services.event_relation_service import (
    build_event_relation_commit_response,
    build_event_relation_frames_response,
    build_event_relation_options_response,
    build_event_relation_patches_response,
    build_event_relation_relation_events_response,
    build_event_relation_video_response,
)


@api_bp.route("/event-relation/options", methods=["POST"])
def event_relation_options():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_event_relation_options_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            seconds=float(payload["time"]),
            main_plot_lock=str(payload.get("main_plot_lock", "")).strip(),
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/event-relation/relation-events", methods=["POST"])
def event_relation_relation_events():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_event_relation_relation_events_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            seconds=float(payload.get("time", 0)),
            scene=payload.get("scene") or {},
            relation=payload["relation"],
            relation_state=str(payload.get("relation_state", "")).strip(),
            main_plot_lock=str(payload.get("main_plot_lock", "")).strip(),
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/event-relation/commit", methods=["POST"])
def event_relation_commit():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_event_relation_commit_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            seconds=float(payload.get("time", 0)),
            scene=payload.get("scene") or {},
            event=payload["event"],
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/event-relation/patches", methods=["POST"])
def event_relation_patches():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_event_relation_patches_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            event=payload["event"],
            relationship_delta=payload["relationship_delta"],
            main_plot_lock=str(payload.get("main_plot_lock", "")).strip(),
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/event-relation/frames", methods=["POST"])
def event_relation_frames():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_event_relation_frames_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            event=payload["event"],
            relationship_delta=payload["relationship_delta"],
            patches=payload["patches"],
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK


@api_bp.route("/event-relation/video", methods=["POST"])
def event_relation_video():
    payload = request.get_json(silent=True) or {}

    try:
        result = build_event_relation_video_response(
            config=current_app.config,
            movie_id=str(payload.get("movie_id", "f1")).strip().lower(),
            event=payload["event"],
            relationship_delta=payload["relationship_delta"],
            patches=payload["patches"],
            frames=payload.get("frames") or [],
        )
    except (KeyError, TypeError, ValueError) as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_REQUEST
    except ProviderRequestError as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.BAD_GATEWAY
    except Exception as exc:
        return jsonify({"status": "error", "error": str(exc)}), HTTPStatus.INTERNAL_SERVER_ERROR

    return jsonify(result), HTTPStatus.OK
