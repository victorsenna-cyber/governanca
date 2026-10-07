# A5 · AUDITORIA ANTI-SLOP · BLOCO 3 (mecanismo, D13–D22)

> 📋 **Nota do orquestrador, não é parte do laudo:** transcrito **verbatim** do `vsl-auditor-antislop`. Ele não tem `Write` (só `Read`, `Grep`, `Glob`), por desenho do §4.1 — e por isso não grava o próprio laudo. Nenhuma palavra foi alterada. Defeito do método nº 5 no `LOG.md`.
> ⚠️ **A nota do §5 sobre o `[[ FALTA ]]` está correta e o defeito era meu** (extração removeu a linha de anotação `>` que o continha). Corrigido às 23h20. O laudo declara que não pontuou nada por isso.

---

## VEREDITO

# 🔴 REPROVA · 41/60

**Corte da skill:** abaixo de 42/60 reprova. **41 está abaixo.**

**Vetos de reprovação automática — nenhum disparou:**

| Veto | Estado |
|---|---|
| Qualquer travessão (`—`, `–`, ` -- `) | ✅ **zero.** Varredura mecânica no arquivo inteiro: nenhuma ocorrência |
| Nota ≤ 4 em Tensão | ✅ não disparou (Tensão = 8) |
| Aspas curvas | ✅ zero |
| Negrito mecânico / Title Case na fala | ✅ zero |

**A reprovação é por soma, e a soma cai por um defeito dominante:** a antítese ("não é X, é Y") é o motor sintático de **todos os dez elementos**, com dose de ~18 a 20 ocorrências contra um teto de **uma por bloco** (módulo 02, traço 8). Não é tell isolado; é a espinha do bloco.

---

## SCORE — 6 dimensões

| Dimensão | Pergunta da rubrica | Nota | Linha que sustenta o desconto |
|---|---|---:|---|
| **Diretividade** | É afirmação ou anúncio do que vai dizer? | **6**/10 | `"Antes de qualquer coisa: o que eu vou te mostrar aqui não é informação sobre personalidade."` (D13) · `"E agora a parte que interessa:"` (D14) · `"Repara na diferença."` (D18) — 11 movimentos de anúncio em 10 elementos |
| **Ritmo** | Varia ou é metrônomo? | **7**/10 | 6 dos 10 elementos fecham na mesma fórmula `E +` promessa do que vem: `"E antes do primeiro passo, uma coisa muda em você."` (D16) · `"E com isso na mão, aí sim dá para fazer a última coisa."` (D21) |
| **Confiança** | Respeita a inteligência de quem lê? | **6**/10 | `"Não é que ele não queira fazer. É que o pedido chegou num idioma que ele não lê."` (D16) e `"Não é que você passa a ter razão sobre elas. É que você para de achar..."` (D19) — mesma família sintática, proibição expressa do traço 8 |
| **Autenticidade** | Soa humano? | **8**/10 | crédito alto (§3). Desconto só pelo pigarro de abertura e pela monotonia sintática em volume |
| **Densidade** | Tem algo cortável? | **6**/10 | `"Passo um: conhecer as maneiras de funcionar. Existem maneiras de funcionar diferentes, e conhecer isso é o primeiro passo."` (D19) — tautologia em duas frases |
| **Tensão** | Tem pivô apontável, ou é acúmulo de acordos? | **8**/10 | pivô localizado e arco que resiste à troca de ordem (§4). Desconto por batida contrarian disparando três vezes |
| | **TOTAL** | **41**/60 | |

---

## 1. DEFEITOS — P0 (sustentam a reprovação)

### D-01 · antítese fora de dose · defeito dominante

| | |
|---|---|
| **Bloco · elemento** | bloco 3 · **todos os dez elementos (D13 a D22)** |
| **Regra violada** | módulo 02, **traço 8**: *"Limite de dose: no máximo uma antítese a cada bloco, e nunca duas seguidas na mesma família sintática"* · módulo 04, *"Contraste binário batido"* |
| **Medida** | **18 ocorrências** por varredura mecânica de marcador de negação-contraste; ~20 na leitura. Teto do traço 8 para um bloco: **1** |

Dose por elemento — nenhum fica em zero, seis acima do teto:

