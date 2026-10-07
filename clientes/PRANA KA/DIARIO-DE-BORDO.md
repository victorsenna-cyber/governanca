# DIARIO-DE-BORDO.md — PRANA KA

> STATUS: VIGENTE · log append-only

Entradas antigas não são reescritas. Correções entram em nova nota com referência à entrada corrigida.

## 07/07/2026 — Kickoff e enquadramento

**Resultado:** escopo consolidado em quatro páginas; Masterclass paga definida como porta de entrada para a Mentoria; comunidade adiada.

**Evidência:** `Reunião Zoom de prana.md`, `CONTEXTO.md` e `PROJETOS.md`.

**Bloqueios nascidos:** preço/checkout, insumos de produto, depoimentos, bio e infraestrutura de publicação.

## 20/07/2026 — Entrada na raiz ativa de clientes

**Resultado:** o acervo da Prana passou a viver em `01 - Governança/clientes/PRANA KA/`.

**Proteção:** a origem anterior foi preservada como legado/leitura; nenhum writeback externo autorizado.

**Evidência:** `../../STATUS.md` §§22 e 28.

## 23/07/2026 — Masterclass construída localmente

**Resultado:** nova página da Masterclass Portal das Felinas concluída e validada em `04 - web design/v2/`.

**Validação:** desktop e mobile, acessibilidade, CTAs, modal, formulário local, recursos, console, movimento reduzido e ausência de overflow.

**Não realizado:** deploy, checkout real e Pixel.

**Continuidade:** gates em `04 - web design/v2/HANDOFF.md`.

## 24/07/2026 — Mentoria construída e revisada

**Resultado:** página da Mentoria O Templo Dourado concluída em bundle estático isolado e revisada visualmente.

**Validação:** 390, 768 e 1440 px; HTML/JavaScript; teclado; sem JavaScript; tracking local; Lighthouse 96/100/100/100.

**Não realizado:** deploy, preenchimento do `OFFER_CONFIG`, checkout ou Pixel.

**Continuidade:** gates em `04 - web design/mentoria/HANDOFF.md`.

## 25/07/2026 — Integração ao acompanhamento da Governança

**Executor:** Codex, sob solicitação de Victor/Continuum.

**Objetivo:** transformar o projeto de um conjunto de documentos e páginas em operação acompanhável.

**Alterações:**

- criados `AGENTS.md` e `CLAUDE.md` locais;
- criado `STATUS.md` com resultado até pagamento, andamento 2/4, 0/4 publicadas, caminho crítico, responsáveis e questões abertas;
- criado `DECISOES.md` com decisões vigentes e propostas não vigentes;
- este diário passou a registrar a linha do tempo append-only;
- projeto conectado ao `STATUS.md` e à Revisão de Iteração da Governança;
- divergência “12 encontros = 12 semanas” removida dos documentos operacionais.

**Verificação:** rotas, referências, escopo, estados de publicação e gates cruzados com os dois handoffs; 26 IDs de pendência únicos (6 Masterclass, 11 Mentoria, 4 Curso e 5 página-mãe); tabelas Markdown consistentes; zero contradição “12 semanas” ou “Portal das Leoas” nos documentos canônicos correntes.

**Não alterado:** HTML/CSS/JavaScript das páginas, fontes brutas, acervo de imagens, checkout, Pixel, domínio, campanha ou publicação.

**Próximo gate:** recolher por escrito P-MC-01 a P-MC-06 e P-ME-01 a P-ME-11; depois preencher, testar e colher aprovação final.

**Rollback:** remover somente os cinco arquivos locais de governança e reverter as linhas datadas de 25/07/2026 nos documentos globais; nenhum artefato comercial depende da remoção.

## 25/07/2026 — Página-mãe construída localmente

**Executor:** Codex, sob direção de Victor/Continuum.

**Resultado:** página-mãe The Golden Temple construída como bundle estático multifile em `04 - web design/the-golden-temple/`.

**Direção aplicada:**

- Flor da Vida como geometria central e correspondência real com o acervo da marca;
- hero 2.5D sem pessoa, mãos ou fundo dos frames de referência;
- respiração luminosa, partículas em profundidade, eixo dourado, espiral do Método S.E.R. e revelações nas demais dobras;
- arquitetura de copy derivada do método de página de vendas, Fable 5, copy avançada e voz da Prana;
- fase PT concluída; links, EN, bio final, book e players permanecem sob gate.

**Validação:** 390, 768 e 1440 px; Lighthouse 93/100/100/100; sem overflow, erros de console ou recursos ausentes; teclado, sem JavaScript, lazy-load e movimento reduzido aprovados.

**Não realizado:** deploy, upload na Hostinger, domínio, Pixel, links comerciais, checkout, embeds musicais ou publicação.

**Continuidade:** `04 - web design/the-golden-temple/HANDOFF.md`; P-PM-01 a P-PM-06 em `STATUS.md`.

**Rollback:** pasta isolada; remover somente `04 - web design/the-golden-temple/` e reverter os registros desta entrada caso a decisão seja formalmente substituída.

## 27/07/2026 — Checkout da Masterclass e captura de leads

**Executor:** Codex, sob solicitação de Victor/Continuum.

**Resultado:** checkout PagTrust configurado em `04 - web design/v2/index.html`; P-MC-01 fechado localmente.

**Implementação:**

- todo CTA de compra abre a captura de nome, WhatsApp, e-mail e consentimento;
- frontend preserva `funnel`, `origem` e UTMs;
- `name` e `email` seguem para o pre-fill da PagTrust;
- backup local permanece como contingência;
- `APPS-SCRIPT-LEADS.gs` criado para receber e gravar os leads na aba `Leads - Portal das Felinas`;
- proteção contra honeypot, repetição curta e fórmula injetada na planilha;
- guia de implantação criado em `04 - web design/v2/LEADS-PLANILHA.md`.

**Verificação:** URL PagTrust respondeu HTTP 200; fluxo local gerou a URL esperada; checkout real abriu com nome e e-mail preenchidos; UTMs e `origem` preservados; lead de QA local conferido e removido; página sem erro de console.

**Aberto:** P-MC-07. O envio real à planilha depende da URL `/exec` gerada ao implantar o Apps Script na planilha da Prana.

**Não realizado:** implantação do Apps Script, criação/alteração da planilha, deploy da página, Pixel, domínio ou compra.

**Rollback:** esvaziar `CHECKOUT_URL`, restaurar o fluxo anterior do modal e remover os dois arquivos de integração; nenhuma mutação externa foi feita.

## 27/07/2026 — Endpoint recebido e bloqueio real da planilha identificado

**Resultado:** a URL `/exec` fornecida foi inserida em `LEADS_ENDPOINT`. O Web App respondeu HTTP 200 no `GET`, e o checkout continuou funcional.

**Teste ponta a ponta:** o `POST` de QA retornou `ok: false` com falha do serviço Planilhas ao acessar o documento `1_uO8I7yUHRxmIPX12MPZngfkCkrULrwdRGxCbuk6BcI`.

**Efeito:** nenhuma linha de QA foi criada e não há dado de teste a remover. P-MC-07 permanece aberto, agora diagnosticado como bloqueio de permissão ou conta executora sobre a planilha.

**Correção local:** `APPS-SCRIPT-LEADS.gs` passou a abrir a planilha por ID explícito e seu `doGet()` passou a testar acesso real ao documento. A ativação exige publicar uma nova versão pela conta proprietária ou editora da planilha e repetir o teste de escrita.

**Não realizado:** alteração de permissão no Google, reimplantação externa do Web App, deploy da página, Pixel, domínio ou compra.

## 27/07/2026 — Iteração da página-mãe e auditoria da Mentoria

**Executor:** Codex, sob direção de Victor/Continuum.

**Resultado:** a página-mãe The Golden Temple foi iterada localmente em `04 - web design/the-golden-temple/`, sem publicação.

**Implementação:**

- hero reconstruído em campo claro de ouro mineral, sem pessoa, com painel de vidro fosco;
- Flor da Vida mantida estática, com contraste reduzido, e campo luminoso ampliado para 148 partículas-base no desktop;
- tipografia de títulos substituída por Fraunces variável, hospedada no próprio bundle;
- espiral S.E.R. refeita com arcos de 90 graus e raios proporcionais a `1, 1, 2, 3, 5, 8, 13, 21, 34, 55`;
- retrato da Prana recebeu recorte orgânico, máscara, gradação, halo e integração cromática;
- botões unificados em liquid glass dourado com raio de 8 px;
- cadência ampliada para cinco CTAs visíveis: header, D1, D4, D7 e D9;
- navegação por âncoras estabilizada contra mudanças de layout causadas por `content-visibility`;
- card da Mentoria na página-mãe corrigido para assinatura contínua com encontros a cada 14 dias;
- arquitetura auditada contra o kernel ativo de web design, UI/UX, copy, geração de resultados, voz da Prana e `EXTRACAO-MENTORIA-27-07.md`.

