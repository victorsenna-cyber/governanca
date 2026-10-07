# AUDITORIA PRÉ-SUBIDA — FUNIL INSTAGRAM GUILHERME ARAÚJO

> STATUS: AUDITORIA · não autoriza subida, verba nem ativação
> Data: 2026-08-18 · America/Sao_Paulo
> Escopo: briefing de campanhas, briefing de carrosséis, criativos exportados `C01`–`C06`, estado real da conta de anúncio
> Modo: AUDITORIA (falha + correção + decisão)
> Mutação externa: **nenhuma**. Toda leitura da conta Meta foi somente leitura.

---

## 0. Núcleo executivo

**Problema central.** O briefing foi escrito contra um mapa da conta que estava desatualizado. Agora que a conta foi lida, três premissas do documento caem e duas se confirmam com número.

**Gargalo dominante.** Não é criativo nem copy. É **volume de público morno**: os retargetings que sustentam as campanhas 2 e 3 somam entre 3.500 e 4.200 pessoas, e três dos cinco públicos estão no piso de entrega da Meta.

**Maior alavanca.** O ativo `AD|ESCOLHA1CARTA` rodando em lookalike 1% converteu **11,1% das visitas ao perfil em seguidores, a R$1,87 por seguidor** — 4,7x melhor que a melhor segmentação por interesse já testada. O funil novo ignora esse dado.

**O que NÃO será feito agora.** Não subir as três campanhas juntas. Não subir a campanha 3 (comentário `MAPA`). Não usar o público morno como público principal da campanha 2. Não gerar `C07` nem `C08`.

---

## 1. Estado real da conta (leitura de 18/08/2026)

Conta operacional: **`605257748612701` — "CA 01"**, BM `terapeutaguilhermearaujo`, BRL, ACTIVE, com meio de pagamento, Ads MCP habilitado.

> Existe uma segunda conta, `143255485867453` "Guilherme William Araújo", com uma única campanha de 2025 e R$152,50 gastos. **Não é a conta de operação.** Registrar isso resolve parte de `H-01` no `STATUS.md`.

| Ativo | Estado real | Impacto no briefing |
|---|---|---|
| Página do Facebook | **uma só: "Baralho Cigado Sistêmico"** (o nome tem erro de digitação: *Cigado*) | ⚠️ toda peça de marca vai assinar com esse nome |
| Conta Instagram | `professorguilhermearaujo` | ✅ é o perfil de destino do funil |
| Objetivo "visita ao perfil" | **`PROFILE_VISIT` existe e já rodou** em 4 conjuntos | ✅ resolve a "nota técnica" da campanha 2 |
| Campanhas | 14 no total, **todas PAUSED** | ✅ nenhuma disputa de leilão interna |
| Gasto acumulado (campanhas listadas) | ≈ **R$3.010** | histórico real, não n=0 |
| Última campanha | `GA|TOFU|VIVER-DE-TERAPIA|ENGAJAMENTO|META|20260729` | **posterior ao registro do `STATUS.md`** |

### 1.1 Públicos: o gate 3 do briefing NÃO está cumprido

| Público | Tamanho | Entrega |
|---|---:|---|
| Seguidores | 2.400 – 2.900 | ACTIVE |
| Engajamento Instagram 365 dias | 1.100 – 1.300 | ACTIVE |
| Visitantes Perfil 30D | no piso (≤1.000) | ACTIVE, mas no limite |
| Engajamento IG 1/7/14/30/45/90/180 dias | todos no piso | **INACTIVE** |
| Lookalikes 1% (seguidores, visitantes) | 1.000 cada | ACTIVE |

**Falha.** O briefing §5 lista "público morno com volume" como gate 3 e depois desenha a campanha 2 sobre "engajados do Instagram, espectadores de vídeo e visitantes recentes" e a campanha 3 sobre "seguidores, engajados, visitantes do perfil". Somados e descontada a sobreposição, isso é uma piscina de ~3.500 a 4.200 pessoas. A R$20/dia, a frequência estoura em poucos dias e as duas campanhas competem pela mesma gente.

