import json
import sys

sys.path.insert(0, "backend")

from app import create_app  # noqa: E402


def main():
    app = create_app()
    client = app.test_client()
    checks = [
        ("GET", "/api/health", None),
        ("GET", "/api/project", None),
        (
            "POST",
            "/api/story-reply/respond",
            {
                "movie_id": "f1",
                "time": 0,
                "reply_type": "poster",
                "poster_prompt": "test",
                "focus_box": {"x": 0.1, "y": 0.1, "width": 0.4, "height": 0.4},
            },
        ),
        (
            "POST",
            "/api/world-fate/space",
            {"movie_id": "invisible_guest", "time": 0, "image_model": "wan2.7"},
        ),
        ("POST", "/api/event-relation/options", {"movie_id": "f1", "time": 0}),
    ]
    results = []

    for method, url, payload in checks:
        response = client.get(url) if method == "GET" else client.post(url, json=payload)
        data = response.get_json(silent=True) or {}
        results.append(
            {
                "method": method,
                "url": url,
                "status_code": response.status_code,
                "status": data.get("status"),
                "mode": data.get("mode"),
            }
        )

    print(json.dumps(results, ensure_ascii=False, indent=2))

    failures = [
        item
        for item in results
        if item["status_code"] >= 400 or item.get("status") == "error"
    ]
    if failures:
        raise SystemExit(1)


if __name__ == "__main__":
    main()
