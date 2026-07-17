(function attachOperatorShareV01(globalScope) {
  "use strict";

  const CARD_TYPE = "commercial-dna/operator-project-match@0.1";
  const FORBIDDEN_LINES = [
    ["天选", "搭档"].join(""),
    ["不适合", "合作"].join(""),
    ["你会", "毁掉项目"].join(""),
  ];

  function compactName(value, fallback, maxLength, label) {
    if (value === undefined || value === null || value === "") return fallback;
    if (typeof value !== "string") throw new TypeError(`${label} 必须是字符串`);
    const compact = value.trim().replace(/\s+/g, " ");
    if (!compact) return fallback;
    return Array.from(compact).slice(0, maxLength).join("");
  }

  function validateMatchPercent(value) {
    if (!Number.isInteger(value)) throw new TypeError("matchPercent 必须是整数");
    if (value < 48 || value > 98) throw new RangeError("matchPercent 必须在 48 到 98 之间");
    return value;
  }

  function validateRoastLine(value) {
    if (typeof value !== "string") throw new TypeError("roastLine 必须是字符串");
    const line = value.trim();
    if (!line) throw new TypeError("roastLine 不能为空");
    if (Array.from(line).length > 120) throw new RangeError("roastLine 最长 120 个字符");
    if (FORBIDDEN_LINES.some(phrase => line.includes(phrase))) {
      throw new RangeError("roastLine 含有不允许的抵触性判断");
    }
    return line;
  }

  function createCard({ operatorName, projectName, matchPercent, roastLine } = {}) {
    const operatorLabel = compactName(operatorName, "我", 24, "operatorName");
    const projectLabel = compactName(projectName, "这个项目", 32, "projectName");
    const percent = validateMatchPercent(matchPercent);
    const line = validateRoastLine(roastLine);

    return Object.freeze({
      cardType: CARD_TYPE,
      title: "商业 DNA 同频度",
      subject: `${operatorLabel} × ${projectLabel}`,
      matchPercent: percent,
      roastLine: line,
    });
  }

  globalScope.COMMERCIAL_DNA_OPERATOR_SHARE_V0_1 = Object.freeze({ createCard });
})(typeof window !== "undefined" ? window : globalThis);