**Correção.** Campanha 2 roda em **lookalike 1% de seguidores + visitantes**, não em morno puro — que é exatamente a configuração que produziu o melhor resultado histórico da conta. O morno entra como conjunto secundário só quando passar de 5.000 pessoas.

**Decisão.** Gate 3 reescrito: *"público morno com volume"* vira *"lookalike 1% ativo (já existe) + morno como camada de reforço acima de 5.000"*.

---

## 2. O que a conta já provou — e o briefing não usou

Estes números são reais, da própria conta, e não aparecem em nenhum dos três briefings.

### 2.1 Tráfego para o perfil — funciona, e o público decide

| Conjunto | Público | Gasto | Visitas | Custo/visita | Seguidores | **Visita→Seguidor** | **Custo/seguidor** |
|---|---|---:|---:|---:|---:|---:|---:|
| `LOOK-A-LIKE-1%-SEGUIDORES+VISITANTES-30D` | lookalike 1% | R$216,69 | 1.045 | R$0,21 | **116** | **11,1%** | **R$1,87** |
| `AUD_INT_ESPIRITUALIDADE` (18–65, cópia) | interesses | R$102,75 | 591 | R$0,17 | 35 | 5,9% | R$2,94 |
| `AUD_INT_ESPIRITUALIDADE` (34–55) | interesses | R$564,21 | 2.000 | R$0,28 | 51 | 2,6% | R$11,06 |
| `AUD_INT_ESPIRITUALIDADE` (21–34) | interesses | R$49,13 | 202 | R$0,24 | **0** | 0% | — |

**A leitura que importa:** custo por visita variou pouco (R$0,17 a R$0,28). **Custo por seguidor variou 6x.** Visita barata não é resultado — é diagnóstico, exatamente como o próprio briefing §8 afirma. Só que o briefing define "custo por visita ao perfil" como métrica primária da campanha 2. Isso premia o conjunto errado.

**Correção.** Métrica primária da campanha 2 passa a ser **custo por seguidor novo**; custo por visita vira métrica de controle.

**Também:** a faixa 21–34 gastou R$49 e trouxe zero seguidor. Não reabrir essa faixa sem hipótese nova.

### 2.2 Engajamento barato não produziu nada

A campanha `GA|TOFU|VIVER-DE-TERAPIA|ENGAJAMENTO` (29/07, R$168,13, 29.764 alcançados) entregou 25.556 engajamentos a R$0,01 — e **`instagram_profile_follow_v2 = 0` nos dois conjuntos e nos seis anúncios.**

Isto é a validação empírica da tese do briefing §2, com o sinal invertido: alcance e engajamento baratos **já foram comprados nesta conta e não produziram avanço nenhum**. O briefing trata isso como risco teórico. É fato registrado, com data e valor.

**Decisão.** A campanha 3 (engajamento/comentário) não sobe até existir a entrega no Direct **e** um registro de comentário → DM → resposta. Sem isso, ela repete R$168 de aprendizado já pago.

### 2.3 Todo criativo com prova nesta conta tem carta

| Anúncio | CTR | Seguidores | Custo/seguidor |
|---|---:|---:|---:|
| `AD|ESCOLHA1CARTA` | 5,85% | 116 | R$1,87 |
| `REELS_A-CARTA-DO-JULGAMENTO` | **12,67%** | 35 | R$2,94 |
| `POST_ATRAÇÃO_ICP` | 4,65% | 50 | R$8,51 |
| `CR_TRÁFEGO-PERFIL_01` | 6,32% | **1** | R$127,25 |
| `CR_GUI_VÍDEO_01` (2 conjuntos) | 2,00% / 2,08% | 0 | — |

**A tensão que ninguém nomeou.** O briefing de carrosséis §5.8 proíbe "cartas de tarô, cristais ou mãos energéticas" e §5.2 manda "crop fechado no rosto e tronco quando for preciso **remover as cartas** do enquadramento". Ou seja: o briefing baniu o único mecanismo criativo com prova de performance nesta conta.

