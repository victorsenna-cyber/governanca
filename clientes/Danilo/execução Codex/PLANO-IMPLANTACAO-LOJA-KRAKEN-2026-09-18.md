🟢 PROMOVIDO em 02/10/2026 · destinos: clientes/Danilo/STATUS.md

# Kraken — plano de implantação da loja e integrações

Data: 18/09/2026. Planejamento solicitado por Victor, sem autorização de contratação/publicação implícita. Arquitetura recomendada a partir de documentação oficial consultada nesta sessão; não foi homologada em contas da Kraken. Complementa ANALISE-ESCOPO-AUDIOS-2026-09-18.md.

## Decisão de arquitetura

Nuvemshop (plano Essencial como ponto de partida) + Nuvem Pago + Bling + Nuvem Envio. Para indicação: piloto do Ovni, com Nível 2 como referência de produção, condicionado ao teste de atribuição, conciliação e condições comerciais. Repasse mensal proposto, ainda a confirmar com Danilo; não implementar split na primeira versão sem nova definição.

Loja no domínio da Kraken, por exemplo loja.krakenrally.com.br, sujeito a acesso e confirmação do domínio. Página construída dentro da Nuvemshop com tema e editor visual; cadastro inicial do Logger. Não criar frontend separado na primeira versão. Validar que o tema suporta a estrutura de conteúdo antes de compor a página. Se demandar editor pago ou personalização, registrar impacto e decidir antes de construir.

Aqui interpretamos white label como loja com marca/domínio próprios e serviços de terceiros por trás. Não prometemos anonimato completo dos provedores, checkout irrestritamente personalizável nem software de propriedade da Kraken.

## Sistemas e fonte de cada informação

| Informação | Dono técnico proposto |
|---|---|
| Página, texto, imagens, preço público e pedido de origem | Nuvemshop |
| Pagamento e estorno financeiro | Nuvem Pago |
| SKU, estoque disponível da Kraken e documento fiscal | Bling |
| Cotação, compra de etiqueta, postagem e rastreio | Nuvem Envio |
| Identificação do parceiro por link e comissão preliminar | Ovni, após piloto |
| Comissão aprovada e comprovante de pagamento | Fechamento mensal conciliado por pedido |

Pedido da Nuvemshop é a chave de conciliação. Não gerar etiquetas nos dois sistemas. Não habilitar emissão fiscal nativa da Nuvemshop e do Bling simultaneamente. Não sobrescrever conteúdo comercial da loja ao sincronizar produtos do ERP.

## Etapa 1 — insumos, acessos e contas

Contas de titularidade da Kraken; acesso nosso por convite quando disponível. Obter domínio, CNPJ vendedor, banco recebedor, cadastro fiscal, certificado A1 inserido diretamente pelo responsável, parâmetros da contabilidade, origem do envio e dados do produto. Credenciais/certificado não entram em arquivos de projeto.

Confirmar SKU, quantidade inicial, preço, embalagem, peso e dimensões, fotos, especificações, garantia, prazo de expedição e lista de parceiros. O preço de R$ 1.990 é referência anterior: confirmar antes do cadastro definitivo. Produto ainda em validação: construção pode avançar, abertura de vendas depende de liberação.

## Etapa 2 — piloto das dependências críticas antes do acabamento

Criar produto e pedido de teste em ambiente apropriado. Validar:

- Meio de pagamento disponível para a conta/empresa/produto; Pix e parcelamento com juros.
- Nuvemshop → Bling: pedido, identificador original, SKU, endereço, CPF/CNPJ, frete, desconto, meio de pagamento e parcelas.
- Mapeamento de pagamento pendente, pago, cancelado e reembolsado. Não emitir por mero pedido criado.
- Geração de NF-e e autorização automática: a documentação do Bling distingue geração por transição de status e emissão após geração em lote. Confirmar que o gatilho real escolhido encadeia as duas sem clique adicional. Essa ponta não está provada apenas pela documentação consultada.
- NF-e autorizada retorna ao pedido; testar se os dados exigidos pelo Nuvem Envio são preenchidos corretamente, sem presumir integração direta Bling → Nuvem Envio.
- Ovni: link de parceiro, venda sem indicação, cancelamento, base da comissão, divergência entre link e identificação, fechamento mensal e registro de quitação. Janela de atribuição e exportação/baixa externa ainda precisam ser verificadas.

Se a emissão automática completa não funcionar nativamente, documentar a lacuna e especificar complemento via n8n com API oficial, idempotência por pedido, logs e fila de erro, antes de estimar seu custo. Não apresentar emissão em lote com clique como automação integral. Se o aplicativo de parceiros não permitir o fechamento requerido, não aprová-lo apenas porque consegue rastrear cliques.

