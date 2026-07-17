const source = window.PARK_CASE_DATA || { cases: [] };
const cases = source.cases || [];
const system = window.COMMERCIAL_DNA_SYSTEM || { mbtiTypes: {}, brandLibrary: [] };
const mbtiTypes = system.mbtiTypes || {};
const brandLibrary = system.brandLibrary || [];
const nonstandardTargets = system.nonstandardTargets || [];
const sceneEvidenceSource = window.COMMERCIAL_DNA_SCENE_EVIDENCE || { items: [] };
const sceneEvidenceItems = sceneEvidenceSource.items || [];
const personaSystem = window.COMMERCIAL_DNA_PERSONA || { axes: [], questions: {}, personas: {}, info: {}, cp: {} };
const operatorSystem = window.COMMERCIAL_DNA_OPERATOR_V1 || { axes: [], questions: [], personas: [], personasByCode: {} };
const dualAxisKeys = ["radius", "content", "brand", "operation"];
const dualStorageKey = "commercial_dna_dual_test_v1";
const projectMonsterAssets = {
  "居委会": "persona-assets/community-capybara-v1.webp",
  "文艺据点": "persona-assets/art-cat-v1.webp",
  "周末限定": "persona-assets/weekend-squirrel-v1.webp",
  "中央车站": "persona-assets/station-elephant-v1.webp",
  "同好会馆": "persona-assets/club-fox-v1.webp",
  "顶流片场": "persona-assets/studio-peacock-v1.webp",
  "新物种实验室": "persona-assets/lab-octopus-v1.webp",
  "内容永动机": "persona-assets/engine-bee-v1.webp",
};
const sampleTypeDefinitions = new Map((source.typeDefinitions || []).map(item => [item.code, item]));
const assetRoot = "";

const state = {
  appPage: "home",
  mode: "commercial",
  name: "观山湖商业项目",
  city: "贵阳观山湖",
  relation: "贴近公园",
  cityTier: "新一线/强二线",
  asset: "公园/滨水配套",
  stage: "定位策划",
  space: "开放街区",
  owner: "平台/国企",
  operator: "自持商管",
  brandGoal: "新兴品牌首店",
  operation: "每周有内容",
  intent: "快闪测试",
  scenes: new Set(["亲子", "宠物", "夜经济"]),
  selectedCaseId: cases.find(item => item.name.includes("The Commons"))?.id || cases[0]?.id,
  selectedBrandId: null,
  recommended: [],
  showEvidence: false,
  showBrands: false,
  showMatch: false,
  showIntent: false,
  currentStage: "diagnose",
  brandTrack: "open",
  personaRole: "project",
  personaIndex: 0,
  personaAnswers: [],
  personaTags: [],
  personaResult: null,
  personaResultStage: "identity",
  personaCaseCode: "",
  personaShuffles: [],
  consumerCity: "",
  dual: {
    schemaVersion: 1,
    selectedMode: "project",
    activeMode: null,
    drafts: { self: null, project: null },
    results: { self: null, project: null },
    match: null,
    assetGate: {
      status: "checking",
      reason: "正在核对 16 张正式角色资产",
      assetsById: {},
    },
    storageAvailable: true,
  },
};

const flowStages = ["diagnose", "result", "cases", "match", "intent"];

const scenarioOptionsByMode = {
  commercial: ["亲子", "宠物", "夜经济", "主理人", "社区复访", "首店招商", "城市更新", "艺术策展", "户外运动", "游客打卡"],
  brand: ["咖啡烘焙", "餐酒社交", "城市礼物", "内容IP", "主理人零售", "宠物友好", "户外运动", "快闪联名", "展览活动", "本地社群"],
};

const intentOptionsByMode = {
  commercial: ["快闪测试", "主题店共创", "品牌入驻", "联名活动", "城市礼物集合"],
  brand: ["快闪测试", "首店/主题店", "联名活动", "内容展陈", "长期入驻"],
};

