from .story_reply_world import F1_STORY_BEATS, F1_WORLD_SCOPE, build_mock_image_data_url


WORLD_FATE_PRESET_IDS = ("preset-world-01", "preset-world-02", "custom-world")

F1_WORLD_FATE_PRESETS = {
    "preset-world-01": {
        "id": "preset-world-01",
        "badge": "预设",
        "title": "原剧情",
        "rule": "保持 F1 电影原始剧情的现实主义围场逻辑，强调车队压力、比赛规则和职业选择的代价。",
    },
    "preset-world-02": {
        "id": "preset-world-02",
        "badge": "预设",
        "title": "预设世界观 02",
        "rule": "仍然留在 F1 电影世界中，但更强调角色关系与命运反转，让冲突更早显性化。",
    },
    "custom-world": {
        "id": "custom-world",
        "badge": "自定义",
        "title": "自定义世界观",
        "rule": "用户自定义世界规则，但依旧只能在 F1 电影世界观内部做变化。",
    },
}

F1_WORLD_FATE_BASELINE_BY_KEY = {
    "event-01": {
        "id": "event-01",
        "label": "Sonny 稳定推进",
        "scene_summary": "比赛已经接近尾声，Sonny 仍在赛道上推进，整体局面还在高压但可控的阶段。",
        "character_focus": "Sonny Hayes 在高压末段维持节奏与线路。",
        "relationship_tension": "车队希望 Sonny 先稳住位置，前方争冠线则还没有完全决断。",
        "emotion_tension": "情绪是紧绷但仍保持控制的决战前夜感。",
        "reply_anchor": "以比赛末尾、局势尚未失控作为起点。",
    },
    "event-02": {
        "id": "event-02",
        "label": "Sonny 碰撞旋转",
        "scene_summary": "Sonny 在赛道上发生碰撞并进入旋转，局势突然从可控转为危险。",
        "character_focus": "Sonny Hayes 是否还能把赛车从失控状态拉回来。",
        "relationship_tension": "车队、场上局势和 Sonny 本人的意志都同时被推到临界点。",
        "emotion_tension": "情绪骤然失控，危险感和不确定性瞬间爆发。",
        "reply_anchor": "以碰撞旋转后的命运转折作为主轴。",
    },
    "event-03": {
        "id": "event-03",
        "label": "Sonny 稳车与呐喊",
        "scene_summary": "Sonny 重新控制住赛车继续比赛，场下队员也开始为他呐喊加油。",
        "character_focus": "Sonny Hayes 的稳定与车队集体情绪被同步放大。",
        "relationship_tension": "场下支持与场上压力同时存在，车队命运和 Sonny 的个人命运短暂站到一起。",
        "emotion_tension": "从失控重新回到希望，情绪里带着鼓舞与再一次押上的勇气。",
        "reply_anchor": "以“从危机中拉回比赛”作为节点核心。",
    },
    "event-04": {
        "id": "event-04",
        "label": "并排决战",
        "scene_summary": "画面切到 Joshua 与维斯塔潘并排争夺第一，前场决战开始真正白热化。",
        "character_focus": "Joshua Pearce 与维斯塔潘的争冠线路成为新的压力中心。",
        "relationship_tension": "Sonny 线与 Joshua 线形成双轨并行，场下呐喊与场上争冠同时推高紧张感。",
        "emotion_tension": "情绪进入爆点前的高速拉锯，任何一点失误都会改写结局。",
        "reply_anchor": "把并排争冠和命运转折的并行剪辑作为改写基础。",
    },
    "event-05": {
        "id": "event-05",
        "label": "Joshua 碰撞出局",
        "scene_summary": "Joshua 在弯道太急，与维斯塔潘发生碰撞，第一第二双双出局。",
        "character_focus": "Joshua 的选择和失误直接改变了比赛命运。",
        "relationship_tension": "前场争冠线崩塌，团队策略、个人判断与代价同时兑现。",
        "emotion_tension": "情绪从决战瞬间跌入崩盘，震荡感和代价感最强。",
        "reply_anchor": "以‘弯道过急导致双双出局’作为命运拨杆。",
    },
    "event-06": {
        "id": "event-06",
        "label": "Sonny 升到第一",
        "scene_summary": "撞车画面切回 Sonny，他借此前方双双出局的结果从第三升到了第一。",
        "character_focus": "Sonny Hayes 在混乱之后获得命运翻转。",
        "relationship_tension": "前场崩盘直接把 Sonny 推向最有利位置，个人命运与车队结果完成闭环。",
        "emotion_tension": "情绪从险象环生切到昂扬翻盘，带着强烈的命运逆转感。",
        "reply_anchor": "以‘从第三升到第一’作为最终收束节点。",
    },
}

