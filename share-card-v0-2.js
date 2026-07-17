(function attachCommercialDnaShareCardV02(globalScope) {
  "use strict";

  const CODE_PATTERN = /^[LD][SC][BM][ER]$/;
  const TYPES = new Set(["self", "project", "match"]);
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

  function escapeHtml(value = "") {
    return String(value).replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[character]));
  }

  function safeCode(value, fallback) {
    const code = String(value || "").trim().toUpperCase();
    return CODE_PATTERN.test(code) ? code : fallback;
  }

  function parseRequest(search = "") {
    const params = new URLSearchParams(String(search || "").replace(/^\?/, ""));
    const type = TYPES.has(params.get("type")) ? params.get("type") : "self";
    const score = Number(params.get("score"));
    const roast = String(params.get("roast") || "").trim();
    return Object.freeze({
      type,
      code: safeCode(params.get("code"), "LSBR"),
      selfCode: safeCode(params.get("self"), "LSBR"),
      projectCode: safeCode(params.get("project"), "LSME"),
      score: Number.isInteger(score) && score >= 48 && score <= 98 ? score : 84,
      roast: roast && Array.from(roast).length <= 120
        ? roast
        : "你和项目大部分时候都在同一个频道。",
    });
  }

  function projectPersona(code, projectSystem) {
    const name = projectSystem?.personas?.project?.[code];
    if (!name) throw new TypeError("项目人格不存在");
    const info = projectSystem.info?.[name] || ["项目人格", "这个项目还需要更多真实信息。"];
    return {
      code,
      name,
      label: info[0],
      roast: info[1],
      profile: projectSystem.projectProfiles?.[code] || {},
      asset: projectAssets[name],
    };
  }

  function selfPersona(code, operatorSystem, assetsById) {
    const persona = operatorSystem?.personasByCode?.[code];
    if (!persona) throw new TypeError("操盘怪物不存在");
    const asset = assetsById?.[persona.assetId]?.file;
    if (!asset) throw new TypeError("操盘怪物资产不存在");
    return { ...persona, asset };
  }

  function createModel(request, systems) {
    if (request.type === "self") {
      const persona = selfPersona(request.code, systems.operator, systems.assetsById);
      return Object.freeze({
        type: "self",
        eyebrow: "我是",
        name: persona.name,
        code: persona.code,
        quote: persona.shareLine,
        metaLabel: "怪物技能",
        metaValue: persona.label,
        footer: "测测你的商业 DNA",
        asset: persona.asset,
        assetAlt: persona.assetAlt,
      });
    }
    if (request.type === "project") {
      const persona = projectPersona(request.code, systems.project);
      return Object.freeze({
        type: "project",
        eyebrow: "我的商业项目是",
        name: persona.name,
        code: persona.code,
        quote: persona.roast,
        metaLabel: "项目暗号",
        metaValue: persona.profile.firstMove || persona.label,
        footer: "测测你的项目 DNA",
        asset: persona.asset,
        assetAlt: `${persona.name}项目动物人格`,
      });
    }

    const self = selfPersona(request.selfCode, systems.operator, systems.assetsById);
    const project = projectPersona(request.projectCode, systems.project);
    return Object.freeze({
      type: "match",
      eyebrow: "商业 DNA 同频度",
      score: request.score,
      quote: request.roast,
      metaLabel: "同频暗号",
      metaValue: "先对频道，再一起开工",
      footer: "测测你们的同频度",
      self: {
        name: self.name,
        code: self.code,
        asset: self.asset,
      },
      project: {
        name: project.name,
        code: project.code,
        asset: project.asset,
      },
    });
  }

  function brandHtml() {
    return `
      <header class="share-brand">
        <div class="share-brand-lockup">
          <span class="share-dna-logo" aria-hidden="true"><i>D</i><i>N</i><i>A</i></span>
          <strong>商业 DNA</strong>
        </div>
        <small>从不同中，找到同类</small>
      </header>
    `;
  }

  function footerHtml(model) {
    return `
      <footer class="share-footer">
        <div>
          <strong>${escapeHtml(model.footer)}</strong>
          <small>扫码进入测试</small>
        </div>
        <div class="share-qr-slot" aria-label="二维码预留位置"><span>QR</span></div>
      </footer>
    `;
  }

  function resultCardHtml(model) {
    return `
      <article class="share-card share-card-${escapeHtml(model.type)}" id="shareCard">
        ${brandHtml()}
        <section class="share-title">
          <span>${escapeHtml(model.eyebrow)}</span>
          <h1>${escapeHtml(model.name)}</h1>
          <strong>${escapeHtml(model.code)}</strong>
          <div class="share-stamp" aria-hidden="true">DNA<br />MATCHED</div>
        </section>
        <figure class="share-animal">
          <img src="${escapeHtml(model.asset)}" alt="${escapeHtml(model.assetAlt)}" />
        </figure>
        <blockquote class="share-quote">${escapeHtml(model.quote)}</blockquote>
        <div>
          <div class="share-meta">
            <span>${escapeHtml(model.metaLabel)}</span>
            <strong>${escapeHtml(model.metaValue)}</strong>
          </div>
          ${footerHtml(model)}
        </div>
      </article>
    `;
  }

  function matchCardHtml(model) {
    return `
      <article class="share-card share-card-match" id="shareCard">
        ${brandHtml()}
        <section class="share-title">
          <span>${escapeHtml(model.eyebrow)}</span>
        </section>
        <div class="share-match-summary">
          <div class="share-match-score">
            <strong>${model.score}<small>%</small></strong>
            <span>MATCH</span>
          </div>
          <blockquote class="share-quote">${escapeHtml(model.quote)}</blockquote>
        </div>
        <div class="share-match-pair">
          <figure>
            <img src="${escapeHtml(model.self.asset)}" alt="${escapeHtml(model.self.name)}" />
            <figcaption>${escapeHtml(model.self.name)} · ${escapeHtml(model.self.code)}</figcaption>
          </figure>
          <figure>
            <img src="${escapeHtml(model.project.asset)}" alt="${escapeHtml(model.project.name)}" />
            <figcaption>${escapeHtml(model.project.name)} · ${escapeHtml(model.project.code)}</figcaption>
          </figure>
        </div>
        <div>
          <div class="share-meta">
            <span>${escapeHtml(model.metaLabel)}</span>
            <strong>${escapeHtml(model.metaValue)}</strong>
          </div>
          ${footerHtml(model)}
        </div>
      </article>
    `;
  }

  async function loadAssets(operatorSystem) {
    const response = await fetch(operatorSystem.assetManifestUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`角色资产读取失败（${response.status}）`);
    const manifest = await response.json();
    return Object.fromEntries((manifest.assets || []).map(row => [row.assetId, row]));
  }

  function shareText(model) {
    if (model.type === "match") return `${model.eyebrow} ${model.score}%。${model.quote}`;
    return `${model.eyebrow}「${model.name}」${model.code}。${model.quote}`;
  }

  async function shareCurrent(model, status) {
    const text = shareText(model);
    try {
      if (navigator.share) {
        await navigator.share({ title: "商业 DNA 分享卡", text, url: location.href });
        return;
      }
      await navigator.clipboard.writeText(`${text} ${location.href}`);
      status.textContent = "分享文案和链接已复制。";
    } catch (error) {
      if (error?.name === "AbortError") return;
      status.textContent = "暂时无法调用系统分享，请直接截图这张卡。";
    }
  }

  async function init() {
    const stage = document.getElementById("shareStage");
    const shareButton = document.getElementById("shareCardButton");
    const backButton = document.getElementById("shareBackButton");
    const status = document.getElementById("shareStatus");
    try {
      const request = parseRequest(location.search);
      const assetsById = await loadAssets(globalScope.COMMERCIAL_DNA_OPERATOR_V1);
      const model = createModel(request, {
        operator: globalScope.COMMERCIAL_DNA_OPERATOR_V1,
        project: globalScope.COMMERCIAL_DNA_PERSONA,
        assetsById,
      });
      stage.innerHTML = model.type === "match" ? matchCardHtml(model) : resultCardHtml(model);
      document.title = model.type === "match"
        ? `商业 DNA 同频度 ${model.score}%`
        : `商业 DNA · ${model.name}`;
      shareButton.addEventListener("click", () => shareCurrent(model, status));
      backButton.addEventListener("click", () => history.back());
    } catch (error) {
      stage.innerHTML = `<p class="share-error">${escapeHtml(error.message || "分享卡读取失败。")}</p>`;
      shareButton.disabled = true;
      backButton.addEventListener("click", () => history.back());
    }
  }

  globalScope.COMMERCIAL_DNA_SHARE_CARD_V0_2 = Object.freeze({
    parseRequest,
    createModel,
    shareText,
  });

  if (globalScope.document) init();
})(typeof window !== "undefined" ? window : globalThis);
