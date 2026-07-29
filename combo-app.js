function arrangeFlowSections() {
  const main = document.querySelector("main");
  if (!main) return;
  ["diagnose", "result", "report", "cases", "evidence", "match", "brands", "intent"].forEach(id => {
    const section = id === "report" ? document.querySelector(".report-band") : document.getElementById(id);
    if (section) main.appendChild(section);
  });
}

function updateFlowVisibility() {
  const flowActive = state.appPage === "project";
  const diagnoseSection = document.getElementById("diagnose");
  const resultSection = document.getElementById("result");
  const caseSection = document.getElementById("cases");
  const brandSection = document.getElementById("brands");
  const evidenceSection = document.getElementById("evidence");
  const matchSection = document.getElementById("match");
  const intentSection = document.getElementById("intent");
  if (diagnoseSection) diagnoseSection.hidden = !flowActive || state.currentStage !== "diagnose";
  if (resultSection) resultSection.hidden = !flowActive || state.currentStage !== "result";
  if (caseSection) caseSection.hidden = !flowActive || state.currentStage !== "cases";
  if (brandSection) brandSection.hidden = !flowActive || state.currentStage !== "match" || state.mode === "brand" || !state.showBrands;
  if (evidenceSection) evidenceSection.hidden = !flowActive || state.currentStage !== "cases" || !state.showEvidence;
  if (matchSection) matchSection.hidden = !flowActive || state.currentStage !== "match" || state.mode !== "commercial" || !state.showMatch;
  if (intentSection) intentSection.hidden = !flowActive || state.currentStage !== "intent" || !state.showIntent;
}

function restoreInitialAnchor() {
  const id = decodeURIComponent(window.location.hash || "").replace("#", "");
  // Test/result/match/routes/guide routes are rendered by dual-v01. Do not let the legacy
  // project-flow router hide that page while its own route handler is running.
  if (
    /^(?:test|result)\/(?:self|project)$/.test(id)
    || /^(?:routes|guide)\//.test(id)
    || id === "match"
  ) return;
  if (!id) {
    setAppPage("home", false);
    return;
  }
  const shellMap = {
    home: "home",
    "sample-library": "sample-library",
    "ops-library": "ops-library",
    profile: "profile",
    "brand-gate": "brand-gate",
    "consumer-gate": "consumer-gate",
    "personality-test": "personality-test",
    "personality-result": "personality-result",
  };
  if (shellMap[id]) {
    setAppPage(shellMap[id], false);
    return;
  }
  state.appPage = "project";
  document.body.dataset.appPage = "project";
  document.querySelectorAll(".app-page").forEach(section => { section.hidden = true; });
  if (id === "result") state.currentStage = "result";
  if (id === "cases" || id === "evidence") state.currentStage = "cases";
  if (id === "evidence") state.showEvidence = true;
  if (id === "match" || id === "brands") {
    state.currentStage = "match";
    state.showMatch = true;
  }
  if (id === "brands" && state.mode === "commercial") state.showBrands = true;
  if (id === "intent") {
    state.currentStage = "intent";
    state.showIntent = true;
  }
  updateFlowVisibility();
  renderStageProgress();
  const target = document.getElementById(id);
  if (!target) return;
  window.requestAnimationFrame(() => {
    target.scrollIntoView({ block: "start" });
    window.setTimeout(() => {
      target.scrollIntoView({ block: "start" });
    }, 120);
  });
}

function previewCase(caseId) {
  const item = cases.find(row => row.id === caseId);
  if (!item) return;
  els.coverCaseName.textContent = `${item.name} / ${item.archetype}`;
}

function renderAll() {
  renderRoleUI();
  syncInputs();
  updateFlowVisibility();
  renderStageProgress();
  setupLibraryFilters();
  renderQuickStart();
  renderDetailChoiceControls();
  renderChips();
  buildRecommendations();
  renderSampleCloud();
  renderReport();
  renderResultReadout();
  renderCoCreateMatch();
  renderIntentCard();
  renderDeck();
  renderCases();
  renderBrands();
  renderEvidence();
  if (state.appPage === "sample-library") renderSampleLibrary();
  if (state.appPage === "ops-library") renderOpsLibrary();
  if (state.appPage === "profile") renderProfilePage();
  if (state.appPage === "brand-gate") renderBrandGate();
  if (state.appPage === "personality-test") renderPersonaQuestion();
  if (state.appPage === "personality-result") renderPersonaResult();
}

function runGenerate() {
  syncInputs();
  state.personaCaseCode = "";
  state.showEvidence = false;
  state.showBrands = false;
  state.showMatch = false;
  state.showIntent = false;
  state.selectedBrandId = null;
  state.currentStage = "result";
  document.body.classList.add("is-dealing");
  document.body.classList.add("is-generating");
  window.setTimeout(() => {
    renderAll();
    document.body.classList.remove("is-dealing");
    document.body.classList.remove("is-generating");
    setStage("result");
  }, 520);
}

