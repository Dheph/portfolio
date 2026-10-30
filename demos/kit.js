/* Demo kit — barra do portfólio, troca de telas, preview mobile, reveal, contadores,
   seleção (opt), wizard, gráficos e toasts. Páginas usam window.Demo para o que é delas. */
(function () {
  "use strict";
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return [].slice.call((r || document).querySelectorAll(s)); };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };

  /* Mesmo idioma do portfólio (localStorage "lang"); o conteúdo mock é do cliente fictício. */
  var LANG = (function () {
    try { var s = localStorage.getItem("lang"); if (s === "en" || s === "pt" || s === "es") return s; } catch (e) { }
    var n = (navigator.language || "en").slice(0, 2).toLowerCase();
    return n === "pt" || n === "es" ? n : "en";
  })();
  var T = {
    en: { back: "Back to portfolio", live: "Live demo · mock data", cta: "Want one like this?", screens: "Screens", pick: "Choose an option to continue",
      sectors: { advocacia: "Law firm", contabilidade: "Accounting firm", restaurante: "Restaurant", clinica: "Dental clinic", barbearia: "Barbershop", academia: "Gym & fitness", game: "Mini game" } },
    pt: { back: "Voltar ao portfólio", live: "Demo ao vivo · dados fictícios", cta: "Quero um assim", screens: "Telas", pick: "Escolha uma opção para continuar",
      sectors: { advocacia: "Advocacia", contabilidade: "Contabilidade", restaurante: "Restaurante", clinica: "Clínica odontológica", barbearia: "Barbearia", academia: "Academia", game: "Mini game" } },
    es: { back: "Volver al portafolio", live: "Demo en vivo · datos ficticios", cta: "Quiero uno así", screens: "Pantallas", pick: "Elige una opción para continuar",
      sectors: { advocacia: "Despacho de abogados", contabilidade: "Contabilidad", restaurante: "Restaurante", clinica: "Clínica dental", barbearia: "Barbería", academia: "Gimnasio", game: "Mini juego" } }
  }[LANG];

  var body = document.body;
  var shot = /[?&]shot\b/.test(location.search); // usado para gerar as miniaturas do portfólio
  if (shot) body.classList.add("is-shot");
  var vp = $(".viewport");
  var screens = $$(".screen", vp);

  /* ---------- Barra do portfólio ---------- */
  var bar = document.createElement("header");
  bar.className = "demobar";
  bar.innerHTML =
    '<a class="demobar__back" href="../index.html#solutions" title="' + esc(T.back) + '" aria-label="' + esc(T.back) + '"><span aria-hidden="true">←</span><b>JR</b></a>' +
    '<div class="demobar__title"><small>' + esc(T.live) + '</small><span>' + esc(T.sectors[body.dataset.sector] || "") + '</span></div>' +
    '<nav class="demobar__tabs" aria-label="' + esc(T.screens) + '"></nav>' +
    '<div class="demobar__device" role="group" aria-label="Preview">' +
      '<button data-dev="desk" class="is-active" title="Desktop" aria-label="Desktop"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="13" rx="2"/><path d="M8 21h8M12 17v4"/></svg></button>' +
      '<button data-dev="mob" title="Mobile" aria-label="Mobile"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M11 18h2"/></svg></button>' +
    '</div>' +
    '<a class="demobar__cta" href="../index.html#contact"><span>' + esc(T.cta) + '</span> →</a>';
  body.insertBefore(bar, body.firstChild);
  var tabs = $(".demobar__tabs", bar);
  screens.forEach(function (s, i) {
    var b = document.createElement("button");
    b.dataset.go = s.id;
    b.innerHTML = "<i>0" + (i + 1) + "</i>" + esc(s.getAttribute("data-label-" + LANG) || s.dataset.label || s.id);
    tabs.appendChild(b);
  });
  if (screens.length < 2) tabs.style.visibility = "hidden";

  $$("[data-dev]", bar).forEach(function (b) {
    b.addEventListener("click", function () {
      body.classList.toggle("is-mobile", b.dataset.dev === "mob");
      $$("[data-dev]", bar).forEach(function (x) { x.classList.toggle("is-active", x === b); });
    });
  });

  /* ---------- Telas ---------- */
  function go(id) {
    var s = document.getElementById(id);
    if (!s || !s.classList.contains("screen")) s = screens[0];
    screens.forEach(function (x) { x.classList.toggle("is-active", x === s); });
    $$("button", tabs).forEach(function (b) { b.classList.toggle("is-active", b.dataset.go === s.id); });
    vp.scrollTop = 0;
    if (location.hash !== "#" + s.id) history.replaceState(null, "", "#" + s.id);
    reveal(s);
    document.dispatchEvent(new CustomEvent("demo:screen", { detail: s.id }));
  }

  /* ---------- Reveal, contadores, anéis ---------- */
  var io = ("IntersectionObserver" in window && !shot) ? new IntersectionObserver(function (ents) {
    ents.forEach(function (en) { if (en.isIntersecting) { io.unobserve(en.target); show(en.target); } });
  }, { root: vp, rootMargin: "0px 0px -6% 0px" }) : null;
  function show(n) {
    n.classList.add("is-in");
    if (n.hasAttribute("data-count")) countUp(n);
    if (n.hasAttribute("data-p")) n.style.setProperty("--p", n.dataset.p);
  }
  function reveal(scope) {
    $$("[data-reveal]:not(.is-in), [data-count]:not(.is-in), [data-p]:not(.is-in)", scope).forEach(function (n, i) {
      if (!n.style.getPropertyValue("--d")) n.style.setProperty("--d", (i % 6) * 80 + "ms");
      if (io) io.observe(n); else show(n);
    });
  }
  var NF = {};
  function nf(dec) { return NF[dec] || (NF[dec] = new Intl.NumberFormat("pt-BR", { minimumFractionDigits: dec, maximumFractionDigits: dec })); }
  function countUp(n) {
    var raw = n.dataset.count, to = parseFloat(raw), dec = (raw.split(".")[1] || "").length;
    var pre = n.dataset.pre || "", suf = n.dataset.suf || "", t0 = performance.now(), dur = shot ? 0 : 1500;
    (function tick(now) {
      var k = dur ? Math.min(1, (now - t0) / dur) : 1;
      n.textContent = pre + nf(dec).format(to * (1 - Math.pow(1 - k, 3))) + suf;
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  }
  function setP(n, p) { n.dataset.p = p; if (n.classList.contains("is-in")) n.style.setProperty("--p", p); }

  /* ---------- Gráficos de barra: data-bars="1,2,3" data-labels="a,b,c" data-pre data-suf ---------- */
  function bars(n) {
    var v = n.dataset.bars.split(",").map(Number), max = Math.max.apply(null, v);
    n.innerHTML = v.map(function (x, i) {
      return '<i style="--h:' + Math.max(4, x / max * 100) + '%;--i:' + i + '" data-v="' + esc((n.dataset.pre || "") + nf(0).format(x) + (n.dataset.suf || "")) + '"></i>';
    }).join("");
    if (n.dataset.labels) {
      var x = document.createElement("div");
      x.className = "bars-x";
      x.innerHTML = n.dataset.labels.split(",").map(function (l) { return "<span>" + esc(l) + "</span>"; }).join("");
      n.after(x);
    }
  }

  /* ---------- Toast ---------- */
  var toastEl = document.createElement("div"), toastT;
  toastEl.className = "toast"; toastEl.setAttribute("role", "status");
  body.appendChild(toastEl);
  function toast(msg, warn) {
    toastEl.textContent = msg;
    toastEl.classList.toggle("is-warn", !!warn);
    toastEl.classList.add("is-on");
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove("is-on"); }, 3200);
  }
  function shake(n) { n.classList.remove("shake"); void n.offsetWidth; n.classList.add("shake"); }

  /* ---------- Wizard: .steps > i, .step, [data-next] [data-prev] [data-restart], [data-show="grupo|campo"] ---------- */
  function picked(scope, name) {
    var on = $$('[data-group="' + name + '"] .opt.is-on', scope);
    if (on.length) return on.map(function (o) { return o.dataset.value || o.textContent.trim(); }).join(", ");
    var f = $('[name="' + name + '"]', scope);
    return f && f.value ? f.value : "—";
  }
  $$("[data-wizard]").forEach(function (w) {
    var steps = $$(".step", w), marks = $$(".steps i", w), cur = 0;
    function to(k) {
      cur = k;
      steps.forEach(function (s, j) { s.classList.toggle("is-active", j === k); });
      marks.forEach(function (m, j) { m.classList.toggle("is-done", j <= k); });
      $$("[data-show]", w).forEach(function (o) { o.textContent = picked(w, o.dataset.show); });
      w.dispatchEvent(new CustomEvent("step", { detail: k }));
    }
    w.addEventListener("click", function (e) {
      if (e.target.closest("[data-next]")) {
        var s = steps[cur];
        var miss = $$("[data-group][data-required]", s).some(function (g) { return !$(".opt.is-on", g); }) ||
                   $$("[required]", s).some(function (f) { return !f.value.trim(); });
        if (miss) { toast(T.pick, true); shake(s); return; }
        to(Math.min(cur + 1, steps.length - 1));
        vp.scrollTo({ top: w.getBoundingClientRect().top - vp.getBoundingClientRect().top + vp.scrollTop - 90, behavior: "smooth" });
      }
      if (e.target.closest("[data-prev]")) to(Math.max(cur - 1, 0));
      if (e.target.closest("[data-restart]")) {
        $$(".opt.is-on", w).forEach(function (o) { o.classList.remove("is-on"); });
        $$("input, textarea", w).forEach(function (f) { f.value = ""; });
        to(0);
      }
    });
    to(0);
  });

  /* ---------- Cliques globais ---------- */
  document.addEventListener("click", function (e) {
    var tab = e.target.closest(".demobar__tabs [data-go]");
    if (tab) { go(tab.dataset.go); return; }

    var opt = e.target.closest("[data-group] .opt");
    if (opt && !opt.disabled) {
      var g = opt.closest("[data-group]");
      if (g.hasAttribute("data-multi")) opt.classList.toggle("is-on");
      else $$(".opt", g).forEach(function (o) { o.classList.toggle("is-on", o === opt); });
      g.dispatchEvent(new CustomEvent("pick", { bubbles: true, detail: opt }));
    }

    var sw = e.target.closest(".switch");
    if (sw) sw.setAttribute("aria-pressed", sw.getAttribute("aria-pressed") === "true" ? "false" : "true");

    var a = e.target.closest('a[href^="#"]');
    if (a && vp.contains(a)) {
      e.preventDefault();
      var id = a.getAttribute("href").slice(1), tgt = id && document.getElementById(id);
      if (!tgt) return;
      if (tgt.classList.contains("screen")) go(id);
      else tgt.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
  document.addEventListener("submit", function (e) {
    var f = e.target;
    if (!f.hasAttribute("data-mock")) return;
    e.preventDefault();
    toast(f.dataset.mock);
    f.reset();
  });
  vp.addEventListener("pointermove", function (e) {
    var c = e.target.closest && e.target.closest("[data-glow]");
    if (!c) return;
    var r = c.getBoundingClientRect();
    c.style.setProperty("--x", e.clientX - r.left + "px");
    c.style.setProperty("--y", e.clientY - r.top + "px");
  }, { passive: true });

  /* ---------- Init ---------- */
  $$(".marquee > div").forEach(function (m) { m.innerHTML += m.innerHTML; });
  $$("[data-bars]").forEach(bars);

  window.Demo = {
    $: $, $$: $$, esc: esc, go: go, toast: toast, shake: shake, reveal: reveal, setP: setP, lang: LANG, shot: shot, vp: vp,
    brl: function (v) { return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); }
  };
  window.addEventListener("hashchange", function () { go(location.hash.slice(1)); });
  // o navegador rola até o id da tela no load; a tela começa sempre no topo
  window.addEventListener("load", function () { vp.scrollTop = 0; });
  go(location.hash.slice(1));
})();
