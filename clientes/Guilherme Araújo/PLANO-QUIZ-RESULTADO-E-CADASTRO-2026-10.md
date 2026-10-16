# PLANO — Resultado do quiz e taxa de cadastro · `/permissao-mentoras/`

> STATUS: ✅ EXECUTADO em 16/10 (noite) como v6, aguardando publicação · `DEC-2026-10-16-001` mudou o §4: as ações e os textos saíram do material do Gui, sem esperar áudio dele; o vídeo por porta saiu (não é automático); o e-mail leva também o botão da Diagnóstica R$ 97. O percurso por tela entrou já na v6.
> Pedido do Victor (16/10): *"precisamos de um resultado mais robusto e elaborado para o quiz.. para aumentar a percepção de valor de recebimento. planeje. outra coisa: como aumentamos a taxa de cadastro em relação à visualização de página?"*
> Dados: Pixel `1259363302489132` de 15/10 0h a 16/10 13h; conector Meta, campanha `120255723458970210`. Análise do dia 2: `../../30-comercial/trafego-clientes/guilherme/relatorios/2026-10-16-analise-quiz-grupo-dia2.md`.

## 1. Onde o cadastro se perde hoje

Hoje **14% das visualizações viram cadastro** (12 Lead / 86 PageView). As perdas se dividem em três trechos:

| Trecho | Passagem hoje | Meta | Alavanca |
|---|---|---|---|
| capa → 1ª resposta | **26%** | 40% | §2.1 capa (v5 pronta) |
| 1ª resposta → resultado (16 perguntas, 4 inserções, carregamento) | **64%** | 75% | §2.2 medir e encurtar |
| resultado → cadastro | **86%** | 85–90% | §2.3 o cadastro passa a entregar algo (§3) |
| **visualização → cadastro** | **14%** | **~25%** | |

**Conta:** a visualização de página custa ~R$ 1,12 (R$ 44,84 / 40 nos anúncios). Com 14% de conversão, o cadastro sai a ~R$ 8–11; com 25%, a **~R$ 4,50**. São quase 2× mais cadastros com os mesmos R$ 20/dia.

O resultado aparece **antes** do cadastro, e 86% de quem o vê se cadastra. Por isso o resultado mais robusto não serve para trancar o cadastro: serve para dar motivo de deixar o contato (entrega por e-mail, §3.2) e para elevar a qualidade de quem chega ao grupo.

## 2. Taxa de cadastro: o que fazer, em ordem

### 2.1 Capa (maior perda: 74% saem)
- **v5 pronta** (`permissao-mentoras-v5.zip`): a faixa fala do grupo prometido no anúncio, e o subtítulo inclui cartomantes. Ler em 19/10.
- Se não passar de 35%, o próximo teste é a capa com a **promessa do que ela recebe** ("responda 14 perguntas e receba o seu Raio-X da Permissão + o convite do grupo") e uma linha de tempo ("3 minutos").

### 2.2 Meio do quiz (36% de quem começa desiste)
- **Primeiro, medir.** Hoje não se sabe em qual tela a pessoa sai: o `quiz_step` vai para o Pixel, mas a API não abre por tela. **v6 do engine:** a cada tela, um aviso leve (beacon) para a planilha, em aba própria `funil_permissao_mentoras`, com `lead_id`, `ultima_tela`, `quiz_versao` e UTMs. Uma linha por visitante, atualizada. Sem nome, só o percurso.
- **Depois, cortar com dado (22/10).** Candidatas, porque não pontuam nem aparecem no resultado: `p02_tempo_atende` e `p04_faturamento`. O faturamento interessa à venda do Gui, então passa para **depois do cadastro**, opcional, na tela do grupo. As 7 que pontuam (p05–p11) ficam: são a base do resultado novo.

### 2.3 Cadastro
- O título atual ("Para onde eu envio o seu resultado e o próximo passo?") promete o que ela **já viu**. Ele passa a prometer o que **ainda não recebeu**: o Raio-X completo por e-mail (§3.2) e o convite do grupo.

### 2.4 Posicionamento (sem decisão)
Reels: 26 visualizações → 2 cadastros. Stories: 14 → 2. Com n=2 de cada lado, não se decide nada. Reler em 22/10 com ≥100 visualizações.

## 3. Resultado robusto: o "Raio-X da Permissão"

**O nome não é "mapa":** o mapa da Permissão é o entregável da Diagnóstica paga (tela T24). Usá-lo no teste gratuito esvazia a oferta. A fronteira já está escrita no quiz (T21): **o teste mostra onde a trava aparece; o Diagnóstico mapeia de onde ela vem.** O Raio-X mostra *onde*, com profundidade, e para aí.

**O que sobe a percepção de valor:** personalização visível (os números dela), especificidade (qual porta, não só um nível), algo para fazer amanhã e algo que fica com ela.

### 3.1 A tela, na ordem

