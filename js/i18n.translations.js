/* Traduções PT-BR e ES (geradas; espelham a estrutura de en em js/i18n.js). */
window.I18N.pt = {
  ui: {
    nav: { work: "Trabalhos", about: "Sobre", services: "Serviços", experience: "Experiência", contact: "Contato" },
    hireMe: "Me contrate", viewWork: "Ver trabalhos", viewCase: "Abrir estudo de caso",
    close: "Fechar", prev: "Anterior", next: "Próximo",
    copy: "Copiar", copied: "Copiado!",
    play: "Google Play", github: "GitHub", site: "Visitar",
    openToWork: "Disponível para trabalhar", langLabel: "Idioma",
    scrollHint: "Rolar",
    filters: { all: "Todos", personal: "Pessoal", mobile: "Mobile", fullstack: "Fullstack", freelance: "Freelance", opensource: "Open source" },
    sections: {
      about:      { num: "01", title: "Sobre", em: "mim" },
      services:   { num: "02", title: "Como transformo ideias em", em: "realidade" },
      work:       { num: "03", title: "Trabalhos", em: "selecionados" },
      experience: { num: "04", title: "Por onde", em: "passei" },
      contact:    { num: "05", title: "Tem uma ideia? Vamos", em: "conversar" }
    }
  },

  hero: {
    eyebrow: "// MOBILE · DESENVOLVEDOR FULLSTACK",
    name: "Jeffersom Ribeiro",
    taglineA: "Eu construo apps mobile que",
    taglineEm: "simplesmente funcionam",
    taglineB: "— online ou offline.",
    lead: "Especialista em React Native — arquiteturas offline-first, módulos nativos em Swift/Java e lançamentos na App Store / Google Play — com Node.js no back end e liderança técnica na prática.",
    stats: [
      { v: "Desde 2018", k: "construindo apps" },
      { v: "15+", k: "projetos entregues" },
      { v: "Nativo", k: "iOS & Android" }
    ]
  },

  about: {
    p: [
      "Sou um desenvolvedor mobile & fullstack que entrega software desde 2018 — comecei com projetos pequenos e cresci até funções sênior e de tech lead. Minha especialidade é React Native: apps que continuam funcionando offline e sincronizam com segurança assim que voltam a ficar online.",
      "Quando a plataforma exige, desço ao nativo — módulos em Swift e Java/Kotlin para push, deep linking, mapas e até hardware de veículos e maquininhas de cartão. No back end trabalho com Node.js, CI/CD e arquiteturas limpas (Hexagonal, MVVM).",
      "Já liderei times, reconstruí apps legados do zero e entreguei para clientes de fintech, logística, imobiliário e automotivo."
    ],
    factLabels: { focus: "Foco", native: "Nativo", languages: "Idiomas", since: "Programando desde", openTo: "Disponível para" },
    facts: { focus: "React Native · Node.js", native: "Swift · Kotlin · Java", languages: "EN · PT · ES", since: "2018", openTo: "CLT/PJ & freelance" }
  },

  services: {
    mobile:   { title: "Desenvolvimento de Apps Mobile", desc: "Apps React Native de ponta a ponta — da arquitetura ao lançamento na App Store & Google Play.", tags: ["React Native", "Offline-first", "Publicação nas lojas"] },
    native:   { title: "Módulos Nativos & Integrações", desc: "Módulos em Swift e Java/Kotlin quando a plataforma exige: push, deep linking, mapas, maquininhas de cartão e sistemas veiculares.", tags: ["Swift", "Kotlin / Java", "Push & Deep linking"] },
    fullstack:{ title: "Fullstack / Backend", desc: "APIs em Node.js com PostgreSQL, Docker e CI/CD por trás do seu app.", tags: ["Node.js", "PostgreSQL", "CI/CD"] },
    rebuild:  { title: "Reconstrução de Apps & Liderança Técnica", desc: "Resgato apps legados, redefino a arquitetura e lidero times com Scrum e mentoria.", tags: ["Resgate de legado", "Arquitetura", "Mentoria"] },
    offline:  { title: "Arquitetura Offline-first", desc: "Apps que continuam funcionando sem conexão e sincronizam com segurança: SQLite, SmartStore, Redux Persist, Firebase.", tags: ["SQLite", "Motores de sincronização", "Resolução de conflitos"] }
  },

  shots: {
    office: "Escritório", terminal: "Terminal ao vivo", projects: "Projetos",
    overworld: "Mundo", moves: "Golpes", chat: "Chat de NPC",
    picker: "Categorias", schedule: "Agendamento", report: "Relatório"
  },

  projects: {
    "aiffice": {
      name: "the AIffice",
      tagline: "Orquestração local-first de múltiplos agentes com uma UI de escritório divertida.",
      role: "Criador & arquiteto · pessoal",
      summary: "Um workspace local-first que roda vários agentes de IA como funcionários em um escritório virtual. Núcleo orientado a eventos em Rust, um cliente web React ao vivo e uma trilha de “modo jogo” em Godot.",
      bullets: [
        "Núcleo em Rust: barramento de eventos e um log de eventos SQLite/WAL à prova de falhas com append idempotente & replay.",
        "API HTTP + WebSocket transmitindo cada evento para os clientes em tempo real (writer único, protegida por token).",
        "Executor PTY real (portable-pty) rodando shell com streaming ao vivo, resize e cancelamento.",
        "Fluxo de ponta a ponta: gerente planeja → aprovação → agendador de dependências → tarefas em git worktrees isolados → diff → merge real → memória por projeto."
      ]
    },
    "pokebrabo": {
      name: "PokeTibia / PokeBrabo",
      tagline: "Um MMORPG completo de Pokémon — servidor e cliente, construído do zero.",
      role: "Autor & arquiteto · pessoal",
      summary: "Um MMORPG no estilo OTPokemon: um servidor TFS 1.x (C++17 + Lua) e um cliente OTClient Redemption (C++20 + LuaJIT), protocolo 10.98, rodando nativamente em Apple Silicon.",
      bullets: [
        "935 espécies, golpes, combate, captura, sistemas de água / Surf / Fly / Teleport, NPCs, lojas, quests, ginásios e clãs.",
        "Servidor e cliente compilados nativamente para macOS arm64.",
        "Painel admin web (editor de mapas) e um pipeline de importação de assets em Python (dat/spr/otb, sprites, efeitos).",
        "Launcher com atualização automática, releases e builds para Windows via GitHub Actions."
      ]
    },
    "macclean": {
      name: "mac-clean",
      tagline: "Uma CLI interativa de limpeza do macOS com execuções agendadas e relatórios.",
      role: "Autor · pessoal · open source",
      summary: "Uma ferramenta de terminal que recupera espaço em disco no macOS: escolha categorias, rode com segurança e receba um relatório de antes/depois — com limpezas semanais agendadas opcionais.",
      bullets: [
        "16 categorias de limpeza (caches, logs, DerivedData do Xcode, Docker, snapshots do Time Machine…) com confirmação em um clique.",
        "Limpeza agendada (ex.: toda segunda-feira) com alteração / remoção fácil.",
        "Relatório pós-execução com deltas de disco e memória e um detalhamento por categoria."
      ]
    },
    "acqio-lojistas": {
      name: "Acqio Lojistas",
      tagline: "Acompanhamento de vendas em tempo real para lojistas de maquininha (POS).",
      role: "Desenvolvedor Mobile · freelance",
      summary: "Um app para lojistas acompanharem as vendas na maquininha em tempo real: saldos, agenda de recebíveis, simulação de venda, taxas, solicitações de serviço e comprovantes compartilháveis.",
      bullets: [
        "Construído com React Native, como parte de uma reconstrução total migrando os apps de um time terceirizado anterior.",
        "Dashboards de recebíveis e vendas em tempo real ligados ao terminal POS."
      ]
    },
    "acqio-franquias": {
      name: "Acqio Franquias",
      tagline: "App de gestão de franquias para a rede fintech Acqio.",
      role: "Desenvolvedor Mobile · freelance",
      summary: "Um app de gestão de franquias para a rede Acqio, reconstruído em React Native junto com o app de lojistas.",
      bullets: [
        "React Native com arquitetura hexagonal e i18n.",
        "Entregue como parte da reconstrução total dos apps da Acqio."
      ]
    },
    "bwg": {
      name: "BWG App",
      tagline: "App fintech com analytics em tempo real e transações seguras.",
      role: "Desenvolvedor Mobile",
      summary: "Um app financeiro com recursos avançados, analytics em tempo real e transações seguras, publicado nas lojas.",
      bullets: [
        "React Native com módulos nativos em Swift & Java para notificações push e deep linking.",
        "Conduziu a adoção de Scrum e decisões técnicas e de design importantes."
      ]
    },
    "approva-corretores": {
      name: "Approva Fácil — Corretores",
      tagline: "Análise de crédito mobile para corretores de imóveis.",
      role: "Desenvolvedor Fullstack",
      summary: "Um app para corretores de imóveis acompanharem toda a jornada do cliente, rodarem análises de crédito em minutos e acessarem um marketplace com mais de 40.000 unidades.",
      bullets: [
        "App principal reconstruído em React Native + Node.js com uma nova arquitetura baseada em design patterns.",
        "Refatoração de legado, correção de bugs críticos e mentoria de novos desenvolvedores."
      ]
    },
    "approva-credito": {
      name: "Approva Fácil — Crédito",
      tagline: "Análise de crédito mobile rápida, integrada ao marketplace.",
      role: "Desenvolvedor Fullstack",
      summary: "O app Approva Cred: acompanhe a jornada do cliente e rode análises de crédito em minutos, integrado a um marketplace com mais de 40.000 unidades.",
      bullets: [
        "React Native + Node.js, compartilhando arquitetura com o app de corretores."
      ]
    },
    "minha-dz7": {
      name: "Minha Dz7",
      tagline: "App nativo de gerenciamento de conexão de internet.",
      role: "Desenvolvedor Fullstack",
      summary: "Um app nativo de gerenciamento de conexão para os clientes da Dz7 Telecom.",
      bullets: [
        "Construído com React Native e integrado aos sistemas internos da empresa."
      ]
    },
    "teomidia": {
      name: "Teomídia",
      tagline: "Streaming cristão: filmes, séries, cursos e conteúdo infantil.",
      role: "Desenvolvedor Mobile",
      summary: "Um app de streaming por assinatura com filmes, séries, documentários, palestras, cursos e desenhos infantis, para assistir a qualquer hora e em qualquer lugar.",
      bullets: [
        "React Native com integração de vídeo / streaming."
      ]
    },
    "ima-halu": {
      name: "IMA Halu Gamashi",
      tagline: "App de escola de mistérios com downloads de vídeo offline e lives.",
      role: "Desenvolvedor Mobile",
      summary: "O app do Instituto de Mistérios da Ascensão: acesse o conteúdo adquirido, participe de lives e baixe vídeos para assistir offline.",
      bullets: [
        "React Native com downloads offline e transmissão ao vivo."
      ]
    },
    "volkswagen": {
      name: "Volkswagen — Apps de caminhão",
      tagline: "Sistema nativo de travamento de caminhão e app de rotas para a Volkswagen.",
      role: "Desenvolvedor Mobile (nativo) · contrato",
      summary: "Apps nativos para caminhões da Volkswagen: um módulo do sistema de travamento do caminhão e um app de rotas — Java puro no Android e Swift no iOS.",
      bullets: [
        "Módulos do sistema de travamento do caminhão integrados ao hardware do veículo.",
        "App de rotas nativo: Java puro (Android) e Swift (iOS)."
      ]
    },
    "stone": {
      name: "Stone — Sistema POS",
      tagline: "Ajustes e manutenção no sistema de cartão em terminal da Stone.",
      role: "Desenvolvedor Mobile · freelance",
      summary: "Trabalho freelance no sistema interno da maquininha (POS) da Stone: ajustes pontuais e manutenção do dia a dia.",
      bullets: [
        "Correções e manutenção contínua no sistema em terminal (POS)."
      ]
    },
    "veloo": {
      name: "Veloo",
      tagline: "Otimização de rotas e geolocalização para entregadores de última milha.",
      role: "Desenvolvedor Fullstack · Sambatech",
      summary: "Um app para entregadores com mapeamento e otimização de rotas, geolocalização em tempo real e geofencing.",
      bullets: [
        "Google Maps SDK, Geolocation, Mapbox e geofencing."
      ]
    },
    "nativecn": {
      name: "Nativecn-ui",
      tagline: "Componente Select open-source e customizável para React Native.",
      role: "Contribuidor open-source",
      summary: "Uma contribuição para a biblioteca Nativecn-ui: um componente Select customizável com conversão de opções e suporte a formulários controlados.",
      bullets: [
        "Componente Select com conversão de opções e documentação para formulários controlados.",
        "Revisões de pull requests da comunidade."
      ]
    }
  },

  experience: {
    "getronics": { role: "Desenvolvedor Mobile", company: "Getronics — Agro", desc: "Apps React Native integrados ao Salesforce, offline-first com sincronização segura (SQLite, SmartStore, Redux Persist, Firebase); publicados e mantidos nas lojas." },
    "nyx":       { role: "Dev Mobile & Fullstack (Tech Lead, freelancer)", company: "Nyx — Consultoria em Software", desc: "Liderança técnica em projetos React, React Native e Node.js; infraestrutura, CI/CD e arquitetura de novas soluções, alinhadas direto com os stakeholders." },
    "bwg":       { role: "Desenvolvedor Mobile", company: "BWG — Rede Social Corporativa", desc: "React Native com módulos nativos em Swift & Java para push e deep linking; lançamentos nas lojas; conduziu a adoção de Scrum." },
    "vw":        { role: "Desenvolvedor Mobile (nativo)", company: "Volkswagen — Apps de caminhão", desc: "Módulos do sistema de travamento do caminhão e um app de rotas nativo — Java puro no Android, Swift no iOS." },
    "approva":   { role: "Desenvolvedor Fullstack", company: "Approva Fácil — Imobiliário", desc: "Reconstruí os apps principais em React Native + Node.js; nova arquitetura, refatoração de legado e mentoria." },
    "accio":     { role: "Desenvolvedor Mobile (freelance)", company: "Acqio — Fintech", desc: "Apps de maquininha (POS) e de franqueados — liderando a reconstrução total enquanto importava o legado do time terceirizado anterior; i18n e arquitetura hexagonal." },
    "stone":     { role: "Desenvolvedor Mobile (freelance)", company: "Stone — Fintech", desc: "Ajustes e manutenção do dia a dia no sistema de cartão em terminal (POS)." },
    "sambatech": { role: "Desenvolvedor Fullstack", company: "Sambatech — Audiovisual e fábrica de software", desc: "Apps em React Native, Flutter, Kotlin e Java: Veloo (rotas de entregadores / Maps), GVBIM (3D / AutoCAD), Leve (cursos offline-first)." },
    "dz7":       { role: "Desenvolvedor Fullstack", company: "Dz7 Telecom", desc: "Primeiro desenvolvedor da empresa: um chatbot de CRM (~60% menos tickets manuais), apps internos e um sistema de gestão full-stack." }
  },

  contact: {
    lead: "Disponível para vagas full-time e projetos freelance em mobile & fullstack. Me conte o que você está construindo.",
    emailLabel: "E-mail", linkedinLabel: "LinkedIn", githubLabel: "GitHub"
  },

  footer: { note: "" }
};

