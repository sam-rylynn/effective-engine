(function attachCommercialDnaDualExperienceV02(globalScope) {
  "use strict";

  const CODE_PATTERN = /^[LD][SC][BM][ER]$/;
  const AXIS_WEIGHTS = [14, 8, 12, 6];

  function validateCode(value, label) {
    const code = String(value || "").trim().toUpperCase();
    if (!CODE_PATTERN.test(code)) throw new TypeError(`${label} 不是有效的商业 DNA code`);
    return code;
  }

  function affinity(code, target) {
    const sourceCode = validateCode(code, "人物 code");
    const targetCode = validateCode(target, "项目 code");
    if (sourceCode === targetCode) return 48;
    return AXIS_WEIGHTS.reduce(
      (score, weight, index) => score + (sourceCode[index] === targetCode[index] ? weight : 0),
      0,
    );
  }

  function recommendProjects(code, projectCases, limit = 3) {
    const sourceCode = validateCode(code, "人物 code");
    if (!Array.isArray(projectCases)) throw new TypeError("projectCases 必须是数组");
    const safeLimit = Math.max(1, Math.min(6, Number(limit) || 3));

    return Object.freeze(projectCases
      .filter(item => item && CODE_PATTERN.test(String(item.dna?.code || "")))
      .map(item => {
        const projectCode = String(item.dna.code).toUpperCase();
        const exact = projectCode === sourceCode;
        const priorityBonus = item.priority === "A" ? 6 : item.priority === "B" ? 3 : 0;
        return {
          item,
          exact,
          affinity: affinity(sourceCode, projectCode),
          score: affinity(sourceCode, projectCode) + priorityBonus,
          relationLabel: exact ? "同码项目" : "相邻同频项目",
        };
      })
      .sort((left, right) => (
        Number(right.exact) - Number(left.exact)
        || right.score - left.score
        || String(left.item.name || "").localeCompare(String(right.item.name || ""), "zh-CN")
      ))
      .slice(0, safeLimit)
      .map(row => Object.freeze(row)));
  }

  globalScope.COMMERCIAL_DNA_DUAL_EXPERIENCE_V0_2 = Object.freeze({
    affinity,
    recommendProjects,
  });
})(typeof window !== "undefined" ? window : globalThis);
