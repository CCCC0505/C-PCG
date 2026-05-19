import base64
import subprocess
from pathlib import Path

import imageio_ffmpeg


class FrameCaptureError(RuntimeError):
    pass


def capture_frame_png(video_path: Path, seconds: float) -> bytes:
    if seconds < 0:
        raise FrameCaptureError("time must be non-negative")
    if not video_path.exists():
        raise FrameCaptureError(f"missing video file: {video_path}")

    ffmpeg_path = imageio_ffmpeg.get_ffmpeg_exe()
    command = [
        ffmpeg_path,
        "-hide_banner",
        "-loglevel",
        "error",
        "-ss",
        f"{seconds:.3f}",
        "-i",
        str(video_path),
        "-frames:v",
        "1",
        "-f",
        "image2pipe",
        "-vcodec",
        "png",
        "-",
    ]
    result = subprocess.run(
        command,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        check=False,
    )
    if result.returncode != 0 or not result.stdout:
        message = result.stderr.decode("utf-8", errors="replace").strip()
        raise FrameCaptureError(message or "ffmpeg could not extract a frame")
    return result.stdout


def image_bytes_to_data_url(image_bytes: bytes) -> str:
    encoded = base64.b64encode(image_bytes).decode("ascii")
    return f"data:image/png;base64,{encoded}"
