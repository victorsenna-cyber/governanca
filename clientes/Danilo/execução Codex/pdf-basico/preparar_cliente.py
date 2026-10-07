from pathlib import Path
import re

root=Path(__file__).resolve().parent.parent
source=(root/'OPERACAO-COMPLETA-PROPOSTA-KRAKEN-2026-09-18.md').read_text(encoding='utf-8-sig')
diagram=re.search(r'```mermaid.*?```',source,re.S).group()
table=re.search(r'\| Frente \| Nós \| Kraken / terceiros \|.*?(?=\n\n)',source,re.S).group()
content='''# Kraken: como o projeto funciona

Estrutura de marketing e vendas | 18 de setembro de 2026

## 1. O que vamos construir

O projeto organiza o caminho entre conhecer um produto da Kraken e conseguir comprá-lo, receber e usar. Começa no posicionamento da marca, passa pelos parceiros e pelo conteúdo e chega à página com pagamento, nota fiscal e envio.

Enquanto você e a equipe avançam no desenvolvimento e na validação do Logger, nós conduzimos a estrutura comercial e a preparação da venda. A página faz parte da nossa execução, usando plataformas prontas e integrações.

O trabalho se organiza em três etapas: alicerce estratégico, implantação e operação contínua. O Logger é a primeira aplicação; a estrutura fica preparada para receber outros produtos quando estiverem disponíveis.

## 2. Fluxo geral

{{DIAGRAM}}

O desenvolvimento do produto e a preparação comercial avançam em paralelo. A abertura das vendas acontece quando o equipamento e a operação estiverem prontos, com condições de compra e entrega definidas.

## 3. Como começamos

Nas primeiras 48 horas após o aceite e a definição da data de início, organizamos uma conversa de 40 minutos para completar as informações do projeto. Partimos do material já disponível e concentramos as perguntas no que ainda falta.

Da Kraken, precisamos das informações dos produtos, do funcionamento dos parceiros, do processo de pedidos e dos materiais de marca. Também reunimos fotos, demonstrações, resultados de testes e os acessos necessários para a implantação.

Os dados de receita, custos e capacidade ajudam a definir a prioridade das ações. As especificações e as condições comerciais mantêm a comunicação fiel ao que a Kraken pode entregar.

Cada etapa chega em um documento ou ambiente de revisão, acompanhada de uma explicação do que foi definido, do que está pronto e do que depende de informação ou validação da equipe.

## 4. Alicerce: as três entregas

### Entrega 1: posicionamento e marca

Definimos para quem a Kraken fala, o que cada produto oferece e como apresentar seus diferenciais com evidências. Competidor, organizador e parceiro têm papéis diferentes; a comunicação precisa deixar claro o caminho de cada um.

Essa definição orienta a página, o conteúdo e o rebranding. O designer responsável pelo book recebe um briefing com a direção da marca antes de desenvolver a identidade visual.

Você recebe o documento de posicionamento e o briefing estratégico para o designer. A criação do book permanece com o profissional responsável pela identidade visual.

### Entrega 2: oferta e regras dos canais

Organizamos a venda direta, a indicação e a revenda com estoque. Em cada caminho, ficam definidos quem recebe, quem emite a nota, quem envia, quem atende e como o parceiro ganha.

Na indicação, o parceiro traz o comprador e a Kraken realiza a venda e o envio. A comissão fica vinculada ao pedido. Na revenda, o parceiro compra unidades com desconto, mantém seu estoque e recebe do consumidor final.

O documento também trata de vendas sem indicação, descontos, cancelamentos, suporte e repasses. A proposta para o início é apurar as comissões periodicamente e fazer o acerto em dinheiro, com a periodicidade definida junto com você. O split automático não é uma dependência para começar.

Você recebe o desenho dos canais e as regras para alinhar o funcionamento com os parceiros. Os percentuais e as condições partem dos acordos comerciais da Kraken.

### Entrega 3: mapa de receita e ordem de execução

Mapeamos como as diferentes frentes da Kraken chegam ao recebimento: equipamentos, eventos e serviços, aluguel e royalties, conforme o funcionamento de cada uma.

Um equipamento pode ser comprado na loja. Uma contratação para um evento pode precisar de conversa e proposta. O mapa define o caminho, o responsável e o próximo passo de cada frente.

Você recebe um plano de execução para os seis meses seguintes, com prioridades e indicadores. A devolutiva de 90 minutos reúne as três entregas e organiza a implantação e a continuidade.

## 5. Preparação da demanda

Enquanto o produto é validado, podemos organizar uma lista de interessados. A página de captura apresenta o equipamento com as informações confirmadas e permite acompanhar a demanda antes da abertura das vendas.

Além do contato, o formulário identifica qual equipamento a pessoa utiliza e em que campeonato ou região compete. Isso ajuda a compreender o interesse por região e a preparar a atuação dos parceiros.

O perfil passa a apontar para essa página. Bio, destaques e conteúdos conduzem ao cadastro, e os inscritos recebem atualizações pelo canal definido para o relacionamento.

Nós organizamos a pauta, os textos e a sequência de comunicação. A Kraken fornece demonstrações e informações reais sobre o desenvolvimento. Gravação, edição e publicação são distribuídas entre os responsáveis, com o volume de produção definido para a etapa.

A lista permite medir interesse e preparar a abertura. A quantidade de inscritos será acompanhada separadamente das compras efetivamente realizadas.

## 6. Página e operação de compra

A página de vendas fica sob nossa execução: estrutura, texto, apresentação visual e implementação. Ela reúne as informações necessárias para avaliar o produto e concluir a compra.

A arquitetura recomendada combina Nuvemshop para a loja, Nuvem Pago para o pagamento, Bling para pedidos e nota fiscal e Nuvem Envio para frete e etiquetas. Para identificar vendas indicadas, a primeira opção a testar é o Ovni. A configuração final depende dos testes e das condições das contas da Kraken.

O comprador acessa a página, informa o endereço, consulta o frete e escolhe PIX ou cartão. O PIX usa o preço base, e o parcelamento segue a condição de juros definida. Com o pagamento aprovado, o pedido segue para o fluxo fiscal e de expedição.

Configuramos e testamos o caminho até a nota autorizada e a etiqueta pronta para impressão. Também verificamos o que acontece quando o pagamento não é concluído, a nota apresenta erro, o pedido é cancelado ou o estoque termina.

As contas ficam em nome da Kraken. Os parâmetros fiscais vêm da contabilidade, e os dados de embalagem e origem do envio vêm da operação. A equipe responsável confere o pedido, imprime a etiqueta, embala e posta.

A loja começa com o produto definido para a abertura. Cabos e outros equipamentos podem ser acrescentados depois, aproveitando a mesma estrutura de compra.

## 7. Abertura das vendas

A abertura reúne quatro condições: produto validado, condições comerciais definidas, disponibilidade ou prazo de entrega informado e jornada de compra testada.

Com isso pronto, a lista recebe o convite para comprar, os parceiros recebem os links e materiais e o perfil passa a direcionar para a venda. A base de contatos disponível à Kraken também pode participar dessa ativação, respeitando o relacionamento existente.

Durante a abertura, acompanhamos as dúvidas, as compras e os pontos de dificuldade. Ajustamos a comunicação e corrigimos eventuais falhas do caminho de compra.

O calendário acompanha a liberação do produto. Se a validação exigir mais tempo, a preparação e o relacionamento com os interessados continuam, sem antecipar uma data de entrega que a operação não possa cumprir.

## 8. Depois da compra

A Kraken acompanha os pedidos, realiza a expedição e atende às questões técnicas. O comprador precisa saber como recebe o equipamento, como começa a usar e onde encontra suporte.

Nós organizamos esse caminho de comunicação e usamos as dúvidas recorrentes para melhorar a página e o conteúdo. Orientações técnicas são validadas por você e pela equipe responsável pelo produto.

O acompanhamento também permite identificar problemas de entrega, motivos de devolução e resultados que possam ser apresentados com autorização dos clientes.

Nos pedidos por indicação, as comissões são conferidas considerando pagamento, cancelamentos e as regras acordadas. Nos pedidos de revenda, o parceiro compra o lote nas condições definidas e assume a venda e a entrega ao consumidor final.

## 9. Operação contínua de marketing e vendas

Depois da implantação, a continuidade mantém conteúdo, página, base e parceiros ligados à venda. O trabalho passa a ser acompanhar o que acontece e melhorar a execução com esses dados.

Isso inclui direcionar pautas e textos, responder às dúvidas recorrentes na comunicação, revisar a página, acompanhar os canais e organizar os próximos passos das oportunidades comerciais.

As frentes que exigem conversa, como uma contratação para evento, recebem acompanhamento de contato, necessidade, proposta, decisão e recebimento. Os pedidos da loja seguem pelo fluxo de compra online.

O tráfego pago entra quando existe um destino funcionando e dados de conversão para orientar o investimento. A gestão e a verba de mídia são definidas na etapa de continuidade, junto com o volume de conteúdo e a frequência de acompanhamento.

## 10. Cadência e responsabilidades

O trabalho começa com a conversa de 40 minutos e a organização dos materiais e acessos. Durante o alicerce, cada entrega é apresentada em uma reunião de 30 minutos. A devolutiva final de 90 minutos reúne o plano completo.

Na implantação, você recebe atualizações do andamento e solicitações de informação agrupadas. Para planejamento, a referência é reservar até duas horas por semana durante a estruturação, somando reuniões e respostas. A coleta inicial e as aprovações podem exigir ajustes nessa disponibilidade.

Na continuidade, a cadência proposta é uma conversa semanal de 30 minutos e uma revisão mensal dos resultados. A conferência cotidiana dos pedidos fica com o responsável pela operação da Kraken.

{{TABLE}}

As decisões de estrutura, texto e conversão chegam organizadas por nós. Você e a equipe conferem se as informações correspondem ao produto e à operação, e apontam o que precisar de correção.

## 11. O que acompanhamos

Na preparação, acompanhamos visitas, cadastros, origem dos interessados e regiões. Na venda, observamos pedidos, pagamentos, recebimentos e os pontos em que a compra é interrompida.

Por canal, acompanhamos venda direta, indicação e revenda, considerando descontos, comissões e custos. Na entrega, observamos pendências, prazo de expedição e problemas que chegam ao suporte.

Essas informações orientam a próxima ação: esclarecer uma dúvida, corrigir a página, apoiar um parceiro, ajustar um processo ou direcionar conteúdo. O acompanhamento financeiro distingue faturamento, dinheiro recebido e margem.

## 12. Etapas e condições de execução

O alicerce está organizado em três entregas, com referência de quinze dias úteis após o início combinado e a disponibilidade dos insumos necessários. A implantação segue as decisões de marca e canal; cadastros, acessos e preparação técnica podem avançar em paralelo.

O cronograma da loja é fechado após a conferência das contas, das integrações e dos materiais. A abertura das vendas depende também da validação do equipamento e da capacidade de entrega da Kraken.

Investimento, volume e prazo de cada etapa ficam registrados no escopo comercial antes do início. O planejamento dos seis meses orienta a continuidade, cuja contratação é definida separadamente. Assinaturas de plataformas, taxas de pagamento, fretes e verba de mídia são despesas da operação da Kraken.

O projeto concentra nossa atuação na estrutura comercial, na página e nas integrações prontas. Desenvolvimento do produto, criação do book, expedição e atendimento técnico ficam com os responsáveis indicados na seção 10. Marketplaces próprios, sistema de locação e portal completo de revendedores ficam para uma avaliação posterior.

## 13. O primeiro passo

Para iniciar, reunimos os materiais existentes e completamos as informações sobre produto, parceiros e operação na conversa de entrada. A partir daí, organizamos as três entregas do alicerce e o cronograma de implantação.

O resultado esperado é um caminho de venda que a Kraken consiga operar: o público entende o produto, o parceiro sabe como participa, o comprador consegue pagar e a equipe sabe como atender e entregar.

Victor Senna | Continuum AI Systems
'''.replace('{{DIAGRAM}}',diagram).replace('{{TABLE}}',table)
target=root/'PROJETO-KRAKEN-PARA-DANILO-2026-09-18.md'
target.write_text(content,encoding='utf-8')
builder=(Path(__file__).parent/'build_pdf.py').read_text(encoding='utf-8')
builder=builder.replace('OPERACAO-COMPLETA-PROPOSTA-KRAKEN-2026-09-18.md',target.name).replace("/'validation.json'","/'validation-cliente.json'")
builder=builder.replace("title='Kraken - operação completa da proposta'","title='Kraken: como o projeto funciona'")
(Path(__file__).parent/'build_pdf_cliente.py').write_text(builder,encoding='utf-8')
assert diagram in content and table in content
print(str(target))
print('Fluxograma e tabela preservados integralmente.')
