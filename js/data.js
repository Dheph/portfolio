/* Dados estruturais (sem texto traduzível). Textos ficam em js/i18n.js, por id.
   Imagens, tech, links, cores e "shots" (focos da fake-navigation) ficam aqui. */
window.DATA = {
  socials: {
    github: "https://github.com/Dheph",
    linkedin: "https://www.linkedin.com/in/jeffersom-ribeiro",
    email: "jeffersom.ribeiro@outlook.com"
  },

  /* chaves de filtro -> rótulo via i18n.ui.filters[key] */
  filters: ["all", "personal", "mobile", "fullstack", "freelance", "opensource"],

  /* skills que flutuam ao redor da foto no hero */
  heroBadges: ["React Native", "TypeScript", "Swift", "Kotlin", "Node.js", "Offline-first"],

  services: ["mobile", "native", "fullstack", "rebuild", "offline"],

  projects: [
    {
      id: "aiffice",
      featured: true,
      accent: "#2dd4bf",
      year: "2025",
      tags: ["personal", "fullstack"],
      tech: ["Rust", "React", "WebSocket", "SQLite", "Godot 4"],
      media: {
        type: "image", src: "assets/project-aiffice.webp", chrome: "app",
        url: "the AIffice — localhost:8787",
        shots: [
          { key: "office",   scale: 1,   ox: 50, oy: 36 },
          { key: "terminal", scale: 1.9, ox: 42, oy: 96 },
          { key: "projects", scale: 1.9, ox: 6,  oy: 46 }
        ]
      },
      links: []
    },
    {
      id: "pokebrabo",
      featured: true,
      accent: "#f5a623",
      year: "2025",
      tags: ["personal", "mobile"],
      tech: ["C++17", "Lua", "LuaJIT", "C++20", "macOS arm64"],
      media: {
        type: "image", src: "assets/project-pokebrabo.jpg", chrome: "game",
        url: "PokeBrabo · OTClient",
        shots: [
          { key: "overworld", scale: 1,   ox: 50, oy: 45 },
          { key: "moves",     scale: 1.7, ox: 45, oy: 78 },
          { key: "chat",      scale: 2.0, ox: 26, oy: 95 }
        ]
      },
      links: []
    },
    {
      id: "macclean",
      featured: true,
      accent: "#8b7bff",
      year: "2024",
      tags: ["personal", "opensource"],
      tech: ["Bash", "macOS", "CLI"],
      media: {
        type: "image", src: "assets/project-macclean.png", chrome: "terminal",
        url: "~ mac-clean",
        shots: [
          { key: "picker",   scale: 1.7, ox: 10, oy: 18 },
          { key: "schedule", scale: 1.8, ox: 88, oy: 20 },
          { key: "report",   scale: 1.7, ox: 12, oy: 86 }
        ]
      },
      links: [{ labelKey: "github", url: "https://github.com/Dheph/mac-clean" }]
    },

    {
      id: "chiconanico",
      accent: "#6d5ef0",
      year: "2025",
      tags: ["fullstack", "freelance"],
      tech: ["Fullstack", "Web", "Auth", "Subscriptions"],
      media: { type: "image", src: "assets/project-chiconanico.jpg", chrome: "browser", url: "🔒 chiconanico.com.br" },
      links: [{ labelKey: "site", url: "https://chiconanico.com.br/" }]
    },
    {
      id: "acqio-lojistas",
      accent: "#17a398",
      year: "2023",
      tags: ["mobile", "freelance", "fullstack"],
      tech: ["React Native", "TypeScript", "POS", "Fintech"],
      media: { type: "image", src: "assets/app-acqio-lojistas.jpg", chrome: "play", url: "Google Play" },
      links: [{ labelKey: "play", url: "https://play.google.com/store/apps/details?id=com.acqio.storeapp" }]
    },
    {
      id: "acqio-franquias",
      accent: "#17a398",
      year: "2023",
      tags: ["mobile", "freelance"],
      tech: ["React Native", "i18n", "Hexagonal"],
      media: { type: "image", src: "assets/app-acqio-franquias.jpg", chrome: "play", url: "Google Play" },
      links: [{ labelKey: "play", url: "https://play.google.com/store/apps/details?id=com.acqio.franchiseeapp" }]
    },
    {
      id: "bwg",
      accent: "#6366f1",
      year: "2024",
      tags: ["mobile"],
      tech: ["React Native", "Swift", "Java", "Fintech"],
      media: { type: "image", src: "assets/app-bwg.jpg", chrome: "play", url: "Google Play" },
      links: [{ labelKey: "play", url: "https://play.google.com/store/apps/details?id=com.bwg.app" }]
    },
    {
      id: "approva-corretores",
      accent: "#f59e0b",
      year: "2023",
      tags: ["mobile", "fullstack"],
      tech: ["React Native", "Node.js", "Real estate"],
      media: { type: "image", src: "assets/app-approva-corretores.jpg", chrome: "play", url: "Google Play" },
      links: [{ labelKey: "play", url: "https://play.google.com/store/apps/details?id=com.aprovafacilcorretor" }]
    },
    {
      id: "approva-credito",
      accent: "#f59e0b",
      year: "2023",
      tags: ["mobile", "fullstack"],
      tech: ["React Native", "Node.js"],
      media: { type: "image", src: "assets/app-approva-credito.jpg", chrome: "play", url: "Google Play" },
      links: [{ labelKey: "play", url: "https://play.google.com/store/apps/details?id=com.approvafacil.credito" }]
    },
    {
      id: "minha-dz7",
      accent: "#38bdf8",
      year: "2020",
      tags: ["mobile", "fullstack"],
      tech: ["React Native", "Node.js"],
      media: { type: "image", src: "assets/app-minha-dz7.jpg", chrome: "play", url: "Google Play" },
      links: [{ labelKey: "play", url: "https://play.google.com/store/apps/details?id=br.com.dz7telecom.sistemas" }]
    },
    {
      id: "teomidia",
      accent: "#a855f7",
      year: "2022",
      tags: ["mobile"],
      tech: ["React Native", "Streaming"],
      media: { type: "image", src: "assets/app-teomidia.jpg", chrome: "play", url: "Google Play" },
      links: [{ labelKey: "play", url: "https://play.google.com/store/apps/details?id=br.com.comev.teomidia" }]
    },
    {
      id: "ima-halu",
      accent: "#e879a6",
      year: "2022",
      tags: ["mobile"],
      tech: ["React Native", "Offline", "Streaming"],
      media: { type: "image", src: "assets/app-ima-halu.jpg", chrome: "play", url: "Google Play" },
      links: []
    },

    {
      id: "volkswagen",
      accent: "#5a8def",
      year: "Contract",
      tags: ["mobile"],
      tech: ["Android · Java", "iOS · Swift", "Automotive"],
      media: { type: "cover", mono: "VW" },
      links: []
    },
    {
      id: "stone",
      accent: "#22c55e",
      year: "Freelance",
      tags: ["mobile", "freelance"],
      tech: ["React Native", "POS", "Maintenance"],
      media: { type: "cover", mono: "St" },
      links: []
    },
    {
      id: "veloo",
      accent: "#2bb3c0",
      year: "Sambatech",
      tags: ["mobile", "fullstack"],
      tech: ["React Native", "Google Maps", "Geofencing"],
      media: { type: "cover", mono: "Ve" },
      links: []
    },
    {
      id: "nativecn",
      accent: "#2dd4bf",
      year: "2024",
      tags: ["opensource", "mobile"],
      tech: ["React Native", "TypeScript", "Styled"],
      media: { type: "cover", mono: "{ }" },
      links: [{ labelKey: "github", url: "https://github.com/Dheph" }]
    }
  ],

  experience: [
    { id: "getronics", period: "2025 – 2026", tech: ["React Native", "Salesforce", "Offline-first"] },
    { id: "nyx",       period: "2025",        tech: ["React", "React Native", "Node.js"] },
    { id: "bwg",       period: "2024 – 2025", tech: ["React Native", "Swift", "Java"] },
    { id: "vw",        period: "Contract",    tech: ["Android · Java", "iOS · Swift"] },
    { id: "approva",   period: "2023 – 2024", tech: ["React Native", "Node.js"] },
    { id: "accio",     period: "2023",        tech: ["React Native", "POS", "i18n"] },
    { id: "stone",     period: "Freelance",   tech: ["React Native", "POS"] },
    { id: "sambatech", period: "2021 – 2023", tech: ["React Native", "Flutter", "Kotlin"] },
    { id: "dz7",       period: "2020 – 2021", tech: ["React", "Node.js", "PostgreSQL"] }
  ]
};
