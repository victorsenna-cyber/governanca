# 17_MAPA_DE_ASSETS.md
Versão: 1.0 | Criado: 2026-05-24

---

## Princípio do mapa de assets

Todo material produzido tem rastreabilidade completa: de onde veio, o que gerou, qual foi o resultado, se pode ser reaproveitado.

Sem mapa, o mesmo material é regravado desnecessariamente. Com mapa, vencedores são reaproveitados e aprendizados persistem.

---

## Estrutura de pastas

```
assets/
├── brutos/
│   ├── CR-001/
│   │   ├── CR-001_take01_hook.mp4
│   │   └── CR-001_take02_hook.mp4
│   └── CR-002/
│       └── CR-002_take01_completo.mp4
│
├── depoimentos/
│   ├── [nome-cliente]_[AAAAMMDD]_bruto.mp4
│   └── [nome-cliente]_[AAAAMMDD]_editado.mp4
│
├── exports/
│   ├── CR-001/
│   │   ├── CR-001_v1_EXPORT_20260524.mp4
│   │   └── CR-001_v2_EXPORT_20260531.mp4
│   └── CR-003/
│       └── CR-003_v1_EXPORT_20260524.jpg
│
├── aprovados/
│   └── [cópia dos exports aprovados no QA]
│
└── arquivados/
    └── [assets pausados ou descontinuados]
```

**Regra:** nunca mover da pasta `brutos/` sem registrar o status no mapa. Nunca deletar bruto de criativo ATIVO ou vencedor.

---

## Lifecycle dos assets

```
CAPTURA
  ↓
ORGANIZAÇÃO (nomenclatura + pasta correta)
  ↓
EDIÇÃO (em criativos ativos ou em teste)
  ↓
QA (checklist aplicado)
  ↓
EXPORT (arquivo final)
  ↓
PUBLICAÇÃO (anúncio no Ads Manager)
  ↓
MONITORAMENTO (dados por criativo)
  ↓
DECISÃO: MANTER / ITERAR / PAUSAR
  ↓
REAPROVEITAMENTO ←── se vencedor ou take reaproveitável
  ↓
ARQUIVAMENTO (se pausado ou descontinuado)
```

---

## Status de assets

| Status | Significado | Localização |
|---|---|---|
| BRUTO | Gravado, não editado | `assets/brutos/CR-[NNN]/` |
| EM EDIÇÃO | Em processo de edição | `assets/brutos/CR-[NNN]/` |
| APROVADO | QA concluído, pronto para publicar | `assets/aprovados/` |
| PUBLICADO | Ativo no Ads Manager | `assets/exports/CR-[NNN]/` |
| ATIVO | Publicado e com resultado positivo | `assets/exports/CR-[NNN]/` |
| PAUSADO | Fora do ar — resultados insuficientes | `assets/arquivados/` |
| VENCEDOR | Melhor resultado no ângulo testado | `assets/aprovados/` + marcado no mapa |
| REAPROVEITÁVEL | Take ou trecho reutilizável em outra versão | `assets/brutos/CR-[NNN]/` + marcado |
| ARQUIVADO | Descontinuado — não retorna sem briefing | `assets/arquivados/` |

---

## Sistema de tags

Tags servem para localização rápida. Aplicar ao registrar o asset no mapa.

| Tag | Uso |
|---|---|
| `#vencedor` | Criativo com melhor resultado no ângulo |
| `#hook-aprovado` | Hook que superou benchmark (CTR ≥2%) |
| `#hook-rejeitado` | Hook testado que não performou |
| `#reaproveitavel` | Take ou trecho que pode entrar em outra versão |
| `#depoimento-autorizado` | Depoimento com autorização formal de veiculação |
| `#depoimento-pendente` | Depoimento coletado sem autorização confirmada |
| `#tofu` | Asset para topo de funil |
| `#mofu` | Asset para meio de funil |
| `#bofu` | Asset para fundo de funil |
| `#rmkt` | Asset para remarketing |
| `#camera` | Asset com Guilherme em câmera |
| `#texto-animado` | Asset de texto animado sem câmera |
| `#estatico` | Asset estático |
| `#carrossel` | Asset de carrossel |
| `#fadiga` | Asset pausado por fadiga de audiência |

