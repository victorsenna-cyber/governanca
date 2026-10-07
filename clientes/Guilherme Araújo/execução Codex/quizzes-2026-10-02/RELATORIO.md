🟢 PROMOVIDO em 02/10/2026 · destinos: `STATUS.md` (estado do aceite e pendências; produto como proposta, não publicado)

# Entrega local — Permissão e Signos

02/10/2026 · Pacote isolado, não canônico. Sem publicação, deploy, implantação Google ou ativação de Pixel.

## Construído

Um motor em `public/engine.js`, sem redação de interface, alimentado por `public/config/permissao.json` (24 telas, 16 perguntas) e `public/config/signos.json` (16 telas, 10 perguntas). Inclui pontuação, quatro variantes de T16, oferta ALTO, elementos dos 12 signos, retorno/persistência de sessão, captura validada e envio sem espera. Depoimentos ficam desligados, sem ocupar espaço. Apps Script, instruções e teste de envio estão em `apps-script/`.

Foram entregues 120 capturas: as 40 telas em 390 px, também em 360 e 1440 px. A [galeria](qa/index.html) reúne as telas e 24 pares referência × nosso: seis categorias, dois quizzes, duas larguras. Os pares mostram a primeira janela; os links abrem as capturas completas.

## Errata §17 aplicada — 02/10

E1 a E6 foram aplicados literalmente nas duas configurações e no mecanismo genérico de condicionais, sem inserir redação no motor. T19 agora trata a variante de formações, a reação ao preço e o nível ALTO como definidos; S13 recebeu E5. No ALTO, a transição configurada sai de T19 para T23, remove respostas eventualmente residuais de T20/T22 e garante as duas chaves vazias no payload. T24 e S16 não renderizam o cabeçalho de progresso/voltar.

Percursos completos em 390 px foram refeitos do primeiro toque até T24: BAIXO e MÉDIO percorrem T20, T21 e T22; ALTO percorre `… → T19 → T23 → T24`, sem T20–T22 e com `p15_disposicao`/`p16_acredita` vazios. Evidência: `qa/errata/full-flows.json`. As capturas de T19, T24, S13 e S16 foram regeneradas em 360, 390 e 1440 px; há ainda T19 BAIXO e ALTO em `qa/errata/`. A galeria comparativa foi regenerada.

## Aceite — seção 13, na ordem original

| # | Item | Estado | Evidência / limite |
|---|---|---|---|
| 1 | Primeiro toque ao checkout, 360/390/desktop, sem rolagem horizontal | **falhou** | Fluxos locais completos nos três tamanhos, sem overflow. BAIXO, MÉDIO e ALTO foram refeitos do primeiro toque até a oferta; Diagnóstico tem destino configurado, interceptado no teste. Signos chega à oferta, mas os quatro links vazios impedem finalizar o checkout. |
| 2 | Comparação componente a componente, com pares | **não testado** | Pares entregues; 41 telas da referência inspecionadas nas duas larguras. 30 comparações tipográficas automatizadas sem diferenças. Não é aprovação de identidade visual integral: campos, métricas, preço e FAQ não renderizaram na cópia literal. |
| 3 | Headlines conforme §3.2 e mesmo esquema de cores | **passou** | Estilos computados aplicados aos dois quizzes; comparações em `qa/style-comparison.json`, incluindo abertura, resultado e oferta. |
| 4 | Nenhum estilo/comportamento inexistente na referência | **não testado** | Botões fixos, layouts e tokens medidos reproduzidos. Não é possível comprovar os quatro componentes ausentes citados no item 2; foram construídos com tokens existentes. |
| 5 | Três níveis alcançáveis | **passou** | Percursos completos refeitos: 21 pontos = BAIXO, 0 = ALTO e 13 = MÉDIO, sem adulterar a pontuação. No ALTO, T20–T22 não são renderizadas. |
| 6 | Quatro variantes de T16 conforme T14 | **passou** | Quatro variantes exercitadas; evidência em `qa/variants.json` e capturas T16. |
| 7 | Oferta ALTO com diferenças | **passou** | Percurso ALTO e conteúdo condicionado conferidos no teste de navegador. |
| 8 | 12 signos ao elemento e link corretos | **falhou** | Todos os elementos e o roteamento de chaves passaram. Links sintéticos injetados apenas no teste confirmaram os 12 destinos; os quatro checkouts reais continuam vazios. |
| 9 | Sem variável crua | **passou** | Nenhuma variável crua nos percursos exercitados; teste com valores ausentes também passou. Não se afirma enumeração de todas as combinações possíveis. |
| 10 | Depoimentos desligados sem espaço/título | **passou** | Não há componente de depoimentos no DOM quando desligado. |
| 11 | Voltar e recarregar preservam respostas/ponto | **passou** | Exercitado no navegador, com armazenamento por quiz e momento. |
| 12 | Validações e consentimento sem rolar | **passou** | Nome, telefone e e-mail inválidos rejeitados; consentimento visível em 360, 390 e 1440 px. Campos: **não comparado visualmente**, conforme autorização do usuário. |
| 13 | Sem dados pessoais na URL | **passou** | URLs de saída inspecionadas; contato e respostas não entram na querystring. |
| 14 | Apps Script cria/atualiza mesma linha nos dois quizzes | **não testado** | Teste local do Code.gs com planilha simulada passou, com chaves estáveis e sem duplicação. Não houve implantação nem teste em uma planilha Google real. |
| 15 | Endpoint fora do ar não impede oferta | **passou** | Oferta apareceu em cerca de 52 ms no teste; duas tentativas totais de envio, sem bloquear navegação. URL vazia registra payload no console. |
| 16 | Fórmula como texto e honeypot sem gravação | **não testado** | Ambos passaram na execução local do Code.gs com planilha simulada. Gravação real no Google não testada. |
| 17 | `?m=B` grava momento B | **passou** | Payload e simulação de gravação confirmaram B. |
| 18 | Renda/faturamento sem reaparecer ou ir ao Pixel | **passou** | Não aparecem nas telas posteriores nem nos eventos de analytics inspecionados. Permanecem no estado local e payload da planilha. Pixel não carregado nem ativado. |
| 19 | Zero expressões proibidas no código | **passou** | Busca nos arquivos públicos HTML/JS/CSS/JSON: zero ocorrências. Os arquivos de QA da referência são evidência separada, nunca servida como conteúdo dos quizzes. |
| 20 | Redação literal e lacunas marcadas | **passou** | Auditoria textual sem divergências, incluindo E1–E6 da §17; conteúdo das §§6/7/16 e parágrafos de resultado da §8, expressamente referenciados pela §6. Lacunas abaixo. |
| 21 | Sem conteúdo da referência no produto | **passou** | Textos/opções/imagens/dados comerciais não reaproveitados. Apenas sistema visual e fonte Inter; única foto pública é do Guilherme. Referência permanece restrita à pasta de QA. |
| 22 | Todas as telas em 390 px | **passou** | 24 + 16 PNGs em `qa/screens/`, indexados na galeria. Após a errata, T19, T24, S13 e S16 foram regeneradas em 360, 390 e 1440 px. |

