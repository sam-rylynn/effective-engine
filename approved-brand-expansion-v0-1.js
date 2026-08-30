(function attachApprovedBrandExpansionV01(globalScope) {
  "use strict";

  const system = globalScope.COMMERCIAL_DNA_SYSTEM;
  if (!system || !Array.isArray(system.brandLibrary)) return;

  function deepFreeze(value) {
    if (!value || typeof value !== "object" || Object.isFrozen(value)) return value;
    Object.values(value).forEach(deepFreeze);
    return Object.freeze(value);
  }

  const extension = {
    "version": "approved-brand-expansion-v0.1",
    "approvedAt": "2026-08-30",
    "brands": [
      {
        "id": "brand-expansion-20260829-014",
        "name": "ZZER只二透明仓",
        "city": "上海 · 深圳",
        "category": "循环公益与可持续零售",
        "subCategory": "仓储式二手奢侈品循环零售",
        "brandRole": "透明仓自助循环零售",
        "maturity": "成长阶段",
        "tags": [
          "二手循环",
          "透明仓",
          "自助零售",
          "集中质检",
          "大空间"
        ],
        "fitDNA": [
          "DCMR",
          "DCBR"
        ],
        "spaceDemand": "适合可承接集中陈列、质检说明与自主选购动线的大体量空间。",
        "fitNote": "观察透明仓如何用空间和信息透明降低二手交易摩擦。",
        "risk": "不把线上平台规模当作线下门店数；完整线下网络仍待官方目录。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海 · 深圳"
      },
      {
        "id": "brand-expansion-20260829-032",
        "name": "佳作书局 Paragon Book Gallery",
        "city": "北京",
        "category": "文化内容与独立空间",
        "subCategory": "艺术与亚洲研究专业书店",
        "brandRole": "专业出版物与策展式阅读空间",
        "maturity": "成熟阶段",
        "tags": [
          "艺术书店",
          "专业出版",
          "亚洲研究",
          "策展陈列",
          "文化活动"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合艺术园区、文化街区与能够承接讲座展览的专业阅读空间。",
        "fitNote": "观察专业选书、出版与艺术社区如何形成稳定复访。",
        "risk": "当前只计已核验的798艺术区点位，不外推全国门店总数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "北京"
      },
      {
        "id": "brand-expansion-20260829-038",
        "name": "戴春林",
        "city": "扬州",
        "category": "地方风物与城市礼物",
        "subCategory": "扬州古法香妆与地方礼物",
        "brandRole": "非遗香妆零售与工艺体验",
        "maturity": "成熟阶段",
        "tags": [
          "扬州",
          "古法香妆",
          "非遗",
          "地方礼物",
          "历史街区"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合历史街区、文旅项目与能够承接气味和工艺体验的零售空间。",
        "fitNote": "观察地方手艺如何通过产品、气味与门店体验进入当代日常。",
        "risk": "品牌历史存在多种叙述；当前完整门店数未公开，不作估算。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "扬州"
      },
      {
        "id": "brand-expansion-20260829-040",
        "name": "金陵金箔",
        "city": "南京",
        "category": "地方风物与城市礼物",
        "subCategory": "南京金箔非遗与文创体验",
        "brandRole": "金箔零售、工艺展示与品牌体验",
        "maturity": "成熟阶段",
        "tags": [
          "南京",
          "金箔",
          "非遗",
          "地方礼物",
          "品牌体验馆"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合地方文化项目、非遗体验空间与可承接工艺展示的城市礼物场景。",
        "fitNote": "观察工业技艺如何转化为公众可理解、可体验、可带走的地方内容。",
        "risk": "图库第3至5张是中国金箔艺术馆品牌体验空间，不计入零售门店数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "南京"
      },
      {
        "id": "brand-expansion-20260829-045",
        "name": "Peiping Machine 北平机器",
        "city": "北京",
        "category": "创意餐饮与全天候社交",
        "subCategory": "在地精酿与街区餐酒",
        "brandRole": "中央酿造连接一店一场所的餐酒品牌",
        "maturity": "成长阶段",
        "tags": [
          "北京",
          "精酿",
          "旧厂",
          "胡同",
          "城市活动"
        ],
        "fitDNA": [
          "LCMR",
          "DCMR"
        ],
        "spaceDemand": "适合旧厂、胡同与街区更新中能够承接酿造、餐饮和公共活动的空间。",
        "fitNote": "观察中央酿造能力如何支撑不同场所的在地表达。",
        "risk": "门店数采用品牌采访的保守下限，具体店型仍须逐店核验。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "北京"
      },
      {
        "id": "brand-candidate-20260828-001",
        "name": "Ensue",
        "city": "深圳",
        "category": "创意餐饮与全天候社交",
        "subCategory": "岭南当代精致餐饮",
        "brandRole": "以华南物产和生物多样性为核心的目的地餐厅",
        "maturity": "成熟阶段",
        "tags": [
          "深圳",
          "岭南食材",
          "精致餐饮",
          "在地风味",
          "目的地餐厅"
        ],
        "fitDNA": [
          "DSMR",
          "DSME"
        ],
        "spaceDemand": "适合高层景观、目的地商业与能够承接完整餐饮叙事的项目。",
        "fitNote": "观察在地物产如何通过菜单、服务与空间形成目的性到访。",
        "risk": "只计当前可核验的深圳一处点位；地址变化继续以品牌官方信息为准。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "深圳"
      },
      {
        "id": "brand-candidate-20260828-011",
        "name": "吾时物刻",
        "city": "杭州",
        "category": "地方风物与城市礼物",
        "subCategory": "非遗文创与城市礼物",
        "brandRole": "设计师、艺术家与守艺人共创的文创品牌",
        "maturity": "成长阶段",
        "tags": [
          "杭州",
          "非遗文创",
          "城市礼物",
          "在地共创",
          "千店千面"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合历史街区、交通节点与能够结合在地主题的城市礼物空间。",
        "fitNote": "观察非遗资源如何通过一景一店转化为可使用的当代礼物。",
        "risk": "图片和门店资料按具体点位绑定，不把母公司项目数当作品牌门店数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "杭州"
      },
      {
        "id": "brand-candidate-20260828-034",
        "name": "三影堂摄影艺术中心",
        "city": "北京 · 厦门",
        "category": "文化内容与独立空间",
        "subCategory": "摄影与影像公共文化空间",
        "brandRole": "展览、研究、教育与出版协同的摄影文化平台",
        "maturity": "成熟阶段",
        "tags": [
          "摄影",
          "影像艺术",
          "展览",
          "教育",
          "公共文化"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合艺术园区与可持续承接展览、教育、出版和公共活动的文化空间。",
        "fitNote": "观察专业机构如何用持续内容建立创作者与公众之间的文化关系。",
        "risk": "按摄影文化空间品牌呈现，不包装成普通零售商户。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "北京 · 厦门"
      },
      {
        "id": "brand-candidate-20260828-026",
        "name": "BACKROAD 户外集合店·长江中路店",
        "city": "合肥",
        "category": "宠物户外与运动社群",
        "subCategory": "户外集合零售与城市社群",
        "brandRole": "老厂房中的装备体验、餐吧与社群空间",
        "maturity": "成长阶段",
        "tags": [
          "合肥",
          "户外集合",
          "老厂房",
          "装备体验",
          "社群活动"
        ],
        "fitDNA": [
          "DSMR",
          "LCME"
        ],
        "spaceDemand": "适合老厂房、街区更新与能够承接装备试用、餐吧和社群活动的大空间。",
        "fitNote": "观察户外零售如何通过真实试用和社群活动连接城市与自然。",
        "risk": "本条只描述合肥长江中路指定店型，不外推BACKROAD品牌网络。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "合肥"
      },
      {
        "id": "brand-expansion-20260829-004",
        "name": "圆梦·一角咖",
        "city": "成都",
        "category": "社区服务与修复",
        "subCategory": "无障碍就业咖啡与移动服务",
        "brandRole": "以固定店和移动咖啡车承接残障青年就业",
        "maturity": "成长阶段",
        "tags": [
          "成都",
          "听障就业",
          "无障碍点单",
          "移动咖啡",
          "融合服务"
        ],
        "fitDNA": [
          "LSBE",
          "LCME"
        ],
        "spaceDemand": "适合政务中心、社区公共空间与能够承接融合就业服务的街区节点。",
        "fitNote": "观察就业支持如何通过日常消费场景自然进入社区。",
        "risk": "门店数只采用2025年报道的已确认下限，不外推当前完整网络。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "成都"
      },
      {
        "id": "brand-expansion-20260829-007",
        "name": "锐博康复",
        "city": "北京 · 上海 · 杭州 · 广州 · 深圳",
        "category": "社区服务与修复",
        "subCategory": "运动康复与连续训练服务",
        "brandRole": "跨城市直营康复医疗与运动训练机构",
        "maturity": "成熟阶段",
        "tags": [
          "运动康复",
          "专业评估",
          "阶段治疗",
          "运动训练",
          "多城直营"
        ],
        "fitDNA": [
          "LSMR",
          "DCME"
        ],
        "spaceDemand": "适合社区商业、运动场馆周边与可容纳评估治疗及训练的大空间。",
        "fitNote": "观察医疗边界清晰的康复服务如何形成长期复访。",
        "risk": "不把品牌方法写成疗效保证，具体医疗服务以执业机构和医生诊断为准。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "北京 · 上海 · 杭州 · 广州 · 深圳"
      },
      {
        "id": "brand-expansion-20260829-008",
        "name": "Rebody 换个身体",
        "city": "深圳 · 香港 · 武汉",
        "category": "社区服务与修复",
        "subCategory": "一对一肌骨康复与运动回归",
        "brandRole": "连接治疗与训练的一对一康复中心",
        "maturity": "成长阶段",
        "tags": [
          "肌骨评估",
          "一对一康复",
          "体态",
          "术后恢复",
          "运动回归"
        ],
        "fitDNA": [
          "LSMR",
          "DCME"
        ],
        "spaceDemand": "适合社区商业、办公区与能够承接评估、治疗和运动训练的复合服务空间。",
        "fitNote": "观察一对一连续方案如何承接从疼痛管理到运动回归的需求。",
        "risk": "不把官网案例量或效果表述改写成确定疗效。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "深圳 · 香港 · 武汉"
      },
      {
        "id": "brand-expansion-20260829-015",
        "name": "Times Remake",
        "city": "上海",
        "category": "循环公益与可持续零售",
        "subCategory": "古着档案与手工再造",
        "brandRole": "以古着选品和Remake延长衣物生命周期",
        "maturity": "成长阶段",
        "tags": [
          "上海",
          "古着",
          "Remake",
          "旧衣再造",
          "档案零售"
        ],
        "fitDNA": [
          "DCBR",
          "LCBE"
        ],
        "spaceDemand": "适合街区小店、旧建筑与能够展示选品档案及改造工艺的零售空间。",
        "fitNote": "观察再造工艺如何把旧衣的年代信息转化为当代消费价值。",
        "risk": "只绑定上海富民路当前可核验店，不把历史快闪或外地报道计入门店数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260829-021",
        "name": "ENCOMPASS",
        "city": "上海 · 昆明",
        "category": "循环公益与可持续零售",
        "subCategory": "旧衣旧鞋再造与复合策展空间",
        "brandRole": "以手工Remake连接零售、咖啡、唱片与工坊",
        "maturity": "成长阶段",
        "tags": [
          "Remake",
          "旧衣再造",
          "复合零售",
          "工坊",
          "策展"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合青年街区、独栋旧建筑与能够承接零售、工坊、咖啡和活动的多层空间。",
        "fitNote": "观察改造过程公开可见后，可持续零售如何形成内容和社群。",
        "risk": "当前完整门店数仍缺官方目录；不把历史租户或昆明试水空间写成当前标准门店。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海 · 昆明"
      },
      {
        "id": "brand-candidate-20260828-009",
        "name": "聚福品·福州有礼",
        "city": "福州",
        "category": "地方风物与城市礼物",
        "subCategory": "福州城市礼物公共消费品牌",
        "brandRole": "以准入与溯源组织地方礼物的公共品牌",
        "maturity": "成长阶段",
        "tags": [
          "福州",
          "城市礼物",
          "老字号",
          "非遗",
          "质量追溯"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合历史街区、文旅节点与能够聚合地方产品及主题展销的城市礼物空间。",
        "fitNote": "观察公共品牌如何用准入和溯源降低游客选择地方礼物的成本。",
        "risk": "官方口径是5个网点加8个品牌专柜，不能合并表述为13家标准门店。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "福州"
      },
      {
        "id": "brand-candidate-20260828-021",
        "name": "12XX文艺研究所·永庆坊店",
        "city": "广州",
        "category": "文化内容与独立空间",
        "subCategory": "广州城市叙事与文创零售",
        "brandRole": "把街景、方言和人物转译为日常文创",
        "maturity": "成长阶段",
        "tags": [
          "广州",
          "永庆坊",
          "城市文创",
          "方言",
          "街景"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合历史街区、骑楼院落与能够承接城市文创陈列的紧凑店铺。",
        "fitNote": "观察城市叙事如何从内容转化为可带走的日常物件。",
        "risk": "本条只绑定永庆坊线下首店，不外推1200bookshop其他空间或品牌网络。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "广州"
      },
      {
        "id": "brand-expansion-20260829-026",
        "name": "UPPERVOID 二普纬度",
        "city": "上海 · 北京 · 成都 · 南京 · 佳木斯",
        "category": "宠物户外与运动社群",
        "subCategory": "中国户外装备与城市生活",
        "brandRole": "以自主研发和城市门店承接中国户外场景",
        "maturity": "成长阶段",
        "tags": [
          "中国户外",
          "自主研发",
          "城市门店",
          "长期使用",
          "完整品类"
        ],
        "fitDNA": [
          "DSMR",
          "LCMR"
        ],
        "spaceDemand": "适合城市街区、目的地商业与能够承接完整户外品类和场景体验的大空间。",
        "fitNote": "观察中国户外品牌如何把真实使用场景、产品研发与城市审美放进同一门店。",
        "risk": "城市范围来自媒体深访，不等于当前完整门店目录；不推算实时总店数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海 · 北京 · 成都 · 南京 · 佳木斯"
      },
      {
        "id": "brand-expansion-20260829-043",
        "name": "TripSmith 行匠",
        "city": "贵阳 · 重庆",
        "category": "创意餐饮与全天候社交",
        "subCategory": "贵州风物精酿与街区餐酒",
        "brandRole": "以自然发酵和在地食材连接不同街区",
        "maturity": "成长阶段",
        "tags": [
          "贵阳",
          "重庆",
          "贵州风物",
          "自然发酵",
          "街区餐酒"
        ],
        "fitDNA": [
          "LCMR",
          "DSMR"
        ],
        "spaceDemand": "适合历史街区、社区商业与能够承接餐酒、外摆和小型社交活动的空间。",
        "fitNote": "观察地方食材与不同店型如何共同建立城市精酿品牌。",
        "risk": "9家是2025年媒体采访时点口径，并非官方实时目录；前端只展示已确认城市，不显示总数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "贵阳 · 重庆"
      },
      {
        "id": "brand-candidate-20260828-029",
        "name": "AITASHOP·北京751店",
        "city": "北京",
        "category": "宠物户外与运动社群",
        "subCategory": "自行车零售维修与骑行社群",
        "brandRole": "把零售、维修、咖啡和社群组织成骑行文化中心",
        "maturity": "成长阶段",
        "tags": [
          "北京",
          "自行车",
          "专业维修",
          "工业遗存",
          "骑行社群"
        ],
        "fitDNA": [
          "DSMR",
          "LCMR"
        ],
        "spaceDemand": "适合工业遗存、运动街区与能够承接零售、维修、咖啡和社群交流的复合空间。",
        "fitNote": "观察专业服务如何让自行车零售从商品交易变成持续社群。",
        "risk": "本条只绑定北京751这一具体旗舰店型，不外推AITASHOP完整品牌网络。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "北京"
      },
      {
        "id": "brand-candidate-20260828-032",
        "name": "镜中书店",
        "city": "长沙",
        "category": "文化内容与独立空间",
        "subCategory": "在地主题书目与文化活动",
        "brandRole": "以主题书目和长期活动连接岳麓山下读者",
        "maturity": "成长阶段",
        "tags": [
          "长沙",
          "独立书店",
          "主题书目",
          "在地内容",
          "夜间交流"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合山地街区、校园周边与能够承接阅读、展览和夜间交流的文化空间。",
        "fitNote": "观察持续编辑的书目和活动如何建立在地读者关系。",
        "risk": "当前只计岳麓山西侧一处已确认空间；地图营业状态仍需持续复核。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "长沙"
      },
      {
        "id": "brand-candidate-20260828-035",
        "name": "ELEATERY 大象里",
        "city": "深圳",
        "category": "创意餐饮与全天候社交",
        "subCategory": "茶酒餐与社区日常社交",
        "brandRole": "用茶、酒、餐连接办公区与社区日常",
        "maturity": "成长阶段",
        "tags": [
          "深圳",
          "茶酒餐",
          "社区社交",
          "全天候",
          "城市邻里"
        ],
        "fitDNA": [
          "LCMR",
          "DSMR"
        ],
        "spaceDemand": "适合办公区、社区商业与能够承接全天候餐饮及松弛社交的多层空间。",
        "fitNote": "观察茶酒餐如何覆盖一天的不同时段，并让陌生顾客形成邻里感。",
        "risk": "公开资料提及首店和第二店，但缺少官方当前目录；前端不显示总店数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "深圳"
      },
      {
        "id": "brand-expansion-20260829-010",
        "name": "粒粒堡 Lilliput",
        "city": "上海",
        "category": "社区服务与修复",
        "subCategory": "亲子餐饮与家庭第三空间",
        "brandRole": "把餐饮、主题游乐与亲子活动组织在同一空间",
        "maturity": "成长阶段",
        "tags": [
          "上海",
          "亲子餐饮",
          "家庭第三空间",
          "主题游乐",
          "复合体验"
        ],
        "fitDNA": [
          "LSBE",
          "DSMR"
        ],
        "spaceDemand": "适合家庭客群稳定、可承接餐饮与儿童活动分区的社区和区域商业。",
        "fitNote": "观察亲子餐饮如何同时照顾儿童探索、陪伴与家长停留。",
        "risk": "图库为跨年份品牌历史空间，不对应2026年七宝新店现状；当前完整门店数不作推算。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海"
      },
      {
        "id": "brand-expansion-20260829-012",
        "name": "易改衣",
        "city": "广州 · 深圳 · 上海 · 北京",
        "category": "社区服务与修复",
        "subCategory": "改衣修复与社区手艺服务",
        "brandRole": "连接资深裁缝、工艺中心与多渠道收送的改衣服务",
        "maturity": "成熟阶段",
        "tags": [
          "改衣",
          "衣物修复",
          "裁缝手艺",
          "预约服务",
          "循环生活"
        ],
        "fitDNA": [
          "LSMR",
          "DCME"
        ],
        "spaceDemand": "适合高密度社区、办公区与可承接量体、试衣和工艺展示的小型服务空间。",
        "fitNote": "观察传统非标手艺如何通过预约、交付和返改机制变成稳定服务。",
        "risk": "官方空间视觉没有逐店地址绑定；官网未公开当前门店总数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "广州 · 深圳 · 上海 · 北京"
      },
      {
        "id": "brand-expansion-20260829-024",
        "name": "OFF SPACE",
        "city": "杭州",
        "category": "宠物户外与运动社群",
        "subCategory": "户外集合零售与城市生活",
        "brandRole": "以专业选品和可停留空间降低户外入门门槛",
        "maturity": "成长阶段",
        "tags": [
          "杭州",
          "户外集合",
          "专业选品",
          "城市生活",
          "社群交流"
        ],
        "fitDNA": [
          "DSMR",
          "LCMR"
        ],
        "spaceDemand": "适合公园周边、社区商业与能够承接装备试用和交流的开放空间。",
        "fitNote": "观察专业户外选品如何从卖装备延伸为城市生活提案。",
        "risk": "图库只代表2022年杭州滨江历史店型，不冒充2025年亲橙Park店或当前网络。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "杭州"
      },
      {
        "id": "brand-candidate-20260828-003",
        "name": "熊猫邮局",
        "city": "成都 · 四川省内其他景区",
        "category": "地方风物与城市礼物",
        "subCategory": "熊猫文化与城市邮政礼物",
        "brandRole": "以书信、手信和城市文化组织邮政体验",
        "maturity": "成熟阶段",
        "tags": [
          "成都",
          "熊猫文化",
          "城市礼物",
          "邮政体验",
          "在地文创"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合文旅街区、城市门户与能够承接邮寄服务和文创陈列的空间。",
        "fitNote": "观察寄递服务如何重新成为有温度的城市文化表达。",
        "risk": "公开14个点位含直营、授权和铺货三种模式，前端不合并显示为标准门店总数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "成都 · 四川省内其他景区"
      },
      {
        "id": "brand-candidate-20260828-004",
        "name": "黄远堂凤梨酥",
        "city": "厦门",
        "category": "地方风物与城市礼物",
        "subCategory": "厦门凤梨酥与地方伴手礼",
        "brandRole": "以单一糕点、在地设计与门店体验形成城市礼物",
        "maturity": "成熟阶段",
        "tags": [
          "厦门",
          "凤梨酥",
          "伴手礼",
          "闽南花砖",
          "地方故事"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合历史街区、文旅节点与能够承接试吃和地方故事陈列的小型零售空间。",
        "fitNote": "观察单一地方食品如何通过品质、设计与叙事成为城市礼物。",
        "risk": "公开15家宣传缺少当前官方门店表，不在前端显示为实时总数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "厦门"
      },
      {
        "id": "brand-candidate-20260828-007",
        "name": "苏州采芝斋",
        "city": "苏州",
        "category": "地方风物与城市礼物",
        "subCategory": "苏式糖果茶食与透明作坊",
        "brandRole": "以老字号手艺、透明制作与新产品连接城市记忆",
        "maturity": "成熟阶段",
        "tags": [
          "苏州",
          "老字号",
          "苏式糖果",
          "透明作坊",
          "地方礼物"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合历史街区、文旅商业与能够展示制作过程的地方食品空间。",
        "fitNote": "观察传统口味和现场制作如何共同维持老字号的可信度。",
        "risk": "图库集中在观前街旗舰店并跨年份，不推导当前完整门店网络。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "苏州"
      },
      {
        "id": "brand-candidate-20260828-008",
        "name": "同利肉燕",
        "city": "福州",
        "category": "地方风物与城市礼物",
        "subCategory": "福州肉燕与手艺传承",
        "brandRole": "以传统肉燕、标准化生产与老店体验连接地方饮食",
        "maturity": "成熟阶段",
        "tags": [
          "福州",
          "肉燕",
          "老字号",
          "手艺传承",
          "地方饮食"
        ],
        "fitDNA": [
          "LCME",
          "DSMR"
        ],
        "spaceDemand": "适合历史街区、地方餐饮集聚区与能够展示手作过程的紧凑空间。",
        "fitNote": "观察地方小吃如何在品质、生产与文化展示之间建立传承。",
        "risk": "旧报道的4家口径不视为当前门店总数；图库只绑定南后街老铺。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "福州"
      },
      {
        "id": "brand-candidate-20260828-012",
        "name": "善淘 Buy42",
        "city": "上海",
        "category": "循环公益与可持续零售",
        "subCategory": "慈善二手与融合就业",
        "brandRole": "把闲置捐赠、二手零售、就业支持与社区活动连成循环",
        "maturity": "成熟阶段",
        "tags": [
          "上海",
          "二手循环",
          "慈善零售",
          "融合就业",
          "社区活动"
        ],
        "fitDNA": [
          "DCBR",
          "LSBE"
        ],
        "spaceDemand": "适合社区商业、街区小店与可承接捐赠、整理、零售和活动的空间。",
        "fitNote": "观察公益目标如何通过日常零售形成可持续的社区机制。",
        "risk": "图库跨年份和合作店型，图片角色逐张标注，不合并为同一门店现状。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海"
      },
      {
        "id": "brand-candidate-20260828-014",
        "name": "多抓鱼循环商店",
        "city": "上海",
        "category": "循环公益与可持续零售",
        "subCategory": "二手书服与循环商店",
        "brandRole": "以鉴定、翻新和统一定价降低二手交易摩擦",
        "maturity": "成熟阶段",
        "tags": [
          "上海",
          "二手书",
          "二手服饰",
          "循环商店",
          "线下寻宝"
        ],
        "fitDNA": [
          "DCBR",
          "LCME"
        ],
        "spaceDemand": "适合街区更新、旧建筑与能够承接大量分类陈列和自由探索的空间。",
        "fitNote": "观察标准化后台如何支撑前台松弛的二手寻宝体验。",
        "risk": "图库只作为2021年安福路历史空间资料，不暗示相同布局仍在延续。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海"
      },
      {
        "id": "brand-candidate-20260828-016",
        "name": "SToP SHoP 停停商店",
        "city": "上海",
        "category": "循环公益与可持续零售",
        "subCategory": "可持续选品与零拷社区店",
        "brandRole": "把零拷、手作、可持续选品与社区内容放在同一小店",
        "maturity": "成长阶段",
        "tags": [
          "上海",
          "零拷",
          "可持续选品",
          "民族手作",
          "社区内容"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合社区街区与能承接小体量零售、手作陈列和交流活动的空间。",
        "fitNote": "观察可持续选择如何从理念转化为普通人的日常行动。",
        "risk": "图库来自不同门店版本，图片角色按版本标注，不混写为同一现状。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海"
      },
      {
        "id": "brand-candidate-20260828-024",
        "name": "ABC CAMPING COUNTRY",
        "city": "苏州",
        "category": "宠物户外与运动社群",
        "subCategory": "露营装备与城市户外提案",
        "brandRole": "把装备、服饰与露营生活方式组织为入门体验",
        "maturity": "成长阶段",
        "tags": [
          "苏州",
          "露营装备",
          "城市户外",
          "生活提案",
          "历史店型"
        ],
        "fitDNA": [
          "DSMR",
          "LCMR"
        ],
        "spaceDemand": "适合目的地商业、户外主题街区与能承接装备体验的大型零售空间。",
        "fitNote": "观察户外零售如何帮助城市人理解装备与真实使用场景。",
        "risk": "本条只研究苏州诚品2021历史店型，不外推当前全国门店网络。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "苏州"
      },
      {
        "id": "brand-candidate-20260828-050",
        "name": "声音共和 Livehouse",
        "city": "广州",
        "category": "夜间音乐与青年文化",
        "subCategory": "现场音乐与青年文化空间",
        "brandRole": "以持续演出和内容选择建立城市青年文化聚点",
        "maturity": "成长阶段",
        "tags": [
          "广州",
          "Livehouse",
          "现场音乐",
          "青年文化",
          "城市夜间"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合文化园区、夜间街区与能够承接中型演出及公共活动的空间。",
        "fitNote": "观察持续的音乐选择如何让场地成为城市里的文化关系。",
        "risk": "图库只代表海珠湖店2024三周年场景，不冒充广州塔店或2026现状。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "广州"
      },
      {
        "id": "brand-candidate-20260828-018",
        "name": "融设计图书馆",
        "city": "杭州",
        "category": "文化内容与独立空间",
        "subCategory": "传统材料研究与设计图书馆",
        "brandRole": "面向设计师开放传统材料、工艺档案与研究空间",
        "maturity": "成熟阶段",
        "tags": [
          "杭州",
          "传统材料",
          "工艺研究",
          "设计图书馆",
          "乡村公共文化"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合乡村更新、文化园区与能够承接材料档案、研究和公众参观的独立空间。",
        "fitNote": "观察传统材料研究如何从专业档案转化为设计与公众都能使用的内容。",
        "risk": "本条只绑定杭州青山村东坞礼堂馆址，不把研究项目或合作空间计作门店。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "杭州"
      },
      {
        "id": "brand-candidate-20260828-019",
        "name": "Fotografiska Shanghai",
        "city": "上海",
        "category": "文化内容与独立空间",
        "subCategory": "摄影展览与全天候文化场馆",
        "brandRole": "把摄影展览、餐饮和夜间社群活动组织在同一场馆",
        "maturity": "成熟阶段",
        "tags": [
          "上海",
          "摄影",
          "展览",
          "夜间文化",
          "场馆餐饮"
        ],
        "fitDNA": [
          "DCMR",
          "LCMR"
        ],
        "spaceDemand": "适合滨水更新、历史建筑与能够持续承接展览、餐饮和夜间活动的文化场馆。",
        "fitNote": "观察视觉文化场馆如何通过全天候内容延长停留与复访。",
        "risk": "本条只描述Fotografiska上海馆，不把国际场馆网络合并为上海门店数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "上海"
      },
      {
        "id": "brand-candidate-20260828-039",
        "name": "春台 Spring Patio",
        "city": "成都",
        "category": "创意餐饮与全天候社交",
        "subCategory": "老建筑餐饮与庭院夜生活",
        "brandRole": "以院落和室内层层过渡承接餐饮、酒吧与城市社交",
        "maturity": "成长阶段",
        "tags": [
          "成都",
          "老建筑修复",
          "庭院餐饮",
          "夜间酒吧",
          "城市社交"
        ],
        "fitDNA": [
          "LCMR",
          "DSMR"
        ],
        "spaceDemand": "适合历史街区、老建筑更新与能够连接庭院、餐饮和夜间社交的复合空间。",
        "fitNote": "观察老建筑修复如何成为餐饮、酒吧与城市社交的共同底盘。",
        "risk": "只记录2026年建筑媒体对应的成都一处空间，不外推品牌连锁规模。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "成都"
      },
      {
        "id": "brand-candidate-20260828-022",
        "name": "红山ZOO文创·园内文创商店",
        "city": "南京",
        "category": "文化内容与独立空间",
        "subCategory": "动物故事文创与公众教育",
        "brandRole": "把动物个体故事转化为文创、教育与保护支持",
        "maturity": "成熟阶段",
        "tags": [
          "南京",
          "动物园文创",
          "公众教育",
          "动物保护",
          "在地内容"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合动物园、自然教育项目与能够连接故事陈列、互动和文创消费的空间。",
        "fitNote": "观察动物个体故事如何同时形成情感连接、公众教育与保护回流。",
        "risk": "2024报道数量与2026官方导览点位无法逐一对齐，前端只显示南京，不写门店总数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "南京"
      },
      {
        "id": "brand-candidate-20260828-023",
        "name": "Canpet 犬岛公园",
        "city": "成都",
        "category": "宠物户外与运动社群",
        "subCategory": "城市犬只运动与人宠社交公园",
        "brandRole": "把放绳运动、洗护零售和会员社交放进可控公园",
        "maturity": "成长阶段",
        "tags": [
          "成都",
          "犬只运动",
          "人宠社交",
          "洗护零售",
          "城市公园"
        ],
        "fitDNA": [
          "LSMR",
          "LCME"
        ],
        "spaceDemand": "适合社区商业、公园周边与可承接户外运动、洗护零售和会员活动的场地。",
        "fitNote": "观察宠物服务如何从单次消费转向稳定、可重复的人宠公共生活。",
        "risk": "计数1仅指保利时光里这一处犬岛公园格式，不代表母公司全部宠物业态。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "成都"
      },
      {
        "id": "brand-candidate-20260828-030",
        "name": "PAWCODE 万事可宠",
        "city": "武汉",
        "category": "宠物户外与运动社群",
        "subCategory": "人宠生活方式与复合服务",
        "brandRole": "连接社交、零售、洗护寄养、餐饮和内容共创",
        "maturity": "成长阶段",
        "tags": [
          "武汉",
          "人宠友好",
          "宠物零售",
          "洗护寄养",
          "内容共创"
        ],
        "fitDNA": [
          "LCMR",
          "DSMR"
        ],
        "spaceDemand": "适合街区商业、社区商业与能够容纳人宠社交、服务和内容活动的复合空间。",
        "fitNote": "观察宠物消费如何转向人与宠物共同参与的城市生活方式。",
        "risk": "长期店、快闪与商场柜位边界尚未闭环，前端只显示已核验城市，不写总数。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "武汉"
      },
      {
        "id": "brand-candidate-20260828-031",
        "name": "盘菜生书店",
        "city": "温州",
        "category": "文化内容与独立空间",
        "subCategory": "饮食主题阅读与在地文化编辑",
        "brandRole": "以食物主题连接书店、开放厨房、展览和地方食材",
        "maturity": "成长阶段",
        "tags": [
          "温州",
          "饮食书店",
          "在地文化",
          "开放厨房",
          "主题展览"
        ],
        "fitDNA": [
          "LCME",
          "LCMR"
        ],
        "spaceDemand": "适合菜市场周边、在地街区与能够连接阅读、展览、厨房和地方食材的空间。",
        "fitNote": "观察饮食如何成为重新编辑地方文化和日常关系的入口。",
        "risk": "只记录温州菜市场旁这一处盘菜生书店，不把南食召其他业务计入门店。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "温州"
      },
      {
        "id": "brand-candidate-20260828-033",
        "name": "刀锋书酒馆 × 日时夜影",
        "city": "重庆",
        "category": "文化内容与独立空间",
        "subCategory": "书店餐饮与夜间文化客厅",
        "brandRole": "用餐饮反哺阅读，连接选书、天台活动与夜间停留",
        "maturity": "成长阶段",
        "tags": [
          "重庆",
          "书酒馆",
          "餐饮反哺",
          "绝版书",
          "夜间文化"
        ],
        "fitDNA": [
          "LCMR",
          "DCMR"
        ],
        "spaceDemand": "适合商业中心、文化街区与能够连接阅读、餐饮、活动和夜间停留的多层空间。",
        "fitNote": "观察餐饮收入如何支持阅读内容，并让书店延长为可对话的夜间文化客厅。",
        "risk": "本条只绑定九龙坡当前完整复合店型，已关闭的解放碑旧店不计入。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "重庆"
      },
      {
        "id": "brand-expansion-20260829-006",
        "name": "TopSupport 体思",
        "city": "深圳",
        "category": "社区服务与修复",
        "subCategory": "运动表现训练与恢复服务",
        "brandRole": "把运动训练、物理治疗与运动恢复组织为连续服务",
        "maturity": "成长阶段",
        "tags": [
          "深圳",
          "运动表现",
          "物理治疗",
          "运动恢复",
          "训练中心"
        ],
        "fitDNA": [
          "LSMR",
          "DCME"
        ],
        "spaceDemand": "适合运动场馆周边、社区商业与能容纳评估、训练和恢复设备的专业空间。",
        "fitNote": "观察专业运动训练如何从竞技服务延伸到大众健康与恢复。",
        "risk": "官网确认深圳中心；全国训练基地信号不等同于对公众开放的门店数量。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "深圳"
      },
      {
        "id": "brand-expansion-20260829-035",
        "name": "慢书房",
        "city": "苏州",
        "category": "文化内容与独立空间",
        "subCategory": "独立书房与城市人文交流",
        "brandRole": "以小体量选书、分享和阅读活动嵌入老城日常",
        "maturity": "成长阶段",
        "tags": [
          "苏州",
          "独立书房",
          "老城街巷",
          "阅读活动",
          "人文交流"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合历史街区、园林周边与能够承接选书、阅读和小型分享的紧凑空间。",
        "fitNote": "观察小型阅读空间如何靠持续内容成为城市日常节点。",
        "risk": "图库和计数只绑定观前街店；方塔园店的筹建资料不视为已经开业。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "苏州"
      },
      {
        "id": "brand-expansion-20260829-019",
        "name": "Green Ladies & Green Little",
        "city": "香港",
        "category": "循环公益与可持续零售",
        "subCategory": "女性及儿童二手寄售与就业支持",
        "brandRole": "以社会企业寄售连接衣物循环、女性就业与伦理消费教育",
        "maturity": "成熟阶段",
        "tags": [
          "香港",
          "二手寄售",
          "女性就业",
          "儿童衣物",
          "社会企业"
        ],
        "fitDNA": [
          "DCBR",
          "LSBE"
        ],
        "spaceDemand": "适合社区商业、文化园区与能承接寄售、分类陈列和公众教育的零售空间。",
        "fitNote": "观察二手零售如何同时支持物品循环、女性就业与社区教育。",
        "risk": "图库只对应南丰纱厂116号铺，不混入2016旧店图或其他历史点位。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "香港"
      },
      {
        "id": "brand-expansion-20260829-034",
        "name": "不是书店",
        "city": "青岛",
        "category": "文化内容与独立空间",
        "subCategory": "独立选书与在地文化网络",
        "brandRole": "以城市小店、独立选书和长期活动连接青岛阅读社群",
        "maturity": "成长阶段",
        "tags": [
          "青岛",
          "独立书店",
          "城市小店",
          "阅读计划",
          "文化社群"
        ],
        "fitDNA": [
          "LCME",
          "DCMR"
        ],
        "spaceDemand": "适合社区街区、城市更新与能够承接阅读、沙龙和公共活动的多层文化空间。",
        "fitNote": "观察独立书店如何通过持续选书与活动形成城市文化网络。",
        "risk": "图库只绑定2025年11月开业的李沧蔚央地小飞碟店，不沿用已关闭旧店画面。",
        "sourceKeys": [],
        "verification": "品牌样本",
        "localCity": "青岛"
      }
    ],
    "editorial": {
      "brands": {
        "brand-expansion-20260829-014": {
          "expectedName": "ZZER只二透明仓",
          "canonicalName": "ZZER只二透明仓",
          "aliases": [
            "ZZER只二",
            "只二透明仓"
          ],
          "entityType": "warehouse-resale-format",
          "disposition": "partial",
          "categoryLabel": "循环时尚与透明仓",
          "researchNote": "理念、上海与深圳已确认城市、外部深读及5张透明仓图片已核验；官方当前门店总数仍未公开。",
          "philosophyHeadline": "让二手交易变得可看、可验、可自主决定",
          "philosophy": "用透明陈列、集中质检、扫码查看信息和自助选购，降低二手高价值商品交易的信息不对称。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌官方账号与透明仓现场报道",
          "philosophySourceKeys": [
            "zzer-official-weibo-live-20260829"
          ],
          "learnMore": [
            {
              "title": "仓储式二手店，为啥在购物中心那么火？",
              "displayTitle": "透明仓为何进入购物中心",
              "sourceKey": "zzer-warehouse-analysis-20250523",
              "coverUrl": "https://news.sznews.com/pic/2025-01/02/31420636_1da5afe6-b875-4dac-8a12-26bbed6ce456.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "上海",
              "深圳"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "zzer-confirmed-cities-20250523",
            "scopeCode": "verified-city-set",
            "scopeLabel": "上海 · 深圳",
            "linkUrl": "https://www.amap.com/place/B0KA776IGC"
          }
        },
        "brand-expansion-20260829-032": {
          "expectedName": "佳作书局 Paragon Book Gallery",
          "canonicalName": "佳作书局 Paragon Book Gallery",
          "aliases": [
            "佳作书局",
            "Paragon Book Gallery"
          ],
          "entityType": "specialist-art-bookstore",
          "disposition": "complete",
          "categoryLabel": "艺术书店与专业出版",
          "researchNote": "理念、一个当前可核验点位、专业访谈和5张798/UCCA书店空间图已核验。",
          "philosophyHeadline": "用专业选书连接亚洲研究与当代艺术",
          "philosophy": "以亚洲研究、艺术、设计和视觉文化出版物为核心，通过长期选书、出版与策展式陈列服务专业读者，也让书店成为开放的文化交流空间。",
          "philosophyAttribution": "DNA 编辑缩写｜依据佳作书局经营者直接访谈",
          "philosophySourceKeys": [
            "paragon-cafa-interview-20210209"
          ],
          "learnMore": [
            {
              "title": "庚子年艺术行业表情地图：艺术书店从业者说",
              "displayTitle": "佳作书局如何做专业艺术书店",
              "sourceKey": "paragon-cafa-interview-20210209",
              "coverUrl": "https://static.798artdistrict.com.cn/ux/img/media/shop/image/20200103/8be414a0461abce71aa76de4b2a55ada.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "unit": "个门店",
            "cities": [
              "北京"
            ],
            "citiesStatus": "partial",
            "descriptor": "当前可核验798艺术区E06点位",
            "scopeCode": "verified-current-location",
            "scopeLabel": "798艺术区",
            "observedAt": "2026-08-29",
            "countSourceKey": "paragon-798-directory-live-20260829",
            "citySourceKey": "paragon-798-directory-live-20260829",
            "addressSourceKey": "paragon-798-directory-live-20260829",
            "linkLabel": "官方地址",
            "linkUrl": "https://www.798artdistrict.com.cn/business/detail?shop_id=89"
          }
        },
        "brand-expansion-20260829-038": {
          "expectedName": "戴春林",
          "canonicalName": "戴春林",
          "entityType": "heritage-fragrance-and-cosmetics-brand",
          "disposition": "partial",
          "categoryLabel": "地方香妆与非遗体验",
          "researchNote": "理念、扬州实体空间、专业深读与5张门店/工艺空间图片已核验；当前完整门店总数未公开。",
          "philosophyHeadline": "让扬州古法香妆回到当代日常",
          "philosophy": "以扬州古法香妆为核心，把配方、气味、东方审美与历史街区体验转化为今天仍可使用的地方文化产品。",
          "philosophyAttribution": "DNA 编辑缩写｜依据江苏宣传文化平台品牌深读",
          "philosophySourceKeys": [
            "dai-chunlin-jsxc-philosophy-20260729"
          ],
          "learnMore": [
            {
              "title": "戴春林古法香妆的当代转化",
              "displayTitle": "古法香妆如何进入当代生活",
              "sourceKey": "dai-chunlin-jsxc-deep-read-20260729",
              "coverUrl": "https://omo-oss-image1.thefastimg.com/portal-saas/new2023101710480586904/cms/image/080562b3-02a8-4e56-b597-97fbd422ad34.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "扬州"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "dai-chunlin-official-space-live-20260829",
            "scopeCode": "verified-city",
            "scopeLabel": "扬州",
            "linkUrl": "https://uri.amap.com/search?keyword=%E6%88%B4%E6%98%A5%E6%9E%97&city=%E6%89%AC%E5%B7%9E&view=map&src=commercial-dna"
          }
        },
        "brand-expansion-20260829-040": {
          "expectedName": "金陵金箔",
          "canonicalName": "金陵金箔",
          "entityType": "heritage-gold-foil-brand",
          "disposition": "partial",
          "categoryLabel": "金箔非遗与品牌体验",
          "researchNote": "理念、南京实体内容、专业深读及5张图片已核验；第3至5张只标为品牌体验馆，当前零售门店总数未公开。",
          "philosophyHeadline": "让金箔从工艺材料变成可理解的金陵手艺",
          "philosophy": "把南京金箔制作技艺从工程与工业材料转化为公众可理解、可体验、可带走的地方手艺。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌官网与非遗报道",
          "philosophySourceKeys": [
            "jinling-goldfoil-official-philosophy-live-20260829"
          ],
          "learnMore": [
            {
              "title": "金陵金箔非遗品牌深读",
              "displayTitle": "金箔技艺如何走向公众",
              "sourceKey": "jinling-goldfoil-people-deep-read-20251222",
              "coverUrl": "https://omo-oss-image1.thefastimg.com/portal-saas/pg2025022617093985506/cms/image/4fc98b07-97e8-42d7-af43-df6168a8bb09.png"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "南京"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "jinling-goldfoil-nanjing-space-live-20260829",
            "scopeCode": "verified-city",
            "scopeLabel": "南京",
            "linkUrl": "https://uri.amap.com/search?keyword=%E9%87%91%E9%99%B5%E9%87%91%E7%AE%94&city=%E5%8D%97%E4%BA%AC&view=map&src=commercial-dna"
          }
        },
        "brand-expansion-20260829-045": {
          "expectedName": "Peiping Machine 北平机器",
          "canonicalName": "Peiping Machine 北平机器",
          "aliases": [
            "北平机器",
            "Peiping Machine"
          ],
          "entityType": "local-craft-brewery-and-taproom-brand",
          "disposition": "complete",
          "categoryLabel": "在地精酿与街区餐酒",
          "researchNote": "理念、北京至少8家保守下限、品牌经营访谈和5张门头/酿造/餐酒空间图已核验。",
          "philosophyHeadline": "用一店一场所，把北京味道酿进城市生活",
          "philosophy": "以中央酿造能力连接嵌入旧厂、胡同和街区的不同店型，持续使用北京食物与地方原料，并通过公共活动参与城市生活。",
          "philosophyAttribution": "DNA 编辑缩写｜依据联合创始人访谈",
          "philosophySourceKeys": [
            "peiping-founder-bjd-20250623"
          ],
          "learnMore": [
            {
              "title": "Welcome to the Machine",
              "displayTitle": "北平机器的一店一场所",
              "sourceKey": "peiping-beer52-interview-20260207",
              "coverUrl": "https://dth50iqs19w2y.cloudfront.net/ferment/HEADER/6c/c902805dda4709a87c46221724df91/NAFU-BREWPUB-5-.jpg"
            }
          ],
          "store": {
            "count": 8,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "unit": "个门店",
            "cities": [
              "北京"
            ],
            "citiesStatus": "partial",
            "descriptor": "品牌采访称北京约8至9家，采用保守下限",
            "scopeCode": "verified-current-network-minimum",
            "scopeLabel": "北京",
            "asOf": "2026-02-07",
            "countSourceKey": "peiping-store-minimum-20260207",
            "citySourceKey": "peiping-store-minimum-20260207",
            "linkUrl": "https://uri.amap.com/search?keyword=Peiping%20Machine%20%E5%8C%97%E5%B9%B3%E6%9C%BA%E5%99%A8&city=%E5%8C%97%E4%BA%AC&view=map&src=commercial-dna"
          }
        },
        "brand-candidate-20260828-001": {
          "expectedName": "Ensue",
          "canonicalName": "Ensue",
          "entityType": "single-destination-restaurant",
          "disposition": "complete",
          "categoryLabel": "岭南当代餐饮",
          "researchNote": "理念、深圳一个当前可核验点位、空间深读与5张餐厅空间图已核验。",
          "philosophyHeadline": "从岭南物产出发，呈现真实风味",
          "philosophy": "以岭南为根，尊重广东物产与生物多样性，用当代技法呈现真实风味。",
          "philosophyAttribution": "DNA 编辑缩写｜依据Ensue品牌官网",
          "philosophySourceKeys": [
            "ensue-official-philosophy-live-20260829"
          ],
          "learnMore": [
            {
              "title": "Ensue Luxury Restaurant in Shenzhen",
              "displayTitle": "Ensue深圳餐厅空间解析",
              "sourceKey": "ensue-e-architect-20191216",
              "coverUrl": "https://www.e-architect.com/wp-content/uploads/2019/12/ensue-restaurant-shenzhen-c161219-l1.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "unit": "个门店",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "partial",
            "descriptor": "当前可核验福田香格里拉40层点位",
            "scopeCode": "verified-current-location",
            "scopeLabel": "深圳",
            "observedAt": "2026-08-29",
            "countSourceKey": "ensue-current-location-live-20260829",
            "citySourceKey": "ensue-current-location-live-20260829",
            "linkUrl": "https://uri.amap.com/search?keyword=Ensue&city=%E6%B7%B1%E5%9C%B3&view=map&src=commercial-dna"
          }
        },
        "brand-candidate-20260828-011": {
          "expectedName": "吾时物刻",
          "canonicalName": "吾时物刻",
          "entityType": "heritage-cultural-gift-brand",
          "disposition": "complete",
          "categoryLabel": "非遗文创与城市礼物",
          "researchNote": "理念、杭州3家官方门店、品牌深读与5张门店/非遗陈列空间图已核验。",
          "philosophyHeadline": "让非遗成为可以使用的创艺生活",
          "philosophy": "以“时刻·创艺生活”为核心，联结设计师、艺术家与守艺人，把非遗与地方文化转译为日常礼物。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌母公司官方品牌页",
          "philosophySourceKeys": [
            "wushi-official-brand-live-20260829"
          ],
          "learnMore": [
            {
              "title": "吾时物刻：非遗文创携手大运河博物院",
              "displayTitle": "非遗文创如何连接大运河",
              "sourceKey": "wushi-canal-museum-20241219",
              "coverUrl": "https://28538313.s21i.faiusr.com/2/ABUIABACGAAg8eW7tgYo35bTsQEwoBc4wA8.jpg"
            }
          ],
          "store": {
            "count": 3,
            "countKind": "official-current-total",
            "qualifier": "exact",
            "unit": "个门店",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "descriptor": "官方列明闲林埠老街店、空港店、杭州东站店",
            "scopeCode": "official-current-network",
            "scopeLabel": "杭州",
            "observedAt": "2026-08-29",
            "countSourceKey": "wushi-three-stores-live-20260829",
            "citySourceKey": "wushi-three-stores-live-20260829",
            "addressSourceKey": "wushi-three-stores-live-20260829",
            "linkLabel": "官方门店",
            "linkUrl": "https://www.tangyu.net/h-col-117.html"
          }
        },
        "brand-candidate-20260828-034": {
          "expectedName": "三影堂摄影艺术中心",
          "canonicalName": "三影堂摄影艺术中心",
          "aliases": [
            "Three Shadows Photography Art Centre"
          ],
          "entityType": "photography-cultural-centre",
          "disposition": "complete",
          "categoryLabel": "摄影文化与独立艺术空间",
          "researchNote": "理念、北京与厦门两处官方中心、建筑深读和5张北京中心建筑/展厅图已核验。",
          "philosophyHeadline": "为摄影建立持续发生的公共文化平台",
          "philosophy": "以摄影与影像艺术的展览、研究、教育和出版建立持续的公共文化平台。",
          "philosophyAttribution": "DNA 编辑缩写｜依据三影堂机构官网",
          "philosophySourceKeys": [
            "three-shadows-official-about-live-20260829"
          ],
          "learnMore": [
            {
              "title": "Three Shadows Photographic Centre",
              "displayTitle": "三影堂北京中心建筑与院落",
              "sourceKey": "three-shadows-archdaily-20120320",
              "coverUrl": "https://images.adsttc.com/media/images/55e7/6618/2347/5ddd/1700/19d4/large_jpg/red-brick-courtyards-west-1.jpg?1441228305"
            }
          ],
          "store": {
            "count": 2,
            "countKind": "official-directory-total",
            "qualifier": "exact",
            "unit": "个门店",
            "cities": [
              "北京",
              "厦门"
            ],
            "citiesStatus": "complete",
            "descriptor": "官方参观页列北京与厦门两处中心",
            "scopeCode": "official-current-centres",
            "scopeLabel": "北京 · 厦门",
            "observedAt": "2026-08-29",
            "countSourceKey": "three-shadows-two-centres-live-20260829",
            "citySourceKey": "three-shadows-two-centres-live-20260829",
            "addressSourceKey": "three-shadows-two-centres-live-20260829",
            "linkLabel": "官方地址",
            "linkUrl": "https://www.threeshadows.cn/cn/about/visit/"
          }
        },
        "brand-candidate-20260828-026": {
          "expectedName": "BACKROAD 户外集合店·长江中路店",
          "canonicalName": "BACKROAD 户外集合店·长江中路店",
          "aliases": [
            "BACKROAD户外集合店"
          ],
          "entityType": "single-store-outdoor-community-format",
          "disposition": "complete",
          "categoryLabel": "户外集合与运动社群",
          "researchNote": "理念、合肥长江中路单一店型、专业空间深读和5张门店图已核验；不外推品牌网络。",
          "philosophyHeadline": "把户外体验带进城市里的老厂房",
          "philosophy": "把户外装备零售、场景试用、餐吧与社群交流组合在同一空间，让城市消费者在出发前建立真实体验。",
          "philosophyAttribution": "DNA 编辑缩写｜依据设计团队公开项目说明",
          "philosophySourceKeys": [
            "backroad-gooood-20230421"
          ],
          "learnMore": [
            {
              "title": "BACKROAD户外集合店 / 杭州观堂设计",
              "displayTitle": "老厂房里的户外集合与社群",
              "sourceKey": "backroad-gooood-20230421",
              "coverUrl": "https://oss.gooood.cn/uploads/2023/04/00-backroad-outdoor-collection-shop-by-hangzhou-guantang-interior-design-472x303.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "unit": "个门店",
            "cities": [
              "合肥"
            ],
            "citiesStatus": "complete",
            "descriptor": "至少1个已确认门店；本条仅绑定合肥长江中路店",
            "scopeCode": "single-store-format",
            "scopeLabel": "合肥长江中路",
            "observedAt": "2026-08-29",
            "countSourceKey": "backroad-hefei-store-live-20260829",
            "citySourceKey": "backroad-hefei-store-live-20260829",
            "addressSourceKey": "backroad-hefei-store-live-20260829",
            "linkLabel": "地图地址",
            "linkUrl": "https://maps.apple.com/place?auid=1118576659989697&lsp=57879"
          }
        },
        "brand-expansion-20260829-004": {
          "expectedName": "圆梦·一角咖",
          "canonicalName": "圆梦·一角咖",
          "aliases": [
            "一角咖",
            "圆梦一角咖"
          ],
          "entityType": "inclusive-employment-coffee-service",
          "disposition": "complete",
          "categoryLabel": "融合就业与无障碍咖啡",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；2025年报道明确移动咖啡车为第二家，并说明2024年龙泉驿首店；未见品牌官方实时列表",
          "philosophyHeadline": "让培训真正走到一份日常工作",
          "philosophy": "把残障青年从培训带到真实岗位，用固定店与移动咖啡车承接就业，并以提示牌和无声点单流程降低听说沟通门槛。",
          "philosophyAttribution": "DNA 编辑缩写｜依据四川在线 C 视频公开报道",
          "philosophySourceKeys": [
            "brand-expansion-20260829-004-philosophy"
          ],
          "learnMore": [
            {
              "title": "在成都这间咖啡店，听障咖啡师走出失落的一角",
              "displayTitle": "听障咖啡师如何走向真实岗位",
              "sourceKey": "brand-expansion-20260829-004-deep-read",
              "coverUrl": "https://n.sinaimg.cn/spider20250528/403/w1200h803/20250528/7b63-5e792294c4726bfd830c9398fa5d8bec.jpg"
            }
          ],
          "store": {
            "count": 2,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "2025年报道确认至少2个服务点",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-expansion-20260829-004-store",
            "unit": "个门店",
            "cities": [
              "成都"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-expansion-20260829-004-store",
            "scopeCode": "reported-service-points-minimum",
            "scopeLabel": "成都",
            "showCitiesWithoutCount": false
          }
        },
        "brand-expansion-20260829-007": {
          "expectedName": "锐博康复",
          "canonicalName": "锐博康复",
          "aliases": [
            "Reborn Rehabilitation",
            "锐博"
          ],
          "entityType": "multi-city-rehabilitation-clinic-brand",
          "disposition": "complete",
          "categoryLabel": "运动康复与社区修复",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；官网当前列5城8家直营医疗机构：北京2、上海2、杭州2、广州1、深圳1",
          "philosophyHeadline": "把康复目标放回真实生活与运动",
          "philosophy": "以回归生活和运动为目标，把专业评估、阶段治疗、运动训练、复测与居家指导纳入连续流程，并明确不替代医院诊断。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌官网服务方法与边界",
          "philosophySourceKeys": [
            "brand-expansion-20260829-007-philosophy"
          ],
          "learnMore": [
            {
              "title": "锐博康复：专业人才如何驱动服务标准",
              "displayTitle": "专业人才如何驱动康复服务标准",
              "sourceKey": "brand-expansion-20260829-007-deep-read",
              "coverUrl": "https://www.ruibokangfu.com/assets/brand-story/chain-clinic-interior.webp"
            }
          ],
          "store": {
            "count": 8,
            "countKind": "official-directory-total",
            "qualifier": "exact",
            "descriptor": "官网当前列5城8家直营医疗机构",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-expansion-20260829-007-store",
            "unit": "个门店",
            "cities": [
              "北京",
              "上海",
              "杭州",
              "广州",
              "深圳"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-expansion-20260829-007-store",
            "scopeCode": "official-current-clinic-directory",
            "scopeLabel": "北京 · 上海 · 杭州 · 广州 · 深圳",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-expansion-20260829-007-store",
            "linkLabel": "官方地址",
            "linkUrl": "https://www.ruibokangfu.com/"
          }
        },
        "brand-expansion-20260829-008": {
          "expectedName": "Rebody 换个身体",
          "canonicalName": "Rebody 换个身体",
          "aliases": [
            "Rebody",
            "换个身体"
          ],
          "entityType": "one-to-one-musculoskeletal-rehabilitation-brand",
          "disposition": "complete",
          "categoryLabel": "肌骨康复与运动回归",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；官网当前逐店列深圳福田、深圳南山、香港尖沙咀、武汉武昌4家",
          "philosophyHeadline": "把治疗与训练放进同一套连续方案",
          "philosophy": "以一对一肌骨评估为起点，把治疗师与训练师能力合并到同一方案，覆盖体态、疼痛、术后和运动回归，并提供居家随访。",
          "philosophyAttribution": "DNA 编辑缩写｜依据 Rebody 品牌官网",
          "philosophySourceKeys": [
            "brand-expansion-20260829-008-philosophy"
          ],
          "learnMore": [
            {
              "title": "Rebody的评估、康复与训练方法",
              "displayTitle": "Rebody 的评估、康复与训练方法",
              "sourceKey": "brand-expansion-20260829-008-deep-read",
              "coverUrl": "https://www.rebody.health/site/hero.jpg"
            }
          ],
          "store": {
            "count": 4,
            "countKind": "official-directory-total",
            "qualifier": "exact",
            "descriptor": "官网当前逐店列4家中心",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-expansion-20260829-008-store",
            "unit": "个门店",
            "cities": [
              "深圳",
              "香港",
              "武汉"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-expansion-20260829-008-store",
            "scopeCode": "official-current-centre-directory",
            "scopeLabel": "深圳 · 香港 · 武汉",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-expansion-20260829-008-store",
            "linkLabel": "官方地址",
            "linkUrl": "https://www.rebody.health/"
          }
        },
        "brand-expansion-20260829-015": {
          "expectedName": "Times Remake",
          "canonicalName": "Times Remake",
          "aliases": [
            "TIMES REMAKE"
          ],
          "entityType": "vintage-archive-and-remake-brand",
          "disposition": "complete",
          "categoryLabel": "古着档案与手工再造",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；Apple地图与2026编辑报道共同确认富民路271号店；未把成都报道或快闪推入当前门店数",
          "philosophyHeadline": "让旧衣的年代信息继续被穿着",
          "philosophy": "以古着档案、手工Remake和旧建筑材料共同延长物品生命周期，让旧衣的年代信息和再造工艺成为门店体验的一部分。",
          "philosophyAttribution": "DNA 编辑缩写｜依据城市生活媒体门店实访",
          "philosophySourceKeys": [
            "brand-expansion-20260829-015-philosophy"
          ],
          "learnMore": [
            {
              "title": "古着与Vintage映出的上海时尚现在",
              "displayTitle": "古着与再造如何进入上海日常",
              "sourceKey": "brand-expansion-20260829-015-deep-read",
              "coverUrl": "https://fashionsnap-assets.com/asset/format%3Dauto%2Cwidth%3D1344/article/images/2026/01/TR_01-c480f31c-3364-4b1d-a7b6-d547c7dcdb1e.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "当前确认富民路271号至少1家",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-expansion-20260829-015-store",
            "unit": "个门店",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-expansion-20260829-015-store",
            "scopeCode": "verified-current-location",
            "scopeLabel": "上海",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-expansion-20260829-015-store",
            "linkLabel": "地图地址",
            "linkUrl": "https://maps.apple.com/place?auid=1118714691126310&lsp=57879"
          }
        },
        "brand-expansion-20260829-021": {
          "expectedName": "ENCOMPASS",
          "canonicalName": "ENCOMPASS",
          "entityType": "remake-and-curated-lifestyle-space",
          "disposition": "partial",
          "categoryLabel": "旧物再造与复合策展",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；2024探班确认上海锦嘉路88号独栋，报道提及曾在上海、昆明试水；2025人民网仍将大学路品牌作为青年商业样本，但缺官方实时门店表",
          "philosophyHeadline": "让再造过程成为门店里可见的内容",
          "philosophy": "把旧衣、旧鞋与手工Remake作为核心业务，用四层独栋组合售卖、咖啡、唱片、工坊与策展，让改造过程和可持续价值持续可见。",
          "philosophyAttribution": "DNA 编辑缩写｜依据商业咔四层门店探班",
          "philosophySourceKeys": [
            "brand-expansion-20260829-021-philosophy"
          ],
          "learnMore": [
            {
              "title": "ENCOMPASS上海大学路四层大店探班",
              "displayTitle": "ENCOMPASS 四层 Remake 空间",
              "sourceKey": "brand-expansion-20260829-021-deep-read",
              "coverUrl": "https://q5.itc.cn/images01/20240625/5945773d31544c548903bee3de6bd8c7.jpeg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "上海",
              "昆明"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-021-store",
            "scopeCode": "reported-city-set",
            "scopeLabel": "",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-009": {
          "expectedName": "聚福品·福州有礼",
          "canonicalName": "聚福品·福州有礼",
          "aliases": [
            "福州有礼",
            "聚福品"
          ],
          "entityType": "public-city-gift-consumer-brand",
          "disposition": "complete",
          "categoryLabel": "福州城市礼物公共品牌",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；2025年8月官方口径为5个网点加8个品牌专柜；前端必须分开标注，不能统一写成13家标准门店。",
          "philosophyHeadline": "把分散的福州好物整理成可信入口",
          "philosophy": "以商家联盟、准入审核和质量追溯，把分散的福州老字号、非遗与地方产品整理成可信的城市礼物入口。",
          "philosophyAttribution": "DNA 编辑缩写｜依据福州市政协转福州晚报报道",
          "philosophySourceKeys": [
            "brand-candidate-20260828-009-philosophy"
          ],
          "learnMore": [
            {
              "title": "福州市礼品协会成立，福州有礼品牌培育推广启动",
              "displayTitle": "福州有礼如何建立准入与追溯",
              "sourceKey": "brand-candidate-20260828-009-deep-read",
              "coverUrl": "https://swj.fuzhou.gov.cn/zwgk/swgz/202508/W020250805372114196651.png"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "福州"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-009-store",
            "scopeCode": "official-mixed-outlets-and-counters",
            "scopeLabel": "5个网点 · 8个品牌专柜",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-021": {
          "expectedName": "12XX文艺研究所·永庆坊店",
          "canonicalName": "12XX文艺研究所·永庆坊店",
          "aliases": [
            "12XX文艺研究所",
            "12XX"
          ],
          "entityType": "single-format-city-culture-gift-store",
          "disposition": "complete",
          "categoryLabel": "广州城市叙事与文创",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；品牌2025开店自述称永庆坊为线下首店，2026回顾仍称其持续营业；本条只绑定永庆坊具体店型。",
          "philosophyHeadline": "把广州故事做成能进入日常的文创",
          "philosophy": "从广州街景、方言与人物出发，把城市故事做成可以进入日常、也可以随身带走的文创。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌开店自述转载",
          "philosophySourceKeys": [
            "brand-candidate-20260828-021-philosophy"
          ],
          "learnMore": [
            {
              "title": "12XX文艺研究所线下首店开张",
              "displayTitle": "12XX 永庆坊首店如何讲广州",
              "sourceKey": "brand-candidate-20260828-021-deep-read",
              "coverUrl": "https://q0.itc.cn/q_70/images03/20250422/7e7b9ebf6e5846aebc9fde3ac8024e81.jpeg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "本条只绑定永庆坊1个已确认店型",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-021-store",
            "unit": "个门店",
            "cities": [
              "广州"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-021-store",
            "scopeCode": "single-store-format",
            "scopeLabel": "广州永庆坊",
            "showCitiesWithoutCount": false
          }
        },
        "brand-expansion-20260829-026": {
          "expectedName": "UPPERVOID 二普纬度",
          "canonicalName": "UPPERVOID 二普纬度",
          "aliases": [
            "UPPERVOID",
            "二普纬度"
          ],
          "entityType": "independent-outdoor-product-and-retail-brand",
          "disposition": "partial",
          "categoryLabel": "中国户外与城市体验",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；城市范围来自2025界面深访与上海新店报道；上海万象城栖澜店为当期明确新店，其他城市只保留媒体报道范围，不推算总数。",
          "philosophyHeadline": "从中国户外场景出发做自己的产品",
          "philosophy": "从中国户外使用场景出发做自主研发，把专业技术、城市审美和可长期使用的产品结合起来，并用不同城市门店承载完整品类体验。",
          "philosophyAttribution": "DNA 编辑缩写｜依据界面新闻品牌深访",
          "philosophySourceKeys": [
            "brand-expansion-20260829-026-philosophy"
          ],
          "learnMore": [
            {
              "title": "UPPERVOID如何做中国户外品牌",
              "displayTitle": "UPPERVOID 如何做中国户外品牌",
              "sourceKey": "brand-expansion-20260829-026-deep-read",
              "coverUrl": "https://image-cdn.hypb.st/https%3A%2F%2Fcn.hypebeast.com%2Ffiles%2F2025%2F12%2F31%2Fuppervoid-shanghai-store-opening-1.jpg?q=90&w=800&cbr=1&fit=max"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "上海",
              "北京",
              "成都",
              "南京",
              "佳木斯"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-026-store",
            "scopeCode": "reported-city-set",
            "scopeLabel": "上海 · 北京 · 成都 · 南京 · 佳木斯",
            "showCitiesWithoutCount": true
          }
        },
        "brand-expansion-20260829-043": {
          "expectedName": "TripSmith 行匠",
          "canonicalName": "TripSmith 行匠",
          "aliases": [
            "TripSmith",
            "行匠"
          ],
          "entityType": "local-craft-beer-and-neighbourhood-dining-brand",
          "disposition": "partial",
          "categoryLabel": "贵州风物与街区精酿",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；2025年贵阳日报长访谈给出9家门店，其中贵阳8家、重庆1家；另有2个酒厂，不计入门店。2026年贵阳日报实地确认余家巷门店仍有当季经营。",
          "philosophyHeadline": "把贵州风物酿进每一处街区",
          "philosophy": "以自然发酵和贵州风物为核心，为不同街区设计不同店型，并通过在地食材、农户共酿和季节性产品让精酿成为理解地方的社交媒介。",
          "philosophyAttribution": "DNA 编辑缩写｜依据贵阳日报创办人长访谈",
          "philosophySourceKeys": [
            "brand-expansion-20260829-043-philosophy"
          ],
          "learnMore": [
            {
              "title": "TripSmith行匠：用贵州风物做一杯地方精酿",
              "displayTitle": "用贵州风物做一杯地方精酿",
              "sourceKey": "brand-expansion-20260829-043-deep-read",
              "coverUrl": "https://www.gywb.cn/upload/news/image/2026/05/26/a87a1476915548fb93ba77cb8c805a17.png?h=563&w=1000"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "贵阳",
              "重庆"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-043-store",
            "scopeCode": "reported-city-set",
            "scopeLabel": "贵阳 · 重庆",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-029": {
          "expectedName": "AITASHOP·北京751店",
          "canonicalName": "AITASHOP·北京751店",
          "aliases": [
            "AITASHOP北京751店",
            "AITASHOP"
          ],
          "entityType": "single-format-cycling-retail-and-service-hub",
          "disposition": "complete",
          "categoryLabel": "骑行零售与工业遗存社群",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；本记录只计AITASHOP北京751这一具体旗舰店型，Passoni官方经销商页确认一个当前地址；不外推AITASHOP全品牌门店总数。",
          "philosophyHeadline": "让专业骑行服务成为一处城市文化中心",
          "philosophy": "以专业自行车服务为核心，把零售、维修、咖啡与社群交流组织成骑行文化中心，并让751工业遗存直接成为品牌体验的一部分。",
          "philosophyAttribution": "DNA 编辑缩写｜依据设计团队项目说明",
          "philosophySourceKeys": [
            "brand-candidate-20260828-029-philosophy"
          ],
          "learnMore": [
            {
              "title": "Yatofu Creatives Reinvents Cycling Retail with AITASHOP’s Beijing Flagship",
              "displayTitle": "751工业遗存里的骑行旗舰店",
              "sourceKey": "brand-candidate-20260828-029-deep-read",
              "coverUrl": "https://static2.abitare.it/wp-content/uploads/2026/06/01-Aitashop-Pechino-Yatofu-Creatives-P.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "official-directory-total",
            "qualifier": "exact",
            "descriptor": "官方经销商页确认北京751店1处",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-029-store",
            "unit": "个门店",
            "cities": [
              "北京"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-029-store",
            "scopeCode": "official-specific-store-directory",
            "scopeLabel": "北京751店",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-candidate-20260828-029-store",
            "linkLabel": "官方地址",
            "linkUrl": "https://passoni.com/en/dealers/aita-cycles"
          }
        },
        "brand-candidate-20260828-032": {
          "expectedName": "镜中书店",
          "canonicalName": "镜中书店",
          "entityType": "independent-local-reading-and-events-space",
          "disposition": "partial",
          "categoryLabel": "在地书目与文化活动",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；2026地方报道与2025阅读空间资料均指向岳麓山西侧同一栋三层白色建筑，按1处当前空间记录。",
          "philosophyHeadline": "让书目与活动持续连接岳麓山下的读者",
          "philosophy": "用主题书目和长期活动把岳麓山下的读者连接起来，以湖南在地内容、社会议题与夜间交流形成持续编辑的文化飞地。",
          "philosophyAttribution": "DNA 编辑缩写｜依据主理人与书店机制访谈",
          "philosophySourceKeys": [
            "brand-candidate-20260828-032-philosophy"
          ],
          "learnMore": [
            {
              "title": "山中书店",
              "displayTitle": "岳麓山下的书店如何持续发生",
              "sourceKey": "brand-candidate-20260828-032-deep-read",
              "coverUrl": "https://www.nationalreading.gov.cn/ydkj/swsh/202503/W020250320542237074513.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "2026年地方报道确认至少1处当前空间",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-032-store",
            "unit": "个门店",
            "cities": [
              "长沙"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-032-store",
            "scopeCode": "verified-current-location",
            "scopeLabel": "长沙岳麓山西侧",
            "showCitiesWithoutCount": false
          }
        },
        "brand-candidate-20260828-035": {
          "expectedName": "ELEATERY 大象里",
          "canonicalName": "ELEATERY 大象里",
          "aliases": [
            "ELEATERY",
            "大象里"
          ],
          "entityType": "all-day-tea-wine-dining-and-community-brand",
          "disposition": "partial",
          "categoryLabel": "茶酒餐与城市邻里",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；设计资料确认首店与嘉里建设广场第二店，但没有品牌当前完整门店目录；只保留深圳城市与已知两店线索，不写当前总数。",
          "philosophyHeadline": "让茶酒餐成为城市里松弛的邻里关系",
          "philosophy": "以茶、酒、餐连接办公区与社区日常，把门店想象成游牧大象在城市中的临时栖息地，让陌生顾客也能获得邻居般松弛的社交感。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌与空间设计方项目说明",
          "philosophySourceKeys": [
            "brand-candidate-20260828-035-philosophy"
          ],
          "learnMore": [
            {
              "title": "Eleatery by SORA：游牧大象在城市山谷中栖息",
              "displayTitle": "游牧大象如何在城市里形成栖息地",
              "sourceKey": "brand-candidate-20260828-035-deep-read",
              "coverUrl": "https://oss.gooood.cn/uploads/2024/09/002-eleatery-by-sora.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-035-store",
            "scopeCode": "reported-city-and-store-clues",
            "scopeLabel": "深圳",
            "showCitiesWithoutCount": true
          }
        },
        "brand-expansion-20260829-010": {
          "expectedName": "粒粒堡 Lilliput",
          "canonicalName": "粒粒堡 Lilliput",
          "aliases": [
            "Lilliput Kids Cafe",
            "粒粒堡"
          ],
          "entityType": "family-dining-and-play-space-brand",
          "disposition": "partial",
          "categoryLabel": "亲子餐饮与家庭第三空间",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；2026年确认上海七宝宝龙城新店，官网未提供可核对的中国在营门店总表；历史门店图片不可推导当前数量",
          "philosophyHeadline": "让孩子探索，也让陪伴者真正坐下来",
          "philosophy": "用餐饮、主题游乐、活动与休息动线组成家庭第三空间，让儿童探索、亲子陪伴和家长放松在同一处发生。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌官网与行业专访",
          "philosophySourceKeys": [
            "brand-expansion-20260829-010-philosophy"
          ],
          "learnMore": [
            {
              "title": "亲子餐厅的AB面：空间、餐饮和活动如何协同",
              "displayTitle": "亲子餐厅的空间、餐饮与活动协同",
              "sourceKey": "brand-expansion-20260829-010-deep-read",
              "coverUrl": "https://nwzimg.wezhan.cn/contents/sitefiles2072/10363156/images/56255452.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "上海"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-010-store",
            "scopeCode": "verified-city-only",
            "scopeLabel": "上海",
            "showCitiesWithoutCount": true
          }
        },
        "brand-expansion-20260829-012": {
          "expectedName": "易改衣",
          "canonicalName": "易改衣",
          "entityType": "clothing-alteration-and-repair-service-brand",
          "disposition": "partial",
          "categoryLabel": "改衣修复与社区手艺",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；官网只写北上广深均有多家门店和工艺研究中心，未给当前总数；历史媒体的10家、30多家口径不作为现状",
          "philosophyHeadline": "把一针一线做成可追踪的现代服务",
          "philosophy": "把资深裁缝、工艺研究中心与线上预约、到店、上门和快递收送组合起来，建立可追踪、可返改的非标改衣流程，并让传统手艺成为长期职业。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌资料与创始人采访",
          "philosophySourceKeys": [
            "brand-expansion-20260829-012-philosophy"
          ],
          "learnMore": [
            {
              "title": "易改衣如何把传统改衣做成标准化服务",
              "displayTitle": "传统改衣如何做成标准化服务",
              "sourceKey": "brand-expansion-20260829-012-deep-read",
              "coverUrl": "https://static.img.egaiyi.com/egaiyi/img/gaiyiimg/about_store_img1.png"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "广州",
              "深圳",
              "上海",
              "北京"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-012-store",
            "scopeCode": "official-reported-city-set",
            "scopeLabel": "广州 · 深圳 · 上海 · 北京",
            "showCitiesWithoutCount": true
          }
        },
        "brand-expansion-20260829-024": {
          "expectedName": "OFF SPACE",
          "canonicalName": "OFF SPACE",
          "entityType": "outdoor-lifestyle-collection-store",
          "disposition": "partial",
          "categoryLabel": "户外集合与城市生活",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；2025杭州新店盘点确认亲橙Park门店；设计专文记录较早的滨江店，另有Ceol联营空间，但三者的当前运营关系不能直接相加。",
          "philosophyHeadline": "先让人停下来，再谈去更远的地方",
          "philosophy": "把户外用品店做成可停留、可交流、可获得真实使用建议的城市户外生活集合空间，以专业选品和松弛的空间关系降低新手进入户外的门槛。",
          "philosophyAttribution": "DNA 编辑缩写｜依据空间设计团队专文",
          "philosophySourceKeys": [
            "brand-expansion-20260829-024-philosophy"
          ],
          "learnMore": [
            {
              "title": "OFF SPACE户外生活集合店",
              "displayTitle": "OFF SPACE 如何组织户外生活集合店",
              "sourceKey": "brand-expansion-20260829-024-deep-read",
              "coverUrl": "https://oss.gooood.cn/uploads/2022/11/002-OFF-SPACE-Outdoor-Life-Collection-Store-Hangzhou-Guantang-Interior-Design-.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-024-store",
            "scopeCode": "verified-city-and-historical-format",
            "scopeLabel": "杭州",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-003": {
          "expectedName": "熊猫邮局",
          "canonicalName": "熊猫邮局",
          "entityType": "city-culture-postal-gift-brand",
          "disposition": "partial",
          "categoryLabel": "熊猫文化与城市邮政礼物",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；中国邮政2026年报道给出截至2025年14家：直营6、授权4、铺货4；不同模式不可都当作标准门店。",
          "philosophyHeadline": "把一封信重新变成城市里的温度",
          "philosophy": "以“书信+手信”连接邮政文化、熊猫文化和天府文化，让寄递重新成为有温度的城市表达。",
          "philosophyAttribution": "DNA 编辑缩写｜依据中国邮政品牌案例",
          "philosophySourceKeys": [
            "brand-candidate-20260828-003-philosophy"
          ],
          "learnMore": [
            {
              "title": "熊猫YOYO远航记",
              "displayTitle": "熊猫邮局如何连接书信与手信",
              "sourceKey": "brand-candidate-20260828-003-deep-read",
              "coverUrl": "https://www.ourchinastory.com/images/content/travel-leisure/2023/05/%E7%86%8A%E8%B2%93%E9%83%B5%E5%B1%8001_x1.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "成都",
              "四川省内其他景区"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-003-store",
            "scopeCode": "mixed-operation-point-network",
            "scopeLabel": "成都 · 四川省内其他景区",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-004": {
          "expectedName": "黄远堂凤梨酥",
          "canonicalName": "黄远堂凤梨酥",
          "aliases": [
            "黄远堂"
          ],
          "entityType": "local-pastry-and-city-gift-brand",
          "disposition": "partial",
          "categoryLabel": "厦门糕点与地方伴手礼",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；公开商品页出现“厦门15家实体店”宣传语，但没有当前官方门店表，不采用为正式门店数。",
          "philosophyHeadline": "认真做一块有厦门味道的凤梨酥",
          "philosophy": "坚持真凤梨与“低调做人、认真做饼”，用闽南花砖和在地故事把单一糕点变成厦门伴手礼。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌创始故事",
          "philosophySourceKeys": [
            "brand-candidate-20260828-004-philosophy"
          ],
          "learnMore": [
            {
              "title": "黄远堂凤梨酥：绝不冬瓜",
              "displayTitle": "黄远堂如何把单一糕点做成城市礼物",
              "sourceKey": "brand-candidate-20260828-004-deep-read",
              "coverUrl": "https://youimg1.c-ctrip.com/target/100i0z000000munnrA08C.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "厦门"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-004-store",
            "scopeCode": "verified-city-only",
            "scopeLabel": "厦门",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-007": {
          "expectedName": "苏州采芝斋",
          "canonicalName": "苏州采芝斋",
          "aliases": [
            "采芝斋"
          ],
          "entityType": "heritage-suzhou-confectionery-brand",
          "disposition": "partial",
          "categoryLabel": "苏式糖果与透明作坊",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；旧报道曾给出20多家，但没有当前官方门店表；目前仅将观前街、兆佳巷等有效点位作为线索。",
          "philosophyHeadline": "守住原味，也让顾客看见手艺",
          "philosophy": "守住苏式糖果和茶食的原味与手工过程，同时恢复传统品种、研发轻负担新品，并让顾客透过作坊看见制作。",
          "philosophyAttribution": "DNA 编辑缩写｜依据商务部老字号档案",
          "philosophySourceKeys": [
            "brand-candidate-20260828-007-philosophy"
          ],
          "learnMore": [
            {
              "title": "采芝斋、稻香村：以原味寄托乡思",
              "displayTitle": "苏式老字号如何守住原味与制作现场",
              "sourceKey": "brand-candidate-20260828-007-deep-read",
              "coverUrl": "https://fg.suzhou.gov.cn/szfgw/lzh/202311/96357c78cfd34f31867a1577f8e63136/images/810b9e6695e34839bc22c52abad287d1.png"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "苏州"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-007-store",
            "scopeCode": "verified-flagship-and-city",
            "scopeLabel": "苏州观前街",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-008": {
          "expectedName": "同利肉燕",
          "canonicalName": "同利肉燕",
          "entityType": "heritage-local-food-brand",
          "disposition": "partial",
          "categoryLabel": "福州肉燕与手艺传承",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；2019采访记录4家，但不是当前口径；现只确认三坊七巷南后街店等点位仍有公开目录。",
          "philosophyHeadline": "守住肉燕的手艺，也把它带进今天",
          "philosophy": "以品质优先、诚信经营守住肉燕手艺，同时通过标准化生产、新口味和文化展示让传统进入当代消费。",
          "philosophyAttribution": "DNA 编辑缩写｜依据传承人经营访谈",
          "philosophySourceKeys": [
            "brand-candidate-20260828-008-philosophy"
          ],
          "learnMore": [
            {
              "title": "福州肉燕第五代传人：鼓棒换木槌，这个接棒给力",
              "displayTitle": "第五代传人如何接住福州肉燕",
              "sourceKey": "brand-candidate-20260828-008-deep-read",
              "coverUrl": "https://tblg.k-img.com/restaurant/images/Rvw/110398/640x640_rect_110398015.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "福州"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-008-store",
            "scopeCode": "verified-historic-store",
            "scopeLabel": "福州南后街",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-012": {
          "expectedName": "善淘 Buy42",
          "canonicalName": "善淘 Buy42",
          "aliases": [
            "善淘",
            "Buy42"
          ],
          "entityType": "charity-resale-and-inclusive-employment-brand",
          "disposition": "complete",
          "categoryLabel": "慈善二手与融合就业",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；按2026-08-28核验的品牌官网上海15家口径；2026-03媒体报道为14家，可能存在新增或口径差异，逐店表仍需复核。",
          "philosophyHeadline": "让物品和人都重新进入社会循环",
          "philosophy": "把闲置捐赠、二手零售、残障就业与社区活动连成可自我循环的公益日常，让一次购买同时帮助物品和人重新进入社会。",
          "philosophyAttribution": "DNA 编辑缩写｜依据善淘官网使命与运营机制",
          "philosophySourceKeys": [
            "brand-candidate-20260828-012-philosophy"
          ],
          "learnMore": [
            {
              "title": "布局打破常规，慈善超市开到上海闹市靠啥生存",
              "displayTitle": "慈善商店如何在社区里自我循环",
              "sourceKey": "brand-candidate-20260828-012-deep-read",
              "coverUrl": "https://q2.itc.cn/q_70/images03/20260325/2918342e44ee425c9a073b9bd8899e90.jpeg"
            }
          ],
          "store": {
            "count": 15,
            "countKind": "official-current-total",
            "qualifier": "exact",
            "descriptor": "品牌官网当前口径为上海15家",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-012-store",
            "unit": "个门店",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-012-store",
            "scopeCode": "official-current-network",
            "scopeLabel": "上海",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-candidate-20260828-012-store",
            "linkLabel": "官方门店",
            "linkUrl": "https://www.buy42.com/"
          }
        },
        "brand-candidate-20260828-014": {
          "expectedName": "多抓鱼循环商店",
          "canonicalName": "多抓鱼循环商店",
          "aliases": [
            "多抓鱼"
          ],
          "entityType": "used-books-and-fashion-circular-store",
          "disposition": "partial",
          "categoryLabel": "二手书服与循环商店",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；当前只核验安福路店目录；2021分享曾称3家实体空间且包括北京，但不能直接当作2026总数。",
          "philosophyHeadline": "真正的好东西，值得被买第二次",
          "philosophy": "相信真正的好东西值得买两次，用鉴定、翻新、统一定价和线下寻宝体验降低二手交易的不信任。",
          "philosophyAttribution": "DNA 编辑缩写｜依据循环经济案例与品牌机制",
          "philosophySourceKeys": [
            "brand-candidate-20260828-014-philosophy"
          ],
          "learnMore": [
            {
              "title": "多抓鱼：在街边野蛮生长",
              "displayTitle": "多抓鱼如何把二手做成街边日常",
              "sourceKey": "brand-candidate-20260828-014-deep-read",
              "coverUrl": "https://img1.xinmin.cn/xmwb/2021-12-27/151227_p1.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "上海"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-014-store",
            "scopeCode": "verified-city-and-historical-format",
            "scopeLabel": "上海安福路",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-016": {
          "expectedName": "SToP SHoP 停停商店",
          "canonicalName": "SToP SHoP 停停商店",
          "aliases": [
            "停停商店",
            "SToP SHoP"
          ],
          "entityType": "sustainable-community-retail-brand",
          "disposition": "complete",
          "categoryLabel": "可持续选品与零拷社区店",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；2025年商业报道明确HAI550店与幸福里店同时维持运营；旧新华路首店不计入当前数。",
          "philosophyHeadline": "先停一下，再决定生活需要什么",
          "philosophy": "让人先停下来再看商品，把零拷、可持续选品、民族手作和社区内容组合成普通人可以实践的日常选择。",
          "philosophyAttribution": "DNA 编辑缩写｜依据主理人新店采访",
          "philosophySourceKeys": [
            "brand-candidate-20260828-016-philosophy"
          ],
          "learnMore": [
            {
              "title": "沪上主理人搭建新消费场景，小店面大能量",
              "displayTitle": "小店如何把可持续变成日常选择",
              "sourceKey": "brand-candidate-20260828-016-deep-read",
              "coverUrl": "https://q3.itc.cn/q_70/images03/20251105/90e35834f63445428eed312edf6edff0.jpeg"
            }
          ],
          "store": {
            "count": 2,
            "countKind": "verified-current-total",
            "qualifier": "exact",
            "descriptor": "2025年报道确认HAI550与幸福里2家",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-016-store",
            "unit": "个门店",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-016-store",
            "scopeCode": "verified-current-network",
            "scopeLabel": "上海",
            "showCitiesWithoutCount": false
          }
        },
        "brand-candidate-20260828-024": {
          "expectedName": "ABC CAMPING COUNTRY",
          "canonicalName": "ABC CAMPING COUNTRY",
          "entityType": "camping-retail-and-lifestyle-brand",
          "disposition": "partial",
          "categoryLabel": "露营装备与城市户外提案",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；本条只研究苏州诚品生活店，并以地图点位确认1处；品牌微博曾列多城，但不是当前完整门店表，不能据此写全国门店总数。",
          "philosophyHeadline": "不为形式买装备，先理解怎样走进户外",
          "philosophy": "把户外零售做成城市人接触自然的生活提案：装备、服饰、餐饮和营地内容共同降低入门门槛，并反对为了形式感而过度购买。",
          "philosophyAttribution": "DNA 编辑缩写｜依据苏州店团队采访",
          "philosophySourceKeys": [
            "brand-candidate-20260828-024-philosophy"
          ],
          "learnMore": [
            {
              "title": "从露营到新户外，如何把零售放进生活提案",
              "displayTitle": "从露营到新户外的生活提案",
              "sourceKey": "brand-candidate-20260828-024-deep-read",
              "coverUrl": "https://p0.itc.cn/q_70/images03/20210829/5a08a3eb4ade443c8287d6d2adf80ef6.jpeg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "本条只绑定苏州诚品生活1处历史店型",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-024-store",
            "unit": "个门店",
            "cities": [
              "苏州"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-024-store",
            "scopeCode": "single-historical-store-format",
            "scopeLabel": "苏州诚品生活",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-candidate-20260828-024-store",
            "linkLabel": "地图地址",
            "linkUrl": "https://maps.apple.com/place?auid=1118497092091390&lsp=57879"
          }
        },
        "brand-candidate-20260828-050": {
          "expectedName": "声音共和 Livehouse",
          "canonicalName": "声音共和 Livehouse",
          "aliases": [
            "声音共和",
            "Republic of Sound"
          ],
          "entityType": "live-music-and-youth-culture-venue-brand",
          "disposition": "partial",
          "categoryLabel": "现场音乐与青年文化空间",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；官方微博2026年持续分别发布广州塔店与海珠湖店演出；海珠湖店可绑定新滘中路88号海珠同创汇东一街11号，广州塔店尚缺同等级公开地址页，因此2是当前命名场地数而非完整地址表。",
          "philosophyHeadline": "让小众声音被听见，也让城市拥有聚点",
          "philosophy": "让小众声音被听见，把音乐现场做成青年文化聚集地和当代艺术发声场；不只售票，也希望成为一座城市可持续的精神公共空间。",
          "philosophyAttribution": "DNA 编辑缩写｜依据主理人场地运营长访谈",
          "philosophySourceKeys": [
            "brand-candidate-20260828-050-philosophy"
          ],
          "learnMore": [
            {
              "title": "拉家渡谈声音共和：做场地版的《南方周末》",
              "displayTitle": "声音共和如何做城市文化场地",
              "sourceKey": "brand-candidate-20260828-050-deep-read",
              "coverUrl": "https://live.staticflickr.com/65535/54457309496_7468292f97_o.jpg"
            }
          ],
          "store": {
            "count": 2,
            "countKind": "verified-current-total",
            "qualifier": "exact",
            "descriptor": "官方账号当前分别运营海珠湖店与广州塔店2处",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-050-store",
            "unit": "个门店",
            "cities": [
              "广州"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-050-store",
            "scopeCode": "verified-current-named-venues",
            "scopeLabel": "广州",
            "showCitiesWithoutCount": false
          }
        },
        "brand-candidate-20260828-018": {
          "expectedName": "融设计图书馆",
          "canonicalName": "融设计图书馆",
          "aliases": [
            "Rong Design Library"
          ],
          "entityType": "traditional-material-research-library",
          "disposition": "complete",
          "categoryLabel": "传统材料与设计研究",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；官网参观页仅列青山村东坞礼堂馆址",
          "philosophyHeadline": "让传统材料成为今天仍能使用的设计知识",
          "philosophy": "以“传统的未来”为方向，系统研究中国传统材料与工艺，并向设计师开放研究成果。",
          "philosophyAttribution": "DNA 编辑缩写｜依据融设计图书馆官网",
          "philosophySourceKeys": [
            "brand-candidate-20260828-018-philosophy"
          ],
          "learnMore": [
            {
              "title": "东坞礼堂保护性修缮",
              "displayTitle": "东坞礼堂如何成为材料研究图书馆",
              "sourceKey": "brand-candidate-20260828-018-deep-read",
              "coverUrl": "https://cms.ronglibrary.com/uploads/large_WX_20221101_095440_2x_ca4a4660f2.png"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "official-directory-total",
            "qualifier": "exact",
            "descriptor": "官网参观页当前列杭州青山村东坞礼堂1处",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-018-store",
            "unit": "个门店",
            "cities": [
              "杭州"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-018-store",
            "scopeCode": "official-current-location",
            "scopeLabel": "杭州",
            "showCitiesWithoutCount": false
          }
        },
        "brand-candidate-20260828-019": {
          "expectedName": "Fotografiska Shanghai",
          "canonicalName": "Fotografiska Shanghai",
          "aliases": [
            "Fotografiska 上海影像艺术中心"
          ],
          "entityType": "photography-museum-and-social-venue",
          "disposition": "complete",
          "categoryLabel": "摄影文化与全天候场馆",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；上海官网仅列光复路127号场馆",
          "philosophyHeadline": "让摄影展览延伸为全天候城市文化生活",
          "philosophy": "把摄影展览、餐饮、夜间开放与社群活动组合为全天候视觉文化空间。",
          "philosophyAttribution": "DNA 编辑缩写｜依据Fotografiska上海馆官网",
          "philosophySourceKeys": [
            "brand-candidate-20260828-019-philosophy"
          ],
          "learnMore": [
            {
              "title": "Fotografiska Shanghai / AIM Architecture",
              "displayTitle": "苏州河畔的摄影、餐饮与夜间文化",
              "sourceKey": "brand-candidate-20260828-019-deep-read",
              "coverUrl": "https://images.adsttc.com/media/images/6687/3a81/a097/8315/4127/be31/large_jpg/fotografiska-shanghai-aim-architecture_30.jpg?1720138456"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "official-directory-total",
            "qualifier": "exact",
            "descriptor": "上海馆官网当前列光复路127号1处",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-019-store",
            "unit": "个门店",
            "cities": [
              "上海"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-019-store",
            "scopeCode": "official-current-location",
            "scopeLabel": "上海",
            "showCitiesWithoutCount": false
          }
        },
        "brand-candidate-20260828-039": {
          "expectedName": "春台 Spring Patio",
          "canonicalName": "春台 Spring Patio",
          "aliases": [
            "Spring Patio"
          ],
          "entityType": "single-venue-dining-and-nightlife-format",
          "disposition": "complete",
          "categoryLabel": "庭院餐饮与夜间社交",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；2026年两家建筑媒体对应成都一处具体餐厅酒吧空间；未上推品牌连锁总数",
          "philosophyHeadline": "让老建筑重新长出当代城市生活",
          "philosophy": "通过老建筑修复、庭院与室内层层过渡，把餐饮、酒吧和城市社交嵌入在地生活。",
          "philosophyAttribution": "DNA 编辑缩写｜依据建筑项目公开说明",
          "philosophySourceKeys": [
            "brand-candidate-20260828-039-philosophy"
          ],
          "learnMore": [
            {
              "title": "春台 Spring Patio / 门舍",
              "displayTitle": "春台如何连接庭院、餐厅与夜间酒吧",
              "sourceKey": "brand-candidate-20260828-039-deep-read",
              "coverUrl": "https://images.adsttc.com/media/images/69b3/ef7e/1d07/d400/0132/44c4/large_jpg/amass_spring_patio_guoxinxin_12.jpg?1773400009"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "2026年建筑媒体确认成都至少1处具体空间",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-039-store",
            "unit": "个门店",
            "cities": [
              "成都"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-039-store",
            "scopeCode": "verified-current-location",
            "scopeLabel": "成都",
            "showCitiesWithoutCount": false
          }
        },
        "brand-candidate-20260828-022": {
          "expectedName": "红山ZOO文创·园内文创商店",
          "canonicalName": "红山ZOO文创·园内文创商店",
          "aliases": [
            "红山ZOO文创",
            "南京红山森林动物园文创"
          ],
          "entityType": "zoo-cultural-retail-format",
          "disposition": "partial",
          "categoryLabel": "动物故事与公众教育文创",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；2024媒体报道曾称5家文创店，2026官方导览仍标注多个文创点位，但当前地图未给可直接复核的点位总数。",
          "philosophyHeadline": "让每个动物故事都回到理解与保护",
          "philosophy": "以园内真实动物个体故事为创意源头，让文创同时承担公众教育、情感连接与动物保护资金回流。",
          "philosophyAttribution": "DNA 编辑缩写｜依据动物个体故事与经营回流报道",
          "philosophySourceKeys": [
            "brand-candidate-20260828-022-philosophy"
          ],
          "learnMore": [
            {
              "title": "红山动物园：小文创做出大生意",
              "displayTitle": "红山动物园如何让小文创连接大保护",
              "sourceKey": "brand-candidate-20260828-022-deep-read",
              "coverUrl": "https://n.sinaimg.cn/sinakd20231013s/320/w640h480/20231013/cc51-129d5e8cb5b8eb76cc363bd9cce8441f.jpg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "南京"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-022-store",
            "scopeCode": "official-current-city-and-multiple-points",
            "scopeLabel": "",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-023": {
          "expectedName": "Canpet 犬岛公园",
          "canonicalName": "Canpet 犬岛公园",
          "aliases": [
            "Canpet",
            "犬岛公园"
          ],
          "entityType": "single-site-dog-park-and-service-format",
          "disposition": "complete",
          "categoryLabel": "犬只运动与人宠社交",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；当前只确认保利时光里商圈这一处Canpet犬岛公园；1家是本次特定格式的已见点位数，不代表母公司全部宠物业态。",
          "philosophyHeadline": "给养犬家庭一处可以反复使用的城市公园",
          "philosophy": "把城市里的放绳运动、洗护零售和会员社交放进一座可控的小型公园，让养犬家庭获得稳定、安全且可重复使用的人宠公共生活入口。",
          "philosophyAttribution": "DNA 编辑缩写｜依据门店机制实地报道",
          "philosophySourceKeys": [
            "brand-candidate-20260828-023-philosophy"
          ],
          "learnMore": [
            {
              "title": "宠物公园只能遛狗？凭啥让宠主乐意买单？",
              "displayTitle": "宠物公园为什么值得反复到访",
              "sourceKey": "brand-candidate-20260828-023-deep-read",
              "coverUrl": "https://q0.itc.cn/q_70/images03/20260113/d819a0e9a8284e849ca01b96a7ccdbf6.jpeg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "当前确认成都保利时光里至少1处犬岛公园",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-023-store",
            "unit": "个门店",
            "cities": [
              "成都"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-023-store",
            "scopeCode": "single-site-format",
            "scopeLabel": "成都",
            "showCitiesWithoutCount": false
          }
        },
        "brand-candidate-20260828-030": {
          "expectedName": "PAWCODE 万事可宠",
          "canonicalName": "PAWCODE 万事可宠",
          "aliases": [
            "PAWCODE",
            "万事可宠"
          ],
          "entityType": "human-pet-lifestyle-and-service-brand",
          "disposition": "partial",
          "categoryLabel": "人宠生活与复合服务",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；2025品牌自述曾称2家长期店和6家快闪；2026公开资料又分别出现咸安坊、武汉K11等点位，长期店、快闪与商场柜位边界未闭环，暂不写总数。",
          "philosophyHeadline": "从宠物消费走向人宠共同生活",
          "philosophy": "从宠物单向消费转向人与宠物共同参与的城市生活：把社交、零售、洗护寄养、餐饮、策展与内容共创组合成可持续的人宠友好场景。",
          "philosophyAttribution": "DNA 编辑缩写｜依据创业项目与品牌模式报道",
          "philosophySourceKeys": [
            "brand-candidate-20260828-030-philosophy"
          ],
          "learnMore": [
            {
              "title": "PAWCODE：重新定义人宠生活方式",
              "displayTitle": "PAWCODE如何重新组织人宠生活",
              "sourceKey": "brand-candidate-20260828-030-deep-read",
              "coverUrl": "https://q8.itc.cn/q_70/images03/20260422/c0bd3fc980894aa7a6577e5e0896c43d.png"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "武汉"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-candidate-20260828-030-store",
            "scopeCode": "verified-current-city",
            "scopeLabel": "",
            "showCitiesWithoutCount": true
          }
        },
        "brand-candidate-20260828-031": {
          "expectedName": "盘菜生书店",
          "canonicalName": "盘菜生书店",
          "entityType": "food-culture-bookstore-and-kitchen",
          "disposition": "complete",
          "categoryLabel": "饮食阅读与在地文化",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；公开资料只确认温州菜市场旁这一处盘菜生书店；按当前单一空间记录，不把母品牌南食召其他业务计为门店。",
          "philosophyHeadline": "从一日三餐重新阅读一座城市",
          "philosophy": "以饮食为入口重新编辑温州在地文化：书店只聚焦食物主题，并让地方食材、开放厨房、展览和阅读共同发生。",
          "philosophyAttribution": "DNA 编辑缩写｜依据母品牌内容与当前空间报道",
          "philosophySourceKeys": [
            "brand-candidate-20260828-031-philosophy"
          ],
          "learnMore": [
            {
              "title": "菜市场旁的饮食书店：盘菜生的在地文化实践",
              "displayTitle": "菜市场旁的饮食书店如何发生",
              "sourceKey": "brand-candidate-20260828-031-deep-read",
              "coverUrl": "https://wx4.sinaimg.cn/large/0086YssGly1ib1y2gy6r0j315o1jkkjl.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-current-total",
            "qualifier": "exact",
            "descriptor": "当前资料只确认温州菜市场旁1处盘菜生书店",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-031-store",
            "unit": "个门店",
            "cities": [
              "温州"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-031-store",
            "scopeCode": "single-store-format",
            "scopeLabel": "温州",
            "showCitiesWithoutCount": false
          }
        },
        "brand-candidate-20260828-033": {
          "expectedName": "刀锋书酒馆 × 日时夜影",
          "canonicalName": "刀锋书酒馆 × 日时夜影",
          "aliases": [
            "刀锋书酒馆",
            "日時夜影"
          ],
          "entityType": "bookstore-bar-and-night-culture-format",
          "disposition": "complete",
          "categoryLabel": "书店餐饮与夜间文化",
          "researchNote": "理念、门店范围、1条品牌深读及4张主审批准图片已核验；本记录仅指九龙坡当前的“刀锋书酒馆×日時夜影”完整复合店型，按1处记录；已关闭的解放碑旧店不计入。",
          "philosophyHeadline": "用餐饮反哺阅读，让书店留到夜里",
          "philosophy": "用餐饮反哺阅读，让选书、绝版书只阅不售、天台活动和夜间停留共同发生，把商业中心里的书店经营成可对话的文化客厅。",
          "philosophyAttribution": "DNA 编辑缩写｜依据店主与新店型深访",
          "philosophySourceKeys": [
            "brand-candidate-20260828-033-philosophy"
          ],
          "learnMore": [
            {
              "title": "刀锋书酒馆的新模型：餐饮如何反哺阅读",
              "displayTitle": "刀锋书酒馆的餐饮反哺阅读模型",
              "sourceKey": "brand-candidate-20260828-033-deep-read",
              "coverUrl": "https://image2.cqcb.com/2025-07-14/1752482059306_0.4707888366497879.png"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-current-total",
            "qualifier": "exact",
            "descriptor": "当前只记录九龙坡1处完整复合店型",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-candidate-20260828-033-store",
            "unit": "个门店",
            "cities": [
              "重庆"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-candidate-20260828-033-store",
            "scopeCode": "single-current-composite-format",
            "scopeLabel": "重庆",
            "showCitiesWithoutCount": false
          }
        },
        "brand-expansion-20260829-006": {
          "expectedName": "TopSupport 体思",
          "canonicalName": "TopSupport 体思",
          "aliases": [
            "TopSupport",
            "体思"
          ],
          "entityType": "sports-performance-and-recovery-centre",
          "disposition": "partial",
          "categoryLabel": "运动训练与恢复服务",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；官网明确深圳中心；报道所称全国8大训练基地不等同于8家对公众开放门店",
          "philosophyHeadline": "把训练、治疗与恢复放进同一套实证方法",
          "philosophy": "把运动表现训练、物理治疗和运动恢复连成一套实证方法，从竞技运动员延伸到大众运动与康复需求。",
          "philosophyAttribution": "DNA 编辑缩写｜依据TopSupport品牌官网",
          "philosophySourceKeys": [
            "brand-expansion-20260829-006-philosophy"
          ],
          "learnMore": [
            {
              "title": "走进大运体思：竞技训练与大众健康如何融合",
              "displayTitle": "竞技训练如何延伸到大众健康",
              "sourceKey": "brand-expansion-20260829-006-deep-read",
              "coverUrl": "https://tyjxb.xmu.edu.cn/virtual_attach_file.vsb?afc=zMl-lsnRfVM4-sLr7Q2Mln2L7nRU4CIPnmAfMmU4n7LbolC0gihFp2hmCIa0MkybUSyDMYyYLNLZUmM2nNn7oRlinmMfUzfRolLYn7UiLzrFMR7bLm-YUznFLm9ZLNUJv2bjo4OeosnbqjA1gDTJQty0LzG8L1yPMzNPokbw6258c&oid=1726816173&tid=1042&nid=15918&e=.png"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "官网当前至少确认深圳中心1处",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-expansion-20260829-006-store",
            "unit": "个门店",
            "cities": [
              "深圳"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-006-store",
            "scopeCode": "verified-current-location",
            "scopeLabel": "深圳中心",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-expansion-20260829-006-store",
            "linkLabel": "官方中心",
            "linkUrl": "https://www.topsupport.cn/front/pages/index_aboutWe.html"
          }
        },
        "brand-expansion-20260829-035": {
          "expectedName": "慢书房",
          "canonicalName": "慢书房",
          "entityType": "independent-reading-room-and-cultural-space",
          "disposition": "partial",
          "categoryLabel": "独立阅读与城市人文",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；国家全民阅读网确认观前街113平方米实体空间；2025年政府报道中的常熟方塔园店当时仍为筹建，未计入城市和店数。",
          "philosophyHeadline": "让阅读在老城里慢下来，也持续发生",
          "philosophy": "用小而慢的阅读空间承载选书、分享和城市人文交流，并尝试把独立书房嵌入老城街巷与园林，使阅读成为可反复发生的日常。",
          "philosophyAttribution": "DNA 编辑缩写｜依据国家全民阅读网空间专文",
          "philosophySourceKeys": [
            "brand-expansion-20260829-035-philosophy"
          ],
          "learnMore": [
            {
              "title": "113平方米慢书房里的城市阅读",
              "displayTitle": "113平方米书房如何承接城市阅读",
              "sourceKey": "brand-expansion-20260829-035-deep-read",
              "coverUrl": "https://www.nationalreading.gov.cn/ydkj/swsh/202503/W020250306542121363220.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "verified-minimum",
            "qualifier": "at-least",
            "descriptor": "2025年专文确认观前街至少1处实体空间",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-expansion-20260829-035-store",
            "unit": "个门店",
            "cities": [
              "苏州"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-035-store",
            "scopeCode": "verified-reported-location",
            "scopeLabel": "苏州观前街",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-expansion-20260829-035-store",
            "linkLabel": "空间资料",
            "linkUrl": "https://www.nationalreading.gov.cn/ydkj/swsh/202503/t20250306_886602.html"
          }
        },
        "brand-expansion-20260829-019": {
          "expectedName": "Green Ladies & Green Little",
          "canonicalName": "Green Ladies & Green Little",
          "aliases": [
            "Green Ladies",
            "Green Little"
          ],
          "entityType": "social-enterprise-fashion-resale-store",
          "disposition": "complete",
          "categoryLabel": "二手寄售与女性就业",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；官方页当前列南丰纱厂116号铺",
          "philosophyHeadline": "让衣物延长寿命，也让女性重新获得机会",
          "philosophy": "以社会企业寄售模式延长女性与儿童衣物寿命，同时为女性提供培训就业，并把伦理消费教育嵌入零售。",
          "philosophyAttribution": "DNA 编辑缩写｜依据香港社会企业名录",
          "philosophySourceKeys": [
            "brand-expansion-20260829-019-philosophy"
          ],
          "learnMore": [
            {
              "title": "Green Ladies & Green Little",
              "displayTitle": "二手寄售如何连接就业与伦理消费",
              "sourceKey": "brand-expansion-20260829-019-deep-read",
              "coverUrl": "https://tenantportal-api.airside.com.hk/api/asset/mallEDirectory/YTBhYmRmNzQtNjc2MS00ZGQ1LTg5NjctNDcyOTk4YzE1ZjFk/Green-Ladies-&-Green-Little-banner-01.jpg"
            }
          ],
          "store": {
            "count": 1,
            "countKind": "official-current-total",
            "qualifier": "exact",
            "descriptor": "官方页当前列南丰纱厂116号铺1处",
            "observedAt": "2026-08-30",
            "countSourceKey": "brand-expansion-20260829-019-store",
            "unit": "个门店",
            "cities": [
              "香港"
            ],
            "citiesStatus": "complete",
            "citySourceKey": "brand-expansion-20260829-019-store",
            "scopeCode": "official-current-location",
            "scopeLabel": "香港南丰纱厂",
            "showCitiesWithoutCount": false,
            "addressSourceKey": "brand-expansion-20260829-019-store",
            "linkLabel": "官方门店",
            "linkUrl": "https://gl.sjs.org.hk/greenladies/"
          }
        },
        "brand-expansion-20260829-034": {
          "expectedName": "不是书店",
          "canonicalName": "不是书店",
          "entityType": "independent-bookstore-and-local-cultural-network",
          "disposition": "partial",
          "categoryLabel": "独立选书与在地文化",
          "researchNote": "理念、门店范围、1条品牌深读及5张主审批准图片已核验；2025青岛政务网仅证明李沧店当期运营，不能推导全品牌门店数",
          "philosophyHeadline": "不依赖大型书城，也能建立城市阅读网络",
          "philosophy": "以多家城市小店为节点，通过独立选书、长期沙龙与阅读计划，为青岛建立不依赖大型书城的在地文化网络。",
          "philosophyAttribution": "DNA 编辑缩写｜依据品牌与主理人报道",
          "philosophySourceKeys": [
            "brand-expansion-20260829-034-philosophy"
          ],
          "learnMore": [
            {
              "title": "不是书店品牌与主理人报道",
              "displayTitle": "不是书店如何连接青岛阅读社群",
              "sourceKey": "brand-expansion-20260829-034-deep-read",
              "coverUrl": "https://mfs.bandao.cn/storage/mfs/69ee288d2c76e902cfdd7275.jpeg"
            }
          ],
          "store": {
            "count": null,
            "unit": "个门店",
            "cities": [
              "青岛"
            ],
            "citiesStatus": "partial",
            "citySourceKey": "brand-expansion-20260829-034-store",
            "scopeCode": "verified-current-city",
            "scopeLabel": "青岛",
            "showCitiesWithoutCount": true
          }
        }
      },
      "sources": {
        "zzer-official-weibo-live-20260829": {
          "brandId": "brand-expansion-20260829-014",
          "expectedName": "ZZER只二透明仓",
          "subjectName": "ZZER只二透明仓",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "ZZER只二官方账号｜Think Secondhand First",
          "url": "https://www.weibo.com/5614024657",
          "authority": "brand-owned-account",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "品牌认证账号用于核验主体与循环消费主张；透明陈列、扫码信息与自助选择的编辑缩写另与现场报道交叉核对。"
        },
        "zzer-warehouse-analysis-20250523": {
          "brandId": "brand-expansion-20260829-014",
          "expectedName": "ZZER只二透明仓",
          "subjectName": "ZZER只二透明仓",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "铱星云商｜仓储式二手店为何进入购物中心",
          "url": "https://www.sohu.com/a/898024132_120114194",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "publishedAt": "2025-05-23",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "文章拆解ZZER透明仓的自助选购、扫码信息、集中鉴定与大空间运营方式，用于品牌经营深读。"
        },
        "zzer-confirmed-cities-20250523": {
          "brandId": "brand-expansion-20260829-014",
          "expectedName": "ZZER只二透明仓",
          "subjectName": "ZZER只二透明仓",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "铱星云商｜ZZER已确认城市与透明仓点位",
          "url": "https://www.sohu.com/a/898024132_120114194",
          "authority": "media-brand-profile",
          "publishedAt": "2025-05-23",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "报道点名上海虹桥天地、上海佛罗伦萨小镇与深圳华南首店；城市仅记为部分已确认范围，不推导当前总店数。"
        },
        "paragon-cafa-interview-20210209": {
          "brandId": "brand-expansion-20260829-032",
          "expectedName": "佳作书局 Paragon Book Gallery",
          "subjectName": "佳作书局 Paragon Book Gallery",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy",
            "deep-read"
          ],
          "name": "中央美术学院｜艺术书店从业者访谈",
          "url": "https://www.cafa.com.cn/cn/opinions/interviews/details/8330336",
          "authority": "brand-team-direct-interview",
          "contentType": "article",
          "publishedAt": "2021-02-09",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "佳作书局经营者直接说明亚洲研究、专业艺术出版、选书与面向本地读者的长期方向。"
        },
        "paragon-798-directory-live-20260829": {
          "brandId": "brand-expansion-20260829-032",
          "expectedName": "佳作书局 Paragon Book Gallery",
          "subjectName": "佳作书局 Paragon Book Gallery",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "798艺术区商户目录｜佳作书局E06",
          "url": "https://www.798artdistrict.com.cn/business/detail?shop_id=89",
          "authority": "official-store-directory",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "现行园区商户目录确认北京798艺术区E06一个点位与地址；只作为至少一个当前可核验门店。"
        },
        "dai-chunlin-jsxc-philosophy-20260729": {
          "brandId": "brand-expansion-20260829-038",
          "expectedName": "戴春林",
          "subjectName": "戴春林",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "江苏宣传文化平台｜戴春林古法香妆的当代转化",
          "url": "https://www.jsxc.gov.cn/whwy/whcc/202607/t20260729_94785.shtml",
          "authority": "government-brand-profile",
          "publishedAt": "2026-07-29",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "当期品牌深读说明扬州古法香妆、东方审美与当代产品及体验的转化路径。"
        },
        "dai-chunlin-jsxc-deep-read-20260729": {
          "brandId": "brand-expansion-20260829-038",
          "expectedName": "戴春林",
          "subjectName": "戴春林",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "江苏宣传文化平台｜古法香妆如何进入当代生活",
          "url": "https://www.jsxc.gov.cn/whwy/whcc/202607/t20260729_94785.shtml",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "publishedAt": "2026-07-29",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "文章完整梳理品牌历史、技艺、产品创新与实体体验，用于外部深读。"
        },
        "dai-chunlin-official-space-live-20260829": {
          "brandId": "brand-expansion-20260829-038",
          "expectedName": "戴春林",
          "subjectName": "戴春林",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "戴春林官网｜扬州实体空间",
          "url": "https://www.daichunlin1628.com/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官网展示扬州历史街区实体空间与经营主体；当前完整门店总数未公开。"
        },
        "jinling-goldfoil-official-philosophy-live-20260829": {
          "brandId": "brand-expansion-20260829-040",
          "expectedName": "金陵金箔",
          "subjectName": "金陵金箔",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "金陵金箔官网｜品牌与金箔技艺",
          "url": "https://www.goldfoil.com.cn/about2.html",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官方介绍用于核验主体、南京金箔技艺以及由工业与工程能力向文创和公众体验延伸的方向。"
        },
        "jinling-goldfoil-people-deep-read-20251222": {
          "brandId": "brand-expansion-20260829-040",
          "expectedName": "金陵金箔",
          "subjectName": "金陵金箔",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "人民网江苏｜金陵金箔非遗品牌深读",
          "url": "https://js.people.com.cn/BIG5/n2/2025/1222/c360301-41449686.html",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "publishedAt": "2025-12-22",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "人民网江苏从非遗工艺、产业与公众传播角度解读金箔品牌，用于外部深读。"
        },
        "jinling-goldfoil-nanjing-space-live-20260829": {
          "brandId": "brand-expansion-20260829-040",
          "expectedName": "金陵金箔",
          "subjectName": "金陵金箔",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "金陵金箔官网｜南京零售与体验内容",
          "url": "https://www.goldfoil.com.cn/news/204.html",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官网零售与体验内容确认南京品牌主体；未形成可核验的当前完整零售门店总数。"
        },
        "peiping-founder-bjd-20250623": {
          "brandId": "brand-expansion-20260829-045",
          "expectedName": "Peiping Machine 北平机器",
          "subjectName": "Peiping Machine 北平机器",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "北京日报｜北平机器联合创始人访谈",
          "url": "https://xinwen.bjd.com.cn/content/s68593ed6e4b0aabe0a02b56a.html",
          "authority": "founder-direct-interview",
          "publishedAt": "2025-06-23",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "联合创始人李威直接说明产品质量、品牌、渠道与北京在地经营之间的取舍。"
        },
        "peiping-beer52-interview-20260207": {
          "brandId": "brand-expansion-20260829-045",
          "expectedName": "Peiping Machine 北平机器",
          "subjectName": "Peiping Machine 北平机器",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "Ferment / Beer52｜Welcome to the Machine",
          "url": "https://www.beer52.com/ferment/article/1931/welcome-to-the-machine",
          "authority": "brand-team-direct-interview",
          "contentType": "article",
          "publishedAt": "2026-02-07",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "品牌采访完整解释中央酿造、不同店型、北京地方原料与城市公共活动机制。"
        },
        "peiping-store-minimum-20260207": {
          "brandId": "brand-expansion-20260829-045",
          "expectedName": "Peiping Machine 北平机器",
          "subjectName": "Peiping Machine 北平机器",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "Ferment / Beer52｜北平机器北京门店保守下限",
          "url": "https://www.beer52.com/ferment/article/1931/welcome-to-the-machine",
          "authority": "media-brand-profile",
          "publishedAt": "2026-02-07",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "采访称北京约8至9家；前端只采用保守下限8，并明确为至少值。"
        },
        "ensue-official-philosophy-live-20260829": {
          "brandId": "brand-candidate-20260828-001",
          "expectedName": "Ensue",
          "subjectName": "Ensue",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "Ensue官网｜岭南物产与生物多样性",
          "url": "https://www.ensue-sz.com/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "品牌官网菜单与理念用于核验以岭南为根、尊重广东物产和生物多样性的方向。"
        },
        "ensue-e-architect-20191216": {
          "brandId": "brand-candidate-20260828-001",
          "expectedName": "Ensue",
          "subjectName": "Ensue",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "e-architect｜Ensue深圳餐厅空间解析",
          "url": "https://www.e-architect.com/shenzhen/ensue-luxury-restaurant-in-shenzhen-china",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "publishedAt": "2019-12-16",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "专业建筑媒体拆解入口、主餐厅、包间、自然材料与岭南空间线索，用于品牌空间深读。"
        },
        "ensue-current-location-live-20260829": {
          "brandId": "brand-candidate-20260828-001",
          "expectedName": "Ensue",
          "subjectName": "Ensue",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "SCMP 100 Top Tables 2026｜Ensue当前点位",
          "url": "https://100toptables.scmp.com/restaurants-profile-2026/ensue",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2026餐厅目录仍列深圳福田香格里拉40层一处；只作为至少一个当前可核验点位。"
        },
        "wushi-official-brand-live-20260829": {
          "brandId": "brand-candidate-20260828-011",
          "expectedName": "吾时物刻",
          "subjectName": "吾时物刻",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "唐域商业官网｜吾时物刻品牌页",
          "url": "https://www.tangyu.net/h-col-117.html",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官方品牌页明确时刻创艺生活、非遗美学、设计师艺术家守艺人共创与一景一店。"
        },
        "wushi-canal-museum-20241219": {
          "brandId": "brand-candidate-20260828-011",
          "expectedName": "吾时物刻",
          "subjectName": "吾时物刻",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "吾时物刻官网｜非遗文创携手大运河博物院",
          "url": "https://www.tangyu.net/sys-nd/43.html",
          "authority": "brand-website",
          "contentType": "article",
          "publishedAt": "2024-12-19",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官方图文以博物院合作解释非遗资源、艺术家合作库与传统文化的当代转译。"
        },
        "wushi-three-stores-live-20260829": {
          "brandId": "brand-candidate-20260828-011",
          "expectedName": "吾时物刻",
          "subjectName": "吾时物刻",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "唐域商业官网｜吾时物刻三家运营门店",
          "url": "https://www.tangyu.net/h-col-117.html",
          "authority": "official-store-directory",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官方品牌页当前列明闲林埠老街店、空港店、杭州东站店，共三家杭州门店。"
        },
        "three-shadows-official-about-live-20260829": {
          "brandId": "brand-candidate-20260828-034",
          "expectedName": "三影堂摄影艺术中心",
          "subjectName": "三影堂摄影艺术中心",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "三影堂官网｜摄影文化公共平台",
          "url": "https://www.threeshadows.cn/cn/about/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "机构官网用于核验以展览、研究、教育与出版推动摄影和影像艺术的公共文化方向。"
        },
        "three-shadows-archdaily-20120320": {
          "brandId": "brand-candidate-20260828-034",
          "expectedName": "三影堂摄影艺术中心",
          "subjectName": "三影堂摄影艺术中心",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "ArchDaily｜三影堂北京中心建筑与院落",
          "url": "https://www.archdaily.com/218201/grey-brick-galleries-red-brick-galleries-three-shadows-photographic-centre-at-cao-chang-di-beijing",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "publishedAt": "2012-03-20",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "专业建筑媒体系统呈现北京中心的建筑群、庭院与展厅，作为空间深读。"
        },
        "three-shadows-two-centres-live-20260829": {
          "brandId": "brand-candidate-20260828-034",
          "expectedName": "三影堂摄影艺术中心",
          "subjectName": "三影堂摄影艺术中心",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "三影堂官网｜北京与厦门参观页",
          "url": "https://www.threeshadows.cn/cn/about/visit/",
          "authority": "official-store-directory",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官方参观页当前列北京草场地和厦门集美两处中心及地址。"
        },
        "backroad-gooood-20230421": {
          "brandId": "brand-candidate-20260828-026",
          "expectedName": "BACKROAD 户外集合店·长江中路店",
          "subjectName": "BACKROAD 户外集合店·长江中路店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy",
            "deep-read"
          ],
          "name": "谷德设计网｜BACKROAD户外集合店空间与运营",
          "url": "https://www.gooood.cn/backroad-outdoor-collection-shop-by-hangzhou-guantang-interior-design.htm",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "publishedAt": "2023-04-21",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "设计团队供稿用于核验1600平方米老厂房中的装备零售、餐吧、露台和社群活动组合；不据页面或设计方名称判断门店城市。"
        },
        "backroad-hefei-store-live-20260829": {
          "brandId": "brand-candidate-20260828-026",
          "expectedName": "BACKROAD 户外集合店·长江中路店",
          "subjectName": "BACKROAD 户外集合店·长江中路店",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "Apple 地图｜BACKROAD长江中路店",
          "url": "https://maps.apple.com/place?auid=1118576659989697&lsp=57879",
          "authority": "official-map-listing",
          "observedAt": "2026-08-29",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "地图地点页用于核验候选指定的合肥长江中路店；计数1仅指该命名店型，不代表品牌网络。"
        },
        "brand-expansion-20260829-004-philosophy": {
          "brandId": "brand-expansion-20260829-004",
          "expectedName": "圆梦·一角咖",
          "subjectName": "圆梦·一角咖",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "四川在线C视频图文镜像｜圆梦·一角咖品牌理念",
          "url": "https://finance.sina.com.cn/jjxw/2025-05-28/doc-ineyayyx9195208.shtml",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-004-deep-read": {
          "brandId": "brand-expansion-20260829-004",
          "expectedName": "圆梦·一角咖",
          "subjectName": "圆梦·一角咖",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "四川在线 / C视频｜在成都这间咖啡店，听障咖啡师走出失落的一角",
          "url": "https://finance.sina.com.cn/jjxw/2025-05-28/doc-ineyayyx9195208.shtml",
          "authority": "media-brand-analysis",
          "contentType": "video",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-004-store": {
          "brandId": "brand-expansion-20260829-004",
          "expectedName": "圆梦·一角咖",
          "subjectName": "圆梦·一角咖",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "圆梦·一角咖｜门店范围与城市边界",
          "url": "https://finance.sina.com.cn/jjxw/2025-05-28/doc-ineyayyx9195208.shtml",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2025年报道明确移动咖啡车为第二家，并说明2024年龙泉驿首店；未见品牌官方实时列表"
        },
        "brand-expansion-20260829-007-philosophy": {
          "brandId": "brand-expansion-20260829-007",
          "expectedName": "锐博康复",
          "subjectName": "锐博康复",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌官网与服务边界｜锐博康复品牌理念",
          "url": "https://www.ruibokangfu.com/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-007-deep-read": {
          "brandId": "brand-expansion-20260829-007",
          "expectedName": "锐博康复",
          "subjectName": "锐博康复",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "大江网 / 新浪财经镜像｜锐博康复：专业人才如何驱动服务标准",
          "url": "https://finance.sina.com.cn/jjxw/2025-06-18/doc-infapccz5514162.shtml",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-007-store": {
          "brandId": "brand-expansion-20260829-007",
          "expectedName": "锐博康复",
          "subjectName": "锐博康复",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "锐博康复｜门店范围与城市边界",
          "url": "https://www.ruibokangfu.com/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官网当前列5城8家直营医疗机构：北京2、上海2、杭州2、广州1、深圳1"
        },
        "brand-expansion-20260829-008-philosophy": {
          "brandId": "brand-expansion-20260829-008",
          "expectedName": "Rebody 换个身体",
          "subjectName": "Rebody 换个身体",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌官网服务方法与边界｜Rebody 换个身体品牌理念",
          "url": "https://www.rebody.health/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-008-deep-read": {
          "brandId": "brand-expansion-20260829-008",
          "expectedName": "Rebody 换个身体",
          "subjectName": "Rebody 换个身体",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "Rebody｜Rebody的评估、康复与训练方法",
          "url": "https://www.rebody.vip/en/",
          "authority": "brand-website",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-008-store": {
          "brandId": "brand-expansion-20260829-008",
          "expectedName": "Rebody 换个身体",
          "subjectName": "Rebody 换个身体",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "Rebody 换个身体｜门店范围与城市边界",
          "url": "https://www.rebody.health/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官网当前逐店列深圳福田、深圳南山、香港尖沙咀、武汉武昌4家"
        },
        "brand-expansion-20260829-015-philosophy": {
          "brandId": "brand-expansion-20260829-015",
          "expectedName": "Times Remake",
          "subjectName": "Times Remake",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "城市生活媒体实访｜Times Remake品牌理念",
          "url": "https://www.timeoutshanghai.com/features/Shopping__Style-Shopping_features/105546/The-best-vintage-and-secondhand-stores-in-Shanghai.html",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-015-deep-read": {
          "brandId": "brand-expansion-20260829-015",
          "expectedName": "Times Remake",
          "subjectName": "Times Remake",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "FASHIONSNAP｜古着与Vintage映出的上海时尚现在",
          "url": "https://www.fashionsnap.com/article/nihao-zaijian-30/",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-015-store": {
          "brandId": "brand-expansion-20260829-015",
          "expectedName": "Times Remake",
          "subjectName": "Times Remake",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "Times Remake｜门店范围与城市边界",
          "url": "https://maps.apple.com/place?auid=1118714691126310&lsp=57879",
          "authority": "official-map-listing",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "Apple地图与2026编辑报道共同确认富民路271号店；未把成都报道或快闪推入当前门店数"
        },
        "brand-expansion-20260829-021-philosophy": {
          "brandId": "brand-expansion-20260829-021",
          "expectedName": "ENCOMPASS",
          "subjectName": "ENCOMPASS",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "商业咔四层门店探班｜ENCOMPASS品牌理念",
          "url": "https://www.sohu.com/a/788417734_141121",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-021-deep-read": {
          "brandId": "brand-expansion-20260829-021",
          "expectedName": "ENCOMPASS",
          "subjectName": "ENCOMPASS",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "商业咔｜ENCOMPASS上海大学路四层大店探班",
          "url": "https://www.sohu.com/a/788417734_141121",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-021-store": {
          "brandId": "brand-expansion-20260829-021",
          "expectedName": "ENCOMPASS",
          "subjectName": "ENCOMPASS",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "ENCOMPASS｜门店范围与城市边界",
          "url": "https://sh.people.com.cn/n2/2025/0611/c176738-41256854.html",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2024探班确认上海锦嘉路88号独栋，报道提及曾在上海、昆明试水；2025人民网仍将大学路品牌作为青年商业样本，但缺官方实时门店表"
        },
        "brand-candidate-20260828-009-philosophy": {
          "brandId": "brand-candidate-20260828-009",
          "expectedName": "聚福品·福州有礼",
          "subjectName": "聚福品·福州有礼",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "福州市政协转福州晚报的公共品牌机制报道｜聚福品·福州有礼品牌理念",
          "url": "https://zx.fuzhou.gov.cn/zz/csfz/fzdt/202508/t20250806_5058196.htm",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-009-deep-read": {
          "brandId": "brand-candidate-20260828-009",
          "expectedName": "聚福品·福州有礼",
          "subjectName": "聚福品·福州有礼",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "福州晚报/福州市政协｜福州市礼品协会成立，福州有礼品牌培育推广启动",
          "url": "https://zx.fuzhou.gov.cn/zz/csfz/fzdt/202508/t20250806_5058196.htm",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-009-store": {
          "brandId": "brand-candidate-20260828-009",
          "expectedName": "聚福品·福州有礼",
          "subjectName": "聚福品·福州有礼",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "聚福品·福州有礼｜门店范围与城市边界",
          "url": "https://zx.fuzhou.gov.cn/zz/csfz/fzdt/202508/t20250806_5058196.htm",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2025年8月官方口径为5个网点加8个品牌专柜；前端必须分开标注，不能统一写成13家标准门店。"
        },
        "brand-candidate-20260828-021-philosophy": {
          "brandId": "brand-candidate-20260828-021",
          "expectedName": "12XX文艺研究所·永庆坊店",
          "subjectName": "12XX文艺研究所·永庆坊店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌开店自述转载｜12XX文艺研究所·永庆坊店品牌理念",
          "url": "https://www.sohu.com/a/887718748_121124779",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-021-deep-read": {
          "brandId": "brand-candidate-20260828-021",
          "expectedName": "12XX文艺研究所·永庆坊店",
          "subjectName": "12XX文艺研究所·永庆坊店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "1200bookshop品牌自述转载｜12XX文艺研究所线下首店开张",
          "url": "https://www.sohu.com/a/887718748_121124779",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-021-store": {
          "brandId": "brand-candidate-20260828-021",
          "expectedName": "12XX文艺研究所·永庆坊店",
          "subjectName": "12XX文艺研究所·永庆坊店",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "12XX文艺研究所·永庆坊店｜门店范围与城市边界",
          "url": "https://www.sohu.com/a/1045471904_121124779",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "品牌2025开店自述称永庆坊为线下首店，2026回顾仍称其持续营业；本条只绑定永庆坊具体店型。"
        },
        "brand-expansion-20260829-026-philosophy": {
          "brandId": "brand-expansion-20260829-026",
          "expectedName": "UPPERVOID 二普纬度",
          "subjectName": "UPPERVOID 二普纬度",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "界面新闻品牌深访｜UPPERVOID 二普纬度品牌理念",
          "url": "https://www.jiemian.com/article/12382159.html",
          "authority": "brand-team-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-remaining-16-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-026-deep-read": {
          "brandId": "brand-expansion-20260829-026",
          "expectedName": "UPPERVOID 二普纬度",
          "subjectName": "UPPERVOID 二普纬度",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "界面新闻｜UPPERVOID如何做中国户外品牌",
          "url": "https://www.jiemian.com/article/12382159.html",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-remaining-16-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-026-store": {
          "brandId": "brand-expansion-20260829-026",
          "expectedName": "UPPERVOID 二普纬度",
          "subjectName": "UPPERVOID 二普纬度",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "UPPERVOID 二普纬度｜门店范围与城市边界",
          "url": "https://www.jiemian.com/article/12382159.html",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "城市范围来自2025界面深访与上海新店报道；上海万象城栖澜店为当期明确新店，其他城市只保留媒体报道范围，不推算总数。"
        },
        "brand-expansion-20260829-043-philosophy": {
          "brandId": "brand-expansion-20260829-043",
          "expectedName": "TripSmith 行匠",
          "subjectName": "TripSmith 行匠",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "贵阳日报创办人长访谈｜TripSmith 行匠品牌理念",
          "url": "https://finance.sina.com.cn/wm/2025-07-18/doc-inffwiqr9260336.shtml",
          "authority": "founder-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-remaining-16-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-043-deep-read": {
          "brandId": "brand-expansion-20260829-043",
          "expectedName": "TripSmith 行匠",
          "subjectName": "TripSmith 行匠",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "贵阳日报｜TripSmith行匠：用贵州风物做一杯地方精酿",
          "url": "https://finance.sina.com.cn/wm/2025-07-18/doc-inffwiqr9260336.shtml",
          "authority": "founder-direct-interview",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-remaining-16-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-043-store": {
          "brandId": "brand-expansion-20260829-043",
          "expectedName": "TripSmith 行匠",
          "subjectName": "TripSmith 行匠",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "TripSmith 行匠｜门店范围与城市边界",
          "url": "https://finance.sina.com.cn/wm/2025-07-18/doc-inffwiqr9260336.shtml",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2025年贵阳日报长访谈给出9家门店，其中贵阳8家、重庆1家；另有2个酒厂，不计入门店。2026年贵阳日报实地确认余家巷门店仍有当季经营。"
        },
        "brand-candidate-20260828-029-philosophy": {
          "brandId": "brand-candidate-20260828-029",
          "expectedName": "AITASHOP·北京751店",
          "subjectName": "AITASHOP·北京751店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "设计团队项目说明｜AITASHOP·北京751店品牌理念",
          "url": "https://yatofu.com/the-future-ruin-aitashop-beijing/",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-029-deep-read": {
          "brandId": "brand-candidate-20260828-029",
          "expectedName": "AITASHOP·北京751店",
          "subjectName": "AITASHOP·北京751店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "Yatzer｜Yatofu Creatives Reinvents Cycling Retail with AITASHOP’s Beijing Flagship",
          "url": "https://www.yatzer.com/aitashop-beijing-china-yatofu-creatives",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-029-store": {
          "brandId": "brand-candidate-20260828-029",
          "expectedName": "AITASHOP·北京751店",
          "subjectName": "AITASHOP·北京751店",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "AITASHOP·北京751店｜门店范围与城市边界",
          "url": "https://passoni.com/en/dealers/aita-cycles",
          "authority": "official-store-directory",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "本记录只计AITASHOP北京751这一具体旗舰店型，Passoni官方经销商页确认一个当前地址；不外推AITASHOP全品牌门店总数。"
        },
        "brand-candidate-20260828-032-philosophy": {
          "brandId": "brand-candidate-20260828-032",
          "expectedName": "镜中书店",
          "subjectName": "镜中书店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "主理人与书店机制访谈｜镜中书店品牌理念",
          "url": "https://www.eeo.com.cn/2024/0524/663122.shtml",
          "authority": "founder-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-032-deep-read": {
          "brandId": "brand-candidate-20260828-032",
          "expectedName": "镜中书店",
          "subjectName": "镜中书店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "人民日报｜山中书店",
          "url": "https://paper.people.com.cn/rmrb/pad/content/202503/19/content_30062708.html",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-032-store": {
          "brandId": "brand-candidate-20260828-032",
          "expectedName": "镜中书店",
          "subjectName": "镜中书店",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "镜中书店｜门店范围与城市边界",
          "url": "https://www.hunantoday.cn/news/xhn/202601/31425174.html",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2026地方报道与2025阅读空间资料均指向岳麓山西侧同一栋三层白色建筑，按1处当前空间记录。"
        },
        "brand-candidate-20260828-035-philosophy": {
          "brandId": "brand-candidate-20260828-035",
          "expectedName": "ELEATERY 大象里",
          "subjectName": "ELEATERY 大象里",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌与空间设计方完整项目说明｜ELEATERY 大象里品牌理念",
          "url": "https://www.gooood.cn/en/eleatery-by-sora.htm",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-035-deep-read": {
          "brandId": "brand-candidate-20260828-035",
          "expectedName": "ELEATERY 大象里",
          "subjectName": "ELEATERY 大象里",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "谷德设计网｜Eleatery by SORA：游牧大象在城市山谷中栖息",
          "url": "https://www.gooood.cn/en/eleatery-by-sora.htm",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-035-store": {
          "brandId": "brand-candidate-20260828-035",
          "expectedName": "ELEATERY 大象里",
          "subjectName": "ELEATERY 大象里",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "ELEATERY 大象里｜门店范围与城市边界",
          "url": "https://www.openrice.com.cn/shenzhen/restaurant/printmap.htm?shopid=8523941",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "设计资料确认首店与嘉里建设广场第二店，但没有品牌当前完整门店目录；只保留深圳城市与已知两店线索，不写当前总数。"
        },
        "brand-expansion-20260829-010-philosophy": {
          "brandId": "brand-expansion-20260829-010",
          "expectedName": "粒粒堡 Lilliput",
          "subjectName": "粒粒堡 Lilliput",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌官网理念｜粒粒堡 Lilliput品牌理念",
          "url": "https://www.lilliputcn.com/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-010-deep-read": {
          "brandId": "brand-expansion-20260829-010",
          "expectedName": "粒粒堡 Lilliput",
          "subjectName": "粒粒堡 Lilliput",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "红餐网｜亲子餐厅的AB面：空间、餐饮和活动如何协同",
          "url": "https://www.canyin88.com/zixun/2022/09/16/88636.html",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-010-store": {
          "brandId": "brand-expansion-20260829-010",
          "expectedName": "粒粒堡 Lilliput",
          "subjectName": "粒粒堡 Lilliput",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "粒粒堡 Lilliput｜门店范围与城市边界",
          "url": "https://www.biwuke.com/040/fuwuinfo/50.html",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2026年确认上海七宝宝龙城新店，官网未提供可核对的中国在营门店总表；历史门店图片不可推导当前数量"
        },
        "brand-expansion-20260829-012-philosophy": {
          "brandId": "brand-expansion-20260829-012",
          "expectedName": "易改衣",
          "subjectName": "易改衣",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "中国青年网创始人采访｜易改衣品牌理念",
          "url": "https://news.youth.cn/jsxw/201710/t20171011_10853452.htm",
          "authority": "founder-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-012-deep-read": {
          "brandId": "brand-expansion-20260829-012",
          "expectedName": "易改衣",
          "subjectName": "易改衣",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "铅笔道｜易改衣如何把传统改衣做成标准化服务",
          "url": "https://www.pencilnews.cn/p/26944.html",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-012-store": {
          "brandId": "brand-expansion-20260829-012",
          "expectedName": "易改衣",
          "subjectName": "易改衣",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "易改衣｜门店范围与城市边界",
          "url": "https://m.egaiyi.com/about",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官网只写北上广深均有多家门店和工艺研究中心，未给当前总数；历史媒体的10家、30多家口径不作为现状"
        },
        "brand-expansion-20260829-024-philosophy": {
          "brandId": "brand-expansion-20260829-024",
          "expectedName": "OFF SPACE",
          "subjectName": "OFF SPACE",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "谷德设计品牌与空间专文｜OFF SPACE品牌理念",
          "url": "https://www.gooood.cn/off-space-outdoor-life-collection-store-by-hangzhou-guantang-interior-design.htm",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-remaining-16-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-024-deep-read": {
          "brandId": "brand-expansion-20260829-024",
          "expectedName": "OFF SPACE",
          "subjectName": "OFF SPACE",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "谷德设计网｜OFF SPACE户外生活集合店",
          "url": "https://www.gooood.cn/off-space-outdoor-life-collection-store-by-hangzhou-guantang-interior-design.htm",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-remaining-16-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-024-store": {
          "brandId": "brand-expansion-20260829-024",
          "expectedName": "OFF SPACE",
          "subjectName": "OFF SPACE",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "OFF SPACE｜门店范围与城市边界",
          "url": "https://www.donews.com/news/detail/4/6369349.html",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2025杭州新店盘点确认亲橙Park门店；设计专文记录较早的滨江店，另有Ceol联营空间，但三者的当前运营关系不能直接相加。"
        },
        "brand-candidate-20260828-003-philosophy": {
          "brandId": "brand-candidate-20260828-003",
          "expectedName": "熊猫邮局",
          "subjectName": "熊猫邮局",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "中国邮政品牌案例｜熊猫邮局品牌理念",
          "url": "https://www.chinapost.com.cn/html1/report/190689/9272-1.htm",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-003-deep-read": {
          "brandId": "brand-candidate-20260828-003",
          "expectedName": "熊猫邮局",
          "subjectName": "熊猫邮局",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "中国邮政报｜熊猫YOYO远航记",
          "url": "https://www.chinapost.com.cn/html1/report/2604/8968-1.htm",
          "authority": "brand-website",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-003-store": {
          "brandId": "brand-candidate-20260828-003",
          "expectedName": "熊猫邮局",
          "subjectName": "熊猫邮局",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "熊猫邮局｜门店范围与城市边界",
          "url": "https://www.chinapost.com.cn/html1/report/2604/8968-1.htm",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "中国邮政2026年报道给出截至2025年14家：直营6、授权4、铺货4；不同模式不可都当作标准门店。"
        },
        "brand-candidate-20260828-004-philosophy": {
          "brandId": "brand-candidate-20260828-004",
          "expectedName": "黄远堂凤梨酥",
          "subjectName": "黄远堂凤梨酥",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌设计方记录的创始故事｜黄远堂凤梨酥品牌理念",
          "url": "https://www.toless.cn/index.php/Work/workDetail/id/77.html",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-004-deep-read": {
          "brandId": "brand-candidate-20260828-004",
          "expectedName": "黄远堂凤梨酥",
          "subjectName": "黄远堂凤梨酥",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "不染创意｜黄远堂凤梨酥：绝不冬瓜",
          "url": "https://www.toless.cn/index.php/Work/workDetail/id/77.html",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-004-store": {
          "brandId": "brand-candidate-20260828-004",
          "expectedName": "黄远堂凤梨酥",
          "subjectName": "黄远堂凤梨酥",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "黄远堂凤梨酥｜门店范围与城市边界",
          "url": "https://maps.apple.com/place?_provider=57879&place-id=H2710I3F958F054E982",
          "authority": "official-map-listing",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "公开商品页出现“厦门15家实体店”宣传语，但没有当前官方门店表，不采用为正式门店数。"
        },
        "brand-candidate-20260828-007-philosophy": {
          "brandId": "brand-candidate-20260828-007",
          "expectedName": "苏州采芝斋",
          "subjectName": "苏州采芝斋",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "商务部老字号档案｜苏州采芝斋品牌理念",
          "url": "https://lzhbwg.mofcom.gov.cn/edi_ecms_web_front/thb/detail/f79621b8d4e94d06864b35e829dfb997",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-007-deep-read": {
          "brandId": "brand-candidate-20260828-007",
          "expectedName": "苏州采芝斋",
          "subjectName": "苏州采芝斋",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "光明日报｜采芝斋、稻香村：以原味寄托乡思",
          "url": "https://news.gmw.cn/2018-02/11/content_27660209.htm",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-007-store": {
          "brandId": "brand-candidate-20260828-007",
          "expectedName": "苏州采芝斋",
          "subjectName": "苏州采芝斋",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "苏州采芝斋｜门店范围与城市边界",
          "url": "https://maps.apple.com/place?auid=1118652294558341&lsp=57879",
          "authority": "official-map-listing",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "旧报道曾给出20多家，但没有当前官方门店表；目前仅将观前街、兆佳巷等有效点位作为线索。"
        },
        "brand-candidate-20260828-008-philosophy": {
          "brandId": "brand-candidate-20260828-008",
          "expectedName": "同利肉燕",
          "subjectName": "同利肉燕",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "传承人经营理念与老店新生采访｜同利肉燕品牌理念",
          "url": "https://mp.visitbeijing.com.cn/a1/4NAEfUx64Kx",
          "authority": "founder-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-008-deep-read": {
          "brandId": "brand-candidate-20260828-008",
          "expectedName": "同利肉燕",
          "subjectName": "同利肉燕",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "福建日报/福州新闻网｜福州肉燕第五代传人：鼓棒换木槌，这个接棒给力",
          "url": "https://www.fjdaily.com/app/content/2020-12/08/content_884930.html",
          "authority": "founder-direct-interview",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-008-store": {
          "brandId": "brand-candidate-20260828-008",
          "expectedName": "同利肉燕",
          "subjectName": "同利肉燕",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "同利肉燕｜门店范围与城市边界",
          "url": "https://maps.apple.com/place?auid=1118505944561589&lsp=57879",
          "authority": "official-map-listing",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2019采访记录4家，但不是当前口径；现只确认三坊七巷南后街店等点位仍有公开目录。"
        },
        "brand-candidate-20260828-012-philosophy": {
          "brandId": "brand-candidate-20260828-012",
          "expectedName": "善淘 Buy42",
          "subjectName": "善淘 Buy42",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌官网使命与运营机制｜善淘 Buy42品牌理念",
          "url": "https://www.buy42.com/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-012-deep-read": {
          "brandId": "brand-candidate-20260828-012",
          "expectedName": "善淘 Buy42",
          "subjectName": "善淘 Buy42",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "人民网·上海频道｜布局打破常规，慈善超市开到上海闹市靠啥生存",
          "url": "https://sh.people.com.cn/n2/2026/0325/c176738-41533817.html",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-012-store": {
          "brandId": "brand-candidate-20260828-012",
          "expectedName": "善淘 Buy42",
          "subjectName": "善淘 Buy42",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "善淘 Buy42｜门店范围与城市边界",
          "url": "https://www.buy42.com/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "按2026-08-28核验的品牌官网上海15家口径；2026-03媒体报道为14家，可能存在新增或口径差异，逐店表仍需复核。"
        },
        "brand-candidate-20260828-014-philosophy": {
          "brandId": "brand-candidate-20260828-014",
          "expectedName": "多抓鱼循环商店",
          "subjectName": "多抓鱼循环商店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "循环经济案例与品牌机制｜多抓鱼循环商店品牌理念",
          "url": "https://ellenmacarthurfoundation.org.cn/circular-examples/enhancing-the-quality-of-resale-deja-vu",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-014-deep-read": {
          "brandId": "brand-candidate-20260828-014",
          "expectedName": "多抓鱼循环商店",
          "subjectName": "多抓鱼循环商店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "品牌星球Brandstar｜多抓鱼：在街边野蛮生长",
          "url": "https://radar.brandstar.com.cn/in-depth/3174",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-014-store": {
          "brandId": "brand-candidate-20260828-014",
          "expectedName": "多抓鱼循环商店",
          "subjectName": "多抓鱼循环商店",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "多抓鱼循环商店｜门店范围与城市边界",
          "url": "https://maps.apple.com/place?auid=1118418355450070&lsp=57879",
          "authority": "official-map-listing",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "当前只核验安福路店目录；2021分享曾称3家实体空间且包括北京，但不能直接当作2026总数。"
        },
        "brand-candidate-20260828-016-philosophy": {
          "brandId": "brand-candidate-20260828-016",
          "expectedName": "SToP SHoP 停停商店",
          "subjectName": "SToP SHoP 停停商店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "主理人理念与幸福里新店采访｜SToP SHoP 停停商店品牌理念",
          "url": "https://sh.people.com.cn/BIG5/n2/2026/0123/c176738-41481526.html",
          "authority": "founder-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-016-deep-read": {
          "brandId": "brand-candidate-20260828-016",
          "expectedName": "SToP SHoP 停停商店",
          "subjectName": "SToP SHoP 停停商店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "人民网·上海频道｜沪上主理人搭建新消费场景，小店面大能量",
          "url": "https://sh.people.com.cn/BIG5/n2/2026/0123/c176738-41481526.html",
          "authority": "founder-direct-interview",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-016-store": {
          "brandId": "brand-candidate-20260828-016",
          "expectedName": "SToP SHoP 停停商店",
          "subjectName": "SToP SHoP 停停商店",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "SToP SHoP 停停商店｜门店范围与城市边界",
          "url": "https://m.thepaper.cn/newsDetail_forward_31892952",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2025年商业报道明确HAI550店与幸福里店同时维持运营；旧新华路首店不计入当前数。"
        },
        "brand-candidate-20260828-024-philosophy": {
          "brandId": "brand-candidate-20260828-024",
          "expectedName": "ABC CAMPING COUNTRY",
          "subjectName": "ABC CAMPING COUNTRY",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "苏州区域负责人探店采访｜ABC CAMPING COUNTRY品牌理念",
          "url": "https://www.sohu.com/a/486403564_121124733",
          "authority": "brand-team-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-024-deep-read": {
          "brandId": "brand-candidate-20260828-024",
          "expectedName": "ABC CAMPING COUNTRY",
          "subjectName": "ABC CAMPING COUNTRY",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "大数跨境（窄播文章转载）｜从露营到新户外，如何把零售放进生活提案",
          "url": "https://www.10100.com/article/2805331",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-024-store": {
          "brandId": "brand-candidate-20260828-024",
          "expectedName": "ABC CAMPING COUNTRY",
          "subjectName": "ABC CAMPING COUNTRY",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "ABC CAMPING COUNTRY｜门店范围与城市边界",
          "url": "https://maps.apple.com/place?auid=1118497092091390&lsp=57879",
          "authority": "official-map-listing",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "本条只研究苏州诚品生活店，并以地图点位确认1处；品牌微博曾列多城，但不是当前完整门店表，不能据此写全国门店总数。"
        },
        "brand-candidate-20260828-050-philosophy": {
          "brandId": "brand-candidate-20260828-050",
          "expectedName": "声音共和 Livehouse",
          "subjectName": "声音共和 Livehouse",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "主理人拉家渡深度专访｜声音共和 Livehouse品牌理念",
          "url": "https://www.sohu.com/a/713696362_120788740",
          "authority": "founder-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-remaining-9-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-050-deep-read": {
          "brandId": "brand-candidate-20260828-050",
          "expectedName": "声音共和 Livehouse",
          "subjectName": "声音共和 Livehouse",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "CareForMusic音乐关怀｜拉家渡谈声音共和：做场地版的《南方周末》",
          "url": "https://www.sohu.com/a/713696362_120788740",
          "authority": "founder-direct-interview",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-remaining-9-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-050-store": {
          "brandId": "brand-candidate-20260828-050",
          "expectedName": "声音共和 Livehouse",
          "subjectName": "声音共和 Livehouse",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "声音共和 Livehouse｜门店范围与城市边界",
          "url": "https://www.sina.cn/media/7805057409",
          "authority": "brand-owned-account",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官方微博2026年持续分别发布广州塔店与海珠湖店演出；海珠湖店可绑定新滘中路88号海珠同创汇东一街11号，广州塔店尚缺同等级公开地址页，因此2是当前命名场地数而非完整地址表。"
        },
        "brand-candidate-20260828-018-philosophy": {
          "brandId": "brand-candidate-20260828-018",
          "expectedName": "融设计图书馆",
          "subjectName": "融设计图书馆",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌官网｜融设计图书馆品牌理念",
          "url": "https://www.ronglibrary.com/about",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-49-first-10-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-018-deep-read": {
          "brandId": "brand-candidate-20260828-018",
          "expectedName": "融设计图书馆",
          "subjectName": "融设计图书馆",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "融设计图书馆｜东坞礼堂保护性修缮",
          "url": "https://www.ronglibrary.com/urban-rural/work/RongDesignLibrary",
          "authority": "brand-website",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-49-first-10-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-018-store": {
          "brandId": "brand-candidate-20260828-018",
          "expectedName": "融设计图书馆",
          "subjectName": "融设计图书馆",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "融设计图书馆｜门店范围与城市边界",
          "url": "https://www.ronglibrary.com/visit",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官网参观页仅列青山村东坞礼堂馆址"
        },
        "brand-candidate-20260828-019-philosophy": {
          "brandId": "brand-candidate-20260828-019",
          "expectedName": "Fotografiska Shanghai",
          "subjectName": "Fotografiska Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "上海场馆官网｜Fotografiska Shanghai品牌理念",
          "url": "https://shanghai.fotografiska.com/zh",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-49-first-10-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-019-deep-read": {
          "brandId": "brand-candidate-20260828-019",
          "expectedName": "Fotografiska Shanghai",
          "subjectName": "Fotografiska Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "ArchDaily｜Fotografiska Shanghai / AIM Architecture",
          "url": "https://www.archdaily.com/1018522/fotografiska-shanghai-aim-architecture",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "视觉终审使用同品牌空间项目页作为品牌深读，不沿用泛场馆介绍。"
        },
        "brand-candidate-20260828-019-store": {
          "brandId": "brand-candidate-20260828-019",
          "expectedName": "Fotografiska Shanghai",
          "subjectName": "Fotografiska Shanghai",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "Fotografiska Shanghai｜门店范围与城市边界",
          "url": "https://shanghai.fotografiska.com/zh",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "上海官网仅列光复路127号场馆"
        },
        "brand-candidate-20260828-039-philosophy": {
          "brandId": "brand-candidate-20260828-039",
          "expectedName": "春台 Spring Patio",
          "subjectName": "春台 Spring Patio",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "2026建筑项目报道｜春台 Spring Patio品牌理念",
          "url": "https://www.archdaily.cn/cn/1039693/chun-tai-spring-patio-men-she",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-49-first-10-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-039-deep-read": {
          "brandId": "brand-candidate-20260828-039",
          "expectedName": "春台 Spring Patio",
          "subjectName": "春台 Spring Patio",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "ArchDaily 中文｜春台 Spring Patio / 门舍",
          "url": "https://www.archdaily.cn/cn/1039693/chun-tai-spring-patio-men-she",
          "authority": "professional-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-49-first-10-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-039-store": {
          "brandId": "brand-candidate-20260828-039",
          "expectedName": "春台 Spring Patio",
          "subjectName": "春台 Spring Patio",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "春台 Spring Patio｜门店范围与城市边界",
          "url": "https://www.gooood.cn/spring-patio-by-amass.htm",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2026年两家建筑媒体对应成都一处具体餐厅酒吧空间；未上推品牌连锁总数"
        },
        "brand-candidate-20260828-022-philosophy": {
          "brandId": "brand-candidate-20260828-022",
          "expectedName": "红山ZOO文创·园内文创商店",
          "subjectName": "红山ZOO文创·园内文创商店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "动物个体故事、设计机制与经营回流报道｜红山ZOO文创·园内文创商店品牌理念",
          "url": "https://www.chinanews.com/cul/2024/06-21/10237902.shtml",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-022-deep-read": {
          "brandId": "brand-candidate-20260828-022",
          "expectedName": "红山ZOO文创·园内文创商店",
          "subjectName": "红山ZOO文创·园内文创商店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "中国新闻网｜红山动物园：小文创做出大生意",
          "url": "https://www.chinanews.com/cul/2024/06-21/10237902.shtml",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-022-store": {
          "brandId": "brand-candidate-20260828-022",
          "expectedName": "红山ZOO文创·园内文创商店",
          "subjectName": "红山ZOO文创·园内文创商店",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "红山ZOO文创·园内文创商店｜门店范围与城市边界",
          "url": "https://www.njhszoo.com/map",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2024媒体报道曾称5家文创店，2026官方导览仍标注多个文创点位，但当前地图未给可直接复核的点位总数。"
        },
        "brand-candidate-20260828-023-philosophy": {
          "brandId": "brand-candidate-20260828-023",
          "expectedName": "Canpet 犬岛公园",
          "subjectName": "Canpet 犬岛公园",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "2026实地采访与店长运营数据｜Canpet 犬岛公园品牌理念",
          "url": "https://gd.huaxia.com/c/2026/01/13/2109112.shtml",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-023-deep-read": {
          "brandId": "brand-candidate-20260828-023",
          "expectedName": "Canpet 犬岛公园",
          "subjectName": "Canpet 犬岛公园",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "华夏经纬网｜宠物公园只能遛狗？凭啥让宠主乐意买单？",
          "url": "https://gd.huaxia.com/c/2026/01/13/2109112.shtml",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-023-store": {
          "brandId": "brand-candidate-20260828-023",
          "expectedName": "Canpet 犬岛公园",
          "subjectName": "Canpet 犬岛公园",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "Canpet 犬岛公园｜门店范围与城市边界",
          "url": "https://gd.huaxia.com/c/2026/01/13/2109112.shtml",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "当前只确认保利时光里商圈这一处Canpet犬岛公园；1家是本次特定格式的已见点位数，不代表母公司全部宠物业态。"
        },
        "brand-candidate-20260828-030-philosophy": {
          "brandId": "brand-candidate-20260828-030",
          "expectedName": "PAWCODE 万事可宠",
          "subjectName": "PAWCODE 万事可宠",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "南京大学科技园创业项目报道｜PAWCODE 万事可宠品牌理念",
          "url": "https://sp.nju.edu.cn/1c/88/c24408a793736/page.htm",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-030-deep-read": {
          "brandId": "brand-candidate-20260828-030",
          "expectedName": "PAWCODE 万事可宠",
          "subjectName": "PAWCODE 万事可宠",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "南京大学国家大学科技园｜PAWCODE：重新定义人宠生活方式",
          "url": "https://sp.nju.edu.cn/1c/88/c24408a793736/page.htm",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-030-store": {
          "brandId": "brand-candidate-20260828-030",
          "expectedName": "PAWCODE 万事可宠",
          "subjectName": "PAWCODE 万事可宠",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "PAWCODE 万事可宠｜门店范围与城市边界",
          "url": "https://sw.wuhan.gov.cn/xwdt/gzdt/202606/t20260629_2814059.shtml",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2025品牌自述曾称2家长期店和6家快闪；2026公开资料又分别出现咸安坊、武汉K11等点位，长期店、快闪与商场柜位边界未闭环，暂不写总数。"
        },
        "brand-candidate-20260828-031-philosophy": {
          "brandId": "brand-candidate-20260828-031",
          "expectedName": "盘菜生书店",
          "subjectName": "盘菜生书店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "母品牌南食召内容转载｜盘菜生书店品牌理念",
          "url": "https://www.sina.cn/news/detail/5274986153247087.html",
          "authority": "brand-team-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-031-deep-read": {
          "brandId": "brand-candidate-20260828-031",
          "expectedName": "盘菜生书店",
          "subjectName": "盘菜生书店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "温度新闻｜菜市场旁的饮食书店：盘菜生的在地文化实践",
          "url": "https://www.66wz.com/wendu/system/2026/06/24/105793038.shtml",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-031-store": {
          "brandId": "brand-candidate-20260828-031",
          "expectedName": "盘菜生书店",
          "subjectName": "盘菜生书店",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "盘菜生书店｜门店范围与城市边界",
          "url": "https://www.66wz.com/wendu/system/2026/06/24/105793038.shtml",
          "authority": "media-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "公开资料只确认温州菜市场旁这一处盘菜生书店；按当前单一空间记录，不把母品牌南食召其他业务计为门店。"
        },
        "brand-candidate-20260828-033-philosophy": {
          "brandId": "brand-candidate-20260828-033",
          "expectedName": "刀锋书酒馆 × 日时夜影",
          "subjectName": "刀锋书酒馆 × 日时夜影",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "店主与新店型深访｜刀锋书酒馆 × 日时夜影品牌理念",
          "url": "https://finance.sina.cn/2025-07-08/detail-infeuruc4981362.d.html",
          "authority": "founder-direct-interview",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-candidate-20260828-033-deep-read": {
          "brandId": "brand-candidate-20260828-033",
          "expectedName": "刀锋书酒馆 × 日时夜影",
          "subjectName": "刀锋书酒馆 × 日时夜影",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "新浪财经｜刀锋书酒馆的新模型：餐饮如何反哺阅读",
          "url": "https://finance.sina.cn/2025-07-08/detail-infeuruc4981362.d.html",
          "authority": "founder-direct-interview",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 prior-next-15b-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-candidate-20260828-033-store": {
          "brandId": "brand-candidate-20260828-033",
          "expectedName": "刀锋书酒馆 × 日时夜影",
          "subjectName": "刀锋书酒馆 × 日时夜影",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city"
          ],
          "name": "刀锋书酒馆 × 日时夜影｜门店范围与城市边界",
          "url": "https://cqjlp.gov.cn/zwxx/qxdt/202604/t20260427_15638856.html",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "本记录仅指九龙坡当前的“刀锋书酒馆×日時夜影”完整复合店型，按1处记录；已关闭的解放碑旧店不计入。"
        },
        "brand-expansion-20260829-006-philosophy": {
          "brandId": "brand-expansion-20260829-006",
          "expectedName": "TopSupport 体思",
          "subjectName": "TopSupport 体思",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌官网方法体系｜TopSupport 体思品牌理念",
          "url": "https://www.topsupport.cn/front/pages/index_aboutWe.html",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-006-deep-read": {
          "brandId": "brand-expansion-20260829-006",
          "expectedName": "TopSupport 体思",
          "subjectName": "TopSupport 体思",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "厦门大学体育教学部｜走进大运体思：竞技训练与大众健康如何融合",
          "url": "https://tyjxb.xmu.edu.cn/info/1042/15918.htm",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-next-15-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-006-store": {
          "brandId": "brand-expansion-20260829-006",
          "expectedName": "TopSupport 体思",
          "subjectName": "TopSupport 体思",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "TopSupport 体思｜门店范围与城市边界",
          "url": "https://www.topsupport.cn/front/pages/index_aboutWe.html",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官网明确深圳中心；报道所称全国8大训练基地不等同于8家对公众开放门店"
        },
        "brand-expansion-20260829-035-philosophy": {
          "brandId": "brand-expansion-20260829-035",
          "expectedName": "慢书房",
          "subjectName": "慢书房",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "国家全民阅读网空间专文｜慢书房品牌理念",
          "url": "https://www.nationalreading.gov.cn/ydkj/swsh/202503/t20250306_886602.html",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-remaining-16-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-035-deep-read": {
          "brandId": "brand-expansion-20260829-035",
          "expectedName": "慢书房",
          "subjectName": "慢书房",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "国家全民阅读网｜113平方米慢书房里的城市阅读",
          "url": "https://www.nationalreading.gov.cn/ydkj/swsh/202503/t20250306_886602.html",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 new-remaining-16-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-035-store": {
          "brandId": "brand-expansion-20260829-035",
          "expectedName": "慢书房",
          "subjectName": "慢书房",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "慢书房｜门店范围与城市边界",
          "url": "https://www.nationalreading.gov.cn/ydkj/swsh/202503/t20250306_886602.html",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "国家全民阅读网确认观前街113平方米实体空间；2025年政府报道中的常熟方塔园店当时仍为筹建，未计入城市和店数。"
        },
        "brand-expansion-20260829-019-philosophy": {
          "brandId": "brand-expansion-20260829-019",
          "expectedName": "Green Ladies & Green Little",
          "subjectName": "Green Ladies & Green Little",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "香港社会企业名录｜Green Ladies & Green Little品牌理念",
          "url": "https://www.sehk.gov.hk/en/tree_mark.php?id=69",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 second-10-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-019-deep-read": {
          "brandId": "brand-expansion-20260829-019",
          "expectedName": "Green Ladies & Green Little",
          "subjectName": "Green Ladies & Green Little",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "圣雅各福群会｜Green Ladies & Green Little",
          "url": "https://gl.sjs.org.hk/greenladies/",
          "authority": "brand-website",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 second-10-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-019-store": {
          "brandId": "brand-expansion-20260829-019",
          "expectedName": "Green Ladies & Green Little",
          "subjectName": "Green Ladies & Green Little",
          "relationship": "same-brand",
          "purpose": [
            "store-count",
            "store-city",
            "store-address"
          ],
          "name": "Green Ladies & Green Little｜门店范围与城市边界",
          "url": "https://gl.sjs.org.hk/greenladies/",
          "authority": "brand-website",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "官方页当前列南丰纱厂116号铺"
        },
        "brand-expansion-20260829-034-philosophy": {
          "brandId": "brand-expansion-20260829-034",
          "expectedName": "不是书店",
          "subjectName": "不是书店",
          "relationship": "same-brand",
          "purpose": [
            "identity",
            "philosophy"
          ],
          "name": "品牌与主理人报道｜不是书店品牌理念",
          "url": "https://www.jiemian.com/article/6377133.html",
          "authority": "professional-brand-analysis",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 second-10-enrichment.json 绑定该品牌主体与理念摘要，不使用近似品牌资料。"
        },
        "brand-expansion-20260829-034-deep-read": {
          "brandId": "brand-expansion-20260829-034",
          "expectedName": "不是书店",
          "subjectName": "不是书店",
          "relationship": "same-brand",
          "purpose": [
            "deep-read"
          ],
          "name": "界面新闻｜不是书店品牌与主理人报道",
          "url": "https://www.jiemian.com/article/6377133.html",
          "authority": "media-brand-analysis",
          "contentType": "article",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "补证文件 second-10-enrichment.json 已将该链接绑定为品牌深读。"
        },
        "brand-expansion-20260829-034-store": {
          "brandId": "brand-expansion-20260829-034",
          "expectedName": "不是书店",
          "subjectName": "不是书店",
          "relationship": "same-brand",
          "purpose": [
            "store-city"
          ],
          "name": "不是书店｜门店范围与城市边界",
          "url": "https://www.qingdao.gov.cn/ywdt/zwyw/202510/t20251008_10324353.shtml",
          "authority": "government-brand-profile",
          "observedAt": "2026-08-30",
          "checkedAt": "2026-08-30",
          "linkStatus": "active",
          "basis": "2025青岛政务网仅证明李沧店当期运营，不能推导全品牌门店数"
        }
      }
    }
  };

  const byId = new Map(system.brandLibrary.map(item => [item.id, item]));
  const byName = new Map(system.brandLibrary.map(item => [item.name, item]));
  extension.brands.forEach(item => {
    const idMatch = byId.get(item.id);
    const nameMatch = byName.get(item.name);
    if (idMatch || nameMatch) {
      if (idMatch?.name !== item.name || nameMatch?.id !== item.id) {
        throw new Error(`批准品牌发生ID或名称冲突：${item.id} / ${item.name}`);
      }
      return;
    }
    system.brandLibrary.push({ ...item });
    byId.set(item.id, item);
    byName.set(item.name, item);
  });

  const priorGroups = new Map((system.brandGroups || []).map(group => [group.category, group]));
  const counts = system.brandLibrary.reduce((result, item) => {
    result[item.category] = (result[item.category] || 0) + 1;
    return result;
  }, {});
  system.brandGroups = Object.entries(counts).map(([category, count]) => ({
    ...(priorGroups.get(category) || {}),
    category,
    count,
  }));

  globalScope.COMMERCIAL_DNA_APPROVED_BRAND_EXPANSION_V0_1 = deepFreeze(extension);
})(typeof window !== "undefined" ? window : globalThis);
