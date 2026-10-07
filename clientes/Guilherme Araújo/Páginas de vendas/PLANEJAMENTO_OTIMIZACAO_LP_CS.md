# PLANEJAMENTO — Otimização da LP Cartomância Sistêmica

**Data:** 2026-06-01
**Autor do plano:** Opus (estratégia) · **Executor:** Sonnet (operacional)
**Arquivo-alvo de edição:** `index.html`
**Objetivo central:** subir o **LPV Rate de 50% → ≥80%** reduzindo o tempo de carregamento e garantindo disparo precoce/único do Pixel.

---

## 1. Diagnóstico (causa raiz)

O `index.html` é um arquivo único, **vanilla** (sem jQuery, sem Elementor, sem framework).
Porém o Lighthouse de `professorguilhermearaujo.com.br` mostra carregando junto:

- jQuery 3.7.1 (**2.030 ms render-blocking**) + jQuery Migrate + jQuery UI 1.13.3
- Elementor (`frontend-modules.min.js`, `frontend.min.css`, `webpack.runtime`, `post-9.css`, `post-95.css`)
- Blocos "subscription" (`subscription-view.js`, `subscription.css`)
- **Roboto** (woff2 `KFO7CnqEu...`) — fonte que **não existe** no nosso arquivo
- Meta description marcada como **ausente**, apesar de existir na linha 7 do `index.html`

**Conclusão:** o conteúdo do `index.html` foi embutido dentro de uma página WordPress/Elementor.
Resultado: ~90 KiB de jQuery/Elementor inúteis bloqueando **2.470 ms** de renderização, `<head>`
do arquivo invalidado (fontes duplicadas, meta description perdida, risco de PageView duplicado/atrasado).

### Métricas atuais (Moto G Power, 4G lento, emulado — pior no real)
| Métrica | Atual | Meta |
|---|---|---|
| Performance | 80 | ≥90 |
| FCP | 3,3 s | <1,8 s |
| LCP | 3,3 s | <2,5 s |
| TBT | 260 ms | <150 ms |
| CLS | 0 | manter |
| Render-blocking | 2.470 ms | ~0 |
| LCP render delay | 1.510 ms | <300 ms |
| **LPV Rate (negócio)** | **50%** | **≥80%** |

---

## 2. Decisão de entrega (APROVADA)

**Servir o `index.html` como HTML estático puro, FORA do WordPress/Elementor.**
(Subpasta `/cs/` ou subdomínio dedicado, ex.: `lp.professorguilhermearaujo.com.br`.)

Isso elimina de uma vez: jQuery, jQuery UI, Elementor, blocos subscription, Roboto e o
`<head>` duplicado — recuperando ~2.470 ms automaticamente e devolvendo validade ao `<head>`
do arquivo (Pixel, GTM, fontes, title, meta description voltam a funcionar nativamente).

---

## FASE 1 — Deploy estático (infra · requer acesso de hospedagem)

> Não é edição de `index.html`. É publicação. Checklist:

1. Publicar `index.html` como arquivo estático na nova URL (sem passar por PHP/WordPress).
2. Garantir HTTPS e que a foto do autor continue acessível
   (`/wp-content/uploads/2026/05/Foto-Guilherme-LP.jpeg` — ou migrar a imagem para o novo host).
3. Cabeçalhos de cache para os assets estáticos.
4. **Trocar a URL de destino de TODOS os anúncios ativos** para a nova URL.
5. **Revalidar o Pixel** (ID `1259363302489132`) no Events Manager na nova entrega.
6. Não remover/alterar a página WordPress antiga até a nova estar validada (rollback).

---

## FASE 2 — Otimizações dentro do `index.html` (Sonnet executa)

> Com a entrega estática, os maiores ganhos vêm de graça. Abaixo, o refino fino.

### 2.1 Fontes
- **Não cortar pesos do Cormorant agressivamente** — as variações `0,300;0,400;0,500;0,600;1,300;1,400;1,500`
  correspondem ao uso real (headline 400, blockquote 300 itálico, movimento-nome 500, autor-anos 600 etc.).
  Cortar gera faux-bold/itálico e quebra o visual editorial. Cortar no máximo o que comprovadamente
  não aparece (ex.: avaliar se Cormorant 600 — só no selo "+12 anos" — vale manter).
- **Adicionar `<link rel="preload" as="font" type="font/woff2" crossorigin>`** do woff2 do serif
  usado no LCP (logo/headline). Ataca diretamente os **1.510 ms** de atraso de renderização do elemento.
- **Manter `display=swap`** (já presente).
- **Evolução (opcional, recomendado): self-host das 2 fontes** (Cormorant + Jost) como `.woff2`
  no próprio domínio, via `@font-face` inline, eliminando o round-trip de `fonts.googleapis.com`
  (~725–900 ms por requisição) e `fonts.gstatic.com`. Subset `latin`.

### 2.2 Animações de load (above the fold)
- Hero usa `opacity:0` + `fadeUp` com delays escalonados até **0,9 s** (`.load-1`→`.load-5`).
  Em conexão lenta isso adia o conteúdo principal e piora LCP percebido.
- **Encurtar os `animation-delay`** (comprimir a escada para terminar em ~0,4 s) e **não iniciar
  em `opacity:0`** o elemento de maior peso (headline `H1` e/ou CTA primário acima da dobra).
- Preservar a sensação editorial — ajustar timing, não remover o efeito.
- `@media (prefers-reduced-motion)` já está correto; manter.

### 2.3 Pixel / mensuração (head agora válido)
- Confirmar que `fbq('track','PageView')` dispara inline no `<head>`, **antes de tudo** e
  **sem depender do GTM** (já está assim nas linhas 10–14 — manter essa ordem).
- Garantir **disparo único** de PageView (sem o WordPress/GTM disparando um segundo).
- `ViewContent` e `InitiateCheckout` por CTA já implementados (linhas 1663–1688, 1767–1775) — manter.

### 2.4 Menor prioridade
- Minificar o CSS inline (~2,7 KiB de economia). Baixo impacto; fazer por último.

---

## FASE 3 — Auditar mensuração de LPV

- No Events Manager: verificar **PageView duplicado** e o tempo de disparo do LPV.
- Parte dos 50% perdidos pode ser tracking (não só velocidade) — confirmar após o deploy estático.

---

## FASE 4 — Remedir

- Rodar novo Lighthouse na URL estática (mobile).
- Acompanhar **LPV Rate** na conta por 3–5 dias.
- Critério de sucesso: LPV ≥ 80% e LCP < 2,5 s.

---

## Riscos

- Migração de URL sem atualizar anúncios/Pixel → perde tracking e aprendizado. (Fase 1, itens 4–5)
- Self-host de fonte mal feito → FOUT/quebra visual. Validar render do serif.
- Cortar peso de fonte usado → faux-bold. Por isso a regra conservadora em 2.1.
- Encurtar animação demais → perde o "editorial luxury". Ajustar timing, não eliminar.

---

## Ordem de execução recomendada

1. **Fase 1** (deploy estático) — maior ganho (~2.470 ms), gate de tudo.
2. **Fase 2.1 + 2.2** (preload de fonte + tuning de animação) no `index.html`.
3. **Fase 2.3** (validar pixel único/precoce).
4. **Fase 3** (auditar LPV) → **Fase 4** (remedir).
5. **Fase 2.4** + self-host de fontes (evolução).
