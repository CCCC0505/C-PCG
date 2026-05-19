const introMark = document.getElementById("introMark");
const markStage = document.querySelector(".mark-stage");
const portalShell = document.getElementById("portalShell");
const clouds = document.querySelectorAll(".cloud");
const tabs = Array.from(document.querySelectorAll(".window-tab"));
const windowContent = document.getElementById("windowContent");
const statusLabel = document.getElementById("statusLabel");
const backendStatus = document.getElementById("backendStatus");
const windowBody = document.querySelector(".window-body");
const playerLayer = document.getElementById("playerLayer");
const playerIntro = document.getElementById("playerIntro");
const playerIntroVideo = document.getElementById("playerIntroVideo");
const playerStage = document.getElementById("playerStage");
const playerMain = document.getElementById("playerMain");
const playerCinema = document.getElementById("playerCinema");
const playerThemeMedia = document.getElementById("playerThemeMedia");
const playerVideo = document.getElementById("playerVideo");
const playerTitle = document.getElementById("playerTitle");
const playerMeta = document.getElementById("playerMeta");
const playerFunctionsToggle = document.getElementById("playerFunctionsToggle");
const playerFunctionsPanel = document.getElementById("playerFunctionsPanel");
const playerFunctionsHome = document.getElementById("playerFunctionsHome");
const playerFunctionsStoryDetail = document.getElementById("playerFunctionsStoryDetail");
const storyReplyEntry = document.getElementById("storyReplyEntry");
const storyReplyModelToggle = document.getElementById("storyReplyModelToggle");
const storyReplyModelDrawer = document.getElementById("storyReplyModelDrawer");
const worldFateEntry = document.getElementById("worldFateEntry");
const eventRelationEntry = document.getElementById("eventRelationEntry");
const worldFateWorkspace = document.getElementById("worldFateWorkspace");
const eventRelationWorkspace = document.getElementById("eventRelationWorkspace");
const worldFateBack = document.getElementById("worldFateBack");
const worldFateFeatureVideo = document.getElementById("worldFateFeatureVideo");
const eventRelationFeatureVideo = document.getElementById("eventRelationFeatureVideo");
const worldFateWorlds = document.getElementById("worldFateWorlds");
const worldFateCanvas = document.getElementById("worldFateCanvas");
const worldFateGenerateSpace = document.getElementById("worldFateGenerateSpace");
const worldFateUploadInput = document.getElementById("worldFateUploadInput");
const worldFateResetSpace = document.getElementById("worldFateResetSpace");
const worldFateBrowseMode = document.getElementById("worldFateBrowseMode");
const worldFateSelectMode = document.getElementById("worldFateSelectMode");
const worldFateReadMemory = document.getElementById("worldFateReadMemory");
const worldFateClearSelection = document.getElementById("worldFateClearSelection");
const worldFateSpaceStatus = document.getElementById("worldFateSpaceStatus");
const worldFateSpaceViewport = document.getElementById("worldFateSpaceViewport");
const worldFateSpaceStage = document.getElementById("worldFateSpaceStage");
const worldFateSpaceCanvas = document.getElementById("worldFateSpaceCanvas");
const worldFateSpaceImage = document.getElementById("worldFateSpaceImage");
const worldFateSpaceHotspots = document.getElementById("worldFateSpaceHotspots");
const worldFateSpaceSelection = document.getElementById("worldFateSpaceSelection");
const worldFateSpaceHint = document.getElementById("worldFateSpaceHint");
const worldFateMemoryCard = document.getElementById("worldFateMemoryCard");
const worldFateClueBasket = document.getElementById("worldFateClueBasket");
const worldFateClueSummary = document.getElementById("worldFateClueSummary");
const worldFateModelToggle = document.getElementById("worldFateModelToggle");
const worldFateModelDrawer = document.getElementById("worldFateModelDrawer");
const worldFatePrompt = document.getElementById("worldFatePrompt");
const worldFateSubmit = document.getElementById("worldFateSubmit");
const worldFateConfirmPlot = document.getElementById("worldFateConfirmPlot");
const worldFateConfirmFrames = document.getElementById("worldFateConfirmFrames");
const worldFateStatus = document.getElementById("worldFateStatus");
const worldFateCustomModal = document.getElementById("worldFateCustomModal");
const worldFateCustomModalBackdrop = document.getElementById("worldFateCustomModalBackdrop");
const worldFateCustomCancel = document.getElementById("worldFateCustomCancel");
const worldFateCustomConfirm = document.getElementById("worldFateCustomConfirm");
const worldFateCustomInput = document.getElementById("worldFateCustomInput");
const worldFateCustomStatus = document.getElementById("worldFateCustomStatus");
const storyReplyBack = document.getElementById("storyReplyBack");
const storyReplyStatus = document.getElementById("storyReplyStatus");
const storyReplyGenerate = document.getElementById("storyReplyGenerate");
const storyReplyResult = document.getElementById("storyReplyResult");
const storyReplyPrompt = document.getElementById("storyReplyPrompt");
const storyReplySelectionSummary = document.getElementById("storyReplySelectionSummary");
const storyReplySelectionClear = document.getElementById("storyReplySelectionClear");
const storyReplySelectionSurface = document.getElementById("storyReplySelectionSurface");
const storyReplySelectionHint = document.getElementById("storyReplySelectionHint");
const storyReplySelectionBox = document.getElementById("storyReplySelectionBox");
const storyReplyTypeButtons = Array.from(document.querySelectorAll(".story-reply-type"));
const eventRelationBack = document.getElementById("eventRelationBack");
const eventRelationStatus = document.getElementById("eventRelationStatus");
const eventRelationGenerateGraph = document.getElementById("eventRelationGenerateGraph");
const eventRelationReset = document.getElementById("eventRelationReset");
const eventRelationFrameInsight = document.getElementById("eventRelationFrameInsight");
const eventRelationCueLayer = document.getElementById("eventRelationCueLayer");
const eventRelationStages = document.getElementById("eventRelationStages");
const eventRelationGraph = document.getElementById("eventRelationGraph");
const eventRelationOptions = document.getElementById("eventRelationOptions");
const eventRelationLedger = document.getElementById("eventRelationLedger");
const eventRelationResult = document.getElementById("eventRelationResult");
const playerInfoToggle = document.getElementById("playerInfoToggle");
const playerInfoPanel = document.getElementById("playerInfoPanel");
const playerInfoBackdrop = document.getElementById("playerInfoBackdrop");
const playerInfoClose = document.getElementById("playerInfoClose");
const playerInfoPreview = document.getElementById("playerInfoPreview");
const playerInfoLabel = document.getElementById("playerInfoLabel");
const playerInfoTitle = document.getElementById("playerInfoTitle");
const playerInfoMeta = document.getElementById("playerInfoMeta");
const playerInfoFacts = document.getElementById("playerInfoFacts");
const playerInfoText = document.getElementById("playerInfoText");
const playerInfoDetail = document.getElementById("playerInfoDetail");
const playerInfoCredits = document.getElementById("playerInfoCredits");
const playerInfoTags = document.getElementById("playerInfoTags");
const playerFoot = document.getElementById("playerFoot");
const playerPlayToggle = document.getElementById("playerPlayToggle");
const playerCurrentTime = document.getElementById("playerCurrentTime");
const playerDurationTime = document.getElementById("playerDurationTime");
const playerSeek = document.getElementById("playerSeek");
const playerMuteToggle = document.getElementById("playerMuteToggle");
const playerClose = document.getElementById("playerClose");
const playerScreen = document.querySelector(".player-screen");
const playerFunctionButtons = Array.from(document.querySelectorAll(".player-function-btn"));
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

let activeTab = "movies";
let renderToken = 0;
let portalReady = false;
let playerToken = 0;
let activePlayerItem = null;
let playerInfoWasPlaying = false;
let playerFunctionsView = "home";
let storyReplySelectedType = "poster";
let storyReplyBusy = false;
let storyReplySelection = null;
let storyReplySelectionFrameTime = null;
let storyReplySelectionDrag = null;
let worldFateWorkspaceOpen = false;
let worldFateSelectedWorldId = "preset-world-01";
let worldFateBusy = false;
let worldFateDragState = null;
let worldFateCustomRule = "";
let worldFateStageId = "space";
let worldFateStoryReady = false;
let worldFateFramesReady = false;
let worldFateVideoRequested = false;
let storyReplyImageModel = "wan2.7";
let worldFateImageModel = "wan2.7";
let worldFateSpaceBusy = false;
let worldFateMemoryBusy = false;
let worldFateSpaceMode = "browse";
let worldFateSpaceData = null;
let worldFateSpaceView = { offsetX: 0, offsetY: 0 };
let worldFateSpaceDrag = null;
let worldFateSpaceSelectionBox = null;
let worldFateSpaceSelectionDrag = null;
let worldFateLatestMemory = null;
let worldFateClues = [];
let worldFatePanoramaState = null;
let worldFatePlayerSnapshot = null;
let eventRelationWorkspaceOpen = false;
let eventRelationBusy = false;
let eventRelationFrameTime = null;
let eventRelationGraphPayload = null;
let eventRelationSelectedRelationId = null;
let eventRelationAdjustedRelationState = null;
let eventRelationOptionsPayload = null;
let eventRelationSelectedEvent = null;
let eventRelationCommittedPayload = null;
let eventRelationPatchesPayload = null;
let eventRelationFramesPayload = null;
let eventRelationVideoPayload = null;
let eventRelationCueRequestId = 0;
const INTRO_DEMO_SOURCE = "./assets/videos/intro/tx-pcg-demo.mp4";
const INTRO_DEMO_DURATION_MS = 3000;
const PLAYER_REPEAT_ENTRY_DELAY_MS = 140;
const PLAYER_INTRO_HISTORY_KEY = "pcg-player-intro-history";
let playerIntroHistory = loadPlayerIntroHistory();
const BACKEND_API_ORIGIN = window.location.protocol === "file:"
  ? "http://127.0.0.1:8000"
  : window.location.origin;
const apiUrl = path => BACKEND_API_ORIGIN + path;
const BACKEND_HEALTH_API_URL = apiUrl("/api/health");
const STORY_REPLY_API_URL = apiUrl("/api/story-reply/respond");
const WORLD_FATE_API_URL = apiUrl("/api/world-fate/sync");
const WORLD_FATE_FRAMES_API_URL = apiUrl("/api/world-fate/frames");
const WORLD_FATE_VIDEO_API_URL = apiUrl("/api/world-fate/video");
const WORLD_FATE_SPACE_API_URL = apiUrl("/api/world-fate/space");
const WORLD_FATE_MEMORY_API_URL = apiUrl("/api/world-fate/memory");
const EVENT_RELATION_OPTIONS_API_URL = apiUrl("/api/event-relation/options");
const EVENT_RELATION_RELATION_EVENTS_API_URL = apiUrl("/api/event-relation/relation-events");
const EVENT_RELATION_COMMIT_API_URL = apiUrl("/api/event-relation/commit");
const EVENT_RELATION_PATCHES_API_URL = apiUrl("/api/event-relation/patches");
const EVENT_RELATION_FRAMES_API_URL = apiUrl("/api/event-relation/frames");
const EVENT_RELATION_VIDEO_API_URL = apiUrl("/api/event-relation/video");
const EVENT_RELATION_MOVIE_ID = "f1";
const EVENT_RELATION_FEATURE_VIDEO = "./assets/movies/f1/preview.mp4";
const EVENT_RELATION_STAGE_STEPS = [
  { id: "graph", title: "角色关系图谱", status: "等待生成" },
  { id: "cue", title: "选择关系边", status: "等待事件点" },
  { id: "relation", title: "事件写入关系", status: "等待改写" },
  { id: "impact", title: "触发/阻断推演", status: "等待推演" },
  { id: "generate", title: "局部视频改写", status: "等待生成" },
];
const WORLD_FATE_MOVIE_ID = "invisible_guest";
const WORLD_FATE_FEATURE_VIDEO = "./assets/movies/kanbujiandekeren/看不见的客人切片.mp4";
const WORLD_FATE_FEATURE_TITLE = "看不见的客人 / 导演时刻";
const WORLD_FATE_FEATURE_META = "悬疑叙事切片 / 默认关键帧驱动境外空间与线索生成";
const WORLD_FATE_SPACE_REFERENCE_IMAGE = "./assets/pictures/导演时刻-关键帧/关键帧.png";
const WORLD_FATE_CURATED_HOTSPOTS = [
  { id: "montblanc-pen", label: "黑色万宝龙钢笔", area: "中央茶几区", box: { x: 0.47, y: 0.55, width: 0.05, height: 0.08 } },
  { id: "silver-stopwatch", label: "银色机械秒表", area: "中央茶几区", box: { x: 0.54, y: 0.56, width: 0.05, height: 0.06 } },
  { id: "spain-map", label: "折叠的西班牙地图", area: "中央茶几区", box: { x: 0.38, y: 0.50, width: 0.16, height: 0.13 } },
  { id: "daniel-newspaper", label: "丹尼尔失踪案报纸剪报", area: "中央茶几区", box: { x: 0.60, y: 0.54, width: 0.13, height: 0.10 } },
  { id: "goodman-notebook", label: "古德曼黑色笔记本", area: "中央茶几区", box: { x: 0.43, y: 0.63, width: 0.15, height: 0.10 } },
  { id: "adrian-lighter", label: "艾德里安金色打火机", area: "中央茶几区", box: { x: 0.72, y: 0.56, width: 0.05, height: 0.06 } },
  { id: "adrian-jacket", label: "艾德里安西装外套", area: "沙发区", box: { x: 0.66, y: 0.66, width: 0.15, height: 0.16 } },
  { id: "water-glass", label: "茶几玻璃杯", area: "沙发区", box: { x: 0.52, y: 0.62, width: 0.04, height: 0.07 } },
  { id: "sofa-cushions", label: "沙发上的两个靠垫", area: "沙发区", box: { x: 0.58, y: 0.70, width: 0.20, height: 0.14 } },
  { id: "family-photo", label: "艾德里安全家福", area: "背景墙区", box: { x: 0.74, y: 0.23, width: 0.13, height: 0.17 } },
  { id: "company-award", label: "公司获奖证书", area: "背景墙区", box: { x: 0.58, y: 0.22, width: 0.12, height: 0.17 } },
  { id: "modern-art", label: "墙上现代艺术画", area: "背景墙区", box: { x: 0.42, y: 0.18, width: 0.17, height: 0.20 } },
  { id: "opposite-window", label: "对面大楼窗户", area: "窗户区", box: { x: 0.10, y: 0.18, width: 0.16, height: 0.25 } },
  { id: "windowsill-plant", label: "窗台绿植", area: "窗户区", box: { x: 0.19, y: 0.53, width: 0.08, height: 0.13 } },
  { id: "city-night-view", label: "窗外城市夜景", area: "窗户区", box: { x: 0.06, y: 0.05, width: 0.25, height: 0.15 } },
  { id: "goodman-briefcase", label: "古德曼黑色公文包", area: "古德曼随身物品区", box: { x: 0.23, y: 0.69, width: 0.12, height: 0.16 } },
  { id: "goodman-glasses", label: "古德曼眼镜", area: "古德曼随身物品区", box: { x: 0.30, y: 0.36, width: 0.04, height: 0.04 } },
  { id: "goodman-watch", label: "古德曼手腕手表", area: "古德曼随身物品区", box: { x: 0.35, y: 0.57, width: 0.04, height: 0.05 } },
  { id: "shoe-cabinet", label: "门口鞋柜", area: "门口走廊区", box: { x: 0.84, y: 0.68, width: 0.11, height: 0.15 } },
  { id: "door-intercom", label: "门禁对讲机", area: "门口走廊区", box: { x: 0.90, y: 0.34, width: 0.05, height: 0.10 } },
];
const WORLD_FATE_CURATED_MEMORIES = {
  "montblanc-pen": {
    object_name: "万宝龙签字笔（改装信号发射器）",
    ai_reading: "表面是普通高档钢笔，笔杆内部安装了微型无线电信号发射器，将对话实时传输到对面大楼的接收设备。",
    story_connection: "古德曼用它让艾德里安在地图上标注沉车地点，全程传输了艾德里安的所有认罪供述。影片第 85 分 30 秒，艾德里安将钢笔插入胸前口袋；第 92 分 15 秒，发射器电池耗尽产生电流干扰，钢笔漏墨暴露身份。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚", "托马斯·加里夫"],
    related_moment: "第 81 分 45 秒（递笔）、第 85 分 30 秒（艾德里安插笔入袋）、第 92 分 15 秒（钢笔漏墨）。",
    director_value: "这是整个复仇计划的核心技术设备。如果钢笔不存在、被发现或被替换，托马斯夫妇将无法获得任何法律证据。",
    memory_text: "它不是单纯的道具，而是把口供从房间里偷运出去的装置。镜头一旦强调它，观众会立刻意识到这场谈话并非私密协商，而是一场被远端监听的审判。",
  },
  "silver-stopwatch": {
    object_name: "机械秒表",
    ai_reading: "古德曼用它制造“三小时后开庭”的虚假紧迫感，同时精确控制与真正古德曼到达之间的时间差。",
    story_connection: "古德曼一进门就启动秒表，声称“我们只有 180 分钟”。但实际上她只有约 60 分钟，因为真正的古德曼会在一小时后到达。影片第 93 分整，秒表停止，真正的古德曼正好按下门铃。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）"],
    related_moment: "第 12 分 30 秒（启动秒表）、第 93 分整（秒表停止，门铃响起）。",
    director_value: "时间压力是艾德里安心理防线崩溃的关键。改变秒表的时间，或让艾德里安发现秒表的谎言，会直接影响他的坦白程度和时机。",
    memory_text: "它把抽象的紧迫感变成可以被听见、被看见的节拍器，是逼供节奏能够成立的机械心脏。",
  },
  "daniel-newspaper": {
    object_name: "丹尼尔失踪案的报纸剪报",
    ai_reading: "古德曼用它提醒艾德里安案件的严重性，同时为后续出示合成照片做铺垫。",
    story_connection: "古德曼在第 45 分 15 秒出示报纸，然后在第 48 分 20 秒出示关键合成照片，显示艾德里安在酒店被捕时埃尔维拉就在现场；第 80 分 10 秒，古德曼承认照片是合成的。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚", "丹尼尔·加里夫"],
    related_moment: "第 45 分 15 秒（出示报纸）、第 48 分 20 秒（出示合成照片）、第 80 分 10 秒（承认照片是合成的）。",
    director_value: "这是古德曼建立可信度的第一步。如果艾德里安提前发现照片是合成的，整个骗局将立即败露。",
    memory_text: "它在空间里代表公共叙事压力进入私人房间的瞬间，让这场对话从自保策略升级为真正的案件回流。",
  },
  "spain-map": {
    object_name: "折叠的西班牙地图",
    ai_reading: "地图把艾德里安的口供从抽象叙述压到具体地理位置，迫使他把沉车地点和行动路线落实到可验证坐标。",
    story_connection: "古德曼摊开地图后，艾德里安必须把丹尼尔被处理的位置说清楚，这让“我只是被卷入事故”的说辞转向可被追查的犯罪链。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚", "丹尼尔·加里夫"],
    related_moment: "对应古德曼要求艾德里安标注沉车地点的审讯段落。",
    director_value: "地图是谎言被空间坐标固定的瞬间。镜头强化它，会让观众看到供词如何从心理防线变成法律证据。",
    memory_text: "它把犯罪地点从记忆里拖回桌面，使“过去发生过什么”变成“现在必须指出在哪里”。",
  },
  "goodman-notebook": {
    object_name: "古德曼的黑色笔记本",
    ai_reading: "笔记本上写着“恐惧、时间、谎言、受害者、凶手”等词语，是假古德曼整理心理攻防节奏的外化道具。",
    story_connection: "她不是随机提问，而是围绕恐惧和时间压力逐步拆解艾德里安的自保叙述。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚"],
    related_moment: "适合对应她连续追问、重排时间线与迫使艾德里安补漏洞的段落。",
    director_value: "它能让观众提前感到这不是律师笔记，而是一套审讯脚本。改变笔记本内容会改变整场心理战的节奏。",
    memory_text: "这本笔记不是记录真相，而是在设计让真相自己露出来的路径。",
  },
  "adrian-lighter": {
    object_name: "艾德里安的金色打火机",
    ai_reading: "打火机象征艾德里安成功人士的控制感与身份包装，放在报纸旁边时，与丹尼尔失踪案形成强烈道德反差。",
    story_connection: "他试图维持体面身份，但桌面的案件材料不断提醒观众：这个体面身份正建立在掩盖与伪证上。",
    related_characters: ["艾德里安·多里亚"],
    related_moment: "适合放在艾德里安强调名誉、家庭与职业前途时作为切入。",
    director_value: "它能把角色的自我形象具体化。如果镜头让打火机靠近报纸，人物的体面与犯罪后果会在同一画面内冲突。",
    memory_text: "小道具保留了他的社会身份，也暴露了这层身份正在被桌上的证据烧穿。",
  },
  "adrian-jacket": {
    object_name: "艾德里安的西装外套",
    ai_reading: "外套搭在沙发扶手上，像是他暂时卸下的企业家盔甲，也暗示这场会谈让他的身份防护开始松动。",
    story_connection: "随着审讯推进，他从掌控者变成被盘问者，外套的松散状态与他的心理失控相互呼应。",
    related_characters: ["艾德里安·多里亚"],
    related_moment: "适合对应艾德里安被迫改口、情绪开始外泄的段落。",
    director_value: "如果导演把外套作为反复出现的边缘物件，可以让观众感到他的社会身份正在一层层脱落。",
    memory_text: "它不是衣物展示，而是人物防线松动的视觉残留。",
  },
  "water-glass": {
    object_name: "茶几上的玻璃杯",
    ai_reading: "玻璃杯记录了艾德里安在会谈中的紧张与生理反应，水面、指纹和摆放位置都可以成为压力的痕迹。",
    story_connection: "他越想保持镇定，越需要通过喝水、停顿和转移视线来争取时间。",
    related_characters: ["艾德里安·多里亚", "假古德曼（埃尔维拉·加里夫）"],
    related_moment: "适合对应艾德里安被追问后短暂停顿或喝水缓冲的时刻。",
    director_value: "玻璃杯可以承担节奏功能：一个伸手、一次停顿、一声轻响，都能让审讯压力变得可感。",
    memory_text: "它把人物的恐惧从语言里转移到身体动作里。",
  },
  "sofa-cushions": {
    object_name: "沙发上的两个靠垫",
    ai_reading: "靠垫让空间表面看起来像私人居所，但也强化了这场审讯对日常安全感的入侵。",
    story_connection: "会谈发生在看似舒适的室内，却被一步步改造成心理审讯场。",
    related_characters: ["艾德里安·多里亚", "假古德曼（埃尔维拉·加里夫）"],
    related_moment: "适合对应双方从律师会谈转向审讯对峙的过渡段落。",
    director_value: "它能强调空间反差：越舒适的布景，越能凸显人物无法逃离的压迫感。",
    memory_text: "它保留了客厅的日常感，也让这场非日常审判显得更冷。",
  },
  "family-photo": {
    object_name: "艾德里安与妻女的全家福",
    ai_reading: "全家福把艾德里安的父亲和丈夫身份固定在画面里，与他隐藏的罪行形成最直接的情感反差。",
    story_connection: "每当他谈到未来、名誉和自保，照片都提醒观众他押上的不只是案件结果，还有整个家庭身份。",
    related_characters: ["艾德里安·多里亚", "妻子与女儿"],
    related_moment: "适合放在艾德里安提到家庭、名誉和未来时作为反打镜头。",
    director_value: "它能把悬疑叙事里的道德代价具体化，让人物崩塌不只是法律风险，而是私人身份的全面破裂。",
    memory_text: "这不是单纯的情感布景，而是整套谎言最不愿被照亮的家庭镜像。",
  },
  "company-award": {
    object_name: "艾德里安公司的获奖证书",
    ai_reading: "获奖证书展示艾德里安的社会成就，也让他的犯罪遮掩带上“维护成功形象”的动机。",
    story_connection: "他越成功，越无法承受真相公开；这也解释了为什么他不断选择更深的谎言。",
    related_characters: ["艾德里安·多里亚"],
    related_moment: "适合对应艾德里安强调事业、公众形象和不能被定罪的段落。",
    director_value: "证书能把角色的外部身份和内在罪责放在同一空间里，形成稳定的讽刺压力。",
    memory_text: "它证明他拥有可被摧毁的身份，因此也解释他为什么不惜继续掩盖。",
  },
  "modern-art": {
    object_name: "墙上的现代艺术画",
    ai_reading: "现代艺术画提供冷峻、抽象的视觉背景，让人物对话更像一场被精心构图的心理实验。",
    story_connection: "它不直接参与案件，却强化空间的高端、疏离和被控制感。",
    related_characters: ["艾德里安·多里亚", "假古德曼（埃尔维拉·加里夫）"],
    related_moment: "适合对应双方在客厅中保持距离、互相试探的镜头。",
    director_value: "它能帮助导演建立空间气质：不是生活化争吵，而是冷静、精密、几何化的攻防。",
    memory_text: "抽象画让这场会谈看起来更像一盘已经摆好的棋局。",
  },
  "opposite-window": {
    object_name: "对面大楼的监听窗户",
    ai_reading: "表面只是普通城市夜景的一格窗户，实际上那里埋着托马斯的监听与录音装置，是房间外部的第二审讯场。",
    story_connection: "它证明这场谈话从来不是封闭空间里的私密协商，而是被家属精心设计的证据回收行动。",
    related_characters: ["托马斯·加里夫", "埃尔维拉·加里夫", "艾德里安·多里亚"],
    related_moment: "适合在揭面前后作为补镜头，解释证词为何能够被带出现场。",
    director_value: "如果没有这个外部监听点，母亲的表演就只能停留在心理报复，无法完成法律层面的闭环。",
    memory_text: "它把对面楼的一扇窗变成远程见证者，让城市夜景本身参与了复仇结构。",
  },
  "windowsill-plant": {
    object_name: "窗台上的绿植",
    ai_reading: "绿植是室内少数带有生活感的物件，放在监听窗与谈话现场之间，强化了平静表面下的危险。",
    story_connection: "它让窗边空间看似无害，反而更容易隐藏真正的监视关系。",
    related_characters: ["艾德里安·多里亚", "托马斯·加里夫"],
    related_moment: "适合对应镜头从房间内部转向窗外监听点的过渡。",
    director_value: "绿植可以作为视线遮挡和空间层次，用来延迟观众发现对面窗户的意义。",
    memory_text: "它让监视不显得突兀，因为危险藏在日常摆设后面。",
  },
  "city-night-view": {
    object_name: "窗外城市夜景",
    ai_reading: "城市夜景让案件不再只是房间内部的私人秘密，而是随时可能被外部世界看见、记录和审判。",
    story_connection: "对面楼的监听、警方的到来和真正古德曼的门铃都说明外部世界一直在逼近。",
    related_characters: ["托马斯·加里夫", "艾德里安·多里亚"],
    related_moment: "适合对应空间从密闭会谈扩展到外部监听结构的段落。",
    director_value: "夜景能让封闭空间产生外部压力：窗外越安静，观众越能感到有人正在看着这里。",
    memory_text: "城市不是背景，而是沉默的旁听席。",
  },
  "goodman-briefcase": {
    object_name: "古德曼的黑色公文包",
    ai_reading: "公文包承载假古德曼的职业伪装，是这场审讯得以成立的第一层可信外壳。",
    story_connection: "当公文包被摆进房间，艾德里安默认接受“这是一场律师会谈”的前提，也就一步步走进更深的叙事陷阱。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚"],
    related_moment: "适合在古德曼落座、翻资料或改变问话策略时反复被看见。",
    director_value: "它能让骗局的专业感具象化，也能作为身份伪装的视觉锚点，暗示这场会谈从一开始就不纯粹。",
    memory_text: "包里装的不只是文件，而是整场复仇得以合理进入房间的通行证。",
  },
  "goodman-glasses": {
    object_name: "古德曼的眼镜",
    ai_reading: "眼镜强化她专业、冷静、难以被情绪撼动的律师形象，同时遮住了真实身份的情感裂缝。",
    story_connection: "她越像真正的古德曼，艾德里安越愿意交出信任；这种信任正是骗局成立的关键。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚"],
    related_moment: "适合对应她观察艾德里安反应、等待对方露出破绽的近景。",
    director_value: "眼镜可以成为表演边界：取下、扶正或被镜片反光遮挡，都能提示观众她还有另一层身份。",
    memory_text: "它既是职业伪装，也是母亲情绪被强行压住的面具。",
  },
  "goodman-watch": {
    object_name: "古德曼手腕上的手表",
    ai_reading: "手表与秒表共同构成时间压力系统，提醒她必须在真正古德曼到达前完成套供。",
    story_connection: "她表面说有三小时，实际每一分钟都在和真实身份暴露赛跑。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）", "真正的维吉尼亚·古德曼"],
    related_moment: "适合对应她查看时间、调整问话速度或加速逼供的段落。",
    director_value: "它能把外部倒计时压进角色身体动作里，让观众感到骗局不是无限时长，而是在精确冒险。",
    memory_text: "秒表骗艾德里安，手表提醒她自己。",
  },
  "shoe-cabinet": {
    object_name: "门口鞋柜",
    ai_reading: "鞋柜标记房间入口，是外部人物进入、离开和身份暴露的空间边界。",
    story_connection: "真正古德曼最终按响门铃，说明这个入口一直是骗局最大的风险点。",
    related_characters: ["假古德曼（埃尔维拉·加里夫）", "真正的维吉尼亚·古德曼", "艾德里安·多里亚"],
    related_moment: "适合对应门铃响起、骗局时间耗尽的段落。",
    director_value: "门口区域能承担悬念倒计时：观众越清楚入口位置，越能感到外部真相正在靠近。",
    memory_text: "它让房间不是孤岛，而是随时会被现实打断的临时舞台。",
  },
  "door-intercom": {
    object_name: "墙上的门禁对讲机",
    ai_reading: "门禁对讲机连接房间内外，是真正古德曼到达、门铃响起和骗局终止的声音入口。",
    story_connection: "当门铃响起，假古德曼制造的时间叙事被现实世界直接打断。",
    related_characters: ["真正的维吉尼亚·古德曼", "假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚"],
    related_moment: "第 93 分整附近，秒表停止，真正古德曼按下门铃。",
    director_value: "它能把空间外的压力转成声音事件。只要对讲机响起，观众就会意识到谎言空间已经到期。",
    memory_text: "它是这场骗局的终场铃。",
  },
};
const STORY_REPLY_DEFAULT_PROMPT = "保留当前暂停帧的叙事张力，围绕框选主体生成一张正式电影海报。";
const WORLD_FATE_DIRECTOR_DEFAULT_PROMPT = "如果我是导演，我会基于这些线索重新安排人物动机、空间调度和后续冲突，让观众在探索之后获得新的剧情走向。";
const WORLD_FATE_PANORAMA_DEFAULT_FOV = 75;
const WORLD_FATE_PANORAMA_MIN_FOV = 35;
const WORLD_FATE_PANORAMA_MAX_FOV = 100;
const WORLD_FATE_PANORAMA_PITCH_LIMIT = Math.PI / 2 - 0.01;
const WORLD_FATE_PANORAMA_MIN_RATIO = 1.68;
const WORLD_FATE_PANORAMA_MAX_RATIO = 2.16;
const WORLD_FATE_STAGE_LIBRARY = [
  { id: "space", index: "01", title: "境外空间", note: "暂停当前帧并生成可探索空间" },
  { id: "memory", index: "02", title: "物体记忆", note: "框选物体，获取记忆线索" },
  { id: "director", index: "03", title: "导演剪辑", note: "带着线索进入导演台改写剧情" },
  { id: "output", index: "04", title: "生成输出", note: "产出节点、首尾帧与视频" },
];
const WORLD_FATE_OPTIONS = [
  {
    id: "preset-world-01",
    badge: "预设",
    title: "原剧情",
    note: "沿用《看不见的客人》原始剧情逻辑",
  },
  {
    id: "preset-world-02",
    badge: "预设",
    title: "预设世界观 02",
    note: "保留《看不见的客人》悬疑结构，但导向另一种剧情走向",
  },
  {
    id: "custom-world",
    badge: "自定义",
    title: "自定义世界观",
    note: "自定义规则入口待补充",
  },
];
const WORLD_FATE_SCENES = [
  {
    id: "scene-01",
    title: "事件 01",
    seedKey: "event-01",
    x: 60,
    y: 72,
    storyDescription: "",
    storyNote: "",
    frameStartHint: "原片首帧：酒店房间命案被迫进入叙述",
    frameEndHint: "原片尾帧：艾德里安开始搭建第一层说辞",
    clipHint: "视频待补充",
    frameStartUrl: "",
    frameEndUrl: "",
    frameLogicReason: "",
    videoUrl: "",
    videoTaskId: "",
    videoStatus: "",
    videoNote: "",
  },
  {
    id: "scene-02",
    title: "事件 02",
    seedKey: "event-02",
    x: 480,
    y: 72,
    storyDescription: "",
    storyNote: "",
    frameStartHint: "原片首帧：假古德曼进入房间并接管节奏",
    frameEndHint: "原片尾帧：会谈正式转成审讯",
    clipHint: "视频待补充",
    frameStartUrl: "",
    frameEndUrl: "",
    frameLogicReason: "",
    videoUrl: "",
    videoTaskId: "",
    videoStatus: "",
    videoNote: "",
  },
  {
    id: "scene-03",
    title: "事件 03",
    seedKey: "event-03",
    x: 900,
    y: 72,
    storyDescription: "",
    storyNote: "",
    frameStartHint: "原片首帧：车祸旧案被重新掀开",
    frameEndHint: "原片尾帧：沉车与弃救真相更完整地浮现",
    clipHint: "视频待补充",
    frameStartUrl: "",
    frameEndUrl: "",
    frameLogicReason: "",
    videoUrl: "",
    videoTaskId: "",
    videoStatus: "",
    videoNote: "",
  },
  {
    id: "scene-04",
    title: "事件 04",
    seedKey: "event-04",
    x: 1320,
    y: 72,
    storyDescription: "",
    storyNote: "",
    frameStartHint: "原片首帧：受害者父母的布局逼近核心",
    frameEndHint: "原片尾帧：房间里的权力位置继续倒转",
    clipHint: "视频待补充",
    frameStartUrl: "",
    frameEndUrl: "",
    frameLogicReason: "",
    videoUrl: "",
    videoTaskId: "",
    videoStatus: "",
    videoNote: "",
  },
  {
    id: "scene-05",
    title: "事件 05",
    seedKey: "event-05",
    x: 1740,
    y: 72,
    storyDescription: "",
    storyNote: "",
    frameStartHint: "原片首帧：供词结构开始连续失衡",
    frameEndHint: "原片尾帧：关键物证和时间压力逼近崩塌",
    clipHint: "视频待补充",
    frameStartUrl: "",
    frameEndUrl: "",
    frameLogicReason: "",
    videoUrl: "",
    videoTaskId: "",
    videoStatus: "",
    videoNote: "",
  },
  {
    id: "scene-06",
    title: "事件 06",
    seedKey: "event-06",
    x: 2160,
    y: 72,
    storyDescription: "",
    storyNote: "",
    frameStartHint: "原片首帧：母亲身份揭面前的最后压迫",
    frameEndHint: "原片尾帧：复仇与证据闭环完成",
    clipHint: "视频待补充",
    frameStartUrl: "",
    frameEndUrl: "",
    frameLogicReason: "",
    videoUrl: "",
    videoTaskId: "",
    videoStatus: "",
    videoNote: "",
  },
];
let worldFateNodeState = [];
const WORLD_FATE_BASELINE_STORY = {
  "event-01": {
    title: "酒店房间命案曝光",
    description: "原剧情里，艾德里安被困在酒店房间命案现场，必须在会谈开始前先稳住自己的第一层说辞。",
    note: "原剧情逻辑：先把密室命案与自保谎言的起点立住。",
  },
  "event-02": {
    title: "假古德曼接管谈话",
    description: "原剧情里，假古德曼进入房间后迅速掌握会谈节奏，把律师咨询变成一场有控制感的审讯。",
    note: "原剧情逻辑：通过律师外壳完成叙事控制权的第一次转移。",
  },
  "event-03": {
    title: "车祸旧案与沉车真相",
    description: "原剧情里，丹尼尔车祸、弃救与沉车的旧案被重新翻开，劳拉与艾德里安的共谋链条开始清晰。",
    note: "原剧情逻辑：把偶发事故逐步推成可被追责的共同犯罪。",
  },
  "event-04": {
    title: "加里夫夫妇逼近核心",
    description: "原剧情里，受害者父母通过长期观察和设计，开始把私人悲痛转成对艾德里安的反向围猎。",
    note: "原剧情逻辑：让真正主动的一方逐渐从加害者转向受害者家属。",
  },
  "event-05": {
    title: "供词崩塌与关键物证",
    description: "原剧情里，照片、时间压力和提问节奏叠压之下，艾德里安的供词体系开始连续坍塌。",
    note: "原剧情逻辑：让谎言从防线转成逼出真相的催化剂。",
  },
  "event-06": {
    title: "母亲揭面与复仇闭环",
    description: "原剧情里，假古德曼的真实身份揭晓，监听证据也完成闭环，受害者母亲让艾德里安亲口交出罪证。",
    note: "原剧情逻辑：把所有谎言收束回母亲面前接受审判。",
  },
};
const PLAYER_INFO_LIBRARY = {
  demoEntry: {
    label: "Demo / Intro",
    meta: "Demo 演示介绍",
    facts: [
      { label: "状态", value: "当前为首版可交互演示入口" },
      { label: "内容", value: "测试视频 / Info 面板 / Functions 功能区" },
      { label: "扩展方向", value: "动作类电影 / 悬疑类电影 / 多类型交互体验" },
    ],
    text: "这里是当前 Demo 的视频播放与交互说明区。现在接入的是测试视频，主要用于展示播放器、信息面板和右上角 Functions 功能入口之间的联动关系。",
    detail: "后续你可以把这里替换成具体项目介绍，例如不同电影类型的交互目标、用户体验路径、以及 AI 功能在播放中的介入方式。",
    credits: [
      "建议观看方式：先浏览当前测试视频，再点击右上角 Functions 查看已接入的交互模块。",
      "当前文案为预设占位说明，后续可以按项目详情改成正式版本。",
    ],
    tags: ["Demo入口", "视频播放区", "Functions交互", "可继续替换"],
  },
  f1: {
    meta: "Action / Drama · 2h 35m · PG-13",
    facts: [
      { label: "导演", value: "Joseph Kosinski" },
      { label: "编剧", value: "Ehren Kruger" },
      { label: "主演", value: "Brad Pitt / Damson Idris / Javier Bardem / Kerry Condon" },
      { label: "上映", value: "2025-06-27 北美院线 / IMAX" },
    ],
    text: "前 F1 天才车手 Sonny Hayes 在 1990 年代的一场赛道事故后远离顶级赛车。三十年后，他被前队友、APXGP 车队老板 Ruben Cervantes 找回围场，带着年轻新秀 Joshua Pearce 一起完成最后一次证明自己的机会。",
    detail: "这部片由 Apple Original Films 出品、Warner Bros. Pictures 负责全球发行，影片直接在真实大奖赛周末完成大量实拍，让虚构车队 APXGP 真正置身 F1 的赛道秩序里。",
    credits: [
      "角色信息：Brad Pitt 饰 Sonny Hayes，Damson Idris 饰 Joshua Pearce，Javier Bardem 饰 Ruben Cervantes，Kerry Condon 饰 Kate。",
      "幕后班底：Joseph Kosinski 执导，Ehren Kruger 编剧，Hans Zimmer 配乐；Jerry Bruckheimer、Lewis Hamilton、Brad Pitt 等参与制作。",
      "观看信息：影片于 2025 年 6 月 27 日在北美上映，2025 年 12 月 12 日起在 Apple TV 上线。",
    ],
    tags: ["F1", "运动剧情", "IMAX", "实景大奖赛"],
  },
};

