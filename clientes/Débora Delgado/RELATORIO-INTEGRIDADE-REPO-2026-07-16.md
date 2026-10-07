# RELATÓRIO — Integridade e congruência do repo · 16/07

> Auditoria pós-martelo (14/07) e pós-v3: a página avançou 3 gerações de narrativa (plenitude 30/06 → léxico 09/07 → **eficiência+paz 14/07**) e parte dos docs fundamentais ficou para trás. Varredura por marcadores obsoletos: "Carreira Alinhada" · "tudo o que você é"/"líder inteiro"/"inteireza" · roadmap reverso/mapa do bloqueio/metas filtradas (saíram 14/07) · "mapa de talentos" (vetado) · frases de espelho vetadas · NR-1 (fora 16/07) · "reconhecer os padrões".
> **Regra desta auditoria (Victor 16/07): sinaliza, não implementa.** Cada item abaixo é uma iteração A FAZER, com prioridade. Execução = task própria, registrada no diário.

## P1 — Bloqueiam o pacote em curso (v3 → Débora · criativos → mídia)

| # | Arquivo | Problema | Iteração indicada |
|---|---|---|---|
| 1 | `04.../pagina/PAGINA-EXPLICADA-SEU-EIXO.md` | Mapeada sobre a **V2** (promessa antiga, quem conduz depois da oferta, sem popup, dobras antigas) — e é peça do pacote de aprovação da v3 | Reescrever sobre a v3 ANTES de mandar o pacote à Débora |
| 2 | `03.../PLANO-CRIATIVOS.md` | Matriz com hooks da promessa 30/06 ("liderar inteiro", "tudo o que você é"), A2 "inteireza", **A6/slot 11 = NR-1 (morta 16/07)**; não conhece os CN1-5 | Re-matriz sob promessa eficiência+paz; incorporar escada CN; remover A6 |
| 3 | `03.../OFERTA-CANONICA.md` §3 | Linha "NR-1 → gancho secundário" contradiz decisão 16/07 (fora do lançamento) | 1 linha: atualizar §3 |
| 4 | `07 - skills/funil-debora/SKILL.md` | Description "Carreira Alinhada"; NR-1 gancho; não espelha 14/07 (promessa, arco 3 dias novo, order bump "Curso Eneagrama" preço livre) | Re-sincronizar com OFERTA-CANONICA vigente |
| 5 | `07 - skills/debora-voice/SKILL.md` | Description "Carreira Alinhada"; NR-1 "gancho secundário"; **vetos 14/07 ausentes do léxico** ("talentos" = soa assessment; frases de espelho vetadas: "Será que eu quero continuar sendo líder?", "Todo mundo espera algo de mim...") | Atualizar léxico + regra NR-1 + description |
| 6 | `03.../criativos/ROTEIROS-VIDEO-DEBORA.md` | V3 "ON HOLD" pré-martelo (condição já resolvida); hooks V1/V2 na promessa antiga; não incorpora os 3 vídeos longos dela (matéria-prima 14/07) | Reescrever sob promessa nova (já sinalizado na COPY v4 §6.5) |
| 7 | `03.../BRIEFING.md` | Gate G1 "promessa/nome em fechamento" (fechados 08 e 14/07); order bump "a definir" (livre 14/07) | Atualizar gates e escada |
| 8 | `03.../PLANO-DE-MIDIA.md` | "Bloqueado por verba + datas de virada" — datas fechadas 08/07; matemática reversa segue "preliminar" e a linha de meta não assinada | Fechar com verba real e assinar a matemática (gate do método antes de subir campanha) |

## P2 — Higiene de roteamento (evitam que executor futuro beba em fonte morta)