---

## Tabela mestre de assets

Atualizar esta tabela a cada asset produzido, publicado ou movido de status.

### Vídeos brutos

| ID | Arquivo | Criativo | Data | Take aprovado? | Reaproveitável? | Tags | Observação |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — |

### Takes aprovados para edição

| ID | Arquivo origem | Criativo | Segmento | Versão utilizada | Tags |
|---|---|---|---|---|---|
| — | — | — | — | — | — |

### Exports publicados

| ID | Arquivo | Criativo | Versão | Data publicação | Status | Performance resumida | Tags |
|---|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — | — |

### Depoimentos

| ID | Arquivo | Pessoa | Data | Autorizado? | Criativo derivado | Status | Tags |
|---|---|---|---|---|---|---|---|
| — | — | — | — | SIM / NÃO / PENDENTE | — | — | — |

### Assets de remarketing

| ID | Arquivo | Criativo origem | Ângulo | Público-alvo | Status | Tags |
|---|---|---|---|---|---|---|
| — | — | — | — | — | — | — |

---

## Rastreabilidade: asset → criativo → campanha → performance

Cada asset publicado deve ter registro completo da cadeia:

```
Asset:      CR-001_v1_EXPORT_20260524.mp4
Criativo:   CR-001_v1
Ângulo:     Ângulo 1 — O Teto Invisível
Hook:       R1 — "Você lê cartas há anos..."
Anúncio:    AD|A1|CR-001_v1|REELS|LP|20260524
Conjunto:   AS|CS|FRIO|BR|25-45|REELS|20260524
Campanha:   GA|TOFU|CS|TRAFEGO-LP|META|20260524
Performance:
  CTR link: X%
  LPV rate: X%
  Thumbstop: X%
  CPM: RX,XX
  Gasto total: RX,XX
  Decisão: ATIVO / PAUSADO / ITERADO
```

Registrar na tabela de exports publicados com coluna "Performance resumida".

---

## Critérios de reutilização

Um asset pode ser reaproveitado quando:

| Condição | Critério | O que reaproveitar |
|---|---|---|
| Take com boa entonação no hook | Mesmo se CTR baixo por outro motivo | Trecho de hook para nova versão |
| Ângulo pausado mas com takes de qualidade | Câmera boa, iluminação correta | Usar take em novo ângulo |
| Depoimento com autorização | Independente do criativo original | Qualquer formato de prova social |
| Hook aprovado em texto animado | CTR ≥2% | Reusar texto em versão câmera ou estático |
| Estrutura narrativa validada | LPV ≥40% | Aplicar mesma estrutura em novo ângulo |
| CTA aprovado | CTR + LPV dentro do benchmark | Reusar CTA em outras versões |

**Regra:** ao reutilizar, registrar no campo "Criativo derivado" da tabela de origem.

---

## Critérios de arquivamento

Mover para `assets/arquivados/` quando:

| Condição | Ação |
|---|---|
| Criativo pausado após 2+ iterações sem resultado | Arquivar export — manter bruto |
| Ângulo pausado | Arquivar todas as versões do ângulo |
| Depoimento sem autorização confirmada após 30 dias | Arquivar até autorização |
| Take com problema técnico irrecuperável (áudio, foco) | Arquivar e marcar como rejeitado |
| Criativo com mais de 120 dias fora do ar sem plano de reativação | Arquivar |

**Regra:** nunca deletar bruto de criativo vencedor, mesmo após arquivamento do export.

---

## Fluxo operacional completo

### 1. Captura
- Gravar takes seguindo nomenclatura: `CR-[NNN]_take[NN]_[segmento].mp4`
- Mover para `assets/brutos/CR-[NNN]/`
- Registrar na tabela "Vídeos brutos" (ID, arquivo, data, criativo)

