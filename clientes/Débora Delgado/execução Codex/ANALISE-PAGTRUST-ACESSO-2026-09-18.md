# PagTrust — viabilidade do acesso individual combinado na call

> STATUS: ANÁLISE TÉCNICA ISOLADA CODEX · 18/09/2026 · não integrada aos canônicos.
> Verificação documental pública e leitura local. Nenhuma chamada autenticada, configuração de conta, compra, reembolso ou implantação realizada.

## Veredito

Há base técnica para construir a liberação automática do sistema de conhecimento após a compra. A API pública documenta os dados necessários para consultar pagamento, comprador e produto. O webhook proposto na call tem precedente registrado no projeto, mas seu contrato atual, autenticação e entrega ainda precisam de teste. Login, contas individuais e proteção do conteúdo são implementação nossa.

**Viabilidade documental favorável; funcionamento ponta a ponta ainda não validado.**

## O compromisso exato

Na call de 16/09, entre 11:03:12 e 11:04:45, Débora relata senha global. Victor propõe hospedagem com backend e banco, login individual e webhook da PagTrust enviando dados do comprador para liberar acesso automaticamente. Em 11:03:38 e 11:04:27, condiciona a certeza à verificação; em 11:04:37 condiciona a construção à viabilidade.

Fontes: `DESTILACAO-2026-09-16/TRANSCRIPT-LIMPO.md`, trecho acima; `DESTILACAO-2026-09-16/DESTILACAO-CALL-2026-09-16.md`, C-22, C-24 e C-52; proposta de propagação, D-16-08. Transcrição automática, sem conferência auditiva nesta análise.

## O que a documentação atual confirma