| # | Arquivo | Problema | Iteração indicada |
|---|---|---|---|
| 9 | `03.../copy-anuncios.md` | **3 gerações atrás** (29/06): "Carreira Alinhada", ângulo propósito/coerência, "reconhecer o seu padrão e voltar inteiro", NR-1 ângulo 5. Função absorvida pela `criativos/COPY-CRIATIVOS-ESTATICOS.md` v4 (primary texts) | **Arquivar** com marcador SUPERADO (não reescrever) |
| 10 | `03.../PROMPT_artefato_apresentacao_debora.md` | One-shot de junho: Carreira Alinhada, Dia 2 Ikigai/EFT/Mapa do Bloqueio, roadmap reverso | Arquivar |
| 11 | `04.../pagina/COPY-REESCRITA-PAGINA-V2.md` | Superada pela v3 (construída direto no index-v3.html sob contrato 14/07) | Marcador SUPERADA no topo apontando p/ v3 + DECISOES 14/07 |
| 12 | `04.../pagina/ESTRUTURA-PAGINA-DEPLOYADA.md` | Retrata o deployado pré-v3 (H2 antigo, TRES antigo, T7-T9 pendentes — contexto morto) | Marcador SUPERADA; re-extrair da v3 quando publicada (vira insumo da PAGINA-EXPLICADA nova) |
| 13 | `04 - web design/PLANO-PAGINA-SEU-EIXO.md` | Cheio de `{{PENDENTE-FASE-2}}` pré-martelo; promessa/dobras superadas pela v3; risco alto de executor usar como fonte | Marcador SUPERADO (fonte vigente da página = `index-v3.html` + contrato DECISOES 14/07) |
| 14 | `CLAUDE.md` (raiz) | Título/§0b com "Carreira Alinhada" e posicionamento 30/06 ("do bom ao pleno"); §4 lista skills "a criar" que já existem (+ `pagina-explicada` ausente); mapa de pastas sem `10 - Registros de análises` e sem a subestrutura de `página pré-final/` | Atualizar §0b (promessa 14/07), §2 (mapa), §4 (skills) |
| 15 | `PROJECT.md` (raiz) | 11 hits de marcadores velhos — visão/oferta/workshop desatualizados | Reescrever §4-6 sob estado 14-16/07 |
| 16 | `SPRINT-WORKSHOP.md` · `CHECKPOINT-LANCAMENTO.md` | Título/refs "Carreira Alinhada" (1-2 hits) | Ajuste cosmético ou marcador de época |

## P3 — Com a Débora (conteúdo, não copy)

| # | Arquivo | Problema | Iteração indicada |
|---|---|---|---|
| 17 | `02 - workshop/Materiais pré workshop/Caderno_Dia1/2/3_A4.pptx` + BoasVindas | **Workshop foi refeito (14/07: 3 dias = 3 sistemas)** — cadernos são do formato antigo (eneagrama→bloqueio→roadmap) | Refazer com ela: maior pendência de PRODUTO do projeto; sem caderno novo, o workshop vendido ≠ workshop entregue (mesma dissonância que a página tinha) |
| 18 | `Metanarrativa Líder.md` | Linguagem pré-14/07 ("cansado da forma como aprendeu a trabalhar") | Iterar junto do ICP na próxima rodada de arqueologia |
| 19 | `TRES_Nome_Simbolo_Tese 03-07.docx` | Tese do TRES pré-âncora de eficiência | Revisar tese (leve) |

## O que está ÍNTEGRO (conferido)

`DECISOES.md` (cadeia de precedência funcionando; ordem cronológica corrigida hoje) · `OFERTA-CANONICA.md` (vigente 15/07, exceto item 3 acima) · `criativos/COPY-CRIATIVOS-ESTATICOS.md` v4 · `index-v3.html` (copy conferida no gate de 15/07) · `DIARIO-DE-BORDO` em dia · `_arquivo/` sendo usado corretamente (TASKS-SONNET, docs-superados) · réplicas de governança intactas · `10 - Registros de análises` criada e em uso · CALENDARIO-LOTES · LINKS CHECKOUTS (6 + order bump conforme diário).

## Leitura de roteamento (estrutura)

A reorganização de `página pré-final/` em subpastas (`pagina/`, `dashboard/`, `painel/`, `tracking/`, `index deployado/`, `página v3 - 15-07/`, `_arquivo/`) está saudável, mas **não está declarada em nenhum README/CLAUDE** — executor novo não sabe que `pagina/` = docs da página e `índex deployado/` = artefatos publicáveis. Iteração indicada: README curto em `página pré-final/` + atualização do mapa no CLAUDE.md raiz (item 14).

## Ordem de execução recomendada
1→3→4→5 (destravam o pacote v3 + criativos, ~1 sessão) · 2→6 (criativos/mídia) · 7→8 (pré-campanha, gate do método) · 9-13 (marcadores, 15 min) · 14-15 (raiz) · 17 (agenda com a Débora — crítico de produto, não de marketing).
