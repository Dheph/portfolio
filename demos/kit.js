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
      views: "Admin panel", actions: "Actions", search: "Search screens and actions…", none: "Nothing found", nav: "navigate", open: "open", close: "close",
      undo: "Undo", moved: "Moved to", done: "Marked as done", saved: "Saved",
      wa: "Get in touch", waMsg: "Hi Jeffersom! I saw the {s} demo on your portfolio and I'd like a project like this.",
      sectors: { advocacia: "Law firm", contabilidade: "Accounting firm", restaurante: "Restaurant", clinica: "Dental clinic", barbearia: "Barbershop", academia: "Gym & fitness", petshop: "Pet shop", automacao: "Smart automations", game: "Mini game" } },
    pt: { back: "Voltar ao portfólio", live: "Demo ao vivo · dados fictícios", cta: "Quero um assim", screens: "Telas", pick: "Escolha uma opção para continuar",
      views: "Painel admin", actions: "Ações", search: "Buscar telas e ações…", none: "Nada encontrado", nav: "navegar", open: "abrir", close: "fechar",
      undo: "Desfazer", moved: "Movido para", done: "Concluído", saved: "Salvo",
      wa: "Entre em contato", waMsg: "Olá, Jeffersom! Vi a demo de {s} no seu portfólio e quero um projeto assim.",
      sectors: { advocacia: "Advocacia", contabilidade: "Contabilidade", restaurante: "Restaurante", clinica: "Clínica odontológica", barbearia: "Barbearia", academia: "Academia", petshop: "Pet shop", automacao: "Automações inteligentes", game: "Mini game" } },
    es: { back: "Volver al portafolio", live: "Demo en vivo · datos ficticios", cta: "Quiero uno así", screens: "Pantallas", pick: "Elige una opción para continuar",
      views: "Panel admin", actions: "Acciones", search: "Buscar pantallas y acciones…", none: "Nada encontrado", nav: "navegar", open: "abrir", close: "cerrar",
      undo: "Deshacer", moved: "Movido a", done: "Completado", saved: "Guardado",
      wa: "Contáctame", waMsg: "¡Hola, Jeffersom! Vi la demo de {s} en tu portafolio y quiero un proyecto así.",
      sectors: { advocacia: "Despacho de abogados", contabilidade: "Contabilidad", restaurante: "Restaurante", clinica: "Clínica dental", barbearia: "Barbería", academia: "Gimnasio", petshop: "Tienda de mascotas", automacao: "Automatizaciones inteligentes", game: "Mini juego" } }
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

  /* WhatsApp flutuante (mesmo número do portfólio, mensagem cita o setor) */
  var wa = document.createElement("a");
  wa.className = "wa-float";
  wa.target = "_blank"; wa.rel = "noopener";
  wa.href = "https://wa.me/5511940649315?text=" + encodeURIComponent(T.waMsg.replace("{s}", T.sectors[body.dataset.sector] || ""));
  wa.setAttribute("aria-label", "WhatsApp");
  wa.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.65-2.05-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.75-.72 2-1.41.25-.69.25-1.29.17-1.41-.07-.12-.27-.2-.57-.35M12.05 21.5h-.01a9.4 9.4 0 0 1-4.8-1.31l-.34-.2-3.57.93.95-3.48-.22-.36a9.41 9.41 0 1 1 7.99 4.42M20.06 3.9A11.25 11.25 0 0 0 12.05.6C5.8.6.72 5.68.72 11.93c0 2 .52 3.95 1.52 5.66L.62 23.4l5.95-1.56a11.3 11.3 0 0 0 5.47 1.4h.01c6.24 0 11.33-5.08 11.33-11.33 0-3.03-1.18-5.87-3.32-8.01"/></svg><span>' + esc(T.wa) + "</span>";
  body.appendChild(wa);
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
  function toast(msg, warn, undo) {
    toastEl.textContent = msg;
    if (undo) {
      var b = document.createElement("button");
      b.textContent = T.undo;
      b.onclick = function () { toastEl.classList.remove("is-on"); undo(); };
      toastEl.appendChild(b);
    }
    toastEl.classList.toggle("is-warn", !!warn);
    toastEl.classList.add("is-on");
    clearTimeout(toastT);
    toastT = setTimeout(function () { toastEl.classList.remove("is-on"); }, undo ? 5000 : 3200);
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

  /* ---------- Painel admin: views internas (sidebar + abas no mobile) ---------- */
  function linkText(l) { return [].filter.call(l.childNodes, function (n) { return n.nodeType === 3; }).map(function (n) { return n.textContent; }).join("").trim(); }
  function view(link) {
    var app = link.closest(".app"), id = link.dataset.view, v = document.getElementById(id);
    $$(".view", app).forEach(function (x) { x.classList.toggle("is-active", x === v); });
    $$("[data-view]", app).forEach(function (l) { l.classList.toggle("is-on", l.dataset.view === id); });
    var title = $("[data-view-title]", app);
    if (title) title.textContent = linkText(link);
    vp.scrollTop = 0;
    reveal(v);
    document.dispatchEvent(new CustomEvent("demo:view", { detail: id }));
  }
  $$(".app").forEach(function (app) {
    var links = $$(".app__side [data-view]", app);
    if (!links.length) return;
    var nav = document.createElement("nav");
    nav.className = "app__tabs";
    nav.innerHTML = links.map(function (l) { return '<button data-view="' + l.dataset.view + '">' + l.innerHTML + "</button>"; }).join("");
    var main = $(".app__main", app), top = $(".app__top", main);
    main.insertBefore(nav, top ? top.nextSibling : main.firstChild);
    view(links.filter(function (l) { return l.classList.contains("is-on"); })[0] || links[0]);
  });

  /* ---------- Camada de overlays: drawer de detalhes + paleta ⌘K ---------- */
  var layer = document.createElement("div");
  layer.className = "layer";
  layer.innerHTML = '<div class="layer__bk"></div><aside class="drawer" role="dialog" aria-modal="true"></aside>' +
    '<div class="cmdk" role="dialog" aria-label="Command palette"><input class="input" placeholder="' + esc(T.search) + '" aria-label="' + esc(T.search) + '"><div class="cmdk__list"></div>' +
    '<div class="cmdk__foot"><span><span class="kbd">↑↓</span> ' + T.nav + '</span><span><span class="kbd">↵</span> ' + T.open + '</span><span><span class="kbd">esc</span> ' + T.close + "</span></div></div>";
  $(".stage").appendChild(layer);
  var drawerEl = $(".drawer", layer);
  function closeLayer() { layer.className = "layer"; }
  function drawer(title, html) {
    drawerEl.innerHTML = '<div class="drawer__h"><h3>' + esc(title) + '</h3><button class="drawer__x" aria-label="' + esc(T.close) + '">✕</button></div>' + html;
    layer.className = "layer is-open is-drawer";
    drawerEl.scrollTop = 0;
    $$("[data-count], [data-p]", drawerEl).forEach(show);
    $$("[data-bars]", drawerEl).forEach(bars);
    return drawerEl;
  }
  layer.addEventListener("click", function (e) { if (e.target.closest(".drawer__x") || e.target.classList.contains("layer__bk")) closeLayer(); });

  var cmdk = $(".cmdk", layer), cIn = $("input", cmdk), cList = $(".cmdk__list", cmdk), cItems = [], cSel = 0, extra = [];
  function cmdAll() {
    var items = screens.map(function (s, i) { return { g: T.screens, label: tabs.children[i].lastChild.textContent, run: function () { go(s.id); } }; });
    $$(".app__side [data-view]").forEach(function (l) {
      items.push({ g: T.views, label: linkText(l), run: function () { go(l.closest(".screen").id); view(l); } });
    });
    return items.concat(extra);
  }
  function cmdRender() {
    var q = cIn.value.trim().toLowerCase(), last = "";
    cItems = cmdAll().filter(function (it) { return !q || (it.label + " " + it.g).toLowerCase().indexOf(q) >= 0; });
    cSel = 0;
    cList.innerHTML = cItems.map(function (it, i) {
      var h = it.g !== last ? '<div class="cmdk__g">' + esc(it.g) + "</div>" : "";
      last = it.g;
      return h + '<button class="cmdk__i" data-i="' + i + '">' + esc(it.label) + "</button>";
    }).join("") || '<p class="cmdk__empty">' + esc(T.none) + "</p>";
    mark();
  }
  function mark() { $$(".cmdk__i", cList).forEach(function (b, i) { b.classList.toggle("is-sel", i === cSel); if (i === cSel) b.scrollIntoView({ block: "nearest" }); }); }
  function openCmdk() { layer.className = "layer is-open is-cmdk"; cIn.value = ""; cmdRender(); setTimeout(function () { cIn.focus(); }, 40); }
  function runCmd(i) { var it = cItems[i]; if (it) { closeLayer(); it.run(); } }
  cIn.addEventListener("input", cmdRender);
  cIn.addEventListener("keydown", function (e) {
    if (e.key === "ArrowDown") { e.preventDefault(); cSel = Math.min(cItems.length - 1, cSel + 1); mark(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); cSel = Math.max(0, cSel - 1); mark(); }
    else if (e.key === "Enter") runCmd(cSel);
  });
  cList.addEventListener("click", function (e) { var b = e.target.closest(".cmdk__i"); if (b) runCmd(+b.dataset.i); });
  document.addEventListener("keydown", function (e) {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); if (layer.classList.contains("is-cmdk")) closeLayer(); else openCmdk(); }
    else if (e.key === "Escape" && layer.classList.contains("is-open")) closeLayer();
  });

  /* ---------- Kanban: arrastar e soltar + botão avançar ---------- */
  function kcount(board) { $$(".kcol", board).forEach(function (c) { var n = $("[data-n]", c); if (n) n.textContent = $$(".kcard", c).length; }); }
  function kmove(card, col, silent) {
    var from = card.closest(".kcol");
    if (!col || from === col) return;
    $(".kcards", col).prepend(card);
    card.style.animation = "none"; void card.offsetWidth; card.style.animation = "";
    kcount(col.closest(".kanban"));
    var d = { from: from, to: col, msg: "" }; // a página pode trocar a mensagem do toast (d.msg)
    card.dispatchEvent(new CustomEvent("kmove", { bubbles: true, detail: d }));
    if (!silent) toast(d.msg || T.moved + " " + $("h4", col).firstChild.textContent.trim(), false, function () { kmove(card, from, true); });
  }
  var dragCard = null;
  document.addEventListener("dragstart", function (e) {
    var c = e.target.closest && e.target.closest(".kcard");
    if (!c) return;
    dragCard = c; c.classList.add("is-drag");
    e.dataTransfer.effectAllowed = "move";
    try { e.dataTransfer.setData("text/plain", ""); } catch (x) { }
  });
  document.addEventListener("dragend", function () {
    if (dragCard) dragCard.classList.remove("is-drag");
    dragCard = null;
    $$(".kcol.is-over").forEach(function (c) { c.classList.remove("is-over"); });
  });
  document.addEventListener("dragover", function (e) {
    var col = dragCard && e.target.closest(".kcol");
    if (!col) return;
    e.preventDefault();
    $$(".kcol.is-over").forEach(function (c) { if (c !== col) c.classList.remove("is-over"); });
    col.classList.add("is-over");
  });
  document.addEventListener("drop", function (e) {
    var col = dragCard && e.target.closest(".kcol");
    if (col) { e.preventDefault(); kmove(dragCard, col); }
  });

  /* ---------- Filtros: input[data-filter="#lista"] + .chips[data-chips="#lista"] (linhas com data-tag) ---------- */
  var FS = {};
  function applyFilter(sel) {
    var st = FS[sel] || (FS[sel] = { q: "", tag: "all" });
    $$(sel + " > *").forEach(function (row) {
      var okQ = !st.q || row.textContent.toLowerCase().indexOf(st.q) >= 0;
      var okT = st.tag === "all" || (" " + (row.dataset.tag || "") + " ").indexOf(" " + st.tag + " ") >= 0;
      row.hidden = !(okQ && okT);
    });
  }
  document.addEventListener("input", function (e) {
    var f = e.target.closest && e.target.closest("[data-filter]");
    if (!f) return;
    (FS[f.dataset.filter] = FS[f.dataset.filter] || { q: "", tag: "all" }).q = f.value.trim().toLowerCase();
    applyFilter(f.dataset.filter);
  });
  document.addEventListener("pick", function (e) {
    var c = e.target.closest("[data-chips]");
    if (!c) return;
    (FS[c.dataset.chips] = FS[c.dataset.chips] || { q: "", tag: "all" }).tag = e.detail.dataset.value;
    applyFilter(c.dataset.chips);
  });

  /* ---------- Edição inline: [data-edit="mensagem ao salvar"] ---------- */
  document.addEventListener("keydown", function (e) {
    if (e.key === "Enter" && e.target.getAttribute && e.target.getAttribute("contenteditable") === "true") { e.preventDefault(); e.target.blur(); }
  });
  document.addEventListener("focusout", function (e) {
    var n = e.target;
    if (!n.hasAttribute || !n.hasAttribute("data-edit") || n.getAttribute("contenteditable") !== "true") return;
    n.removeAttribute("contenteditable");
    n.classList.remove("saved"); void n.offsetWidth; n.classList.add("saved");
    toast(n.dataset.edit || T.saved);
    n.dispatchEvent(new CustomEvent("edited", { bubbles: true }));
  });

  /* ---------- Cliques globais ---------- */
  document.addEventListener("click", function (e) {
    var tab = e.target.closest(".demobar__tabs [data-go]");
    if (tab) { go(tab.dataset.go); return; }

    var vl = e.target.closest("[data-view]");
    if (vl) { view(vl); return; }
    if (e.target.closest("[data-cmdk]")) { openCmdk(); return; }
    var dt = e.target.closest("[data-drawer]");
    if (dt) { var tpl = $(dt.dataset.drawer); dt.removeAttribute("data-n"); drawer(tpl.dataset.title, tpl.innerHTML); return; }
    var adv = e.target.closest(".kadv");
    if (adv) { var kc = adv.closest(".kcol"); kmove(adv.closest(".kcard"), kc.nextElementSibling); return; }
    var todo = e.target.closest(".todo");
    if (todo) {
      var on = todo.classList.toggle("is-done");
      todo.dispatchEvent(new CustomEvent("check", { bubbles: true, detail: on }));
      if (on) toast(T.done + ": " + ($("b", todo) || todo).textContent, false, function () { todo.classList.remove("is-done"); });
      return;
    }
    var ed = e.target.closest("[data-edit]");
    if (ed && ed.getAttribute("contenteditable") !== "true") {
      ed.setAttribute("contenteditable", "true"); ed.focus();
      var r = document.createRange(); r.selectNodeContents(ed);
      var s = getSelection(); s.removeAllRanges(); s.addRange(r);
      return;
    }

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
    if (a && (vp.contains(a) || layer.contains(a))) {
      e.preventDefault();
      var id = a.getAttribute("href").slice(1), tgt = id && document.getElementById(id);
      if (!tgt) return;
      closeLayer();
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
  $$(".kanban").forEach(kcount);

  window.Demo = {
    $: $, $$: $$, esc: esc, go: go, toast: toast, shake: shake, reveal: reveal, setP: setP, lang: LANG, shot: shot, vp: vp,
    drawer: drawer, closeLayer: closeLayer, kcount: kcount, bars: bars, applyFilter: applyFilter,
    cmd: function (label, run) { extra.push({ g: T.actions, label: label, run: run }); },
    brl: function (v) { return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" }); }
  };
  window.addEventListener("hashchange", function () { go(location.hash.slice(1)); });
  // o navegador rola até o id da tela no load; a tela começa sempre no topo
  window.addEventListener("load", function () { vp.scrollTop = 0; });
  go(location.hash.slice(1));
})();
