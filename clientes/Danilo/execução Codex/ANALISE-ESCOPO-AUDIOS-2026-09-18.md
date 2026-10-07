🟢 PROMOVIDO em 02/10/2026 · destinos: clientes/Danilo/STATUS.md

# Danilo / Kraken — entendimento de escopo após os áudios de 18/09/2026

Análise interna. Não é proposta aceita nem atualização canônica. Pedido de Victor: analisar o escopo, considerando que nós criamos a página. Nenhuma implementação ou comunicação externa executada.

## 1. Entendimento central

Danilo pede ajuda concreta para implantar a página e a infraestrutura de compra com plataformas prontas e integrações, liberando sua atenção para desenvolver e validar o produto. A entrega compreende o caminho da apresentação do produto ao pedido pago e preparado para expedição. Não se resume à redação da página.

O gargalo declarado é a quantidade de coisas a organizar para lançar, somada ao produto ainda em desenvolvimento. A alavanca é assumir uma implantação delimitada da venda online; isso não equivale a assumir toda a operação da empresa.

## 2. Evidências dos três áudios do print

Fontes: arquivos em `transcricoes-2026-09-18/`, nesta pasta. São transcrições automáticas sem revisão auditiva; os trechos abaixo reproduzem o texto do ASR, não constituem citações probatórias.

| ID | Fonte / trecho | Conteúdo e natureza |
|---|---|---|
| E01 | 160504, 00:00–00:29 | PIX com valor base e parcelamento com juros: requisitos explícitos. Retirar split e fazer acerto mensal: possibilidade, não decisão fechada. |
| E02 | 160504, 00:31–00:55 | Emissão automática de nota, cálculo automático de frete e impressão de etiquetas: requisitos explícitos. Plataforma ainda não escolhida. |
| E03 | 160504, 00:58–01:13 | Tudo isso precisa estar pronto para o lançamento; ele continua focado no desenvolvimento. Não fornece data de lançamento. |
| E04 | 160626, 00:00–00:10 | “se você puder entrar nessa parte de criar mesmo a página, usando plataformas prontas, sem precisar mexer em linha de código, só fazendo as integrações, aí ajudaria bastante.” Pedido explícito de implementação. |
| E05 | 160626, 00:10–00:32 | Possibilidade futura de vender cabos e outro equipamento inicialmente destinado a aluguel. Requisito de expansão do catálogo, não ordem para cadastrar tudo agora nem para construir sistema de locação. |
| E06 | 160821, 00:00–00:59 | Modelo da Compass: parceiro indica, empresa vende e expede; recompensa em equipamento. Danilo prefere repasse em dinheiro. Referência de outra operação, não regra Kraken já formalizada. |
| E07 | 160821, 01:02–01:37 | Segundo modelo: parceiro compra unidades com desconto, recebe do cliente e expede a partir do próprio estoque. Há parceiros vendendo em seus próprios marketplaces. |

Correspondência com o print: 16:05:04 = 1min14; 16:06:26 = 33s; 16:08:21 = 1min38. Horários e durações conferidos nos metadados.

## 3. Escopo de execução recomendado, sujeito à delimitação comercial

| Entrega | O que nós executamos | Dependência / limite |
|---|---|---|
| Página de venda | Estrutura, copy, visual e implementação em plataforma pronta; conectar compra e testar navegação móvel | Especificações, fotos, provas e condições reais do produto; direção visual disponível |
| Base de loja | Configurar produto inicial, pedido e estrutura que permita cadastrar outros produtos depois | Quantidade inicial de produtos deve ser delimitada; catálogo futuro não é produção incluída automaticamente |
| Pagamento | Configurar PIX no valor base, parcelamento com juros e confirmação do pedido | Conta recebedora, credenciamento, regras e custos do provedor; não desenvolver gateway |
| Nota fiscal | Configurar integração e gatilho de emissão compatíveis com a operação | Dados e parâmetros fornecidos pela empresa/contabilidade; não presumir que qualquer plataforma resolve isso nativamente |
| Frete e etiquetas | Configurar cálculo por endereço, opções de envio e geração de etiqueta para impressão | Origem, peso, dimensões, embalagem, transportadoras e contas; separar/embalar/postar fica com o operador designado |
| Parceiros | Definir identificação da indicação, registro por pedido e relatório para apuração; preservar fluxo separado de revenda | Percentuais, base de cálculo, responsáveis e periodicidade precisam ser confirmados |
| Entrega operacional | Testar jornada, documentar exceções e orientar quem assume os pedidos | Operador cotidiano precisa estar identificado; manutenção recorrente não está automaticamente incluída |

O meio de identificação do parceiro (link, cupom, seleção ou outro) é decisão técnica posterior à definição das regras. Danilo não escolheu esse mecanismo nos áudios.

## 4. Os dois fluxos precisam coexistir

### A. Indicação

Parceiro indica → comprador compra da Kraken → Kraken recebe e expede → indicação fica associada ao pedido → comissão é apurada → Kraken repassa ao parceiro.

Esse é o fluxo proposto a partir do modelo de referência descrito. A preferência dele é pagar comissão em dinheiro. O split automático pode ficar fora da primeira versão SE o acerto periódico for confirmado. Mesmo com repasse manual, a atribuição e o histórico dos pedidos precisam existir.

Não fixar 20%: ele cita uma aproximação do arranjo da Compass e demonstra incerteza sobre a proporção de unidades. Sua fala sobre descontar imposto é intenção relatada, não fórmula fiscal aprovada. Os parâmetros devem vir da empresa/contabilidade.

### B. Revenda com estoque

Parceiro compra da Kraken com desconto → recebe estoque → vende ao consumidor → recebe do consumidor e expede.