INVISIBLE_GUEST_WORLD_SCOPE = (
    "只允许围绕《看不见的客人》世界观输出内容，只能使用艾德里安·多里亚、"
    "劳拉·维达尔、维吉尼亚·古德曼、托马斯·加里夫、埃尔维拉·加里夫、"
    "菲利克斯·莱瓦、酒店房间、车祸、沉车、证词、伪证、监听、复仇、"
    "律师会谈这些元素；不要引入其他电影、超自然设定、警匪宇宙或无关 IP。"
)

INVISIBLE_GUEST_STORY_BEATS = [
    {
        "id": "hotel_murder",
        "start": 0,
        "end": 15,
        "label": "密室命案曝光",
        "scene_summary": "酒店密室命案已经发生，艾德里安被迫在极短时间内组织一套自保叙述。",
        "character_focus": "艾德里安·多里亚必须先稳住表面说辞，掩盖房间里的真实死亡因果。",
        "relationship_tension": "人物关系的第一层张力来自“合作讲述真相”与“彼此都在隐藏更多真相”的矛盾。",
        "emotion_tension": "情绪是压抑、惊惧、必须立刻编造可信版本的高压感。",
        "reply_anchor": "把这一刻当作谎言机器刚刚启动的起点。",
    },
    {
        "id": "lawyer_arrives",
        "start": 15,
        "end": 35,
        "label": "律师接管叙述",
        "scene_summary": "假古德曼进入房间后，开始一步步接管艾德里安的讲述节奏，把会谈变成精密审讯。",
        "character_focus": "假古德曼如何利用专业姿态和时间压力，逼艾德里安不断修补自己的叙述漏洞。",
        "relationship_tension": "表面是律师帮助客户，实际是审讯者对被审讯者的心理围猎。",
        "emotion_tension": "情绪是冷静控制下的持续施压，危险感并不外露，但每个问题都在逼近核心谎言。",
        "reply_anchor": "把这段视作“谁掌握叙事控制权”的第一次翻转。",
    },
    {
        "id": "accident_revealed",
        "start": 35,
        "end": 55,
        "label": "车祸旧案浮现",
        "scene_summary": "丹尼尔之死的旧案被重新掀开，车祸、弃车、沉尸和共同遮掩开始拼成更完整的犯罪链。",
        "character_focus": "艾德里安与劳拉在事故后的每个决定，如何一步步把偶发事故变成蓄意掩盖。",
        "relationship_tension": "两人既是同谋又互相防备，真正的恐惧来自谁会先在压力下崩塌。",
        "emotion_tension": "情绪从恐慌升级为罪责回流，过去的决定像回声一样重新压向现在。",
        "reply_anchor": "把这一段作为“真正的罪不是事故，而是事故后的选择”来理解。",
    },
    {
        "id": "parents_close_in",
        "start": 55,
        "end": 75,
        "label": "父母反向围猎",
        "scene_summary": "看似消失的受害者父母其实一直在逼近核心，他们把私人悲痛转成了一场高度控制的信息陷阱。",
        "character_focus": "托马斯与埃尔维拉如何把哀痛、耐心和观察能力变成对艾德里安的审讯装置。",
        "relationship_tension": "权力结构开始倒转，真正主动的一方已不再是艾德里安或律师话语，而是失去孩子的父母。",
        "emotion_tension": "情绪是缓慢收紧的报复感，表面平静，实则每一步都在准备致命揭面。",
        "reply_anchor": "把这一层视作“受害者家属如何夺回叙事主导权”的暗线。",
    },
    {
        "id": "testimony_collapses",
        "start": 75,
        "end": 95,
        "label": "供词体系崩塌",
        "scene_summary": "艾德里安的说辞开始连续失衡，照片、时间线、物证和自我保护冲动让整套供词不断塌陷。",
        "character_focus": "艾德里安如何在保命本能下，主动交出越来越多原本不该出口的关键细节。",
        "relationship_tension": "他与假古德曼之间的“信任”已经转成被操控者对操控者的依赖与恐惧。",
        "emotion_tension": "情绪接近崩溃边缘，谎言已经不是防线，反而成了逼迫真相流出的催化剂。",
        "reply_anchor": "把这一段理解成心理防线被精确拆解的过程。",
    },
    {
        "id": "mother_revealed",
        "start": 95,
        "end": 130,
        "label": "母亲揭面与复仇完成",
        "scene_summary": "假古德曼的真实身份揭晓，监听证据已经到手，托马斯与埃尔维拉完成了属于受害者家属的复仇闭环。",
        "character_focus": "埃尔维拉·加里夫如何把一场会谈变成法律、心理和情感三重意义上的反制。",
        "relationship_tension": "加害者与受害者家属的权力位置彻底倒转，艾德里安终于失去叙事主动权。",
        "emotion_tension": "情绪从压抑爆发为冰冷而克制的揭面，胜利并不轻松，却极具命运清算感。",
        "reply_anchor": "把这一刻视作所有谎言被迫回到母亲面前受审。",
    },
]

