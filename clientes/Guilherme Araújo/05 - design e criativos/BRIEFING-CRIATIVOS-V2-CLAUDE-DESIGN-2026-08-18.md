# BRIEFING DE CRIATIVOS v2 — LOTE DE TRÁFEGO, GUILHERME ARAÚJO

> STATUS: SPEC AUTOSSUFICIENTE PARA CLAUDE DESIGN · substitui o v1 como fonte de execução visual
> Data: 2026-08-18 · America/Sao_Paulo
> Supera: `BRIEFING-CARROSSEIS-POR-CONSCIENCIA-2026-08-18.md` §5 (spec visual). A copy de `C01`–`C06` do v1 continua válida e imutável.
> Base decisória: `VEREDITO-CRIATIVOS-PERFORMANCE-2026-08-18.md` · `AUDITORIA-PRE-SUBIDA-CAMPANHAS-2026-08-18.md` · `METODO-TRAFEGO-PAGO.md` §4 · skill `copywriter-senior-continuum`
> Mutação externa: nenhuma. Este documento não autoriza publicar nem ativar.

---

## 1. O que muda, e por que

O v1 produziu seis peças com copy boa (47–51/60) e arte abaixo do piso (30–35/60). O lote também ficou fora do mínimo do método: 6 peças, 1 formato, 3 ângulos, e a regra 70/30 invertida.

| # | Falha do v1 | Correção no v2 |
|---|---|---|
| 1 | 6 criativos, mínimo é 8–12 | **11 peças** |
| 2 | 1 formato, mínimo é 3 | **3 formatos**: carrossel, estático, Reel |
| 3 | 3 ângulos, mínimo é 4 | **6 ângulos**, incluindo prova, participação e desejo |
| 4 | 0% iteração de vencedor | **2 peças** herdam a mecânica de `ESCOLHA1CARTA` e o Reel vencedor entra como controle |
| 5 | zero prova social | **3 peças** usam falas literais de clientes reais |
| 6 | as 6 peças visualmente idênticas → risco de o algoritmo ler como duplicata | **5 assinaturas visuais distintas** (§4) |
| 7 | cards vazios, sem densidade | **piso de densidade medido** (§3.2) |
| 8 | oito telas na mesma escala, sem ritmo | **curva de escala obrigatória** por card (§3.3) |
| 9 | card do pivô igual aos outros | **tratamento exclusivo do pivô**, verificável (§3.4) |
| 10 | CTA em corpo de legenda | **verbo de ação é o maior elemento do card** (§3.5) |
| 11 | grade de construção e código interno impressos | **proibidos** (§3.7) |
| 12 | copy inventada, sem arqueologia | as peças novas nascem de **fala literal de cliente** (§2) |

---

## 2. Arqueologia — as falas que existem

A skill de copy é dura nisto: *título encontrado vence título inventado*. O v1 escreveu do zero. O v2 usa o que já foi dito.

### 2.1 Fala literal do ICP (a fonte de maior valor que temos)

Duas mensagens reais de clientes terapeutas, em `páginas script de vendas/assets/`:

> **[P-01]** *"Guilhermeeeee! Acabei de sair de uma conversa e fechei uma jornada de R$ 2.997! Sério, eu ainda tô processando. **Achei que seria difícil falar de investimento, mas quando a pessoa percebe o valor do que você oferece, tudo flui naturalmente.**"*

> **[P-02]** *"Guilherme do céu!!! Acabei de fechar uma jornada de R$ 5.000 usando o script. **O mais incrível é que a cliente praticamente se vendeu sozinha. Nunca imaginei que pudesse ser tão simples!**"*

O que essas duas frases entregam, e que nenhuma peça do v1 tinha:

- **a objeção identitária, nas palavras dela:** *"Achei que seria difícil falar de investimento"*. Isso vale por três depoimentos e é exatamente a tese que o `C06` tentava argumentar sem provar;
- **o estado B, nas palavras dela:** *"tudo flui naturalmente"* e *"nunca imaginei que pudesse ser tão simples"*;
- **prova com número real e verificável.**

