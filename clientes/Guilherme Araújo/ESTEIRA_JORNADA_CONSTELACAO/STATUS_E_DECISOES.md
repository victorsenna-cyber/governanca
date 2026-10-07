# STATUS, HISTÓRICO E DECISÕES — Esteira Jornada de Constelação

> **Documento vivo.** É a fonte única de verdade do projeto: tudo o que foi feito, todas as decisões e o
> que será feito. **Regra permanente: manter este arquivo atualizado a cada sessão/entrega** (ver CLAUDE.md).
> Última atualização: **2026-06-02**.

---

## 1. O QUE É O PROJETO (resumo de 1 parágrafo)
Esteira **paga stand-alone** para consteladores que vivem de sessão avulsa: ensina a estruturar uma **Jornada
de Constelação** (Degrau 1) e a **vendê-la com recorrência** (Degrau 2), ascendendo para a Formação CORE
(`../FUNIL_CONSTELACAO`) e Cartomância Sistêmica. Detalhes em `00_VISAO_GERAL.md`.

---

## 2. LINHA DO TEMPO (o que foi feito)

### 2026-06-01 — Trabalho relacionado (projeto irmão: LP Cartomância)
- Diagnóstico de performance/LPV da LP de Cartomância (`../Páginas de vendas`): LPV 50%, causa raiz = HTML
  embutido em WordPress/Elementor arrastando jQuery/Elementor (~2.470 ms de bloqueio).
- Decisão aprovada: **servir estático fora do WordPress**.
- Entregue: `../Páginas de vendas/PLANEJAMENTO_OTIMIZACAO_LP_CS.md` (handoff para o Sonnet).
- **As lições de performance/LPV daí passaram a reger todas as páginas desta esteira.**

### 2026-06-02 — Planejamento da esteira
- Pesquisa de mercado (constelação BR, concorrência, tripwire vs lead magnet, recorrência).
- Criada a estrutura completa de planejamento (CLAUDE.md + 13 arquivos `00`→`12`).

### 2026-06-02 — Execução do funil (páginas)
- **Degrau 1 — LP "A Primeira Jornada" (R$47):** `LP_PRIMEIRA_JORNADA/index.html` + `NOTAS.md`.
- **Checkout + order bump:** `CHECKOUT_E_ORDERBUMP.md` (spec de configuração da plataforma).
- **Upsell:** `UPSELL_CONSTELADOR_QUE_VENDE/index.html` (CV R$397, 1-click).
- **Downsell:** `DOWNSELL_CV_ESSENCIAL/index.html` (CV Essencial R$197).
- **Obrigado/onboarding:** `OBRIGADO/index.html`.
- **Degrau 2 — LP stand-alone (MOFU):** `LP_CONSTELADOR_QUE_VENDE/index.html`.
- **Criativos prontos:** `CRIATIVOS_PRONTOS_LOTE1.md` (textos de anúncio + roteiros de Reel).

---

## 3. DECISÕES TRAVADAS (não reabrir sem ordem explícita)

| # | Decisão | Quando | Origem |
|---|---|---|---|
| D1 | Esteira **paga** (low + mid + ascensão), não lead-gen grátis | 2026-06-02 | cliente |
| D2 | Objetivo primário = **receita própria stand-alone** (ascensão é LTV extra) | 2026-06-02 | cliente |
| D3 | Degrau 1 = **"A Primeira Jornada"**, **R$47** | 2026-06-02 | cliente |
| D4 | Degrau 2 = **"Constelador que Vende"**, **R$397** (downsell CV Essencial R$197) | 2026-06-02 | plano (a confirmar preço final) |
| D5 | Order bump no checkout do JC = +R$27 (Roteiros & Templates) | 2026-06-02 | plano |
| D6 | Ascensão → Formação CORE (`FUNIL_CONSTELACAO`) e depois CS/AV/Mentoria | 2026-06-02 | plano |
| D7 | Anti-canibalização: low/mid = quick win/sistema; CORE = formação completa + supervisão | 2026-06-02 | plano |
| D8 | Páginas **estáticas, fora do WordPress** (lição de LPV da LP Cartomância) | 2026-06-01 | aprovado |
| D9 | Design system editorial dark reaproveitado de `../Páginas de vendas` | 2026-06-02 | herança |
| D10 | **Sem depoimentos inventados** — prova = números + autoridade + método; coletar reais pós-entrega | 2026-06-02 | política |
| D11 | Pixel `1259363302489132` + GTM `GTM-5KFCDH6N` do ecossistema (a confirmar se próprio) | 2026-06-02 | herança |
| D12 | URLs de próximo passo como **constante única** em cada página (fácil troca) | 2026-06-02 | execução |