**Validação:** 390 × 844, 768 × 1024 e 1440 × 900; zero overflow; CTA do hero na primeira tela; Flor da Vida sem transformação; cinco CTAs visíveis; âncoras corrigidas; console sem erros; HTML e JavaScript válidos; Lighthouse 95/100/100/100, LCP 2,2 s, TBT 31 ms e CLS 0,0001.

**Correção de estado:** a extração de 27/07/2026 substituiu o pressuposto de 12 encontros fechados por assinatura contínua, entrada a qualquer momento e encontros quinzenais às quartas, 19h. P-ME-02 e P-ME-04 foram fechadas; o bundle da Mentoria passou a constar como **REVISÃO OBRIGATÓRIA** antes da ativação.

**Aberto:** P-PM-01 a P-PM-06; URLs das experiências permanecem vazias e seus links comerciais continuam ocultos. Preço, checkout, prova, pós-compra e demais gates da Mentoria permanecem pendentes.

**Não realizado:** deploy, upload na Hostinger, alteração de domínio, Pixel, checkout, planilha, campanha, mensagem externa ou publicação.

**Continuidade:** `04 - web design/the-golden-temple/HANDOFF.md` e `STATUS.md`.

## 03/08/2026 — Insumos da cliente capturados; gargalo migra de insumo para publicação

**Executor:** Claude/Continuum, sob solicitação de Victor.

**Origem:** capturas do grupo de WhatsApp "Prana - Páginas de Vendas", janela de 31/07/2026 a 03/08/2026, entregues por Victor em 03/08/2026.

**Resultado:** os insumos existiam apenas na conversa. Foram capturados, datados e registrados no padrão de quatro camadas em `REGISTRO-INTERACAO-2026-08.md`. O estado local estava parado desde 27/07/2026 — sete dias de defasagem sobre a frente com prazo externo.

**Achados que mudam a ordem do dia:**

1. **Demanda convocada sem destino.** Em 02/08/2026 a Prana publicou carrossel de 11 cards com CTA "COMENTE 'FELINAS' PARA ACESSAR A PÁGINA" e declarou que soltaria stories com link direto. Nenhuma das quatro páginas está publicada. O gargalo deixou de ser insumo comercial e passou a ser **publicação**.
2. **Divergência pública de horário.** O card anuncia 8/8 às **9h**; a página anuncia **9h30** em sete lugares. Registrado como P-MC-08.
3. **Promessa maior que a página.** O card promete "ritual especial de Lionsgate" e preparação para os eclipses de agosto; a página não menciona. Registrado como P-MC-10.
4. **Bio autorizada e não integrada.** Em 31/07/2026 a Prana enviou três versões de bio e pediu que a página adotasse essa linha. Não foi integrada. A bio dela contém "psicóloga", termo que a página evita. Registrado como P-MC-09, com alerta de que autorização da titular resolve o gate editorial e não o regulatório.
5. **Plataforma de checkout da Mentoria reaberta.** A Prana questionou a PagTrust e levantou a InfinitePay, por prazo de saque. Pedimos o link em 31/07/2026 às 23h36 e não fizemos follow-up em três dias. Registrado como P-ME-05 reaberta; erro nosso registrado em `CONTEXTO.md` §8.
6. **Cortesias e Visão Uterina.** Intenção de conceder ao menos 5 cortesias (P-ME-12) e de divulgar sessões individuais de Visão Uterina na mesma janela (P-XX-01, risco de canibalização).

**Alterações materiais:**

- criado `REGISTRO-INTERACAO-2026-08.md` — quatro camadas, mensagens literais com data e hora, carrossel publicado e reconstrução das datas a partir dos separadores do WhatsApp;
- `STATUS.md` reescrito com estado verificado de 03/08/2026: 5 dias de prazo, novo bloco §0 de achado, pendências **reclassificadas por bloqueio real** em bloqueia-dinheiro, bloqueia-entrega e não-bloqueia;
- `CONTEXTO.md` atualizado: bio autorizada como fonte canônica (§1-bis), divergência de horário, plataforma de pagamento reaberta, mapa de divulgação da cliente (§4-bis), ritmo e conduta dela na semana do lançamento, erro nosso de follow-up;
- Curso e página-mãe **congelados até 09/08/2026** por decisão de fila.

**Verificação:** horário conferido linha a linha em `04 - web design/v2/index.html` (7 ocorrências de 9h30); bio conferida na linha 1925; `OFFER_CONFIG` da Mentoria conferido com 9 campos obrigatórios em `null`; datas reconstruídas pelos separadores nativos `sábado`, `Ontem` e `Hoje` com âncora em 03/08/2026.

**Não alterado:** HTML, CSS e JavaScript das páginas; nenhum campo de oferta preenchido; checkout, Pixel, domínio, planilha, campanha ou publicação. Nenhuma mutação externa.

**Aberto:** P-MC-04 a P-MC-10, P-ME-01, P-ME-05, P-ME-07, P-ME-12, P-XX-01.

**Próximo gate:** confirmar o horário com a Prana ainda em 03/08/2026 e publicar a Masterclass até 05/08/2026.

**Rollback:** remover `REGISTRO-INTERACAO-2026-08.md` e reverter as seções datadas de 03/08/2026 em `STATUS.md`, `CONTEXTO.md` e neste diário. Nenhum artefato comercial depende dessas alterações.

## 03/08/2026 — Página-mãe V2 orientada a caminhos

**Executor:** Codex, sob autorização direta de Victor/Continuum após aprovação do planejamento.

**Resultado:** criada uma V2 isolada em `04 - web design/the-golden-temple-v2/`; a versão anterior em `04 - web design/the-golden-temple/` foi preservada sem alterações.

**Implementação:**

- hero, Flor da Vida, orbe e animação aprovados foram mantidos;
- placa do hero ampliada para conter “Golden Temple” em desktop;
- macroação unificada em “Encontrar meu caminho”;
- escola explicada como a casa onde os caminhos se encontram;
- Método S.E.R. organizado em três movimentos, cinco passos e quatro dimensões;
- Corporificar nomeado como o ponto onde a experiência se torna maneira de viver;
- Curso Despertar do Prazer Sagrado apresentado como primeira experiência;
- Mentoria O Templo Dourado apresentada como jornada profunda e contínua;
- Mentoria ligada ao bundle local; Curso mantido sem link falso enquanto não houver URL oficial;
- Masterclass rebaixada a portal sazonal, exibido somente quando houver campanha configurada;
- `robots.txt`, `llms.txt`, handoff e direção criativa próprios adicionados ao bundle.

**Validação:** HTML e JavaScript válidos; zero overflow em 390, 768, 1024, 1100 e 1440 px; hero contido; âncora “Caminhos” estabilizada; rota local da Mentoria aberta com título e H1 corretos; console limpo; Acessibilidade 100 e Boas Práticas 100 em inspeção local; hashes confirmam que a cena do hero e suas geometrias não mudaram.

**Aberto:** URL oficial do Curso, URL pública definitiva da Mentoria, domínio ou subdiretório, aprovação escrita e medição autorizada.

**Não realizado:** deploy, upload na Hostinger, checkout, domínio, Pixel, campanha, mensagem externa ou alteração da V1.

**Proteção de prioridade:** esta execução é a exceção delimitada DEC-2026-08-03-004 e não substitui a prioridade operacional da Masterclass e da Mentoria até 08/08/2026.

**Rollback:** remover somente `04 - web design/the-golden-temple-v2/` e reverter os registros DEC-2026-08-03-004 e desta entrada; a V1 permanece íntegra.

## 03/08/2026 — Auditoria da página-mãe The Golden Temple V2

**Executor:** Claude/Continuum, sob solicitação de Victor.

**Escopo:** `04 - web design/the-golden-temple-v2/` auditada contra o circuito ativo — gerador (classificação, dobras, gate), ui-ux (gate visual e anti-padrões), copywriter (gate anti-slop) e `voz-prana.skill.md`. `METODO-PAGINA-DE-VENDAS.md` é ponteiro desde 26/07/2026 e não foi usado como fonte.