Isso **pode** estar certo — o funil novo mira terapeutas com um posicionamento de estrutura e sustentação, e o histórico é de público de cartomancia. Mas é uma troca de mecanismo, não um detalhe de direção de arte, e precisa ser decidida por quem tem autoridade sobre a marca, não resolvida por acidente de render.

**Segundo ponto, mais duro:** **zero criativo estático ou carrossel foi testado nesta conta.** 100% do histórico é Reel ou publicação existente impulsionada. O briefing coloca 6 carrosséis de 8 cards como núcleo de 2 das 3 campanhas, sem um único dado de que carrossel estático funciona aqui.

**Correção.** No primeiro ciclo, cada conjunto sobe com **um carrossel novo + um Reel de controle** (`ESCOLHA1CARTA` ou equivalente). Sem controle, um resultado ruim do carrossel não distingue "formato errado" de "mensagem errada".

### 2.4 Geografia e verba: já respondidas

O briefing §10 pergunta "qual geografia é vigente?" e "qual é o orçamento atual?". A campanha de 29/07 responde as duas:

- **Geografia:** rodou os dois — `BRASIL-AMPLO` a R$6/dia e `FOCO-SC` (Santa Catarina) a R$14/dia. **70% da verba em SC.**
- **Orçamento:** R$20/dia, confirmando o registro histórico do `STATUS.md`, agora revalidado com data.
- **Sinal adicional:** frequência 1,30 em SC contra 1,06 no BR amplo. SC satura mais rápido — previsível, e limita quanto tempo a campanha 1 pode rodar lá antes de virar repetição.

**Decisão.** As perguntas 1 e 2 da §10 do briefing saem da lista de bloqueios: estão respondidas por comportamento recente. O que falta é Guilherme **confirmar** se mantém a proporção 70/30 em SC.

### 2.5 Advantage+ Audience está ligado — e isso muda a tese

Em `AS|VIVER-TERAPIA|*` e nos conjuntos de interesse, `targeting_automation.advantage_audience = 1` e `targeting_optimization = expansion_all`.

Com isso ligado, a segmentação declarada vira sugestão: a Meta expande à vontade. A tese do briefing §2 ("o criativo fará parte da segmentação") então não é uma escolha estratégica — hoje **o criativo é a única segmentação que resta**, porque a automação dissolve o resto.

**Decisão.** Manter Advantage+ ligado na campanha 1 (é coerente com alcance amplo qualificado por criativo) e **desligar** na campanha 2, onde o lookalike é justamente o ativo que se quer preservar. O conjunto vencedor histórico rodava com `advantage_audience = 0`.

### 2.6 Gênero: decisão herdada e não registrada

Todos os conjuntos de tráfego para o perfil rodam com `genders: [2]` — **somente mulheres**. Nenhum dos três briefings menciona gênero.

**Decisão.** Ou se registra como decisão de ICP com autoria, ou se abre. Não pode seguir sendo herança silenciosa de uma campanha de abril.

---

## 3. Auditoria dos criativos `C01`–`C06`

Leitura das PNGs exportadas em `exports/`. **Os arquivos estavam sendo regravados durante esta auditoria** (mtime avançou entre duas leituras), então isto é um retrato do estado às ~14h de 18/08 e precisa ser reconferido contra o render final.

### P0 — reprova publicação

| # | Falha | Onde | Regra violada |
|---|---|---|---|
| 1 | **Código interno `C01`/`C03`/`C06` impresso no canto superior esquerdo de todos os cards** | 48 cards | §5.8: "qualquer texto que não esteja neste briefing". É metadado de produção vazando para a arte publicada |
| 2 | **`C06-08` mantém as cartas de tarô visíveis e em destaque** na mão de Guilherme | `C06-08` | §5.2 "crop fechado… para remover as cartas"; §5.10 "crop sem cartas"; §5.8 proíbe cartas de tarô |

### P1 — corrigir antes de subir