| Elemento | Nº | Linhas citadas |
|---|---:|---|
| D13 | 1 | `"o que eu vou te mostrar aqui não é informação sobre personalidade"` |
| D14 | 2 | `"privacidade não é preferência, é inegociável"` · `"você não descobre isso olhando o comportamento, nem perguntando sobre comportamento"` |
| D15 | 1 | `"O meu trabalho não é te ensinar a pedir mais alto... É te mostrar como levar a pessoa"` — o elemento inteiro é a antítese |
| D16 | 2 | `"Não é má vontade: eu procuro pelos meus caminhos"` · `"Não é que ele não queira fazer. É que o pedido chegou num idioma que ele não lê."` |
| D17 | 2 | `"A pessoa não é agressiva."` · `"Quem vive vendo risco não é pessimista: tem faro para o risco"` |
| D18 | 2 | `"Quem aprende as Nove Línguas não ganha um veredito sobre ninguém."` · `"Isso é um espelho, não um veredito."` |
| **D19** | **3** | `"E isso é o contrário do que o mercado vende."` · `"Não é que você passa a ter razão sobre elas. É que você para de achar..."` · `"Isso aqui não é técnica de como ter conversa difícil. É anterior a isso."` |
| D20 | 2 | `"Não o comportamento. O que move."` · `"eu não mostro só a personalidade. Eu mostro a criança daquela personalidade"` |
| D21 | 2 | `"E eu não estou falando de ouvir mais, nem de ouvir com paciência."` · `"olhar pelo computador dele, e não pelo meu"` |
| **D22** | **3** | `"O resultado é o que você pediu, e não o que a pessoa preferia fazer."` · `"os melhores caminhos para ele, e não para mim"` · `"E isso não acontece porque você virou outra pessoa. Acontece porque o seu pedido passou a chegar."` |

🔴 **Agravante — família sintática repetida, que o traço 8 proíbe em letra.** O molde `"Não é que [X]. É que [Y]"` aparece idêntico em D16 (`"Não é que ele não queira fazer. É que o pedido chegou..."`) e em D19 (`"Não é que você passa a ter razão sobre elas. É que você para de achar..."`). Dentro de D21 e de D22 há duas e três antíteses no mesmo elemento.

⚠️ **O que NÃO é o defeito, e isto muda a direção da correção.** Apliquei o teste do traço 8 (*"se inverter as pontas, o leitor discordaria?"*) uma a uma: **a maioria passa.** `"privacidade não é preferência, é inegociável"` muda o que o líder faz; `"Isso é um espelho, não um veredito"` idem. **Não são enfeite — é dose e monotonia de molde.** As duas únicas de ponta fraca, que definem só pela negativa sem nomear o lado afirmativo: `"Isso aqui não é técnica de como ter conversa difícil. É anterior a isso."` (D19 — "anterior a isso" não é ponta concreta) e `"E eu não estou falando de ouvir mais, nem de ouvir com paciência."` (D21).

**Direção (não frase):** escolher **uma** antítese por elemento, priorizando a que o público discordaria se invertida; nas demais posições o fato afirmativo tem de sustentar sozinho. Quebrar a família sintática onde duas vizinhas usarem o mesmo molde.

### D-02 · anúncio do que vai dizer, em cluster

| | |
|---|---|
| **Bloco · elemento** | bloco 3 · D13, D14, D16, D18, D19, D21, D22 |
| **Regra violada** | módulo 04, *"Aberturas de pigarro"* e *"Meta-comentário"* · dimensão **Diretividade** (*"É afirmação ou anúncio do que vai dizer?"*) |

Onze movimentos de anúncio em dez elementos. Hits duros, por linha:

1. `"Antes de qualquer coisa: o que eu vou te mostrar aqui não é informação sobre personalidade."` (D13) — **variante direta de "antes de mais nada"**, item nominal da lista de pigarro do módulo 04, e é a **primeira linha do bloco**.
2. `"E agora a parte que interessa:"` (D14) — anuncia que a frase seguinte importa em vez de a frase importar.
3. `"Repara na diferença."` (D18) · `"Repara na frase, porque ela é o contrário do que parece."` (D22) · `"Agora repara no que isso costuma causar..."` (D22) — **o mesmo imperativo três vezes.** Mesmo padrão que o módulo 04 condena em *"'Mas' como tique"*: três ou mais aberturas no mesmo marcador é cadência de máquina, não ênfase.

⚠️ **Calibração aplicada, para não acusar o canal:** `"Vamos fazer junto. Pensa num pedido que você já fez essa semana."` (D14) e `"Imagina que eu e você ganhamos o mesmo computador"` (D16) **não entram como defeito** — convidam a um exercício que de fato acontece na frase seguinte. `"Olha, até eu responderia..."` (D14) **não entra**: marcador oral do canal. `"Agora, os quatro passos."` (D18) **não entra**: transição estrutural de VSL.