### 2.2 Fala do Guilherme (fonte de posicionamento, não de hook)

Da destilação da call de 04/08:

- **[C-39]** *"todo mundo já está cansado […] 'ganhe um diagnóstico, ganhe um mapeamento'"* → o próprio cliente diagnostica **mercado saturado**. Confirma a decisão de não abrir peça com promessa de diagnóstico gratuito.
- **[C-30]** *"São terapeutas sistêmicas, cartomantes, mas principalmente terapeutas sistêmicas."*
- **[C-32]** *"A galera que quer ser terapeuta fica muito em cima do muro."* → aspirante é temperatura menor, não público-alvo da capa.
- **[C-19]** *"Essas pessoas quentíssimas, elas não precisam de enrolação. É direto."*

### 2.3 Lacuna declarada

Não temos transcrição de call com o comprador final nem DMs do ICP além dos dois prints. As peças `C01`–`C06` permanecem com copy inventada, lapidada mas não encontrada. Isso está registrado como limitação, não escondido.

---

## 3. Sistema visual v2 — o que estava errado e como se mede agora

Paleta, tipografia, formato e margens do v1 **permanecem** (§5.3, §5.4, §5.5 do v1). O que muda é tudo que governa densidade, ritmo e hierarquia.

### 3.1 A régua que decide

> **O card é julgado a 135 pixels de largura, não a 1080.** Esse é o tamanho real no feed. Toda regra abaixo existe para sobreviver a essa redução.

### 3.2 Piso de densidade (corrige os cards vazios)

A mancha de texto precisa ocupar, da área segura (1080 × 1350 menos margens de 96 px e faixa inferior de 180 px):

| Tipo de card | Ocupação mínima | Ocupação máxima |
|---|---:|---:|
| capa | **45%** | 70% |
| corpo | **38%** | 65% |
| pivô | **40%** | 60% |
| síntese | **42%** | 68% |
| CTA | **35%** | 60% |

Card abaixo do piso: **aumentar o corpo dentro da faixa da §5.5 do v1 até atingir o piso.** Se ainda faltar, reduzir a largura da coluna de texto para forçar mais linhas. Nunca reescrever a copy.

Espaço negativo tem borda e propósito. Vazio é área que não trabalha.

### 3.3 Curva de escala (corrige o ritmo plano)

As oito telas não podem ter o mesmo peso. Escala relativa obrigatória, tomando o corpo padrão como 100%:

| Card | Papel | Escala | Fundo |
|---:|---|---:|---|
| 1 | capa | **150%** | escuro |
| 2 | contexto | 100% | claro |
| 3 | **pivô** | **170%** | **escuro, e é o único card escuro do miolo** |
| 4 | desenvolvimento | 95% | claro |
| 5 | desenvolvimento | 95% | claro |
| 6 | desenvolvimento | 100% | claro |
| 7 | síntese | 125% | claro |
| 8 | CTA | 135% no verbo | escuro |

*Teste:* olhando a prancha de contato sem ler, os cards 1, 3 e 8 têm que saltar. Se as oito telas parecerem iguais, a curva não foi aplicada.

### 3.4 O card do pivô (corrige o pior erro do v1)

O card 3 é o produto do carrossel. Ele precisa de **três coisas ao mesmo tempo**, e a ausência de qualquer uma reprova a peça:

1. **inversão de fundo** em relação aos cards vizinhos;
2. **escala 170%** do corpo padrão;
3. **mudança de estado da geometria** — a linha que estava inteira se parte, os pontos que estavam soltos se conectam, a divisão que existia se recompõe.

*Teste único:* cubra o texto do card 3 e do card 2. Ainda dá para dizer qual é o pivô? Se não, refazer.

### 3.5 CTA (corrige o card 8)

- o **verbo** (`Siga`, `Escolha`, `Comente`) é o **maior elemento gráfico do card**, em Manrope 600, mínimo 68 px;
- o resto da frase vem abaixo, em corpo;
- assinatura `Guilherme Araújo` em Manrope 26 px, na base segura;
- nenhum outro elemento compete.

