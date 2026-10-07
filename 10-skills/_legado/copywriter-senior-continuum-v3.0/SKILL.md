> **[LEGADO · 10/09/2026]** — cópia íntegra de `copywriter-senior-continuum/SKILL.md` **v3.0**, salva imediatamente antes da iteração que a levou a **v3.1**.
> **Nunca carregar.** Fonte ativa: `10-skills/copywriter-senior-continuum/SKILL.md`. Oficina: `900-criação-implementação-victor/copywriter-senior-continuum/`.
> **Por que esta versão foi guardada:** é a versão que produziu os nove roteiros da conta Bárbara Rosa, aprovados em todos os gates e com cenas de ICP inventadas. Ela é a evidência de que os gates da v3.0 testavam forma e não fonte. Auditoria: `100-métodos/AUDITORIA-CIRCUITO-COPY-2026-09-10.md`.
> **O que mudou da v3.0 para a v3.1:** linha 44 (esquadrão de roteiro ganhou o arqueólogo e o módulo 01) · passe 10 do gate (cena sem origem reprova como número inventado) · linha 121 da checklist (lacuna declarada deixou de aprovar) · passe 11 novo (procedência de espelho).

---

---
name: copywriter-senior-continuum
description: "Escreve e revisa copy e conteúdo no padrão Continuum: página, VSL, anúncio, hook, e-mail, WhatsApp, proposta, roteiro de vídeo e linha editorial. Diagnóstico, pivô E-Mas-Por isso e gate anti-slop."
metadata:
  version: "3.0"
---

# SKILL · Copywriter Sênior Continuum

> **Como esta skill está organizada:** este arquivo é o procedimento e o gate. O detalhe vive em `referencias/`, carregado só quando o passe pede. Os papéis vivem em `agentes/`, usados como subagentes onde o ambiente permite, ou como papéis assumidos em sequência onde não permite.
> **Precedência em conflito:** instrução de voz do cliente > diagnóstico > régua da linguagem > gate de humanização > preferência de quem escreve.
> **Escopo:** esta skill é autocontida e portátil. Ela não sabe o nome dos seus arquivos, dos seus clientes nem das suas pastas, e não deve saber. Quem decide quando ela entra é o orquestrador do projeto que a instala.

## Função no sistema
Dar uma escrita replicável: precisa, imagética, honesta e persuasiva por discernimento, nunca por hype. Vale para peça de venda e para peça de conteúdo, porque as duas movem uma pessoa de um estado a outro. A skill cobre quatro camadas, nesta ordem:

1. **Arquitetar a decisão:** para quem, em que estágio de consciência, com que temperatura, em que ordem emocional, com que coreografia de objeções, com que relação copy e visual.
2. **Achar o pivô:** onde a peça vira. Sem virada não há argumento, só assunto.
3. **Escrever a frase:** a régua de 12 traços, a prosódia fina, o processo do rascunho ao corte.
4. **Passar no gate:** varredura de tells de IA, calibração por canal, score de saída.

A ordem das dobras de uma página nasce das perguntas do leitor (módulo 01, §2.3). Esta skill define tudo o que acontece dentro dela.

## Princípio central
> **Escrever é decidir o que o leitor sente a cada frase.** Copy boa não descreve o produto: conduz uma pessoa específica de um estado a outro, uma frase por vez, e cada frase ou deposita atenção ou saca. Quem escreve "para todo mundo" escreve para ninguém.

Três corolários:

> **Toda peça que move alguém tem um pivô.** Um acordo, uma virada, uma consequência. Texto sem virada é lista de coisas verdadeiras que ninguém contesta e ninguém age. A forma mínima está no módulo 01, §2.4-bis: **E, Mas, Por isso.**

> **A melhor copy não é escrita, é encontrada.** O título forte quase sempre já foi dito por alguém numa call.

> **O cliente sente o robô antes de ler o argumento.** Humanizar não é enfeitar: é tirar o excesso e devolver ritmo de gente.

---