INVISIBLE_GUEST_WORLD_FATE_PRESETS = {
    "preset-world-01": {
        "id": "preset-world-01",
        "badge": "预设",
        "title": "原剧情",
        "rule": "保持《看不见的客人》原始悬疑结构、证词反转节奏、密室压迫感和因果闭环，不让真相提前裸露。",
    },
    "preset-world-02": {
        "id": "preset-world-02",
        "badge": "预设",
        "title": "预设世界观 02",
        "rule": "仍然停留在《看不见的客人》的现实悬疑世界里，但让证词破绽、监听装置和家属反制更早显性化。",
    },
    "custom-world": {
        "id": "custom-world",
        "badge": "自定义",
        "title": "自定义世界观",
        "rule": "用户自定义规则，但必须保持《看不见的客人》的现实主义悬疑框架、证词博弈与因果成立。",
    },
}

INVISIBLE_GUEST_WORLD_FATE_BASELINE_BY_KEY = {
    "event-01": {
        "id": "event-01",
        "label": "酒店房间命案曝光",
        "scene_summary": "艾德里安被锁在酒店房间的命案现场，必须在警察彻底收网前先稳定自己的说辞。",
        "character_focus": "艾德里安·多里亚如何在极端压力下建立第一层谎言。",
        "relationship_tension": "他与死去的劳拉之间的秘密尚未说清，但已经足够摧毁他现在的身份秩序。",
        "emotion_tension": "惊惧、压抑、必须立刻自保的高压感。",
        "reply_anchor": "以密室命案已成事实、谎言尚在搭建的瞬间作为起点。",
    },
    "event-02": {
        "id": "event-02",
        "label": "假古德曼接管谈话",
        "scene_summary": "假古德曼进入会谈后，迅速把“律师咨询”转成一场针对叙述漏洞的精密审讯。",
        "character_focus": "假古德曼如何通过专业外壳和节奏控制，让艾德里安越来越依赖她。",
        "relationship_tension": "帮助与围猎同时发生，权力表面属于艾德里安，实则正在转移。",
        "emotion_tension": "冷静施压下的悬疑窒息感。",
        "reply_anchor": "以叙事控制权第一次转移为主轴。",
    },
    "event-03": {
        "id": "event-03",
        "label": "车祸旧案与沉车真相",
        "scene_summary": "丹尼尔车祸、弃救与沉车的旧案真相被一点点翻出，劳拉与艾德里安的共谋链条开始清晰。",
        "character_focus": "事故后的每个选择，如何把偶发过失推进成可追责的共同犯罪。",
        "relationship_tension": "两位共谋者既互相需要，又各自准备在危险时切割对方。",
        "emotion_tension": "罪责回流、过去反咬现在的压迫感。",
        "reply_anchor": "把这段视作真正命运转折的犯罪源头。",
    },
    "event-04": {
        "id": "event-04",
        "label": "加里夫夫妇逼近核心",
        "scene_summary": "受害者父母通过长期观察和布置，开始把会谈现场改造成自己的反向审讯空间。",
        "character_focus": "托马斯与埃尔维拉如何把私人悲痛变成策略与证据工程。",
        "relationship_tension": "主动与被动的权力位置继续倒转，艾德里安却还未意识到真正的对手是谁。",
        "emotion_tension": "缓慢收紧的报复感与猎物即将失控的预兆。",
        "reply_anchor": "以“受害者家属正在夺回主动权”为改写支点。",
    },
    "event-05": {
        "id": "event-05",
        "label": "供词崩塌与关键物证",
        "scene_summary": "在照片、物证、时间压力与提问节奏的叠压下，艾德里安的供词结构开始连续坍塌。",
        "character_focus": "艾德里安在求生本能中如何不断交出本不该说出的真相。",
        "relationship_tension": "他对假古德曼的依赖越深，越说明他已经落入对方的布局。",
        "emotion_tension": "心理防线被一层层剥开的失控感。",
        "reply_anchor": "以证词体系内部的自我崩塌作为命运拨杆。",
    },
    "event-06": {
        "id": "event-06",
        "label": "母亲揭面与复仇闭环",
        "scene_summary": "假古德曼真实身份揭晓，监听证据完成闭环，受害者母亲终于让加害者亲口把罪交代出来。",
        "character_focus": "埃尔维拉·加里夫如何以母亲身份完成最终清算。",
        "relationship_tension": "加害者与受害者家属的位置被彻底翻转，叙事控制权也彻底易手。",
        "emotion_tension": "冷静、克制却极具命运审判感的揭面时刻。",
        "reply_anchor": "以所有谎言回到母亲面前受审作为最终收束。",
    },
}