const quickQuestionsByMode = {
  commercial: [
    { id: "relationSelect", title: "项目和城市空间的关系？", hint: "先判断人为什么会来。", options: ["贴近公园", "滨水界面", "城市更新", "社区中心"] },
    { id: "cityTierSelect", title: "项目所在城市/区域能级？", hint: "先判断它该做片区复访还是城市目的地。", options: ["新一线/强二线", "一线城市", "普通二线", "旅游城市", "产业新区", "下沉城市"] },
    { id: "stageSelect", title: "现在最想解决什么？", hint: "决定先看对标、空间、招商还是运营。", options: ["定位策划", "空间方案", "招商落位", "运营调改"] },
  ],
  brand: [
    { id: "brandGoalSelect", title: "品牌调性更接近哪种？", hint: "先判断适合什么样的非标商业氛围。", options: ["咖啡烘焙茶饮", "创意餐饮餐酒", "文创/城市礼物", "设计师/主理人零售", "宠物户外运动", "展览/内容IP", "夜经济/音乐社交", "生活方式集合"] },
    { id: "stageSelect", title: "当前最想落地什么？", hint: "决定是首店、快闪、联名还是长期入驻。", options: ["找非标商业共创", "首店/主题店落地", "快闪/联名活动", "城市巡回/跨城拓展", "门店模型验证", "内容曝光合作"] },
    { id: "cityTierSelect", title: "优先看哪个目标区域？", hint: "先判断本地、周边、旅游城市还是跨城巡回。", options: ["本地深耕", "周边城市试点", "新一线/强二线", "一线城市首店", "旅游城市", "全国巡回"] },
  ],
};

const coreQuestionSelectIds = ["relationSelect", "cityTierSelect", "stageSelect", "brandGoalSelect"];

