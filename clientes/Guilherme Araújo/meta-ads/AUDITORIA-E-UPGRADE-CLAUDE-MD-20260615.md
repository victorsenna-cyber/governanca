# AUDITORIA DO CLAUDE.md + PLANO DE UPGRADE — Projeto Guilherme Araújo

Data: 2026-06-15
Escopo: `CLAUDE.md` (544 linhas) confrontado com a operação real em `meta-ads/`, `CRIATIVOS/`, `01 - Criativos/` e o `CONTEXTO_NEGOCIO_GUILHERME.md`.

---

## 1. DIAGNÓSTICO

### Problema real
O CLAUDE.md é forte em **doutrina** (copy, condução emocional, sistema criativo, funil), mas está **defasado em relação à operação real**. A conta já evoluiu de TOFU/tráfego para MOFU/Conversas WhatsApp, tem pixel treinado e 4,1k ViewContent acumulado — mas o CLAUDE.md ainda descreve um projeto em fase inicial e prescreve rotinas que **não estão sendo seguidas** porque não cabem nas limitações reais da conta.

### Impacto no negócio
Um CLAUDE.md desalinhado gera três custos: (1) o agente recomenda ações que a conta não suporta (ex.: pedir dados de conversa que a API não devolve), (2) rituais "obrigatórios" são ignorados e viram letra morta, corroendo a confiança no sistema, (3) decisões estratégicas (RMKT, OUTCOME_SALES) ficam sem gatilho claro porque o documento não acompanhou o estágio do funil.

---

## 2. ARQUITETURA — O que foi auditado

| Item | Doutrina (CLAUDE.md) | Realidade observada | Veredicto |
|---|---|---|---|
| Naming objetivo WhatsApp | Mistura `LEADS-WPP` e `CONVERSAS-WPP` nos exemplos | Campanha real usa `CONVERSAS-WPP` | ⚠️ Inconsistente |
| Rotina diária (`logs/`) | "Diário" obrigatório | 1 único log (23/05); resto virou `CHECKPOINT_MONITORAMENTO_*` | 🔴 Não cumprida |
| Rotina semanal (`relatorios/`) | `SEMANA-YYYY-MM-DD.md` obrigatório | Pasta `relatorios/` **vazia** | 🔴 Nunca executada |
| Pasta `CRIATIVOS/` | "Não criar agora, salvo se solicitado" | Já existe com 18 arquivos estruturados | 🔴 Desatualizado |
| Limitações da conta | Não documentadas no CLAUDE.md | Budget R$25/dia, MCP sem creatives/audiences, sem Lead Gen ToS | 🔴 Ausente |
| Pixel / eventos | Não mencionado | Pixel treinado, 5 eventos, EMQ 6.1 | 🔴 Ausente |
| Estágio do funil | Projeto inicial (campanhas 1/2/3) | MOFU ativo, RMKT/BOFU inexistente apesar de 4,1k VC | ⚠️ Gap estratégico |
| Divisão de modelo | "Opus 4.7 / Sonnet 4.6" | Modelos hoje: Opus 4.8, Sonnet 4.6 | ⚠️ Nomenclatura velha |
| Integrações (CRM, n8n, ClickUp) | "Desejadas" | Nenhuma evidência de conexão ativa | ⚠️ Aspiracional, sem status |

### O que está BOM e deve ser preservado
- Formato obrigatório de resposta (DIAGNÓSTICO → ARQUITETURA → ... → OTIMIZAÇÃO). Útil e usado.
- Política de copy para temas sensíveis (linguagem contextual). Crítico e correto.
- Regras de corte/escala. Operacionais e claras.
- Ações que exigem confirmação + formato `executar`. Segurança essencial — manter.
- Sistema de condução emocional e princípios de comunicação. Diferencial do negócio.

---

## 3. FLUXO OPERACIONAL — Ordem do upgrade

1. Corrigir inconsistências factuais (naming, modelos, pasta CRIATIVOS).
2. Adicionar bloco "Estado real da conta" (linkando para `00_CONTEXTO_GERAL_META_ADS.md` como fonte viva).
3. Reconciliar as rotinas: substituir a ficção do "log diário" pelo ritual que de fato acontece (checkpoints de monitoramento) + tornar o semanal realista.
4. Adicionar limitações conhecidas da conta como seção de primeira ordem.
5. Adicionar gatilhos de decisão estratégica por estágio de funil (quando migrar p/ OUTCOME_SALES, quando abrir RMKT).
6. Marcar integrações como roadmap com status, não como obrigação.

---

## 4. EXECUÇÃO ETO

### ESTRATÉGICO
Transformar o CLAUDE.md de "manifesto aspiracional" em **documento operacional vivo**: tudo que ele prescreve deve ser executável na conta real e refletir o estágio atual do funil.

### TÁTICO — Mudanças propostas (seção a seção)

**A. NAMING — padronizar token WhatsApp**
Definir token único: `CONVERSAS-WPP` para objetivo Engajamento/Conversas, `LEADS-WPP` apenas para Lead Gen real (formulário). Corrigir todos os exemplos.

**B. Nova seção: ESTADO REAL DA CONTA (fonte: 00_CONTEXTO_GERAL_META_ADS.md)**
- Conta: CA 01 (605257748612701) | Business: terapeutaguilhermearaujo (507655071209387)
- Página: 103620069213113
- Pixel: 1259363302489132 (Pixel Exponencial) — PageView/ViewContent/InitiateCheckout/AddPaymentInfo/Purchase
- Regra: o CLAUDE.md aponta para o `00_CONTEXTO_GERAL` como fonte de verdade do estado; não duplicar números que mudam.