## Etapa 3 — página e checkout

Montar página de produto com blocos para apresentação, uso, evidência real, especificações, conteúdo da caixa, entrega, garantia e compra. São áreas funcionais do projeto; texto e ordem final seguem o circuito de página quando a produção começar.

Ativar PIX pelo preço base, sem desconto adicional presumido; cartão parcelado com juros ao comprador. Nuvem Pago documenta parcelamento com juros até 12x sem permitir reduzir o máximo dessa modalidade. Caso Danilo queira outra regra, verificar outro provedor antes de manter esta escolha. Tarifas do processamento continuam existindo, mesmo repassando juros.

Testar experiência móvel, preço total, frete, parcelas, pedido aprovado, falha/recusa, Pix não pago e falta de estoque. Usar somente produto/estoque liberados na abertura. Não receber pedidos reais enquanto produto ou expedição não estiverem prontos.

## Etapa 4 — fiscal e estoque

Conectar Nuvemshop pelo conector oficial do Bling, vincular SKU e mapear status. Manter um depósito vendável para estoque da Kraken, sem somar estoque já vendido a revendedores. Conferir reserva e baixa para não descontar duas vezes o mesmo pedido.

Configurar regras fornecidas pela contabilidade; emissão para produto físico, não confundir com NFS-e de serviço. Testar nota autorizada, rejeição, correção, retorno à loja e envio ao cliente. Fiscal rejeitado vai para pendência, sem seguir automaticamente para expedição. Emissão fiscal real só com orientação do responsável e teste adequado.

Não trocar status de entrega para enviado apenas porque emitiu nota. Deixar avisos de rastreio com o serviço logístico para evitar notificações duplicadas.

## Etapa 5 — logística

Nuvem Envio como emissor único de etiquetas. Cadastrar origem e pacote real, habilitar transportadoras/modalidades elegíveis e comparar cotações para CEPs representativos. Validar cobertura, limites e condições para o equipamento antes de liberar.

Fluxo: cotação no checkout → pedido pago → documento fiscal autorizado → operador confere pacote → compra/gera etiqueta com saldo → imprime → embala → posta/coleta → rastreio.

Frete cobrado do comprador não deve ser confundido com saldo disponível para comprar etiqueta. Prever abastecimento de saldo. Geração integrada não implica impressão física e postagem sem operador.

## Etapa 6 — parceiros

### Indicação

Usar parceiros existentes como afiliados privados por link, sem abrir recrutamento público nem exigir campanha de influenciadores. Ovni é candidato pelo recurso de links para qualquer afiliado; sua adequação ao repasse manual/mensal é uma condição de homologação.

Registrar ID de pedido, parceiro, valor elegível, percentual, comissão prevista/aprovada/paga e comprovante. Regras da Kraken devem decidir: base inclui/exclui frete, descontos, impostos e juros; prazo; devoluções; venda sem parceiro; conflito entre duas indicações. Não assumir os 20% mencionados sobre a Compass nem automatizar abatimento fiscal sem parâmetro aprovado.

Proposta inicial: recebimento integral pela Kraken e apuração mensal conciliada; Danilo confirma esse modelo. Repasse não ocorre automaticamente ao pedido nascer. Se forem usados pagamentos dentro do app, validar as taxas e o procedimento antes; não são o split do checkout.

### Revenda

Primeira versão: pedido B2B assistido no Bling, preço/desconto autorizado ao parceiro, cobrança por meio da Kraken já validado, confirmação, NF-e e expedição do lote. A transação é Kraken → parceiro. Consumidor final paga e recebe do revendedor.

Não usar cupom público de desconto de revenda. Não pagar comissão de indicação adicional sobre a mesma venda por padrão. Não construir portal B2B nem sincronizar estoque dos parceiros agora. O registro antigo de ASAAS não prova que a conta está pronta para esse fluxo: verificar antes de reutilizar.

## Custos de referência, não cotação fechada