**Veredito: NÃO PUBLICAR.** A execução é boa; o bloqueio é ausência de destino.

**Achados P0:**

- **F-01 — funil sem terminal.** Oito elementos interativos, zero checkout. Os cinco CTAs apontam todos para a mesma âncora interna `#caminhos`; lá, o card do Curso exibe "Página de entrada em preparação" e o card da Mentoria abre uma página cujo `OFFER_CONFIG` tem 9 campos obrigatórios em `null`.
- **F-02 — a Masterclass está oculta.** O `seasonal-portal` está `hidden` com `links.felinas` vazio, na semana em que a cliente divulga a Masterclass publicamente. O único ativo com prazo, checkout configurado e demanda convocada não aparece na página-mãe.
- **C-01 — listagem sem pivô.** Nove séries paralelas de 3 e 4 elementos ao longo da página. Score de Tensão 3/10, que reprova sozinho pela régua de copy.

**Achados P1:** classificação dos 4 eixos não escrita antes da construção; clímax duplo declarado em `CREATIVE-DIRECTION.md` e nenhum coincidindo com a decisão em D6; qualificação de público só na dobra 8; voz da direção criativa no lugar da voz da Prana (zero conectores dela, 1 de 10 frases-âncora usada, sem selamento no fecho); placeholder visível em metade da vitrine; medição codificada com nomes corretos e `analytics.enabled: false`; 26 valores de cor fora de `:root`.

**Scores:** gate visual 42/60 (limite exato) · gate de copy 34/60 com Tensão 3 (reprovado) · gate do gerador reprovado na entrada e na integridade.

**Correção de método registrada:** auditar um hub com régua de página de vendas gera falso positivo. Três itens do gate foram declarados não aplicáveis (preço na página, escassez real, pilha antes do preço) e o anti-padrão de duas ofertas foi dispensado, porque a coexistência é a função de uma página-mãe.

**Decisão de fila:** a página fica **congelada até 09/08/2026**. Corrigi-la não gera receita nos 5 dias que restam, e a página que gera está pronta e não publicada. Única exceção liberada: preencher `links.felinas` e revelar o portal sazonal assim que a Masterclass tiver URL — cinco minutos que consertam um erro em curso.

**Não alterado:** nenhum arquivo da página. Auditor devolve defeito localizado; só o redator altera copy e só o designer altera pixel.

**Continuidade:** `AUDITORIA-GOLDEN-TEMPLE-V2-2026-08-03.md`, com os 16 achados classificados em P0, P1 e P2 e a ordem de correção.

## 04/08/2026 — Página local do Curso Despertar do Prazer Sagrado

**Executor:** Codex, sob ordem direta de Victor/Continuum.

**Resultado:** bundle estático criado em `04 - web design/curso/`, sem deploy e sem mutação externa.

**Implementação:**

- copy aplicada literalmente a partir de `COPY-CURSO-DESPERTAR.md`;
- direção “editorial ritual encarnado”, com rosa úmida, pergaminho, vinho e ouro raro;
- jornada representada por entrada, sete marcadores neutros e saída, sem inventar nomes, temas ou ordem das meditações;
- item de duração do acesso e reversão de risco omitidos por falta de confirmação;
- checkout configurado em modo fail-closed: URL vazia, analytics desligado e CTAs abrindo apenas um diálogo local;
- UTMs, `funnel` e `origem` preparados para preservação quando houver checkout oficial;
- fontes e imagens mantidas dentro do próprio bundle.

**Validação:** HTML e JavaScript válidos; renderização conferida em 390 × 844, 768 × 1024 e 1440 × 900; zero overflow horizontal; imagens e recursos HTTP 200; console limpo; diálogo do CTA com foco acessível; Lighthouse 100/100/100/100; LCP local observado de 143 ms e CLS 0,00.

**Gates abertos:** GATE-01 preço; GATE-02 nomes, ordem e temas das sete meditações; GATE-03 plataforma, forma e duração do acesso; GATE-04 garantia/devolução; GATE-05 URL do checkout; GATE-06 fluxo pós-compra.

**Não realizado:** deploy, Hostinger, domínio, checkout externo, pagamento, Pixel, analytics, campanha, mensagem externa ou publicação.

**Continuidade:** `04 - web design/curso/HANDOFF.md` e DEC-2026-08-04-001.

**Rollback:** remover somente `04 - web design/curso/` e acrescentar nova decisão substitutiva; nenhuma origem, versão anterior ou sistema externo foi alterado.

## 04/08/2026 — Correção da página-mãe The Golden Temple V2

**Executor:** Codex, sob ordem direta de Victor/Continuum.

**Escopo:** somente `04 - web design/the-golden-temple-v2/`, conforme `CORRECAO-GOLDEN-TEMPLE-V2.md` e `COPY-GOLDEN-TEMPLE-V2.md`. A V1 permaneceu preservada.

**Resultado:** a página-mãe deixou de apenas nomear Curso e Mentoria e passou a mostrar as duas jornadas, a ordem de suas passagens e destinos comerciais absolutos. A correção permanece local e não foi publicada.

**Implementação:**

- hero, copy de D1, canvas, orbe, Flor da Vida e `hero-scene.js` preservados por hash;
- copy literal de D2 a D9 aplicada;
- qualificação de público posicionada no topo de D2, desvio exigido pelo congelamento do hero;
- Curso estruturado em três passagens e Mentoria em quatro passagens, ambas com `<ol>` semântico;
- chave de roteamento `despertar` substituída por `curso`;
- URLs absolutas configuradas para Curso e Mentoria;
- fallback fail-closed mantido no código e removido da vitrine quando houver destino;
- D6 transformada no clímax visual único; D7 e D9 reduzidas para contraste médio;
- 26 ocorrências hexadecimais dispersas migradas para 25 tokens funcionais em `:root`, sem cor hexadecimal remanescente fora da raiz;
- `CREATIVE-DIRECTION.md` e `HANDOFF.md` atualizados.

**Validação estática:** `html-validate` e `node --check` limpos; um H1; zero IDs duplicados; zero recursos locais ausentes; zero travessões na copy pública; zero ocorrência da chave antiga, do placeholder anterior e da rota relativa da Mentoria. Hash do bloco D1: `F6985DE03DE00F6DD958FCC5CAEEC5605735122E2BFF9FDD3C57D5E7350A2AE8`.

**Validação de destinos:** `https://thegoldentemple.io/mentoria` respondeu HTTP 200; `https://thegoldentemple.io/curso` respondeu HTTP 404. P-PM-06 permanece aberto e a página-mãe não deve ser publicada até o Curso responder 200.

**Limitação de QA:** o navegador integrado bloqueou a inspeção automatizada por política de origem `file://`. Não houve contorno. A regressão visual da correção em 390, 768, 1024, 1100 e 1440 px, incluindo teclado e movimento reduzido, fica obrigatória em origem HTTP antes da publicação.

**Não realizado:** deploy, Hostinger, domínio, checkout, Pixel, analytics, campanha, mensagem externa ou alteração da V1.

**Continuidade:** `04 - web design/the-golden-temple-v2/HANDOFF.md` e P-PM-06 em `STATUS.md`.

**Rollback:** reverter somente `index.html`, `css/styles.css`, `js/config.js`, `CREATIVE-DIRECTION.md` e `HANDOFF.md` dentro da V2 para o estado anterior a esta entrada. Nenhum sistema externo depende da correção.

## 04/08/2026 — Auditoria da página-mãe contra a bíblia de marca

**Executor:** Claude/Continuum, sob solicitação de Victor.

**Escopo:** V2 no estado pós-correção, auditada contra `O TEMPLO DOURADO/TEXTOS/O TEMPLO DOURADO SITE.docx` (610 parágrafos, 6.586 palavras, 6 tabelas) e contra as três skills do circuito.

**Verificado como fechado pela correção de 04/08/2026:** funil com terminal real (`config.js` com as duas URLs absolutas), clímax único e escuro em D6 contra campo claro em D7 e D9, 38 de 38 hexadecimais dentro de `:root`, pivô por dobra e voz da Prana restituída. Gate visual subiu de 42 para 48 sobre 60; gate de copy de 34 para 44.

**Veredito novo: a página está fiel ao tom da marca e ausente da substância da marca.**

**Achados de fidelidade:**

