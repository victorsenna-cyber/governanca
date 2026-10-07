# PROJECT.md — Página de Vendas "Carreira Alinhada"

> **O que é:** briefing de construção da **landing + checkout** do Workshop "Carreira
> Alinhada" da Débora Delgado, para o Claude Code construir nesta pasta (`04 - web
> design`) com a skill **ui-ux-pro-max** + voz **debora-voice**. Entregável final:
> **HTML/CSS/JS vanilla autocontido**, embed em **Wix**. As referências em
> `referências/` são React/Next premium — servem de **referência de técnica e
> qualidade**, não de stack. Traduzir para vanilla. Ver `CLAUDE.md` (como trabalhar),
> `ANTI-AI-SLOP.md` (o que evitar) e `REFERENCIAS-MAP.md` (de cada ref ao uso).

---

## 1. Objetivo

**Converter o líder (ICP) → inscrição paga no Workshop.** Uma única página de tráfego;
a pessoa **escolhe a turma na própria inscrição**. Sucesso = inscrição confirmada no
checkout, com **escassez real** (lotes + ~20 vagas/turma) preservada e sem hype.

Métrica primária: inscrições. Secundárias: scroll até a oferta, cliques no CTA, seleção
de turma. A página é **sóbria e premium** — vende discernimento, não urgência fabricada.

---

## 2. ICP (resumo — fonte: `01 - contexto/ICP-LIDER.md`)

**Líder** com escopo real de liderança (gestor, fundador, especialista que responde por
time), B2C, vive no Instagram. Quer **testar o método em si antes de aplicar ao time**.
Busca **alinhamento e congruência** — "liderar sem se trair" —, não "crescer".

- **Dor central:** baixa prontidão interna trava feedback, conversa difícil, delegação,
  decisão e alinhamento. *Sente a incoerência antes de saber nomeá-la.*
- **Linguagem dele:** "sei o que fazer, mas trava na hora"; "cresci no cargo e me perdi
  de mim"; "estou entregando, mas vazio".
- **Objeções:** "é autoajuda?"; "eneagrama é signo?"; "não tenho tempo"; "já fiz
  terapia"; "é vivência boa mas não muda nada".
- **Gatilhos:** reconhecimento (ver-se na própria dor), coerência, escassez real,
  NR-1 só como **gancho secundário** (nunca centro).

A copy fala **só com o líder**. Nada de "para qualquer pessoa".

---

## 3. Oferta (resumo — fonte única: `03 - tráfego pago/OFERTA-CANONICA.md`)

> Se divergir, a OFERTA-CANONICA prevalece. Nada é inventado na página.

- **Produto:** Workshop "Carreira Alinhada" (nome provisório). Online, **3 dias x ~2h**.
  Turma de **máx. 20 pessoas** (escassez real). Workshop de **alinhamento**, não de
  performance.
- **Lotes (por turma):** Lote 1 — 10 primeiras — **R$ 97**; Lote 2 — próximas 10 —
  **R$ 197**; Lote 3 — últimas (se >20) — **R$ 257**.
- **Turmas (a pessoa escolhe na inscrição):**
  - **Fim de semana:** sex 14/08 (19h–21h) + sáb 15/08 (10h–12h e 13h–15h).
  - **Meio de semana:** qua–sex, 9h–11h (manhã).
- **Order bump (checkout):** curso de eneagrama "Conheça a sua personalidade" (preço
  baixo, a definir) — via PagTrust.
- **Não exibir na landing:** mentoria em grupo (R$ 4.000) e individual são vendidas
  **dentro do workshop**, não aqui. Não citar como oferta da página.
- **Promessa:** EM ABERTO — direção **alinhamento/congruência**, nunca "crescer". Usar
  ângulos de `ICP-LIDER.md` ("liderar sem se trair", "padrão, não destino").

**Placeholders:** preço do order bump, link de checkout/Wix, datas finais e nome
definitivo podem não estar fechados — marcar como `{{PLACEHOLDER}}` e listar nas
pendências, nunca inventar número.

---

## 4. Estrutura de seções (ordem recomendada)

Mobile-first. Cada seção mapeada a uma referência aproveitável e a como traduzir de
React → HTML/CSS vanilla. Detalhe técnico completo em `REFERENCIAS-MAP.md`.

| # | Seção | Função | Referência base | Tradução React → vanilla |
|---|---|---|---|---|
| 1 | **Hero premium** | Reconhecimento imediato: "Você lidera bem os outros. E a si mesmo?". Headline forte + subhead + 1 CTA + âncora de escassez (lote/vagas). | **Cinematic landing Hero** | GSAP timeline → **IntersectionObserver + CSS transitions** (fade/translate/blur no load). Parallax do mouse → `transform` leve via `requestAnimationFrame` com `--mouse-x/y` em CSS vars (desligar no mobile e em `prefers-reduced-motion`). Sem mockup de iPhone; usar a **fingerprint/geometria** da Débora como objeto do hero. |
| 1b | **Fundo do hero/seções** | Atmosfera viva e sutil, em tom da paleta. | **Shader Background** + **Noise effect** | Shader WebGL → **gradiente animado em `<canvas>` vanilla** (ou gradiente CSS animado) nas cores da Débora (musgo/areia/petróleo/dourado). Noise → **canvas grain** com `patternAlpha ~10-15` e refresh baixo, OU SVG `feTurbulence` estático como overlay leve. Sutil, nunca neon. |
| 2 | **Prova / dor do líder** | Espelhar as 7 dores e a frase do ICP até ele pensar "é exatamente isso". Texto editorial + destaques, não bullets frios. | **Cinematic Hero** (reveal sequencial) | Reveal por scroll com IntersectionObserver, stagger via `transition-delay`. |
| 3 | **O método dos 3 dias** | Mostrar o caminho: Dia 1 / Dia 2 / Dia 3 (reconhecer padrão → integrar → roadmap). Reduz objeção "vivência que não muda nada". | **Agents Plan** (etapas com progressão visual) | Estado React/framer-motion → **3 cards/etapas em CSS** com linha conectora (geometria fina dourada) e reveal no scroll. Sem ícones lucide soltos; numeração editorial + detalhe geométrico. |
| 4 | **Quem conduz (Débora)** | Autoridade humana, discernimento, não guru. Foto/elemento de identidade + bio curta na voz dela. | Identidade de `05 - design` | Bloco editorial assimétrico; fingerprint dourada como assinatura. |
| 5 | **Oferta em lotes (escassez real)** | Lote 1/2/3 com preço e vagas; deixar claro o lote vigente. Escassez **real** (vagas/lotes/datas), nunca contador falso. | **Agents Plan** + card material do **Cinematic Hero** | Cards de lote em CSS; lote vigente via classe (atualizável no embed). CTA leva ao checkout. |
| 6 | **FAQ** | Derrubar objeções do ICP (autoajuda, eneagrama, tempo, terapia, "não muda nada"). | Padrão acordeão | `<details>/<summary>` nativos + CSS (acessível, zero dependência). |
| 7 | **Inscrição + seletor de turma** | Conversão: escolher turma (FDS manhã/tarde, meio de semana) → CTA checkout. | **Bolt Style Chat** / **AI Chat model ref** (seletor premium) | Dropdown React → **`<select>` estilizado ou grupo de `radio` em CSS**, acessível, teclado-navegável. Passa a turma escolhida ao link de checkout (param). |
| 8 | **Rodapé** | Reforço de congruência + 1 CTA final + dados/contato. | — | HTML simples, sóbrio. |

CTA recorrente (hero, após o método, na oferta, no rodapé) — mesmo destino, copy na voz
da Débora ("Quero reconhecer meu padrão" / a definir com debora-voice), nunca "COMPRE
AGORA".

---

## 5. Exigências técnicas (não negociáveis)

- **Vanilla only:** um `.html` autocontido (HTML + `<style>`/`<script>` inline). **Sem
  React, sem build, sem CDN de framework.** Google Fonts via `<link>` aceitável (ou
  `@font-face`); se offline-safe for exigido, font stack do sistema.
- **Wix embed-safe:** funciona dentro de um bloco HTML do Wix (iframe). Sem dependências
  externas pesadas; JS defensivo (checar existência de elementos); nada que quebre se o
  iframe tiver altura limitada.
- **Responsivo, mobile-first:** breakpoints 375 / 768 / 1024 / 1440. Hero e seletor de
  turma impecáveis no mobile (é onde cai o tráfego do Instagram).
- **Performático:** canvas leve (grain com refresh baixo, parar animação fora da
  viewport), imagens otimizadas, animações por `transform`/`opacity`. Respeitar
  **`prefers-reduced-motion`** (desligar parallax e grain animado).
- **Acessível:** contraste WCAG AA (petróleo sobre areia ok; checar dourado), foco
  visível, navegação por teclado no seletor/FAQ, `cursor: pointer` em clicáveis.
- **Tokens de marca:** consumir cores/tipografia do design system de `05 - design`
  (musgo `#7A9E89`, areia `#F1EDE4`, petróleo `#2E3D45`, dourado `#B89B72`, terracota
  `#C08552`). Areia domina; dourado é acento raro. Ver `BRAND-BRIEF.md`.

---

## 6. Saída esperada

- `landing-carreira-alinhada.html` (autocontido) em `04 - web design`.
- Bloco de checkout (seletor de turma + CTA) integrado na mesma página OU `.html`
  separado se o checkout do Wix exigir — decidir no build, documentar no resumo.
- Resumo final: arquivos criados + placeholders pendentes + o que precisa de aprovação
  humana antes de ir ao ar.
