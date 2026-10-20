/* Textos do site por idioma. EN é a base; PT e ES podem herdar (fallback) de EN
   enquanto não traduzidos. O rótulo de cada projeto/experiência é indexado por id. */
window.I18N = {
  en: {
    ui: {
      nav: { work: "Work", about: "About", services: "Services", experience: "Experience", contact: "Contact" },
      hireMe: "Hire me", viewWork: "View work", viewCase: "Open case study",
      close: "Close", prev: "Previous", next: "Next",
      copy: "Copy", copied: "Copied!",
      play: "Google Play", github: "GitHub", site: "Visit",
      openToWork: "Open to work", langLabel: "Language",
      scrollHint: "Scroll",
      filters: { all: "All", personal: "Personal", mobile: "Mobile", fullstack: "Fullstack", freelance: "Freelance", opensource: "Open source" },
      sections: {
        about:      { num: "01", title: "About", em: "me" },
        services:   { num: "02", title: "How I bring ideas to", em: "life" },
        work:       { num: "03", title: "Selected", em: "work" },
        experience: { num: "04", title: "Where I've", em: "worked" },
        contact:    { num: "05", title: "Got an idea? Let's", em: "talk" }
      }
    },

    hero: {
      eyebrow: "// MOBILE · FULLSTACK DEVELOPER",
      name: "Jeffersom Ribeiro",
      taglineA: "I build mobile apps that",
      taglineEm: "just work",
      taglineB: "— online or off.",
      lead: "React Native specialist — offline-first architectures, native Swift/Java modules, and App Store / Google Play releases — with Node.js on the back end and hands-on tech leadership.",
      stats: [
        { v: "Since 2018", k: "building apps" },
        { v: "60+", k: "projects delivered" },
        { v: "Native", k: "iOS & Android" }
      ]
    },

    about: {
      p: [
        "I'm a mobile & fullstack developer who has been shipping software since 2018 — starting with small projects and growing into senior and tech-lead roles. I specialize in React Native: apps that keep working offline and sync safely once they're back online.",
        "When the platform demands it, I drop to native — Swift and Java/Kotlin modules for push, deep linking, maps, and even vehicle and card-machine hardware. On the back end I work with Node.js, CI/CD and clean architectures (Hexagonal, MVVM).",
        "I've led teams, rebuilt legacy apps from the ground up, and shipped for fintech, logistics, real-estate and automotive clients."
      ],
      factLabels: { focus: "Focus", native: "Native", languages: "Languages", since: "Coding since", openTo: "Open to" },
      facts: { focus: "React Native · Node.js", native: "Swift · Kotlin · Java", languages: "EN · PT · ES", since: "2018", openTo: "Full-time & freelance" }
    },

    services: {
      mobile:   { title: "Mobile App Development", desc: "End-to-end React Native apps — from architecture to App Store & Google Play release.", tags: ["React Native", "Offline-first", "Store releases"] },
      native:   { title: "Native Modules & Integrations", desc: "Swift and Java/Kotlin modules when the platform demands it: push, deep linking, maps, card machines and vehicle systems.", tags: ["Swift", "Kotlin / Java", "Push & Deep linking"] },
      fullstack:{ title: "Fullstack / Backend", desc: "Node.js APIs with PostgreSQL, Docker and CI/CD behind your app.", tags: ["Node.js", "PostgreSQL", "CI/CD"] },
      rebuild:  { title: "App Rebuilds & Tech Leadership", desc: "Rescue legacy apps, redefine the architecture, and lead teams with Scrum and mentoring.", tags: ["Legacy rescue", "Architecture", "Mentoring"] },
      offline:  { title: "Offline-first Architecture", desc: "Apps that keep working without a connection and sync safely: SQLite, SmartStore, Redux Persist, Firebase.", tags: ["SQLite", "Sync engines", "Conflict handling"] }
    },

    shots: {
      office: "Office", terminal: "Live terminal", projects: "Projects",
      overworld: "Overworld", moves: "Moves", chat: "NPC chat",
      picker: "Categories", schedule: "Schedule", report: "Report"
    },

    projects: {
      "aiffice": {
        name: "the AIffice",
        tagline: "Local-first multi-agent orchestration with a playful office UI.",
        role: "Creator & architect · personal",
        summary: "A local-first workspace that runs multiple AI agents like employees in a virtual office. Event-driven core in Rust, a live React web client, and a Godot “game mode” track.",
        bullets: [
          "Rust core: event bus and a crash-safe SQLite/WAL event log with idempotent append & replay.",
          "HTTP + WebSocket API streaming every event to clients in real time (single-writer, token-secured).",
          "Real PTY runner (portable-pty) executing shell with live streaming, resize and cancel.",
          "End-to-end flow: manager plans → approval → dependency scheduler → tasks in isolated git worktrees → diff → real merge → per-project memory."
        ]
      },
      "pokebrabo": {
        name: "PokeTibia / PokeBrabo",
        tagline: "A full Pokémon MMORPG — server and client, built from scratch.",
        role: "Author & architect · personal",
        summary: "An OTPokemon-style MMORPG: a TFS 1.x server (C++17 + Lua) and an OTClient Redemption client (C++20 + LuaJIT), protocol 10.98, running natively on Apple Silicon.",
        bullets: [
          "935 species, moves, combat, capture, water / Surf / Fly / Teleport systems, NPCs, shops, quests, gyms and clans.",
          "Server and client compiled natively for macOS arm64.",
          "Web admin panel (map editor) and a Python asset-import pipeline (dat/spr/otb, sprites, effects).",
          "Auto-updating launcher, releases and Windows builds via GitHub Actions."
        ]
      },
      "macclean": {
        name: "mac-clean",
        tagline: "An interactive macOS cleanup CLI with scheduled runs and reports.",
        role: "Author · personal · open source",
        summary: "A terminal tool that reclaims disk space on macOS: pick categories, run safely, and get a before/after report — with optional scheduled weekly cleanups.",
        bullets: [
          "16 cleanup categories (caches, logs, Xcode DerivedData, Docker, Time Machine snapshots…) with one-click confirm.",
          "Scheduled cleanup (e.g. every Monday) with easy change / remove.",
          "Post-run report with disk and memory deltas and a per-category breakdown."
        ]
      },
      "chiconanico": {
        name: "Chico Nanico",
        tagline: "A fullstack literacy platform — 10 minutes a day with your kid.",
        role: "Fullstack Developer",
        summary: "A subscription web platform that guides parents through daily early-literacy activities: a ready-to-print activity, a quick guide for the grown-up, and a sticker to celebrate — organized into age-based tracks.",
        bullets: [
          "Fullstack build: landing, auth and subscription flow, and the daily-activity experience.",
          "Age-based learning tracks with streaks and progress to keep kids going.",
          "Ready-to-print activities generated for each day."
        ]
      },
      "acqio-lojistas": {
        name: "Acqio Lojistas",
        tagline: "Real-time sales tracking for card-machine (POS) merchants.",
        role: "Mobile Developer · freelance",
        summary: "A merchant app to follow card-machine sales in real time: balances, receivables schedule, sale simulation, fees, service requests and shareable receipts.",
        bullets: [
          "Built with React Native, as part of a full rebuild migrating the apps away from a previous outsourced team.",
          "Real-time receivables and sales dashboards tied to the POS terminal."
        ]
      },
      "acqio-franquias": {
        name: "Acqio Franquias",
        tagline: "Franchise manager app for the Acqio fintech network.",
        role: "Mobile Developer · freelance",
        summary: "A franchise-management app for the Acqio network, rebuilt in React Native alongside the merchant app.",
        bullets: [
          "React Native with a hexagonal architecture and i18n.",
          "Delivered as part of the total reconstruction of the Acqio apps."
        ]
      },
      "bwg": {
        name: "BWG App",
        tagline: "Fintech app with real-time analytics and secure transactions.",
        role: "Mobile Developer",
        summary: "A financial app with advanced features, real-time analytics and secure transactions, published on the stores.",
        bullets: [
          "React Native with native Swift & Java modules for push notifications and deep linking.",
          "Drove Scrum adoption and key technical and design decisions."
        ]
      },
      "approva-corretores": {
        name: "Approva Fácil — Brokers",
        tagline: "Mobile credit analysis for real-estate brokers.",
        role: "Fullstack Developer",
        summary: "An app for real-estate brokers to follow the whole customer journey, run credit analyses in minutes and tap a marketplace of 40,000+ units.",
        bullets: [
          "Core app rebuilt in React Native + Node.js with a new design-pattern-based architecture.",
          "Legacy refactor, critical bug fixes and mentoring of new developers."
        ]
      },
      "approva-credito": {
        name: "Approva Fácil — Credit",
        tagline: "Fast mobile credit analysis, integrated with the marketplace.",
        role: "Fullstack Developer",
        summary: "The Approva Cred app: follow the customer journey and run credit analyses in minutes, integrated with a 40,000+ unit marketplace.",
        bullets: [
          "React Native + Node.js, sharing architecture with the broker app."
        ]
      },
      "minha-dz7": {
        name: "Minha Dz7",
        tagline: "Native internet-connection manager app.",
        role: "Fullstack Developer",
        summary: "A native connection-manager app for Dz7 Telecom customers.",
        bullets: [
          "Built with React Native and integrated with the company's internal systems."
        ]
      },
      "teomidia": {
        name: "Teomídia",
        tagline: "Christian streaming: movies, series, courses and kids' content.",
        role: "Mobile Developer",
        summary: "A subscription streaming app for movies, series, documentaries, lectures, courses and children's cartoons, to watch anytime, anywhere.",
        bullets: [
          "React Native with video / streaming integration."
        ]
      },
      "ima-halu": {
        name: "IMA Halu Gamashi",
        tagline: "Mystery-school app with offline video downloads and lives.",
        role: "Mobile Developer",
        summary: "The app of the Institute of Ascension Mysteries: access acquired content, join lives and download videos to watch offline.",
        bullets: [
          "React Native with offline downloads and live streaming."
        ]
      },
      "volkswagen": {
        name: "Volkswagen — Truck apps",
        tagline: "Native truck locking system and routing app for Volkswagen.",
        role: "Mobile Developer (native) · contract",
        summary: "Native apps for Volkswagen trucks: a truck locking-system module and a routing app — pure Java on Android and Swift on iOS.",
        bullets: [
          "Truck locking-system modules integrated with vehicle hardware.",
          "Native routing app: pure Java (Android) and Swift (iOS)."
        ]
      },
      "stone": {
        name: "Stone — POS system",
        tagline: "Adjustments and maintenance on Stone's in-terminal card system.",
        role: "Mobile Developer · freelance",
        summary: "Freelance work on Stone's card-machine (POS) internal system: targeted adjustments and day-to-day maintenance.",
        bullets: [
          "In-terminal (POS) system fixes and ongoing maintenance."
        ]
      },
      "veloo": {
        name: "Veloo",
        tagline: "Route optimization and geolocation for last-mile couriers.",
        role: "Fullstack Developer · Sambatech",
        summary: "A courier app for route mapping and optimization with real-time geolocation and geofencing.",
        bullets: [
          "Google Maps SDK, Geolocation, Mapbox and geofencing."
        ]
      },
      "nativecn": {
        name: "Nativecn-ui",
        tagline: "Open-source customizable Select component for React Native.",
        role: "Open-source contributor",
        summary: "A contribution to the Nativecn-ui library: a customizable Select component with option conversion and controlled-form support.",
        bullets: [
          "Select component with option conversion and docs for controlled forms.",
          "Community pull-request reviews."
        ]
      }
    },

    experience: {
      "getronics": { role: "Mobile Developer", company: "Getronics — Agriculture", desc: "React Native apps integrated with Salesforce, offline-first with safe sync (SQLite, SmartStore, Redux Persist, Firebase); published and maintained on the stores." },
      "nyx":       { role: "Mobile & Fullstack Developer (Tech Lead, freelance)", company: "Nyx — Software Consultancy", desc: "Technical leadership on React, React Native and Node.js projects; infrastructure, CI/CD and architecture of new solutions, aligned directly with stakeholders." },
      "bwg":       { role: "Mobile Developer", company: "BWG — Corporate Social Network", desc: "React Native with native Swift & Java modules for push and deep linking; store releases; drove Scrum adoption." },
      "vw":        { role: "Mobile Developer (native)", company: "Volkswagen — Truck apps", desc: "Truck locking-system modules and a native routing app — pure Java on Android, Swift on iOS." },
      "approva":   { role: "Fullstack Developer", company: "Approva Fácil — Real estate", desc: "Rebuilt the core apps in React Native + Node.js; new architecture, legacy refactor and mentoring." },
      "accio":     { role: "Mobile Developer (freelance)", company: "Acqio — Fintech", desc: "Card-machine (POS) and franchisee apps — leading the full rebuild while importing legacy from the previous outsourced team; i18n and hexagonal architecture." },
      "stone":     { role: "Mobile Developer (freelance)", company: "Stone — Fintech", desc: "Adjustments and day-to-day maintenance on the in-terminal (POS) card system." },
      "sambatech": { role: "Fullstack Developer", company: "Sambatech — Audiovisual & software house", desc: "Apps in React Native, Flutter, Kotlin and Java: Veloo (courier routing / Maps), GVBIM (3D / AutoCAD), Leve (offline-first courses)." },
      "dz7":       { role: "Fullstack Developer", company: "Dz7 Telecom", desc: "First developer at the company: a CRM chatbot (~60% fewer manual tickets), internal apps and a full-stack management system." }
    },

    contact: {
      lead: "Open to full-time roles and freelance projects in mobile & fullstack. Tell me what you're building.",
      emailLabel: "Email", linkedinLabel: "LinkedIn", githubLabel: "GitHub"
    },

    footer: { note: "" }
  },

  /* Preenchidos pelo subagente tradutor. Enquanto vazios, herdam de EN. */
  pt: {},
  es: {}
};
