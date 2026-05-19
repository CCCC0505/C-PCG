import os
import sys
from pathlib import Path

try:
    from dotenv import load_dotenv
except ImportError:  # pragma: no cover - optional dependency fallback
    def load_dotenv(*args, **kwargs):
        dotenv_path = args[0] if args else None
        if not dotenv_path:
            return False
        path = Path(dotenv_path)
        if not path.exists():
            return False
        for raw_line in path.read_text(encoding="utf-8").splitlines():
            line = raw_line.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, value = line.split("=", 1)
            os.environ.setdefault(key.strip(), value.strip())
        return True

PROJECT_ROOT = Path(__file__).resolve().parent
VENV_SITE_PACKAGES = PROJECT_ROOT / ".venv" / "Lib" / "site-packages"
if VENV_SITE_PACKAGES.exists():
    venv_site_packages_str = str(VENV_SITE_PACKAGES)
    if venv_site_packages_str not in sys.path:
        sys.path.insert(0, venv_site_packages_str)

load_dotenv(PROJECT_ROOT / ".env")

from app import create_app
from app.config import Config


app = create_app()


if __name__ == "__main__":
    if os.getenv("USE_WAITRESS", "").strip().lower() in {"1", "true", "yes", "on"}:
        from waitress import serve

        serve(app, host=Config.HOST, port=Config.PORT)
    else:
        app.run(host=Config.HOST, port=Config.PORT, debug=Config.DEBUG, use_reloader=False)