**C. Nova seção: LIMITAÇÕES CONHECIDAS DA CONTA**
- Budget máximo operacional: R$25/dia (não recomendar estruturas que fragmentem além do que R$25 sustenta).
- MCP não retorna: creatives, ad_images, ad_videos, custom_audiences (consultar via `ads_get_ad_account_custom_audiences` direto funciona — atualizar essa nota, pois HOJE retornou 25 audiences).
- Dados de conversa WhatsApp (`messaging_conversation_started`) não vêm via API → verificação manual no Ads Manager é etapa obrigatória do ritual.
- Lead Gen ToS não aceito → campanhas de formulário exigem aceite prévio.

**D. RECONCILIAR ROTINA OPERACIONAL (a maior correção)**
Substituir o "log diário obrigatório" (que não acontece) por:
- **Monitoramento por checkpoint** (formato real já em uso: `CHECKPOINT_MONITORAMENTO_META_ADS_YYYYMMDD_HHMM.md`), cadência realista (a cada veiculação relevante, não necessariamente todo dia).
- **Log diário** vira **opcional**, só em dias de mudança ativa (criação/pausa/ajuste).
- **Semanal**: manter, mas com gatilho realista — só quando houver ≥7 dias de dados novos. Apontar para `relatorios/` e reconhecer que está vazia (dívida a quitar).

**E. Atualizar bloco "Divisão estratégia/execução"**
Trocar "Opus 4.7" por "Opus 4.8" (modelo atual). Manter o princípio (estratégia em Opus, execução em Sonnet).

**F. Atualizar bloco "Estrutura da pasta de criativos"**
Remover "não criar agora" — a pasta `CRIATIVOS/` já existe com 18 arquivos. Listar a estrutura real e apontá-la como ativa.

**G. Nova seção: GATILHOS DE DECISÃO POR FUNIL**
- Migrar p/ OUTCOME_SALES quando: pixel treinado (✅ já) + ≥50 InitiateCheckout/semana.
- Abrir RMKT/BOFU quando: audiência ViewContent ≥ 1.000 (✅ já tem 4,1k) → **gatilho já satisfeito, ação pendente**.
- Escalar verba: só após validar conversa qualificada no WhatsApp (não por CTR isolado).

**H. INTEGRAÇÕES → roadmap com status**
Transformar a lista "desejadas" numa tabela com status (CRM: não conectado / n8n: não conectado / ClickUp: MCP disponível, não usado / Planilha-Supabase: não conectado). Sem status, viram promessa vazia.

### OPERACIONAL
- Eu reescrevo o CLAUDE.md aplicando A–H (edição exige sua confirmação, pois altera estrutura ativa do projeto).
- Crio `relatorios/SEMANA-2026-06-15.md` para quitar a dívida do ritual semanal (com os dados reais da MOFU dos últimos 7 dias).

---

## 5. MÉTRICAS — Como saber se o upgrade funcionou

| KPI do documento | Antes | Meta pós-upgrade |
|---|---|---|
| Rituais prescritos que são de fato executados | ~30% | 100% (porque serão realistas) |
| Ações recomendadas executáveis na conta | parcial | 100% (limitações documentadas) |
| Tempo até decisão estratégica (RMKT/SALES) | indefinido | gatilho objetivo no doc |
| Divergências factuais (naming, modelo, pastas) | 4+ | 0 |

---

## 6. RISCOS

1. **Reescrever demais e perder a alma do documento** → preservar integralmente as seções de copy, condução emocional e confirmação. Mexer só no que está factualmente errado ou morto.
2. **Documentar números voláteis no CLAUDE.md** → estado da conta fica em `00_CONTEXTO_GERAL` (fonte viva); CLAUDE.md só referencia.
3. **Rotina ainda não ser seguida mesmo após realista** → vincular checkpoint ao momento de mudança, não a calendário rígido.

---

## 7. OTIMIZAÇÃO — Evolução futura

- Versionar o CLAUDE.md (cabeçalho com versão + data, igual ao `00_CONTEXTO_GERAL` v2.1).
- Quando CRM/n8n conectarem, mover do roadmap para rotina automática.
- Revisão trimestral do CLAUDE.md contra o estado real da conta.

---

## PRÓXIMA AÇÃO — Aguardando confirmação

Auditoria concluída e salva. Aplicar o upgrade altera estrutura ativa do projeto, então sigo a regra de confirmação:

```
AÇÃO PROPOSTA: Reescrever CLAUDE.md aplicando os pontos A–H (preservando integralmente copy, condução emocional, regras de corte/escala e protocolo de confirmação). Salvar versão anterior como CLAUDE.md.bak-20260615.
IMPACTO ESPERADO: Documento alinhado à conta real, rituais executáveis, gatilhos de decisão claros.
RISCO: Baixo — backup preserva a versão atual; nenhuma campanha é tocada.
COMO REVERTER: Restaurar CLAUDE.md.bak-20260615.
CONFIRMAR COM: executar
```

Quer que eu já gere também o `relatorios/SEMANA-2026-06-15.md` (ritual semanal atrasado) junto com a reescrita?
