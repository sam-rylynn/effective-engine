(function applyCommercialDnaBrandRemovalsV01(globalScope) {
  "use strict";

  const system = globalScope.COMMERCIAL_DNA_SYSTEM;
  if (!system || !Array.isArray(system.brandLibrary)) return;

  const groups = Object.freeze([
    Object.freeze({
      libraryDecision: "exclude",
      reasonCode: "user_confirmed_removal",
      rows: Object.freeze([
        ["brand-v2-019", "fufuland"],
        ["brand-v2-029", "新山书屋x返岛西餐料理"],
        ["brand-v2-070", "Salomon"],
        ["brand-v2-071", "HOKA"],
        ["brand-v2-072", "On昂跑"],
        ["brand-v2-085", "野兽派"],
        ["brand-v2-088", "HARMAY話梅"],
        ["brand-v2-097", "abC艺术书展"],
        ["brand-local-025", "青山书房"],
        ["brand-confirmed-20260704-dsbe-001", "山姆会员店 Sam's Club"],
        ["brand-confirmed-20260704-dsbe-002", "Costco 开市客"],
        ["brand-confirmed-20260704-dsbe-003", "盒马X会员店"],
        ["brand-confirmed-20260704-dsbe-004", "麦德龙会员店 Metro"],
        ["brand-confirmed-20260704-dsbe-005", "佛罗伦萨小镇（浦东）"],
        ["brand-confirmed-20260704-dsbe-006", "上海海昌海洋公园"],
        ["brand-confirmed-20260705-lsbe-002", "老盛昌"],
        ["brand-confirmed-20260705-lsbe-003", "紫燕百味鸡"],
        ["brand-confirmed-20260705-lsbe-004", "震丰园"],
      ]),
    }),
    Object.freeze({
      libraryDecision: "exclude",
      reasonCode: "mainstream_replaceable",
      rows: Object.freeze([
        ["brand-v2-018", "KUMO KUMO"],
        ["brand-v2-027", "COMMUNE幻师"],
        ["brand-v2-056", "bosie"],
        ["brand-v2-074", "BLACKDOG黑狗"],
        ["brand-v2-075", "Naturehike挪客"],
        ["brand-v2-101", "UNISKIN优时颜"],
        ["brand-confirmed-20260705-lsbe-005", "巴比馒头"],
        ["brand-confirmed-20260705-lsbe-006", "Manner Coffee"],
      ]),
    }),
    Object.freeze({
      libraryDecision: "historical_archive",
      reasonCode: "historical_inactive",
      rows: Object.freeze([
        ["brand-v2-010", "Seesaw Coffee"],
      ]),
    }),
    Object.freeze({
      libraryDecision: "concept_store_only",
      reasonCode: "parent_brand_too_broad",
      rows: Object.freeze([
        ["brand-v2-009", "% Arabica"],
        ["brand-v2-011", "M Stand"],
        ["brand-v2-104", "泡泡玛特"],
        ["brand-v2-069", "TREK"],
        ["brand-v2-089", "HAY"],
        ["brand-v2-082", "小佩PETKIT"],
      ]),
    }),
    Object.freeze({
      libraryDecision: "merge_duplicate",
      reasonCode: "duplicate_brand_record",
      rows: Object.freeze([
        ["brand-v2-102", "To Summer观夏"],
      ]),
    }),
  ]);
  const entries = Object.freeze(groups.flatMap(group => group.rows.map(([id, name]) => Object.freeze({
    id,
    name,
    reasonCode: group.reasonCode,
    libraryDecision: group.libraryDecision,
  }))));
  const removedIds = new Set(entries.map(entry => entry.id));
  const activeById = new Map(system.brandLibrary.map(item => [item.id, item]));

  entries.forEach(entry => {
    const active = activeById.get(entry.id);
    if (!active || active.name !== entry.name) {
      throw new Error(`品牌删除清单发生漂移：${entry.id} / ${entry.name}`);
    }
  });

  system.brandLibrary = system.brandLibrary.filter(item => !removedIds.has(item.id));

  const priorGroups = new Map(
    (Array.isArray(system.brandGroups) ? system.brandGroups : [])
      .map(group => [group.category, group]),
  );
  const grouped = system.brandLibrary.reduce((counts, item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
    return counts;
  }, {});
  system.brandGroups = Object.entries(grouped).map(([category, count]) => ({
    ...(priorGroups.get(category) || {}),
    category,
    count,
  }));

  globalScope.COMMERCIAL_DNA_BRAND_REMOVALS_V0_1 = Object.freeze({
    version: "brand-removals-v0.1",
    removedAt: "2026-08-28",
    brandIds: Object.freeze(entries.map(entry => entry.id)),
    entries,
  });
})(typeof window !== "undefined" ? window : globalThis);
