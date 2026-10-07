# Quiz Teto — direção de criativos

> Iniciado em 02/10/2026 · Fechamento desta etapa em 03/10/2026 · Documento interno de nossa operação. Proposta isolada, sem integração canônica ou ativação de mídia. Este arquivo define a arquitetura; ainda não contém novas copys para o público.

## 1. Decisão

**Atualização direta do usuário em 03/10:** primeira onda promete somente o quiz gratuito. Anúncios prometendo as aulas pertencem à segunda onda, para quem já fez o quiz. Acesso às duas aulas: imediato pela PagTrust, durante um ano; temas: aumento da Permissão e resolução de dívidas, dentro da metodologia do Gui. Nenhum desses temas constitui promessa de resultado do questionário.

Nós anunciamos o **Teste da Permissão gratuito** que antecede a oferta Teto. A entrega imediata é um resultado de nível — BAIXO, MÉDIO ou ALTO — calculado a partir das respostas. O nome interno do funil é Teto; o teste apresentado ao público continua sendo Teste da Permissão.

O gargalo desta rodada é a congruência entre anúncio e resultado. A maior alavanca é mostrar a entrega do teste e sua relação com o teto financeiro sem apresentar o questionário como solução para romper esse teto. A aquisição do quiz e a venda das aulas são decisões distintas dentro do mesmo percurso.

## 2. Leitura da sessão solicitada

Sessão identificada: `cse_01DSEtiUejWB1hx4CCCGmn8i`, recuperada do cache local do Claude Cowork, em leitura somente. O objeto possui 100 eventos recentes, sequências 3569–3684, e informa `hasOlder: true`. Portanto, **a leitura cobre o trecho recente disponível, não o histórico integral da sessão**.

| Âncora | Procedência | O que estabelece |
|---|---|---|
| seq. 3575 | Mensagem do usuário | Terceira página derivada do quiz Permissão, mudando a oferta; depoimentos fora por enquanto. |
| seq. 3597 | Resposta do Claude e briefing elaborado | Manutenção das perguntas, pontuação e resultados; duas aulas gravadas por R$97 ou 12x R$9,70; aba Teto. Nome do produto: Como romper o Teto Financeiro e se Libertar das Dívidas. |
| seq. 3597, ressalvas | Limites declarados pelo Claude | Entrega por e-mail e divisão temática das aulas não confirmadas. O quiz não pergunta sobre dívidas. Duração das aulas, prazo de acesso e aplicabilidade de Elton Euler ausentes. |
| seq. 3664 | Resposta do Claude | Explica o marcador de dados legais e permite continuar a implementação da página. Não é aprovação de anúncios. |

O briefing de implementação que aparece na conversa governa aquela construção. Sua ordem de não alterar texto público não foi convertida em instrução para esta tarefa nova de anúncios. As afirmações do Claude continuam classificadas como elaboração ou síntese, salvo confirmação por fonte do negócio ou configuração conferida.

Arquivo técnico de leitura: `ler-sessao-cowork.cjs`. Ele confere a identidade da conversa, decodifica o cache em memória e não altera a fonte. Não foram reproduzidos no repo outros dados do aplicativo ou da conta.

## 3. Fatos conferidos no repo

| Campo | Base para o criativo | Fonte |
|---|---|---|
| Público principal | Terapeutas e mentoras; cartomantes também aparecem como opção de atuação | `public/config/teto.json`, T01 |
| Promessa imediata | Ver o nível de Permissão conforme as próprias respostas | T01 e T19 |
| Funcionamento | Questionário com pontuação e classificação em três faixas | Configuração de pontuação e T19 |
| Esforço | 14 respostas até o primeiro resultado; até duas perguntas adicionais depois, conforme a faixa | T01–T19; ALTO pula T20–T22 |
| Exemplo de pergunta | Reação ao dizer o preço, incluindo a possibilidade de falar com tranquilidade | T07 |
| Prova da entrega | Interface e resultado reais do quiz | T19; demonstrar percurso local com respostas de exemplo |
| Condição | Quiz gratuito | T01 |
| Próxima oferta | Duas aulas gravadas; R$97 à vista ou 12x R$9,70 | T24 e destilação de WhatsApp, §10 |
| Resultado ALTO | O teste pode não encontrar uma trava forte de Permissão | T19 e rota ALTO |
| Limite | Indicativo por autorrelato; não diagnóstico clínico; não estabelece a origem da trava | T19 |