### 3.6 Ênfase (corrige o `C03`)

Quando a copy tem duas alturas, **a segunda é a que carrega a virada e recebe a escala maior.** Vale para todas as capas em duas partes.

Correção nominal e obrigatória: no `C03-01`, **`E depois?` maior que `A sessão foi profunda.`** Foi invertido no v1.

### 3.7 Proibições novas (somam-se às do v1 §5.8)

- **grade de construção visível.** A grade posiciona, não decora. Se ela aparece no PNG final, o card está reprovado;
- **código interno do carrossel** (`C01`, `C04`…) impresso em qualquer parte da arte;
- **barra de progresso no rodapé.** O contador `01/08` no canto superior direito basta, e o Instagram já desenha os pontos;
- **cartas de tarô** enquanto `D-01` não for decidida;
- mais de **um** elemento gráfico por card.

---

## 4. Assinatura visual por peça (a regra anti-duplicata)

`METODO-TRAFEGO-PAGO.md` §4.1: *"o sistema fingerprinta o criativo; variação superficial é lida como duplicata e compete consigo mesma."*

As seis peças do v1 tinham a mesma fonte, paleta, layout e ausência de imagem. Para o classificador de entrega, isso tem chance real de ser lido como **uma peça com seis textos** — e num orçamento de R$20/dia elas competiriam entre si.

Cada peça recebe **uma assinatura dominante e exclusiva**. Paleta e tipografia continuam as mesmas; o que muda é a estrutura de composição.

| Peça | Assinatura | Como se reconhece a 135 px |
|---|---|---|
| `C01` | **Divisão** | toda tela partida em dois campos, que se recompõem no card 7 |
| `C02` | **Pergunta gigante** | uma pergunta ocupa metade da tela nos cards 1 e 3; miolo em bloco único de leitura |
| `C03` | **Percurso** | uma linha horizontal atravessa os oito cards e se completa no final |
| `C04` | **Três colunas** | comparação em colunas verticais, com pontos de diagrama crescendo de 1 para 3 |
| `C05` | **Numeral gigante** | algarismos `1`, `2`, `3` em 220 px, dominando a tela |
| `C06` | **Ruído contra clareza** | linhas sobrepostas à esquerda que se organizam à direita |
| `C09` | **Documento** | a captura de tela real é o objeto central; formato de 5 cards, não 8 |
| `C10` | **Escolha** | três blocos numerados, cada um um card inteiro; formato de 6 cards |
| `C13` | **Estático** | uma imagem só, sem sequência |

---

## 5. As peças

### 5.1 Mapa do lote

| ID | Ângulo | Formato | Cards | Consciência | Estado |
|---|---|---|---:|---|---|
| `C01` | dor: oposição falsa | carrossel | 8 | inconsciente | copy pronta, **refazer arte** |
| `C02` | dor: lacuna de formação | carrossel | 8 | inconsciente | copy pronta, **refazer arte** |
| `C03` | dor: continuidade | carrossel | 8 | consciente do problema | copy pronta, **refazer arte** |
| `C04` | educação: formatos | carrossel | 8 | consciente da solução | copy pronta, **refazer arte** |
| `C05` | educação: método | carrossel | 8 | consciente da solução | copy pronta, **refazer arte** |
| `C06` | objeção invertida: venda | carrossel | 8 | consciente da solução | copy pronta, **refazer arte** |
| `C09` | **prova / case** | carrossel | 5 | consciente da solução | **copy nova, §5.2** |
| `C10` | **participação / espelho** | carrossel | 6 | consciente do problema | **copy nova, §5.3** |
| `C13` | **prova, formato estático** | estático | 1 | consciente da solução | **copy nova, §5.4** |
| `C11` | **desejo / o depois** | Reel | — | consciente da solução | **roteiro, §5.5 — não é Claude Design** |
| `C12` | controle | Reel existente | — | — | usar como está, sem produzir |

Copy de `C01`–`C06`: **exatamente** a da §3 do briefing v1. Não reescrever, não resumir, não completar. Só a arte muda.

