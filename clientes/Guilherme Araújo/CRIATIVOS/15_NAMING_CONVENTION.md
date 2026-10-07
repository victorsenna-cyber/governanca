# 15_NAMING_CONVENTION.md
Versão: 1.0 | Criado: 2026-05-24

---

## Princípio de nomenclatura

Todo arquivo, versão e anúncio precisa ser identificável sem abrir o conteúdo.

A nomenclatura evita retrabalho, conflito de versões e confusão durante produção, QA e publicação.

---

## Estrutura de IDs de criativos

**Formato:** `CR-[NNN]`

| Prefixo | Uso |
|---|---|
| CR | Criativo — qualquer formato |

**Exemplos:**
```
CR-001   → primeiro criativo do backlog
CR-002   → segundo criativo
CR-010   → décimo criativo
```

**Regra:** o ID é atribuído no momento do registro em `10_BACKLOG_CRIATIVOS.md`. Nunca reutilizar IDs pausados ou cancelados.

---

## Versionamento de criativos

**Formato:** `CR-[NNN]_v[N]`

| Sufixo | Significado |
|---|---|
| _v1 | Versão original |
| _v2 | Primeira iteração (uma variável mudada) |
| _v3 | Segunda iteração |
| _v2_formato_[tipo] | Teste de formato mantendo hook da v2 |

**Regra:** nunca mudar mais de uma variável entre versões. Registrar a variável alterada em `13_WORKFLOW_ITERACAO.md`.

**Exemplos:**
```
CR-001_v1                    → versão original
CR-001_v2                    → hook iterado (R1 → R2)
CR-001_v3                    → CTA iterado (manteve hook da v2)
CR-001_v2_formato_estatico   → teste de formato com mesmo hook da v2
CR-002_v1                    → segundo criativo, primeira versão
```

---

## Nomenclatura de hooks

**Formato:** `[CATEGORIA][NNN]`

| Prefixo | Categoria |
|---|---|
| R | Reconhecimento |
| D | Dor invisível |
| RF | Reframe |
| A | Autoridade |
| P | Pergunta |
| N | Narrativa pessoal |
| C | Contraste |

**Exemplos:**
```
R1    → Hook de reconhecimento #1
R2    → Hook de reconhecimento #2
D3    → Hook de dor invisível #3
RF1   → Hook de reframe #1
A2    → Hook de autoridade #2
P1    → Hook de pergunta #1
N1    → Hook de narrativa pessoal #1
C1    → Hook de contraste #1
```

**Registro:** todos os hooks estão indexados em `03_HOOKS.md` com seu ID correspondente.

---

## Nomenclatura de arquivos brutos (takes)

**Formato:** `CR-[NNN]_take[NN]_[segmento].[ext]`

| Campo | Uso |
|---|---|
| take[NN] | Número do take (01, 02, 03...) |
| [segmento] | hook / corpo / cta / completo |
| [ext] | mp4 / mov |

**Exemplos:**
```
CR-001_take01_hook.mp4
CR-001_take02_hook.mp4
CR-001_take01_corpo.mp4
CR-001_take01_cta.mp4
CR-001_take03_completo.mp4
```

**Localização:** pasta `assets/brutos/CR-[NNN]/`

---

## Nomenclatura de exports

**Formato:** `CR-[NNN]_v[N]_EXPORT_[AAAAMMDD].[ext]`

**Por formato:**

| Formato | Extensão | Resolução |
|---|---|---|
| Reels (vídeo) | .mp4 | 1080x1920 |
| Estático feed 1:1 | .jpg | 1080x1080 |
| Estático Reels cover | .jpg | 1080x1920 |
| Carrossel (por slide) | .jpg | 1080x1080 |

**Exemplos:**
```
CR-001_v1_EXPORT_20260524.mp4
CR-001_v2_EXPORT_20260531.mp4
CR-003_v1_EXPORT_20260524.jpg
CR-004_v1_s01_EXPORT_20260524.jpg
CR-004_v1_s02_EXPORT_20260524.jpg
CR-004_v1_s07_EXPORT_20260524.jpg
```

**Nota:** para carrossel, adicionar `_s[NN]` antes de `_EXPORT` indicando número do slide.

**Localização:** pasta `assets/exports/CR-[NNN]/`

---

## Nomenclatura de anúncios no Meta Ads

### Campanha

**Formato:** `GA|FUNIL|PRODUTO|OBJETIVO|CANAL|AAAAMMDD`

| Campo | Valores possíveis |
|---|---|
| FUNIL | TOFU / MOFU / BOFU / RMKT |
| PRODUTO | CS / AV / CDC / MI5D / SCRIPT |
| OBJETIVO | TRAFEGO-LP / LEADS-WPP / CONVERSAS-WPP / VENDAS |
| CANAL | META |

**Exemplos:**
```
GA|TOFU|CS|TRAFEGO-LP|META|20260524
GA|MOFU|AV|LEADS-WPP|META|20260601
GA|BOFU|CS|VENDAS|META|20260610
GA|RMKT|CS|CONVERSAS-WPP|META|20260615
```

