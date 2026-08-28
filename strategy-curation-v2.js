(function () {
  const system = window.COMMERCIAL_DNA_SYSTEM;
  if (!system) return;

  system.version = "v2";
  system.updated = "2026-06-30";

  system.positioning = {
    name: "非标商业策略 DNA",
    claim: "不是传统商业对标库，而是读取空间、客群、内容、品牌与运营能力的非标商业策略系统。",
    sampleRule: "只收录开放街区、城市更新、工业遗存、公园滨水、艺术文化、社区生活方式、文旅街区等非标准商业样本。",
  };

  system.brandTaxonomy = [
    "咖啡烘焙饮品",
    "创意餐饮餐酒",
    "文创书店艺术",
    "国内设计师潮流买手",
    "宠物户外运动社群",
    "生活方式香氛植物家居",
  ];

  system.brandHeatModel = {
    fields: ["小红书声量", "大众点评热度", "非标落地证据", "近期开店/首店信号"],
    note: "当前为v2临时热度分；登录小红书/大众点评后，用真实笔记数、收藏互动、评价数、榜单/热门页露出、门店评分、近期内容增量覆盖。",
  };

  system.sources = {
    ...system.sources,
    xinhuanetNonstandard2025: {
      name: "新华网｜非标商业新场景撬动消费活力",
      url: "https://www.news.cn/fortune/20250224/9638972ce4a14bddbae2f4cb7191a3a5/c.html",
      note: "用于界定非标商业的城市更新、厂房、老街区、艺术文化和在地社交特征。",
    },
    xinhuanetStrategy2025: {
      name: "新华网｜不按套路出牌撬动商业新模式",
      url: "https://www.news.cn/fortune/20250513/2fdf2e389fc64f73bf3603a2a1119da3/c.html",
      note: "用于非标商业长期运营、品牌调性、客群定位和风险判断。",
    },
    winshangNonstandard2025: {
      name: "赢商网｜非标商业，又行了！",
      url: "https://m.winshang.com/news737283.html",
      note: "用于上海、南京、北京、武汉、长沙等新晋非标商业项目线索。",
    },
    winshangResearch2026: {
      name: "赢商网中城研究院｜2026商业市场月报目录",
      url: "https://www.winshang.com/research.html",
      note: "用于2026品牌新店、特色新店、品牌开关店和消费趋势线索。",
    },
    krParkLane2025: {
      name: "36氪｜非标商业还有新玩法，这8个新开的街区又酷又chill",
      url: "https://36kr.com/p/3136105040517891",
      note: "用于前滩公园巷、101明潮里及相关首店品牌线索。",
    },
    shCoffee2025: {
      name: "上海市杨浦区｜2025中国城市咖啡发展报告相关报道",
      url: "https://www.shyp.gov.cn/shypq/xwzx-bmdt/20250506/479867.html",
      note: "用于咖啡消费、点评咖啡节、早C晚A和国产咖啡品牌趋势判断。",
    },
    cbre2026: {
      name: "解放日报｜CBRE展望2026中国商业地产",
      url: "https://www.jfdaily.com/news/detail?id=1076261",
      note: "用于宠物、户外运动、二次元等新兴消费主题继续扩张的判断。",
    },
    petWhitePaper2026: {
      name: "央视网｜2026中国宠物行业白皮书",
      url: "https://business.cctv.com/2026/01/05/ARTIdmv2AWmVeRVodaZYLOvQ260105.shtml",
      note: "用于宠物消费增长和宠物友好商业判断。",
    },
    socialAuditNeeded: {
      name: "小红书/大众点评公开内容线索｜待人工逐条核验",
      url: "",
      note: "用于城市在地咖啡、烘焙、文创、创意餐饮和主理人零售的热度初筛；正式入库前需保留笔记/点评链接。",
    },
    brandHeatAudit20260628: {
      name: "小红书/大众点评品牌热度核验样本｜2026-06-28",
      url: "",
      note: "首批用 Chrome 登录态采集的品牌热度核验样本，已记录可见笔记、互动合计、点评评价数和匹配置信度。",
    },
  };

  const targetRows = [
    ["深业上城", "深圳", "公园综合体", "DCBR", "屋顶小镇/双公园连廊/城市级流量", "已入库"],
    ["麓湖·麓坊中心", "成都", "生态大盘街区", "LCMR", "社区共创/公园商业/主理人", "已入库"],
    ["重庆光环花园城", "重庆", "公园景观商业", "DCBR", "世界树/中央公园/首店", "已入库"],
    ["重庆光环购物公园", "重庆", "室内自然商业", "DCBE", "沐光森林/盒子自然化", "已入库"],
    ["鸿寿坊", "上海", "社区更新", "LCMR", "自营市集/15分钟生活圈/烟火气", "已入库"],
    ["上海新天地东台里", "上海", "城市更新街区", "DCBR", "天幕/夜经济/露台外摆", "已入库"],
    ["上德银泰城", "北京", "花园社交商业", "LCBR", "宠物/运动/花园社交", "已入库"],
    ["嘉佰汇", "武汉", "公园策展商业", "DCMR", "月台公园/文保/首店餐饮", "已入库"],
    ["光谷KIC PARK", "武汉", "知识社区公园", "LCMR", "科创客群/宠物/户外运动", "已入库"],
    ["天目里", "杭州", "艺术文化园区", "DCMR", "建筑IP/美术馆/书店", "已入库"],
    ["玉鸟集", "杭州", "社区微度假", "LCMR", "主理人/夜经济/宠物友好", "已入库"],
    ["永定河集", "北京", "滨水户外市集", "LSMR", "滨水慢行/市集/轻商业", "已入库"],
    ["成都REGULAR源野", "成都", "下沉公园商业", "DCMR", "下沉花园/主理人首店/艺术空间", "已入库"],
    ["The Commons曼谷", "曼谷", "社区客厅", "LCMR", "大台阶/社区市集/自然通风", "已入库"],
    ["难波公园Namba Parks", "大阪", "屋顶立体公园", "DCBE", "退台屋顶公园/经典样本", "已入库"],
    ["宫下公园MIYASHITA PARK", "东京", "公共公园商业化", "DCBR", "屋顶公园/潮流/PPP", "已入库"],
    ["星耀樟宜Jewel", "新加坡", "室内自然地标", "DCBE", "雨漩涡/森林谷/枢纽流量", "已入库"],
    ["张园", "上海", "历史建筑更新", "DCME", "海派建筑/首发经济/高端品牌", "目标池"],
    ["蟠龙天地", "上海", "古镇更新", "LCMR", "江南古镇/微度假/在地生活", "目标池"],
    ["TX淮海", "上海", "旧百货焕新", "DCMR", "年轻力中心/策展零售/潮流", "目标池"],
    ["HAI550", "上海", "城市更新街区", "LCMR", "里弄更新/在地餐饮/生活方式", "目标池"],
    ["EKA·天物", "上海", "工业遗存更新", "DCMR", "露天建筑博物馆/艺术展/厂房", "目标池"],
    ["Gate M西岸梦中心", "上海", "滨江工业更新", "DCMR", "水泥厂更新/滨水市集/艺术装置", "目标池"],
    ["上生新所", "上海", "历史园区更新", "LCMR", "泳池/办公/展览/社区生活", "目标池"],
    ["武夷MIX320", "上海", "社区商业更新", "LCME", "街区生活/小店集合/社区复访", "目标池"],
    ["今潮8弄", "上海", "里弄文化街区", "DCMR", "石库门/文旅/城市记忆", "目标池"],
    ["1933老场坊", "上海", "工业建筑更新", "DCME", "建筑打卡/展览/创意办公", "目标池"],
    ["M50创意园", "上海", "艺术园区", "DCME", "画廊/工作室/创意商业", "目标池"],
    ["黑石M+", "上海", "音乐文化街区", "DCME", "黑石公寓/音乐/文化零售", "目标池"],
    ["FOUND158", "上海", "下沉夜经济", "DSMR", "餐酒/夜生活/外籍客群", "目标池"],
    ["安福路/武康路街区", "上海", "城市街巷", "LCMR", "咖啡/买手/街区漫游", "目标池"],
    ["愚园路街区", "上海", "社区街巷更新", "LCMR", "在地小店/社区文化/Citywalk", "目标池"],
    ["BFC外滩枫径", "上海", "市集型公共空间", "LCBR", "周末市集/滨江/城市活动", "目标池"],
    ["前滩太古里", "上海", "开放式街区", "DCBR", "双层开放街区/运动健康/首店", "目标池"],
    ["前滩公园巷", "上海", "松弛街巷商业", "LCMR", "骑行/精品咖啡/首店餐饮", "目标池"],
    ["上海永源路街区", "上海", "时尚街区", "DCMR", "小红书联动/时装周/街区活动", "目标池"],
    ["北京檀谷", "北京", "山系生活小镇", "DCMR", "山谷度假/主理人/微旅行", "目标池"],
    ["首创郎园Station", "北京", "铁路工业更新", "LCMR", "红砖仓库/设计品牌/市集", "目标池"],
    ["郎园Vintage", "北京", "工业创意园", "LCME", "文创办公/展览/咖啡", "目标池"],
    ["北京坊", "北京", "历史街区更新", "DCBR", "前门/文化商业/游客", "目标池"],
    ["THE BOX朝外", "北京", "青年潮流街区", "DCMR", "潮流/运动/户外广场", "目标池"],
    ["隆福寺", "北京", "历史文化更新", "DCME", "屋顶/书店/艺术文化", "目标池"],
    ["亮马河国际风情水岸", "北京", "滨水夜经济", "LCBR", "滨水漫步/餐酒/活动", "目标池"],
    ["798艺术区", "北京", "艺术工业园区", "DCME", "画廊/展览/厂房", "目标池"],
    ["751D·PARK", "北京", "工业设计园区", "DCME", "时装周/设计/工业遗存", "目标池"],
    ["首钢园六工汇", "北京", "工业遗存综合体", "DCBR", "冬奥/高炉/城市地标", "目标池"],
    ["望京小街", "北京", "街区更新", "LCBR", "办公社区/市集/夜间消费", "目标池"],
    ["三里屯太古里", "北京", "开放潮流街区", "DCBR", "潮流/首店/夜间社交", "目标池"],
    ["北京友谊商店焕新", "北京", "老商场非标更新", "DCMR", "100%首店定制/院落/青年文化", "目标池"],
    ["五道营胡同", "北京", "胡同生活方式", "LCMR", "咖啡/小店/社区漫游", "目标池"],
    ["杨梅竹斜街", "北京", "胡同更新街区", "LCME", "文创/书店/在地生活", "目标池"],
    ["成都东郊记忆", "成都", "工业文创园", "DCMR", "厂房/音乐/展演/文创", "目标池"],
    ["U37创意仓库", "成都", "旧仓库社区商业", "LCME", "小店/咖啡/创意办公", "目标池"],
    ["成都镋钯街/崇德里", "成都", "街巷生活方式", "LCMR", "咖啡/餐酒/街巷漫游", "目标池"],
    ["成都远洋太古里", "成都", "开放历史街区", "DCBR", "大慈寺/街区/国际品牌", "目标池"],
    ["成都宽窄巷子", "成都", "历史文旅街区", "DSBR", "游客/在地文化/院落", "目标池"],
    ["麓湖CPI", "成都", "生态艺术商业", "DCMR", "花园独栋/景观/主理人", "目标池"],
    ["麓湖美食岛", "成都", "湖岛餐饮目的地", "DCMR", "一栋一品牌/岛集/湖岛", "目标池"],
    ["麓湖麓客岛", "成都", "湖区微度假", "LCMR", "水岸/社群/户外活动", "目标池"],
    ["成都廊里艺术生活街区", "成都", "小体量社区艺术", "LCMR", "艺术生活/露台/社区复访", "目标池"],
    ["杭州小河直街", "杭州", "运河历史街区", "LCMR", "手作/咖啡/街区漫游", "目标池"],
    ["杭州桥西历史文化街区", "杭州", "运河街区", "LCME", "博物馆/文创/在地生活", "目标池"],
    ["杭州大兜路历史文化街区", "杭州", "历史街区", "LCME", "街巷/餐饮/文化漫游", "目标池"],
    ["杭州西溪天堂", "杭州", "湿地文旅商业", "DSMR", "湿地/酒店/餐饮/微度假", "目标池"],
    ["杭州艺尚小镇", "杭州", "时尚产业街区", "DCME", "服装设计/秀场/买手", "目标池"],
    ["良渚大屋顶/文化艺术中心", "杭州", "文化地标", "DCME", "安藤忠雄/展演/社区文化", "目标池"],
    ["深圳南头古城", "深圳", "古城更新", "DCMR", "历史街区/策展/在地品牌", "目标池"],
    ["深圳OCT-LOFT华侨城创意文化园", "深圳", "创意园区", "DCME", "设计/展览/咖啡/买手", "目标池"],
    ["深圳海上世界", "深圳", "滨海开放街区", "DSBR", "海滨/夜经济/游客", "目标池"],
    ["深圳欢乐港湾", "深圳", "滨海文旅商业", "DCBR", "摩天轮/滨海/城市地标", "目标池"],
    ["深圳万科云城设计公社", "深圳", "设计产业街区", "LCME", "设计/办公/生活方式", "目标池"],
    ["广州永庆坊", "广州", "西关历史街区", "LCMR", "骑楼/非遗/餐饮小店", "目标池"],
    ["广州太古仓码头", "广州", "码头仓库更新", "DSMR", "滨江/餐酒/夜经济", "目标池"],
    ["广州TIT创意园", "广州", "旧厂房创意园", "LCME", "时尚/展览/办公", "目标池"],
    ["广州东山口街区", "广州", "街区生活方式", "LCMR", "咖啡/买手/洋楼街巷", "目标池"],
    ["佛山岭南天地", "佛山", "历史街区更新", "LCBR", "岭南建筑/餐饮/游客", "目标池"],
    ["武汉天地", "武汉", "开放街区", "LCBR", "里弄街区/餐饮/社区商务", "目标池"],
    ["武汉黎黄陂路街区", "武汉", "历史街区", "LCME", "老建筑/咖啡/Citywalk", "目标池"],
    ["武汉昙华林", "武汉", "文艺街区", "LCME", "文创/咖啡/大学客群", "目标池"],
    ["武汉汉口里", "武汉", "文化文旅街区", "DSBR", "汉派文化/游客/餐饮", "目标池"],
    ["武汉花园道", "武汉", "社区生活方式", "LCBE", "街区/白领/餐饮社交", "目标池"],
    ["长沙超级文和友", "长沙", "沉浸市井商业", "DCMR", "复古市井/餐饮内容/IP", "目标池"],
    ["长沙都正街", "长沙", "历史街巷", "LCME", "老街/文旅/在地餐饮", "目标池"],
    ["长沙后湖国际艺术区", "长沙", "湖区艺术街区", "LCMR", "艺术/咖啡/青年社群", "目标池"],
    ["南京小西湖街区", "南京", "历史街区更新", "LCMR", "民居修缮/社区共生/小店", "目标池"],
    ["南京熙南里", "南京", "历史文化街区", "LCBR", "老城南/餐饮/文旅", "目标池"],
    ["南京101明潮里", "南京", "军工厂更新", "DCMR", "老厂房/潮流/运动/文旅", "目标池"],
    ["南京金陵STYLE浪漫中心", "南京", "城市更新街区", "DCBR", "时尚街区/城市活动/社交", "目标池"],
    ["重庆鹅岭二厂", "重庆", "印刷厂文创园", "DCMR", "山城/电影/文创/游客", "目标池"],
    ["重庆山城巷", "重庆", "山地老街更新", "LCMR", "老街/坡地/在地餐饮", "目标池"],
    ["重庆北仓文创街区", "重庆", "仓库更新", "LCMR", "文创/咖啡/青年社群", "目标池"],
    ["重庆鲁祖庙传统风貌区", "重庆", "传统风貌区更新", "LCMR", "老街/社区/创意餐饮", "目标池"],
    ["重庆弹子石老街", "重庆", "历史文旅街区", "DSBR", "山城街巷/游客/夜景", "目标池"],
    ["西安老钢厂设计创意产业园", "西安", "工业创意园", "LCME", "老厂房/设计/书店", "目标池"],
    ["西安大华1935", "西安", "纺织厂更新", "DCME", "剧场/展演/工业遗存", "目标池"],
    ["西安老菜场市井文化创意街区", "西安", "市井更新", "LCMR", "菜场更新/烟火气/青年小店", "目标池"],
    ["厦门沙坡尾", "厦门", "渔港街区", "LCMR", "港口/咖啡/文创/年轻游客", "目标池"],
    ["福州烟台山商业漫步街区", "福州", "历史山地街区", "DCMR", "坡地/洋楼/主理品牌/持续更新", "用户确认运行时样本"],
    ["福州上下杭", "福州", "历史街区更新", "LCBR", "闽都文化/游客/在地餐饮", "目标池"],
  ];

  system.nonstandardTargets = targetRows.map(([name, city, category, dnaCode, tags, status], index) => ({
    id: `target-${String(index + 1).padStart(3, "0")}`,
    name,
    city,
    category,
    dnaCode,
    tags: tags.split("/"),
    status,
    sourceKeys: index < 17 ? ["xinhuanetNonstandard2025"] : ["winshangNonstandard2025", "xinhuanetStrategy2025"],
    verification: status === "已入库" ? "已建基础档案" : "目标池｜待补详情与媒体证据",
  }));

  const brandRows = [
    ["AOKKA Coffee&Bistro", "上海", "咖啡烘焙饮品", "烘焙体验+日咖夜酒", "前滩公园巷中国首店", "咖啡,烘焙,餐酒,体验", "LCMR,DCMR,DCBR", "适合松弛街巷、滨水和办公社区非标项目。", "krParkLane2025"],
    ["O.P.S.", "上海", "咖啡烘焙饮品", "精品咖啡", "上海主理人咖啡", "精品咖啡,小店,城市气质", "LCME,LCMR,DCME", "适合小体量街区和高审美社区商业。", "socialAuditNeeded"],
    ["Grid Coffee", "北京", "咖啡烘焙饮品", "精品咖啡", "城市精品咖啡", "咖啡,白领,社区", "LCBE,LCME,DSME", "适合办公社区、城市街巷和高频咖啡补位。", "shCoffee2025"],
    ["Metal Hands", "北京", "咖啡烘焙饮品", "精品咖啡", "主理人精品咖啡", "咖啡,胡同,在地", "LCME,LCMR,DCME", "适合历史街区、胡同商业和艺术园区。", "socialAuditNeeded"],
    ["Berry Beans", "北京", "咖啡烘焙饮品", "精品咖啡", "社区咖啡", "咖啡,社区,小店", "LSME,LCME,LCMR", "适合社区更新和小体量街区。", "socialAuditNeeded"],
    ["Algebraist Coffee", "上海", "咖啡烘焙饮品", "精品咖啡", "高识别咖啡品牌", "咖啡,设计,年轻", "LCME,DCME,DCMR", "适合高审美街区和内容型商业。", "shCoffee2025"],
    ["TAG Espresso", "成都", "咖啡烘焙饮品", "咖啡+艺术", "成都社区商业落地案例", "咖啡,艺术,社区", "LCMR,DCME", "适合艺术生活街区和社区共创型商业。", "socialAuditNeeded"],
    ["Cycle&Cycle", "上海", "咖啡烘焙饮品", "骑行+烘焙+咖啡", "天目里等非标项目常见品牌", "骑行,烘焙,咖啡,社群", "DSMR,LCMR,DCMR", "适合公园、滨水、骑行绿道和生活方式街区。", "socialAuditNeeded"],
    ["% Arabica", "京都", "咖啡烘焙饮品", "国际咖啡目的地", "非标空间高传播咖啡", "咖啡,游客,拍照", "DCBE,DCBR,DCMR", "适合标杆非标项目的视觉传播点位。", "socialAuditNeeded"],
    ["Seesaw Coffee", "上海", "咖啡烘焙饮品", "精品咖啡", "成熟但适配非标街区", "咖啡,社区,年轻", "LCBE,LCME,DSME", "适合社区和办公混合型非标商业。", "shCoffee2025"],
    ["M Stand", "上海", "咖啡烘焙饮品", "空间型咖啡", "空间传播型咖啡", "咖啡,社交,空间", "LCBR,DCBR,DCMR", "适合需要社交停留和视觉识别的街区。", "shCoffee2025"],
    ["三顿半线下概念", "长沙", "咖啡烘焙饮品", "咖啡内容零售", "内容零售/快闪", "咖啡,内容零售,礼品", "LCME,DCME,DCMR", "适合快闪、城市礼物和内容零售空间。", "winshangResearch2026"],
    ["HOLY BAGEL", "上海", "咖啡烘焙饮品", "贝果轻食社交", "前滩公园巷落地", "贝果,轻食,白领", "LCBE,LCMR,DSME", "适合街区商业、办公社区和松弛社交场景。", "krParkLane2025"],
    ["O'Mills", "上海", "咖啡烘焙饮品", "健康烘焙轻餐", "自然健康生活方式", "烘焙,轻食,健康", "LCBE,LCME,DSME", "适合生活方式街区和中高端社区。", "socialAuditNeeded"],
    ["Luneurs", "上海", "咖啡烘焙饮品", "法式烘焙甜品", "高审美烘焙", "烘焙,甜品,社交", "LCBE,LCME,DCME", "适合城市更新和高审美社区型项目。", "socialAuditNeeded"],
    ["Drunk Baker", "上海", "夜经济与音乐社交", "烘焙+餐酒", "日咖夜酒", "烘焙,餐酒,夜经济", "LCBR,LCMR,DCMR", "适合夜间外摆和社区生活方式街区。", "socialAuditNeeded"],
    ["Butterful&Creamorous", "上海", "咖啡烘焙饮品", "高审美烘焙", "社媒传播型烘焙", "烘焙,礼品,拍照", "LCME,DCME,DCMR", "适合高传播甜品和女性客群。", "socialAuditNeeded"],
    ["KUMO KUMO", "上海", "咖啡烘焙饮品", "甜品单品", "年轻甜品品牌", "甜品,年轻,排队", "LCBR,DCBR,DCMR", "适合开业热度和小面积甜品补位。", "socialAuditNeeded"],
    ["fufuland", "上海", "咖啡烘焙饮品", "泡芙甜品", "甜品内容品牌", "甜品,社交,拍照", "LCBR,DCBR,DCMR", "适合年轻女性和社媒传播场景。", "socialAuditNeeded"],
    ["Basdban", "上海", "咖啡烘焙饮品", "精品蛋糕甜品", "高审美甜品", "甜品,设计,礼品", "LCME,DCME", "适合城市礼物和高审美零售组合。", "socialAuditNeeded"],
    ["FASCINO", "上海", "咖啡烘焙饮品", "手作烘焙", "上海在地烘焙", "烘焙,在地,社区", "LSME,LCME,LCMR", "适合社区更新和生活方式街区。", "socialAuditNeeded"],
    ["老梦面包", "北京", "咖啡烘焙饮品", "法式面包", "北京在地烘焙", "烘焙,手作,社区", "LSME,LCME,LCMR", "适合胡同、社区和街区小铺。", "socialAuditNeeded"],
    ["可能有咖啡", "北京", "咖啡烘焙饮品", "咖啡+阅读", "社区文化咖啡", "咖啡,阅读,社区", "LCME,LCMR", "适合社区文化和小型书店复合空间。", "socialAuditNeeded"],
    ["表叔茶餐厅", "重庆", "创意餐饮餐酒", "复古港式社区餐饮", "鲁祖庙落地案例", "复古,社区,小店", "LCMR,LCBR", "适合传统街区更新和社区餐饮内容化。", "xinhuanetNonstandard2025"],
    ["RAC", "上海", "创意餐饮餐酒", "可丽饼+餐酒", "上海街区生活方式品牌", "早午餐,餐酒,街区", "LCBR,LCMR,DCMR", "适合安福路式街区和日咖夜酒场景。", "socialAuditNeeded"],
    ["Cinker Pictures", "杭州", "展览展馆与内容 IP", "电影餐厅", "天目里代表餐饮", "电影,餐饮,社交", "DCME,DCMR", "适合文化商业和艺术园区目的地餐饮。", "socialAuditNeeded"],
    ["COMMUNE幻师", "深圳", "夜经济与音乐社交", "餐酒吧", "年轻社交餐酒", "夜经济,社交,外摆", "DSMR,DCMR,DCBR", "适合夜间经济和开放式街区。", "winshangResearch2026"],
    ["必福", "上海", "创意餐饮餐酒", "新概念茶楼", "前滩公园巷中国首店", "茶酒,潮汕,创意餐饮", "LCMR,DCMR", "适合在地风味创新和街区社交餐饮。", "krParkLane2025"],
    ["新山书屋x返岛西餐料理", "上海", "创意餐饮餐酒", "书屋+西餐复合", "前滩公园巷华东首店", "书店,餐饮,复合空间", "LCME,LCMR,DCME", "适合文化街区和阅读餐饮复合空间。", "krParkLane2025"],
    ["Ingenova Trattoria", "上海", "创意餐饮餐酒", "国际主厨意餐", "前滩公园巷中国首店", "首店,主厨,目的地餐饮", "DCBR,DCME", "适合城市级非标项目的目的地餐饮。", "krParkLane2025"],
    ["老米记酒酿铺", "南京", "地方风物与城市礼物", "地方甜品创新", "前滩公园巷上海首店", "地方风味,甜品,东方美学", "LCME,LCMR,DCMR", "适合在地风味和年轻甜品场景。", "krParkLane2025"],
    ["A thing", "深圳", "创意餐饮餐酒", "韩式咖啡餐饮", "深圳在地生活方式", "韩式,咖啡,餐饮", "LCMR,DCMR", "适合深圳、广州等年轻街区。", "socialAuditNeeded"],
    ["Saucerful", "成都", "创意餐饮餐酒", "轻餐甜品", "REGULAR源野落地", "甜品,咖啡,主理人", "LCMR,DCMR", "适合下沉公园和主理人小体量商业。", "socialAuditNeeded"],
    ["荒石公园", "成都", "文创书店艺术", "自然标本+生活方式", "REGULAR源野落地", "自然,标本,生活方式", "LCME,DCME,DCMR", "适合自然主题、公园商业和艺术园区。", "socialAuditNeeded"],
    ["HOJA花店", "成都", "生活方式香氛植物家居", "花店+生活方式", "REGULAR源野落地", "花艺,植物,礼品", "LCMR,LCME", "适合小体量非标街区和社区生活方式。", "socialAuditNeeded"],
    ["新荣记荣轩", "浙江", "创意餐饮餐酒", "高端餐饮轻奢线", "嘉佰汇等首店线索", "高端餐饮,首店,目的地", "DCBE,DCBR", "适合高端非标项目的餐饮锚点。", "winshangNonstandard2025"],
    ["田無羅", "日本", "创意餐饮餐酒", "日式料理", "嘉佰汇等首店线索", "日料,首店,高审美", "DCME,DCBR", "适合文保、艺术和高消费客群项目。", "winshangNonstandard2025"],
    ["单向空间", "北京", "文创书店艺术", "书店+活动", "玉鸟集等非标项目适配", "书店,活动,社区", "LCME,LCMR,DCME", "适合社区文化、微度假和知识型项目。", "xinhuanetStrategy2025"],
    ["茑屋书店", "日本", "文创书店艺术", "书店生活方式", "天目里等标杆落地", "书店,生活方式,设计", "DCME,DCMR,DCBE", "适合高审美文化商业和地标项目。", "xinhuanetStrategy2025"],
    ["新山书屋", "南京", "文创书店艺术", "书店+咖啡+文创", "前滩公园巷品牌线索", "书店,文创,咖啡", "LCME,LCMR,DCME", "适合历史街区、滨水街区和文化商业。", "krParkLane2025"],
    ["Jetlag Books", "北京", "文创书店艺术", "独立书店", "北京独立书店", "书店,独立出版,社区", "LCME,LCMR", "适合街巷、艺术园区和小体量文化商业。", "socialAuditNeeded"],
    ["香蕉鱼书店", "上海", "文创书店艺术", "独立书店", "艺术出版/独立书店", "书店,艺术,独立出版", "LCME,DCME", "适合文化园区和艺术商业。", "socialAuditNeeded"],
    ["BY ART MATTERS", "杭州", "展览展馆与内容 IP", "美术馆内容", "天目里美术馆", "美术馆,展览,艺术", "DCME,DCMR", "适合作为文化内容锚点。", "xinhuanetStrategy2025"],
    ["中国国家地理MAGZONE", "北京", "展览展馆与内容 IP", "立体杂志空间", "自然/文旅内容零售", "文博,自然,展览", "DCME,DCMR,DCBR", "适合自然、公园、文旅和城市礼物主题。", "winshangResearch2026"],
    ["趣看美术馆", "全国", "展览展馆与内容 IP", "参与式展览", "亲子文博内容", "展览,亲子,互动", "LCBR,DCBR,DCMR", "适合亲子、开业活动和文博商业。", "winshangResearch2026"],
    ["MADVERSE", "全国", "展览展馆与内容 IP", "数字艺术空间", "数字艺术社交", "数字艺术,沉浸,Z世代", "DCMR,DCBR", "适合科技、青年和夜间内容型商业。", "winshangResearch2026"],
    ["吱音", "上海", "生活方式香氛植物家居", "设计师家居", "郎园Station落地案例", "家居,设计,非标空间", "LCME,DCME,DCMR", "适合工业园区、艺术园区和生活方式街区。", "xinhuanetStrategy2025"],
    ["DOE", "上海", "国内设计师潮流买手", "潮流零售+咖啡", "街头潮流集合", "潮流,咖啡,青年", "DSMR,DCMR,DCME", "适合青年潮流街区和滑板/咖啡社群。", "winshangResearch2026"],
    ["SOULGOODS", "北京", "国内设计师潮流买手", "街头文化品牌", "北京街头潮流", "潮流,青年,北京", "DSMR,DCMR,DCME", "适合青年潮流和城市文化街区。", "winshangResearch2026"],
    ["Randomevent", "杭州", "国内设计师潮流买手", "原创潮流服饰", "国潮设计", "潮流,原创,年轻", "LCMR,DSMR,DCMR", "适合年轻街区、买手集合和首店组合。", "winshangResearch2026"],
    ["ROARINGWILD", "深圳", "国内设计师潮流买手", "城市机能服饰", "深圳原创品牌", "机能,潮流,城市", "DSMR,DCMR,DCME", "适合深圳、成都、上海青年街区。", "socialAuditNeeded"],
    ["ATTEMPT", "上海", "国内设计师潮流买手", "设计师服装", "中国设计师品牌", "设计师,男装,高审美", "DCME,DCMR", "适合设计师买手和艺术街区。", "socialAuditNeeded"],
    ["UNTITLAB", "杭州", "国内设计师潮流买手", "设计鞋履", "国产设计鞋履", "鞋履,设计,年轻", "LCME,DCME,DCBR", "适合设计零售和城市首店组合。", "winshangResearch2026"],
    ["STAFFONLY", "上海", "国内设计师潮流买手", "设计师品牌", "上海设计师品牌", "设计师,时装,高审美", "DCME,DCMR", "适合时尚策展和高审美街区。", "socialAuditNeeded"],
    ["Short Sentence", "上海", "国内设计师潮流买手", "设计师女装", "年轻女性设计品牌", "女装,设计,年轻", "LCME,DCME,DCBR", "适合女性生活方式和设计零售。", "socialAuditNeeded"],
    ["bosie", "杭州", "国内设计师潮流买手", "无性别服饰", "年轻零售", "无性别,年轻,国货", "LCBR,DSMR,DCBR", "适合年轻街区和区域首店。", "winshangResearch2026"],
    ["SMFK", "北京", "国内设计师潮流买手", "设计师服饰", "国潮设计", "潮流,设计,女性", "LCME,DCBR,DCMR", "适合时尚街区和高传播零售。", "winshangResearch2026"],
    ["13DE MARZO", "上海", "国内设计师潮流买手", "设计师潮流", "IP服饰品牌", "IP,潮流,年轻女性", "LCBR,DCBR,DCMR", "适合年轻女性和社交传播场景。", "winshangResearch2026"],
    ["LOOKNOW", "上海", "国内设计师潮流买手", "设计师集合店", "高审美零售", "设计师,女装,买手", "LCME,DCME,DCBR", "适合城市更新和中高端女性客群。", "winshangResearch2026"],
    ["SND", "重庆", "国内设计师潮流买手", "设计师买手店", "高端买手", "设计师,重庆,高审美", "DCME,DCMR", "适合高端城市更新和设计感商业。", "winshangResearch2026"],
    ["BADMARKET", "上海", "国内设计师潮流买手", "买手零售", "生活方式买手", "买手,设计,青年", "LCME,DCME,DCMR", "适合艺术商业和主理人零售组合。", "winshangResearch2026"],
    ["Common Rare", "上海", "国内设计师潮流买手", "设计师买手", "高审美买手", "买手,设计师,高审美", "LCME,DCME", "适合小体量高审美零售。", "winshangResearch2026"],
    ["LABELHOOD", "上海", "国内设计师潮流买手", "设计师平台", "时装策展平台", "设计师,时装,策展", "DCME,DCMR", "适合时装周、展览和策展型商业。", "winshangResearch2026"],
    ["ENG", "杭州", "国内设计师潮流买手", "设计师集合", "杭州买手店", "买手,设计,内容", "LCME,DCME", "适合小体量设计零售和文化街区。", "winshangResearch2026"],
    ["Songmont山下有松", "北京", "国内设计师潮流买手", "国产设计箱包", "国货箱包", "女包,设计,礼品", "LCME,DCME,DCBR", "适合女性生活方式和高审美零售。", "winshangResearch2026"],
    ["裘真", "全国", "国内设计师潮流买手", "国产皮具", "设计箱包", "皮具,设计,礼品", "DCME,DCBR", "适合设计零售和城市礼物。", "winshangResearch2026"],
    ["FREITAG", "瑞士", "国内设计师潮流买手", "环保箱包", "可持续设计零售", "环保,设计,青年", "DCME,DCMR", "适合可持续、艺术和高审美商业。", "winshangResearch2026"],
    ["Avenue & Son", "上海", "宠物户外运动社群", "滑板潮流", "滑板社群品牌", "滑板,潮流,青年", "DSMR,DCMR,DCME", "适合滑板公园、青年街区和潮流商业。", "cbre2026"],
    ["TREK", "美国", "宠物户外运动社群", "骑行旗舰", "骑行社群品牌", "骑行,公园,社群", "DSMR,LCMR,DCMR", "适合滨水、公园、绿道和科创青年客群。", "cbre2026"],
    ["Salomon", "法国", "宠物户外运动社群", "越野跑户外", "运动户外社群", "越野跑,户外,潮流", "DSMR,DCBR,DCMR", "适合跑团、山地、户外社群项目。", "cbre2026"],
    ["HOKA", "美国", "宠物户外运动社群", "跑步鞋服", "跑步社群零售", "跑步,潮流,年轻", "DSMR,DCBR", "适合跑步社群和年轻运动商业。", "cbre2026"],
    ["On昂跑", "瑞士", "宠物户外运动社群", "跑步鞋服", "城市跑步零售", "跑步,白领,高端", "DSMR,DCBR,DCME", "适合城市跑团和高端运动社交。", "cbre2026"],
    ["Snow Peak", "日本", "宠物户外运动社群", "户外生活方式", "露营户外旗舰", "露营,生活方式,社群", "DSMR,DCME,DCMR", "适合公园商业、湖区和户外生活方式项目。", "cbre2026"],
    ["BLACKDOG黑狗", "全国", "宠物户外运动社群", "露营装备", "露营生活方式", "露营,年轻,社群", "LCBR,DSMR,LCMR", "适合湖区、公园、市集快闪和户外集合。", "cbre2026"],
    ["Naturehike挪客", "浙江", "宠物户外运动社群", "露营装备", "高性价比露营", "露营,家庭,户外", "LCBR,DSMR,DSBR", "适合家庭露营、公园活动和快闪零售。", "cbre2026"],
    ["SUPERMONKEY超级猩猩", "深圳", "宠物户外运动社群", "团课健身", "年轻健身社群", "团课,年轻,社群", "LSBR,LCBR,DSMR", "适合年轻白领、公园商业和社群型项目。", "cbre2026"],
    ["B-monster", "日本", "宠物户外运动社群", "拳击团课", "沉浸式运动", "拳击,夜间,潮流", "DSMR,DCMR", "适合高能量潮流运动和夜间消费。", "cbre2026"],
    ["PONN宠物百货", "武汉", "宠物户外运动社群", "宠物百货", "非标项目落地线索", "宠物,年轻,社交", "LSBR,LCBR,LCMR", "适合年轻社区、公园商业和宠物社交场景。", "petWhitePaper2026"],
    ["PETSBUY宠物生活馆", "北京", "宠物户外运动社群", "宠物生活馆", "宠物友好街区", "宠物,社区,家庭", "LSBR,LCBR,LCMR", "适合花园式社交、社区公园和宠物友好街区。", "petWhitePaper2026"],
    ["pidan", "上海", "宠物户外运动社群", "设计宠物用品", "宠物生活方式", "宠物用品,设计,礼品", "LCME,DCME", "适合宠物友好零售和生活方式集合。", "petWhitePaper2026"],
    ["未卡VETRESKA", "上海", "宠物户外运动社群", "宠物消费品牌", "设计宠物品牌", "宠物用品,设计,年轻女性", "LCME,LCMR,DCME", "适合宠物零售、快闪和联名活动。", "petWhitePaper2026"],
    ["小佩PETKIT", "上海", "宠物户外运动社群", "智能宠物用品", "宠物科技零售", "智能硬件,宠物,礼品", "LCBE,LCME,DCME", "适合生活方式零售和宠物主题快闪。", "petWhitePaper2026"],
    ["观夏", "上海", "生活方式香氛植物家居", "东方香氛", "高审美香氛零售", "香氛,东方美学,礼品", "LCME,DCME,DCBR", "适合高审美街区、女性客群和城市礼物。", "winshangResearch2026"],
    ["闻献DOCUMENTS", "上海", "生活方式香氛植物家居", "东方香氛", "香氛内容品牌", "香氛,东方美学,空间", "DCME,DCMR", "适合艺术商业和高审美零售。", "socialAuditNeeded"],
    ["野兽派", "上海", "生活方式香氛植物家居", "花艺香氛", "花艺生活方式", "花艺,礼品,女性", "LCBE,LCME,DCBR", "适合礼品、节日营销和女性客群。", "winshangResearch2026"],
    ["超级植物公司", "北京", "生活方式香氛植物家居", "植物生活方式", "植物零售/场景", "植物,疗愈,社区", "LCBR,LCMR,DCMR", "适合花园式商业和自然主题街区。", "socialAuditNeeded"],
    ["荣器", "北京", "生活方式香氛植物家居", "植物香氛", "植物香氛零售", "香氛,植物,礼品", "LCME,LCMR,DCME", "适合小铺、快闪和生活方式集合。", "socialAuditNeeded"],
    ["HARMAY話梅", "北京", "生活方式香氛植物家居", "美妆集合", "高传播美妆零售", "美妆,仓储,拍照", "DCBR,DCME,DCMR", "适合高传播零售和年轻女性客群。", "winshangResearch2026"],
    ["HAY", "丹麦", "生活方式香氛植物家居", "设计家居", "设计生活方式", "家居,设计,礼品", "DCME,LCME", "适合设计型商业、买手集合和生活方式街区。", "socialAuditNeeded"],
    ["B1OCK", "杭州", "国内设计师潮流买手", "买手店", "天目里高坪效买手店线索", "买手,设计师,高审美", "DCME,DCMR", "适合艺术园区和高审美商业。", "socialAuditNeeded"],
    ["DrivePro", "杭州", "国内设计师潮流买手", "潮玩零售", "天目里潮玩线索", "潮玩,年轻,内容", "DCMR,DCBR", "适合年轻客群和艺术商业补位。", "socialAuditNeeded"],
    ["BASAO佰朔", "深圳", "生活方式香氛植物家居", "现代中国茶", "茶饮生活方式品牌", "茶,东方美学,礼品", "LCME,DCME,LCMR", "适合高审美街区、文化商业和城市礼物。", "socialAuditNeeded"],
    ["tea'stone", "深圳", "生活方式香氛植物家居", "现代茶空间", "茶空间体验", "茶,空间,社交", "LCME,DCME,DCMR", "适合非标街区里的东方茶空间和轻社交。", "socialAuditNeeded"],
    ["朵云书院", "上海", "文创书店艺术", "城市书店", "文化地标书店", "书店,城市文化,活动", "LCME,DCME,DCBR", "适合城市更新、历史建筑和公共文化商业。", "xinhuanetStrategy2025"],
    ["衡山和集", "上海", "文创书店艺术", "书店+生活方式", "上海街区书店", "书店,生活方式,街区", "LCME,LCMR,DCME", "适合街区文化和小型内容商业。", "socialAuditNeeded"],
    ["卷宗书店", "北京", "文创书店艺术", "建筑设计书店", "专业内容书店", "建筑,设计,书店", "DCME,LCME", "适合设计园区、艺术园区和建筑内容商业。", "socialAuditNeeded"],
    ["abC艺术书展", "上海", "展览展馆与内容 IP", "艺术出版IP", "内容活动/快闪", "艺术书,展会,独立出版", "DCMR,DCME,LCMR", "适合做非标商业的周期性内容活动和快闪。", "socialAuditNeeded"],
    ["SHUSHU/TONG", "上海", "国内设计师潮流买手", "设计师女装", "中国设计师品牌", "女装,设计师,年轻女性", "DCME,DCBR,LCME", "适合高审美女性客群和时尚街区。", "winshangResearch2026"],
    ["PRONOUNCE", "上海", "国内设计师潮流买手", "设计师男装", "中国设计师品牌", "男装,设计师,时装", "DCME,DCMR", "适合时装策展、买手集合和城市级非标商业。", "winshangResearch2026"],
    ["MARRKNULL", "北京", "国内设计师潮流买手", "实验性设计师品牌", "中国设计师品牌", "实验时装,设计师,青年", "DCME,DCMR", "适合艺术商业和强策展零售。", "winshangResearch2026"],
    ["UNISKIN优时颜", "上海", "生活方式香氛植物家居", "功效护肤", "国产新消费美妆", "护肤,国货,女性", "LCBE,LCME,DCBR", "适合女性生活方式和新消费集合零售。", "winshangResearch2026"],
    ["To Summer观夏", "上海", "生活方式香氛植物家居", "东方香氛", "香氛内容品牌", "香氛,东方美学,空间", "LCME,DCME,DCBR", "适合高审美街区、历史建筑和城市礼物。", "winshangResearch2026"],
    ["没边boundless", "上海", "国内设计师潮流买手", "年轻设计零售", "青年设计师品牌线索", "设计,年轻,买手", "LCMR,DCME,DCMR", "适合主理人零售、青年街区和快闪测试。", "socialAuditNeeded"],
    ["泡泡玛特", "北京", "展览展馆与内容 IP", "潮玩IP", "成熟但适合内容地标", "潮玩,Z世代,IP", "DSBR,DCBR,DCMR", "适合年轻客群、社交传播和城市活动。", "winshangResearch2026"],
    ["三月兽", "全国", "展览展馆与内容 IP", "谷子店", "二次元内容零售", "二次元,谷子,年轻", "DSMR,DCBR,DCMR", "适合年轻街区和内容型商业补客流。", "cbre2026"],
  ];

  function normalizeList(value) {
    return String(value || "")
      .split(/[,，/、]/)
      .map(item => item.trim())
      .filter(Boolean);
  }

  function hasAny(text, words) {
    return words.some(word => text.includes(word));
  }

  function clampScore(value) {
    return Math.max(35, Math.min(96, Math.round(value)));
  }

  system.brandAuditSamples = [
    {
      brand: "O.P.S.",
      verifiedHeatScore: 99,
      socialHeatScore: 100,
      placeHeatScore: 100,
      recentSignalScore: 96,
      xhsVisibleNotes: 8,
      xhsLikeSum: 843,
      dpReviewMax: 17088,
      auditStatus: "已核验",
      dpMatchConfidence: "高",
    },
    {
      brand: "RAC",
      verifiedHeatScore: 97,
      socialHeatScore: 100,
      placeHeatScore: 100,
      recentSignalScore: 84,
      xhsVisibleNotes: 8,
      xhsLikeSum: 265,
      dpReviewMax: 17912,
      auditStatus: "已核验",
      dpMatchConfidence: "高",
    },
    {
      brand: "Luneurs",
      verifiedHeatScore: 98,
      socialHeatScore: 100,
      placeHeatScore: 97,
      recentSignalScore: 96,
      xhsVisibleNotes: 8,
      xhsLikeSum: 644,
      dpReviewMax: 11107,
      auditStatus: "已核验",
      dpMatchConfidence: "高",
    },
    {
      brand: "O'Mills",
      verifiedHeatScore: 94,
      socialHeatScore: 98,
      placeHeatScore: 100,
      recentSignalScore: 72,
      xhsVisibleNotes: 8,
      xhsLikeSum: 77,
      dpReviewMax: 16636,
      auditStatus: "已核验",
      dpMatchConfidence: "高",
    },
    {
      brand: "Drunk Baker",
      verifiedHeatScore: 93,
      socialHeatScore: 100,
      placeHeatScore: 83,
      recentSignalScore: 96,
      xhsVisibleNotes: 8,
      xhsLikeSum: 2091,
      dpReviewMax: 2789,
      auditStatus: "已核验",
      dpMatchConfidence: "高",
    },
    {
      brand: "Butterful&Creamorous",
      verifiedHeatScore: 92,
      socialHeatScore: 100,
      placeHeatScore: 100,
      recentSignalScore: 60,
      xhsVisibleNotes: 8,
      xhsLikeSum: 1374,
      dpReviewMax: 16543,
      auditStatus: "已核验",
      dpMatchConfidence: "高",
    },
    {
      brand: "AOKKA Coffee&Bistro",
      verifiedHeatScore: 85,
      socialHeatScore: 100,
      placeHeatScore: 79,
      recentSignalScore: 60,
      xhsVisibleNotes: 8,
      xhsLikeSum: 804,
      dpReviewMax: 1937,
      auditStatus: "已核验",
      dpMatchConfidence: "高",
    },
    {
      brand: "DOE",
      verifiedHeatScore: 83,
      socialHeatScore: 100,
      placeHeatScore: 74,
      recentSignalScore: 60,
      xhsVisibleNotes: 8,
      xhsLikeSum: 390,
      dpReviewMax: 1262,
      auditStatus: "已核验",
      dpMatchConfidence: "高",
    },
    {
      brand: "HOLY BAGEL",
      verifiedHeatScore: 65,
      socialHeatScore: 100,
      placeHeatScore: 100,
      recentSignalScore: 36,
      xhsVisibleNotes: 8,
      xhsLikeSum: 259,
      dpReviewMax: 28181,
      auditStatus: "需复核",
      dpMatchConfidence: "低",
    },
  ];

  function normalizeBrandName(value) {
    return String(value || "").toLowerCase().replace(/[\s&.·()（）'’-]/g, "");
  }

  const brandAuditByKey = system.brandAuditSamples.reduce((acc, item) => {
    acc[normalizeBrandName(item.brand)] = item;
    return acc;
  }, {});

  function heatProfile(row) {
    const [name, city, category, subCategory, role, tags, fitDNA, fitNote, sourceKey] = row;
    const text = `${name} ${city} ${category} ${subCategory} ${role} ${tags} ${fitDNA} ${fitNote} ${sourceKey}`;
    const sourceKeys = normalizeList(sourceKey);
    let social = 58;
    let place = 55;
    let proof = 56;
    let recent = 55;
    if (sourceKeys.some(key => key.includes("social"))) social += 6;
    if (sourceKeys.some(key => /2026|Research|krParkLane|Nonstandard/.test(key))) recent += 12;
    if (hasAny(text, ["首店", "落地", "天目里", "REGULAR", "前滩公园巷", "嘉佰汇", "郎园", "玉鸟集"])) proof += 18;
    if (hasAny(text, ["咖啡", "烘焙", "甜品", "餐酒", "买手", "设计师", "香氛", "书店"])) social += 10;
    if (hasAny(text, ["点评", "社区", "餐饮", "早午餐", "茶", "咖啡", "烘焙"])) place += 8;
    if (hasAny(text, ["主理人", "独立", "小店", "内容", "艺术", "策展"])) proof += 8;
    if (hasAny(text, ["首店", "中国首店", "华东首店", "上海首店", "开店"])) recent += 10;
    // 20260703 迁移：统一新口径权重 社交0.28 / 到店0.30 / 非标0.26 / 开店0.16
    // （旧口径 0.34/0.24/0.26/0.16 与《品牌库采集与热度评分规则_v1》不符）
    const heat = social * 0.28 + place * 0.30 + proof * 0.26 + recent * 0.16;
    const audit = brandAuditByKey[normalizeBrandName(name)];
    if (audit) {
      const proofScore = audit.dpMatchConfidence === "高" ? Math.max(proof, 74) : Math.max(48, proof - 8);
      const socialScore = clampScore(audit.socialHeatScore);
      const placeScore = clampScore(audit.placeHeatScore);
      const proofFinal = clampScore(proofScore);
      const recentScore = clampScore(audit.recentSignalScore);
      return {
        // 20260703 迁移：总分由分项按新口径加权得出（原 verifiedHeatScore 为旧口径人工总分，
        // 人工降权信息已通过 dpMatchConfidence → proofScore 进入分项，不再直接覆盖总分）
        heatScore: clampScore(socialScore * 0.28 + placeScore * 0.30 + proofFinal * 0.26 + recentScore * 0.16),
        socialHeatScore: socialScore,
        placeHeatScore: placeScore,
        nonstandardProofScore: proofFinal,
        recentSignalScore: recentScore,
        heatStatus: `${audit.auditStatus}｜小红书${audit.xhsVisibleNotes}条可见笔记｜点评最高${audit.dpReviewMax}评`,
      };
    }
    return {
      heatScore: clampScore(heat),
      socialHeatScore: clampScore(social),
      placeHeatScore: clampScore(place),
      nonstandardProofScore: clampScore(proof),
      recentSignalScore: clampScore(recent),
      heatStatus: "临时热度｜待小红书/大众点评覆盖",
    };
  }

  const grouped = brandRows.reduce((acc, row) => {
    const category = row[2];
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  system.brandLibrary = brandRows.map((row, index) => {
    const [name, city, category, subCategory, role, tags, fitDNA, fitNote, sourceKey] = row;
    const audit = brandAuditByKey[normalizeBrandName(name)];
    const sourceKeys = normalizeList(sourceKey);
    if (audit) sourceKeys.push("brandHeatAudit20260628");
    return {
      id: `brand-v2-${String(index + 1).padStart(3, "0")}`,
      name,
      city,
      category,
      subCategory,
      brandRole: role,
      maturity: /首店|主理人|小店|新锐|内容/.test(role + subCategory) ? "新兴/主理人优先" : "成熟但适配非标",
      tags: normalizeList(tags),
      fitDNA: normalizeList(fitDNA),
      ...heatProfile(row),
      spaceDemand: "待核验：需补面积、工程条件、拓店城市、合作模式和真实门店链接",
      fitNote,
      risk: "需二次核验：小红书/大众点评热度、门店稳定性、拓店意愿、授权素材和城市适配度。",
      sourceKeys: Array.from(new Set(sourceKeys)),
      verification: audit ? `${audit.auditStatus}｜已进入热度核验样本` : "v2精选品牌｜非传统连锁｜待招商二次核验",
    };
  });

  system.brandGroups = Object.entries(grouped).map(([category, count]) => ({
    category,
    count,
    defaultSpace: category.includes("地方风物") ? "待核验：伴手礼陈列、游客动线、地方叙事、可带走产品和联名包装条件。"
      : category.includes("展览展馆") ? "待核验：展陈面积、票务/活动机制、换展频率、IP 授权和媒体传播资源。"
      : category.includes("夜经济") ? "待核验：夜间营业许可、外摆边界、声量管理、酒水条件和安保运营能力。"
      : "待招商核验后补充标准店型、快闪店型、外摆和工程条件。",
  }));
})();
