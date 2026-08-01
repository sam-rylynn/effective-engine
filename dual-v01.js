(function attachCommercialDnaDualV01(globalScope) {
  "use strict";

  const dualLogic = globalScope.COMMERCIAL_DNA_DUAL_V0_1;
  const operatorSystem = globalScope.COMMERCIAL_DNA_OPERATOR_V1;
  const projectSystem = globalScope.COMMERCIAL_DNA_PERSONA;
  const projectPosterSystem = globalScope.COMMERCIAL_DNA_PROJECT_POSTERS_V0_1;
  const matchSystem = globalScope.COMMERCIAL_DNA_OPERATOR_MATCH_V0_1;
  const experienceSystem = globalScope.COMMERCIAL_DNA_DUAL_EXPERIENCE_V0_2;
  if (!dualLogic || !operatorSystem || !projectSystem || !projectPosterSystem || !matchSystem || !experienceSystem) return;

  const STORAGE_KEY = "commercial_dna_dual_test_v1";
  const PROJECT_CONTENT_VERSION = "project-persona-v1";
  const MODES = ["self", "project"];
  const DNA_CODE_PATTERN = /^[LD][SC][BM][ER]$/;
  const guideIcons = Object.freeze({
    back: "assets/vendor/bootstrap-icons/arrow-left.svg",
    next: "assets/vendor/bootstrap-icons/arrow-right.svg",
    location: "assets/vendor/bootstrap-icons/geo-alt.svg",
    type: "assets/vendor/bootstrap-icons/buildings.svg",
    stay: "assets/vendor/bootstrap-icons/shop.svg",
    consume: "assets/vendor/bootstrap-icons/bag.svg",
    revisit: "assets/vendor/bootstrap-icons/arrow-repeat.svg",
    observe: "assets/vendor/bootstrap-icons/eye.svg",
    takeaway: "assets/vendor/bootstrap-icons/clipboard2-check.svg",
    bookmark: "assets/vendor/bootstrap-icons/bookmark-star-fill.svg",
    warning: "assets/vendor/bootstrap-icons/exclamation-triangle.svg",
  });
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
    projectRoutesPage: document.getElementById("dual-project-routes"),
    fieldGuidePage: document.getElementById("dual-field-guide"),
    progress: document.getElementById("personaProgress"),
    count: document.getElementById("personaCount"),
    axis: document.getElementById("personaAxis"),
    question: document.getElementById("personaQuestion"),
    options: document.getElementById("personaOptions"),
    result: document.getElementById("personaResult"),
    match: document.getElementById("dualMatchResult"),
    projectRoutes: document.getElementById("dualProjectRoutes"),
    fieldGuide: document.getElementById("dualFieldGuide"),
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
    pendingMatchAfterSelf: false,
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
    const poster = projectPosterSystem.entryForResultCode(result.code);
    return {
      id: name,
      code: result.code,
      representativeCode: poster?.representativeCode || result.code,
      name,
      label: info[0],
      roast: info[1],
      profile: projectSystem.projectProfiles?.[result.code] || null,
      assetAlt: poster?.assetAlt || `${name}项目动物人格`,
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
      dualState.pendingMatchAfterSelf = Boolean(parsed.pendingMatchAfterSelf);
      if (!dualState.results.project) dualState.pendingMatchAfterSelf = false;
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
        pendingMatchAfterSelf: dualState.pendingMatchAfterSelf,
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
      routes: "dual-project-routes",
      guide: "dual-field-guide",
    }[screen] || "home";
    if (!["routes", "guide"].includes(screen)) {
      delete document.body.dataset.dualCode;
      delete document.body.dataset.dualProject;
    }
    if (elements.quickMenu) elements.quickMenu.hidden = true;
    if (elements.menuButton) elements.menuButton.setAttribute("aria-expanded", "false");

    const visibleId = {
      home: "home",
      question: "personality-test",
      result: "personality-result",
      match: "dual-match",
      routes: "dual-project-routes",
      guide: "dual-field-guide",
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
    return projectPosterSystem.entryForPersona(persona.name)?.asset || "";
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

  function projectBusinessJudgmentHTML(result, persona) {
    const judgment = projectPosterSystem.judgmentFor(result.code, projectSystem);
    return `
      <section class="dual-project-judgment" aria-labelledby="dualProjectJudgmentTitle">
        <header>
          <span>经营判断</span>
          <h2 id="dualProjectJudgmentTitle">这个项目接下来先看什么</h2>
        </header>
        <dl>
          <div>
            <dt>项目本能</dt>
            <dd>${escapeHtml(judgment.instinct)}</dd>
          </div>
          <div>
            <dt>经营风险</dt>
            <dd>${escapeHtml(judgment.risk)}</dd>
          </div>
          <div>
            <dt>现在先做</dt>
            <dd>${escapeHtml(judgment.action)}</dd>
          </div>
        </dl>
        <blockquote>
          <span>DNA 锐评</span>
          <p>${escapeHtml(judgment.roast)}</p>
        </blockquote>
        <p class="dual-visually-hidden">项目人格代表码为 ${escapeHtml(persona.representativeCode)}；同频项目排序继续使用完整测评码 ${escapeHtml(result.code)}。</p>
      </section>
    `;
  }

  function resultHomeButtonHTML() {
    return `
      <button class="text" data-dual-home type="button">
        <img class="dual-result-home-icon" src="assets/vendor/bootstrap-icons/house-fill.svg" alt="" aria-hidden="true" />
        <span>返回首页</span>
      </button>
    `;
  }

  function projectResultActionsHTML(result) {
    const hasSelfResult = Boolean(sanitizeResult(dualState.results.self, "self"));
    const canDirectShare = typeof globalScope.navigator?.share === "function";
    const shareHref = resultShareHref("project", result, { saveOnly: !canDirectShare });
    return `
      <footer class="dual-result-actions dual-project-result-actions" aria-label="测项目结果页操作">
        ${hasSelfResult
          ? '<button class="primary dual-project-primary" data-dual-open-match type="button">查看我和项目的同频度</button>'
          : '<button class="primary dual-project-primary" data-dual-start-match type="button">测测我和这个项目合不合</button>'}
        <button class="dual-project-share" data-dual-share data-share-href="${escapeHtml(shareHref)}" type="button">${canDirectShare ? "分享项目人格卡" : "保存项目人格卡"}</button>
        <button class="dual-project-retest" data-dual-retest="project" type="button">重新测项目</button>
        ${resultHomeButtonHTML()}
      </footer>
    `;
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
    const otherMode = isSelf ? "project" : "self";
    const otherResult = sanitizeResult(dualState.results[otherMode], otherMode);
    const recommendationHtml = projectRecommendationHTML(result, mode);
    const shareHref = resultShareHref(mode, result);

    setVisiblePage("result", mode);
    dualState.returnMode = mode;
    elements.result.innerHTML = `
      <article class="dual-result-card dual-result-${mode}">
        <figure class="dual-result-visual dual-result-image-only">
          <img id="dualResultImage" src="${escapeHtml(asset)}" decoding="async" fetchpriority="high" alt="${escapeHtml(persona.assetAlt)}" tabindex="-1" />
        </figure>
        ${isSelf ? `
          <section class="dual-result-roast">
            <span>DNA评价</span>
            <p>${escapeHtml(persona.roast)}</p>
          </section>
        ` : projectBusinessJudgmentHTML(result, persona)}
        ${recommendationHtml}
        ${isSelf ? `
          <footer class="dual-result-actions ${canMatch() ? "has-match" : "no-match"}" aria-label="结果页操作">
            ${canMatch() ? '<button class="primary" data-dual-open-match type="button">查看同频度</button>' : ""}
            <button class="${canMatch() ? "" : "primary"}" data-dual-share data-share-href="${escapeHtml(shareHref)}" type="button">分享结果</button>
            <button data-dual-other="${otherMode}" type="button">${otherResult ? `查看${modeCopy[otherMode].label}结果` : `去${modeCopy[otherMode].label}`}</button>
            ${resultHomeButtonHTML()}
          </footer>
        ` : projectResultActionsHTML(result)}
      </article>
    `;
    bindResultImageState();
    focusHeading(document.getElementById("dualResultImage"));
  }

  function resultShareHref(mode, result, { saveOnly = false } = {}) {
    const params = new URLSearchParams({
      type: mode,
      code: result.code,
    });
    if (saveOnly) params.set("saveOnly", "1");
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

  function recommendationMatchLabel(row) {
    const percent = Number.isFinite(row?.matchPercent) ? row.matchPercent : 0;
    return `${row?.relationLabel || "同频项目"} · ${percent}% 匹配`;
  }

  function guideIconHTML(name, className = "") {
    const source = guideIcons[name];
    if (!source) return "";
    return `<img class="dual-line-icon ${escapeHtml(className)}" src="${escapeHtml(source)}" alt="" aria-hidden="true" />`;
  }

  function projectRowsForCode(code) {
    const normalizedCode = String(code || "").toUpperCase();
    if (!DNA_CODE_PATTERN.test(normalizedCode)) return [];
    try {
      return experienceSystem.recommendProjects(
        normalizedCode,
        globalScope.PARK_CASE_DATA?.cases || [],
        3,
      );
    } catch (error) {
      return [];
    }
  }

  function projectGuideModel(row, sourceCode) {
    const item = row.item || {};
    const presentation = item.presentation || {};
    const businessProblem = presentation.businessProblem || item.value || item.usable || "先观察它如何把空间、内容与运营节奏放在一起。";
    const mechanism = Array.isArray(presentation.mechanism) && presentation.mechanism.length >= 4
      ? presentation.mechanism.slice(0, 4)
      : [
        {
          stage: "流量入口",
          body: item.audience || (item.heroTags || []).join("、") || "项目自身识别与目标客群到访",
        },
        {
          stage: "停留机制",
          body: (item.scenarioTags || []).join("、") || item.format || "空间体验与内容场景",
        },
        {
          stage: "消费承接",
          body: (item.leadFormats || []).join("、") || item.brands || "主力业态与消费场景",
        },
        {
          stage: "复访更新",
          body: item.next || item.usable || "持续更新内容与经营动作",
        },
      ];
    const learnPoints = Array.isArray(presentation.learnPoints) && presentation.learnPoints.length
      ? presentation.learnPoints
      : [
        item.usable,
        item.bestFor,
        item.next,
      ].filter(Boolean);
    const calibration = presentation.matchCalibration?.recommendedCodes?.find(candidate => (
      String(candidate?.code || "").toUpperCase() === sourceCode
    ));
    const whyPrefix = row.exact
      ? `你的商业 DNA 与项目同为 ${sourceCode}`
      : `你的商业 DNA 是 ${sourceCode}，与项目的四轴匹配度为 ${row.matchPercent}%`;
    const why = calibration?.learning
      ? `${whyPrefix}；最值得对照的是${calibration.learning}。`
      : `${whyPrefix}；可重点比较它如何组织空间、内容、品牌和持续运营。`;
    const risk = presentation.risk || item.caution || item.copyConditions || "先补足现场经营数据，再决定是否照搬。";
    const titleBoundary = presentation.titleBoundary || "";
    const sourceBoundary = item.evidenceGate?.formalIngestReady === false
      ? `${item.sourceNote || "用户确认运行时样本"}；当前不计入六维正式证据库。`
      : item.sourceNote || "";
    const evidenceBoundary = [titleBoundary, sourceBoundary].filter(Boolean).join(" ");
    return {
      item,
      presentation,
      businessProblem,
      mechanism,
      learnPoints: learnPoints.filter(Boolean).slice(0, 3),
      risk,
      evidenceBoundary,
      why,
      valueTitle: presentation.valueTitle || item.special || item.usable || "项目观察手册",
      summary: presentation.oneLineValue || item.usable || item.value || businessProblem,
      tags: (item.heroTags || item.scenarioTags || []).slice(0, 3),
      location: [item.city, item.location].filter(Boolean).join(" · ") || "地点待核",
      type: item.format || item.subtype || item.archetype || "非标商业项目",
      operation: item.operator || item.archetype || "持续内容运营",
    };
  }

  function routeProjectCardHTML(row, index, sourceCode, originMode = "self") {
    const model = projectGuideModel(row, sourceCode);
    const item = model.item;
    const isPrimary = index === 0;
    const imageFitClass = item.imageFit === "contain" ? " is-contain" : "";
    const guideHref = `#guide/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}/${encodeURIComponent(item.id || "")}`;
    return `
      <a
        class="dual-route-card ${isPrimary ? "is-primary" : "is-alternative"}"
        href="${guideHref}"
        data-dual-recommendation-card
        data-dual-open-guide
        data-dual-origin="${escapeHtml(originMode)}"
        data-dual-code="${escapeHtml(sourceCode)}"
        data-project-id="${escapeHtml(item.id || "")}"
        data-recommendation-rank="${index + 1}"
        data-match-percent="${escapeHtml(row.matchPercent || 0)}"
        aria-label="查看${escapeHtml(item.name || "推荐项目")}项目详情"
      >
        <figure class="dual-route-card-media${imageFitClass}">
          <img src="${escapeHtml(item.image || "")}" loading="${isPrimary ? "eager" : "lazy"}" decoding="async" alt="${escapeHtml(item.name || "推荐项目")}" />
          <span class="dual-route-bookmark" aria-hidden="true">${guideIconHTML("bookmark")}</span>
        </figure>
        <div class="dual-route-card-copy">
          <span class="dual-route-match">${escapeHtml(recommendationMatchLabel(row))}</span>
          <h2>${escapeHtml(item.name || "推荐项目")}</h2>
          <strong>${escapeHtml(item.dna?.code || "")}</strong>
          <p>${escapeHtml(model.summary)}</p>
          ${model.tags.length ? `<div class="dual-project-tags">${model.tags.map(tag => `<i>${escapeHtml(tag)}</i>`).join("")}</div>` : ""}
          <dl class="dual-route-card-meta">
            <div>${guideIconHTML("location")}<dt>城市</dt><dd>${escapeHtml(item.city || "待核")}</dd></div>
            <div>${guideIconHTML("type")}<dt>类型</dt><dd>${escapeHtml(item.subtype || item.format || "非标项目")}</dd></div>
            <div>${guideIconHTML("revisit")}<dt>机制</dt><dd>${escapeHtml(item.archetype || "持续运营")}</dd></div>
          </dl>
          ${isPrimary ? `
            <span class="dual-route-primary-action">
              查看项目
              ${guideIconHTML("next")}
            </span>
          ` : ""}
          ${isPrimary ? "" : `<span class="dual-route-card-arrow" aria-hidden="true">${guideIconHTML("next")}</span>`}
        </div>
      </a>
    `;
  }

  function projectRecommendationHTML(result, originMode = "self") {
    const rows = projectRowsForCode(result.code);
    if (!rows.length) return "";
    const [primary] = rows;
    const item = primary.item || {};
    const model = projectGuideModel(primary, result.code);
    const routesHref = `#routes/${encodeURIComponent(originMode)}/${encodeURIComponent(result.code)}`;
    const title = originMode === "project" ? "与这个项目同频的参考项目" : "适合你的同频项目";
    return `
      <section class="dual-project-recommendation" aria-labelledby="dualProjectRecommendationTitle">
        <header>
          <h2 id="dualProjectRecommendationTitle">${title}</h2>
          <span>按匹配度排序</span>
        </header>
        <article class="dual-project-recommendation-launch${item.imageFit === "contain" ? " is-contain" : ""}">
          <img src="${escapeHtml(item.image || "")}" loading="lazy" decoding="async" alt="${escapeHtml(item.name || "推荐项目")}" />
          <div>
            <span>${escapeHtml(recommendationMatchLabel(primary))}</span>
            <h3>${escapeHtml(item.name || "推荐项目")}</h3>
            <strong>${escapeHtml(item.dna?.code || "")}</strong>
            <p>${escapeHtml(model.summary)}</p>
            <a href="${routesHref}" data-dual-open-routes data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(result.code)}">
              查看同频项目路线册
              ${guideIconHTML("next")}
            </a>
          </div>
        </article>
        <p class="dual-project-recommendation-note">共 ${rows.length} 个独立项目页；进入路线册后按匹配度逐个查看，不在结果页展开。</p>
      </section>
    `;
  }

  function renderProjectRoutes(origin, code) {
    const originMode = MODES.includes(origin) ? origin : "self";
    const sourceCode = String(code || "").toUpperCase();
    const rows = projectRowsForCode(sourceCode);
    if (!rows.length || !elements.projectRoutes) {
      navigate("#home", true);
      return;
    }
    setVisiblePage("routes");
    document.body.dataset.dualCode = sourceCode;
    const [primary, ...alternatives] = rows;
    elements.projectRoutes.innerHTML = `
      <article class="dual-route-book" data-dual-recommendation-list-page data-dual-code="${escapeHtml(sourceCode)}">
        <button class="dual-page-back" data-dual-back-result data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}" type="button">
          ${guideIconHTML("back")}
          <span>返回${originMode === "project" ? "测项目" : "测我"}结果</span>
        </button>
        <nav class="dual-route-breadcrumb" aria-label="页面位置">
          <span>你的结果</span>
          ${guideIconHTML("next")}
          <strong>同频项目</strong>
        </nav>
        <header class="dual-route-book-heading">
          <div>
            <h1 id="dualRouteBookTitle" tabindex="-1">同频项目路线册</h1>
            <p>从最同频的项目开始，逐个进入独立项目页</p>
          </div>
          <span class="dual-route-title-mark" aria-hidden="true">${guideIconHTML("bookmark")}</span>
        </header>
        <section class="dual-route-primary" aria-label="最同频项目">
          ${routeProjectCardHTML(primary, 0, sourceCode, originMode)}
        </section>
        ${alternatives.length ? `
          <section class="dual-route-next" aria-labelledby="dualRouteNextTitle">
            <header>
              <h2 id="dualRouteNextTitle">下一站 · 其他同频</h2>
              <span>按匹配度排序</span>
            </header>
            <div class="dual-route-list">
              ${alternatives.map((row, index) => routeProjectCardHTML(row, index + 1, sourceCode, originMode)).join("")}
            </div>
          </section>
        ` : ""}
        <p class="dual-route-footnote">
          ${guideIconHTML("bookmark")}
          <span>星标项目代表与你的 ${escapeHtml(sourceCode)} 高度同频，建议优先探索。</span>
        </p>
      </article>
    `;
    focusHeading(document.getElementById("dualRouteBookTitle"));
  }

  function renderFieldGuide(origin, code, projectId) {
    const originMode = MODES.includes(origin) ? origin : "self";
    const sourceCode = String(code || "").toUpperCase();
    const rows = projectRowsForCode(sourceCode);
    const currentIndex = rows.findIndex(row => row.item?.id === projectId);
    if (currentIndex < 0 || !elements.fieldGuide) {
      navigate(`#routes/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}`, true);
      return;
    }
    const row = rows[currentIndex];
    const model = projectGuideModel(row, sourceCode);
    const item = model.item;
    const nextRow = rows.length > 1 ? rows[(currentIndex + 1) % rows.length] : null;
    const routesHref = `#routes/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}`;
    const nextHref = nextRow
      ? `#guide/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}/${encodeURIComponent(nextRow.item?.id || "")}`
      : routesHref;
    const observationIcons = ["location", "stay", "consume", "revisit"];
    const observationPrefixes = ["先看", "再看", "接着看", "最后看"];

    setVisiblePage("guide");
    document.body.dataset.dualCode = sourceCode;
    document.body.dataset.dualProject = item.id || "";
    elements.fieldGuide.innerHTML = `
      <article class="dual-field-guide" data-dual-project-page data-project-id="${escapeHtml(item.id || "")}" data-dual-code="${escapeHtml(sourceCode)}">
        <header class="dual-field-guide-topbar">
          <a href="${routesHref}" data-dual-back-routes data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}">
            ${guideIconHTML("back")}
            <span>返回同频项目</span>
          </a>
          <strong>路线 <b>${String(currentIndex + 1).padStart(2, "0")}</b> / ${String(rows.length).padStart(2, "0")}</strong>
        </header>
        <section class="dual-field-guide-hero${item.imageFit === "contain" ? " is-contain" : ""}">
          <header>
            <div>
              <h1 id="dualFieldGuideTitle" tabindex="-1">${escapeHtml(item.name || "项目观察手册")}</h1>
              <strong>${escapeHtml(item.dna?.code || "")}</strong>
              <span>${escapeHtml(recommendationMatchLabel(row))}</span>
              <h2>${escapeHtml(model.valueTitle)}</h2>
              ${model.tags.length ? `<div class="dual-project-tags">${model.tags.map(tag => `<i>${escapeHtml(tag)}</i>`).join("")}</div>` : ""}
            </div>
            <span class="dual-route-title-mark" aria-hidden="true">${guideIconHTML("bookmark")}</span>
          </header>
          <img src="${escapeHtml(item.image || "")}" decoding="async" fetchpriority="high" alt="${escapeHtml(item.name || "项目")}项目现场" />
        </section>
        <section class="dual-field-guide-why" aria-labelledby="dualFieldGuideWhyTitle">
          <h2 id="dualFieldGuideWhyTitle">${guideIconHTML("observe")}为什么与你同频</h2>
          <p>${escapeHtml(model.why)}</p>
        </section>
        <section class="dual-field-observations" aria-labelledby="dualFieldObservationTitle">
          <h2 id="dualFieldObservationTitle">${guideIconHTML("observe")}现场观察路线</h2>
          <ol>
            ${model.mechanism.map((step, index) => `
              <li>
                <span class="dual-field-observation-icon">${guideIconHTML(observationIcons[index] || "observe")}</span>
                <div>
                  <h3>${escapeHtml(observationPrefixes[index] || "观察")}${escapeHtml(step.stage || "运营动作")}</h3>
                  <p>${escapeHtml(step.body || "")}</p>
                </div>
              </li>
            `).join("")}
          </ol>
        </section>
        <section class="dual-field-takeaways" aria-labelledby="dualFieldTakeawayTitle">
          <h2 id="dualFieldTakeawayTitle">${guideIconHTML("takeaway")}带走三件事</h2>
          <ol>
            ${model.learnPoints.map(point => `<li>${escapeHtml(point)}</li>`).join("")}
          </ol>
        </section>
        <section class="dual-field-warning" aria-labelledby="dualFieldWarningTitle">
          <h2 id="dualFieldWarningTitle">${guideIconHTML("warning")}不要直接照搬</h2>
          <p>${escapeHtml(model.risk)}</p>
          ${model.evidenceBoundary ? `<small>证据边界：${escapeHtml(model.evidenceBoundary)}</small>` : ""}
        </section>
        <footer class="dual-field-actions">
          <a class="primary" href="${routesHref}" data-dual-back-routes data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}">
            ${guideIconHTML("back")}
            <span>返回同频项目</span>
          </a>
          <a href="${nextHref}" ${nextRow ? `data-dual-open-guide data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}" data-project-id="${escapeHtml(nextRow.item?.id || "")}"` : `data-dual-back-routes data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}"`}>
            <span>${nextRow ? `下一站：${escapeHtml(nextRow.item?.name || "同频项目")}` : "返回路线册"}</span>
            ${guideIconHTML("next")}
          </a>
        </footer>
      </article>
    `;
    focusHeading(document.getElementById("dualFieldGuideTitle"));
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
    const selfAsset = resultAssetFor("self", selfPersona);
    const frequencyLabel = match.matchPercent >= 75
      ? "高频同频"
      : (match.matchPercent >= 60 ? "频率在线" : "偶尔同频");
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
          <b>${frequencyLabel}</b>
          <code>MATCH NO. ${escapeHtml(dualState.results.self.code)}-${escapeHtml(dualState.results.project.code)}-${match.matchPercent}</code>
        </section>
        <blockquote>${escapeHtml(match.roastLine)}</blockquote>
        <section class="dual-match-unlocked">
          <div>
            <span>已解锁新卡片</span>
            <small>可加入卡册收藏</small>
          </div>
          <figure class="dual-match-unlocked-card">
            <img src="${escapeHtml(selfAsset)}" decoding="async" alt="${escapeHtml(selfPersona.name)}" />
            <b>${escapeHtml(selfPersona.name)} × ${escapeHtml(projectPersona.name)}</b>
          </figure>
        </section>
        <footer>
          <button class="primary" data-dual-share data-share-href="${escapeHtml(matchShareHref(match))}" type="button">分享同频度 <b aria-hidden="true">↗</b></button>
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
      const shouldOpenPendingMatch = mode === "self"
        && dualState.pendingMatchAfterSelf
        && Boolean(sanitizeResult(dualState.results.project, "project"));
      dualState.pendingMatchAfterSelf = false;
      persistState();
      navigate(shouldOpenPendingMatch ? "#match" : `#result/${mode}`, true);
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

  function backToResult(origin, code) {
    const mode = MODES.includes(origin) ? origin : "self";
    const result = sanitizeResult(dualState.results[mode], mode);
    if (result?.code === code) {
      navigate(`#result/${mode}`);
      return;
    }
    navigate("#home");
  }

  function retest(mode) {
    if (!MODES.includes(mode)) return;
    const confirmed = globalScope.confirm(`${modeCopy[mode].retest}会清除这一份旧结果，另一份结果会保留。继续吗？`);
    if (!confirmed) return;
    dualState.results[mode] = null;
    dualState.drafts[mode] = createDraft(mode);
    dualState.match = null;
    dualState.pendingMatchAfterSelf = false;
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
    const parts = route.split("/");
    const [screen, mode] = parts;
    if (["test", "result"].includes(screen) && MODES.includes(mode)) {
      return { screen: screen === "test" ? "question" : "result", mode };
    }
    if (screen === "routes") {
      const legacy = parts.length === 2;
      const originMode = legacy ? "self" : parts[1];
      const code = String(legacy ? parts[1] : parts[2] || "").toUpperCase();
      if (MODES.includes(originMode) && DNA_CODE_PATTERN.test(code) && parts.length === (legacy ? 2 : 3)) {
        return { screen: "routes", mode: null, originMode, code };
      }
    }
    if (screen === "guide") {
      const legacy = parts.length === 3;
      const originMode = legacy ? "self" : parts[1];
      const code = String(legacy ? parts[1] : parts[2] || "").toUpperCase();
      const projectId = String(legacy ? parts[2] : parts[3] || "");
      if (
        MODES.includes(originMode)
        && DNA_CODE_PATTERN.test(code)
        && /^case-[a-zA-Z0-9_-]+$/.test(projectId)
        && parts.length === (legacy ? 3 : 4)
      ) {
        return { screen: "guide", mode: null, originMode, code, projectId };
      }
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
    if (route.screen === "routes") {
      renderProjectRoutes(route.originMode, route.code);
      return;
    }
    if (route.screen === "guide") {
      renderFieldGuide(route.originMode, route.code, route.projectId);
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
      + "[data-dual-home], [data-dual-other], [data-dual-open-match], [data-dual-start-match], "
      + "[data-dual-view-result], [data-dual-retest], [data-dual-history-id], "
      + "[data-dual-menu], [data-dual-menu-close], "
      + "[data-dual-share], [data-dual-share-close], "
      + "[data-dual-open-routes], [data-dual-open-guide], "
      + "[data-dual-back-routes], [data-dual-back-result], "
      + ".brand[data-shell-page='home']",
    );
    if (!target) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    if (target.matches("[data-dual-mode]")) selectMode(target.dataset.dualMode);
    else if (target.matches("[data-dual-start]")) {
      dualState.pendingMatchAfterSelf = false;
      startTest(dualState.selectedMode);
    }
    else if (target.matches("[data-dual-back]")) backFromQuestion();
    else if (target.matches("[data-dual-skip]")) skipCurrentQuestion();
    else if (target.matches("[data-dual-option]")) answerCurrentQuestion(target.dataset.dualOption);
    else if (target.matches("[data-dual-menu]")) toggleQuickMenu();
    else if (target.matches("[data-dual-menu-close]")) toggleQuickMenu(false);
    else if (target.matches("[data-dual-share]")) openShareDialog(target.dataset.shareHref);
    else if (target.matches("[data-dual-share-close]")) closeShareDialog();
    else if (target.matches("[data-dual-start-match]")) {
      dualState.pendingMatchAfterSelf = true;
      persistState();
      startTest("self");
    }
    else if (target.matches("[data-dual-open-routes]")) {
      const originMode = MODES.includes(target.dataset.dualOrigin) ? target.dataset.dualOrigin : "self";
      navigate(`#routes/${encodeURIComponent(originMode)}/${encodeURIComponent(String(target.dataset.dualCode || "").toUpperCase())}`);
    }
    else if (target.matches("[data-dual-open-guide]")) {
      const originMode = MODES.includes(target.dataset.dualOrigin) ? target.dataset.dualOrigin : "self";
      navigate(
        `#guide/${encodeURIComponent(originMode)}/${encodeURIComponent(String(target.dataset.dualCode || "").toUpperCase())}/${encodeURIComponent(target.dataset.projectId || "")}`,
      );
    }
    else if (target.matches("[data-dual-back-routes]")) {
      const originMode = MODES.includes(target.dataset.dualOrigin) ? target.dataset.dualOrigin : "self";
      navigate(`#routes/${encodeURIComponent(originMode)}/${encodeURIComponent(String(target.dataset.dualCode || "").toUpperCase())}`);
    }
    else if (target.matches("[data-dual-back-result]")) {
      backToResult(
        MODES.includes(target.dataset.dualOrigin) ? target.dataset.dualOrigin : "self",
        String(target.dataset.dualCode || "").toUpperCase(),
      );
    }
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
      pendingMatchAfterSelf: dualState.pendingMatchAfterSelf,
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