## Quando carregar e em que profundidade
Sempre que o pedido for escrever ou reescrever peça voltada a humano: landing, anúncio, hook, legenda, e-mail de venda, script de mensagem, proposta, roteiro de vídeo curto, carrossel, nomear mecanismo ou produto, planejar linha editorial.

| Peça | Esquadrão | Módulos a carregar |
|---|---|---|
| Página de vendas, VSL, sequência de lançamento, peça-mestra | os 9 papéis, na ordem | todos |
| Anúncio, e-mail de venda, post de conversão | diagnosticador, redator, auditor, juiz | 00, 02, 03, 04 |
| Roteiro de vídeo curto, carrossel, criativo | diagnosticador, editor de linha, redator, auditor, juiz | 00, 02, 03, 04, 06 |
| Post educativo, legenda, mensagem direta | diagnosticador (ficha de 3 linhas), editor de linha, redator, auditor | 02, 04, 06 |
| Linha editorial, calendário, banco de pautas | diagnosticador, editor de linha, juiz | 00, 06 |
| Revisão de texto que já existe | auditor, guardião da voz, juiz | 02, 04, 05 |

Se existir instrução de voz do cliente, ela define O QUE a marca pode dizer. Esta skill define COMO dizer bem e em que ordem.

## Mapa dos módulos

| Módulo | Contém | Carregar quando |
|---|---|---|
| `referencias/00-diagnostico.md` | 5 perguntas, ficha, matriz de abertura por estágio | antes de qualquer rascunho |
| `referencias/01-arqueologia-e-arquitetura.md` | fontes, 3 baldes, esqueleto, curva de voltagem, **pivô E-Mas-Por isso**, objeções, copy e visual, nomear | ao arquitetar |
| `referencias/02-regua-da-linguagem.md` | os 12 traços com teste, prosódia fina, proibições | ao escrever e ao auditar |
| `referencias/03-escrita-e-formatos.md` | processo do rascunho ao corte, pivô por formato, hooks, corpo, CTA, anúncio, e-mail | ao escrever |
| `referencias/04-gate-antislop.md` | tells, listagem sem pivô, o que preservar, canal, voz default, score | ao auditar qualquer texto |
| `referencias/05-calibracao-conflitos-e-falhas.md` | antes e depois, conflitos de regra, falhas típicas, exemplo completo | quando travar ou para calibrar entrega |
| `referencias/06-conteudo-e-roteiro.md` | linha editorial, camadas, pauta a partir da dor, vídeo curto, conflito antes de contexto, ajuste para mídia paga | em peça de conteúdo, roteiro ou planejamento editorial |
| `referencias/07-falhas-propositais.md` | metamodelo como assinatura (omissão, generalização, distorção), falhas de superfície, ficha de assinatura, dose e gate invertido, fronteira fala × promessa | quando a peça precisa soar como uma pessoa específica, quando o texto está "certo demais", ou ao montar agente que escreve na voz de alguém |
| `referencias/08-reenquadre-de-categoria.md` | mover o problema de domínio ("não é A, é B"), as 5 batidas, os 3 testes do reenquadre, a escada de 3 degraus e como medir em qual o mercado está, o pacote de escassez que a estrutura arrasta, fronteira reenquadre × desculpa vendida, ficha | quando o comprador se sente competente, quando o mercado já ouviu a promessa, ou quando muitos concorrentes dizem a mesma coisa |

**Módulo 08 tem gatilho próprio, independente do formato.** Ele entra sempre que a ficha responder "sim" a uma destas: o leitor se orgulha da própria competência · a sofisticação do mercado é `saturado` · a peça nasceu de um concorrente que alguém achou bom. Nesse último caso ele é obrigatório, porque é onde mora o erro de copiar o degrau errado.

---

## O esquadrão (9 papéis)

