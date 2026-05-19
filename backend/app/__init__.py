from flask import Flask, jsonify, send_from_directory

try:
    from flask_cors import CORS
except ImportError:  # pragma: no cover - optional dependency fallback
    CORS = None

from .config import Config
from .routes import api_bp


def create_app(config_class=Config):
    app = Flask(__name__, static_folder=None)
    app.config.from_object(config_class)

    if CORS:
        CORS(app, resources={r"/api/*": {"origins": app.config["CORS_ORIGINS"]}})
    else:
        @app.after_request
        def add_basic_cors_headers(response):
            response.headers["Access-Control-Allow-Origin"] = "*"
            response.headers["Access-Control-Allow-Methods"] = "GET,POST,OPTIONS"
            response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
            return response

    app.register_blueprint(api_bp, url_prefix="/api")

    @app.route("/", methods=["GET"])
    def root():
        return send_from_directory(app.config["PROJECT_ROOT"], "index.html")

    @app.route("/<path:filename>", methods=["GET"])
    def frontend_asset(filename):
        allowed_roots = ("assets/",)
        allowed_files = {"index.css", "index.js", "README.md"}
        if filename in allowed_files or filename.startswith(allowed_roots):
            return send_from_directory(app.config["PROJECT_ROOT"], filename)
        return jsonify({"status": "error", "error": "not found"}), 404

    return app