- Nuvemshop Essencial: página oficial anuncia cerca de R$ 59/mês, mas apresenta seletores e valores equivalentes de cobrança anual. Conferir mensal efetivo no checkout; não assumir fidelização anual.
- Bling Cobalto: tabela oficial de alteração em 2026 indica R$ 60/mês, até 200 importações. Confirmar recursos de automação necessários; Titânio faixa 1 aparece a R$ 120/mês.
- Ovni Nível 2: R$ 97/mês anunciado; página diz que parceiros não pagam taxa sobre recebimentos nesse nível. Confirmar condições de uso e limites. Nível 1 anuncia R$ 59/mês e taxa de 5% nos recebimentos dos parceiros.
- Soma aritmética das referências básicas: R$ 216/mês (59 + 60 + 97), não orçamento total garantido.
- Nuvem Envio: sem mensalidade publicada; etiquetas/fretes pagos por uso. Nuvem Pago: taxas por meio de pagamento e prazo de recebimento. Tarifa zero da plataforma não significa processamento grátis.
- Adicionais possíveis: domínio, certificado, tema/editor, plano superior, eventual n8n/hospedagem/manutenção se a automação nativa falhar. Implementação nossa e comissão dos parceiros são custos separados.

Parceirando foi avaliado como alternativa, mas sua calculadora anuncia piso mensal e percentual de 3% a 5% sobre vendas de afiliados, conforme plano. Não é escolha inicial pelo impacto adicional na margem. Isso não é a comissão do parceiro.

## Sequência e prazo de trabalho

Estimativa preliminar nossa: 10 a 15 dias úteis de implantação após insumos e acessos, sujeita ao piloto; não é prazo prometido por Danilo nem reaproveitamento automático dos 15 dias da proposta anterior.

1. Dias 1–3: contas, dados e piloto das integrações críticas.
2. Dias 4–7: página, catálogo inicial e checkout.
3. Dias 8–10: fiscal, logística, estoque e parceiros consolidados.
4. Dias 11–15: testes de exceções, correções, orientação e preparação da abertura.

Credenciamento financeiro, regularização fiscal, material ausente e validação do produto são dependências externas. Se exigirem automação própria, reestimar antes de implementar.

## Entrega e responsáveis

Nós: configuração, página, integrações, testes documentados, instruções e treinamento. Kraken: fatos do produto, credenciamento, conta recebedora, expedição, atendimento e pagamento aos parceiros. Contabilidade: parâmetros fiscais. Cubos: produto; entra em integração apenas se existir dependência real de sistema proprietário.

Concluir quando um pedido percorre compra → confirmação → documento autorizado → etiqueta → registro correto do parceiro; repetir com cancelamento, ausência de parceiro e venda B2B. Documentar recuperação de falhas e responsável. Nenhuma falha silenciosa deve deixar pedido pago sem tratamento.

## Fontes oficiais consultadas

- Nuvemshop planos: https://www.nuvemshop.com.br/planos-e-precos
- Parcelamento: https://atendimento.nuvemshop.com.br/pt_BR/formas-de-pagamento-e-parcelamento/como-configurar-o-parcelamento-no-nuvem-pago
- Nuvem Envio: https://www.nuvemshop.com.br/solucoes/nuvem-envio
- Bling/Nuvemshop: https://ajuda.bling.com.br/hc/pt-br/articles/4415320669591-Configura%C3%A7%C3%A3o-da-Nuvemshop
- Emissão automática: https://ajuda.bling.com.br/hc/pt-br/articles/360038891333-Como-configurar-o-sistema-para-emitir-notas-de-forma-autom%C3%A1tica
- Automações: https://ajuda.bling.com.br/hc/pt-br/articles/360039130893-9-AUTOMA%C3%87%C3%95ES-do-Bling-para-otimizar-o-seu-dia-a-dia
- Preços Bling: https://ajuda.bling.com.br/hc/pt-br/articles/30224184866583-Altera%C3%A7%C3%A3o-nos-planos-e-pre%C3%A7os-do-Bling-em-abril-de-2026
- Emissor nativo Nuvemshop (alternativa com ação no painel e restrições): https://atendimento.nuvemshop.com.br/pt_BR/minhas-vendas/como-emitir-nota-fiscal-das-minhas-vendas-pelo-painel-da-nuvemshop
- Ovni: https://www.nuvemshop.com.br/loja-aplicativos-nuvem/ovni-influencer-ugc
- Links Ovni: https://ovni.sak.com.br/como-funciona-os-links-para-influenciadores-no-ovni
- Comparação de custo Parceirando: https://calculadora.parceirando.com.br/

## Registro da execução desta análise

Lidos: análise local anterior e skill CTO; reutilizados contexto e transcrições já lidos nesta conversa. Pesquisa somente em fontes oficiais para recomendações. Criado apenas este arquivo em execução Codex; fontes canônicas preservadas. Nenhuma contratação, instalação em conta de cliente, alteração DNS, venda, emissão fiscal, comunicação externa ou publicação executada. Validação realizada: confronto documental de recursos, custos e dependências; testes operacionais ainda pendentes.