function bind() {
  [
    els.projectName,
    els.projectCity,
    els.relationSelect,
    els.cityTierSelect,
    els.assetSelect,
    els.stageSelect,
    els.spaceSelect,
    els.ownerSelect,
    els.operatorSelect,
    els.brandGoalSelect,
    els.operationSelect,
  ].forEach(input => {
    input?.addEventListener("input", renderAll);
    input?.addEventListener("change", renderAll);
  });
  document.addEventListener("click", event => {
    const personaStartButton = event.target.closest("[data-persona-start]");
    if (personaStartButton) {
      event.preventDefault();
      startPersona(personaStartButton.dataset.personaStart);
      return;
    }
    const personaPickButton = event.target.closest("[data-persona-pick]");
    if (personaPickButton) {
      event.preventDefault();
      pickPersonaOption(personaPickButton.dataset.personaPick);
      return;
    }
    const personaResultStageButton = event.target.closest("[data-persona-result-stage]");
    if (personaResultStageButton) {
      event.preventDefault();
      state.personaResultStage = personaResultStageButton.dataset.personaResultStage;
      renderPersonaResult();
      resetScrollTop();
      return;
    }
    const favButton = event.target.closest("[data-fav]");
    if (favButton) {
      event.preventDefault();
      toggleFavorite(favButton.dataset.fav, favButton.dataset.favId);
      return;
    }
    const startProjectButton = event.target.closest("[data-start-project]");
    if (startProjectButton) {
      event.preventDefault();
      startProjectJourney();
      return;
    }
    const shellPageLink = event.target.closest("[data-shell-page]");
    if (shellPageLink) {
      event.preventDefault();
      setAppPage(shellPageLink.dataset.shellPage);
      history.replaceState(null, "", `#${appPageId(shellPageLink.dataset.shellPage)}`);
      return;
    }
    const brandTrackButton = event.target.closest("[data-brand-track]");
    if (brandTrackButton) {
      event.preventDefault();
      state.brandTrack = brandTrackButton.dataset.brandTrack;
      renderBrandGate();
      return;
    }
    const previewCaseButton = event.target.closest("[data-preview-case]");
    if (previewCaseButton) {
      event.preventDefault();
      state.personaCaseCode = state.personaResult?.role === "project" ? state.personaResult.code : "";
      state.selectedCaseId = previewCaseButton.dataset.previewCase;
      state.appPage = "project";
      document.body.dataset.appPage = "project";
      state.currentStage = "cases";
      state.showEvidence = false;
      document.querySelectorAll(".app-page").forEach(section => { section.hidden = true; });
      // 20260703 修复：同步导航态与 hash，避免停留在 #personality-result 刷新后空页
      document.querySelectorAll("[data-shell-page]").forEach(node => node.classList.remove("active"));
      history.replaceState(null, "", "#cases");
      renderAll();
      resetScrollTop();
      return;
    }
    const shareButton = event.target.closest("[data-share-intent]");
    if (shareButton) {
      shareIntentCard();
      return;
    }
    const intentBrandButton = event.target.closest("[data-intent-brand]");
    if (intentBrandButton) {
      state.selectedBrandId = intentBrandButton.dataset.intentBrand;
      enterIntentFlow();
      return;
    }
    const selectBrandButton = event.target.closest("[data-select-brand]");
    if (selectBrandButton) {
      state.selectedBrandId = selectBrandButton.dataset.selectBrand;
      renderAll();
      return;
    }
    const guideEvidenceButton = event.target.closest('[data-flow-action="evidence"]');
    if (guideEvidenceButton) {
      event.preventDefault();
      revealEvidenceForCase(selectedCase()?.id, true);
      return;
    }
    const evidenceLink = event.target.closest('a[href="#evidence"], [data-view-evidence]');
    if (evidenceLink) {
      event.preventDefault();
      revealEvidenceForCase(selectedCase()?.id, true);
      return;
    }
    const optionalMatchButton = event.target.closest("[data-enter-match]");
    if (optionalMatchButton) {
      event.preventDefault();
      enterMatchFlow();
      return;
    }
    const flowStageButton = event.target.closest("[data-flow-stage]");
    if (flowStageButton) {
      event.preventDefault();
      setStage(flowStageButton.dataset.flowStage);
      return;
    }
    const flowAnchor = event.target.closest('a[href="#diagnose"], a[href="#result"], a[href="#cases"], a[href="#match"], a[href="#intent"]');
    if (flowAnchor) {
      event.preventDefault();
      const stage = flowAnchor.getAttribute("href").replace("#", "");
      setStage(stage);
      return;
    }
    const matchLink = event.target.closest('a[href="#match"]');
    if (matchLink) {
      event.preventDefault();
      enterMatchFlow();
      return;
    }
    const intentLink = event.target.closest('a[href="#intent"]');
    if (intentLink) {
      event.preventDefault();
      enterIntentFlow();
      return;
    }
    const button = event.target.closest("[data-select-id]");
    if (!button) return;
    pickSelectValue(els[button.dataset.selectId], button.dataset.value);
  });
  document.addEventListener("change", event => {
    const citySelect = event.target.closest("[data-consumer-city]");
    if (citySelect) {
      state.consumerCity = citySelect.value;
      renderPersonaResult();
    }
  });
  els.generateButton.addEventListener("click", runGenerate);
  els.detailGenerateButton?.addEventListener("click", runGenerate);
  [els.sampleSearch, els.sampleTypeFilter, els.sampleBarrierFilter].forEach(input => {
    input?.addEventListener("input", renderSampleLibrary);
    input?.addEventListener("change", renderSampleLibrary);
  });
  [els.opsSearch, els.opsDimensionFilter, els.opsStatusFilter].forEach(input => {
    input?.addEventListener("input", renderOpsLibrary);
    input?.addEventListener("change", renderOpsLibrary);
  });
  els.brandRegisterButton?.addEventListener("click", saveBrandProfile);
  els.consumerSaveButton?.addEventListener("click", saveConsumerIntent);
  els.modeSwitch?.querySelectorAll("[data-mode]").forEach(button => {
    button.addEventListener("click", () => switchMode(button.dataset.mode));
  });
  els.refineActions?.querySelectorAll("[data-refine]").forEach(button => {
    button.addEventListener("click", () => applyRefine(button.dataset.refine));
  });
}

function init() {
  arrangeFlowSections();
  renderChips();
  bind();
  window.addEventListener("hashchange", restoreInitialAnchor);
  installProgressiveRevealObserver();
  renderAll();
  restoreInitialAnchor();
}

init();
