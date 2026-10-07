# A4 · AUDITORIA DE VOZ E GRAVABILIDADE — BLOCO 3 (MECANISMO · D13–D22)

> 📋 **Nota do orquestrador, não é parte do laudo:** transcrito **verbatim** do que o agente `vsl-auditor-voz` devolveu. Ele não tem `Write` (só `Read`, `Grep`, `Glob`), por desenho do §4.1 do método — e por isso não grava o próprio laudo. Nenhuma palavra foi alterada. Defeito do método nº 5 no `LOG.md`.
> ⚠️ **O item 1 do §5 deste laudo está CORRETO e o defeito era meu:** o `[[ FALTA ]]` do D14 não estava na extração porque meu filtro removeu as linhas de anotação `>` e levou o placeholder junto. **Corrigido às 23h20**; o laudo fica como foi entregue.

---

> **Papel:** A4 · voz do expert e gravabilidade · **Etapa:** auditoria · **Bloco:** 3 · mecanismo
> **Texto julgado:** `12 - Direct Response/vsl/2026-10-02/G2-TESE-FALA.md` (D13 a D22, fala verbatim) — **único texto recebido**
> **Carga:** `07 - skills/debora-voice/SKILL.md` (inteira) · `GOVERNANCA-REPO.md` §4 · `BRIEFING-VSL.md` §8 e §2 · `PROMESSA-CASCATA-2026-10-02.md` §5
> **Data:** 02/10/2026 · **Condição da peça:** ela grava **sozinha**, sem entrevistador — tudo neste arquivo sai da boca dela.

## VEREDITO: 🔴 REPROVA

**Reprovam sozinhos:** D18 linha 83 (apelido como predicado de pessoa) · D16 linha 57 (paráfrase do nome) · D22 linha 131 (amarra do §8 contradita no próprio elemento) · D20 linha 105 (léxico de bastidor sem tradução em lead frio).
**Léxico morto e vetado: 0 hits** — a varredura está no §0 e é o que o bloco tem de mais limpo.

---

## 0. VARREDURA MECÂNICA DE LÉXICO (grep sobre o arquivo, só linhas de fala)

| Termo vetado | Fonte do veto | Hits na fala |
|---|---|:---:|
| "motivação" | BRIEFING §8 · léxico morto | **0** |
| "talento" / "talentos" | §4 (14/07) · BRIEFING §8 | **0** |
| "performance" | §4 (02/10) · PROMESSA §5 | **0** |
| "extrair" | §4 (02/10) · PROMESSA §5 | **0** (os 2 hits do grep estão nas linhas 4–5, **cabeçalho do orquestrador**, não fala) |
| "padrão" / "padrões" | §4 (09/07) | **0** |
| "programar pessoas" | BRIEFING §8 | **0** |
| "vai fundo na raiz" / "raiz" | BRIEFING §8 | **0** |
| "do jeito dele/dela" (string) | §4 (02/10) | **0** (mas ver §2, item 1 — a vizinha está lá) |
| "Maestria Natural" / "maestria" | BRIEFING §8 | **0** |
| "Carreira Alinhada" · "Seu Eixo" · "Desenho Humano" · NR-1 | §4 | **0** |
| "inteireza" · "do bom ao pleno" · "liderar inteiro" | §4 (14/07) | **0** |
| "roadmap reverso" · "mapa do bloqueio" · "metas filtradas" | §4 (14/07) | **0** |
| "licença interna" · "energia que não volta com férias" | §4 (09/07) | **0** |
| **travessão (— / –)** | `debora-voice`, regra de pontuação OBRIGATÓRIA | **0** |
| **número de resultado / promessa absoluta / tipo de alguém prometido** | BRIEFING §8 · PROMESSA §5 Regra 2 | **0** |

**Medição de fôlego:** a frase mais longa do bloco tem ≈27 palavras (linha 129), com três pausas internas. **Nenhuma frase estoura o fôlego** — o bloco não tem defeito de comprimento de frase. Os defeitos de gravabilidade do §4 são de *construção* e *pronúncia*, não de extensão.

---

## 1. APELIDO `as Nove Línguas` — defeitos