| # | Falha | Onde | Regra / direção violada |
|---|---|---|---|
| 3 | **Grade de construção visível em 100% dos cards** | 48 cards | §5.7 "usar um elemento gráfico por card"; §5.6 T1 "grafismo abstrato de linha com opacidade máxima de 12%". Uma grade completa em toda tela lê como wireframe, não como luxo editorial — e destrói o "silêncio" que a §5.1 pede |
| 4 | **`C03-01`: "E depois?" está MENOR que a primeira linha** | `C03-01` | §5.10 direção explícita: "pergunta em duas alturas; **`E depois?` maior**". A ênfase está invertida — o pivô da capa é justamente o "E depois?" |
| 5 | **Elementos gráficos prescritos ausentes ou trocados** | `C01-01` (duas linhas paralelas), `C01-03` (linha vertical separando cuidado/dinheiro → virou dois círculos), `C01-05` (linha que extrapola a moldura), `C03-01` (cadeira vazia) | §5.10, direção card a card |
| 6 | **`C06-08`: CTA em serifada, do mesmo tamanho do corpo** | `C06-08` | §5.6 T5: "em CTA, a palavra de ação deve ser o maior elemento"; CTA é Manrope por §5.5 |
| 7 | **Barra de progresso no rodapé duplica o contador `01/08`** | 48 cards | Redundante com o contador do topo e com os pontos que o próprio Instagram desenha |
| 8 | **`C01-05` e vários cards de corpo ficaram com ~85% de tela vazia** | vários | §5.1 pede espaço negativo, não vazio. Em feed a 25% do tamanho, uma linha solta no meio do nada perde a tensão que a copy tinha |

### O que está certo e deve ser preservado

- Copy transcrita **sem alteração** — a regra §5.9 foi respeitada, e essa era a regra mais fácil de quebrar.
- Paleta fechada respeitada; nenhum verde-limão, neon ou gradiente.
- Cormorant Garamond + Manrope corretos, alternância escuro/creme com bom ritmo.
- Formato 1080×1350 confirmado nos 48 cards.
- Ênfase dourada em uma expressão por card, nos trechos certos (`não deveriam ser opostos`, `E depois?`, `remove pressão`).
- Fotografia real preservada, sem geração de rosto.
- Sequência de 8 cards com pivô no card 3 legível na prancha de contato.

**Veredito:** `C01`–`C06` estão **reprovados para publicação** e **aprovados para iteração**. O sistema visual está certo; a execução tem dois P0 que são regra explícita do próprio briefing e seis P1 que custam tensão.

---

## 4. Falhas de arquitetura no briefing de campanhas

| # | Falha | Correção |
|---|---|---|
| A | Métrica primária da campanha 2 é "custo por visita ao perfil" | passa a ser **custo por seguidor novo**; visita vira controle |
| B | Campanhas 2 e 3 disputam a mesma piscina de ~4.000 pessoas | campanha 2 vai para lookalike 1%; campanha 3 fica represada |
| C | §10 pergunta geografia e verba já respondidas pela campanha de 29/07 | fechar as duas perguntas com o dado; pedir só confirmação |
| D | "Nota técnica" trata `PROFILE_VISIT` como incerto | confirmado disponível, com benchmark de R$0,17–0,28/visita |
| E | Nenhuma menção a gênero, apesar de todo histórico rodar só mulheres | decisão explícita e registrada |
| F | Nenhuma menção ao Advantage+ Audience ligado | desligar na campanha 2, manter na 1 |
| G | Carrossel estático nunca testado nesta conta | Reel de controle em todo conjunto do primeiro ciclo |
| H | Página única com o nome errado ("Baralho Cigado Sistêmico") | corrigir o nome da Página antes de qualquer campanha de marca |

---

## 5. Ordem de subida recomendada

Não subir três campanhas com R$20/dia fracionados. A verba não sustenta três aprendizados simultâneos.

**Onda 1 — agora, assim que `C01`–`C06` forem corrigidos e aprovados**

