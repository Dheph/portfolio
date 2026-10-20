/* Portfólio — engine de UI + i18n. Vanilla JS. */
(function () {
  "use strict";
  var D = window.DATA || {};
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) { var n = document.createElement(tag); if (cls) n.className = cls; if (html != null) n.innerHTML = html; return n; };
  var esc = function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); };
  var LANGS = ["en", "pt", "es"];

  /* ---------------- i18n core ---------------- */
  var lang = "en";
  function dictOf(l) { return (window.I18N && window.I18N[l]) || {}; }
  function getPath(obj, path) {
    var parts = path.split("."), cur = obj;
    for (var i = 0; i < parts.length; i++) { if (cur == null) return undefined; cur = cur[parts[i]]; }
    return cur;
  }
  function t(path) {
    var v = getPath(dictOf(lang), path);
    if (v === undefined || v === null) v = getPath(dictOf("en"), path);
    return v;
  }
  function detectLang() {
    try { var s = localStorage.getItem("lang"); if (s && LANGS.indexOf(s) >= 0) return s; } catch (e) {}
    var n = (navigator.language || navigator.userLanguage || "en").slice(0, 2).toLowerCase();
    if (n === "pt") return "pt";
    if (n === "es") return "es";
    return "en";
  }
  function applyI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (n) {
      var v = t(n.getAttribute("data-i18n"));
      if (typeof v === "string") n.textContent = v;
    });
  }

  /* ---------------- Theme ---------------- */
  var root = document.documentElement;
  try { var th = localStorage.getItem("theme"); if (th) root.setAttribute("data-theme", th); } catch (e) {}
  $("#themeToggle").addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------------- Nav ---------------- */
  var nav = $("#nav"), navToggle = $("#navToggle");
  navToggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  $(".nav__links").addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("is-open"); navToggle.setAttribute("aria-expanded", "false"); }
  });
  window.addEventListener("scroll", function () { nav.classList.toggle("is-scrolled", window.scrollY > 10); }, { passive: true });

  /* ---------------- Hero cursor glow ---------------- */
  var heroFx = $(".hero__fx");
  var hero = $(".hero");
  if (heroFx && window.matchMedia("(pointer:fine)").matches) {
    hero.addEventListener("mousemove", function (e) {
      var r = hero.getBoundingClientRect();
      heroFx.style.setProperty("--mx", ((e.clientX - r.left) / r.width * 100) + "%");
      heroFx.style.setProperty("--my", ((e.clientY - r.top) / r.height * 100) + "%");
    });
  }

  /* ---------------- Reveal ---------------- */
  var io = ("IntersectionObserver" in window) ? new IntersectionObserver(function (ents, obs) {
    ents.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("is-in"); obs.unobserve(en.target); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  function reveal(scope) {
    (scope || document).querySelectorAll("[data-reveal]:not(.is-in)").forEach(function (n, i) {
      if (!n.style.getPropertyValue("--d")) n.style.setProperty("--d", (i % 8 * 45) + "ms");
      if (io) io.observe(n); else n.classList.add("is-in");
    });
  }

  /* ---------------- Scrollspy ---------------- */
  var navAnchors = [].slice.call(document.querySelectorAll(".nav__links a"));
  if ("IntersectionObserver" in window) {
    var secs = navAnchors.map(function (a) { return document.querySelector(a.getAttribute("href")); }).filter(Boolean);
    var spy = new IntersectionObserver(function (ents) {
      ents.forEach(function (en) { if (en.isIntersecting) {
        navAnchors.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      } });
    }, { rootMargin: "-45% 0px -50% 0px" });
    secs.forEach(function (s) { spy.observe(s); });
  }

  /* ---------------- Frames / media ---------------- */
  function buildFrame(p, interactive) {
    var m = p.media;
    var frame = el("div", "frame frame--" + (m.chrome || "browser"));
    frame.style.setProperty("--accent", p.accent);
    var tp = t("projects." + p.id) || {};
    frame.innerHTML =
      '<div class="frame__bar"><div class="frame__dots"><i></i><i></i><i></i></div>' +
      '<div class="frame__url">' + esc(m.url || "") + '</div></div>';
    var screen = el("div", "frame__screen");
    var img = el("img", "shot");
    img.src = m.src; img.alt = tp.name || p.id; img.loading = "lazy";
    screen.appendChild(img);
    frame.appendChild(screen);

    if (m.shots && m.shots.length) {
      var navEl = el("div", "frame__nav");
      m.shots.forEach(function (s, i) {
        var b = el("button", i === 0 ? "is-active" : "", esc(t("shots." + s.key)));
        b.type = "button"; b.dataset.i = i; navEl.appendChild(b);
      });
      screen.appendChild(navEl);
      function applyShot(i) {
        var s = m.shots[i];
        img.style.transform = "scale(" + s.scale + ")";
        img.style.transformOrigin = s.ox + "% " + s.oy + "%";
        [].forEach.call(navEl.children, function (c, j) { c.classList.toggle("is-active", j === i); });
      }
      applyShot(0);
      navEl.addEventListener("click", function (e) {
        var b = e.target.closest("button"); if (!b) return;
        e.stopPropagation(); e.preventDefault();
        applyShot(+b.dataset.i);
      });
    }
    return frame;
  }
  function buildCover(p) {
    var c = el("div", "cover");
    c.style.setProperty("--accent", p.accent);
    c.innerHTML = '<span class="cover__mono">' + esc(p.media.mono) + "</span>";
    return c;
  }
  function buildMedia(p, interactive) {
    return p.media.type === "image" ? buildFrame(p, interactive) : buildCover(p);
  }

  /* ---------------- Hero dynamic ---------------- */
  function renderHero() {
    var stats = $("#heroStats"); stats.innerHTML = "";
    (t("hero.stats") || []).forEach(function (s) {
      stats.appendChild(el("li", "", "<strong>" + esc(s.v) + "</strong><span>" + esc(s.k) + "</span>"));
    });
    var badges = $("#heroBadges"); badges.innerHTML = "";
    (D.heroBadges || []).forEach(function (b, i) {
      badges.appendChild(el("span", "f" + (i + 1), esc(b)));
    });
  }

  /* ---------------- About ---------------- */
  function renderAbout() {
    var txt = $("#aboutText"); txt.innerHTML = "";
    (t("about.p") || []).forEach(function (p) { txt.appendChild(el("p", null, esc(p))); });
    var labels = t("about.factLabels") || {}, facts = t("about.facts") || {};
    var card = $("#aboutFacts");
    var rows = Object.keys(facts).map(function (k) {
      return "<div><dt>" + esc(labels[k] || k) + "</dt><dd>" + esc(facts[k]) + "</dd></div>";
    }).join("");
    card.innerHTML =
      '<div class="openrow"><i class="dot"></i>' + esc(t("ui.openToWork")) + "</div>" +
      '<dl class="facts">' + rows + "</dl>";
  }

  /* ---------------- Services accordion ---------------- */
  function renderServices() {
    var acc = $("#accordion"); acc.innerHTML = "";
    (D.services || []).forEach(function (id, i) {
      var s = t("services." + id) || {};
      var item = el("div", "acc" + (i === 0 ? " is-open" : ""));
      item.setAttribute("data-reveal", "");
      var tags = (s.tags || []).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
      item.innerHTML =
        '<button class="acc__head" aria-expanded="' + (i === 0) + '">' +
          '<span class="acc__num">0' + (i + 1) + '</span>' +
          '<span class="acc__title">' + esc(s.title) + '</span>' +
          '<span class="acc__plus" aria-hidden="true">+</span>' +
        '</button>' +
        '<div class="acc__panel"><div class="acc__inner">' +
          '<p class="acc__desc">' + esc(s.desc) + '</p>' +
          '<div class="acc__tags">' + tags + '</div>' +
        '</div></div>';
      item.querySelector(".acc__head").addEventListener("click", function () {
        var open = item.classList.contains("is-open");
        [].forEach.call(acc.children, function (c) { c.classList.remove("is-open"); c.querySelector(".acc__head").setAttribute("aria-expanded", "false"); });
        if (!open) { item.classList.add("is-open"); this.setAttribute("aria-expanded", "true"); }
      });
      acc.appendChild(item);
    });
  }

  /* ---------------- Work (filters + grid) ---------------- */
  var activeFilter = "all";
  function renderFilters() {
    var f = $("#filters"); f.innerHTML = "";
    (D.filters || []).forEach(function (key) {
      var b = el("button", "filter" + (key === activeFilter ? " is-active" : ""), esc(t("ui.filters." + key)));
      b.type = "button"; b.setAttribute("role", "tab");
      b.addEventListener("click", function () { activeFilter = key; renderFilters(); renderWork(); });
      f.appendChild(b);
    });
  }
  function visibleProjects() {
    return (D.projects || []).filter(function (p) { return activeFilter === "all" || (p.tags || []).indexOf(activeFilter) >= 0; });
  }
  function infoBlock(p, featured) {
    var tp = t("projects." + p.id) || {};
    var tags = (p.tags || []).map(function (x) { return esc(t("ui.filters." + x)); }).join(" · ");
    var tech = (p.tech || []).slice(0, featured ? 6 : 4).map(function (x) { return "<span>" + esc(x) + "</span>"; }).join("");
    return '<div class="card__info">' +
      '<div class="card__meta">' + (featured ? '<span class="star">★</span>' : "") + "<span>" + esc(p.year) + "</span><span>·</span><span>" + tags + "</span></div>" +
      '<h3 class="card__title">' + esc(tp.name) + "</h3>" +
      '<p class="card__tag">' + esc(tp.tagline) + "</p>" +
      '<div class="card__tech">' + tech + "</div>" +
      '<span class="card__more">' + esc(t("ui.viewCase")) + " →</span></div>";
  }
  function renderWork() {
    var grid = $("#work-grid"); grid.innerHTML = "";
    visibleProjects().forEach(function (p) {
      var featured = !!p.featured;
      var card = el(featured ? "div" : "article", "card" + (featured ? " card--feat" : ""));
      card.style.setProperty("--accent", p.accent);
      card.setAttribute("data-reveal", "");
      card.tabIndex = 0; card.setAttribute("role", "button");
      card.setAttribute("aria-label", (t("projects." + p.id) || {}).name || p.id);
      var media = buildMedia(p, true);
      var info = el("template"); info.innerHTML = infoBlock(p, featured);
      if (featured) { card.appendChild(media); card.appendChild(info.content); }
      else { card.appendChild(media); card.appendChild(info.content); }
      function open() { openCase(p.id); }
      card.addEventListener("click", function (e) { if (e.target.closest(".frame__nav")) return; open(); });
      card.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
      grid.appendChild(card);
    });
    reveal(grid);
  }

  /* ---------------- Experience ---------------- */
  function renderExperience() {
    var tl = $("#timeline"); tl.innerHTML = "";
    (D.experience || []).forEach(function (x) {
      var tx = t("experience." + x.id) || {};
      var li = el("li", "tl"); li.setAttribute("data-reveal", "");
      var tech = (x.tech || []).map(function (s) { return "<span>" + esc(s) + "</span>"; }).join("");
      li.innerHTML =
        '<span class="tl__dot"></span>' +
        '<span class="tl__period">' + esc(x.period) + "</span>" +
        '<h3 class="tl__role">' + esc(tx.role) + ' · <span class="tl__company">' + esc(tx.company) + "</span></h3>" +
        '<p class="tl__desc">' + esc(tx.desc) + "</p>" +
        '<div class="tl__tech">' + tech + "</div>";
      tl.appendChild(li);
    });
    reveal(tl);
  }

  /* ---------------- Contact ---------------- */
  function renderContact() {
    var s = D.socials || {};
    var email = s.email || "";
    var link = $("#emailLink"); link.href = "mailto:" + email; link.textContent = email;
    var box = $("#contactLinks");
    box.innerHTML =
      '<a class="contact__card" href="mailto:' + esc(email) + '"><span class="k">' + esc(t("contact.emailLabel")) + '</span><span class="v">' + esc(email) + '</span></a>' +
      '<a class="contact__card" href="' + esc(s.linkedin) + '" target="_blank" rel="noopener"><span class="k">' + esc(t("contact.linkedinLabel")) + '</span><span class="v">in/jeffersom-ribeiro</span></a>' +
      '<a class="contact__card" href="' + esc(s.github) + '" target="_blank" rel="noopener"><span class="k">' + esc(t("contact.githubLabel")) + '</span><span class="v">@Dheph</span></a>';
  }
  $("#copyEmail").addEventListener("click", function () {
    var btn = this, email = (D.socials || {}).email || "";
    var done = function () { btn.textContent = t("ui.copied"); setTimeout(function () { btn.textContent = t("ui.copy"); }, 1600); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(email).then(done, done);
    else done();
  });

  /* ---------------- Case study ---------------- */
  var caseEl = $("#case"), caseBody = $("#caseBody"), caseCounter = $("#caseCounter"), lastFocus = null;
  function idxById(id) { var a = D.projects || []; for (var i = 0; i < a.length; i++) if (a[i].id === id) return i; return -1; }
  function renderCase(p, idx, total) {
    var tp = t("projects." + p.id) || {};
    caseCounter.textContent = (idx + 1) + " / " + total;
    caseBody.style.setProperty("--accent", p.accent);
    var tags = (p.tags || []).map(function (x) { return '<span class="pill">' + esc(t("ui.filters." + x)) + "</span>"; }).join("");
    var stack = (p.tech || []).map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("");
    var bullets = (tp.bullets || []).map(function (b) { return "<li>" + esc(b) + "</li>"; }).join("");
    var links = (p.links || []).map(function (l) {
      return '<a class="btn btn--sm" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(t("ui." + l.labelKey)) + " ↗</a>";
    }).join("");
    caseBody.innerHTML = "";
    var mediaWrap = el("div", "case__media");
    mediaWrap.appendChild(buildMedia(p, true));
    caseBody.appendChild(mediaWrap);
    caseBody.insertAdjacentHTML("beforeend",
      '<div class="case__tags">' + tags + "</div>" +
      '<h2 id="caseTitle" class="case__title">' + esc(tp.name) + "</h2>" +
      '<p class="case__tag">' + esc(tp.tagline) + "</p>" +
      (tp.role ? '<p class="case__role">' + esc(tp.role) + " · " + esc(p.year) + "</p>" : "") +
      '<p class="case__summary">' + esc(tp.summary) + "</p>" +
      (bullets ? '<h3 class="case__h">Highlights</h3><ul class="case__list">' + bullets + "</ul>" : "") +
      (stack ? '<h3 class="case__h">Stack</h3><ul class="case__stack">' + stack + "</ul>" : "") +
      (links ? '<div class="case__links">' + links + "</div>" : ""));
    caseBody.scrollTop = 0;
  }
  function openCase(id) {
    var idx = idxById(id); if (idx < 0) return;
    renderCase(D.projects[idx], idx, D.projects.length);
    if (!caseEl.classList.contains("is-open")) {
      lastFocus = document.activeElement;
      caseEl.classList.add("is-open"); caseEl.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      $(".case__close", caseEl).focus();
    }
    if (location.hash !== "#/project/" + id) history.pushState({ c: id }, "", "#/project/" + id);
  }
  function closeCase(fromPop) {
    if (!caseEl.classList.contains("is-open")) return;
    caseEl.classList.remove("is-open"); caseEl.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    if (!fromPop && /^#\/project\//.test(location.hash)) history.pushState("", "", location.pathname + location.search + "#work");
  }
  function step(dir) {
    var m = location.hash.match(/^#\/project\/(.+)$/); if (!m) return;
    var i = idxById(m[1]); if (i < 0) return;
    openCase(D.projects[(i + dir + D.projects.length) % D.projects.length].id);
  }
  [].forEach.call(caseEl.querySelectorAll("[data-close]"), function (b) { b.addEventListener("click", function () { closeCase(); }); });
  $("[data-case-prev]", caseEl).addEventListener("click", function () { step(-1); });
  $("[data-case-next]", caseEl).addEventListener("click", function () { step(1); });
  document.addEventListener("keydown", function (e) {
    if (!caseEl.classList.contains("is-open")) return;
    if (e.key === "Escape") closeCase();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  });
  function syncHash() {
    var m = location.hash.match(/^#\/project\/(.+)$/);
    if (m && idxById(m[1]) >= 0) openCase(m[1]); else closeCase(true);
  }
  window.addEventListener("popstate", syncHash);

  /* ---------------- Language switcher ---------------- */
  function setLang(l, persist) {
    lang = l; root.setAttribute("lang", l);
    if (persist) { try { localStorage.setItem("lang", l); } catch (e) {} }
    [].forEach.call($("#langbar").children, function (c) {
      if (c.dataset && c.dataset.lang) c.classList.toggle("is-active", c.dataset.lang === l);
    });
    renderAll();
    if (caseEl.classList.contains("is-open")) {
      var m = location.hash.match(/^#\/project\/(.+)$/);
      if (m) { var i = idxById(m[1]); if (i >= 0) renderCase(D.projects[i], i, D.projects.length); }
    }
  }
  $("#langbar").addEventListener("click", function (e) {
    var b = e.target.closest("button[data-lang]"); if (!b) return;
    setLang(b.dataset.lang, true);
  });

  /* ---------------- Writing / blog ---------------- */
  var BLOG = "https://dheph.github.io/blog/";
  var POSTS_URL = "https://raw.githubusercontent.com/Dheph/blog/main/posts.json";
  var blogPosts = null;
  var LOCALE = { en: "en-US", pt: "pt-BR", es: "es-ES" };
  function renderWriting() {
    var list = $("#writing-list"), sec = $("#writing");
    if (!list) return;
    if (!blogPosts) return; // ainda carregando / falhou
    if (!blogPosts.length) { sec.style.display = "none"; return; }
    sec.style.display = "";
    list.innerHTML = "";
    blogPosts.slice(0, 2).forEach(function (p) {
      var a = el("a", "post");
      a.href = BLOG + "#/post/" + encodeURIComponent(p.slug);
      a.target = "_blank"; a.rel = "noopener";
      a.setAttribute("data-reveal", "");
      var d = p.date ? new Date(p.date + "T00:00:00") : null;
      var dateStr = d ? new Intl.DateTimeFormat(LOCALE[lang] || "en-US", { day: "2-digit", month: "short", year: "numeric" }).format(d) : "";
      var reading = p.reading ? (p.reading + " " + esc(t("ui.minRead"))) : "";
      var tags = (p.tags || []).slice(0, 3).map(function (tg) { return "<span>#" + esc(tg) + "</span>"; }).join("");
      a.innerHTML =
        '<div class="post__meta mono">' + esc(dateStr) + (reading ? ' · ' + reading : "") + "</div>" +
        '<h3 class="post__title">' + esc(p.title) + "</h3>" +
        (p.description ? '<p class="post__desc">' + esc(p.description) + "</p>" : "") +
        '<div class="post__tags">' + tags + "</div>";
      list.appendChild(a);
    });
    reveal(list);
  }
  function loadPosts() {
    if (!("fetch" in window)) { blogPosts = []; renderWriting(); return; }
    fetch(POSTS_URL, { cache: "no-store" })
      .then(function (r) { return r.ok ? r.json() : []; })
      .then(function (arr) {
        if (!Array.isArray(arr)) arr = [];
        arr.sort(function (a, b) { return (b.date || "").localeCompare(a.date || ""); });
        blogPosts = arr;
      })
      .catch(function () { blogPosts = []; })
      .then(function () { renderWriting(); });
  }

  /* ---------------- Render all ---------------- */
  function renderAll() {
    applyI18n();
    renderHero(); renderAbout(); renderServices();
    renderFilters(); renderWork(); renderExperience(); renderWriting(); renderContact();
    reveal(document);
  }

  /* ---------------- Init ---------------- */
  $("#year").textContent = new Date().getFullYear();
  setLang(detectLang(), false);
  loadPosts();
  syncHash();
})();
