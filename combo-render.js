function selectedCase() {
  return cases.find(item => item.id === state.selectedCaseId) || state.recommended[0]?.item || cases[0];
}

function roleName(index) {
  return ["主参考", "空间参考", "招商参考", "运营参考", "风险参考", "进阶参考"][index] || "样本";
}

function renderChips() {
  els.scenarioChips.innerHTML = currentScenarioOptions().map(scene => `
    <button class="chip ${state.scenes.has(scene) ? "active" : ""}" data-scene="${escapeHtml(scene)}" type="button">${escapeHtml(scene)}</button>
  `).join("");
  els.scenarioChips.querySelectorAll("[data-scene]").forEach(button => {
    button.addEventListener("click", () => {
      const scene = button.dataset.scene;
      state.scenes.has(scene) ? state.scenes.delete(scene) : state.scenes.add(scene);
      renderAll();
    });
  });
}

function renderReport() {
  const type = currentType();
  const m = type.metric;
  const avg = signalAverage(m);
  const diagnosis = diagnosisRules.find(rule => rule.test(m)) || diagnosisRules[diagnosisRules.length - 1];
  const language = resultLanguage(type, avg);
  const copy = activeRoleCopy();
  els.dnaScore.textContent = "初读";
  els.diagnosisType.textContent = `${language.name || diagnosis.name}`;
  els.diagnosisCopy.textContent = language.explain || diagnosis.copy;
  els.reportTitle.textContent = `${state.name || `未命名${copy.resultSubject}`} · ${copy.resultSubject}初筛核验`;
  els.metricGrid.innerHTML = calibrationCards(type, language).map(card => `
    <article class="calibration-card">
      <div class="calibration-head">
        <span>${escapeHtml(card.kicker)}</span>
        <strong>${escapeHtml(card.title)}</strong>
      </div>
      <p>${escapeHtml(card.body)}</p>
      <dl>
        <div>
          <dt>为什么这样判断</dt>
          <dd>${escapeHtml(card.basis)}</dd>
        </div>
        <div>
          <dt>还需要确认</dt>
          <dd>${escapeHtml(card.gap)}</dd>
        </div>
      </dl>
    </article>
  `).join("");
}

function renderResultReadout() {
  if (!els.resultCode || !els.axisGrid) return;
  const type = currentType();
  const avg = signalAverage(type.metric);
  const language = resultLanguage(type, avg);
  const grayAxes = axisRows(type).filter(axis => axis.inGray).map(axis => axis.name);
  els.resultCode.textContent = state.mode === "brand" ? "您的品牌初读为" : "您的项目初读为";
  els.resultName.textContent = language.name;
  els.resultIntro.textContent = language.explain;
  els.resultConfidence.textContent = state.mode === "brand" ? "发卡" : "看样本";
  els.resultSummary.textContent = state.mode === "brand"
    ? "下一步先看一个适合你调性的商业样本，再生成合作卡。"
    : "下一步先看一个最像的参考样本，再看它背后的操盘动作。";
  if (els.resultNext) {
    els.resultNext.href = "#cases";
    els.resultNext.textContent = state.mode === "brand" ? "先看懂你调性的非标商业" : "先看推荐对标样本";
  }
  if (els.strategyGrid) {
    els.strategyGrid.innerHTML = resultStrategyCards(type, language).map((card, index) => `
      <article class="strategy-card" style="--deal-index:${index}">
        <span>${escapeHtml(card.kicker)}</span>
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.body)}</p>
        ${card.href ? `<a href="${escapeHtml(card.href)}">${escapeHtml(card.action || "继续")}</a>` : ""}
      </article>
    `).join("");
  }
  els.axisGrid.innerHTML = axisRows(type).map((axis, index) => `
    <article class="axis-card ${axis.inGray ? "is-gray" : ""}" style="--axis-index:${index}; --axis-value:${axis.value}%">
      <div class="axis-top">
        <span>${axis.name}</span>
        <strong>${axis.value}</strong>
      </div>
      <h3>${axis.verdict}</h3>
      <p>${axis.explain}</p>
      <small class="axis-note">${axis.note}</small>
      <div class="axis-scale">
        <em>${axis.left}</em>
        <i><b></b></i>
        <em>${axis.right}</em>
      </div>
    </article>
  `).join("");
}

function setSelectValue(select, value) {
  if (!select) return;
  select.value = value;
}