---

### 5.2 `C09` — prova

```
FICHA
Leitor: terapeuta que sabe o valor do que entrega e trava na hora de falar dinheiro.
Estágio: consciente da solução -> a primeira linha começa no mecanismo/diferença.
Temperatura: morna. Sofisticação: saturado -> não prometer mais alto, provar diferente.
A -> B: "falar de investimento é constrangedor" -> "dá para falar e fluir".
Emoção-ponte: permissão. Ação única: seguir o perfil.
Hook: ENCONTRADO, fala literal de cliente [P-01].
Objeção endereçada: identitária ("tenho vergonha de cobrar").
```

**Cards**

1. **Capa** · `"Achei que seria difícil falar de investimento."`
2. `Quem escreveu isso é terapeuta. Escreveu ao sair de uma conversa.`
3. **Pivô · a captura de tela real, íntegra** — sem retoque, sem moldura decorativa
4. `Ela não mudou o que entrega. Mudou o que combina antes de entregar.`
5. **CTA** · `Siga o perfil para ver como isso se estrutura.`

**Direção visual**

| Card | Composição | Elemento |
|---:|---|---|
| 1 | fundo `#070C09`; a frase entre aspas ocupa os 2/3 superiores, Cormorant 92 px; aspas em dourado, texto em creme | nenhum grafismo; a citação é o objeto |
| 2 | fundo creme; texto alinhado à esquerda no terço superior, 58 px | uma linha fina que sai do texto e aponta para baixo, sugerindo o que vem |
| 3 | fundo `#0C1410`; a captura ocupa 78% da largura, centralizada, com sombra editorial discreta e canto arredondado de 16 px | **este é o pivô**: fundo escuro, objeto real, sem texto sobreposto. Não recortar a mensagem. Não destacar o valor com seta, círculo ou marca-texto |
| 4 | fundo creme; duas frases em escalas diferentes, a segunda maior | dourado apenas em `combina antes` |
| 5 | fundo `#070C09`; `Siga` em Manrope 600, 72 px; resto abaixo em 44 px | assinatura na base segura |

**Regras específicas**

- a captura entra **como está**. Cortar apenas o topo com nome de contato e foto, por privacidade;
- **não** adicionar selo, "resultado real", "prova social", estrelas ou qualquer carimbo. O print prova sozinho; carimbo enfraquece;
- **não** ampliar nem colorir o valor. O leitor encontra o número; apontar para ele transforma testemunho em anúncio de renda.

---

### 5.3 `C10` — participação

Herda a mecânica que tem o melhor custo por seguidor da conta: `AD|ESCOLHA1CARTA`, R$1,87. A mecânica não é a carta — **é a escolha**. Isso a torna reutilizável mesmo se `D-01` proibir cartas.

```
FICHA
Leitor: terapeuta em atendimento, que reconhece a cena antes de nomear o problema.
Estágio: consciente do problema -> a primeira linha começa no espelho.
Temperatura: fria a morna. Sofisticação: saturado.
A -> B: "é falha minha" -> "é falta de estrutura".
Emoção-ponte: reconhecimento. Ação única: seguir o perfil.
Hook: família pergunta identitária. Origem: construído sobre [C-32] e as cenas de [P-01] e [P-02].
Objeção endereçada: identitária ("o problema sou eu").
```

**Cards**

1. **Capa** · `Terapeuta: qual destas três você já disse esta semana?`
2. `1. "Fiz um bom atendimento e ela não voltou."`
3. `2. "Sei o valor do meu trabalho. Só não sei dizer em voz alta."`
4. `3. "Se eu cobrar o que vale, ela vai embora."`
5. **Pivô** · `As três dizem a mesma coisa. Falta combinado entre o que você entrega e o que você conduz.`
6. **CTA** · `Siga o perfil. Cada uma dessas frases vira um mapa aqui.`

**Direção visual**

