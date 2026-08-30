(function attachCommercialDnaSampleAtlasV01(globalScope) {
  "use strict";

  const DNA_CODE_PATTERN = /^[LD][SC][BM][ER]$/;
  const BRAND_NEED_QUESTION = "这个区域生活的人，或者来到这里的人，真正需要什么品牌？";
  const FEATURED_BRAND_NAMES = Object.freeze([
    "荒石公园",
    "光明邨",
    "AOKKA Coffee&Bistro",
    "TOTOMATO",
  ]);
  const READY_IMAGE_RIGHTS = new Set([
    "owned",
    "licensed",
    "permission-granted",
    "public-domain",
    "user-approved-public-display",
  ]);
  const REVIEW_IMAGE_RIGHTS = new Set([
    "official-public-review",
    "user-approved-private-library",
  ]);
  const READY_PHILOSOPHY_AUTHORITIES = new Set([
    "brand-website",
    "brand-owned-account",
    "brand-official-wechat",
    "brand-team-direct-interview",
    "founder-direct-interview",
    "government-brand-profile",
    "professional-brand-analysis",
  ]);
  const READY_STORE_SCOPES = new Set([
    "historical-location",
    "verified-location",
    "official-retail-count",
  ]);
  const READY_STORE_COUNT_KINDS = new Set([
    "official-stated-total",
    "official-directory-total",
    "official-current-total",
    "verified-minimum",
    "verified-current-total",
  ]);
  const READY_STORE_COUNT_QUALIFIERS = new Set([
    "exact",
    "at-least",
    "over",
    "approx",
  ]);
  const READY_STORE_CITY_STATUSES = new Set([
    "complete",
    "partial",
    "unknown",
  ]);
  const READY_STORE_AUTHORITIES = new Set([
    "brand-website",
    "brand-owned-account",
    "brand-official-wechat",
    "government-brand-profile",
    "media-brand-profile",
    "official-store-directory",
    "official-map-listing",
  ]);
  const READY_LEARN_MORE_AUTHORITIES = new Set([
    "independent-brand-analysis",
    "professional-brand-analysis",
    "media-brand-analysis",
    "brand-team-direct-interview",
    "founder-direct-interview",
    "brand-website",
  ]);
  const FALLBACK_LEARN_MORE_AUTHORITIES = new Set([
    "independent-brand-analysis",
    "professional-brand-analysis",
    "media-brand-analysis",
    "brand-team-direct-interview",
    "founder-direct-interview",
  ]);
  const FALLBACK_LEARN_MORE_EXCLUDED_HOSTS = new Set([
    "www.xiaoyuzhoufm.com",
    "xiaoyuzhoufm.com",
  ]);
  const READY_LEARN_MORE_TYPES = new Set(["article", "video"]);
  const LEARN_MORE_DESTINATION_DOMAINS = Object.freeze([
    "10100.com",
    "ifeng.com",
    "xiaohongshu.com",
    "xhslink.com",
    "mp.weixin.qq.com",
    "winshang.com",
    "brandstar.com.cn",
    "36kr.com",
    "cmccap.com",
    "foodaily.com",
    "gzstv.com",
    "insideretail.asia",
    "jms.ctdsb.net",
    "cna.com.tw",
    "cw.com.tw",
    "cyol.com",
    "hkcd.com",
    "hypebeast.cn",
    "kiwamino.com",
    "likemagazine.com.hk",
    "note.com",
    "nowre.com",
    "pangjing.cn",
    "people.com.cn",
    "podcasts.apple.com",
    "rachelgouk.com",
    "shcfa.cn",
    "sina.cn",
    "sina.com.cn",
    "sophieservesup.com",
    "soundoflife.com",
    "www.adquan.com",
    "www.archdaily.com",
    "www.bilibili.com",
    "www.d-arts.cn",
    "www.gooood.cn",
    "www.jiemian.com",
    "www.sohu.com",
    "thepaper.cn",
    "theunreasonable.com",
    "tidesight.com",
    "vogue.com",
    "vogue.com.tw",
    "weibo.com",
    "xinhuanet.com",
    "cafa.com.cn",
    "ronglibrary.com",
    "www.ronglibrary.com",
    "archdaily.cn",
    "www.archdaily.cn",
    "chinanews.com",
    "www.chinanews.com",
    "huaxia.com",
    "gd.huaxia.com",
    "nju.edu.cn",
    "sp.nju.edu.cn",
    "66wz.com",
    "www.66wz.com",
    "tyjxb.xmu.edu.cn",
    "nationalreading.gov.cn",
    "www.nationalreading.gov.cn",
    "gl.sjs.org.hk",
    "canyin88.com",
    "pencilnews.cn",
    "tianjinwe.com",
    "chinapost.com.cn",
    "toless.cn",
    "gmw.cn",
    "fjdaily.com",
    "jsxc.gov.cn",
    "beer52.com",
    "e-architect.com",
    "tangyu.net",
    "ruibokangfu.com",
    "rebody.vip",
    "fashionsnap.com",
    "fuzhou.gov.cn",
    "yatzer.com",
  ]);
  const LEARN_MORE_COVER_DOMAINS = Object.freeze([
    "10100.com",
    "ifengimg.com",
    "xhscdn.com",
    "mmbiz.qpic.cn",
    "winshang.com",
    "brandstar.com.cn",
    "36krcdn.com",
    "cmccap.com",
    "ctdsb.clouddiffuse.xyz",
    "foodaily.com",
    "gshmzfgw.com",
    "insideretail.asia",
    "n.sinaimg.cn",
    "sophieservesup.s3.amazonaws.com",
    "i1.hdslb.com",
    "images.adsttc.com",
    "imagepphcloud.thepaper.cn",
    "img.d-arts.cn",
    "img.jiemian.com",
    "oss.adquan.com",
    "oss.gooood.cn",
    "q6.itc.cn",
    "p7.itc.cn",
    "cdn.sohucs.com",
    "soundoflife.com",
    "xiaohongshu.com",
    "whb.cn",
    "sznews.com",
    "798artdistrict.com.cn",
    "thefastimg.com",
    "cloudfront.net",
    "e-architect.com",
    "faiusr.com",
    "ruibokangfu.com",
    "rebody.health",
    "fashionsnap-assets.com",
    "fuzhou.gov.cn",
    "q0.itc.cn",
    "q5.itc.cn",
    "hypb.st",
    "gywb.cn",
    "abitare.it",
    "nationalreading.gov.cn",
  ]);
  const READY_SOURCE_LINK_STATUSES = new Set(["active"]);
  const STORE_LOCATION_DOMAINS = Object.freeze([
    "dianping.com",
    "amap.com",
    "maps.apple.com",
    "map.baidu.com",
    "map.qq.com",
    "meituan.com",
    "maps.google.com",
    "trip.com",
    "ctrip.com",
    "b10live.cn",
    "costco.cn",
    "passoni.com",
  ]);
  const LOCAL_BRAND_MEDIA_PATTERN = /^(?:brand-assets|assets)\/[^\x00<>"'`]+\.(?:avif|webp|png|jpe?g)$/i;
  const LOCAL_REVIEW_BRAND_MEDIA_PATTERN = /^brand-review-assets\/[^\x00<>"'`]+\.(?:avif|webp|png|jpe?g)$/i;
  const SHA256_PATTERN = /^[a-f0-9]{64}$/i;
  const STORE_SPACE_ROLE_PATTERN = /门店|店内|空间|工作室|门头|外观|就餐|店铺|店面/u;
  const PRODUCT_ROLE_PATTERN = /产品|作品|商品|餐品|饮品|菜品|点心|咖啡|甜点|食品/u;
  const ENTRY_STOREFRONT_PATTERN = /门头|门面|招牌|外立面|沿街|临街|入口|旗舰外观|店铺外观|店面外观|门店外观/u;
  const ENTRY_WIDE_SCENE_PATTERN = /全景|整体外观|建筑外观|街景|庭院|外摆|店内|空间|展厅|工作室|就餐|陈列/u;
  const ENTRY_HISTORICAL_PATTERN = /历史|旧店|已关闭|闭店/u;

  function cleanText(value) {
    return String(value || "").trim();
  }

  function cleanList(value) {
    const rows = Array.isArray(value)
      ? value
      : cleanText(value).split(/[,，/、]/);
    return Array.from(new Set(rows.map(cleanText).filter(Boolean)));
  }

  function brandRows(system = globalScope.COMMERCIAL_DNA_SYSTEM) {
    const seen = new Set();
    return (system?.brandLibrary || []).filter(item => {
      const id = cleanText(item?.id);
      const name = cleanText(item?.name);
      if (!id || !name || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }

  function projectRows(caseData = globalScope.PARK_CASE_DATA) {
    const seen = new Set();
    return (caseData?.cases || []).filter(item => {
      const id = cleanText(item?.id);
      const name = cleanText(item?.name);
      if (!id || !name || seen.has(id)) return false;
      seen.add(id);
      return true;
    });
  }

  function brandById(id, system) {
    const target = cleanText(id);
    return brandRows(system).find(item => cleanText(item.id) === target) || null;
  }

  function projectById(id, caseData) {
    const target = cleanText(id);
    return projectRows(caseData).find(item => cleanText(item.id) === target) || null;
  }

  function formalProjectIds(formalSystem = globalScope.COMMERCIAL_DNA_FORMAL_PROJECT_SAMPLES_V0_1) {
    return new Set((formalSystem?.projects || []).map(row => cleanText(row?.caseItem?.id)).filter(Boolean));
  }

  function projectStatus(item, formalSystem) {
    return formalProjectIds(formalSystem).has(cleanText(item?.id)) ? "六维正式样本" : "参考样本";
  }

  function projectSummary(item) {
    return cleanText(
      item?.presentation?.oneLineValue
      || item?.usable
      || item?.value
      || item?.presentation?.businessProblem
      || "观察空间、内容、品牌与运营如何共同构成项目。",
    );
  }

  function brandStatus(item) {
    const verification = cleanText(item?.verification);
    const maturity = cleanText(item?.maturity);
    const combined = `${verification} ${maturity}`;
    if (/用户确认入库|按型补库入库/.test(combined)) return "已收录 · 持续核验";
    if (/已核验|到店证据已补|证据已补/.test(combined)) return "已有资料 · 持续核验";
    if (/待复核|发现池|待核验|待补/.test(combined)) return "发现样本 · 待补证";
    return "策略样本 · 待核验";
  }

  function brandStage(item) {
    const maturity = cleanText(item?.maturity);
    if (/主理人/.test(maturity)) return "主理人品牌 · 底库记录";
    if (/成长/.test(maturity)) return "成长阶段 · 底库记录";
    if (/成熟/.test(maturity)) return "成熟阶段 · 底库记录";
    return "品牌阶段待核验";
  }

  function brandSummary(item) {
    const subCategory = cleanText(item?.subCategory);
    const category = cleanText(item?.category);
    return `${subCategory || category || "品牌业态"}。`;
  }

  function brandCategoryLabel(
    item,
    editorialSystem = globalScope.COMMERCIAL_DNA_BRAND_EDITORIAL_V0_1,
  ) {
    const brandId = cleanText(item?.id);
    const brandName = cleanText(item?.name);
    const editorial = editorialSystem?.brands?.[brandId];
    const editorialLabel = editorial && cleanText(editorial.expectedName) === brandName
      ? cleanText(editorial.categoryLabel)
      : "";
    if (editorialLabel) {
      return /类$/u.test(editorialLabel) ? editorialLabel : `${editorialLabel}类`;
    }
    const category = cleanText(item?.category || item?.subCategory || "品牌业态")
      .replace(/(?:类目|类别|类)$/u, "");
    return `${category || "品牌业态"}类`;
  }

  function recordedCity(item) {
    return cleanText(item?.localCity || item?.city) || "待补";
  }

  function recordedStoreCities(store) {
    return cleanList(store?.cities)
      .filter(city => !/^(?:全国|多地|待补|城市待补)$/u.test(city));
  }

  function footprintModel(
    item,
    editorialSystem = globalScope.COMMERCIAL_DNA_BRAND_EDITORIAL_V0_1,
  ) {
    const city = recordedCity(item);
    const brandId = cleanText(item?.id);
    const brandName = cleanText(item?.name);
    const editorial = editorialSystem?.brands?.[brandId];
    const editorialMatches = editorial && cleanText(editorial.expectedName) === brandName;
    const store = editorialMatches ? editorial.store : null;
    const legacySourceKey = cleanText(store?.sourceKey);
    const countSourceKey = cleanText(store?.countSourceKey) || legacySourceKey;
    const citySourceKey = cleanText(store?.citySourceKey) || legacySourceKey;
    const addressSourceKey = cleanText(store?.addressSourceKey);
    const countSource = normalizedBoundSource(
      countSourceKey,
      editorialSystem?.sources?.[countSourceKey],
      {
        brandId,
        expectedName: brandName,
        purposes: ["store-count"],
        authorities: READY_STORE_AUTHORITIES,
        allowObservedAt: true,
      },
    );
    const citySource = normalizedBoundSource(
      citySourceKey,
      editorialSystem?.sources?.[citySourceKey],
      {
        brandId,
        expectedName: brandName,
        purposes: ["store-city"],
        authorities: READY_STORE_AUTHORITIES,
        allowObservedAt: true,
      },
    );
    const addressSource = addressSourceKey
      ? normalizedBoundSource(
        addressSourceKey,
        editorialSystem?.sources?.[addressSourceKey],
        {
          brandId,
          expectedName: brandName,
          purposes: ["store-address"],
          authorities: READY_STORE_AUTHORITIES,
          allowObservedAt: true,
        },
      )
      : null;
    const count = store?.count;
    const countKind = cleanText(store?.countKind);
    const legacyScope = cleanText(store?.scope);
    const scopeCode = cleanText(store?.scopeCode) || legacyScope;
    const scopeLabel = cleanText(store?.scopeLabel);
    const explicitQualifier = cleanText(store?.qualifier);
    const qualifier = explicitQualifier || (
      countKind === "verified-minimum" ? "at-least" : "exact"
    );
    const unit = cleanText(store?.unit);
    const cities = recordedStoreCities(store);
    const explicitCitiesStatus = cleanText(store?.citiesStatus);
    const citiesStatus = explicitCitiesStatus || (cities.length ? "complete" : "unknown");
    const usesLegacyScope = !cleanText(store?.scopeCode);
    const countKindMatchesScope = usesLegacyScope
      ? (
        (countKind === "official-current-total" && legacyScope === "official-retail-count")
        || (countKind === "verified-minimum" && legacyScope === "verified-location")
      )
      : Boolean(
        /^[a-z0-9]+(?:-[a-z0-9]+)*$/u.test(scopeCode)
        && scopeCode !== "historical-location"
      );
    const qualifierMatchesKind = (
      READY_STORE_COUNT_QUALIFIERS.has(qualifier)
      && (countKind !== "official-directory-total" || qualifier === "exact")
      && (countKind !== "verified-minimum" || qualifier === "at-least")
    );
    const asOf = isIsoDate(store?.asOf) ? cleanText(store?.asOf) : "";
    const observedAt = isIsoDate(store?.observedAt) ? cleanText(store?.observedAt) : "";
    const countReady = Boolean(
      countSource
      && Number.isInteger(count)
      && count > 0
      && cleanText(store?.descriptor)
      && (READY_STORE_SCOPES.has(legacyScope) || Boolean(cleanText(store?.scopeCode)))
      && READY_STORE_COUNT_KINDS.has(countKind)
      && countKindMatchesScope
      && qualifierMatchesKind
      && /^(?:家|个|处)(?:已确认)?门店$/u.test(unit)
      && (asOf || observedAt),
    );
    const cityReady = Boolean(
      READY_STORE_CITY_STATUSES.has(citiesStatus)
      && (
        citiesStatus === "unknown"
        || (cities.length > 0 && citySource)
      )
    );
    const visibleCities = cityReady && citiesStatus !== "unknown" ? cities : [];
    const visibleCitySet = new Set(visibleCities);
    const scopeParts = scopeLabel
      .split(/\s*[·、，,]\s*/u)
      .map(cleanText)
      .filter(Boolean);
    const internalLocationLabelPattern = /(?:已知.{0,16}线索|待核|待补证|当前资料|研究口径|资料边界|未闭环)/u;
    const publicScopeParts = scopeParts.filter(label => (
      !visibleCitySet.has(label)
      && !internalLocationLabelPattern.test(label)
    ));
    const locationLabels = Array.from(new Set([
      ...publicScopeParts,
      ...visibleCities,
    ].filter(Boolean)));
    const directLocationUrl = safeStoreLocationUrl(store?.linkUrl)
      || safeStoreLocationUrl(item?.dpUrl);
    const officialLocationUrl = addressSource
      ? safeEditorialUrl(store?.linkUrl || addressSource.url)
      : "";
    const publicUrl = store ? directLocationUrl || officialLocationUrl : "";
    const conflicts = Array.isArray(store?.conflicts)
      ? store.conflicts
        .map(conflict => ({
          code: cleanText(conflict?.code),
          preferredCountKind: cleanText(conflict?.preferredCountKind),
          officialStatedTotal: Number.isInteger(conflict?.officialStatedTotal)
            ? conflict.officialStatedTotal
            : null,
          officialDirectoryTotal: Number.isInteger(conflict?.officialDirectoryTotal)
            ? conflict.officialDirectoryTotal
            : null,
          scopeLabel: cleanText(conflict?.scopeLabel),
          observedAt: isIsoDate(conflict?.observedAt) ? cleanText(conflict.observedAt) : "",
          sourceKey: cleanText(conflict?.sourceKey),
          note: cleanText(conflict?.note),
        }))
        .filter(conflict => conflict.code && conflict.note)
      : [];
    return {
      city,
      cities: cityReady ? visibleCities : [],
      citiesStatus: cityReady ? citiesStatus : "unknown",
      citySource: cityReady && citiesStatus !== "unknown" ? citySource : null,
      locationLabels,
      count: countReady ? count : null,
      countDisplay: countReady ? String(count) : "—",
      countKind: countReady ? countKind : "unknown",
      qualifier: countReady ? qualifier : "unknown",
      countPrefix: countReady ? ({
        exact: "",
        "at-least": "至少",
        over: "超过",
        approx: "约",
      }[qualifier] || "") : "",
      unit: countReady ? unit : "",
      descriptor: countReady
        ? cleanText(store?.descriptor)
        : "门店数量待核",
      asOf: countReady ? asOf : "",
      observedAt: countReady ? observedAt : "",
      source: countReady ? countSource : null,
      countSource: countReady ? countSource : null,
      scope: countReady ? scopeCode : "unknown",
      scopeCode: countReady ? scopeCode : "unknown",
      scopeLabel: countReady ? scopeLabel : "",
      showCitiesWithoutCount: Boolean(cityReady && visibleCities.length),
      conflicts,
      publicUrl,
      publicUrlLabel: officialLocationUrl && publicUrl === officialLocationUrl
        ? cleanText(store?.linkLabel) || "官方地址"
        : storeLocationLabel(publicUrl),
      addressSource: publicUrl === officialLocationUrl ? addressSource : null,
    };
  }

  function safeEditorialUrl(value) {
    const url = cleanText(value);
    return /^https?:\/\/[^\s]+$/i.test(url) ? url : "";
  }

  function isIsoDate(value) {
    return /^\d{4}-\d{2}-\d{2}$/.test(cleanText(value));
  }

  function safeStoreLocationUrl(value) {
    const url = cleanText(value);
    const UrlConstructor = globalScope.URL;
    if (!url || typeof UrlConstructor !== "function") return "";
    try {
      const parsed = new UrlConstructor(url);
      const hostname = cleanText(parsed.hostname).toLowerCase().replace(/\.$/, "");
      const allowed = STORE_LOCATION_DOMAINS.some(domain => (
        hostname === domain || hostname.endsWith(`.${domain}`)
      ));
      const tripPathReady = !/(?:^|\.)(?:trip|ctrip)\.com$/i.test(hostname)
        || /^\/restaurant(?:\/|$)/i.test(parsed.pathname);
      const googlePathReady = !/(?:^|\.)google\.com$/i.test(hostname)
        || /^\/maps(?:\/|$)/i.test(parsed.pathname);
      if (
        parsed.protocol !== "https:"
        || parsed.username
        || parsed.password
        || !allowed
        || !tripPathReady
        || !googlePathReady
      ) return "";
      return parsed.href;
    } catch (_error) {
      return "";
    }
  }

  function storeLocationLabel(value) {
    const url = cleanText(value);
    if (/dianping\.com/i.test(url)) return "大众点评";
    if (/amap\.com/i.test(url)) return "高德地图";
    if (/maps\.apple\.com/i.test(url)) return "Apple Maps";
    if (/map\.baidu\.com/i.test(url)) return "百度地图";
    if (/map\.qq\.com/i.test(url)) return "腾讯地图";
    if (/meituan\.com/i.test(url)) return "美团";
    if (/google\.com/i.test(url)) return "Google Maps";
    if (/(?:trip|ctrip)\.com/i.test(url)) return "Trip.com";
    if (/(?:b10live|costco)\.cn/i.test(url)) return "官方地址";
    return "门店信息";
  }

  function safeCuratedHttpsUrl(value, allowedDomains) {
    const url = cleanText(value);
    const UrlConstructor = globalScope.URL;
    if (!url || typeof UrlConstructor !== "function") return "";
    try {
      const parsed = new UrlConstructor(url);
      const hostname = cleanText(parsed.hostname).toLowerCase().replace(/\.$/, "");
      const allowed = allowedDomains.some(domain => (
        hostname === domain || hostname.endsWith(`.${domain}`)
      ));
      if (
        parsed.protocol !== "https:"
        || parsed.username
        || parsed.password
        || !allowed
      ) return "";
      return parsed.href;
    } catch (_error) {
      return "";
    }
  }

  function normalizedBoundSource(sourceKey, source, {
    brandId,
    expectedName,
    purposes,
    authorities,
    urlNormalizer = safeEditorialUrl,
    allowObservedAt = false,
  }) {
    const authority = cleanText(source?.authority);
    const url = urlNormalizer(source?.url);
    const publishedAt = cleanText(source?.publishedAt);
    const observedAt = cleanText(source?.observedAt);
    const checkedAt = cleanText(source?.checkedAt);
    const basis = cleanText(source?.basis);
    const sourcePurposes = cleanList(source?.purpose);
    if (
      !sourceKey
      || !url
      || (!isIsoDate(publishedAt) && !(allowObservedAt && isIsoDate(observedAt)))
      || !isIsoDate(checkedAt)
      || !basis
      || cleanText(source?.brandId) !== cleanText(brandId)
      || cleanText(source?.expectedName) !== cleanText(expectedName)
      || !READY_SOURCE_LINK_STATUSES.has(cleanText(source?.linkStatus))
      || !purposes.every(purpose => sourcePurposes.includes(purpose))
      || !authorities.has(authority)
    ) return null;
    return {
      key: sourceKey,
      name: cleanText(source?.name) || "品牌理念来源",
      url,
      authority,
      purpose: sourcePurposes,
      brandId: cleanText(source?.brandId),
      expectedName: cleanText(source?.expectedName),
      linkStatus: cleanText(source?.linkStatus),
      publishedAt: isIsoDate(publishedAt) ? publishedAt : "",
      observedAt: isIsoDate(observedAt) ? observedAt : "",
      checkedAt,
      basis,
    };
  }

  function normalizedLearnMoreSource(sourceKey, source, brandId, expectedName) {
    const contentType = cleanText(source?.contentType);
    const normalized = normalizedBoundSource(sourceKey, source, {
      brandId,
      expectedName,
      purposes: ["deep-read"],
      authorities: READY_LEARN_MORE_AUTHORITIES,
      urlNormalizer: value => safeCuratedHttpsUrl(value, LEARN_MORE_DESTINATION_DOMAINS),
      allowObservedAt: true,
    });
    if (
      !normalized
      || !READY_LEARN_MORE_TYPES.has(contentType)
    ) return null;
    return {
      ...normalized,
      name: cleanText(source?.name) || "品牌深读",
      contentType,
    };
  }

  function shortLearnMoreTitle(source) {
    const name = cleanText(source?.name)
      .replace(/^[^｜|]{1,16}[｜|]\s*/u, "")
      .replace(/\s{2,}/g, " ");
    const fallback = cleanText(source?.expectedName) || "品牌深读";
    return Array.from(name || fallback).slice(0, 50).join("");
  }

  function fallbackLearnMoreRows(item, explicitUrls, editorialSystem) {
    const brandId = cleanText(item?.id);
    const brandName = cleanText(item?.name);
    const entryImage = brandEntryImageModel(item);
    const coverLocalSrc = cleanText(entryImage?.localSrc);
    const editorial = editorialSystem?.brands?.[brandId];
    const editorialMatches = editorial && cleanText(editorial.expectedName) === brandName;
    const sourceKeys = editorialMatches ? cleanList(editorial.philosophySourceKeys) : [];
    if (!coverLocalSrc || !sourceKeys.length) return [];
    return sourceKeys
      .map(sourceKey => normalizedBoundSource(sourceKey, editorialSystem?.sources?.[sourceKey], {
        brandId,
        expectedName: brandName,
        purposes: ["philosophy"],
        authorities: FALLBACK_LEARN_MORE_AUTHORITIES,
        urlNormalizer: value => safeCuratedHttpsUrl(value, LEARN_MORE_DESTINATION_DOMAINS),
      }))
      .filter(source => {
        if (!source || explicitUrls.has(source.url)) return false;
        try {
          return !FALLBACK_LEARN_MORE_EXCLUDED_HOSTS.has(new globalScope.URL(source.url).hostname.toLowerCase());
        } catch (_error) {
          return false;
        }
      })
      .map(source => ({
        title: cleanText(source.name) || "品牌深读",
        displayTitle: shortLearnMoreTitle(source),
        coverUrl: "",
        coverLocalSrc,
        url: source.url,
        contentType: "article",
        source,
        fallbackCover: true,
      }));
  }

  function brandLearnMoreModel(
    item,
    editorialSystem = globalScope.COMMERCIAL_DNA_BRAND_EDITORIAL_V0_1,
    limit = 4,
  ) {
    const brandId = cleanText(item?.id);
    const brandName = cleanText(item?.name);
    const editorial = editorialSystem?.brands?.[brandId];
    const editorialMatches = editorial && cleanText(editorial.expectedName) === brandName;
    const fallbackCoverLocalSrc = cleanText(brandEntryImageModel(item)?.localSrc);
    const candidates = editorialMatches && Array.isArray(editorial.learnMore)
      ? editorial.learnMore
      : [];
    const seen = new Set();
    const explicitRows = candidates
      .map(entry => {
        const title = cleanText(entry?.title);
        const displayTitle = cleanText(entry?.displayTitle) || title;
        const sourceKey = cleanText(entry?.sourceKey);
        const source = normalizedLearnMoreSource(
          sourceKey,
          editorialSystem?.sources?.[sourceKey],
          brandId,
          brandName,
        );
        const coverUrl = safeCuratedHttpsUrl(entry?.coverUrl, LEARN_MORE_COVER_DOMAINS);
        const coverLocalSrc = fallbackCoverLocalSrc;
        if (
          !title
          || !displayTitle
          || Array.from(title).length > 80
          || Array.from(displayTitle).length > 50
          || !source
          || (!coverUrl && !coverLocalSrc)
          || seen.has(source.url)
        ) return null;
        seen.add(source.url);
        return {
          title,
          displayTitle,
          coverUrl,
          coverLocalSrc,
          url: source.url,
          contentType: source.contentType,
          source,
        };
      })
      .filter(Boolean);
    const fallbackRows = explicitRows.length ? [] : fallbackLearnMoreRows(item, seen, editorialSystem);
    return [...explicitRows, ...fallbackRows].slice(0, Math.max(0, Number(limit) || 0));
  }

  function normalizedReadyBrandMedia(asset, { requireRole = false } = {}) {
    const localSrc = cleanText(asset?.localSrc);
    const alt = cleanText(asset?.alt);
    const sourcePageUrl = safeEditorialUrl(asset?.sourcePageUrl);
    const role = cleanText(asset?.role);
    const sourceSha256 = cleanText(asset?.sourceSha256).toLowerCase();
    if (
      !LOCAL_BRAND_MEDIA_PATTERN.test(localSrc)
      || localSrc.includes("..")
      || !alt
      || !sourcePageUrl
      || cleanText(asset?.reuseStatus) !== "ready"
      || !READY_IMAGE_RIGHTS.has(cleanText(asset?.rightsStatus))
      || (requireRole && !role)
    ) return null;
    return {
      localSrc,
      alt,
      role,
      sourcePageUrl,
      sourceType: cleanText(asset?.sourceType),
      sourceAccount: cleanText(asset?.sourceAccount),
      sourceSha256: SHA256_PATTERN.test(sourceSha256) ? sourceSha256 : "",
      reuseStatus: "ready",
      rightsStatus: cleanText(asset?.rightsStatus),
      reviewOnly: false,
    };
  }

  function normalizedReviewBrandMedia(asset, { requireRole = false } = {}) {
    const localSrc = cleanText(asset?.localSrc);
    const alt = cleanText(asset?.alt);
    const sourcePageUrl = safeEditorialUrl(asset?.sourcePageUrl);
    const sourceFileUrl = safeEditorialUrl(asset?.sourceFileUrl);
    const role = cleanText(asset?.role);
    const sourceSha256 = cleanText(asset?.sourceSha256).toLowerCase();
    if (
      !LOCAL_REVIEW_BRAND_MEDIA_PATTERN.test(localSrc)
      || localSrc.includes("..")
      || !alt
      || !sourcePageUrl
      || !sourceFileUrl
      || !SHA256_PATTERN.test(sourceSha256)
      || cleanText(asset?.reuseStatus) !== "review_only"
      || !REVIEW_IMAGE_RIGHTS.has(cleanText(asset?.rightsStatus))
      || (requireRole && !role)
    ) return null;
    return {
      localSrc,
      alt,
      role,
      sourcePageUrl,
      sourceFileUrl,
      sourceType: cleanText(asset?.sourceType),
      sourceAccount: cleanText(asset?.sourceAccount),
      sourceSha256,
      reuseStatus: "review_only",
      rightsStatus: cleanText(asset?.rightsStatus),
      reviewOnly: true,
    };
  }

  function galleryImagesComplete(images) {
    if (images.length < 4 || images.length > 5) return false;
    if (!STORE_SPACE_ROLE_PATTERN.test(cleanText(images[0]?.role))) return false;
    if (images.filter(image => STORE_SPACE_ROLE_PATTERN.test(cleanText(image?.role))).length < 3) return false;
    if (images.filter(image => PRODUCT_ROLE_PATTERN.test(cleanText(image?.role))).length > 2) return false;
    const localPaths = new Set();
    const sourceHashes = new Set();
    return images.every(image => {
      const localSrc = cleanText(image?.localSrc).toLowerCase();
      const sourceSha256 = cleanText(image?.sourceSha256).toLowerCase();
      if (localPaths.has(localSrc)) return false;
      if (sourceSha256 && sourceHashes.has(sourceSha256)) return false;
      localPaths.add(localSrc);
      if (sourceSha256) sourceHashes.add(sourceSha256);
      return true;
    });
  }

  function localBrandReviewEnabled(
    reviewSystem = globalScope.COMMERCIAL_DNA_BRAND_GALLERY_REVIEW_V0_1,
  ) {
    const protocol = cleanText(globalScope.location?.protocol).toLowerCase();
    const hostname = cleanText(globalScope.location?.hostname).toLowerCase();
    const localHosts = new Set(["localhost", "127.0.0.1", "::1", "[::1]"]);
    const localReviewOrigin = protocol === "file:"
      || (["http:", "https:"].includes(protocol) && localHosts.has(hostname));
    return Boolean(
      localReviewOrigin
      && globalScope.__COMMERCIAL_DNA_LOCAL_BRAND_REVIEW_ENABLED__ === true
      && cleanText(reviewSystem?.mode) === "file-review-only"
      && cleanText(reviewSystem?.scope) === "local-file-only",
    );
  }

  function philosophyModel(
    item,
    system = globalScope.COMMERCIAL_DNA_SYSTEM,
    editorialSystem = globalScope.COMMERCIAL_DNA_BRAND_EDITORIAL_V0_1,
  ) {
    const brandId = cleanText(item?.id);
    const brandName = cleanText(item?.name);
    const editorial = editorialSystem?.brands?.[brandId];
    const editorialMatches = editorial && cleanText(editorial.expectedName) === brandName;
    const editorialSummary = editorialMatches ? cleanText(editorial.philosophy) : "";
    const editorialSources = editorialMatches
      ? cleanList(editorial.philosophySourceKeys)
        .map(key => normalizedBoundSource(key, editorialSystem?.sources?.[key], {
          brandId,
          expectedName: brandName,
          purposes: ["philosophy"],
          authorities: READY_PHILOSOPHY_AUTHORITIES,
          allowObservedAt: true,
        }))
        .filter(Boolean)
      : [];
    if (editorialSummary && editorialSources.length) {
      return {
        verified: true,
        editorial: true,
        headline: cleanText(editorial.philosophyHeadline) || "品牌理念",
        summary: editorialSummary,
        attribution: cleanText(editorial.philosophyAttribution) || "DNA 编辑改写",
        source: editorialSources[0],
        sources: editorialSources,
      };
    }

    const summary = cleanText(item?.philosophy || item?.brandPhilosophy);
    const sourceKey = cleanText(item?.philosophySourceKey);
    const source = normalizedBoundSource(sourceKey, sourceKey ? system?.sources?.[sourceKey] : null, {
      brandId,
      expectedName: brandName,
      purposes: ["philosophy"],
      authorities: READY_PHILOSOPHY_AUTHORITIES,
      allowObservedAt: true,
    });
    if (summary && source) {
      return {
        verified: true,
        editorial: false,
        headline: "品牌理念",
        summary,
        attribution: "品牌原始资料",
        source,
        sources: [source],
      };
    }
    return {
      verified: false,
      editorial: false,
      headline: "理念待补",
      summary: "当前没有可核验的官方表达，不从标签或视觉风格反推。",
      attribution: "",
      source: null,
      sources: [],
    };
  }

  function sourceRows(item, system = globalScope.COMMERCIAL_DNA_SYSTEM) {
    return cleanList(item?.sourceKeys).map(key => {
      const source = system?.sources?.[key] || {};
      const displayName = cleanText(source.name)
        .replace(/\b[LD][SC][BM][ER]\b/g, "")
        .replace(/定向(?:补充|补库)?/g, "补充")
        .replace(/\s{2,}/g, " ")
        .replace(/｜\s*｜/g, "｜")
        .trim();
      return {
        key,
        name: displayName || key,
        url: cleanText(source.url),
        note: cleanText(source.note),
      };
    });
  }

  function brandGalleryModel(
    item,
    gallerySystem = globalScope.COMMERCIAL_DNA_BRAND_GALLERY_V0_1,
    reviewSystem = globalScope.COMMERCIAL_DNA_BRAND_GALLERY_REVIEW_V0_1,
  ) {
    const brandId = cleanText(item?.id);
    const brandName = cleanText(item?.name);
    const galleryRecord = gallerySystem?.brands?.[brandId] || null;
    const record = galleryRecord && cleanText(galleryRecord.expectedName) === brandName
      ? galleryRecord
      : null;
    const candidates = Array.isArray(record?.images) ? record.images : [];
    const readyLogo = normalizedReadyBrandMedia(record?.logo);
    const readyImages = candidates
      .map(image => normalizedReadyBrandMedia(image, { requireRole: true }))
      .filter(Boolean);
    if (galleryImagesComplete(readyImages)) {
      return {
        logo: readyLogo,
        mode: "ready",
        complete: true,
        images: readyImages,
        summary: "用门店、空间、产品与真实使用场景认识这个品牌。",
      };
    }

    const reviewRecord = localBrandReviewEnabled(reviewSystem)
      ? reviewSystem?.brands?.[brandId] || null
      : null;
    const reviewMatches = reviewRecord
      && cleanText(reviewRecord.expectedName) === brandName;
    const reviewCandidates = reviewMatches && Array.isArray(reviewRecord.images)
      ? reviewRecord.images
      : [];
    const reviewLogo = reviewMatches
      ? normalizedReviewBrandMedia(reviewRecord.logo)
      : null;
    const reviewImages = reviewCandidates
      .map(image => normalizedReviewBrandMedia(image, { requireRole: true }))
      .filter(Boolean);
    const reviewComplete = galleryImagesComplete(reviewImages);
    return {
      logo: readyLogo || reviewLogo,
      mode: reviewComplete ? "review_only" : "unavailable",
      complete: reviewComplete,
      images: reviewComplete ? reviewImages : [],
      summary: reviewComplete
        ? "用门店、空间、产品与真实使用场景认识这个品牌。"
        : "品牌图片正在按门店与空间优先的标准筛选，确认后展示 4–5 张。",
    };
  }

  function brandEntryImageScore(image, index) {
    const text = `${cleanText(image?.role)} ${cleanText(image?.alt)}`;
    let score = 0;
    let kind = "fallback";
    if (PRODUCT_ROLE_PATTERN.test(text)) {
      score = 100;
      kind = "product";
    }
    if (ENTRY_WIDE_SCENE_PATTERN.test(text)) {
      score = 200;
      kind = "wide-scene";
    }
    if (STORE_SPACE_ROLE_PATTERN.test(text)) {
      score = Math.max(score, 240);
      kind = kind === "wide-scene" ? kind : "store-scene";
    }
    if (ENTRY_STOREFRONT_PATTERN.test(text)) {
      score = 300;
      kind = "storefront";
    }
    if (ENTRY_HISTORICAL_PATTERN.test(text)) score -= 180;
    return { image, index, score, kind };
  }

  function brandEntryImageModel(
    item,
    gallerySystem = globalScope.COMMERCIAL_DNA_BRAND_GALLERY_V0_1,
    reviewSystem = globalScope.COMMERCIAL_DNA_BRAND_GALLERY_REVIEW_V0_1,
  ) {
    const brandId = cleanText(item?.id);
    const brandName = cleanText(item?.name);
    const readyRecord = gallerySystem?.brands?.[brandId];
    const readyMatches = readyRecord && cleanText(readyRecord.expectedName) === brandName;
    const readyImages = readyMatches && Array.isArray(readyRecord.images)
      ? readyRecord.images
        .map(image => normalizedReadyBrandMedia(image, { requireRole: true }))
        .filter(Boolean)
      : [];
    const reviewRecord = localBrandReviewEnabled(reviewSystem)
      ? reviewSystem?.brands?.[brandId]
      : null;
    const reviewMatches = reviewRecord && cleanText(reviewRecord.expectedName) === brandName;
    const reviewImages = reviewMatches && Array.isArray(reviewRecord.images)
      ? reviewRecord.images
        .map(image => normalizedReviewBrandMedia(image, { requireRole: true }))
        .filter(Boolean)
      : [];
    const images = readyImages.length ? readyImages : reviewImages;
    const record = readyImages.length ? readyRecord : reviewRecord;
    if (!images.length) return null;

    const preferredSrc = cleanText(record?.entryImageSrc);
    const preferred = preferredSrc
      ? images.find(image => cleanText(image.localSrc) === preferredSrc)
      : null;
    if (preferred) {
      return {
        ...preferred,
        mode: readyImages.length ? "ready" : "review_only",
        selection: "manual",
      };
    }

    const selected = images
      .map(brandEntryImageScore)
      .sort((left, right) => right.score - left.score || left.index - right.index)[0];
    return selected ? {
      ...selected.image,
      mode: readyImages.length ? "ready" : "review_only",
      selection: selected.kind,
    } : null;
  }

  function brandDetailModel(
    item,
    system = globalScope.COMMERCIAL_DNA_SYSTEM,
    gallerySystem = globalScope.COMMERCIAL_DNA_BRAND_GALLERY_V0_1,
    editorialSystem = globalScope.COMMERCIAL_DNA_BRAND_EDITORIAL_V0_1,
  ) {
    if (!item) return null;
    return {
      item,
      status: brandStatus(item),
      summary: brandSummary(item),
      categoryLabel: brandCategoryLabel(item, editorialSystem),
      city: recordedCity(item),
      tags: cleanList(item.tags).filter(tag => !/适配|匹配|\b[LD][SC][BM][ER]\b/.test(tag)).slice(0, 5),
      footprint: footprintModel(item, editorialSystem),
      philosophy: philosophyModel(item, system, editorialSystem),
      gallery: brandGalleryModel(item, gallerySystem),
      learnMore: brandLearnMoreModel(item, editorialSystem),
      sources: sourceRows(item, system),
      verification: brandStatus(item),
      maturity: brandStage(item),
      evidenceBoundary: cleanText(item.risk) || "正式引用或招商接洽前，仍需核验品牌主体、门店现状与合作意愿。",
    };
  }

  function normalizedTerms(values) {
    return cleanList(values)
      .flatMap(value => value.split(/[\s,，/、·｜|()（）]+/))
      .map(value => value.toLowerCase())
      .filter(value => value.length >= 2);
  }

  function observationOverlap(item, project) {
    const brandTerms = normalizedTerms([
      item?.category,
      item?.subCategory,
      item?.brandRole,
      ...(cleanList(item?.tags)),
    ]);
    const projectTerms = normalizedTerms([
      project?.format,
      project?.subtype,
      project?.audience,
      ...(cleanList(project?.brandFitTypes)),
      ...(cleanList(project?.audienceTags)),
      ...(cleanList(project?.scenarioTags)),
      ...(cleanList(project?.heroTags)),
    ]);
    return brandTerms.reduce((count, term) => (
      count + (projectTerms.some(candidate => candidate === term || candidate.includes(term) || term.includes(candidate)) ? 1 : 0)
    ), 0);
  }

  function relatedProjects(item, caseData, formalSystem, limit = 2) {
    const codes = new Set(cleanList(item?.fitDNA).map(code => code.toUpperCase()).filter(code => DNA_CODE_PATTERN.test(code)));
    if (!codes.size) return [];
    const formalIds = formalProjectIds(formalSystem);
    return projectRows(caseData)
      .filter(project => codes.has(cleanText(project?.dna?.code).toUpperCase()))
      .map((project, sourceIndex) => ({
        project,
        sourceIndex,
        formal: formalIds.has(cleanText(project.id)),
        overlap: observationOverlap(item, project),
      }))
      .sort((left, right) => (
        Number(right.formal) - Number(left.formal)
        || right.overlap - left.overlap
        || left.sourceIndex - right.sourceIndex
      ))
      .slice(0, Math.max(0, Number(limit) || 0))
      .map(row => row.project);
  }

  function featuredBrands(system, limit = 2) {
    const rows = brandRows(system);
    const byName = new Map(rows.map(item => [cleanText(item.name), item]));
    const selected = [];
    const usedCategories = new Set();
    const add = item => {
      if (!item || selected.includes(item)) return;
      const category = cleanText(item.category);
      if (category && usedCategories.has(category) && selected.length < Number(limit)) return;
      selected.push(item);
      if (category) usedCategories.add(category);
    };
    FEATURED_BRAND_NAMES.forEach(name => add(byName.get(name)));
    rows.forEach(add);
    return selected.slice(0, Math.max(0, Number(limit) || 0));
  }

  function featuredProjects(caseData, formalSystem, limit = 2) {
    const rows = projectRows(caseData);
    const formalIds = formalProjectIds(formalSystem);
    const formal = rows.filter(item => formalIds.has(cleanText(item.id)));
    const presentationReady = formal.filter(item => cleanText(item.imageFit) === "contain");
    return [...presentationReady, ...formal.filter(item => !presentationReady.includes(item)), ...rows.filter(item => !formalIds.has(cleanText(item.id)))]
      .slice(0, Math.max(0, Number(limit) || 0));
  }

  globalScope.COMMERCIAL_DNA_SAMPLE_ATLAS_V0_1 = Object.freeze({
    version: "sample-atlas-v0.1",
    brandNeedQuestion: BRAND_NEED_QUESTION,
    brandRows,
    projectRows,
    brandById,
    projectById,
    brandStatus,
    brandStage,
    brandSummary,
    brandCategoryLabel,
    recordedCity,
    footprintModel,
    philosophyModel,
    brandGalleryModel,
    brandEntryImageModel,
    brandLearnMoreModel,
    localBrandReviewEnabled,
    sourceRows,
    brandDetailModel,
    relatedProjects,
    featuredBrands,
    featuredProjects,
    projectStatus,
    projectSummary,
  });
})(typeof window !== "undefined" ? window : globalThis);