**ICP operacional desta rodada:** profissionais que se reconheçam nas categorias da abertura do quiz. Isso é recorte de aquisição sustentado pela oferta, não validação concluída de ICP ou pesquisa de linguagem do público.

**Promessa:** resultado de nível de Permissão. **Mecanismo desta etapa:** perguntas → pontuação → faixa e leitura das respostas. **Oferta do anúncio:** acesso gratuito ao teste. O mecanismo de transformação das aulas exige seu conteúdo real; não será inventado a partir do nome do produto.

## 4. Big idea e eixos

**Big idea proposta, para orientar nossa produção:** antes de atribuir o teto financeiro à Permissão, verificar como ela aparece nas respostas — inclusive quando não aparece como trava forte.

Não é headline final. É uma tese editorial congruente com a possibilidade de resultado ALTO. O quiz não comprova causalidade financeira nem valida cientificamente a escala. A prova que temos nesta etapa é de funcionamento e entrega.

Invariantes: mesma entrada gratuita, categorias profissionais da abertura, resultado de nível, destino do quiz Teto, uma ação de responder ao teste. Não misturar sessão Diagnóstica de duas horas, Desafio de 28 dias ou oferta de Signos.

| Família | Ângulo e pivô interno | Consciência de entrada, como hipótese | Prova | Execuções |
|---|---|---|---|---|
| A · nível | E: existem três faixas no teste. Mas: nenhuma faixa deve ser presumida antes das respostas. Por isso: conduzir à classificação do questionário. | Curiosidade sobre a solução / sobre o teste | Três faixas reais | Régua tipográfica + vídeo explicando as faixas |
| B · pergunta | E: a hora de apresentar o preço é uma situação perguntada no quiz. Mas: as respostas incluem desconforto e tranquilidade, sem presumir o caso da pessoa. Por isso: abrir pelo item e convidar ao restante do teste. | Reconhece o tema de precificação | Tela T07 e opções reais | Estático de pergunta + Gui apresentando o item |
| C · entrega | E: um convite para teste pode deixar a entrega abstrata. Mas: aqui existe uma tela concreta de resultado. Por isso: mostrar o que a pessoa verá e como as respostas levam ao nível. | Avalia se vale responder | Percurso e T19 reais | Captura de tela + vídeo demonstrativo |

**Modo:** exploração de ângulos. Ainda não existe base vencedora documentada para esta oferta. Os pares de formato compartilham tese, oferta, ângulo e CTA; mudar formato não conta como ângulo novo.

**Taxonomia dos elementos:** A = segmentação → curiosidade → classificação/demonstração → CTA com valor; B = pergunta/gancho → funcionamento → entrega → CTA com valor; C = demonstração → limite da entrega → CTA com valor. Não preencher a posição de depoimento com relato inventado. A adaptação usa demonstração real.

Outros eixos controlados: temperatura (aquisição e remarketing separados), prova (interface, sem testemunho), abertura (uma por família), formato (estático e vídeo), execução (fala do Gui ou tela). Objeções e cenas de público dependem de fonte; não são criadas por inferência.

## 5. Ordem de produção

1. Produzir A, B e C no mesmo formato estático, mantendo condição e CTA equivalentes. Assim a primeira rodada compara rotas de argumento com menor variação de apresentação.
2. Adaptar as três famílias para gravação do Gui e demonstração, conservando a função do anúncio. Não chamar essa adaptação de lateralização de vencedor.
3. Para a régua, usar apenas rótulos BAIXO, MÉDIO e ALTO. Não converter pontuação do teste em percentual científico de Permissão.
4. Para T07 e T19, usar a interface real. Qualquer resultado demonstrado deve estar identificado como exemplo; sem nome, contato ou resposta de lead real.
5. Conferir promessa, quantidade de perguntas, CTA e percurso ALTO antes de entregar as peças.