---

## 4. INVENTÁRIO DE ENTREGÁVEIS (estado atual)

**Planejamento:** `CLAUDE.md`, `00_VISAO_GERAL.md`, `01`→`12` (estratégia, avatar, ofertas, narrativa,
promessa/ângulos, funil, copy, editorial, criativos, campanha, métricas, checklist).

**Páginas (HTML, prontas com placeholders):**
- `LP_PRIMEIRA_JORNADA/index.html` — Degrau 1, R$47 ✅
- `UPSELL_CONSTELADOR_QUE_VENDE/index.html` — upsell CV R$397 ✅
- `DOWNSELL_CV_ESSENCIAL/index.html` — downsell R$197 ✅
- `OBRIGADO/index.html` — obrigado + onboarding ✅
- `LP_CONSTELADOR_QUE_VENDE/index.html` — Degrau 2 stand-alone (MOFU) ✅

**Operacional:** `CHECKOUT_E_ORDERBUMP.md`, `CRIATIVOS_PRONTOS_LOTE1.md`, este `STATUS_E_DECISOES.md`.

---

## 5. ESTADO DO FUNIL
```
LP JC (R$47) ✅ → CHECKOUT+bump (spec ✅ / config plataforma ⏳)
   → UPSELL CV (R$397) ✅ → aceita: 1-click ⏳ / recusa → DOWNSELL CV− (R$197) ✅ → OBRIGADO ✅
LP CV stand-alone (MOFU) ✅
Criativos lote 1 (texto) ✅ / peças visuais ⏳
```

---

## 6. PLACEHOLDERS ABERTOS (preencher antes de publicar)
- [ ] `CHECKOUT_URL` (JC R$47) — `LP_PRIMEIRA_JORNADA`
- [ ] `ACCEPT_URL` 1-click do CV — `UPSELL_CONSTELADOR_QUE_VENDE`
- [ ] `CHECKOUT_URL` (CV R$397) — `LP_CONSTELADOR_QUE_VENDE`
- [ ] Checkout do CV Essencial (R$197) — `DOWNSELL_CV_ESSENCIAL`
- [ ] `ACCESS_URL` (área de membros) + `WHATSAPP_URL` — `OBRIGADO`
- [ ] Order bump configurado na plataforma (PagTrust)
- [ ] Links legais (Política/Termos) em todos os rodapés
- [ ] Confirmar Pixel/GTM próprios ou do ecossistema

---

## 7. O QUE SERÁ FEITO (próximos passos priorizados)

### Decisões pendentes com Guilherme (gate)
- [ ] Confirmar **preços finais** (R$47 / +R$27 / R$397 / R$197) e parcelamento.
- [ ] Confirmar **nomes** dos produtos.
- [ ] Definir **formato de entrega** (gravado / ao vivo / ao vivo→gravado).
- [ ] Decidir se roda **aula gratuita** na frente do low (opção B) ou direto no low (recomendado: direto).
- [ ] Confirmar **Pixel/conta** de eventos.

### Produção / publicação
- [ ] Gravar/organizar conteúdo do Degrau 1 (JC) + bônus + checklist.
- [ ] Produzir order bump (roteiros/templates/proposta).
- [ ] Gravar/organizar Degrau 2 (CV) + bônus.
- [ ] Configurar checkout, order bump, upsell/downsell e redirects (PagTrust).
- [ ] Publicar as 5 páginas como estáticas (fora do WordPress).
- [ ] Instalar/validar tracking (Purchase por produto) ponta a ponta.
- [ ] Automações (onboarding, remarketing, nutrição low→mid→CORE) — `06_ARQUITETURA_FUNIL.md`.

### Aquisição
- [ ] Produzir peças visuais dos criativos (Reels + estáticos) — `09_CRIATIVOS.md`.
- [ ] Montar campanhas C1/C2/C3 — `10_PLANO_CAMPANHA_META.md` (exige confirmação p/ subir em Meta).
- [ ] Definir orçamento de teste com Guilherme.

### Pós-lançamento
- [ ] Coletar primeiras vitórias e **depoimentos reais** → adicionar seção de prova nas LPs.
- [ ] Ativar ascensão (Sessão Clareza → CORE).
- [ ] Ritual: log diário + relatório semanal; iterar 1 variável/ciclo — `11_METRICAS_KPI.md`.

---

## 8. TRABALHO RELACIONADO (fora desta pasta)
- `../Páginas de vendas/PLANEJAMENTO_OTIMIZACAO_LP_CS.md` — otimização da LP Cartomância (LPV 50% → deploy estático).
- `../FUNIL_CONSTELACAO/` — Formação CORE (destino de ascensão desta esteira).