- **D-01 · o inimigo nomeado não existe.** "Poder Distorcido" e "Guardião do Véu" aparecem zero vezes. O docx dedica quatro blocos e duas tabelas a construir o antagonista e instrui literalmente: "A IDEIA NÃO É FALAR SERPENTE CAÍDA NA COPY, mas trazer 'poder distorcido' como símbolo disso". A página cumpriu a metade que remove e não cumpriu a metade que substitui. Em D3 a frase canônica foi usada pela metade: o docx continua com "O Guardião do Véu tem nome, e hoje você o desmascara", que é justamente o trecho que dá causa à dor.
- **D-02 · mecanismo citado, nunca explicado.** "A Iniciação Dourada" aparece uma vez, como característica do card da Mentoria. No docx é a frase-manifesto do mecanismo único da escola. "Seduzir" aparece zero vezes, e a versão curta do mecanismo é "Não te ensino a seduzir. Te reconduzo à tua própria fonte."
- **D-03 · território trocado.** Sexualidade, yoni, êxtase, serpente, soberania, coroação e exílio: zero ocorrências. O docx declara que o ativo que ninguém copia é "a coragem de unir o sagrado e o sensual sem pedir desculpa", e que "o Templo Dourado não é uma marca de bem-estar". Evitar o rótulo "tantra" é red line válida e respeitada; remover o assunto é outra coisa. **Decisão humana necessária**, e hoje não existe registro dela.
- **D-06 · a entrega dos 5 passos existe no docx e não foi usada.** O docx dá Fundamento, Pergunta-guia e Entrega para cada passo. A página traz os dois primeiros. A palavra "Entrega" aparece zero vezes. Era a resposta pronta para o item "o que eu ganho" do teste dos 5 segundos.
- **D-07 · a página separa o que o docx unifica.** O método tem estrutura dupla: cada passo tem uma dimensão como fundamento. A página os divide em D4 e D5 sem o fio que os liga, e é essa a causa real da redundância antes tratada como problema de texto.

**P2 registrados:** personalidade sem selvagem, sensual e feroz; 1 dos 4 registros de voz em uso; 2 dos 10 símbolos da ontologia visual, e os dois mais genéricos; missão, visão e essência do docx ausentes; classe `section-ivory` numa seção escura.

**Registrado como acerto:** ausência de "tantra" e "serpente caída"; rubi reservado para custo e clímax, uso maduro de bicromia; ausência de prova de terceiro enquanto não houver autorização; felinas fora da página, coerente com a Fase 4; as quatro fases da Mentoria conferidas uma a uma contra o docx; quatro frases canônicas em uso literal.

**Decisão de fila:** nada disto entra antes de 09/08/2026. A página-mãe segue congelada por DEC-2026-08-03-001 e o único P0 aberto continua sendo a Masterclass sem URL.

**Não alterado:** nenhum arquivo da página, do docx ou dos bundles.

**Continuidade:** `AUDITORIA-GOLDEN-TEMPLE-V2-vs-DOCX-2026-08-04.md`, com os 12 achados e a ordem de correção a partir de 09/08/2026.

## 04/08/2026 — Copy V3 da página-mãe, reescrita do zero

**Executor:** Claude/Continuum, sob solicitação de Victor.

**Escopo:** copy da página-mãe reescrita integralmente a partir da arqueologia real: `O TEMPLO DOURADO SITE.docx`, a call de 07/07/2026 e o registro de interação de agosto. Substitui `COPY-GOLDEN-TEMPLE-V2.md`.

**Decisão tomada e declarada:** a V3 **assume o território da marca**, que a auditoria de 04/08/2026 apontou como removido (D-03). Motivo: o docx é literal ao dizer que o Templo Dourado não é marca de bem-estar, e nomeia como ativo não-copiável "a coragem de unir o sagrado e o sensual sem pedir desculpa". A red line dela é o rótulo "tantra", não o assunto. Calibragem aplicada: a página-mãe **nomeia** o território e **não descreve prática**; anatomia e portais pertencem à página da Mentoria. A decisão é reversível em um único bloco, e a variante de recuo está escrita no arquivo.

**Estrutura nova:** a página passa a seguir a jornada da heroína que o próprio docx declara — mundo comum, vilão, portal, mecanismo, transformação. De 9 para 11 dobras, com desvio de comprimento declarado.

**O que entra:** D3, o Guardião do Véu com as seis táticas e as seis mentiras, literais da tabela do docx. D4, a tabela Poder Distorcido contra Poder Sagrado. D5, A Iniciação Dourada como mecanismo nomeado e explicado, e não mais como característica de card. D7, as três linhagens, que é a prova de profundidade que a página não tinha. Os guardiões animais das quatro fases da Mentoria.

**O que sai:** a dobra das quatro dimensões deixa de existir separada. As dimensões viram o fundamento de cada passo do S.E.R., como o docx define, e a redundância D4/D5 morre pela raiz. A quinta linha do mapa, Soberania e Liderança, entra pela primeira vez. Cada passo passa a ter a **Entrega** que existia no docx e nunca tinha sido usada.

**Verificação de origem, por script sobre o docx completo com as 6 tabelas:** **17 de 18 frases confirmadas literalmente**. A exceção, "se tu quer que a tua vida fique igual, não chega perto de mim", foi confirmada na transcrição da call e consta nas frases-âncora da skill de voz. Nenhuma frase da página foi inventada.

**Gate:** zero travessões nos blocos de copy; zero ocorrências de tantra, serpente caída, coaching, mindset, melhor versão, destrave e alta performance. A linhagem passou a ser citada como "Shivaísmo da Caxemira", sem o rótulo que ela evita. Score estimado 51 sobre 60, com Tensão 9 contra 3 da versão original.

**Nota de mídia paga registrada:** D1 está escrita em registro seguro para anúncio; D5 não está, e é por isso que a variante existe.

**Não alterado:** nenhum arquivo da página, do docx ou dos bundles. Esta entrega é copy para implementação, não implementação.

**Fila:** a página-mãe segue congelada até 09/08/2026 por DEC-2026-08-03-001. O único P0 aberto continua sendo a Masterclass sem URL.

**Continuidade:** `COPY-GOLDEN-TEMPLE-V3.md`.

## 10/08/2026 — Capturas do grupo e áudio: não é a data que mudou, é o modelo

**Executor:** Claude/Continuum, sob solicitação de Victor.

**Escopo:** 5 capturas do grupo "Prana - Páginas de Vendas" (janelas de 06/08 e 10/08/2026) e a transcrição do áudio de 15h54 convertidas em registro de 4 camadas, com propagação para estado, decisões e plano de execução.

**O que mudou de fato:**

- **Nova data: 19 — leitura 19/08/2026, quarta-feira.** Victor escreveu "vi que confirmou a data da masterclass para o dia 19" e ela respondeu no mesmo eixo sem contestar. Mês, ano e horário seguem `A CONFIRMAR` por escrito. A causa do adiamento foi declarada por ela: ciclo menstrual.
- **Existe pelo menos 1 inscrita paga** — "uma comprou em cima da hora na sexta de noite" (07/08/2026). **Não há registro de que ela tenha sido avisada da mudança.** É a única exposição da conta que envolve dinheiro de terceiro já recebido (P-MC-14).
- **Quatro movimentos comerciais novos da cliente**, todos abertos: Visão Uterina paga a R$ 300 com abatimento na Mentoria (sugestão da Academia Soph); a pergunta "em vez de fazer aula eu foco em divulgar essas sessoes?"; Curso sem checkout, por conversa no WhatsApp; página-mãe virando hub/escola com música, YouTube, Spotify, DJ sets, círculos e espetáculos.
- **Reunião marcada para 11/08/2026, 15h**, com janela útil de ~1h30 (ela tem compromisso às 16h35).

**Achado que ninguém tinha apontado:** **o Lionsgate é 08/08 e terá passado no dia 19.** O carrossel de 11 cards publicado em 02/08 e o card de oferta prometem "ritual especial de Lionsgate" e "atravessar o Lionsgate em plena potência". Com o evento reposicionado, a promessa central perde o referente. Isso responde diretamente à dúvida que ela levantou duas vezes — "algo ainda nao pegou mesmo…" e "o que eu questiono é se eu puxei na linha certa de narrativa". Duas saídas registradas: reancorar nos eclipses de agosto, que ela já prometeu no card e que seguem à frente da data, ou reposicionar como colheita do que o portal abriu.

