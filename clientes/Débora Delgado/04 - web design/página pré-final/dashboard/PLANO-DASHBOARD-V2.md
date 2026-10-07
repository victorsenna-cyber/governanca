# Plano — Dashboard v2 (funil de vendas completo · heatmap por dobra · Meta · seletor de período)

> Consolida 4 pedidos do Victor num plano faseado por dependência de dados. Cada card só renderiza quando sua fonte existe (degrada com placeholder). Base: dashboard atual (`painel/index.html` / `index-light.html`) + Apps Script (`APPS-SCRIPT-ECOSSISTEMA-V3.md`) + engajamento (`SPEC-ENGAJAMENTO-POR-DOBRA.md`).

---

## A. Funil de vendas completo (card novo)

### Etapas e fontes (a realidade de cada dado)
| # | Etapa | Fonte | Quando fica disponível |
|---|---|---|---|
| 1 | Impressões | Meta Ads API | fase Meta |
| 2 | Cliques no link | Meta Ads API | fase Meta |
| 3 | PageView (= carregamento) | dataLayer → Apps Script | **agora** |
| 4 | ViewContent | dataLayer (seção oferta) → Apps Script | **agora** |
| 5 | Clique no CTA | dataLayer (evento novo) → Apps Script | **agora** (add evento) |
| 6 | Lead | popup → Apps Script | já temos |
| 7 | InitiateCheckout | popup → Apps Script | já temos |
| 8 | Purchase | webhook PagTrust → Apps Script | já temos |

> **"Carregamento de página" = PageView.** É o mesmo momento (load da página). Unificado numa etapa só, senão o funil tem degrau falso.
> Etapas 1–2 (impressão/clique) vêm da Meta → o card mostra essas linhas como "—" até a fase Meta, e o resto (3–8) já funciona.

### Como captar as etapas 3–5 (novo no Apps Script/página)
- **PageView**: a página já dispara; adicionar um `beacon` leve pro Apps Script (aba `Funil`) no load, com `session_id` + UTMs. (Ou derivar do GA4 — mas manter tudo no Apps Script é mais simples e coerente.)
- **ViewContent**: já existe (`view_offer` no dataLayer) — espelhar pro Apps Script.
- **Clique no CTA**: adicionar `trackEvent('cta_click', {...})` em cada CTA que abre o popup, e espelhar pro Apps Script.
- Todos com o mesmo `session_id` → dá pra medir **conversão etapa→etapa** (quantos do PageView chegaram no ViewContent, etc.).

### Render
Funil vertical (barras decrescentes) com **contagem + % de conversão entre etapas**. Cada etapa colorida; a maior queda (gargalo) destacada. Etapas Meta em cinza/"—" até a fase Meta.

---

## B. Heatmap por dobra — página + checkout (card novo)

> **Correção técnica registrada:** o GA4 NÃO expõe dados de heatmap (posição de mouse/clique) — isso não existe na API dele. Portanto o "mapa de calor" no nosso dash é um **proxy numérico por dobra** (intensidade = quanto cada dobra foi lida/retida), não o heatmap de mouse real. Heatmap visual de verdade só via Clarity/Hotjar (fora do dash).

### Fonte
- **Página:** o engajamento por dobra (`SPEC-ENGAJAMENTO-POR-DOBRA.md`) — quantas sessões chegaram/ficaram em cada dobra.
- **Checkout:** o checkout é domínio PagTrust (não instrumentável por nós), mas temos os **marcos** via webhook: `PIX_GENERATED`/`InitiateCheckout` (entrou no checkout) e `PURCHASE_APPROVED` (concluiu). Então o "heatmap do checkout" = 2 pontos: **entrou** e **converteu** (a queda entre eles é o abandono do checkout).

### Render
- **Faixa vertical espelhando a página**: cada dobra é uma barra colorida por intensidade (verde=quente/muito lida → esmaecendo até frio/pouco lida). Ao lado, % de retenção.
- **Bloco checkout** ao fim: entrou no checkout → comprou, com a taxa de abandono do checkout.
- Escala de cor tipo heatmap (usar a paleta clara do dash: musgo/dourado/terracota como quente→frio, ou um gradiente verde→âmbar→vermelho suave).

---

## C. Preparo para dados da Meta (já parcial — completar)
- O dash já foi feito p/ receber `d.ads` (KPIs Investimento/CAC/ROAS/CPL + "Aquisição paga"). **Completar:** as etapas 1–2 do funil de vendas (impressões/cliques) também vêm de `d.ads` — ligar essas linhas do funil ao mesmo bloco.
- Quando a Meta Ads API entrar (via Apps Script, `FASE-ADS-META-API.md`), o funil ganha o topo (impressão→clique) e o CAC/ROAS aparecem. **Sem refazer layout** — só os dados entram.

---

## D. Seletor de data/período (controle global do dash)
- **UI:** um seletor no topo do dash — presets (Hoje · 7 dias · 30 dias · Tudo) + range customizado (de/até).
- **Como funciona:** o dash passa `?report=funnel&from=YYYY-MM-DD&to=YYYY-MM-DD` pro Apps Script; o `buildFunnel_` **filtra todas as abas** (Leads/Vendas/Engajamento/Funil/CicloVida) pelo `timestamp` no range antes de agregar.
- **Todos os cards respeitam o período** — funil, receita, heatmap, engajamento, ads. Um período, visão coerente.
- Guardar a escolha em `localStorage` (lembra o filtro entre reloads).

---

## Faseamento (ordem de implementação)
1. **Fase 1 (agora, sem Meta):** engajamento por dobra + heatmap numérico (página) + etapas 3–8 do funil de vendas + seletor de período. Tudo com dados que já temos ou captamos direto.
2. **Fase 2 (Meta):** ligar impressões/cliques/CAC/ROAS no funil e nos KPIs quando a Ads API entrar.
- Cada card degrada com placeholder se a fonte não existe (nunca quebra).

## Ordem técnica p/ o executor (Codex)
1. Apps Script: abas `Funil` e `Engajamento` + rotas no `doPost` + `buildFunnel_` com filtro de período (`from`/`to`) e os agregados novos (funil de vendas, heatmap por dobra, checkout).
2. Página: beacons de `pageview`/`view_offer`/`cta_click` + observer de dobra (spec de engajamento) — aditivos, não tocar popup/pixel/lote.
3. Dashboard: 2 cards novos (Funil de vendas, Heatmap por dobra) + seletor de período global + `d.ads` já ligado ao topo do funil. Tema claro Modernize. Tratar tudo como opcional.

## Gate
- [ ] Cada etapa do funil conta certo e a % entre etapas fecha (não pode etapa maior que a anterior).
- [ ] Heatmap por dobra colore por intensidade real; checkout mostra entrou→comprou.
- [ ] Seletor de período filtra TODOS os cards de forma coerente.
- [ ] `d.ads` ausente → topo do funil e KPIs de ad mostram "—", sem quebrar.
- [ ] Não afeta popup/pixel/lote/prefill; original preservado (cópia).

## Nota heatmap visual (opcional, à parte)
Pro heatmap de mouse/clique real (não o proxy numérico), instalar **Microsoft Clarity** (grátis) via GTM — visto no painel do Clarity, com botão-link no nosso dash. Fica como opção; o proxy numérico já responde "onde o público se concentra/desiste".