Aqui, o ganho é a margem da revenda. Não há motivo para descontar uma segunda comissão automaticamente no checkout da Kraken. A compra do lote pelo parceiro pode exigir um fluxo comercial próprio; ainda não está decidido se será pedido manual, link de pagamento ou preço restrito na loja.

Não presumir que a loja central processará as vendas dos marketplaces dos parceiros, sincronizará seus estoques ou receberá pelo consumidor final nesses casos.

## 5. O que muda em relação aos documentos anteriores

- A proposta de 18/09, bloco 12, dizia: “Desenvolvimento de checkout, integração e split é do time da Cubos. Eu desenho e escrevo, vocês implementam.” O pedido atual e a instrução de Victor levam à implementação por nós da página e das integrações disponíveis em plataformas prontas. Desenvolvimento sob medida permanece um escopo distinto.
- O REGISTRO, no trecho sobre a resposta das 15h46–15h50, generalizou revenda como se não existisse comissão. O áudio das 16h08 esclarece dois modelos. Essa generalização está superada pela fonte mais recente.
- O mesmo REGISTRO ainda dizia que a resposta de Victor não fora enviada. O print mostra envio às 15h59, seguido dos três áudios. O print é a evidência mais recente.
- Marketplaces próprios da Kraken seguem fora do início, conforme a mensagem das 15h48. A palavra “marketplace” no primeiro áudio não constitui reversão clara dessa decisão; o pedido das 16h06 é por plataforma pronta. Marketplaces dos parceiros são outra coisa.
- O STATUS local, aberto em 03/09, registra cobrança no ASAAS como resolvida. Isso não demonstra que o checkout de produto físico com nota, frete e etiqueta esteja resolvido: os novos áudios explicitam essa necessidade.
- A proposta descreve alicerce em documentos por R$ 6.500 / 15 dias úteis. Os áudios não confirmam que essa implantação completa foi incluída nesse preço ou prazo, nem fecham a recorrência. A necessidade está declarada; o acordo comercial da implementação ainda precisa ser delimitado.

## 6. Dados necessários para executar

1. Produto inicial: ficha final, preço, fotos, peso e dimensões embalado, estoque e momento permitido para abrir vendas.
2. Empresa vendedora e contas: domínio, plataforma existente se houver, conta de recebimento e responsável por acessos.
3. Fiscal: emissor utilizado e parâmetros aprovados pela contabilidade.
4. Logística: origem, cobertura, transportadoras, embalagem, responsável por imprimir/separar/postar.
5. Parceiros: lista e modelos aplicáveis, comissão/desconto por parceiro, base de apuração, periodicidade, tratamento de cancelamento e venda sem indicação.
6. Condições comerciais: parcelamento, juros, prazo de entrega, garantia e atendimento, informados/aprovados pela Kraken.
7. Marca: material visual disponível e relação com o rebranding em andamento.

Essas são lacunas de fato. Escolha da arquitetura, composição da página e mecanismo de integração são trabalho nosso. Não transferir a Danilo a pesquisa de plataformas ou decisões de estrutura.

## 7. Ordem de execução e critérios de conclusão

1. Fechar a lista de requisitos e o limite da implantação. Confirmar o mínimo factual acima de forma concentrada.
2. Comparar plataformas e integrações nos requisitos reais, incluindo custos e restrições, antes de escolher. Esta análise não pesquisou nem validou fornecedores; Shopify foi apenas um exemplo citado por Danilo.
3. Montar página e configurar compra, fiscal, frete e registro do parceiro.
4. Verificar em ambiente apropriado: PIX, parcelamento/juros, pedido aprovado e recusado, emissão fiscal, frete, etiqueta, indicação e venda sem indicação. Testar cancelamento/estorno e seu reflexo na comissão conforme regra definida.
5. Entregar instruções e acessos ao operador. Abrir venda somente quando produto, condições comerciais e testes estiverem liberados. Data de lançamento permanece a confirmar.

Aceite operacional proposto: comprador consegue concluir o pedido; operador enxerga pagamento, documento fiscal, frete e etiqueta; origem do parceiro fica registrada quando aplicável; todos sabem quem expede e quem apura/paga comissão. Captura de lista de espera pode ser etapa separada, mas não substitui a infraestrutura pedida.

## 8. Fora desta primeira execução

Marketplaces próprios, software sob medida, sistema de locação, portal completo de parceiros, sincronização de estoque dos revendedores, cadastro de catálogo futuro inteiro, gestão cotidiana de pedidos, produção/validação do equipamento e contratação automática de recorrência. Split automático é item a decidir, com simplificação sugerida por Danilo.

## 9. Fontes, preservação e próximo passo

Fontes primárias: print fornecido pelo usuário; três transcrições das 16h; três transcrições das 11h de 18/09 para contexto de produto e negociação. Fontes de projeto: `clientes/Danilo/STATUS.md`; `30-comercial/assessoria-prospects/danilo-kraken/PROPOSTA-DANILO-2026-09-18.md`; trecho recente de `REGISTRO.md`. Governança: AGENTS.md, 00-core, contexto relevante de STATUS.md e skill COO. As referências antigas da skill COO a duas pessoas/Nakielly não foram aplicadas: a regra raiz e o STATUS registram operação de uma pessoa.

Criado somente este arquivo, sob execução Codex. Nenhuma fonte canônica alterada; nenhuma plataforma contratada, mensagem enviada ou página publicada. Verificação: leitura integral das três transcrições-alvo, cruzamento de horário/duração com o print e comparação com proposta/registro anteriores. Sem revisão auditiva.

Próximo passo recomendado — Victor: delimitar a implantação com esse conjunto de entregas e coletar os dados factuais; depois, validar a plataforma e ajustar preço/prazo ao escopo efetivo antes de iniciar a construção.
