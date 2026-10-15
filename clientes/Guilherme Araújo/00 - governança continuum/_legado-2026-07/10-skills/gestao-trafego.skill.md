# SKILL — Gestão de Tráfego Pago (método)

> **Tipo:** skill de método · **Fonte completa:** `METODO-TRAFEGO-PAGO.md` (prevalece em conflito) · **Atualizado em:** 2026-07-08
> Carregar quando o pedido envolve: plano de mídia, campanha, criativo de anúncio, otimização, escala, relatório de tráfego, diagnóstico de CPA.
> Estado do cliente: `30-comercial/trafego-clientes/<cliente>/`. Números de alçada/preço: `00-core/POLITICAS-DE-DECISAO.md`.

## Cadeia endurecida (nunca pular gate)

**Gate de entrada → Briefing/Matemática → Página aprovada → Matriz de criativos → Estrutura → Tracking verde → Gestão por regras → Relatório.**

## Regras que decidem (resumo operacional)

1. **Sem matemática reversa assinada, não sobe campanha** (ticket → margem → CPA máx → CPL máx → verba mínima = 10-15× CPA alvo/dia).
2. **Sem tracking verde (Pixel+CAPI, eventos testados, UTM padrão), não sobe campanha.**
3. **Sem página aprovada no checklist (§3 do método), não sobe campanha.** Página segue `METODO-PAGINA-DE-VENDAS.md`.
4. **Criativo é a segmentação:** broad + 8-12 criativos distintos (ângulo × formato × hook). Portfólio 70/30 (iteração/risco). Copy: `copywriting-fable5` + `stop-slop` + voz do cliente (nunca `voz-victor` para cliente).
5. **Consolidação:** 1 campanha por objetivo · 1-3 conjuntos · verba < R$ 100/dia = 1 campanha, 1 conjunto, prazos de decisão dobrados.
6. **Kill/scale por regra, não sensação:** kill hard = 3× CPA sem conversão ou CTR < 0,5% (≥ 2k impr.) · kill = CPA > 3× alvo por 3 dias · fadiga = freq > 3,5 + CTR −20% · escala = +20%/48-72h · não mexer nas primeiras 72h · 1 mudança por vez.
7. **Toda decisão vai para `LOG-DECISOES.md`** (data · o quê · por quê · resultado esperado).
8. **Diagnóstico de CPA alto nesta ordem:** tracking → oferta → página/atendimento → criativo → estrutura/leilão.
9. **Verba na conta do cliente**, cap de gasto configurado, mudança > 30% do plano = aprovação escrita.
10. **Relatório:** manchete é resultado de negócio, nunca vanity metric; plataforma + fonte de verdade lado a lado; cruza `stop-slop`.

## Nomenclaturas (lei)

Campanha `[cliente]-[canal]-[objetivo]-[funil]-[data]` · Criativo `[cliente]-[ângulo]-[formato]-[hook]-[versão]` · UTM travada (método §6.3).

## Saída mínima

Decisão · direção · ação coordenada · impacto — com número (CPA/CPL/verba/meta), nunca opinião solta.

---
*Base: `METODO-TRAFEGO-PAGO.md` · pesquisa 2025-26 (pós-Andromeda).*
