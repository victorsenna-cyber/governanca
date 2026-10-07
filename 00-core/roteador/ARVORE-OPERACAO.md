# ÁRVORE — OPERAÇÃO

> **Tipo:** trilho · **Instituído:** 26/09/2026 (onda 5, `40-operacao-rotinas/AUDITORIA-ROTEAMENTO-2026-09-26.md`) · **Alçada:** Victor
> **Carrega-se quando:** o pedido é **executar e entregar** — tráfego, PDF, diagrama, prazo, rotina, financeiro, retenção, onboarding operacional, infraestrutura, tecnologia.
> **Réguas transversais** (§8 REGRAS Nº 0, 1, 2 · procedência · ordem) **valem aqui e não se repetem.**

---

## 1. Pré-condição

Nenhuma de entrada. ⚠️ **PDF de proposta** carrega a proposta pronta (ESCRITA) — a classe do PDF decide onde a economia aparece, **nunca se ela existe.**

## 2. O processo desta árvore

| Tipo | O que se carrega |
|---|---|
| **framework** | `100-métodos/METODO-CAMADA-DE-VER.md` · `100-métodos/METODO-ESTIMATIVA-DE-CARGA.md` |
| **trilho** | as fases do `100-métodos/METODO-TRAFEGO-PAGO.md` (gate → projeto → objetivo → página → criativo → campanha → tracking → gestão → relatório) |
| **método** | `100-métodos/METODO-TRAFEGO-PAGO.md` |
| **blueprint** | `90-templates/pdf-noturno/` · `90-templates/pdf-continuum/` · `30-comercial/trafego-clientes/<cliente>/` |
| **política** | as três classes de PDF (`90-templates/pdf-noturno/README.md` §3-bis) · pisos e tetos de mídia do tráfego §2.2 |
| **gate** | `00-core/COMPLIANCE-DE-OUTPUT.md` (camada de ver) · gate do método em uso |

## 3. Linhas — sinal → carga → veto

| Sinais | Carga, na ordem do processo | 🔴 Veto |
|---|---|---|
| gestão de tráfego de cliente: plano de mídia, campanha, criativo de anúncio (lado mídia), otimização, escala, relatório, diagnóstico de CPA | `100-métodos/METODO-TRAFEGO-PAGO.md` *(método — abrir por momento)* + `10-skills/gestao-trafego.skill.md` + `30-comercial/trafego-clientes/<cliente>/` | criativo **sem hipótese escrita** · linha de matriz sem os campos obrigatórios |
| "o hook rate está alto e não vende", queda de conversão, fadiga de criativo | `100-métodos/METODO-TRAFEGO-PAGO.md` §7.4 e §4.4 — **diagnóstico de mídia primeiro** | **presumir que a causa é o gancho** · classificar base como vencedora sem o critério da conta |
| tráfego nosso, canais, geração de demanda | `10-skills/heads/head-trafego.skill.md` | — |
| gerar PDF de qualquer artefato, "manda em PDF", material diagramado para fora | 🔴 **CLASSE antes do gerador** (`90-templates/pdf-noturno/README.md` §3-bis): *"como funciona?"* → ESTRUTURA · *"por que eu faria?"* → DECISÃO · *"eu assino?"* → FORMAL — **escolhida pelo ESTADO DO LEITOR** → **classe ESTRUTURA: + `100-métodos/METODO-CAMADA-DE-VER.md`** (o diagrama é o eixo e abre o documento) **+ o exemplar da mesma classe, se existir, antes de gerar do zero** *(replay G4, 26/09: sem isto o roteador novo carregava menos que o antigo)* → gerador: entender = `pdf-noturno/` (HTML) · assinar = `pdf-continuum/` (Markdown, ⚠️ marcado para revisão) | emoji em PDF · diagrama que não seja SVG inline · CSS novo por documento · **PDF de material que não sai da casa** · classe usada para tirar as âncoras da proposta |
| "não estou conseguindo ver", fluxograma, diagrama, BPMN, mapa de processo, cliente que não visualiza, proposta que não entra | `100-métodos/METODO-CAMADA-DE-VER.md` *(framework)* + gate em `00-core/COMPLIANCE-DE-OUTPUT.md` | artefato de decisão **sem diagrama que abre o documento** · matriz no lugar de grafo · sem losango ou sem loop · falha no teste dos 5 segundos |
| "quanto tempo isso leva?", estimar prazo, cronograma, "cabe na semana?", dimensionar entrega | `100-métodos/METODO-ESTIMATIVA-DE-CARGA.md` *(framework — camadas A/B/C)* | **hora nossa em documento que sai da casa** · multiplicador de produção aplicado a colheita ou latência · número em proposta com calibragem `n=1` |
| arquitetura, automação, IA, dados, segurança | `10-skills/c-level/CTO.skill.md` | — |
| processo, entrega, SLA | `10-skills/c-level/COO.skill.md` · **"capacidade estourada" → NEGÓCIO (contratação)** | — |
| cobrança, conciliação, rotina financeira | `10-skills/heads/head-financeiro.skill.md` | — |
| retenção, adoção, churn, health score | `10-skills/heads/head-customer-success.skill.md` | — |
| ativação, kickoff, TTFV, onboarding | `10-skills/heads/head-onboarding-orquestrado.skill.md` | — |
| infraestrutura, VPS, n8n, cybersec | `10-skills/heads/head-ti-cybersec.skill.md` | — |

## 4. Desempate interno

- **Anúncio:** mídia (campanha, verba, CPA) → aqui · texto do anúncio → ESCRITA.
- **Diagrama de proposta:** a proposta é ESCRITA; o diagrama que a abre é daqui — carregar os dois, **ESCRITA primeiro.**

---
*Linhas migradas do roteador v1 (R12–R14, R18, R27, R29–R32, R43, R46, R47). Conteúdo integral anterior: `00-core/_legado/ROTEADOR-v1-2026-09-26.md`.*
