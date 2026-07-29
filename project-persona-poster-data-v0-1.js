(function attachCommercialDnaProjectPostersV01(globalScope) {
  "use strict";

  const entries = Object.freeze([
    Object.freeze({
      assetId: "P01",
      representativeCode: "LSBE",
      resultCodes: Object.freeze(["LSBE", "LSBR", "LCBE"]),
      personaName: "居委会",
      asset: "project-persona-assets/v0.1/webp/p01-lsbe-community-capybara-project-poster-v01.webp",
      assetAlt: "项目动物人格“居委会”：一只穿社区服务背心的水豚，拿着三公里地图，在社区居民服务站记录熟客与便民服务。",
    }),
    Object.freeze({
      assetId: "P02",
      representativeCode: "LSME",
      resultCodes: Object.freeze(["LSME", "LSMR", "LCME", "LCMR"]),
      personaName: "文艺据点",
      asset: "project-persona-assets/v0.1/webp/p02-lsme-art-cat-project-poster-v01.webp",
      assetAlt: "项目动物人格“文艺据点”：一只戴紫色围巾的黑猫，站在社区文化空间里整理独立刊物、唱片和工作坊日历。",
    }),
    Object.freeze({
      assetId: "P03",
      representativeCode: "LCBR",
      resultCodes: Object.freeze(["LCBR"]),
      personaName: "周末限定",
      asset: "project-persona-assets/v0.1/webp/p03-lcbr-weekend-squirrel-project-poster-v01.webp",
      assetAlt: "项目动物人格“周末限定”：一只穿黄色活动背心的松鼠，在周末市集拿着扩音器、签到表和固定栏目计划。",
    }),
    Object.freeze({
      assetId: "P04",
      representativeCode: "DSBE",
      resultCodes: Object.freeze(["DSBE", "DSBR", "DCBE"]),
      personaName: "中央车站",
      asset: "project-persona-assets/v0.1/webp/p04-dsbe-station-elephant-project-poster-v01.webp",
      assetAlt: "项目动物人格“中央车站”：一只穿蓝色站务制服的象，在交通枢纽用放大镜检查客流、记忆路线和访客调研。",
    }),
    Object.freeze({
      assetId: "P05",
      representativeCode: "DSME",
      resultCodes: Object.freeze(["DSME", "DSMR"]),
      personaName: "同好会馆",
      asset: "project-persona-assets/v0.1/webp/p05-dsme-club-fox-project-poster-v01.webp",
      assetAlt: "项目动物人格“同好会馆”：一只穿黑色会馆夹克的狐狸，在圈层据点整理唱片、模型、会员档案和入会邀请。",
    }),
    Object.freeze({
      assetId: "P06",
      representativeCode: "DCBR",
      resultCodes: Object.freeze(["DCBR"]),
      personaName: "顶流片场",
      asset: "project-persona-assets/v0.1/webp/p06-dcbr-studio-peacock-project-poster-v01.webp",
      assetAlt: "项目动物人格“顶流片场”：一只穿青绿色导演夹克的孔雀，在城市事件现场检查媒体机位、灯光控制和二刷通行证。",
    }),
    Object.freeze({
      assetId: "P07",
      representativeCode: "DCME",
      resultCodes: Object.freeze(["DCME"]),
      personaName: "新物种实验室",
      asset: "project-persona-assets/v0.1/webp/p07-dcme-lab-octopus-project-poster-v01.webp",
      assetAlt: "项目动物人格“新物种实验室”：一只戴圆框护目镜、穿实验工作服的紫色章鱼，正在首店验证场景中检查试管、空间图纸、运营账本和商业模型。",
    }),
    Object.freeze({
      assetId: "P08",
      representativeCode: "DCMR",
      resultCodes: Object.freeze(["DCMR"]),
      personaName: "内容永动机",
      asset: "project-persona-assets/v0.1/webp/p08-dcmr-engine-bee-project-poster-v01.webp",
      assetAlt: "项目动物人格“内容永动机”：一只穿制作人背心的蜜蜂，在内容中控室检查全年矩阵、麦克风、电量表和成本账本。",
    }),
  ]);

  const entryByPersona = Object.freeze(Object.fromEntries(entries.map(entry => [entry.personaName, entry])));
  const entryByResultCode = Object.freeze(Object.fromEntries(
    entries.flatMap(entry => entry.resultCodes.map(code => [code, entry])),
  ));
  const confirmedJudgmentOverrides = Object.freeze({
    DCME: Object.freeze({
      instinct: "靠新概念、首店和策展制造第一次到访。",
      risk: "新鲜感退潮后，如果没有复访机制，账本会最先说真话。",
      action: "先验证一条能重复带来复访和收入的内容机制，再扩大概念与空间投入。",
      roast: "概念很多，账本很诚实。首店和策展是刀，不是遮羞布。",
    }),
  });

  function entryForResultCode(code = "") {
    return entryByResultCode[String(code || "").toUpperCase()] || null;
  }

  function entryForPersona(personaName = "") {
    return entryByPersona[String(personaName || "")] || null;
  }

  function judgmentFor(resultCode = "", projectSystem = {}) {
    const code = String(resultCode || "").toUpperCase();
    const personaName = projectSystem.personas?.project?.[code] || "";
    const profile = projectSystem.projectProfiles?.[code] || {};
    const info = projectSystem.info?.[personaName] || [];
    const override = confirmedJudgmentOverrides[code] || {};
    return Object.freeze({
      instinct: override.instinct || profile.strength || "先确认项目真正依赖的到访与复访基本盘。",
      risk: override.risk || profile.risk || "先补足真实经营数据，再判断项目风险。",
      action: override.action || profile.firstMove || "先做一个可以在短周期内验证的经营动作。",
      roast: override.roast || info[1] || "项目人格已生成，下一步看经营事实。",
    });
  }

  globalScope.COMMERCIAL_DNA_PROJECT_POSTERS_V0_1 = Object.freeze({
    contentVersion: "project-persona-poster-production-20260729-01",
    assetManifestUrl: "project-persona-assets/v0.1/manifest.json",
    entries,
    entryByPersona,
    entryByResultCode,
    entryForResultCode,
    entryForPersona,
    judgmentFor,
  });
})(typeof window !== "undefined" ? window : globalThis);