Para o molde fotográfico anterior, a referência tinha 4 palavras na faixa, 18 no bloco principal, 7 no convite e o preço em bloco separado, contando tokens separados por espaços. No novo anúncio, o selo deve comunicar a gratuidade do teste; o preço das aulas não ocupa esse papel. A régua tem outra distribuição e não precisa receber a mesma contagem artificialmente.

Gravação: uma abertura específica por família, apresentação do teste, demonstração correspondente e uma ação final. A duração será ajustada após escrever e cronometrar a fala; não converter a duração do anúncio em prazo de conclusão do quiz.

## 6. Referências e aprendizado

Foram vistos os prints 12 e 13 de `05 - design e criativos/referencias-biblioteca-2026-10-02/`: régua de perfis e pergunta sobre hábitos. Eles sustentam uma referência visual de anúncio de quiz. O próprio cabeçalho registra duas horas de atividade em 02/10/2026; **não é comprovação de escala**. Não transferir suas cinco perguntas, um minuto, perfis ou promessa de riqueza para nossa peça.

O prompt canônico `PROMPT-CLAUDE-DESIGN-REGUA-QUIZ-PERMISSAO-E-SIGNOS-2026-10-02.md` foi lido como acervo de estrutura. Não reaproveitar o texto de venda da sessão de mapeamento no funil Teto. Também não adotar seu título de faixa como se medisse faixa de remuneração.

Indicadores para o plano de mídia: entrada no quiz, primeiro resultado exibido, lead capturado, chegada à oferta, clique no checkout e compra atribuída quando a integração real existir. CTR é sinal de entrada, não vencedor comercial. Sem tracking implantado e critério da conta, não declarar vencedor. Verba e janela não foram definidas nesta tarefa.

## 7. Gate e pendências

O STATUS canônico de 02/10 informa ausência de PILARES aprovado e léxico com fonte D. A exceção inferida no lote anterior foi rejeitada como autorização geral. Ao receber a pergunta sobre uma exceção para este lote, o usuário decidiu: **“Preparar a estrutura e concluir os pilares primeiro”**. Não há exceção concedida. A execução passa a consolidar `PILARES.md` deste pacote e a coleta de fontes do público, antes das copys.

Após a resposta factual de 03/10, os pilares foram reavaliados por onda: 4/5 para aquisição do quiz e 3/5 para as aulas. Conteúdo detalhado das aulas não é requisito para anunciar a entrega do teste. O usuário informa que não possui falas originais; o corpus D continua faltando. A próxima etapa é coleta, sem inventar linguagem de compradores ou reclassificar copy do quiz como fala direta do público.

Além desse gate, antes de ativar mídia: confirmar o endereço público do quiz Teto, testar o percurso publicado e verificar captura/atribuição. O endereço sugerido na conversa do Cowork não foi confundido com URL publicada. O checkout conferido no config é destino da oferta, não destino do anúncio de quiz.

## 8. Fontes, isolamento e validação

- Sessão Cowork identificada e recorte recente verificado; fontes do aplicativo preservadas.
- STATUS, DECISOES, kernel e antessala do Gui; briefing da terceira página; destilação de WhatsApp; configuração Teto; acervo e revisão de criativos de 01/10; prompt de régua de 02/10.
- Métodos: construção de criativos DR, lateralização, pivô de conversão, skill de copy; proposta isolada `execução Codex/metodos/METODO-EIXOS-DE-VARIACAO-DE-CRIATIVOS.md` usada como matriz, sem declará-la promovida.
- Nenhum config, original, arquivo Claude, orçamento ou campanha alterado. Novos arquivos deste pacote permanecem na execução Codex do cliente.
- Verificação: identidade da sessão; recorte incompleto declarado; T01/T07/T19/T24 conferidos; contagem e desvio ALTO conferidos; referências vistas e grau de evidência declarado. Gate mecanizado da casa executado em 03/10/2026 00:01: **✅ nada a propagar**. Isso confirma a propagação da casa, não aprova os pilares ou libera mídia. Pacote indexado na antessala geral e do cliente.
