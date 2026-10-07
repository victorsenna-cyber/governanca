# 10 — PLANO DE CAMPANHA META

> Toda ação de pausar/alterar/criar/publicar em Meta Ads exige confirmação (formato ACAO PROPOSTA /
> IMPACTO / RISCO / COMO REVERTER / CONFIRMAR COM: executar). Ver `../CLAUDE.md`.

## 1. ESTRUTURA DE CAMPANHAS (fase 1 — lançamento do front)

| Campanha | Funil | Objetivo | Produto | Público |
|---|---|---|---|---|
| C1 | TOFU | Vendas (compra) / ou Tráfego→LP | JC (R$47) | interesses constelação/terapia + lookalike |
| C2 | MOFU | Vendas | CV (R$397) | quem comprou JC / engajou / visitou LP |
| C3 | BOFU/RMKT | Vendas | JC + CV | abandono checkout, viewers vídeo, visitantes LP |
| C4 (opção B) | TOFU | Leads | Aula grátis | público frio (interesses) |

Recomendação: iniciar **otimizando por Compra** na C1 (Pixel com volume de Purchase do low é viável por
ser baixo ticket = muitas conversões para a aprendizagem). Se volume inicial baixo, abrir com tráfego→LP e
migrar para Compra ao acumular eventos.

## 2. NAMING (herança do ecossistema)
- Campanha: `GA|TOFU|JC|COMPRA|META|YYYYMMDD` · `GA|MOFU|CV|COMPRA|META|YYYYMMDD` · `GA|RMKT|JCV|COMPRA|META|YYYYMMDD`
- Conjunto: `AS|JC|FRIO-INTERESSES|BR|30-55|ADV+|YYYYMMDD`
- Anúncio: `AD|A1-AVULSO-JORNADA|REEL01|9x16|ESTRUTURAR|YYYYMMDD`

## 3. PÚBLICOS
**Frio (TOFU):**
- Interesses: Constelação Familiar, Bert Hellinger, terapias integrativas, tarô/cartomancia, terapia sistêmica, holístico.
- Comportamento: admins de página, interesse em cursos/empreendedorismo holístico.
- Lookalike (quando houver dados): 1–3% de compradores JC / lista de clientes.

**Quente (MOFU/RMKT):**
- Compradores JC (para CV); engajamento IG/FB 365d; viewers 50%+ de vídeo; visitantes LP 30/60/90d; abandono checkout.

**Exclusões:** já compradores do produto-alvo; alunos CORE (para não desperdiçar).

## 4. ORÇAMENTO (modelo de teste — valores a definir com Guilherme)
- Fase teste (7–14 dias): foco C1 (low). Orçamento diário suficiente para ~ ≥10–20 compras/semana acumular sinal.
- Regra de leitura antes de escalar: ver gatilhos de corte/escala em `../CLAUDE.md`.
- Escalar gradualmente o que tem CPA ≤ teto e order bump/upsell saudáveis.

## 5. POSICIONAMENTOS
Advantage+ placements no início; isolar Reels/Feed depois se houver discrepância de custo/qualidade.

## 6. EVENTO DE CONVERSÃO
- C1: `Purchase` (JC) — alto volume, boa otimização. (Alternativa inicial: `InitiateCheckout` se Purchase escasso.)
- C2/C3: `Purchase` (CV) e/ou `InitiateCheckout`.
- C4: `Lead`.

## 7. CICLO DE OTIMIZAÇÃO
Diário: log padrão (gasto, compras, CPA, CPL, alertas, criativo vencedor/fraco, hipótese, próxima ação).
Semanal: relatório (receita/pipeline, gasto, CPA médio, take bump/upsell, melhor/pior criativo, hipóteses, plano).
Ordem de otimização: oferta → criativo → copy → público → LP/checkout → bump/upsell.
