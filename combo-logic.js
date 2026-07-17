function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function imageUrl(item) {
  const src = item?.image || "";
  const url = src.startsWith("http") ? src : `${assetRoot}${src}`;
  const joiner = url.includes("?") ? "&" : "?";
  return `${url}${joiner}v=combo-20260627`;
}

function fullText(item) {
  return [
    item.name,
    item.city,
    item.location,
    item.format,
    item.subtype,
    item.parkRelation,
    item.sampleNature,
    item.archetype,
    item.audience,
    item.brands,
    item.space,
    item.value,
    item.pain,
    item.usable,
    item.caution,
    item.next,
    ...(item.heroTags || []),
    ...(item.leadFormats || []),
    ...(item.scenarioTags || []),
    ...(item.audienceTags || []),
  ].join(" ");
}

const cityNetwork = {
  贵阳: ["重庆", "成都", "昆明", "长沙", "广州", "深圳"],
  重庆: ["成都", "贵阳", "西安", "长沙", "武汉"],
  成都: ["重庆", "贵阳", "西安", "长沙"],
  长沙: ["武汉", "广州", "深圳", "贵阳", "重庆"],
  武汉: ["长沙", "南京", "重庆", "广州"],
  南京: ["杭州", "上海", "武汉", "合肥"],
  西安: ["成都", "重庆", "郑州", "兰州"],
  厦门: ["福州", "广州", "深圳", "泉州"],
  福州: ["厦门", "广州", "深圳", "杭州"],
  广州: ["深圳", "佛山", "长沙", "厦门", "贵阳"],
  深圳: ["广州", "佛山", "厦门", "贵阳"],
  杭州: ["上海", "南京", "福州", "宁波"],
  上海: ["杭州", "南京", "苏州"],
  北京: ["天津", "石家庄", "济南"],
};

const cityNames = Array.from(new Set([
  ...Object.keys(cityNetwork),
  ...Object.values(cityNetwork).flat(),
  "佛山", "合肥", "郑州", "兰州", "泉州", "宁波", "苏州", "天津", "石家庄", "济南",
]));

function currentProjectCity() {
  const text = state.city || "";
  return cityNames.find(city => text.includes(city)) || "";
}

function brandCities(brand) {
  const text = `${brand.localCity || ""} ${brand.city || ""}`;
  return cityNames.filter(city => text.includes(city));
}

function brandGeoFit(brand) {
  const projectCity = currentProjectCity();
  const cities = brandCities(brand);
  if (!projectCity) return { tier: "open", score: 56, label: "跨城参考" };
  if (cities.includes(projectCity)) return { tier: "local", score: 96, label: "本地优先" };
  const nearby = cityNetwork[projectCity] || [];
  if (cities.some(city => nearby.includes(city))) return { tier: "nearby", score: 78, label: "周边补位" };
  if (!cities.length || /中国|全国|国际|日本|美国|法国|瑞士|丹麦|京都/.test(brand.city || "")) {
    return { tier: "open", score: 58, label: "开放引入" };
  }
  return { tier: "far", score: brand.heatScore >= 88 ? 54 : 42, label: brand.heatScore >= 88 ? "远程高分" : "远程观察" };
}

function projectBrandAffinity(brand) {
  const active = selectedCase();
  if (!active) return 0;
  const brandText = [
    brand.name,
    brand.category,
    brand.subCategory,
    brand.brandRole,
    brand.fitNote,
    ...(brand.tags || []),
  ].join(" ");
  const projectText = [
    fullText(active),
    active.brandFitNote,
    ...(active.brandFitTypes || []),
    active.dna?.code,
    active.dna?.name,
  ].join(" ");
  let score = 0;
  if (active.dna?.code && (brand.fitDNA || []).includes(active.dna.code)) score += 10;
  if (/主理人|在地|小店|街区/.test(projectText) && /主理人|在地|本地|小店|买手|手作/.test(brandText)) score += 8;
  if (/咖啡|烘焙|茶食|甜品/.test(projectText) && /咖啡|烘焙|茶食|甜品/.test(brandText)) score += 7;
  if (/文创|书店|艺术|文化|城市礼物|地方风物|展览|内容IP|内容 IP/.test(projectText) && /文创|书店|艺术|城市礼物|地方风物|伴手礼|设计|展览|美术馆|内容IP|内容 IP/.test(brandText)) score += 7;
  if (/宠物|户外|运动|骑行|露营/.test(projectText) && /宠物|户外|运动|骑行|露营|滑板/.test(brandText)) score += 7;
  if (/夜|餐酒|外摆|社交|音乐/.test(projectText) && /夜|餐酒|酒吧|外摆|社交|音乐|live|LIVE|黑胶/.test(brandText)) score += 7;
  return score;
}

function setSelectOptions(select, values) {
  if (!select) return;
  const current = select.value;
  select.innerHTML = values.map(value => `<option>${escapeHtml(value)}</option>`).join("");
  select.value = values.includes(current) ? current : values[0];
}

function applyModeFormConfig() {
  const modeOptions = selectOptionsByMode[state.mode] || selectOptionsByMode.commercial;
  Object.entries(modeOptions).forEach(([selectId, config]) => {
    if (els[selectId]?.dataset.modeOptions !== state.mode) {
      setSelectOptions(els[selectId], config.options);
      els[selectId].dataset.modeOptions = state.mode;
    }
  });

  const labelMap = {
    relationFieldLabel: modeOptions.relationSelect?.label,
    cityTierFieldLabel: modeOptions.cityTierSelect?.label,
    assetFieldLabel: modeOptions.assetSelect?.label,
    stageFieldLabel: modeOptions.stageSelect?.label,
    spaceFieldLabel: modeOptions.spaceSelect?.label,
    ownerFieldLabel: modeOptions.ownerSelect?.label,
    operatorFieldLabel: modeOptions.operatorSelect?.label,
    brandGoalFieldLabel: modeOptions.brandGoalSelect?.label,
    operationFieldLabel: modeOptions.operationSelect?.label,
  };
  Object.entries(labelMap).forEach(([key, value]) => {
    if (els[key] && value) els[key].textContent = value;
  });

  document.querySelectorAll("[data-field]").forEach(label => {
    const hidden = state.mode === "brand" && brandHiddenFields.includes(label.dataset.field);
    label.classList.toggle("is-hidden", hidden);
  });
}

function currentAxisMeta() {
  return state.mode === "brand" ? brandAxisMeta : axisMeta;
}

function currentScenarioOptions() {
  return scenarioOptionsByMode[state.mode] || scenarioOptionsByMode.commercial;
}

function currentIntentOptions() {
  return intentOptionsByMode[state.mode] || intentOptionsByMode.commercial;
}

function optionLabel(value) {
  return {
    "园旁": "贴近公园",
    "滨水": "滨水界面",
    "城市更新": "城市更新",
    "社区中心": "社区中心",
    "定位策划": "先定方向",
    "空间方案": "先做空间",
    "招商落位": "先找品牌",
    "运营调改": "先救运营",
    "新兴品牌首店": "首店/新品牌",
    "在地主理人": "在地主理人",
    "咖啡烘焙密度": "咖啡烘焙",
    "宠物户外社群": "宠物户外",
    "文创艺术内容": "文创艺术",
    "稳态生活配套": "生活配套",
    "30㎡以内": "30㎡以内",
    "30-80㎡": "30-80㎡",
    "80-150㎡": "80-150㎡",
    "150-300㎡": "150-300㎡",
    "300㎡以上": "300㎡以上",
    "快闪/柜台型": "快闪/柜台",
    "咖啡烘焙茶饮": "咖啡烘焙",
    "创意餐饮餐酒": "创意餐酒",
    "文创/城市礼物": "城市礼物",
    "设计师/主理人零售": "主理人零售",
    "宠物户外运动": "宠物户外",
    "展览/内容IP": "展览/IP",
    "夜经济/音乐社交": "夜经济",
    "生活方式集合": "生活方式",
    "找非标商业共创": "找共创商业",
    "首店/主题店落地": "首店/主题店",
    "快闪/联名活动": "快闪/联名",
    "城市巡回/跨城拓展": "跨城拓展",
    "门店模型验证": "模型验证",
    "内容曝光合作": "内容曝光",
  }[value] || value;
}