function applyRefine(mode) {
  if (state.mode === "brand") {
    if (mode === "local") {
      setSelectValue(els.cityTierSelect, "本地深耕");
      setSelectValue(els.stageSelect, "门店模型验证");
      state.scenes.add("本地社群");
      state.scenes.delete("快闪联名");
    }
    if (mode === "destination") {
      setSelectValue(els.cityTierSelect, "全国巡回");
      setSelectValue(els.stageSelect, "城市巡回/跨城拓展");
      state.scenes.add("快闪联名");
      state.scenes.add("内容IP");
    }
    if (mode === "maker") {
      setSelectValue(els.brandGoalSelect, "设计师/主理人零售");
      state.scenes.add("主理人零售");
      state.scenes.add("展览活动");
    }
    if (mode === "steady") {
      setSelectValue(els.relationSelect, "30-80㎡");
      setSelectValue(els.stageSelect, "门店模型验证");
      state.scenes.add("咖啡烘焙");
      state.scenes.delete("快闪联名");
    }
    renderChips();
    renderAll();
    els.resultSection?.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (mode === "local") {
    setSelectValue(els.relationSelect, "社区中心");
    setSelectValue(els.assetSelect, "社区商业");
    setSelectValue(els.brandGoalSelect, "稳态生活配套");
    state.scenes.add("社区复访");
    state.scenes.delete("游客打卡");
  }
  if (mode === "destination") {
    setSelectValue(els.cityTierSelect, "旅游城市");
    setSelectValue(els.assetSelect, "文旅景区");
    setSelectValue(els.relationSelect, "城市更新");
    state.scenes.add("游客打卡");
    state.scenes.add("艺术策展");
  }
  if (mode === "maker") {
    setSelectValue(els.brandGoalSelect, "在地主理人");
    setSelectValue(els.operatorSelect, "内容主理人");
    state.scenes.add("主理人");
    state.scenes.add("首店招商");
  }
  if (mode === "steady") {
    setSelectValue(els.operationSelect, "长期稳态经营");
    setSelectValue(els.operatorSelect, "自持商管");
    setSelectValue(els.brandGoalSelect, "稳态生活配套");
    state.scenes.add("社区复访");
    state.scenes.delete("夜经济");
  }
  renderChips();
  renderAll();
  els.resultSection?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function clampScore(value) {
  return Math.max(35, Math.min(96, Math.round(value)));
}

function profileCardHTML({ kicker, title, subtitle, tags = [], body, meta }) {
  return `
    <span>${escapeHtml(kicker)}</span>
    <h3>${escapeHtml(title)}</h3>
    <p>${escapeHtml(subtitle)}</p>
    <div class="match-tags">
      ${tags.filter(Boolean).slice(0, 4).map(tag => `<i>${escapeHtml(tag)}</i>`).join("")}
    </div>
    <em>${escapeHtml(body)}</em>
    <small>${escapeHtml(meta)}</small>
  `;
}

function renderCoCreateMatch() {
  if (!els.businessMatchCard || !els.brandMatchCard || !els.matchActions) return;
  const type = currentType();
  const brandRows = recommendedBrands();
  const topBrand = selectedBrandRow(brandRows);
  const topCaseRow = state.recommended[0];
  const activeCase = selectedCase();
  const caseFit = clampScore(52 + ((topCaseRow?.score || 54) * .45));
  const brandFit = topBrand?.total || 68;
  const score = clampScore(brandFit * .62 + caseFit * .38);
  const copy = activeRoleCopy();
  const topBrandSeed = seedBrandMeta(topBrand?.item || {});
  const matchSection = document.getElementById("match");
  const opportunity = state.mode === "commercial" && topBrand ? opportunityCard(topBrand, 0) : null;
  matchSection?.classList.add("is-compact");
  if (els.matchLead) {
    els.matchLead.textContent = state.mode === "brand"
      ? "先把品牌诉求整理成一张合作卡，用一个最接近的商业样本发起沟通。"
      : "先给一个最值得先聊的品牌对象，其他候选放到后面比较。";
  }

  const businessProfile = state.mode === "brand"
    ? {
        kicker: "目标商业场域",
        title: activeCase?.name || "待匹配商业样本",
        subtitle: `${activeCase?.city || "非标商业"} · ${activeCase?.dna?.name || type.card?.name || "适合共创"} · ${activeCase?.archetype || "共创场域"}`,
        tags: [activeCase?.assetType || activeCase?.subtype, activeCase?.parkRelation, activeCase?.dna?.name, "可共创"],
        body: activeCase?.usable || activeCase?.value || "先用商业样本判断你的品牌适合进入什么样的空间和客群关系。",
        meta: "商业端资料后续应补齐铺位、租金、运营排期和共创预算。",
      }
    : {
        kicker: "商业端画像",
        title: state.name || "未命名项目",
        subtitle: `${state.city || "未填写城市"} · ${type.card?.name || "项目性格"}`,
        tags: [state.asset, state.space, state.brandGoal, state.operation],
        body: `当前更适合先寻找「${topBrand?.item?.category || "新兴品牌"}」里的共创伙伴，形成内容、客群和复访理由。`,
        meta: "不是填铺匹配，而是先判断空间气质、内容能力和运营节奏是否一致。",
      };

  const brandProfile = state.mode === "brand"
    ? {
        kicker: "品牌端画像",
        title: state.name || "未命名品牌",
        subtitle: `${state.city || "未填写城市"} · ${type.card?.name || "品牌性格"}`,
        tags: [state.brandGoal, state.operator, ...Array.from(state.scenes).slice(0, 2)],
        body: `${state.name || "这个品牌"}适合先找到能接住内容表达、外摆场景和客群共创的非标商业，而不是只看铺位条件。`,
        meta: "品牌端资料后续应补齐门店表现、小红书/点评声量、开店模型和空间要求。",
      }
    : {
        kicker: "推荐品牌伙伴",
        title: topBrand?.item?.name || "待匹配品牌",
        subtitle: `${topBrand?.item?.category || "新兴品牌"} · ${topBrand?.item?.city || "待补城市"} · ${topBrand?.geo?.label || "待核验地域"}`,
        tags: [topBrandSeed.sourceStatus, topBrandSeed.claimStatus, topBrandSeed.evidenceLabel, `综合 ${topBrand?.total || "--"}`],
        body: topBrand?.item?.fitNote || "优先查看品牌调性、内容能力和非标落地证据，再判断是否适合进入项目。",
        meta: "当前为公开资料打底的种子品牌，后续可由品牌方认领并补充官方资料。",
      };

  els.businessMatchCard.innerHTML = profileCardHTML(businessProfile);
  els.brandMatchCard.innerHTML = profileCardHTML(brandProfile);
  els.matchScore.textContent = priorityLabel(score);
  els.matchType.textContent = `${copy.resultSubject}连接${copy.resultObject}`;

  const geoLabel = topBrand?.geo?.label || "地域关系待核验";
  const firstMove = state.mode === "brand"
    ? "先递交品牌意向卡，说明客群、内容能力、门店模型和希望共创的空间条件。"
    : "先看本地品牌，再补周边城市品牌；远程高分品牌需要更强的落地理由。";
  const coTheme = state.mode === "brand"
    ? `适合向「${activeCase?.name || "目标商业"}」发起内容共创、快闪测试或主题店提案。`
    : `适合围绕「${topBrand?.item?.name || "目标品牌"}」设计首店、快闪、外摆、主题活动或联名内容。`;
  els.matchActions.innerHTML = `
    <article class="match-action-card match-action-primary" style="--deal-index:0">
      <span>${escapeHtml(state.mode === "brand" ? "先发合作卡" : geoLabel)}</span>
      <h3>${escapeHtml(state.mode === "brand" ? "先让对方看懂你" : `最值得先聊：${topBrand?.item?.name || "目标品牌"}`)}</h3>
      <p>${escapeHtml(state.mode === "brand" ? "用品牌资料、门店模型和合作诉求发起第一轮沟通，先确认空间条件和档期。" : `${coTheme} ${opportunity?.trial || firstMove}`)}</p>
    </article>
  `;
}

function renderIntentCard() {
  if (!els.intentCard || !els.intentOptions) return;
  const type = currentType();
  const options = currentIntentOptions();
  if (!options.includes(state.intent)) state.intent = options[0];
  const brandRows = recommendedBrands();
  const topBrand = selectedBrandRow(brandRows);
  const activeCase = selectedCase();
  const opportunity = state.mode === "commercial" && topBrand ? opportunityCard(topBrand, 0) : null;
  const copy = activeRoleCopy();
  const fromName = state.name || (state.mode === "brand" ? "未命名品牌" : "未命名项目");
  const toName = state.mode === "brand" ? (activeCase?.name || "目标商业场域") : (topBrand?.item?.name || "目标品牌伙伴");
  const targetRole = state.mode === "brand" ? "目标商业" : "目标品牌";
  const selfRole = state.mode === "brand" ? "品牌方" : "商业运营方";
  const coTheme = state.mode === "brand" ? state.intent : (opportunity?.theme || state.intent);
  const provide = state.mode === "brand"
    ? `品牌业态、门店面积模型、内容共创能力、${coTheme}方案和既有门店/社媒证据。`
    : `项目空间、客群场景、运营排期、媒体资源、${coTheme}落位条件和招商共创预算。`;
  const ask = state.mode === "brand"
    ? "希望商业方反馈可用空间、档期、费用模型、运营支持和可共创主题。"
    : "希望品牌方反馈开店模型、面积需求、内容资源、履约能力和试点合作方式。";
  const openingLine = state.mode === "brand"
    ? `我们希望以「${coTheme}」方式进入${toName}，先做一次轻量共创测试，再判断是否进入长期合作。`
    : `我们希望围绕「${coTheme}」和${toName}先做一次轻量共创测试，验证客群、内容和现场转化。`;
  const proofItems = state.mode === "brand"
    ? ["门店模型", "产品/空间图", "平台热度", "既有活动案例"]
    : ["项目基础资料", "空间照片/铺位条件", "运营排期", "预算边界"];
  const nextMove = state.mode === "brand"
    ? "发出意向卡后，等待商业方反馈空间条件和档期；双方都感兴趣再进入会客厅。"
    : "发出意向卡后，等待品牌方反馈门店模型和合作条件；双方都感兴趣再进入会客厅。";

  els.intentOptions.innerHTML = options.map(option => `
    <button class="${option === state.intent ? "active" : ""}" data-intent="${escapeHtml(option)}" type="button">${escapeHtml(option)}</button>
  `).join("");
  els.intentOptions.querySelectorAll("[data-intent]").forEach(button => {
    button.addEventListener("click", () => {
      state.intent = button.dataset.intent;
      renderIntentCard();
    });
  });

  if (els.intentLead) {
    els.intentLead.textContent = `${selfRole}先用一张合作卡完成首轮信息对齐：共创主题、资源条件和下一步约谈动作。`;
  }

  els.intentCard.innerHTML = `
    <div class="intent-card-head">
      <span>${escapeHtml(selfRole)} / ${escapeHtml(type.card?.name || "性格初读")}</span>
      <strong>${escapeHtml(coTheme)}</strong>
    </div>
    <h3>${escapeHtml(fromName)} → ${escapeHtml(toName)}</h3>
    <p>${escapeHtml(type.card?.name || "匹配判断")}：${escapeHtml(type.card?.line || `适合先判断与${copy.resultObject}的共创可能性。`)}</p>
    <div class="intent-message">
      <span>第一句话</span>
      <p>${escapeHtml(openingLine)}</p>
    </div>
    <div class="intent-route">
      <div>
        <span>我是谁</span>
        <strong>${escapeHtml(fromName)}</strong>
        <em>${escapeHtml(state.city || "未填写城市")} · ${escapeHtml(type.card?.name || "性格初读")}</em>
      </div>
      <i></i>
      <div>
        <span>${escapeHtml(targetRole)}</span>
        <strong>${escapeHtml(toName)}</strong>
        <em>${escapeHtml(state.mode === "brand" ? (activeCase?.archetype || "非标商业场域") : (topBrand?.item?.category || "新兴品牌伙伴"))}</em>
      </div>
    </div>
    <dl>
      <div>
        <dt>我能提供</dt>
        <dd>${escapeHtml(provide)}</dd>
      </div>
      <div>
        <dt>我想确认</dt>
        <dd>${escapeHtml(ask)}</dd>
      </div>
      <div>
        <dt>下一步动作</dt>
        <dd>${escapeHtml(nextMove)}</dd>
      </div>
    </dl>
    <div class="intent-proof">
      <strong>发送前准备的合作资料</strong>
      <div>
        ${proofItems.map(item => `<span>${escapeHtml(item)}</span>`).join("")}
      </div>
    </div>
    <div class="intent-flow">
      <span>生成意向卡</span>
      <span>对方确认意向</span>
      <span>资料互换</span>
      <span>约 15 分钟初聊</span>
    </div>
    <button class="share-intent" data-share-intent type="button">一键分享 / 复制意向卡</button>
    <small class="share-status" id="shareStatus">生成后可直接发给对方，作为第一轮沟通卡片。</small>
  `;
}

function currentIntentText() {
  const type = currentType();
  const brandRows = recommendedBrands();
  const topBrand = selectedBrandRow(brandRows);
  const activeCase = selectedCase();
  const opportunity = state.mode === "commercial" && topBrand ? opportunityCard(topBrand, 0) : null;
  const fromName = state.name || (state.mode === "brand" ? "未命名品牌" : "未命名项目");
  const toName = state.mode === "brand" ? (activeCase?.name || "目标商业场域") : (topBrand?.item?.name || "目标品牌伙伴");
  const coTheme = state.mode === "brand" ? state.intent : (opportunity?.theme || state.intent);
  const openingLine = state.mode === "brand"
    ? `我们希望以「${coTheme}」方式进入${toName}，先做一次轻量共创测试，再判断是否进入长期合作。`
    : `我们希望围绕「${coTheme}」和${toName}先做一次轻量共创测试，验证客群、内容和现场转化。`;
  return [
    `【商业 DNA 共创意向卡】`,
    `发起方：${fromName}`,
    `希望连接：${toName}`,
    `性格判断：${type.card?.name || "性格初读"}`,
    `共创主题：${coTheme}`,
    `第一句话：${openingLine}`,
    `所在城市：${state.city || "未填写"}`,
    `下一步：双方先互换关键资料，再约 15 分钟初聊。`,
  ].join("\n");
}

async function shareIntentCard() {
  const text = currentIntentText();
  const status = document.getElementById("shareStatus");
  try {
    if (navigator.share) {
      await navigator.share({ title: "商业 DNA 共创意向卡", text });
      if (status) status.textContent = "已打开分享面板。";
      return;
    }
    await navigator.clipboard.writeText(text);
    if (status) status.textContent = "已复制意向卡文本，可以直接发给对方。";
  } catch (error) {
    if (status) status.textContent = "暂时无法调用分享，请手动复制卡片内容。";
  }
}

function renderSampleCloud() {
  const targets = nonstandardTargets.length ? nonstandardTargets : cases.map(item => ({
    name: item.name,
    city: item.city,
    category: item.subtype,
    dnaCode: item.dna?.code,
  }));
  if (els.targetCountLabel) {
    els.targetCountLabel.textContent = `${targets.length} 个非标商业参考样本`;
  }
  els.sampleCloud.innerHTML = targets.slice(0, 34).map((item, index) => `
    <span class="${index % 5 === 0 ? "hot" : ""}" data-cloud-case="${escapeHtml(item.name)}">${escapeHtml(item.name)}</span>
  `).join("");
}

function renderDeck() {
  const active = selectedCase();
  els.coverCaseName.textContent = `${active.name} / ${active.archetype}`;
  const copy = activeRoleCopy();
  els.recommendHint.textContent = `${state.city || "未填写片区"} · ${state.asset} · ${state.space} · ${copy.resultObject}匹配`;

  els.miniDeck.innerHTML = state.recommended.slice(0, 3).map((row, index) => `
    <button class="mini-card ${row.item.id === state.selectedCaseId ? "active" : ""}" data-case="${row.item.id}" style="--deal-index:${index}">
      <span class="mini-thumb" style="background-image:url('${imageUrl(row.item)}')"></span>
      <span class="mini-copy">
        <i>${roleName(index)} / ${row.item.priority}</i>
        <strong>${escapeHtml(row.item.name)}</strong>
        <em>${escapeHtml(row.item.archetype)} · ${escapeHtml(priorityLabel(row.score))}</em>
      </span>
    </button>
  `).join("");
  els.miniDeck.querySelectorAll("[data-case]").forEach(button => {
    button.addEventListener("mouseenter", () => previewCase(button.dataset.case));
    button.addEventListener("focus", () => previewCase(button.dataset.case));
    button.addEventListener("click", () => {
      revealEvidenceForCase(button.dataset.case, false);
    });
  });
}

function revealEvidenceForCase(caseId, shouldScroll = true) {
  state.selectedCaseId = caseId;
  state.showEvidence = true;
  state.currentStage = "cases";
  renderAll();
  if (!shouldScroll) return;
  window.requestAnimationFrame(() => {
    document.getElementById("evidence")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}

function enterMatchFlow() {
  if (state.mode === "commercial") {
    state.showMatch = true;
    state.showBrands = true;
    state.currentStage = "match";
    renderAll();
    setStage("match");
    return;
  }
  enterIntentFlow();
}

function enterIntentFlow() {
  state.showIntent = true;
  state.currentStage = "intent";
  renderAll();
  setStage("intent");
}

function installProgressiveRevealObserver() {
  const matchSection = document.getElementById("match");
  if (!matchSection || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver(entries => {
    const enteredMatch = entries.some(entry => entry.isIntersecting);
    if (!enteredMatch || state.mode !== "commercial" || state.showBrands) return;
    state.showBrands = true;
    updateFlowVisibility();
  }, { threshold: 0.32 });
  observer.observe(matchSection);
}

function shortText(value, fallback, max = 76) {
  const text = String(value || fallback || "").replace(/\s+/g, " ").trim();
  if (text.length <= max) return text;
  return `${text.slice(0, max - 1)}…`;
}

function uniqueShortList(values, fallback, max = 54) {
  const picked = [];
  values.forEach(value => {
    const text = shortText(value, "", max);
    if (!text || picked.includes(text)) return;
    picked.push(text);
  });
  if (!picked.length && fallback) picked.push(shortText(fallback, "", max));
  return picked.slice(0, 3);
}

function projectActionKeywords() {
  const base = Array.from(state.scenes || []).slice(0, 2);
  if (/招商/.test(state.stage)) base.push("品牌试点");
  if (/空间/.test(state.stage)) base.push("空间场景");
  if (/运营/.test(state.stage)) base.push("复访内容");
  if (!base.length) base.push(displayOption(state.relation), state.brandGoal);
  return uniqueShortList(base, "本地复访 / 内容共创", 16);
}

function priorityLabel(score) {
  if (score >= 78) return "值得先聊";
  if (score >= 66) return "可先观察";
  return "待补条件";
}

function caseBorrowPoints(item, insight) {
  const presentation = item.presentation || {};
  const tags = [...(item.heroTags || []), ...(item.scenarioTags || [])].filter(Boolean).slice(0, 3);
  const points = uniqueShortList([
    ...(presentation.learnPoints || []),
    item.usable,
    tags.length ? `可借鉴：${tags.join(" / ")}` : "",
    insight.lookAt,
    insight.translate,
  ], "先拆空间、人群和运营动作。", 42);
  const defaults = state.mode === "brand"
    ? ["看它如何承接品牌内容。", "看它适合什么门店模型。", "看它怎样组织现场客群。"]
    : ["看空间怎样把人留下来。", "看品牌组合怎样制造复访。", "看活动和外摆怎样形成内容。"];
  defaults.forEach(item => {
    if (points.length >= 3) return;
    points.push(item);
  });
  return points.slice(0, 3);
}

function sampleCritique(item = selectedCase()) {
  const text = fullText(item || {});
  const isPark = /公园|滨水|草坪|自然|湖|河|绿地/.test(text) || /公园|滨水/.test(state.relation);
  const isCommunity = /社区|生活圈|复访|家庭|亲子/.test(text);
  const isMaker = /主理人|买手|原创|策展|首店|在地/.test(text);
  const isNight = /夜|酒|音乐|市集|外摆/.test(text);
  return [
    {
      dimension: "定位与客群",
      action: isCommunity
        ? "先把周边家庭、宠物、周末休闲人群分清楚，不要同时追求社区刚需和城市打卡。"
        : "先确认主要客群到底是本地复访、游客打卡还是圈层目的地，避免定位摇摆。",
      tag: "高 · 定位策划",
    },
    {
      dimension: "业态结构",
      action: isMaker
        ? "主理人品牌可以做调性，但要配稳定复访业态托底，避免只好看不留人。"
        : "先用餐饮、咖啡、亲子或宠物这类高频节点托住停留，再补内容型品牌。",
      tag: "中 · 招商落位",
    },
    {
      dimension: "空间与动线",
      action: "先找入口、转角、二层和边界空间的死角，把最强内容放在能被路过人群看见的位置。",
      tag: "中 · 空间方案",
    },
    {
      dimension: "招商与去化",
      action: "宁可阶段性空铺，也不要让低调性业态快速填满街面；先定负面清单和比例上限。",
      tag: "中 · 招商落位",
    },
    {
      dimension: "运营与内容",
      action: isNight
        ? "夜经济和市集不能只做开业热闹，要提前规划月度主题、品牌联名和社群复访。"
        : "活动不是一次性热闹，必须变成固定栏目、社群关系和品牌可参与的内容机制。",
      tag: "中 · 运营调改",
    },
    {
      dimension: "培育节奏",
      action: "非标商业要给内容和品牌培育期，别用成熟购物中心的短周期坪效压团队。",
      tag: "高 · 开业筹备",
    },
    {
      dimension: "自然 / 公园转化",
      action: isPark
        ? "公园人流不等于消费，要在公园和商业接口放咖啡、儿童、宠物、外摆等进入理由。"
        : "即使不是强自然场景，也要找到能让人停下来的外部理由，而不是只等自然客流。",
      tag: "中 · 运营调改",
    },
  ];
}

function caseInsight(row, index) {
  const item = row.item || {};
  const type = currentType();
  const projectType = type.card?.name || item.dna?.name || "当前策略类型";
  const relation = displayOption(state.relation);
  const tags = [...(item.heroTags || []), ...(item.scenarioTags || [])].filter(Boolean);
  const tagLine = tags.slice(0, 2).join(" / ");
  const rankText = roleName(index);
  const evidenceBase = item.usable || item.value || item.space || item.archetype || "看它如何组织空间、人群、品牌和运营节奏。";
  const translateBase = item.usable || item.value || item.space || "把它拆成空间组织、品牌组合、内容活动和运营节奏四个动作。";
  const warningBase = item.copyConditions || item.caution || item.pain || "只借鉴底层逻辑，不照搬城市条件、体量和品牌结构。";
  const sampleTypes = sampleTypeNames(item.applicableTypes || []);
  const playbook = samplePlaybook(item);
  const samePlaybook = playbook.key && playbook.key === type.displayKey;

  if (state.mode === "brand") {
    return {
      reason: `${rankText}：它和你的「${state.brandGoal}」在空间调性或客群场景上接近，可用来判断哪些非标商业真正懂你的品牌。`,
      lookAt: shortText(evidenceBase, "重点看它如何承接品牌内容、门店模型和到访人群。"),
      translate: shortText(translateBase, `把它转成品牌提案里的目标空间、共创主题和落地条件。`),
      warning: shortText(warningBase, "不要只看项目热度，要确认对方是否有运营排期、现场执行和共创预算。"),
      badge: tagLine,
    };
  }

  return {
    reason: samePlaybook
      ? `${rankText}：它和你的「${projectType}」打法接近，适合先看客群、招商和运营动作。`
      : `${rankText}：它和你的「${relation} / ${state.stage}」在形态或资源上有可比性，适合作补充参考。`,
    lookAt: shortText(evidenceBase, "重点看它如何组织空间、人群、品牌和内容。"),
    translate: shortText(translateBase, `转成你项目里的招商优先级、活动节奏和空间改造动作。`),
    warning: shortText(warningBase, "不要照搬城市级别、客流基础和成熟品牌资源。"),
    badge: sampleTypes || tagLine,
  };
}

function renderCases() {
  const rankedRows = state.recommended.slice(0, 4);
  const selectedRowIndex = rankedRows.findIndex(row => row.item.id === state.selectedCaseId);
  const selectedItem = cases.find(item => item.id === state.selectedCaseId);
  const caseRows = selectedRowIndex > 0
    ? [rankedRows[selectedRowIndex], ...rankedRows.filter((_, index) => index !== selectedRowIndex)]
    : selectedRowIndex === -1 && selectedItem
      ? [{ item: selectedItem, score: scoreCase(selectedItem) }, ...rankedRows].slice(0, 4)
      : rankedRows;
  const mainRow = caseRows[0];
  const type = currentType();
  if (els.caseSectionTitle) {
    els.caseSectionTitle.textContent = mainRow
      ? (state.mode === "brand" ? `适合你的商业样本：${mainRow.item.name}` : `最像你的参考样本：${mainRow.item.name}`)
      : (state.mode === "brand" ? "适合你的商业样本" : "最像你的参考样本");
  }
  if (els.recommendHint) {
    els.recommendHint.textContent = state.personaCaseCode
      ? `基于 ${state.personaCaseCode} 打法 DNA，先看相同点，再看不能照搬的条件。`
      : state.mode === "brand"
        ? "左右滑动查看相近商业样本。"
        : "左右滑动查看相近参考样本。";
  }
  if (els.caseNext) {
    els.caseNext.href = "#evidence";
    els.caseNext.textContent = state.mode === "brand" ? "查看商业样本解读" : "查看操盘解读";
  }
  if (!caseRows.length) {
    els.caseGrid.classList.remove("is-focused");
    els.caseGrid.innerHTML = `
      <article class="empty-state">
        <strong>暂时没有足够接近的参考样本</strong>
        <p>可以先调整城市能级、空间关系，或展开细化偏好补充更多条件。</p>
      </article>
    `;
    return;
  }
  els.caseGrid.classList.add("is-focused");
  const activeIndex = Math.max(0, caseRows.findIndex(row => row.item.id === state.selectedCaseId));
  els.caseGrid.innerHTML = `
    <div class="case-main-carousel" data-case-carousel aria-label="左右滑动查看参考样本">
      ${caseRows.map((row, index) => {
        const item = row.item;
        const presentation = item.presentation || {};
        const insight = caseInsight(row, index);
        const borrowPoints = caseBorrowPoints(item, insight);
        return `
          <article class="case-card case-card-main case-slide ${index === activeIndex ? "is-active" : ""}" data-case="${escapeHtml(item.id)}" tabindex="0" role="button" style="--deal-index:${index}">
            <div class="case-image" style="background-image:url('${imageUrl(item)}')">
              <span class="card-rank">${escapeHtml(roleName(index))}</span>
              <span class="fit-pill">${escapeHtml(item.city || "非标商业")}</span>
            </div>
            <div class="case-body">
              <p class="eyebrow">${escapeHtml(presentation.valueTitle || item.archetype || item.dna?.name || "参考样本")}</p>
              <h3>${escapeHtml(item.name)}</h3>
              <p class="case-fitline">${escapeHtml(sampleMatchLine(item, type))}</p>
              <p class="case-reason">${escapeHtml(presentation.oneLineValue || insight.reason)}</p>
              <div class="case-borrow-block">
                <strong>${state.mode === "brand" ? "适合你看的点" : "可借鉴动作"}</strong>
                <ul>
                  ${borrowPoints.map(point => `<li>${escapeHtml(point)}</li>`).join("")}
                </ul>
              </div>
              <p class="case-risk"><span>先确认</span>${escapeHtml(shortText(presentation.risk || item.copyConditions || item.caution || item.pain || insight.warning, "城市条件、运营强度和品牌资源是否能承接。", 64))}</p>
              <span class="case-evidence-cta">查看操盘解读</span>
            </div>
          </article>
        `;
      }).join("")}
    </div>
    ${caseRows.length > 1 ? `
      <div class="case-carousel-meta">
        <span>左右滑动查看更多参考</span>
        <strong data-case-count>${activeIndex + 1}/${caseRows.length}</strong>
      </div>
    ` : ""}
    ${state.mode === "commercial" && !state.personaCaseCode ? `
      <button class="optional-match-button" data-enter-match type="button">
        <span>BRAND MATCH</span>
        <strong>进入品牌共创匹配</strong>
        <em>用当前项目 DNA 继续筛选适合共创的品牌方向</em>
      </button>
    ` : ""}
  `;
  els.caseGrid.querySelectorAll("[data-case]").forEach(button => {
    button.addEventListener("mouseenter", () => previewCase(button.dataset.case));
    button.addEventListener("focus", () => previewCase(button.dataset.case));
    button.addEventListener("click", () => {
      revealEvidenceForCase(button.dataset.case, true);
    });
    button.addEventListener("keydown", event => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      revealEvidenceForCase(button.dataset.case, true);
    });
  });
  const carousel = els.caseGrid.querySelector("[data-case-carousel]");
  if (carousel) {
    const slides = Array.from(carousel.querySelectorAll("[data-case]"));
    const countNode = els.caseGrid.querySelector("[data-case-count]");
    const syncActiveSlide = () => {
      const carouselBox = carousel.getBoundingClientRect();
      const carouselCenter = carouselBox.left + carouselBox.width / 2;
      const activeSlide = slides
        .map(slide => {
          const box = slide.getBoundingClientRect();
          return { slide, distance: Math.abs(box.left + box.width / 2 - carouselCenter) };
        })
        .sort((a, b) => a.distance - b.distance)[0]?.slide;
      if (!activeSlide) return;
      const index = slides.indexOf(activeSlide);
      slides.forEach(slide => slide.classList.toggle("is-active", slide === activeSlide));
      if (countNode) countNode.textContent = `${index + 1}/${slides.length}`;
      if (activeSlide.dataset.case === state.selectedCaseId) return;
      state.selectedCaseId = activeSlide.dataset.case;
      previewCase(state.selectedCaseId);
      if (state.showEvidence) renderEvidence();
    };
    let scrollTimer;
    carousel.addEventListener("scroll", () => {
      window.clearTimeout(scrollTimer);
      scrollTimer = window.setTimeout(syncActiveSlide, 90);
    }, { passive: true });
    const activeSlide = slides.find(slide => slide.dataset.case === state.selectedCaseId);
    if (activeSlide && activeIndex > 0) {
      window.requestAnimationFrame(() => activeSlide.scrollIntoView({ block: "nearest", inline: "start" }));
    }
  }
}

function seedBrandMeta(item = {}) {
  const verification = item.verification || "";
  const confirmed = /用户确认|已补/.test(verification);
  const heat = item.heatScore || 58;
  const proof = item.nonstandardProofScore || 56;
  const recent = item.recentSignalScore || 55;
  const evidenceScore = Math.round(heat * .4 + proof * .38 + recent * .22);
  const evidenceLabel = evidenceScore >= 82 ? "资料较完整" : evidenceScore >= 68 ? "资料可参考" : "资料待完善";
  const sourceStatus = item.sourceStatus || (confirmed ? "种子品牌·已复核" : "种子品牌");
  const claimStatus = item.claimStatus || "暂未入驻";
  const proofText = item.proofLink || item.dpUrl || item.xhsUrl || item.mediaUrl || item.heatStatus || "资料待完善";
  return {
    sourceStatus,
    claimStatus,
    evidenceLabel,
    evidenceScore,
    proofText,
  };
}

function renderBrands() {
  const type = currentType();
  const rows = recommendedBrands();
  if (!els.brandGrid) return;
  if (state.selectedBrandId && !rows.some(row => row.item.id === state.selectedBrandId)) {
    state.selectedBrandId = null;
  }
  els.brandGrid.classList.add("is-focused");
  els.brandHint.textContent = "先看一个最值得先聊的对象：为什么适合、先怎么试、开聊前要确认什么。";
  if (!rows.length) {
    els.brandGrid.classList.remove("is-focused");
    els.brandGrid.innerHTML = `
      <article class="empty-state">
        <strong>暂时没有可用共创机会</strong>
        <p>可以调整目标业态或区域后重新生成候选品牌。</p>
      </article>
    `;
    return;
  }
  const mainRow = selectedBrandRow(rows);
  const main = mainRow.item;
  const mainOpportunity = opportunityCard(mainRow, 0);
  const otherRows = rows.filter(row => row.item.id !== main.id).slice(0, 3);
  if (els.brandSectionTitle) {
    els.brandSectionTitle.textContent = `推荐共创对象：${main.name}`;
  }
  els.brandGrid.innerHTML = `
    <article class="brand-card opportunity-card opportunity-primary is-selected" data-brand-id="${escapeHtml(main.id)}" style="--deal-index:0">
      <div class="brand-card-head">
        <span>${escapeHtml(priorityLabel(mainRow.total))}</span>
        <em>${escapeHtml(mainOpportunity.geoCopy)}</em>
      </div>
      <h3>${escapeHtml(main.name)}</h3>
      <p class="opportunity-target">${escapeHtml(main.city)} · ${escapeHtml(main.category)} · ${escapeHtml(main.brandRole || "共创品牌")}</p>
      <p class="opportunity-lead">适合围绕「${escapeHtml(mainOpportunity.theme)}」先做轻量试点。</p>
      <div class="opportunity-points">
        <div>
          <span>为什么</span>
          <p>${escapeHtml(mainOpportunity.why)}</p>
        </div>
        <div>
          <span>先怎么试</span>
          <p>${escapeHtml(mainOpportunity.trial)}</p>
        </div>
        <div>
          <span>先确认</span>
          <p>${escapeHtml(shortText(mainOpportunity.verify, "先确认门店模型、面积需求和履约能力。", 64))}</p>
        </div>
      </div>
      <div class="opportunity-actions">
        <button data-intent-brand="${escapeHtml(main.id)}" type="button">生成共创意向卡</button>
      </div>
    </article>
    ${otherRows.length ? `
      <details class="opportunity-more">
        <summary>查看其他候选对象</summary>
        <div class="opportunity-short-list">
          ${otherRows.map((row, index) => {
            const item = row.item;
            const opportunity = opportunityCard(row, index + 1);
            return `
              <button class="opportunity-mini-row" data-select-brand="${escapeHtml(item.id)}" type="button">
                <span>${escapeHtml(priorityLabel(row.total))}</span>
                <strong>${escapeHtml(item.name)}</strong>
                <em>${escapeHtml(item.city)} · ${escapeHtml(opportunity.theme)}</em>
              </button>
            `;
          }).join("")}
        </div>
      </details>
    ` : ""}
  `;
}

function renderEvidence() {
  const active = selectedCase();
  const critique = sampleCritique(active);
  const presentation = active?.presentation || {};
  const observationRows = Array.isArray(presentation.learnPoints) && presentation.learnPoints.length
    ? [
      ...presentation.learnPoints.map((action, index) => ({
        dimension: `可借鉴 ${String(index + 1).padStart(2, "0")}`,
        action,
      })),
      ...(presentation.notFor ? [{ dimension: "不适合照搬", action: presentation.notFor }] : []),
    ]
    : critique.slice(0, 5);
  const controllable = critique.slice(0, 4);
  const focusItems = controllable.map((item, index) => ({ ...item, brief: focusActionBrief(item.action, index) }));
  const sceneLinks = prioritizeSceneLinks(sceneEvidenceLinks(active)).slice(0, 6);
  const coverCode = projectCoverCode(active);
  const core = operationCore(active, focusItems);
  els.evidenceGrid.innerHTML = `
    <article class="operation-brief-card operation-core-card">
      <span>DNA操盘解读</span>
      <h3>${escapeHtml(active?.name || "参考样本")}项目核心判断</h3>
      <div class="operation-core design-cover" data-mark="${escapeHtml(coverCode)}" style="${sceneVisualStyle(active, 0, "focus")}">
        <div class="operation-core-head">
          <div class="operation-statement">${operationStatementHtml(core.statement)}</div>
        </div>
        <div class="operation-core-actions">
          ${core.cards.map((item, index) => `
            <div>
              <i>${String(index + 1).padStart(2, "0")}</i>
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.body)}</span>
            </div>
          `).join("")}
        </div>
      </div>
    </article>
    <article class="operation-detail-card">
      <span>操盘观察</span>
      <h3>具体看这几件事</h3>
      <div class="operation-observation-list">
        ${observationRows.map(item => `
          <div>
            <strong>${escapeHtml(item.dimension)}</strong>
            <p>${escapeHtml(shortText(item.action, "看项目如何把空间、人群、品牌和运营接起来。", 56))}</p>
          </div>
        `).join("")}
      </div>
    </article>
  ` + (sceneLinks.length ? sceneLinks.map((link, index) => {
    const linkStatus = link.linkStatus || "可查看";
    const isPending = /待|失效/.test(linkStatus);
    const isStale = isStaleSceneLink(link);
    const href = mobileFirstUrl(link);
    const statusText = isPending ? "待复核" : isStale ? "较早资料" : isMobileFirstLink(link, href) ? "移动端优先" : "网页资料";
    const sceneTag = link.sceneTag || "现场线索";
    const sceneTitle = sceneVisualTitle(sceneTag);
    const sceneHook = sceneShortHook(link);
    const scenePoint = scenePointLine(link);
    const content = `
      <figure class="scene-thumb design-cover" data-mark="${escapeHtml(coverCode)}" style="${sceneVisualStyle(active, index, sceneTag)}${sceneToneStyle(sceneTag)}">
        <i>${String(index + 1).padStart(2, "0")}</i>
        <span>${escapeHtml(sceneTag)}</span>
        <strong>${escapeHtml(sceneTitle)}</strong>
        <p class="scene-thumb-note">${escapeHtml(sceneHook)}</p>
        <em>${escapeHtml(statusText)}</em>
      </figure>
      <div class="scene-card-body">
        <div class="scene-link-meta">
          <span>${escapeHtml(link.source || "来源整理中")}</span>
          <em>${escapeHtml(link.publishDate || "日期整理中")}</em>
        </div>
        <strong>${escapeHtml(sceneCardTitle(link, active))}</strong>
        <blockquote>${escapeHtml(scenePoint)}</blockquote>
        <small>${href ? "查看外部线索 →" : "外部线索待补"}</small>
      </div>
    `;
    return href
      ? `<a class="evidence-card scene-link-card ${isPending ? "is-pending" : ""} ${isStale ? "is-stale" : ""}" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${content}</a>`
      : `<article class="evidence-card scene-link-card is-pending">${content}</article>`;
  }).join("") : `
    <article class="evidence-card scene-link-card is-pending">
      <figure class="scene-thumb" style="${sceneVisualStyle(active, 0)}${sceneToneStyle("现场线索")}">
        <span>现场线索</span>
        <em>待补充</em>
      </figure>
      <div class="scene-card-body">
        <div class="scene-link-meta">
          <span>${escapeHtml(active?.name || "参考样本")}</span>
          <em>线索整理中</em>
        </div>
        <strong>这个样本的外部场景线索还没写入</strong>
        <p>当前先看上方操盘解读，后续补入高质量现场线索。</p>
        <blockquote>先保留操盘判断，外部线索等复核后再导入。</blockquote>
        <small>外部线索待补</small>
      </div>
    </article>
  `) + `
    <p class="operation-disclaimer operation-disclaimer-bottom">注：以上为基于公开资料与样本库的策略推演，仅用于对标参考；不代表项目方官方意见，也不构成投资、招商或经营承诺。</p>
  `;
}

function operationStatementHtml(statement = "") {
  const text = String(statement || "").replace(/。+$/, "").trim();
  const match = text.match(/^(.*?)，?核心价值不是(.+?)，而是(.+)$/);
  if (match) {
    const lead = match[1].trim();
    const notPart = match[2].trim();
    const butPart = match[3].trim();
    return `
      <span class="statement-kicker">一句话</span>
      <p>${escapeHtml(lead)}</p>
      <div class="statement-contrast">
        <div><b>不是</b><span>${escapeHtml(notPart)}</span></div>
        <div><b>而是</b><span>${escapeHtml(butPart)}</span></div>
      </div>
    `;
  }
  return `<span class="statement-kicker">一句话</span><p>${escapeHtml(text)}</p>`;
}

function sceneEvidenceLinks(item = selectedCase()) {
  const matched = sceneEvidenceItems.filter(link => sameProjectName(link.projectName, item?.name));
  if (matched.length) {
    return matched.slice(0, 8).map(link => ({
      ...link,
      projectId: item?.id || link.projectId || "",
      projectName: link.projectName || item?.name || "参考样本",
    }));
  }
  if (Array.isArray(item?.sceneLinks) && item.sceneLinks.length) return item.sceneLinks.slice(0, 8);
  const projectId = item?.id || "";
  const projectName = item?.name || "参考样本";
  if (!projectId || !projectName) return [];
  return [];
}

function operationCore(item = selectedCase()) {
  const text = fullText(item || {});
  const name = item?.name || "这个样本";
  const presentation = item?.presentation || {};
  if (presentation.valueTitle && presentation.oneLineValue) {
    const mechanism = (presentation.mechanism || [])
      .map(row => `${row.stage}：${row.body}`)
      .join("；");
    return {
      statement: `${presentation.valueTitle}。${presentation.oneLineValue}`,
      cards: [
        { title: "解决什么问题", body: presentation.businessProblem || item?.value || "" },
        { title: "怎么成立", body: mechanism || item?.usable || "" },
        { title: "最适合谁看", body: presentation.bestFor || item?.bestFor || "" },
      ],
    };
  }
  const profile = operationProfile(item);
  const statement = profile.statement || generatedOperationStatement(item);
  return {
    statement,
    cards: [
      { title: "类型逻辑", body: profile.logic || operationTypeLogic(item, text) },
      { title: "复制门槛", body: profile.threshold || operationCopyThreshold(item) },
      { title: "最适合谁看", body: profile.bestFor || item?.bestFor || operationBestFor(item, text) },
    ],
  };
}

function operationProfile(item = selectedCase()) {
  const profiles = {
    "重庆光环购物公园": {
      statement: "把“公园”搬进盒子的室内森林样本，核心价值不是植物数量，而是用自然景观重新组织多楼层停留和消费。",
      logic: "把景观变成楼层之间的公共内容，而不是只做中庭打卡。",
      threshold: "中高门槛：依赖高投入景观、植物维护和多楼层运营能力。",
      bestFor: "适合盒子商业、存量 Mall，以及想用室内景观缝合楼层的项目。",
    },
    "重庆光环花园城": {
      statement: "临大型城市公园的景观 IP 样本，核心价值不是造一个好看的公园界面，而是把景观、首访和日常消费接起来。",
      logic: "先用景观制造首访，再用餐饮、亲子和活动承接复访。",
      threshold: "中高门槛：依赖大体量、公园界面和景观 IP 投入。",
      bestFor: "适合临大型公园、想用景观 IP 打开声量的城市综合体。",
    },
    "嘉佰汇": {
      statement: "文保江岸商业的公园策展样本，核心价值不是首店数量，而是把月台公园、历史空间和餐饮内容组织成停留理由。",
      logic: "把稀缺资源排成一条可停留的路径，而不是把首店堆成名单。",
      threshold: "中门槛：依赖文保、滨江和月台公园资源；普通项目更适合学组织方法。",
      bestFor: "适合有文保、工业遗产或滨水资源，想做公园化商业更新的项目。",
    },
    "光谷KIC PARK": {
      statement: "知识社区里的零距离公园商业样本，核心价值不是绿地面积，而是把科创人群、宠物运动和日常社交接成复访场景。",
      logic: "用低门槛场景承接周边人群，再把复访交给日常节点。",
      threshold: "中门槛：依赖科创/高校客群、公园配套和持续社群运营。",
      bestFor: "适合科创园区、高校周边和知识社区型商业。",
    },
    "鸿寿坊": {
      statement: "社区更新里的精致烟火样本，核心价值不是里弄外壳，而是把附近人的日常消费做得更有街区气质。",
      logic: "先服务附近人，再让烟火气变成外部打卡理由。",
      threshold: "中门槛：依赖社区密度、里弄肌理和运营方品控能力。",
      bestFor: "适合小体量社区更新、烟火气街区和存量生活圈改造。",
    },
  };
  return profiles[item?.name] || {};
}

function generatedOperationStatement(item = selectedCase()) {
  const text = fullText(item || {});
  const archetype = item?.archetype || item?.subtype || "非标商业";
  if (/文保|历史|旧址|里弄/.test(text)) {
    return `${archetype}样本，核心价值不是复刻老建筑，而是把城市记忆转成今天可停留、可消费、可运营的内容。`;
  }
  if (/森林|景观|装置|花园|IP/.test(text)) {
    return `${archetype}样本，核心价值不是制造打卡画面，而是用景观重新组织停留、路径和消费。`;
  }
  if (/公园|滨水|草坪|湖|河/.test(text)) {
    return `${archetype}样本，核心价值不是靠近公园，而是把自然人流转成商业停留和复访。`;
  }
  if (/主理人|首店|买手|原创/.test(text)) {
    return `${archetype}样本，核心价值不是品牌名单，而是让主理人内容、客群和运营节奏彼此咬合。`;
  }
  return `${archetype}样本，核心价值不是形式相似，而是空间、人群、品牌和运营之间的组织方式。`;
}

function operationTypeLogic(item = selectedCase(), text = fullText(item || {})) {
  if (/森林|室内自然|盒子|多楼层/.test(text)) return "用强景观做公共内容，把楼层动线、停留点和消费入口重新组织。";
  if (/文保|历史|旧址|里弄/.test(text)) return "用历史空间建立记忆点，再用当代消费和内容运营激活复访。";
  if (/公园|滨水|草坪|湖|河/.test(text)) return "把自然界面从背景变成入口、停留点和活动发生地。";
  if (/主理人|首店|买手|原创/.test(text)) return "用品牌调性建立识别度，再用高频内容和日常消费托底。";
  return "把空间资源转成可被用户理解、停留和复访的商业内容。";
}

function operationCopyThreshold(item = selectedCase()) {
  const threshold = item?.copyThreshold ? `${item.copyThreshold}门槛` : "门槛待判断";
  const conditions = item?.copyConditions || operationBoundary(item);
  return `${threshold}：${conditions}`;
}

function operationBestFor(item = selectedCase(), text = fullText(item || {})) {
  if (/森林|室内自然|盒子/.test(text)) return "适合盒子商业、室内更新和多楼层动线较弱的项目。";
  if (/文保|历史|旧址|里弄/.test(text)) return "适合历史街区、工业遗存和城市更新项目。";
  if (/公园|滨水|草坪|湖|河/.test(text)) return "适合贴近公园、滨水或拥有开放公共界面的项目。";
  if (/主理人|首店|买手|原创/.test(text)) return "适合想做主理人品牌、首店和内容型招商的项目。";
  return "适合寻找非标商业打法参照的项目。";
}

function operationBoundary(item = selectedCase()) {
  const text = fullText(item || {});
  if (/嘉佰汇/.test(item?.name || "")) return "文保、滨江和月台公园是稀缺资源；可学组织方法，别照搬条件。";
  if (/文保|历史|旧址|里弄/.test(text)) return "历史资源不可复制，能学的是叙事、动线和业态落位。";
  if (/森林|景观|装置|花园|IP/.test(text)) return "景观投入和维护门槛高，小项目先学节点组织。";
  if (/滨水|公园|草坪|湖|河/.test(text)) return "自然界面不是消费保证，要先确认入口距离和可停留节点。";
  if (/主理人|首店|买手/.test(text)) return "圈层资源需要长期运营，不能只靠招商名单。";
  return "先学打法，不直接复制体量、投资和城市资源。";
}

function focusActionBrief(action = "", index = 0) {
  const presets = [
    "先锁定谁会反复来",
    "看品牌能否托住复访",
    "找入口、转角和死角",
    "宁可慢招商也别填错",
  ];
  const text = String(action || "").replace(/[；;。].*$/, "").replace(/^先/, "先").trim();
  if (!text) return presets[index] || "先看可借鉴动作";
  return shortText(text, presets[index], 18);
}

function focusBoardSentence(item = {}, focusItems = []) {
  const labels = focusItems.map(focus => focus.dimension).slice(0, 3).join(" / ");
  if (labels) return `先看 ${labels}，外部现场线索复核后再补。`;
  return item?.usable || "先看现场感，再判断哪些动作能借鉴。";
}

function prioritizeSceneLinks(links = []) {
  return [...links].sort((a, b) => sceneEvidenceScore(b) - sceneEvidenceScore(a));
}

function sceneEvidenceScore(link = {}) {
  const qualityScore = { A: 24, R: 22, B: 14, C: 5 }[link.qualityLevel] || 8;
  const year = publishYear(link.publishDate);
  let recencyScore = 0;
  if (year >= 2026) recencyScore = 14;
  else if (year === 2025) recencyScore = 12;
  else if (year === 2024) recencyScore = 8;
  else if (year === 2023) recencyScore = 3;
  else if (year && year <= 2022) recencyScore = -8;
  const fieldScore = /复制边界|空间与动线|自然\/公园转化|运营与内容/.test(link.sceneTag || "") ? 8 : 3;
  const sourceScore = /小红书|大众点评|高德|携程|Trip|Klook/.test(link.source || "") ? 8 : 0;
  const pendingPenalty = /待核验|失效/.test(link.linkStatus || "") ? -4 : 0;
  return qualityScore + recencyScore + fieldScore + sourceScore + pendingPenalty;
}

function publishYear(value = "") {
  const match = String(value).match(/20\d{2}/);
  return match ? Number(match[0]) : 0;
}

function isStaleSceneLink(link = {}) {
  const year = publishYear(link.publishDate);
  return Boolean(year && year <= 2022);
}

function mobileFirstUrl(link = {}) {
  if (link.mobileUrl) return String(link.mobileUrl).trim();
  const url = String(link.url || "").trim();
  if (!url) return "";
  if (/dianping\.com\/search\/keyword\/0\/0_/.test(url)) {
    const keyword = decodeURIComponent(url.split("0_").pop() || "");
    return `https://m.dianping.com/search/keyword/1/0_${encodeURIComponent(keyword)}`;
  }
  if (/www\.dianping\.com/.test(url)) return url.replace("https://www.dianping.com", "https://m.dianping.com");
  if (/ctrip\.com|trip\.com|xiaohongshu\.com|klook\.com|tripadvisor\.com/.test(url)) return url;
  return url;
}

function isMobileFirstLink(link = {}, href = "") {
  if (link.deviceType === "移动端优先") return true;
  return /小红书|大众点评|高德|携程|Trip|Klook|Tripadvisor/.test(link.source || "") || /\/\/m\.|html5|mobile|moments|search_result/.test(href);
}

function sceneVisualStyle(item = selectedCase(), index = 0, sceneTag = "") {
  const theme = projectCoverTheme(item, sceneTag, index);
  return [
    `--cover-bg:${theme.bg}`,
    `--cover-bg-2:${theme.bg2}`,
    `--cover-accent:${theme.accent}`,
    `--cover-accent-2:${theme.accent2}`,
    `--cover-ink:${theme.ink}`,
    `--cover-line:${theme.line}`,
  ].join(";") + ";";
}

function projectCoverTheme(item = selectedCase(), sceneTag = "", index = 0) {
  const key = normalizedProjectName(`${item?.name || "sample"}${item?.city || ""}`);
  const seed = [...key].reduce((sum, char) => sum + char.charCodeAt(0), index * 17);
  const palettes = [
    { bg: "#fff3c4", bg2: "#ffd7d7", accent: "#ff4f3a", accent2: "#2f63ff", ink: "#111", line: "rgba(17,17,17,.14)" },
    { bg: "#eaf1ff", bg2: "#fff2cf", accent: "#2f63ff", accent2: "#ffd13d", ink: "#111", line: "rgba(47,99,255,.16)" },
    { bg: "#f5efe1", bg2: "#dff6ec", accent: "#26c675", accent2: "#ff7a2f", ink: "#111", line: "rgba(17,17,17,.13)" },
    { bg: "#f8e6ff", bg2: "#e6f7ff", accent: "#9a62ff", accent2: "#26c6c9", ink: "#111", line: "rgba(154,98,255,.14)" },
    { bg: "#fff8eb", bg2: "#e9e4d7", accent: "#111", accent2: "#ffd13d", ink: "#111", line: "rgba(17,17,17,.16)" },
  ];
  const base = palettes[seed % palettes.length];
  const tone = sceneTone(sceneTag);
  if (sceneTag && !/focus/.test(sceneTag)) {
    return {
      ...base,
      accent: tone.bg,
      accent2: base.accent2,
    };
  }
  return base;
}

function projectCoverCode(item = selectedCase()) {
  const name = String(item?.name || "DNA")
    .replace(/The\s*Commons/i, "Commons")
    .replace(/Namba\s*Parks/i, "Namba")
    .replace(/MIYASHITA\s*PARK/i, "Miyashita")
    .replace(/[（(].*?[）)]/g, "")
    .replace(/[·・\s._/-]/g, "")
    .trim();
  const latin = name.match(/[A-Za-z]{3,}/);
  if (latin) return latin[0].slice(0, 4).toUpperCase();
  return name.slice(0, 3) || "DNA";
}

function sceneVisualTitle(sceneTag = "") {
  if (/定位|客群/.test(sceneTag)) return "看谁会反复来";
  if (/业态/.test(sceneTag)) return "看品牌怎么组";
  if (/空间|动线/.test(sceneTag)) return "看入口和路径";
  if (/招商|去化/.test(sceneTag)) return "看铺位怎么落";
  if (/运营|内容/.test(sceneTag)) return "看活动是否持续";
  if (/培育/.test(sceneTag)) return "看成长周期";
  if (/自然|公园/.test(sceneTag)) return "看公园怎么转化";
  if (/边界|风险|复制/.test(sceneTag)) return "看哪些不能照搬";
  return "看现场证据";
}

function sceneShortHook(link = {}) {
  const tag = link.sceneTag || "";
  if (/定位|客群/.test(tag)) return "看谁真实到场、谁愿意复访。";
  if (/业态/.test(tag)) return "看品牌组合是不是服务定位。";
  if (/空间|动线/.test(tag)) return "看人从哪里进、在哪里停。";
  if (/招商|去化/.test(tag)) return "看首店背后有没有复访支撑。";
  if (/运营|内容/.test(tag)) return "看热闹能不能变成固定栏目。";
  if (/培育/.test(tag)) return "看内容和品牌有没有生长期。";
  if (/自然|公园/.test(tag)) return "公园只是入口，关键看消费接口。";
  if (/边界|风险|复制/.test(tag)) return "查差评、空铺和不能照搬的条件。";
  return shortText(cleanSceneText(link.oneLineSummary), "现场线索待补。", 24);
}

function scenePointLine(link = {}) {
  const tag = link.sceneTag || "";
  if (/定位|客群/.test(tag)) return "重点看客群是否清楚，而不是只看现场热闹。";
  if (/业态/.test(tag)) return "重点看业态能不能托住日常，不只看调性。";
  if (/空间|动线/.test(tag)) return "重点看入口、转角和停留点，别只看照片好不好看。";
  if (/招商|去化/.test(tag)) return "重点看品牌是否服务定位，不只看首店数量。";
  if (/运营|内容/.test(tag)) return "重点看开业之后有没有持续内容。";
  if (/培育/.test(tag)) return "重点看品牌和内容是否有成长周期。";
  if (/自然|公园/.test(tag)) return "重点看公园人流有没有被接进商业。";
  if (/边界|风险|复制/.test(tag)) return "重点查负面评价和稀缺条件，别照搬。";
  return shortText(cleanSceneText(link.operationNote || link.oneLineSummary), "这条只作现场核验入口。", 42);
}

function sceneCardTitle(link = {}, item = selectedCase()) {
  let title = String(link.title || "原平台线索").trim();
  const project = String(item?.name || link.projectName || "").trim();
  if (/大众点评|小红书|高德/.test(link.source || "") && /搜索入口/.test(title)) {
    return `${project || "项目"} ${link.source}入口`;
  }
  if (project) title = title.replace(project, "").replace(/[·｜|：:]+$/, "").trim();
  title = title.replace(/^\W+|\W+$/g, "").replace(/\s+/g, " ");
  return shortText(title, link.source ? `${link.source}线索` : "原平台线索", 18);
}

function cleanSceneText(value = "") {
  return String(value || "")
    .replace(/^线索(强调|提到|显示|用于核验|用于后续核验)/, "")
    .replace(/^证明(项目|它)?/, "")
    .replace(/用于核验/g, "看")
    .replace(/操盘上要/g, "要")
    .replace(/借鉴时要/g, "要")
    .replace(/后续要看/g, "看")
    .replace(/这条先作为用户场景入口。?/, "")
    .replace(/[。；;].*$/, "")
    .trim();
}

function sceneToneStyle(sceneTag = "") {
  const tone = sceneTone(sceneTag);
  return `--scene-accent:${tone.bg};--scene-accent-ink:${tone.ink};--scene-accent-soft:${tone.soft};`;
}

function sceneTone(sceneTag = "") {
  if (/定位|客群/.test(sceneTag)) return { bg: "#2f63ff", ink: "#fff8eb", soft: "rgba(47,99,255,.18)" };
  if (/业态/.test(sceneTag)) return { bg: "#ff7a2f", ink: "#111", soft: "rgba(255,122,47,.18)" };
  if (/空间|动线/.test(sceneTag)) return { bg: "#26c6c9", ink: "#111", soft: "rgba(38,198,201,.18)" };
  if (/招商|去化/.test(sceneTag)) return { bg: "#ffd13d", ink: "#111", soft: "rgba(255,209,61,.22)" };
  if (/运营|内容/.test(sceneTag)) return { bg: "#9a62ff", ink: "#fff8eb", soft: "rgba(154,98,255,.18)" };
  if (/培育/.test(sceneTag)) return { bg: "#9b9a92", ink: "#111", soft: "rgba(155,154,146,.18)" };
  if (/自然|公园/.test(sceneTag)) return { bg: "#42d86b", ink: "#111", soft: "rgba(66,216,107,.18)" };
  if (/边界|风险|复制/.test(sceneTag)) return { bg: "#ff4d3d", ink: "#111", soft: "rgba(255,77,61,.18)" };
  return { bg: "#ffd13d", ink: "#111", soft: "rgba(255,209,61,.18)" };
}

function normalizedProjectName(value = "") {
  return String(value)
    .toLowerCase()
    .replace(/the\s*commons/g, "thecommons")
    .replace(/namba\s*parks/g, "nambaparks")
    .replace(/miyashita\s*park/g, "miyashitapark")
    .replace(/kic\s*park/g, "kicpark")
    .replace(/gate\s*m/g, "gatem")
    .replace(/[\s·・.\-_/（）(),，]/g, "");
}

function sameProjectName(left = "", right = "") {
  const a = normalizedProjectName(left);
  const b = normalizedProjectName(right);
  if (!a || !b) return false;
  return a === b || a.includes(b) || b.includes(a);
}

const profileKey = "dna_profile_v1";

function readProfileStore() {
  try {
    return JSON.parse(localStorage.getItem(profileKey) || "{}");
  } catch {
    return {};
  }
}

function writeProfileStore(next) {
  try {
    localStorage.setItem(profileKey, JSON.stringify(next));
  } catch {
    /* localStorage 不可用（隐私模式/内嵌）时静默降级，不阻断流程 */
  }
}

function appendProfileRecord(kind, data) {
  const store = readProfileStore();
  const records = Array.isArray(store.results) ? store.results : [];
  records.unshift({ kind, time: new Date().toISOString(), ...data });
  writeProfileStore({ ...store, results: records.slice(0, 20) });
  renderProfilePage();
}

/* ===== 20260703 · 收藏（C端去处清单） ===== */

function favoriteList() {
  const store = readProfileStore();
  return Array.isArray(store.favorites) ? store.favorites : [];
}

function isFavorite(kind, id) {
  return favoriteList().some(row => row.kind === kind && row.id === id);
}

function toggleFavorite(kind, id) {
  const store = readProfileStore();
  const rows = Array.isArray(store.favorites) ? store.favorites : [];
  const index = rows.findIndex(row => row.kind === kind && row.id === id);
  if (index >= 0) {
    rows.splice(index, 1);
  } else {
    const meta = kind === "case"
      ? cases.find(item => item.id === id)
      : brandLibrary.find(item => item.id === id);
    rows.unshift({
      kind,
      id,
      name: meta?.name || id,
      city: meta?.city || "",
      note: kind === "case" ? (meta?.dna?.line || "") : (meta?.fitNote || ""),
      time: new Date().toISOString(),
    });
  }
  writeProfileStore({ ...store, favorites: rows.slice(0, 40) });
  renderPersonaResult();
  renderProfilePage();
}

function appPageId(page) {
  return {
    home: "home",
    "sample-library": "sample-library",
    "ops-library": "ops-library",
    profile: "profile",
    "brand-gate": "brand-gate",
    "consumer-gate": "consumer-gate",
    "personality-test": "personality-test",
    "personality-result": "personality-result",
  }[page] || "home";
}

function setAppPage(page = "home", shouldScroll = true) {
  state.appPage = page;
  if (page !== "personality-test" && page !== "personality-result") {
    state.personaCaseCode = "";
  }
  document.body.dataset.appPage = page;
  document.body.dataset.personaContext = state.personaCaseCode ? "true" : "false";
  document.querySelectorAll(".app-page").forEach(section => {
    section.hidden = section.id !== appPageId(page);
  });
  document.querySelectorAll("[data-shell-page]").forEach(node => {
    node.classList.toggle("active", node.dataset.shellPage === page);
  });
  if (page !== "project") {
    updateFlowVisibility();
  }
  if (page === "sample-library") renderSampleLibrary();
  if (page === "ops-library") renderOpsLibrary();
  if (page === "profile") renderProfilePage();
  if (page === "brand-gate") renderBrandGate();
  if (page === "personality-test") renderPersonaQuestion();
  if (page === "personality-result") renderPersonaResult();
  if (!shouldScroll) return;
  const target = document.getElementById(appPageId(page));
  window.requestAnimationFrame(() => target?.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function startProjectJourney() {
  state.appPage = "project";
  state.personaCaseCode = "";
  state.mode = "commercial";
  state.currentStage = "diagnose";
  state.showEvidence = false;
  state.showBrands = false;
  state.showMatch = false;
  state.showIntent = false;
  document.body.dataset.appPage = "project";
  document.querySelectorAll(".app-page").forEach(section => { section.hidden = true; });
  renderRoleUI();
  updateFlowVisibility();
  renderStageProgress();
  window.requestAnimationFrame(() => document.getElementById("diagnose")?.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function uniqueSorted(values) {
  return [...new Set(values.filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "zh-Hans-CN"));
}

function setupLibraryFilters() {
  if (els.sampleTypeFilter && els.sampleTypeFilter.options.length <= 1) {
    uniqueSorted(cases.flatMap(item => item.applicableTypes || [])).forEach(type => {
      const option = document.createElement("option");
      option.value = type;
      option.textContent = `${type} ${sampleTypeDefinitions.get(type)?.name || ""}`.trim();
      els.sampleTypeFilter.appendChild(option);
    });
  }
  if (els.opsDimensionFilter && els.opsDimensionFilter.options.length <= 1) {
    const dims = ["定位与客群", "业态结构", "空间与动线", "招商与去化", "运营与内容", "培育节奏", "自然 / 公园转化"];
    dims.forEach(dim => {
      const option = document.createElement("option");
      option.value = dim;
      option.textContent = dim;
      els.opsDimensionFilter.appendChild(option);
    });
  }
}

function libraryText(item = {}) {
  return [
    item.name, item.city, item.location, item.operator, item.archetype, item.subtype,
    item.value, item.usable, item.caution, item.brands, ...(item.heroTags || []), ...(item.scenarioTags || []),
  ].join(" ");
}

function sampleCardHTML(item = {}) {
  const playbook = samplePlaybook(item);
  const presentation = item.presentation || {};
  const types = sampleTypeNames(item.applicableTypes || []) || "类型待补";
  return `
    <article class="library-sample-card" data-preview-case="${escapeHtml(item.id || "")}">
      <div class="library-sample-image" style="background-image:url('${imageUrl(item)}')">
        <span>${escapeHtml(item.copyThreshold || "待判断")}门槛</span>
        <em>${escapeHtml(item.city || "城市待补")}</em>
      </div>
      <div class="library-sample-body">
        <span>${escapeHtml(presentation.valueTitle || playbook.name || item.archetype || "打法待补")}</span>
        <h3>${escapeHtml(item.name || "未命名样本")}</h3>
        <p>${escapeHtml(shortText(presentation.oneLineValue || item.bestFor || item.usable || item.value, "适合寻找非标商业打法参照的项目。", 62))}</p>
        <div>
          <i>${escapeHtml(types)}</i>
          <i>${escapeHtml(item.typeFitLabel || `${item.copyThreshold || "待判断"}门槛`)}</i>
        </div>
      </div>
    </article>
  `;
}

function renderSampleLibrary() {
  setupLibraryFilters();
  if (!els.sampleLibraryGrid) return;
  const keyword = String(els.sampleSearch?.value || "").trim().toLowerCase();
  const type = els.sampleTypeFilter?.value || "";
  const barrier = els.sampleBarrierFilter?.value || "";
  const rows = cases.filter(item => {
    const text = libraryText(item).toLowerCase();
    if (keyword && !text.includes(keyword)) return false;
    if (type && !(item.applicableTypes || []).includes(type)) return false;
    if (barrier && item.copyThreshold !== barrier) return false;
    return true;
  });
  els.sampleLibraryGrid.innerHTML = rows.length
    ? rows.map(sampleCardHTML).join("")
    : `<article class="empty-state"><strong>没有筛到样本</strong><p>换一个形态、门槛或关键词再试。</p></article>`;
}

function opsRows() {
  return cases.flatMap(item => sampleCritique(item).map((row, index) => ({
    id: `${item.id || normalizedProjectName(item.name)}-${index}`,
    item,
    dimension: row.dimension,
    action: row.action,
    tag: row.tag,
    status: sceneEvidenceLinks(item).some(link => sameProjectName(link.projectName, item.name) && link.sceneTag === row.dimension) ? "待核验" : "操盘推断",
  })));
}

function renderOpsLibrary() {
  setupLibraryFilters();
  if (!els.opsLibraryList) return;
  const keyword = String(els.opsSearch?.value || "").trim().toLowerCase();
  const dim = els.opsDimensionFilter?.value || "";
  const status = els.opsStatusFilter?.value || "";
  const rows = opsRows().filter(row => {
    const text = `${row.item.name} ${row.item.city} ${row.dimension} ${row.action} ${row.tag}`.toLowerCase();
    if (keyword && !text.includes(keyword)) return false;
    if (dim && row.dimension !== dim) return false;
    if (status && row.status !== status) return false;
    return true;
  }).slice(0, 80);
  els.opsLibraryList.innerHTML = rows.length
    ? rows.map(row => `
      <article class="ops-row-card">
        <div>
          <span>${escapeHtml(row.dimension)}</span>
          <h3>${escapeHtml(row.item.name)}</h3>
          <p>${escapeHtml(row.action)}</p>
        </div>
        <aside>
          <strong>${escapeHtml(row.status)}</strong>
          <em>${escapeHtml(row.item.copyThreshold || "待判断")}门槛</em>
        </aside>
      </article>
    `).join("")
    : `<article class="empty-state"><strong>没有筛到操盘条目</strong><p>换一个维度或关键词再试。</p></article>`;
}

function profileKindLabel(kind = "") {
  return {
    brand: "品牌档案",
    consumer: "消费者提醒",
    persona: "人格测试",
  }[kind] || "项目结果";
}

function renderProfilePage() {
  if (!els.profilePanel) return;
  const store = readProfileStore();
  const rows = Array.isArray(store.results) ? store.results : [];
  const favs = favoriteList();
  if (!rows.length && !favs.length) {
    els.profilePanel.innerHTML = `
      <article class="empty-profile">
        <strong>还没有档案</strong>
      <p>先做一次项目测试，或登记品牌档案。之后结果会保存在这里。</p>
        <button data-start-project type="button">去测项目</button>
      </article>
    `;
    return;
  }
  const favHtml = favs.length
    ? favs.map(row => `
      <article class="profile-record profile-favorite">
        <span>收藏去处 · ${escapeHtml(row.kind === "case" ? "项目" : "品牌")}</span>
        <h3>${escapeHtml(row.name || "未命名")}</h3>
        <p>${escapeHtml([row.city, row.note].filter(Boolean).join(" · ") || "本地保存，未同步到服务器。")}</p>
        <em>${escapeHtml(new Date(row.time).toLocaleString("zh-CN", { hour12: false }))}</em>
        <button data-fav="${escapeHtml(row.kind)}" data-fav-id="${escapeHtml(row.id)}" type="button">移除收藏</button>
      </article>
    `).join("")
    : "";
  const recordHtml = rows.map(row => `
    <article class="profile-record">
      <span>${escapeHtml(profileKindLabel(row.kind))}</span>
      <h3>${escapeHtml(row.name || row.title || "未命名档案")}</h3>
      <p>${escapeHtml(row.summary || row.category || row.contact || "本地保存，未同步到服务器。")}</p>
      <em>${escapeHtml(new Date(row.time).toLocaleString("zh-CN", { hour12: false }))}</em>
    </article>
  `).join("");
  els.profilePanel.innerHTML = favHtml + recordHtml;
}

function renderBrandGate() {
  const isOpen = state.brandTrack === "open";
  document.querySelectorAll("[data-brand-track]").forEach(button => {
    button.classList.toggle("active", button.dataset.brandTrack === state.brandTrack);
  });
  if (els.brandTrackLabel) els.brandTrackLabel.textContent = isOpen ? "已开店 · 档案登记" : "想开店 · 方向登记";
  if (els.brandTrackTitle) els.brandTrackTitle.textContent = isOpen ? "让项目方看懂你是什么品牌" : "先判断适合开什么店";
  if (els.brandTrackCopy) {
    els.brandTrackCopy.textContent = isOpen
      ? "保存基础档案，后续用于共创匹配和机会提醒。"
      : "记录品类、城市和开店方向，后续匹配同类主理人与适合的项目类型。";
  }
}

function saveBrandProfile() {
  const name = String(els.brandRegisterName?.value || "").trim() || "未命名品牌";
  const city = String(els.brandRegisterCity?.value || "").trim();
  const category = String(els.brandRegisterCategory?.value || "").trim();
  const contact = String(els.brandRegisterContact?.value || "").trim();
  appendProfileRecord("brand", {
    name,
    city,
    category,
    contact,
    summary: `${state.brandTrack === "open" ? "已开店" : "想开店"} · ${city || "城市待补"} · ${category || "品类待补"}`,
  });
  setAppPage("profile");
}

function saveConsumerIntent() {
  const contact = String(els.consumerContact?.value || "").trim();
  appendProfileRecord("consumer", {
    name: "消费者版提醒",
    contact,
    summary: contact ? "已保存提醒意向。" : "已记录为匿名关注。",
  });
  setAppPage("profile");
}

function personaRoleName(role = state.personaRole) {
  return {
    project: "项目方",
    brand: "品牌方 / 主理人",
    consumer: "C端消费者",
  }[role] || "项目方";
}

function personaRoleResultName(role = state.personaRole) {
  return {
    project: "商业怪物人格",
    brand: "品牌人格",
    consumer: "逛街人格",
  }[role] || "项目人格";
}

function resetScrollTop() {
  const run = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo(0, 0);
  };
  run();
  requestAnimationFrame(run);
  setTimeout(run, 80);
}

function startPersona(role = "project") {
  const questions = personaSystem.questions?.[role] || [];
  if (!questions.length) return;
  state.personaRole = role;
  state.personaIndex = 0;
  state.personaAnswers = [];
  state.personaTags = [];
  state.personaResult = null;
  state.personaResultStage = "identity";
  state.personaCaseCode = "";
  state.consumerCity = "";
  // 20260703 修复：每题选项乱序展示（分值映射回原选项），消除"全选C出极端人格"的位置导向
  state.personaShuffles = questions.map(question => {
    const order = (question.opts || []).map((_, index) => index);
    for (let i = order.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    return order;
  });
  history.replaceState(null, "", "#personality-test");
  setAppPage("personality-test");
  resetScrollTop();
}

function renderPersonaQuestion() {
  const questions = personaSystem.questions?.[state.personaRole] || [];
  const question = questions[state.personaIndex];
  if (!question || !els.personaOptions) return;
  const progress = questions.length ? (state.personaIndex / questions.length) * 100 : 0;
  if (els.personaProgress) els.personaProgress.style.width = `${progress}%`;
  if (els.personaCount) els.personaCount.textContent = `${state.personaIndex + 1} / ${questions.length}`;
  if (els.personaAxis) els.personaAxis.textContent = `${personaRoleName()} · ${question.ax}`;
  if (els.personaQuestion) els.personaQuestion.textContent = question.q;
  const keys = ["A", "B", "C"];
  const order = state.personaShuffles?.[state.personaIndex] || question.opts.map((_, index) => index);
  els.personaOptions.innerHTML = order.map((originalIndex, displayIndex) => {
    const option = question.opts[originalIndex];
    return `
    <button class="persona-option" data-persona-pick="${originalIndex}" type="button">
      <span>${keys[displayIndex] || displayIndex + 1}</span>
      <strong>${escapeHtml(option.t)}</strong>
    </button>
  `;
  }).join("");
}

function pickPersonaOption(optionIndex) {
  const questions = personaSystem.questions?.[state.personaRole] || [];
  const question = questions[state.personaIndex];
  const option = question?.opts?.[Number(optionIndex)];
  if (!question || !option) return;
  state.personaAnswers.push({ ax: question.ax, s: Number(option.s || 0) });
  if (option.tag) state.personaTags.push(option.tag);
  state.personaIndex += 1;
  if (state.personaIndex < questions.length) {
    renderPersonaQuestion();
    return;
  }
  finishPersona();
}

function finishPersona() {
  const tally = {};
  (personaSystem.axes || []).forEach(axis => {
    tally[axis.name] = { earned: 0, max: 0 };
  });
  state.personaAnswers.forEach(answer => {
    if (!tally[answer.ax]) tally[answer.ax] = { earned: 0, max: 0 };
    tally[answer.ax].earned += answer.s;
    tally[answer.ax].max += 2;
  });
  const ratio = {};
  const gray = {};
  let code = "";
  (personaSystem.axes || []).forEach(axis => {
    const score = tally[axis.name] || { earned: 0, max: 0 };
    const value = score.max ? score.earned / score.max : 0.5;
    ratio[axis.name] = value;
    gray[axis.name] = value >= 0.4 && value <= 0.6;
    code += value >= 0.5 ? axis.pos : axis.neg;
  });
  const nick = personaSystem.personas?.[state.personaRole]?.[code] || "未命名人格";
  const info = personaSystem.info?.[nick] || ["待定义类型", "这类人格还在补充解释。"];
  const cps = personaSystem.cp?.[state.personaRole]?.[nick] || [];
  const profile = state.personaRole === "project" ? personaSystem.projectProfiles?.[code] || null : null;
  state.personaResult = {
    role: state.personaRole,
    code,
    nick,
    info,
    ratio,
    gray,
    cps,
    profile,
    tags: [...new Set(state.personaTags)],
  };
  state.personaResultStage = "identity";
  state.personaCaseCode = state.personaRole === "project" ? code : "";
  // 公域测试反馈回收：每次测完自动记一条（每个结果对象只记一次）
  if (window.dnaFeedback) window.dnaFeedback.logComplete(state.personaResult);
  history.replaceState(null, "", "#personality-result");
  setAppPage("personality-result");
  resetScrollTop();
  // 20260703 修复：先出结果页再写档案，档案写入失败不能挡住结果展示
  appendProfileRecord("persona", {
    name: `${personaRoleName()} · ${nick}`,
    summary: `${info[0]} · ${code.split("").join("/")}`,
  });
}

function personaAvatarHTML(result = {}) {
  const projectAsset = result.role === "project" ? projectMonsterAssets[result.nick] : "";
  if (projectAsset) {
    return `
      <figure class="persona-monster-avatar">
        <img src="${escapeHtml(projectAsset)}" alt="${escapeHtml(result.nick)} 3D 角色" />
      </figure>
    `;
  }
  const initials = String(result.nick || "DNA").slice(0, 4);
  return `<div class="persona-avatar" aria-hidden="true"><span>${escapeHtml(initials)}</span><i>${escapeHtml(result.code || "DNA")}</i></div>`;
}

const projectPersonaStages = [
  ["identity", "人格"],
  ["dna", "DNA"],
  ["action", "行动"],
  ["sample", "样本"],
];

function projectPersonaProfile(result = {}) {
  return result.profile || personaSystem.projectProfiles?.[result.code] || {
    label: result.info?.[0] || "项目打法待校准",
    coreTension: "先看四轴倾向，再判断项目真正依赖什么生长。",
    strength: "当前打法已经形成可识别的基础。",
    risk: "边界条件仍需结合真实经营数据确认。",
    commonMistake: "把人格判断误当成经营绩效评分。",
    firstMove: "先验证一个最关键的项目动作。",
    avoidMove: "不要同时复制多个对标项目。",
    validationSignal: "14 天内拿到一次可复盘的真实反馈。",
  };
}

function projectPersonaNavHTML(activeStage = "identity") {
  return `
    <nav class="persona-result-nav" aria-label="商业 DNA 结果阶段">
      ${projectPersonaStages.map(([key, label], index) => `
        <button class="${key === activeStage ? "active" : ""}" data-persona-result-stage="${key}" type="button" ${key === activeStage ? 'aria-current="step"' : ""}>
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${label}</strong>
        </button>
      `).join("")}
    </nav>
  `;
}

function personaAxisMeaning(axis = {}, value = 0.5, gray = false) {
  const letter = value >= 0.5 ? axis.pos : axis.neg;
  const otherLabel = value >= 0.5 ? axis.negL : axis.posL;
  const copy = {
    L: "主要依靠附近人持续复访。",
    D: "需要给人一个专程到访的理由。",
    S: "稳定经营比单次声量更重要。",
    C: "话题与传播会显著放大到访。",
    B: "成熟标准品牌更适合托住基本盘。",
    M: "主理人和新品牌决定项目辨识度。",
    E: "以关键节点和基础体验维护为主。",
    R: "需要持续栏目、社群和内容排期。",
  }[letter] || "当前轴仍需结合真实经营信息判断。";
  return gray ? `偏${value >= 0.5 ? axis.posL : axis.negL}，也接近${otherLabel}。${copy}` : copy;
}

function projectPersonaAxesHTML(result = {}, compact = false) {
  return (personaSystem.axes || []).map(axis => {
    const value = result.ratio?.[axis.name] ?? 0.5;
    const letter = value >= 0.5 ? axis.pos : axis.neg;
    return `
      <div class="persona-dna-axis ${compact ? "is-compact" : ""}">
        <div class="persona-dna-axis-head">
          <span>${escapeHtml(axis.negL)}</span>
          <strong>${escapeHtml(letter)}</strong>
          <span>${escapeHtml(axis.posL)}</span>
        </div>
        <div class="persona-dna-axis-track" aria-label="${escapeHtml(axis.name)}：${escapeHtml(value >= 0.5 ? axis.posL : axis.negL)}">
          <i style="left:${Math.round(value * 100)}%"></i>
        </div>
        ${compact ? "" : `<p>${escapeHtml(personaAxisMeaning(axis, value, result.gray?.[axis.name]))}</p>`}
      </div>
    `;
  }).join("");
}

function personaSampleRelation(result = {}, item = {}) {
  const targetCode = item.dna?.code || "";
  const same = [];
  const different = [];
  (personaSystem.axes || []).forEach((axis, index) => {
    const resultLetter = result.code?.[index];
    const targetLetter = targetCode[index];
    if (!resultLetter || !targetLetter) return;
    const resultLabel = resultLetter === axis.pos ? axis.posL : axis.negL;
    const targetLabel = targetLetter === axis.pos ? axis.posL : axis.negL;
    if (resultLetter === targetLetter) same.push(axis.name);
    else different.push(`${axis.name}：你偏${resultLabel}，它偏${targetLabel}`);
  });
  return {
    same: same.length ? `${same.join("、")}一致` : "需要从具体动作里找可比点",
    different: different.length ? different.join("；") : "四轴同码，重点比较成立条件",
  };
}

function projectPersonaSampleRowHTML(result = {}, row = {}, primary = false) {
  const item = row.item || {};
  const relation = personaSampleRelation(result, item);
  const boundary = shortText(item.presentation?.risk || item.copyConditions || item.caution || item.pain || "", "先确认城市、人群、体量和运营团队能否承接。", 72);
  return `
    <article class="${primary ? "persona-calibration-primary" : "persona-calibration-row"}">
      <div class="persona-calibration-image" style="background-image:url('${imageUrl(item)}')">
        <span>${row.exact ? "同码" : "相邻"}</span>
      </div>
      <div class="persona-calibration-copy">
        <small>${escapeHtml(String(item.city || "").split("·")[0] || "城市待补")} · ${escapeHtml(item.dna?.code || "")}</small>
        <h3>${escapeHtml(item.name || "未命名项目")}</h3>
        <p><b>相同</b>${escapeHtml(relation.same)}</p>
        <p><b>不同</b>${escapeHtml(relation.different)}</p>
        ${primary ? `<p><b>边界</b>${escapeHtml(boundary)}</p><button data-preview-case="${escapeHtml(item.id)}" type="button">深挖这个样本</button>` : `<button data-preview-case="${escapeHtml(item.id)}" type="button">查看</button>`}
      </div>
    </article>
  `;
}

function projectPersonaSampleStageHTML(result = {}) {
  const rows = casesForPersonaCode(result.code, 3).filter(row => row.score > 0);
  if (!rows.length) {
    return `<section class="persona-stage"><h2>样本还在补齐</h2><p>当前 DNA 暂无足够接近的项目样本。</p></section>`;
  }
  const [primary, ...others] = rows;
  const cpHtml = (result.cps || []).map(item => `
    <div class="persona-optional-row"><strong>${escapeHtml(item[1])}</strong><p>${escapeHtml(item[2])}</p></div>
  `).join("");
  return `
    <section class="persona-stage persona-stage-sample">
      <div class="persona-stage-head"><span>找谁校准</span><small>4 / 4</small></div>
      <h2>先看一个，不要一次抄四个</h2>
      <p class="persona-stage-lead">${primary.exact ? "这是当前最接近的同码样本，重点比较成立条件。" : "当前没有完全同码样本，先看相同打法，再看不同轴。"}</p>
      ${projectPersonaSampleRowHTML(result, primary, true)}
      ${others.length ? `
        <details class="persona-more-samples">
          <summary>再看 ${others.length} 个参考样本</summary>
          <div>${others.map(row => projectPersonaSampleRowHTML(result, row, false)).join("")}</div>
        </details>
      ` : ""}
      ${cpHtml ? `
        <details class="persona-optional-branch">
          <summary>可选：再看 CP 品牌</summary>
          <div>${cpHtml}</div>
        </details>
      ` : ""}
      <div class="persona-stage-actions is-secondary-only">
        <button data-persona-result-stage="action" type="button">返回行动</button>
        <button data-shell-page="sample-library" type="button">浏览更多样本</button>
      </div>
    </section>
  `;
}

function projectPersonaStageHTML(result = {}) {
  const activeStage = projectPersonaStages.some(([key]) => key === state.personaResultStage) ? state.personaResultStage : "identity";
  const profile = projectPersonaProfile(result);
  const shareLink = `../commercial_dna_ip_samples/index.html?nick=${encodeURIComponent(result.nick)}&code=${encodeURIComponent(result.code)}&name=${encodeURIComponent(state.name || "")}`;
  const stageHtml = {
    identity: `
      <section class="persona-stage persona-stage-identity">
        <div class="persona-stage-head"><span>商业怪物人格</span><small>1 / 4</small></div>
        <div class="persona-result-hero">
          ${personaAvatarHTML(result)}
          <div><h2>${escapeHtml(result.nick)}</h2><strong>${escapeHtml(result.info[0])}</strong><small>${escapeHtml(result.code.split("").join(" · "))}</small></div>
        </div>
        <section class="persona-roast"><span>一句话锐评</span><p>${escapeHtml(result.info[1])}</p></section>
        <div class="persona-dna-compact">${projectPersonaAxesHTML(result, true)}</div>
        <article class="persona-core-tension"><span>你的核心矛盾</span><strong>${escapeHtml(profile.coreTension)}</strong></article>
        <div class="persona-stage-actions">
          <button class="primary" data-persona-result-stage="dna" type="button">看懂我的 DNA</button>
          <a href="${shareLink}" target="_blank" rel="noopener">保存 / 分享人格卡</a>
        </div>
      </section>
    `,
    dna: `
      <section class="persona-stage persona-stage-dna">
        <div class="persona-stage-head"><span>这意味着什么</span><small>2 / 4</small></div>
        <h2>${escapeHtml(result.code)} · ${escapeHtml(profile.label)}</h2>
        <p class="persona-stage-lead">四轴判断的是项目打法倾向，不是经营绩效评分。</p>
        <div class="persona-dna-axis-list">${projectPersonaAxesHTML(result)}</div>
        <div class="persona-dna-readout">
          <div><span>优势</span><strong>${escapeHtml(profile.strength)}</strong></div>
          <div><span>风险</span><strong>${escapeHtml(profile.risk)}</strong></div>
          <div><span>容易误判</span><strong>${escapeHtml(profile.commonMistake)}</strong></div>
        </div>
        <div class="persona-stage-actions">
          <button class="primary" data-persona-result-stage="action" type="button">看我先该做什么</button>
          <button data-persona-result-stage="identity" type="button">返回人格</button>
        </div>
      </section>
    `,
    action: `
      <section class="persona-stage persona-stage-action">
        <div class="persona-stage-head"><span>先做什么</span><small>3 / 4</small></div>
        <h2>先做这一个动作</h2>
        <article class="persona-first-move"><span>第一动作</span><strong>${escapeHtml(profile.firstMove)}</strong></article>
        <div class="persona-action-checklist">
          <div><span>不要做</span><p>${escapeHtml(profile.avoidMove)}</p></div>
          <div><span>14 天验证</span><p>${escapeHtml(profile.validationSignal)}</p></div>
        </div>
        <div class="persona-stage-actions">
          <button class="primary" data-persona-result-stage="sample" type="button">找一个项目校准</button>
          <button data-persona-result-stage="dna" type="button">返回 DNA</button>
        </div>
      </section>
    `,
    sample: projectPersonaSampleStageHTML(result),
  }[activeStage];
  return `${projectPersonaNavHTML(activeStage)}${stageHtml}`;
}

/* ===== 20260703 · 品牌方反向匹配：适合入驻的项目 ===== */
function brandProjectMatchesHTML(result = {}) {
  const rows = casesForPersonaCode(result.code, 3).filter(row => row.score > 0);
  if (!rows.length) return "";
  const hasExact = rows.some(row => row.exact);
  const honestNote = hasExact
    ? ""
    : `<p class="persona-honest-note">样本库暂无和你完全同打法的项目，以下是最接近的相邻参考。</p>`;
  return `
    <section class="persona-cp-panel persona-reverse-panel">
      <h3>适合你入驻的项目</h3>
      ${honestNote}
      ${rows.map(({ item, exact }) => `
        <article class="persona-cp-item">
          <span>${exact ? "同类打法" : "相邻打法"} · ${escapeHtml(String(item.city || "").split("·")[0] || "城市待补")} · ${escapeHtml(item.dna?.code || "")}</span>
          <strong>${escapeHtml(item.name || "未命名项目")}</strong>
          <p>${escapeHtml(shortText(item.dna?.brandFitNote || item.dna?.strategy || "", "打法说明待补", 88))}</p>
          <div class="persona-place-actions">
            <button data-preview-case="${escapeHtml(item.id)}" type="button">看项目详情</button>
          </div>
        </article>
      `).join("")}
    </section>
  `;
}

/* ===== 20260703 · C端去处清单 + 收藏 ===== */
function consumerPlacesHTML(result = {}) {
  const city = state.consumerCity || "";
  const options = consumerCityOptions();
  const caseRows = casesForPersonaCode(result.code, 12)
    .filter(({ item, score }) => score > 0 && (!city || String(item.city || "").includes(city)))
    .slice(0, 3);
  const brandRows = brandsForPersonaCode(result.code, city, 4);
  const favButton = (kind, id) => `
    <button data-fav="${escapeHtml(kind)}" data-fav-id="${escapeHtml(id)}" type="button" class="${isFavorite(kind, id) ? "is-faved" : ""}">
      ${isFavorite(kind, id) ? "已收藏 ✓" : "收藏"}
    </button>
  `;
  const caseHtml = caseRows.length
    ? caseRows.map(({ item }) => `
      <article class="persona-cp-item">
        <span>项目 · ${escapeHtml(String(item.city || "").split("·")[0] || "城市待补")}</span>
        <strong>${escapeHtml(item.name || "未命名项目")}</strong>
        <p>${escapeHtml(shortText(item.dna?.line || "", "去处说明待补", 76))}</p>
        <div class="persona-place-actions">
          <button data-preview-case="${escapeHtml(item.id)}" type="button">了解一下</button>
          ${favButton("case", item.id)}
        </div>
      </article>
    `).join("")
    : `<article class="persona-cp-item"><strong>这个城市的项目还在收录</strong><p>先看看下面的品牌，或切到全部城市。</p></article>`;
  const brandHtml = brandRows.map(({ brand, inCity, exact }) => `
    <article class="persona-cp-item">
      <span>品牌 · ${escapeHtml(String(brand.city || "").split("/")[0] || "城市待补")}${inCity ? " · 就在本城" : ""}${exact ? "" : " · 相邻参考"}</span>
      <strong>${escapeHtml(brand.name || "未命名品牌")}</strong>
      <p>${escapeHtml(shortText(brand.fitNote || brand.brandRole || "", "品牌说明待补", 76))}</p>
      <div class="persona-place-actions">
        ${favButton("brand", brand.id)}
      </div>
    </article>
  `).join("");
  return `
    <section class="persona-cp-panel persona-places-panel">
      <h3>你的去处清单</h3>
      <div class="persona-place-filter">
        <label>城市</label>
        <select data-consumer-city>
          <option value="">全部城市</option>
          ${options.map(name => `<option value="${escapeHtml(name)}" ${name === city ? "selected" : ""}>${escapeHtml(name)}</option>`).join("")}
        </select>
        <small>收藏会存进「我的档案」，随时回看。</small>
      </div>
      ${caseHtml}
      ${brandHtml}
    </section>
  `;
}

function renderPersonaResult() {
  if (!els.personaResult) return;
  if (!state.personaResult) {
    // 20260703 修复：直链/刷新 #personality-result 时无结果，给引导而不是空白
    els.personaResult.innerHTML = `
      <article class="persona-result-card">
        <span class="persona-result-kicker">还没有测试结果</span>
        <section class="persona-roast">
          <p>结果只保存在测试当时的页面里，重新测一次只要 1 分钟。</p>
        </section>
        <div class="persona-result-actions">
          <button data-persona-start="project" type="button">项目方测试</button>
          <button data-persona-start="brand" type="button">品牌方测试</button>
          <button data-persona-start="consumer" type="button">逛街人格测试</button>
        </div>
      </article>
    `;
    return;
  }
  const result = state.personaResult;
  if (result.role === "project") {
    els.personaResult.innerHTML = `
      <article class="persona-result-card persona-result-project">
        ${projectPersonaStageHTML(result)}
      </article>
    `;
    return;
  }
  const axes = (personaSystem.axes || []).map(axis => {
    const value = result.ratio?.[axis.name] ?? 0.5;
    const leftOn = value < 0.5 ? "is-on" : "";
    const rightOn = value >= 0.5 ? "is-on" : "";
    const grayCopy = result.gray?.[axis.name]
      ? `<em>边界灰带：偏${value >= 0.5 ? axis.posL : axis.negL}，也接近${value >= 0.5 ? axis.negL : axis.posL}</em>`
      : "";
    return `
      <div class="persona-axis-row">
        <div><span class="${leftOn}">${escapeHtml(axis.negL)}</span><span class="${rightOn}">${escapeHtml(axis.posL)}</span></div>
        <p><i style="left:${Math.round(value * 100)}%"></i></p>
        ${grayCopy}
      </div>
    `;
  }).join("");
  const cpTitle = {
    project: "CP 品牌 · 同病相怜 / 帮你上分",
    brand: "你的 CP · 该进什么项目",
    consumer: "适合你的去处",
  }[result.role] || "你的 CP";
  const cpHtml = result.cps.length
    ? result.cps.map(item => `
      <article class="persona-cp-item">
        <span>${item[0] === "same" ? "气味相同" : "帮你上分"}</span>
        <strong>${escapeHtml(item[1])}</strong>
        <p>${escapeHtml(item[2])}</p>
      </article>
    `).join("")
    : `<article class="persona-cp-item"><strong>配对建议待补</strong><p>这个人格的 CP 库还在整理。</p></article>`;
  const tagHtml = result.tags.length
    ? `<div class="persona-tags"><span>隐藏属性</span>${result.tags.map(tag => `<i>${escapeHtml(tag)}</i>`).join("")}</div>`
    : "";
  const profileSheetLink = result.role === "project"
    ? `<a class="persona-sheet-link" href="../commercial_dna_ip_samples/index.html?nick=${encodeURIComponent(result.nick)}&code=${encodeURIComponent(result.code)}&name=${encodeURIComponent(state.name || "")}" target="_blank" rel="noopener">生成可分享人格卡 ↗</a>`
    : "";
  const nextActions = result.role === "project"
    ? `${profileSheetLink}<button data-shell-page="sample-library" type="button">看同类样本</button><button data-shell-page="ops-library" type="button">看操盘库</button>`
    : result.role === "brand"
      ? `<button data-shell-page="brand-gate" type="button">保存品牌档案</button><button data-shell-page="sample-library" type="button">先看项目样本</button>`
      : `<button data-shell-page="consumer-gate" type="button">保存关注</button><button data-shell-page="sample-library" type="button">先逛样本库</button>`;
  els.personaResult.innerHTML = `
    <article class="persona-result-card">
      <span class="persona-result-kicker">${escapeHtml(personaRoleResultName(result.role))}</span>
      <div class="persona-result-hero">
        ${personaAvatarHTML(result)}
        <div>
          <h2>${escapeHtml(result.nick)}</h2>
          <strong>${escapeHtml(result.info[0])}</strong>
          <small>${escapeHtml(result.code.split("").join(" · "))}</small>
        </div>
      </div>
      <section class="persona-roast">
        <span>一句话锐评</span>
        <p>${escapeHtml(result.info[1])}</p>
      </section>
      ${tagHtml}
      <section class="persona-axis-panel">
        <h3>为什么会测成这样</h3>
        ${axes}
      </section>
      <section class="persona-cp-panel">
        <h3>${escapeHtml(cpTitle)}</h3>
        ${cpHtml}
      </section>
      ${result.role === "brand" ? brandProjectMatchesHTML(result) : ""}
      ${result.role === "consumer" ? consumerPlacesHTML(result) : ""}
      <div id="dnaFeedbackSlot"></div>
      <div class="persona-result-actions">
        ${nextActions}
        <button data-persona-start="${escapeHtml(result.role)}" type="button">重测</button>
      </div>
    </article>
  `;
  // 公域测试反馈回收：结果渲染后注入"准不准"组件（未配置端点时静默）
  if (window.dnaFeedback) window.dnaFeedback.mountWidget(result);
}