const wait = function (ms) {
  return new Promise(function (resolve) {
    window.setTimeout(resolve, ms);
  });
};

function loadPlayerIntroHistory() {
  try {
    const stored = window.sessionStorage.getItem(PLAYER_INTRO_HISTORY_KEY);
    if (!stored) {
      return {};
    }

    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch (error) {
    return {};
  }
}

function persistPlayerIntroHistory() {
  try {
    window.sessionStorage.setItem(PLAYER_INTRO_HISTORY_KEY, JSON.stringify(playerIntroHistory));
  } catch (error) {}
}

function getPlayerIntroHistoryKey(item) {
  if (!item || typeof item !== "object") {
    return "";
  }

  const title = typeof item.title === "string" ? item.title.trim().toLowerCase() : "";
  const preview = typeof item.preview === "string" ? item.preview.trim().toLowerCase() : "";
  const slot = typeof item.slot === "string" ? item.slot.trim().toLowerCase() : "";
  return [title, preview, slot].filter(Boolean).join("::");
}

function hasSeenPlayerIntro(item) {
  const key = getPlayerIntroHistoryKey(item);
  return Boolean(key && playerIntroHistory[key]);
}

function markPlayerIntroSeen(item) {
  const key = getPlayerIntroHistoryKey(item);
  if (!key) {
    return;
  }

  playerIntroHistory[key] = Date.now();
  persistPlayerIntroHistory();
}

const TAB_CONTENT = {
  movies: {
    title: "Movie List",
    sub: "Movies / display rack",
    type: [
      { text: "电影陈列架  Movies Display Rack  PS：最下方为当前页说明", speed: 30 },
      { br: 1, pause: 400 },
      { text: "这是一个简洁的电影展示架，总计展示 10 部电影，同时附带评分与上映日期。鼠标悬停在海报上时，可以预览对应内容。目前只有“Demo进入”卡片接入了完整演示，用来体现长视频内容如何与 AI 功能结合，进一步增强沉浸感。", cls: "type-soft", speed: 22 },
      { br: 1, pause: 400 },
      { text: "整体风格以暖色调为主，预览和详情页的弹出效果参考了 Apple TV 的视觉体验。", cls: "type-soft", speed: 22 },
      { br: 1, pause: 400 },
      { text: "电影列表的内容、样式和功能都可以继续扩展。", cls: "type-soft", speed: 22 },
      { br: 1, pause: 400 },
      { text: "This is a concise movie display shelf that showcases 10 films with ratings and release dates. Hovering over a poster reveals a preview surface. At the moment, only the Demo Entry card opens the full interactive playback demo, mainly to show how long-form video experiences can be combined with AI features to deepen immersion.", cls: "type-soft", speed: 22 },
      { br: 1, pause: 400 },
      { text: "The overall visual direction uses warm tones, and the preview/detail transitions borrow from the feel of Apple TV.", cls: "type-soft", speed: 22 },
      { br: 1, pause: 400 },
      { text: "The movie shelf can keep expanding in both content and interaction design.", cls: "type-soft", speed: 22 },
    ],
    shelves: [
      [
        { title: "我，许可", caption: "豆瓣分：8.6 日期：2026-04-03", slot: "./assets/movies/wo-xuke/poster.png", preview: "./assets/movies/wo-xuke/preview.mp4" },
        { title: "总统的蛋糕", caption: "豆瓣分：7.9 日期：2025-05-16", slot: "./assets/movies/zongtong-dedangao/poster.png", preview: "./assets/movies/zongtong-dedangao/preview.mp4" },
        {
          title: "Demo进入",
          caption: "评分：10  日期：2026-05-06",
          slot: "./assets/movies/f1/poster.png",
          preview: "./assets/movies/f1/preview.mp4",
          hoverPreview: "./assets/pictures/demo进入海报/demo进入海报.png",
          cardPosterVariant: "demo-entry",
          demoId: "f1",
          infoKey: "demoEntry",
          playerMetaNote: "这里是视频播放区，这是当前测试视频，交互功能需要点击右上角Functions",
          playerPoster: "./assets/pictures/demo进入海报/demo进入海报.png",
          themeBackground: "./assets/pictures/demo进入海报/demo进入海报.png",
        },
        { title: "爱上平行时空的你", caption: "豆瓣分：8.1 日期：2025-10-09", slot: "./assets/movies/love-you-2x/poster.png", preview: "./assets/movies/love-you-2x/preview.mp4" },
        { title: "局外人", caption: "豆瓣分：7.2 日期：2025-09-02", slot: "./assets/movies/juwairen/poster.png", preview: "./assets/movies/juwairen/preview.mp4" },
      ],
      [
        { title: "闪灵", caption: "豆瓣分：8.3 日期：2026-01-30", slot: "./assets/movies/shanling/poster.png", preview: "./assets/movies/shanling/preview.mp4" },
        { title: "东京出租车", caption: "豆瓣分：8.0 日期：2025-10-29", slot: "./assets/movies/dongjing-chuzuche/poster.png", preview: "./assets/movies/dongjing-chuzuche/preview.mp4" },
        { title: "fate", caption: "自制海报 / 演示素材", slot: "./assets/movies/fate/poster.jpg", preview: "./assets/videos/intro/tx-pcg-demo.mp4" },
        { title: "呼啸山庄", caption: "豆瓣分：6.2 日期：2026-03-13", slot: "./assets/movies/huxiaoshanzhuang/poster.png", preview: "./assets/movies/huxiaoshanzhuang/preview.mp4" },
        { title: "21世纪大君夫人", caption: "豆瓣分：8.0 日期：2026-04-10", slot: "./assets/movies/21shiji-dajun-furen/poster.png", preview: "./assets/movies/21shiji-dajun-furen/preview.mp4" },
      ],
    ],
  },
  functions: {
    title: "AI interactive video system",
    sub: "Functions / long video narrative demo",
    type: [
      { text: "观众暂停长视频后，可以进入画面、取证、推理，并让 AI 只改写局部片段。", speed: 24 },
      { text: "核心不是替换整部影片，而是让观众参与剧情因果。", cls: "type-strong", speed: 22 },
    ],
    projects: [
      {
        icon: "01",
        title: "海报生成器",
        text: "用户暂停视频并框选喜欢的画面主体，AI 根据当前帧、框选区域和提示词生成电影质感海报。",
        tags: ["暂停取帧", "框选主体", "AI海报"],
      },
      {
        icon: "02",
        title: "走进剧情场景",
        text: "系统先生成可探索的空间场景，观众在场景中搜集线索，再把线索交给 AI 推进或改写剧情走向。",
        tags: ["3D场景", "线索收集", "剧情推进"],
      },
      {
        icon: "03",
        title: "线索驱动分支",
        text: "如果线索判断正确，AI 会延续原剧情并补全下一段；如果线索偏离，系统会生成新的场景、因果和剧情分支。",
        tags: ["取证推理", "分支剧情", "局部重写"],
      },
      {
        icon: "04",
        title: "人物关系图谱",
        text: "AI 先根据剧情抽取角色关系，形成主角与周边人物的关系图谱，帮助观众理解事件背后的情绪与利益变化。",
        tags: ["关系抽取", "角色图谱", "情绪张力"],
      },
      {
        icon: "05",
        title: "事件选择系统",
        text: "剧情播放时，事件选项会悬浮在视频画面上；观众的选择会触发或阻断关系变化，并影响后续局部片段。",
        tags: ["视频悬浮", "事件触发", "关系变化"],
      },
      {
        icon: "06",
        title: "局部视频改写",
        text: "系统优先改写主角身边的小事件与短片段，生成首尾帧和视频任务态，尽量不推翻原片主线。",
        tags: ["首尾帧", "Wan生成", "低成本改写"],
      },
    ],
  },
  motion: {
    title: "Motion script",
    sub: "Motion / preset sequence",
    type: [
      { text: "A sequence map for the page. ", speed: 24 },
      { text: "Timing first. ", cls: "type-strong", speed: 22 },
      { text: "Visual density second.", speed: 24 },
    ],
    cards: [
      {
        index: "A1",
        title: "Handwritten mark",
        text: "Center symbol appears alone, holds focus, then fades with blur and shrink.",
        tags: ["intro", "fade", "focus"],
      },
      {
        index: "A2",
        title: "Cloud dissolve",
        text: "Left and right clouds drift outward while the central mark disappears.",
        tags: ["cloud", "disperse", "sync"],
      },
      {
        index: "A3",
        title: "Portal rise",
        text: "The shell lifts in softly after the mark clears enough visual space.",
        tags: ["shell", "rise", "frame"],
      },
      {
        index: "A4",
        title: "Tab response",
        text: "Each section swaps with a short content fade and delayed reveal rhythm.",
        tags: ["tabs", "swap", "tempo"],
      },
    ],
  },
  contact: {
    title: "Feedback contact",
    sub: "Contact / demo feedback",
    type: [
      { text: "欢迎体验这个长视频 AI 交互叙事 demo。", speed: 24 },
      { text: "如果有改进建议、体验问题或合作想法，请通过邮箱联系我。", cls: "type-soft", speed: 22 },
    ],
    rows: [
      { label: "Project", value: "风灵月影-demo / 长视频 AI 交互叙事系统" },
      { label: "Feedback", value: "欢迎反馈功能卡顿、AI生成质量、剧情理解、交互流程和页面适配问题。此次UI设计有些差，请有意向改进者欢迎提出宝贵意见！！！" },
      { label: "Email", value: "2463238656@qq.com 有功能问题以及改进功能建议欢迎联系" },
      { label: "Note", value: "本 demo 重点展示：进入剧情 -> 进入画面取证/关系因果 -> AI 局部改写后续剧情片段。" },
    ],
  },
};

function isStale(token) {
  return token !== renderToken;
}

function normalizePosterPath(value) {
  if (!value) {
    return "";
  }

  const trimmed = String(value).trim();
  if (!trimmed || trimmed.toLowerCase() === "poster") {
    return "";
  }

  if (
    /^https?:\/\//i.test(trimmed) ||
    /^file:\/\//i.test(trimmed) ||
    trimmed.startsWith("./") ||
    trimmed.startsWith("../") ||
    trimmed.startsWith("/")
  ) {
    return trimmed;
  }

  if (/^[a-zA-Z]:[\\/]/.test(trimmed)) {
    return "file:///" + trimmed.replace(/\\/g, "/");
  }

  return trimmed;
}

function isVideoAsset(path) {
  return /\.(mp4|webm|ogg|mov|m4v)$/i.test(path);
}

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) {
    return "00:00";
  }

  const total = Math.floor(seconds);
  const minutes = String(Math.floor(total / 60)).padStart(2, "0");
  const remain = String(total % 60).padStart(2, "0");
  return minutes + ":" + remain;
}

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setBackendStatus(label, state) {
  if (!backendStatus) {
    return;
  }
  backendStatus.textContent = label;
  backendStatus.dataset.state = state || "idle";
}

async function checkBackendHealth() {
  if (window.location.protocol === "file:") {
    setBackendStatus("Backend optional", "checking");
    return;
  }
  setBackendStatus("Backend checking", "checking");
  try {
    const response = await fetch(BACKEND_HEALTH_API_URL, {
      method: "GET",
      cache: "no-store",
    });
    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      throw new Error("backend health check failed");
    }
    setBackendStatus("Backend online", "online");
  } catch (error) {
    setBackendStatus("Backend offline", "offline");
  }
}

function syncPlayerControls() {
  const duration = Number.isFinite(playerVideo.duration) ? playerVideo.duration : 0;
  const current = Number.isFinite(playerVideo.currentTime) ? playerVideo.currentTime : 0;
  const progress = duration > 0 ? (current / duration) * 100 : 0;

  playerCurrentTime.textContent = formatTime(current);
  playerDurationTime.textContent = formatTime(duration);
  playerSeek.value = String(Math.round(progress * 10));
  playerSeek.style.setProperty("--seek-progress", progress.toFixed(3) + "%");
  playerPlayToggle.textContent = playerVideo.paused ? "Play" : "Pause";
  playerMuteToggle.textContent = playerVideo.muted ? "Muted" : "Mute";

  playerFunctionButtons.forEach(function (button) {
    const action = button.dataset.playerAction;
    if (action === "toggle-play") {
      button.textContent = playerVideo.paused ? "Play / Pause" : "Pause / Play";
    }
    if (action === "speed-cycle") {
      const precision = Math.abs(playerVideo.playbackRate % 1) < 0.01 ? 0 : 2;
      button.textContent = "Speed " + playerVideo.playbackRate.toFixed(precision) + "x";
    }
    if (action === "fullscreen") {
      button.textContent = document.fullscreenElement ? "Exit Fullscreen" : "Fullscreen";
    }
  });

  syncStoryReplyPauseState();
}

function syncPlayerScreenSize() {
  if (!playerMain || !playerCinema) {
    return;
  }

  const rect = playerCinema.getBoundingClientRect();
  const controlHeight = playerFoot ? playerFoot.getBoundingClientRect().height : 0;
  const horizontalSafe = playerStage.classList.contains("is-functions-open") ? 20 : 28;
  const verticalSafe = 10;
  const availableWidth = Math.max(0, rect.width - horizontalSafe * 2);
  const availableHeight = Math.max(0, rect.height - controlHeight - verticalSafe);
  if (!availableWidth || !availableHeight) {
    return;
  }

  const targetWidth = Math.min(availableWidth, availableHeight * (16 / 9));
  playerStage.style.setProperty("--player-screen-width", targetWidth.toFixed(2) + "px");
}

function syncPlayerLayoutSoon() {
  window.requestAnimationFrame(function () {
    syncPlayerScreenSize();
    window.requestAnimationFrame(syncPlayerScreenSize);
  });
}

function resetPlayerScreenLayoutSoon() {
  if (playerStage) {
    playerStage.style.removeProperty("--player-screen-width");
  }
  syncPlayerLayoutSoon();
}

function clearPlayerThemeMedia() {
  playerThemeMedia.innerHTML = "";
}

function setPlayerThemeMedia(item) {
  clearPlayerThemeMedia();

  const source = normalizePosterPath(item.themeBackground || item.preview || item.poster || item.slot);
  if (!source) {
    return;
  }

  if (isVideoAsset(source)) {
    playerThemeMedia.innerHTML = '<video class="player-theme-video" muted loop playsinline preload="metadata" src="' + source + '"></video>';
    const themeVideo = playerThemeMedia.querySelector("video");
    if (themeVideo) {
      const playPromise = themeVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {});
      }
    }
    return;
  }

  playerThemeMedia.innerHTML = '<img class="player-theme-image" src="' + source + '" alt="">';
}

function getPlayerInfoContent(item) {
  const title = String((item && item.title) || "");
  const caption = String((item && item.caption) || "");
  const infoKey = String((item && item.infoKey) || "").trim();

  if (infoKey && PLAYER_INFO_LIBRARY[infoKey]) {
    const info = PLAYER_INFO_LIBRARY[infoKey];
    return {
      label: info.label || "Preview / Details",
      title: info.title || title || "Preview & Detail",
      meta: caption + " / " + info.meta,
      facts: info.facts,
      text: info.text,
      detail: info.detail,
      credits: info.credits,
      tags: info.tags,
    };
  }

  if (/F1/i.test(title)) {
    return {
      label: "Preview / Details",
      title: title || "Preview & Detail",
      meta: caption + " / " + PLAYER_INFO_LIBRARY.f1.meta,
      facts: PLAYER_INFO_LIBRARY.f1.facts,
      text: PLAYER_INFO_LIBRARY.f1.text,
      detail: PLAYER_INFO_LIBRARY.f1.detail,
      credits: PLAYER_INFO_LIBRARY.f1.credits,
      tags: PLAYER_INFO_LIBRARY.f1.tags,
    };
  }

  return {
    label: "Preview / Details",
    title: title || "Preview & Detail",
    meta: caption + " / Preview & Detail",
    facts: [
      { label: "状态", value: "通用占位信息" },
      { label: "内容", value: "预告 / 简介 / 扩展资料" },
    ],
    text: "在当前播放页中临时展开一个紧凑信息卡，用于承载预告片、剧情简介和扩展资料。",
    detail: "这里先接入通用结构，后续可以针对不同影片补充更完整的定制信息。",
    credits: ["这里先保留为通用详情模板，后续可以替换成真实影片资料。"],
    tags: ["预告", "详情", "扩展信息"],
  };
}

function buildPlayerInfoPreviewMarkup(item) {
  const source = normalizePosterPath(item.preview || item.themeBackground || item.poster || item.slot);
  if (!source) {
    return "";
  }

  if (isVideoAsset(source)) {
    return '<video class="player-info-media" muted loop playsinline preload="metadata" src="' + source + '"></video>';
  }

  return '<img class="player-info-media" src="' + source + '" alt="' + item.title + ' preview">';
}

function renderPlayerInfo(item) {
  const info = getPlayerInfoContent(item);

  playerInfoLabel.textContent = info.label || "Preview / Details";
  playerInfoTitle.textContent = info.title || item.title || "Preview & Detail";
  playerInfoMeta.textContent = info.meta;
  playerInfoFacts.innerHTML = "";
  playerInfoText.textContent = info.text;
  playerInfoDetail.textContent = info.detail;
  playerInfoCredits.innerHTML = "";
  playerInfoPreview.innerHTML = buildPlayerInfoPreviewMarkup(item);
  playerInfoTags.innerHTML = "";

  info.facts.forEach(function (fact) {
    const factNode = document.createElement("div");
    factNode.className = "player-info-fact";
    factNode.innerHTML =
      '<span class="player-info-fact-label">' + fact.label + "</span>" +
      '<span class="player-info-fact-value">' + fact.value + "</span>";
    playerInfoFacts.appendChild(factNode);
  });

  info.credits.forEach(function (entry) {
    const creditNode = document.createElement("div");
    creditNode.className = "player-info-credit";
    creditNode.textContent = entry;
    playerInfoCredits.appendChild(creditNode);
  });

  info.tags.forEach(function (tag) {
    const chip = document.createElement("span");
    chip.className = "player-info-tag";
    chip.textContent = tag;
    playerInfoTags.appendChild(chip);
  });
}