Evidências: `qa/browser.json` (19 percursos; sem erros), `qa/variants.json`, `qa/apps-script.json`, `qa/content.json`, `qa/style-comparison.json`, `qa/errata/report.json` e `qa/errata/full-flows.json`. A conferência final das 120 combinações tela/largura confirmou capturas presentes, ausência de overflow horizontal e de variável crua (`qa/final-check.json`). O gate de publicação retorna bloqueio esperado por configurações incompletas (`qa/publication-gate.json`). O gate da Governança retornou “nada a propagar” (`qa/propagacao.txt`). Não executamos compra, pagamento, envio real ao Google ou teste de Pixel.

## Configurações vazias

- Nos dois quizzes: `apps_script_url`, `pixel_id`, `dados_legais`, `url_termos`, `url_privacidade`.
- Permissão: `imagem_mapa`.
- Signos: `checkout_fogo`, `checkout_terra`, `checkout_ar`, `checkout_agua`, `preco_signos_valor`, `preco_signos_apoio`, `cancelamento_signos`, `descricao_elemento.Fogo`, `.Terra`, `.Ar`, `.Água`.
- As imagens das opções permanecem vazias intencionalmente: usamos os emojis fornecidos. Listas de depoimentos permanecem vazias e `depoimentos_ativos: false`.

Preencher `pixel_id` não ativa rastreamento: a biblioteca externa não foi incluída. Qualquer ativação futura exige tarefa própria autorizada.

## COPY PENDENTE visível

- `[[COPY PENDENTE: dados legais do rodapé]]` — ofertas dos dois quizzes.
- `[[COPY PENDENTE: preço do grupo de signos]]` — S16.
- `[[COPY PENDENTE: apoio do preço do grupo de signos]]` — S16.
- `[[COPY PENDENTE: resposta de Posso cancelar?]]` — resposta do FAQ em S16.

Mapa, descrições por elemento e depoimentos não exibem placeholders: as instruções específicas determinam omitir esses conteúdos enquanto vazios/desligados. Links de termos/privacidade e checkouts vazios não recebem destinos inventados.

## Conflitos de UI e limites da comparação

