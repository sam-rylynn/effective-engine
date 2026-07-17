(function attachOperatorMatchV01(globalScope) {
  "use strict";

  const AXIS_KEYS = ["radius", "content", "brand", "operation"];
  const EXACT_EPSILON = 1e-12;

  const BAND_COPY = {
    high: {
      opener: "你和项目像同一个脑回路开了两个号",
      connector: "，小分叉是",
    },
    aligned: {
      opener: "你和项目大部分时候都在同一个频道",
      connector: "，偶尔分叉在",
    },
    medium: {
      opener: "你和项目能听懂彼此的商业方言",
      connector: "，翻译器主要卡在",
    },
    low: {
      opener: "你和项目像两台刚交换路线的导航",
      connector: "，最大岔路出现在",
    },
  };

  const DIFFERENCE_COPY = [
    // L / D：人 = 贴场 / 看盘；项目 = 在地 / 目的地。
    {
      operatorRight: "你已经把定位、组合和长期账摊满桌，项目的题眼还蹲在现场和街坊里",
      operatorLeft: "项目想把人从全城叫来，你还蹲在现场追问这条动线到底卡了谁",
    },
    // S / C：人 = 守盘 / 开局；项目 = 稳态 / 传播。
    {
      operatorRight: "你已经把新局开到第三个群，项目其实只想把每天的基本盘过明白",
      operatorLeft: "项目已经架好传播机位，你还在给旧问题逐项销号",
    },
    // B / M：人 = 规整 / 非标；项目 = 标准 / 主理。
    {
      operatorRight: "你已经从现场长出第十七版非标解法，项目还把标准品牌和成熟模型摆得整整齐齐",
      operatorLeft: "项目正等主理人临场开花，你先把流程、责任和验收表格全塑封了",
    },
    // E / R：人 = 收口 / 连轴；项目 = 低频 / 高频。
    {
      operatorRight: "项目只等几个关键节点出手，你的群聊却已经从早饭连轴到睡前",
      operatorLeft: "项目每周都在长新内容，你还在等这一轮彻底收口后把手机翻面",
    },
  ];

  function normalizeAxisRatios(input, label) {
    let values;
    if (Array.isArray(input)) {
      if (input.length !== AXIS_KEYS.length) {
        throw new TypeError(`${label} 必须包含 4 个四轴比例`);
      }
      values = input.slice();
    } else if (input && typeof input === "object") {
      values = AXIS_KEYS.map(key => input[key]);
    } else {
      throw new TypeError(`${label} 必须是四轴比例数组或对象`);
    }

    values.forEach((value, index) => {
      if (typeof value !== "number" || !Number.isFinite(value)) {
        throw new TypeError(`${label}.${AXIS_KEYS[index]} 必须是有限数字`);
      }
      if (value < 0 || value > 1) {
        throw new RangeError(`${label}.${AXIS_KEYS[index]} 必须在 0 到 1 之间`);
      }
    });
    return values;
  }

  function bandFor(matchPercent) {
    if (matchPercent >= 90) return "high";
    if (matchPercent >= 75) return "aligned";
    if (matchPercent >= 60) return "medium";
    return "low";
  }

  function dominantDifference(operatorRatios, projectRatios, distances) {
    let index = 0;
    for (let cursor = 1; cursor < distances.length; cursor += 1) {
      // 同差值固定按四轴顺序取前者，避免随机或运行环境差异。
      if (distances[cursor] > distances[index]) index = cursor;
    }
    return {
      index,
      direction: operatorRatios[index] > projectRatios[index] ? "operatorRight" : "operatorLeft",
    };
  }

  function roastFor(matchPercent, operatorRatios, projectRatios, distances) {
    if (distances.every(distance => distance <= EXACT_EPSILON)) {
      return "你和项目像同一个脑回路开了两个号，连犹豫都能同时按下发送。";
    }
    const band = BAND_COPY[bandFor(matchPercent)];
    const difference = dominantDifference(operatorRatios, projectRatios, distances);
    return `${band.opener}${band.connector}${DIFFERENCE_COPY[difference.index][difference.direction]}。`;
  }

  function calculate({ operatorAxisRatios, projectAxisRatios } = {}) {
    const operatorRatios = normalizeAxisRatios(operatorAxisRatios, "operatorAxisRatios");
    const projectRatios = normalizeAxisRatios(projectAxisRatios, "projectAxisRatios");
    const distances = operatorRatios.map((value, index) => Math.abs(value - projectRatios[index]));
    const axisDistance = distances.reduce((sum, distance) => sum + distance, 0) / AXIS_KEYS.length;
    const matchPercent = Math.round(48 + 50 * (1 - axisDistance));
    const roastLine = roastFor(matchPercent, operatorRatios, projectRatios, distances);

    // 前台契约只暴露两个字段；轴距离与主要差异只用于内部生成锐评。
    return Object.freeze({ matchPercent, roastLine });
  }

  globalScope.COMMERCIAL_DNA_OPERATOR_MATCH_V0_1 = Object.freeze({ calculate });
})(typeof window !== "undefined" ? window : globalThis);