function setPlayerFunctionsOpen(nextState) {
  playerStage.classList.toggle("is-functions-open", nextState);
  playerFunctionsPanel.setAttribute("aria-hidden", nextState ? "false" : "true");
  playerFunctionsToggle.setAttribute("aria-expanded", nextState ? "true" : "false");
  playerFunctionsToggle.classList.toggle("is-active", nextState);
  if (nextState) {
    setPlayerFunctionsView("home");
    closeWorldFateWorkspace();
    closeEventRelationWorkspace();
  } else {
    closeWorldFateWorkspace();
    closeEventRelationWorkspace();
  }
  renderStoryReplySelectionOverlay();
  window.requestAnimationFrame(syncPlayerScreenSize);
}

function renderModuleModelDrawer(drawer, selectedValue, selector, datasetKey) {
  const options = Array.from(drawer.querySelectorAll(selector));
  options.forEach(function (option) {
    option.classList.toggle("is-active", option.dataset[datasetKey] === selectedValue);
  });
}

function setStoryReplyModelDrawerOpen(nextState) {
  storyReplyModelToggle.classList.toggle("is-active", nextState);
  storyReplyModelDrawer.classList.toggle("is-visible", nextState);
  storyReplyModelDrawer.setAttribute("aria-hidden", nextState ? "false" : "true");
  if (nextState) {
    setWorldFateModelDrawerOpen(false);
  }
}

function setWorldFateModelDrawerOpen(nextState) {
  worldFateModelToggle.classList.toggle("is-active", nextState);
  worldFateModelDrawer.classList.toggle("is-visible", nextState);
  worldFateModelDrawer.setAttribute("aria-hidden", nextState ? "false" : "true");
}

function renderModuleModelSwitches() {
  renderModuleModelDrawer(storyReplyModelDrawer, storyReplyImageModel, "[data-story-model]", "storyModel");
  renderModuleModelDrawer(worldFateModelDrawer, worldFateImageModel, "[data-world-fate-model]", "worldFateModel");
}

function createWorldFatePanoramaShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || "world fate panorama shader compile failed";
    gl.deleteShader(shader);
    throw new Error(message);
  }
  return shader;
}

function createWorldFatePanoramaProgram(gl, vertexSource, fragmentSource) {
  const vertexShader = createWorldFatePanoramaShader(gl, gl.VERTEX_SHADER, vertexSource);
  const fragmentShader = createWorldFatePanoramaShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  gl.deleteShader(vertexShader);
  gl.deleteShader(fragmentShader);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const message = gl.getProgramInfoLog(program) || "world fate panorama program link failed";
    gl.deleteProgram(program);
    throw new Error(message);
  }
  return program;
}

function ensureWorldFatePanoramaViewer() {
  if (worldFatePanoramaState) {
    return worldFatePanoramaState;
  }
  if (!worldFateSpaceCanvas || !worldFateSpaceViewport) {
    return null;
  }

  const gl = worldFateSpaceCanvas.getContext("webgl", {
    antialias: true,
    alpha: false,
    preserveDrawingBuffer: false,
  });
  if (!gl) {
    worldFatePanoramaState = {
      unsupported: true,
    };
    return worldFatePanoramaState;
  }

  const vertexShaderSource =
    "attribute vec2 a_position;" +
    "void main() {" +
    "  gl_Position = vec4(a_position, 0.0, 1.0);" +
    "}";

  const fragmentShaderSource =
    "precision mediump float;" +
    "uniform sampler2D u_texture;" +
    "uniform vec2 u_resolution;" +
    "uniform float u_yaw;" +
    "uniform float u_pitch;" +
    "uniform float u_fov;" +
    "const float PI = 3.141592653589793;" +
    "mat3 rotationX(float angle) {" +
    "  float s = sin(angle);" +
    "  float c = cos(angle);" +
    "  return mat3(" +
    "    1.0, 0.0, 0.0," +
    "    0.0, c, -s," +
    "    0.0, s, c" +
    "  );" +
    "}" +
    "mat3 rotationY(float angle) {" +
    "  float s = sin(angle);" +
    "  float c = cos(angle);" +
    "  return mat3(" +
    "    c, 0.0, s," +
    "    0.0, 1.0, 0.0," +
    "    -s, 0.0, c" +
    "  );" +
    "}" +
    "void main() {" +
    "  vec2 screen = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0;" +
    "  screen.x *= u_resolution.x / u_resolution.y;" +
    "  float focal = 1.0 / tan(radians(u_fov) * 0.5);" +
    "  vec3 direction = normalize(vec3(screen.x, -screen.y, -focal));" +
    "  direction = rotationY(u_yaw) * rotationX(u_pitch) * direction;" +
    "  float longitude = atan(direction.x, -direction.z);" +
    "  float latitude = asin(clamp(direction.y, -1.0, 1.0));" +
    "  vec2 uv = vec2(" +
    "    longitude / (2.0 * PI) + 0.5," +
    "    0.5 + latitude / PI" +
    "  );" +
    "  gl_FragColor = texture2D(u_texture, uv);" +
    "}";

  const program = createWorldFatePanoramaProgram(gl, vertexShaderSource, fragmentShaderSource);
  const aPositionLocation = gl.getAttribLocation(program, "a_position");
  const uTextureLocation = gl.getUniformLocation(program, "u_texture");
  const uResolutionLocation = gl.getUniformLocation(program, "u_resolution");
  const uYawLocation = gl.getUniformLocation(program, "u_yaw");
  const uPitchLocation = gl.getUniformLocation(program, "u_pitch");
  const uFovLocation = gl.getUniformLocation(program, "u_fov");

  const positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([
      -1, -1,
       1, -1,
      -1,  1,
      -1,  1,
       1, -1,
       1,  1,
    ]),
    gl.STATIC_DRAW
  );

  const texture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, texture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texImage2D(
    gl.TEXTURE_2D,
    0,
    gl.RGBA,
    1,
    1,
    0,
    gl.RGBA,
    gl.UNSIGNED_BYTE,
    new Uint8Array([16, 18, 22, 255])
  );

  worldFatePanoramaState = {
    unsupported: false,
    gl: gl,
    program: program,
    aPositionLocation: aPositionLocation,
    uTextureLocation: uTextureLocation,
    uResolutionLocation: uResolutionLocation,
    uYawLocation: uYawLocation,
    uPitchLocation: uPitchLocation,
    uFovLocation: uFovLocation,
    positionBuffer: positionBuffer,
    texture: texture,
    yaw: 0,
    pitch: 0,
    fov: WORLD_FATE_PANORAMA_DEFAULT_FOV,
    ratioMessage: "",
    currentImageName: "",
    sourceUrl: "",
    displayMode: "image",
    renderStarted: false,
  };

  return worldFatePanoramaState;
}

function resizeWorldFatePanoramaCanvas() {
  const state = ensureWorldFatePanoramaViewer();
  if (!state || state.unsupported || !worldFateSpaceCanvas || !worldFateSpaceViewport) {
    return;
  }
  const dpr = Math.max(1, Math.min(window.devicePixelRatio || 1, 2));
  const width = Math.max(1, Math.floor(worldFateSpaceViewport.clientWidth * dpr));
  const height = Math.max(1, Math.floor(worldFateSpaceViewport.clientHeight * dpr));
  if (worldFateSpaceCanvas.width !== width || worldFateSpaceCanvas.height !== height) {
    worldFateSpaceCanvas.width = width;
    worldFateSpaceCanvas.height = height;
  }
  state.gl.viewport(0, 0, worldFateSpaceCanvas.width, worldFateSpaceCanvas.height);
}

function renderWorldFatePanoramaFrame() {
  const state = ensureWorldFatePanoramaViewer();
  if (!state || state.unsupported) {
    return;
  }

  resizeWorldFatePanoramaCanvas();
  state.gl.clearColor(0.02, 0.03, 0.05, 1);
  state.gl.clear(state.gl.COLOR_BUFFER_BIT);
  state.gl.useProgram(state.program);
  state.gl.bindBuffer(state.gl.ARRAY_BUFFER, state.positionBuffer);
  state.gl.enableVertexAttribArray(state.aPositionLocation);
  state.gl.vertexAttribPointer(state.aPositionLocation, 2, state.gl.FLOAT, false, 0, 0);
  state.gl.activeTexture(state.gl.TEXTURE0);
  state.gl.bindTexture(state.gl.TEXTURE_2D, state.texture);
  state.gl.uniform1i(state.uTextureLocation, 0);
  state.gl.uniform2f(state.uResolutionLocation, worldFateSpaceCanvas.width, worldFateSpaceCanvas.height);
  state.gl.uniform1f(state.uYawLocation, state.yaw);
  state.gl.uniform1f(state.uPitchLocation, state.pitch);
  state.gl.uniform1f(state.uFovLocation, state.fov);
  state.gl.drawArrays(state.gl.TRIANGLES, 0, 6);
  window.requestAnimationFrame(renderWorldFatePanoramaFrame);
}

function startWorldFatePanoramaRenderer() {
  const state = ensureWorldFatePanoramaViewer();
  if (!state || state.unsupported || state.renderStarted) {
    return;
  }
  state.renderStarted = true;
  renderWorldFatePanoramaFrame();
}

function resetWorldFatePanoramaView() {
  const state = ensureWorldFatePanoramaViewer();
  if (!state || state.unsupported) {
    return;
  }
  state.yaw = 0;
  state.pitch = 0;
  state.fov = WORLD_FATE_PANORAMA_DEFAULT_FOV;
}

function isWorldFatePanoramaActive() {
  const state = ensureWorldFatePanoramaViewer();
  return Boolean(
    state &&
    !state.unsupported &&
    worldFateSpaceCanvas &&
    worldFateSpaceCanvas.classList.contains("is-visible")
  );
}

function loadWorldFatePanoramaSource(src, imageName) {
  const state = ensureWorldFatePanoramaViewer();
  if (!state || state.unsupported || !src) {
    return false;
  }
  if (state.sourceUrl === src) {
    return state.displayMode === "panorama";
  }

  state.sourceUrl = src;
  state.displayMode = "pending";
  state.ratioMessage = "";

  const image = new Image();
  if (/^https?:\/\//i.test(src)) {
    image.crossOrigin = "anonymous";
  }
  image.onload = function () {
    state.currentImageName = imageName || "空间图";
    resetWorldFatePanoramaView();
    const ratio = image.width / image.height;
    if (ratio < WORLD_FATE_PANORAMA_MIN_RATIO || ratio > WORLD_FATE_PANORAMA_MAX_RATIO) {
      state.displayMode = "image";
      state.ratioMessage = image.width + " x " + image.height + "，当前按普通空间图显示，不切到全景模式。";
      worldFateSpaceCanvas.classList.remove("is-visible");
      worldFateSpaceImage.classList.add("is-visible");
      renderWorldFateSpaceTransform();
      return;
    }

    try {
      state.gl.bindTexture(state.gl.TEXTURE_2D, state.texture);
      state.gl.pixelStorei(state.gl.UNPACK_FLIP_Y_WEBGL, false);
      state.gl.texImage2D(state.gl.TEXTURE_2D, 0, state.gl.RGBA, state.gl.RGBA, state.gl.UNSIGNED_BYTE, image);
      state.displayMode = "panorama";
      state.ratioMessage = image.width + " x " + image.height + "，已按全景图方式加载。";
      worldFateSpaceCanvas.classList.add("is-visible");
      worldFateSpaceImage.classList.remove("is-visible");
      renderWorldFateSpaceTransform();
    } catch (error) {
      state.displayMode = "image";
      state.ratioMessage = "当前图片未通过全景纹理加载，已退回普通图片显示。";
      worldFateSpaceCanvas.classList.remove("is-visible");
      worldFateSpaceImage.classList.add("is-visible");
      renderWorldFateSpaceTransform();
    }
  };
  image.onerror = function () {
    const fallbackState = ensureWorldFatePanoramaViewer();
    if (fallbackState && !fallbackState.unsupported) {
      fallbackState.displayMode = "image";
      fallbackState.ratioMessage = "当前图片无法作为全景图载入，已退回普通图片显示。";
    }
    worldFateSpaceCanvas.classList.remove("is-visible");
    worldFateSpaceImage.classList.add("is-visible");
  };
  image.src = src;
  return true;
}

function renderWorldFateWorlds() {
  worldFateWorlds.innerHTML = WORLD_FATE_STAGE_LIBRARY.map(function (stage) {
    const activeClass = stage.id === worldFateStageId ? " is-active" : "";
    const unlocked =
      stage.id === "space" ||
      (stage.id === "memory" && !!worldFateSpaceData) ||
      (stage.id === "director" && worldFateClues.length > 0) ||
      (stage.id === "output" && worldFateStoryReady);
    const unlockedClass = unlocked ? " is-unlocked" : "";
    return (
      '<button class="world-fate-world-card world-fate-stage-card' + activeClass + unlockedClass + '" type="button" data-stage-id="' + escapeHtml(stage.id) + '">' +
        '<span class="world-fate-world-badge">' + escapeHtml(stage.index) + "</span>" +
        '<strong class="world-fate-world-title">' + escapeHtml(stage.title) + "</strong>" +
        '<span class="world-fate-world-note">' + escapeHtml(stage.note) + "</span>" +
      "</button>"
    );
  }).join("");
}

function getWorldFateOrderedNodes() {
  return worldFateNodeState
    .slice()
    .sort(function (left, right) {
      if (Math.abs(left.y - right.y) > 120) {
        return left.y - right.y;
      }
      return left.x - right.x;
    })
    .map(function (node, index) {
      return Object.assign({}, node, { orderIndex: index + 1 });
    });
}

function getWorldFateFrameAssetStats() {
  const orderedNodes = getWorldFateOrderedNodes();
  let total = 0;
  let ready = 0;
  orderedNodes.forEach(function (node) {
    total += 2;
    if (node.frameStartUrl) {
      ready += 1;
    }
    if (node.frameEndUrl) {
      ready += 1;
    }
  });
  return {
    total: total,
    ready: ready,
    remaining: Math.max(0, total - ready),
  };
}

function getWorldFateVideoStats() {
  const orderedNodes = getWorldFateOrderedNodes();
  let total = 0;
  let ready = 0;
  let pendingEligible = 0;
  orderedNodes.forEach(function (node) {
    const hasFrames = Boolean(node.frameStartUrl && node.frameEndUrl);
    if (!hasFrames) {
      return;
    }
    total += 1;
    if (node.videoUrl || node.videoTaskId) {
      ready += 1;
    } else {
      pendingEligible += 1;
    }
  });
  return {
    total: total,
    ready: ready,
    remaining: Math.max(0, total - ready),
    pendingEligible: pendingEligible,
  };
}

function setWorldFateStatus(message, state) {
  worldFateStatus.textContent = message;
  worldFateStatus.dataset.state = state || "idle";
}

function refreshWorldFateActionButtons() {
  const frameStats = getWorldFateFrameAssetStats();
  const videoStats = getWorldFateVideoStats();
  worldFateSubmit.disabled = worldFateBusy || worldFateClues.length === 0;
  worldFateConfirmPlot.disabled = worldFateBusy || !worldFateStoryReady;
  worldFateConfirmFrames.disabled = worldFateBusy || videoStats.pendingEligible === 0;
  worldFateGenerateSpace.disabled = worldFateBusy || worldFateSpaceBusy || !playerStage.classList.contains("is-active");
  worldFateReadMemory.disabled = worldFateBusy || worldFateMemoryBusy || !worldFateSpaceSelectionBox || !worldFateSpaceData;
  worldFateClearSelection.disabled = !worldFateSpaceSelectionBox;
  if (worldFateConfirmPlot) {
    worldFateConfirmPlot.textContent = frameStats.remaining > 0
      ? "关键首尾帧（剩 " + frameStats.remaining + " 张）"
      : "关键首尾帧";
  }
  if (worldFateConfirmFrames) {
    worldFateConfirmFrames.textContent = videoStats.pendingEligible > 0
      ? "视频片段（剩 " + videoStats.pendingEligible + " 段）"
      : "视频片段";
  }
}

function setWorldFateCustomStatus(message, state) {
  worldFateCustomStatus.textContent = message;
  worldFateCustomStatus.dataset.state = state || "idle";
}

function setWorldFateSpaceStatus(message, state) {
  worldFateSpaceStatus.textContent = message;
  worldFateSpaceStatus.dataset.state = state || "idle";
}

function setWorldFateActiveStage(stageId) {
  if (!WORLD_FATE_STAGE_LIBRARY.some(function (stage) { return stage.id === stageId; })) {
    return;
  }
  worldFateStageId = stageId;
  renderWorldFateWorlds();
}

function buildWorldFateClueSummaryText() {
  if (!worldFateClues.length) {
    return "当前还没有导演线索。";
  }
  return worldFateClues.map(function (clue, index) {
    return (
      String(index + 1) +
      ". " +
      clue.object_name +
      " / " +
      clue.director_value
    );
  }).join("\n");
}

function getWorldFateDirectorWorldContext() {
  const clueSummary = buildWorldFateClueSummaryText();
  return {
    id: "custom-world",
    title: "看不见的客人 / 导演时刻",
    note: "导演线索：" + clueSummary,
  };
}

function renderWorldFateClueSummary() {
  if (!worldFateClueSummary) {
    return;
  }
  if (!worldFateClues.length) {
    worldFateClueSummary.textContent = "当前还没有导演线索。先去境外空间获取线索，再加入导演台。";
    return;
  }
  worldFateClueSummary.textContent =
    "已加入导演台的线索：" +
    worldFateClues.map(function (clue, index) {
      return String(index + 1) + "）" + clue.object_name;
    }).join("  ");
}

function renderWorldFateMemoryCard() {
  if (!worldFateLatestMemory) {
    worldFateMemoryCard.innerHTML =
      '<div class="world-fate-memory-placeholder">框选一个物体后，这里会返回它的线索理解、剧情关联、相关角色与导演意义。</div>';
    return;
  }

  const relatedCharacters = Array.isArray(worldFateLatestMemory.related_characters)
    ? worldFateLatestMemory.related_characters
    : [];

  worldFateMemoryCard.innerHTML =
    '<article class="world-fate-memory-entry">' +
      '<div class="world-fate-memory-entry-head">' +
        '<div>' +
          '<span class="world-fate-memory-kicker">Object Memory</span>' +
          '<strong class="world-fate-memory-title">' + escapeHtml(worldFateLatestMemory.object_name || "物体线索") + "</strong>" +
        "</div>" +
        '<button class="world-fate-submit is-secondary world-fate-memory-add" data-memory-action="add" type="button">加入导演台</button>' +
      "</div>" +
      '<div class="world-fate-memory-grid">' +
        '<div class="world-fate-memory-field"><span>AI理解</span><strong>' + escapeHtml(worldFateLatestMemory.ai_reading || "") + "</strong></div>" +
        '<div class="world-fate-memory-field"><span>剧情关联</span><strong>' + escapeHtml(worldFateLatestMemory.story_connection || "") + "</strong></div>" +
        '<div class="world-fate-memory-field"><span>相关角色</span><strong>' + escapeHtml(relatedCharacters.join(" / ") || "待补充") + "</strong></div>" +
        '<div class="world-fate-memory-field"><span>导演意义</span><strong>' + escapeHtml(worldFateLatestMemory.director_value || "") + "</strong></div>" +
      "</div>" +
      '<p class="world-fate-memory-copy">' + escapeHtml(worldFateLatestMemory.memory_text || "") + "</p>" +
      '<div class="world-fate-memory-footer">' + escapeHtml(worldFateLatestMemory.related_moment || "") + "</div>" +
    "</article>";
}

function renderWorldFateClueBasket() {
  if (!worldFateClues.length) {
    worldFateClueBasket.innerHTML =
      '<div class="world-fate-memory-placeholder">还没有加入导演台的线索。先从空间里获取 1 到 3 个关键物体线索。</div>';
    return;
  }

  worldFateClueBasket.innerHTML = worldFateClues.map(function (clue, index) {
    return (
      '<article class="world-fate-clue-entry" data-clue-id="' + escapeHtml(clue.id) + '">' +
        '<div class="world-fate-clue-entry-head">' +
          '<span class="world-fate-clue-index">Clue ' + String(index + 1).padStart(2, "0") + "</span>" +
          '<button class="world-fate-clue-remove" type="button" data-clue-action="remove">移除</button>' +
        "</div>" +
        '<strong class="world-fate-clue-title">' + escapeHtml(clue.object_name) + "</strong>" +
        '<p class="world-fate-clue-copy">' + escapeHtml(clue.director_value || clue.ai_reading || "") + "</p>" +
      "</article>"
    );
  }).join("");
}

function getWorldFateSpaceSelectionSummary(box) {
  if (!box) {
    return "当前未选择具体物体。";
  }
  const left = Math.round(box.x * 100);
  const top = Math.round(box.y * 100);
  const width = Math.round(box.width * 100);
  const height = Math.round(box.height * 100);
  return "已选择区域：距左 " + left + "%，距上 " + top + "%，宽 " + width + "%，高 " + height + "%。";
}

function normalizeWorldFateSpaceBox(box) {
  if (!box) {
    return null;
  }
  const x = Math.min(Math.max(Number(box.x || 0), 0), 1);
  const y = Math.min(Math.max(Number(box.y || 0), 0), 1);
  const width = Math.min(Math.max(Number(box.width || 0), 0), 1 - x);
  const height = Math.min(Math.max(Number(box.height || 0), 0), 1 - y);
  if (!width || !height) {
    return null;
  }
  const normalized = {
    x: Number(x.toFixed(4)),
    y: Number(y.toFixed(4)),
    width: Number(width.toFixed(4)),
    height: Number(height.toFixed(4)),
  };
  if (box.hotspot_id) {
    normalized.hotspot_id = String(box.hotspot_id);
  }
  if (box.label) {
    normalized.label = String(box.label);
  }
  return normalized;
}

function buildWorldFateSpaceBoxStyle(box) {
  if (!box) {
    return "";
  }
  return [
    "left:" + (box.x * 100).toFixed(2) + "%",
    "top:" + (box.y * 100).toFixed(2) + "%",
    "width:" + (box.width * 100).toFixed(2) + "%",
    "height:" + (box.height * 100).toFixed(2) + "%",
  ].join(";");
}

function clampWorldFateSpaceView() {
  if (isWorldFatePanoramaActive()) {
    return;
  }
  if (!worldFateSpaceViewport || !worldFateSpaceStage) {
    return;
  }
  const viewportWidth = worldFateSpaceViewport.clientWidth;
  const viewportHeight = worldFateSpaceViewport.clientHeight;
  const stageWidth = worldFateSpaceStage.offsetWidth;
  const stageHeight = worldFateSpaceStage.offsetHeight;
  if (!viewportWidth || !viewportHeight || !stageWidth || !stageHeight) {
    return;
  }

  const centerOffsetX = Math.round((viewportWidth - stageWidth) / 2);
  const centerOffsetY = Math.round((viewportHeight - stageHeight) / 2);
  const minX = Math.min(0, viewportWidth - stageWidth);
  const maxX = stageWidth > viewportWidth ? 0 : centerOffsetX;
  const minY = Math.min(0, viewportHeight - stageHeight);
  const maxY = stageHeight > viewportHeight ? 0 : centerOffsetY;

  worldFateSpaceView.offsetX = stageWidth > viewportWidth
    ? Math.min(maxX, Math.max(minX, worldFateSpaceView.offsetX))
    : centerOffsetX;
  worldFateSpaceView.offsetY = stageHeight > viewportHeight
    ? Math.min(maxY, Math.max(minY, worldFateSpaceView.offsetY))
    : centerOffsetY;
}

function renderWorldFateSpaceTransform() {
  if (!worldFateSpaceStage) {
    return;
  }
  if (isWorldFatePanoramaActive()) {
    worldFateSpaceStage.style.transform = "translate(0px, 0px)";
    return;
  }
  clampWorldFateSpaceView();
  worldFateSpaceStage.style.transform =
    "translate(" + Math.round(worldFateSpaceView.offsetX) + "px, " + Math.round(worldFateSpaceView.offsetY) + "px)";
}

function renderWorldFateSpaceSelection() {
  if (!worldFateSpaceSelection) {
    return;
  }
  if (!worldFateSpaceSelectionBox) {
    worldFateSpaceSelection.setAttribute("aria-hidden", "true");
    worldFateSpaceSelection.classList.remove("is-visible");
    worldFateSpaceSelection.style.cssText = "";
    return;
  }
  worldFateSpaceSelection.classList.add("is-visible");
  worldFateSpaceSelection.setAttribute("aria-hidden", "false");
  worldFateSpaceSelection.style.cssText = buildWorldFateSpaceBoxStyle(worldFateSpaceSelectionBox);
}

function renderWorldFateSpaceHotspots() {
  if (!worldFateSpaceHotspots) {
    return;
  }
  const hotspots = worldFateSpaceData && Array.isArray(worldFateSpaceData.hotspots)
    ? worldFateSpaceData.hotspots
    : [];

  worldFateSpaceHotspots.innerHTML = hotspots.map(function (hotspot) {
    const box = normalizeWorldFateSpaceBox(hotspot.box);
    const style = box
      ? "left:" + (box.x * 100).toFixed(2) + "%;top:" + (box.y * 100).toFixed(2) + "%;"
      : "";
    return (
      '<button class="world-fate-space-hotspot" type="button" data-hotspot-id="' + escapeHtml(hotspot.id) + '" style="' + style + '">' +
        '<span>' + escapeHtml(hotspot.label) + "</span>" +
      "</button>"
    );
  }).join("");
}

function renderWorldFateSpaceView() {
  if (!worldFateSpaceData || !worldFateSpaceData.image_url) {
    if (worldFateSpaceCanvas) {
      worldFateSpaceCanvas.classList.remove("is-visible");
    }
    worldFateSpaceImage.removeAttribute("src");
    worldFateSpaceImage.classList.remove("is-visible");
    worldFateSpaceHotspots.innerHTML = "";
    worldFateSpaceSelection.classList.remove("is-visible");
    worldFateSpaceSelection.setAttribute("aria-hidden", "true");
    worldFateSpaceSelection.style.cssText = "";
    worldFateSpaceHint.textContent = "当前还没有空间图。暂停视频后可生成，或者先上传你准备好的全景图。";
    worldFateSpaceHint.classList.remove("is-hidden");
    return;
  }

  if (worldFateSpaceCanvas) {
    worldFateSpaceCanvas.classList.remove("is-visible");
  }
  if (worldFateSpaceImage.getAttribute("src") !== worldFateSpaceData.image_url) {
    worldFateSpaceImage.src = worldFateSpaceData.image_url;
  }
  const panoramaState = ensureWorldFatePanoramaViewer();
  const hasPanoramaForCurrent =
    panoramaState &&
    !panoramaState.unsupported &&
    panoramaState.sourceUrl === worldFateSpaceData.image_url &&
    panoramaState.displayMode === "panorama";
  worldFateSpaceImage.classList.toggle("is-visible", !hasPanoramaForCurrent);
  if (worldFateSpaceCanvas) {
    worldFateSpaceCanvas.classList.toggle("is-visible", !!hasPanoramaForCurrent);
  }
  const panoramaLoaded = loadWorldFatePanoramaSource(
    worldFateSpaceData.image_url,
    worldFateSpaceData.upload_name || worldFateSpaceData.source || "空间图"
  );
  if (!panoramaLoaded && !hasPanoramaForCurrent) {
    worldFateSpaceImage.classList.add("is-visible");
  }
  const ratioHint = panoramaState && panoramaState.ratioMessage ? " " + panoramaState.ratioMessage : "";
  worldFateSpaceHint.textContent = (worldFateSpaceData.space_note || "拖动画面浏览，在选择模式下框选物体。") + ratioHint;
  worldFateSpaceHint.classList.toggle("is-hidden", !!worldFateSpaceSelectionBox);
  renderWorldFateSpaceHotspots();
  renderWorldFateSpaceSelection();
  startWorldFatePanoramaRenderer();
  window.requestAnimationFrame(renderWorldFateSpaceTransform);
}

function setWorldFateSpaceMode(mode) {
  worldFateSpaceMode = mode === "select" ? "select" : "browse";
  worldFateBrowseMode.classList.toggle("is-active", worldFateSpaceMode === "browse");
  worldFateSelectMode.classList.toggle("is-active", worldFateSpaceMode === "select");
  worldFateSpaceViewport.classList.toggle("is-select-mode", worldFateSpaceMode === "select");
}

function clearWorldFateSpaceSelection() {
  worldFateSpaceSelectionBox = null;
  worldFateSpaceSelectionDrag = null;
  renderWorldFateSpaceView();
  refreshWorldFateActionButtons();
}

function buildWorldFateClickSelection(normalizedX, normalizedY) {
  return normalizeWorldFateSpaceBox({
    x: normalizedX - 0.09,
    y: normalizedY - 0.09,
    width: 0.18,
    height: 0.18,
  });
}

function addWorldFateLatestMemoryToBasket() {
  if (!worldFateLatestMemory) {
    return;
  }
  if (worldFateClues.some(function (clue) { return clue.id === worldFateLatestMemory.id; })) {
    setWorldFateStatus("这条线索已经在导演台里了，可以继续补充导演意图。", "ready");
    return;
  }
  if (worldFateClues.length >= 3) {
    setWorldFateStatus("导演台当前最多先保留 3 条线索。可以先移除一条，再加入新的记忆。", "error");
    return;
  }
  worldFateClues.push(Object.assign({}, worldFateLatestMemory));
  renderWorldFateClueBasket();
  renderWorldFateClueSummary();
  refreshWorldFateActionButtons();
  setWorldFateActiveStage("director");
  setWorldFateStatus("线索已汇入导演台。现在可以结合这些线索继续推动后面的剧情编写；如果线索方向不对，系统会在下方节点里给出文字改写。", "ready");
}

