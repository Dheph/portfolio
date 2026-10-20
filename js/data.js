/* Dados do portfólio — editar aqui para atualizar o conteúdo. */
window.PORTFOLIO = {
  stack: [
    {
      group: "Mobile",
      items: ["React Native", "TypeScript", "Expo / RN CLI", "Flutter", "React Navigation", "i18n"]
    },
    {
      group: "Nativo",
      items: ["Swift", "Kotlin", "Java", "Módulos nativos", "Push & Deep linking"]
    },
    {
      group: "Arquitetura",
      items: ["Offline First", "SQLite · SmartStore", "Redux Persist", "Clean / Hexagonal", "MVVM", "Design Systems"]
    },
    {
      group: "Backend & Infra",
      items: ["Node.js", "PostgreSQL", "Docker", "Firebase", "CI/CD", "Linux"]
    },
    {
      group: "Integrações",
      items: ["Salesforce", "Google Maps SDK", "Mapbox · geofencing", "Streaming de vídeo", "AppCenter"]
    },
    {
      group: "Qualidade",
      items: ["Jest", "ESLint / Prettier", "Git (GitHub/Bitbucket)", "Jira", "Scrum", "Tech Lead"]
    }
  ],

  // Categorias para o filtro
  filters: ["Todos", "Mobile", "Fullstack", "Pessoais", "Open source"],

  projects: [
    {
      id: "poketibia",
      name: "PokeTibia / PokeBrabo",
      tagline: "MMORPG de Pokémon estilo OTPokemon — servidor e cliente do zero.",
      tags: ["Pessoais"],
      stack: ["C++17", "Lua", "LuaJIT", "C++20", "macOS arm64"],
      year: "2025–",
      accent: "#f4b942",
      highlight: true,
      summary:
        "MMORPG completo no estilo OTPokemon: servidor TFS 1.x (C++17 + Lua) e cliente OTClient Redemption (C++20 + LuaJIT), protocolo 10.98, rodando nativo em macOS Apple Silicon.",
      bullets: [
        "Servidor (TheBraveServer) e cliente OTClient compilados nativamente para macOS arm64.",
        "935 espécies, golpes, combate, captura (pokébola), sistemas de água/Surf/Fly/Teleport, NPCs, lojas, quests, ginásios e clãs.",
        "Painel admin web (editor de mapa) e pipeline de importação de assets (dat/spr/otb, sprites, efeitos) via Python.",
        "Launcher com atualização automática, releases e build Windows via GitHub Actions.",
        "HUD e módulos de UI customizados no cliente (tema, game_pokemonhud)."
      ],
      role: "Autor / arquiteto (projeto pessoal)",
      links: []
    },
    {
      id: "aiffice",
      name: "the AIffice",
      tagline: "Orquestração multiagente local-first com UI lúdica de escritório.",
      tags: ["Pessoais", "Fullstack"],
      stack: ["Rust", "React", "Vite", "WebSocket", "SQLite", "Godot 4"],
      year: "2025–",
      accent: "#7c5cff",
      highlight: true,
      summary:
        "Ambiente local-first para orquestrar múltiplos agentes de IA (Claude, Codex, etc.) como 'funcionários' de um escritório. Core event-driven em Rust; cliente web React e trilha de 'modo jogo' em Godot 4.",
      bullets: [
        "Core em Rust headless-first: event bus, event log em SQLite/WAL com append idempotente (replay seguro após crash).",
        "API HTTP + WebSocket /v1 (loopback + token + CORS, single-writer) que transmite eventos ao vivo para os clientes.",
        "Runner PTY real (portable-pty) executando comandos de shell com streaming ao vivo, resize e cancelamento.",
        "Fluxo ponta a ponta: gerente planeja → aprovação → agendador por dependências → tarefas isoladas em git worktree → diff → merge real → memória automática por projeto.",
        "Agentes rodam isolados da config pessoal; uso/custo medidos por agente e por run."
      ],
      role: "Autor / arquiteto (projeto pessoal, orquestrando sessões paralelas)",
      links: []
    },
    {
      id: "getronics",
      name: "Getronics — Apps do agro + Salesforce",
      tagline: "Apps React Native offline-first integrados ao Salesforce.",
      tags: ["Mobile"],
      stack: ["React Native", "Salesforce", "SmartStore", "SQLite", "Firebase"],
      year: "2025–atual",
      accent: "#38c172",
      summary:
        "Apps React Native para o setor agrícola integrados ao Salesforce, com arquitetura offline-first e sincronização segura, publicados e mantidos na Google Play e App Store.",
      bullets: [
        "Arquitetura Offline First com SQLite, SmartStore, Redux Persist e Firebase.",
        "Decisões técnicas sobre estrutura do app e manutenção futura; decisões de design e priorização.",
        "Publicação e atualizações contínuas nas lojas.",
        "Boas práticas, documentação e comunicação próxima ao time de produto."
      ],
      role: "Desenvolvedor Mobile (remoto)",
      links: []
    },
    {
      id: "veloo",
      name: "Veloo — Rotas para entregadores",
      tagline: "Otimização de rotas e geolocalização para última milha.",
      tags: ["Mobile"],
      stack: ["React Native", "Google Maps SDK", "Mapbox", "Geolocation", "Geofencing"],
      year: "Sambatech",
      accent: "#2bb3c0",
      summary:
        "App de mapeamento e otimização de rotas para entregadores, com geolocalização em tempo real e geofencing — parte do meu trabalho na Sambatech.",
      bullets: [
        "Integração com Google Maps SDK, Geolocation e Mapbox.",
        "Geofencing para eventos por área e cálculo/otimização de rotas.",
        "Foco em performance e estabilidade em uso contínuo em campo."
      ],
      role: "Desenvolvedor Fullstack (remoto)",
      links: []
    },
    {
      id: "gvbim",
      name: "GVBIM — Mapeamento 3D de ambientes",
      tagline: "App 3D integrado ao AutoCAD e engines gráficas, do zero.",
      tags: ["Mobile"],
      stack: ["React Native", "AutoCAD", "3D", "Engines gráficas"],
      year: "Sambatech",
      accent: "#e8795a",
      summary:
        "App de mapeamento 3D de ambientes integrado ao AutoCAD e a engines gráficas, construído do zero na Sambatech.",
      bullets: [
        "Arquitetura e escolha de stack definidas desde o início do projeto.",
        "Integração com fluxo de AutoCAD e renderização 3D.",
        "Foco em performance e escalabilidade."
      ],
      role: "Desenvolvedor Fullstack (remoto)",
      links: []
    },
    {
      id: "leve",
      name: "Leve Educação — Cursos mobile offline",
      tagline: "Plataforma de cursos completa, offline-first.",
      tags: ["Mobile"],
      stack: ["React Native", "SQLite", "Redux Persist", "Firebase", "Streaming"],
      year: "Sambatech",
      accent: "#5a8def",
      summary:
        "Plataforma mobile de cursos completa com arquitetura Offline First e integração com vídeo/streaming.",
      bullets: [
        "Conteúdo disponível offline com SQLite, Redux Persist e Firebase.",
        "Integração com streaming de vídeo para as aulas.",
        "Experiência fluida mesmo em conectividade instável."
      ],
      role: "Desenvolvedor Fullstack (remoto)",
      links: []
    },
    {
      id: "approva",
      name: "Approva Fácil — Setor imobiliário",
      tagline: "Reconstrução dos apps core em RN + Node.js.",
      tags: ["Fullstack", "Mobile"],
      stack: ["React Native", "Node.js", "Firebase", "AppCenter", "Bitbucket"],
      year: "2023–2024",
      accent: "#c77dff",
      summary:
        "Reconstrução dos apps core em React Native + Node.js, com nova arquitetura baseada em design patterns, foco em modularidade e performance.",
      bullets: [
        "Nova arquitetura, correção de bugs críticos e refatoração de legado.",
        "Treinamento de novos desenvolvedores.",
        "Firebase, AppCenter, Bitbucket, Jira e CI."
      ],
      role: "Desenvolvedor Fullstack (remoto)",
      links: []
    },
    {
      id: "dz7",
      name: "Dz7 — Chatbot + gestão",
      tagline: "Primeiro dev da empresa: chatbot que cortou ~60% dos tickets.",
      tags: ["Fullstack"],
      stack: ["React", "Node.js", "PostgreSQL", "Docker", "Linux"],
      year: "2020–2021",
      accent: "#38c172",
      summary:
        "Como primeiro desenvolvedor da empresa, levantei requisitos direto com os setores e entreguei do chatbot ao sistema de gestão, cuidando também de servidores e deploy.",
      bullets: [
        "Chatbot integrado ao CRM que reduziu ~60% dos tickets manuais.",
        "App de controle de veículos (fotos/avarias) e app de rankings com gamificação.",
        "Sistema de gestão em React + Node.js + PostgreSQL, deploy com Docker em Linux."
      ],
      role: "Desenvolvedor Fullstack (presencial)",
      links: []
    },
    {
      id: "nativecn",
      name: "Nativecn-ui — Open source",
      tagline: "Componente Select customizável para React Native.",
      tags: ["Open source", "Mobile"],
      stack: ["React Native", "TypeScript", "Styled Components"],
      year: "2024",
      accent: "#2bb3c0",
      summary:
        "Contribuição open source: componente Select customizável para a biblioteca Nativecn-ui, com conversão de opções e suporte a formulários controlados.",
      bullets: [
        "Componente Select com conversão de opções.",
        "Refatoração e documentação para formulários controlados.",
        "Revisão de PRs da comunidade."
      ],
      role: "Contribuidor open source",
      links: [{ label: "Nativecn-ui", url: "https://github.com/Dheph" }]
    }
  ],

  experience: [
    {
      company: "Getronics",
      role: "Desenvolvedor Mobile",
      period: "ago/2025 – atual",
      desc: "Apps React Native integrados ao Salesforce, offline-first, publicados nas lojas. Decisões técnicas e de design."
    },
    {
      company: "Nyx Consultoria em Software",
      role: "Dev Mobile & Fullstack (Tech Lead, freelancer)",
      period: "mai/2025 – atual",
      desc: "Liderança técnica em projetos React, React Native e Node.js; infraestrutura, CI/CD e arquitetura de novas soluções."
    },
    {
      company: "BWG — Rede Social Corporativa",
      role: "Desenvolvedor Mobile",
      period: "mai/2024 – mai/2025",
      desc: "React Native com integração de APIs; módulos nativos em Swift e Java para push e deep linking. Disseminação de Scrum."
    },
    {
      company: "Approva Fácil — Imobiliário",
      role: "Desenvolvedor Fullstack",
      period: "jun/2023 – mai/2024",
      desc: "Reconstrução dos apps core em RN + Node.js, nova arquitetura, refatoração de legado e mentoria."
    },
    {
      company: "Acqio — Fintech",
      role: "Desenvolvedor Mobile (freelancer)",
      period: "ago/2023 – set/2023",
      desc: "i18n dos apps principais, modelagem hexagonal/modular e mentoria do time."
    },
    {
      company: "Sambatech — Audiovisual",
      role: "Desenvolvedor Fullstack",
      period: "abr/2021 – jun/2023",
      desc: "Apps em RN, Flutter, Kotlin e Java. Veloo (rotas/Maps), GVBIM (3D/AutoCAD), Ourofino (assistente multilíngue) e Leve Educação (offline-first)."
    },
    {
      company: "Dz7 Telecomunicações",
      role: "Desenvolvedor Fullstack",
      period: "mai/2020 – abr/2021",
      desc: "Primeiro dev da empresa: chatbot (~60% menos tickets), apps internos e sistema de gestão full-stack."
    }
  ]
};