| Card | Composição | Elemento |
|---:|---|---|
| 1 | fundo `#070C09`; pergunta em Cormorant 88 px, três linhas | três marcas verticais finas em dourado no lado direito, uma para cada opção |
| 2 | fundo creme; numeral `1` em 180 px, dourado, à esquerda; a fala entre aspas à direita, 60 px | a primeira das três marcas verticais acende |
| 3 | mesmo grid do card 2, numeral `2` | segunda marca acende |
| 4 | mesmo grid do card 2, numeral `3` | terceira marca acende |
| 5 | fundo `#0C1410`; frase central, Cormorant 82 px | **pivô**: as três marcas se juntam numa só linha contínua; dourado em `combinado` |
| 6 | fundo `#070C09`; `Siga` em Manrope 600, 72 px | assinatura na base |

Cards 2, 3 e 4 usam **exatamente** o mesmo grid, posição e escala. A repetição é o que faz a escolha existir.

---

### 5.4 `C13` — prova, formato estático

Um card só. Existe para dar o terceiro formato ao lote e para testar prova sem o custo de atenção de um carrossel.

```
FICHA
Estágio: consciente da solução. Temperatura: morna.
Emoção-ponte: permissão. Ação única: seguir o perfil.
Hook: ENCONTRADO, fala literal [P-02].
```

**Peça**

- fundo `#070C09`;
- no terço superior, em Cormorant 84 px, creme, com `se vendeu sozinha` em dourado:
  `"A cliente praticamente se vendeu sozinha."`
- abaixo, a captura de tela real de `prova-5000.jpeg`, ocupando 60% da largura, alinhada à esquerda;
- no rodapé seguro, Manrope 34 px: `Relato de uma terapeuta. Siga o perfil.`
- nenhum outro elemento.

---

### 5.5 `C11` — desejo, Reel

**Não é peça de Claude Design.** É roteiro para Guilherme gravar. Entra aqui porque o lote precisa do segundo formato e porque o ângulo de desejo não existe em nenhuma outra peça.

Duração alvo: 30 a 40 segundos. Vertical. Legenda queimada obrigatória, porque a maior parte assiste sem som.

| Tempo | Fala | Direção |
|---|---|---|
| 0–3s | `Você não precisa vender melhor. Você precisa combinar antes.` | rosto, close, sem introdução, sem "oi gente" |
| 3–12s | `Uma terapeuta me escreveu semana passada dizendo que achava que ia ser difícil falar de investimento. E que, quando a pessoa entendeu o que ia acontecer, fluiu.` | mesma tomada, sem corte |
| 12–25s | `O que mudou não foi a técnica dela. Foi ter começo, meio e fim combinados antes da primeira sessão.` | corte seco, novo enquadramento |
| 25–35s | `A pessoa entende onde está entrando. E você sabe o que precisa sustentar.` | volta ao close |
| 35–40s | `Se você trabalha com processo terapêutico, segue aqui. É disso que eu falo.` | fim, sem tela de CTA animada |

**Regras:** zero corte a cada duas palavras · zero música de trilha genérica · zero texto na tela além da legenda · o rosto abre e fecha.

---

## 6. Prompt mestre para o Claude Design

Anexar **este documento inteiro** mais `Foto Guilherme - LP.jpeg`, `prova-2997.jpeg` e `prova-5000.jpeg`. Colar o bloco abaixo antes de pedir qualquer lote.