function removeWorldFateClue(clueId) {
  worldFateClues = worldFateClues.filter(function (clue) {
    return clue.id !== clueId;
  });
  renderWorldFateClueBasket();
  renderWorldFateClueSummary();
  refreshWorldFateActionButtons();
}

function openWorldFateCustomModal() {
  worldFateCustomModal.classList.add("is-visible");
  worldFateCustomModal.setAttribute("aria-hidden", "false");
  worldFateCustomInput.value = worldFateCustomRule;
  setWorldFateCustomStatus("输入完成后点击确认，即会把这一世界观作用到下方剧情节点。", "idle");
}

function closeWorldFateCustomModal() {
  worldFateCustomModal.classList.remove("is-visible");
  worldFateCustomModal.setAttribute("aria-hidden", "true");
}

function buildWorldFatePresetNodes(worldId) {
  return worldFateNodeState.map(function (node) {
    const baseline = WORLD_FATE_BASELINE_STORY[node.seedKey] || {
      title: node.title,
      description: "剧情描述待补充",
      note: "",
    };

    if (worldId === "preset-world-01") {
      return Object.assign({}, node, {
        title: baseline.title,
        storyDescription: baseline.description,
        storyNote: baseline.note,
        frameStartHint: node.frameStartHint,
        frameEndHint: node.frameEndHint,
        clipHint: node.clipHint,
        frameStartUrl: node.frameStartUrl,
        frameEndUrl: node.frameEndUrl,
        frameLogicReason: node.frameLogicReason,
        videoUrl: node.videoUrl,
        videoTaskId: node.videoTaskId,
        videoStatus: node.videoStatus,
        videoNote: node.videoNote,
      });
    }

    return Object.assign({}, node, {
      title: baseline.title + " · 预设改写",
      storyDescription: (
        "在预设世界观 02 下，这个节点会保留《看不见的客人》的现实悬疑规则，但把证词破绽、监听装置和人物反制更早推向台前。"
      ),
      storyNote: (
        "当前先保留为可选的预设替代走向占位，后续可以继续细化这一悬疑世界观的真实规则。"
      ),
      frameStartHint: node.frameStartHint,
      frameEndHint: node.frameEndHint,
      clipHint: node.clipHint,
      frameStartUrl: node.frameStartUrl,
      frameEndUrl: node.frameEndUrl,
      frameLogicReason: node.frameLogicReason,
      videoUrl: node.videoUrl,
      videoTaskId: node.videoTaskId,
      videoStatus: node.videoStatus,
      videoNote: node.videoNote,
    });
  });
}

function applyWorldFatePreset(worldId) {
  worldFateSelectedWorldId = worldId;
  worldFateNodeState = buildWorldFatePresetNodes(worldId);
  worldFateStoryReady = true;
  worldFateFramesReady = false;
  worldFateVideoRequested = false;
  renderWorldFateModule();
  refreshWorldFateActionButtons();
  if (worldId === "preset-world-01") {
    setWorldFateStatus("当前已切换到原剧情世界观，节点描述同步回到《看不见的客人》原始剧情逻辑。", "ready");
  } else {
    setWorldFateStatus("当前已切换到预设世界观 02，剧情描述已同步到另一条悬疑改写走向。首尾帧和视频仍保持占位。", "ready");
  }
}

function buildWorldFateFallbackHotspots() {
  return [];
}

function getWorldFateCuratedMemory(hotspotId) {
  const key = String(hotspotId || "").trim();
  const memory = WORLD_FATE_CURATED_MEMORIES[key];
  return memory
    ? Object.assign({ id: key }, memory)
    : null;
}

function buildWorldFateDefaultSpaceData() {
  return {
    image_url: WORLD_FATE_SPACE_REFERENCE_IMAGE,
    frame_time: getWorldFateCaptureTime() || 0,
    scene_summary: "古德曼与艾德里安在室内会谈，茶几、窗户、墙面与门口共同构成证词、监听和身份揭露的空间网络。",
    space_note: "已载入《看不见的客人》参考帧。拖动画面浏览，在选择模式下框选物体来获取线索。",
    hotspots: [],
    source: "reference_frame",
  };
}

function ensureWorldFateDefaultSpaceData() {
  if (worldFateSpaceData) {
    return;
  }
  applyWorldFateSpaceData(buildWorldFateDefaultSpaceData());
  setWorldFateSpaceStatus("已载入《看不见的客人》参考帧。请在选择模式下自行框选物体读取记忆卡。", "ready");
}

function applyWorldFateSpaceData(nextData) {
  worldFateSpaceData = nextData ? Object.assign({}, nextData) : null;
  worldFateSpaceView = { offsetX: 0, offsetY: 0 };
  resetWorldFatePanoramaView();
  clearWorldFateSpaceSelection();
  renderWorldFateSpaceView();
  if (worldFateSpaceData) {
    setWorldFateActiveStage("memory");
  } else {
    setWorldFateActiveStage("space");
  }
  refreshWorldFateActionButtons();
}

function buildWorldFateMemoryId() {
  return "memory-" + Date.now() + "-" + Math.round(Math.random() * 10000);
}

function getWorldFateActiveVideoElement() {
  if (
    worldFateWorkspaceOpen &&
    worldFateFeatureVideo &&
    worldFateFeatureVideo.getAttribute("src")
  ) {
    return worldFateFeatureVideo;
  }
  return playerVideo;
}

function captureWorldFateLocalFrameDataUrl() {
  const sourceVideo = getWorldFateActiveVideoElement();
  if (!sourceVideo || !sourceVideo.videoWidth || !sourceVideo.videoHeight) {
    return "";
  }
  const canvas = document.createElement("canvas");
  canvas.width = sourceVideo.videoWidth;
  canvas.height = sourceVideo.videoHeight;
  const context = canvas.getContext("2d");
  if (!context) {
    return "";
  }
  context.drawImage(sourceVideo, 0, 0, canvas.width, canvas.height);
  return canvas.toDataURL("image/png");
}

function buildWorldFateLocalSceneSummary(seconds) {
  return {
    scene_summary: "当前暂停帧已被转成前端本地探索底图，先用于跑通境外空间和导演台的交互链路。",
    character_focus: "当前画面主体正在承受剧情推进时的注意力中心。",
    relationship_tension: "人物、空间和镜头之间的张力仍然有效，可以继续拆成可导演的线索。",
    emotion_tension: "情绪仍处在高压和等待揭露之间，适合继续做空间探索。",
    reply_anchor: "把当前暂停帧当作观众进入导演时刻的入口。",
    suggested_sender: "导演台",
    time: seconds,
  };
}

function buildWorldFateLocalMemory(selection, seconds) {
  const curated = selection && selection.hotspot_id
    ? getWorldFateCuratedMemory(selection.hotspot_id)
    : null;
  if (curated) {
    return curated;
  }
  const summary = getWorldFateSpaceSelectionSummary(selection);
  const label = selection && selection.width > 0.28 ? "关键场景区域" : "关键物体区域";
  return {
    object_name: label,
    ai_reading: "这片区域在当前帧里具备强视觉权重，适合作为观众进入空间记忆的第一落点。",
    story_connection: "它和当前暂停帧里的叙事重心直接相关，适合被提升成后续剧情改写的视觉证据。",
    related_characters: ["当前主体", "场景关系人"],
    related_moment: "对应暂停时间：" + formatTime(seconds) + "。 " + summary,
    director_value: "如果你把镜头重新围绕这个区域组织，后续剧情的注意力分配和信息揭露节奏都会发生变化。",
    memory_text: "当前为前端本地记忆卡演示。你已经完成了“选择区域 -> 返回记忆 -> 可加入导演台”的关键链路，后续接正式后端后会替换成更细的 AI 理解。",
  };
}

function buildWorldFateDirectorPrompt() {
  const userIntent = String(worldFatePrompt.value || "").trim();
  const clueLines = worldFateClues.map(function (clue, index) {
    return (
      String(index + 1) +
      ". 物体：" + clue.object_name +
      "；AI理解：" + clue.ai_reading +
      "；剧情关联：" + clue.story_connection +
      "；导演意义：" + clue.director_value
    );
  }).join("\n");
  const spaceSummary = worldFateSpaceData && worldFateSpaceData.scene_summary
    ? "探索空间概览：" + worldFateSpaceData.scene_summary
    : "探索空间概览：当前没有额外空间摘要。";
  return [
    "导演意图：",
    userIntent,
    "",
    spaceSummary,
    "",
    "线索篮：",
    clueLines || "暂无线索",
  ].join("\n");
}

function buildWorldFateLocalNodeRewrite() {
  const intent = String(worldFatePrompt.value || "").trim();
  const clueHeadline = worldFateClues.map(function (clue) {
    return clue.object_name;
  }).join("、") || "当前空间线索";

  return worldFateNodeState.map(function (node, index) {
    return Object.assign({}, node, {
      title: "导演节点 " + String(index + 1).padStart(2, "0"),
      storyDescription:
        "基于线索“" + clueHeadline + "”和导演意图“" + intent + "”，这一节点被编写成更强调空间探索后果的版本。当前先保留为本地逻辑演示，后续可切到正式后端生成更细的因果链。",
      storyNote:
        "本地导演台兜底：先把线索转成文字节点，用于判断能否推动原剧情继续。",
      frameStartUrl: "",
      frameEndUrl: "",
      frameLogicReason: "",
      videoUrl: "",
      videoTaskId: "",
      videoStatus: "",
      videoNote: "",
    });
  });
}

function buildWorldFateLocalFrameFallback() {
  const frameUrl = worldFateSpaceData && worldFateSpaceData.image_url ? worldFateSpaceData.image_url : captureWorldFateLocalFrameDataUrl();
  worldFateNodeState = worldFateNodeState.map(function (node, index) {
    return Object.assign({}, node, {
      frameStartHint: "首帧占位：沿用当前导演节点 " + String(index + 1).padStart(2, "0") + " 的开场空间语义。",
      frameEndHint: "尾帧占位：收束到该节点改写后的结果姿态。",
      frameStartUrl: frameUrl,
      frameEndUrl: frameUrl,
      frameLogicReason: "当前为前端本地首尾帧占位，用于先跑通导演链路。后续接正式后端后会替换成真实生成结果。",
    });
  });
}

function buildWorldFateLocalVideoFallback() {
  worldFateNodeState = worldFateNodeState.map(function (node, index) {
    return Object.assign({}, node, {
      videoUrl: "",
      videoTaskId: "",
      videoStatus: "local_placeholder",
      videoNote: "当前为前端本地视频占位：导演节点 " + String(index + 1).padStart(2, "0") + " 已完成链路演示。",
      clipHint: "后续接正式视频任务后，这里会替换成真实片段或任务状态。",
    });
  });
}

function handleWorldFateUploadFile(file) {
  if (!file || !file.type || !file.type.startsWith("image/")) {
    setWorldFateSpaceStatus("请选择图片文件作为空间图。", "error");
    return;
  }

  const reader = new FileReader();
  reader.onload = function () {
    applyWorldFateSpaceData({
      image_url: String(reader.result || ""),
      frame_time: getWorldFateCaptureTime(),
      scene_summary: "已接入用户上传的空间图。后续框选物体时，会优先基于这张空间图建立记忆线索。",
      space_note: "当前为上传空间图。拖动画面浏览，在选择模式下框选物体。",
      hotspots: [],
      source: "uploaded",
      upload_name: file.name,
    });
    setWorldFateSpaceStatus("已载入上传空间图：" + file.name + "。现在可以进入物体记忆阶段。", "ready");
  };
  reader.onerror = function () {
    setWorldFateSpaceStatus("上传空间图失败，请重试。", "error");
  };
  reader.readAsDataURL(file);
}

async function generateWorldFateSpace() {
  if (worldFateBusy || worldFateSpaceBusy) {
    return;
  }

  const captureTime = getWorldFateCaptureTime();
  if (captureTime == null) {
    setWorldFateSpaceStatus("请先进入视频播放状态，再生成境外空间。", "error");
    return;
  }
  const captureVideo = getWorldFateActiveVideoElement();
  if (captureVideo && !captureVideo.paused) {
    captureVideo.pause();
    syncPlayerControls();
  }

  worldFateSpaceBusy = true;
  refreshWorldFateActionButtons();
  setWorldFateSpaceStatus("正在基于当前暂停帧生成可探索空间，请稍等...", "loading");

  try {
    const response = await fetch(WORLD_FATE_SPACE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: WORLD_FATE_MOVIE_ID,
        time: Number(captureTime.toFixed(3)),
        image_model: worldFateImageModel,
      }),
    });
    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      throw new Error(payload.error || "空间生成失败。");
    }

    applyWorldFateSpaceData({
      image_url: payload.space_image_url || payload.frame_image_url || "",
      frame_time: captureTime,
      scene_summary: payload.scene ? payload.scene.scene_summary || "" : "",
      space_note: payload.space_note || "空间生成完成。拖动画面浏览，在选择模式下框选物体。",
      hotspots: payload.hotspots || [],
      source: payload.mode || "local_fallback",
    });
    setWorldFateSpaceStatus(
      payload.mode === "live_ai" || payload.mode === "live_image_direct"
        ? "AI 已根据暂停帧生成空间探索图。现在可以框选物体获取线索。"
        : "后端返回了本地空间占位，请检查 AI 配置。",
      "ready"
    );
  } catch (error) {
    setWorldFateSpaceStatus(error.message || "空间生成失败。", "error");
  } finally {
    worldFateSpaceBusy = false;
    refreshWorldFateActionButtons();
  }
}

async function requestWorldFateMemory(selectionOverride) {
  if (worldFateBusy || worldFateMemoryBusy) {
    return;
  }
  if (!worldFateSpaceData || !worldFateSpaceData.image_url) {
    setWorldFateSpaceStatus("请先生成或上传空间图，再进行线索获取。", "error");
    return;
  }

  const selection = normalizeWorldFateSpaceBox(selectionOverride || worldFateSpaceSelectionBox);
  if (!selection) {
    setWorldFateSpaceStatus("请先框选一个具体物体，再进行线索获取。", "error");
    return;
  }

  worldFateMemoryBusy = true;
  worldFateLatestMemory = null;
  renderWorldFateMemoryCard();
  refreshWorldFateActionButtons();
  setWorldFateActiveStage("memory");
  setWorldFateSpaceStatus("正在获取该区域的线索，请稍等...", "loading");

  const curatedMemory = selection.hotspot_id
    ? getWorldFateCuratedMemory(selection.hotspot_id)
    : null;
  if (curatedMemory) {
    worldFateSpaceSelectionBox = selection;
    worldFateLatestMemory = curatedMemory;
    renderWorldFateSpaceView();
    renderWorldFateMemoryCard();
    setWorldFateSpaceStatus("已从《看不见的客人》固定锚点库读取记忆卡。确认后可加入导演台。", "ready");
    worldFateMemoryBusy = false;
    refreshWorldFateActionButtons();
    return;
  }

  try {
    const response = await fetch(WORLD_FATE_MEMORY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: WORLD_FATE_MOVIE_ID,
        time: Number((worldFateSpaceData.frame_time != null ? worldFateSpaceData.frame_time : (getWorldFateCaptureTime() || 0)).toFixed(3)),
        selection: selection,
        space_image_url: worldFateSpaceData.image_url,
        scene_summary: worldFateSpaceData.scene_summary || "",
      }),
    });
    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      throw new Error(payload.error || "物体记忆读取失败。");
    }

    worldFateSpaceSelectionBox = selection;
    worldFateLatestMemory = Object.assign(
      {
        id: selection.hotspot_id || buildWorldFateMemoryId(),
      },
      payload.memory || {}
    );
    renderWorldFateSpaceView();
    renderWorldFateMemoryCard();
    setWorldFateSpaceStatus("线索已生成。确认后可加入导演台。", payload.mode === "live_ai" ? "ready" : "error");
  } catch (error) {
    worldFateLatestMemory = null;
    setWorldFateSpaceStatus(error.message || "线索获取失败。", "error");
    renderWorldFateSpaceView();
    renderWorldFateMemoryCard();
  } finally {
    worldFateMemoryBusy = false;
    refreshWorldFateActionButtons();
  }
}

function renderWorldFateCanvas() {
  const orderedNodes = getWorldFateOrderedNodes();
  worldFateCanvas.innerHTML =
    '<div class="world-fate-surface">' +
    orderedNodes.map(function (scene) {
      const descriptionBlock = scene.storyDescription
        ? (
          '<div class="world-fate-node-updated">' +
            '<p>' + escapeHtml(scene.storyDescription) + '</p>' +
            '<div class="world-fate-node-updated-note">' + escapeHtml(scene.storyNote || "已根据当前世界观与剧情修改指令同步更新。") + '</div>' +
          '</div>'
        )
        : (
          '<div class="world-fate-description-placeholder">' +
            '<div class="world-fate-placeholder-copy">' +
              '<strong>剧情描述待补充</strong>' +
              '<span>这里预留该段剧情的描述文本结构，当前不填真实内容。</span>' +
            "</div>" +
          "</div>"
        );

      return (
      '<article class="world-fate-node" data-scene-id="' + escapeHtml(scene.id) + '" style="left:' + Number(scene.x) + 'px; top:' + Number(scene.y) + 'px;">' +
        '<div class="world-fate-node-top" data-drag-handle="true">' +
          '<span class="world-fate-node-index">Scene ' + String(scene.orderIndex).padStart(2, "0") + "</span>" +
          '<span class="world-fate-node-flow">剧情顺序</span>' +
          '<span class="world-fate-node-drag">拖动排序</span>' +
        "</div>" +
        '<div class="world-fate-node-title">' + escapeHtml(scene.title) + "</div>" +
        '<div class="world-fate-node-sections">' +
          '<section class="world-fate-section">' +
            '<div class="world-fate-section-head">' +
              '<strong class="world-fate-section-title">剧情描述区</strong>' +
              '<span class="world-fate-section-note">Top Layer</span>' +
            "</div>" +
            descriptionBlock +
          "</section>" +
          '<section class="world-fate-section">' +
            '<div class="world-fate-section-head">' +
              '<strong class="world-fate-section-title">首尾帧区域</strong>' +
              '<span class="world-fate-section-note">Middle Layer</span>' +
            "</div>" +
            '<div class="world-fate-frames">' +
              (
                scene.frameStartUrl
                  ? (
                    '<div class="world-fate-frame-generated">' +
                      '<img src="' + escapeHtml(scene.frameStartUrl) + '" alt="Start frame">' +
                      '<div class="world-fate-frame-caption">' + escapeHtml(scene.frameStartHint || "首帧已生成") + "</div>" +
                    "</div>"
                  )
                  : (
                    '<div class="world-fate-frame-placeholder">' +
                      '<div class="world-fate-placeholder-copy">' +
                        '<strong>首帧待补充</strong>' +
                        '<span>' + escapeHtml(scene.frameStartHint || "预留首帧图像位置") + '</span>' +
                      "</div>" +
                    "</div>"
                  )
              ) +
              (
                scene.frameEndUrl
                  ? (
                    '<div class="world-fate-frame-generated">' +
                      '<img src="' + escapeHtml(scene.frameEndUrl) + '" alt="End frame">' +
                      '<div class="world-fate-frame-caption">' + escapeHtml(scene.frameEndHint || "尾帧已生成") + "</div>" +
                    "</div>"
                  )
                  : (
                    '<div class="world-fate-frame-placeholder">' +
                      '<div class="world-fate-placeholder-copy">' +
                        '<strong>尾帧待补充</strong>' +
                        '<span>' + escapeHtml(scene.frameEndHint || "预留尾帧图像位置") + '</span>' +
                      "</div>" +
                    "</div>"
                  )
              ) +
            "</div>" +
            (
              scene.frameLogicReason
                ? '<div class="world-fate-node-updated-note">' + escapeHtml(scene.frameLogicReason) + "</div>"
                : ""
            ) +
          "</section>" +
          '<section class="world-fate-section">' +
            '<div class="world-fate-section-head">' +
              '<strong class="world-fate-section-title">切片视频区域</strong>' +
              '<span class="world-fate-section-note">Bottom Layer</span>' +
            "</div>" +
            (
              scene.videoUrl
                ? (
                  '<div class="world-fate-video-generated">' +
                    '<video controls preload="metadata" src="' + escapeHtml(scene.videoUrl) + '"></video>' +
                    '<div class="world-fate-video-caption">' + escapeHtml(scene.videoNote || "视频已生成") + "</div>" +
                  "</div>"
                )
                : (
                  '<div class="world-fate-video-placeholder">' +
                    '<div class="world-fate-placeholder-copy">' +
                      '<strong>' + escapeHtml(scene.videoTaskId ? "视频任务已提交" : "视频待补充") + '</strong>' +
                      '<span>' + escapeHtml(scene.videoTaskId ? (scene.videoNote || scene.videoTaskId) : (scene.clipHint || "预留该剧情节点的视频切片位置")) + '</span>' +
                    "</div>" +
                  "</div>"
                )
            ) +
          "</section>" +
        "</div>" +
      "</article>"
      );
    }).join("") +
    "</div>";
}

function syncWorldFateDraggedNode(sceneId, nextX, nextY) {
  worldFateNodeState = worldFateNodeState.map(function (node) {
    if (node.id !== sceneId) {
      return node;
    }
    return Object.assign({}, node, {
      x: Math.max(24, nextX),
      y: Math.max(24, nextY),
    });
  });
}

function startWorldFateNodeDrag(sceneId, clientX, clientY) {
  const node = worldFateNodeState.find(function (item) {
    return item.id === sceneId;
  });
  if (!node) {
    return;
  }
  worldFateDragState = {
    id: sceneId,
    startX: clientX,
    startY: clientY,
    originX: node.x,
    originY: node.y,
  };
  const activeNode = worldFateCanvas.querySelector('[data-scene-id="' + sceneId + '"]');
  if (activeNode) {
    activeNode.classList.add("is-dragging");
  }
}

function moveWorldFateNodeDrag(clientX, clientY) {
  if (!worldFateDragState) {
    return;
  }
  const deltaX = clientX - worldFateDragState.startX;
  const deltaY = clientY - worldFateDragState.startY;
  syncWorldFateDraggedNode(
    worldFateDragState.id,
    worldFateDragState.originX + deltaX,
    worldFateDragState.originY + deltaY
  );
  renderWorldFateCanvas();
  const activeNode = worldFateCanvas.querySelector('[data-scene-id="' + worldFateDragState.id + '"]');
  if (activeNode) {
    activeNode.classList.add("is-dragging");
  }
}

function endWorldFateNodeDrag() {
  if (!worldFateDragState) {
    return;
  }
  worldFateDragState = null;
  renderWorldFateCanvas();
}

async function submitWorldFateChanges() {
  if (worldFateBusy) {
    return;
  }

  const modificationText = String(worldFatePrompt.value || "").trim();
  if (!modificationText) {
    setWorldFateStatus("请先写下你的导演意图，再继续推动后面的剧情编写。", "error");
    return;
  }
  if (!worldFateClues.length) {
    setWorldFateStatus("请至少加入 1 条线索，再进入导演剪辑。", "error");
    return;
  }

  worldFateBusy = true;
  refreshWorldFateActionButtons();
  setWorldFateActiveStage("director");
  setWorldFateStatus("正在汇集线索，并判断这些线索是否足以推动后续原剧情继续，请稍等...", "loading");

  const selectedWorld = getWorldFateDirectorWorldContext();
  const directorPrompt = buildWorldFateDirectorPrompt();

  try {
    const response = await fetch(WORLD_FATE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: WORLD_FATE_MOVIE_ID,
        world_id: selectedWorld.id,
        world_title: selectedWorld.title,
        world_note: selectedWorld.note,
        modification_text: directorPrompt,
        image_model: worldFateImageModel,
        nodes: getWorldFateOrderedNodes().map(function (node) {
          return {
            id: node.id,
            order: node.orderIndex,
            title: node.title,
            seed_key: node.seedKey,
            x: node.x,
            y: node.y,
            story_description: node.storyDescription || "",
          };
        }),
      }),
    });

    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      throw new Error(payload.error || "世界命运调节器同步失败。");
    }

    worldFateNodeState = worldFateNodeState.map(function (node) {
      const matched = (payload.nodes || []).find(function (item) {
        return item.id === node.id;
      });
      if (!matched) {
        return node;
      }
      return Object.assign({}, node, {
        title: matched.title || node.title,
        storyDescription: matched.story_description || "",
        storyNote: matched.logic_reason || "",
        frameStartHint: matched.frame_start_hint || node.frameStartHint,
        frameEndHint: matched.frame_end_hint || node.frameEndHint,
        clipHint: matched.clip_hint || node.clipHint,
        frameStartUrl: "",
        frameEndUrl: "",
        frameLogicReason: "",
        videoUrl: "",
        videoTaskId: "",
        videoStatus: "",
        videoNote: "",
      });
    });
    worldFateStoryReady = true;
    worldFateFramesReady = false;
    worldFateVideoRequested = false;
    renderWorldFateCanvas();
    setWorldFateActiveStage("output");
    setWorldFateStatus(
      payload.mode === "live_ai"
        ? "导演台已根据你的线索和意图完成后续剧情编写。若线索方向成立，后续节点会承接原剧情推进；若方向不足，下面会给出文字改写节点。"
        : "后端返回了本地导演编写结果，请检查 AI 配置。",
      payload.mode === "live_ai" ? "ready" : "error"
    );
  } catch (error) {
    setWorldFateStatus(error.message || "世界命运调节器同步失败。", "error");
  } finally {
    worldFateBusy = false;
    refreshWorldFateActionButtons();
  }
}

async function confirmCustomWorldFate() {
  const customRule = String(worldFateCustomInput.value || "").trim();
  if (!customRule) {
    setWorldFateCustomStatus("请先输入你想改变的世界观。", "error");
    return;
  }

  worldFateCustomRule = customRule;
  WORLD_FATE_OPTIONS[2].note = customRule;
  worldFateSelectedWorldId = "custom-world";
  renderWorldFateWorlds();
  closeWorldFateCustomModal();

  if (worldFateBusy) {
    return;
  }

  worldFateBusy = true;
  refreshWorldFateActionButtons();
  setWorldFateStatus("正在根据自定义世界观同步剧情节点，请稍等...", "loading");

  try {
    const response = await fetch(WORLD_FATE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: WORLD_FATE_MOVIE_ID,
        world_id: "custom-world",
        world_title: "自定义世界观",
        world_note: customRule,
        modification_text: String(worldFatePrompt.value || "").trim() || "按照该自定义世界观重新组织剧情节点。",
        image_model: worldFateImageModel,
        nodes: getWorldFateOrderedNodes().map(function (node) {
          return {
            id: node.id,
            order: node.orderIndex,
            title: node.title,
            seed_key: node.seedKey,
            x: node.x,
            y: node.y,
            story_description: node.storyDescription || "",
          };
        }),
      }),
    });

    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      throw new Error(payload.error || "自定义世界观同步失败。");
    }

    worldFateNodeState = worldFateNodeState.map(function (node) {
      const matched = (payload.nodes || []).find(function (item) {
        return item.id === node.id;
      });
      if (!matched) {
        return node;
      }
      return Object.assign({}, node, {
        title: matched.title || node.title,
        storyDescription: matched.story_description || "",
        storyNote: matched.logic_reason || "",
        frameStartHint: "首帧待补充",
        frameEndHint: "尾帧待补充",
        clipHint: "视频待补充",
        frameStartUrl: "",
        frameEndUrl: "",
        frameLogicReason: "",
        videoUrl: "",
        videoTaskId: "",
        videoStatus: "",
        videoNote: "",
      });
    });
    worldFateStoryReady = true;
    worldFateFramesReady = false;
    worldFateVideoRequested = false;
    renderWorldFateCanvas();
    setWorldFateStatus("自定义世界观已生效，剧情节点已基于原剧情和世界规则完成逻辑同步。首尾帧与视频区域暂不改动。", "ready");
  } catch (error) {
    setWorldFateStatus(error.message || "自定义世界观同步失败。", "error");
  } finally {
    worldFateBusy = false;
    refreshWorldFateActionButtons();
  }
}

