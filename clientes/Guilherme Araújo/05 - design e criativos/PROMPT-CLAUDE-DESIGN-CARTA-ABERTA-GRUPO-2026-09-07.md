# PROMPT PARA CLAUDE DESIGN — CARROSSEL "CARTA ABERTA"

> STATUS: PRONTO PARA USO · colar o bloco da §2 direto no Claude Design
> Data: 2026-09-07 · America/Sao_Paulo
> Peça: carrossel de 9 cards · Instagram · CTA `GRUPO`
> Direção gráfica definida por Victor em 07/09
> Mutação externa: nenhuma

---

## 1. Antes de colar, leia isto

**Uma coisa quebra este prompt se você não resolver antes: a foto.** O Claude Design não tem a imagem do Guilherme. O prompt manda construir a camada de fundo como um elemento único e substituível em todos os 9 artboards, para você trocar de uma vez no editor. Tenha o arquivo à mão.

O resto é copiar e colar.

---

## 2. O prompt

```
Crie um carrossel para Instagram com 9 artboards, formato 1080 x 1350 px (4:5),
em português do Brasil. É uma "carta aberta" de um professor de Cartomancia
Sistêmica para terapeutas e mentoras. Tom: íntimo, sério, adulto. Nada de
infográfico, nada de ícone decorativo, nada de gradiente colorido.

## FUNDO — o mesmo nos 9 cards

Todos os 9 artboards usam A MESMA fotografia de fundo, sangrando de borda a
borda, sem margem. Crie-a como um único elemento nomeado "foto-fundo" em cada
artboard, na camada mais ao fundo, para que possa ser substituída depois.

Enquanto não houver a foto real, use um placeholder fotográfico com esta
composição: um homem de chapéu fedora escuro, visto de lado, curvado sobre uma
mesa clara escrevendo à mão em um caderno; ambiente interno diurno, luz natural
suave vindo da esquerda, plantas e uma xícara desfocadas ao fundo. Enquadramento
médio, o homem ocupando o terço direito do quadro.

Sobre a foto vai uma camada de cor chapada em cima ("filtro"), que é o que muda
de card para card. Nunca use blur, nunca use vinheta, nunca duplique a foto.

## ALTERNÂNCIA DE FILTRO — esta é a espinha dorsal do design

| Card | Filtro | Cor do texto |
|---|---|---|
| 1 · capa | ESCURO — #0A0A0C a 74% de opacidade | branco |
| 2 | CLARO — #FFFFFF a 88% | preto |
| 3 | ESCURO — #0A0A0C a 82% | branco |
| 4 | CLARO — #FFFFFF a 88% | preto |
| 5 | ESCURO — #0A0A0C a 82% | branco |
| 6 | CLARO — #FFFFFF a 88% | preto |
| 7 | ESCURO — #0A0A0C a 82% | branco |
| 8 | CLARO — #FFFFFF a 88% | preto |
| 9 · CTA | QUASE PRETO — #000000 a 94% | branco |

Nos cards CLAROS a foto deve aparecer apenas como um fantasma, quase imperceptível.
Nos cards ESCUROS ela deve estar presente mas nunca competir com o texto: se
alguma linha de texto ficar sobre a área mais clara da foto, aumente a opacidade
do filtro naquele card até o texto ficar limpo. Legibilidade vence estética.

## PALETA

- Verde de destaque: #00C86B — usado UMA ÚNICA VEZ, na faixa do card 1
- Branco: #FFFFFF
- Preto de texto: #111111
- Preto de fundo: #000000
- Amarelo de alerta: #FFC107 — apenas no ícone do card 9

Nenhuma outra cor. Nenhum gradiente.

## TIPOGRAFIA

- Título da capa (card 1): sans-serif geométrica muito pesada (Extra Bold ou
  Black), caixa alta, tracking levemente negativo. Tamanho enorme: a linha
  "CARTA ABERTA:" ocupa quase toda a largura útil.
- Faixa da capa: a mesma sans-serif, Bold, caixa alta, tamanho médio.
- Subtítulo da capa e TODO o corpo dos cards 2 a 9: serif clássica de leitura
  (tipo Lora, Source Serif ou Georgia). É a serif que dá o tom de carta.
- Dentro do corpo: **negrito** para ênfase, *itálico* para as nuances, CAIXA ALTA
  em negrito para os títulos internos dos cards 3, 5, 7, 8 e 9.

Tamanho mínimo do corpo: 34 px. Entrelinha 1,45. Isto é lido no celular.

## GRID E COMPOSIÇÃO

- Margem interna de 90 px em todos os lados, nos 9 cards.
- Cards 2 a 8: texto alinhado à ESQUERDA, nunca justificado. Bloco de texto
  centralizado verticalmente no artboard.
- Card 1: bloco ancorado no terço inferior.
- Card 9: bloco centralizado, e este é o único card com texto centralizado
  horizontalmente.
- Respeite parágrafos como blocos separados, com respiro claro entre eles.
- Um indicador discreto de progresso não é necessário: o Instagram já mostra.

## O CONTEÚDO DOS 9 CARDS — use o texto exatamente como está

### CARD 1 — CAPA
Linha 1, sans black, caixa alta, branco, gigante:
CARTA ABERTA:

Logo abaixo, faixa retangular sólida em #00C86B ocupando toda a largura útil,
com texto sans bold caixa alta em #0A0A0C dentro dela:
COMUNICADO ÀS TERAPEUTAS E MENTORAS

Abaixo da faixa, serif regular em branco, duas linhas:
Você cuida de todo mundo, mas
onde, quando e quem cuida de você?

### CARD 2 — filtro claro
Você fala de espiritualidade,
Trabalha com pessoas,
Estuda consciência,

Mas será que você tem um lugar onde pode falar **sem precisar esconder partes de quem é?**

### CARD 3 — filtro escuro
**VOCÊ ENSINA AUTENTICIDADE, MAS AINDA ESCONDE PARTES DA SUA PRÓPRIA HISTÓRIA?**

Você acolhe suas clientes quando elas falam sobre intuição, mediunidade, espiritualidade e experiências fora do corpo.

*Mas quando o assunto é você…*

Você pensa duas vezes antes de abrir a boca.

**Por medo** de parecer "estranha",
**Por medo** de ser julgada,
**Por medo** de não ser compreendida,
**Por medo** de não ter sua vulnerabilidade acolhida,

### CARD 4 — filtro claro
Você pode estar na **Aliança Divergente** do Elton Euler e no **Novo Sistema** da Ana Lisboa…

Pode estudar autoconhecimento e espiritualidade há anos.

E ainda assim sentir:

**"Eu não posso falar tudo o que vivo aqui."**

**Talvez** você esconda sua mediunidade,
**Talvez** silencie experiências espirituais,
**Talvez** guarde até experiências de contatos extraterrestres,

Não porque não queira compartilhar, mas porque você não quer ser julgada e chamada de "estranha".

### CARD 5 — filtro escuro
Então eu quero te fazer uma pergunta:

**QUANTO DA SUA VERDADE VOCÊ TEM DEIXADO DO LADO DE FORA PARA CONSEGUIR PERTENCER A ESSES GRUPOS?**

Você não precisa convencer ninguém sobre suas experiências.

*Mas também não deveria precisar negá-las ou escondê-las para ser aceita.*

Existe uma diferença entre ter discernimento e viver constantemente se censurando.

### CARD 6 — filtro claro
E se existisse um espaço formado por pessoas que também estudam, questionam, sentem e experimentam?

Um espaço onde você pudesse:

• *aprender*
• *compartilhar*
• *questionar*
• *ouvir outras perspectivas*
• *aprofundar seus estudos*

**Principalmente, ser cuidada enquanto aprende**

É essa a proposta do Grupo de Estudos da Permissão Sistêmica.

### CARD 7 — filtro escuro
**TODA TERÇA-FEIRA, ÀS 20H.**

Um encontro recorrente para terapeutas e mentoras do autoconhecimento e da espiritualidade que desejam aprofundar sua jornada **sem precisar vestir uma máscara para pertencer.**

Assinatura mensal: **R$ 97**
Plano semestral: **R$ 497**

*Não é sobre ter todas as respostas.*

É sobre ter um espaço onde você possa fazer perguntas que talvez não tenha coragem de fazer em outros lugares.

### CARD 8 — filtro claro
**TALVEZ VOCÊ TENHA ENCONTRADO MUITOS LUGARES PARA APRENDER, MAS POUCOS ONDE VOCÊ TAMBÉM PODE SER CUIDADA.**

E talvez seja exatamente por isso que você continua procurando.

Porque conhecimento você **encontra**,
Conteúdo você **encontra**,
Cursos você **encontra**,

**Mas pertencimento, acolhimento e espaço seguro para continuar se descobrindo, são outra história.**

Se alguma parte sua acabou de pensar:

*"É disso que eu estava precisando."*

**Então não ignore esse sinal.**

### CARD 9 — CTA, quase preto, tudo centralizado
Ícone de alerta ⚠️ em #FFC107, seguido na mesma linha por, em serif bold caixa alta, branco:
ATENÇÃO: O GRUPO JÁ TEM LISTA DE ESPERA.

Abaixo, serif regular branca:
As vagas para o próximo mês são limitadas.

Por isso, estou organizando uma lista de interesse.

**QUER SABER COMO PARTICIPAR?**

Em seguida, o maior elemento de texto do card, serif bold caixa alta:
COMENTE "GRUPO" AQUI EMBAIXO.

A palavra GRUPO, e apenas ela, em #00C86B. Todo o resto da linha em branco.

Fechando, serif regular branca, menor:
Eu vou te enviar as informações para você entrar na lista de espera e garantir sua vaga.

## REGRAS DE QUALIDADE

- Nunca justifique texto. Alinhamento à esquerda, exceto o card 9.
- Nenhum texto encosta na margem de 90 px.
- Nenhum ícone, emoji, seta, aspas decorativas ou elemento gráfico além do que
  está descrito. O ⚠️ do card 9 é a única exceção.
- Nenhuma sombra em texto. Se precisou de sombra para ler, o filtro está fraco:
  escureça ou clareie o filtro.
- O verde #00C86B aparece exatamente duas vezes no carrossel inteiro: a faixa do
  card 1 e a palavra GRUPO no card 9. Ele é o fio que amarra a abertura ao
  fechamento.
- Mantenha a hierarquia: em cada card há um único elemento que é o maior. Nos
  cards de corpo, é o título em caixa alta.
```