WORLD_FATE_PROGRESS_STEPS = [
    "埋下命运偏转的种子",
    "扩大角色关系里的摩擦",
    "让冲突正式成形并逼近选择",
    "推动代价显性化并重写局面",
    "把所有变化收束到新的命运走向",
]

INVISIBLE_GUEST_HOTSPOTS = [
    {"id": "montblanc-pen", "label": "黑色万宝龙钢笔", "area": "中央茶几区", "box": {"x": 0.47, "y": 0.55, "width": 0.05, "height": 0.08}},
    {"id": "silver-stopwatch", "label": "银色机械秒表", "area": "中央茶几区", "box": {"x": 0.54, "y": 0.56, "width": 0.05, "height": 0.06}},
    {"id": "spain-map", "label": "折叠的西班牙地图", "area": "中央茶几区", "box": {"x": 0.38, "y": 0.50, "width": 0.16, "height": 0.13}},
    {"id": "daniel-newspaper", "label": "丹尼尔失踪案报纸剪报", "area": "中央茶几区", "box": {"x": 0.60, "y": 0.54, "width": 0.13, "height": 0.10}},
    {"id": "goodman-notebook", "label": "古德曼黑色笔记本", "area": "中央茶几区", "box": {"x": 0.43, "y": 0.63, "width": 0.15, "height": 0.10}},
    {"id": "adrian-lighter", "label": "艾德里安金色打火机", "area": "中央茶几区", "box": {"x": 0.72, "y": 0.56, "width": 0.05, "height": 0.06}},
    {"id": "adrian-jacket", "label": "艾德里安西装外套", "area": "沙发区", "box": {"x": 0.66, "y": 0.66, "width": 0.15, "height": 0.16}},
    {"id": "water-glass", "label": "茶几玻璃杯", "area": "沙发区", "box": {"x": 0.52, "y": 0.62, "width": 0.04, "height": 0.07}},
    {"id": "sofa-cushions", "label": "沙发上的两个靠垫", "area": "沙发区", "box": {"x": 0.58, "y": 0.70, "width": 0.20, "height": 0.14}},
    {"id": "family-photo", "label": "艾德里安全家福", "area": "背景墙区", "box": {"x": 0.74, "y": 0.23, "width": 0.13, "height": 0.17}},
    {"id": "company-award", "label": "公司获奖证书", "area": "背景墙区", "box": {"x": 0.58, "y": 0.22, "width": 0.12, "height": 0.17}},
    {"id": "modern-art", "label": "墙上现代艺术画", "area": "背景墙区", "box": {"x": 0.42, "y": 0.18, "width": 0.17, "height": 0.20}},
    {"id": "opposite-window", "label": "对面大楼窗户", "area": "窗户区", "box": {"x": 0.10, "y": 0.18, "width": 0.16, "height": 0.25}},
    {"id": "windowsill-plant", "label": "窗台绿植", "area": "窗户区", "box": {"x": 0.19, "y": 0.53, "width": 0.08, "height": 0.13}},
    {"id": "city-night-view", "label": "窗外城市夜景", "area": "窗户区", "box": {"x": 0.06, "y": 0.05, "width": 0.25, "height": 0.15}},
    {"id": "goodman-briefcase", "label": "古德曼黑色公文包", "area": "古德曼随身物品区", "box": {"x": 0.23, "y": 0.69, "width": 0.12, "height": 0.16}},
    {"id": "goodman-glasses", "label": "古德曼眼镜", "area": "古德曼随身物品区", "box": {"x": 0.30, "y": 0.36, "width": 0.04, "height": 0.04}},
    {"id": "goodman-watch", "label": "古德曼手腕手表", "area": "古德曼随身物品区", "box": {"x": 0.35, "y": 0.57, "width": 0.04, "height": 0.05}},
    {"id": "shoe-cabinet", "label": "门口鞋柜", "area": "门口走廊区", "box": {"x": 0.84, "y": 0.68, "width": 0.11, "height": 0.15}},
    {"id": "door-intercom", "label": "门禁对讲机", "area": "门口走廊区", "box": {"x": 0.90, "y": 0.34, "width": 0.05, "height": 0.10}},
]