| # | Bloco | O que mostra | Fonte do dado | Novo no engine? |
|---|---|---|---|---|
| 1 | **Medidor** | o nível (BAIXO/MÉDIO/ALTO) num medidor de 0 a 21, com a posição dela marcada | pontuação atual | sim (`gauge`) |
| 2 | **As 4 portas da Permissão** | 4 barras com a % dela em cada porta; a mais alta destacada como **porta principal** | as 7 perguntas que já pontuam (abaixo) | sim (`dimensions`) |
| 3 | **Leitura da porta principal** | o que acontece nessa porta, na rotina de quem atende (1 parágrafo por porta, 4 no total) | texto: §4 | não (`text` com variante) |
| 4 | **"Você respondeu que…"** | os 3 cards atuais (formações, hora do preço, o que impede) | já existe | não |
| 5 | **Origem** | a resposta sobre a família de origem (p11), ligada à constelação (3 variantes) | p11 | não |
| 6 | **Próximos 7 dias** | 3 ações para a porta principal (12 no total), pequenas e possíveis | **método do Gui (fato)** | não (`cards`) |
| 7 | **Onde o teste para** | a fronteira de T21: onde aparece × de onde vem | já existe | não |
| 8 | Aviso | "indicativo, não diagnóstico clínico" | já existe | não |

**As 4 portas** (nomes provisórios, estrutura nossa; a redação final passa pelo §4):

| Porta | Perguntas | Máx. |
|---|---|---|
| **Pedir** (o preço sai menor, o desconto vem antes do pedido) | p06 hora do preço · p07 desconto | 6 |
| **Receber** (a culpa depois de cobrar) | p08 culpa | 3 |
| **Trocar justo** (entrega mais do que recebe) | p05 recebe o equivalente · p09 entrega a mais | 6 |
| **Crescer** (o teto, a lealdade à origem) | p10 teto · p11 família de origem | 6 |

Cada porta vira % do máximo. Empate: vale a ordem Crescer > Receber > Pedir > Trocar, da mais funda para a mais visível, coerente com o mecanismo (P3).

### 3.2 O que fica com ela
- **E-mail automático com o Raio-X completo**, disparado pelo Apps Script no cadastro (`MailApp`, sem custo e sem ferramenta nova): nível, as 4 portas, a leitura e as 3 ações. É o motivo concreto para o cadastro (§2.3), e a lead passa a ter o nome do Gui na caixa de entrada.
- **Fase 2, se o Gui gravar:** 4 vídeos de 60 a 90 segundos, um por porta, no lugar do parágrafo do bloco 3. É o maior salto de valor percebido e depende só dele.

### 3.3 Depois do cadastro, na tela do grupo (sem atrito no cadastro)
- **Pergunta aberta opcional:** *"O que acontece com você na hora de falar o valor?"* É a lacuna 5 do `lexico-icp/LACUNAS.md`: vira fonte contínua de frase `D` do público. É o que destrava o portão de escrita da conta.
- **Faturamento** (saiu do meio do quiz, §2.2), opcional.

## 4. O que trava a redação, e o caminho

A estrutura é nossa e pode ser construída já. **O texto do resultado é copy ao público:** o portão de ESCRITA está fechado (P4 reprova em `PILARES.md`, e o léxico não tem `D` confirmado). E o resultado é justamente a tela que descreve a dor, cujo balde está vazio.

| Peça | Quem | Caminho |
|---|---|---|
| **12 ações dos 7 dias** | **Gui (fato: é o método dele)** | mandar a estrutura (4 portas × 3 ações) e pedir as ações que ele já passa em atendimento. Em áudio serve |
| leituras das 4 portas + origem | nós, com o mecanismo já no ar (P3, telas T09 e T16) | **decisão do Victor:** declarar exceção de portão só para esta tela, como nos 7 anúncios de 14/10, **ou** esperar a confirmação dos prints |
| nomes das portas | nós | junto com as leituras |

**Recomendação:** exceção limitada à tela de resultado. O mecanismo, a voz e o aviso já estão no quiz publicado; o que muda é a profundidade, não a promessa. O risco é baixo e o prazo é curto: o grupo é gratuito até 31/10.

## 5. Ordem e prazo

| Quando | O quê | Dono |
|---|---|---|
| 16–17/10 | subir a v5 (capa + beacon) | Victor |
| 17/10 | **v6:** rastreio por tela; engine com `gauge` e `dimensions`; Code.gs com aba de funil e e-mail; config com o Raio-X estruturado e textos marcados `[[PENDENTE]]` | Claude |
| até 18/10 | 12 ações (Gui) + decisão de exceção (Victor) | Gui · Victor |
| 19/10 | textos fechados, teste de ponta a ponta, subir a v6 | Claude → Victor |
| 19/10 | ler a capa v5 | Claude |
| 22/10 | cortar perguntas com dado; ler posicionamento | Claude |
| 31/10 | fecho: visualização→cadastro e custo por cadastro antes × depois | Claude |

A capa (v5) e o resultado (v6) mexem em trechos diferentes do funil. Com o rastreio por tela, cada mudança se lê no próprio trecho, e o prazo de outubro não comporta uma mudança por semana.

**O Raio-X sobrevive a outubro:** a mesma tela serve ao caminho da Diagnóstica (T24) quando o grupo deixar de ser a oferta (P4, pergunta 5).

## 6. O que NÃO será feito agora
- Trancar o resultado atrás do cadastro: 86% já se cadastram, e o ganho seria pequeno.
- Mexer em anúncio ou orçamento antes de 18/10 (regra de 72h).
- Chamar o resultado de "mapa".
- Pergunta aberta no meio do quiz (aumenta a desistência).