Documentação consultada no navegador: [PagTrust API Pública](https://api-public.pagtrust.com.br/docs), versão exibida v1.0.0 / OpenAPI 3.0.3.

| Necessidade | Evidência | Conclusão |
|---|---|---|
| Consultar vendas | `GET /v1/sales`, paginado, com filtros por período, oferta, status e comprador | Documentado |
| Confirmar uma venda | `GET /v1/sales/{id}` | Documentado |
| Identificar comprador | `customer.name`, `customer.email`, além de telefone e documento | Documentado; email e nome aceitam null no detalhe, exigindo tratamento de exceção |
| Saber qual acesso conceder | Oferta e produtos em `offer.id` e `offer.products[].id` | Documentado; mapear IDs reais do curso e do pacote |
| Verificar aprovação | Estados `awaiting_payment`, `approved`, `declined`, `refunded`; datas de criação, pagamento e reversão | Documentado; liberar somente com aprovação válida |
| Notificação automática | Introdução lista permissão Webhooks para gerenciamento de endpoints | Indício oficial, sem especificação operacional de webhook nas operações exibidas |
| Criar usuário no sistema externo | Nenhuma operação documentada para isso | Responsabilidade do backend que construiremos |
| Reembolso e chargeback | Reembolso aparece nas consultas; chargeback não aparece como estado específico na lista consultada | Não inferir cobertura completa de chargeback ou assinatura |

Referências diretas: [lista de vendas](https://api-public.pagtrust.com.br/docs#tag/vendas/GET/v1/sales), [detalhe de venda](https://api-public.pagtrust.com.br/docs#tag/vendas/GET/v1/sales/%7Bid%7D), [introdução e permissões](https://api-public.pagtrust.com.br/docs#description/introduction).

A chave usa o header Authorization com esquema apikey. A documentação informa 1.000 requisições/hora compartilhadas por conta. A listagem admite até 100 itens por página e exige período com intervalo máximo de 90 dias. Não foi identificado filtro por data de atualização: consultas de vendas recentes não bastam para detectar toda reversão de venda antiga.

## Evidência histórica do próprio projeto

`../DIARIO-DE-BORDO.md`, entrada de 11/07/2026 (11), registra que Victor enviou um payload real de webhook. `../04 - web design/página pré-final/dashboard/APPS-SCRIPT-ECOSSISTEMA-V3.md`, seção “Estrutura real do payload”, documenta:

- Evento de aprovação: `PURCHASE_APPROVED`.
- Comprador: `data.buyer.email` e `data.buyer.name`.
- Produto: `data.product.id`.
- Transação: `data.purchase.transaction`.
- Eventos registrados de reembolso, cancelamento e chargeback, entre outros.

Isso é evidência histórica local, conferida nos arquivos nesta tarefa; não comprova a configuração atual da conta nem que cada evento listado foi testado individualmente. Não foi recuperado aqui o payload bruto original.

**Problema encontrado:** o texto inicial do V3 afirma validar token, mas a chamada de validação está comentada no código. O V5 de 17/07 também mantém essa verificação comentada. Não reutilizar esse receptor como autorizador de acesso sem autenticação efetiva do remetente. Um token estático também não deve ser chamado de assinatura criptográfica sem confirmação do protocolo.

O formato histórico do webhook difere do REST atual: `data.buyer` versus `customer`, e transação versus ID numérico de venda. Precisamos confirmar a correspondência dos identificadores antes de prometer reconciliação automática entre os dois.

## Desenho recomendado, sujeito à validação

Compra aprovada → webhook autenticado → n8n no servidor → confirmar produto e transação → criar ou localizar usuário → conceder permissão ao sistema → enviar convite de ativação individual.

O backend precisa proteger os dados e arquivos do sistema, verificar a permissão em cada acesso e registrar a origem da concessão. Uma tela de login diante de conteúdo público não resolve. A VPS é uma opção de hospedagem; o requisito é backend com autenticação e autorização, não simplesmente trocar de domínio.

Processar reenvios sem duplicar contas ou permissões. Tratar eventos fora de ordem e revogações por transação; preservar outra compra válida do mesmo usuário. Reembolso, chargeback e expiração seguem regras de acesso a definir. Não conceder acesso com Pix apenas gerado, boleto emitido ou simples retorno à página de obrigado.

Se o webhook não puder ser usado, o n8n pode consultar a API periodicamente e conceder acesso ao encontrar aprovação. É alternativa tecnicamente fundamentada na consulta documentada, com atraso conforme a frequência e necessidade de reconciliação das vendas antigas. Não é promessa de liberação instantânea.

## O que falta verificar para fechar a implementação

1. No painel ou com suporte: eventos disponíveis hoje, payload atual e mecanismo de autenticação do webhook; política de reenvio, timeout e identificação única dos eventos.
2. Correspondência entre ID REST e transação do webhook; tratamento atual de chargeback, cancelamento e recorrência.
3. Na conta da Débora: IDs de produto/oferta, disponibilidade do email do comprador e permissões de leitura necessárias.
4. No sistema de conhecimento: acesso ao código, forma de hospedagem, conteúdo a proteger e capacidade de integrar autenticação real.
5. Teste controlado: aprovação concede uma vez; duplicata não duplica; pagamento pendente não libera; origem inválida é rejeitada; reversão retira somente o direito correspondente; falha de email permite recuperação.

O gargalo é validar o contrato do webhook e a proteção do sistema. A maior alavanca é aproveitar o precedente existente e usar a API como consulta/reconciliação. Não construir checkout próprio, migrar hospedagem ou ativar integrações nesta análise.

## Registro de execução

- Lidos: AGENTS raiz e cliente; governança local e skill CTO; pacote de destilação de 16/09, proposta de propagação e validação; auditoria de 17/09; trecho técnico da transcrição; registros e código histórico do webhook.
- Verificado ao vivo: documentação pública, operações de vendas e schema do comprador (campos nullable).
- Consulta direta da documentação falhou; leitura pelo navegador funcionou. A abertura do arquivo OpenAPI bruto foi bloqueada pelo navegador; não alegamos auditoria integral desse JSON.
- Nenhuma credencial utilizada ou reproduzida; nenhuma mensagem enviada.
- Criado somente este relatório, após conferir destino absoluto sob `clientes/Débora Delgado/execução Codex/`.
- Nenhuma alteração em fontes, diário, decisões, scripts, sistema ou conta. Não houve teste ponta a ponta.
- Registro candidato para a fila técnica: C-52 tem viabilidade documental favorável; contrato de webhook, autenticação e prova funcional continuam pendentes.