---

## 3. Depois que gerar

Três coisas a conferir antes de aprovar, na ordem:

1. **Trocar a `foto-fundo`** pela imagem real do Guilherme nos 9 artboards.
2. **Ler no celular, não na tela grande.** Os cards 3, 4 e 8 são os mais densos; é neles que o corpo de 34 px vai ser testado.
3. **Conferir a alternância inteira de uma vez**, em miniatura. O ritmo escuro-claro-escuro é o que faz o carrossel parecer projetado em vez de montado.

---

## 4. Observações registradas, que não bloqueiam

**A palavra-chave é `GRUPO`, não `PERMISSÃO`.** A peça planejada para a camada 2 em `PECA-CAMADA-2-PERMISSAO-2026-09-04.md` usa `PERMISSÃO` com entrega de três perguntas. Esta usa `GRUPO` com entrega de lista de espera. São mecânicas diferentes e podem coexistir, desde que não rodem para a mesma pessoa ao mesmo tempo.

**Apareceu um preço novo: R$ 97 mensal.** A matemática reversa de `PLANO-DE-MIDIA.md` foi feita sobre R$ 497 semestral. Se a entrada principal virar R$ 97/mês, o lucro por venda e todos os tetos de custo mudam. Não bloqueia a arte; bloqueia a régua de decisão da campanha.

---

*Nenhuma peça foi publicada, nenhum anúncio criado.*