async function generateWorldFateFrames() {
  if (worldFateBusy || !worldFateStoryReady) {
    return;
  }

  worldFateBusy = true;
  refreshWorldFateActionButtons();
  setWorldFateActiveStage("output");
  setWorldFateStatus("正在根据导演改写结果生成关键首尾帧，请稍等...", "loading");

  const selectedWorld = getWorldFateDirectorWorldContext();

  try {
    const response = await fetch(WORLD_FATE_FRAMES_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: WORLD_FATE_MOVIE_ID,
        world_id: selectedWorld.id,
        world_title: selectedWorld.title,
        world_note: selectedWorld.note,
        modification_text: buildWorldFateDirectorPrompt(),
        image_model: worldFateImageModel,
        nodes: getWorldFateOrderedNodes().map(function (node) {
          return {
            id: node.id,
            order: node.orderIndex,
            title: node.title,
            seed_key: node.seedKey,
            story_description: node.storyDescription || "",
            frame_start_url: node.frameStartUrl || "",
            frame_end_url: node.frameEndUrl || "",
            frame_start_hint: node.frameStartHint || "",
            frame_end_hint: node.frameEndHint || "",
          };
        }),
      }),
    });

    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      throw new Error(payload.error || "首尾帧生成失败。");
    }

    worldFateNodeState = worldFateNodeState.map(function (node) {
      const matched = (payload.nodes || []).find(function (item) {
        return item.id === node.id;
      });
      if (!matched) {
        return node;
      }
      return Object.assign({}, node, {
        frameStartHint: matched.frame_start_hint || node.frameStartHint,
        frameEndHint: matched.frame_end_hint || node.frameEndHint,
        frameStartUrl: matched.frame_start_url || "",
        frameEndUrl: matched.frame_end_url || "",
        frameLogicReason: matched.frame_logic_reason || "",
      });
    });
    const remainingAssets = Number(payload.remaining_asset_count || 0);
    const processedAssets = Number(payload.processed_asset_count || 0);
    worldFateFramesReady = remainingAssets === 0;
    renderWorldFateCanvas();
    setWorldFateStatus(
      payload.mode === "live_ai"
        ? (
          remainingAssets > 0
            ? "本轮已生成 " + processedAssets + " 张首尾帧，剩余 " + remainingAssets + " 张。可继续点击分批生成。"
            : "关键首尾帧已全部生成。现在可以继续分批提交视频片段。"
        )
        : "后端返回了本地首尾帧占位，请检查 AI 配置。",
      payload.mode === "live_ai" ? "ready" : "error"
    );
  } catch (error) {
    setWorldFateStatus(error.message || "首尾帧生成失败。", "error");
  } finally {
    worldFateBusy = false;
    refreshWorldFateActionButtons();
  }
}

async function generateWorldFateVideos() {
  if (worldFateBusy || getWorldFateVideoStats().pendingEligible === 0) {
    return;
  }

  worldFateBusy = true;
  refreshWorldFateActionButtons();
  setWorldFateActiveStage("output");
  setWorldFateStatus("正在根据导演节点与首尾帧生成视频片段，请稍等...", "loading");

  const selectedWorld = getWorldFateDirectorWorldContext();

  try {
    const response = await fetch(WORLD_FATE_VIDEO_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: WORLD_FATE_MOVIE_ID,
        world_id: selectedWorld.id,
        world_title: selectedWorld.title,
        world_note: selectedWorld.note,
        modification_text: buildWorldFateDirectorPrompt(),
        image_model: worldFateImageModel,
        nodes: getWorldFateOrderedNodes().map(function (node) {
          return {
            id: node.id,
            order: node.orderIndex,
            title: node.title,
            seed_key: node.seedKey,
            story_description: node.storyDescription || "",
            frame_start_url: node.frameStartUrl || "",
            frame_end_url: node.frameEndUrl || "",
            frame_start_hint: node.frameStartHint || "",
            frame_end_hint: node.frameEndHint || "",
            video_url: node.videoUrl || "",
            video_task_id: node.videoTaskId || "",
            video_status: node.videoStatus || "",
            video_note: node.videoNote || "",
          };
        }),
      }),
    });

    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      throw new Error(payload.error || "视频再创作提交失败。");
    }

    worldFateNodeState = worldFateNodeState.map(function (node) {
      const matched = (payload.nodes || []).find(function (item) {
        return item.id === node.id;
      });
      if (!matched) {
        return node;
      }
      return Object.assign({}, node, {
        videoUrl: matched.video_url || "",
        videoTaskId: matched.video_task_id || "",
        videoStatus: matched.video_status || "",
        videoNote: matched.video_note || "",
        clipHint: matched.clip_hint || node.clipHint,
      });
    });
    const remainingVideos = Number(payload.remaining_video_count || 0);
    const processedVideos = Number(payload.processed_video_count || 0);
    worldFateVideoRequested = remainingVideos === 0;
    renderWorldFateCanvas();
    setWorldFateStatus(
      payload.mode === "live_ai_async"
        ? (
          remainingVideos > 0
            ? "本轮已提交 " + processedVideos + " 段视频任务，剩余 " + remainingVideos + " 段可继续提交。"
            : "视频片段任务已全部提交。节点底部会显示任务状态或任务编号。"
        )
        : "后端返回了本地视频占位，请检查 AI 配置。",
      payload.mode === "live_ai_async" ? "ready" : "error"
    );
  } catch (error) {
    setWorldFateStatus(error.message || "视频再创作提交失败。", "error");
  } finally {
    worldFateBusy = false;
    refreshWorldFateActionButtons();
  }
}

function renderWorldFateModule() {
  renderWorldFateWorlds();
  renderWorldFateSpaceView();
  renderWorldFateMemoryCard();
  renderWorldFateClueBasket();
  renderWorldFateClueSummary();
  renderWorldFateCanvas();
  refreshWorldFateActionButtons();
}

function resetWorldFateNodeState() {
  worldFateNodeState = WORLD_FATE_SCENES.map(function (scene) {
    return Object.assign({}, scene);
  });
}

function getWorldFateSpaceSelectionFromClient(clientX, clientY) {
  if (
    !worldFateSpaceStage ||
    (!worldFateSpaceImage.classList.contains("is-visible") && !isWorldFatePanoramaActive())
  ) {
    return null;
  }
  const rect = worldFateSpaceViewport
    ? worldFateSpaceViewport.getBoundingClientRect()
    : worldFateSpaceStage.getBoundingClientRect();
  if (!rect.width || !rect.height) {
    return null;
  }
  const localX = clientX - rect.left;
  const localY = clientY - rect.top;
  if (localX < 0 || localY < 0 || localX > rect.width || localY > rect.height) {
    return null;
  }
  return {
    x: localX / rect.width,
    y: localY / rect.height,
    rect: rect,
  };
}

function handleWorldFateStageRailClick(event) {
  const target = event.target.closest("[data-stage-id]");
  if (!target) {
    return;
  }
  const stageId = target.dataset.stageId;
  setWorldFateActiveStage(stageId);
  const anchors = {
    space: worldFateSpaceViewport,
    memory: worldFateMemoryCard,
    director: worldFatePrompt,
    output: worldFateCanvas,
  };
  const anchor = anchors[stageId];
  if (anchor && typeof anchor.scrollIntoView === "function") {
    anchor.scrollIntoView({ behavior: reducedMotion.matches ? "auto" : "smooth", block: "nearest" });
  }
}

function handleWorldFateSpaceHotspotClick(event) {
  const target = event.target.closest("[data-hotspot-id]");
  if (!target || !worldFateSpaceData) {
    return;
  }
  const hotspot = (worldFateSpaceData.hotspots || []).find(function (item) {
    return item.id === target.dataset.hotspotId;
  });
  if (!hotspot) {
    return;
  }
  const normalized = normalizeWorldFateSpaceBox(hotspot.box);
  if (!normalized) {
    return;
  }
  normalized.hotspot_id = hotspot.id;
  normalized.label = hotspot.label;
  worldFateSpaceSelectionBox = normalized;
  renderWorldFateSpaceView();
  refreshWorldFateActionButtons();
  requestWorldFateMemory(normalized);
}

function handleWorldFateSpacePointerDown(event) {
  if (!worldFateSpaceData || (!worldFateSpaceImage.classList.contains("is-visible") && !isWorldFatePanoramaActive())) {
    return;
  }
  if (event.target.closest("[data-hotspot-id]")) {
    return;
  }

  if (worldFateSpaceMode === "browse") {
    event.preventDefault();
    worldFateSpaceDrag = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      lastX: event.clientX,
      lastY: event.clientY,
      kind: isWorldFatePanoramaActive() ? "panorama" : "fallback",
      originX: worldFateSpaceView.offsetX,
      originY: worldFateSpaceView.offsetY,
    };
    if (typeof worldFateSpaceViewport.setPointerCapture === "function") {
      try {
        worldFateSpaceViewport.setPointerCapture(event.pointerId);
      } catch (error) {}
    }
    if (worldFateSpaceCanvas) {
      worldFateSpaceCanvas.classList.add("dragging");
    }
    return;
  }

  const normalizedPoint = getWorldFateSpaceSelectionFromClient(event.clientX, event.clientY);
  if (!normalizedPoint) {
    return;
  }
  event.preventDefault();
  worldFateSpaceSelectionDrag = {
    pointerId: event.pointerId,
    startClientX: event.clientX,
    startClientY: event.clientY,
    startX: normalizedPoint.x,
    startY: normalizedPoint.y,
    box: null,
  };
  if (typeof worldFateSpaceViewport.setPointerCapture === "function") {
    try {
      worldFateSpaceViewport.setPointerCapture(event.pointerId);
    } catch (error) {}
  }
}

function handleWorldFateSpacePointerMove(event) {
  if (worldFateSpaceDrag && worldFateSpaceDrag.pointerId === event.pointerId) {
    event.preventDefault();
    if (worldFateSpaceDrag.kind === "panorama") {
      const state = ensureWorldFatePanoramaViewer();
      if (state && !state.unsupported) {
        const deltaX = event.clientX - worldFateSpaceDrag.lastX;
        const deltaY = event.clientY - worldFateSpaceDrag.lastY;
        worldFateSpaceDrag.lastX = event.clientX;
        worldFateSpaceDrag.lastY = event.clientY;
        state.yaw += deltaX * 0.005;
        state.pitch += deltaY * 0.005;
        state.pitch = Math.max(-WORLD_FATE_PANORAMA_PITCH_LIMIT, Math.min(WORLD_FATE_PANORAMA_PITCH_LIMIT, state.pitch));
      }
    } else {
      worldFateSpaceView.offsetX = worldFateSpaceDrag.originX + (event.clientX - worldFateSpaceDrag.startX);
      worldFateSpaceView.offsetY = worldFateSpaceDrag.originY + (event.clientY - worldFateSpaceDrag.startY);
      renderWorldFateSpaceTransform();
    }
    return;
  }

  if (!worldFateSpaceSelectionDrag || worldFateSpaceSelectionDrag.pointerId !== event.pointerId) {
    return;
  }
  event.preventDefault();
  const normalizedPoint = getWorldFateSpaceSelectionFromClient(event.clientX, event.clientY);
  if (!normalizedPoint) {
    return;
  }
  worldFateSpaceSelectionBox = normalizeWorldFateSpaceBox({
    x: Math.min(worldFateSpaceSelectionDrag.startX, normalizedPoint.x),
    y: Math.min(worldFateSpaceSelectionDrag.startY, normalizedPoint.y),
    width: Math.abs(normalizedPoint.x - worldFateSpaceSelectionDrag.startX),
    height: Math.abs(normalizedPoint.y - worldFateSpaceSelectionDrag.startY),
  });
  renderWorldFateSpaceView();
}

function handleWorldFateSpacePointerUp(event) {
  if (worldFateSpaceDrag && worldFateSpaceDrag.pointerId === event.pointerId) {
    event.preventDefault();
    if (typeof worldFateSpaceViewport.releasePointerCapture === "function") {
      try {
        worldFateSpaceViewport.releasePointerCapture(event.pointerId);
      } catch (error) {}
    }
    if (worldFateSpaceCanvas) {
      worldFateSpaceCanvas.classList.remove("dragging");
    }
    worldFateSpaceDrag = null;
    renderWorldFateSpaceTransform();
    return;
  }

  if (!worldFateSpaceSelectionDrag || worldFateSpaceSelectionDrag.pointerId !== event.pointerId) {
    return;
  }
  event.preventDefault();
  const normalizedPoint = getWorldFateSpaceSelectionFromClient(event.clientX, event.clientY);
  const dragDistance = Math.max(
    Math.abs(event.clientX - worldFateSpaceSelectionDrag.startClientX),
    Math.abs(event.clientY - worldFateSpaceSelectionDrag.startClientY)
  );

  if (dragDistance < 8 && normalizedPoint) {
    worldFateSpaceSelectionBox = buildWorldFateClickSelection(normalizedPoint.x, normalizedPoint.y);
  } else if (!worldFateSpaceSelectionBox && normalizedPoint) {
    worldFateSpaceSelectionBox = normalizeWorldFateSpaceBox({
      x: Math.min(worldFateSpaceSelectionDrag.startX, normalizedPoint.x),
      y: Math.min(worldFateSpaceSelectionDrag.startY, normalizedPoint.y),
      width: Math.abs(normalizedPoint.x - worldFateSpaceSelectionDrag.startX),
      height: Math.abs(normalizedPoint.y - worldFateSpaceSelectionDrag.startY),
    });
  }

  if (typeof worldFateSpaceViewport.releasePointerCapture === "function") {
    try {
      worldFateSpaceViewport.releasePointerCapture(event.pointerId);
    } catch (error) {}
  }

  const finalSelection = worldFateSpaceSelectionBox;
  worldFateSpaceSelectionDrag = null;
  renderWorldFateSpaceView();
  refreshWorldFateActionButtons();
  if (finalSelection) {
    requestWorldFateMemory(finalSelection);
  }
}

function handleWorldFateSpacePointerCancel(event) {
  if (worldFateSpaceDrag && worldFateSpaceDrag.pointerId === event.pointerId) {
    if (worldFateSpaceCanvas) {
      worldFateSpaceCanvas.classList.remove("dragging");
    }
    worldFateSpaceDrag = null;
  }
  if (worldFateSpaceSelectionDrag && worldFateSpaceSelectionDrag.pointerId === event.pointerId) {
    worldFateSpaceSelectionDrag = null;
  }
  if (typeof worldFateSpaceViewport.releasePointerCapture === "function") {
    try {
      worldFateSpaceViewport.releasePointerCapture(event.pointerId);
    } catch (error) {}
  }
  renderWorldFateSpaceView();
}

function setWorldFateSelectedWorld(worldId) {
  if (!WORLD_FATE_OPTIONS.some(function (option) { return option.id === worldId; })) {
    return;
  }
  if (worldId === "custom-world") {
    openWorldFateCustomModal();
    return;
  }
  applyWorldFatePreset(worldId);
}

function applyWorldFateFeatureMedia() {
  if (!playerVideo) {
    return;
  }
  if (!worldFatePlayerSnapshot) {
    worldFatePlayerSnapshot = {
      src: playerVideo.getAttribute("src") || "",
      time: Number.isFinite(playerVideo.currentTime) ? playerVideo.currentTime : 0,
      wasPlaying: !playerVideo.paused && !playerVideo.ended,
      title: playerTitle.textContent,
      meta: playerMeta.textContent,
    };
  }
  const featureSource = normalizePosterPath(WORLD_FATE_FEATURE_VIDEO);
  playerVideo.pause();
  if (featureSource && playerVideo.getAttribute("src") !== featureSource) {
    playerVideo.src = featureSource;
    playerVideo.load();
  }
  try {
    playerVideo.currentTime = 0;
  } catch (error) {}
  playerTitle.textContent = WORLD_FATE_FEATURE_TITLE;
  playerMeta.textContent = WORLD_FATE_FEATURE_META;
  syncPlayerControls();
}

function applyWorldFateWorkspaceVideo() {
  if (!worldFateFeatureVideo) {
    return;
  }
  const featureSource = normalizePosterPath(WORLD_FATE_FEATURE_VIDEO);
  if (featureSource && worldFateFeatureVideo.getAttribute("src") !== featureSource) {
    worldFateFeatureVideo.src = featureSource;
    worldFateFeatureVideo.load();
  }
  const playPromise = worldFateFeatureVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(function () {});
  }
}

function pauseWorldFateWorkspaceVideo() {
  if (worldFateFeatureVideo) {
    worldFateFeatureVideo.pause();
  }
}

function applyEventRelationWorkspaceVideo() {
  if (!eventRelationFeatureVideo) {
    return;
  }
  const featureSource = normalizePosterPath(EVENT_RELATION_FEATURE_VIDEO);
  if (featureSource && eventRelationFeatureVideo.getAttribute("src") !== featureSource) {
    eventRelationFeatureVideo.src = featureSource;
    eventRelationFeatureVideo.load();
  }
  const playPromise = eventRelationFeatureVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(function () {});
  }
}

function pauseEventRelationWorkspaceVideo() {
  if (eventRelationFeatureVideo) {
    eventRelationFeatureVideo.pause();
  }
}

function restoreWorldFateFeatureMedia() {
  if (!worldFatePlayerSnapshot || !playerVideo) {
    return;
  }
  const snapshot = worldFatePlayerSnapshot;
  worldFatePlayerSnapshot = null;
  playerVideo.pause();
  if (snapshot.src) {
    playerVideo.src = snapshot.src;
    playerVideo.load();
    playerVideo.addEventListener("loadedmetadata", function restoreWorldFateVideoState() {
      try {
        playerVideo.currentTime = snapshot.time || 0;
      } catch (error) {}
      if (snapshot.wasPlaying) {
        const playPromise = playerVideo.play();
        if (playPromise && typeof playPromise.catch === "function") {
          playPromise.catch(function () {});
        }
      }
    }, { once: true });
  } else {
    playerVideo.removeAttribute("src");
    playerVideo.load();
  }
  playerTitle.textContent = snapshot.title;
  playerMeta.textContent = snapshot.meta;
  syncPlayerControls();
}

function openWorldFateWorkspace() {
  if (!playerStage.classList.contains("is-functions-open")) {
    return;
  }
  if (playerInfoPanel.classList.contains("is-visible")) {
    closePlayerInfo({ resumePlayback: false });
  }
  if (playerVideo.getAttribute("src") && !playerVideo.paused && !playerVideo.ended) {
    playerVideo.pause();
    syncPlayerControls();
  }
  setStoryReplyModelDrawerOpen(false);
  closeEventRelationWorkspace();
  if (!String(worldFatePrompt.value || "").trim()) {
    worldFatePrompt.value = WORLD_FATE_DIRECTOR_DEFAULT_PROMPT;
  }
  applyWorldFateFeatureMedia();
  applyWorldFateWorkspaceVideo();
  renderWorldFateModule();
  worldFateWorkspaceOpen = true;
  worldFateWorkspace.setAttribute("aria-hidden", "false");
  playerStage.classList.add("is-world-fate-open");
  syncPlayerLayoutSoon();
}

function closeWorldFateWorkspace() {
  worldFateWorkspaceOpen = false;
  if (worldFateWorkspace) {
    worldFateWorkspace.setAttribute("aria-hidden", "true");
  }
  setWorldFateModelDrawerOpen(false);
  closeWorldFateCustomModal();
  playerStage.classList.remove("is-world-fate-open");
  pauseWorldFateWorkspaceVideo();
  restoreWorldFateFeatureMedia();
  resetPlayerScreenLayoutSoon();
}

function openEventRelationWorkspace() {
  if (!playerStage.classList.contains("is-functions-open")) {
    return;
  }
  if (playerInfoPanel.classList.contains("is-visible")) {
    closePlayerInfo({ resumePlayback: false });
  }
  if (playerVideo.getAttribute("src") && !playerVideo.paused && !playerVideo.ended) {
    playerVideo.pause();
    syncPlayerControls();
  }
  setStoryReplyModelDrawerOpen(false);
  closeWorldFateWorkspace();
  applyEventRelationWorkspaceVideo();
  renderEventRelationWorkspace();
  eventRelationWorkspaceOpen = true;
  eventRelationWorkspace.setAttribute("aria-hidden", "false");
  playerStage.classList.add("is-event-relation-open");
  syncPlayerLayoutSoon();
}

function closeEventRelationWorkspace() {
  eventRelationWorkspaceOpen = false;
  if (eventRelationWorkspace) {
    eventRelationWorkspace.setAttribute("aria-hidden", "true");
  }
  playerStage.classList.remove("is-event-relation-open");
  pauseEventRelationWorkspaceVideo();
  setPlayerFunctionsView("home");
  syncPlayerControls();
  syncPlayerLayoutSoon();
}

function resetWorldFateFeature() {
  worldFateSelectedWorldId = "custom-world";
  worldFateBusy = false;
  worldFateSpaceBusy = false;
  worldFateMemoryBusy = false;
  worldFateStageId = "space";
  worldFateCustomRule = "";
  worldFateStoryReady = false;
  worldFateFramesReady = false;
  worldFateVideoRequested = false;
  worldFateSubmit.disabled = false;
  worldFatePrompt.value = WORLD_FATE_DIRECTOR_DEFAULT_PROMPT;
  worldFateCustomInput.value = "";
  WORLD_FATE_OPTIONS[2].note = "自定义规则入口待补充";
  worldFateSpaceMode = "browse";
  worldFateSpaceData = null;
  worldFateSpaceView = { offsetX: 0, offsetY: 0 };
  worldFateSpaceDrag = null;
  worldFateSpaceSelectionBox = null;
  worldFateSpaceSelectionDrag = null;
  worldFateLatestMemory = null;
  worldFateClues = [];
  setWorldFateStatus("先生成空间、收集线索，再进入导演剪辑。线索成立时推动原剧情继续，不成立时只在下方节点里进行文字编写。", "idle");
  setWorldFateSpaceStatus("默认会使用《看不见的客人》的关键帧生成境外空间。你也可以直接上传自己的全景图替换探索画面。", "idle");
  setWorldFateCustomStatus("输入完成后点击确认，即会把这一世界观作用到下方剧情节点。", "idle");
  resetWorldFateNodeState();
  worldFateNodeState = buildWorldFatePresetNodes("preset-world-01").map(function (node, index) {
    return Object.assign({}, node, {
      title: "导演节点 " + String(index + 1).padStart(2, "0"),
      storyDescription: "",
      storyNote: "",
      frameStartUrl: "",
      frameEndUrl: "",
      frameLogicReason: "",
      videoUrl: "",
      videoTaskId: "",
      videoStatus: "",
      videoNote: "",
    });
  });
  closeWorldFateWorkspace();
  closeWorldFateCustomModal();
  setWorldFateSpaceMode("browse");
  renderWorldFateModule();
  refreshWorldFateActionButtons();
}

function handleWorldFateCanvasPointerDown(event) {
  const handle = event.target.closest("[data-drag-handle]");
  const node = event.target.closest("[data-scene-id]");
  if (!handle || !node) {
    return;
  }
  event.preventDefault();
  startWorldFateNodeDrag(node.dataset.sceneId, event.clientX, event.clientY);
}

function getStoryReplyPausedTime() {
  if (!playerStage.classList.contains("is-active")) {
    return null;
  }
  if (!playerVideo.getAttribute("src") || !playerVideo.paused || playerVideo.ended) {
    return null;
  }
  return Number.isFinite(playerVideo.currentTime) ? playerVideo.currentTime : null;
}

function getWorldFateCaptureTime() {
  if (!playerStage.classList.contains("is-active")) {
    return null;
  }
  const sourceVideo = getWorldFateActiveVideoElement();
  if (!sourceVideo || !sourceVideo.getAttribute("src") || sourceVideo.ended) {
    return null;
  }
  return Number.isFinite(sourceVideo.currentTime) ? sourceVideo.currentTime : null;
}

function setPlayerFunctionsView(view) {
  playerFunctionsView = view === "story" ? "story" : "home";
  playerFunctionsHome.classList.toggle("is-active", playerFunctionsView === "home");
  playerFunctionsStoryDetail.classList.toggle("is-active", playerFunctionsView === "story");
  if (playerFunctionsView !== "story") {
    setStoryReplyModelDrawerOpen(false);
  }
  renderStoryReplySelectionOverlay();
}

function setStoryReplyStatus(message, state) {
  storyReplyStatus.textContent = message;
  storyReplyStatus.dataset.state = state || "idle";
}

function getStoryReplyPromptValue() {
  return storyReplyPrompt ? storyReplyPrompt.value.trim() : "";
}

function renderStoryReplyTypeSelection() {
  storyReplyTypeButtons.forEach(function (button) {
    button.classList.toggle("is-active", button.dataset.replyType === storyReplySelectedType);
  });
}

function resetStoryReplySelectionState() {
  storyReplySelection = null;
  storyReplySelectionFrameTime = null;
  storyReplySelectionDrag = null;
}

function buildStoryReplySelectionStyle(box) {
  if (!box) {
    return "";
  }

  return [
    "left:" + (box.x * 100).toFixed(2) + "%",
    "top:" + (box.y * 100).toFixed(2) + "%",
    "width:" + (box.width * 100).toFixed(2) + "%",
    "height:" + (box.height * 100).toFixed(2) + "%",
  ].join(";");
}

function formatStoryReplySelectionSummary(box) {
  if (!box) {
    return "当前未框选海报范围，将默认按整帧构图生成。";
  }

  const left = Math.round(box.x * 100);
  const top = Math.round(box.y * 100);
  const width = Math.round(box.width * 100);
  const height = Math.round(box.height * 100);
  return "已框选海报范围：距左 " + left + "%，距上 " + top + "%，宽 " + width + "%，高 " + height + "%。生成时将优先保留该区域主体。";
}

function renderStoryReplySelectionOverlay() {
  if (!storyReplySelectionSurface || !storyReplySelectionBox || !storyReplySelectionHint) {
    return;
  }

  const pausedTime = getStoryReplyPausedTime();
  const isActive =
    playerStage.classList.contains("is-functions-open") &&
    playerFunctionsView === "story" &&
    pausedTime != null;

  storyReplySelectionSurface.classList.toggle("is-visible", isActive);
  storyReplySelectionSurface.setAttribute("aria-hidden", isActive ? "false" : "true");

  if (!isActive) {
    storyReplySelectionBox.classList.remove("is-visible");
    storyReplySelectionBox.setAttribute("aria-hidden", "true");
    storyReplySelectionHint.classList.remove("is-hidden");
    return;
  }

  const activeBox = storyReplySelectionDrag && storyReplySelectionDrag.box
    ? storyReplySelectionDrag.box
    : storyReplySelection;

  if (activeBox) {
    storyReplySelectionBox.classList.add("is-visible");
    storyReplySelectionBox.setAttribute("aria-hidden", "false");
    storyReplySelectionBox.style.cssText = buildStoryReplySelectionStyle(activeBox);
    storyReplySelectionHint.classList.add("is-hidden");
  } else {
    storyReplySelectionBox.classList.remove("is-visible");
    storyReplySelectionBox.setAttribute("aria-hidden", "true");
    storyReplySelectionHint.classList.remove("is-hidden");
  }
}

function renderStoryReplySelectionSummary(pausedTime) {
  if (!storyReplySelectionSummary) {
    return;
  }

  if (pausedTime == null) {
    storyReplySelectionSummary.textContent = "当前未框选海报范围。暂停后可在左侧视频画面直接拖拽。";
    return;
  }

  if (!storyReplySelection) {
    storyReplySelectionSummary.textContent =
      "已锁定当前帧 " + formatTime(pausedTime) + "。当前未框选海报范围，将默认按整帧构图生成。";
    return;
  }

  storyReplySelectionSummary.textContent =
    "已锁定当前帧 " + formatTime(pausedTime) + "。 " + formatStoryReplySelectionSummary(storyReplySelection);
}

function clearStoryReplySelection() {
  resetStoryReplySelectionState();
  renderStoryReplySelectionOverlay();
  syncStoryReplyPauseState();
}

function updateStoryReplySelectionDrag(clientX, clientY) {
  if (!storyReplySelectionDrag) {
    return;
  }

  const bounds = storyReplySelectionDrag.bounds;
  const currentX = Math.max(0, Math.min(bounds.width, clientX - bounds.left));
  const currentY = Math.max(0, Math.min(bounds.height, clientY - bounds.top));
  const left = Math.min(storyReplySelectionDrag.startX, currentX);
  const top = Math.min(storyReplySelectionDrag.startY, currentY);
  const width = Math.abs(currentX - storyReplySelectionDrag.startX);
  const height = Math.abs(currentY - storyReplySelectionDrag.startY);

  storyReplySelectionDrag.box = {
    x: Number((left / bounds.width).toFixed(4)),
    y: Number((top / bounds.height).toFixed(4)),
    width: Number((width / bounds.width).toFixed(4)),
    height: Number((height / bounds.height).toFixed(4)),
  };

  renderStoryReplySelectionOverlay();
}

function handleStoryReplySelectionPointerDown(event) {
  if (!storyReplySelectionSurface || !storyReplySelectionSurface.classList.contains("is-visible")) {
    return;
  }

  event.preventDefault();
  const bounds = storyReplySelectionSurface.getBoundingClientRect();
  storyReplySelectionDrag = {
    pointerId: event.pointerId,
    bounds: bounds,
    startX: Math.max(0, Math.min(bounds.width, event.clientX - bounds.left)),
    startY: Math.max(0, Math.min(bounds.height, event.clientY - bounds.top)),
    box: null,
  };

  if (typeof storyReplySelectionSurface.setPointerCapture === "function") {
    try {
      storyReplySelectionSurface.setPointerCapture(event.pointerId);
    } catch (error) {}
  }

  updateStoryReplySelectionDrag(event.clientX, event.clientY);
}

function handleStoryReplySelectionPointerMove(event) {
  if (!storyReplySelectionDrag || storyReplySelectionDrag.pointerId !== event.pointerId) {
    return;
  }

  event.preventDefault();
  updateStoryReplySelectionDrag(event.clientX, event.clientY);
}

