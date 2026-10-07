# CHECKPOINT — PIPELINE CRIATIVO FASE 3A
Timestamp: 2026-05-24 | Status: CONCLUÍDO

---

## Arquivos criados nesta sessão

| Arquivo | Conteúdo | Status |
|---|---|---|
| CRIATIVOS/15_NAMING_CONVENTION.md | Nomenclatura completa: criativos, versões, hooks, takes, exports, anúncios Meta Ads, assets, status, pastas | CRIADO |
| CRIATIVOS/16_PROCESSO_TESTES.md | Ordem de testes, isolamento de variável, KPIs, hipóteses, critérios de corte e vitória, cadência, checklists, tabela de decisão | CRIADO |

---

## O que cada arquivo cobre

### 15_NAMING_CONVENTION.md

Sistema completo de nomenclatura:

| Bloco | Conteúdo |
|---|---|
| IDs de criativos | CR-[NNN] — 3 dígitos, sequencial, sem reutilização |
| Versionamento | CR-001_v1 → v2 → v3 — uma variável por versão |
| Hooks | Prefixo por categoria: R / D / RF / A / P / N / C |
| Takes brutos | CR-001_take01_hook.mp4 |
| Exports | CR-001_v1_EXPORT_20260524.mp4 / _s01_ para carrossel |
| Campanha Meta | GA\|FUNIL\|PRODUTO\|OBJETIVO\|CANAL\|AAAAMMDD |
| Conjunto Meta | AS\|PRODUTO\|PUBLICO\|GEO\|IDADE\|POSICIONAMENTO\|AAAAMMDD |
| Anúncio Meta | AD\|ANGULO\|CRIATIVO\|FORMATO\|CTA\|AAAAMMDD |
| Status | 11 estados de ciclo de vida: BACKLOG → PUBLICADO → ATIVO → PAUSADO |
| Pastas | assets/brutos / exports / depoimentos / aprovados |

### 16_PROCESSO_TESTES.md

Sistema operacional de testes:

| Bloco | Conteúdo |
|---|---|
| Ordem de testes | Hook → Ângulo → Estrutura → Formato → CTA → Visual → Oferta |
| Isolamento | Tabela: o que muda vs. o que permanece por tipo de teste |
| KPIs por teste | Thumbstop / CTR / LPV / Retenção — por variável testada |
| Hipótese | Formato padronizado com 7 campos obrigatórios |
| Critérios de corte | 5 condições com ação correspondente |
| Critérios de vitória | Benchmarks por variável (CTR ≥2%, LPV ≥40%, thumbstop ≥30%) |
| Cadência | Dias 1–3 / 3–5 / 7 / 14 — sem decisão antes do critério |
| Checklist pré-teste | 12 itens obrigatórios antes de ativar |
| Checklist pós-teste | 9 itens obrigatórios ao encerrar |
| Tabela de decisão | 7 cenários: vencedor / iterar CTA / auditar LP / iterar hook / cortar / aguardar |
| Registro de teste | Formato padrão com resultado dia 7 e aprendizado |

---

## Estado atual do sistema CRIATIVOS/

| # | Arquivo | Camada | Status |
|---|---|---|---|
| 00 | ESTRATEGIA_CRIATIVA.md | Fundação estratégica | ✓ |
| 01 | PILARES.md | Pilares narrativos | ✓ |
| 02 | MATRIZ_ANGULOS.md | Ângulos estratégicos | ✓ |
| 03 | HOOKS.md | Sistema de hooks | ✓ |
| 04 | REELS.md | Execução Reels | ✓ |
| 05 | CARROSSEIS.md | Execução Carrosséis | ✓ |
| 06 | ESTATICOS.md | Execução Estáticos | ✓ |
| 07 | TESTES.md | Sistema de testes | ✓ |
| 08 | CTA_E_CONDUCAO.md | CTA e transição | ✓ |
| 09 | OTIMIZACAO.md | Otimização e escala | ✓ |
| 10 | BACKLOG_CRIATIVOS.md | Backlog operacional | ✓ |
| 11 | PIPELINE_PRODUCAO.md | Pipeline 9 estágios | ✓ |
| 12 | CHECKLIST_QUALIDADE.md | QA 56 critérios | ✓ |
| 13 | WORKFLOW_ITERACAO.md | Decisão pós-dado | ✓ |
| 14 | PADRAO_VISUAL.md | Padrão visual | ✓ |
| 15 | NAMING_CONVENTION.md | Nomenclatura completa | ✓ |
| 16 | PROCESSO_TESTES.md | Processo de testes | ✓ |

---

## Arquivo restante (Fase 3B — quando solicitado)

| # | Arquivo | Função |
|---|---|---|
| 17 | MAPA_DE_ASSETS.md | Inventário de vídeos brutos, depoimentos, hooks aprovados, criativos ativos, pausados e vencedores |

---

## Pendências críticas (ainda abertas)

| Pendência | Impacto | Ação necessária |
|---|---|---|
| URL dos anúncios ativos não verificada | Tráfego pode estar indo para perfil | Verificar no Ads Manager |
| Pixel sem eventos de conversão | BOFU e RMKT bloqueados | Configurar ViewContent, InitiateCheckout, Purchase |
| H1 da LP desalinhado com ICP | Atrito nos primeiros 3s de página | Editar LP |
| Guilherme disponível para filmagem | CR-002 e CR-005 bloqueados | Agendar produção |
| Depoimento autorizado | CR-006 bloqueado | Coletar autorização |

---

## Próximos passos recomendados

### Imediato
1. Verificar URL dos anúncios ativos no Ads Manager
2. Corrigir H1 da LP
3. Configurar eventos de pixel (ViewContent, InitiateCheckout, Purchase)

### Produção CR-001 (primeira rodada)
4. Executar Estágio 1 (Briefing) do `11_PIPELINE_PRODUCAO.md`
5. Nomenclatura: `CR-001_v1` / anúncio: `AD|A1|CR-001_v1|REELS|LP|20260524`
6. Aplicar `12_CHECKLIST_QUALIDADE.md` antes de exportar
7. Ativar com R$25/dia — monitorar conforme cadência do `16_PROCESSO_TESTES.md`

### Fase 3B do sistema (quando solicitado)
- Criar `17_MAPA_DE_ASSETS.md`