INVISIBLE_GUEST_CURATED_MEMORIES = {
    "montblanc-pen": {
        "object_name": "万宝龙签字笔（改装信号发射器）",
        "ai_reading": "表面是普通高档钢笔，笔杆内部安装了微型无线电信号发射器，将对话实时传输到对面大楼的接收设备。",
        "story_connection": "古德曼用它让艾德里安在地图上标注沉车地点，全程传输了艾德里安的所有认罪供述。影片第 85 分 30 秒，艾德里安将钢笔插入胸前口袋；第 92 分 15 秒，发射器电池耗尽产生电流干扰，钢笔漏墨暴露身份。",
        "related_characters": ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚", "托马斯·加里夫"],
        "related_moment": "第 81 分 45 秒（递笔）、第 85 分 30 秒（艾德里安插笔入袋）、第 92 分 15 秒（钢笔漏墨）。",
        "director_value": "这是整个复仇计划的核心技术设备。如果钢笔不存在、被发现或被替换，托马斯夫妇将无法获得任何法律证据。",
        "memory_text": "它不是单纯的道具，而是把口供从房间里偷运出去的装置。镜头一旦强调它，观众会立刻意识到这场谈话并非私密协商，而是一场被远端监听的审判。",
    },
    "silver-stopwatch": {
        "object_name": "机械秒表",
        "ai_reading": "古德曼用它制造“三小时后开庭”的虚假紧迫感，同时精确控制与真正古德曼到达之间的时间差。",
        "story_connection": "古德曼一进门就启动秒表，声称“我们只有 180 分钟”。但实际上她只有约 60 分钟，因为真正的古德曼会在一小时后到达。影片第 93 分整，秒表停止，真正的古德曼正好按下门铃。",
        "related_characters": ["假古德曼（埃尔维拉·加里夫）"],
        "related_moment": "第 12 分 30 秒（启动秒表）、第 93 分整（秒表停止，门铃响起）。",
        "director_value": "时间压力是艾德里安心理防线崩溃的关键。改变秒表的时间，或让艾德里安发现秒表的谎言，会直接影响他的坦白程度和时机。",
        "memory_text": "它把抽象的紧迫感变成可以被听见、被看见的节拍器，是逼供节奏能够成立的机械心脏。",
    },
    "daniel-newspaper": {
        "object_name": "丹尼尔失踪案的报纸剪报",
        "ai_reading": "古德曼用它提醒艾德里安案件的严重性，同时为后续出示合成照片做铺垫。",
        "story_connection": "古德曼在第 45 分 15 秒出示报纸，然后在第 48 分 20 秒出示关键合成照片，显示艾德里安在酒店被捕时埃尔维拉就在现场；第 80 分 10 秒，古德曼承认照片是合成的。",
        "related_characters": ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚", "丹尼尔·加里夫"],
        "related_moment": "第 45 分 15 秒（出示报纸）、第 48 分 20 秒（出示合成照片）、第 80 分 10 秒（承认照片是合成的）。",
        "director_value": "这是古德曼建立可信度的第一步。如果艾德里安提前发现照片是合成的，整个骗局将立即败露。",
        "memory_text": "它在空间里代表公共叙事压力进入私人房间的瞬间，让这场对话从自保策略升级为真正的案件回流。",
    },
    "spain-map": {
        "object_name": "折叠的西班牙地图",
        "ai_reading": "地图把艾德里安的口供从抽象叙述压到具体地理位置，迫使他把沉车地点和行动路线落实到可验证坐标。",
        "story_connection": "古德曼摊开地图后，艾德里安必须把丹尼尔被处理的位置说清楚，这让“我只是被卷入事故”的说辞转向可被追查的犯罪链。",
        "related_characters": ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚", "丹尼尔·加里夫"],
        "related_moment": "对应古德曼要求艾德里安标注沉车地点的审讯段落。",
        "director_value": "地图是谎言被空间坐标固定的瞬间。镜头强化它，会让观众看到供词如何从心理防线变成法律证据。",
        "memory_text": "它把犯罪地点从记忆里拖回桌面，使“过去发生过什么”变成“现在必须指出在哪里”。",
    },
    "goodman-notebook": {
        "object_name": "古德曼的黑色笔记本",
        "ai_reading": "笔记本上写着“恐惧、时间、谎言、受害者、凶手”等词语，是假古德曼整理心理攻防节奏的外化道具。",
        "story_connection": "她不是随机提问，而是围绕恐惧和时间压力逐步拆解艾德里安的自保叙述。",
        "related_characters": ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚"],
        "related_moment": "适合对应她连续追问、重排时间线与迫使艾德里安补漏洞的段落。",
        "director_value": "它能让观众提前感到这不是律师笔记，而是一套审讯脚本。改变笔记本内容会改变整场心理战的节奏。",
        "memory_text": "这本笔记不是记录真相，而是在设计让真相自己露出来的路径。",
    },
    "adrian-lighter": {
        "object_name": "艾德里安的金色打火机",
        "ai_reading": "打火机象征艾德里安成功人士的控制感与身份包装，放在报纸旁边时，与丹尼尔失踪案形成强烈道德反差。",
        "story_connection": "他试图维持体面身份，但桌面的案件材料不断提醒观众：这个体面身份正建立在掩盖与伪证上。",
        "related_characters": ["艾德里安·多里亚"],
        "related_moment": "适合放在艾德里安强调名誉、家庭与职业前途时作为切入。",
        "director_value": "它能把角色的自我形象具体化。如果镜头让打火机靠近报纸，人物的体面与犯罪后果会在同一画面内冲突。",
        "memory_text": "小道具保留了他的社会身份，也暴露了这层身份正在被桌上的证据烧穿。",
    },
    "family-photo": {
        "object_name": "艾德里安与妻女的全家福",
        "ai_reading": "全家福把艾德里安的父亲和丈夫身份固定在画面里，与他隐藏的罪行形成最直接的情感反差。",
        "story_connection": "每当他谈到未来、名誉和自保，照片都提醒观众他押上的不只是案件结果，还有整个家庭身份。",
        "related_characters": ["艾德里安·多里亚", "妻子与女儿"],
        "related_moment": "适合放在艾德里安提到家庭、名誉和未来时作为反打镜头。",
        "director_value": "它能把悬疑叙事里的道德代价具体化，让人物崩塌不只是法律风险，而是私人身份的全面破裂。",
        "memory_text": "这不是单纯的情感布景，而是整套谎言最不愿被照亮的家庭镜像。",
    },
    "opposite-window": {
        "object_name": "对面大楼的监听窗户",
        "ai_reading": "表面只是普通城市夜景的一格窗户，实际上那里埋着托马斯的监听与录音装置，是房间外部的第二审讯场。",
        "story_connection": "它证明这场谈话从来不是封闭空间里的私密协商，而是被家属精心设计的证据回收行动。",
        "related_characters": ["托马斯·加里夫", "埃尔维拉·加里夫", "艾德里安·多里亚"],
        "related_moment": "适合在揭面前后作为补镜头，解释证词为何能够被带出现场。",
        "director_value": "如果没有这个外部监听点，母亲的表演就只能停留在心理报复，无法完成法律层面的闭环。",
        "memory_text": "它把对面楼的一扇窗变成远程见证者，让城市夜景本身参与了复仇结构。",
    },
    "goodman-briefcase": {
        "object_name": "古德曼的黑色公文包",
        "ai_reading": "公文包承载假古德曼的职业伪装，是这场审讯得以成立的第一层可信外壳。",
        "story_connection": "当公文包被摆进房间，艾德里安默认接受“这是一场律师会谈”的前提，也就一步步走进更深的叙事陷阱。",
        "related_characters": ["假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚"],
        "related_moment": "适合在古德曼落座、翻资料或改变问话策略时反复被看见。",
        "director_value": "它能让骗局的专业感具象化，也能作为身份伪装的视觉锚点，暗示这场会谈从一开始就不纯粹。",
        "memory_text": "包里装的不只是文件，而是整场复仇得以合理进入房间的通行证。",
    },
    "goodman-watch": {
        "object_name": "古德曼手腕上的手表",
        "ai_reading": "手表与秒表共同构成时间压力系统，提醒她必须在真正古德曼到达前完成套供。",
        "story_connection": "她表面说有三小时，实际每一分钟都在和真实身份暴露赛跑。",
        "related_characters": ["假古德曼（埃尔维拉·加里夫）", "真正的维吉尼亚·古德曼"],
        "related_moment": "适合对应她查看时间、调整问话速度或加速逼供的段落。",
        "director_value": "它能把外部倒计时压进角色身体动作里，让观众感到骗局不是无限时长，而是在精确冒险。",
        "memory_text": "秒表骗艾德里安，手表提醒她自己。",
    },
    "door-intercom": {
        "object_name": "墙上的门禁对讲机",
        "ai_reading": "门禁对讲机连接房间内外，是真正古德曼到达、门铃响起和骗局终止的声音入口。",
        "story_connection": "当门铃响起，假古德曼制造的时间叙事被现实世界直接打断。",
        "related_characters": ["真正的维吉尼亚·古德曼", "假古德曼（埃尔维拉·加里夫）", "艾德里安·多里亚"],
        "related_moment": "第 93 分整附近，秒表停止，真正古德曼按下门铃。",
        "director_value": "它能把空间外的压力转成声音事件。只要对讲机响起，观众就会意识到谎言空间已经到期。",
        "memory_text": "它是这场骗局的终场铃。",
    },
}