function handleStoryReplySelectionPointerUp(event) {
  if (!storyReplySelectionDrag || storyReplySelectionDrag.pointerId !== event.pointerId) {
    return;
  }

  event.preventDefault();
  updateStoryReplySelectionDrag(event.clientX, event.clientY);
  const box = storyReplySelectionDrag.box;
  const minWidth = box ? box.width * storyReplySelectionDrag.bounds.width : 0;
  const minHeight = box ? box.height * storyReplySelectionDrag.bounds.height : 0;

  if (box && minWidth >= 12 && minHeight >= 12) {
    storyReplySelection = box;
    storyReplySelectionFrameTime = getStoryReplyPausedTime();
  } else {
    storyReplySelection = null;
    storyReplySelectionFrameTime = null;
  }

  if (typeof storyReplySelectionSurface.releasePointerCapture === "function") {
    try {
      storyReplySelectionSurface.releasePointerCapture(event.pointerId);
    } catch (error) {}
  }

  storyReplySelectionDrag = null;
  syncStoryReplyPauseState();
}

function handleStoryReplySelectionPointerCancel(event) {
  if (!storyReplySelectionDrag || storyReplySelectionDrag.pointerId !== event.pointerId) {
    return;
  }

  if (typeof storyReplySelectionSurface.releasePointerCapture === "function") {
    try {
      storyReplySelectionSurface.releasePointerCapture(event.pointerId);
    } catch (error) {}
  }

  storyReplySelectionDrag = null;
  renderStoryReplySelectionOverlay();
  syncStoryReplyPauseState();
}

function renderStoryReplyEmpty() {
  storyReplyResult.innerHTML =
    '<div class="story-reply-empty">这里会显示暂停帧、框选范围、海报提示词，以及最终生成的海报结果。</div>';
}

function resetStoryReplyFeature() {
  playerFunctionsView = "home";
  storyReplySelectedType = "poster";
  storyReplyBusy = false;
  storyReplyGenerate.disabled = false;
  resetStoryReplySelectionState();
  if (storyReplyPrompt) {
    storyReplyPrompt.value = STORY_REPLY_DEFAULT_PROMPT;
  }
  renderStoryReplyTypeSelection();
  setPlayerFunctionsView("home");
  setStoryReplyStatus("请先暂停一个画面，然后在左侧视频区域拖拽框选海报范围。", "idle");
  renderStoryReplySelectionOverlay();
  renderStoryReplySelectionSummary(null);
  renderStoryReplyEmpty();
}

function resetEventRelationFeature() {
  resetEventRelationState();
  if (eventRelationGenerateGraph) {
    eventRelationGenerateGraph.disabled = false;
  }
  setEventRelationStatus("请先暂停当前视频，再生成 AI 可选事件。", "idle");
  renderEventRelationWorkspace();
}

function syncStoryReplyPauseState() {
  const pausedTime = getStoryReplyPausedTime();

  if (pausedTime == null) {
    resetStoryReplySelectionState();
  } else if (
    storyReplySelectionFrameTime != null &&
    Math.abs(pausedTime - storyReplySelectionFrameTime) > 0.05
  ) {
    resetStoryReplySelectionState();
  }

  renderStoryReplySelectionOverlay();
  renderStoryReplySelectionSummary(pausedTime);

  if (storyReplyBusy) {
    return;
  }

  if (pausedTime == null) {
    setStoryReplyStatus("请先暂停一个画面，然后在左侧视频区域拖拽框选海报范围。", "idle");
    return;
  }

  if (storyReplySelection) {
    setStoryReplyStatus(
      "已锁定当前帧 " + formatTime(pausedTime) + "，框选已完成。现在可补充提示词并生成海报。",
      "ready"
    );
    return;
  }

  setStoryReplyStatus(
    "已锁定当前帧 " + formatTime(pausedTime) + "。现在可在左侧拖拽框选海报主体，或直接按整帧构图生成。",
    "ready"
  );
}

function renderStoryReplyResult(payload) {
  const frame = payload.frame || {};
  const scene = payload.scene || {};
  const reply = payload.reply || {};
  const selection = payload.selection || null;
  const posterPrompt = payload.poster_prompt || "";
  const imageModelLabel = reply.image_model || storyReplyImageModel || "wan2.7";
  const modeLabel = payload.mode === "live_ai"
    ? "Live AI"
    : (payload.mode === "live_image_direct" ? imageModelLabel + " Live" : "Unexpected Fallback");
  const selectionOverlayHtml = selection
    ? '<div class="story-reply-frame-selection" style="' + escapeHtml(buildStoryReplySelectionStyle(selection)) + '"><span>框选主体</span></div>'
    : "";
  const frameHtml = frame.image_url
    ? '<div class="story-reply-frame"><img src="' + escapeHtml(frame.image_url) + '" alt="Paused frame">' + selectionOverlayHtml + "</div>"
    : "";
  const imageHtml = reply.image_url
    ? '<div class="story-reply-image"><img src="' + escapeHtml(reply.image_url) + '" alt="' + escapeHtml(reply.title || reply.label || "story reply") + '"></div>'
    : "";
  const messageHtml =
    '<div class="story-reply-copy">' +
      '<p>' + escapeHtml(reply.message || "") + "</p>" +
      '<p>' + escapeHtml(reply.supporting_text || "") + "</p>" +
    "</div>";

  storyReplyResult.innerHTML =
    '<article class="story-reply-response">' +
      '<div class="story-reply-response-head">' +
        '<div class="story-reply-response-title">' + escapeHtml(reply.title || "海报生成结果") + "</div>" +
        '<div class="story-reply-response-badges">' +
          '<span class="story-reply-badge">' + escapeHtml(reply.label || "海报") + "</span>" +
          '<span class="story-reply-badge">' + escapeHtml(modeLabel) + "</span>" +
        "</div>" +
      "</div>" +
      frameHtml +
      '<div class="story-reply-analysis">' +
        '<div class="story-reply-analysis-item"><span>当前画面</span><strong>' + escapeHtml(scene.scene_summary || "") + "</strong></div>" +
        '<div class="story-reply-analysis-item"><span>框选范围</span><strong>' + escapeHtml(formatStoryReplySelectionSummary(selection)) + "</strong></div>" +
        '<div class="story-reply-analysis-item"><span>海报提示词</span><strong>' + escapeHtml(posterPrompt || "未额外补充提示词，默认按当前画面生成。") + "</strong></div>" +
      "</div>" +
      imageHtml +
      messageHtml +
      '<div class="story-reply-footer">' + escapeHtml(reply.guardrails || "") + "</div>" +
    "</article>";
}

function setEventRelationStatus(message, state) {
  if (!eventRelationStatus) {
    return;
  }
  eventRelationStatus.textContent = message;
  eventRelationStatus.dataset.state = state || "idle";
}

function getEventRelationPausedTime() {
  const sourceVideo = eventRelationWorkspaceOpen && eventRelationFeatureVideo
    ? eventRelationFeatureVideo
    : playerVideo;
  if (!sourceVideo || !sourceVideo.getAttribute("src") || sourceVideo.ended || !sourceVideo.paused) {
    return null;
  }
  return Number.isFinite(sourceVideo.currentTime) ? sourceVideo.currentTime : null;
}

function resetEventRelationState() {
  eventRelationBusy = false;
  eventRelationFrameTime = null;
  eventRelationGraphPayload = null;
  eventRelationSelectedRelationId = null;
  eventRelationAdjustedRelationState = null;
  eventRelationOptionsPayload = null;
  eventRelationSelectedEvent = null;
  eventRelationCommittedPayload = null;
  eventRelationPatchesPayload = null;
  eventRelationFramesPayload = null;
  eventRelationVideoPayload = null;
  eventRelationCueRequestId += 1;
}

function renderEventRelationEmpty() {
  if (!eventRelationResult) {
    return;
  }
  eventRelationResult.innerHTML =
    '<div class="story-reply-empty">这里会按 5 步展示：当前帧理解、AI 事件选项、事件写入、关系变化、后续微补丁与生成结果。</div>';
}

function getEventRelationStageStatus(stepId) {
  if (stepId === "graph") {
    return eventRelationGraphPayload ? "已生成 5 个角色节点" : "等待暂停帧";
  }
  if (stepId === "cue") {
    return eventRelationOptionsPayload ? "视频中出现可选事件" : "等待关系边被选中";
  }
  if (stepId === "relation") {
    return eventRelationCommittedPayload ? "关系已被事件改写" : "等待事件选择";
  }
  if (stepId === "impact") {
    return eventRelationPatchesPayload ? "触发/阻断已推演" : "等待关系更新";
  }
  if (stepId === "generate") {
    if (eventRelationVideoPayload) {
      return "视频片段已准备";
    }
    if (eventRelationFramesPayload) {
      return "首尾帧已生成";
    }
    return "等待首尾帧";
  }
  return "";
}

function renderEventRelationStages() {
  if (!eventRelationStages) {
    return;
  }
  eventRelationStages.innerHTML = EVENT_RELATION_STAGE_STEPS.map(function (step, index) {
    const isActive =
      (step.id === "graph" && !eventRelationGraphPayload) ||
      (step.id === "cue" && eventRelationGraphPayload && !eventRelationSelectedEvent) ||
      (step.id === "relation" && eventRelationSelectedEvent && !eventRelationCommittedPayload) ||
      (step.id === "impact" && eventRelationCommittedPayload && !eventRelationPatchesPayload) ||
      (step.id === "generate" && eventRelationFramesPayload);
    const isDone =
      (step.id === "graph" && eventRelationGraphPayload) ||
      (step.id === "cue" && eventRelationSelectedEvent) ||
      (step.id === "relation" && eventRelationCommittedPayload) ||
      (step.id === "impact" && eventRelationPatchesPayload) ||
      (step.id === "generate" && eventRelationVideoPayload);
    return (
      '<button class="event-relation-stage-card' + (isActive ? " is-active" : "") + (isDone ? " is-complete" : "") + '" type="button">' +
        '<span class="event-relation-stage-index">' + String(index + 1).padStart(2, "0") + "</span>" +
        '<span class="event-relation-stage-copy">' +
          '<strong>' + escapeHtml(step.title) + "</strong>" +
          '<small>' + escapeHtml(getEventRelationStageStatus(step.id)) + "</small>" +
        "</span>" +
      "</button>"
    );
  }).join("");
}

function syncEventRelationPauseState() {
  if (!eventRelationStatus || !eventRelationWorkspaceOpen || eventRelationBusy) {
    return;
  }

  const pausedTime = getEventRelationPausedTime();
  if (pausedTime == null) {
    setEventRelationStatus("请先暂停当前视频，再生成 AI 可选事件。", "idle");
    return;
  }

  if (
    eventRelationFrameTime != null &&
    Math.abs(pausedTime - eventRelationFrameTime) > 0.05 &&
    !eventRelationCommittedPayload
  ) {
    eventRelationGraphPayload = null;
    eventRelationSelectedRelationId = null;
    eventRelationOptionsPayload = null;
    eventRelationSelectedEvent = null;
    eventRelationPatchesPayload = null;
    eventRelationFramesPayload = null;
    eventRelationVideoPayload = null;
    renderEventRelationWorkspace();
  }

  setEventRelationStatus("已锁定当前暂停帧 " + formatTime(pausedTime) + "。现在先生成角色关系图谱。", "ready");
  renderEventRelationStages();
}

function getEventRelationScene() {
  return (eventRelationOptionsPayload && eventRelationOptionsPayload.scene) || {};
}

function getEventRelationEvents() {
  return (eventRelationOptionsPayload && Array.isArray(eventRelationOptionsPayload.events))
    ? eventRelationOptionsPayload.events
    : [];
}

function getEventRelationModeBadge(payload, fallbackLabel) {
  const mode = String((payload && payload.mode) || "").trim();
  if (mode === "live_ai") {
    return "AI live";
  }
  if (mode === "wan_keyframes") {
    return "Wan keyframes";
  }
  if (mode === "rule_commit" || mode === "rule_patches") {
    return "rule engine";
  }
  if (mode === "local_fallback" || mode === "local_frontend_demo") {
    return "local placeholder";
  }
  return fallbackLabel || "pending";
}

function renderEventRelationModeBadge(payload, fallbackLabel) {
  return '<span class="event-relation-badge is-mode">' + escapeHtml(getEventRelationModeBadge(payload, fallbackLabel)) + "</span>";
}

function buildEventRelationStep(kicker, title, badge, bodyHtml) {
  return (
    '<section class="event-relation-step">' +
      '<div class="event-relation-step-head">' +
        '<div>' +
          '<div class="event-relation-step-kicker">' + escapeHtml(kicker) + "</div>" +
          '<h4 class="event-relation-step-title">' + escapeHtml(title) + "</h4>" +
        "</div>" +
        (badge ? '<span class="event-relation-badge">' + escapeHtml(badge) + "</span>" : "") +
      "</div>" +
      bodyHtml +
    "</section>"
  );
}

function renderEventRelationFrame(scene) {
  const frame = (eventRelationOptionsPayload && eventRelationOptionsPayload.frame) || {};
  const frameImage = frame.image_url
    ? '<div class="event-relation-frame"><img src="' + escapeHtml(frame.image_url) + '" alt="Event relation frame">' +
        '<div class="event-relation-frame-overlay">' +
          '<strong>' + escapeHtml(scene.scene_summary || "当前帧已被 AI 读取") + "</strong>" +
          '<span>' + escapeHtml(scene.main_plot || "主线锁定：只插入小事件，不改变原片走向。") + "</span>" +
        "</div>" +
      "</div>"
    : "";

  return frameImage +
    '<div class="event-relation-copy">' +
      '<strong>' + escapeHtml(scene.character_focus || "AI 会先理解画面中的角色与潜在冲突") + "</strong>" +
      '<span>' + escapeHtml(scene.relationship_context || "事件选项会基于当前帧生成，用户选择后才写入事件系统。") + "</span>" +
    "</div>";
}

function renderEventRelationEventCards() {
  const events = getEventRelationEvents();
  if (!events.length) {
    return '<div class="story-reply-empty">先在左侧关系图谱里选择一条关系边，并可把关系改成“信任、怀疑、共谋”等状态。AI 会基于这条关系变化生成会触发或阻断的事件选项。</div>';
  }

  return '<div class="event-relation-event-grid">' + events.map(function (eventItem) {
    const selected = eventRelationSelectedEvent && eventRelationSelectedEvent.event_id === eventItem.event_id;
    const risk = Math.round(Number(eventItem.risk || 0) * 100);
    const participants = Array.isArray(eventItem.participants) ? eventItem.participants.join(" / ") : "";
    const relationship = eventItem.relationship_preview || eventItem.relation_preview || "选择后写入关系账本";
    const future = eventItem.future_scope || "后续相关镜头";
    return (
      '<button class="event-relation-event-card' + (selected ? " is-selected" : "") + '" type="button" data-event-relation-id="' + escapeHtml(eventItem.event_id || "") + '"' + (eventRelationBusy ? " disabled" : "") + ">" +
        '<h5>' + escapeHtml(eventItem.title || "AI 可插入事件") + "</h5>" +
        '<p>' + escapeHtml(eventItem.description || "这是一个不改主线、但会改变关系状态的小事件。") + "</p>" +
        '<div class="event-relation-causal-mini">' +
          '<span>关系变化</span><strong>' + escapeHtml(relationship) + "</strong>" +
          '<span>影响范围</span><strong>' + escapeHtml(future) + "</strong>" +
        "</div>" +
        '<div class="event-relation-event-meta">' +
          '<span class="event-relation-badge">角色 ' + escapeHtml(participants || "当前帧人物") + "</span>" +
          '<span class="event-relation-badge">风险 ' + risk + "%</span>" +
          '<span class="event-relation-badge">主线锁定</span>' +
        "</div>" +
      "</button>"
    );
  }).join("") + "</div>";
}

function buildEventRelationGraphFromScene(scene) {
  const movieLabel = scene.movie_label || "F1 维修区测试切片";
  const focus = String(scene.character_focus || "");
  const isEscape = /狱|监管|护士|清洁|同囚/.test(movieLabel + focus);
  if (isEscape) {
    return {
      protagonist: "主角",
      roles: [
        { id: "protagonist", label: "主角", kind: "protagonist" },
        { id: "guard", label: "狱警", kind: "short" },
        { id: "cellmate", label: "同囚", kind: "short" },
        { id: "nurse", label: "护士", kind: "short" },
        { id: "janitor", label: "清洁工", kind: "short" },
        { id: "witness", label: "路人证人", kind: "short" },
      ],
      relations: [
        { id: "rel_guard", from: "主角", to: "狱警", state: "警惕", options: ["陌生", "警惕", "敌意"] },
        { id: "rel_cellmate", from: "主角", to: "同囚", state: "试探", options: ["试探", "共谋", "亏欠"] },
        { id: "rel_nurse", from: "主角", to: "护士", state: "隐瞒", options: ["隐瞒", "信任", "利用"] },
        { id: "rel_janitor", from: "主角", to: "清洁工", state: "陌生", options: ["陌生", "收买", "信任"] },
        { id: "rel_witness", from: "主角", to: "路人证人", state: "怀疑", options: ["怀疑", "安抚", "威胁"] },
      ],
    };
  }
  return {
    protagonist: "主角车手",
    roles: [
      { id: "protagonist", label: "主角车手", kind: "protagonist" },
      { id: "marshal", label: "赛道工作人员", kind: "short" },
      { id: "mechanic", label: "维修技师", kind: "short" },
      { id: "pr", label: "车队公关", kind: "short" },
      { id: "rival", label: "对手车队技师", kind: "short" },
      { id: "security", label: "维修区安保", kind: "short" },
    ],
    relations: [
      { id: "rel_marshal", from: "主角车手", to: "赛道工作人员", state: "流程监管", options: ["流程监管", "信任", "重点观察"] },
      { id: "rel_mechanic", from: "主角车手", to: "维修技师", state: "职业配合", options: ["职业配合", "共谋", "亏欠"] },
      { id: "rel_pr", from: "主角车手", to: "车队公关", state: "常规保护", options: ["常规保护", "舆论警戒", "信任"] },
      { id: "rel_rival", from: "主角车手", to: "对手车队技师", state: "敌对", options: ["敌对", "利用", "试探合作"] },
      { id: "rel_security", from: "主角车手", to: "维修区安保", state: "陌生", options: ["陌生", "信任", "怀疑"] },
    ],
  };
}

function renderEventRelationInsight() {
  if (!eventRelationFrameInsight) {
    return;
  }
  const scene = getEventRelationScene();
  const frame = (eventRelationOptionsPayload && eventRelationOptionsPayload.frame) || {};
  if (!eventRelationGraphPayload) {
    eventRelationFrameInsight.innerHTML =
      '<div class="world-fate-memory-placeholder">暂停上方视频后点击“生成关系图谱”。这里会显示 AI 对当前帧的主角、短线角色、当前关系和主线约束理解。</div>';
    return;
  }
  eventRelationFrameInsight.innerHTML =
    '<div class="event-relation-frame-insight-grid">' +
      (frame.image_url ? '<div class="event-relation-frame"><img src="' + escapeHtml(frame.image_url) + '" alt="Event relation frame"></div>' : "") +
      '<div class="event-relation-copy">' +
        '<strong>' + escapeHtml(scene.scene_summary || "当前帧已被 AI 读取") + "</strong>" +
        '<span>' + escapeHtml(scene.character_focus || "AI 会先理解画面中的角色与潜在冲突。") + "</span>" +
        '<span>' + escapeHtml(scene.main_plot || "主线锁定：只插入小事件，不改变原片走向。") + "</span>" +
      "</div>" +
    "</div>";
}

function renderEventRelationOptionsPanel() {
  if (!eventRelationOptions) {
    return;
  }
  if (!eventRelationGraphPayload) {
    eventRelationOptions.innerHTML =
      '<div class="world-fate-memory-placeholder">先生成关系图谱。之后上方视频会弹出可选事件，这里同步显示事件说明和当前选择。</div>';
    return;
  }
  eventRelationOptions.innerHTML = renderEventRelationEventCards();
}

function renderEventRelationImpactSummary() {
  const patches = eventRelationPatchesPayload && Array.isArray(eventRelationPatchesPayload.patches)
    ? eventRelationPatchesPayload.patches
    : [];
  if (!patches.length) {
    const relation = eventRelationGraphPayload && eventRelationGraphPayload.relations.find(function (item) {
      return item.id === eventRelationSelectedRelationId;
    });
    if (!relation) {
      return '<div class="story-reply-empty">先选中一条关系边。系统会根据这条关系在剧情中的变化，推演会触发或阻断哪些事件。</div>';
    }
    return (
      '<div class="event-relation-relation-card">' +
        '<div class="event-relation-copy">' +
          '<strong>' + escapeHtml(relation.from + " -> " + relation.to + " / " + relation.state) + "</strong>" +
          '<span>等待视频中的事件选项改变这条关系。改完后，这里会显示它会放大哪些事件、阻断哪些事件、以及为什么会影响后续剧情片段。</span>' +
        "</div>" +
      "</div>"
    );
  }
  return (
    '<div class="event-relation-patch-list">' +
      patches.map(function (patch) {
        return (
          '<article class="event-relation-patch">' +
            '<h5>' + escapeHtml(patch.title || "触发/阻断事件") + "</h5>" +
            '<p><strong>会触发：</strong>' + escapeHtml(patch.micro_rewrite || "相关角色对主角的态度会被放大到后续镜头。") + "</p>" +
            '<p><strong>会阻断：</strong>' + escapeHtml((patch.forbidden_changes || []).join(" / ") || "不会推翻主线，不会改成大分支。") + "</p>" +
          "</article>"
        );
      }).join("") +
    "</div>"
  );
}

function getEventRelationCausalSummary() {
  const relation = getEventRelationSelectedRelation();
  const eventItem = (eventRelationCommittedPayload && eventRelationCommittedPayload.event) || eventRelationSelectedEvent;
  const delta = eventRelationCommittedPayload && eventRelationCommittedPayload.relationship_delta;
  const patches = eventRelationPatchesPayload && Array.isArray(eventRelationPatchesPayload.patches)
    ? eventRelationPatchesPayload.patches
    : [];
  const relationLabel = delta
    ? (delta.from || "主角") + " -> " + (delta.to || "短线角色")
    : relation
      ? relation.from + " -> " + relation.to
      : "等待选择关系边";
  const relationState = delta
    ? (delta.before || "原关系") + " -> " + (delta.after || "新关系")
    : relation
      ? relation.state
      : "暂停帧后生成";
  const eventLabel = eventItem
    ? (eventItem.title || "已选择事件")
    : relation
      ? "AI 正在等待事件选择"
      : "关系边决定事件池";
  const patchLabel = eventRelationVideoPayload
    ? "局部视频补丁完成"
    : eventRelationFramesPayload
      ? "首尾帧已生成"
      : patches.length
        ? "已生成 " + patches.length + " 个后续镜头微补丁"
        : "等待推演后续镜头";

  return {
    relationLabel: relationLabel,
    relationState: relationState,
    eventLabel: eventLabel,
    patchLabel: patchLabel,
    locked: eventRelationCommittedPayload && eventRelationCommittedPayload.main_plot_lock
      ? eventRelationCommittedPayload.main_plot_lock
      : "主线锁定：只改短线角色再次出现时的局部表现。",
  };
}

function renderEventRelationCausalChain() {
  const summary = getEventRelationCausalSummary();
  return (
    '<section class="event-relation-causal-chain" aria-label="关系因果闭环">' +
      '<div class="event-relation-causal-head">' +
        '<span>关系因果闭环</span>' +
        '<strong>关系变化 -> 事件触发/阻断 -> 局部视频改写</strong>' +
      "</div>" +
      '<div class="event-relation-causal-grid">' +
        '<article><span>01 关系边</span><strong>' + escapeHtml(summary.relationLabel) + "</strong><small>" + escapeHtml(summary.relationState) + "</small></article>" +
        '<article><span>02 事件系统</span><strong>' + escapeHtml(summary.eventLabel) + "</strong><small>由当前关系状态触发或阻断</small></article>" +
        '<article><span>03 视频补丁</span><strong>' + escapeHtml(summary.patchLabel) + "</strong><small>" + escapeHtml(summary.locked) + "</small></article>" +
      "</div>" +
    "</section>"
  );
}

function renderEventRelationLedger() {
  if (!eventRelationSelectedRelationId) {
    return '<div class="story-reply-empty">先在关系图谱里选中一条关系边。右侧会说明这条关系在当前剧情中可能触发/阻断什么事件。</div>';
  }
  if (!eventRelationSelectedEvent && !eventRelationCommittedPayload) {
    const relation = eventRelationGraphPayload && eventRelationGraphPayload.relations.find(function (item) {
      return item.id === eventRelationSelectedRelationId;
    });
    return (
      '<div class="event-relation-relation-card">' +
        '<div class="event-relation-copy">' +
          '<strong>' + escapeHtml((relation ? relation.from + " -> " + relation.to : "当前关系边") + " / " + (relation ? relation.state : "待改写")) + "</strong>" +
          '<span>请在视频里选择一个事件选项。该事件会先改变这条关系，再决定后续相关事件被触发还是阻断。</span>' +
        "</div>" +
      "</div>"
    );
  }

  const eventItem = eventRelationSelectedEvent || {};
  const eventRecord = (eventRelationCommittedPayload && eventRelationCommittedPayload.event) || eventItem;
  return (
    '<div class="event-relation-relation-card">' +
      '<div class="event-relation-copy">' +
        '<strong>' + escapeHtml(eventRecord.title || "已选择的 AI 可插入事件") + "</strong>" +
        '<span>' + escapeHtml(eventRecord.description || "事件已准备写入剧情系统。") + "</span>" +
      "</div>" +
      '<div class="event-relation-event-meta">' +
        renderEventRelationModeBadge(eventRelationCommittedPayload, "selected") +
        '<span class="event-relation-badge">source: ai_generated_user_choice</span>' +
        '<span class="event-relation-badge">selected_by_user: true</span>' +
        '<span class="event-relation-badge">main_plot_locked: true</span>' +
      "</div>" +
    "</div>"
  );
}

function renderEventRelationMeters(delta) {
  const values = delta || {};
  const labels = [
    { key: "suspicion", label: "怀疑" },
    { key: "attention", label: "关注" },
    { key: "trust", label: "信任" },
  ];
  return '<div class="event-relation-meter-grid">' + labels.map(function (item) {
    const rawValue = Number(values[item.key] || 0);
    const width = Math.max(0, Math.min(100, 50 + rawValue));
    const sign = rawValue > 0 ? "+" : "";
    return (
      '<div class="event-relation-meter">' +
        '<span>' + escapeHtml(item.label) + "</span>" +
        '<div class="event-relation-meter-track"><span class="event-relation-meter-fill" style="--meter-width:' + width + '%"></span></div>' +
        '<span>' + sign + rawValue + "</span>" +
      "</div>"
    );
  }).join("") + "</div>";
}

function renderEventRelationChange() {
  const relation = eventRelationCommittedPayload && eventRelationCommittedPayload.relationship_delta;
  if (!relation) {
    return '<div class="story-reply-empty">事件写入后，这里会显示角色关系从什么变成什么。</div>';
  }

  return (
    '<div class="event-relation-relation-card">' +
      '<div class="event-relation-event-meta">' + renderEventRelationModeBadge(eventRelationCommittedPayload, "pending") + "</div>" +
      '<div class="event-relation-relation-row">' +
        '<span>' + escapeHtml(relation.from || "角色A") + " -> " + escapeHtml(relation.to || "角色B") + "</span>" +
        '<span class="event-relation-relation-arrow">关系微改写</span>' +
      "</div>" +
      '<div class="event-relation-relation-row" style="margin-top:10px;">' +
        '<strong>' + escapeHtml(relation.before || "普通关系") + "</strong>" +
        '<span class="event-relation-relation-arrow">-></span>' +
        '<strong>' + escapeHtml(relation.after || "新关系状态") + "</strong>" +
      "</div>" +
      renderEventRelationMeters(relation.delta) +
    "</div>"
  );
}