**Direção:** um só imperativo de atenção no bloco; as outras passagens entram pela afirmação. A primeira linha do bloco não pode ser pigarro.

---

## 2. DEFEITOS — P1 (descontam, não reprovam sozinhos)

### D-03 · metrônomo posicional no fecho de elemento

**Bloco 3 · D13, D14, D16, D17, D20, D21.** Seis dos dez elementos fecham na **mesma fórmula**: `E` + promessa do que vem.

- `"E ele começa por uma coisa que você acha que já sabe: o que você vê na pessoa."` (D13)
- `"E isso muda o que você faz com o seu pedido."` (D14)
- `"E antes do primeiro passo, uma coisa muda em você."` (D16)
- `"E é exatamente aqui que me fazem a pergunta que eu mais escuto."` (D17)
- `"E aí você consegue escutar de outro jeito."` (D20)
- `"E com isso na mão, aí sim dá para fazer a última coisa."` (D21)

**Regra violada:** módulo 04, *"Ritmo, o tell mais sutil"* — a variação de comprimento **dentro** do parágrafo existe e é boa; a regularidade é **de posição**. Em fala, "E" como abertura é código do canal e não é tell; **ser o mesmo movimento em seis fechos é.**

**Direção:** manter o encadeamento (é ele que salva a Tensão, §4) e variar o veículo: alguns elos podem fechar no fato, não na promessa do próximo.

### D-04 · drama staccato em quatro posições

**Bloco 3 · D14, D19, D20, D22.** Sequências de 2 a 3 fragmentos curtos paralelos, sempre como o soco do elemento:

- `"Mesmo pedido. Mesma frase. Duas leituras diferentes."` (D14)
- `"São nove maneiras de funcionar. Nove."` (D19)
- `"Não o comportamento. O que move."` (D20)
- `"Menos tempo seu apagando incêndio de gente. Combinado que acontece sem você precisar lembrar. Delegação que você consegue soltar."` (D22)

**Regra violada:** módulo 04 — *"Uma frase curta isolada para dar ênfase. Só vira tell quando vêm várias seguidas, forçando drama."* Isoladas passam; quatro vezes no mesmo bloco, sempre na mesma função, é recurso virando maneirismo. O último caso é também **regra de três** de construção paralela — **atenuado**, porque os três referentes existem de fato na cascata do briefing §3 nível 3, logo não é "três sem motivo real para serem três".

### D-05 · material cortável

- **D19 (tautologia):** `"Passo um: conhecer as maneiras de funcionar. Existem maneiras de funcionar diferentes, e conhecer isso é o primeiro passo."` — a segunda frase repete o título do passo sem acrescentar fato. **Densidade**; módulo 04, acúmulo.
- **D19:** `"É que você para de achar que todo mundo precisa da mesma coisa que você, e que todo mundo pensa como você."` — as duas orações carregam a mesma ideia.
- **D13 × D16 (nomeação em dobro):** o mecanismo é **batizado duas vezes**, com o ato de batismo refeito: `"E esse caminho tem nome. Eu chamo de as Nove Línguas."` (D13) e `"São nove, e é isso que eu chamo de as Nove Línguas."` (D16). Repetir o **nome** em fala é legítimo e fica; repetir o **ato de nomear** é cortável.
- **D13, D18, D19 (batida contrarian em triplicata):** o mesmo argumento anti-teste/anti-rótulo dispara três vezes: `"Relatório de personalidade quem já fez tem de sobra, e boa parte dele termina na gaveta."` (D13) · `"isso não é colocar gente em caixinha?"` (D18) · `"E isso é o contrário do que o mercado vende. O mercado vende descobrir o seu tipo."` (D19). **Regra violada:** módulo 04, *"Pivô excessivo… Um pivô-mestre por peça"* — D19 reabre enquadramento que D13 já fechou.

---

## 3. O QUE FICA — sinais humanos, proibido cortar

Registro explícito, porque a proibição do meu papel é não cortar sinal humano e porque a próxima passada tende a lixar justamente isto:

1. **Autocorreção e aside genuínos:** `"Olha, até eu responderia que às vezes eu gosto de um momento de solidão. E eu não sou nada assim."` (D14) — trecho mais humano do bloco.
2. **Dúvida honesta:** `"Dá para gerar resultado rápido, dá, mas existe erro."` (D18).
3. **Recusa que custa:** `"Tem gente que me pergunta: então me diz qual língua cada um do meu time fala. Eu não respondo isso, e o curso também não."` (D18).
4. **Detalhe específico difícil de inventar:** `"os mesmos quinhentos arquivos dentro"` (D16).
5. **Hedge obrigatório pelo teto de promessa, não hedging de slop:** `"os relacionamentos tendem a ficar mais leves"` e `"muitas vezes, é uma proteção"` (D17) · `"o que isso costuma causar"` (D22). O briefing §3 proíbe certeza; aqui o hedge é honestidade e **fica**. Única observação: `"muitas vezes"` aparece em D17 e D21 como o mesmo amaciador — variar o veículo, não remover o hedge.
6. **Primeira pessoa com pele:** `"Essa foi a minha pergunta também."` (D18).

