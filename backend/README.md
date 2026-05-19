# PCG Backend

Flask 后端负责给前端提供取帧、剧情分析、海报生成、导演时刻和 AI 事件导演台接口。外部模型不可用时，多数接口会返回本地降级结果，保证前端演示流程可以继续跑通。

## 启动

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
Copy-Item .env.example .env
python server.py
```

默认监听：

```text
http://127.0.0.1:8000
```

## 目录

```text
backend/
├─ app/
│  ├─ routes/
│  │  ├─ system.py
│  │  ├─ story_reply.py
│  │  ├─ world_fate.py
│  │  └─ event_relation.py
│  ├─ services/
│  ├─ config.py
│  └─ __init__.py
├─ generated/
├─ .env.example
├─ requirements.txt
└─ server.py
```

## 接口

- `GET /`
- `GET /api/health`
- `GET /api/project`
- `POST /api/story-reply/respond`
- `POST /api/world-fate/sync`
- `POST /api/world-fate/space`
- `POST /api/world-fate/memory`
- `POST /api/world-fate/frames`
- `POST /api/world-fate/video`
- `POST /api/event-relation/options`
- `POST /api/event-relation/commit`
- `POST /api/event-relation/patches`
- `POST /api/event-relation/frames`
- `POST /api/event-relation/video`

## 配置

复制 `.env.example` 为 `.env` 后按需填写：

- `DASHSCOPE_API_KEY`：通义/万相相关能力
- `FOURZAPI_API_KEY`：`gpt-image-2` 图片生成能力
- `APP_HOST` / `APP_PORT`：服务监听地址
- `CORS_ORIGINS`：允许访问 `/api/*` 的前端来源

常用默认值已经写在 `app/config.py` 中。