function renderEventRelationGraph() {
  if (!eventRelationGraph) {
    return;
  }
  if (!eventRelationGraphPayload) {
    eventRelationGraph.innerHTML =
      '<div class="event-relation-graph-empty">关系图谱等待生成。先暂停视频并点击“生成关系图谱”。</div>';
    return;
  }

  const roles = eventRelationGraphPayload.roles || [];
  const relations = eventRelationGraphPayload.relations || [];
  const relationDelta = eventRelationCommittedPayload && eventRelationCommittedPayload.relationship_delta;
  const rolePositions = [
    { x: 50, y: 14 },
    { x: 16, y: 44 },
    { x: 32, y: 78 },
    { x: 68, y: 78 },
    { x: 84, y: 44 },
    { x: 50, y: 52 },
  ];
  const roleMap = {};
  roles.forEach(function (role, index) {
    roleMap[role.label] = Object.assign({ x: 50, y: 50 }, rolePositions[index] || {});
  });

  const relationLines = relations.map(function (relation) {
    const source = roleMap[relation.from] || { x: 50, y: 14 };
    const target = roleMap[relation.to] || { x: 50, y: 44 };
    return '<line x1="' + source.x + '" y1="' + source.y + '" x2="' + target.x + '" y2="' + target.y + '"></line>';
  }).join("");

  const relationNodes = relations.map(function (relation) {
    const source = roleMap[relation.from] || { x: 50, y: 14 };
    const target = roleMap[relation.to] || { x: 50, y: 44 };
    const midX = (source.x + target.x) / 2;
    const midY = (source.y + target.y) / 2;
    const isSelected = eventRelationSelectedRelationId === relation.id;
    let displayState = relation.state;
    if (
      relationDelta &&
      (
        (relationDelta.from === relation.to && relationDelta.to === relation.from) ||
        (relationDelta.from === relation.from && relationDelta.to === relation.to)
      )
    ) {
      displayState = relationDelta.after || relation.state;
    }
    return (
      '<div class="event-relation-link-node' + (isSelected ? " is-selected" : "") + '" role="button" tabindex="0" data-relation-id="' + escapeHtml(relation.id) + '" style="--node-x:' + midX + '%;--node-y:' + midY + '%;">' +
        '<span>' + escapeHtml(relation.from + " -> " + relation.to) + "</span>" +
        '<strong>' + escapeHtml(displayState) + "</strong>" +
        (isSelected
          ? '<div class="event-relation-state-options">' +
              (relation.options || []).map(function (option) {
                return '<button class="event-relation-state-option' + (option === relation.state ? " is-active" : "") + '" type="button" data-relation-id="' + escapeHtml(relation.id) + '" data-relation-state="' + escapeHtml(option) + '">' + escapeHtml(option) + "</button>";
              }).join("") +
            "</div>"
          : "") +
      "</div>"
    );
  }).join("");

  eventRelationGraph.innerHTML =
    '<div class="event-relation-map">' +
      '<svg class="event-relation-map-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">' +
        relationLines +
      "</svg>" +
      roles.map(function (role) {
        const position = roleMap[role.label] || { x: 50, y: 50 };
        return (
          '<div class="event-relation-node is-role' + (role.kind === "protagonist" ? " is-protagonist" : "") + '" style="--node-x:' + position.x + '%;--node-y:' + position.y + '%;">' +
            '<span>' + escapeHtml(role.kind === "protagonist" ? "主角" : "短线角色") + "</span>" +
            '<strong>' + escapeHtml(role.label) + "</strong>" +
          "</div>"
        );
      }).join("") +
      relationNodes +
      (relationDelta ? '<div class="event-relation-map-caption">关系已更新：' + escapeHtml(relationDelta.before || "") + " -> " + escapeHtml(relationDelta.after || "") + "</div>" : "") +
    "</div>";
}

function renderEventRelationLedgerPanel() {
  if (!eventRelationLedger) {
    return;
  }
  eventRelationLedger.innerHTML =
    renderEventRelationCausalChain() +
    renderEventRelationLedger() +
    renderEventRelationChange() +
    renderEventRelationImpactSummary();
}

function renderEventRelationCueLayer() {
  if (!eventRelationCueLayer) {
    return;
  }
  const cueEvents = getEventRelationEvents();
  const relation = getEventRelationSelectedRelation();
  if (!cueEvents.length && !(eventRelationBusy && relation && eventRelationOptionsPayload)) {
    eventRelationCueLayer.innerHTML = "";
    eventRelationCueLayer.classList.remove("is-visible");
    return;
  }
  eventRelationCueLayer.classList.add("is-visible");
  const modeBadge = cueEvents.length && eventRelationOptionsPayload
    ? '<span class="event-relation-cue-mode">' + escapeHtml(getEventRelationModeBadge(eventRelationOptionsPayload, "pending")) + "</span>"
    : "";
  const optionHtml = cueEvents.length
    ? cueEvents.map(function (eventItem) {
        const selected = eventRelationSelectedEvent && eventRelationSelectedEvent.event_id === eventItem.event_id;
        return (
          '<button class="event-relation-cue-option' + (selected ? " is-selected" : "") + '" type="button" data-event-relation-id="' + escapeHtml(eventItem.event_id || "") + '">' +
            '<span class="event-relation-cue-index">选择 ' + escapeHtml(String(cueEvents.indexOf(eventItem) + 1).padStart(2, "0")) + "</span>" +
            '<strong>' + escapeHtml(eventItem.title || "事件选项") + "</strong>" +
            '<span>' + escapeHtml(eventItem.description || "该事件会改变关系边并影响后续剧情。") + "</span>" +
            '<small><b>触发</b>' + escapeHtml(eventItem.trigger_rule || eventItem.future_scope || "后续相关镜头") + "</small>" +
            '<small><b>阻断</b>' + escapeHtml(eventItem.blocked_change || "不推翻原视频主线") + "</small>" +
          "</button>"
        );
      }).join("")
    : '<div class="event-relation-cue-loading"><strong>AI 正在生成这条关系的事件选项</strong><span>返回后会直接悬浮在当前视频画面上。</span></div>';
  eventRelationCueLayer.innerHTML =
    '<div class="event-relation-cue-head">' +
      '<span>剧情事件点</span>' +
      '<strong>' + escapeHtml(relation ? relation.from + " -> " + relation.to + " / " + relation.state : "视频中的可选项会改变当前关系边") + "</strong>" +
      modeBadge +
    "</div>" +
    '<div class="event-relation-cue-options">' +
      optionHtml +
    "</div>";
}

function renderEventRelationPatches() {
  const patches = eventRelationPatchesPayload && Array.isArray(eventRelationPatchesPayload.patches)
    ? eventRelationPatchesPayload.patches
    : [];
  if (!patches.length) {
    return '<div class="story-reply-empty">提交事件后，系统会生成 2-3 个后续镜头微补丁。补丁只改眼神、停顿、站位、短台词或镜头停留。</div>';
  }

  return (
    '<div class="event-relation-patch-list">' +
      '<div class="event-relation-event-meta">' + renderEventRelationModeBadge(eventRelationPatchesPayload, "pending") + "</div>" +
      patches.map(function (patch) {
        return (
          '<article class="event-relation-patch">' +
            '<h5>' + escapeHtml(patch.title || patch.shot_id || "后续镜头补丁") + "</h5>" +
            '<p><strong>锁定主线：</strong>' + escapeHtml(patch.locked_plot || "主线不变，只允许局部表现变化。") + "</p>" +
            '<p><strong>微改写：</strong>' + escapeHtml(patch.micro_rewrite || "相关角色再次出现时，增加更明确的关注、停顿或站位变化。") + "</p>" +
          "</article>"
        );
      }).join("") +
    "</div>"
  );
}

function renderEventRelationGeneration() {
  const frames = eventRelationFramesPayload && Array.isArray(eventRelationFramesPayload.frames)
    ? eventRelationFramesPayload.frames
    : [];
  const video = eventRelationVideoPayload || null;
  const frameHtml = frames.length
    ? '<div class="event-relation-frame-grid">' + frames.map(function (frame) {
        return (
          '<div class="event-relation-generated-frame">' +
            (frame.image_url ? '<img src="' + escapeHtml(frame.image_url) + '" alt="' + escapeHtml(frame.label || "frame") + '">' : "") +
            '<span>' + escapeHtml((frame.label || "首尾帧") + "：" + (frame.prompt || frame.note || "已生成微改写画面方案。")) + "</span>" +
          "</div>"
        );
      }).join("") + "</div>"
    : "";
  const videoHtml = video
    ? '<div class="event-relation-relation-card" style="margin-top:12px;">' +
        '<div class="event-relation-event-meta">' + renderEventRelationModeBadge(video, "pending") + "</div>" +
        '<div class="event-relation-copy">' +
          '<strong>' + escapeHtml(video.video_status || "视频补丁任务已准备") + "</strong>" +
          '<span>' + escapeHtml(video.video_note || video.change_summary || "局部改写视频会承接首尾帧，只改相关角色的表现，不改主线。") + "</span>" +
        "</div>" +
      "</div>"
    : "";

  return (
    (eventRelationFramesPayload
      ? '<div class="event-relation-event-meta">' + renderEventRelationModeBadge(eventRelationFramesPayload, "pending") + "</div>"
      : "") +
    '<div class="event-relation-actions">' +
      '<button class="story-reply-selection-button" type="button" data-event-relation-action="frames"' + (!eventRelationPatchesPayload || eventRelationBusy ? " disabled" : "") + ">生成首尾帧</button>" +
      '<button class="story-reply-selection-button is-secondary" type="button" data-event-relation-action="video"' + (!eventRelationFramesPayload || eventRelationBusy ? " disabled" : "") + ">生成视频片段</button>" +
    "</div>" +
    frameHtml +
    videoHtml
  );
}

function renderEventRelationFlow() {
  if (!eventRelationResult) {
    return;
  }

  eventRelationResult.innerHTML =
    renderEventRelationCausalChain() +
    buildEventRelationStep("Step 04", "触发/阻断后的后续微补丁", eventRelationPatchesPayload ? "补丁已生成" : "等待推演", renderEventRelationPatches()) +
    buildEventRelationStep("Step 05", "首尾帧 / 局部视频片段", eventRelationVideoPayload ? "视频已生成" : eventRelationFramesPayload ? "首尾帧已生成" : "等待生成", renderEventRelationGeneration());
}

function renderEventRelationWorkspace() {
  renderEventRelationStages();
  renderEventRelationInsight();
  renderEventRelationCueLayer();
  renderEventRelationOptionsPanel();
  renderEventRelationGraph();
  renderEventRelationLedgerPanel();
  renderEventRelationFlow();
}

async function postEventRelationJson(url, payload) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  if (!response.ok || result.status !== "ok") {
    throw new Error(result.error || "关系因果台请求失败。");
  }
  return result;
}

function buildEventRelationLocalOptions(pausedTime) {
  const seconds = Number.isFinite(pausedTime) ? pausedTime : 0;
  return {
    status: "ok",
    mode: "local_frontend_demo",
    frame: {
      time: Number(seconds.toFixed(3)),
      image_url: "",
    },
    scene: {
      movie_label: "关系因果台演示片段",
      scene_summary: "当前帧被视为主角与短线角色发生轻微接触的关键点。",
      character_focus: "主角与短线角色的短暂对视、放行、回避或试探。",
      relationship_context: "系统只允许调整短线角色与主角之间的局部关系，不推翻原片主线。",
      main_plot: "主线锁定：只插入小事件，只影响后续相关镜头中的眼神、停顿、站位或一句短台词。",
    },
    events: [],
  };
}

function getEventRelationSelectedRelation() {
  if (!eventRelationGraphPayload || !eventRelationSelectedRelationId) {
    return null;
  }
  return eventRelationGraphPayload.relations.find(function (item) {
    return item.id === eventRelationSelectedRelationId;
  }) || null;
}

function clearEventRelationDownstreamState() {
  eventRelationSelectedEvent = null;
  eventRelationCommittedPayload = null;
  eventRelationPatchesPayload = null;
  eventRelationFramesPayload = null;
  eventRelationVideoPayload = null;
}

async function requestEventRelationCueEventsForSelectedRelation() {
  if (!eventRelationOptionsPayload || !eventRelationGraphPayload || !eventRelationSelectedRelationId) {
    return;
  }
  const relation = getEventRelationSelectedRelation();
  if (!relation) {
    return;
  }

  const requestId = eventRelationCueRequestId + 1;
  eventRelationCueRequestId = requestId;
  eventRelationBusy = true;
  eventRelationOptionsPayload.events = [];
  eventRelationOptionsPayload.mode = "pending";
  setEventRelationStatus("AI 正在根据“" + relation.from + " -> " + relation.to + " / " + relation.state + "”生成可触发/阻断事件...", "loading");
  renderEventRelationWorkspace();

  try {
    const payload = await postEventRelationJson(EVENT_RELATION_RELATION_EVENTS_API_URL, {
      movie_id: EVENT_RELATION_MOVIE_ID,
      time: Number((eventRelationFrameTime || 0).toFixed(3)),
      scene: eventRelationOptionsPayload.scene || {},
      relation: relation,
      relation_state: eventRelationAdjustedRelationState || relation.state,
      main_plot_lock: (eventRelationOptionsPayload.scene && eventRelationOptionsPayload.scene.main_plot) || "只允许插入小事件，不改变当前视频主线走向；后续只做角色表现层面的微改写。",
    });
    if (requestId !== eventRelationCueRequestId) {
      return;
    }
    eventRelationOptionsPayload = Object.assign({}, eventRelationOptionsPayload, {
      mode: payload.mode || "live_ai",
      relation: payload.relation || relation,
      events: Array.isArray(payload.events) ? payload.events : [],
      relation_events_debug_steps: payload.debug_steps || [],
    });
    setEventRelationStatus("AI 事件选项已生成，并已悬浮到视频画面上。选择一个事件后会写入关系账本。", "ready");
  } catch (error) {
    if (requestId !== eventRelationCueRequestId) {
      return;
    }
    if (eventRelationOptionsPayload) {
      eventRelationOptionsPayload.events = [];
      eventRelationOptionsPayload.mode = "pending";
    }
    setEventRelationStatus(error.message || "关系事件生成失败。", "error");
  } finally {
    if (requestId === eventRelationCueRequestId) {
      eventRelationBusy = false;
      renderEventRelationWorkspace();
    }
  }
}

function parseEventRelationPreview(eventItem, fallbackState) {
  const preview = String(eventItem.relationship_preview || eventItem.relation_preview || "");
  const parts = preview.split("->").map(function (part) {
    return part.trim();
  });
  return {
    before: parts[0] || fallbackState || "原关系",
    after: parts[1] || "新关系",
  };
}

function buildLocalEventRelationCommit(selected) {
  const relation = getEventRelationSelectedRelation();
  const preview = parseEventRelationPreview(selected, relation && relation.state);
  return {
    status: "ok",
    mode: "local_frontend_demo",
    movie_id: EVENT_RELATION_MOVIE_ID,
    event: Object.assign({}, selected, {
      source: "relationship_causality_table",
      selected_by_user: true,
    }),
    relationship_delta: {
      from: relation ? relation.from : "主角",
      to: relation ? relation.to : "短线角色",
      before: preview.before,
      after: preview.after,
      delta: {
        suspicion: /怀疑|警觉/.test(preview.after) ? 26 : -8,
        attention: /高度|共谋|信任/.test(preview.after) ? 18 : 10,
        trust: /信任|共谋|默许/.test(preview.after) ? 30 : -16,
      },
    },
    main_plot_lock: "只改短线角色再次出现时的态度、站位和一句短台词，不推翻原视频主线。",
  };
}

function buildLocalEventRelationPatches(commitPayload) {
  const eventItem = commitPayload.event || {};
  const delta = commitPayload.relationship_delta || {};
  const target = delta.to || "短线角色";
  return {
    status: "ok",
    mode: "local_frontend_demo",
    movie_id: EVENT_RELATION_MOVIE_ID,
    patches: [
      {
        shot_id: "micro-patch-01",
        title: target + "再次出现时的第一反应",
        micro_rewrite: "保留原镜头结构，只把" + target + "的视线停留延长半秒，表现关系从“" + (delta.before || "原关系") + "”滑向“" + (delta.after || "新关系") + "”。",
        locked_plot: commitPayload.main_plot_lock,
        forbidden_changes: ["不新增主线分支", "不改主角目标", "不改变原片结局"],
      },
      {
        shot_id: "micro-patch-02",
        title: "事件后果的局部反馈",
        micro_rewrite: "在后续相关片段里插入一个短暂停顿或让路动作，说明事件“" + (eventItem.title || "用户选择事件") + "”已经改变关系因果。",
        locked_plot: commitPayload.main_plot_lock,
        forbidden_changes: ["不重写整段剧情", "不替换核心人物动机"],
      },
      {
        shot_id: "micro-patch-03",
        title: "触发/阻断说明",
        micro_rewrite: "触发：" + (eventItem.future_scope || "短线角色相关镜头") + "；阻断：与主线冲突的大幅改写，只保留局部视频微补丁。",
        locked_plot: commitPayload.main_plot_lock,
        forbidden_changes: ["不生成大分支", "不让短线角色接管主线"],
      },
    ],
  };
}

function buildLocalEventRelationFrames() {
  const eventItem = eventRelationCommittedPayload && eventRelationCommittedPayload.event || {};
  const delta = eventRelationCommittedPayload && eventRelationCommittedPayload.relationship_delta || {};
  return {
    status: "ok",
    mode: "local_frontend_demo",
    movie_id: EVENT_RELATION_MOVIE_ID,
    frames: [
      {
        label: "首帧",
        prompt: "局部改写开始：" + (delta.to || "短线角色") + "在原镜头中停顿，看向主角，关系状态进入“" + (delta.after || "新关系") + "”。",
      },
      {
        label: "尾帧",
        prompt: "局部改写结束：事件“" + (eventItem.title || "用户选择事件") + "”留下可见后果，但主线走向不被推翻。",
      },
    ],
  };
}

function buildLocalEventRelationVideo() {
  const delta = eventRelationCommittedPayload && eventRelationCommittedPayload.relationship_delta || {};
  return {
    status: "ok",
    mode: "local_frontend_demo",
    movie_id: EVENT_RELATION_MOVIE_ID,
    video_status: "本地演示视频补丁已生成",
    video_note: "片段只改“" + (delta.from || "主角") + " -> " + (delta.to || "短线角色") + "”这条关系的局部表现，承接首尾帧方案，不改原视频主线。",
    change_summary: "关系变化 -> 事件触发/阻断 -> 局部视频微补丁闭环完成。",
  };
}

async function requestEventRelationOptions() {
  if (eventRelationBusy) {
    return;
  }
  if (!playerStage.classList.contains("is-event-relation-open")) {
    setEventRelationStatus("请先打开 AI关系因果台。", "error");
    return;
  }

  const pausedTime = getEventRelationPausedTime();
  if (pausedTime == null) {
    setEventRelationStatus("请先暂停当前视频，再生成角色关系图谱。", "error");
    return;
  }

  eventRelationBusy = true;
  eventRelationFrameTime = pausedTime;
  eventRelationGraphPayload = null;
  eventRelationSelectedRelationId = null;
  eventRelationAdjustedRelationState = null;
  eventRelationOptionsPayload = null;
  eventRelationSelectedEvent = null;
  eventRelationCommittedPayload = null;
  eventRelationPatchesPayload = null;
  eventRelationFramesPayload = null;
  eventRelationVideoPayload = null;
  eventRelationGenerateGraph.disabled = true;
  setEventRelationStatus("AI 正在读取当前帧，并生成主角与短线角色的关系图谱...", "loading");
  eventRelationOptions.innerHTML = '<div class="world-fate-memory-placeholder">正在初始化关系图谱。完成后，需要先在图谱中点选一条关系边，视频里才会出现事件可选项。</div>';

  try {
    eventRelationOptionsPayload = await postEventRelationJson(EVENT_RELATION_OPTIONS_API_URL, {
      movie_id: EVENT_RELATION_MOVIE_ID,
      time: Number(pausedTime.toFixed(3)),
      main_plot_lock: "只允许插入小事件，不改变当前视频主线走向；后续只做角色表现层面的微改写。",
    });
    eventRelationGraphPayload = buildEventRelationGraphFromScene(eventRelationOptionsPayload.scene || {});
    eventRelationOptionsPayload.events = [];
    eventRelationCueRequestId += 1;
    setEventRelationStatus("关系图谱已生成。先在左侧点选一条关系边，视频里才会出现对应的剧情事件选项。", "ready");
    renderEventRelationWorkspace();
  } catch (error) {
    eventRelationOptionsPayload = null;
    eventRelationGraphPayload = null;
    setEventRelationStatus(error.message || "关系图谱生成失败。", "error");
    renderEventRelationWorkspace();
  } finally {
    eventRelationBusy = false;
    eventRelationGenerateGraph.disabled = false;
    renderEventRelationStages();
  }
}

async function selectEventRelationOption(eventId) {
  if (eventRelationBusy || !eventRelationOptionsPayload) {
    return;
  }
  const selected = getEventRelationEvents().find(function (item) {
    return item.event_id === eventId;
  });
  if (!selected) {
    return;
  }

  eventRelationBusy = true;
  eventRelationSelectedEvent = selected;
  eventRelationCommittedPayload = null;
  eventRelationPatchesPayload = null;
  eventRelationFramesPayload = null;
  eventRelationVideoPayload = null;
  setEventRelationStatus("正在把用户选择的事件写入事件账本，并计算关系变化...", "loading");
  renderEventRelationWorkspace();

  try {
    eventRelationCommittedPayload = await postEventRelationJson(EVENT_RELATION_COMMIT_API_URL, {
      movie_id: EVENT_RELATION_MOVIE_ID,
      time: Number((eventRelationFrameTime || 0).toFixed(3)),
      scene: eventRelationOptionsPayload.scene,
      event: selected,
    });
    setEventRelationStatus("事件已写入：关系变化已生成，正在推演后续镜头微补丁。", "loading");
    renderEventRelationWorkspace();
    eventRelationPatchesPayload = await postEventRelationJson(EVENT_RELATION_PATCHES_API_URL, {
      movie_id: EVENT_RELATION_MOVIE_ID,
      event: eventRelationCommittedPayload.event,
      relationship_delta: eventRelationCommittedPayload.relationship_delta,
      main_plot_lock: eventRelationCommittedPayload.main_plot_lock,
    });
    setEventRelationStatus("后续镜头微补丁已生成。现在可以生成首尾帧或视频片段。", "ready");
    renderEventRelationWorkspace();
  } catch (error) {
    eventRelationCommittedPayload = null;
    eventRelationPatchesPayload = null;
    setEventRelationStatus(error.message || "事件写入失败。", "error");
  } finally {
    eventRelationBusy = false;
    renderEventRelationWorkspace();
  }
}

function handleEventRelationGraphClick(event) {
  const stateNode = event.target.closest("[data-relation-state]");
  if (stateNode && eventRelationGraphPayload) {
    const relation = eventRelationGraphPayload.relations.find(function (item) {
      return item.id === stateNode.dataset.relationId;
    });
    if (!relation || eventRelationBusy) {
      return;
    }
    relation.state = stateNode.dataset.relationState;
    eventRelationSelectedRelationId = relation.id;
    eventRelationAdjustedRelationState = relation.state;
    clearEventRelationDownstreamState();
    if (eventRelationOptionsPayload) {
      eventRelationOptionsPayload.events = [];
    }
    renderEventRelationWorkspace();
    requestEventRelationCueEventsForSelectedRelation();
    return;
  }

  const relationNode = event.target.closest("[data-relation-id]");
  if (!relationNode || eventRelationBusy || !eventRelationGraphPayload) {
    return;
  }
  eventRelationSelectedRelationId = relationNode.dataset.relationId;
  const relation = eventRelationGraphPayload.relations.find(function (item) {
    return item.id === eventRelationSelectedRelationId;
  });
  eventRelationAdjustedRelationState = relation ? relation.state : null;
  clearEventRelationDownstreamState();
  if (eventRelationOptionsPayload) {
    eventRelationOptionsPayload.events = [];
  }
  renderEventRelationWorkspace();
  requestEventRelationCueEventsForSelectedRelation();
}

async function generateEventRelationFrames() {
  if (eventRelationBusy || !eventRelationPatchesPayload) {
    return;
  }
  eventRelationBusy = true;
  setEventRelationStatus("正在生成剧情微补丁首尾帧...", "loading");
  renderEventRelationWorkspace();
  try {
    eventRelationFramesPayload = await postEventRelationJson(EVENT_RELATION_FRAMES_API_URL, {
      movie_id: EVENT_RELATION_MOVIE_ID,
      event: eventRelationCommittedPayload.event,
      relationship_delta: eventRelationCommittedPayload.relationship_delta,
      patches: eventRelationPatchesPayload.patches,
    });
    setEventRelationStatus("首尾帧已生成。可继续提交局部视频片段。", "ready");
  } catch (error) {
    eventRelationFramesPayload = null;
    setEventRelationStatus(error.message || "首尾帧生成失败。", "error");
  } finally {
    eventRelationBusy = false;
    renderEventRelationWorkspace();
  }
}

async function generateEventRelationVideo() {
  if (eventRelationBusy || !eventRelationFramesPayload) {
    return;
  }
  eventRelationBusy = true;
  setEventRelationStatus("正在提交局部视频微改写片段...", "loading");
  renderEventRelationWorkspace();
  try {
    eventRelationVideoPayload = await postEventRelationJson(EVENT_RELATION_VIDEO_API_URL, {
      movie_id: EVENT_RELATION_MOVIE_ID,
      event: eventRelationCommittedPayload.event,
      relationship_delta: eventRelationCommittedPayload.relationship_delta,
      patches: eventRelationPatchesPayload.patches,
      frames: eventRelationFramesPayload.frames,
    });
    setEventRelationStatus("视频片段已进入微改写结果区。", "ready");
  } catch (error) {
    eventRelationVideoPayload = null;
    setEventRelationStatus(error.message || "局部视频改写失败。", "error");
  } finally {
    eventRelationBusy = false;
    renderEventRelationWorkspace();
  }
}

function handleEventRelationResultClick(event) {
  const option = event.target.closest("[data-event-relation-id]");
  if (option) {
    selectEventRelationOption(option.dataset.eventRelationId);
    return;
  }

  const action = event.target.closest("[data-event-relation-action]");
  if (!action) {
    return;
  }
  if (action.dataset.eventRelationAction === "frames") {
    generateEventRelationFrames();
  }
  if (action.dataset.eventRelationAction === "video") {
    generateEventRelationVideo();
  }
}

async function requestStoryReply() {
  if (storyReplyBusy) {
    return;
  }
  if (!playerStage.classList.contains("is-functions-open") || playerFunctionsView !== "story") {
    setStoryReplyStatus("请先进入 Functions 列表，再打开海报生成器详情页。", "error");
    return;
  }

  const pausedTime = getStoryReplyPausedTime();
  if (pausedTime == null) {
    setStoryReplyStatus("请先暂停一个画面，再开始生成海报。", "error");
    return;
  }

  const posterPrompt = getStoryReplyPromptValue() || STORY_REPLY_DEFAULT_PROMPT;
  storyReplyBusy = true;
  storyReplyGenerate.disabled = true;
  setStoryReplyStatus("正在分析当前暂停帧并生成海报...", "loading");
  storyReplyResult.innerHTML = '<div class="story-reply-empty">海报生成器正在处理当前暂停帧，请稍等。</div>';

  try {
    const response = await fetch(STORY_REPLY_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie_id: "f1",
        time: Number(pausedTime.toFixed(3)),
        reply_type: "poster",
        image_model: storyReplyImageModel,
        poster_prompt: posterPrompt,
        focus_box: storyReplySelection,
      }),
    });

    const payload = await response.json();
    if (!response.ok || payload.status !== "ok") {
      throw new Error(payload.error || "海报生成器请求失败。");
    }

    renderStoryReplyResult(payload);
    if (payload.mode === "live_ai") {
      setStoryReplyStatus("已基于暂停帧 " + formatTime(pausedTime) + " 生成海报。", "ready");
    } else if (payload.mode === "live_image_direct") {
      setStoryReplyStatus("已通过 " + storyReplyImageModel + " 真实生成海报。", "ready");
    } else {
      setStoryReplyStatus("后端返回了本地演示结果，请检查 AI 配置。", "error");
    }
  } catch (error) {
    setStoryReplyStatus("海报生成失败。请查看下方真实错误信息。", "error");
    storyReplyResult.innerHTML =
      '<div class="story-reply-error">' + escapeHtml(error.message || "海报生成器请求失败。") + "</div>";
  } finally {
    storyReplyBusy = false;
    storyReplyGenerate.disabled = false;
    syncStoryReplyPauseState();
  }
}

function enterStoryReplyDetail() {
  if (!playerStage.classList.contains("is-functions-open")) {
    return;
  }
  setPlayerFunctionsView("story");
  if (storyReplyPrompt && !storyReplyPrompt.value.trim()) {
    storyReplyPrompt.value = STORY_REPLY_DEFAULT_PROMPT;
  }
  syncStoryReplyPauseState();
}

function closePlayerInfo(options) {
  const settings = options || {};
  const shouldResumePlayback = settings.resumePlayback !== false;
  const infoPreviewVideo = playerInfoPreview.querySelector("video");

  playerInfoPanel.classList.remove("is-visible");
  playerInfoPanel.setAttribute("aria-hidden", "true");
  playerInfoToggle.setAttribute("aria-expanded", "false");
  playerInfoToggle.classList.remove("is-active");

  if (infoPreviewVideo) {
    infoPreviewVideo.pause();
    try {
      infoPreviewVideo.currentTime = 0;
    } catch (error) {}
  }

  if (shouldResumePlayback && playerInfoWasPlaying && playerVideo.getAttribute("src")) {
    const playPromise = playerVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  }

  playerInfoWasPlaying = false;
}

function openPlayerInfo() {
  if (!playerStage.classList.contains("is-active") || !activePlayerItem) {
    return;
  }

  if (playerStage.classList.contains("is-functions-open")) {
    setPlayerFunctionsOpen(false);
  }

  renderPlayerInfo(activePlayerItem);
  playerInfoWasPlaying = Boolean(playerVideo.getAttribute("src")) && !playerVideo.paused && !playerVideo.ended;
  if (playerInfoWasPlaying) {
    playerVideo.pause();
  }

  playerInfoPanel.classList.add("is-visible");
  playerInfoPanel.setAttribute("aria-hidden", "false");
  playerInfoToggle.setAttribute("aria-expanded", "true");
  playerInfoToggle.classList.add("is-active");

  const infoPreviewVideo = playerInfoPreview.querySelector("video");
  if (infoPreviewVideo) {
    const playPromise = infoPreviewVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  }
}