- A correção do usuário prevaleceu sobre “nada de botão fixo”: botões fixos nas telas equivalentes, incluindo checkout. Isso também prevalece sobre a posição textual do consentimento “abaixo do botão”: ele fica no fluxo visível da captura e o botão no rodapé fixo.
- Campos da captura não renderizaram na referência: construídos com altura, borda, raio, fonte e cores medidos nos outros componentes. **Não comparado visualmente.**
- Métricas, preço e FAQ também não renderizaram na cópia literal. Construídos com os tokens disponíveis; não é possível afirmar igualdade visual ou comportamental desses componentes. A FAQ permite uma resposta aberta por vez; esse comportamento precisa de comparação futura com uma referência funcional.
- T21 recebeu destaque vermelho no trecho literal “O que o teste mostrou”, como a headline correspondente da referência/§3.2; o destaque não estava marcado na transcrição da §6. Nenhuma palavra mudou.
- A foto escolhida é um arquivo real do Guilherme, em composição horizontal, para o recorte 3:2 medido; nenhuma imagem de pessoa foi gerada.

## Dúvidas de copy — texto mantido

- Em T19, a resposta “tantas formações que perdeu a conta” combinada com “Você já fez {{formacoes}} formações.” repete “formações”. Não corrigimos a frase.
- T19/T21 conservam afirmações genéricas sobre falta de conhecimento/trava mesmo no percurso ALTO. Mantivemos a copy e as diferenças de oferta determinadas pelo briefing.
- S13 contém “O conselho chega antes da semana começar”, sem definição operacional de dia/horário. Mantido, sem acrescentar compromisso.
- A §15 trata a oferta ALTO como pendência, mas a §6 fornece a versão provisória: implementamos a redação fornecida.
- O exemplo abreviado de chave com pontos em §10.3 diverge da convenção explícita em §10.4: usamos as chaves completas estáveis de §10.4, sem reordenar.

## Fontes, isolamento e reprodução

Fonte de conteúdo: briefing integral indicado pelo usuário, SHA-256 `d3a000b8f4c8991ad94a1b9ddc0086c798d583af23d8aab45492c356a136b050`, incluindo a §17 e as duas correções anteriores desta conversa. Fonte visual: arquivo literal em `920-referências lp/lp02-profissaohomesales-com-arquivo-literal/`; adaptação do visualizador criada somente em `tools/reference.cjs`. DOM e estilos computados das 41 telas estão em `qa/reference/`.

Foto copiada de `clientes/Guilherme Araújo/05 - design e criativos/fotos Guilherme/WhatsApp Image 2026-09-07 at 03.17.29.jpeg`; fonte Inter copiada dos recursos arquivados da referência. Fontes canônicas e referência não foram editadas. Código, scripts de inspeção/teste, capturas e registros ficaram nesta pasta isolada; somente índices da antessala receberam o registro da entrega. Os nove perfis temporários `.browser-*` foram removidos da entrega depois dos testes, por não integrarem o pacote.

Abrir e repetir testes: [README.md](README.md). Para integração futura, o destino proposto é a área web do cliente, após revisão e preenchimento das pendências; nenhuma promoção foi executada. Esta entrega local **não equivale a aceite visual integral ou prontidão para publicação**.

## Adendo — Teto e correção do engine (02/10/2026)

### O que foi feito

- Criada a página local `public/teto.html`, configurada para o quiz `teto`, com os metadados definidos no briefing.
- Corrigido exclusivamente `itemValue()` em `public/engine.js`: título usa `variableVariants` e texto usa, nesta ordem, `resultVariants`, `variants.cases` e texto-base. A lógica de variantes de bloco não foi alterada.
- Incluída a aba `teto` no Apps Script, os dois casos de teste por `lead_id` em `teste.http` e a referência à nova aba no guia.
- Montada `hostinger/teto/`; o engine corrigido foi sincronizado em `hostinger/permissao/` e `hostinger/signos/`. Nenhum JSON de copy existente foi alterado.
- Gerados os pacotes `teto-v1.zip`, `permissao-v3.zip` e `signos-v6.zip`.

### Verificações executadas

- 25 percursos de navegador sem erro: BAIXO, MÉDIO e ALTO de Permissão e Teto; 12 signos; desktop e mobile. No ALTO, Teto salta T20–T22.
- O checkout de Teto foi interceptado no destino definido, sem nome, e-mail ou telefone na URL.
- T19: títulos e textos distintos em Permissão e Teto nas três respostas de preço e em “já perdi a conta”.
- S13: faixa e parágrafo de padrão presentes para as quatro respostas de decisão.
- 192 combinações tela/largura sem overflow, variável crua ou `[[COPY PENDENTE` visível.
- Apps Script validado localmente com criação e atualização da mesma linha para as três abas.

### O que não foi testado

- Publicação na Hostinger, checkout real, pagamento, Pixel e implantação/POST real do Apps Script no Google.
- O ZIP não foi enviado a nenhum serviço externo.

### Erros de texto encontrados

- Nenhum. A chave `ui.legalPending` em `teto.json` foi preservada: com `dados_legais` preenchido, ela não é exibida.
