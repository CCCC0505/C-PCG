import base64
import json
import os
import time
import urllib.error
import urllib.parse
import urllib.request
from pathlib import Path


DEFAULT_BASE_URL = "https://4zapi.com"


class FourZImage2Client:
    def __init__(self, api_key: str, base_url: str = None):
        self.api_key = api_key
        self.base_url = (base_url or os.getenv("FOURZAPI_BASE_URL") or DEFAULT_BASE_URL).rstrip("/")

    def _post_json(self, payload: dict) -> dict:
        data = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        req = urllib.request.Request(
            url=f"{self.base_url}/v1/images/generations",
            data=data,
            method="POST",
            headers={
                "Authorization": f"Bearer {self.api_key}",
                "Accept": "application/json",
                "Content-Type": "application/json",
            },
        )
        try:
            with urllib.request.urlopen(req, timeout=180) as response:
                body = response.read().decode("utf-8", errors="replace")
                return json.loads(body)
        except urllib.error.HTTPError as exc:
            body = exc.read().decode("utf-8", errors="replace")
            raise RuntimeError(f"HTTP {exc.code}: {body}") from exc
        except urllib.error.URLError as exc:
            raise RuntimeError(f"Request failed: {exc}") from exc

    def generate(
        self,
        prompt: str,
        size: str = "1024x1024",
        quality: str = "low",
        image_format: str = "png",
        model: str = "gpt-image-2",
        n: int = 1,
    ):
        payload = {
            "model": model,
            "prompt": prompt,
            "n": n,
            "size": size,
            "quality": quality,
            "format": image_format,
        }
        return self._post_json(payload)

    def save_result_image(self, result, output_dir="."):
        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)
        items = result.get("data") or []
        if not items:
            raise RuntimeError("gpt-image-2 response does not contain data items")

        first = items[0]
        image_format = first.get("format") or "png"
        target = output_path / f"gpt-image-2-{int(time.time() * 1000)}.{image_format.lower().lstrip('.')}"

        if first.get("url"):
            req = urllib.request.Request(first["url"], headers={"User-Agent": "Python urllib"})
            with urllib.request.urlopen(req, timeout=180) as response:
                target.write_bytes(response.read())
            return str(target)

        if first.get("b64_json"):
            target.write_bytes(base64.b64decode(first["b64_json"]))
            return str(target)

        raise RuntimeError("Unsupported gpt-image-2 response shape")
