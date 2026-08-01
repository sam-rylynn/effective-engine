(function () {
  const system = window.COMMERCIAL_DNA_SYSTEM;
  if (!system) return;

  system.sources = {
    ...system.sources,
    dailyDeepDive20260703: {
      name: "用户确认入库｜每日非标商业品牌与项目深挖 2026-07-03",
      url: "",
      note: "用户确认“直接入库”。本批包含7个品牌样本与4个非标项目样本；发现池样本暂不入库。原始清单：项目根目录 daily-dna-deep-dive-2026-07-03.md（内部文档，不外链）。",
    },
    dailyBrand20260703DuiDe: {
      name: "DuiDe Coffee对的咖啡｜大众点评/公开报道",
      url: "https://www.dianping.com/shop/k8QCm9lKdlQszpZW/photos/tag-%E4%BB%B7%E7%9B%AE%E8%A1%A8",
      note: "大众点评门店实拍121张；三联生活周刊、国际在线等公开报道可核验冠军咖啡师与贵阳咖啡声量。",
    },
    dailyBrand20260703George: {
      name: "乔治队长咖啡｜大众点评/机场店/公开报道",
      url: "https://www.sl.gov.cn/xwdt/sldt/202603/t20260320_89890920.html",
      note: "2025世界咖啡冲煮大赛冠军品牌，贵阳机场店与大众点评用户笔记可核验。",
    },
    dailyBrand20260703Ruiyiniao: {
      name: "瑞银鸟｜携程/公开报道",
      url: "https://www.gzstv.com/a/8228599de2d64c3d908f3316035eedb2",
      note: "携程购物页显示门店评价；公开报道显示20余家店、非遗产品年销售额突破7000万元。",
    },
    dailyBrand20260703Duan: {
      name: "段氏奇香花生米｜大众点评/公开报道",
      url: "https://www.dianping.com/shop/k2UvwhKrMKbM8n1b/photos?pg=48",
      note: "大众点评长嘉汇店用户实拍980张；公开报道称品牌源于1890年。",
    },
    dailyBrand20260703Huangshi: {
      name: "荒石公园｜大众点评/源野案例报道",
      url: "https://www.dianping.com/discovery/667858032",
      note: "大众点评可核验REGULAR源野门店；川观新闻记录其作为本土自然艺术工作室落地源野。",
    },
    dailyBrand20260703CatMuseum: {
      name: "厦门猫咪博物馆｜大众点评/高德/公开旅行内容",
      url: "https://www.dianping.com/shop/68078311/photos",
      note: "大众点评用户实拍10437张；高德厦门状元榜可核沙坡尾艺术西区动线。",
    },
    dailyBrand20260703Huaji: {
      name: "华记杂货铺·华记旧物咖｜门店/公开报道",
      url: "https://m.city8.com/fz/cater/8b6swv74132wbae3c8",
      note: "城市吧可核门店地址电话；福建省政府文章记录其从60㎡快闪成长为1500㎡高流量门店。",
    },
    dailyProject20260703Qingyun: {
      name: "贵阳青云路步行街/青云市集｜人民网/新华网",
      url: "https://gz.people.com.cn/BIG5/n2/2026/0125/c394150-41482440.html",
      note: "人民网报道2025年客流突破2500万人次、540余家商户；新华网可核旧厂改造和国家级旅游休闲街区。",
    },
    dailyProject20260703Shibati: {
      name: "重庆十八梯传统风貌区｜政府/赢商网/风险线索",
      url: "https://m.winshang.com/news730994.html",
      note: "重庆市政府、赢商网与Tripadvisor共同构成历史街区更新、年轻品牌与原真性争议证据。",
    },
    dailyProject20260703Yantaishan: {
      name: "福州烟台山商业漫步街区｜政府/新华网/东南网",
      url: "https://www.fujian.gov.cn/zwgk/ztzl/sxzygwzxsgzx/sdjj/wvjj/202312/t20231223_6365799.htm",
      note: "近300商户、主理人占比、华记孵化、分片运营与修缮成本均有公开证据。",
    },
    dailyProject20260703Lihuangpi: {
      name: "武汉黎黄陂路历史风貌街区｜武汉市政府/荆楚网",
      url: "https://www.wuhan.gov.cn/sy/whyw/202606/t20260628_2813984.shtml",
      note: "武汉市政府报道外摆管理智慧平台、100个摊位与咖啡一条街；荆楚网可核历史风貌步行街修复。",
    },
  };

  const confirmedBrands = [
    {
      id: "brand-confirmed-20260703-001",
      name: "对的咖啡",
      city: "贵阳",
      category: "咖啡烘焙饮品",
      subCategory: "冠军精品咖啡/在地特调",
      brandRole: "贵阳本地冠军精品咖啡",
      maturity: "用户确认入库｜已补点评/公开报道",
      tags: ["贵阳", "DuiDe Coffee", "冠军咖啡", "贵州风物特调", "本地品牌", "非标适配"],
      fitDNA: ["LCMR", "LCME", "DCMR"],
      heatScore: 86,
      socialHeatScore: 92,
      placeHeatScore: 82,
      nonstandardProofScore: 82,
      recentSignalScore: 90,
      heatStatus: "用户确认入库｜大众点评实拍121张｜贵阳咖啡小红书11万+笔记公开报道",
      spaceDemand: "优先补标准店型、吧台面积、手冲/特调出杯能力、快闪模型和联名城市礼物SKU。",
      fitNote: "适合贵阳老城咖啡citywalk、青云市集、观山湖、公园配套和历史街区小体量店。",
      risk: "正式招商前仍需确认现有门店数量、异地快闪能力和贵州风物特调的稳定供应。",
      sourceKeys: ["dailyDeepDive20260703", "dailyBrand20260703DuiDe"],
      verification: "用户确认入库｜已补点评/公开报道",
      localCity: "贵阳",
      xhsUrl: "",
      dpUrl: "https://www.dianping.com/shop/k8QCm9lKdlQszpZW/photos/tag-%E4%BB%B7%E7%9B%AE%E8%A1%A8",
      xhsVisibleNotes: "",
      xhsLikeSum: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260703-002",
      name: "乔治队长咖啡",
      city: "贵阳",
      category: "咖啡烘焙饮品",
      subCategory: "冠军精品咖啡/烘豆",
      brandRole: "贵阳本地冠军咖啡与城市窗口品牌",
      maturity: "用户确认入库｜已补点评/机场店/公开报道",
      tags: ["贵阳", "Captain George", "乔治队长", "世界冠军咖啡", "机场店", "本地品牌", "非标适配"],
      fitDNA: ["LCMR", "LCME", "DSMR"],
      heatScore: 88,
      socialHeatScore: 92,
      placeHeatScore: 84,
      nonstandardProofScore: 84,
      recentSignalScore: 94,
      heatStatus: "用户确认入库｜大众点评用户笔记可核｜2026贵阳机场店公开报道",
      spaceDemand: "优先补门店模型、烘豆零售占比、机场/街区双模型、快闪和咖啡豆伴手礼能力。",
      fitNote: "适合贵阳咖啡城市名片、交通枢纽、历史街巷、城市礼物和精品咖啡社群场景。",
      risk: "冠军效应带来排队与期待差，正式合作前需核验品控、客诉和跨项目运营能力。",
      sourceKeys: ["dailyDeepDive20260703", "dailyBrand20260703George"],
      verification: "用户确认入库｜已补点评/机场店/公开报道",
      localCity: "贵阳",
      xhsUrl: "",
      dpUrl: "https://www.dianping.com/discovery/1981989819",
      xhsVisibleNotes: "",
      xhsLikeSum: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260703-003",
      name: "瑞银鸟",
      city: "贵阳",
      category: "地方风物与城市礼物",
      subCategory: "非遗银饰/文创零售",
      brandRole: "贵州非遗城市礼物品牌",
      maturity: "用户确认入库｜已补携程评价/公开报道",
      tags: ["贵阳", "贵州非遗", "银饰", "城市礼物", "文创零售", "非标适配"],
      fitDNA: ["LCME", "DCME", "DCMR"],
      heatScore: 88,
      socialHeatScore: 82,
      placeHeatScore: 84,
      nonstandardProofScore: 90,
      recentSignalScore: 88,
      heatStatus: "用户确认入库｜携程门店4.8分36评｜公开报道20余家店/年销售额7000万+",
      spaceDemand: "优先补伴手礼陈列、非遗体验工坊、研学活动、联名包装和游客动线承接能力。",
      fitNote: "适合青云市集、青岩古镇、文保街区、文化园区和城市礼物空间。",
      risk: "需区分工艺品牌店、文创店和体验店模型；不同门店商品结构可能差异较大。",
      sourceKeys: ["dailyDeepDive20260703", "dailyBrand20260703Ruiyiniao"],
      verification: "用户确认入库｜已补携程评价/公开报道",
      localCity: "贵阳",
      xhsUrl: "",
      dpUrl: "https://hk.trip.com/travel-guide/shops/anshun/city-56662163/",
      xhsVisibleNotes: "",
      xhsLikeSum: "",
      dpReviewMax: 36,
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260703-004",
      name: "段氏奇香花生米",
      city: "重庆",
      category: "地方风物与城市礼物",
      subCategory: "老字号零食/城市伴手礼",
      brandRole: "重庆本地老字号伴手礼",
      maturity: "用户确认入库｜已补大众点评/公开报道",
      tags: ["重庆", "老字号", "地方风物", "伴手礼", "下浩里", "长嘉汇", "非标适配"],
      fitDNA: ["LCMR", "DSME", "DCBR"],
      heatScore: 87,
      socialHeatScore: 80,
      placeHeatScore: 90,
      nonstandardProofScore: 86,
      recentSignalScore: 82,
      heatStatus: "用户确认入库｜大众点评长嘉汇店实拍980张｜公开报道源于1890年",
      spaceDemand: "优先补伴手礼小铺、快闪柜、游客动线陈列和节庆礼盒合作模式。",
      fitNote: "适合重庆历史街区、山城老街、游客型街区和地方风物伴手礼节点。",
      risk: "更适合作为烟火锚点和伴手礼补位，不宜按高客单生活方式零售预估坪效。",
      sourceKeys: ["dailyDeepDive20260703", "dailyBrand20260703Duan"],
      verification: "用户确认入库｜已补大众点评/公开报道",
      localCity: "重庆",
      xhsUrl: "",
      dpUrl: "https://www.dianping.com/shop/k2UvwhKrMKbM8n1b/photos?pg=48",
      xhsVisibleNotes: "",
      xhsLikeSum: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260703-005",
      name: "荒石公园",
      city: "成都",
      category: "文创书店艺术",
      subCategory: "自然艺术/植物标本/蛋糕咖啡",
      brandRole: "成都本地自然艺术工作室品牌",
      maturity: "用户确认入库｜已补大众点评/源野案例",
      tags: ["成都", "REGULAR源野", "自然艺术", "植物标本", "蛋糕咖啡", "本地品牌", "非标适配"],
      fitDNA: ["LCME", "DCME", "DCMR"],
      heatScore: 88,
      socialHeatScore: 84,
      placeHeatScore: 82,
      nonstandardProofScore: 90,
      recentSignalScore: 88,
      heatStatus: "用户确认入库｜大众点评源野门店笔记可核｜川观新闻源野案例可核",
      spaceDemand: "优先补蛋糕/咖啡/植物/标本/文创各模块面积，确认可复制模块和外摆条件。",
      fitNote: "适合城市公园型、下沉广场、自然主题街区、艺术园区和室内造园项目。",
      risk: "不是纯咖啡品牌；复制时要确认核心是甜品、植物、标本、文创还是整体自然艺术内容。",
      sourceKeys: ["dailyDeepDive20260703", "dailyBrand20260703Huangshi"],
      verification: "用户确认入库｜已补大众点评/源野案例",
      localCity: "成都",
      xhsUrl: "",
      dpUrl: "https://www.dianping.com/discovery/667858032",
      xhsVisibleNotes: "",
      xhsLikeSum: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260703-006",
      name: "厦门猫咪博物馆",
      city: "厦门",
      category: "展览展馆与内容 IP",
      subCategory: "萌宠内容IP/文创零售",
      brandRole: "厦门猫主题街区锚点IP",
      maturity: "用户确认入库｜已补大众点评/高德动线",
      tags: ["厦门", "顶澳仔猫街", "猫咪博物馆", "萌宠IP", "文创零售", "非标适配"],
      fitDNA: ["LCMR", "DCME", "DCMR"],
      heatScore: 89,
      socialHeatScore: 84,
      placeHeatScore: 92,
      nonstandardProofScore: 84,
      recentSignalScore: 84,
      heatStatus: "用户确认入库｜大众点评实拍10437张｜高德沙坡尾榜单动线可核",
      spaceDemand: "优先补猫咪福利、卫生管理、文创销售占比、票务/撸猫时段和社群活动机制。",
      fitNote: "适合沙坡尾、猫主题街区、萌宠内容IP、文创街区和轻体验型非标项目。",
      risk: "有“名不符实/真实体验弱于打卡”的争议，必须核验动物福利、卫生和长期运营稳定性。",
      sourceKeys: ["dailyDeepDive20260703", "dailyBrand20260703CatMuseum"],
      verification: "用户确认入库｜已补大众点评/高德动线",
      localCity: "厦门",
      xhsUrl: "",
      dpUrl: "https://www.dianping.com/shop/68078311/photos",
      xhsVisibleNotes: "",
      xhsLikeSum: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260703-007",
      name: "华记杂货铺·华记旧物咖",
      city: "福州",
      category: "文创书店艺术",
      subCategory: "复古杂货/旧物咖啡/文创集合",
      brandRole: "福州本地主理人杂货集合品牌",
      maturity: "用户确认入库｜已补门店/公开报道",
      tags: ["福州", "烟台山", "华记杂货铺", "旧物咖", "主理人", "文创集合", "非标适配"],
      fitDNA: ["LCMR", "DCME", "DCMR"],
      heatScore: 90,
      socialHeatScore: 84,
      placeHeatScore: 84,
      nonstandardProofScore: 94,
      recentSignalScore: 90,
      heatStatus: "用户确认入库｜门店地址电话可核｜公开报道1500㎡/日均流量约5000人次",
      spaceDemand: "优先补商品原创比例、旧物/咖啡/服饰/文创面积拆分、快闪放大路径和价格带。",
      fitNote: "适合烟台山、上下杭、历史街区、文创园和本地主理人孵化型项目。",
      risk: "需判断是可输出品牌还是依赖烟台山客流的单点杂货流量店；异地复制边界较强。",
      sourceKeys: ["dailyDeepDive20260703", "dailyBrand20260703Huaji"],
      verification: "用户确认入库｜已补门店/公开报道",
      localCity: "福州",
      xhsUrl: "",
      dpUrl: "https://m.city8.com/fz/cater/8b6swv74132wbae3c8",
      xhsVisibleNotes: "",
      xhsLikeSum: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
  ];

  const library = system.brandLibrary || [];
  const byName = new Map(library.map(item => [item.name, item]));

  function mergeUnique(a = [], b = []) {
    return Array.from(new Set([...(Array.isArray(a) ? a : []), ...(Array.isArray(b) ? b : [])].filter(Boolean)));
  }

  for (const item of confirmedBrands) {
    const existing = byName.get(item.name);
    if (existing) {
      Object.assign(existing, {
        ...item,
        id: existing.id || item.id,
        tags: mergeUnique(existing.tags, item.tags),
        fitDNA: mergeUnique(existing.fitDNA, item.fitDNA),
        sourceKeys: mergeUnique(existing.sourceKeys, item.sourceKeys),
        dpUrl: item.dpUrl || existing.dpUrl || "",
        xhsUrl: item.xhsUrl || existing.xhsUrl || "",
      });
    } else {
      library.push(item);
      byName.set(item.name, item);
    }
  }
  system.brandLibrary = library;

  const confirmedProjects = [
    {
      id: "target-confirmed-20260703-001",
      name: "贵阳青云路步行街 / 青云市集",
      city: "贵阳",
      category: "旧厂夜经济/老城文旅街区",
      dnaCode: "DCMR",
      tags: ["旧厂改造", "夜经济", "本地餐饮", "非遗文创", "国家级旅游休闲街区"],
      status: "已入库｜2026-07-03补操盘解读",
      sourceKeys: ["dailyDeepDive20260703", "dailyProject20260703Qingyun"],
      verification: "已入库｜人民网/新华网证据已补",
    },
    {
      id: "target-confirmed-20260703-002",
      name: "重庆十八梯传统风貌区",
      city: "重庆",
      category: "传统风貌区更新/山地文旅商业",
      dnaCode: "DCMR",
      tags: ["传统风貌区", "山地街区", "母城文化", "夜经济", "原真性风险"],
      status: "已入库｜2026-07-03补操盘解读",
      sourceKeys: ["dailyDeepDive20260703", "dailyProject20260703Shibati"],
      verification: "已入库｜政府/赢商网/风险线索已补",
    },
    {
      id: "target-confirmed-20260703-003",
      name: "福州烟台山商业漫步街区",
      city: "福州",
      category: "历史风貌区/主理人生态",
      dnaCode: "DCMR",
      tags: ["历史风貌", "百年建筑", "主理人生态", "首店", "修缮成本边界"],
      status: "已入库｜2026-08-01用户确认升级为DCMR运行时样本",
      sourceKeys: ["dailyDeepDive20260703", "dailyProject20260703Yantaishan"],
      verification: "用户确认运行时样本｜5条辅助证据｜未纳入六维正式证据库",
    },
    {
      id: "target-confirmed-20260703-004",
      name: "武汉黎黄陂路街区",
      city: "武汉",
      category: "历史风貌街区/咖啡外摆市集",
      dnaCode: "LCMR",
      tags: ["历史街区", "咖啡一条街", "外摆管理", "原创市集", "轻运营"],
      status: "已入库｜2026-07-03补操盘解读",
      sourceKeys: ["dailyDeepDive20260703", "dailyProject20260703Lihuangpi"],
      verification: "已入库｜武汉市政府/荆楚网证据已补",
    },
  ];

  const targetPool = system.nonstandardTargets || [];
  const byTargetName = new Map(targetPool.map(item => [item.name, item]));
  for (const item of confirmedProjects) {
    const existing = byTargetName.get(item.name);
    if (existing) {
      Object.assign(existing, {
        ...item,
        id: existing.id || item.id,
        tags: mergeUnique(existing.tags, item.tags),
        sourceKeys: mergeUnique(existing.sourceKeys, item.sourceKeys),
      });
    } else {
      targetPool.push(item);
      byTargetName.set(item.name, item);
    }
  }
  system.nonstandardTargets = targetPool;

  const grouped = system.brandLibrary.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  system.brandGroups = Object.entries(grouped).map(([category, count]) => ({
    category,
    count,
    defaultSpace: category.includes("地方风物") ? "优先补充伴手礼陈列、游客动线、地方叙事、可带走产品和联名包装条件。"
      : category.includes("展览展馆") ? "优先补充展陈面积、票务/活动机制、换展频率、IP 授权和媒体传播资源。"
      : category.includes("夜经济") ? "优先补充夜间营业许可、外摆边界、声量管理、酒水条件和安保运营能力。"
      : category.includes("文创") ? "优先补充本地内容、文创零售、城市礼物和活动合作模式。"
      : "优先补充标准店型、快闪店型、外摆和工程条件。",
  }));
})();