WORLD_FATE_MOVIE_PROFILES = {
    "f1": {
        "id": "f1",
        "movie_label": "F1 电影",
        "scope": F1_WORLD_SCOPE,
        "story_beats": F1_STORY_BEATS,
        "baseline_by_key": F1_WORLD_FATE_BASELINE_BY_KEY,
        "presets": F1_WORLD_FATE_PRESETS,
        "hotspots": [],
        "curated_memories": {},
    },
    "invisible_guest": {
        "id": "invisible_guest",
        "movie_label": "《看不见的客人》",
        "scope": INVISIBLE_GUEST_WORLD_SCOPE,
        "story_beats": INVISIBLE_GUEST_STORY_BEATS,
        "baseline_by_key": INVISIBLE_GUEST_WORLD_FATE_BASELINE_BY_KEY,
        "presets": INVISIBLE_GUEST_WORLD_FATE_PRESETS,
        "hotspots": INVISIBLE_GUEST_HOTSPOTS,
        "curated_memories": INVISIBLE_GUEST_CURATED_MEMORIES,
    },
}


def get_world_fate_movie_profile(movie_id: str) -> dict:
    candidate = str(movie_id or "").strip().lower()
    if candidate not in WORLD_FATE_MOVIE_PROFILES:
        raise ValueError("movie_id is not supported")
    return WORLD_FATE_MOVIE_PROFILES[candidate]