**Segundo achado, operacional:** 19/08 é **quarta-feira**; a página anuncia "Sábado, 8 de agosto". Não é troca de número — muda o dia da semana e o perfil de presença. Contagem por script: **15 pontos de data** (7× "8/8", 5× "8 de agosto", 3× "sábado") e 5 de horário.

**Correção de entendimento nosso:** a Visão Uterina **não é oferta paralela concorrente** (como P-XX-01 registrava). É o nome que ela deu à sessão de pesquisa/ICP que já fazia de graça antes de vender. O risco real não é canibalização — é a Mentoria passar a depender de 1 hora dela por prospect, que não escala e não sobrevive a uma semana lunar.

**Erro nosso registrado — reincidência:** ela fez pergunta estratégica direta em **06/08 às 09h22** e pediu a call às **09h24**. A call foi proposta em **10/08 às 17h24, por Nakielly — quatro dias depois.** No intervalo ela adiou o lançamento e adotou a sugestão estratégica da Academia Soph. É o mesmo padrão de 31/07 (link da InfinitePay parado 3 dias), agora com consequência visível. Instituída DEC-2026-08-10-003: pergunta estratégica da cliente é P0 de 24h com recomendação fechada.

**Criado:** `REGISTRO-INTERACAO-2026-08-10.md` (26 fatos, 4 camadas, mensagens literais, 7 achados de leitura) · `PLANO-ALTERACOES-2026-08-10.md` (alterações por página com contagem de ocorrências + pauta da reunião em 7 blocos) · `assets-divulgacao/transcricoes/PTT-2026-08-10-1554-prana-templo-dourado-escola.txt`.

**Atualizado:** `STATUS.md` §§0, 1, 2, 4, 5, 6, 7 · `DECISOES.md` com DEC-2026-08-10-001 a 004, DEC-2026-07-24-001 marcada 🟡 EM REVISÃO, e cinco propostas da cliente registradas como não vigentes.

**Não alterado:** nenhuma página, nenhum bundle, nenhum arquivo de copy. **Nenhuma data foi corrigida no HTML** — a correção só é autorizada após confirmação escrita na reunião de 11/08.

**Não realizado:** deploy, checkout, domínio, Pixel, mensagem externa, campanha.

**Pendência de arquivamento:** as 5 capturas desta janela foram lidas em sessão e não estão salvas no repositório. Enquanto não estiverem, a Camada 4 do registro é a única cópia. Destino: `assets-divulgacao/capturas-whatsapp-2026-08-10/`.

**Próximo passo:** perguntar sobre a inscrita de 07/08 antes da reunião; conduzir a reunião de 11/08 às 15h pela pauta de 7 blocos, sem sair sem preço da Mentoria.

**Rollback:** os dois arquivos criados são registro e plano; excluí-los reverte esta entrada. As edições em `STATUS.md` e `DECISOES.md` são aditivas e rastreáveis por seção datada.

## 10/08/2026 — Correção de fato: 2 páginas no ar e capacidade fora da equação

**Executor:** Claude/Continuum, sob ordem humana direta de Victor, na mesma sessão.

**Correção recebida:** o estado de publicação registrado desde 04/08/2026 estava desatualizado. **Masterclass e Mentoria estão publicadas.** Curso e página-mãe, não. **Todas as páginas estão criadas e o que resta são modificações simples, rápidas de fazer e de subir em produção.**

**O que a correção faz com o diagnóstico: sustenta e agrava.** Retirada a capacidade da equação — construção 4/4, publicação 2/4, deploy rápido —, **100% do que separa esta conta do dinheiro passa a ser decisão comercial da cliente.** Não há mais nenhum outro candidato a gargalo, e a frente deixa de disputar a janela da mudança de casa (12–15/08).

**Dois problemas novos que só existem porque as páginas estão no ar:**

- **A Masterclass está publicada anunciando "Sábado, 8 de agosto, às 9h30", com o checkout PagTrust ativo.** O evento é 19/08. Enquanto não for corrigida, é possível comprar hoje acreditando numa data que não existe — e a divulgação dela aponta para essa página. Deixou de ser ajuste pré-publicação e virou **correção em produção (P-MC-15, P0 de hoje)**. Registrado que o horário aberto (P-MC-08) **não adia a correção**: "quarta, 19 de agosto" com o horário atual já é mais verdadeiro que "sábado, 8 de agosto".
- **A Mentoria está publicada e fail-closed.** Verificado por leitura do `script.js`: `offerIsReady = false` com os 9 campos de `OFFER_CONFIG` em `null`. A página existe, recebe visita e **não converte por construção**. Não é bug — é o gate funcionando, esperando um preço que não chega há 14 dias. Vira o argumento mais concreto da reunião: *"a sua página de mentoria está no ar e funciona; falta um número para ela receber."*

**Pendências mexidas:** **P-MC-06 FECHADA** (destino público da Masterclass existe). **P-PM-06 REDUZIDA** (dois dos três destinos da página-mãe já estão no ar). **Abertas: P-MC-15** (data errada em produção) e **P-PU-01** (as URLs públicas não estão escritas em nenhum arquivo do repo — sem elas não se testa nem se aponta a página-mãe sem perguntar a alguém, o que contraria o §11 do kernel da Governança).

**Fila rebaseada em três blocos:** hoje, em produção e sem depender de ninguém (data, extração para configuração, registrar URLs) · amanhã, a reunião como alavanca inteira · depois, itens que dependem de insumo e não de tempo (9 campos da Mentoria, 1 campo do Curso, copy). **Nada na fila é projeto.**

**Risco invertido registrado:** com a execução fácil, a frente **parece** resolvida. Não está — preço, link e narrativa continuam abertos, e nenhum se resolve com hora nossa.

**Método aplicado:** a 1ª redação do registro e do plano **não foi reescrita**. A correção entrou à vista, em bloco datado no topo de cada arquivo, com dois achados novos (L-08, L-09) e um terceiro sobre a própria capacidade (L-10). Erro corrigido vira régua; erro apagado vira erro repetido (`../../CLAUDE.md` §11.2).

**Não alterado:** nenhuma página, nenhum bundle, nenhum arquivo de copy. **A correção da data ainda não foi executada** — é a próxima ação, e é ordem humana pendente.

**Próximo passo:** corrigir a data da Masterclass em produção hoje, registrar as duas URLs no repo, e chegar na reunião de amanhã com a página já certa.

## 12/08/2026 — Destilação da call de 11/08: o produto entrou no repo

**Executor:** Claude/Continuum, sob solicitação de Victor.

**Escopo:** transcript integral da call de 11/08/2026 (WEBVTT, 4.001 linhas, 2h15, 376 turnos, ~20.450 palavras) lido na íntegra, limpo por script e destilado em 107 pontos classificados por eixo — fato comercial, produto, funil, ICP, voz, visual, arquitetura, método, compromisso, risco.

**O que a call destravou:** **preço da Mentoria em R$ 3.369 pelo ciclo de 3 meses**, aberto desde 27/07 — com a assinatura mensal de R$ 963 considerada e **descartada com razão registrada** (canibalizava o ciclo em R$ 480). Modelo pedagógico decidido: biblioteca gravada dos 8 portais + 2 encontros síncronos por mês, sem cobrança de ritmo. Abertura dos encontros em 26–27/08. Plataforma: InfinitePay para pagamento, PagTrust para entrega. **E ela mesma autorizou o checkout do Curso**, superando a proposta de vender por WhatsApp de 10/08 — declarando que o Curso não é via de caixa, e sim porta de entrada que termina chamando para a Visão Uterina.

**O que a call revelou, e não estava em lugar nenhum do repo:** a estrutura interna do produto principal. Os **8 Portais do Ventre** nomeados — Donzela, Rainha, Anciã, Terra, Fogo, Ar, Água, Éter —, cada um correspondendo a uma parte do corpo, com arquétipo em luz e sombra, camada somática/psicológica/neurocientífica e meditações de integração. A metáfora-mãe: *"o nosso corpo é uma biblioteca e cada portal vai abrir uma chave, e essa chave vai contar e revelar uma história"* — com dupla face, feridas e dons. Também entrou o motivo documentado do fracasso da turma de 3 anos atrás (15 mulheres, 1 a 3 nas aulas) e o obstáculo real das alunas: privacidade para fazer som. **Sem esta call, qualquer copy da Mentoria seria escrita por fora do produto.**

