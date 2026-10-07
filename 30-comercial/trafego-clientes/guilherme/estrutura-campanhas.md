# ESTRUTURA DE CAMPANHAS — Guilherme Araújo

> **Tipo:** estado (camada 3) · Escrito em 29/07/2026 · Método §5–§6
> **Modo: MUTAÇÃO EXTERNA EXECUTADA em 29/07/2026**, sob autorização humana explícita de Victor (*"faça a campanha"*). **Campanha e 2 conjuntos criados, todos PAUSADOS.** Ativar é ato humano separado.
> **Anúncio NÃO criado** — bloqueio de permissão da Meta (`instagram_media_id` não liberado). Passo manual em `PENDENCIAS.md` §2.

## 0. O que existe na conta agora (IDs reais)

| Entidade | Nome | ID | Estado |
|---|---|---|---|
| Campanha | `GA\|TOFU\|VIVER-DE-TERAPIA\|ENGAJAMENTO\|META\|20260729` | **120254286988070210** | PAUSED |
| Conjunto 1 — **foco SC** | `AS\|VIVER-TERAPIA\|FOCO-SC\|25-65\|20260729` | **120254286988250210** | PAUSED · **R$ 14,00/dia** |
| Conjunto 2 — Brasil amplo | `AS\|VIVER-TERAPIA\|BRASIL-AMPLO\|25-65\|20260729` | **120254287015760210** | PAUSED · **R$ 6,00/dia** |
| Anúncio | `AD\|REEL-VIVER-TERAPIA-CARTAS\|PUB-EXISTENTE\|20260729` | — | **não criado — GATE-8** |

Ambos os conjuntos: `OUTCOME_ENGAGEMENT` / `POST_ENGAGEMENT` · cobrança por impressão · lance maior volume · `destination_type ON_POST` · Instagram apenas (feed, reels, explorar, perfil) · mobile · 25–65 como sugestão sob Advantage+ Audience · **sem restrição de gênero**.

**Rollback:** excluir os dois conjuntos e a campanha. Nada foi ativado, nenhuma verba gasta, nenhuma campanha legada tocada.

---

## 1. Checklist de subida (tudo verde antes do 1º real)

| # | Item | Estado |
|---|---|---|
| 1 | Página aprovada (§3) | **N/A** — destino é o post existente, não há site no caminho. Registrado como exceção justificada. |
| 2 | Pixel + CAPI, EMQ ≥ 7 | **N/A nesta campanha** — conversão é on-platform. Pixel do Guilherme segue `A VALIDAR` (H-01) e continua bloqueando campanhas de venda. |
| 3 | Eventos testados no Events Manager | **N/A** — evento é nativo (comentário/engajamento). |
| 4 | UTMs padrão | **N/A** — sem clique para fora. |
| 5 | Cap de gasto mensal configurado | ☐ **R$ 600 — a configurar antes de ativar** |
| 6 | Fonte de verdade (planilha de social selling) | ☐ **GATE-3 — não existe. Bloqueia o relatório, não a subida.** |
| 7 | Meta do mês assinada pelo cliente | ☐ **PENDENTE** — `PLANO-DE-MIDIA.md` §2 |
| 8 | Permissão do IG como ativo publicitário | ☑ **RESOLVIDO 29/07/2026** — IG liberado: `17841456176956487` / `@professorguilhermearaujo`. Reel resolvido: media ID **`17986328897848935`**. |
| 9 | Meio de pagamento ativo na conta | ☐ a confirmar (conta parada desde ~28/07) |

## 2. Spec da campanha

**Nomenclatura:** mantida a convenção já vigente na conta (`GA|FUNIL|PRODUTO|OBJETIVO|CANAL|DATA`) em vez da do método §5.5. **Exceção registrada:** trocar o padrão agora quebraria a comparabilidade com os 30 dias de histórico. Todos os elementos exigidos pelo §5.5 estão presentes, em outra ordem.

### Campanha

| Campo | Valor |
|---|---|
| Nome | `GA\|TOFU\|VIVER-DE-TERAPIA\|ENGAJAMENTO\|META\|20260729` |
| Objetivo | `OUTCOME_ENGAGEMENT` |
| Estratégia de verba | **ABO** (verba no conjunto) — necessária para leitura geográfica comparativa; CBO sufocaria um dos dois lados |
| Categorias especiais | `[]` |
| Estado ao criar | **PAUSED** (ativação é ato humano separado) |

### Conjunto 1 — FOCO SC (prioritário, 70% da verba)

| Campo | Valor |
|---|---|
| Nome | `AS\|VIVER-TERAPIA\|FOCO-SC\|25-65\|20260729` · ID `120254286988250210` |
| Verba | **R$ 14,00/dia** |
| Geo | **região Santa Catarina** (`regions: [{key: "459"}]`) · `location_types: [home, recent]` |
| Idade / gênero | 25–65 (sugestão sob Advantage+ Audience) · **sem restrição de gênero** |
| Público | broad, `advantage_audience: 1`. Sem interesses, sem lookalike. |
| Plataforma | `instagram` · `stream, reels, explore, explore_home, profile_feed` · mobile |