function displayOption(value) {
  return optionLabel(value);
}

function pickSelectValue(select, value) {
  if (!select) return;
  if (!Array.from(select.options).some(option => option.value === value || option.textContent === value)) return;
  select.value = value;
  renderAll();
}

function optionButtonsHTML(selectId, options, variant = "choice") {
  const select = els[selectId];
  const current = select?.value;
  return options.map(value => `
    <button class="${variant}-option ${current === value ? "active" : ""}" data-select-id="${escapeHtml(selectId)}" data-value="${escapeHtml(value)}" type="button">
      <span>${escapeHtml(optionLabel(value))}</span>
    </button>
  `).join("");
}

function syncInputs() {
  state.name = els.projectName.value.trim();
  state.city = els.projectCity.value.trim();
  state.relation = els.relationSelect.value;
  state.cityTier = els.cityTierSelect.value;
  state.asset = els.assetSelect.value;
  state.stage = els.stageSelect.value;
  state.space = els.spaceSelect.value;
  state.owner = els.ownerSelect.value;
  state.operator = els.operatorSelect.value;
  state.brandGoal = els.brandGoalSelect.value;
  state.operation = els.operationSelect.value;
}

function activeRoleCopy() {
  return roleCopy[state.mode] || roleCopy.commercial;
}

function renderRoleUI() {
  const copy = activeRoleCopy();
  applyModeFormConfig();
  els.modeSwitch?.querySelectorAll("[data-mode]").forEach(button => {
    button.classList.toggle("active", button.dataset.mode === state.mode);
  });
  if (els.heroTitle) els.heroTitle.textContent = copy.heroTitle;
  if (els.heroLead) els.heroLead.textContent = copy.heroLead;
  if (els.nameFieldLabel) els.nameFieldLabel.textContent = copy.nameLabel;
  if (els.cityFieldLabel) els.cityFieldLabel.textContent = copy.cityLabel;
  if (els.detailSummaryText) {
    els.detailSummaryText.textContent = state.mode === "brand"
      ? "品牌名称、发源城市、单店面积、共创场景，想更准确时再补充。"
      : "项目名称、资产底色、空间形态、运营条件，想更准确时再补充。";
  }
  if (els.generateButton) els.generateButton.textContent = copy.button;
  if (els.matchLead) els.matchLead.textContent = copy.matchLead;
  if (els.scenarioFieldLabel) els.scenarioFieldLabel.textContent = state.mode === "brand" ? "品牌共创场景" : "策略偏好";
  if (els.primerTitle) els.primerTitle.textContent = state.mode === "brand" ? "品牌性格判断" : "项目性格判断";
  if (els.primerCopy) {
    els.primerCopy.textContent = state.mode === "brand"
      ? "先判断品牌的门店模型、内容能力、目标区域和共创节奏，再匹配适合进入的非标商业。"
      : "先判断项目靠什么复访、靠什么传播、适合什么品牌结构，以及需要多高频的运营。";
  }
  const axes = currentAxisMeta();
  [els.primerAxisOne, els.primerAxisTwo, els.primerAxisThree, els.primerAxisFour].forEach((node, index) => {
    if (!node || !axes[index]) return;
    node.textContent = axes[index].name;
  });
  const refineText = state.mode === "brand"
    ? { local: "更像本地深耕", destination: "更像跨城拓展", maker: "更像主理共创", steady: "更像标准小店" }
    : { local: "更像社区复访", destination: "更像城市打卡", maker: "更需要主理人", steady: "更需要稳态经营" };
  if (els.refineNote) {
    els.refineNote.textContent = state.mode === "brand"
      ? "请确认当前判断：品牌更适合本地深耕还是跨城拓展；更像标准小店还是主理共创。修改后结果会马上更新。"
      : "请确认当前判断：项目更靠近日常复访还是城市目的地；更适合基础品牌还是主理人矩阵。修改后结果会马上更新。";
  }
  els.refineActions?.querySelectorAll("[data-refine]").forEach(button => {
    button.textContent = refineText[button.dataset.refine] || button.textContent;
  });
}

function renderQuickStart() {
  if (!els.quickStart) return;
  const questions = quickQuestionsByMode[state.mode] || quickQuestionsByMode.commercial;
  els.quickStart.innerHTML = questions.map((question, index) => `
    <article class="quick-question" style="--deal-index:${index}">
      <div>
        <span>Q${index + 1}</span>
        <h3>${escapeHtml(question.title)}</h3>
        <p>${escapeHtml(question.hint)}</p>
      </div>
      <div class="quick-options">
        ${optionButtonsHTML(question.id, question.options, "quick")}
      </div>
    </article>
  `).join("");
}

function currentCoreSelectIds() {
  return new Set((quickQuestionsByMode[state.mode] || []).map(question => question.id));
}

function renderDetailChoiceControls() {
  document.querySelectorAll(".detail-choice-grid").forEach(node => node.remove());
  const coreIds = currentCoreSelectIds();
  document.querySelectorAll(".form-grid label").forEach(label => {
    const select = label.querySelector("select");
    label.classList.remove("is-core-detail");
    if (!select) return;
    const isCore = coreIds.has(select.id);
    label.classList.toggle("is-core-detail", isCore);
    const options = Array.from(select.options).map(option => option.value || option.textContent);
    label.classList.add("choice-enhanced");
    const grid = document.createElement("div");
    grid.className = `detail-choice-grid ${isCore ? "is-core-field" : ""}`;
    grid.innerHTML = optionButtonsHTML(select.id, options, "detail");
    label.appendChild(grid);
  });
}

function normalizeStage(stage) {
  if (!flowStages.includes(stage)) return "diagnose";
  if (stage === "match" && state.mode === "brand") return "intent";
  return stage;
}

function renderStageProgress() {
  const personaContextActive = Boolean(state.personaCaseCode);
  if (els.stageProgress) els.stageProgress.hidden = state.appPage !== "project" || personaContextActive;
  document.body.dataset.personaContext = personaContextActive ? "true" : "false";
  document.body.dataset.stage = state.currentStage;
  document.querySelectorAll("[data-flow-stage]").forEach(node => {
    const targetStage = normalizeStage(node.dataset.flowStage);
    const isEvidenceGuide = node.dataset.flowAction === "evidence";
    let isActive = targetStage === state.currentStage || (state.currentStage === "intent" && state.mode === "brand" && node.dataset.flowStage === "match");
    if (isEvidenceGuide) {
      isActive = state.currentStage === "cases" && state.showEvidence;
    } else if (targetStage === "cases" && state.showEvidence) {
      isActive = false;
    }
    node.classList.toggle("active", isActive);
  });
}