### 2. Organização
- Nomear todos os arquivos conforme `15_NAMING_CONVENTION.md`
- Identificar takes aprovados e rejeitados após seleção
- Marcar takes reaproveitáveis com tag `#reaproveitavel`

### 3. Edição
- Montar criativo conforme briefing e estrutura do `11_PIPELINE_PRODUCAO.md`
- Registrar na tabela "Takes aprovados para edição"

### 4. QA e export
- Aplicar `12_CHECKLIST_QUALIDADE.md`
- Exportar com nomenclatura: `CR-[NNN]_v[N]_EXPORT_[AAAAMMDD].[ext]`
- Mover export para `assets/exports/CR-[NNN]/`
- Mover cópia para `assets/aprovados/` se QA aprovado

### 5. Publicação
- Criar anúncio com nomenclatura do `15_NAMING_CONVENTION.md`
- Registrar na tabela "Exports publicados" (ID, arquivo, data, status inicial)

### 6. Monitoramento
- Atualizar performance na tabela mestre (dia 7)
- Atualizar status: PUBLICADO → ATIVO / PAUSADO / ITERANDO
- Se iterando: criar nova versão e atualizar tabela com "Criativo derivado"

### 7. Reaproveitamento
- Identificar assets com tag `#reaproveitavel` ou `#hook-aprovado`
- Registrar novo uso em novo briefing (`CR-[NNN]_v[N]`)
- Atualizar campo "Criativo derivado" no asset origem

### 8. Arquivamento
- Quando critério de arquivamento atingido: mover export para `assets/arquivados/`
- Manter bruto em `assets/brutos/`
- Atualizar status para ARQUIVADO na tabela mestre
- Registrar aprendizado em `13_WORKFLOW_ITERACAO.md`

---

## Estado atual dos assets (início do sistema)

| ID | Criativo | Formato | Status | Tags | Observação |
|---|---|---|---|---|---|
| CR-001 | Reels texto animado | Ângulo 1 | PRODUZIR | #tofu #texto-animado | Nenhum material bruto ainda |
| CR-002 | Reels câmera | Ângulo 3 | PRODUZIR | #tofu #mofu #camera | Aguarda disponibilidade Guilherme |
| CR-003 | Estático | Ângulo 2 | PRODUZIR | #tofu #mofu #estatico | Nenhum material bruto ainda |
| CR-004 | Carrossel | Ângulo 5 | PRODUZIR | #tofu #mofu #carrossel | Ativar após validar fase 1 |
| CR-005 | Reels câmera | Ângulo 9 | IDEIA | #mofu #bofu #camera | Guilherme em câmera obrigatório |
| CR-006 | Reels depoimento | Ângulo 10 | IDEIA | #mofu #bofu #camera | Depoimento autorizado pendente — #depoimento-pendente |
| CR-007 | Estático BOFU | Ângulo 11 | IDEIA | #bofu #estatico | Aguarda pixel com eventos de conversão |
| CR-008 | Estático RMKT | Ângulo 12 | IDEIA | #rmkt #estatico | Aguarda 500+ PageViews únicos |
| CR-009 | Carrossel | Ângulo 13 | IDEIA | #tofu #mofu #carrossel | — |
| CR-010 | Reels educativo | Ângulo 7 | IDEIA | #tofu #camera | Usar com segmentação Constelação Familiar |

---

## Convenção operacional

- A tabela mestre é a fonte de verdade — atualizar a cada mudança de status
- Nunca publicar sem registrar na tabela
- Nunca arquivar sem registrar aprendizado em `13_WORKFLOW_ITERACAO.md`
- Nunca reusar asset sem registrar o criativo derivado na tabela origem
- Depoimento só entra em publicação com campo "Autorizado = SIM"
- Vencedores são marcados com `#vencedor` e ficam em `assets/aprovados/` permanentemente