```text
Crie as peças seguindo exatamente a copy e a direção deste briefing v2.

FORMATO
1080 x 1350 px por card, proporção 4:5.
Margem segura de 96 px nos quatro lados.
Nenhum texto essencial nos 180 px inferiores.
Contador do carrossel (01/08, 01/05, 01/06) no canto superior direito, Manrope 24 px.

MARCA
Luxo editorial sistêmico. Profundo, silencioso, estruturado e humano.
Não parecer campanha institucional, clínica, coach, banco ou esoterismo genérico.

PALETA FECHADA
Verde profundo #070C09 · Verde base #0C1410 · Verde de card #111A14
Dourado fosco #C9A961 · Creme #F2EBDA · Verde acinzentado #8A9E8E · Borda #1E2E20

TIPOGRAFIA
Display: Cormorant Garamond 400-600. Corpo e CTA: Manrope 400-600.

AS SEIS REGRAS QUE DECIDEM
1. DENSIDADE. A mancha de texto ocupa no mínimo 38% da área segura em cards de
   corpo e 45% na capa. Card vazio é card reprovado. Para atingir o piso, aumente
   o corpo ou estreite a coluna. NUNCA reescreva a copy.
2. RITMO. As telas não têm o mesmo peso. Capa 150%, corpo 95-100%, pivô 170%,
   síntese 125%, CTA com o verbo em 135%.
3. PIVÔ. O card do pivô inverte o fundo em relação aos vizinhos, salta para 170%
   e muda o estado da geometria. Teste: cobrindo o texto, ainda dá para dizer qual
   é o pivô? Se não, refaça.
4. CTA. O verbo (Siga, Escolha) é o MAIOR elemento do card, Manrope 600, mínimo
   68 px. Nada compete com ele.
5. ÊNFASE. Quando a copy tem duas alturas, a SEGUNDA parte recebe a escala maior.
6. UM elemento gráfico por card, fino e funcional ao argumento.

PROIBIDO
Grade de construção visível. Código interno do carrossel impresso na arte.
Barra de progresso no rodapé. Cartas de tarô. Emoji, clipart, stock, neon,
glassmorphism, mandala, chakra, galáxia, cristal, cifrão, cérebro, mapa do Brasil,
prancheta, selo de "resultado real", estrelas, seta ou círculo apontando valores.
Não gerar o rosto de Guilherme: usar apenas a imagem de referência anexada.
Qualquer texto que não esteja neste briefing.

COPY É IMUTÁVEL
Não resumir, corrigir, completar, criar subtítulo, inserir preço ou credencial.
Você decide apenas quebra de linha, escala dentro da faixa e posição.

ASSINATURA VISUAL
Cada peça tem uma estrutura de composição exclusiva (§4). Duas peças do lote não
podem parecer a mesma peça com texto trocado.

SAÍDA
Um projeto editável por peça. Páginas nomeadas CXX-01 em diante.
PNG sRGB 1080 x 1350, sem watermark.
Antes de exportar, gere a prancha de contato com os cards a 135 px de largura e
confirme: a capa é legível, e os cards 1, 3 e 8 saltam sem que se leia o texto.
```

**Comando de partida:**

```text
Leia o briefing inteiro antes de desenhar. Comece pelo C09, as 5 telas, usando a
copy exata da §5.2 e a captura prova-2997.jpeg anexada. Entregue também a prancha
de contato a 135 px. Não desenhe as outras peças ainda.
```

**Depois do piloto aprovado:**

```text
Mantendo o sistema aprovado no C09, produza C10, C13 e depois refaça C01 a C06 com
a copy original intacta e as seis regras da §3 aplicadas. Cada peça com a assinatura
visual da §4. Não gere C07 nem C08.
```

---

## 7. Gates de exportação

Nenhum PNG sai sem os oito itens. Reprovar em um devolve a peça.

- [ ] prancha de contato a **135 px** gerada e conferida;
- [ ] capa legível a 135 px;
- [ ] cards 1, 3 e 8 saltam sem leitura;
- [ ] nenhum card abaixo do piso de densidade;
- [ ] nenhuma grade visível, nenhum código interno, nenhuma barra de progresso;
- [ ] verbo do CTA é o maior elemento do último card;
- [ ] copy conferida caractere a caractere contra o briefing;
- [ ] duas peças quaisquer do lote não se confundem a 135 px.

---

## 8. Gate antislop da copy nova

Escala de 1 a 10 por dimensão. Piso: 42/60 e tensão acima de 4.

| Peça | Diretividade | Ritmo | Confiança | Autenticidade | Densidade | Tensão | Total | Estado |
|---|---:|---:|---:|---:|---:|---:|---:|---|
| `C09` | 9 | 8 | 9 | **10** | 8 | 9 | **53** | aprovada |
| `C10` | 9 | 9 | 8 | 9 | 8 | 9 | **52** | aprovada |
| `C13` | 9 | 7 | 9 | **10** | 9 | 8 | **52** | aprovada |
| `C11` | 8 | 8 | 8 | 9 | 8 | 8 | **49** | aprovada |