1. **D18 · objeção · linha 83** · *"então me diz qual língua cada um do meu time fala"* · **o nome nunca é predicado de pessoa** + paráfrase vetada do tipo *"a língua de cada um"*. Está dentro de uma objeção que ela refuta na frase seguinte, **e isso não isenta**: ela grava sozinha, a frase sai da boca dela em voz alta, e o lead frio ouve o enquadramento antes de ouvir a recusa. **Uma ocorrência reprova.**
2. **D16 · ponto-lógico · linha 57** · *"E é esse idioma que você aprende a reconhecer. São nove, e é isso que eu chamo de as Nove Línguas."* · a numeração cai sobre **"idioma"**, produzindo *"nove idiomas"* — paráfrase vetada. O nome vigente entra como **correção de um nome que a própria frase acabou de dar**.
3. **D13 · linha 16 · e D16 · linha 57** · *"Eu chamo de as Nove Línguas"* / *"é isso que eu chamo de as Nove Línguas"* · ver §4 item 1: o apelido está correto como string, mas a construção que o introduz põe a string literal em risco **na hora de gravar**.

**Conforme (registro, não defeito):** linha 81 *"Quem aprende as Nove Línguas não ganha um veredito sobre ninguém"* e linha 129 *"É isso que você aprende nas Nove Línguas"* — string literal preservada, nome não predicado de pessoa.

---

## 2. REGRAS DE LINGUAGEM — BRIEFING §8 e PROMESSA §5

1. **D22 · passo 4 · linha 131** · *"eu estou ajudando ele a encontrar os melhores caminhos para ele, e não para mim"* · **BRIEFING §8, linha 1 do veto · PROMESSA §5 Regra 1** (a direção e o método são do líder; o que muda é **como ele comunica**). É a vizinha de *"do jeito dele"* **sem amarra no próprio enunciado**, e contradiz a amarra posta quatro linhas antes no mesmo elemento (linha 127: *"O método continua sendo seu"*). O líder ouve ausência de processo exatamente aqui.
2. **D15 · mecanismo · linha 42** · *"pelo caminho que ela consegue percorrer"* · **BRIEFING §8** · desloca o que muda de **comunicação** para **execução**. O conteúdo especificado para D15 (BRIEFING §5) fala de compreensão, não de percurso; *"caminho que ela consegue percorrer"* dá margem a *"cada um percorre o caminho dele"*. Grau menor que o item 1, porque a amarra ao resultado está na mesma frase (*"o resultado que você pediu"*) — **mas é a vizinha que a regra nomeia em letra.**
3. **D18 · linha 83** · *"Dá para gerar resultado rápido, dá, mas existe erro."* · **PROMESSA §5 Regra 2 · `debora-voice` "O que EVITAR" (promessas de prazo)** · promessa de velocidade sem teto e sem referente, num elemento cuja função é reduzir risco. Ver também §4 item 6 (o referente não se entende ao ouvir).

**Conforme (registro, não defeito):** linha 127 declara a amarra em três frases ("A direção continua sendo sua. O método continua sendo seu. O resultado é o que você pediu") · linha 133 entra com os níveis 3–4 **como efeito** (*"repara no que isso costuma causar"*), sem número, como a Regra 2 exige · linha 66 usa *"tendem a ficar mais leves"* (nível 2, hedge) · linha 83 fecha em *"um espelho, não um veredito"* · linha 105 usa *"o que move a pessoa"* no lugar de "motivação", inclusive onde a call dizia "motivação".

---

## 3. VOZ — trechos que destoam da amostra

1. **D20 · passo 2 · linha 105** · *"Eu mostro a criança daquela personalidade, e o que essa criança desenvolveu para sobreviver"* + *"o medo que está por baixo do comportamento fica óbvio"* · **`debora-voice`, seção "Léxico: bastidor × copy para lead" (OBRIGATÓRIO)**: termo de método não entra em copy para lead frio **sem tradução**. Três marcas terapêuticas em quatro linhas (criança · sobreviver · medo por baixo). Falha o teste da própria skill (*"a palavra apareceria numa fala espontânea de um líder numa call?"*) e falha o registro do **BRIEFING §2** (corporativo, concreto, *"Cadê o pé no chão?"*). **É o trecho mais fora de registro do bloco.**
2. **D17 · reason-why · linha 66** · *"Ela usa aquilo porque tem muito medo de ser traída, então ela se protege antes."* · mesma regra do item 1. O **conteúdo** (comportamento que incomoda é proteção) é sancionado pelo BRIEFING §4; o que destoa é a palavra de ferida **sem tradução** num contexto de trabalho e lead frio.
3. **D20 · linha 105** · *"É aí que está o diferencial do que eu ensino"* · **`debora-voice`, Teste rápido #1** (soa como discernimento ou como argumento de venda? deve ser o primeiro). Meta-frase de venda no meio de um passo do método.
4. **D19 · passo 1 · linha 94** · *"Passo um: conhecer as maneiras de funcionar. Existem maneiras de funcionar diferentes, e conhecer isso é o primeiro passo."* · ritmo: *"maneiras de funcionar"* 2x e *"passo"* 2x em duas frases. Soa como texto esticado para fechar dose, não como fala. **`debora-voice`: "Profunda, mas leve"**.