const els = {
  projectName: document.getElementById("projectName"),
  projectCity: document.getElementById("projectCity"),
  relationSelect: document.getElementById("relationSelect"),
  cityTierSelect: document.getElementById("cityTierSelect"),
  assetSelect: document.getElementById("assetSelect"),
  stageSelect: document.getElementById("stageSelect"),
  spaceSelect: document.getElementById("spaceSelect"),
  ownerSelect: document.getElementById("ownerSelect"),
  operatorSelect: document.getElementById("operatorSelect"),
  brandGoalSelect: document.getElementById("brandGoalSelect"),
  operationSelect: document.getElementById("operationSelect"),
  quickStart: document.getElementById("quickStart"),
  detailPreferences: document.getElementById("detailPreferences"),
  scenarioChips: document.getElementById("scenarioChips"),
  generateButton: document.getElementById("generateButton"),
  detailGenerateButton: document.getElementById("detailGenerateButton"),
  dnaScore: document.getElementById("dnaScore"),
  diagnosisType: document.getElementById("diagnosisType"),
  diagnosisCopy: document.getElementById("diagnosisCopy"),
  miniDeck: document.getElementById("miniDeck"),
  coverImage: document.getElementById("coverImage"),
  sampleCloud: document.getElementById("sampleCloud"),
  targetCountLabel: document.getElementById("targetCountLabel"),
  coverCaseName: document.getElementById("coverCaseName"),
  reportTitle: document.getElementById("reportTitle"),
  metricGrid: document.getElementById("metricGrid"),
  recommendHint: document.getElementById("recommendHint"),
  caseSectionTitle: document.getElementById("caseSectionTitle"),
  caseNext: document.getElementById("caseNext"),
  caseGrid: document.getElementById("caseGrid"),
  brandHint: document.getElementById("brandHint"),
  brandSectionTitle: document.getElementById("brandSectionTitle"),
  brandGrid: document.getElementById("brandGrid"),
  evidenceGrid: document.getElementById("evidenceGrid"),
  resultCode: document.getElementById("resultCode"),
  resultName: document.getElementById("resultName"),
  resultIntro: document.getElementById("resultIntro"),
  resultConfidence: document.getElementById("resultConfidence"),
  resultSummary: document.getElementById("resultSummary"),
  resultNext: document.getElementById("resultNext"),
  strategyGrid: document.getElementById("strategyGrid"),
  axisGrid: document.getElementById("axisGrid"),
  refineActions: document.getElementById("refineActions"),
  refineNote: document.getElementById("refineNote"),
  resultSection: document.getElementById("result"),
  modeSwitch: document.getElementById("modeSwitch"),
  stageProgress: document.getElementById("stageProgress"),
  heroTitle: document.getElementById("heroTitle"),
  heroLead: document.getElementById("heroLead"),
  nameFieldLabel: document.getElementById("nameFieldLabel"),
  cityFieldLabel: document.getElementById("cityFieldLabel"),
  detailSummaryText: document.getElementById("detailSummaryText"),
  relationFieldLabel: document.getElementById("relationFieldLabel"),
  cityTierFieldLabel: document.getElementById("cityTierFieldLabel"),
  assetFieldLabel: document.getElementById("assetFieldLabel"),
  stageFieldLabel: document.getElementById("stageFieldLabel"),
  spaceFieldLabel: document.getElementById("spaceFieldLabel"),
  ownerFieldLabel: document.getElementById("ownerFieldLabel"),
  operatorFieldLabel: document.getElementById("operatorFieldLabel"),
  brandGoalFieldLabel: document.getElementById("brandGoalFieldLabel"),
  operationFieldLabel: document.getElementById("operationFieldLabel"),
  scenarioFieldLabel: document.getElementById("scenarioFieldLabel"),
  primerTitle: document.getElementById("primerTitle"),
  primerCopy: document.getElementById("primerCopy"),
  primerAxisOne: document.getElementById("primerAxisOne"),
  primerAxisTwo: document.getElementById("primerAxisTwo"),
  primerAxisThree: document.getElementById("primerAxisThree"),
  primerAxisFour: document.getElementById("primerAxisFour"),
  matchLead: document.getElementById("matchLead"),
  businessMatchCard: document.getElementById("businessMatchCard"),
  brandMatchCard: document.getElementById("brandMatchCard"),
  matchScore: document.getElementById("matchScore"),
  matchType: document.getElementById("matchType"),
  matchActions: document.getElementById("matchActions"),
  intentLead: document.getElementById("intentLead"),
  intentOptions: document.getElementById("intentOptions"),
  intentCard: document.getElementById("intentCard"),
  sampleSearch: document.getElementById("sampleSearch"),
  sampleTypeFilter: document.getElementById("sampleTypeFilter"),
  sampleBarrierFilter: document.getElementById("sampleBarrierFilter"),
  sampleLibraryGrid: document.getElementById("sampleLibraryGrid"),
  opsSearch: document.getElementById("opsSearch"),
  opsDimensionFilter: document.getElementById("opsDimensionFilter"),
  opsStatusFilter: document.getElementById("opsStatusFilter"),
  opsLibraryList: document.getElementById("opsLibraryList"),
  profilePanel: document.getElementById("profilePanel"),
  brandTrackLabel: document.getElementById("brandTrackLabel"),
  brandTrackTitle: document.getElementById("brandTrackTitle"),
  brandTrackCopy: document.getElementById("brandTrackCopy"),
  brandRegisterName: document.getElementById("brandRegisterName"),
  brandRegisterCity: document.getElementById("brandRegisterCity"),
  brandRegisterCategory: document.getElementById("brandRegisterCategory"),
  brandRegisterContact: document.getElementById("brandRegisterContact"),
  brandRegisterButton: document.getElementById("brandRegisterButton"),
  consumerContact: document.getElementById("consumerContact"),
  consumerSaveButton: document.getElementById("consumerSaveButton"),
  personaProgress: document.getElementById("personaProgress"),
  personaCount: document.getElementById("personaCount"),
  personaAxis: document.getElementById("personaAxis"),
  personaQuestion: document.getElementById("personaQuestion"),
  personaOptions: document.getElementById("personaOptions"),
  personaResult: document.getElementById("personaResult"),
  dualModeSwitch: document.getElementById("dualModeSwitch"),
  dualHomeLead: document.getElementById("dualHomeLead"),
  dualStartButton: document.getElementById("dualStartButton"),
  dualGateNote: document.getElementById("dualGateNote"),
  dualMatchResult: document.getElementById("dualMatchResult"),
};

const metricLabels = {
  traffic: "客流",
  repeat: "复访",
  content: "内容",
  leasing: "招商",
  media: "传播",
  risk: "风险",
};

const axisMeta = [
  {
    key: "radius",
    letters: ["L", "D"],
    name: "复访力",
    left: "日常复访",
    right: "目的地到访",
    explain: "判断项目更适合服务附近高频客群，还是吸引跨区专程到访。",
  },
  {
    key: "content",
    letters: ["S", "C"],
    name: "传播力",
    left: "稳定经营",
    right: "容易出圈",
    explain: "判断空间是否需要展览、活动、话题场景和视觉传播来驱动。",
  },
  {
    key: "brand",
    letters: ["B", "M"],
    name: "品牌结构",
    left: "基础品牌打底",
    right: "主理人矩阵",
    explain: "判断招商结构更适合成熟品牌承托，还是用主理人和新兴品牌制造识别度。",
  },
  {
    key: "operation",
    letters: ["E", "R"],
    name: "运营节奏",
    left: "低频维护",
    right: "高频运营",
    explain: "判断项目能否承接周更活动、社群运营、快闪和内容排期。",
  },
];

