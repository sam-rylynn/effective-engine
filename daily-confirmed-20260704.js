(function () {
  const system = window.COMMERCIAL_DNA_SYSTEM;
  if (!system) return;

  system.sources = {
    ...system.sources,
    dsbeQuota20260704: {
      name: "按型补库｜空洞型 DSBE 定向补充 2026-07-04",
      url: "",
      note: "依据《品牌库与样本库补库配额计划_v1.md》：DSBE（目的地·稳态·标准·低频）此前 0 个，本批补 6 个仓储会员店/奥莱/主题体验样本。热度四分项为 Claude 依公开报道估分（非实时抓取），入库后可用 refresh-brand-heat 校准。",
    },
    dsbe20260704WarehouseClub: {
      name: "仓储会员店超300亿规模：山姆、Costco｜公开报道",
      url: "https://news.qq.com/rain/a/20240522A08WBQ00",
      note: "会员制仓储超市规模、城市覆盖与拓店节奏公开报道，可核山姆27城51店与Costco内地门店。",
    },
    dsbe20260704HemaX: {
      name: "盒马、山姆、Costco 会员店抢滩升级｜CBNData",
      url: "https://www.cbndata.com/information/160248",
      note: "盒马X会员店京沪宁苏等10店、会员制标准化选品的公开分析。",
    },
    dsbe20260704Metro: {
      name: "麦德龙会员店模式分析｜ShopEx",
      url: "https://www.shopex.cn/news/archives/20658.html",
      note: "麦德龙会员制标准化商超、目的地型批量采购模式公开分析。",
    },
    dsbe20260704Florentia: {
      name: "佛罗伦萨小镇官网",
      url: "https://www.florentiavillage.com/",
      note: "意式名品奥特莱斯官网，近300家品牌折扣店、全国6镇标准化运营。",
    },
    dsbe20260704Haichang: {
      name: "上海海昌海洋公园官网",
      url: "https://www.haichangoceanpark.com/shanghai/",
      note: "4A景区、五大主题区+六大动物馆，标准化大型海洋主题体验。",
    },
  };

  const confirmedBrands = [
    {
      id: "brand-confirmed-20260704-dsbe-001",
      name: "山姆会员店 Sam's Club",
      city: "全国",
      category: "目的地零售与体验",
      subCategory: "仓储会员超市",
      brandRole: "会员制仓储目的地主力店",
      maturity: "按型补库入库｜DSBE 定向｜热度待校准",
      tags: ["仓储会员店", "山姆", "目的地采购", "标准化选品", "低频专程", "非标目的地锚点"],
      fitDNA: ["DSBE"],
      heatScore: 69,
      socialHeatScore: 62,
      placeHeatScore: 90,
      nonstandardProofScore: 42,
      recentSignalScore: 88,
      heatStatus: "估分｜27城51店会员制高粘性、爆品小红书有真实声量、2025-2026持续拓城；非标落地弱（独立大盒子非街区）",
      spaceDemand: "需超大面积、充足停车、冷链仓储与会员动线，适合大体量目的地项目的锚点主力。",
      fitNote: "适合大型目的地商业、城市外围TOD和郊区综合体作为低频高客单的采购锚点，为项目提供稳态到访底盘。",
      risk: "标准化大盒子与街区型非标气质差异大，引入前需确认面积/层高/卸货与会员客群重叠度。",
      sourceKeys: ["dsbeQuota20260704", "dsbe20260704WarehouseClub"],
      verification: "按型补库入库｜公开报道核门店城市数｜热度为估分待校准",
      localCity: "",
      xhsUrl: "",
      dpUrl: "https://news.qq.com/rain/a/20240522A08WBQ00",
      xhsVisibleNotes: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260704-dsbe-002",
      name: "Costco 开市客",
      city: "全国",
      category: "目的地零售与体验",
      subCategory: "仓储会员超市",
      brandRole: "会员制仓储目的地主力店",
      maturity: "按型补库入库｜DSBE 定向｜热度待校准",
      tags: ["仓储会员店", "开市客", "目的地采购", "标准化大包装", "低频专程", "非标目的地锚点"],
      fitDNA: ["DSBE"],
      heatScore: 64,
      socialHeatScore: 55,
      placeHeatScore: 85,
      nonstandardProofScore: 40,
      recentSignalScore: 78,
      heatStatus: "估分｜内地闵行/浦东等门店会员制、标准化大包装选品、开业客流强；非标落地弱",
      spaceDemand: "需超大面积、大型停车场与仓储卸货，适合郊区目的地综合体锚点。",
      fitNote: "适合郊区大盘、TOD 和城市门户型项目作为低频采购目的地锚点。",
      risk: "选址对停车与人口密度要求高，与小体量非标街区适配度低。",
      sourceKeys: ["dsbeQuota20260704", "dsbe20260704WarehouseClub"],
      verification: "按型补库入库｜公开报道核内地门店｜热度为估分待校准",
      localCity: "",
      xhsUrl: "",
      dpUrl: "https://news.qq.com/rain/a/20240522A08WBQ00",
      xhsVisibleNotes: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260704-dsbe-003",
      name: "盒马X会员店",
      city: "全国",
      category: "目的地零售与体验",
      subCategory: "仓储会员超市",
      brandRole: "本土会员制仓储目的地店",
      maturity: "按型补库入库｜DSBE 定向｜热度待校准",
      tags: ["仓储会员店", "盒马X", "本土会员店", "标准化选品", "低频专程", "非标目的地锚点"],
      fitDNA: ["DSBE"],
      heatScore: 64,
      socialHeatScore: 58,
      placeHeatScore: 78,
      nonstandardProofScore: 45,
      recentSignalScore: 80,
      heatStatus: "估分｜京沪宁苏等10店、本土会员制标准化、盒马体系小红书声量尚可；非标落地中等偏弱",
      spaceDemand: "需大面积与冷链仓储，可结合线上履约，适合目的地综合体主力。",
      fitNote: "适合本土目的地项目和新区综合体，作为会员制采购锚点补稳态客流。",
      risk: "会员店业态本身仍在调整期，拓店与关店信号需持续跟踪。",
      sourceKeys: ["dsbeQuota20260704", "dsbe20260704HemaX"],
      verification: "按型补库入库｜CBNData 核门店｜热度为估分待校准",
      localCity: "",
      xhsUrl: "",
      dpUrl: "https://www.cbndata.com/information/160248",
      xhsVisibleNotes: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260704-dsbe-004",
      name: "麦德龙会员店 Metro",
      city: "全国",
      category: "目的地零售与体验",
      subCategory: "仓储会员超市",
      brandRole: "会员制仓储批量采购店",
      maturity: "按型补库入库｜DSBE 定向｜热度待校准",
      tags: ["仓储会员店", "麦德龙", "会员制", "标准化商超", "低频批量采购", "非标目的地锚点"],
      fitDNA: ["DSBE"],
      heatScore: 50,
      socialHeatScore: 38,
      placeHeatScore: 70,
      nonstandardProofScore: 38,
      recentSignalScore: 55,
      heatStatus: "估分｜会员制标准化商超、目的地型批量采购；内容声量与近期扩张信号偏弱",
      spaceDemand: "需大面积与卸货仓储，适合成熟城区目的地采购点位。",
      fitNote: "适合面向家庭与B端的目的地采购场景，稳态复购但内容属性低。",
      risk: "内容与拓店信号在四家会员店中最弱，作为补型样本、非优先推荐。",
      sourceKeys: ["dsbeQuota20260704", "dsbe20260704Metro"],
      verification: "按型补库入库｜ShopEx 核模式｜热度为估分待校准",
      localCity: "",
      xhsUrl: "",
      dpUrl: "https://www.shopex.cn/news/archives/20658.html",
      xhsVisibleNotes: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260704-dsbe-005",
      name: "佛罗伦萨小镇（浦东）",
      city: "上海",
      category: "目的地零售与体验",
      subCategory: "名品奥特莱斯",
      brandRole: "意式风格名品奥莱目的地",
      maturity: "按型补库入库｜DSBE 定向｜热度待校准",
      tags: ["奥特莱斯", "佛罗伦萨小镇", "名品折扣", "目的地购物", "低频专程", "标准化目的地"],
      fitDNA: ["DSBE"],
      heatScore: 59,
      socialHeatScore: 48,
      placeHeatScore: 80,
      nonstandardProofScore: 45,
      recentSignalScore: 60,
      heatStatus: "估分｜近300家品牌折扣店、意式街区场景、全国6镇标准化；专程购物目的地、到访低频",
      spaceDemand: "需大体量独立地块与主题街区营造，适合城市外围目的地开发。",
      fitNote: "适合城市门户、郊区文旅和目的地商业，作为低频专程的品牌折扣锚点。",
      risk: "奥莱业态受品牌折扣供给与电商冲击影响，需看客流与品牌汰换。",
      sourceKeys: ["dsbeQuota20260704", "dsbe20260704Florentia"],
      verification: "按型补库入库｜官网核品牌数｜热度为估分待校准",
      localCity: "上海",
      xhsUrl: "",
      dpUrl: "https://www.florentiavillage.com/",
      xhsVisibleNotes: "",
      dpReviewMax: "",
      dpAvgPrice: "",
    },
    {
      id: "brand-confirmed-20260704-dsbe-006",
      name: "上海海昌海洋公园",
      city: "上海",
      category: "目的地零售与体验",
      subCategory: "海洋主题公园",
      brandRole: "大型海洋主题体验目的地",
      maturity: "按型补库入库｜DSBE 定向｜热度待校准",
      tags: ["主题公园", "海洋馆", "亲子目的地", "标准化体验", "低频专程", "目的地引流"],
      fitDNA: ["DSBE"],
      heatScore: 61,
      socialHeatScore: 55,
      placeHeatScore: 78,
      nonstandardProofScore: 48,
      recentSignalScore: 58,
      heatStatus: "估分｜4A景区五大主题区+六大动物馆、亲子打卡内容稳定；大型标准化体验、专程且低频",
      spaceDemand: "需超大占地、场馆工程与动物养护体系，适合文旅目的地开发主力。",
      fitNote: "适合文旅综合体和亲子目的地项目，作为低频专程的大型体验引流极。",
      risk: "重资产大型体验投资与运营门槛高，非一般非标项目可承载，作目的地标杆参考。",
      sourceKeys: ["dsbeQuota20260704", "dsbe20260704Haichang"],
      verification: "按型补库入库｜官网核场馆｜热度为估分待校准",
      localCity: "上海",
      xhsUrl: "",
      dpUrl: "https://www.haichangoceanpark.com/shanghai/",
      xhsVisibleNotes: "",
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

  const grouped = system.brandLibrary.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});
  system.brandGroups = Object.entries(grouped).map(([category, count]) => ({
    category,
    count,
    defaultSpace: category.includes("目的地零售") ? "优先补充大面积、停车、仓储/卸货、会员或票务体系与目的地引流条件。"
      : category.includes("地方风物") ? "优先补充伴手礼陈列、游客动线、地方叙事、可带走产品和联名包装条件。"
      : category.includes("展览展馆") ? "优先补充展陈面积、票务/活动机制、换展频率、IP 授权和媒体传播资源。"
      : category.includes("夜经济") ? "优先补充夜间营业许可、外摆边界、声量管理、酒水条件和安保运营能力。"
      : category.includes("文创") ? "优先补充本地内容、文创零售、城市礼物和活动合作模式。"
      : "优先补充标准店型、快闪店型、外摆和工程条件。",
  }));
})();