def get_world_fate_default_hotspots(movie_id: str) -> list:
    get_world_fate_movie_profile(movie_id)
    return []


def get_world_fate_anchor_context(movie_id: str) -> str:
    profile = get_world_fate_movie_profile(movie_id)
    hotspots = profile.get("hotspots", [])
    memories = profile.get("curated_memories", {})
    lines = []
    for item in hotspots:
        hotspot_id = str(item.get("id") or "").strip()
        label = str(item.get("label") or "").strip()
        area = str(item.get("area") or "").strip()
        memory = memories.get(hotspot_id) or {}
        director_value = str(memory.get("director_value") or "").strip()
        if director_value:
            lines.append(f"- {area} / {label}：{director_value}")
        elif area or label:
            lines.append(f"- {area} / {label}")
    return "\n".join(lines)


def get_world_fate_curated_memory(movie_id: str, hotspot_id: str):
    profile = get_world_fate_movie_profile(movie_id)
    memory = profile.get("curated_memories", {}).get(str(hotspot_id or "").strip())
    return dict(memory) if memory else None


def normalize_world_id(value: str) -> str:
    candidate = str(value or "").strip()
    if candidate not in WORLD_FATE_PRESET_IDS:
        raise ValueError("world_id is not supported")
    return candidate


def get_world_context(movie_id: str, world_id: str, world_title: str, world_note: str) -> dict:
    profile = get_world_fate_movie_profile(movie_id)
    preset = dict(profile["presets"][world_id])
    preset["movie_id"] = profile["id"]
    preset["movie_label"] = profile["movie_label"]
    preset["scope_notice"] = profile["scope"]
    if world_id == "custom-world":
        if world_title:
            preset["title"] = world_title
        if world_note:
            preset["rule"] = world_note
    return preset


def get_world_fate_story_beat(movie_id: str, seconds: float) -> dict:
    profile = get_world_fate_movie_profile(movie_id)
    beats = profile["story_beats"]
    for beat in beats:
        if beat["start"] <= seconds < beat["end"]:
            return beat
    return beats[-1]


def build_world_fate_fallback_scene(movie_id: str, seconds: float = 0.0) -> dict:
    beat = get_world_fate_story_beat(movie_id, seconds)
    return {
        "story_beat": beat["label"],
        "scene_summary": beat["scene_summary"],
        "character_focus": beat["character_focus"],
        "relationship_tension": beat["relationship_tension"],
        "emotion_tension": beat["emotion_tension"],
        "reply_anchor": beat["reply_anchor"],
        "suggested_sender": beat.get("suggested_sender", "导演台"),
        "scope_notice": get_world_fate_movie_profile(movie_id)["scope"],
    }