**Nota sobre a geografia pedida.** O Guilherme especificou *"região de Floripa, região continental, região metropolitana, mais a leste de SC"*. Subimos **o estado inteiro de SC**, por duas razões: (a) refinar por cidade exige as chaves numéricas de cada município, que não se inventam e precisam ser buscadas na interface; (b) a população de SC está concentrada justamente na faixa leste — Grande Florianópolis, Itajaí/Balneário, Joinville, Blumenau, Criciúma — então a entrega vai naturalmente para lá sem precisarmos forçar. **Se depois de 6 dias o oeste aparecer consumindo verba, aí sim vale recortar por cidade.** Decisão registrada como calibrável, não como definitiva.

### Conjunto 2 — Brasil amplo (30% da verba)

| Campo | Valor |
|---|---|
| Nome | `AS\|VIVER-TERAPIA\|BRASIL-AMPLO\|25-65\|20260729` · ID `120254287015760210` |
| Verba | **R$ 6,00/dia** |
| Geo | país **BR**, **sem exclusão de SC** — decisão de Victor em 29/07/2026 |
| Demais campos | idênticos ao Conjunto 1 (a única variável isolada é a geografia) |

**Por que não excluir SC deixou de ser problema.** Na versão anterior deste plano os dois conjuntos tinham R$ 10/dia cada e a exclusão era obrigatória — dois conjuntos de peso igual disputando os mesmos usuários de Floripa inflam o CPM um do outro e destroem a comparação. **Ao inverter o split para 70/30, o risco praticamente desaparece:** o conjunto Brasil tem verba pequena e alcance nacional, então a chance de ele encontrar o mesmo usuário catarinense que o conjunto de R$ 14/dia está perseguindo é estatisticamente baixa. SC é ~3,5% da população do país; com R$ 6/dia diluídos em 100%, a sobreposição real é ruído.

**O que isso custa, dito com honestidade:** a comparação SC vs. Brasil fica **direcional, não limpa** — o "Brasil" inclui SC. Se o teste da astrocartografia (`METAS.md` §5) der resultado na faixa inconclusiva, essa contaminação é uma das causas possíveis, e o ciclo 2 repete o teste com exclusão.

### Anúncio (ambos os conjuntos)

| Campo | Valor |
|---|---|
| Nome | `AD\|REEL-VIVER-TERAPIA-CARTAS\|PUB-EXISTENTE\|20260729` |
| Criativo | **publicação existente** — Reel `instagram.com/reel/DbWIZhgMqFo` → **`ig_media_id = 17986328897848935`** · IG do anúncio: **`17841456176956487`** (`@professorguilhermearaujo`) · legenda: *"Comente aqui a sua escolha"* · publicado 28/07/2026 · orgânico atual: **3 comentários, 5 curtidas** |
| Botão de CTA | **sem botão** |
| Melhorias padrão (Advantage+ creative) | `OPT_OUT` |

**Por que sem botão:** o pedido é comentário → DM → call. Um botão "Enviar mensagem" atalha o comentário e mata justamente o ativo que interessa — a prova social pública acumulando embaixo do post. O comentário é o produto desta campanha.

**Por que publicação existente e não vídeo novo:** o Reel já tem engajamento orgânico. Anúncio de publicação existente empilha os comentários pagos **no mesmo post**, somando prova social; um criativo novo (dark post) abre uma sala de comentários paralela que ninguém vê organicamente.

## 3. Mapa vivo

| Campanha | Canal | Objetivo/evento | Conjuntos | Criativos | Verba/dia | Estágio | Desde |
|---|---|---|---|---|---|---|---|
| `GA\|TOFU\|VIVER-DE-TERAPIA\|ENGAJAMENTO\|META\|20260729` | Meta/IG | ENGAGEMENT / post_engagement | 2 (BR-exc-SC · Floripa-RM) | 1 (pub. existente) | R$ 20 | **não criada** | — |

### Legado na conta (verificado 29/07/2026) — todas PAUSADAS, manter pausadas

| Campanha | Objetivo | Decisão |
|---|---|---|
| `GA\|MOFU\|CS-PERM\|CONVERSAS-WPP\|META\|20260619` | ENGAGEMENT/REPLIES | manter pausada — frequência 4,18, público quente esgotado |
| `GA\|TOFU\|CS\|TRÁFEGO-IG\|META\|20260619` | LINK_CLICKS | manter pausada — **CTR 5,61%, melhor criativo/público da conta; candidata nº 1 ao próximo ciclo** |
| `GA\|FUFU\|CONVERSAS-WPP\|META\|20260619` | ENGAGEMENT | manter pausada — origem do R$ 0,68/comentário; substituída por esta rodada |
| 10 campanhas anteriores (abr–jun) | diversos | arquivo; não reativar |

## 4. Rastreio do funil (substitui o §6 de tracking quando não há site)

Não há pixel no caminho, então a fonte de verdade é humana e **precisa existir antes do relatório**:

`data · @ do comentário · conjunto (BR ou Floripa) · respondi a DM? (s/n) · virou conversa? · call agendada? · compareceu? · vendeu? · valor`

Sem estas colunas, no dia 30 sabemos quantos comentários compramos e **não sabemos quanto dinheiro entrou** — que é a única manchete que o método aceita (§8).

## 5. Atribuição (travada)

Janela **7d clique / 1d visualização**, definida em 29/07/2026. Comentário e engajamento são eventos de plataforma; venda é atribuída **manualmente**, pela planilha, não pela Meta. Não mudar no meio de comparações.

---
*Base: `PLANO-DE-MIDIA.md` · `BRIEFING.md` · `METODO-TRAFEGO-PAGO.md` §5–§6 · conta act_605257748612701 verificada por API em 29/07/2026.*
