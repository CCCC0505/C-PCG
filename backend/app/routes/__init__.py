from flask import Blueprint


api_bp = Blueprint("api", __name__)


from . import system  # noqa: E402,F401
from . import story_reply  # noqa: E402,F401
from . import world_fate  # noqa: E402,F401
from . import event_relation  # noqa: E402,F401
