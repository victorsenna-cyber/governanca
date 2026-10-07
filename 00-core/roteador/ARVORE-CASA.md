# ÁRVORE — CASA

> **Tipo:** trilho · **Instituído:** 26/09/2026 (onda 5, `40-operacao-rotinas/AUDITORIA-ROTEAMENTO-2026-09-26.md`) · **Alçada:** Victor
> **Carrega-se quando:** o pedido é sobre **o próprio repositório** — mapa, taxonomia, propagação, integração do Codex, congruência entre métodos, criar ou alterar método, skill ou template.
> **Réguas transversais** (§8 REGRAS Nº 0, 1, 2 · procedência · ordem) **valem aqui e não se repetem.**

---

## 1. Pré-condição

Nenhuma de entrada. 🔴 **De saída, uma:** tarefa que criou ou alterou artefato só fecha com `40-operacao-rotinas/ferramentas/verificar-propagacao.py` em ✅.

## 2. O processo desta árvore

| Tipo | O que se carrega |
|---|---|
| **framework** | `00-core/TAXONOMIA-DE-ARTEFATOS.md` (os seis tipos e o PROCESSO, §4.2) |
| **trilho** | **REGRA Nº 1** (§8 — os cinco atos) · `40-operacao-rotinas/RITO-INTEGRACAO-CODEX.md` |
| **método** | *— esta árvore não produz peça; ordena e confere* |
| **blueprint** | `90-templates/CONTRATO-EXECUTOR.md` (tarefa para o Codex) |
| **política** | `CLAUDE.md` §3 (carga e precedência) · §7.1 (ponteiro, legado, substituição) |
| **gate** | 🔴 `40-operacao-rotinas/ferramentas/verificar-propagacao.py` · `100-métodos/METODO-GATE-DE-CONGRUENCIA.md` |

## 3. Linhas — sinal → carga → veto

| Sinais | Carga, na ordem do processo | 🔴 Veto |
|---|---|---|
| "como o repo funciona", "onde fica X", "quem decide o quê", visão geral, organograma, mapa, onboarding de agente novo | `MAPA-DO-REPO.md` *(índice — renderizado em `MAPA-DO-REPO.html`)* | — (não é fonte de regra: em divergência, vale o `CLAUDE.md`) |
| "isso é método ou framework?", blueprint, taxonomia, "onde esse arquivo deveria morar", nomear artefato novo, "por que carreguei isso e não serviu" | `00-core/TAXONOMIA-DE-ARTEFATOS.md` *(framework)* | artefato sem `Tipo:` do vocabulário · híbrido sem `Abrir por momento` · **etapa do processo pulada** |
| "propaguei tudo?", fechar tarefa que criou ou alterou artefato, REGRA Nº 1, "o AGENTS está sincronizado?", "falta veto de quem?" | `40-operacao-rotinas/ferramentas/verificar-propagacao.py` *(gate)* | resultado diferente de ✅ · tarefa fechada sem rodá-lo |
| "o que o Codex fez", integrar o trabalho dele, pacote isolado, destilação feita pelo Codex, **estado de conta que parece desatualizado** | `execução Codex/STATUS-CODEX.md` **primeiro** → `40-operacao-rotinas/RITO-INTEGRACAO-CODEX.md` *(trilho — gate de 5)* · por conta: `clientes/<cliente>/execução Codex/` **+ o canônico da conta, `clientes/<cliente>/STATUS.md`**, contra o qual o item 2 do rito compara · **pacote que é transcrição de call ou áudio → na promoção vira destilação: LEITURA, `100-métodos/METODO-DESTILACAO-DE-CALLS.md`** *(replay G4, 26/09: sem isto o roteador novo carregava menos que o antigo)* | **pacote isolado tratado como estado** · promoção feita pelo Codex · `910 - execução Codex/` usado como destino |
| "isso bate com os métodos?", auditar o próprio output, congruência, "carreguei método demais?", contradição entre métodos | `100-métodos/METODO-GATE-DE-CONGRUENCIA.md` *(gate — tabela de vetos §3)* + `00-core/COMPLIANCE-DE-OUTPUT.md` | **contradição entre métodos resolvida em silêncio** · método carregado que não decidiu nada |

## 4. Desempate interno

- **Criar método ou template** → esta árvore dá a forma (tipo, rota, veto, propagação); **o conteúdo vem da árvore do assunto.**
- **Estado de conta velho** → esta árvore primeiro (antessala), depois CONTA.

---
*Linhas migradas do roteador v1 (R01, R03, R04, R34, R36). Conteúdo integral anterior: `00-core/_legado/ROTEADOR-v1-2026-09-26.md`.*