---

### Conjunto de anúncios

**Formato:** `AS|PRODUTO|PUBLICO|GEO|IDADE|POSICIONAMENTO|AAAAMMDD`

| Campo | Valores possíveis |
|---|---|
| PRODUTO | CS / AV / CDC / MI5D |
| PUBLICO | FRIO / LOOKALIKE / ENGAJAMENTO / LISTA |
| GEO | BR / SP / SUL / NORDESTE |
| IDADE | 25-45 / 30-50 / 18-65 |
| POSICIONAMENTO | AUTO / REELS / FEED / STORIES |

**Exemplos:**
```
AS|CS|FRIO|BR|25-45|REELS|20260524
AS|CS|LOOKALIKE|BR|30-50|AUTO|20260601
AS|AV|ENGAJAMENTO|BR|25-45|AUTO|20260610
```

---

### Anúncio

**Formato:** `AD|ANGULO|CRIATIVO|FORMATO|CTA|AAAAMMDD`

| Campo | Valores possíveis |
|---|---|
| ANGULO | A1 / A2 / A3 / A4 ... (número do ângulo de `02_MATRIZ_ANGULOS.md`) |
| CRIATIVO | CR-001_v1 / CR-002_v1 ... |
| FORMATO | REELS / ESTATICO / CARROSSEL |
| CTA | LP / WPP / GRUPO |

**Exemplos:**
```
AD|A1|CR-001_v1|REELS|LP|20260524
AD|A2|CR-003_v1|ESTATICO|LP|20260524
AD|A3|CR-004_v1|CARROSSEL|WPP|20260601
AD|A1|CR-001_v2|REELS|LP|20260531
```

---

## Nomenclatura de arquivos internos (documentação e logs)

| Tipo | Formato | Exemplo |
|---|---|---|
| Log diário | `YYYY-MM-DD.md` | `2026-05-24.md` |
| Relatório semanal | `SEMANA-YYYY-MM-DD.md` | `SEMANA-2026-05-24.md` |
| Checkpoint | `CHECKPOINT_[NOME]_YYYYMMDD.md` | `CHECKPOINT_PIPELINE_FASE1_20260524.md` |
| Briefing de criativo | `BRIEFING_CR-[NNN]_v[N].md` | `BRIEFING_CR-001_v1.md` |

---

## Status de criativos (para uso no backlog e logs)

| Status | Significado |
|---|---|
| BACKLOG | Identificado, não iniciado |
| PRODUZIR | Priorizado para produção imediata |
| EM PRODUÇÃO | Em algum estágio do pipeline (1–6) |
| AGUARDANDO QA | Edição concluída, checklist pendente |
| APROVADO | QA aprovado, pronto para publicar |
| PUBLICADO | Ativo no Ads Manager |
| TESTAR | Publicado e em fase de coleta de dados |
| ATIVO | Validado — mantendo ou escalando |
| ITERANDO | Em processo de iteração |
| PAUSADO | Fora do ar — dados insuficientes ou fadiga |
| DESCONTINUADO | Encerrado — não retornar sem novo briefing |

---

## Pastas de assets

```
assets/
├── brutos/
│   └── CR-[NNN]/
│       ├── CR-001_take01_hook.mp4
│       └── CR-001_take02_corpo.mp4
├── exports/
│   └── CR-[NNN]/
│       ├── CR-001_v1_EXPORT_20260524.mp4
│       └── CR-001_v2_EXPORT_20260531.mp4
├── depoimentos/
│   └── [nome-cliente]_[data].mp4
└── aprovados/
    └── CR-001_v1_EXPORT_20260524.mp4
```

---

## Regras gerais de nomenclatura

- Nunca usar espaços — usar underscore `_` ou hífen `-`
- Nunca usar acentos ou caracteres especiais em nomes de arquivo
- Data sempre no formato `AAAAMMDD` (8 dígitos, sem separador)
- IDs de criativo sempre com 3 dígitos: `CR-001`, nunca `CR-1`
- Versões sempre com 1 dígito: `_v1`, nunca `_v01`
- Slides sempre com 2 dígitos: `_s01`, `_s07`
- Takes sempre com 2 dígitos: `_take01`
- Nomenclatura de anúncio no Meta Ads usa `|` como separador (padrão da conta GA)

---

## Exemplos completos de um criativo do início ao fim

```
Backlog:          CR-001 | Reels texto | Ângulo 1 | Hook R1 | TOFU
Takes brutos:     CR-001_take01_hook.mp4
Export v1:        CR-001_v1_EXPORT_20260524.mp4
Anúncio:          AD|A1|CR-001_v1|REELS|LP|20260524

Iteração:
Export v2:        CR-001_v2_EXPORT_20260531.mp4
Anúncio v2:       AD|A1|CR-001_v2|REELS|LP|20260531

Teste de formato:
Export estático:  CR-001_v2_formato_estatico_EXPORT_20260607.jpg
Anúncio formato:  AD|A1|CR-001_v2|ESTATICO|LP|20260607
```
