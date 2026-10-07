# SCOPE.md — Design System Débora Delgado

Define o que o Claude Code **deve** e **não deve** produzir dentro desta pasta, e o
critério de "pronto". Leia junto com `CLAUDE.md` e `PROJECT.md`.

---

## Dentro do escopo (fazer aqui)

- **Tokens** (`design-tokens.css`): cor com variações e checagem de contraste,
  tipografia (escala/pesos/tracking), espaçamento, raio, sombra — nomeados
  **semanticamente** (`--cor-fundo`, `--cor-texto`, `--cor-acento`...), não por valor.
- **Componentes** em HTML/CSS puro: botões/CTA, card de oferta/lote, depoimento, FAQ,
  badge de escassez, seção hero (ver `PROJECT.md`).
- **Styleguide** (`styleguide.html`): página autocontida que renderiza paleta,
  tipografia e componentes a partir dos tokens.
- **SVGs reutilizáveis** dos elementos de marca (fingerprint, sólidos platônicos em
  linha fina) como ativos do sistema.
- **Documentação de uso** (`README.md`): como levar os tokens para o Wix.

## Fora do escopo (não fazer aqui)

- **A landing em si** -> vive em `04 - web design` (consome este sistema).
- **Os criativos de tráfego** -> vivem em `03 - tráfego pago` (referenciam este sistema).
- **Identidade/logo final** -> decisão da **Débora**; aqui só se usa o que ela aprovou
  (fingerprint dourada, paleta, geometria). Não redesenhar a marca.
- **Copy/oferta** -> fonte é `OFERTA-CANONICA.md` e a voz é `debora-voice`; o design
  system dá forma, não escreve nem fixa preços.
- **Qualquer dependência/build** (React, Tailwind, bundlers) no entregável final.

---

## Critérios de "pronto" (Definition of Done)

- [ ] Tokens **nomeados semanticamente** e cobrindo cor, tipografia, espaçamento.
- [ ] `styleguide.html` **renderiza** no navegador consumindo `design-tokens.css`.
- [ ] Todos os **componentes-alvo** aparecem no styleguide com estados (hover/foco).
- [ ] **Contraste WCAG AA** (texto >= 4.5:1) validado — petróleo sobre areia, CTA, etc.
- [ ] **Compatível com Wix**: HTML/CSS puro, sem build, tokens copiáveis para embed.
- [ ] Fiel ao `BRAND-BRIEF.md` (paleta, tom, do/don't) — nada infantil/genérico/AI-slop.
- [ ] `README.md` explica como reutilizar no Wix, em `04` e em `03`.