const brandAxisMeta = [
  {
    key: "radius",
    letters: ["L", "D"],
    name: "拓展半径",
    left: "本地深耕",
    right: "跨城拓展",
    explain: "判断品牌更适合先在本地非标商业做深，还是具备跨城复制、巡回或首店拓展能力。",
  },
  {
    key: "content",
    letters: ["S", "C"],
    name: "内容驱动力",
    left: "产品复购",
    right: "内容出圈",
    explain: "判断品牌主要靠产品稳定复购，还是靠视觉、话题、展陈、社交传播放大声量。",
  },
  {
    key: "brand",
    letters: ["B", "M"],
    name: "门店模型",
    left: "标准小店",
    right: "主理共创",
    explain: "判断品牌更像可复制的小店模型，还是需要与空间、活动和运营团队共同定制。",
  },
  {
    key: "operation",
    letters: ["E", "R"],
    name: "共创节奏",
    left: "稳定入驻",
    right: "高频联名",
    explain: "判断品牌适合长期稳定入驻，还是更适合快闪、联名、主题活动和社群运营。",
  },
];

const selectOptionsByMode = {
  commercial: {
    relationSelect: { label: "空间关系", options: ["贴近公园", "滨水界面", "屋顶", "城市更新", "社区中心"] },
    cityTierSelect: { label: "城市能级", options: ["新一线/强二线", "一线城市", "普通二线", "旅游城市", "产业新区", "下沉城市"] },
    assetSelect: { label: "资产底色", options: ["公园/滨水配套", "城市更新存量", "历史街区", "工业遗存", "社区商业", "文旅景区"] },
    stageSelect: { label: "当前任务", options: ["定位策划", "空间方案", "招商落位", "开业筹备", "运营调改"] },
    spaceSelect: { label: "空间形态", options: ["开放街区", "半户外/下沉", "盒子改造", "小体量组团", "大体量综合体", "轻资产市集"] },
    ownerSelect: { label: "业主背景", options: ["平台/国企", "地产开发商", "文旅/景区", "街区/政府", "民营业主", "存量资产方"] },
    operatorSelect: { label: "运营角色", options: ["自持商管", "委托运营", "招商代理", "内容主理人", "品牌联合运营"] },
    brandGoalSelect: { label: "品牌目标", options: ["新兴品牌首店", "在地主理人", "咖啡烘焙密度", "宠物户外社群", "文创艺术内容", "稳态生活配套"] },
    operationSelect: { label: "运营频率", options: ["每周有内容", "每月主题活动", "开业节点爆发", "长期稳态经营", "品牌自运营为主"] },
  },
  brand: {
    relationSelect: { label: "单店面积", options: ["30㎡以内", "30-80㎡", "80-150㎡", "150-300㎡", "300㎡以上", "快闪/柜台型"] },
    cityTierSelect: { label: "目标区域", options: ["本地深耕", "周边城市试点", "新一线/强二线", "一线城市首店", "旅游城市", "全国巡回"] },
    stageSelect: { label: "当前任务", options: ["找非标商业共创", "首店/主题店落地", "快闪/联名活动", "城市巡回/跨城拓展", "门店模型验证", "内容曝光合作"] },
    brandGoalSelect: { label: "品牌调性", options: ["咖啡烘焙茶饮", "创意餐饮餐酒", "文创/城市礼物", "设计师/主理人零售", "宠物户外运动", "展览/内容IP", "夜经济/音乐社交", "生活方式集合"] },
  },
};

const brandHiddenFields = ["asset", "space", "owner", "operator", "operation"];

