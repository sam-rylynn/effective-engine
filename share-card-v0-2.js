(function attachCommercialDnaShareCardV02(globalScope) {
  "use strict";

  const CODE_PATTERN = /^[LD][SC][BM][ER]$/;
  const TYPES = new Set(["self", "project", "match"]);
  const SERIAL_DATE = "20260718";
  const referenceAssets = Object.freeze({
    self: Object.freeze({
      registration: "share-assets/reference-v0.3/registration-self.png",
      stamp: "share-assets/reference-v0.3/stamp-self.png",
    }),
    project: Object.freeze({
      registration: "share-assets/reference-v0.3/registration-project.png",
      stamp: "share-assets/reference-v0.3/stamp-project.png",
    }),
    match: Object.freeze({
      registration: "share-assets/reference-v0.3/registration-match.png",
      stamp: "share-assets/reference-v0.3/stamp-match.png",
    }),
    barcode: "share-assets/reference-v0.3/barcode.png",
  });
  const projectIdentityAssets = {
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

  function projectPersona(code, projectSystem, projectPosterSystem) {
    const name = projectSystem?.personas?.project?.[code];
    if (!name) throw new TypeError("项目人格不存在");
    const info = projectSystem.info?.[name] || ["项目人格", "这个项目还需要更多真实信息。"];
    const poster = projectPosterSystem?.entryForResultCode?.(code)
      || projectPosterSystem?.entryForPersona?.(name)
      || null;
    return {
      code,
      name,
      label: info[0],
      roast: info[1],
      profile: projectSystem.projectProfiles?.[code] || {},
      identityAsset: projectIdentityAssets[name],
      posterAsset: poster?.asset || "",
      posterAlt: poster?.assetAlt || `${name}项目动物人格`,
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
        eyebrow: "我的操盘怪物",
        name: persona.name,
        code: persona.code,
        quote: persona.shareLine,
        metaLabel: "怪物技能",
        metaValue: persona.label,
        footer: "测测你的商业 DNA",
        serialLabel: "自我卡片",
        serialNumber: `NO.${SERIAL_DATE}-${persona.code}`,
        registrationAsset: referenceAssets.self.registration,
        stampAsset: referenceAssets.self.stamp,
        barcodeAsset: referenceAssets.barcode,
        asset: persona.asset,
        assetAlt: persona.assetAlt,
      });
    }
    if (request.type === "project") {
      const persona = projectPersona(request.code, systems.project, systems.projectPosters);
      if (!persona.posterAsset) throw new TypeError("项目人格正式海报不存在");
      return Object.freeze({
        type: "project",
        eyebrow: "项目动物人格",
        name: persona.name,
        code: persona.code,
        quote: persona.roast,
        metaLabel: "项目暗号",
        metaValue: persona.profile.firstMove || persona.label,
        footer: "测测你的项目 DNA",
        serialLabel: "项目卡片",
        serialNumber: `NO.${SERIAL_DATE}-${persona.code}`,
        registrationAsset: referenceAssets.project.registration,
        stampAsset: referenceAssets.project.stamp,
        barcodeAsset: referenceAssets.barcode,
        asset: persona.posterAsset,
        assetAlt: persona.posterAlt,
      });
    }

    const self = selfPersona(request.selfCode, systems.operator, systems.assetsById);
    const project = projectPersona(request.projectCode, systems.project, systems.projectPosters);
    if (!project.identityAsset) throw new TypeError("项目人格身份图不存在");
    return Object.freeze({
      type: "match",
      eyebrow: "商业 DNA 同频度",
      score: request.score,
      quote: request.roast,
      metaLabel: "同频暗号",
      metaValue: "先对频道，再一起开工",
      footer: "测测你们的同频度",
      serialLabel: "MATCH NO.",
      serialNumber: `${SERIAL_DATE}-${request.score}`,
      registrationAsset: referenceAssets.match.registration,
      stampAsset: referenceAssets.match.stamp,
      barcodeAsset: referenceAssets.barcode,
      self: {
        name: self.name,
        code: self.code,
        asset: self.asset,
      },
      project: {
        name: project.name,
        code: project.code,
        asset: project.identityAsset,
      },
    });
  }

  function brandHtml(model) {
    return `
      <header class="share-brand">
        <div class="share-brand-lockup">
          <span class="share-dna-logo" aria-hidden="true"><i>D</i><i>N</i><i>A</i></span>
          <span class="share-brand-copy">
            <strong>商业 DNA</strong>
            <small>从不同中，找到同类</small>
          </span>
        </div>
        <img class="share-registration" src="${escapeHtml(model.registrationAsset)}" alt="" aria-hidden="true" />
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

  function serialHtml(model) {
    return `
      <div class="share-serial">
        <span>${escapeHtml(model.serialLabel)}</span>
        <strong>${escapeHtml(model.serialNumber)}</strong>
        <img src="${escapeHtml(model.barcodeAsset)}" alt="" aria-hidden="true" />
      </div>
    `;
  }

  function resultCardHtml(model) {
    return `
      <article class="share-card share-card-${escapeHtml(model.type)} share-card-image-only" id="shareCard">
        <figure class="share-image-only">
          <img src="${escapeHtml(model.asset)}" decoding="async" fetchpriority="high" alt="${escapeHtml(model.assetAlt)}" />
          <span class="share-qr-slot" aria-label="二维码预留位置"></span>
        </figure>
      </article>
    `;
  }

  function matchCardHtml(model) {
    return `
      <article class="share-card share-card-match" id="shareCard">
        ${brandHtml(model)}
        <section class="share-title">
          <span>${escapeHtml(model.eyebrow)}</span>
        </section>
        <section class="share-match-ticket">
          <strong class="share-match-number">${model.score}<small>%</small></strong>
          <blockquote class="share-quote"><span aria-hidden="true">“</span><p>${escapeHtml(model.quote)}</p><span aria-hidden="true">”</span></blockquote>
          <div class="share-match-pair">
            <figure>
              <img src="${escapeHtml(model.self.asset)}" decoding="async" alt="${escapeHtml(model.self.name)}" />
              <figcaption>${escapeHtml(model.self.code)}</figcaption>
            </figure>
            <figure>
              <img src="${escapeHtml(model.project.asset)}" decoding="async" alt="${escapeHtml(model.project.name)}" />
              <figcaption>${escapeHtml(model.project.code)}</figcaption>
            </figure>
            <img class="share-match-stamp" src="${escapeHtml(model.stampAsset)}" alt="" aria-hidden="true" />
          </div>
          ${serialHtml(model)}
        </section>
        ${footerHtml(model)}
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

  function cardFileName(model) {
    const identity = model.type === "match" ? `同频度-${model.score}` : `${model.name}-${model.code}`;
    return `商业DNA-${identity}.png`.replace(/[\\/:*?"<>|]/g, "-");
  }

  async function waitForCardImages(card) {
    await Promise.all(Array.from(card.querySelectorAll("img")).map(async image => {
      if (image.complete) {
        if (image.naturalWidth > 0) return;
        throw new Error("卡片图片加载失败。");
      }
      try {
        if (typeof image.decode === "function") {
          await image.decode();
        } else {
          await new Promise((resolve, reject) => {
            image.addEventListener("load", resolve, { once: true });
            image.addEventListener("error", reject, { once: true });
          });
        }
      } catch (error) {
        throw new Error("卡片图片尚未加载完成。");
      }
      if (image.naturalWidth <= 0) throw new Error("卡片图片加载失败。");
    }));
  }

  async function cardCanvas(stage) {
    const card = stage.querySelector(".share-card");
    if (!card) throw new Error("分享卡片尚未生成。");
    if (typeof globalScope.html2canvas !== "function") throw new Error("卡片保存组件未加载。");
    await waitForCardImages(card);
    return globalScope.html2canvas(card, {
      backgroundColor: "#f7f1e6",
      scale: 2,
      useCORS: true,
      logging: false,
      imageTimeout: 15000,
    });
  }

  async function cardBlob(stage) {
    const canvas = await cardCanvas(stage);
    return new Promise((resolve, reject) => {
      canvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error("卡片图片生成失败。"));
      }, "image/png");
    });
  }

  async function prepareConfirmationExport(model, stage, status) {
    document.body.dataset.shareExportState = "preparing";
    try {
      const canvas = await cardCanvas(stage);
      const dataUrl = canvas.toDataURL("image/jpeg", .9);
      const fileName = cardFileName(model).replace(/\.png$/i, ".jpg");
      globalScope.COMMERCIAL_DNA_CARD_EXPORT_V0_3 = Object.freeze({
        fileName,
        dataUrl,
      });
      const output = document.createElement("output");
      output.id = "shareConfirmationExport";
      output.hidden = true;
      output.dataset.fileName = fileName;
      output.textContent = dataUrl;
      document.body.appendChild(output);
      document.body.dataset.shareExportState = "ready";
      status.textContent = "确认图已生成。";
    } catch (error) {
      document.body.dataset.shareExportState = "error";
      status.textContent = error.message || "确认图生成失败。";
    }
  }

  async function saveCurrent(model, stage, status, button) {
    button.disabled = true;
    status.textContent = "正在生成卡片...";
    try {
      const blob = await cardBlob(stage);
      const url = URL.createObjectURL(blob);
      const anchor = document.createElement("a");
      anchor.href = url;
      anchor.download = cardFileName(model);
      document.body.appendChild(anchor);
      anchor.click();
      anchor.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      status.textContent = "卡片已保存为 PNG。";
    } catch (error) {
      status.textContent = error.message || "卡片暂时无法保存。";
    } finally {
      button.disabled = false;
    }
  }

  async function shareCurrent(model, stage, status, button) {
    const text = shareText(model);
    button.disabled = true;
    status.textContent = "正在准备分享卡片...";
    try {
      const blob = await cardBlob(stage);
      const file = typeof globalScope.File === "function"
        ? new globalScope.File([blob], cardFileName(model), { type: "image/png" })
        : null;
      if (file && navigator.share && navigator.canShare?.({ files: [file] })) {
        await navigator.share({ title: "商业 DNA 分享卡", text, files: [file] });
        status.textContent = "分享卡片已发送。";
        return;
      }
      if (navigator.share) {
        await navigator.share({ title: "商业 DNA 分享卡", text, url: location.href });
        status.textContent = "分享链接已发送。";
        return;
      }
      await navigator.clipboard.writeText(`${text} ${location.href}`);
      status.textContent = "分享文案和链接已复制。";
    } catch (error) {
      if (error?.name === "AbortError") return;
      status.textContent = error.message || "暂时无法调用系统分享。";
    } finally {
      button.disabled = false;
    }
  }

  async function init() {
    const stage = document.getElementById("shareStage");
    const saveButton = document.getElementById("shareSaveButton");
    const shareButton = document.getElementById("shareCardButton");
    const backButton = document.getElementById("shareBackButton");
    const status = document.getElementById("shareStatus");
    const pageParams = new URLSearchParams(location.search);
    const embedded = pageParams.get("embed") === "1";
    const saveOnly = pageParams.get("saveOnly") === "1";
    const confirmationExport = pageParams.get("export") === "1";
    document.body.classList.toggle("is-embedded", embedded);
    backButton.hidden = embedded && !saveOnly;
    shareButton.hidden = saveOnly;
    saveButton.disabled = true;
    shareButton.disabled = true;
    try {
      const request = parseRequest(location.search);
      const assetsById = await loadAssets(globalScope.COMMERCIAL_DNA_OPERATOR_V1);
      const model = createModel(request, {
        operator: globalScope.COMMERCIAL_DNA_OPERATOR_V1,
        project: globalScope.COMMERCIAL_DNA_PERSONA,
        projectPosters: globalScope.COMMERCIAL_DNA_PROJECT_POSTERS_V0_1,
        assetsById,
      });
      stage.classList.add("is-preparing");
      stage.innerHTML = model.type === "match" ? matchCardHtml(model) : resultCardHtml(model);
      await waitForCardImages(stage.querySelector(".share-card"));
      stage.classList.remove("is-preparing");
      saveButton.disabled = false;
      shareButton.disabled = saveOnly;
      document.title = model.type === "match"
        ? `商业 DNA 同频度 ${model.score}%`
        : `商业 DNA · ${model.name}`;
      if (confirmationExport) await prepareConfirmationExport(model, stage, status);
      saveButton.addEventListener("click", () => saveCurrent(model, stage, status, saveButton));
      if (!saveOnly) {
        shareButton.addEventListener("click", () => shareCurrent(model, stage, status, shareButton));
      }
      backButton.addEventListener("click", () => history.back());
    } catch (error) {
      stage.classList.remove("is-preparing");
      stage.innerHTML = `<p class="share-error">${escapeHtml(error.message || "分享卡读取失败。")}</p>`;
      saveButton.disabled = true;
      shareButton.disabled = true;
      backButton.addEventListener("click", () => history.back());
    }
  }

  globalScope.COMMERCIAL_DNA_SHARE_CARD_V0_2 = Object.freeze({
    parseRequest,
    createModel,
    shareText,
    cardFileName,
    waitForCardImages,
  });

  if (globalScope.document) init();
})(typeof window !== "undefined" ? window : globalThis);