def build_world_fate_guardrails(movie_id: str, world_context: dict) -> str:
    profile = get_world_fate_movie_profile(movie_id)
    return (
        f"{profile['scope']} 当前选中的世界观为“{world_context['title']}”，"
        f"规则为：{world_context['rule']}。所有剧情修改必须遵守因果关系，"
        "不能让角色、时间线或冲突凭空跳变。"
    )


def build_baseline_nodes(movie_id: str, nodes: list) -> list:
    profile = get_world_fate_movie_profile(movie_id)
    baselines = []
    beats = profile["story_beats"]
    baseline_by_key = profile["baseline_by_key"]
    for index, node in enumerate(nodes):
        seed_key = str(node.get("seed_key") or "").strip()
        beat = baseline_by_key.get(seed_key)
        if not beat:
            beat = beats[min(index, len(beats) - 1)]
        baselines.append(
            {
                "id": node["id"],
                "title": node.get("title") or f"剧情节点 {index + 1:02d}",
                "seed_key": beat["id"],
                "baseline_title": beat["label"],
                "scene_summary": beat["scene_summary"],
                "character_focus": beat["character_focus"],
                "relationship_tension": beat["relationship_tension"],
                "emotion_tension": beat["emotion_tension"],
                "reply_anchor": beat["reply_anchor"],
            }
        )
    return baselines


def build_world_fate_fallback(movie_id: str, nodes: list, world_context: dict, modification_text: str) -> dict:
    baselines = build_baseline_nodes(movie_id, nodes)
    normalized = []
    change_excerpt = modification_text[:56]

    for index, node in enumerate(nodes):
        baseline = baselines[index]
        step = WORLD_FATE_PROGRESS_STEPS[min(index, len(WORLD_FATE_PROGRESS_STEPS) - 1)]
        normalized.append(
            {
                "id": node["id"],
                "title": f"{baseline['baseline_title']} · 命运调节后",
                "story_description": (
                    f"在“{world_context['title']}”下，这一节点承接上一段结果，围绕 {baseline['character_focus']} 推进。"
                    f"根据用户提出的“{change_excerpt}”，此处将 {step}，同时继续维持 {baseline['relationship_tension']} 的逻辑延续。"
                ),
                "logic_reason": (
                    f"同步依据：先保留原始段落的核心冲突“{baseline['baseline_title']}”，"
                    f"再按照世界规则“{world_context['rule']}”和修改要求调整人物选择路径。"
                ),
                "frame_start_hint": f"首帧待补充：围绕 {baseline['baseline_title']} 的开场语义",
                "frame_end_hint": f"尾帧待补充：体现“{step}”后的结果画面",
                "clip_hint": f"视频待补充：承接前一节点并通向下一节点的新切片",
            }
        )

    return {
        "change_summary": (
            f"已在“{world_context['title']}”下，根据用户修改“{change_excerpt}”对全部剧情节点做逻辑联动重排。"
        ),
        "nodes": normalized,
    }


def build_world_fate_frame_fallback(movie_id: str, nodes: list, world_context: dict) -> dict:
    normalized = []
    for index, node in enumerate(nodes):
        scene_label = node.get("title") or f"剧情节点 {index + 1:02d}"
        normalized.append(
            {
                "id": node["id"],
                "frame_start_hint": f"首帧方案：从 {scene_label} 的开场状态切入，保持“{world_context['title']}”的规则。",
                "frame_end_hint": f"尾帧方案：收束到 {scene_label} 的结果姿态，为下一节点留出承接空间。",
                "frame_start_url": build_mock_image_data_url("首帧方案", scene_label, "#6fc2ff", "START"),
                "frame_end_url": build_mock_image_data_url("尾帧方案", scene_label, "#ff7a2f", "END"),
                "frame_logic_reason": f"当前为结构骨架演示：首尾帧方案已按“{world_context['title']}”做逻辑占位。",
            }
        )
    return {
        "change_summary": f"已基于“{world_context['title']}”为全部节点生成首尾帧演示方案。",
        "nodes": normalized,
    }


def build_world_fate_video_fallback(movie_id: str, nodes: list, world_context: dict) -> dict:
    normalized = []
    for index, node in enumerate(nodes):
        scene_label = node.get("title") or f"剧情节点 {index + 1:02d}"
        normalized.append(
            {
                "id": node["id"],
                "video_url": "",
                "video_task_id": "",
                "video_status": "mock_ready",
                "video_note": f"当前为结构骨架演示：已按“{world_context['title']}”准备 {scene_label} 的再创作视频占位。",
                "clip_hint": "视频待补充：等真实万相结果回填。",
            }
        )
    return {
        "change_summary": f"已基于“{world_context['title']}”完成视频再创作演示占位。",
        "nodes": normalized,
    }