Autenticidade em 10 nas peças de prova porque a frase não foi escrita: foi dita por uma cliente.

**A nota é da copy. Ela precisa ser repetida na arte** — foi exatamente aí que o v1 perdeu 16 pontos por peça.

---

## 9. Compliance Meta (checar antes de subir)

`METODO-TRAFEGO-PAGO.md` §4.3: conformidade **antes** de subir, porque reprovação em série machuca a conta.

As peças `C09` e `C13` mostram valores fechados por uma cliente. Depoimento com ganho financeiro específico entra numa zona sensível das políticas da Meta.

**Como reduzir o risco sem perder a força:**

- **não** transformar o valor em manchete. A manchete é a frase emocional, o número aparece dentro do print;
- **não** apontar para o valor com seta, círculo ou destaque;
- **não** escrever nada que sugira que o mesmo resultado se repete para quem vê;
- na legenda do anúncio, incluir: `Relato de uma cliente. Resultados variam conforme prática, público e condução de cada profissional.`
- **preparar variante `C09-b` e `C13-b` com o valor borrado**, prontas para trocar caso haja reprovação. Produzir junto, não depois.

---

## 10. Ordem de produção

| Lote | Peças | Por quê nesta ordem |
|---|---|---|
| **piloto** | `C09` | valida o sistema novo com a peça de maior probabilidade de resultado e menor custo de produção |
| **2** | `C10`, `C13` | completam os ângulos ausentes e o terceiro formato |
| **3** | `C01` a `C06` refeitos | maior volume, e já com o sistema calibrado |
| **4** | `C09-b`, `C13-b` | variantes de compliance |
| — | `C11` | grava Guilherme, fora do Claude Design |
| — | `C12` | já existe, não produzir |
| bloqueado | `C07` | espera os três eixos do Mapeamento |
| bloqueado | `C08` | espera o Mapa Breve existir |

**Onde tudo isso vai:** uma campanha, um conjunto, 8 a 10 anúncios ativos. `METODO-TRAFEGO-PAGO.md` §5.3 proíbe fragmentar com verba abaixo de R$100/dia. Estrutura e regras de kill em `09 - operação/RUNBOOK-SUBIDA-ONDA-1-TRAFEGO-PERFIL.md`.

---

## 11. Desvios assumidos do método

Dois mínimos do `METODO-TRAFEGO-PAGO.md` §4 continuam abertos neste lote. Ficam declarados aqui em vez de serem escondidos atrás dos números que passaram.

**11.1 — Hooks por ângulo: 1, e o mínimo é 3.**
O lote tem 11 peças cobrindo 6 ângulos, mas um hook por ângulo. Cumprir o mínimo literal exigiria 18 peças, e a R$20/dia elas não recebem impressão suficiente para produzir leitura. **Decisão:** rodar com um hook por ângulo neste ciclo e abrir 3 hooks apenas sobre o ângulo que vencer. Testar hook é mais barato que testar conceito, mas só depois de saber qual conceito sustenta o teste.

**11.2 — Portfólio 70/30: hoje está em 18/82, e a regra pede 70/30.**
Só `C10` e `C12` herdam mecânica vencedora. A razão é real: os vencedores da conta (`ESCOLHA1CARTA`, `A-CARTA-DO-JULGAMENTO`) venceram num **posicionamento diferente** — cartomancia para público de espiritualidade. Não existe, hoje, vencedor validado no posicionamento de terapeuta para ser iterado.

**Consequência que precisa ser dita:** este é um lote de descoberta, não de escala. A regra 70/30 passa a valer no ciclo 2, sobre o que vencer aqui. Quem ler os resultados precisa saber disso antes de gastar, não depois.

---

*Nenhuma campanha, verba, publicação ou integração foi criada ou alterada.*