const brandDnaTypes = {
  LSBE: { name: "本地稳态小店型", line: "适合先进入本地高复访场景，用产品稳定性和服务半径建立口碑。" },
  LSBR: { name: "本地活动承接型", line: "适合在本地商业里做活动、快闪和社群节点，但核心仍是稳定小店模型。" },
  LSME: { name: "在地主理深耕型", line: "适合与懂本地文化和街区气质的商业长期共创，形成有辨识度的主理人据点。" },
  LSMR: { name: "在地社群共创型", line: "适合靠主理人表达、社群活动和本地内容持续制造复访。" },
  LCBE: { name: "产品出片店型", line: "适合进入有拍摄面和传播面的商业，但门店模型需要保持清晰可复制。" },
  LCBR: { name: "本地快闪爆发型", line: "适合用本地话题、快闪和联名先测试热度，再决定是否长期入驻。" },
  LCME: { name: "内容主理旗舰型", line: "适合用空间表达和主理人内容做城市识别点，但需要稳定运营承接。" },
  LCMR: { name: "城市话题共创型", line: "适合与非标商业一起做活动、展陈、联名和社交传播，是强内容共创品牌。" },
  DSBE: { name: "跨城标准复制型", line: "适合进入多城市非标商业，但要先验证面积模型、供应链和人员复制能力。" },
  DSBR: { name: "巡回快闪拓展型", line: "适合用巡回、快闪和轻量门店进入不同城市，降低正式开店风险。" },
  DSME: { name: "跨城主理精选型", line: "适合在不同城市选择调性匹配的非标项目做精选店或联合店。" },
  DSMR: { name: "跨城社群联名型", line: "适合用社群和联名在多城市建立品牌识别，但需要较强活动执行力。" },
  DCBE: { name: "内容标准首店型", line: "适合在高曝光城市做标准化首店，用内容传播放大品牌势能。" },
  DCBR: { name: "全国话题快闪型", line: "适合短周期、高传播、跨城巡回的主题快闪或联名项目。" },
  DCME: { name: "城市目的地主理型", line: "适合与城市级非标商业共建旗舰店、主题店或内容目的地。" },
  DCMR: { name: "高传播共创旗舰型", line: "适合与商业团队深度共创，既要强内容也要强运营，是招商连接价值最高的一类。" },
};

const commercialDisplayTypes = {
  dailyBase: {
    codes: ["LSBE", "LSBR", "LCBE"],
    name: "社区稳态型",
    line: "先把附近人群每天为什么来讲清楚，再逐步叠加内容和传播。",
    strategy: "适合用便利餐饮、家庭服务、生活配套、稳定咖啡和基础零售建立日常复访。",
    risk: "容易把空间做得很好看，但日常消费承接不足；要先算清高频刚需和复访理由。",
  },
  localMaker: {
    codes: ["LSME", "LSMR", "LCME", "LCMR"],
    name: "在地主理生长型",
    line: "靠本地品牌、主理人小店和社群内容慢慢长出来，是非标商业最常见的生长型。",
    strategy: "适合咖啡烘焙、在地餐饮、花艺植物、买手零售、宠物友好和周末市集。",
    risk: "主理人品牌抗风险弱，招商条件和租金不能按成熟连锁口径压迫。",
  },
  localEvent: {
    codes: ["LCBR"],
    name: "社区事件型",
    line: "平时服务片区，周末靠活动、市集、外摆和社交内容制造新鲜感。",
    strategy: "适合亲子、宠物、轻运动、日咖夜酒、小型展演和品牌快闪。",
    risk: "活动一停，人气就掉；需要明确年度运营日历和现场管理能力。",
  },
  regionalTraffic: {
    codes: ["DSBE", "DSBR", "DCBE"],
    name: "区域流量型",
    line: "更依赖跨区到访和大体量承接，需要主力品牌、动线和效率共同撑住。",
    strategy: "适合区域型购物中心、交通节点、景区入口、大型综合体和成熟主力店组合。",
    risk: "体量大但内容散时，容易只剩客流不剩记忆点；必须明确热区组织。",
  },
  verticalCommunity: {
    codes: ["DSME", "DSMR"],
    name: "圈层目的地型",
    line: "不是所有人都会来，但特定圈层愿意专程来。",
    strategy: "适合骑行、滑板、户外、宠物、音乐、买手、设计零售和垂类集合店。",
    risk: "圈层太窄会限制客流，需要搭配大众餐饮和日常消费承接。",
  },
  cityEvent: {
    codes: ["DCBR"],
    name: "城市事件标杆型",
    line: "要让城市知道这里一直有事发生，用首店、展览、夜经济和活动持续制造声量。",
    strategy: "适合首店品牌、展览活动、夜间餐饮、品牌发布和高传播零售。",
    risk: "只做开业爆点不做持续内容，热度会快速回落。",
  },
  curatedFirstStore: {
    codes: ["DCME"],
    name: "策展首店型",
    line: "用强内容和强品牌稀缺性，做一个城市里的新物种。",
    strategy: "适合艺术商业、文化园区、城市更新、高端买手和品牌首店集群。",
    risk: "调性越强，客群越窄；需要补足餐饮和日常消费。",
  },
  contentLandmark: {
    codes: ["DCMR"],
    name: "内容地标主理型",
    line: "项目、品牌、活动和社群一起成为内容，是非标商业的高阶形态。",
    strategy: "适合强视觉空间、主理人矩阵、策展零售、夜间经济和城市级社交事件。",
    risk: "最有传播力，也最吃团队能力；招商、运营、媒体和现场管理都不能弱。",
  },
};

