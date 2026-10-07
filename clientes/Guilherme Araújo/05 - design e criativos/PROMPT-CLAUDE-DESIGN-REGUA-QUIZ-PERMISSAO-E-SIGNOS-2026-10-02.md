# PROMPT PARA CLAUDE DESIGN · ESTÁTICOS "RÉGUA" DOS DOIS QUIZZES

> STATUS: PRONTO PARA USO · colar o bloco da §2 direto no Claude Design
> Data: 2026-10-02 · America/Sao_Paulo
> Peças: 2 estáticos (Permissão e Signos), cada um em 9:16 e 4:5 = 4 artboards
> Modelo de referência: print 12 da pasta `referencias-biblioteca-2026-10-02` (régua de faixas)
> Destino dos anúncios: `/permissao/` e `/signos/`
> Mutação externa: nenhuma

---

## 1. Ficha (o que a copy assume)

| | Permissão | Signos |
|---|---|---|
| Para quem | terapeutas e mentoras que estudam, atendem bem e sentem que o financeiro não acompanha | público geral que acompanha signo e cartas |
| Estágio | sabe do problema, não sabe a causa | curiosidade, sem problema declarado |
| Virada | você atende bem, mas o dinheiro não acompanha, por isso vale medir a Permissão | cada elemento recebe um conselho na semana, por isso vale saber o seu |
| Ação única | Descubra o seu nível de Permissão | Descubra o conselho do seu elemento |

Tudo o que está escrito nas peças já existe nas páginas dos quizzes (faixas de resultado, grupos por elemento, "não é previsão"). Nada de número, prazo ou promessa nova.

**Não usar na arte:** faturamento, "em X minutos", "vagas limitadas", depoimento, foto de pessoa gerada.

---

## 2. O prompt

```
Crie 4 artboards em português do Brasil: dois anúncios estáticos, cada um em dois
formatos. São anúncios de quiz. O modelo é uma "régua": título em forma de
pergunta e, abaixo, uma pilha de barras horizontais arredondadas, cada barra com
um rótulo à esquerda e um texto curto à direita. Peça tipográfica, limpa, sem
foto, sem ilustração, sem ícone decorativo, sem textura.

FORMATOS
- A1 e B1: 1080 x 1920 px (9:16). Deixe 250 px livres no topo e 340 px livres
  na base, sem nenhum texto nessas faixas.
- A2 e B2: 1080 x 1350 px (4:5). Margem lateral de 96 px.
O conteúdo é o mesmo entre o 9:16 e o 4:5 de cada anúncio; muda só o respiro.

BASE VISUAL (igual nos 4)
- Fundo chapado #030712, sem gradiente.
- Tipografia: Inter em tudo. Título em peso 800, entrelinha apertada.
- Texto principal #FFFFFF. Texto secundário #9CA3AF.
- Barras: altura 104 px, cantos arredondados 24 px, fundo #111827, borda de
  1 px #1F2937, 20 px de espaço entre elas. Rótulo à esquerda em caixa alta,
  peso 700. Texto da direita em peso 500, alinhado à direita.
- Tudo centralizado na vertical como um bloco único. Nada encostado nas bordas.
- Use os textos exatamente como estão abaixo, com os mesmos acentos. Não
  acrescente nenhuma frase, selo, número ou emoji além dos indicados.

=====================================================================
ANÚNCIO A · TESTE DA PERMISSÃO (artboards A1 e A2)

Ordem dos elementos, de cima para baixo:

1. Linha pequena, caixa alta, espaçamento entre letras largo, cor #16A34A:
   PARA TERAPEUTAS E MENTORAS

2. Título em duas linhas, branco, com "nível de Permissão" em #16A34A:
   Qual é o seu
   nível de Permissão?

3. Três barras, nesta ordem. Cada barra tem um preenchimento colorido que
   parte da esquerda, por trás do texto, com 22% de opacidade, e uma faixa
   sólida de 8 px da mesma cor na borda esquerda:

   BAIXO   | entrega, e na hora de receber trava   | cor #DC2626, preenchimento 30%
   MÉDIO   | vive no quase                         | cor #F59E0B, preenchimento 60%
   ALTO    | o teto está em outro lugar            | cor #16A34A, preenchimento 100%

4. Uma linha de apoio, branca, peso 500, centralizada:
   Você atende bem e o financeiro não acompanha?

5. Botão em forma de pílula, fundo #16A34A, texto branco peso 700:
   Descubra o seu nível de Permissão

6. Linha final, pequena, #9CA3AF:
   Teste gratuito · Guilherme Araújo

=====================================================================
ANÚNCIO B · O CONSELHO DO SEU ELEMENTO (artboards B1 e B2)

Ordem dos elementos, de cima para baixo:

1. Linha pequena, caixa alta, espaçamento entre letras largo, cor #9CA3AF:
   CONSELHO SEMANAL DAS CARTAS

2. Título em duas linhas, branco, com "elemento" em #F59E0B:
   Qual é o seu
   elemento?

3. Quatro barras, todas com o mesmo tamanho e sem preenchimento parcial (aqui
   não há hierarquia entre elas). Cada uma tem só a faixa sólida de 8 px na
   borda esquerda e o rótulo na cor do elemento:

   FOGO    | Áries · Leão · Sagitário        | cor #F97316
   TERRA   | Touro · Virgem · Capricórnio    | cor #84CC16
   AR      | Gêmeos · Libra · Aquário        | cor #38BDF8
   ÁGUA    | Câncer · Escorpião · Peixes     | cor #818CF8

4. Uma linha de apoio, branca, peso 500, centralizada, em até duas linhas:
   Toda semana, um conselho das cartas para o seu elemento
   e um aprofundamento para o seu signo.

5. Botão em forma de pílula, fundo #FFFFFF, texto #030712 peso 700:
   Descubra o conselho do seu elemento

6. Linha final, pequena, #9CA3AF:
   Não é previsão. É uma orientação para a sua semana.

=====================================================================
CONFERÊNCIA ANTES DE ENTREGAR
- Nenhum texto cortado, nenhuma palavra quebrada no meio.
- O texto da direita de cada barra cabe em uma linha; se não couber no 4:5,
  reduza o corpo só desse texto, nunca o do rótulo.
- Acentos conferidos: Permissão, MÉDIO, Áries, Leão, Sagitário, Capricórnio,
  Gêmeos, Aquário, ÁGUA, Câncer, Escorpião, orientação, previsão.
- Nomeie os artboards: A1-permissao-9x16, A2-permissao-4x5, B1-signos-9x16,
  B2-signos-4x5.
```

