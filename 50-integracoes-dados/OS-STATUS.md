# OS-STATUS.md — Estado do Continuum OS (escrito pelo sistema)

> **Tipo:** estado (camada 3) · **Dono da escrita: o sistema auditor (tasks Codex no Continuum OS). Humanos leem, não editam** (exceção: coluna Resposta em §4).
> Função: introjetar o estado do OS na governança sem carregar contexto técnico. Leitura no ritual de segunda junto com `STATUS.md`.

## 0. Contrato de atualização (instrução permanente para o sistema que escreve)

1. **Sobrescrever** §1, §2 e §3 a cada execução auditada; **acrescentar** 1 linha em §5 (manter só as últimas 10).
2. Formato: dado antes de prosa · timestamps `AAAA-MM-DD HH:MM` · máximo 3 linhas no resumo (§3) · zero jargão que o ritual de segunda não entenda · o que não foi medido fica `a calibrar`, nunca estimado como fato.
3. §4 (HOOKS) é o canal de volta: quando o OS precisar de decisão, política ou dado da governança, abre linha com ID sequencial. A governança responde na coluna Resposta (ou em `STATUS.md`, referenciando o ID). O sistema não fecha hook sem resposta registrada.
4. Fontes que este arquivo referencia e não duplica: termos de scraping em `30-comercial/prospeccao-sites/termos-places-icp.md` · metas em `STATUS.md` §2 · gates do produto em `STATUS.md` §5.
5. Falha de execução também é status: registrar em §2/§5 com causa curta. Execução sem registro aqui = execução que não existiu para a governança.

---

## 1. Snapshot do OS

| Campo | Valor |
|---|---|
| Atualizado em | `2026-07-15 16:25 BRT` |
| Fase do produto | Fase 6 (persistência Supabase) — conferir `PROJECT.md` §6 |
| Deploy / saúde | `cos_cos-api` 1/1 na VPS no pré-check da execução |
| Módulo scraping→CRM | operacional — Google Places → Supabase → Twenty CRM |

## 2. Scraping → CRM (última execução)

| Campo | Valor |
|---|---|
| Executado em | `2026-07-15 16:14–16:20 BRT` — job `places_sc_holistico_20260715_03842b58` |
| Termos rodados (ref. termos-places-icp.md) | Tier 1: terapeuta holística; terapias holísticas; espaço holístico/terapêutico; centro de terapias holísticas; taróloga/tarot; leitura de tarot; baralho cigano; cartomante; reiki; terapias integrativas. Meta atingida antes do Tier 2. |
| Cidades cobertas | Florianópolis · São José · Palhoça · Biguaçu |
| Leads coletados / qualificados (sem site) / sincronizados no CRM | `1.065` candidatos Places / `148` sem site identificados / `144` novos leads persistidos e sincronizados (144 empresas + 144 pessoas + 144 oportunidades) |
| Duplicados descartados · erros | `453` candidatos já conhecidos por `place_id` pulados antes de Details; dedupe de telefone aplicado; `0` falhas de sync CRM |

## 3. Resumo executivo (máx. 3 linhas, escrito pelo sistema)

Meta de 144 leads sem site e operacionais atingida para o ICP holístico da grande Floripa.
Foram usadas 68 buscas e 388 consultas de Details; Tier 2 não foi necessário.
Nenhuma mensagem ou evento de outreach foi criado; a rodada foi somente research → CRM.

## 4. HOOKS → governança (decisões que o OS precisa daqui)

| ID | Data | Pedido do sistema | Resposta da governança | Status |
|---|---|---|---|---|
| — | — | Nenhuma decisão necessária nesta execução | — | fechado |

## 5. Log das últimas execuções (rolling, máx. 10)

| Data | Ação | Resultado em 1 linha |
|---|---|---|
| 2026-07-13 | criação do arquivo (governança) | esqueleto e contrato definidos; aguardando 1ª escrita do sistema |
| 2026-07-15 | scraping holístico grande Floripa → CRM | 144 novos leads sem site e operacionais sincronizados; zero outreach e zero falha de CRM |

## 6. Infra — renovações recorrentes (persistente, fora do ciclo de sobrescrita do §0.1)

| Item | Valor | Vencimento recorrente | Última renovação | Impacto se cair |
|---|---:|---|---|---|
| VPS do CRM (`cos_cos-api`) | **R$ 196,99** | **`a calibrar`** — data não registrada em nenhum arquivo do repo em 31/08/2026 | renovação decidida em 17/07/2026, com reserva da venda Jéssica (`STATUS.md` §13) · **pagamento não confirmado por escrito** | scraping→CRM e o sistema de prospecção em massa param |

> **Como calibrar:** a data sai da fatura/painel do provedor. Enquanto ela não for registrada aqui, a obrigação é invisível para o calendário financeiro e reaparece como surpresa — foi assim que a VPS venceu antes. Fecha a metade "registrar data de vencimento recorrente" da pendência `STATUS.md` §13; a metade "confirmar pagamento" segue aberta.

---
*Criado 2026-07-13 pela governança. A partir da 1ª execução auditada, a escrita é exclusiva do sistema, sob o contrato do §0. §6 é bloco persistente da governança e não entra no ciclo de sobrescrita.*