window.I18N.es = {
  ui: {
    nav: { work: "Trabajos", about: "Sobre mí", services: "Servicios", experience: "Experiencia", contact: "Contacto" },
    hireMe: "Contrátame", viewWork: "Ver trabajos", viewCase: "Abrir caso de estudio",
    close: "Cerrar", prev: "Anterior", next: "Siguiente",
    copy: "Copiar", copied: "¡Copiado!",
    play: "Google Play", github: "GitHub", site: "Visitar",
    openToWork: "Disponible para trabajar", langLabel: "Idioma",
    scrollHint: "Desplazar",
    filters: { all: "Todos", personal: "Personal", mobile: "Mobile", fullstack: "Fullstack", freelance: "Freelance", opensource: "Open source" },
    sections: {
      about:      { num: "01", title: "Sobre", em: "mí" },
      services:   { num: "02", title: "Cómo convierto ideas en", em: "realidad" },
      work:       { num: "03", title: "Trabajos", em: "seleccionados" },
      experience: { num: "04", title: "Dónde", em: "trabajé" },
      contact:    { num: "05", title: "¿Tienes una idea? Vamos a", em: "conversar" }
    }
  },

  hero: {
    eyebrow: "// MOBILE · DESARROLLADOR FULLSTACK",
    name: "Jeffersom Ribeiro",
    taglineA: "Construyo apps móviles que",
    taglineEm: "simplemente funcionan",
    taglineB: "— online o sin conexión.",
    lead: "Especialista en React Native — arquitecturas offline-first, módulos nativos en Swift/Java y publicaciones en App Store / Google Play — con Node.js en el back end y liderazgo técnico en la práctica.",
    stats: [
      { v: "Desde 2018", k: "construyendo apps" },
      { v: "15+", k: "proyectos entregados" },
      { v: "Nativo", k: "iOS & Android" }
    ]
  },

  about: {
    p: [
      "Soy un desarrollador mobile & fullstack que entrega software desde 2018 — empecé con proyectos pequeños y crecí hasta roles sénior y de tech lead. Me especializo en React Native: apps que siguen funcionando sin conexión y sincronizan de forma segura en cuanto vuelven a estar online.",
      "Cuando la plataforma lo exige, bajo a nativo — módulos en Swift y Java/Kotlin para push, deep linking, mapas e incluso hardware de vehículos y terminales de pago. En el back end trabajo con Node.js, CI/CD y arquitecturas limpias (Hexagonal, MVVM).",
      "He liderado equipos, reconstruido apps heredadas desde cero y entregado para clientes de fintech, logística, inmobiliaria y automotriz."
    ],
    factLabels: { focus: "Enfoque", native: "Nativo", languages: "Idiomas", since: "Programando desde", openTo: "Disponible para" },
    facts: { focus: "React Native · Node.js", native: "Swift · Kotlin · Java", languages: "EN · PT · ES", since: "2018", openTo: "Tiempo completo & freelance" }
  },

  services: {
    mobile:   { title: "Desarrollo de Apps Móviles", desc: "Apps React Native de principio a fin — desde la arquitectura hasta la publicación en App Store & Google Play.", tags: ["React Native", "Offline-first", "Publicación en tiendas"] },
    native:   { title: "Módulos Nativos & Integraciones", desc: "Módulos en Swift y Java/Kotlin cuando la plataforma lo exige: push, deep linking, mapas, terminales de pago y sistemas vehiculares.", tags: ["Swift", "Kotlin / Java", "Push & Deep linking"] },
    fullstack:{ title: "Fullstack / Backend", desc: "APIs en Node.js con PostgreSQL, Docker y CI/CD detrás de tu app.", tags: ["Node.js", "PostgreSQL", "CI/CD"] },
    rebuild:  { title: "Reconstrucción de Apps & Liderazgo Técnico", desc: "Rescato apps heredadas, redefino la arquitectura y lidero equipos con Scrum y mentoría.", tags: ["Rescate de legado", "Arquitectura", "Mentoría"] },
    offline:  { title: "Arquitectura Offline-first", desc: "Apps que siguen funcionando sin conexión y sincronizan de forma segura: SQLite, SmartStore, Redux Persist, Firebase.", tags: ["SQLite", "Motores de sincronización", "Manejo de conflictos"] }
  },

  shots: {
    office: "Oficina", terminal: "Terminal en vivo", projects: "Proyectos",
    overworld: "Mundo", moves: "Movimientos", chat: "Chat de NPC",
    picker: "Categorías", schedule: "Agenda", report: "Reporte"
  },

  projects: {
    "aiffice": {
      name: "the AIffice",
      tagline: "Orquestación local-first de múltiples agentes con una UI de oficina divertida.",
      role: "Creador & arquitecto · personal",
      summary: "Un workspace local-first que ejecuta varios agentes de IA como empleados en una oficina virtual. Núcleo orientado a eventos en Rust, un cliente web React en vivo y una vía de “modo juego” en Godot.",
      bullets: [
        "Núcleo en Rust: bus de eventos y un log de eventos SQLite/WAL a prueba de fallos con append idempotente & replay.",
        "API HTTP + WebSocket transmitiendo cada evento a los clientes en tiempo real (writer único, protegida por token).",
        "Ejecutor PTY real (portable-pty) corriendo shell con streaming en vivo, resize y cancelación.",
        "Flujo de principio a fin: el gerente planifica → aprobación → planificador de dependencias → tareas en git worktrees aislados → diff → merge real → memoria por proyecto."
      ]
    },
    "pokebrabo": {
      name: "PokeTibia / PokeBrabo",
      tagline: "Un MMORPG completo de Pokémon — servidor y cliente, construido desde cero.",
      role: "Autor & arquitecto · personal",
      summary: "Un MMORPG al estilo OTPokemon: un servidor TFS 1.x (C++17 + Lua) y un cliente OTClient Redemption (C++20 + LuaJIT), protocolo 10.98, corriendo nativamente en Apple Silicon.",
      bullets: [
        "935 especies, movimientos, combate, captura, sistemas de agua / Surf / Fly / Teleport, NPCs, tiendas, quests, gimnasios y clanes.",
        "Servidor y cliente compilados nativamente para macOS arm64.",
        "Panel de administración web (editor de mapas) y un pipeline de importación de assets en Python (dat/spr/otb, sprites, efectos).",
        "Launcher con actualización automática, releases y builds para Windows vía GitHub Actions."
      ]
    },
    "macclean": {
      name: "mac-clean",
      tagline: "Una CLI interactiva de limpieza de macOS con ejecuciones programadas y reportes.",
      role: "Autor · personal · open source",
      summary: "Una herramienta de terminal que recupera espacio en disco en macOS: elige categorías, ejecuta de forma segura y obtén un reporte de antes/después — con limpiezas semanales programadas opcionales.",
      bullets: [
        "16 categorías de limpieza (cachés, logs, DerivedData de Xcode, Docker, snapshots de Time Machine…) con confirmación en un clic.",
        "Limpieza programada (ej.: cada lunes) con cambio / eliminación fácil.",
        "Reporte posterior a la ejecución con deltas de disco y memoria y un desglose por categoría."
      ]
    },
    "acqio-lojistas": {
      name: "Acqio Lojistas",
      tagline: "Seguimiento de ventas en tiempo real para comercios con terminal de pago (POS).",
      role: "Desarrollador Mobile · freelance",
      summary: "Una app para que los comercios sigan las ventas del terminal de pago en tiempo real: saldos, agenda de cobros, simulación de venta, tarifas, solicitudes de servicio y comprobantes compartibles.",
      bullets: [
        "Construida con React Native, como parte de una reconstrucción total que migró las apps de un equipo tercerizado anterior.",
        "Dashboards de cobros y ventas en tiempo real vinculados al terminal POS."
      ]
    },
    "acqio-franquias": {
      name: "Acqio Franquias",
      tagline: "App de gestión de franquicias para la red fintech Acqio.",
      role: "Desarrollador Mobile · freelance",
      summary: "Una app de gestión de franquicias para la red Acqio, reconstruida en React Native junto con la app de comercios.",
      bullets: [
        "React Native con arquitectura hexagonal e i18n.",
        "Entregada como parte de la reconstrucción total de las apps de Acqio."
      ]
    },
    "bwg": {
      name: "BWG App",
      tagline: "App fintech con analítica en tiempo real y transacciones seguras.",
      role: "Desarrollador Mobile",
      summary: "Una app financiera con funciones avanzadas, analítica en tiempo real y transacciones seguras, publicada en las tiendas.",
      bullets: [
        "React Native con módulos nativos en Swift & Java para notificaciones push y deep linking.",
        "Impulsó la adopción de Scrum y decisiones técnicas y de diseño clave."
      ]
    },
    "approva-corretores": {
      name: "Approva Fácil — Corredores",
      tagline: "Análisis de crédito móvil para corredores inmobiliarios.",
      role: "Desarrollador Fullstack",
      summary: "Una app para que los corredores inmobiliarios sigan toda la jornada del cliente, ejecuten análisis de crédito en minutos y accedan a un marketplace con más de 40.000 unidades.",
      bullets: [
        "App principal reconstruida en React Native + Node.js con una nueva arquitectura basada en design patterns.",
        "Refactorización de legado, corrección de bugs críticos y mentoría de nuevos desarrolladores."
      ]
    },
    "approva-credito": {
      name: "Approva Fácil — Crédito",
      tagline: "Análisis de crédito móvil rápido, integrado con el marketplace.",
      role: "Desarrollador Fullstack",
      summary: "La app Approva Cred: sigue la jornada del cliente y ejecuta análisis de crédito en minutos, integrada con un marketplace de más de 40.000 unidades.",
      bullets: [
        "React Native + Node.js, compartiendo arquitectura con la app de corredores."
      ]
    },
    "minha-dz7": {
      name: "Minha Dz7",
      tagline: "App nativa de gestión de conexión a internet.",
      role: "Desarrollador Fullstack",
      summary: "Una app nativa de gestión de conexión para los clientes de Dz7 Telecom.",
      bullets: [
        "Construida con React Native e integrada con los sistemas internos de la empresa."
      ]
    },
    "teomidia": {
      name: "Teomídia",
      tagline: "Streaming cristiano: películas, series, cursos y contenido infantil.",
      role: "Desarrollador Mobile",
      summary: "Una app de streaming por suscripción con películas, series, documentales, charlas, cursos y dibujos infantiles, para ver en cualquier momento y lugar.",
      bullets: [
        "React Native con integración de video / streaming."
      ]
    },
    "ima-halu": {
      name: "IMA Halu Gamashi",
      tagline: "App de escuela de misterios con descargas de video offline y lives.",
      role: "Desarrollador Mobile",
      summary: "La app del Instituto de Misterios de la Ascensión: accede al contenido adquirido, participa en lives y descarga videos para ver sin conexión.",
      bullets: [
        "React Native con descargas offline y transmisión en vivo."
      ]
    },
    "volkswagen": {
      name: "Volkswagen — Apps de camión",
      tagline: "Sistema nativo de bloqueo de camión y app de rutas para Volkswagen.",
      role: "Desarrollador Mobile (nativo) · contrato",
      summary: "Apps nativas para camiones de Volkswagen: un módulo del sistema de bloqueo del camión y una app de rutas — Java puro en Android y Swift en iOS.",
      bullets: [
        "Módulos del sistema de bloqueo del camión integrados con el hardware del vehículo.",
        "App de rutas nativa: Java puro (Android) y Swift (iOS)."
      ]
    },
    "stone": {
      name: "Stone — Sistema POS",
      tagline: "Ajustes y mantenimiento en el sistema de tarjetas en terminal de Stone.",
      role: "Desarrollador Mobile · freelance",
      summary: "Trabajo freelance en el sistema interno del terminal de pago (POS) de Stone: ajustes puntuales y mantenimiento del día a día.",
      bullets: [
        "Correcciones y mantenimiento continuo en el sistema en terminal (POS)."
      ]
    },
    "veloo": {
      name: "Veloo",
      tagline: "Optimización de rutas y geolocalización para repartidores de última milla.",
      role: "Desarrollador Fullstack · Sambatech",
      summary: "Una app para repartidores con mapeo y optimización de rutas, geolocalización en tiempo real y geofencing.",
      bullets: [
        "Google Maps SDK, Geolocation, Mapbox y geofencing."
      ]
    },
    "nativecn": {
      name: "Nativecn-ui",
      tagline: "Componente Select open-source y personalizable para React Native.",
      role: "Contribuidor open-source",
      summary: "Una contribución a la biblioteca Nativecn-ui: un componente Select personalizable con conversión de opciones y soporte para formularios controlados.",
      bullets: [
        "Componente Select con conversión de opciones y documentación para formularios controlados.",
        "Revisiones de pull requests de la comunidad."
      ]
    }
  },

  experience: {
    "getronics": { role: "Desarrollador Mobile", company: "Getronics — Agro", desc: "Apps React Native integradas con Salesforce, offline-first con sincronización segura (SQLite, SmartStore, Redux Persist, Firebase); publicadas y mantenidas en las tiendas." },
    "nyx":       { role: "Dev Mobile & Fullstack (Tech Lead, freelance)", company: "Nyx — Consultoría de Software", desc: "Liderazgo técnico en proyectos React, React Native y Node.js; infraestructura, CI/CD y arquitectura de nuevas soluciones, alineadas directamente con los stakeholders." },
    "bwg":       { role: "Desarrollador Mobile", company: "BWG — Red Social Corporativa", desc: "React Native con módulos nativos en Swift & Java para push y deep linking; publicaciones en tiendas; impulsó la adopción de Scrum." },
    "vw":        { role: "Desarrollador Mobile (nativo)", company: "Volkswagen — Apps de camión", desc: "Módulos del sistema de bloqueo del camión y una app de rutas nativa — Java puro en Android, Swift en iOS." },
    "approva":   { role: "Desarrollador Fullstack", company: "Approva Fácil — Inmobiliario", desc: "Reconstruí las apps principales en React Native + Node.js; nueva arquitectura, refactorización de legado y mentoría." },
    "accio":     { role: "Desarrollador Mobile (freelance)", company: "Acqio — Fintech", desc: "Apps de terminal de pago (POS) y de franquiciados — liderando la reconstrucción total mientras importaba el legado del equipo tercerizado anterior; i18n y arquitectura hexagonal." },
    "stone":     { role: "Desarrollador Mobile (freelance)", company: "Stone — Fintech", desc: "Ajustes y mantenimiento del día a día en el sistema de tarjetas en terminal (POS)." },
    "sambatech": { role: "Desarrollador Fullstack", company: "Sambatech — Audiovisual y fábrica de software", desc: "Apps en React Native, Flutter, Kotlin y Java: Veloo (rutas de repartidores / Maps), GVBIM (3D / AutoCAD), Leve (cursos offline-first)." },
    "dz7":       { role: "Desarrollador Fullstack", company: "Dz7 Telecom", desc: "Primer desarrollador de la empresa: un chatbot de CRM (~60% menos tickets manuales), apps internas y un sistema de gestión full-stack." }
  },

  contact: {
    lead: "Disponible para roles de tiempo completo y proyectos freelance en mobile & fullstack. Cuéntame qué estás construyendo.",
    emailLabel: "Correo", linkedinLabel: "LinkedIn", githubLabel: "GitHub"
  },

  footer: { note: "" }
};
