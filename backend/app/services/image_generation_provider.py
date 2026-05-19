import base64
import json
from pathlib import Path
from urllib import error, request

from .debug_utils import log_debug

try:
    from fourz_image2_client import FourZImage2Client
except ImportError:  # pragma: no cover - optional dependency
    FourZImage2Client = None


SUPPORTED_IMAGE_MODELS = {"wan2.7", "gpt-image-2"}


def normalize_image_model(value: str) -> str:
    candidate = str(value or "").strip().lower()
    return candidate if candidate in SUPPORTED_IMAGE_MODELS else "wan2.7"


def _image_file_to_data_url(path: Path) -> str:
    suffix = path.suffix.lower()
    mime = {
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".png": "image/png",
        ".webp": "image/webp",
    }.get(suffix, "application/octet-stream")
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def _bytes_to_data_url(image_bytes: bytes, mime: str = "image/png") -> str:
    encoded = base64.b64encode(image_bytes).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def _download_image_as_data_url(url: str) -> str:
    http_request = request.Request(url, headers={"User-Agent": "Python urllib"})
    with request.urlopen(http_request, timeout=180) as response:
        image_bytes = response.read()
        content_type = response.headers.get_content_type() or "image/png"
    return _bytes_to_data_url(image_bytes, content_type)


def _generate_with_wan(
    config,
    prompt: str,
    debug_steps: list,
    reference_images=None,
    size_override: str = "",
    download_result: bool = False,
) -> dict:
    content = []
    for image in reference_images or []:
        if image:
            content.append({"image": str(image)})
    content.append({"text": prompt})
    payload = {
        "model": config["WAN_IMAGE_MODEL"],
        "input": {
            "messages": [
                {
                    "role": "user",
                    "content": content,
                }
            ]
        },
        "parameters": {
            "size": str(size_override or config["WAN_IMAGE_DEFAULT_SIZE"]).strip(),
            "n": 1,
            "watermark": config["WAN_IMAGE_WATERMARK"],
            "thinking_mode": config["WAN_IMAGE_THINKING_MODE"],
            "prompt_extend": config["WAN_IMAGE_PROMPT_EXTEND"],
        },
    }
    body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
    log_debug(debug_steps, "image.model.wan.start", model=config["WAN_IMAGE_MODEL"])
    http_request = request.Request(
        config["WAN_IMAGE_URL"],
        data=body,
        headers={
            "Authorization": f"Bearer {config['DASHSCOPE_API_KEY']}",
            "Content-Type": "application/json",
        },
        method="POST",
    )
    timeout_seconds = int(config.get("WAN_IMAGE_REQUEST_TIMEOUT", 300))
    try:
        with request.urlopen(http_request, timeout=timeout_seconds) as response:
            raw_body = response.read().decode("utf-8")
    except error.HTTPError as exc:
        raw_body = exc.read().decode("utf-8", errors="replace")
        raise RuntimeError(f"wan image HTTP {exc.code}: {raw_body}") from exc
    payload = json.loads(raw_body)
    output = payload.get("output") or {}
    for choice in output.get("choices") or []:
        message = choice.get("message") or {}
        for item in message.get("content") or []:
            if isinstance(item, dict) and item.get("image"):
                image_url = str(item["image"])
                return {
                    "image_url": _download_image_as_data_url(image_url) if download_result else image_url,
                    "image_status": "generated",
                    "image_model": "wan2.7",
                }
    raise RuntimeError("wan image response did not include an image url")


def _generate_with_gpt_image2(
    config,
    prompt: str,
    debug_steps: list,
    size_override: str = "",
) -> dict:
    if FourZImage2Client is None:
        raise RuntimeError("fourz_image2_client is not installed")
    api_key = config.get("FOURZAPI_API_KEY", "")
    if not api_key:
        raise RuntimeError("FOURZAPI_API_KEY is not configured")

    output_dir = Path(config["GENERATED_ROOT"]) / "gpt_image2"
    output_dir.mkdir(parents=True, exist_ok=True)
    log_debug(debug_steps, "image.model.gpt_image2.start", model="gpt-image-2")

    client = FourZImage2Client(api_key=api_key, base_url=config.get("FOURZAPI_BASE_URL"))
    result = client.generate(
        prompt=prompt,
        size=str(size_override or config["GPT_IMAGE2_DEFAULT_SIZE"]).strip(),
        quality=config["GPT_IMAGE2_DEFAULT_QUALITY"],
        image_format=config["GPT_IMAGE2_DEFAULT_FORMAT"],
    )
    saved = client.save_result_image(result, output_dir=str(output_dir))

    if isinstance(saved, (list, tuple)):
        saved_path = Path(saved[0])
    else:
        saved_path = Path(saved)

    if not saved_path.exists():
        raise RuntimeError("gpt-image-2 result file was not created")

    return {
        "image_url": _image_file_to_data_url(saved_path),
        "image_status": "generated",
        "image_model": "gpt-image-2",
    }


def generate_image_with_selected_model(
    config,
    prompt: str,
    image_model: str,
    debug_steps: list,
    reference_images=None,
    size_override: str = "",
    download_result: bool = False,
) -> dict:
    normalized_model = normalize_image_model(image_model)
    if normalized_model == "gpt-image-2":
        return _generate_with_gpt_image2(
            config,
            prompt,
            debug_steps,
            size_override=size_override,
        )
    return _generate_with_wan(
        config,
        prompt,
        debug_steps,
        reference_images=reference_images,
        size_override=size_override,
        download_result=download_result,
    )