function togglePlayerInfo() {
  if (playerInfoPanel.classList.contains("is-visible")) {
    closePlayerInfo();
    return;
  }

  openPlayerInfo();
}

function buildMoviePreviewMarkup(item) {
  const previewPath = normalizePosterPath(item.hoverPreview || item.preview);
  if (!previewPath) {
    return (
      '<div class="movie-preview-frame">' +
        '<div class="movie-preview-shell">' +
          '<div class="movie-preview-surface"></div>' +
          '<div class="movie-preview-placeholder">16:9 preview</div>' +
        "</div>" +
      "</div>"
    );
  }

  if (isVideoAsset(previewPath)) {
    return (
      '<div class="movie-preview-frame">' +
        '<div class="movie-preview-shell">' +
          '<video class="movie-preview-surface" muted loop playsinline preload="none" src="' + previewPath + '"></video>' +
        "</div>" +
      "</div>"
    );
  }

  return (
    '<div class="movie-preview-frame">' +
      '<div class="movie-preview-shell">' +
        '<img class="movie-preview-surface" src="' + previewPath + '" alt="' + item.title + ' preview">' +
      "</div>" +
    "</div>"
  );
}

function attachFloatingEffect(element, index) {
  if (!element || element.dataset.floatBound === "true") {
    return;
  }

  element.dataset.floatBound = "true";
  element.style.setProperty("--float-delay", ((index || 0) * 0.14).toFixed(2) + "s");
  element.classList.add("float-card");
}

function attachPreviewPlayback(card) {
  if (!card || card.dataset.previewBound === "true") {
    return;
  }

  card.dataset.previewBound = "true";
  const previewFrame = card.querySelector(".movie-preview-frame");
  const previewVideo = card.querySelector("video.movie-preview-surface");

  card.addEventListener("pointerenter", function () {
    if (previewFrame && windowContent) {
      const contentRect = windowContent.getBoundingClientRect();
      const cardRect = card.getBoundingClientRect();
      const previewWidth = cardRect.width * 1.76;
      const previewHeight = previewWidth * 9 / 16;
      const previewTop = cardRect.top - 18 - previewHeight;
      const safeTop = contentRect.top + 8;
      const shiftY = Math.max(0, safeTop - previewTop);
      card.style.setProperty("--preview-shift-y", shiftY.toFixed(2) + "px");
    }

    if (previewVideo && !reducedMotion.matches) {
      const playPromise = previewVideo.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(function () {});
      }
    }
  });

  card.addEventListener("pointerleave", function () {
    card.style.setProperty("--preview-shift-y", "0px");

    if (previewVideo) {
      previewVideo.pause();
      try {
        previewVideo.currentTime = 0;
      } catch (error) {}
    }
  });
}

function buildMoviePosterMarkup(item) {
  if (item.cardPosterVariant === "demo-entry") {
    return (
      '<div class="movie-poster movie-poster-demo-entry">' +
        '<div class="movie-poster-demo-aura" aria-hidden="true"></div>' +
        '<div class="movie-poster-demo-beam" aria-hidden="true"></div>' +
        '<div class="movie-poster-demo-label">Start Demo</div>' +
        '<div class="movie-poster-demo-grid" aria-hidden="true">' +
          '<div class="movie-poster-demo-column is-primary">' +
            "<span>D</span>" +
            "<span>E</span>" +
            "<span>M</span>" +
            "<span>O</span>" +
          "</div>" +
          '<div class="movie-poster-demo-column is-secondary">' +
            "<span>E</span>" +
            "<span>N</span>" +
            "<span>T</span>" +
            "<span>R</span>" +
            "<span>Y</span>" +
          "</div>" +
        "</div>" +
        '<div class="movie-meta-bar">' +
          '<div class="movie-overlay-title">' + item.title + '</div>' +
          '<div class="movie-overlay-caption">' + item.caption + '</div>' +
        "</div>" +
      "</div>"
    );
  }

  const posterPath = normalizePosterPath(item.poster || item.slot);
  if (posterPath) {
    return (
      '<div class="movie-poster has-image">' +
        '<img class="movie-poster-image" src="' + posterPath + '" alt="' + item.title + '">' +
        '<div class="movie-meta-bar">' +
          '<div class="movie-overlay-title">' + item.title + '</div>' +
          '<div class="movie-overlay-caption">' + item.caption + '</div>' +
        "</div>" +
      "</div>"
    );
  }

  return (
    '<div class="movie-poster" data-slot="' + (item.slot || "poster") + '">' +
      '<div class="movie-meta-bar">' +
        '<div class="movie-overlay-title">' + item.title + '</div>' +
        '<div class="movie-overlay-caption">' + item.caption + '</div>' +
      "</div>" +
    "</div>"
  );
}

function closePlayerDemo() {
  playerToken += 1;
  closePlayerInfo({ resumePlayback: false });
  resetStoryReplyFeature();
  resetWorldFateFeature();
  playerLayer.classList.remove("is-visible");
  playerLayer.classList.remove("is-fast-enter");
  playerIntro.classList.remove("is-active");
  playerStage.classList.remove("is-active");
  setPlayerFunctionsOpen(false);
  playerStage.removeAttribute("data-theme");
  playerStage.style.removeProperty("--player-theme-image");
  playerStage.style.removeProperty("--player-screen-width");
  clearPlayerThemeMedia();
  playerIntro.setAttribute("aria-hidden", "true");
  playerStage.setAttribute("aria-hidden", "true");
  playerLayer.setAttribute("aria-hidden", "true");
  playerIntroVideo.pause();
  playerIntroVideo.playbackRate = 1;
  playerIntroVideo.removeAttribute("src");
  playerIntroVideo.load();
  playerVideo.pause();
  playerVideo.currentTime = 0;
  playerVideo.removeAttribute("src");
  playerVideo.load();
  activePlayerItem = null;
  playerInfoPreview.innerHTML = "";
  playerInfoLabel.textContent = "Demo / Intro";
  playerInfoTitle.textContent = "Demo 演示介绍";
  playerInfoMeta.textContent = "";
  playerInfoFacts.innerHTML = "";
  playerInfoText.textContent = "";
  playerInfoDetail.textContent = "";
  playerInfoCredits.innerHTML = "";
  playerInfoTags.innerHTML = "";
  syncPlayerControls();
  tabs.forEach(function (tab) {
    tab.disabled = false;
  });
}

async function openPlayerDemo(card, item) {
  const token = ++playerToken;
  const useFullIntro = !reducedMotion.matches && !hasSeenPlayerIntro(item);
  if (!windowBody) {
    return;
  }

  markPlayerIntroSeen(item);
  playerLayer.classList.add("is-visible");
  playerLayer.classList.toggle("is-fast-enter", !useFullIntro);
  playerLayer.setAttribute("aria-hidden", "false");
  playerIntro.classList.remove("is-active");
  playerStage.classList.remove("is-active");
  playerIntro.setAttribute("aria-hidden", "true");
  playerStage.setAttribute("aria-hidden", "true");

  tabs.forEach(function (tab) {
    tab.disabled = true;
  });

  closePlayerInfo({ resumePlayback: false });
  resetStoryReplyFeature();
  resetWorldFateFeature();
  setPlayerFunctionsOpen(false);
  playerStage.setAttribute("data-theme", item.playerTheme || "default");
  const themePoster = normalizePosterPath(item.playerPoster || item.themeBackground || item.poster || item.slot);
  if (themePoster) {
    playerStage.style.setProperty("--player-theme-image", 'url("' + themePoster.replace(/"/g, '\\"') + '")');
  } else {
    playerStage.style.removeProperty("--player-theme-image");
  }
  setPlayerThemeMedia(item);
  activePlayerItem = item;
  playerTitle.textContent = item.title;
  playerMeta.textContent = item.caption + " / " + (item.playerMetaNote || "Demo playback inside the frame.");
  syncPlayerScreenSize();

  const source = normalizePosterPath(item.preview);
  if (source) {
    playerVideo.src = source;
    playerVideo.load();
  }

  if (useFullIntro) {
    playerIntro.classList.add("is-active");
    playerIntro.setAttribute("aria-hidden", "false");
    playerIntroVideo.src = INTRO_DEMO_SOURCE;
    playerIntroVideo.load();

    const syncPlaybackRate = function () {
      if (!Number.isFinite(playerIntroVideo.duration) || playerIntroVideo.duration <= 0) {
        playerIntroVideo.playbackRate = 1;
        return;
      }

      const introTargetSeconds = INTRO_DEMO_DURATION_MS / 1000;
      playerIntroVideo.playbackRate = Math.max(1, playerIntroVideo.duration / introTargetSeconds);
    };

    playerIntroVideo.addEventListener("loadedmetadata", syncPlaybackRate, { once: true });

    const introPlayPromise = playerIntroVideo.play();
    if (introPlayPromise && typeof introPlayPromise.catch === "function") {
      introPlayPromise.catch(function () {});
    }

    await wait(INTRO_DEMO_DURATION_MS);
    if (token !== playerToken) {
      return;
    }

    playerIntro.classList.remove("is-active");
    playerIntro.setAttribute("aria-hidden", "true");
    playerIntroVideo.pause();
    playerIntroVideo.playbackRate = 1;
  } else {
    playerIntro.setAttribute("aria-hidden", "true");
    playerIntroVideo.pause();
    playerIntroVideo.playbackRate = 1;
    playerIntroVideo.removeAttribute("src");
    playerIntroVideo.load();
  }

  playerStage.classList.add("is-active");
  playerStage.setAttribute("aria-hidden", "false");
  syncPlayerScreenSize();

  if (!useFullIntro) {
    await wait(PLAYER_REPEAT_ENTRY_DELAY_MS);
    if (token !== playerToken) {
      return;
    }
  }

  if (source) {
    const playPromise = playerVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  }
}

function togglePlayerFunctions() {
  if (!playerStage.classList.contains("is-active")) {
    return;
  }

  if (playerInfoPanel.classList.contains("is-visible")) {
    closePlayerInfo();
  }

  setPlayerFunctionsOpen(!playerStage.classList.contains("is-functions-open"));
}

function togglePlayerPlayback() {
  if (!playerVideo.getAttribute("src")) {
    return;
  }

  if (playerVideo.paused) {
    const playPromise = playerVideo.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(function () {});
    }
  } else {
    playerVideo.pause();
  }
}

function togglePlayerMute() {
  playerVideo.muted = !playerVideo.muted;
  syncPlayerControls();
}

function seekPlayerVideo() {
  if (!Number.isFinite(playerVideo.duration) || playerVideo.duration <= 0) {
    return;
  }

  const progress = Number(playerSeek.value) / 10;
  playerVideo.currentTime = (progress / 100) * playerVideo.duration;
  syncPlayerControls();
}

function restartPlayerVideo() {
  playerVideo.currentTime = 0;
  const playPromise = playerVideo.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(function () {});
  }
}

function skipPlayerVideo(delta) {
  if (!Number.isFinite(playerVideo.duration) || playerVideo.duration <= 0) {
    return;
  }

  playerVideo.currentTime = Math.min(playerVideo.duration, Math.max(0, playerVideo.currentTime + delta));
  syncPlayerControls();
}

function cyclePlayerSpeed() {
  const speeds = [1, 1.25, 1.5, 1.75, 2];
  const currentIndex = speeds.findIndex(function (speed) {
    return Math.abs(speed - playerVideo.playbackRate) < 0.01;
  });
  const nextIndex = currentIndex >= 0 ? (currentIndex + 1) % speeds.length : 0;
  playerVideo.playbackRate = speeds[nextIndex];
  syncPlayerControls();
}

async function togglePlayerFullscreen() {
  if (!playerScreen) {
    return;
  }

  if (document.fullscreenElement) {
    await document.exitFullscreen().catch(function () {});
  } else {
    await playerScreen.requestFullscreen().catch(function () {});
  }

  syncPlayerControls();
}

function handlePlayerFunctionAction(event) {
  const action = event.currentTarget.dataset.playerAction;

  if (action === "toggle-play") {
    togglePlayerPlayback();
  }
  if (action === "restart") {
    restartPlayerVideo();
  }
  if (action === "backward-10") {
    skipPlayerVideo(-10);
  }
  if (action === "forward-10") {
    skipPlayerVideo(10);
  }
  if (action === "speed-cycle") {
    cyclePlayerSpeed();
  }
  if (action === "fullscreen") {
    togglePlayerFullscreen();
  }
}

async function typeSegments(target, segments, token) {
  const cursor = document.createElement("span");
  cursor.className = "type-cursor";
  target.appendChild(cursor);

  for (const segment of segments) {
    if (isStale(token)) {
      return;
    }

    if (segment.br) {
      for (let i = 0; i < segment.br; i += 1) {
        target.insertBefore(document.createElement("br"), cursor);
      }
      if (segment.pause) {
        await wait(segment.pause);
      }
      continue;
    }

    let node = null;
    if (segment.cls) {
      node = document.createElement("span");
      node.className = segment.cls;
      target.insertBefore(node, cursor);
    }

    for (const character of segment.text) {
      if (isStale(token)) {
        return;
      }

      if (node) {
        node.textContent += character;
      } else {
        target.insertBefore(document.createTextNode(character), cursor);
      }

      if (!reducedMotion.matches) {
        await wait(segment.speed || 28);
      }
    }

    if (segment.pause) {
      await wait(segment.pause);
    }
  }

  cursor.style.display = "none";
}

function buildSectionFrame(config) {
  windowContent.textContent = "";

  const sectionHead = document.createElement("section");
  sectionHead.className = "section-head";

  const sectionTitle = document.createElement("h2");
  sectionTitle.className = "section-title";
  sectionTitle.textContent = config.title || "";

  const sectionSub = document.createElement("p");
  sectionSub.className = "section-sub";
  sectionSub.textContent = config.sub || "";

  const sectionType = document.createElement("div");
  sectionType.className = "section-type";
  sectionType.id = "sectionType";

  sectionHead.append(sectionTitle, sectionSub);
  windowContent.append(sectionHead, sectionType);
}

async function revealMovieShelves(container, shelves, token) {
  for (let rowIndex = 0; rowIndex < shelves.length; rowIndex += 1) {
    if (isStale(token)) {
      return;
    }

    const shelf = document.createElement("section");
    shelf.className = "movie-shelf";
    const row = document.createElement("div");
    row.className = "movie-row";
    shelf.appendChild(row);
    container.appendChild(shelf);

    for (let i = 0; i < shelves[rowIndex].length; i += 1) {
      if (isStale(token)) {
        return;
      }

      const item = shelves[rowIndex][i];
      const previewHtml = buildMoviePreviewMarkup(item);
      const posterHtml = buildMoviePosterMarkup(item);

      const card = document.createElement("article");
      card.className = "movie-card";
      if (item.demoId) {
        card.dataset.demo = item.demoId;
      }
      if (item.preview && isVideoAsset(normalizePosterPath(item.preview))) {
        card.classList.add("has-preview-video");
      }

      card.innerHTML =
        previewHtml +
        posterHtml +
        '<div class="movie-info">' +
          '<div class="movie-info-title">' + item.title + '</div>' +
          '<div class="movie-info-caption">' + item.caption + '</div>' +
        '</div>';
      row.appendChild(card);

      if (!reducedMotion.matches) {
        await wait(i === 0 ? 70 : 95);
      }

      card.classList.add("show");
      attachFloatingEffect(card, rowIndex * 5 + i);
      attachPreviewPlayback(card);

      if (item.demoId) {
        card.addEventListener("click", function () {
          openPlayerDemo(card, item);
        });
      }
    }
  }
}

async function revealCards(container, cards, cardClass, token) {
  for (let i = 0; i < cards.length; i += 1) {
    if (isStale(token)) {
      return;
    }

    const item = cards[i];
    const element = document.createElement("article");
    element.className = cardClass;
    element.innerHTML =
      '<div class="' + cardClass.replace("card", "index") + '">' + item.index + "</div>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + item.text + "</p>" +
      '<div class="' + cardClass.replace("card", "meta") + '">' +
        item.tags.map(function (tag) {
          return '<span class="' + cardClass.replace("card", "tag") + '">' + tag + "</span>";
        }).join("") +
      "</div>";

    container.appendChild(element);

    if (!reducedMotion.matches) {
      await wait(i === 0 ? 80 : 140);
    }

    element.classList.add("show");
    attachFloatingEffect(element, i);
  }
}

async function revealProjects(container, projects, token) {
  for (let i = 0; i < projects.length; i += 1) {
    if (isStale(token)) {
      return;
    }

    const item = projects[i];
    const card = document.createElement("article");
    card.className = "project-card";
    card.innerHTML =
      '<div class="project-icon">' + item.icon + "</div>" +
      "<h3>" + item.title + "</h3>" +
      "<p>" + item.text + "</p>" +
      '<div class="project-tags">' +
        item.tags.map(function (tag) {
          return '<span class="project-tag">' + tag + "</span>";
        }).join("") +
      "</div>";

    container.appendChild(card);

    if (!reducedMotion.matches) {
      await wait(i === 0 ? 80 : 140);
    }

    card.classList.add("show");
    attachFloatingEffect(card, i);
  }
}

async function revealRows(container, rows, token) {
  for (let i = 0; i < rows.length; i += 1) {
    if (isStale(token)) {
      return;
    }

    const row = document.createElement("div");
    row.className = "contact-row";
    row.innerHTML =
      '<div class="contact-label">' + rows[i].label + "</div>" +
      '<div class="contact-value">' + rows[i].value + "</div>";
    container.appendChild(row);

    if (!reducedMotion.matches) {
      await wait(i === 0 ? 80 : 150);
    }

    row.classList.add("show");
  }
}

async function renderTab(tabId, token) {
  const config = TAB_CONTENT[tabId];
  if (!config) {
    return;
  }

  buildSectionFrame(config);
  const sectionType = document.getElementById("sectionType");
  windowContent.classList.toggle("is-movies", tabId === "movies");

  if (tabId === "movies" && config.shelves) {
    const firstBreakIndex = config.type.findIndex(function (segment) {
      return Boolean(segment.br);
    });
    const leadSegments = firstBreakIndex >= 0 ? config.type.slice(0, firstBreakIndex) : config.type;
    const noteSegments = firstBreakIndex >= 0 ? config.type.slice(firstBreakIndex + 1) : [];

    await typeSegments(sectionType, leadSegments, token);
    if (isStale(token)) {
      return;
    }

    const library = document.createElement("div");
    library.className = "movie-library";
    windowContent.appendChild(library);
    const shelfPromise = revealMovieShelves(library, config.shelves, token);

    if (noteSegments.length) {
      const notes = document.createElement("div");
      notes.className = "movie-notes";
      windowContent.appendChild(notes);
      const notesPromise = typeSegments(notes, noteSegments, token);
      await Promise.all([shelfPromise, notesPromise]);
    } else {
      await shelfPromise;
    }

    return;
  }

  await typeSegments(sectionType, config.type, token);
  if (isStale(token)) {
    return;
  }

  if (config.projects) {
    const grid = document.createElement("div");
    grid.className = "project-grid";
    windowContent.appendChild(grid);
    await revealProjects(grid, config.projects, token);
  }

  if (config.cards) {
    const grid = document.createElement("div");
    grid.className = tabId === "motion" ? "motion-grid" : "module-grid";
    windowContent.appendChild(grid);
    await revealCards(grid, config.cards, tabId === "motion" ? "motion-card" : "module-card", token);
  }

  if (config.rows) {
    const list = document.createElement("div");
    list.className = "contact-list";
    windowContent.appendChild(list);
    await revealRows(list, config.rows, token);
  }
}

async function switchTab(tabId, immediate) {
  if (!portalReady) {
    activeTab = tabId;
    return;
  }

  if (tabId === activeTab && !immediate) {
    return;
  }

  activeTab = tabId;
  renderToken += 1;
  const token = renderToken;

  tabs.forEach(function (tab) {
    tab.classList.toggle("active", tab.dataset.tab === tabId);
  });

  statusLabel.textContent = tabId.charAt(0).toUpperCase() + tabId.slice(1);

  if (!immediate && !reducedMotion.matches) {
    windowContent.classList.add("is-switching");
    await wait(150);
  }

  if (isStale(token)) {
    return;
  }

  windowContent.classList.remove("is-switching");
  await renderTab(tabId, token);
}

function beginIntroFade() {
  if (!introMark) {
    return;
  }

  const delay = reducedMotion.matches ? 80 : 700;
  const shellDelay = reducedMotion.matches ? 120 : 2600;

  window.setTimeout(function () {
    introMark.classList.add("is-fading");
    clouds.forEach(function (cloud) {
      cloud.classList.add("is-dispersing");
    });
  }, delay);

  window.setTimeout(function () {
    if (markStage) {
      markStage.classList.add("is-hidden");
    }
    if (portalShell) {
      portalShell.classList.add("is-visible");
    }

    portalReady = true;
    switchTab(activeTab, true);
  }, shellDelay);
}

tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    switchTab(tab.dataset.tab, false);
  });
});

playerClose.addEventListener("click", closePlayerDemo);
playerFunctionsToggle.addEventListener("click", togglePlayerFunctions);
storyReplyEntry.addEventListener("click", enterStoryReplyDetail);
worldFateEntry.addEventListener("click", openWorldFateWorkspace);
eventRelationEntry.addEventListener("click", openEventRelationWorkspace);
worldFateBack.addEventListener("click", closeWorldFateWorkspace);
worldFateWorlds.addEventListener("click", function (event) {
  if (event.target.closest("[data-stage-id]")) {
    handleWorldFateStageRailClick(event);
  }
});
worldFateCanvas.addEventListener("pointerdown", handleWorldFateCanvasPointerDown);
worldFateGenerateSpace.addEventListener("click", generateWorldFateSpace);
worldFateResetSpace.addEventListener("click", function () {
  worldFateSpaceView = { offsetX: 0, offsetY: 0 };
  resetWorldFatePanoramaView();
  renderWorldFateSpaceTransform();
});
worldFateUploadInput.addEventListener("change", function (event) {
  const file = event.target.files && event.target.files[0];
  handleWorldFateUploadFile(file);
  event.target.value = "";
});
worldFateBrowseMode.addEventListener("click", function () {
  setWorldFateSpaceMode("browse");
});
worldFateSelectMode.addEventListener("click", function () {
  setWorldFateSpaceMode("select");
});
worldFateReadMemory.addEventListener("click", function () {
  requestWorldFateMemory();
});
worldFateClearSelection.addEventListener("click", clearWorldFateSpaceSelection);
worldFateSpaceViewport.addEventListener("pointerdown", handleWorldFateSpacePointerDown);
worldFateSpaceViewport.addEventListener("pointermove", handleWorldFateSpacePointerMove);
worldFateSpaceViewport.addEventListener("pointerup", handleWorldFateSpacePointerUp);
worldFateSpaceViewport.addEventListener("pointercancel", handleWorldFateSpacePointerCancel);
worldFateSpaceViewport.addEventListener("wheel", function (event) {
  if (!isWorldFatePanoramaActive()) {
    return;
  }
  event.preventDefault();
  const state = ensureWorldFatePanoramaViewer();
  if (!state || state.unsupported) {
    return;
  }
  state.fov += event.deltaY * 0.03;
  state.fov = Math.max(WORLD_FATE_PANORAMA_MIN_FOV, Math.min(WORLD_FATE_PANORAMA_MAX_FOV, state.fov));
}, { passive: false });
worldFateSpaceHotspots.addEventListener("click", handleWorldFateSpaceHotspotClick);
worldFateMemoryCard.addEventListener("click", function (event) {
  if (event.target.closest("[data-memory-action=\"add\"]")) {
    addWorldFateLatestMemoryToBasket();
  }
});
worldFateClueBasket.addEventListener("click", function (event) {
  const entry = event.target.closest("[data-clue-id]");
  if (!entry || !event.target.closest("[data-clue-action=\"remove\"]")) {
    return;
  }
  removeWorldFateClue(entry.dataset.clueId);
});
worldFateSubmit.addEventListener("click", submitWorldFateChanges);
worldFateConfirmPlot.addEventListener("click", generateWorldFateFrames);
worldFateConfirmFrames.addEventListener("click", generateWorldFateVideos);
worldFateCustomConfirm.addEventListener("click", confirmCustomWorldFate);
worldFateCustomCancel.addEventListener("click", closeWorldFateCustomModal);
worldFateCustomModalBackdrop.addEventListener("click", closeWorldFateCustomModal);
storyReplyModelToggle.addEventListener("click", function () {
  setStoryReplyModelDrawerOpen(!storyReplyModelDrawer.classList.contains("is-visible"));
});
storyReplyModelDrawer.addEventListener("click", function (event) {
  const target = event.target.closest("[data-story-model]");
  if (!target) {
    return;
  }
  storyReplyImageModel = target.dataset.storyModel;
  renderModuleModelSwitches();
});
worldFateModelToggle.addEventListener("click", function () {
  setWorldFateModelDrawerOpen(!worldFateModelDrawer.classList.contains("is-visible"));
});
worldFateModelDrawer.addEventListener("click", function (event) {
  const target = event.target.closest("[data-world-fate-model]");
  if (!target) {
    return;
  }
  worldFateImageModel = target.dataset.worldFateModel;
  renderModuleModelSwitches();
});

storyReplyBack.addEventListener("click", function () {
  setStoryReplyModelDrawerOpen(false);
  setPlayerFunctionsView("home");
});
eventRelationBack.addEventListener("click", function () {
  closeEventRelationWorkspace();
});
eventRelationGenerateGraph.addEventListener("click", requestEventRelationOptions);
eventRelationReset.addEventListener("click", function () {
  resetEventRelationFeature();
  syncEventRelationPauseState();
});
eventRelationGraph.addEventListener("click", handleEventRelationGraphClick);
eventRelationCueLayer.addEventListener("click", handleEventRelationResultClick);
eventRelationResult.addEventListener("click", handleEventRelationResultClick);
eventRelationOptions.addEventListener("click", handleEventRelationResultClick);
storyReplyGenerate.addEventListener("click", requestStoryReply);
storyReplySelectionClear.addEventListener("click", clearStoryReplySelection);
storyReplySelectionSurface.addEventListener("pointerdown", handleStoryReplySelectionPointerDown);
storyReplySelectionSurface.addEventListener("pointermove", handleStoryReplySelectionPointerMove);
storyReplySelectionSurface.addEventListener("pointerup", handleStoryReplySelectionPointerUp);
storyReplySelectionSurface.addEventListener("pointercancel", handleStoryReplySelectionPointerCancel);
storyReplyTypeButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    storyReplySelectedType = button.dataset.replyType;
    renderStoryReplyTypeSelection();
  });
});
playerInfoToggle.addEventListener("click", togglePlayerInfo);
playerInfoClose.addEventListener("click", function () {
  closePlayerInfo();
});
playerInfoBackdrop.addEventListener("click", function () {
  closePlayerInfo();
});
playerPlayToggle.addEventListener("click", togglePlayerPlayback);
playerMuteToggle.addEventListener("click", togglePlayerMute);
playerSeek.addEventListener("input", seekPlayerVideo);
playerFunctionButtons.forEach(function (button) {
  button.addEventListener("click", handlePlayerFunctionAction);
});
worldFateSpaceImage.addEventListener("load", function () {
  renderWorldFateSpaceTransform();
});
playerVideo.addEventListener("loadedmetadata", syncPlayerControls);
playerVideo.addEventListener("timeupdate", syncPlayerControls);
playerVideo.addEventListener("play", syncPlayerControls);
playerVideo.addEventListener("pause", function () {
  syncPlayerControls();
  syncEventRelationPauseState();
});
eventRelationFeatureVideo.addEventListener("pause", syncEventRelationPauseState);
eventRelationFeatureVideo.addEventListener("loadedmetadata", renderEventRelationStages);
eventRelationFeatureVideo.addEventListener("timeupdate", renderEventRelationStages);
playerVideo.addEventListener("volumechange", syncPlayerControls);
playerVideo.addEventListener("ended", syncPlayerControls);
document.addEventListener("fullscreenchange", syncPlayerControls);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && playerInfoPanel.classList.contains("is-visible")) {
    closePlayerInfo();
  }
  if (event.key === "Escape" && worldFateCustomModal.classList.contains("is-visible")) {
    closeWorldFateCustomModal();
  }
  if (event.key === "Escape" && storyReplyModelDrawer.classList.contains("is-visible")) {
    setStoryReplyModelDrawerOpen(false);
  }
  if (event.key === "Escape" && worldFateModelDrawer.classList.contains("is-visible")) {
    setWorldFateModelDrawerOpen(false);
  }
});
window.addEventListener("pointermove", function (event) {
  if (!worldFateDragState) {
    return;
  }
  moveWorldFateNodeDrag(event.clientX, event.clientY);
});
window.addEventListener("pointerup", endWorldFateNodeDrag);
window.addEventListener("pointercancel", endWorldFateNodeDrag);
window.addEventListener("resize", function () {
  syncPlayerScreenSize();
  renderWorldFateSpaceTransform();
});

window.addEventListener("load", function () {
  checkBackendHealth();
  renderModuleModelSwitches();
  setStoryReplyModelDrawerOpen(false);
  setWorldFateModelDrawerOpen(false);
  resetStoryReplyFeature();
  resetEventRelationFeature();
  resetWorldFateFeature();
  beginIntroFade();
});