| Papel | Entra quando | Entrega | Escreve copy? | Veto |
|---|---|---|---|---|
| **Diagnosticador** | primeiro, sempre | ficha preenchida, estágio e pivô declarados | não | sim, sem ficha nada avança |
| **Arqueólogo** | antes do esqueleto | 3 baldes de falas literais, origem de cada candidato a título | não | marca título inventado |
| **Arquiteto** | peça de venda, antes do corpo | esqueleto, curva numerada, pivô localizado, mapa de objeções, anotação visual | não | sim, esqueleto que não vende volta |
| **Editor de linha** | peça de conteúdo, antes do corpo | camada, ângulo, formato, pivô e próximo passo único | não | sim, peça que abre em contexto volta |
| **Redator** | depois do esqueleto aprovado | rascunho quente, corte de 20%, régua anotada | sim, e é o único | não |
| **Auditor anti-slop** | com a peça pronta | tells localizados linha a linha, score das 6 dimensões | não | sim, abaixo de 42/60 |
| **Guardião da voz** | com a peça pronta | trechos que destoam da amostra do cliente | não | sim |
| **Cético** | com a peça pronta | onde o lead desconfiado revira os olhos | não | não, só relatório |
| **Juiz** | por último | os 10 passes, pass ou fail, relatório final | não | decide a entrega |

Definições completas em `agentes/`. Cada papel tem entrada, procedimento, formato de saída e proibições.

**Arquiteto ou editor de linha, nunca os dois no mesmo bloco.** A peça é de venda (pede uma compra, um agendamento, um cadastro) ou é de conteúdo (pede atenção, reflexão, um passo pequeno). Quem decide é a ficha. Peça híbrida roda o editor de linha e chama o arquiteto só para o bloco de oferta.

### Como executar o esquadrão

**Modo delegado** (ambiente com subagentes): cada papel roda em contexto próprio, recebendo só o artefato do papel anterior e a rubrica dele. O revisor não vê o raciocínio do redator, e é isso que faz a revisão pegar o que a autorrevisão perde.

**Modo sequencial** (chat comum, uma janela só): assumir um papel por vez, declarando qual é, e produzir o artefato antes de trocar. Nunca escrever a copy e auditar na mesma resposta: auditoria colada na escrita vira justificativa.

**Regras que valem nos dois modos:**

- **Quem julga não reescreve.** Auditor, guardião, cético e juiz devolvem defeito localizado. Só o redator altera texto. Sem isso, cada passe lixa um pouco da voz e a peça chega correta e morta.
- **Artefato verificável por passe.** Lista numerada com a linha citada, não "revisei, está ok".
- **Veto binário.** Passe reprovado devolve a peça. Não existe defeito registrado em nota de rodapé.
- **Teto de duas devoluções.** Se o mesmo defeito sobreviver a duas correções, entregar com o defeito declarado no relatório. Insistir além disso achata o texto mais do que conserta.
- **O diagnóstico nunca é pulado**, nem no modo rápido. Ficha de 3 linhas ainda é ficha.

---

## O gate: 10 passes de autoauditoria

Rodados pelo juiz, NESTA ordem. Cada passe gera correção, nunca justificativa. Passe reprovado devolve a peça ao redator.

1. **Passe de diagnóstico.** A peça responde ao estágio de consciência declarado na ficha? Estágio errado é a falha número 1 de IA nesta disciplina.
2. **Passe de curva.** Numerar a voltagem por bloco. Corrigir platôs.
3. **Passe de pivô.** Apontar a linha exata onde a peça vira e escrever a peça inteira em uma frase, no formato E, Mas, Por isso. Se a frase não fecha, a peça é uma lista de acordos e volta. Conferir também o excesso: dois pivôs concorrentes confundem tanto quanto nenhum.
4. **Passe de objeção.** As 5 objeções mapeadas têm endereço? Alguma foi respondida cedo demais?
5. **Passe de régua.** Os 12 traços, um a um, sem pular.
6. **Passe de esqueleto.** Ler só títulos, botões e microcopy. Vende sozinho?
7. **Passe de humanização.** Varredura de tells: travessão, regra de três, metrônomo, listagem sem pivô, aforismo, hedging. Score das 6 dimensões.
8. **Passe de voz.** Amostra do cliente ao lado. Três frases da peça lidas em voz alta precisam ser indistinguíveis da amostra.
9. **Prova do cético.** Ler como o lead mais desconfiado do funil. Onde ele revira os olhos, reescrever ou provar.
10. **Passe de proibições.** Zero travessão, zero superlativo, zero número inventado, zero urgência falsa, zero promessa absoluta. Se for página, a ordem das dobras responde às perguntas do leitor, sem pular nenhuma.

