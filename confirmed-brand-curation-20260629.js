(function () {
  const system = window.COMMERCIAL_DNA_SYSTEM;
  if (!system) return;

  system.sources = {
    ...system.sources,
    dailyConfirmedBrand20260629: {
      name: "用户确认入库｜每日品牌深挖 2026-06-29",
      url: "",
      note: "来自 2026-06-28 品牌深挖复核清单，用户于 2026-06-29 确认可进入品牌库；缺少点评/高德的品牌保留待补证据标记。",
    },
    dailyConfirmedBrand20260630: {
      name: "用户确认入库｜每日品牌深挖 2026-06-30",
      url: "",
      note: "用户确认部分候选不入库；其余证据闭合样本补全后进入品牌库。",
    },
    dailyBrand20260630Quchashan: {
      name: "去茶山｜小红书/大众点评/高德与公开报道",
      url: "",
      note: "贵州地方茶饮，点评门店图片与地图 POI 可核验，公开报道显示本地复购与多城拓展。",
    },
    dailyBrand20260630Shaan13: {
      name: "陕拾叁｜小红书/大众点评/地图与本地采集",
      url: "",
      note: "西安城市礼物/地方甜品 IP，2026-06-28 本地品牌采集已有点评 18373 评、人均 32 元样本。",
    },
    dailyBrand20260630Nuts: {
      name: "坚果LIVEHOUSE｜大众点评/场馆页/演出信息",
      url: "",
      note: "重庆老牌 LiveHouse，点评实拍图片、商业项目场馆页与演出排期可互相印证。",
    },
    dailyBrand20260630Vox: {
      name: "VOX LIVEHOUSE｜大众点评/高德/演出票务",
      url: "",
      note: "武汉音乐现场，点评门店、高德 POI、演出票务场馆地址与公开音乐资料可核验。",
    },
    dailyBrand20260630B10: {
      name: "深圳B10现场｜大众点评/地图/官网",
      url: "",
      note: "OCT-LOFT 音乐艺术现场，点评实拍图片、官网活动、地图点位和场馆介绍可核验。",
    },
  };

  const confirmedRows = [
    {
        "id": "brand-confirmed-20260629-001",
        "name": "TOTOMATO",
        "city": "重庆",
        "category": "咖啡烘焙饮品",
        "subCategory": "重庆本地咖啡",
        "brandRole": "重庆本地咖啡",
        "maturity": "用户确认入库｜到店证据已补",
        "tags": [
            "重庆",
            "本地品牌",
            "非标适配",
            "重庆本地咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "DCMR",
            "DSMR"
        ],
        "heatScore": 94,
        "socialHeatScore": 100,
        "placeHeatScore": 90,
        "nonstandardProofScore": 78,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜点评5667评",
        "spaceDemand": "已进入确认品牌库：继续补面积、店型、外摆、合作模式和拓店意愿。",
        "fitNote": "适合戴家巷、北仓、山城街区。",
        "risk": "已完成内容侧与点评侧初核，正式招商前仍需确认拓店意愿、门店模型和工程条件。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜已补点评证据",
        "localCity": "重庆",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 696,
        "dpReviewMax": 5667,
        "dpAvgPrice": 31
    },
    {
        "id": "brand-confirmed-20260629-002",
        "name": "积兴里Coffee",
        "city": "福州",
        "category": "咖啡烘焙饮品",
        "subCategory": "烟台山咖啡",
        "brandRole": "福州本地烟台山咖啡",
        "maturity": "用户确认入库｜到店证据已补",
        "tags": [
            "福州",
            "本地品牌",
            "非标适配",
            "烟台山咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "DCMR"
        ],
        "heatScore": 93,
        "socialHeatScore": 100,
        "placeHeatScore": 86,
        "nonstandardProofScore": 78,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜点评3824评",
        "spaceDemand": "已进入确认品牌库：继续补面积、店型、外摆、合作模式和拓店意愿。",
        "fitNote": "适合烟台山商业漫步街区、历史建筑更新。",
        "risk": "已完成内容侧与点评侧初核，正式招商前仍需确认拓店意愿、门店模型和工程条件。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜已补点评证据",
        "localCity": "福州",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 160,
        "dpReviewMax": 3824,
        "dpAvgPrice": 49
    },
    {
        "id": "brand-confirmed-20260629-003",
        "name": "默迹咖啡馆",
        "city": "厦门",
        "category": "咖啡烘焙饮品",
        "subCategory": "本地咖啡",
        "brandRole": "厦门本地咖啡",
        "maturity": "用户确认入库｜到店证据已补",
        "tags": [
            "厦门",
            "本地品牌",
            "非标适配",
            "本地咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "LCME"
        ],
        "heatScore": 92,
        "socialHeatScore": 100,
        "placeHeatScore": 88,
        "nonstandardProofScore": 78,
        "recentSignalScore": 96,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜点评4543评",
        "spaceDemand": "已进入确认品牌库：继续补面积、店型、外摆、合作模式和拓店意愿。",
        "fitNote": "适合社区生活方式、文艺街区。",
        "risk": "已完成内容侧与点评侧初核，正式招商前仍需确认拓店意愿、门店模型和工程条件。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜已补点评证据",
        "localCity": "厦门",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 1884,
        "dpReviewMax": 4543,
        "dpAvgPrice": 55
    },
    {
        "id": "brand-confirmed-20260629-004",
        "name": "三目仓咖啡",
        "city": "福州",
        "category": "咖啡烘焙饮品",
        "subCategory": "本地咖啡",
        "brandRole": "福州本地咖啡",
        "maturity": "用户确认入库｜到店证据已补",
        "tags": [
            "福州",
            "本地品牌",
            "非标适配",
            "本地咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "LCME"
        ],
        "heatScore": 92,
        "socialHeatScore": 100,
        "placeHeatScore": 82,
        "nonstandardProofScore": 78,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜点评2681评",
        "spaceDemand": "已进入确认品牌库：继续补面积、店型、外摆、合作模式和拓店意愿。",
        "fitNote": "适合三坊七巷、老城街巷、文化街区。",
        "risk": "已完成内容侧与点评侧初核，正式招商前仍需确认拓店意愿、门店模型和工程条件。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜已补点评证据",
        "localCity": "福州",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 750,
        "dpReviewMax": 2681,
        "dpAvgPrice": 39
    },
    {
        "id": "brand-confirmed-20260629-005",
        "name": "Juicy Bakery",
        "city": "厦门",
        "category": "咖啡烘焙饮品",
        "subCategory": "本地烘焙",
        "brandRole": "厦门本地烘焙",
        "maturity": "用户确认入库｜到店证据已补",
        "tags": [
            "厦门",
            "本地品牌",
            "非标适配",
            "本地烘焙"
        ],
        "fitDNA": [
            "LCME",
            "LCMR"
        ],
        "heatScore": 89,
        "socialHeatScore": 100,
        "placeHeatScore": 88,
        "nonstandardProofScore": 78,
        "recentSignalScore": 72,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜点评4866评",
        "spaceDemand": "已进入确认品牌库：继续补面积、店型、外摆、合作模式和拓店意愿。",
        "fitNote": "适合大学路、沙坡尾、街区小店组合。",
        "risk": "已完成内容侧与点评侧初核，正式招商前仍需确认拓店意愿、门店模型和工程条件。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜已补点评证据",
        "localCity": "厦门",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 258,
        "dpReviewMax": 4866,
        "dpAvgPrice": 30
    },
    {
        "id": "brand-confirmed-20260629-006",
        "name": "雀亦",
        "city": "贵阳",
        "category": "地方风物与城市礼物",
        "subCategory": "文创咖啡/城市礼物",
        "brandRole": "贵阳本地文创咖啡/城市礼物",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "贵阳",
            "本地品牌",
            "非标适配",
            "文创咖啡",
            "城市礼物"
        ],
        "fitDNA": [
            "LCMR",
            "LCME",
            "DCMR"
        ],
        "heatScore": 74,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 62,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合青云市集、青岩古镇、甲秀楼周边、公园街区。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "贵阳",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 6198,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-007",
        "name": "山野文创",
        "city": "贵阳",
        "category": "地方风物与城市礼物",
        "subCategory": "山野文创/城市礼物",
        "brandRole": "贵阳本地山野文创/城市礼物",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "贵阳",
            "本地品牌",
            "非标适配",
            "山野文创",
            "城市礼物"
        ],
        "fitDNA": [
            "LCMR",
            "LCME",
            "DCME"
        ],
        "heatScore": 74,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 62,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合旅游街区、城市礼物店、自然主题非标空间。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "贵阳",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 430,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-008",
        "name": "对的咖啡",
        "city": "贵阳",
        "category": "咖啡烘焙饮品",
        "subCategory": "主理人咖啡",
        "brandRole": "贵阳本地主理人咖啡",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "贵阳",
            "本地品牌",
            "非标适配",
            "主理人咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "LCME"
        ],
        "heatScore": 79,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 58,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合观山湖、公园配套、社区街区。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "贵阳",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 458,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-009",
        "name": "山生咖啡",
        "city": "重庆",
        "category": "咖啡烘焙饮品",
        "subCategory": "山城街巷咖啡",
        "brandRole": "重庆本地山城街巷咖啡",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "重庆",
            "本地品牌",
            "非标适配",
            "山城街巷咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "DCMR"
        ],
        "heatScore": 73,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 58,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合山城巷、戴家巷、坡地街区、文旅动线。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "重庆",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 1183,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-010",
        "name": "bluegaga coffee",
        "city": "重庆",
        "category": "咖啡烘焙饮品",
        "subCategory": "山城街巷咖啡",
        "brandRole": "重庆本地山城街巷咖啡",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "重庆",
            "本地品牌",
            "非标适配",
            "山城街巷咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "DCMR"
        ],
        "heatScore": 73,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 58,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合山城巷、坡地空间、打卡窗景。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "重庆",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 3731,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-011",
        "name": "懒鱼时光馆",
        "city": "重庆",
        "category": "咖啡烘焙饮品",
        "subCategory": "山地景观咖啡",
        "brandRole": "重庆本地山地景观咖啡",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "重庆",
            "本地品牌",
            "非标适配",
            "山地景观咖啡"
        ],
        "fitDNA": [
            "DSMR",
            "LCMR"
        ],
        "heatScore": 73,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 58,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合南山、山地景观、夜景型非标空间。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "重庆",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 797,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-012",
        "name": "咖飛狮",
        "city": "厦门",
        "category": "咖啡烘焙饮品",
        "subCategory": "闽南古厝咖啡",
        "brandRole": "厦门本地闽南古厝咖啡",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "厦门",
            "本地品牌",
            "非标适配",
            "闽南古厝咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "DCME",
            "DCMR"
        ],
        "heatScore": 73,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 58,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合沙坡尾、龙山文创园、古厝更新。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "厦门",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 1846,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-013",
        "name": "空杯计划",
        "city": "厦门",
        "category": "咖啡烘焙饮品",
        "subCategory": "实验咖啡/主理人咖啡",
        "brandRole": "厦门本地实验咖啡/主理人咖啡",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "厦门",
            "本地品牌",
            "非标适配",
            "实验咖啡",
            "主理人咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "DCMR"
        ],
        "heatScore": 73,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 58,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合沙坡尾、大学路、青年街区。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "厦门",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 997,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-014",
        "name": "光与尘咖啡空间",
        "city": "福州",
        "category": "文创书店艺术",
        "subCategory": "咖啡文创复合",
        "brandRole": "福州本地咖啡文创复合",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "福州",
            "本地品牌",
            "非标适配",
            "咖啡文创复合"
        ],
        "fitDNA": [
            "LCMR",
            "DCME"
        ],
        "heatScore": 74,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 62,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合烟台山、上下杭、坡地历史街区。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "福州",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 1168,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-015",
        "name": "大吃",
        "city": "福州",
        "category": "地方风物与城市礼物",
        "subCategory": "本地甜品/地方冰饭",
        "brandRole": "福州本地甜品/地方冰饭",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "福州",
            "本地品牌",
            "非标适配",
            "本地甜品",
            "地方冰饭"
        ],
        "fitDNA": [
            "LCBR",
            "LCMR"
        ],
        "heatScore": 73,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 58,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合三坊七巷、游客街区、城市小吃内容化。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "福州",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 3014,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260629-016",
        "name": "横贯咖啡",
        "city": "贵阳",
        "category": "咖啡烘焙饮品",
        "subCategory": "主理人咖啡",
        "brandRole": "贵阳本地主理人咖啡",
        "maturity": "用户确认入库｜待补点评/高德",
        "tags": [
            "贵阳",
            "本地品牌",
            "非标适配",
            "主理人咖啡"
        ],
        "fitDNA": [
            "LCMR",
            "LCME"
        ],
        "heatScore": 70,
        "socialHeatScore": 100,
        "placeHeatScore": 45,
        "nonstandardProofScore": 58,
        "recentSignalScore": 84,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜待补点评/高德",
        "spaceDemand": "已进入确认品牌库：优先补大众点评门店、高德/地图 POI、榜单和真实门店信息。",
        "fitNote": "适合老城街巷、社区更新、小体量街区。",
        "risk": "用户已确认方向，但到店侧证据仍需补齐；招商前必须补大众点评/高德/真实门店信息。",
        "sourceKeys": [
            "dailyConfirmedBrand20260629"
        ],
        "verification": "用户确认入库｜待补点评/高德",
        "localCity": "贵阳",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 263,
        "dpReviewMax": 0,
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260630-001",
        "name": "去茶山",
        "city": "贵阳",
        "category": "地方风物与城市礼物",
        "subCategory": "贵州茶饮/城市风物",
        "brandRole": "贵阳本地贵州茶饮/城市风物",
        "maturity": "用户确认入库｜已补点评/高德/公开报道",
        "tags": [
            "贵阳",
            "贵州地方茶饮",
            "城市风物",
            "非标适配"
        ],
        "fitDNA": [
            "LCMR",
            "DCMR",
            "DCME"
        ],
        "heatScore": 91,
        "socialHeatScore": 96,
        "placeHeatScore": 88,
        "nonstandardProofScore": 78,
        "recentSignalScore": 92,
        "heatStatus": "用户确认入库｜点评门店图片572张｜高德POI与公开报道可核",
        "spaceDemand": "优先补门店面积、外摆、旅游店/街区店模型和城市限定产品陈列。",
        "fitNote": "适合贵阳历史街区、城市礼物店、文旅街区和高辨识地方风物型非标项目。",
        "risk": "已有多城拓展信号，需区分本地旗舰店与标准商场店，避免把非标适配误判为普通茶饮连锁。",
        "sourceKeys": [
            "dailyConfirmedBrand20260630",
            "dailyBrand20260630Quchashan"
        ],
        "verification": "用户确认入库｜已补点评/高德/公开报道",
        "localCity": "贵阳",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": "",
        "dpReviewMax": "",
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260630-002",
        "name": "陕拾叁",
        "city": "西安",
        "category": "地方风物与城市礼物",
        "subCategory": "城市礼物/地方甜品IP",
        "brandRole": "西安本地城市礼物/地方甜品IP",
        "maturity": "用户确认入库｜已补点评/地图",
        "tags": [
            "西安",
            "城市礼物",
            "地方甜品",
            "非标适配"
        ],
        "fitDNA": [
            "LCBR",
            "LCMR",
            "DCBR"
        ],
        "heatScore": 96,
        "socialHeatScore": 100,
        "placeHeatScore": 100,
        "nonstandardProofScore": 78,
        "recentSignalScore": 100,
        "heatStatus": "用户确认入库｜小红书10条可见笔记｜点评18373评",
        "spaceDemand": "优先补游客店、街区店、伴手礼陈列、联名包装和节庆快闪条件。",
        "fitNote": "适合西安老菜场、历史街区、游客动线和城市礼物型非标空间。",
        "risk": "旅游客流依赖较强，需复核非景区社区场景的复购能力。",
        "sourceKeys": [
            "dailyConfirmedBrand20260630",
            "dailyBrand20260630Shaan13",
            "brandHeatAudit20260628"
        ],
        "verification": "用户确认入库｜已补点评/地图",
        "localCity": "西安",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": 1073,
        "dpReviewMax": 18373,
        "dpAvgPrice": 32
    },
    {
        "id": "brand-confirmed-20260630-003",
        "name": "坚果LIVEHOUSE",
        "city": "重庆",
        "category": "夜经济与音乐社交",
        "subCategory": "LiveHouse/音乐现场",
        "brandRole": "重庆本地LiveHouse/音乐现场",
        "maturity": "用户确认入库｜已补点评/场馆/演出证据",
        "tags": [
            "重庆",
            "LiveHouse",
            "夜经济",
            "音乐社交",
            "非标适配"
        ],
        "fitDNA": [
            "DSMR",
            "DCMR",
            "DCBR"
        ],
        "heatScore": 88,
        "socialHeatScore": 88,
        "placeHeatScore": 90,
        "nonstandardProofScore": 82,
        "recentSignalScore": 88,
        "heatStatus": "用户确认入库｜点评实拍2809张｜场馆页与演出信息可核",
        "spaceDemand": "优先补声学、消防、酒水、营业时段、排队集散和周边安保管理条件。",
        "fitNote": "适合重庆夜经济街区、工业遗存、坡地文旅街区和青年社交型项目。",
        "risk": "强依赖演出排期和夜间运营许可，需提前评估噪声、邻避和安保成本。",
        "sourceKeys": [
            "dailyConfirmedBrand20260630",
            "dailyBrand20260630Nuts"
        ],
        "verification": "用户确认入库｜已补点评/场馆/演出证据",
        "localCity": "重庆",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": "",
        "dpReviewMax": "",
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260630-004",
        "name": "VOX LIVEHOUSE",
        "city": "武汉",
        "category": "夜经济与音乐社交",
        "subCategory": "LiveHouse/音乐现场",
        "brandRole": "武汉本地LiveHouse/音乐现场",
        "maturity": "用户确认入库｜已补点评/高德/票务证据",
        "tags": [
            "武汉",
            "LiveHouse",
            "夜经济",
            "音乐社交",
            "非标适配"
        ],
        "fitDNA": [
            "DSMR",
            "DCMR",
            "LCMR"
        ],
        "heatScore": 89,
        "socialHeatScore": 90,
        "placeHeatScore": 86,
        "nonstandardProofScore": 84,
        "recentSignalScore": 88,
        "heatStatus": "用户确认入库｜点评门店/高德POI/票务场馆地址可核",
        "spaceDemand": "优先补演出容量、声学、夜间动线、酒水经营和高校/青年客群组织方式。",
        "fitNote": "适合武汉青年街区、工业更新、大学周边和夜经济内容锚点。",
        "risk": "需确认具体店型和持续演出排期，避免只记录历史声量。",
        "sourceKeys": [
            "dailyConfirmedBrand20260630",
            "dailyBrand20260630Vox"
        ],
        "verification": "用户确认入库｜已补点评/高德/票务证据",
        "localCity": "武汉",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": "",
        "dpReviewMax": "",
        "dpAvgPrice": ""
    },
    {
        "id": "brand-confirmed-20260630-005",
        "name": "深圳B10现场",
        "city": "深圳",
        "category": "夜经济与音乐社交",
        "subCategory": "音乐艺术现场",
        "brandRole": "深圳本地音乐艺术现场",
        "maturity": "用户确认入库｜已补点评/地图/官网证据",
        "tags": [
            "深圳",
            "OCT-LOFT",
            "LiveHouse",
            "音乐艺术",
            "非标适配"
        ],
        "fitDNA": [
            "DCMR",
            "DSMR",
            "DCME"
        ],
        "heatScore": 88,
        "socialHeatScore": 88,
        "placeHeatScore": 88,
        "nonstandardProofScore": 86,
        "recentSignalScore": 88,
        "heatStatus": "用户确认入库｜点评实拍2648张｜官网活动/地图点位/OCT-LOFT资料可核",
        "spaceDemand": "优先补演出容量、策展/音乐节合作机制、夜间运营许可和创意园客流联动。",
        "fitNote": "适合工业遗存、创意园、艺术街区和城市级夜间内容项目。",
        "risk": "对项目整体文化运营能力要求高，单独复制场馆不等于复制 OCT-LOFT 内容生态。",
        "sourceKeys": [
            "dailyConfirmedBrand20260630",
            "dailyBrand20260630B10"
        ],
        "verification": "用户确认入库｜已补点评/地图/官网证据",
        "localCity": "深圳",
        "xhsUrl": "",
        "dpUrl": "",
        "xhsVisibleNotes": 10,
        "xhsLikeSum": "",
        "dpReviewMax": "",
        "dpAvgPrice": ""
    }
];
  const library = system.brandLibrary || [];
  const byName = new Map(library.map(item => [item.name, item]));

  function mergeUnique(a = [], b = []) {
    return Array.from(new Set([...(Array.isArray(a) ? a : []), ...(Array.isArray(b) ? b : [])].filter(Boolean)));
  }

  for (const item of confirmedRows) {
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
    defaultSpace: category.includes("地方风物") ? "优先补充伴手礼陈列、游客动线、地方叙事、可带走产品和联名包装条件。"
      : category.includes("展览展馆") ? "优先补充展陈面积、票务/活动机制、换展频率、IP 授权和媒体传播资源。"
      : category.includes("夜经济") ? "优先补充夜间营业许可、外摆边界、声量管理、酒水条件和安保运营能力。"
      : category.includes("文创") ? "优先补充本地内容、文创零售、城市礼物和活动合作模式。"
      : "优先补充标准店型、快闪店型、外摆和工程条件。",
  }));
})();