**Maior captura de voz da conta até hoje:** o bloco de abertura que ela escreveu (*"Aqui o corpo é templo. O ventre é altar. A voz é portal…"*), a regra do Tantra (não nomear na página, nomear nos conteúdos), a palavra que fica fora da copy e dentro do conteúdo ("gostosa"), e o reposicionamento inteiro numa frase dela: sair de *"a Prana é uma mulher que tem muito tesão"* para *"Prana, você construiu um império através desse tesão bem direcionado, e você está me ajudando a ter isso na minha vida"*.

**⚠️ A lacuna crítica:** **em 2h15 a Masterclass do dia 19 não foi citada uma única vez, por nenhum dos dois.** Ela disse *"não vingou ali a aula"* e o plano dela para o fim de agosto é abrir os encontros da Mentoria. **A página segue no ar anunciando "Sábado, 8 de agosto" com checkout ativo e uma pessoa que já pagou.** P-MC-16 aberta como P0 absoluto: antes de corrigir a data, saber se o evento existe. Corrigir a data de um evento que não existe é pior que não corrigir.

**⚠️ A decisão comercial que o documento força:** ~50 dos 135 minutos foram consultoria estratégica — onboarding orquestrado em 6 etapas com os mecanismos cognitivos, cultura→estratégia→tático→operacional, transcrição como inteligência de negócio, reenquadre de dor. **E o escopo ampliou dentro da própria call.** Os dois lados nomearam a mudança — ela disse *"é mais complexo, né, querida? A viagem um pouco mais doida do que eu tava imaginando"* — e ninguém falou de escopo, prazo ou valor novo. Um pacote de R$ 1.297 está absorvendo hub, arquitetura de marca, desenho de funil e consultoria de retenção. **Âncora que a própria call entregou: um ciclo da mentoria dela paga 2,6× o nosso pacote inteiro.**

**Regra de conduta confirmada e registrada:** ela é Geradora com autoridade emocional e decide por ciclo, não por prazo. **Proposta para ela não se fecha no calor da conversa** — apresenta-se, deixa-se descansar um ciclo curto, volta-se para fechar.

**Criado:** `DESTILACAO-CALL-2026-08-11.md` (107 pontos, IDs C-01 a C-107, indexado por destino de uso) · `contexto/TRANSCRIPT-CALL-PRANA-11-08-2026-LIMPO.md`.

**Atualizado:** `STATUS.md` §0-zero e §4 · `DECISOES.md` com DEC-2026-08-11-001 a 003.

**Não alterado:** nenhuma página, nenhum bundle, nenhum arquivo de copy. `voz-prana.skill.md` e `CONTEXTO.md` **ainda não receberam** o material das §§2, 3 e 5 da destilação — é a próxima propagação devida.

**Compromisso nosso em aberto:** **enviar a destilação desta call para ela** — assumido explicitamente em 02:23:28 e aceito por ela.

**Próximo passo:** perguntar se a Masterclass do dia 19 existe (P-MC-16); cobrar o link do checkout do Curso; montar a proposta de ampliação com as 7 âncoras enquanto a janela está aberta.

## 20/08/2026 — Os insumos chegaram, o ICP fechou, e a Masterclass piorou

**Executor:** Claude/Continuum, sob solicitação de Victor.

**Escopo:** janela de 12/08 a 20/08 no grupo — capturas e três áudios transcritos — analisada para triagem de execução. Saída em `PLANO-ITERACAO-2026-08-20.md` (IDs `W-01` a `W-13`, triagem verde/amarelo/vermelho).

**Chegou quase tudo que travava a iteração:** as **três logos** (THE GOLDEN TEMPLE, INICIAÇÃO SACROSSEXUAL, MÉTODO S.E.R), firmadas por ela em 13/08 — *"Ja esta firmado a logo. Amei, é para assumir ela com tudo"*; os **três canais** (Spotify, YouTube `@iampranaka`, Instagram); e o **primeiro depoimento em vídeo publicado**, com capa própria, em `youtube.com/watch?v=3NbO7HBGbkU`. **As quatro páginas têm zero prova social hoje** — esta é a primeira.

**Fato de produto que não existia no repo:** a mentoria tem nome de jornada — **INICIAÇÃO SACROSSEXUAL** —, presente na logo e no título do vídeo público. **Zero ocorrências nas páginas.**

**⭐ O ICP fechou.** Em 11/08 ela dizia *"estou tentando entender o que tem de ponto em comum entre elas"* (C-52). Nos áudios de 19/08 ela achou: **não é sexualidade nem espiritualidade — é vocação não exercida.** *"todas as mulheres que vêm pra mim têm um chamado de colocarem, de servirem com suas terapias… às vezes não dependem disso financeiramente, mas têm um chamado de colocar no mundo"*. E nomeou: **"o chamado da rosa dourada, o chamado da autenticidade"** — que é literalmente o que a logo da mentoria mostra, rosas em vinho ao lado da ankh alada. **A marca já dizia o que o público é, antes de ela conseguir nomear.** Registrado em DEC-2026-08-19-002.

Junto vieram **os dois portais de entrada** ("da tensão ao tesão" e "as que já sentem e querem fazer magia com isso" — duas portas para a mesma jornada, não dois públicos disputando a página), **os dois registros de linguagem** (sacerdotal alcança as místicas; psicanalítico alcança líderes e terapeutas), e **o problema caro** que ela pedia em 11/08 (C-56): **casais** — *"custa muito caro se separar, e as pessoas muitas vezes não querem. Gosta da pessoa, mas não tá conseguindo se entregar"* —, que é exatamente o caso da primeira mentorada.

**Ato de conversão da Mentoria decidido pelos dois lados (DEC-2026-08-19-001).** Ela pediu trocar o checkout por link de formulário da Visão Uterina ou WhatsApp, e Victor autorizou no mesmo dia. **A razão dela muda a natureza da decisão:** *"é bom eu farejar o campo antes da pessoa entrar, esses mistérios não podem ser compartilhados com quem é curioso"* — **não é fricção, é qualificação**, e é coerente com um produto iniciático de R$ 3.369. DEC-2026-07-24-001 passa a SUPERADA. A fronteira ficou escrita: **vale só para a Mentoria; o Curso mantém checkout automático**, porque R$ 97 é impulso e conversa antes do pagamento mata impulso.

**P-MC-16 fechada: o evento aconteceu.** Portal das Felinas rodou em **19/08**, híbrido — 5 presenciais e 2 online.

**🔴 E é justamente isso que agrava P-MC-15.** A página segue no ar anunciando **"Sábado, 8 de agosto, às 9h30" com checkout ativo**. Antes era data errada de evento futuro; **agora é venda de ingresso para evento que já passou.** Três saídas — despublicar, virar captura da próxima edição, ou redirecionar para a Mentoria — e a decisão é de hoje.

**Sobre "da tensão ao tesão":** slogan veio de mastermind em 14/08 e ela adotou. O framework de copy que veio junto **ela mesma reprovou** — *"acho que ainda não tá bom"*, feito com a IA dela. **O eixo TENSÃO → TRAVESSIA → TESÃO entra como espinha; o texto não entra literal.**

**Executável hoje, sem depender de ninguém:** links de Instagram, Spotify e YouTube no `config.js`; embed do depoimento; nome da jornada; dobra dos símbolos com o texto literal dela sobre najas e Ísis; ICP na skill de voz e no `CONTEXTO.md`.

**Um ganho lateral:** com as logos em mãos, **a cor exata deixa de ser pendência dela** — a paleta rubi/vinho pode ser amostrada dos próprios arquivos.

**Falta pedir, e cabe em uma mensagem só:** o link do formulário/WhatsApp da Visão Uterina (P-ME-15), o link de pagamento do Curso (P-CR-05), e se a sessão é paga (W-08). **Três links, uma pergunta.**

**Criado:** `PLANO-ITERACAO-2026-08-20.md` · três transcrições em `assets-divulgacao/transcricoes/`.
**Atualizado:** `STATUS.md` §0-hoje e §4 · `DECISOES.md` com DEC-2026-08-19-001, DEC-2026-08-19-002 e DEC-2026-08-12-001; DEC-2026-07-24-001 marcada SUPERADA.

**Não alterado:** nenhuma página, nenhum bundle, nenhum arquivo de copy. `voz-prana.skill.md` e `CONTEXTO.md` seguem sem o ICP novo — é a próxima propagação devida.

## 02/09/2026 — Call de 1h59 destilada: a Visão Uterina virou produto, e a página órfã virou solução

**Executor:** Claude/Continuum, sob solicitação de Victor.