---

## 4. VARREDURA DE ARCO — e por que Tensão não reprova

Rodei o teste do módulo 04: **trocar a ordem de dois parágrafos do meio.**

**O arco NÃO é "E, e, e".** Cada elemento fecha numa dependência explícita do seguinte, e a troca quebra:

| Fecho | Entrega a |
|---|---|
| `"E antes do primeiro passo, uma coisa muda em você."` (D16) | D17, que é a coisa que muda (sai o julgamento) |
| `"E é exatamente aqui que me fazem a pergunta que eu mais escuto."` (D17) | D18, a objeção |
| `"Falta saber o que olhar dentro de cada uma dessas maneiras."` (D19) | D20, o que olhar |
| `"E aí você consegue escutar de outro jeito."` (D20) | D21, a escuta |
| `"E com isso na mão, aí sim dá para fazer a última coisa."` (D21) | D22, o passo 4 |

Trocar D16 com D17, ou D19 com D20, deixa o fecho apontando para o vazio. **Há cadeia, não acúmulo.**

**Pivô do bloco, por linha:** `"E agora a parte que interessa: você não descobre isso olhando o comportamento, nem perguntando sobre comportamento."` (D14), armado pela linha anterior `"Mesmo pedido. Mesma frase. Duas leituras diferentes."` É apontável e é um só.

**O desconto de Tensão** é o do D-05: batida contrarian em D13, D18 e D19, com D19 reabrindo frame já fechado — pivôs concorrentes de baixa intensidade, não ausência de pivô. Por isso **8, e o veto de Tensão ≤ 4 não disparou.**

---

## 5. REGRAS DE LINGUAGEM DO BRIEFING §8 — conferência

Fora da minha rubrica de score; confiro porque o briefing entrou como contexto de voz e porque é verificável.

| Veto §8 | Estado no bloco 3 |
|---|---|
| *"padrão"* em headline/CTA/gancho | ✅ ausente |
| *"talento"* | ✅ substituição aprovada em uso: `"isso é o que ela faz melhor sem esforço"` (D17) |
| *"motivação"* | ✅ substituição em uso: `"ler o que move a pessoa"` (D20) |
| *"extrair"* · *"performance"* | ✅ ausentes |
| *"do jeito dele"* sem amarra | ✅ amarrado no mesmo elemento: `"A direção continua sendo sua. O método continua sendo seu."` (D22) precede `"os melhores caminhos para ele"` |
| prometer o tipo de alguém | ✅ negado em letra: `"Eu não respondo isso, e o curso também não."` (D18) · `"você não vai ter um relatório na mão"` (D13) |
| número de resultado · alegação científica | ✅ ausentes |
| nome de terceiro | ✅ ausente |

⚠️ **Nota de fato, não defeito:** fui informado de que há um `[[ FALTA: … ]]` em D14. **Não há placeholder algum no texto que recebi** — a extração verbatim de D14 vai de `"Vamos fazer junto."` a `"E isso muda o que você faz com o seu pedido."` sem marcador. Ou o placeholder estava em linha de anotação `>` (removida na extração, conforme o cabeçalho do arquivo), ou não chegou à fala. Registro para quem fecha; **não pontuei nada por isso.**

---

## 6. FECHO

| | |
|---|---:|
| Travessão | 0 |
| Antíteses (teto do traço 8: 1 por bloco) | **18–20** |
| Elementos acima do teto de antítese | 6 de 10 |
| Fechos na mesma fórmula | 6 de 10 |
| Imperativo `"Repara"` | 3 |
| Pigarro de lista nominal | 1 (primeira linha do bloco) |
| **SCORE** | **41/60** |

# 🔴 REPROVA — 41/60

Volta ao redator. **Não reescrevi e não sugeri frase substituta em nenhum item.** Um defeito (D-01) responde pela maior parte da queda e está concentrado num único molde sintático repetido dez vezes — o bloco tem cadeia causal, pivô e voz; o que ele não tem é dose.

*Auditor A5 · anti-slop · não leu o raciocínio do gerador · rubrica: módulo 04 + traço 8 do módulo 02.*
