# Portfólio — Jeffersom Ribeiro

Site pessoal (portfólio) de desenvolvedor mobile & fullstack. Estático, sem build:
**HTML + CSS + JavaScript puro**, pronto para o GitHub Pages.

🔗 **Online:** https://dheph.github.io/portifolio/

## Estrutura

```
.
├── index.html        # página única com todas as seções
├── css/styles.css    # tema claro/escuro, layout responsivo
├── js/data.js        # ← conteúdo (stack, projetos, experiência) — edite aqui
├── js/main.js        # render, filtros, tema e navegação de case-study
├── assets/           # favicon e imagens
└── .nojekyll         # desativa o Jekyll no GitHub Pages
```

## Editar o conteúdo

Todo o conteúdo fica em [`js/data.js`](js/data.js): basta editar os arrays
`stack`, `projects` e `experience`. Cada projeto vira um card e um "case" com
navegação própria (`#/projeto/<id>`), setas ←/→ e Esc.

## Rodar localmente

Como é estático, qualquer servidor serve:

```bash
python3 -m http.server 8080
# abra http://localhost:8080
```

## Deploy (GitHub Pages)

1. `git push` para o branch `main`.
2. Em **Settings → Pages**, defina **Source: Deploy from a branch**,
   branch `main` / pasta `/ (root)`.
3. O workflow em `.github/workflows/deploy.yml` também publica automaticamente a cada push.

## Features

- Navegação limpa com scrollspy e menu mobile.
- Tema claro/escuro (persistido em `localStorage`).
- Projetos filtráveis + **case-study** com URL própria, navegação por teclado e deep-link.
- Totalmente responsivo e acessível (foco visível, `prefers-reduced-motion`, skip-link).
