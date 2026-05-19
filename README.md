# PCG 赛项目

这是一个围绕长视频互动体验的演示项目。当前主体由原生前端和 Flask 后端组成：

- `index.html`：页面结构与功能面板挂载点
- `index.css`：视觉、播放器、功能工作区和响应式样式
- `index.js`：电影列表、播放器、海报生成器、导演时刻、AI 关系因果台等交互逻辑
- `backend/`：AI 能力与本地降级接口
- `assets/`：电影海报、预览视频、演示视频和关键帧素材
- `docs/`：方案文档
- `tools/static-check.js`：项目静态检查脚本

## 当前功能

- Movies：电影海报墙，支持悬停预览；`Demo进入` 卡片会进入完整播放器。
- 播放器：播放、静音、进度条、跳转、倍速、全屏、Info 面板。
- 海报生成器：暂停取帧、框选画面区域、填写提示词，调用后端生成海报；无外部 API 时使用本地降级结果。
- 越狱观众（导演时刻）：基于暂停帧生成可探索空间，框选物体读取记忆，再把线索送入导演剪辑画布。
- AI 关系因果台：生成主角与短线角色关系图谱，调整关系边后触发/阻断事件，并把结果收束成不破坏主线的局部视频改写。

## 启动方式

前端可以直接打开：

```text
index.html
```

如需使用 AI/取帧接口，先启动后端：

```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
Copy-Item .env.example .env
python server.py
```

默认后端地址是：

```text
http://127.0.0.1:8000
```

## 静态检查

在项目根目录运行：

```powershell
node .\tools\static-check.js
```

检查内容包括：

- 前端入口文件是否存在
- `index.js` 语法
- 后端 Python 语法
- `getElementById()` 引用是否能匹配到静态或动态生成的 DOM id
- 前端引用的 `assets/` 资源是否存在
- 前端 API 常量是否能匹配到 Flask 路由

## 后端接口

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

## AI 配置

`.env.example` 已列出可配置项。未填写 `DASHSCOPE_API_KEY` 或 `FOURZAPI_API_KEY` 时，项目仍会尽量返回本地降级结果，方便演示交互流程。