---

## 4. GRAVABILIDADE (ela diz isso em voz alta, sozinha)

1. **D13 · linha 16** *"Eu chamo de as Nove Línguas."* · **D16 · linha 57** *"é isso que eu chamo de as Nove Línguas"* · **"de as" exige hiato artificial.** Falando, a contração natural é "das" — e aí **o apelido sai deformado na gravação**. Defeito de gravabilidade **que vira defeito de apelido no take**.
2. **D13 · linha 12** · *"Relatório de personalidade quem já fez tem de sobra, e boa parte dele termina na gaveta."* · inversão de tópico que não soa falada; trava a leitura em voz alta.
3. **D18 · linha 77** · *"Débora, isso não é colocar gente em caixinha?"* · abre o elemento com fala de terceiro **sem atribuição**. Gravando sozinha, ela diz o próprio nome sem moldura — convenção de roteiro escrito, não de fala solo.
4. **D18 · linha 79** · *"O Eneagrama não te promete um lugar, senão a gente seria muito reducionista."* · **não se entende ao ouvir**: *"não te promete um lugar"* não fecha com a frase anterior (*"Caixa diz o que a pessoa é, e fecha"*) e *"senão a gente seria"* é conector sem antecedente lógico.
5. **D18 · linha 85** · *"A segunda pergunta é a mais prática"* · é a **terceira** coisa perguntada no elemento (linhas 77, 83, 85). A numeração colide com o que o ouvinte acabou de contar.
6. **D18 · linha 83** · *"Dá para gerar resultado rápido, dá, mas existe erro."* · referente indeterminado ao ouvir: o que gera resultado rápido — dizer o tipo? o curso? o espelho?
7. **D14 · linha 29** · *"Para ela, privacidade não é preferência, é inegociável."* · trava de pronúncia: tônicas em "p" em sequência + *"inegociável"* (5 sílabas) na mesma respiração.
8. **D16 · linha 57** · *"Falar mais de um custa menos esforço do que repetir o mesmo pedido três vezes."* · *"mais de um"* (masculino) depois de *"as Nove Línguas"* (feminino): o ouvinte perde o antecedente.
9. **D19 · linha 98** · *"Isso aqui não é técnica de como ter conversa difícil."* · construção truncada (sem artigo) que não soa falada.
10. **D17 · linha 68** · *"No lugar certo, isso é o que ela faz melhor sem esforço."* · antecedente trocado no meio do período (*"Quem vive vendo risco"* → *"ela"*) e três sintagmas empilhados antes do núcleo.

---

## 5. FATOS OBSERVADOS — fora da minha rubrica, sem veredito meu

1. 🔴 **Não existe nenhuma string `[[ FALTA` no arquivo que recebi** (grep sobre o arquivo inteiro). O briefing descreve **D14 com três pessoas** (quem vê riscos · quem precisa de privacidade · quem foge de conflito, §5 D14 ⟲); a fala traz **duas** (*"A primeira pessoa"*, linha 27 · *"A segunda"*, linha 29). Se havia placeholder marcando a terceira, **ele não sobreviveu à extração**. Registro porque fui informado de que ele existe e no texto ele não está — **não contei nada disso como frase a dizer nem como defeito de voz.**
2. **D14 · linha 33** reinstala conteúdo riscado pelo ⟲ do BRIEFING §5 (*"~~perguntas de teste~~"*): *"Teste de personalidade pergunta assim: você valoriza momentos de solidão para refletir e recarregar as energias?"*. Lane de estrutura (A3) — registro sem veredito. **Risco de voz anexo:** *"recarregar as energias"* é linguagem de energia na boca dela, família adjacente à frase vetada em 09/07, aqui em forma de zombaria do teste.

---

## 6. CONTAGEM

| Categoria | Defeitos |
|---|---:|
| Léxico vetado / morto | **0** |
| Apelido `as Nove Línguas` | **3** |
| Regras de linguagem (BRIEFING §8 · PROMESSA §5) | **3** |
| Voz | **4** |
| Gravabilidade | **10** |
| **Total** | **20** |

**Elemento mais limpo:** D21 (passo 3) — nenhum defeito registrado.
**Elementos mais carregados:** D18 (objeção) com 5 · D20 (passo 2) com 2 defeitos de voz, um deles reprovando sozinho.
