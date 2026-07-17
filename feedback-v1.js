/* ===== 商业DNA · 公域测试反馈回收 v1 =====
 * 无自建后端：结果 POST 到你自己的 Google Apps Script Web App（写进 Google 表格）。
 * 配置：把下面 ENDPOINT 换成你的 Apps Script 部署 URL（见 outputs/公域测试部署指南.md）。
 * 未配置时本模块静默不动作，不影响站点。
 * 采集：a) 每次测完自动记 {角色/DNA码/人格名}；b) 用户主动点"准不准"+可选留言/联系方式。
 * 隐私：联系方式为选填，仅存入项目方自有表格。
 */
(function () {
  "use strict";
  const ENDPOINT = "PASTE_YOUR_APPS_SCRIPT_URL_HERE"; // ← 部署后替换

  const configured = /^https:\/\//.test(ENDPOINT);
  const roleName = { project: "项目方", brand: "品牌方", consumer: "消费者" };

  // 会话 id：关联同一用户的"测完"与"反馈"，并做去重
  let sid = "";
  try {
    sid = localStorage.getItem("dna_fb_sid") || "";
    if (!sid) { sid = "s" + Date.now().toString(36) + Math.random().toString(36).slice(2, 8); localStorage.setItem("dna_fb_sid", sid); }
  } catch (e) { sid = "s" + Date.now().toString(36); }

  function post(payload) {
    if (!configured) return;
    try {
      fetch(ENDPOINT, {
        method: "POST",
        mode: "no-cors", // Apps Script 免预检
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ sid, ua: navigator.userAgent.slice(0, 120), page: location.href, ...payload }),
        keepalive: true,
      }).catch(function () {});
    } catch (e) { /* 回收失败不影响体验 */ }
  }

  let styled = false;
  function injectStyle() {
    if (styled) return;
    const head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
    if (!head || typeof document.createElement !== "function") return; // 非浏览器/测试桩环境跳过
    styled = true;
    const css = `
      .dna-feedback{margin-top:18px;padding:18px;border:1px solid var(--line,rgba(17,17,17,.14));border-radius:18px;background:var(--card,#fffdf6)}
      .dna-feedback>span{display:inline-block;font-weight:800;font-size:13px;letter-spacing:.02em;background:var(--ink,#111);color:#fff8eb;padding:5px 12px;border-radius:999px}
      .dna-feedback h4{margin:12px 0 4px;font-size:18px;color:var(--ink,#111)}
      .dna-feedback .dna-fb-sub{margin:0 0 12px;font-size:13px;color:var(--muted,#6f6a64)}
      .dna-fb-verdicts{display:flex;gap:8px;flex-wrap:wrap}
      .dna-fb-verdicts button{flex:1;min-width:84px;padding:11px 8px;border:1.5px solid var(--ink,#111);border-radius:14px;background:#fff;font-weight:700;font-size:15px;cursor:pointer;transition:transform .08s,background .15s}
      .dna-fb-verdicts button:hover{transform:translateY(-1px)}
      .dna-fb-verdicts button[aria-pressed="true"]{background:var(--yellow,#ffd13d)}
      .dna-fb-more{margin-top:12px;display:flex;flex-direction:column;gap:10px}
      .dna-feedback textarea,.dna-feedback input{width:100%;box-sizing:border-box;padding:11px 13px;border:1.5px solid var(--line,rgba(17,17,17,.14));border-radius:12px;font:inherit;font-size:14px;background:#fff;color:var(--ink,#111)}
      .dna-feedback textarea{min-height:64px;resize:vertical}
      .dna-fb-submit{padding:12px;border:none;border-radius:14px;background:var(--ink,#111);color:#fff8eb;font-weight:800;font-size:15px;cursor:pointer}
      .dna-fb-submit:disabled{opacity:.5;cursor:default}
      .dna-fb-consent{margin:2px 0 0;font-size:12px;color:var(--muted,#6f6a64)}
      .dna-fb-done{margin:8px 0 0;font-weight:700;color:var(--green,#2dbb75)}
      .dna-feedback :focus-visible{outline:2px solid var(--blue,#255dff);outline-offset:2px}
    `;
    const el = document.createElement("style");
    el.textContent = css;
    head.appendChild(el);
  }

  const api = {
    // 每次测完自动记一条（每个结果对象只记一次，避免重渲染重复计）
    logComplete(result) {
      if (!result || result.__dnaLogged) return;
      try { Object.defineProperty(result, "__dnaLogged", { value: true, enumerable: false }); } catch (e) { result.__dnaLogged = true; }
      post({
        type: "complete",
        ts: new Date().toISOString(),
        role: result.role,
        roleName: roleName[result.role] || result.role,
        code: result.code,
        nick: result.nick,
        typeLabel: (result.info && result.info[0]) || "",
      });
    },
    // 在结果页注入"准不准"回收组件
    mountWidget(result) {
      try { this._mount(result); } catch (e) { /* 回收组件异常绝不拖垮结果页 */ }
    },
    _mount(result) {
      const slot = typeof document.getElementById === "function" ? document.getElementById("dnaFeedbackSlot") : null;
      if (!slot || !result) return;
      injectStyle();
      let verdict = "";
      slot.innerHTML = `
        <section class="dna-feedback" aria-label="结果反馈">
          <span>帮我们校准</span>
          <h4>这个「${escapeText(result.nick)}」测得准吗？</h4>
          <p class="dna-fb-sub">你的一票会直接用来校准这套测试，30 秒。</p>
          <div class="dna-fb-verdicts" role="group">
            <button type="button" data-v="准">挺准的</button>
            <button type="button" data-v="一般">一般</button>
            <button type="button" data-v="不准">不太准</button>
          </div>
          <div class="dna-fb-more">
            <textarea placeholder="想补一句？哪里准 / 哪里不对（选填）"></textarea>
            <input type="text" maxlength="60" placeholder="留个联系方式，方便回访（选填）" />
            <button type="button" class="dna-fb-submit" disabled>提交反馈</button>
            <p class="dna-fb-consent">联系方式选填，仅用于项目方回访，不对外公开。</p>
          </div>
        </section>`;
      const vbtns = slot.querySelectorAll(".dna-fb-verdicts button");
      const submit = slot.querySelector(".dna-fb-submit");
      vbtns.forEach(function (b) {
        b.addEventListener("click", function () {
          verdict = b.getAttribute("data-v");
          vbtns.forEach(function (x) { x.setAttribute("aria-pressed", x === b ? "true" : "false"); });
          submit.disabled = false;
        });
      });
      submit.addEventListener("click", function () {
        const note = slot.querySelector("textarea").value.trim().slice(0, 500);
        const contact = slot.querySelector("input").value.trim().slice(0, 60);
        post({
          type: "feedback",
          ts: new Date().toISOString(),
          role: result.role,
          roleName: roleName[result.role] || result.role,
          code: result.code,
          nick: result.nick,
          verdict: verdict,
          note: note,
          contact: contact,
        });
        slot.querySelector(".dna-feedback").innerHTML = `<span>帮我们校准</span><p class="dna-fb-done">收到，谢谢你的反馈 🙏</p>`;
      });
    },
  };

  // escapeText：结果昵称是内部数据，仍做基本转义防注入
  function escapeText(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  window.dnaFeedback = api;
  if (!configured && typeof console !== "undefined") {
    console.info("[dna-feedback] 未配置 ENDPOINT，反馈回收处于静默状态（不影响站点）。");
  }
})();
