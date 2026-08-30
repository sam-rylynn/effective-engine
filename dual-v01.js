(function attachCommercialDnaDualV01(globalScope) {
  "use strict";

  const dualLogic = globalScope.COMMERCIAL_DNA_DUAL_V0_1;
  const operatorSystem = globalScope.COMMERCIAL_DNA_OPERATOR_V1;
  const projectSystem = globalScope.COMMERCIAL_DNA_PERSONA;
  const projectPosterSystem = globalScope.COMMERCIAL_DNA_PROJECT_POSTERS_V0_1;
  const matchSystem = globalScope.COMMERCIAL_DNA_OPERATOR_MATCH_V0_1;
  const experienceSystem = globalScope.COMMERCIAL_DNA_DUAL_EXPERIENCE_V0_2;
  const sampleAtlas = globalScope.COMMERCIAL_DNA_SAMPLE_ATLAS_V0_1;
  if (!dualLogic || !operatorSystem || !projectSystem || !projectPosterSystem || !matchSystem || !experienceSystem || !sampleAtlas) return;

  const STORAGE_KEY = "commercial_dna_dual_test_v1";
  const DIRECTORY_HISTORY_STATE_KEY = "commercialDnaDirectoryScrollV1";
  const DIRECTORY_SESSION_KEY_PREFIX = "commercial_dna_directory_scroll_v1:";
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
    homeProjectSamples: document.getElementById("dualHomeProjectSamples"),
    homeBrandSamples: document.getElementById("dualHomeBrandSamples"),
    testPage: document.getElementById("personality-test"),
    resultPage: document.getElementById("personality-result"),
    matchPage: document.getElementById("dual-match"),
    projectRoutesPage: document.getElementById("dual-project-routes"),
    allProjectsPage: document.getElementById("dual-all-projects"),
    fieldGuidePage: document.getElementById("dual-field-guide"),
    projectLibraryPage: document.getElementById("dual-project-library"),
    projectSampleDetailPage: document.getElementById("dual-project-sample-detail"),
    brandLibraryPage: document.getElementById("dual-brand-library"),
    brandDetailPage: document.getElementById("dual-brand-detail"),
    progress: document.getElementById("personaProgress"),
    count: document.getElementById("personaCount"),
    axis: document.getElementById("personaAxis"),
    question: document.getElementById("personaQuestion"),
    options: document.getElementById("personaOptions"),
    result: document.getElementById("personaResult"),
    match: document.getElementById("dualMatchResult"),
    projectRoutes: document.getElementById("dualProjectRoutes"),
    allProjects: document.getElementById("dualAllProjects"),
    fieldGuide: document.getElementById("dualFieldGuide"),
    projectLibrary: document.getElementById("dualProjectLibrary"),
    projectSampleDetail: document.getElementById("dualProjectSampleDetail"),
    brandLibrary: document.getElementById("dualBrandLibrary"),
    brandDetail: document.getElementById("dualBrandDetail"),
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

  function safeHttpUrl(value = "") {
    const raw = String(value || "").trim();
    if (!/^https?:\/\//i.test(raw)) return "";
    try {
      const url = new URL(raw);
      return ["http:", "https:"].includes(url.protocol) ? url.href : "";
    } catch (error) {
      return "";
    }
  }

  function safeBrandImageUrl(value = "") {
    const raw = String(value || "").trim();
    return /^(?:brand-assets|brand-review-assets|assets)\/[^\x00<>"'`]+\.(?:avif|webp|png|jpe?g)(?:[?#][^\x00<>"'`]*)?$/i.test(raw) && !raw.includes("..")
      ? raw
      : "";
  }

  function safeProjectImageUrl(value = "") {
    const raw = String(value || "").trim();
    return /^assets\/[^\x00<>"'`]+\.(?:avif|webp|png|jpe?g)(?:[?#][^\x00<>"'`]*)?$/i.test(raw) && !raw.includes("..")
      ? raw
      : "";
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
      return { ready: false, reason: "测试暂时无法开始，请稍后重试。" };
    }
    if (mode === "self" && dualState.assetGate.status !== "ready") {
      return { ready: false, reason: dualState.assetGate.reason };
    }
    return { ready: true, reason: "" };
  }

  function publicProjectValueTitle(item, presentation = {}) {
    const candidate = String(
      presentation.valueTitle
      || item?.special
      || item?.usable
      || "",
    ).trim();
    if (
      !candidate
      || /六维正式|参考样本|待核样本|运行时样本|证据库|终审入库|用户确认/.test(candidate)
    ) {
      return item?.subtype || item?.format || item?.archetype || "项目观察";
    }
    return candidate;
  }

  function publicProjectText(value = "") {
    return String(value || "")
      .replace(/用户提出的内部经营底线/g, "观察目标")
      .replace(/内部经营底线/g, "观察目标")
      .replace(/当前审计事实/g, "当前经营现状")
      .replace(/仍待补/g, "还看不出")
      .replace(/待补/g, "尚不明确")
      .replace(/待核/g, "尚不明确")
      .replace(/核验/g, "确认");
  }

  function syncDesktopNavigation(screen) {
    const nav = document.querySelector("[data-dual-desktop-nav]");
    if (!nav) return;
    const section = ["home", "question", "result", "match"].includes(screen)
      ? "test"
      : (["routes", "samples", "guide", "projectLibrary", "projectDetail"].includes(screen)
        ? "projects"
        : (["brandLibrary", "brandDetail"].includes(screen) ? "brands" : ""));
    nav.querySelectorAll("a, button").forEach(item => {
      const itemSection = item.matches("button[data-dual-mode]")
        ? "test"
        : (item.matches("[data-dual-open-project-library]")
          ? "projects"
          : (item.matches("[data-dual-open-brand-library]") ? "brands" : "profile"));
      const active = Boolean(section && section === itemSection);
      item.classList.toggle("is-active", active);
      item.classList.remove("active");
      if (active) item.setAttribute("aria-current", "page");
      else item.removeAttribute("aria-current");
    });
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
      samples: "dual-all-projects",
      guide: "dual-field-guide",
      projectLibrary: "dual-project-library",
      projectDetail: "dual-project-sample-detail",
      brandLibrary: "dual-brand-library",
      brandDetail: "dual-brand-detail",
    }[screen] || "home";
    if (!["routes", "samples", "guide", "projectDetail"].includes(screen)) {
      delete document.body.dataset.dualCode;
      delete document.body.dataset.dualProject;
    }
    if (screen !== "brandDetail") delete document.body.dataset.dualBrand;
    if (elements.quickMenu) elements.quickMenu.hidden = true;
    if (elements.menuButton) elements.menuButton.setAttribute("aria-expanded", "false");
    syncDesktopNavigation(screen);

    const visibleId = {
      home: "home",
      question: "personality-test",
      result: "personality-result",
      match: "dual-match",
      routes: "dual-project-routes",
      samples: "dual-all-projects",
      guide: "dual-field-guide",
      projectLibrary: "dual-project-library",
      projectDetail: "dual-project-sample-detail",
      brandLibrary: "dual-brand-library",
      brandDetail: "dual-brand-detail",
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

  function directoryRouteKey(route) {
    if (route?.screen === "projectLibrary") return "samples/projects";
    if (route?.screen === "brandLibrary") return "samples/brands";
    if (route?.screen === "routes") return `routes/${route.originMode}/${route.code}`;
    if (route?.screen === "samples") return `samples/${route.originMode}/${route.code}`;
    return "";
  }

  function detailDirectoryRouteKey(route) {
    if (route?.screen === "projectDetail") return "samples/projects";
    if (route?.screen === "brandDetail") return "samples/brands";
    if (route?.screen === "guide") {
      return `${route.scope === "all" ? "samples" : "routes"}/${route.originMode}/${route.code}`;
    }
    return "";
  }

  function directoryDescriptor(routeKey) {
    if (routeKey === "samples/projects") {
      return {
        root: elements.projectLibrary,
        cardSelector: "[data-project-library-card]",
        searchSelector: "[data-dual-project-library-search]",
        idForCard: card => String(card.dataset.projectId || ""),
        filter: search => filterProjectLibrary(search),
      };
    }
    if (routeKey === "samples/brands") {
      return {
        root: elements.brandLibrary,
        cardSelector: "[data-brand-library-card]",
        searchSelector: "[data-dual-brand-library-search]",
        idForCard: card => String(card.dataset.brandId || ""),
        filter: root => filterBrandLibrary(root),
      };
    }
    if (/^routes\/(?:self|project)\/[A-Z]{4}$/.test(routeKey)) {
      return {
        root: elements.projectRoutes,
        cardSelector: "[data-dual-recommendation-card]",
        searchSelector: "",
        idForCard: card => String(card.dataset.projectId || ""),
        filter: () => {},
      };
    }
    if (/^samples\/(?:self|project)\/[A-Z]{4}$/.test(routeKey)) {
      return {
        root: elements.allProjects,
        cardSelector: "[data-dual-all-sample-card]",
        searchSelector: "[data-dual-sample-search]",
        idForCard: card => String(card.dataset.projectId || ""),
        filter: search => filterAllProjectSamples(search),
      };
    }
    return null;
  }

  function sanitizeDirectorySnapshot(value, expectedRouteKey = "") {
    if (!value || typeof value !== "object") return null;
    const routeKey = String(value.routeKey || "");
    if (!/^(?:samples\/(?:projects|brands|(?:self|project)\/[A-Z]{4})|routes\/(?:self|project)\/[A-Z]{4})$/.test(routeKey)) return null;
    if (expectedRouteKey && routeKey !== expectedRouteKey) return null;
    const scrollY = Number(value.scrollY);
    const anchorTop = Number(value.anchorTop);
    if (!Number.isFinite(scrollY) || scrollY < 0 || scrollY > 10_000_000) return null;
    return {
      routeKey,
      scrollY,
      anchorId: /^[a-zA-Z0-9_-]+$/.test(String(value.anchorId || ""))
        ? String(value.anchorId)
        : "",
      anchorTop: Number.isFinite(anchorTop) && anchorTop > -10_000 && anchorTop < 10_000
        ? anchorTop
        : null,
      query: String(value.query || "").slice(0, 200),
      category: routeKey === "samples/brands" ? String(value.category || "").slice(0, 120) : "",
    };
  }

  function historyDirectoryContext() {
    const state = globalScope.history?.state;
    if (!state || typeof state !== "object" || Array.isArray(state)) return null;
    const context = state[DIRECTORY_HISTORY_STATE_KEY];
    return context && typeof context === "object" ? context : null;
  }

  function writeDirectorySessionSnapshot(snapshot) {
    try {
      globalScope.sessionStorage?.setItem(
        `${DIRECTORY_SESSION_KEY_PREFIX}${snapshot.routeKey}`,
        JSON.stringify(snapshot),
      );
    } catch (error) {
      // History state remains the primary restoration path when session storage is unavailable.
    }
  }

  function readDirectorySessionSnapshot(routeKey) {
    try {
      return sanitizeDirectorySnapshot(
        JSON.parse(globalScope.sessionStorage?.getItem(`${DIRECTORY_SESSION_KEY_PREFIX}${routeKey}`) || "null"),
        routeKey,
      );
    } catch (error) {
      return null;
    }
  }

  function currentScrollTop() {
    const candidates = [
      globalScope.scrollY,
      document.documentElement?.scrollTop,
      document.body?.scrollTop,
    ];
    return Math.max(0, Number(candidates.find(Number.isFinite)) || 0);
  }

  function directorySnapshot(route = parseRoute()) {
    const routeKey = directoryRouteKey(route);
    if (!routeKey) return null;
    const descriptor = directoryDescriptor(routeKey);
    const root = descriptor?.root;
    if (!root?.querySelectorAll) return null;
    const visibleCards = [...root.querySelectorAll(descriptor.cardSelector)].filter(card => !card.hidden);
    const anchor = visibleCards.find(card => card.getBoundingClientRect().bottom > 0) || null;
    const anchorId = anchor ? descriptor.idForCard(anchor) : "";
    const anchorTop = anchor ? anchor.getBoundingClientRect().top : null;
    return sanitizeDirectorySnapshot({
      routeKey,
      scrollY: currentScrollTop(),
      anchorId,
      anchorTop,
      query: descriptor.searchSelector ? root.querySelector(descriptor.searchSelector)?.value || "" : "",
      category: routeKey === "samples/brands"
        ? root.querySelector("[data-dual-brand-library-category]")?.value || ""
        : "",
    }, routeKey);
  }

  function captureDirectorySnapshot(route = parseRoute()) {
    const snapshot = directorySnapshot(route);
    if (!snapshot) return null;
    const previousState = globalScope.history?.state;
    const state = previousState && typeof previousState === "object" && !Array.isArray(previousState)
      ? previousState
      : {};
    globalScope.history.replaceState({
      ...state,
      [DIRECTORY_HISTORY_STATE_KEY]: {
        kind: "directory",
        routeKey: snapshot.routeKey,
        snapshot,
      },
    }, "", globalScope.location.href || globalScope.location.hash);
    writeDirectorySessionSnapshot(snapshot);
    return snapshot;
  }

  function directorySnapshotToRestore(routeKey) {
    const context = historyDirectoryContext();
    if (context?.kind !== "directory" || context.routeKey !== routeKey) return null;
    return sanitizeDirectorySnapshot(context.snapshot, routeKey);
  }

  function restoreDirectorySnapshot(routeKey, root) {
    const snapshot = directorySnapshotToRestore(routeKey);
    if (!snapshot || !root?.querySelectorAll) return;
    const descriptor = directoryDescriptor(routeKey);
    if (!descriptor) return;
    const search = descriptor.searchSelector ? root.querySelector(descriptor.searchSelector) : null;
    if (search) search.value = snapshot.query;
    if (routeKey === "samples/brands") {
      const category = root.querySelector("[data-dual-brand-library-category]");
      if (category && [...category.options].some(option => option.value === snapshot.category)) {
        category.value = snapshot.category;
      }
      descriptor.filter(root);
    } else if (search) {
      descriptor.filter(search);
    }

    globalScope.requestAnimationFrame(() => {
      globalScope.requestAnimationFrame(() => {
        if (directoryRouteKey(parseRoute()) !== routeKey) return;
        const anchor = [...root.querySelectorAll(descriptor.cardSelector)].find(card => (
          !card.hidden
          && descriptor.idForCard(card) === snapshot.anchorId
        ));
        const targetY = anchor && snapshot.anchorTop !== null
          ? currentScrollTop() + anchor.getBoundingClientRect().top - snapshot.anchorTop
          : snapshot.scrollY;
        globalScope.scrollTo(0, Math.max(0, targetY));
      });
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
    renderHomeSamples();
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
      elements.progress.setAttribute("aria-valuenow", String(draft.questionIndex + 1));
      elements.progress.setAttribute("aria-valuemax", String(definition.questions.length));
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
      figure.innerHTML = "<p>角色图片加载失败，分享已暂停。请刷新后重试。</p>";
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
      showToast("角色图片暂时无法加载，请稍后重试。");
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
        <header class="dual-result-page-heading dual-visually-hidden">
          <span>${isSelf ? "MY COMMERCIAL DNA" : "PROJECT COMMERCIAL DNA"}</span>
          <h1 id="dualResultTitle" tabindex="-1">${isSelf ? "我的商业 DNA" : "项目商业 DNA"} · ${escapeHtml(persona.name)}</h1>
        </header>
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
    focusHeading(document.getElementById("dualResultTitle"));
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

  function projectRowsForCode(code, limit = 3) {
    const normalizedCode = String(code || "").toUpperCase();
    if (!DNA_CODE_PATTERN.test(normalizedCode)) return [];
    try {
      return experienceSystem.recommendProjects(
        normalizedCode,
        globalScope.PARK_CASE_DATA?.cases || [],
        limit,
      );
    } catch (error) {
      return [];
    }
  }

  function allProjectRowsForCode(code) {
    const allCases = globalScope.PARK_CASE_DATA?.cases || [];
    return projectRowsForCode(code, allCases.length);
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
    const exactNarrative = presentation.matchCalibration?.exactNarrative || "";
    const whyPrefix = row.exact
      ? `你的商业 DNA 与项目同为 ${sourceCode}`
      : `你的商业 DNA 是 ${sourceCode}，与项目的四轴匹配度为 ${row.matchPercent}%`;
    const why = row.exact && exactNarrative
      ? exactNarrative
      : calibration?.learning
        ? `${whyPrefix}；最值得对照的是${calibration.learning}。`
        : `${whyPrefix}；可重点比较它如何组织空间、内容、品牌和持续运营。`;
    const risk = presentation.risk || item.caution || item.copyConditions || "先补足现场经营数据，再决定是否照搬。";
    const riskItems = Array.isArray(presentation.riskItems)
      ? presentation.riskItems
        .map(candidate => typeof candidate === "string" ? candidate : candidate?.body)
        .filter(Boolean)
      : [];
    const titleBoundary = presentation.titleBoundary || "";
    const sourceBoundary = item.evidenceGate?.formalIngestReady === false
      ? `${item.sourceNote || "用户确认运行时样本"}；当前不计入六维正式证据库。`
      : item.sourceNote || "";
    const evidenceBoundary = [titleBoundary, sourceBoundary].filter(Boolean).join(" ");
    return {
      item,
      presentation,
      businessProblem: publicProjectText(businessProblem),
      mechanism: mechanism.map(step => ({
        ...step,
        stage: publicProjectText(step?.stage),
        body: publicProjectText(step?.body),
      })),
      learnPoints: learnPoints.filter(Boolean).map(publicProjectText).slice(0, 3),
      risk: publicProjectText(risk),
      riskItems: riskItems.map(publicProjectText),
      evidenceBoundary,
      publicNotice: publicProjectText(titleBoundary),
      why: publicProjectText(why),
      valueTitle: publicProjectValueTitle(item, presentation),
      summary: publicProjectText(presentation.oneLineValue || item.usable || item.value || businessProblem),
      tags: (item.heroTags || item.scenarioTags || [])
        .filter(tag => !/六维正式|参考样本|待核样本|运行时样本|证据库|终审入库|用户确认/.test(String(tag || "")))
        .slice(0, 3),
      location: [item.city, item.location].filter(Boolean).join(" · "),
      type: item.format || item.subtype || item.archetype || "非标商业项目",
      operation: item.operator || item.archetype || "持续内容运营",
    };
  }

  function sampleProjectCardHTML(item, context = "home") {
    const summary = publicProjectText(sampleAtlas.projectSummary(item));
    const code = String(item?.dna?.code || "").toUpperCase();
    const meta = [item?.city, item?.subtype || item?.format].filter(Boolean).join(" · ");
    const headingTag = context === "home" ? "h4" : "h3";
    const searchText = [item?.name, item?.city, item?.subtype, item?.format, code, summary]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const libraryAttributes = context === "library"
      ? `data-project-library-card data-project-search="${escapeHtml(searchText)}"`
      : "";
    return `
      <a
        class="dual-sample-card is-project"
        href="#samples/projects/${encodeURIComponent(item?.id || "")}"
        data-dual-open-project-sample
        data-project-id="${escapeHtml(item?.id || "")}"
        ${libraryAttributes}
        aria-label="查看${escapeHtml(item?.name || "项目")}项目样本"
      >
        <figure class="dual-sample-card-media${item?.imageFit === "contain" ? " is-contain" : ""}">
          <img src="${escapeHtml(item?.image || "")}" loading="lazy" decoding="async" alt="${escapeHtml(item?.name || "项目")}项目现场" />
        </figure>
        <div class="dual-sample-card-copy">
          ${meta ? `<span>${escapeHtml(meta)}</span>` : ""}
          <${headingTag}>${escapeHtml(item?.name || "项目样本")}</${headingTag}>
          ${code ? `<div><strong>${escapeHtml(code)}</strong><small>项目 DNA</small></div>` : ""}
          <p>${escapeHtml(summary)}</p>
          <b><span>查看项目</span><span aria-hidden="true">→</span></b>
        </div>
      </a>
    `;
  }

  function sampleBrandCardHTML(item, context = "home") {
    const summary = sampleAtlas.brandSummary(item);
    const recordedCity = sampleAtlas.recordedCity(item);
    const city = /^(?:待补|城市待补)$/u.test(recordedCity) ? "" : recordedCity;
    const category = sampleAtlas.brandCategoryLabel(item).replace(/类$/u, "") || "品牌";
    const headingTag = context === "home" ? "h4" : "h3";
    const coverImage = sampleAtlas.brandEntryImageModel(item);
    const coverImageUrl = safeBrandImageUrl(coverImage?.localSrc);
    const searchText = [item?.name, city, item?.category, item?.subCategory, ...(item?.tags || [])]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    const brandCardClasses = [
      "dual-sample-card",
      "is-brand",
      coverImageUrl ? "has-brand-cover" : "is-brand-missing-cover",
    ].join(" ");
    const libraryAttributes = context === "library"
      ? `data-brand-library-card data-brand-category="${escapeHtml(item?.category || "未分类")}" data-brand-search="${escapeHtml(searchText)}"`
      : "";
    return `
      <a
        class="${brandCardClasses}"
        href="#samples/brands/${encodeURIComponent(item?.id || "")}"
        data-dual-open-brand-sample
        data-brand-id="${escapeHtml(item?.id || "")}"
        ${libraryAttributes}
        aria-label="查看${escapeHtml(item?.name || "品牌")}品牌样本"
      >
        ${coverImageUrl ? `
          <figure
            class="dual-brand-card-media"
            data-brand-card-image
            data-entry-image-selection="${escapeHtml(coverImage?.selection || "fallback")}"
            data-reuse-status="${escapeHtml(coverImage?.reuseStatus || "unknown")}"
          >
            <img
              src="${escapeHtml(coverImageUrl)}"
              alt="${escapeHtml(coverImage?.alt || `${item?.name || "品牌"}门店形象`)}"
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <strong>${escapeHtml(category)}</strong>
              ${city ? `<small>${escapeHtml(city)}</small>` : ""}
            </figcaption>
          </figure>
        ` : `
          <div class="dual-brand-fact-panel">
            <strong>${escapeHtml(category)}</strong>
            ${city ? `<small>所在城市</small><b>${escapeHtml(city)}</b>` : ""}
          </div>
        `}
        <div class="dual-sample-card-copy">
          <${headingTag}>${escapeHtml(item?.name || "品牌样本")}</${headingTag}>
          <p>${escapeHtml(summary)}</p>
          <b><span>查看品牌</span><span aria-hidden="true">→</span></b>
        </div>
      </a>
    `;
  }

  function renderHomeSamples() {
    const projects = sampleAtlas.featuredProjects(
      globalScope.PARK_CASE_DATA,
      globalScope.COMMERCIAL_DNA_FORMAL_PROJECT_SAMPLES_V0_1,
      2,
    );
    const brands = sampleAtlas.featuredBrands(globalScope.COMMERCIAL_DNA_SYSTEM, 2);
    if (elements.homeProjectSamples) {
      elements.homeProjectSamples.innerHTML = projects.length
        ? projects.map(item => sampleProjectCardHTML(item, "home")).join("")
        : `<p class="dual-sample-empty">暂时没有项目可看。</p>`;
    }
    if (elements.homeBrandSamples) {
      elements.homeBrandSamples.innerHTML = brands.length
        ? brands.map(item => sampleBrandCardHTML(item, "home")).join("")
        : `<p class="dual-sample-empty">暂时没有品牌可看。</p>`;
    }
  }

  function filterProjectLibrary(input) {
    const root = input?.closest?.("[data-dual-project-library]");
    if (!root) return;
    const query = String(input.value || "").trim().toLowerCase();
    const cards = [...root.querySelectorAll("[data-project-library-card]")];
    let visible = 0;
    cards.forEach(card => {
      const matched = !query || String(card.dataset.projectSearch || "").includes(query);
      card.hidden = !matched;
      if (matched) visible += 1;
    });
    const count = root.querySelector("[data-project-library-count]");
    const empty = root.querySelector("[data-project-library-empty]");
    if (count) count.textContent = `显示 ${visible} 个项目样本`;
    if (empty) empty.hidden = visible !== 0;
  }

  function renderProjectLibrary() {
    if (!elements.projectLibrary) return;
    const rows = sampleAtlas.projectRows(globalScope.PARK_CASE_DATA);
    const typeCount = new Set(rows.map(item => item?.subtype || item?.format).filter(Boolean)).size;
    const cityCount = new Set(rows.map(item => item?.city).filter(Boolean)).size;
    setVisiblePage("projectLibrary");
    elements.projectLibrary.innerHTML = `
      <article class="dual-sample-library" data-dual-project-library>
        <header class="dual-sample-library-topbar">
          <a href="#home" data-dual-home>${guideIconHTML("back")}<span>返回首页</span></a>
          <strong>PROJECT SAMPLES</strong>
        </header>
        <header class="dual-sample-library-heading">
          <span>SAMPLE ATLAS / 01</span>
          <h1 id="dualProjectLibraryTitle" tabindex="-1">项目样本</h1>
          <p>不依赖测试结果，直接浏览项目。这里讲项目如何组织空间、内容与持续运营，不提供万能答案。</p>
        </header>
        <dl class="dual-sample-library-summary">
          <div><dt>项目数量</dt><dd>${rows.length}</dd></div>
          <div><dt>项目类型</dt><dd>${typeCount}</dd></div>
          <div><dt>所在城市</dt><dd>${cityCount}</dd></div>
        </dl>
        <label class="dual-sample-library-search">
          <span>${guideIconHTML("observe")}搜索项目、城市、类型或 DNA</span>
          <input type="search" data-dual-project-library-search autocomplete="off" placeholder="例如：小西湖 / 南京 / 历史更新" />
        </label>
        <p class="dual-sample-library-count" data-project-library-count role="status">显示 ${rows.length} 个项目样本</p>
        <div class="dual-sample-library-grid">
          ${rows.map(item => sampleProjectCardHTML(item, "library")).join("")}
        </div>
        <p class="dual-sample-empty" data-project-library-empty hidden>没有找到对应项目，换个名称、城市或类型试试。</p>
      </article>
    `;
    focusHeading(document.getElementById("dualProjectLibraryTitle"));
    restoreDirectorySnapshot("samples/projects", elements.projectLibrary);
  }

  function renderProjectSampleDetail(projectId) {
    const item = sampleAtlas.projectById(projectId, globalScope.PARK_CASE_DATA);
    if (!item || !elements.projectSampleDetail) {
      navigate("#samples/projects", true);
      return;
    }
    const code = String(item?.dna?.code || "").toUpperCase();
    const model = projectGuideModel({ item, exact: true, matchPercent: 100 }, code);
    const observationIcons = ["location", "stay", "consume", "revisit"];
    const observationPrefixes = ["先看", "再看", "接着看", "最后看"];
    setVisiblePage("projectDetail");
    document.body.dataset.dualCode = code;
    document.body.dataset.dualProject = item.id || "";
    elements.projectSampleDetail.innerHTML = `
      <article class="dual-field-guide dual-project-sample-detail" data-dual-project-sample-detail data-project-id="${escapeHtml(item.id || "")}">
        <header class="dual-field-guide-topbar">
          <a href="#samples/projects" data-dual-open-project-library>${guideIconHTML("back")}<span>返回项目样本</span></a>
          <strong>PROJECT PROFILE</strong>
        </header>
        <section class="dual-field-guide-hero${item.imageFit === "contain" ? " is-contain" : ""}">
          <header>
            <div>
              <h1 id="dualProjectSampleDetailTitle" tabindex="-1">${escapeHtml(item.name || "项目观察手册")}</h1>
              ${code ? `<strong>${escapeHtml(code)}</strong>` : ""}
              ${item.city ? `<span>项目样本 · ${escapeHtml(item.city)}</span>` : ""}
              <h2>${escapeHtml(model.valueTitle)}</h2>
              ${model.tags.length ? `<div class="dual-project-tags">${model.tags.map(tag => `<i>${escapeHtml(tag)}</i>`).join("")}</div>` : ""}
            </div>
            <span class="dual-route-title-mark" aria-hidden="true">${guideIconHTML("bookmark")}</span>
          </header>
          ${item.image ? `<img src="${escapeHtml(item.image)}" decoding="async" fetchpriority="high" alt="${escapeHtml(item.name || "项目")}项目现场" />` : ""}
        </section>
        <section class="dual-field-problem" aria-labelledby="dualProjectProblemTitle">
          <h2 id="dualProjectProblemTitle">${guideIconHTML("observe")}它在解决什么商业问题</h2>
          <p>${escapeHtml(model.businessProblem)}</p>
        </section>
        <section class="dual-field-observations" aria-labelledby="dualProjectObservationTitle">
          <h2 id="dualProjectObservationTitle">${guideIconHTML("observe")}现场观察路线</h2>
          <ol>
            ${model.mechanism.map((step, index) => `
              <li>
                <span class="dual-field-observation-icon">${guideIconHTML(observationIcons[index] || "observe")}</span>
                <div><h3>${escapeHtml(observationPrefixes[index] || "观察")}${escapeHtml(step.stage || "运营动作")}</h3><p>${escapeHtml(step.body || "")}</p></div>
              </li>
            `).join("")}
          </ol>
        </section>
        <section class="dual-field-takeaways" aria-labelledby="dualProjectTakeawayTitle">
          <h2 id="dualProjectTakeawayTitle">${guideIconHTML("takeaway")}带走三件事</h2>
          <ol>${model.learnPoints.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ol>
        </section>
        <section class="dual-field-warning" aria-labelledby="dualProjectWarningTitle">
          <h2 id="dualProjectWarningTitle">${guideIconHTML("warning")}不要直接照搬</h2>
          ${model.riskItems.length
            ? `<ol class="dual-field-risk-list">${model.riskItems.map(point => `<li>${escapeHtml(point)}</li>`).join("")}</ol>`
            : `<p>${escapeHtml(model.risk)}</p>`}
          ${model.publicNotice ? `<small class="dual-field-context-note">需要注意：${escapeHtml(model.publicNotice)}</small>` : ""}
        </section>
        <footer class="dual-field-actions">
          <a class="primary" href="#samples/projects" data-dual-open-project-library>${guideIconHTML("back")}<span>返回项目样本</span></a>
          <a href="#samples/brands" data-dual-open-brand-library><span>继续看品牌样本</span>${guideIconHTML("next")}</a>
        </footer>
      </article>
    `;
    focusHeading(document.getElementById("dualProjectSampleDetailTitle"));
  }

  function filterBrandLibrary(root) {
    const library = root?.closest?.("[data-dual-brand-library]") || root;
    if (!library?.querySelectorAll) return;
    const query = String(library.querySelector("[data-dual-brand-library-search]")?.value || "").trim().toLowerCase();
    const category = String(library.querySelector("[data-dual-brand-library-category]")?.value || "");
    const cards = [...library.querySelectorAll("[data-brand-library-card]")];
    let visible = 0;
    cards.forEach(card => {
      const queryMatched = !query || String(card.dataset.brandSearch || "").includes(query);
      const categoryMatched = !category || card.dataset.brandCategory === category;
      card.hidden = !(queryMatched && categoryMatched);
      if (!card.hidden) visible += 1;
    });
    const count = library.querySelector("[data-brand-library-count]");
    const empty = library.querySelector("[data-brand-library-empty]");
    if (count) count.textContent = `显示 ${visible} 个品牌样本`;
    if (empty) empty.hidden = visible !== 0;
  }

  function renderBrandLibrary() {
    if (!elements.brandLibrary) return;
    const rows = sampleAtlas.brandRows(globalScope.COMMERCIAL_DNA_SYSTEM);
    const categories = Array.from(new Set(rows.map(item => item?.category).filter(Boolean))).sort((a, b) => a.localeCompare(b, "zh-CN"));
    const cityCount = new Set(rows.map(item => sampleAtlas.recordedCity(item)).filter(city => city !== "待补")).size;
    setVisiblePage("brandLibrary");
    elements.brandLibrary.innerHTML = `
      <article class="dual-sample-library dual-brand-library" data-dual-brand-library>
        <header class="dual-sample-library-topbar">
          <a href="#home" data-dual-home>${guideIconHTML("back")}<span>返回首页</span></a>
          <strong>BRAND SAMPLES</strong>
        </header>
        <header class="dual-sample-library-heading">
          <span>SAMPLE ATLAS / 02</span>
          <h1 id="dualBrandLibraryTitle" tabindex="-1">品牌样本</h1>
          <p>先认识品牌在做什么、在哪些城市出现。这里建立品牌认知，不给品牌预设固定项目。</p>
        </header>
        <dl class="dual-sample-library-summary">
          <div><dt>品牌数量</dt><dd>${rows.length}</dd></div>
          <div><dt>品牌品类</dt><dd>${categories.length}</dd></div>
          <div><dt>所在城市</dt><dd>${cityCount}</dd></div>
        </dl>
        <div class="dual-brand-library-filters">
          <label class="dual-sample-library-search">
            <span>${guideIconHTML("observe")}搜索品牌、品类或城市</span>
            <input type="search" data-dual-brand-library-search autocomplete="off" placeholder="例如：荒石公园 / 咖啡 / 成都" />
          </label>
          <label class="dual-brand-category-filter">
            <span>按品类浏览</span>
            <select data-dual-brand-library-category>
              <option value="">全部品类</option>
              ${categories.map(category => `<option value="${escapeHtml(category)}">${escapeHtml(category)}</option>`).join("")}
            </select>
          </label>
        </div>
        <p class="dual-sample-library-count" data-brand-library-count role="status">显示 ${rows.length} 个品牌样本</p>
        <div class="dual-sample-library-grid">
          ${rows.map(item => sampleBrandCardHTML(item, "library")).join("")}
        </div>
        <p class="dual-sample-empty" data-brand-library-empty hidden>没有找到对应品牌，换个名称、品类或城市试试。</p>
      </article>
    `;
    focusHeading(document.getElementById("dualBrandLibraryTitle"));
    restoreDirectorySnapshot("samples/brands", elements.brandLibrary);
  }

  function recommendedProjectCardHTML(item) {
    const code = String(item?.dna?.code || "").toUpperCase();
    const imageUrl = safeProjectImageUrl(item?.image);
    if (!imageUrl) return "";
    const projectType = item?.subtype || item?.format || "非标项目";
    return `
      <a class="dual-brand-project-card${item?.imageFit === "contain" ? " is-contain" : ""}" href="#samples/projects/${encodeURIComponent(item?.id || "")}" data-dual-open-project-sample data-project-id="${escapeHtml(item?.id || "")}" aria-label="查看${escapeHtml(item?.name || "项目")}项目样本">
        <figure>
          <img src="${escapeHtml(imageUrl)}" loading="lazy" decoding="async" alt="${escapeHtml(item?.name || "项目")}项目现场" />
          <figcaption>
            <h3>${escapeHtml(item?.name || "项目样本")}</h3>
            <div>${code ? `<strong>DNA · ${escapeHtml(code)}</strong>` : ""}<span>${escapeHtml(projectType)}</span></div>
          </figcaption>
        </figure>
      </a>
    `;
  }

  function brandGalleryImageHTML(image) {
    const imageUrl = safeBrandImageUrl(image?.localSrc);
    if (!imageUrl) return "";
    return `
      <figure class="dual-brand-gallery-item" data-brand-gallery-image data-reuse-status="${escapeHtml(image?.reuseStatus || "unknown")}" role="listitem">
        <img src="${escapeHtml(imageUrl)}" alt="${escapeHtml(image?.alt || "品牌图片")}" loading="lazy" decoding="async" />
      </figure>
    `;
  }

  function brandLearnMoreCardHTML(entry) {
    const destinationUrl = safeHttpUrl(entry?.url);
    const remoteCoverUrl = safeHttpUrl(entry?.coverUrl);
    const localCoverUrl = safeBrandImageUrl(entry?.coverLocalSrc);
    const coverUrl = remoteCoverUrl || localCoverUrl;
    const title = String(entry?.title || "").trim();
    if (!destinationUrl || !coverUrl || !title) return "";
    const contentType = entry?.contentType === "video" ? "video" : "article";
    const displayTitle = String(entry?.displayTitle || title).trim();
    return `
      <a class="dual-brand-learn-more-card is-${contentType}" href="${escapeHtml(destinationUrl)}" target="_blank" rel="noopener noreferrer external" data-brand-learn-more-card data-content-type="${contentType}" aria-label="在外部打开：${escapeHtml(title)}">
        <figure>
          <img src="${escapeHtml(coverUrl)}"${remoteCoverUrl && localCoverUrl ? ` data-fallback-cover="${escapeHtml(localCoverUrl)}"` : ""} alt="${escapeHtml(title)}封面" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
        </figure>
        <h3 lang="zh-CN">${escapeHtml(displayTitle)}</h3>
      </a>
    `;
  }

  function monitorBrandLearnMoreCovers(root) {
    const section = root?.querySelector?.("[data-brand-learn-more]");
    const grid = section?.querySelector?.(".dual-brand-learn-more-grid");
    const cards = Array.from(section?.querySelectorAll?.("[data-brand-learn-more-card]") || []);
    if (!section || !grid || !cards.length) return;
    const reconcile = () => {
      const visibleCards = cards.filter(card => !card.hidden);
      grid.classList.toggle("is-single", visibleCards.length === 1);
      section.hidden = visibleCards.length === 0;
    };
    cards.forEach(card => {
      const image = card.querySelector("img");
      if (!image) return;
      image.addEventListener("error", () => {
        const fallbackCover = safeBrandImageUrl(image.dataset.fallbackCover);
        if (fallbackCover && image.getAttribute("src") !== fallbackCover) {
          delete image.dataset.fallbackCover;
          image.removeAttribute("referrerpolicy");
          image.src = fallbackCover;
          return;
        }
        card.hidden = true;
        reconcile();
      });
    });
    reconcile();
  }

  function renderBrandDetail(brandId) {
    const item = sampleAtlas.brandById(brandId, globalScope.COMMERCIAL_DNA_SYSTEM);
    if (!item || !elements.brandDetail) {
      navigate("#samples/brands", true);
      return;
    }
    const model = sampleAtlas.brandDetailModel(item, globalScope.COMMERCIAL_DNA_SYSTEM);
    const relatedProjects = sampleAtlas.relatedProjects(
      item,
      globalScope.PARK_CASE_DATA,
      globalScope.COMMERCIAL_DNA_FORMAL_PROJECT_SAMPLES_V0_1,
      2,
    );
    const relatedProjectCards = relatedProjects
      .map(recommendedProjectCardHTML)
      .filter(Boolean)
      .slice(0, 2);
    const learnMoreCards = model.learnMore
      .map(brandLearnMoreCardHTML)
      .filter(Boolean);
    const footprintUrl = safeHttpUrl(model.footprint.publicUrl);
    const brandLogoUrl = safeBrandImageUrl(model.gallery.logo?.localSrc);
    const hasStoreSection = model.footprint.count !== null
      || model.footprint.showCitiesWithoutCount
      || Boolean(footprintUrl);
    const storeLocationLabels = Array.isArray(model.footprint.locationLabels)
      ? model.footprint.locationLabels
      : model.footprint.cities;
    const hasPhilosophy = model.philosophy.verified === true;
    setVisiblePage("brandDetail");
    document.body.dataset.dualBrand = item.id || "";
    elements.brandDetail.innerHTML = `
      <article class="dual-brand-detail" data-dual-brand-detail data-brand-id="${escapeHtml(item.id || "")}">
        <header class="dual-sample-library-topbar">
          <a href="#samples/brands" data-dual-open-brand-library>${guideIconHTML("back")}<span>返回品牌样本</span></a>
          <strong>BRAND PROFILE</strong>
        </header>
        <header class="dual-brand-detail-hero">
          <span>BRAND SAMPLE</span>
          <h1 id="dualBrandDetailTitle" tabindex="-1">${escapeHtml(item.name || "品牌样本")}</h1>
          <div class="dual-brand-category-chip" data-brand-category-label>${guideIconHTML("stay")}<span>${escapeHtml(model.categoryLabel)}</span></div>
        </header>
        ${hasStoreSection ? `<section class="dual-brand-store" aria-labelledby="dualBrandStoreTitle" data-brand-store data-store-scope="${escapeHtml(model.footprint.scope)}" data-store-scope-code="${escapeHtml(model.footprint.scopeCode)}" data-store-count-kind="${escapeHtml(model.footprint.countKind)}" data-store-qualifier="${escapeHtml(model.footprint.qualifier)}" data-store-cities-status="${escapeHtml(model.footprint.citiesStatus)}">
          <h2 class="dual-visually-hidden" id="dualBrandStoreTitle">门店信息</h2>
          ${model.footprint.count !== null ? `<div class="dual-brand-store-count" data-brand-store-count>
            ${model.footprint.countPrefix ? `<span class="dual-brand-store-prefix">${escapeHtml(model.footprint.countPrefix)}</span>` : ""}
            <strong>${escapeHtml(model.footprint.countDisplay)}</strong>
            ${model.footprint.unit ? `<span class="dual-brand-store-unit">${escapeHtml(model.footprint.unit)}</span>` : ""}
            ${storeLocationLabels.length ? `<span class="dual-brand-store-cities" data-brand-store-cities>${storeLocationLabels.map(escapeHtml).join(" · ")}</span>` : ""}
          </div>` : model.footprint.showCitiesWithoutCount && storeLocationLabels.length
            ? `<div class="dual-brand-store-count dual-brand-store-count--cities-only" data-brand-store-cities>${storeLocationLabels.map(escapeHtml).join(" · ")}</div>`
            : ""}
          ${footprintUrl ? `<div class="dual-brand-store-location"><span>${escapeHtml(model.footprint.publicUrlLabel)}</span><a class="dual-brand-store-link" href="${escapeHtml(footprintUrl)}" target="_blank" rel="noopener noreferrer"><span>查看地址</span><span aria-hidden="true">↗</span></a></div>` : ""}
        </section>` : ""}
        ${hasPhilosophy ? `<section class="dual-brand-philosophy" aria-labelledby="dualBrandPhilosophyTitle">
          <div class="dual-brand-philosophy-topline">
            <h2 id="dualBrandPhilosophyTitle">品牌理念</h2>
            ${brandLogoUrl
              ? `<img class="dual-brand-philosophy-logo" data-brand-logo data-reuse-status="${escapeHtml(model.gallery.logo.reuseStatus || "unknown")}" src="${escapeHtml(brandLogoUrl)}" alt="${escapeHtml(model.gallery.logo.alt)}" loading="lazy" decoding="async" />`
              : `<span aria-hidden="true">“</span>`}
          </div>
          <strong class="dual-brand-philosophy-headline" data-brand-philosophy-headline>${escapeHtml(model.philosophy.headline)}</strong>
          <p>${escapeHtml(model.philosophy.summary)}</p>
        </section>` : ""}
        ${model.gallery.images.length ? `<section class="dual-brand-gallery" data-brand-gallery-mode="${escapeHtml(model.gallery.mode || "unavailable")}" aria-label="品牌图片"><div class="dual-brand-gallery-track" data-brand-gallery-track role="list" tabindex="0" aria-label="左右滑动浏览品牌图片">${model.gallery.images.map(brandGalleryImageHTML).join("")}</div></section>` : ""}
        ${learnMoreCards.length ? `<section class="dual-brand-learn-more" data-brand-learn-more aria-labelledby="dualBrandLearnMoreTitle"><h2 id="dualBrandLearnMoreTitle">深入了解品牌</h2><div class="dual-brand-learn-more-grid">${learnMoreCards.join("")}</div></section>` : ""}
        <section class="dual-brand-recommendations" aria-labelledby="dualBrandRecommendationTitle">
          <p class="dual-brand-mother-question">${escapeHtml(sampleAtlas.brandNeedQuestion)}</p>
          <h2 id="dualBrandRecommendationTitle">DNA 推荐项目</h2>
          ${relatedProjectCards.length
            ? `<div class="dual-brand-project-grid">${relatedProjectCards.join("")}</div>`
            : `<p class="dual-brand-project-empty">暂时没有可推荐的项目。先回到区域人群与真实需求，再决定需要什么品牌。</p>`}
        </section>
        <footer class="dual-brand-detail-actions">
          <a href="#samples/brands" data-dual-open-brand-library>${guideIconHTML("back")}<span>返回品牌样本</span></a>
          <a href="#samples/projects" data-dual-open-project-library><span>浏览项目样本</span>${guideIconHTML("next")}</a>
        </footer>
      </article>
    `;
    monitorBrandLearnMoreCovers(elements.brandDetail);
    focusHeading(document.getElementById("dualBrandDetailTitle"));
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
            ${item.city ? `<div>${guideIconHTML("location")}<dt>城市</dt><dd>${escapeHtml(item.city)}</dd></div>` : ""}
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

  function allSampleGroupForRow(row) {
    if (row?.exact) return "exact";
    return Number(row?.matchPercent || 0) >= 58 ? "near" : "explore";
  }

  function allSampleCardHTML(row, index, sourceCode, originMode = "self") {
    const model = projectGuideModel(row, sourceCode);
    const item = model.item;
    const imageFitClass = item.imageFit === "contain" ? " is-contain" : "";
    const guideHref = `#guide/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}/${encodeURIComponent(item.id || "")}/all`;
    const searchText = [item.name, item.city, item.dna?.code, item.subtype, item.format, model.summary]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    return `
      <a
        class="dual-all-sample-card"
        href="${guideHref}"
        data-dual-all-sample-card
        data-dual-open-guide
        data-dual-guide-scope="all"
        data-dual-origin="${escapeHtml(originMode)}"
        data-dual-code="${escapeHtml(sourceCode)}"
        data-project-id="${escapeHtml(item.id || "")}"
        data-sample-group="${allSampleGroupForRow(row)}"
        data-sample-search="${escapeHtml(searchText)}"
        data-match-percent="${escapeHtml(row.matchPercent || 0)}"
        data-recommendation-rank="${index + 1}"
        aria-label="查看${escapeHtml(item.name || "项目样本")}独立项目页"
      >
        <figure class="dual-all-sample-media${imageFitClass}">
          <img src="${escapeHtml(item.image || "")}" loading="lazy" decoding="async" alt="${escapeHtml(item.name || "项目样本")}" />
        </figure>
        <div class="dual-all-sample-copy">
          <span>${escapeHtml(recommendationMatchLabel(row))}</span>
          <h3>${escapeHtml(item.name || "项目样本")}</h3>
          <div><strong>${escapeHtml(item.dna?.code || "")}</strong>${item.city ? `<small>${escapeHtml(item.city)}</small>` : ""}</div>
          <p>${escapeHtml(model.summary)}</p>
          <b>查看项目${guideIconHTML("next")}</b>
        </div>
      </a>
    `;
  }

  function projectRecommendationHTML(result, originMode = "self") {
    const rows = projectRowsForCode(result.code);
    if (!rows.length) return "";
    const allRows = allProjectRowsForCode(result.code);
    const [primary] = rows;
    const item = primary.item || {};
    const model = projectGuideModel(primary, result.code);
    const routesHref = `#routes/${encodeURIComponent(originMode)}/${encodeURIComponent(result.code)}`;
    const samplesHref = `#samples/${encodeURIComponent(originMode)}/${encodeURIComponent(result.code)}`;
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
        <p class="dual-project-recommendation-note">优先推荐 ${rows.length} 个项目；进入路线册后可按匹配度逐个查看。</p>
        <a class="dual-project-all-samples" href="${samplesHref}" data-dual-open-samples data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(result.code)}">
          <span>${guideIconHTML("bookmark")}浏览全部 ${allRows.length} 个项目样本</span>
          ${guideIconHTML("next")}
        </a>
      </section>
    `;
  }

  function renderProjectRoutes(origin, code) {
    const originMode = MODES.includes(origin) ? origin : "self";
    const sourceCode = String(code || "").toUpperCase();
    const rows = projectRowsForCode(sourceCode);
    const allRows = allProjectRowsForCode(sourceCode);
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
        <a class="dual-route-all-samples" href="#samples/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}" data-dual-open-samples data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}">
          <span>
            <small>不只看前三</small>
            <strong>浏览全部项目样本</strong>
            <em>同码优先，其余按四轴匹配度排序</em>
          </span>
          <b>${allRows.length}${guideIconHTML("next")}</b>
        </a>
      </article>
    `;
    focusHeading(document.getElementById("dualRouteBookTitle"));
    restoreDirectorySnapshot(`routes/${originMode}/${sourceCode}`, elements.projectRoutes);
  }

  function allSampleSectionHTML({ id, eyebrow, title, description, rows }, sourceCode, originMode, startIndex) {
    if (!rows.length) return "";
    return `
      <section class="dual-all-sample-section" data-dual-sample-section="${id}" aria-labelledby="dualAllSamples${id}Title">
        <header>
          <div>
            <span>${escapeHtml(eyebrow)}</span>
            <h2 id="dualAllSamples${id}Title">${escapeHtml(title)}</h2>
          </div>
          <strong>${rows.length}</strong>
        </header>
        <p>${escapeHtml(description)}</p>
        <div class="dual-all-sample-grid">
          ${rows.map((row, index) => allSampleCardHTML(row, startIndex + index, sourceCode, originMode)).join("")}
        </div>
      </section>
    `;
  }

  function filterAllProjectSamples(input) {
    const root = input?.closest?.("[data-dual-all-samples-page]");
    if (!root) return;
    const keyword = String(input.value || "").trim().toLowerCase();
    let visibleCount = 0;
    root.querySelectorAll("[data-dual-all-sample-card]").forEach(card => {
      const visible = !keyword || String(card.dataset.sampleSearch || "").includes(keyword);
      card.hidden = !visible;
      if (visible) visibleCount += 1;
    });
    root.querySelectorAll("[data-dual-sample-section]").forEach(section => {
      section.hidden = ![...section.querySelectorAll("[data-dual-all-sample-card]")]
        .some(card => !card.hidden);
    });
    const status = root.querySelector("[data-dual-sample-count]");
    if (status) status.textContent = keyword ? `找到 ${visibleCount} 个样本` : `显示全部 ${visibleCount} 个样本`;
    const empty = root.querySelector("[data-dual-sample-empty]");
    if (empty) empty.hidden = visibleCount > 0;
  }

  function renderAllProjectSamples(origin, code) {
    const originMode = MODES.includes(origin) ? origin : "self";
    const sourceCode = String(code || "").toUpperCase();
    const rows = allProjectRowsForCode(sourceCode);
    if (!rows.length || !elements.allProjects) {
      navigate("#home", true);
      return;
    }
    const exactRows = rows.filter(row => row.exact);
    const nearRows = rows.filter(row => !row.exact && row.matchPercent >= 58);
    const exploreRows = rows.filter(row => !row.exact && row.matchPercent < 58);
    const cityCount = new Set(rows.map(row => row.item?.city).filter(Boolean)).size;
    const routesHref = `#routes/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}`;
    let startIndex = 0;
    const exactSection = allSampleSectionHTML({
      id: "Exact",
      eyebrow: "100% MATCH",
      title: "同码样本",
      description: `与 ${sourceCode} 四轴完全同码，先看同类怎样走出不同经营路径。`,
      rows: exactRows,
    }, sourceCode, originMode, startIndex);
    startIndex += exactRows.length;
    const nearSection = allSampleSectionHTML({
      id: "Near",
      eyebrow: "NEARBY",
      title: "高度相近",
      description: "有一至两条轴不同，适合补看相邻打法与经营条件。",
      rows: nearRows,
    }, sourceCode, originMode, startIndex);
    startIndex += nearRows.length;
    const exploreSection = allSampleSectionHTML({
      id: "Explore",
      eyebrow: "EXPLORE",
      title: "延伸参考",
      description: "匹配度更低不等于没有价值；这里保留差异更大的项目，供你主动跨类型找灵感。",
      rows: exploreRows,
    }, sourceCode, originMode, startIndex);

    setVisiblePage("samples");
    document.body.dataset.dualCode = sourceCode;
    elements.allProjects.innerHTML = `
      <article class="dual-all-samples" data-dual-all-samples-page data-dual-code="${escapeHtml(sourceCode)}">
        <a class="dual-page-back" href="${routesHref}" data-dual-back-routes data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}">
          ${guideIconHTML("back")}
          <span>返回同频项目</span>
        </a>
        <nav class="dual-route-breadcrumb" aria-label="页面位置">
          <span>你的结果</span>
          ${guideIconHTML("next")}
          <span>同频项目</span>
          ${guideIconHTML("next")}
          <strong>全部样本</strong>
        </nav>
        <header class="dual-all-samples-heading">
          <div>
            <span>PROJECT ATLAS · ${escapeHtml(sourceCode)}</span>
            <h1 id="dualAllSamplesTitle" tabindex="-1">全部项目样本</h1>
            <p>不只看最匹配的前三。这里从同类项目一路展开到更多延伸方向。</p>
          </div>
          <span class="dual-route-title-mark" aria-hidden="true">${guideIconHTML("bookmark")}</span>
        </header>
        <aside class="dual-all-samples-sidebar" aria-label="样本筛选与统计">
          <dl class="dual-all-samples-summary">
            <div><dt>全部样本</dt><dd>${rows.length}</dd></div>
            <div><dt>同码样本</dt><dd>${exactRows.length}</dd></div>
            <div><dt>所在城市</dt><dd>${cityCount}</dd></div>
          </dl>
          <label class="dual-all-samples-search">
            <span>${guideIconHTML("observe")}搜索项目、城市或 DNA</span>
            <input type="search" data-dual-sample-search autocomplete="off" placeholder="例如：这有山 / 长春 / DCMR" />
          </label>
          <p class="dual-all-samples-count" data-dual-sample-count role="status">显示全部 ${rows.length} 个样本</p>
        </aside>
        <div class="dual-all-samples-content">
          ${exactSection}
          ${nearSection}
          ${exploreSection}
        </div>
        <p class="dual-all-samples-empty" data-dual-sample-empty hidden>没有找到匹配的样本，换个项目名、城市或 DNA 试试。</p>
      </article>
    `;
    focusHeading(document.getElementById("dualAllSamplesTitle"));
    restoreDirectorySnapshot(`samples/${originMode}/${sourceCode}`, elements.allProjects);
  }

  function renderFieldGuide(origin, code, projectId, scope = "routes") {
    const originMode = MODES.includes(origin) ? origin : "self";
    const sourceCode = String(code || "").toUpperCase();
    const allScope = scope === "all";
    const rows = allScope ? allProjectRowsForCode(sourceCode) : projectRowsForCode(sourceCode);
    let currentIndex = rows.findIndex(row => row.item?.id === projectId);
    let row = currentIndex >= 0 ? rows[currentIndex] : null;
    let routeIndex = currentIndex;
    let routeTotal = rows.length;
    if (!row) {
      try {
        const allRows = allProjectRowsForCode(sourceCode);
        routeIndex = allRows.findIndex(candidate => candidate.item?.id === projectId);
        routeTotal = allRows.length;
        row = routeIndex >= 0 ? allRows[routeIndex] : null;
      } catch (error) {
        row = null;
      }
    }
    if (!row || !elements.fieldGuide) {
      navigate(`${allScope ? "#samples" : "#routes"}/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}`, true);
      return;
    }
    const model = projectGuideModel(row, sourceCode);
    const item = model.item;
    const nextRow = rows.length > 1
      ? rows[currentIndex >= 0 ? (currentIndex + 1) % rows.length : 0]
      : null;
    const routesHref = `${allScope ? "#samples" : "#routes"}/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}`;
    const backData = allScope ? "data-dual-back-samples" : "data-dual-back-routes";
    const backLabel = allScope ? "返回全部样本" : "返回同频项目";
    const nextHref = nextRow
      ? `#guide/${encodeURIComponent(originMode)}/${encodeURIComponent(sourceCode)}/${encodeURIComponent(nextRow.item?.id || "")}${allScope ? "/all" : ""}`
      : routesHref;
    const observationIcons = ["location", "stay", "consume", "revisit"];
    const observationPrefixes = ["先看", "再看", "接着看", "最后看"];

    setVisiblePage("guide");
    document.body.dataset.dualCode = sourceCode;
    document.body.dataset.dualProject = item.id || "";
    elements.fieldGuide.innerHTML = `
      <article class="dual-field-guide" data-dual-project-page data-project-id="${escapeHtml(item.id || "")}" data-dual-code="${escapeHtml(sourceCode)}">
        <header class="dual-field-guide-topbar">
          <a href="${routesHref}" ${backData} data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}">
            ${guideIconHTML("back")}
            <span>${backLabel}</span>
          </a>
          <strong>路线 <b>${String(routeIndex + 1).padStart(2, "0")}</b> / ${String(routeTotal).padStart(2, "0")}</strong>
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
        <section class="dual-field-problem" data-dual-business-problem aria-labelledby="dualFieldProblemTitle">
          <h2 id="dualFieldProblemTitle">${guideIconHTML("observe")}它在解决什么商业问题</h2>
          <p>${escapeHtml(model.businessProblem)}</p>
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
          ${model.riskItems.length ? `
            <ol class="dual-field-risk-list">
              ${model.riskItems.map(point => `<li data-dual-risk-item>${escapeHtml(point)}</li>`).join("")}
            </ol>
          ` : `<p>${escapeHtml(model.risk)}</p>`}
          ${model.publicNotice ? `<small class="dual-field-context-note">需要注意：${escapeHtml(model.publicNotice)}</small>` : ""}
        </section>
        <footer class="dual-field-actions">
          <a class="primary" href="${routesHref}" ${backData} data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}">
            ${guideIconHTML("back")}
            <span>${backLabel}</span>
          </a>
          <a href="${nextHref}" ${nextRow ? `data-dual-open-guide data-dual-guide-scope="${allScope ? "all" : "routes"}" data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}" data-project-id="${escapeHtml(nextRow.item?.id || "")}"` : `${backData} data-dual-origin="${escapeHtml(originMode)}" data-dual-code="${escapeHtml(sourceCode)}"`}>
            <span>${nextRow ? `下一站：${escapeHtml(nextRow.item?.name || "同频项目")}` : backLabel}</span>
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
    if (parseRoute().screen === "home") renderHome();
    else navigate("#home");
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
    if (route === "sample-library") {
      return { screen: "projectLibrary", mode: null, canonicalHash: "#samples/projects" };
    }
    if (["ops-library", "profile", "brand-gate", "consumer-gate", "personality-test", "personality-result"].includes(route)) {
      return { screen: "shell", mode: null, page: route };
    }
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
    if (screen === "samples") {
      if (parts[1] === "projects") {
        if (parts.length === 2) return { screen: "projectLibrary", mode: null };
        const projectId = String(parts[2] || "");
        if (parts.length === 3 && /^case-[a-zA-Z0-9_-]+$/.test(projectId)) {
          return { screen: "projectDetail", mode: null, projectId };
        }
        return { screen: "home", mode: null };
      }
      if (parts[1] === "brands") {
        if (parts.length === 2) return { screen: "brandLibrary", mode: null };
        const brandId = String(parts[2] || "");
        if (parts.length === 3 && /^[a-zA-Z0-9_-]+$/.test(brandId)) {
          return { screen: "brandDetail", mode: null, brandId };
        }
        return { screen: "home", mode: null };
      }
      const originMode = parts[1];
      const code = String(parts[2] || "").toUpperCase();
      if (MODES.includes(originMode) && DNA_CODE_PATTERN.test(code) && parts.length === 3) {
        return { screen: "samples", mode: null, originMode, code };
      }
    }
    if (screen === "guide") {
      const legacy = parts.length === 3;
      const originMode = legacy ? "self" : parts[1];
      const code = String(legacy ? parts[1] : parts[2] || "").toUpperCase();
      const projectId = String(legacy ? parts[2] : parts[3] || "");
      const scope = !legacy && parts[4] === "all" ? "all" : "routes";
      if (
        MODES.includes(originMode)
        && DNA_CODE_PATTERN.test(code)
        && /^case-[a-zA-Z0-9_-]+$/.test(projectId)
        && parts.length === (legacy ? 3 : (scope === "all" ? 5 : 4))
      ) {
        return scope === "all"
          ? { screen: "guide", mode: null, originMode, code, projectId, scope }
          : { screen: "guide", mode: null, originMode, code, projectId };
      }
    }
    return { screen: "home", mode: null };
  }

  function navigate(hash, replace = false) {
    const currentRoute = parseRoute();
    const nextRoute = parseRoute(hash);
    const currentDirectoryKey = directoryRouteKey(currentRoute);
    const nextDirectoryKey = directoryRouteKey(nextRoute);
    const currentDetailKey = detailDirectoryRouteKey(currentRoute);
    const nextDetailKey = detailDirectoryRouteKey(nextRoute);
    const capturedSnapshot = currentDirectoryKey ? captureDirectorySnapshot(currentRoute) : null;
    let nextState = null;
    if (capturedSnapshot && nextDetailKey === currentDirectoryKey) {
      nextState = {
        [DIRECTORY_HISTORY_STATE_KEY]: {
          kind: "detail",
          routeKey: currentDirectoryKey,
          returnSnapshot: capturedSnapshot,
        },
      };
    } else if (currentDetailKey && nextDirectoryKey === currentDetailKey) {
      const context = historyDirectoryContext();
      const returnSnapshot = context?.kind === "detail" && context.routeKey === nextDirectoryKey
        ? sanitizeDirectorySnapshot(context.returnSnapshot, nextDirectoryKey)
          || readDirectorySessionSnapshot(nextDirectoryKey)
        : null;
      if (returnSnapshot) {
        nextState = {
          [DIRECTORY_HISTORY_STATE_KEY]: {
            kind: "directory",
            routeKey: nextDirectoryKey,
            snapshot: returnSnapshot,
          },
        };
      }
    }
    const method = replace ? "replaceState" : "pushState";
    globalScope.history[method](nextState, "", hash);
    handleRoute();
  }

  function handleRoute() {
    const route = parseRoute();
    if (route.canonicalHash && globalScope.location.hash !== route.canonicalHash) {
      globalScope.history.replaceState(globalScope.history.state, "", route.canonicalHash);
    }
    if (route.screen === "shell") {
      if (typeof globalScope.setAppPage === "function") globalScope.setAppPage(route.page, false);
      return;
    }
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
    if (route.screen === "samples") {
      renderAllProjectSamples(route.originMode, route.code);
      return;
    }
    if (route.screen === "guide") {
      renderFieldGuide(route.originMode, route.code, route.projectId, route.scope);
      return;
    }
    if (route.screen === "projectLibrary") {
      renderProjectLibrary();
      return;
    }
    if (route.screen === "projectDetail") {
      renderProjectSampleDetail(route.projectId);
      return;
    }
    if (route.screen === "brandLibrary") {
      renderBrandLibrary();
      return;
    }
    if (route.screen === "brandDetail") {
      renderBrandDetail(route.brandId);
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
      reason: "正在准备测试。",
      assetsById: {},
    };
    const initialRoute = parseRoute();
    if (initialRoute.screen === "home") renderHome();
    else if (initialRoute.screen === "shell") {
      if (typeof globalScope.setAppPage === "function") globalScope.setAppPage(initialRoute.page, false);
    } else setVisiblePage(initialRoute.screen, initialRoute.mode);
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
        reason: "测试暂时无法开始，请稍后重试。",
        assetsById: {},
      };
    }
    handleRoute();
  }

  function handleOwnedClick(event) {
    const target = event.target.closest(
      "button[data-dual-mode], [data-dual-start], [data-dual-back], [data-dual-skip], [data-dual-option], "
      + "[data-dual-home], [data-dual-other], [data-dual-open-match], [data-dual-start-match], "
      + "[data-dual-view-result], [data-dual-retest], [data-dual-history-id], "
      + "[data-dual-menu], [data-dual-menu-close], "
      + "[data-dual-share], [data-dual-share-close], "
      + "[data-dual-open-routes], [data-dual-open-samples], [data-dual-open-guide], "
      + "[data-dual-open-project-library], [data-dual-open-project-sample], "
      + "[data-dual-open-brand-library], [data-dual-open-brand-sample], "
      + "[data-dual-back-routes], [data-dual-back-samples], [data-dual-back-result], "
      + ".brand[data-shell-page='home']",
    );
    if (!target) return;
    event.preventDefault();
    event.stopImmediatePropagation();

    if (target.matches("button[data-dual-mode]")) selectMode(target.dataset.dualMode);
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
    else if (target.matches("[data-dual-open-samples]")) {
      const originMode = MODES.includes(target.dataset.dualOrigin) ? target.dataset.dualOrigin : "self";
      navigate(`#samples/${encodeURIComponent(originMode)}/${encodeURIComponent(String(target.dataset.dualCode || "").toUpperCase())}`);
    }
    else if (target.matches("[data-dual-open-guide]")) {
      const originMode = MODES.includes(target.dataset.dualOrigin) ? target.dataset.dualOrigin : "self";
      const scope = target.dataset.dualGuideScope === "all" ? "/all" : "";
      navigate(
        `#guide/${encodeURIComponent(originMode)}/${encodeURIComponent(String(target.dataset.dualCode || "").toUpperCase())}/${encodeURIComponent(target.dataset.projectId || "")}${scope}`,
      );
    }
    else if (target.matches("[data-dual-open-project-library]")) navigate("#samples/projects");
    else if (target.matches("[data-dual-open-project-sample]")) {
      navigate(`#samples/projects/${encodeURIComponent(target.dataset.projectId || "")}`);
    }
    else if (target.matches("[data-dual-open-brand-library]")) navigate("#samples/brands");
    else if (target.matches("[data-dual-open-brand-sample]")) {
      navigate(`#samples/brands/${encodeURIComponent(target.dataset.brandId || "")}`);
    }
    else if (target.matches("[data-dual-back-routes]")) {
      const originMode = MODES.includes(target.dataset.dualOrigin) ? target.dataset.dualOrigin : "self";
      navigate(`#routes/${encodeURIComponent(originMode)}/${encodeURIComponent(String(target.dataset.dualCode || "").toUpperCase())}`);
    }
    else if (target.matches("[data-dual-back-samples]")) {
      const originMode = MODES.includes(target.dataset.dualOrigin) ? target.dataset.dualOrigin : "self";
      navigate(`#samples/${encodeURIComponent(originMode)}/${encodeURIComponent(String(target.dataset.dualCode || "").toUpperCase())}`);
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
    document.addEventListener("input", event => {
      if (event.target.matches?.("[data-dual-sample-search]")) filterAllProjectSamples(event.target);
      else if (event.target.matches?.("[data-dual-project-library-search]")) filterProjectLibrary(event.target);
      else if (event.target.matches?.("[data-dual-brand-library-search]")) filterBrandLibrary(event.target);
    });
    document.addEventListener("change", event => {
      if (event.target.matches?.("[data-dual-brand-library-category]")) filterBrandLibrary(event.target);
    });
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