**Escopo:** transcript da call de 02/09/2026 (322 turnos, 19.244 palavras) lido na íntegra, limpo por script e destilado nos **13 eixos** do método — incluindo, pela primeira vez nesta conta, o **eixo 13 (nossa língua)**. Saída em `DESTILACAO-CALL-2026-09-02.md`, IDs `C-01`–`C-34` e `L-01`–`L-09`.

**O que destravou.** **Preço da Visão Uterina: alvo R$ 333** — e a razão que ela deu é melhor que o número: *"se a pessoa não tem trezentos e trinta e três pra si, como é que ela vai ter trezentos e sessenta e nove?"*. **A sessão é o filtro de capacidade para a mentoria**, o que torna baratear a sessão um erro estrutural e não comercial. Ela também reconheceu que os R$ 222 praticados foram recuo: *"foi meio que eu diminuí um pouco o meu tamanho, porque eu tava com medo"*.

**A decisão de arquitetura da call.** A página órfã da Masterclass **não será corrigida — será convertida** na página de venda da Visão Uterina, com preço visível e checkout. A Mentoria segue sem preço e com agendamento. **P-MC-15, aberta desde 10/08, resolve por substituição de função.** Proposto por nós, aceito por ela na hora.

**O inimigo ganhou nome:** "domesticação feminina" substitui "chip patriarcal", por decisão dela — *"agora eu quero mudar a comunicação pra tipo: o chip que te domesticou"*. E **"empoderamento feminino" foi descartado com razão registrada**: *"as pessoas já associam imediatamente com aquele feminismo distorcido"*. Junto veio o mecanismo com verbo em cada etapa: **ventre percebe → voz expressa → corpo existe concretamente**.

**⭐ A correção do ICP.** `DEC-2026-08-19-002` estava certa e incompleta. Ela nomeou a frustração real: *"o que mais me frustrou nas tantas calls que eu fiz (…) eu estou ainda atraindo (…) mulheres terapeutas, **mas que ainda não podem investir numa jornada acima de três mil**"* · *"é um campo que eu já fui. Essa pessoa que não podia"*. **O ICP é chamado terapêutico E renda própria já estabelecida — os dois filtros juntos**, com caso nomeado (a Carol). Copy que fala só ao chamado atrai o campo que ela está deixando.

**⭐ A origem do nome da marca, capturada pela primeira vez.** O Templo Dourado **nasceu da saída de uma relação de captura** — seis meses, *"parecia que eu tava numa jaula"*, e *"o nome Templo Dourado foi no final dessa relação. Eu comecei a voltar pra mim"*. Nunca esteve escrito no repositório. É a dobra "por que isto existe", e é prova viva da promessa.

**O veredito dela sobre o material da outra consultoria**, dito sem ninguém perguntar: *"achei que captou a essência, mas ficou algo mais abstrato (…) **não dava de comprar um negócio lendo isso aqui** (…) não me eletrifica"*. O plano da Academia Soph entrega conceito e não entrega conversão.

**🔴 O que não foi dito em 1h59:** o **Curso não foi citado uma única vez** — link pendente desde 11/08, página construída e não publicada. **A página-mãe também não**, apesar de duas semanas de referência e briefing. E **escopo, prazo e valor pela terceira call consecutiva**.

**🟢 Uma oportunidade que ninguém ligou na call:** ela **colou grau em Psicologia em 03/09**. O gate de "psicóloga" (`DEC-2026-08-03-003`) trava o termo desde 03/08. **A formatura é o evento que destrava** — falta confirmar o CRP.

**Eixo 13 — nossa fala, medida.** 4.974 palavras nossas contra 13.143 dela: 26%/68%, proporção certa para extração e **deliberada** (`L-08`). Achados: `questão`/`questões` **41× = 8,2/1.000** (a nominalização-curinga campeã) · **elogio avulso 30× = 6,0/1.000**, um a cada 166 palavras · fecho vago de lista 19× · `digamos assim` caiu de 26× para 9×. Dois erros nomeados: apresentamos "promessa SMART" e **não lembramos o R**, buscando no Google na frente dela (`L-04`), e repetimos pela terceira vez a metáfora do celular (`L-05`). Dois acertos que viraram régua: **cena concreta no lugar de definição** — o exemplo do banho, que ela reusou duas vezes — e **licença explícita de extensão** no início, que produziu 68% da call e fez a origem do nome da marca sair 34 minutos depois.

**Propagado para `10-skills/voz-victor.skill.md`:** corpus da ficha vai de 6.783 para **11.757 palavras** com a terceira call · nova **§4.7 modo extração** · nova **§5-ter** com teto de elogio por formato, a regra de não introduzir framework sem domínio completo, e o **fecho de escopo obrigatório em toda call de cliente ativo**.

**Criado:** `DESTILACAO-CALL-2026-09-02.md` · `contexto/TRANSCRIPT-CALL-PRANA-02-09-2026-LIMPO.md`.
**Atualizado:** `STATUS.md` §0-set · `DECISOES.md` com DEC-2026-09-02-001 a 005 · `10-skills/voz-victor.skill.md`.

**Não alterado:** nenhuma página, nenhum bundle, nenhum arquivo de copy. `voz-prana.skill.md` e `CONTEXTO.md` seguem sem o material desta call — próxima propagação devida.

**Próximo passo:** converter a página da Masterclass em página da Visão Uterina; construir o formulário próprio com roteamento condicional; cobrar o link de pagamento da sessão; e, **na próxima mensagem, dizer uma frase sobre escopo.**

## 05/09/2026 — Página Visão Uterina construída para revisão local

**Autorização:** usuário pediu a página com base na última call e CTA para WhatsApp; confirmou +55 48 98424-8922 na conversa.

**Executado:** novo bundle `04 - web design/visao-uterina/` com HTML, CSS, JS progressivo, fontes locais, favicon e imagem botânica rubi gerada com imagegen (original PNG preservado; WebP de 60.124 bytes utilizado). Narrativa: reconhecimento cotidiano → sessão e escuta do corpo → afinidade → Prana → FAQ → conversa. Cinco links nativos de WhatsApp com mensagem contextual.

**Fontes e limites:** call original de 02/09/2026, voz-prana.skill.md e CONTEXTO.md. Sessão paga, sem anunciar valor alvo como definitivo. Sem duração, desconto, garantia ou credencial clínica inventados. A escolha de WhatsApp segue instrução atual do usuário e está em DEC-2026-09-05-001. Versões anteriores preservadas; nenhuma publicação, mensagem, checkout ou formulário externo.

**Validação:** estrutura HTML, IDs, âncoras, cinco CTAs e recursos HTTP local; sintaxe JS; browser desktop 1440×900 e celular 390×844/320×720, FAQ expandido e CTA na primeira tela. Correções de espaçamento no FAQ e escala do título no menor celular. Sem JS: funcionamento essencial verificado por inspeção de HTML/CSS; sem simulação do navegador com JavaScript desativado.

**Arquivos alterados:** nova pasta da página e HANDOFF; atualizações aditivas em STATUS.md e DECISOES.md locais, este diário e nota pontual no STATUS.md da Governança.

**Pendente:** revisão da versão local, definição comercial final e autorização específica para substituir a Masterclass na publicação. A página antiga no ar não foi alterada.

## 08/09/2026 — Lista simples de materiais para a Prana

**Pedido:** Victor forneceu captura do grupo e solicitou atuação com CLAUDE.md para extrair do repositório uma lista simples para Prana.

**Executado:** criado `LISTA-MATERIAIS-PRANA-2026-09-08.md`, com mensagem pronta de sete itens, evidência por item, complementos para uma segunda coleta e registro da conversa apresentada. Atualização aditiva em `STATUS.md` local. **A mensagem não foi enviada.**

**Validação:** cruzamento das decisões recentes de 02/09 e 05/09, inventário de ativos, handoffs da Visão Uterina/Curso e leitura do DOCX `Mentoria Templo Dourado/MENTORIA TEMPLO DOURADO.docx`. O DOCX existente usa linguagem anterior e não foi identificado como o plano Nala/Kátia apresentado na última call. Retiradas cobranças repetidas de logos, canais, WhatsApp, primeiro depoimento e código da cor vinho/rubi. R$ 333 e R$ 97 aparecem como confirmações, não como novas decisões. O CTA local de WhatsApp foi preservado; receber perguntas não autoriza integração de formulário/planilha.

