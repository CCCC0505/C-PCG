import os
from pathlib import Path


def _parse_bool(value, default=False):
    if value is None:
        return default
    return str(value).strip().lower() in {"1", "true", "yes", "on"}


def _parse_origins(value):
    if not value:
        return ["*"]

    items = [item.strip() for item in str(value).split(",") if item.strip()]
    return items or ["*"]


class Config:
    PROJECT_ROOT = Path(__file__).resolve().parents[2]
    ASSETS_ROOT = PROJECT_ROOT / "assets"
    GENERATED_ROOT = PROJECT_ROOT / "backend" / "generated"
    APP_NAME = os.getenv("APP_NAME", "pcg-backend")
    APP_ENV = os.getenv("APP_ENV", "development")
    HOST = os.getenv("APP_HOST", "127.0.0.1")
    PORT = int(os.getenv("APP_PORT", "8000"))
    DEBUG = _parse_bool(os.getenv("APP_DEBUG"), default=True)
    CORS_ORIGINS = _parse_origins(os.getenv("CORS_ORIGINS", "*"))
    DASHSCOPE_BASE_URL = os.getenv(
        "DASHSCOPE_BASE_URL", "https://dashscope.aliyuncs.com/compatible-mode/v1"
    )
    DASHSCOPE_API_KEY = os.getenv("DASHSCOPE_API_KEY", "")
    QWEN_VISION_MODEL = os.getenv("QWEN_VISION_MODEL", "qwen3-vl-plus")
    QWEN_TEXT_MODEL = os.getenv("QWEN_TEXT_MODEL", "qwen-plus")
    WAN_IMAGE_MODEL = os.getenv("WAN_IMAGE_MODEL", "wan2.7-image-pro")
    WAN_IMAGE_URL = os.getenv(
        "WAN_IMAGE_URL",
        "https://dashscope.aliyuncs.com/api/v1/services/aigc/multimodal-generation/generation",
    )
    WAN_IMAGE_REQUEST_TIMEOUT = int(os.getenv("WAN_IMAGE_REQUEST_TIMEOUT", "300"))
    WAN_IMAGE_DEFAULT_SIZE = os.getenv("WAN_IMAGE_DEFAULT_SIZE", "2K")
    WAN_IMAGE_PANORAMA_SIZE = os.getenv("WAN_IMAGE_PANORAMA_SIZE", "2048*1024")
    WAN_IMAGE_WATERMARK = _parse_bool(os.getenv("WAN_IMAGE_WATERMARK"), default=False)
    WAN_IMAGE_THINKING_MODE = _parse_bool(
        os.getenv("WAN_IMAGE_THINKING_MODE"), default=True
    )
    WAN_IMAGE_PROMPT_EXTEND = _parse_bool(
        os.getenv("WAN_IMAGE_PROMPT_EXTEND"), default=True
    )
    FOURZAPI_API_KEY = os.getenv("FOURZAPI_API_KEY", "")
    FOURZAPI_BASE_URL = os.getenv("FOURZAPI_BASE_URL", "https://4zapi.com")
    GPT_IMAGE2_DEFAULT_SIZE = os.getenv("GPT_IMAGE2_DEFAULT_SIZE", "1024x1024")
    GPT_IMAGE2_SPACE_SIZE = os.getenv("GPT_IMAGE2_SPACE_SIZE", "1792x1024")
    GPT_IMAGE2_DEFAULT_QUALITY = os.getenv("GPT_IMAGE2_DEFAULT_QUALITY", "low")
    GPT_IMAGE2_DEFAULT_FORMAT = os.getenv("GPT_IMAGE2_DEFAULT_FORMAT", "png")
    WAN_VIDEO_MODEL = os.getenv("WAN_VIDEO_MODEL", "wan2.7-i2v")
    WAN_VIDEO_URL = os.getenv(
        "WAN_VIDEO_URL",
        "https://dashscope.aliyuncs.com/api/v1/services/aigc/video-generation/video-synthesis",
    )
    WAN_VIDEO_REQUEST_TIMEOUT = int(os.getenv("WAN_VIDEO_REQUEST_TIMEOUT", "180"))
    WAN_TASKS_URL = os.getenv(
        "WAN_TASKS_URL", "https://dashscope.aliyuncs.com/api/v1/tasks"
    )
    WAN_VIDEO_DEFAULT_RESOLUTION = os.getenv("WAN_VIDEO_DEFAULT_RESOLUTION", "720P")
    WAN_VIDEO_DEFAULT_DURATION = int(os.getenv("WAN_VIDEO_DEFAULT_DURATION", "5"))
    WAN_VIDEO_WATERMARK = _parse_bool(os.getenv("WAN_VIDEO_WATERMARK"), default=True)
    WAN_VIDEO_PROMPT_EXTEND = _parse_bool(
        os.getenv("WAN_VIDEO_PROMPT_EXTEND"), default=True
    )
    WORLD_FATE_FRAME_BATCH_SIZE = int(os.getenv("WORLD_FATE_FRAME_BATCH_SIZE", "3"))
    WORLD_FATE_VIDEO_BATCH_SIZE = int(os.getenv("WORLD_FATE_VIDEO_BATCH_SIZE", "1"))
    STORY_REPLY_ALLOWED_TYPES = (
        "poster",
        "private_message",
        "future_scene",
        "parallel_timeline",
    )
    STORY_REPLY_VIDEO_LIBRARY = {
        "f1": ASSETS_ROOT / "movies" / "f1" / "preview.mp4",
    }
    WORLD_FATE_VIDEO_LIBRARY = {
        "f1": ASSETS_ROOT / "movies" / "f1" / "preview.mp4",
        "invisible_guest": ASSETS_ROOT / "movies" / "kanbujiandekeren" / "看不见的客人切片.mp4",
    }
    WORLD_FATE_REFERENCE_IMAGE_LIBRARY = {
        "invisible_guest": ASSETS_ROOT / "pictures" / "导演时刻-关键帧" / "关键帧.png",
    }