---

## 3. Trocas de título (mesmo molde, só muda o item 2)

**Permissão**

| # | Título | Palavra em verde |
|---|---|---|
| P1 | Qual é o seu nível de Permissão? | nível de Permissão |
| P2 | Em qual destas faixas você está hoje? | hoje |
| P3 | Você atende bem. E recebe em qual faixa? | recebe |

**Signos**

| # | Título | Palavra em âmbar |
|---|---|---|
| S1 | Qual é o seu elemento? | elemento |
| S2 | O que as cartas dizem ao seu elemento nesta semana? | nesta semana |
| S3 | Fogo, Terra, Ar ou Água: qual conselho é o seu? | o seu |

Para trocar no Claude Design: "No artboard A1 e A2, troque o título para: …, mantendo todo o resto."

---

## 4. Texto do anúncio no Gerenciador

**Permissão**
- Texto principal: Você estuda, atende bem e tem retorno de quem passa por você. E o financeiro não acompanha. Pode não ser técnica nem esforço. No Teste da Permissão você responde algumas perguntas e vê em qual nível está hoje: baixo, médio ou alto. É gratuito.
- Título: Descubra o seu nível de Permissão
- Descrição: Teste gratuito para terapeutas e mentoras
- Botão: Saiba mais

**Signos**
- Texto principal: Toda semana eu abro as cartas para cada elemento: Fogo, Terra, Ar e Água. No grupo do seu elemento, você recebe o conselho da semana e um aprofundamento para o seu signo. Não é previsão do que vai acontecer. É uma orientação para a sua semana.
- Título: Descubra o conselho do seu elemento
- Descrição: Conselho semanal das cartas
- Botão: Saiba mais

---

## 5. O que conferir antes de subir

- **"Teste gratuito"** vale para o quiz. A sessão de mapeamento (R$97) e o grupo de Signos são pagos e aparecem só no fim do quiz.
- **"ALTO · o teto está em outro lugar"** resume o resultado ALTO do quiz ("a Permissão não parece ser o que segura o seu financeiro"). Se o Gui preferir outra forma de dizer, é a única barra com margem de interpretação.
- **Signos ainda não vende:** o botão da oferta está sem link de checkout. Não rodar tráfego para `/signos/` antes dos links.
- **Cores dos elementos** são escolha minha, sem base em material do Gui. Troque se ele tiver paleta.
