from datetime import datetime


def log_debug(debug_steps: list, event: str, **details) -> None:
    debug_steps.append(
        {
            "time": datetime.now().strftime("%H:%M:%S"),
            "event": event,
            "details": details,
        }
    )
