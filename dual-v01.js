(function attachCommercialDnaDualV01(globalScope) {
  "use strict";

  const dualLogic = globalScope.COMMERCIAL_DNA_DUAL_V0_1;
  const operatorSystem = globalScope.COMMERCIAL_DNA_OPERATOR_V1;
  const projectSystem = globalScope.COMMERCIAL_DNA_PERSONA;
  const matchSystem = globalScope.COMMERCIAL_DNA_OPERATOR_MATCH_V0_1;
  const experienceSystem = globalScope.COMMERCIAL_DNA_DUAL_EXPERIENCE_V0_2;
  if (!dualLogic || !operatorSystem || !projectSystem || !matchSystem || !experienceSystem) return;

  const STORAGE_KEY = "commercial_dna_dual_test_v1";
  const PROJECT_CONTENT_VERSION = "project-persona-v1";
  const MODES = ["self", "project"];
  const projectAssets = {
    "居委会": "persona-assets/community-capybara-v1.webp",
    "文艺据点": "persona-assets/art-cat-v1.webp",
    "周末限定": "persona-assets/weekend-squirrel-v1.webp",
    "中央车站": "persona-assets/station-elephant-v1.webp",
    "同好会馆": "persona-assets/club-fox-v1.webp",
    "顶流片场": "persona-assets/studio-peacock-v1.webp",
    "新物种实验室": "persona-assets/lab-octopus-v1.webp",
    "内容永动机": "persona-assets/engine-bee-v1.webp",
  };
  const modeCopy = {
    self: {
      label: "测我",
      lead: "测我：看看你是哪只商业打工怪物。",
      start: "开始测我",
      continue: "继续测我",
      retest: "重新测我",
      identity: "我是",
    },
    project: {
      label: "测项目",
      lead: "测项目：看看它是哪种项目动物人格。",
      start: "开始测项目",
      continue: "继续测项目",
      retest: "重新测项目",
      identity: "我的商业项目是",
    },
  };

  const elements = {
    home: document.getElementById("home"),
    homeTitle: document.getElementById("dualHomeTitle"),
    homeLead: document.getElementById("dualHomeLead"),
    modeSwitch: document.getElementById("dualModeSwitch"),
    quickMenu: document.getElementById("dualQuickMenu"),
    menuButton: document.querySelector("[data-dual-menu]"),
    startButton: document.getElementById("dualStartButton"),
    gateNote: document.getElementById("dualGateNote"),
    historyShelf: document.getElementById("dualHistoryShelf"),
    testPage: document.getElementById("personality-test"),
    resultPage: document.getElementById("personality-result"),
    matchPage: document.getElementById("dual-match"),
    progress: document.getElementById("personaProgress"),
    count: document.getElementById("personaCount"),
    axis: document.getElementById("personaAxis"),
    question: document.getElementById("personaQuestion"),
    options: document.getElementById("personaOptions"),
    result: document.getElementById("personaResult"),
    match: document.getElementById("dualMatchResult"),
    toast: document.getElementById("dualToast"),
    shareDialog: document.getElementById("dualShareDialog"),
    shareFrame: document.getElementById("dualShareFrame"),
  };

  const baseState = {
    screen: "home",
    selectedMode: "self",
    activeMode: null,
    drafts: { self: null, project: null },
    results: { self: null, project: null },
    history: [],
    match: null,
    returnMode: null,
    storageAvailable: true,
    answerLocked: false,
    assetGate: {
      status: "checking",
      reason: "正在读取操盘怪物资产清单。",
      assetsById: {},
    },
  };
  const dualState = typeof state !== "undefined" && state.dual
    ? state.dual
    : {};
  Object.assign(dualState, baseState, {
    drafts: { ...baseState.drafts, ...(dualState.drafts || {}) },
    results: { ...baseState.results, ...(dualState.results || {}) },
    history: Array.isArray(dualState.history) ? dualState.history : [],
    assetGate: { ...baseState.assetGate, ...(dualState.assetGate || {}) },
  });

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[character]));
  }

  function currentContentVersion(mode) {
    return mode === "self" ? operatorSystem.contentVersion : PROJECT_CONTENT_VERSION;
  }

  function definitionFor(mode) {
    const definition = dualLogic.buildDefinition(mode);
    const validation = dualLogic.validateDefinition(definition);
    if (!validation.valid) throw new TypeError(validation.errors.join("；"));
    return definition;
  }

  function personaForResult(result) {
    if (!result) return null;
    if (result.mode === "self") return operatorSystem.personasByCode?.[result.code] || null;
    const name = projectSystem.personas?.project?.[result.code];
    if (!name) return null;
    const info = projectSystem.info?.[name] || ["项目人格", "这个项目还需要更多真实信息。"];
    return {
      id: name,
      code: result.code,
      name,
      label: info[0],
      roast: info[1],
      profile: projectSystem.projectProfiles?.[result.code] || null,
      assetAlt: `${name}项目动物人格`,
    };
  }

  function sanitizeResult(value, mode) {
    if (!value || value.mode !== mode || value.contentVersion !== currentContentVersion(mode)) return null;
    const ratios = value.axisRatios;
    if (!ratios || ["radius", "content", "brand", "operation"].some(key => (
      !Number.isFinite(ratios[key]) || ratios[key] < 0 || ratios[key] > 1
    ))) return null;
    return personaForResult(value) ? value : null;
  }

  function sanitizeDraft(value, mode) {
    if (!value || value.contentVersion !== currentContentVersion(mode)) return null;
    if (!Number.isInteger(value.questionIndex) || value.questionIndex < 0 || value.questionIndex > 15) return null;
    if (!value.answersByQuestionId || !value.optionOrderByQuestionId) return null;
    return value;
  }

  function hydratePersistedState() {
    try {
      const parsed = JSON.parse(globalScope.localStorage.getItem(STORAGE_KEY) || "null");
      if (!parsed || parsed.schemaVersion !== 1) return;
      dualState.selectedMode = MODES.includes(parsed.selectedMode) ? parsed.selectedMode : "self";
      MODES.forEach(mode => {
        dualState.drafts[mode] = sanitizeDraft(parsed.drafts?.[mode], mode);
        dualState.results[mode] = sanitizeResult(parsed.results?.[mode], mode);
      });
      dualState.history = Array.isArray(parsed.history)
        ? parsed.history.map(sanitizeHistoryEntry).filter(Boolean).slice(0, 12)
        : [];
    } catch (error) {
      dualState.storageAvailable = false;
    }
  }

  function persistState() {
    if (!dualState.storageAvailable) return;
    try {
      globalScope.localStorage.setItem(STORAGE_KEY, JSON.stringify({
        schemaVersion: 1,
        selectedMode: dualState.selectedMode,
        drafts: dualState.drafts,
        results: dualState.results,
        history: dualState.history,
        updatedAt: new Date().toISOString(),
      }));
    } catch (error) {
      dualState.storageAvailable = false;
      if (dualState.screen === "home") renderHome();
    }
  }

  function shuffledOptionIds(question) {
    const ids = question.options.map(option => option.id);
    for (let index = ids.length - 1; index > 0; index -= 1) {
      const target = Math.floor(Math.random() * (index + 1));
      [ids[index], ids[target]] = [ids[target], ids[index]];
    }
    return ids;
  }

  function createDraft(mode) {
    const definition = definitionFor(mode);
    return {
      contentVersion: definition.contentVersion,
      questionIndex: 0,
      answersByQuestionId: {},
      optionOrderByQuestionId: Object.fromEntries(
        definition.questions.map(question => [question.id, shuffledOptionIds(question)]),
      ),
      updatedAt: new Date().toISOString(),
    };
  }

  function canMatch() {
    return Boolean(
      sanitizeResult(dualState.results.self, "self")
      && sanitizeResult(dualState.results.project, "project"),
    );
  }

  function sanitizeHistoryEntry(value) {
    if (!value || !MODES.includes(value.mode)) return null;
    const result = sanitizeResult(value.result, value.mode);
    if (!result) return null;
    const completedAt = String(value.completedAt || "");
    if (!completedAt || Number.isNaN(Date.parse(completedAt))) return null;
    return {
      id: String(value.id || `${value.mode}-${completedAt}-${result.code}`),
      mode: value.mode,
      completedAt,
      result,
    };
  }

  function recordHistory(mode, result) {
    const completedAt = new Date().toISOString();
    const entry = {
      id: `${mode}-${Date.now()}-${dualState.history.length}`,
      mode,
      completedAt,
      result,
    };
    dualState.history = [entry, ...dualState.history].slice(0, 12);
  }

  function homeHistoryEntries() {
    const rows = [...dualState.history];
    MODES.forEach(mode => {
      const result = sanitizeResult(dualState.results[mode], mode);
      const hasCurrent = result && rows.some(row => (
        row.mode === mode
        && row.result.code === result.code
        && JSON.stringify(row.result.axisRatios) === JSON.stringify(result.axisRatios)
      ));
      if (result && !hasCurrent) {
        rows.unshift({
          id: `latest-${mode}`,
          mode,
          completedAt: new Date(0).toISOString(),
          result,
        });
      }
    });
    return rows.slice(0, 3);
  }

  function formatHistoryDate(value) {
    const date = new Date(value);
    if (!Number.isFinite(date.getTime()) || date.getTime() === 0) return "已保存";
    return `${String(date.getFullYear()).slice(-2)}/${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")}`;
  }

  function renderHomeHistory() {
    if (!elements.historyShelf) return;
    const rows = homeHistoryEntries();
    elements.historyShelf.hidden = rows.length === 0;
    if (!rows.length) {
      elements.historyShelf.innerHTML = "";
      return;
    }
    elements.historyShelf.innerHTML = `
      <header class="dual-history-head">
        <h2 id="dualHistoryTitle">我的 DNA 卡册</h2>
        <small>查看全部 ›</small>
      </header>
      <div class="dual-history-grid">
        ${rows.map(entry => {
          const persona = personaForResult(entry.result);
          const asset = resultAssetFor(entry.mode, persona);
          return `
            <button class="dual-history-card dual-history-${entry.mode}" data-dual-history-id="${escapeHtml(entry.id)}" type="button">
              <span>${entry.mode === "self" ? "自我" : "项目"}</span>
              <img src="${escapeHtml(asset)}" loading="lazy" decoding="async" alt="" />
              <strong>${escapeHtml(persona.name)}</strong>
              <b>${escapeHtml(entry.result.code)}</b>
              <small>${formatHistoryDate(entry.completedAt)}</small>
            </button>
          `;
        }).join("")}
        ${Array.from({ length: Math.max(0, 3 - rows.length) }, () => `
          <div class="dual-history-card dual-history-locked" aria-hidden="true">
            <span>待解锁</span>
            <div>DNA</div>
            <strong>下一张卡</strong>
            <b>----</b>
            <small>完成测试</small>
          </div>
        `).join("")}
      </div>
    `;
  }

  function modeReady(mode) {
    try {
      definitionFor(mode);
    } catch (error) {
      return { ready: false, reason: error.message };
    }
    if (mode === "self" && dualState.assetGate.status !== "ready") {
      return { ready: false, reason: dualState.assetGate.reason };
    }
    return { ready: true, reason: "" };
  }

  function setVisiblePage(screen, mode = null) {
    dualState.screen = screen;
    dualState.activeMode = mode;
    dualState.answerLocked = false;
    document.body.dataset.dualScreen = screen;
    document.body.dataset.dualMode = mode || dualState.selectedMode;
    document.body.dataset.appPage = {
      home: "home",
      question: "personality-test",
      result: "personality-result",
      match: "dual-match",
    }[screen] || "home";
    if (elements.quickMenu) elements.quickMenu.hidden = true;
    if (elements.menuButton) elements.menuButton.setAttribute("aria-expanded", "false");

    const visibleId = {
      home: "home",
      question: "personality-test",
      result: "personality-result",
      match: "dual-match",
    }[screen];
    document.querySelectorAll(".app-page").forEach(section => {
      section.hidden = section.id !== visibleId;
    });
    [
      "#diagnose", "#result", ".report-band", "#cases",
      "#evidence", "#match", "#brands", "#intent",
    ].forEach(selector => {
      document.querySelectorAll(selector).forEach(section => {
        section.hidden = true;
      });
    });
    globalScope.scrollTo(0, 0);
  }

  function focusHeading(element) {
    if (!element) return;
    globalScope.requestAnimationFrame(() => {
      try {
        element.focus({ preventScroll: true });
      } catch (error) {
        element.focus();
      }
    });
  }

  function renderHome() {
    setVisiblePage("home");
    const mode = dualState.selectedMode;
    const copy = modeCopy[mode];
    const draft = sanitizeDraft(dualState.drafts[mode], mode);
    const result = sanitizeResult(dualState.results[mode], mode);
    const readiness = modeReady(mode);

    elements.modeSwitch?.querySelectorAll("[data-dual-mode]").forEach(button => {
      const active = button.dataset.dualMode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    if (elements.homeLead) elements.homeLead.textContent = copy.lead;
    if (elements.startButton) {
      elements.startButton.disabled = !readiness.ready;
      elements.startButton.textContent = !readiness.ready
        ? (mode === "self" && dualState.assetGate.status === "checking" ? "正在准备测我" : "暂时无法开始")
        : result
          ? copy.retest
          : draft
            ? copy.continue
            : copy.start;
    }
    if (elements.gateNote) {
      const storageCopy = dualState.storageAvailable
        ? "结果仅保存在本机"
        : "当前无法在刷新后恢复结果";
      elements.gateNote.textContent = readiness.ready
        ? `16 题 · 约 2 分钟 · ${storageCopy}${canMatch() ? " · 两份结果已就绪" : ""}`
        : readiness.reason;
    }
    renderHomeHistory();
  }

  function renderQuestion() {
    const mode = dualState.activeMode;
    const definition = definitionFor(mode);
    const draft = sanitizeDraft(dualState.drafts[mode], mode) || createDraft(mode);
    dualState.drafts[mode] = draft;
    const question = definition.questions[draft.questionIndex];
    const axis = definition.axes.find(item => item.key === question.axisKey);
    const order = draft.optionOrderByQuestionId[question.id] || question.options.map(option => option.id);
    const optionById = Object.fromEntries(question.options.map(option => [option.id, option]));
    const selectedId = draft.answersByQuestionId[question.id] || "";

    setVisiblePage("question", mode);
    if (elements.progress) {
      const activeSegments = Math.ceil((draft.questionIndex + 1) / 2);
      elements.progress.querySelectorAll("i").forEach((segment, index) => {
        segment.classList.toggle("is-active", index < activeSegments);
      });
      elements.progress.setAttribute(
        "aria-label",
        `答题进度 ${draft.questionIndex + 1} / ${definition.questions.length}`,
      );
    }
    if (elements.count) elements.count.textContent = `${draft.questionIndex + 1} / ${definition.questions.length}`;
    if (elements.axis) {
      elements.axis.textContent = `${modeCopy[mode].label} · ${axis?.name || "商业 DNA"} · ${axis?.negLabel || ""} / ${axis?.posLabel || ""}`;
    }
    if (elements.question) {
      elements.question.textContent = question.prompt;
      elements.question.setAttribute("tabindex", "-1");
    }
    if (elements.options) {
      elements.options.innerHTML = order.map((optionId, displayIndex) => {
        const option = optionById[optionId];
        if (!option) return "";
        const selected = option.id === selectedId;
        return `
          <button class="persona-option dual-question-option ${selected ? "is-selected" : ""}" data-dual-option="${escapeHtml(option.id)}" type="button" aria-pressed="${selected}">
            <span>${String.fromCharCode(65 + displayIndex)}</span>
            <strong>${escapeHtml(option.text)}</strong>
            <b aria-hidden="true">→</b>
          </button>
        `;
      }).join("");
    }
    persistState();
    focusHeading(elements.question);
  }

  function resultAssetFor(mode, persona) {
    if (mode === "self") {
      return dualState.assetGate.assetsById?.[persona.assetId]?.file || "";
    }
    return projectAssets[persona.name] || "";
  }

  function bindResultImageState() {
    const image = document.getElementById("dualResultImage");
    const figure = image?.closest(".dual-result-visual");
    if (!image || !figure) return;
    const markReady = () => {
      figure.classList.remove("is-error");
    };
    const markError = () => {
      figure.classList.add("is-error");
      figure.innerHTML = "<p>角色资产加载失败，分享已暂停。请刷新后重试。</p>";
    };
    image.addEventListener("load", markReady, { once: true });
    image.addEventListener("error", markError, { once: true });
    if (image.complete) {
      if (image.naturalWidth > 0) markReady();
      else markError();
    }
  }

  function resultRatingRows(result) {
    const labels = {
      radius: "场域雷达",
      content: "内容燃点",
      brand: "非标适配",
      operation: "续航强度",
    };
    return ["radius", "content", "operation"].map(key => {
      const ratio = Number(result.axisRatios?.[key] || 0);
      const filled = Math.max(1, Math.min(5, Math.round(ratio * 4) + 1));
      return {
        label: labels[key],
        stars: `${"★".repeat(filled)}${"☆".repeat(5 - filled)}`,
      };
    });
  }

  function renderResult(mode) {
    const result = sanitizeResult(dualState.results[mode], mode);
    if (!result) {
      dualState.selectedMode = mode;
      navigate("#home", true);
      return;
    }
    const persona = personaForResult(result);
    const asset = resultAssetFor(mode, persona);
    if (!asset) {
      showToast("当前人格缺少正式动物资产，结果暂时不能展示。");
      navigate("#home", true);
      return;
    }
    const isSelf = mode === "self";
    const recognition = isSelf ? persona.ability : persona.label;
    const shareLine = isSelf
      ? persona.shareLine
      : (persona.profile?.coreTension || persona.label);
    const otherMode = isSelf ? "project" : "self";
    const otherResult = sanitizeResult(dualState.results[otherMode], otherMode);
    const recommendationHtml = isSelf ? selfProjectRecommendationHTML(result) : "";
    const shareHref = resultShareHref(mode, result);
    const ratingRows = resultRatingRows(result);

    setVisiblePage("result", mode);
    dualState.returnMode = mode;
    elements.result.innerHTML = `
      <article class="dual-result-card dual-result-${mode}">
        <header class="dual-result-topline">
          <span>${isSelf ? "你的商业动物人格" : "你的项目动物人格"}</span>
          <strong>${isSelf ? "自我" : "项目"}</strong>
        </header>
        <section class="dual-collectible-card">
          <header class="dual-collectible-title">
            <span>${escapeHtml(modeCopy[mode].identity)}</span>
            <h1 id="dualResultTitle" tabindex="-1">${escapeHtml(persona.name)}</h1>
            <b>${escapeHtml(result.code)}</b>
          </header>
          <span class="dual-collectible-seal" aria-hidden="true">DNA<small>MATCHED</small></span>
          <div class="dual-collectible-ratings">
            ${ratingRows.map(row => `
              <span>${escapeHtml(row.label)}<b>${row.stars}</b></span>
            `).join("")}
          </div>
          <figure class="dual-result-visual">
            <img id="dualResultImage" src="${escapeHtml(asset)}" decoding="async" fetchpriority="high" alt="${escapeHtml(persona.assetAlt)}" />
          </figure>
          <footer>DNA 档案 · ${escapeHtml(result.code)}</footer>
        </section>
        <blockquote class="dual-result-quote">
          <p>${escapeHtml(shareLine)}</p>
          <small>${escapeHtml(recognition)}</small>
        </blockquote>
        <section class="dual-result-roast">
          <span>DNA评价</span>
          <p>${escapeHtml(persona.roast)}</p>
        </section>
        ${recommendationHtml}
        <footer class="dual-result-actions">
          ${canMatch() ? '<button class="primary" data-dual-open-match type="button">查看同频度</button>' : ""}
          <button class="${canMatch() ? "" : "primary"}" data-dual-share data-share-href="${escapeHtml(shareHref)}" type="button">分享结果</button>
          <button data-dual-other="${otherMode}" type="button">${otherResult ? `查看${modeCopy[otherMode].label}结果` : `去${modeCopy[otherMode].label}`}</button>
          <button class="text" data-dual-home type="button">返回首页</button>
        </footer>
      </article>
    `;
    bindResultImageState();
    focusHeading(document.getElementById("dualResultTitle"));
  }

  function resultShareHref(mode, result) {
    const params = new URLSearchParams({
      type: mode,
      code: result.code,
    });
    return `share.html?${params.toString()}`;
  }

  function matchShareHref(match) {
    const params = new URLSearchParams({
      type: "match",
      self: dualState.results.self.code,
      project: dualState.results.project.code,
      score: String(match.matchPercent),
      roast: match.roastLine,
    });
    return `share.html?${params.toString()}`;
  }

  function resetShareDialog() {
    document.body.classList.remove("dual-share-open");
    elements.shareFrame?.removeAttribute("src");
  }

  function openShareDialog(href) {
    const target = String(href || "").trim();
    if (!target.startsWith("share.html?")) return;
    if (!elements.shareDialog || !elements.shareFrame) {
      globalScope.location.href = target;
      return;
    }
    elements.shareFrame.src = `${target}&embed=1`;
    document.body.classList.add("dual-share-open");
    if (typeof elements.shareDialog.showModal === "function") {
      if (!elements.shareDialog.open) elements.shareDialog.showModal();
    } else {
      elements.shareDialog.setAttribute("open", "");
    }
  }

  function closeShareDialog() {
    if (!elements.shareDialog) return;
    if (typeof elements.shareDialog.close === "function" && elements.shareDialog.open) {
      elements.shareDialog.close();
      return;
    }
    elements.shareDialog.removeAttribute("open");
    resetShareDialog();
  }

  function selfProjectRecommendationHTML(result) {
    const rows = experienceSystem.recommendProjects(result.code, globalScope.PARK_CASE_DATA?.cases || [], 3);
    if (!rows.length) return "";
    const [primary, ...alternatives] = rows;
    const item = primary.item;
    const tags = (item.heroTags || item.scenarioTags || []).slice(0, 3);
    return `
      <section class="dual-project-recommendation" aria-labelledby="dualProjectRecommendationTitle">
        <header>
          <h2 id="dualProjectRecommendationTitle">适合你的同频项目</h2>
          <span>项目推荐</span>
        </header>
        <div class="dual-project-recommendation-main">
          <div>
            <h3>${escapeHtml(item.name || "推荐项目")}</h3>
            <strong>${escapeHtml(item.dna?.code || "")}</strong>
            <p>${escapeHtml(item.usable || item.value || "先观察它如何把空间、内容与运营节奏放在一起。")}</p>
            <button data-dual-recommendation-detail type="button">查看项目 <b aria-hidden="true">→</b></button>
          </div>
          <img src="${escapeHtml(item.image || "")}" loading="lazy" decoding="async" alt="${escapeHtml(item.name || "推荐项目")}" />
        </div>
        ${tags.length ? `<div class="dual-project-tags">${tags.map(tag => `<i>${escapeHtml(tag)}</i>`).join("")}</div>` : ""}
        <details>
          <summary>为什么推荐给我</summary>
          <p>${escapeHtml(item.bestFor || item.copyConditions || "它与你的四轴倾向接近，适合作为现场观察样本。")}</p>
          ${item.caution ? `<small>别照搬：${escapeHtml(item.caution)}</small>` : ""}
          ${alternatives.length ? `
            <div class="dual-project-alternatives">
              <span>另外两个可以顺路看</span>
              ${alternatives.map(row => `<strong>${escapeHtml(row.item.name || "")} · ${escapeHtml(row.relationLabel)}</strong>`).join("")}
            </div>
          ` : ""}
        </details>
      </section>
    `;
  }

  function calculateMatch() {
    if (!canMatch()) return null;
    const selfResult = dualState.results.self;
    const projectResult = dualState.results.project;
    dualState.match = matchSystem.calculate({
      operatorAxisRatios: selfResult.axisRatios,
      projectAxisRatios: projectResult.axisRatios,
    });
    return dualState.match;
  }

  function renderMatch() {
    const match = calculateMatch();
    if (!match) {
      navigate("#home", true);
      return;
    }
    const selfPersona = personaForResult(dualState.results.self);
    const projectPersona = personaForResult(dualState.results.project);
    const retestMode = dualState.returnMode || "self";
    setVisiblePage("match");
    elements.match.innerHTML = `
      <article class="dual-match-result">
        <header>
          <h1 id="dualMatchTitle" tabindex="-1">商业 DNA 同频度</h1>
        </header>
        <section class="dual-match-score">
          <span>MATCH</span>
          <strong>${match.matchPercent}<small>%</small></strong>
          <b>商业同频记录</b>
          <code>${escapeHtml(dualState.results.self.code)} × ${escapeHtml(dualState.results.project.code)}</code>
        </section>
        <blockquote>${escapeHtml(match.roastLine)}</blockquote>
        <section class="dual-match-unlocked">
          <div>
            <span>已解锁新卡片</span>
            <small>可加入卡册收藏</small>
          </div>
          <strong>${escapeHtml(selfPersona.name)} × ${escapeHtml(projectPersona.name)}</strong>
        </section>
        <footer>
          <a class="primary" href="${escapeHtml(matchShareHref(match))}" target="_blank" rel="noopener">分享同频度 <b aria-hidden="true">↗</b></a>
          <button data-dual-home type="button">返回首页</button>
          <button data-dual-retest="${retestMode}" type="button">再测一次</button>
        </footer>
      </article>
    `;
    focusHeading(document.getElementById("dualMatchTitle"));
  }

  function selectMode(mode) {
    if (!MODES.includes(mode)) return;
    dualState.selectedMode = mode;
    persistState();
    renderHome();
  }

  function startTest(mode, forceRetest = false) {
    if (!MODES.includes(mode)) return;
    const readiness = modeReady(mode);
    if (!readiness.ready) {
      showToast(readiness.reason);
      return;
    }
    const existingResult = sanitizeResult(dualState.results[mode], mode);
    if (existingResult && !forceRetest) {
      const confirmed = globalScope.confirm(`${modeCopy[mode].retest}会清除这一份旧结果，另一份结果会保留。继续吗？`);
      if (!confirmed) return;
    }
    if (existingResult) {
      dualState.results[mode] = null;
      dualState.drafts[mode] = null;
      dualState.match = null;
    }
    dualState.selectedMode = mode;
    dualState.activeMode = mode;
    dualState.drafts[mode] = sanitizeDraft(dualState.drafts[mode], mode) || createDraft(mode);
    persistState();
    navigate(`#test/${mode}`);
  }

  function answerCurrentQuestion(optionId) {
    if (dualState.answerLocked) return;
    const mode = dualState.activeMode;
    const draft = sanitizeDraft(dualState.drafts[mode], mode);
    const definition = definitionFor(mode);
    const question = definition.questions[draft?.questionIndex];
    if (!draft || !question || !question.options.some(option => option.id === optionId)) return;
    dualState.answerLocked = true;
    draft.answersByQuestionId[question.id] = optionId;
    draft.updatedAt = new Date().toISOString();

    const nextUnansweredIndex = definition.questions.findIndex((item, index) => (
      index > draft.questionIndex && !draft.answersByQuestionId[item.id]
    ));
    if (nextUnansweredIndex >= 0) {
      draft.questionIndex = nextUnansweredIndex;
      persistState();
      renderQuestion();
      return;
    }

    const missingIndex = definition.questions.findIndex(item => !draft.answersByQuestionId[item.id]);
    if (missingIndex >= 0) {
      draft.questionIndex = missingIndex;
      dualState.answerLocked = false;
      persistState();
      renderQuestion();
      showToast("还有跳过的题，补完就能生成结果。");
      return;
    }

    const answers = definition.questions.map(item => ({
      questionId: item.id,
      optionId: draft.answersByQuestionId[item.id],
    }));
    try {
      dualState.results[mode] = dualLogic.score(mode, answers);
      recordHistory(mode, dualState.results[mode]);
      dualState.drafts[mode] = null;
      dualState.match = null;
      persistState();
      navigate(`#result/${mode}`, true);
    } catch (error) {
      dualState.answerLocked = false;
      showToast(error.message || "答案还没有完成，请返回检查。");
    }
  }

  function backFromQuestion() {
    const mode = dualState.activeMode;
    const draft = sanitizeDraft(dualState.drafts[mode], mode);
    if (!draft || draft.questionIndex === 0) {
      persistState();
      navigate("#home");
      return;
    }
    draft.questionIndex -= 1;
    draft.updatedAt = new Date().toISOString();
    persistState();
    renderQuestion();
  }

  function skipCurrentQuestion() {
    const mode = dualState.activeMode;
    const draft = sanitizeDraft(dualState.drafts[mode], mode);
    const definition = definitionFor(mode);
    if (!draft) return;
    const nextIndex = definition.questions.findIndex((question, index) => (
      index > draft.questionIndex && !draft.answersByQuestionId[question.id]
    ));
    const wrappedIndex = definition.questions.findIndex((question, index) => (
      index < draft.questionIndex && !draft.answersByQuestionId[question.id]
    ));
    const targetIndex = nextIndex >= 0 ? nextIndex : wrappedIndex;
    if (targetIndex < 0) {
      showToast("最后一题需要选择答案，才能生成结果。");
      return;
    }
    draft.questionIndex = targetIndex;
    draft.updatedAt = new Date().toISOString();
    persistState();
    renderQuestion();
  }

  function toggleQuickMenu(forceOpen) {
    if (!elements.quickMenu || !elements.menuButton) return;
    const open = typeof forceOpen === "boolean" ? forceOpen : elements.quickMenu.hidden;
    elements.quickMenu.hidden = !open;
    elements.menuButton.setAttribute("aria-expanded", String(open));
    elements.menuButton.setAttribute("aria-label", open ? "关闭菜单" : "打开菜单");
  }

  function toggleRecommendationDetail(target) {
    const recommendation = target.closest(".dual-project-recommendation");
    const details = recommendation?.querySelector("details");
    if (!details) return;
    details.open = !details.open;
    if (details.open) {
      globalScope.requestAnimationFrame(() => details.scrollIntoView({ behavior: "smooth", block: "nearest" }));
    }
  }

  function retest(mode) {
    if (!MODES.includes(mode)) return;
    const confirmed = globalScope.confirm(`${modeCopy[mode].retest}会清除这一份旧结果，另一份结果会保留。继续吗？`);
    if (!confirmed) return;
    dualState.results[mode] = null;
    dualState.drafts[mode] = createDraft(mode);
    dualState.match = null;
    dualState.selectedMode = mode;
    persistState();
    navigate(`#test/${mode}`);
  }

  function showToast(message) {
    if (!elements.toast) return;
    elements.toast.textContent = message;
    elements.toast.hidden = false;
    globalScope.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = globalScope.setTimeout(() => {
      elements.toast.hidden = true;
    }, 2600);
  }

  function openHistoryEntry(id) {
    const entry = homeHistoryEntries().find(row => row.id === id);
    if (!entry) return;
    dualState.results[entry.mode] = entry.result;
    dualState.selectedMode = entry.mode;
    dualState.match = null;
    persistState();
    navigate(`#result/${entry.mode}`);
  }

  function parseRoute(hash = globalScope.location.hash) {
    const route = decodeURIComponent(String(hash || "#home")).replace(/^#/, "");
    if (!route || route === "home") return { screen: "home", mode: null };
    if (route === "match") return { screen: "match", mode: null };
    const [screen, mode] = route.split("/");
    if (["test", "result"].includes(screen) && MODES.includes(mode)) {
      return { screen: screen === "test" ? "question" : "result", mode };
    }
    return { screen: "home", mode: null };
  }

  function navigate(hash, replace = false) {
    const method = replace ? "replaceState" : "pushState";
    globalScope.history[method](null, "", hash);
    handleRoute();
  }

  function handleRoute() {
    const route = parseRoute();
    if (route.screen === "home") {
      renderHome();
      return;
    }
    if (route.screen === "question") {
      const readiness = modeReady(route.mode);
      if (!readiness.ready) {
        dualState.selectedMode = route.mode;
        globalScope.history.replaceState(null, "", "#home");
        renderHome();
        return;
      }
      dualState.activeMode = route.mode;
      dualState.selectedMode = route.mode;
      dualState.drafts[route.mode] = sanitizeDraft(dualState.drafts[route.mode], route.mode) || createDraft(route.mode);
      renderQuestion();
      return;
    }
    if (route.screen === "result") {
      if (!sanitizeResult(dualState.results[route.mode], route.mode)) {
        dualState.selectedMode = route.mode;
        globalScope.history.replaceState(null, "", "#home");
        renderHome();
        return;
      }
      renderResult(route.mode);
      return;
    }
    if (route.screen === "match") {
      if (!canMatch()) {
        globalScope.history.replaceState(null, "", "#home");
        renderHome();
        return;
      }
      renderMatch();
    }
  }

  async function loadAssetManifest() {
    dualState.assetGate = {
      status: "checking",
      reason: "正在读取操盘怪物资产清单。",
      assetsById: {},
    };
    const initialRoute = parseRoute();
    if (initialRoute.screen === "home") renderHome();
    else setVisiblePage(initialRoute.screen, initialRoute.mode);
    try {
      const response = await fetch(operatorSystem.assetManifestUrl, { cache: "no-store" });
      if (!response.ok) throw new Error(`资产清单读取失败（${response.status}）`);
      const manifest = await response.json();
      if (manifest.contentVersion !== operatorSystem.contentVersion) {
        throw new Error("人格内容与角色资产版本不一致。");
      }
      const validation = dualLogic.validateAssetManifest(manifest);
      if (!validation.valid) throw new Error(validation.errors.join("；"));
      dualState.assetGate = {
        status: "ready",
        reason: "",
        assetsById: validation.assetsById,
      };
    } catch (error) {
      dualState.assetGate = {
        status: "error",
        reason: error.message || "人的角色资产尚未准备完成。",
        assetsById: {},
      };
    }
    handleRoute();
  }

  function handleOwnedClick(event) {
    const target = event.target.closest(
      "[data-dual-mode], [data-dual-start], [data-dual-back], [data-dual-skip], [data-dual-option], "
      + "[data-dual-home], [data-dual-other], [data-dual-open-match], "
      + "[data-dual-view-result], [data-dual-retest], [data-dual-history-id], "
      + "[data-dual-menu], [data-dual-menu-close], "
      + "[data-dual-share], [data-dual-share-close], "
      + "[data-dual-recommendation-detail], "
      + ".brand[data-shell-page='home']",
    );
    if (!target) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    if (target.matches("[data-dual-mode]")) selectMode(target.dataset.dualMode);
    else if (target.matches("[data-dual-start]")) startTest(dualState.selectedMode);
    else if (target.matches("[data-dual-back]")) backFromQuestion();
    else if (target.matches("[data-dual-skip]")) skipCurrentQuestion();
    else if (target.matches("[data-dual-option]")) answerCurrentQuestion(target.dataset.dualOption);
    else if (target.matches("[data-dual-menu]")) toggleQuickMenu();
    else if (target.matches("[data-dual-menu-close]")) toggleQuickMenu(false);
    else if (target.matches("[data-dual-share]")) openShareDialog(target.dataset.shareHref);
    else if (target.matches("[data-dual-share-close]")) closeShareDialog();
    else if (target.matches("[data-dual-recommendation-detail]")) toggleRecommendationDetail(target);
    else if (target.matches("[data-dual-home], .brand[data-shell-page='home']")) navigate("#home");
    else if (target.matches("[data-dual-open-match]")) navigate("#match");
    else if (target.matches("[data-dual-view-result]")) navigate(`#result/${target.dataset.dualViewResult}`);
    else if (target.matches("[data-dual-retest]")) retest(target.dataset.dualRetest);
    else if (target.matches("[data-dual-history-id]")) openHistoryEntry(target.dataset.dualHistoryId);
    else if (target.matches("[data-dual-other]")) {
      const mode = target.dataset.dualOther;
      if (sanitizeResult(dualState.results[mode], mode)) navigate(`#result/${mode}`);
      else startTest(mode);
    }
  }

  function snapshot() {
    return JSON.parse(JSON.stringify({
      screen: dualState.screen,
      selectedMode: dualState.selectedMode,
      activeMode: dualState.activeMode,
      drafts: dualState.drafts,
      results: dualState.results,
      history: dualState.history,
      match: dualState.match,
      assetGate: dualState.assetGate,
      storageAvailable: dualState.storageAvailable,
    }));
  }

  async function init() {
    hydratePersistedState();
    document.addEventListener("click", handleOwnedClick, true);
    elements.shareDialog?.addEventListener("click", event => {
      if (event.target === elements.shareDialog) closeShareDialog();
    });
    elements.shareDialog?.addEventListener("close", resetShareDialog);
    globalScope.addEventListener("hashchange", () => queueMicrotask(handleRoute));
    globalScope.addEventListener("popstate", () => queueMicrotask(handleRoute));
    if (!globalScope.location.hash) globalScope.history.replaceState(null, "", "#home");
    await loadAssetManifest();
  }

  globalScope.COMMERCIAL_DNA_DUAL_APP_V0_1 = Object.freeze({
    parseRoute,
    canMatch,
    createDraft,
    snapshot,
    selectMode,
    startTest,
    answer: answerCurrentQuestion,
    back: backFromQuestion,
    skip: skipCurrentQuestion,
    retest,
    navigate,
    openHistoryEntry,
    handleRoute,
  });

  init();
})(typeof window !== "undefined" ? window : globalThis);