- Uma campanha: **tráfego ao perfil**, objetivo Tráfego, otimização `PROFILE_VISIT`.
- Um conjunto: lookalike 1% de Seguidores + Visitantes Perfil 30D, `advantage_audience = 0`.
- Dois anúncios: um carrossel (`C04` ou `C05`) + um Reel de controle.
- Métrica: custo por seguidor. Referência a bater: **R$1,87**.
- Por que primeiro: é a única etapa do funil com prova de performance nesta conta, e é ela que **fabrica o público morno** que as outras duas campanhas precisam e hoje não existe.

**Onda 2 — quando Seguidores passar de 5.000**

- Campanha de reconhecimento com `C01`–`C03`, público frio qualificado por criativo, Advantage+ ligado.

**Onda 3 — quando o Mapa Breve existir e o Direct estiver operável**

- Campanha de engajamento com `C08`. Não antes: o histórico já mostra R$168 de engajamento sem avanço.

---

## 6. Decisões que dependem de humano

Renumeradas a partir da §10 do briefing, com o que a conta já respondeu removido.

| # | Decisão | Dono | Bloqueia |
|---|---|---|---|
| D-01 | Manter a proibição de cartas nas peças de terapeuta, sabendo que é o mecanismo com prova na conta? | Guilherme + Victor | direção criativa de todo o funil |
| D-02 | Corrigir o nome da Página ("Cigado" → "Cigano") ou criar Página nova coerente com o posicionamento? | Guilherme | campanha 1 e 2 |
| D-03 | Manter `genders: [2]` (só mulheres) ou abrir? | Guilherme | segmentação das 3 campanhas |
| D-04 | Confirmar 70/30 SC/Brasil ou mudar? | Guilherme | campanha 1 e 2 |
| D-05 | O Mapa Breve existe ou precisa ser produzido? | Guilherme | campanha 3, `C08` |
| D-06 | Quais são os três eixos do Mapeamento? | Guilherme | `C07` |
| D-07 | Quem faz as DMs e em qual prazo? | Guilherme | campanha 3 |
| D-08 | Capacidade de calls e oferta vigente | Guilherme | monetização do funil inteiro |
| D-09 | Verba do ciclo: mantém R$20/dia ou revisa? | Victor + Guilherme | ondas 2 e 3 |

**Nenhuma dessas bloqueia a Onda 1**, exceto D-01, D-02 e D-04.

---

## 7. Régua financeira (CLAUDE.md §9)

Aplicando *resultado antes de construção* a esta frente:

- **Qual dinheiro isto gera?** Nenhum diretamente. Tráfego ao perfil gera seguidor, seguidor não é caixa. A via de caixa continua sendo a call diagnóstica → oferta individual, e ela depende de D-05, D-07 e D-08.
- **Em quantos passos até o pagamento?** Sete: anúncio → visita → seguidor → comentário → DM → call → venda. Sete passos é uma via de audiência, não de caixa.
- **`n` atual:** n=0 para venda originada deste funil. R$3.010 já gastos na conta sem receita atribuída registrada no repositório.

**Consequência.** Esta frente é legítima como construção de ativo de audiência, com R$1,87/seguidor como custo defensável. Ela **não** é a ponte para o primeiro dinheiro e não deve ser vendida internamente como tal. A ponte para caixa continua sendo a base quente no 1-a-1.

---

## 8. Propagação

| Destino | O que muda |
|---|---|
| `STATUS.md` | conta operacional identificada (resolve parte de `H-01`); orçamento revalidado; geografia respondida; gate 3 reclassificado como não cumprido |
| `DECISOES.md` | `DEC-2026-08-18-001` ganha observação: ordem de ondas substitui simultaneidade |
| `06 - mídia paga/BRIEFING-…` | §4 métrica da campanha 2; §5 ordem de gates; §10 perguntas 1 e 2 fechadas |
| `05 - design e criativos/BRIEFING-…` | nada muda no briefing; a falha está na execução |
| `09 - operação/FILA-PROPAGACAO.md` | entrada nova para as correções P0/P1 |

---

*Auditoria produzida sem qualquer mutação na conta de anúncio. Nenhuma campanha, conjunto, anúncio, verba, público ou publicação foi criado, alterado, pausado ou ativado.*