**Conversa:** a captura mostra Prana retomando o envio de materiais às 09:22 e solicitando a gravação; Victor promete a lista no mesmo dia, às 12:56. Trechos literais e conduta estão no documento. A captura não exibe data de calendário, apenas "Hoje"; 08/09 é a data de recebimento/integração nesta tarefa.

**Pendência própria:** `R-PR-2026-09-08-01`, Victor localiza a gravação e providencia compartilhamento com acesso conferido. O repositório consultado contém transcrições; vídeo/link de gravação não foi localizado. Isso não estabelece inexistência em conta externa.

**Arquivos alterados nesta tarefa:** novo documento da lista, `STATUS.md` local e este diário. Validação de conteúdo e leitura dos registros; sem teste de software por não haver mudança de código. Nenhuma página, fonte bruta, decisão comercial, preço ou histórico anterior foi reescrito. Nenhum envio externo, checkout ou deploy.

**Próximo passo e dono:** Victor envia a mensagem pronta e localiza a gravação; Prana responde por partes. Recebimento e confirmação precedem integração nas páginas e pedido específico de aprovação de publicação.

---

## 19/09/2026 — Quatro páginas saem do modo de espera, e a pasta de imagens dela estava fechada desde julho

**Ordem de Victor, em três mensagens:** *"vamos criar tudo para a Prana com o que já temos. **absolutamente mais nenhuma solicitação para ela**"* · *"a Prana deixou claro que ela é muito visual e a página estava com poucas imagens e elementos. cada dobra precisa conter elementos e imagens representativas"* · *"o UI/UX atual gerado pelo Codex está com letras finas. não gostei. as letras podem ser mais preenchidas"*.

### O que a ordem revelou antes de ser executada

Ao inventariar o que travava cada página, o retrato foi este: **as quatro estavam prontas ou no ar e nenhuma convertia**, cada uma parada num campo diferente. Mentoria há 31 dias, Curso há 46, Visão Uterina há 17. **Nenhuma delas estava esperando produção.** Estavam esperando decisão — e sob a REGRA Nº 0 a maior parte dessas decisões era nossa, não dela.

A Mentoria é o caso mais claro e o mais constrangedor: em 19/08 o ato de conversão mudou de **checkout** para **agendamento** (`DEC-2026-08-19-001`), e a lista de campos obrigatórios do `OFFER_CONFIG` **nunca foi refeita**. Ela continuou exigindo preço e política de reembolso — corretos para uma compra, sem sentido para uma conversa. A página ficou viva e incapaz de converter por um mês, por causa de uma lista que ninguém releu depois de mudar o modelo.

### Os dois achados de arquivo, e eles doem mais que os bugs

**1 · A pasta `O TEMPLO DOURADO/` tem 73 imagens feitas por ela. Os bundles usavam três.**
Rosa rubi em macro com orvalho, rosas douradas, o selo circular com najas e ankh alada, Sri Yantra em cobre, ouroboros, náutilo, templo egípcio, mulheres em roda ao redor do fogo, panteras, o arco rosa com ankh. Tudo no repositório desde julho.

**O erro é de interpretação, e está registrado:** tratamos *"clean"* como **ausência**. Ela disse *"estou no exercício de ficar cada vez mais clean"* e *"**eu sinto falta de geometrias**, né? Sabe, pra mim tem que ser muito visual o negócio"* `[11/08 00:24:34]` — **na mesma conversa.** Ouvimos a primeira metade e desenhamos páginas de texto. Para ela, clean é **layout arejado com ornamento denso nos pontos certos**, e ela nomeou a própria estética em agosto: *"Nessa parte bem, **estética venusiana**"* `[02:22:53]`.

**2 · As sete passagens do Curso tinham nome, e a página dizia "Passagem" sete vezes.**
Os sete cards estão em `DESPERTAR DO PRAZER SAGRADO/`, nomeados por ela: *Permissão de habitar o corpo · Corpo templo, prazer sem culpa · Permissão de sentir as águas internas · A dança de Shiva-Shakti · A voz do prazer · Espelhos do amor · Consagração da rosa*. **A página de vendas de um curso de sete módulos foi ao ar sem o nome de nenhum deles.** Não era lacuna de informação: era pasta não aberta.

### A letra fina — o diagnóstico com número

Victor apontou e a auditoria confirmou com medida: **Bodoni Moda em peso 400** na Mentoria e na Visão Uterina — didone, haste de fio de cabelo, num título de 140px — e **todo o display da Mentoria em peso 500**, inclusive o H1 de 8rem. No Curso, `.section-marker` em **300** com 6rem de corpo, `.price` em **400**, `blockquote` em **460**.

🔴 **O que fecha o argumento não é gosto, é evidência: em nenhuma peça que ela fez sozinha existe tipografia de contraste alto.** Nem nos quatro cards de depoimento, nem nos dez cards do Despertar, nem na capa do Golden Temple — todas em sans grossa arredondada ou serifa decorativa de traço cheio. **Bodoni em 400 era o oposto exato do que ela faz quando ninguém opina.**

Corrigido: Fraunces com `'SOFT' 60, 'WONK' 1` · H1 650 · H2 640 · H3 620 · número e preço 700 · `<em>` de título 560. Bodoni removida do CSS e do preload das duas páginas.

### ⭐ O achado do banco de léxico

`lexico-icp/BANCO.md` foi aberto hoje — **primeira fonte grau `D` desta conta, depois de 2,5 meses escrevendo copy a partir da fala de quem assina.** Quatro depoimentos, quatro mulheres, nome e foto.

A Prana notou, em 17/09: *"interessante ver como praticamente todas trazem a palavra CONFIANÇA"* — **3 de 4**. **Ninguém notou EXPRESSÃO, que aparece em 4 de 4.** Unanimidade é sinal mais forte que maioria: a tríade ventre → voz → corpo está certa, mas **é a VOZ que as clientes relatam como chegada**. Ventre e corpo são meio.

E há distância de registro entre ela e o público: **a copy da Prana orbita prazer e tesão; as clientes relatam expressão, confiança e poder.** Não é contradição — é ordem. Prazer é o caminho; expressão é o que elas contam depois. A promessa de topo passa a usar a linguagem de chegada delas (`DEC-2026-09-19-006`).

Fechamento simétrico: a cliente Sami Harisha, sem nenhum estímulo, escreveu *"foi como se eu estivesse **desabrochando como uma rosa**, revelando potenciais, beleza e cura em cada pétala"* — a mesma imagem da logo da mentoria e do nome que a Prana deu ao ICP, *"o chamado da rosa dourada"*. **Marca, titular e cliente convergindo na mesma imagem, de forma independente.** É a prova de congruência mais forte que esta conta produziu.

### O que foi entregue

Biblioteca `04 - web design/_biblioteca/` com 23 peças em WebP (3,4 MB), copiada para cada bundle porque cada um sobe sozinho pelo gerenciador de arquivos. **Imagens por página: de 1–2 para 10 (Visão Uterina), 12 (Mentoria) e 14 (Curso).** Dobra de prova nova na Visão Uterina com os quatro depoimentos em HTML real — não imagem de texto — atribuídos corretamente aos **Portais do Ventre**, e não à sessão que nenhuma delas fez.

**Verificação por script nos três bundles:** zero assets quebrados, zero pesos de display abaixo de 600, `offerIsReady = true` na Mentoria com preço e política nulos por decisão.

**Prévia publicada** da Visão Uterina com CSS, fontes e imagens embutidos, para revisão visual antes do upload.

### O que segue aberto

Link de pagamento do Curso (lacuna de fato real — o estágio 1 já vende sem ele) · **política de cancelamento das três ofertas, que não se inventa** · **multilíngue PT/EN/ES, compromisso assumido por áudio em 16/09 e ausente de todo artefato** · headlines da Mentoria e do Curso sob `DEC-2026-09-19-006` · upload dos três bundles.

**Arquivos alterados:** os três bundles (`index.html`, `styles.css`, `script.js`/`main.js`), `_biblioteca/` e `assets/biblioteca/` novos, `DECISOES.md` (+7 decisões), `STATUS.md` local, `DIRECAO-VISUAL-PRANA.md`, `lexico-icp/BANCO.md`, este diário. **Nenhum envio externo, nenhum deploy, nenhuma pergunta à cliente.**

**Próximo passo e dono:** Victor revisa a prévia, aprova a direção visual e sobe os três bundles. **A `LISTA-MATERIAIS-PRANA-2026-09-08.md` fica cancelada.**