const brandDisplayTypes = {
  localStable: {
    codes: ["LSBE", "LSBR", "LCBE"],
    name: "本地稳定小店型",
    line: "先在本地高复访场景站稳，用产品稳定性建立口碑。",
    risk: "传播爆发不一定强，适合用门店表现和本地口碑说服商业方。",
  },
  localMaker: {
    codes: ["LSME", "LSMR", "LCME", "LCMR"],
    name: "在地主理共创型",
    line: "适合和懂本地文化、街区气质、社群运营的商业长期共创。",
    risk: "如果商业方只想填铺，不愿意共创内容，这类品牌会很难发挥。",
  },
  visualProduct: {
    codes: ["LCBR", "DCBR"],
    name: "话题快闪爆发型",
    line: "适合用视觉、产品、快闪和联名先测试热度。",
    risk: "热度周期短，需要明确快闪后的复购、转化或长期店策略。",
  },
  crossStandard: {
    codes: ["DSBE", "DSBR", "DCBE"],
    name: "跨城标准复制型",
    line: "适合进入多城市非标商业，但要先验证面积模型、供应链和人员复制能力。",
    risk: "标准化能力不足时，跨城速度越快，履约风险越高。",
  },
  crossCommunity: {
    codes: ["DSME", "DSMR"],
    name: "跨城圈层联名型",
    line: "适合用社群、圈层和联名在不同城市建立识别。",
    risk: "圈层声量不等于门店经营，要同时看活动能力和单店模型。",
  },
  flagshipCoCreate: {
    codes: ["DCME", "DCMR"],
    name: "内容旗舰共创型",
    line: "适合与城市级非标商业共建旗舰店、主题店或内容目的地。",
    risk: "招商价值最高，但对品牌内容、团队和商业运营配合要求也最高。",
  },
};

const commercialEdgeTypes = {
  LSBR: {
    adjacent: "社区事件型",
    signal: "运营节奏偏高频",
    note: "偏社区稳态型，但运营节奏偏高频，也带社区事件属性。",
  },
  LCBE: {
    adjacent: "社区事件型",
    signal: "传播力偏出圈",
    note: "偏社区稳态型，但传播力偏出圈，后续要观察是否向社区事件型转化。",
  },
  DCBE: {
    adjacent: "城市事件标杆型",
    signal: "传播力偏出圈",
    note: "偏区域流量型，但传播力偏出圈，也接近城市事件标杆型。",
  },
};

const roleCopy = {
  commercial: {
    heroTitle: "测DNA找到同类坐标",
    heroLead: "回答 3 个问题，给出项目类型、最像样本和可参考的操盘动作。",
    nameLabel: "项目名称",
    cityLabel: "城市 / 片区",
    button: "生成初读结果",
    resultSubject: "项目",
    resultObject: "品牌伙伴",
    matchLead: "商业端不只是找品牌填铺，而是找到能共同制造内容、客群和复访理由的品牌伙伴。",
  },
  brand: {
    heroTitle: "测品牌 DNA\n找适合场地",
    heroLead: "回答 3 个问题，先看适合你的非标商业样本，再决定是否发合作卡。",
    nameLabel: "品牌名称",
    cityLabel: "品牌发源 / 重点城市",
    button: "生成初读结果",
    resultSubject: "品牌",
    resultObject: "商业场域",
    matchLead: "品牌端不只是找空铺，而是找到调性一致、运营节奏能接住、客群能够互相放大的商业场域。",
  },
};

const diagnosisRules = [
  {
    name: "城市客厅型",
    test: m => m.repeat >= m.media && m.repeat >= m.leasing,
    copy: "你的项目更适合先做日常复访理由，再用内容和活动持续放大人气。",
  },
  {
    name: "内容目的地型",
    test: m => m.media >= 62 || m.content >= 64,
    copy: "你的项目需要一个足够容易被看见、被拍摄、被转发的核心记忆点。",
  },
  {
    name: "主理人共创型",
    test: m => m.leasing >= 62,
    copy: "你的项目可以用主理人、首店和非标品牌打开识别度，但要控制招商难度。",
  },
  {
    name: "稳态运营型",
    test: () => true,
    copy: "你的项目更适合先把基础客流、动线和经营风险做稳，再逐步叠加内容。",
  },
];