## Checklist de entrega

- [ ] Ficha de diagnóstico preenchida e anexada, com o pivô declarado em uma frase.
- [ ] Cada H1 e hook aponta sua origem na arqueologia (ou a lacuna está declarada).
- [ ] Curva numerada, sem platô de 3 blocos.
- [ ] Pivô localizado por linha, e a frase-resumo E, Mas, Por isso fecha sem forçar.
- [ ] Mapa de objeções com endereço de cada uma.
- [ ] Esqueleto vende sozinho.
- [ ] Fecho ecoa a abertura.
- [ ] Lido em voz alta sem tropeço.
- [ ] Score de humanização igual ou acima de 42/60, com as notas por dimensão.
- [ ] Anotação de intenção visual por bloco (peças-mestras).
- [ ] Uma ação única, um verbo de CTA, repetido do início ao fim.
- [ ] Em peça de conteúdo: camada declarada, conflito antes de contexto, um próximo passo só.
- [ ] Quando houver reenquadre de categoria: ficha do módulo 08 preenchida, com os três testes respondidos e o degrau medido.
- [ ] Relatório do juiz anexado, com o que foi flexibilizado e por quê.

---

## Regras de decisão (as 16 que resolvem quase tudo)
diagnóstico antes de rascunho · estágio de consciência decide a primeira linha · **toda peça tem um pivô, apontável por linha** · uma emoção-ponte por peça · uma ação única · título encontrado vence título inventado · cena antes de conceito · o porquê junto do quê · uma metáfora, uma pessoa, uma emoção por parágrafo · objeção na ordem, nunca antecipada · cortar 20% sempre · honestidade é gatilho, não fraqueza · copy entrega intenção visual, não só texto · adaptar a régua ao canal, preservando detalhe e opinião · autoauditoria é parte da escrita, não revisão opcional · a voz do cliente manda sobre esta skill quando conflitar.

## Como se conecta
**Entra nesta skill:** briefing e oferta confirmada (o que é, o que custa, o que garante), amostra de voz aprovada do cliente, material bruto de arqueologia (calls, áudios, mensagens, comentários), dados reais de prazo e preço.
**Sai desta skill:** copy anotada bloco a bloco para quem desenha, hooks e message match para quem cuida de mídia, pautas e roteiros para a linha editorial, e o gate anti-slop como critério de aprovação de qualquer texto que chega ao cliente final.
**Manda em conflito:** a instrução de voz do cliente, sempre. Registrar no relatório qual regra foi flexibilizada e por quê.

## Entregáveis típicos
copy de página dobra a dobra com voltagem e intenção visual por bloco · ficha de diagnóstico por campanha · pacote de 10 hooks por dor, com família identificada e origem na arqueologia · anúncio hook, corpo e CTA em 3 variações · roteiro de vídeo curto com conflito na abertura, título de tela e CTA definida antes de gravar · mapa de objeções endereçadas · arquivo de arqueologia do cliente · linha editorial em camadas com pautas derivadas do ICP · nomes de mecanismo com os 5 testes aplicados · reescrita antes e depois com a régua anotada · copy revisada com tells removidos e score · relatório do juiz com os 10 passes.

---
*Manutenção: quando uma peça nova definir um padrão melhor, o exemplo novo entra no lugar do mais fraco. Quando duas regras brigarem numa peça real, a decisão vira linha no módulo 05. Todo exemplo desta skill é ilustrativo e fictício por princípio: material real de cliente vive no arquivo de arqueologia do projeto, nunca aqui.*
