# HANDOFF — Portal das Felinas · Página de vendas v2

> Status: construção local concluída; checkout e captura revisados em 27/07/2026.
> Publicação: não realizada.
> Versão anterior: preservada em `../index.html`.

## Decisão

Construir uma direção integralmente nova para a Masterclass Portal das Felinas, sem usar o design anterior como base compositiva.

A página mantém os fatos vigentes da oferta:

- Masterclass Portal das Felinas
- Da Princesa à Rainha
- sábado, 8 de agosto de 2026, às 9h30
- ao vivo, cerca de 2h30
- R$ 88
- checkout PagTrust configurado em `CHECKOUT_URL`

## O que mudou em relação ao planejamento anterior

O planejamento de cinco dobras foi tratado como intenção de concisão, não como limite estrutural. A nova página separa as dez funções de venda do método Continuum, mas comprime o texto e evita aparência de página longa de template.

Correções estruturais:

1. H1 semântico passou a carregar a promessa de estado.
2. O mecanismo recebeu nome: Travessia das Felinas.
3. A segurança ganhou uma seção própria com Prana Ka, o Método S.E.R. e o histórico do trabalho individual desde 2021.
4. A oferta virou o único clímax visual da página.
5. Objeções ganharam FAQ próprio.
6. Escassez não confirmada foi removida. Não há lote, contador ou número de vagas inventado.
7. A gravação não é prometida.
8. O conteúdo deixa explícito que a experiência não substitui terapia ou cuidado de saúde.

## Tese visual

Um altar editorial solar: obsidiana calma, marfim aquecido e ouro em movimento. A felina funciona como presença e território. A composição prioriza escala tipográfica, ritmo, imagem e contraste, com quase nenhuma cardização.

## Arquivos

- `index.html`: página completa, responsiva, acessível e instrumentada.
- `assets/felina-agua-dourada.jpg`: imagem principal do hero.
- `assets/felina-solar.jpg`: imagem do fecho.
- `assets/prana-ka.jpg`: retrato otimizado da facilitadora.
- `assets/templo-dourado-optimized.jpg`: fundo otimizado da dobra de custo.
- `APPS-SCRIPT-LEADS.gs`: backend container-bound para gravar leads no Google Sheets.
- `LEADS-PLANILHA.md`: ativação e teste do Web App.

Os arquivos originais da cliente não foram alterados.

## Validação executada

- servidor local: HTTP 200
- desktop: 1440 × 1000
- mobile: 390 × 844
- promessa e CTA completos na primeira tela mobile
- zero overflow horizontal
- zero placeholder visível
- zero erro de console
- 10 seções funcionais
- 6 perguntas no FAQ
- 1 H1, hierarquia de headings válida
- imagens carregadas
- CTAs, acordeão e modal testados
- formulário local testado com gravação e limpeza do dado de QA
- URL da PagTrust verificada com HTTP 200
- `name` e `email` confirmados no checkout real com pre-fill
- `funnel`, `origem` e UTMs preservados no redirecionamento
- frontend e backend da planilha codificados; endpoint `/exec` configurado
- `GET` do endpoint respondeu HTTP 200, mas o `POST` real retornou falha de acesso ao documento do Google Sheets
- nenhuma linha de QA foi criada na planilha
- `prefers-reduced-motion` respeitado
- conteúdo permanece visível sem JavaScript
- assets finais: menos de 900 KB

## Pendências antes de publicar

1. Dar à conta que executa o Web App acesso à planilha, publicar uma nova versão de `APPS-SCRIPT-LEADS.gs` e validar uma linha de QA.
2. Instalar o pixel Meta com ID e acesso da conta da Prana.
3. Confirmar por escrito se haverá gravação. Até lá, a página não promete.
4. Confirmar o fluxo real depois do pagamento: e-mail, WhatsApp e prazo de envio.
5. Rodar aprovação humana final da Prana sobre copy, imagem e credenciais.
6. Definir domínio, política de privacidade e termos antes de tráfego.

O CTA abre o formulário, guarda um backup local, tenta enviar o lead para o Apps Script e redireciona para a PagTrust com `name` e `email`. O checkout está funcional, mas a captura remota não deve ser considerada ativa até o Apps Script ser reimplantado com acesso à planilha e o teste de escrita ser confirmado.