function setStage(stage, shouldScroll = true) {
  state.currentStage = normalizeStage(stage);
  if (state.currentStage === "match" && state.mode === "commercial") {
    state.showMatch = true;
    state.showBrands = true;
  }
  if (state.currentStage === "intent") {
    state.showIntent = true;
  }
  updateFlowVisibility();
  renderStageProgress();
  if (!shouldScroll) return;
  const target = document.getElementById(state.currentStage);
  window.requestAnimationFrame(() => {
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function switchMode(mode) {
  if (!roleCopy[mode] || state.mode === mode) return;
  state.mode = mode;
  state.showEvidence = false;
  state.showBrands = false;
  state.showMatch = false;
  state.showIntent = false;
  state.currentStage = "diagnose";
  state.personaCaseCode = "";
  state.selectedBrandId = null;
  if (mode === "brand") {
    if (!els.projectName.value || els.projectName.value === "观山湖商业项目") {
      els.projectName.value = "在地生活方式品牌";
    }
    if (!els.projectCity.value || els.projectCity.value === "贵阳观山湖") {
      els.projectCity.value = "贵阳";
    }
    state.scenes = new Set(["主理人零售", "快闪联名", "本地社群"]);
    state.intent = "快闪测试";
  } else {
    if (!els.projectName.value || els.projectName.value === "在地生活方式品牌") {
      els.projectName.value = "观山湖商业项目";
    }
    if (!els.projectCity.value || els.projectCity.value === "贵阳") {
      els.projectCity.value = "贵阳观山湖";
    }
    state.scenes = new Set(["亲子", "宠物", "夜经济"]);
    state.intent = "快闪测试";
  }
  renderChips();
  renderAll();
}

function brandMetrics() {
  const has = value => state.scenes.has(value);
  const text = `${state.relation} ${state.cityTier} ${state.stage} ${state.brandGoal} ${Array.from(state.scenes).join(" ")}`;
  const m = { traffic: 44, repeat: 44, content: 42, leasing: 44, media: 42, risk: 30 };

  if (/本地深耕/.test(state.cityTier)) { m.repeat += 18; m.risk -= 4; }
  if (/周边|新一线|一线|旅游|全国|跨城|巡回/.test(text)) { m.traffic += 14; m.media += 8; }
  if (/全国巡回|城市巡回|跨城拓展|一线城市首店/.test(text)) { m.traffic += 14; m.leasing += 8; m.risk += 6; }

  if (/30㎡以内|30-80㎡|快闪/.test(state.relation)) { m.repeat += 9; m.risk -= 2; }
  if (/80-150㎡/.test(state.relation)) { m.content += 6; m.leasing += 6; }
  if (/150-300㎡|300㎡以上/.test(state.relation)) { m.media += 10; m.content += 8; m.risk += 8; }

  if (/咖啡烘焙|茶饮/.test(text)) { m.repeat += 12; m.content += 5; }
  if (/餐酒|夜经济|音乐|社交/.test(text)) { m.media += 14; m.content += 9; m.risk += 4; }
  if (/文创|城市礼物|地方|展览|内容IP|设计师|主理人/.test(text)) { m.content += 14; m.leasing += 10; }
  if (/宠物|户外|运动/.test(text)) { m.repeat += 8; m.media += 8; }
  if (/生活方式集合/.test(text)) { m.leasing += 8; m.repeat += 6; }

  if (/快闪|联名|内容曝光|展览活动/.test(text)) { m.media += 14; m.content += 10; m.risk += 5; }
  if (/首店|主题店/.test(text)) { m.leasing += 12; m.media += 8; }
  if (/模型验证/.test(text)) { m.repeat += 12; m.risk -= 2; }
  if (/主理人零售|本地社群|快闪联名/.test(text)) { m.leasing += 12; m.content += 9; }

  return Object.fromEntries(Object.entries(m).map(([key, value]) => [key, Math.max(8, Math.min(96, value))]));
}

function metrics() {
  if (state.mode === "brand") return brandMetrics();
  const has = value => state.scenes.has(value);
  const m = { traffic: 44, repeat: 42, content: 44, leasing: 42, media: 40, risk: 34 };

  if (["贴近公园", "园旁", "社区中心"].includes(state.relation)) { m.traffic += 14; m.repeat += 6; }
  if (["滨水界面", "滨水", "屋顶"].includes(state.relation)) { m.media += 14; m.content += 8; }
  if (state.relation === "城市更新") { m.content += 16; m.leasing += 8; m.risk += 10; }
  if (["一线城市", "旅游城市"].includes(state.cityTier)) { m.media += 10; m.traffic += 7; }
  if (state.cityTier === "新一线/强二线") { m.leasing += 7; m.content += 5; }
  if (["产业新区", "下沉城市"].includes(state.cityTier)) { m.repeat += 8; m.risk += 7; }
  if (["城市更新存量", "历史街区", "工业遗存"].includes(state.asset)) { m.content += 12; m.media += 8; m.risk += 6; }
  if (state.asset === "社区商业") { m.repeat += 13; m.traffic += 5; }
  if (state.asset === "文旅景区") { m.media += 12; m.traffic += 8; }
  if (state.asset === "公园/滨水配套") { m.content += 5; m.repeat += 7; }
  if (has("亲子") || has("宠物") || has("社区复访")) m.repeat += 20;
  if (has("夜经济") || has("艺术策展") || has("游客打卡")) { m.media += 15; m.content += 8; }
  if (has("主理人") || has("首店招商")) m.leasing += 19;
  if (has("城市更新")) { m.content += 12; m.risk += 8; }
  if (has("户外运动")) { m.traffic += 8; m.media += 8; }
  if (state.stage === "招商落位") m.leasing += 16;
  if (state.stage === "空间方案") { m.media += 10; m.content += 8; }
  if (state.stage === "开业筹备") { m.traffic += 10; m.media += 8; }
  if (state.stage === "运营调改") { m.repeat += 8; m.risk += 12; }
  if (["开放街区", "半户外/下沉", "小体量组团"].includes(state.space)) { m.content += 8; m.leasing += 6; }
  if (state.space === "盒子改造") { m.risk += 7; m.media += 4; }
  if (state.space === "大体量综合体") { m.traffic += 10; m.leasing += 8; m.risk += 6; }
  if (state.space === "轻资产市集") { m.content += 10; m.risk += 8; }
  if (["平台/国企", "街区/政府"].includes(state.owner)) { m.risk += 6; m.leasing += 5; }
  if (state.owner === "地产开发商") { m.traffic += 5; m.leasing += 6; }
  if (state.owner === "文旅/景区") { m.media += 10; m.content += 6; }
  if (state.owner === "民营业主") { m.risk += 8; m.content += 4; }
  if (state.owner === "存量资产方") { m.risk += 10; m.content += 8; }
  if (state.operator === "自持商管") { m.repeat += 7; m.risk -= 4; }
  if (state.operator === "委托运营") { m.risk += 5; m.leasing += 4; }
  if (state.operator === "招商代理") { m.leasing += 8; m.content -= 2; }
  if (state.operator === "内容主理人") { m.content += 12; m.media += 8; m.risk += 4; }
  if (state.operator === "品牌联合运营") { m.leasing += 6; m.content += 6; }
  if (["新兴品牌首店", "在地主理人"].includes(state.brandGoal)) { m.leasing += 13; m.content += 7; }
  if (state.brandGoal === "咖啡烘焙密度") { m.repeat += 8; m.content += 5; }
  if (state.brandGoal === "宠物户外社群") { m.repeat += 9; m.media += 8; }
  if (state.brandGoal === "文创艺术内容") { m.content += 13; m.media += 8; }
  if (state.brandGoal === "稳态生活配套") { m.repeat += 10; m.risk -= 3; }
  if (state.operation === "每周有内容") { m.content += 10; m.media += 8; m.risk += 5; }
  if (state.operation === "每月主题活动") { m.content += 6; m.media += 5; }
  if (state.operation === "开业节点爆发") { m.media += 10; m.traffic += 5; }
  if (state.operation === "长期稳态经营") { m.repeat += 10; m.risk -= 5; }
  if (state.operation === "品牌自运营为主") { m.leasing += 7; m.risk += 4; }

  return Object.fromEntries(Object.entries(m).map(([key, value]) => [key, Math.max(8, Math.min(96, value))]));
}

function bounded(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function axisDecision({ axis, index, score, threshold, gray = 6, force }) {
  const rightLetter = axis.letters[1];
  const leftLetter = axis.letters[0];
  const forcedRight = force === "right";
  const forcedLeft = force === "left";
  const rightSide = forcedRight ? true : forcedLeft ? false : score >= threshold;
  const distance = Math.abs(score - threshold);
  const inGray = !force && distance <= gray;
  const rawValue = bounded(50 + (score - threshold) * 2.3, 12, 88);
  const value = forcedRight ? Math.max(rawValue, 68) : forcedLeft ? Math.min(rawValue, 32) : rawValue;
  const selected = rightSide ? rightLetter : leftLetter;
  const primary = rightSide ? axis.right : axis.left;
  const secondary = rightSide ? axis.left : axis.right;
  return {
    ...axis,
    index,
    score,
    threshold,
    selected,
    value: Math.round(value),
    inGray,
    verdict: inGray ? `偏向${primary}` : primary,
    note: inGray ? `边界接近，也要参考「${secondary}」` : `判断相对清晰，当前更靠近「${primary}」`,
  };
}

function axisDecisions(m) {
  const axes = currentAxisMeta();
  if (state.mode === "brand") {
    const scenes = Array.from(state.scenes);
    const crossArea = ["周边城市试点", "新一线/强二线", "一线城市首店", "旅游城市", "全国巡回"].includes(state.cityTier)
      || state.stage === "城市巡回/跨城拓展";
    const contentBrand = ["文创/城市礼物", "设计师/主理人零售", "展览/内容IP", "夜经济/音乐社交", "生活方式集合"].includes(state.brandGoal)
      || scenes.some(item => ["内容IP", "主理人零售", "快闪联名", "展览活动", "餐酒社交"].includes(item));
    const makerModel = ["文创/城市礼物", "设计师/主理人零售", "展览/内容IP", "生活方式集合"].includes(state.brandGoal)
      || scenes.some(item => ["主理人零售", "本地社群", "内容IP"].includes(item));
    const activeCoCreate = ["快闪/联名活动", "城市巡回/跨城拓展", "内容曝光合作"].includes(state.stage)
      || scenes.some(item => ["快闪联名", "展览活动", "餐酒社交"].includes(item));
    return [
      axisDecision({ axis: axes[0], index: 0, score: m.traffic + m.media, threshold: 116, force: state.cityTier === "本地深耕" ? "left" : crossArea ? "right" : undefined }),
      axisDecision({ axis: axes[1], index: 1, score: m.content + m.media, threshold: 116, force: contentBrand ? "right" : undefined }),
      axisDecision({ axis: axes[2], index: 2, score: m.leasing, threshold: 58, force: makerModel ? "right" : undefined }),
      axisDecision({ axis: axes[3], index: 3, score: m.media + m.content, threshold: 112, force: activeCoCreate ? "right" : undefined }),
    ];
  }
  const highFrequencyOperation = state.operation === "每周有内容"
    || state.operator === "内容主理人"
    || ["夜经济", "艺术策展", "首店招商", "主理人"].some(scene => state.scenes.has(scene));
  const stableOperation = state.operation === "长期稳态经营" || state.brandGoal === "稳态生活配套";
  return [
    axisDecision({ axis: axes[0], index: 0, score: m.traffic + m.media, threshold: 112 }),
    axisDecision({ axis: axes[1], index: 1, score: m.content + m.media, threshold: 116 }),
    axisDecision({ axis: axes[2], index: 2, score: m.leasing, threshold: 58, force: state.scenes.has("主理人") || state.scenes.has("首店招商") ? "right" : undefined }),
    axisDecision({ axis: axes[3], index: 3, score: m.repeat + m.content, threshold: 112, force: stableOperation ? "left" : highFrequencyOperation ? "right" : undefined }),
  ];
}

function typeCode(m) {
  return axisDecisions(m).map(axis => axis.selected).join("");
}

function displayTypeEntryForCode(code, mode = state.mode) {
  const groups = mode === "brand" ? brandDisplayTypes : commercialDisplayTypes;
  return Object.entries(groups).find(([, group]) => group.codes.includes(code));
}

function displayTypeForCode(code, mode = state.mode) {
  return displayTypeEntryForCode(code, mode)?.[1];
}

function currentType() {
  const m = metrics();
  const axes = axisDecisions(m);
  const code = axes.map(axis => axis.selected).join("");
  const detailedCard = state.mode === "brand" ? (brandDnaTypes[code] || {}) : (mbtiTypes[code] || {});
  const displayEntry = displayTypeEntryForCode(code);
  const displayCard = displayEntry?.[1] || detailedCard || diagnosisRules.find(rule => rule.test(m)) || {};
  const edge = state.mode === "commercial" ? commercialEdgeTypes[code] : null;
  return {
    code,
    displayKey: displayEntry?.[0] || "",
    axes,
    metric: m,
    card: displayCard,
    detailedCard,
    edge,
  };
}

function axisRows(type) {
  return type.axes || axisDecisions(type.metric);
}

function nearbyTypeCodes(type) {
  const codes = new Set([type.code]);
  axisRows(type).forEach(axis => {
    if (!axis.inGray) return;
    const chars = type.code.split("");
    chars[axis.index] = axis.selected === axis.letters[0] ? axis.letters[1] : axis.letters[0];
    codes.add(chars.join(""));
  });
  return codes;
}

function resultLanguage(type, avg) {
  const baseName = type.card?.name || "非标策略型";
  const name = type.edge ? `偏${baseName}` : baseName;
  const tone = avg >= 72 ? "方向较明确" : avg >= 60 ? "方向可初读" : "需要补充信息";
  const copy = activeRoleCopy();
  const baseExplain = type.card?.line || `这个结果不是给${copy.resultSubject}贴标签，而是先判断它适合与哪类${copy.resultObject}形成共创关系。`;
  const explain = type.edge ? `${type.edge.note} ${baseExplain}` : baseExplain;
  return {
    name,
    tone,
    explain,
    summary: `${state.name || `这个${copy.resultSubject}`} 当前更接近「${name}」。${explain} 接下来先确认四个判断是否符合真实条件，再进入共创匹配。`,
  };
}

function signalAverage(metric) {
  const keys = ["traffic", "repeat", "content", "leasing", "media"];
  return Math.round(keys.reduce((sum, key) => sum + (metric[key] || 0), 0) / keys.length);
}

function riskProfile(type) {
  const risk = type.metric.risk || 0;
  const level = risk >= 62 ? "重点核验" : risk >= 46 ? "需要留意" : "风险较低";
  const sourceRisk = type.card?.risk || type.detailedCard?.risk || "当前风险更多来自项目条件和执行复杂度，不能直接等同于项目好坏。";
  const publicEvidence = state.mode === "brand"
    ? "先看真实门店、用户评价、城市分布和活动案例。"
    : "先看真实到访、用户评价、周边竞品、活动频率和品牌落地案例。";
  return {
    level,
    title: `${level} · 风险不参与性格归类`,
    body: sourceRisk,
    basis: `风险提示只用于提醒，不改变当前类型。优先确认：${publicEvidence}`,
    gap: "租金、客流、销售、铺位空置、真实运营预算属于私有数据，后续拿到后再校准。",
  };
}

function calibrationCards(type, language) {
  const axes = axisRows(type).map(axis => axis.verdict);
  const copy = activeRoleCopy();
  const subject = copy.resultSubject;
  const object = copy.resultObject;
  const project = state.name || `这个${subject}`;
  const grayAxes = axisRows(type).filter(axis => axis.inGray).map(axis => axis.name);
  const risk = riskProfile(type);
  const basisText = state.mode === "brand"
    ? "来自品牌发源城市、单店面积、拓展城市策略、当前拓展任务、品牌业态和共创场景。"
    : "来自项目区位、城市层级、资产类型、空间形态、业主/运营身份、招商目标和内容频率。";
  return [
    {
      kicker: "初读结论",
      title: `${language.name}`,
      body: `${project}当前更接近「${language.name}」。这个结论只用于确定后续对标和${object}匹配方向，不直接等同于经营评分。`,
      basis: basisText,
      gap: "尚未接入真实客流、销售、租金、竞品、门店表现和双方沟通数据。",
    },
    {
      kicker: "判断边界",
      title: type.edge ? `${type.edge.signal}，需要观察` : (grayAxes.length ? `${grayAxes.join(" / ")} 接近边界` : "4 个维度相对清晰"),
      body: type.edge
        ? `${type.edge.note} 当前先按「${language.name}」推荐样本，同时保留「${type.edge.adjacent}」的观察口径。`
        : `当前判断到的倾向是：${axes.join(" / ")}。${grayAxes.length ? "其中有维度落在灰带里，后续推荐会保留相邻方向。" : "这里判断的是策略性格，不判断经营优劣。"}`,
      basis: type.edge
        ? "这是 16 个 code 合并成 8 类时自然出现的边缘组合，先不单独拆型，用真实样本和用户反馈继续校准。"
        : "边界附近不做非此即彼的硬切，避免用户改一个选项类型就剧烈跳变。",
      gap: type.edge ? "后续重点看推荐样本是否被用户认可；如果长期觉得放错组，再考虑拆分类型。" : "后续用现场反馈和项目访谈继续校准。",
    },
    {
      kicker: "风险提示",
      title: risk.title,
      body: risk.body,
      basis: risk.basis,
      gap: risk.gap,
    },
    {
      kicker: "现场反馈",
      title: "先看真实到访，再看经营细节",
      body: "后续会把用户评价、地图热度、活动案例和品牌落地情况接进来，让判断更有依据。",
      basis: "真实到访、评价和落地案例，比单纯概念更能说明项目状态。",
      gap: "客流、租金、铺位、销售和运营预算后续用于二次校准。",
    },
  ];
}

function resultStrategyCards(type, language) {
  const topCase = state.recommended?.[0]?.item || selectedCase();
  const subjectName = state.name || (state.mode === "brand" ? "这个品牌" : "这个项目");
  const actionKeywords = projectActionKeywords();
  if (state.mode === "brand") {
    return [
      {
        kicker: "适合场地",
        title: language.name,
        body: `${subjectName}优先找能接住品牌内容、门店模型和目标客群的非标商业。`,
        href: "#cases",
        action: "看主样本",
      },
      {
        kicker: "主参考",
        title: topCase?.name || "调性相近的非标商业",
        body: topCase?.usable || topCase?.value || "先用一个最接近的商业样本判断空间、客群和共创条件。",
        href: "#cases",
        action: "查看样本",
      },
      {
        kicker: "下一步",
        title: "整理第一张合作卡",
        body: `说清品牌能带来的内容、门店面积、目标区域和希望试的${state.intent || "合作方式"}。`,
        href: "#intent",
        action: "生成意向卡",
      },
    ];
  }
  return [
    {
      kicker: "招商方向",
      title: language.name,
      body: `${subjectName}先围绕「${actionKeywords.join(" / ")}」组织招商和运营动作。`,
      href: "#cases",
      action: "看主样本",
    },
    {
      kicker: "主参考",
      title: topCase?.name || "相近非标商业样本",
      body: topCase?.usable || topCase?.value || "先看一个最接近的样本，判断哪些动作能借鉴。",
      href: "#cases",
      action: "查看样本",
    },
    {
      kicker: "操盘内容",
      title: "看可借鉴和要避的坑",
      body: "每个样本都要继续拆空间、招商、运营和公园转化，判断哪些动作能转到你的项目。",
      href: "#cases",
      action: "看操盘解读",
    },
  ];
}

function scoreCaseForBrand(item) {
  const text = fullText(item);
  let score = item.priority === "A" ? 30 : item.priority === "B" ? 20 : 12;
  const type = currentType();
  const nearbyCodes = nearbyTypeCodes(type);
  if (item.dna?.code === type.code) score += 12;
  else if (nearbyCodes.has(item.dna?.code)) score += 6;
  if (/本地深耕/.test(state.cityTier) && /社区|生活圈|在地|街区|复访/.test(text)) score += 15;
  if (/全国巡回|跨城|一线|新一线|旅游/.test(`${state.cityTier} ${state.stage}`) && /目的地|城市级|打卡|游客|首店|传播/.test(text)) score += 16;
  if (/30㎡以内|30-80㎡|快闪/.test(state.relation) && /小店|市集|快闪|街区|外摆|轻资产/.test(text)) score += 13;
  if (/150-300㎡|300㎡以上/.test(state.relation) && /旗舰|主题|展览|空间|大店|目的地/.test(text)) score += 12;
  if (/咖啡|烘焙|茶饮/.test(state.brandGoal) && /咖啡|烘焙|茶|日常|复访/.test(text)) score += 13;
  if (/餐酒|夜经济|音乐/.test(state.brandGoal) && /夜|酒|外摆|音乐|社交/.test(text)) score += 14;
  if (/文创|城市礼物|展览|内容IP|设计师|主理人/.test(state.brandGoal) && /文创|艺术|展览|书店|历史|更新|主理人|买手/.test(text)) score += 15;
  if (/宠物|户外|运动/.test(state.brandGoal) && /宠物|户外|草坪|骑行|运动|公园/.test(text)) score += 13;
  for (const scene of state.scenes) {
    if (text.includes(scene)) score += 8;
    if (scene === "快闪联名" && /快闪|市集|活动|联名|展览/.test(text)) score += 10;
    if (scene === "本地社群" && /社区|在地|复访|生活/.test(text)) score += 10;
    if (scene === "内容IP" && /内容|展览|艺术|话题|传播/.test(text)) score += 10;
    if (scene === "主理人零售" && /主理人|买手|设计|原创|街区/.test(text)) score += 10;
  }
  return score;
}

function currentSampleTypeTags() {
  const tags = new Set();
  const text = [
    state.relation,
    state.cityTier,
    state.asset,
    state.stage,
    state.space,
    state.owner,
    state.operator,
    state.brandGoal,
    state.operation,
    ...state.scenes,
  ].join(" ");
  if (/贴近公园|公园\/滨水配套|公园|花园|草坪|宠物|户外运动/.test(text)) tags.add("T1");
  if (/本地深耕|社区|邻里|社区复访|生活圈|亲子|家庭|轻资产市集|稳态生活配套/.test(text)) tags.add("T2");
  if (/滨水|水岸|河|湖|慢行|骑行/.test(text)) tags.add("T3");
  if (/屋顶|立体|高区/.test(text)) tags.add("T4");
  if (/盒子改造|盒子|室内|森林|中庭|雨天友好/.test(text)) tags.add("T5");
  if (/城市更新|历史街区|文保|古镇|石库门|老建筑|存量/.test(text)) tags.add("T6");
  if (/工业遗存|厂房|仓库|水泥厂/.test(text)) tags.add("T7");
  if (/文创艺术内容|艺术策展|展览|书店|文化|美术馆|内容IP/.test(text)) tags.add("T8");
  if (/旅游城市|游客打卡|目的地|景区|枢纽|机场/.test(text)) tags.add("T9");
  if (/夜经济|快闪联名|首店招商|年轻|潮流|策展|主理人/.test(text)) tags.add("T10");
  if (!tags.size) tags.add("T2");
  return tags;
}

function sampleTypeNames(tags = []) {
  return tags.map(code => sampleTypeDefinitions.get(code)?.name || code).join(" / ");
}

function samplePlaybook(item = {}) {
  const entry = displayTypeEntryForCode(item.dna?.code, "commercial");
  return {
    key: entry?.[0] || "",
    name: entry?.[1]?.name || item.dna?.name || "策略样本",
    code: item.dna?.code || "",
  };
}

function copyThresholdScore(level = "") {
  if (level === "低") return 10;
  if (level === "中") return 5;
  if (level === "高") return 0;
  return 4;
}

function sampleMatchLine(item = {}, type = currentType()) {
  const playbook = samplePlaybook(item);
  const samePlaybook = playbook.key && playbook.key === type.displayKey;
  const shapeNames = sampleTypeNames(item.applicableTypes || []);
  if (samePlaybook && shapeNames) return `打法接近：${playbook.name}；形态参考：${shapeNames}`;
  if (samePlaybook) return `打法接近：${playbook.name}`;
  if (shapeNames) return `形态参考：${shapeNames}`;
  return item.bestFor ? `适合参考：${item.bestFor}` : "可作为补充参考样本";
}

function scoreCase(item) {
  if (state.mode === "brand") return scoreCaseForBrand(item);
  const text = fullText(item);
  let score = item.priority === "A" ? 30 : item.priority === "B" ? 20 : 12;
  const type = currentType();
  const nearbyCodes = nearbyTypeCodes(type);
  const playbook = samplePlaybook(item);
  const samePlaybook = playbook.key && playbook.key === type.displayKey;
  if (samePlaybook) score += 44;
  else if (item.dna?.code === type.code) score += 18;
  else if (nearbyCodes.has(item.dna?.code)) score += 8;
  const userTypeTags = currentSampleTypeTags();
  const caseTypeTags = item.applicableTypes || [];
  const formTypeOverlap = caseTypeTags.filter(tag => userTypeTags.has(tag)).length;
  if (formTypeOverlap) score += formTypeOverlap * 12;
  score += copyThresholdScore(item.copyThreshold);
  if (item.copyThreshold === "高" && !samePlaybook && !formTypeOverlap) score -= 8;
  if (text.includes(state.relation)) score += 14;
  for (const scene of state.scenes) {
    if (text.includes(scene)) score += 8;
    if (scene === "夜经济" && /夜|酒|外摆|音乐|活动/.test(text)) score += 8;
    if (scene === "主理人" && /主理人|原创|非标|首店/.test(text)) score += 10;
    if (scene === "城市更新" && /更新|街区|存量|文保/.test(text)) score += 10;
    if (scene === "首店招商" && /品牌|首店|招商|主理人/.test(text)) score += 10;
    if (scene === "社区复访" && /社区|复访|家庭|生活圈/.test(text)) score += 10;
  }
  if (state.stage === "招商落位" && /品牌|首店|招商|主理人/.test(text)) score += 12;
  if (state.stage === "空间方案" && /空间|动线|屋顶|下沉|景观|森林/.test(text)) score += 12;
  if (state.stage === "运营调改" && /运营|复访|活动|社群|市集/.test(text)) score += 12;
  if (["城市更新存量", "历史街区", "工业遗存"].includes(state.asset) && /更新|历史|文保|工业|厂房|街区|艺术/.test(text)) score += 14;
  if (state.asset === "公园/滨水配套" && /公园|滨水|户外|草坪|生态|自然/.test(text)) score += 12;
  if (state.space === "半户外/下沉" && /半开放|下沉|露天|大台阶|公园/.test(text)) score += 12;
  if (state.space === "轻资产市集" && /市集|快闪|活动|社群/.test(text)) score += 12;
  return score;
}

function scoreBrand(brand, type) {
  const text = [
    brand.name,
    brand.category,
    brand.subCategory,
    brand.brandRole,
    brand.fitNote,
    ...(brand.tags || []),
    ...(brand.fitDNA || []),
  ].join(" ");
  const geo = brandGeoFit(brand);
  const nearbyCodes = nearbyTypeCodes(type);
  let score = brand.fitDNA?.includes(type.code) ? 34 : (brand.fitDNA || []).some(code => nearbyCodes.has(code)) ? 18 : 0;
  const prefix = type.code.slice(0, 2);
  if ((brand.fitDNA || []).some(code => code.startsWith(prefix))) score += 14;
  if (geo.tier === "local") score += 18;
  if (geo.tier === "nearby") score += 10;
  if (geo.tier === "open") score += 4;
  score += projectBrandAffinity(brand);
  if (state.cityTier === "旅游城市" && /城市礼物|地方风物|文创|地方|本地|伴手礼|茶食/.test(text)) score += 12;
  if (state.stage === "招商落位") score += /首店|集合|成熟|扩张|旗舰/.test(text) ? 9 : 0;
  if (state.stage === "运营调改") score += /社群|活动|夜间|快闪|高频/.test(text) ? 10 : 0;
  if (state.stage === "空间方案") score += /外摆|公园|空间|展示面|街区|草坪/.test(text) ? 8 : 0;
  if (state.mode === "brand") {
    if (/咖啡烘焙茶饮/.test(state.brandGoal) && /咖啡|烘焙|茶饮|甜品|茶食/.test(text)) score += 16;
    if (/创意餐饮餐酒|夜经济/.test(state.brandGoal) && /餐酒|夜|酒吧|音乐|社交|创意餐饮/.test(text)) score += 16;
    if (/文创|城市礼物|展览|内容IP/.test(state.brandGoal) && /文创|城市礼物|地方风物|展览|内容IP|艺术|书店/.test(text)) score += 16;
    if (/设计师|主理人/.test(state.brandGoal) && /主理人|买手|设计|原创|在地/.test(text)) score += 16;
    if (/宠物|户外|运动/.test(state.brandGoal) && /宠物|户外|运动|骑行|露营/.test(text)) score += 16;
    if (/快闪|联名|内容曝光|巡回/.test(state.stage) && /快闪|高传播|活动|社群|联名|夜间/.test(text)) score += 12;
  }
  for (const scene of state.scenes) {
    if (text.includes(scene)) score += 10;
    if (scene === "咖啡烘焙" && /咖啡|烘焙|甜品|茶/.test(text)) score += 12;
    if (scene === "餐酒社交" && /餐酒|夜|酒吧|社交|音乐/.test(text)) score += 12;
    if (scene === "城市礼物" && /城市礼物|地方风物|文创|伴手礼/.test(text)) score += 12;
    if (scene === "内容IP" && /内容IP|内容 IP|展览|艺术|文博|IP/.test(text)) score += 12;
    if (scene === "主理人零售" && /主理人|买手|设计|在地|原创/.test(text)) score += 12;
    if (scene === "快闪联名" && /快闪|联名|活动|巡回|高传播/.test(text)) score += 12;
    if (scene === "本地社群" && /本地|在地|社区|社群/.test(text)) score += 12;
    if (scene === "宠物" && /宠物/.test(text)) score += 14;
    if (scene === "户外运动" && /户外|骑行|露营|跑步|滑板|运动|飞盘/.test(text)) score += 12;
    if (scene === "夜经济" && /餐酒|夜|酒吧|社交|火锅|音乐|live|LIVE|黑胶/.test(text)) score += 12;
    if (scene === "主理人" && /主理人|买手|设计|手作|在地/.test(text)) score += 12;
    if (scene === "首店招商" && /首店|旗舰|国际|高传播|目的地/.test(text)) score += 12;
    if (scene === "社区复访" && /社区|高频|家庭|便利|服务/.test(text)) score += 12;
    if (scene === "艺术策展" && /艺术|书店|设计|展览|策展|美术馆|内容IP|内容 IP|文博/.test(text)) score += 12;
  }
  if (["滨水界面", "滨水"].includes(state.relation) && /骑行|户外|露营|草坪|市集/.test(text)) score += 10;
  if (state.relation === "城市更新" && /主理人|买手|设计|在地|夜间|书店/.test(text)) score += 10;
  return score;
}

function brandBreakdown(brand, type) {
  const match = Math.max(35, Math.min(96, scoreBrand(brand, type)));
  const heat = brand.heatScore || 58;
  const proof = brand.nonstandardProofScore || 56;
  const recent = brand.recentSignalScore || 55;
  const geo = brandGeoFit(brand);
  const total = Math.round(match * .36 + heat * .24 + proof * .16 + recent * .09 + geo.score * .15);
  return {
    match,
    heat,
    proof,
    recent,
    geo,
    total,
  };
}

function recommendedBrands() {
  const type = currentType();
  const categoryOrder = [
    "咖啡烘焙饮品",
    "创意餐饮餐酒",
    "文创书店艺术",
    "地方风物与城市礼物",
    "展览展馆与内容 IP",
    "夜经济与音乐社交",
    "国内设计师潮流买手",
    "宠物户外运动社群",
    "生活方式香氛植物家居",
  ];
  const sorted = [...brandLibrary]
    .map(item => ({ item, ...brandBreakdown(item, type) }))
    .sort((a, b) => b.total - a.total || a.item.name.localeCompare(b.item.name, "zh-Hans-CN"));
  const picked = [];
  const categoryCount = {};
  const activeCity = currentProjectCity();
  const takeRows = (rows, targetLength, maxPerCategory = 2) => {
    for (const row of rows) {
      if (picked.includes(row)) continue;
      const category = row.item.category;
      if ((categoryCount[category] || 0) >= maxPerCategory) continue;
      picked.push(row);
      categoryCount[category] = (categoryCount[category] || 0) + 1;
      if (picked.length >= targetLength) break;
    }
  };
  if (activeCity) {
    takeRows(sorted.filter(row => row.geo.tier === "local"), 3, 3);
    takeRows(sorted.filter(row => row.geo.tier === "nearby"), 5, 2);
  }
  for (const category of categoryOrder) {
    if ((categoryCount[category] || 0) >= 2) continue;
    const row = sorted.find(item => item.item.category === category && !picked.includes(item));
    if (!row) continue;
    picked.push(row);
    categoryCount[category] = (categoryCount[category] || 0) + 1;
    if (picked.length === 7) break;
  }
  for (const row of sorted) {
    if (picked.includes(row)) continue;
    const category = row.item.category;
    if ((categoryCount[category] || 0) >= 2) continue;
    picked.push(row);
    categoryCount[category] = (categoryCount[category] || 0) + 1;
    if (picked.length === 8) return picked;
  }
  for (const row of sorted) {
    if (picked.includes(row)) continue;
    picked.push(row);
    if (picked.length === 8) break;
  }
  return picked;
}

function selectedBrandRow(rows = recommendedBrands()) {
  return rows.find(row => row.item.id === state.selectedBrandId) || rows[0];
}

function opportunityTheme(row) {
  const brand = row?.item || {};
  const text = [brand.category, brand.subCategory, brand.brandRole, brand.fitNote, ...(brand.tags || [])].join(" ");
  if (/城市礼物|地方风物|伴手礼|文创/.test(text)) return "城市礼物集合";
  if (/展览|内容IP|艺术|书店|文博/.test(text)) return "内容展陈共创";
  if (/夜|餐酒|酒吧|音乐|live|LIVE|社交/.test(text)) return "夜间社交内容";
  if (/宠物|户外|骑行|露营|运动|滑板/.test(text)) return "户外社群活动";
  if (/咖啡|烘焙|茶饮|甜品/.test(text)) return "日常复访节点";
  if (/买手|设计|主理人|原创/.test(text)) return "主理人零售共创";
  if (/快闪|联名/.test(`${state.stage} ${state.intent}`)) return "快闪联名测试";
  return state.intent || "主题共创试点";
}

function opportunityCard(row, index) {
  const brand = row.item || {};
  const seed = seedBrandMeta(brand);
  const type = currentType();
  const theme = opportunityTheme(row);
  const projectName = state.name || "你的项目";
  const geoCopy = row.geo?.label || "地域关系待核验";
  const why = brand.fitNote || `它和「${type.card?.name || "当前项目性格"}」在调性、客群或内容能力上接近。`;
  const trial = row.geo?.tier === "local"
    ? `先约本地轻量试点：${theme}、外摆或周末活动，验证客群和复访。`
    : row.geo?.tier === "nearby"
      ? `先做周边城市联动：用${theme}降低正式入驻风险。`
      : `先做快闪或联合内容测试，确认远程品牌是否有足够强的落地理由。`;
  const verify = `先核验${seed.evidenceLabel}、门店模型、面积需求和履约能力，再谈正式入驻。`;
  return {
    rank: index === 0 ? "优先机会" : index === 1 ? "备选机会" : index === 2 ? "补位机会" : "观察机会",
    title: `${brand.name || "目标品牌"} × ${projectName}`,
    theme,
    why,
    trial,
    verify,
    geoCopy,
    seed,
  };
}

function buildRecommendations() {
  if (state.personaCaseCode && state.appPage === "project") {
    const rows = casesForPersonaCode(state.personaCaseCode, 6);
    const selectedIndex = rows.findIndex(row => row.item.id === state.selectedCaseId);
    state.recommended = selectedIndex > 0
      ? [rows[selectedIndex], ...rows.filter((_, index) => index !== selectedIndex)]
      : rows;
    if (!state.recommended.some(row => row.item.id === state.selectedCaseId)) {
      state.selectedCaseId = state.recommended[0]?.item.id || cases[0]?.id;
    }
    return;
  }
  const type = currentType();
  const userTypeTags = currentSampleTypeTags();
  const rows = [...cases].map(item => {
    const playbook = samplePlaybook(item);
    const samePlaybook = Boolean(playbook.key && playbook.key === type.displayKey);
    const formOverlap = (item.applicableTypes || []).filter(tag => userTypeTags.has(tag)).length;
    const threshold = copyThresholdScore(item.copyThreshold);
    return {
      item,
      score: scoreCase(item),
      samePlaybook,
      formOverlap,
      threshold,
    };
  });
  const hasSamePlaybook = rows.some(row => row.samePlaybook);
  const ranked = rows
    .map(row => {
      if (hasSamePlaybook) return row;
      const fallbackScore = row.formOverlap * 10 + row.threshold + (row.item.priority === "A" ? 8 : row.item.priority === "B" ? 5 : 2);
      return { ...row, score: row.score + fallbackScore };
    })
    .sort((a, b) => {
      if (a.samePlaybook !== b.samePlaybook) return Number(b.samePlaybook) - Number(a.samePlaybook);
      if (a.formOverlap !== b.formOverlap) return b.formOverlap - a.formOverlap;
      if (a.threshold !== b.threshold) return b.threshold - a.threshold;
      return b.score - a.score;
    });
  state.recommended = ranked.slice(0, 6);
  // 20260703 修复：用户显式选中的样本（人格结果页/样本库点入）不应被推荐列表重置，
  // 只有 selectedCaseId 在全库不存在时才回落。
  if (!cases.some(item => item.id === state.selectedCaseId)) {
    state.selectedCaseId = state.recommended[0]?.item.id || cases[0]?.id;
  }
}


/* ===== 20260703 · 人格码匹配（品牌方反向匹配 + C端去处清单） ===== */

// 20260703 修复：按轴加权（客流半径和品牌结构对"入驻/去处"匹配比运营节奏更重要），
// 避免"共享两个次要轴"的大体量项目压过真正同打法的项目。
const personaAxisWeights = [14, 8, 12, 6]; // 引力L/D · 热度S/C · 调性B/M · 节奏E/R

function personaCodeAffinity(code = "", target = "") {
  if (!code || !target) return 0;
  if (code === target) return 48;
  let score = 0;
  for (let i = 0; i < 4; i += 1) {
    if (code[i] === target[i]) score += personaAxisWeights[i];
  }
  return score;
}

function casesForPersonaCode(code = "", limit = 3) {
  return cases
    .map(item => {
      let score = personaCodeAffinity(code, item.dna?.code);
      if (item.priority === "A") score += 6;
      else if (item.priority === "B") score += 3;
      return { item, score, exact: item.dna?.code === code };
    })
    .sort((a, b) => b.score - a.score)
    .slice(0, limit);
}

function brandsForPersonaCode(code = "", city = "", limit = 4) {
  // 20260703 修复：DNA 亲和是入池闸门（≥20 = 至少两轴匹配且含主轴），
  // 热度只做同档 tie-break；每品类最多 2 个，防止高热品类打穿清单。
  const MIN_AFFINITY = 20;
  const rows = brandLibrary
    .map(brand => {
      const fits = Array.isArray(brand.fitDNA) ? brand.fitDNA : [];
      const affinity = fits.reduce((best, fit) => Math.max(best, personaCodeAffinity(code, fit)), 0);
      const cities = brandCities(brand);
      const inCity = Boolean(city) && cities.includes(city);
      return { brand, affinity, heat: Number(brand.heatScore) || 0, inCity, exact: affinity >= 48 };
    })
    .sort((a, b) => (Number(b.inCity) - Number(a.inCity)) || (b.affinity - a.affinity) || (b.heat - a.heat));
  const qualified = rows.filter(row => row.affinity >= MIN_AFFINITY);
  const pool = qualified.length >= limit ? qualified : rows.filter(row => row.affinity > 0);
  const picked = [];
  const perCategory = {};
  for (const row of pool) {
    const cat = row.brand.category || "其他";
    if ((perCategory[cat] || 0) >= 2) continue;
    perCategory[cat] = (perCategory[cat] || 0) + 1;
    picked.push(row);
    if (picked.length >= limit) break;
  }
  return picked;
}

function consumerCityOptions() {
  const fromCases = cases.map(item => String(item.city || "").split("·")[0].trim()).filter(Boolean);
  const fromBrands = brandLibrary.flatMap(brand => brandCities(brand));
  const counts = {};
  [...fromCases, ...fromBrands].forEach(city => {
    counts[city] = (counts[city] || 0) + 1;
  });
  return Object.entries(counts).sort((a, b) => b[1] - a[1]).map(([city]) => city);
}

// ─────────────────────────────────────────────────────────────────────────────
// 双测试 V0.1：纯数据适配、模式校验与计分。DOM 状态机在 combo-app.js。
// ─────────────────────────────────────────────────────────────────────────────

function buildDualTestDefinition(mode = "project") {
  if (mode === "self") {
    return {
      mode: "self",
      contentVersion: operatorSystem.contentVersion || "",
      optionScores: [...(operatorSystem.scoring?.optionScores || [])],
      axisMax: Number(operatorSystem.scoring?.axisMax || 0),
      axes: (operatorSystem.axes || []).map(axis => ({
        key: axis.key,
        name: axis.name,
        neg: axis.neg,
        pos: axis.pos,
        negLabel: axis.negLabel,
        posLabel: axis.posLabel,
      })),
      questions: (operatorSystem.questions || []).map(question => ({
        id: question.id,
        axisKey: question.axisKey,
        prompt: question.prompt,
        anchor: Boolean(question.anchor),
        options: (question.options || []).map(option => ({
          id: option.id,
          text: option.text,
          score: Number(option.score),
        })),
      })),
    };
  }

  const projectAxes = (personaSystem.axes || []).map((axis, index) => ({
    key: dualAxisKeys[index],
    name: axis.name,
    neg: axis.neg,
    pos: axis.pos,
    negLabel: axis.negL,
    posLabel: axis.posL,
  }));
  const axisKeyByName = Object.fromEntries(projectAxes.map(axis => [axis.name, axis.key]));
  return {
    mode: "project",
    contentVersion: "project-persona-v1",
    optionScores: [0, 1, 2],
    axisMax: 8,
    axes: projectAxes,
    questions: (personaSystem.questions?.project || []).map((question, questionIndex) => ({
      id: `project-q${String(questionIndex + 1).padStart(2, "0")}`,
      axisKey: axisKeyByName[question.ax],
      prompt: question.q,
      anchor: false,
      options: (question.opts || []).map((option, optionIndex) => ({
        id: `project-q${String(questionIndex + 1).padStart(2, "0")}-${String.fromCharCode(97 + optionIndex)}`,
        text: option.t,
        score: Number(option.s),
      })),
    })),
  };
}

function validateDualTestDefinition(definition) {
  const expectedOptionCount = definition?.mode === "self" ? 4 : 3;
  const expectedScores = definition?.mode === "self" ? [0, 1, 2, 3] : [0, 1, 2];
  const expectedAxisMax = definition?.mode === "self" ? 12 : 8;
  const errors = [];
  if (!definition || !["self", "project"].includes(definition.mode)) errors.push("mode 无效");
  if ((definition?.questions || []).length !== 16) errors.push("题目必须恰好 16 道");
  if ((definition?.axes || []).length !== 4) errors.push("轴必须恰好 4 条");
  if (definition?.axisMax !== expectedAxisMax) errors.push(`axisMax 必须为 ${expectedAxisMax}`);
  if (JSON.stringify(definition?.optionScores || []) !== JSON.stringify(expectedScores)) {
    errors.push(`optionScores 必须为 ${expectedScores.join("/")}`);
  }
  const questionIds = new Set();
  (definition?.questions || []).forEach(question => {
    if (!question.id || questionIds.has(question.id)) errors.push("题目 id 缺失或重复");
    questionIds.add(question.id);
    if (!dualAxisKeys.includes(question.axisKey)) errors.push(`${question.id || "未知题"} axisKey 无效`);
    if ((question.options || []).length !== expectedOptionCount) {
      errors.push(`${question.id || "未知题"} 必须有 ${expectedOptionCount} 个选项`);
    }
    const scores = (question.options || []).map(option => option.score).sort((a, b) => a - b);
    if (JSON.stringify(scores) !== JSON.stringify(expectedScores)) {
      errors.push(`${question.id || "未知题"} 分值必须完整覆盖 ${expectedScores.join("/")}`);
    }
  });
  dualAxisKeys.forEach(axisKey => {
    const rows = (definition?.questions || []).filter(question => question.axisKey === axisKey);
    if (rows.length !== 4) errors.push(`${axisKey} 必须恰好 4 题`);
  });
  if (definition?.mode === "self") {
    const anchors = (definition.questions || []).filter(question => question.anchor);
    if (anchors.length !== 4 || new Set(anchors.map(question => question.axisKey)).size !== 4) {
      errors.push("人的四轴必须各有一道行为锚点题");
    }
  }
  return Object.freeze({ valid: errors.length === 0, errors: Object.freeze(errors) });
}

function dualAnswerOption(definition, answer) {
  const question = definition.questions.find(item => item.id === answer?.questionId);
  const option = question?.options?.find(item => item.id === answer?.optionId);
  return question && option ? { question, option } : null;
}

function resolveDualPersona(mode, code) {
  if (mode === "self") return operatorSystem.personasByCode?.[code] || null;
  const nick = personaSystem.personas?.project?.[code];
  if (!nick) return null;
  return {
    id: nick,
    code,
    name: nick,
    label: personaSystem.info?.[nick]?.[0] || "项目人格",
    roast: personaSystem.info?.[nick]?.[1] || "",
    profile: personaSystem.projectProfiles?.[code] || null,
    assetAlt: `${nick}项目怪物角色`,
  };
}

function scoreDualTest(mode, answers, completedAt = new Date().toISOString()) {
  const definition = buildDualTestDefinition(mode);
  const validation = validateDualTestDefinition(definition);
  if (!validation.valid) throw new TypeError(validation.errors.join("；"));
  if (!Array.isArray(answers) || answers.length !== definition.questions.length) {
    throw new RangeError("必须答满 16 题才能生成结果");
  }
  const normalized = answers.map(answer => dualAnswerOption(definition, answer));
  if (normalized.some(item => !item) || new Set(answers.map(answer => answer.questionId)).size !== 16) {
    throw new TypeError("答案包含缺失、重复或无效的 questionId / optionId");
  }

  const axisScores = {};
  const axisRatios = {};
  let code = "";
  definition.axes.forEach(axis => {
    const rows = normalized.filter(item => item.question.axisKey === axis.key);
    const earned = rows.reduce((sum, item) => sum + item.option.score, 0);
    const ratio = earned / definition.axisMax;
    const anchorScore = rows.find(item => item.question.anchor)?.option.score;
    const right = mode === "self" && earned === definition.axisMax / 2
      ? anchorScore >= 2
      : ratio >= 0.5;
    const letter = right ? axis.pos : axis.neg;
    axisScores[axis.key] = Object.freeze({
      earned,
      max: definition.axisMax,
      ratio,
      letter,
      isGray: ratio >= 0.4 && ratio <= 0.6,
    });
    axisRatios[axis.key] = ratio;
    code += letter;
  });
  const persona = resolveDualPersona(mode, code);
  if (!persona) throw new TypeError(`${mode} 结果 ${code} 没有对应人格`);
  return Object.freeze({
    schemaVersion: 1,
    contentVersion: definition.contentVersion,
    mode,
    code,
    personaId: persona.id,
    axisScores: Object.freeze(axisScores),
    axisRatios: Object.freeze(axisRatios),
    completedAt,
  });
}

function validateOperatorAssetManifest(manifest) {
  const rows = Array.isArray(manifest)
    ? manifest
    : (manifest?.assets || manifest?.items || manifest?.characters || []);
  const expected = operatorSystem.personas || Object.values(operatorSystem.personasByCode || {});
  const errors = [];
  const assetsById = {};
  const seenFiles = new Set();
  if (rows.length !== 16) errors.push("manifest 必须恰好声明 16 张正式资产");
  expected.forEach(persona => {
    const row = rows.find(item => (item.assetId || item.id) === persona.assetId);
    const file = String(row?.file || row?.src || row?.path || "").trim();
    if (!row) {
      errors.push(`${persona.assetId} 缺失`);
      return;
    }
    if (row.code !== persona.code) errors.push(`${persona.assetId} code 不匹配`);
    if (row.species !== persona.species) errors.push(`${persona.assetId} species 不匹配`);
    if (!file || /placeholder|staged-pending-copy-review|operator-animal-visual-direction/i.test(file)) {
      errors.push(`${persona.assetId} 不是正式资产路径`);
    }
    if (!/\.(png|webp|jpe?g|avif)$/i.test(file)) errors.push(`${persona.assetId} 文件格式无效`);
    if (seenFiles.has(file)) errors.push(`${persona.assetId} 文件路径重复`);
    seenFiles.add(file);
    assetsById[persona.assetId] = Object.freeze({
      assetId: persona.assetId,
      code: persona.code,
      species: persona.species,
      file,
    });
  });
  return Object.freeze({
    valid: errors.length === 0,
    errors: Object.freeze(errors),
    assetsById: Object.freeze(assetsById),
  });
}

window.COMMERCIAL_DNA_DUAL_V0_1 = Object.freeze({
  buildDefinition: buildDualTestDefinition,
  validateDefinition: validateDualTestDefinition,
  score: scoreDualTest,
  validateAssetManifest: validateOperatorAssetManifest,
});
