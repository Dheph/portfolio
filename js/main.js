/* Portfólio — lógica de UI: render, filtros, tema, nav e case-study. */
(function () {
  "use strict";
  var P = window.PORTFOLIO || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };
  var esc = function (s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  };

  /* ---------- Ano no rodapé ---------- */
  $("#year").textContent = new Date().getFullYear();

  /* ---------- Tema ---------- */
  var root = document.documentElement;
  var saved;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (saved) root.setAttribute("data-theme", saved);
  $("#themeToggle").addEventListener("click", function () {
    var cur = root.getAttribute("data-theme");
    var next = cur === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Menu mobile ---------- */
  var navToggle = $("#navToggle");
  var nav = $("#nav");
  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $(".nav__links").addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      nav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
  // Navbar com sombra ao rolar
  window.addEventListener("scroll", function () {
    nav.classList.toggle("is-scrolled", window.scrollY > 10);
  }, { passive: true });

  /* ---------- Scrollspy ---------- */
  var navAnchors = Array.prototype.slice.call(document.querySelectorAll(".nav__links a"));
  var sections = navAnchors
    .map(function (a) { return document.querySelector(a.getAttribute("href")); })
    .filter(Boolean);
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          var id = en.target.id;
          navAnchors.forEach(function (a) {
            a.classList.toggle("is-active", a.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Reveal on scroll ---------- */
  function observeReveals() {
    var items = document.querySelectorAll("[data-reveal]:not(.is-in)");
    if (!("IntersectionObserver" in window)) {
      items.forEach(function (n) { n.classList.add("is-in"); });
      return;
    }
    var io = new IntersectionObserver(function (entries, obs) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("is-in"); obs.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (n) { io.observe(n); });
  }

  /* ---------- Render: Stack ---------- */
  (function renderStack() {
    var grid = $("#stackGrid");
    (P.stack || []).forEach(function (g, i) {
      var card = el("div", "stack-card");
      card.setAttribute("data-reveal", "");
      card.style.setProperty("--d", (i * 60) + "ms");
      var chips = g.items.map(function (it) { return '<li>' + esc(it) + '</li>'; }).join("");
      card.innerHTML = '<h3>' + esc(g.group) + '</h3><ul class="chips">' + chips + '</ul>';
      grid.appendChild(card);
    });
  })();

  /* ---------- Render: Projetos + filtros ---------- */
  var activeFilter = "Todos";
  var projectsEl = $("#projects");
  var filtersEl = $("#filters");

  function matches(p) {
    return activeFilter === "Todos" || (p.tags || []).indexOf(activeFilter) !== -1;
  }
  function visibleProjects() {
    return (P.projects || []).filter(matches);
  }

  function renderFilters() {
    (P.filters || []).forEach(function (f) {
      var b = el("button", "filter" + (f === activeFilter ? " is-active" : ""), esc(f));
      b.setAttribute("role", "tab");
      b.setAttribute("aria-selected", f === activeFilter ? "true" : "false");
      b.addEventListener("click", function () {
        activeFilter = f;
        Array.prototype.forEach.call(filtersEl.children, function (c) {
          var on = c.textContent === f;
          c.classList.toggle("is-active", on);
          c.setAttribute("aria-selected", on ? "true" : "false");
        });
        renderProjects();
      });
      filtersEl.appendChild(b);
    });
  }

  function renderProjects() {
    projectsEl.innerHTML = "";
    visibleProjects().forEach(function (p, i) {
      var card = el("article", "card" + (p.highlight ? " card--feat" : ""));
      card.setAttribute("data-reveal", "");
      card.style.setProperty("--d", (i * 55) + "ms");
      card.style.setProperty("--accent", p.accent || "#7c5cff");
      card.tabIndex = 0;
      card.setAttribute("role", "button");
      card.setAttribute("aria-label", "Abrir case: " + p.name);
      var stackChips = (p.stack || []).slice(0, 5).map(function (s) {
        return '<span>' + esc(s) + '</span>';
      }).join("");
      card.innerHTML =
        '<div class="card__top">' +
          '<span class="card__year">' + esc(p.year || "") + '</span>' +
          (p.highlight ? '<span class="card__star" title="Destaque">★</span>' : '') +
        '</div>' +
        '<h3 class="card__title">' + esc(p.name) + '</h3>' +
        '<p class="card__tag">' + esc(p.tagline || "") + '</p>' +
        '<div class="card__stack">' + stackChips + '</div>' +
        '<span class="card__more">Ver case →</span>';
      function open() { openCase(p.id); }
      card.addEventListener("click", open);
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
      });
      projectsEl.appendChild(card);
    });
    observeReveals();
  }

  /* ---------- Render: Experiência ---------- */
  (function renderExperience() {
    var tl = $("#timeline");
    (P.experience || []).forEach(function (x, i) {
      var li = el("li", "tl-item");
      li.setAttribute("data-reveal", "");
      li.style.setProperty("--d", (i * 50) + "ms");
      li.innerHTML =
        '<span class="tl-dot" aria-hidden="true"></span>' +
        '<div class="tl-body">' +
          '<span class="tl-period">' + esc(x.period) + '</span>' +
          '<h3 class="tl-role">' + esc(x.role) + ' · <span class="tl-company">' + esc(x.company) + '</span></h3>' +
          '<p class="tl-desc">' + esc(x.desc) + '</p>' +
        '</div>';
      tl.appendChild(li);
    });
  })();

  /* ---------- Case-study (navegação especial) ---------- */
  var caseEl = $("#case");
  var caseBody = $("#caseBody");
  var caseCounter = $("#caseCounter");
  var lastFocus = null;

  function projectIndexById(id) {
    var list = P.projects || [];
    for (var i = 0; i < list.length; i++) if (list[i].id === id) return i;
    return -1;
  }

  function renderCase(p, idx, total) {
    caseCounter.textContent = (idx + 1) + " / " + total;
    caseBody.style.setProperty("--accent", p.accent || "#7c5cff");
    var tags = (p.tags || []).map(function (t) { return '<span class="pill">' + esc(t) + '</span>'; }).join("");
    var stack = (p.stack || []).map(function (s) { return '<li>' + esc(s) + '</li>'; }).join("");
    var bullets = (p.bullets || []).map(function (b) { return '<li>' + esc(b) + '</li>'; }).join("");
    var links = (p.links || []).map(function (l) {
      return '<a class="btn btn--sm" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + ' ↗</a>';
    }).join("");
    caseBody.innerHTML =
      '<div class="case__hd">' +
        '<div class="case__tags">' + tags + '</div>' +
        '<h2 id="caseTitle" class="case__title">' + esc(p.name) + '</h2>' +
        '<p class="case__tag">' + esc(p.tagline || "") + '</p>' +
        (p.role ? '<p class="case__role">' + esc(p.role) + ' · ' + esc(p.year || "") + '</p>' : '') +
      '</div>' +
      '<p class="case__summary">' + esc(p.summary || "") + '</p>' +
      (bullets ? '<h3 class="case__h">Destaques</h3><ul class="case__list">' + bullets + '</ul>' : '') +
      (stack ? '<h3 class="case__h">Tecnologias</h3><ul class="case__stack">' + stack + '</ul>' : '') +
      (links ? '<div class="case__links">' + links + '</div>' : '');
    caseBody.scrollTop = 0;
  }

  function openCase(id) {
    var idx = projectIndexById(id);
    if (idx < 0) return;
    var list = P.projects;
    renderCase(list[idx], idx, list.length);
    if (!caseEl.classList.contains("is-open")) {
      lastFocus = document.activeElement;
      caseEl.classList.add("is-open");
      caseEl.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      $(".case__close", caseEl).focus();
    }
    if (location.hash !== "#/projeto/" + id) {
      history.pushState({ caseId: id }, "", "#/projeto/" + id);
    }
  }

  function closeCase(fromPop) {
    if (!caseEl.classList.contains("is-open")) return;
    caseEl.classList.remove("is-open");
    caseEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    if (!fromPop && /^#\/projeto\//.test(location.hash)) {
      history.pushState("", "", location.pathname + location.search + "#projetos");
    }
  }

  function step(dir) {
    var m = location.hash.match(/^#\/projeto\/(.+)$/);
    var list = P.projects;
    var idx = m ? projectIndexById(m[1]) : -1;
    if (idx < 0) return;
    var next = (idx + dir + list.length) % list.length;
    openCase(list[next].id);
  }

  // Botões do overlay
  Array.prototype.forEach.call(caseEl.querySelectorAll("[data-close]"), function (b) {
    b.addEventListener("click", function () { closeCase(); });
  });
  $("[data-case-prev]", caseEl).addEventListener("click", function () { step(-1); });
  $("[data-case-next]", caseEl).addEventListener("click", function () { step(1); });

  // Teclado
  document.addEventListener("keydown", function (e) {
    if (!caseEl.classList.contains("is-open")) return;
    if (e.key === "Escape") closeCase();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });

  // Rota por hash (deep-link e botão voltar do navegador)
  function syncFromHash() {
    var m = location.hash.match(/^#\/projeto\/(.+)$/);
    if (m && projectIndexById(m[1]) >= 0) openCase(m[1]);
    else closeCase(true);
  }
  window.addEventListener("popstate", syncFromHash);

  /* ---------- Init ---------- */
  renderFilters();
  renderProjects();
  observeReveals();
  // hero reveal
  document.querySelectorAll(".hero [data-reveal]").forEach(function (n) { n.classList.add("is-in"); });
  syncFromHash();
})();
