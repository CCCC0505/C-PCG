from datetime import datetime, timezone
from pathlib import Path

from flask import current_app, jsonify

from . import api_bp


PROJECT_ROOT = Path(__file__).resolve().parents[3]


@api_bp.route("/health", methods=["GET"])
def health():
    return jsonify(
        {
            "status": "ok",
            "service": current_app.config["APP_NAME"],
            "environment": current_app.config["APP_ENV"],
            "timestamp": datetime.now(timezone.utc).isoformat(),
        }
    )


@api_bp.route("/project", methods=["GET"])
def project():
    return jsonify(
        {
            "project_root": str(PROJECT_ROOT),
            "frontend": {
                "html": "index.html",
                "js": "index.js",
                "css": "index.css",
            },
            "directories": {
                "assets": "assets",
                "docs": "docs",
                "archive": "archive",
                "backend": "backend",
            },
            "exists": {
                "index_html": (PROJECT_ROOT / "index.html").exists(),
                "assets": (PROJECT_ROOT / "assets").exists(),
                "docs": (PROJECT_ROOT / "docs").exists(),
            },
        }
    )
