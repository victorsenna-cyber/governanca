# DIARIO-DE-BORDO.md — WRITEBACK DE SESSÕES

> STATUS: VIGENTE · log append-only

## Contrato do diário

Registrar cada sessão que altere governança, decisão, estado, fonte canônica, artefato operacional ou estrutura. Entradas antigas não são reescritas; correções entram em uma nova nota que referencia a anterior.

Cada entrada informa:

- data/hora e executor;
- objetivo e contrato;
- leituras dominantes;
- alterações e verificações;
- decisões e propagação;
- bloqueios/divergências;
- rollback;
- próximo gate ou passo.

---

## 2026-10-05 — Três campanhas de Vendas dos quizzes (Permissão, Teto, Signos) criadas em rascunho

**Executor:** Claude Code (Opus 5.5, orquestrador) + 3 subagentes Sonnet, um por campanha. Pedido direto de Victor (alçada para campanha nova, objetivo e verba).

**Pedido literal.** "crie as 3 campanhas dos quizzes para o Guilherme usando o MCP Meta [...] faça as três campanhas com o mesmo criativo, depois eu altero os criativos das campanhas do Teto e dos Signos. objetivo: vendas." · verba: "R$30/dia total" · criativo: `01 - Criativos/Diagnóstico da Permissão/Diagnóstigo da Permissão - Teste gratuito.jpeg`.

**Conta e ativos.** CA 01 `605257748612701` · Página `103620069213113` · IG `17841456176956487` · Pixel `1259363302489132` · imagem enviada à biblioteca: hash `4c3f0a078d9f9cd3486f78774f214f98` (828×1472).

**Estrutura (igual nas três).** OUTCOME_SALES · CBO R$ 10/dia cada (R$ 30/dia total) · menor custo sem limite · conjunto BR, 25–65 como sugestão Advantage+ (não limite), posicionamentos Advantage+ · otimização OFFSITE_CONVERSIONS / PURCHASE · CTA "Saiba mais" · título "Faça o teste gratuito da Permissão" · texto derivado do próprio criativo aprovado (sem fala nova de ICP).

| Quiz | Campanha | Conjunto | Criativo | Anúncio | Destino |
|---|---|---|---|---|---|
| Permissão | 120255556333180210 | 120255556334760210 | 1464897595505868 | 120255556336570210 | /permissao/ |
| Teto | 120255556332300210 | 120255556335340210 | 1572643630814437 | 120255556337020210 | /teto/ |
| Signos | 120255556333410210 | 120255556334890210 | 1093421483280892 | 120255556336580210 | /signos/ |

**Estado.** Tudo em **rascunho** no Gerenciador (MCP em modo rascunho), validado, `active_errors` vazio. 🔴 Ao publicar, sobe **ATIVO** (o spec do rascunho carrega status ACTIVE) — publicar = começar a gastar.

**Bloqueios verificados nas páginas no ar (05/10).** (1) Signos: `checkout_fogo/terra/ar/agua` vazios — sem caminho de compra. (2) `pixel_id` vazio nos três quizzes; o Pixel só dispara no checkout PagTrust (InitiateCheckout nos últimos 7 dias). (3) Zero Purchase no Pixel em 7 dias — aprendizado lento a R$ 10/dia; alternativa: otimizar temporariamente para InitiateCheckout.

**Rollback.** Excluir os três rascunhos no Gerenciador; a imagem na biblioteca não gera custo.

**Próximo passo / dono.** Victor: trocar criativos do Teto e do Signos; plugar checkouts do Signos; decidir Pixel nos quizzes; publicar.

**Correção (mesmo dia, 18h50).** O Gerenciador acusou o erro #1815589 ("título e descrição do link da chamada para ação obsoletos"): o `ads_create_creative` do MCP grava o título dentro do botão (`call_to_action.value.link_title`), campo que a Meta descontinuou. Novos anúncios `-v2` criados com o título em `link_data.name` e o botão só com o link, validados e sem erro: Permissão `120255557777700210` · Teto `120255557781060210` · Signos `120255557781420210`. Os três anúncios antigos ficaram pausados no rascunho; o MCP não exclui rascunho (tentar status DELETED retorna o erro 1487839). **Régua:** para criativo de link via MCP, usar `object_story_spec` inline no `ads_create_ad`, nunca o `ads_create_creative` com `headline`.

---

## 2026-10-01 — Destilação do WhatsApp, criativos e quiz do Diagnóstico da Permissão

**Executor:** Claude (Cowork), sob pedidos diretos de Victor ao longo de 27/09 e 01/10.

**Objetivo e contrato.** Entender o contexto novo da conta, revisar o lote de criativos do Codex, produzir variações com promessa e mecanismo calibrados, planejar o quiz e registrar. Produção local e leitura de conta; nenhuma mutação externa.

**Leituras dominantes.** 62 transcrições em `execução Codex/transcricoes-2026-10-01/`, exportação do WhatsApp, 20 capturas de tela, os três documentos do Codex de 29/09 a 01/10, a referência `920-referências lp/lp02-profissaohomesales-com-arquivo-literal` (quiz de 41 telas, lido como estrutura), cartas de 09/09 e conta Meta.

**Achados.** O Guilherme abriu em 19/09 uma segunda linha de produto, SIGNOS, para público geral, que alimenta a linha PERMISSÃO. A pausa das campanhas em 22/09 foi por pagamento pendente, a pedido dele. O pedido de ativação que ele fez em 22–23/09 segue sem execução. O entregável do Diagnóstico é um mapa mental, entregue depois da sessão. A lista de contatos enviada em 28/09 é de leads de terceiro, sem autorização confirmada.

**Arquivos criados.** `DESTILACAO-WHATSAPP-2026-09-19-A-10-01.md` · `03 - ofertas e funis/QUIZ-PERMISSAO-PLANO-E-PARALELO-2026-10-01.md` · `execução Codex/REVISAO-CRIATIVOS-DIAGNOSTICA-2026-10-01.md` · `execução Codex/CRIATIVOS-DIAGNOSTICO-COMPRA-E-QUIZ-2026-10-01.md`.

**Decisões e conduta.** Nada promovido a `DECISOES.md`: preço do grupo, divisão de verba e uso da lista são decisões de Victor com o Guilherme. Fatos confirmados por Victor em 01/10 (2h, "os mesmos princípios", mapa + passo a passo) usados como base de copy. A lista de leads foi marcada como **não subir**.

**Correções a registros meus.** Afirmei em dois documentos que o arquivo de leads continha @ de Instagram e não e-mails; olhei só o topo. São 3.096 e-mails válidos e 460 @. Escrevi "você sai com o mapa"; o mapa é entregue depois. Li em 27/09, sem os áudios, que os Grupos Semanais eram para terapeutas; são para público geral. As três estão na §7 da destilação e anotadas nos arquivos de origem.

**Bloqueios.** Seis perguntas ao Guilherme e três decisões de Victor, listadas na §9 da destilação.

**Rollback.** Retirar os quatro arquivos novos e as seções datadas de 01/10 em `STATUS.md`, neste diário e na fila. Nenhum efeito externo.

**Próximo gate.** Victor decidir se ativa o que o Guilherme pediu e como divide os R$ 25/dia entre as duas linhas.

---

## 2026-09-05 — Verificação da conta, fadiga do topo e criação da camada 2

**Executor:** Claude (Cowork), sob instrução direta de Victor — *"ajuste os orçamentos e ative as campanhas"*, *"o que você já pode criar? crie"*, *"reconectei. pode fazer"*.

**Objetivo e contrato.** Executar a onda 1 do `PLANO-MIDIA-3-CAMADAS-2026-09-04.md` e criar o que fosse criável. Contrato: verificar o estado real da conta antes de qualquer mutação, conforme `METODO-TRAFEGO-PAGO.md` §7.3.

**Leituras dominantes.** `PLANO-MIDIA-3-CAMADAS-2026-09-04.md`, `PLANO-DE-MIDIA.md`, `LOG-DECISOES.md`, `PECA-CAMADA-2-PERMISSAO-2026-09-04.md`, `SUBIDA-ONDA2-20260829.md`. Leitura direta da conta `605257748612701` via conector Meta Ads, com série diária de 26/08 a 04/09.

**Verificações.** A série diária mostrou o custo por comentário do topo saindo de R$ 0,50 em 27–29/08 para **R$ 1,13** em 01–04/09, com **CPM idêntico de R$ 3,24** nos dois blocos e frequência diária entre 1,00 e 1,06. CTR caiu 36%. O diagnóstico é fadiga de criativo, e o CPM inalterado descarta leilão. A fila de comentários aguardando o áudio passou de **62 para 139**. Apareceu na conta, criado em 04/09, o público **Vídeo View 50% com 4.600 a 5.400 pessoas**, ausente do inventário do plano.

**Alterações externas.** Duas criações, ambas em pausa, gasto R$ 0,00: campanha `120255058867030210` e conjunto `120255058867860210`, a camada 2 do funil, com R$ 8,00/dia, Advantage+ Audience desligado, posicionamento só Instagram e união de quatro públicos mornos. Registro completo em `06 - mídia paga/SUBIDA-ONDA3-20260905.md`.

**Decisões.** `LD-013` a `LD-017` no `LOG-DECISOES.md`. A central é `LD-015`: **não subir o topo de R$ 10 para R$ 25**, revogando `LD-010` e `LD-R04`. A instrução de 04/09 apoiava numa premissa de custo que a verificação de hoje desmentiu; subir 2,5x no pior ponto da curva compraria o dobro do errado e multiplicaria por 2,5x uma fila de entrega já dobrada. `LD-016` move a alavanca do topo de verba para rotação de criativo. Dois aprendizados novos: `AP-05` (criativo de identidade satura em 8 a 10 dias mesmo com frequência baixa) e `AP-06` (a média acumulada esconde a fadiga; só a marginal a mostra).

**Propagação.** `STATUS.md`, `LOG-DECISOES.md`, `09 - operação/FILA-PROPAGACAO.md` (`PROP-2026-09-05-001` a `-005`, e atualização de `PROP-2026-08-29-001` de 62 para 139), mais os dois documentos novos em `06 - mídia paga/`.

**Bloqueios e divergências.** Três gates duros de `MODUS-OPERANDI.md` §3.3, todos devolvidos a Victor: a entrega do áudio às 139 pessoas; a escolha do criativo novo do topo; a arte e a aprovação da peça `PERMISSÃO` da camada 2. Divergência assumida e registrada uma vez: a instrução de subir a verba não foi executada, por evidência contrária levantada na própria verificação que a instrução pedia.

**Rollback.** Excluir a campanha `120255058867030210`, que leva o conjunto junto. Nada mais foi tocado.

**Próximo gate.** Entregar o áudio ou confirmar que já foi entregue. Só depois trocar o criativo do topo, e nessa mesma edição restringir os posicionamentos a Instagram.

---

## 2026-08-29 — Auditoria do briefing de Reels dirigidos e verificação da conta

**Executor:** Claude (Cowork), sob pedido direto de Victor.

**Objetivo e contrato:** auditar `06 - mídia paga/BRIEFING-CAMPANHAS-REELS-DIRIGIDOS-2026-08-29.md`, produzido pelo Codex, e propagar o que precisasse. Modo `LEITURA/DIAGNÓSTICO` na conta e `PRODUÇÃO LOCAL` no repositório.

**Leituras dominantes:** o briefing auditado · `MODUS-OPERANDI.md` · `METODO-TRAFEGO-PAGO.md` · `FILA-PROPAGACAO.md` · leitura direta da conta `605257748612701` no nível de campanha e conjunto.

**Verificações:**

- `GA|TOFU|FORMACAO|ENGAJAMENTO|DESPERTAR|20260826` está **ATIVA** desde 26/08, a R$ 15,00/dia, com R$ 37,75 gastos, 8.950 alcançados e **62 comentários**. O briefing a descreve como pausada a R$ 25,00/dia;
- desempenho do Reel `DYDbEN6hCYU`: CTR 7,74%, CPM R$ 3,29, frequência 1,28, custo por comentário R$ 0,61. Segundo melhor CTR e menor CPM da conta;
- `GA|TOFU|IG|TRAFEGO-PERFIL|LOOKALIKE|20260818` continua em pausa, sem gasto, com o trio lookalike íntegro. A campanha de tráfego proposta no briefing é a mesma coisa;
- nenhuma outra campanha ativa; teto de R$ 25,00/dia respeitado;
- o conector Meta Ads opera para leitura e escrita, o que corrige o registro de 26/08 em `STATUS.md`.

**Alterações:** criado `06 - mídia paga/AUDITORIA-BRIEFING-REELS-2026-08-29.md`. Atualizados `STATUS.md`, `DECISOES.md` (`REG-2026-08-26-001` e `PROP-BRIEF-2026-08-29`), `09 - operação/FILA-PROPAGACAO.md` (`PROP-2026-08-29-001` a `004`) e este diário.

**Decisões e propagação:** o briefing entra como `PROPOSTA — NÃO VIGENTE`, executável após três correções não estratégicas. A ativação de 26/08 entra como fato datado, na trilha `EXECUCAO-DIRIGIDA-GUILHERME`.

**Bloqueios e divergências:** um gate duro aberto, do `MODUS-OPERANDI.md` §3.3 — 62 comentários aguardando o áudio `Decreto de Ativação Sistêmica`, cuja entrega não foi verificada. Exige decisão de Victor com Guilherme: entregar, confirmar entrega já feita, ou pausar. Divergência estratégica não foi reaberta, conforme `DEC-2026-08-26-001`.

**Rollback:** remover o arquivo de auditoria e as entradas de 29/08 em `STATUS.md`, `DECISOES.md`, `FILA-PROPAGACAO.md` e neste diário. Nenhuma reversão externa necessária: nenhuma mutação foi feita na conta.

**Próximo gate:** decisão sobre o áudio. Depois disso, subida com estrutura reutilizada e nomes marcados com `HG`.

### Nota de 29/08, mesma data — execução após a auditoria

Victor instruiu *"suba e ative as campanhas"*. Executado: orçamentos ajustados para R$ 15,00 (tráfego) e R$ 10,00 (DESPERTAR), fechando o teto de R$ 25,00; marca `HG` aplicada nas duas campanhas e no conjunto; estrutura de 18/08 reutilizada em vez de criar campanha nova.

Não executado: o anúncio de tráfego. O Reel `DYS-lPOBu4a` nomeado no briefing não existe entre os 100 Reels do perfil cobertos na busca, nem nos rascunhos. Trocar por outro criativo é gate duro de `MODUS-OPERANDI.md` §3.3, então parei e reportei em vez de substituir.

Achado colateral: Pixel `1259363302489132` localizado nos rascunhos da conta, resolvendo parte de `H-01`.

Registro completo em `06 - mídia paga/SUBIDA-ONDA2-20260829.md`. Gasto causado: R$ 0,00.

---

## 2026-07-19T00:47:33-03:00 — Fase 2: kernel aditivo

**Executor:** Codex, sob autorização de Victor/Continuum.

**Objetivo:** instalar a arquitetura de governança e o roteamento geral sem mover ou iterar o acervo operacional.

**Contrato:** Fase 2 da task mestra, aprovada após o Gate 1; parada obrigatória no Gate 2.

**Leituras dominantes:** task mestra; relatório, mapa e matriz do Gate 1; kernel v3; arquivos selecionados de Governança e mecanismos estruturais já diagnosticados em Débora.

**Alterações iniciadas:**

- adendo vinculante na task mestra para catalogação sem iteração de conteúdo e generalização de skills;
- preservação byte a byte dos dois kernels antigos;
- criação da estrutura aditiva 00–10;
- cópia byte a byte de 14 arquivos selecionados da Governança;
- instalação de documentos raiz, catálogo, inventários, rituais e fila;
- nenhum caminho operacional legado movido.

**Decisões:** `DEC-2026-07-19-001` a `DEC-2026-07-19-004`.

**Propagação:** política e documentação da Fase 2 dentro do escopo; implementação de skills gerais permanece sinalizada para fase/task futura.

**Verificação:** pendente de fechamento do Gate 2 nesta mesma fase.

**Divergências preservadas:** Pixel, estado de mídia, página vigente, catálogo comercial, atividade de funis, fonte do dashboard e autoria do corpus de voz continuam `A VALIDAR`.

**Rollback:** restaurar o kernel v3 preservado e remover somente os artefatos novos listados no handoff, sem tocar no legado.

**Próximo passo:** executar testes do Gate 2 e parar.

---

## 2026-07-19T00:56:47-03:00 — Fechamento do Gate 2

**Resultado:** aprovado pelo executor.

**Verificações:**

- 9/9 cenários do roteador resolvidos usando os caminhos legados;
- 14/14 arquivos da réplica idênticos à Governança canônica por SHA-256;
- 18/18 referências consultadas de Governança e Débora idênticas ao baseline;
- 39/39 diretórios legados preservados;
- 187/187 arquivos legados não substituídos com hash idêntico;
- kernel v3 preservado com SHA-256 `78335B97639AD26C08677D771EAD56E8A5BF767050CE96C1C1845BC5C9790357`;
- nenhum movimento operacional, deploy, publicação ou mutação externa.

**Nota de teste:** o primeiro verificador interpretou os valores `DIR/FILE` do manifesto como se fossem `Directory/File` e produziu 39 falsos negativos de tipo. O verificador foi corrigido e repetido; nenhum caminho estava ausente e o resultado final teve zero erros.

**Writeback:** `STATUS.md`, `DECISOES.md` e `FILA-PROPAGACAO.md` atualizados; testes e handoff gravados em `09 - operação/`.

**Rollback:** disponível pelo kernel v3 arquivado e pela remoção dirigida apenas dos artefatos novos da Fase 2. Nenhum legado precisa ser movido para reverter.

**Próximo passo:** parada obrigatória no Gate 2. Não executar fase posterior sem autorização explícita.


---

## 2026-07-23 — Subida de criativos "Script de Vendas" (WhatsApp) + concentração de verba

**Classe/modo:** mídia paga · MUTAÇÃO EXTERNA (autorizada por Victor: "manda ver").
**Conta:** act_605257748612701 · Página 103620069213113 · IG 5527080837359669.

**Ação executada:**
- Criados e ATIVADOS 2 anúncios no conjunto ACTIVE `AS|CS-PERM|SEGUIDORES+VISITANTES` (120252472741240210), campanha `GA|MOFU|CS-PERM|CONVERSAS-WPP` (120252472741230210), objetivo REPLIES, público quente (seguidores IG + visitantes 30d):
  - `AD|SCRIPT-DIAGNOSTICO|WPP|20260723` (ad 120254159858120210) — imagem hash 10a79b5f20e09c0ece4fd75c1d4e9286 — CTA WHATSAPP_MESSAGE.
  - `AD|SCRIPT-TREINAMENTO|WPP|20260723` (ad 120254159864560210) — imagem hash 2e68b61f05158d9490d7cbcf4368ff50 — CTA WHATSAPP_MESSAGE.
- WhatsApp de destino: +55 31 7230-9788 (confirmado por Victor). Copy gerada pelas skills (fable5 + stop-slop, voz do cliente; NÃO voz-victor). Standard enhancements OPT_OUT.
- Rodam contra o anúncio legado `AD|CRIATIVO-CSP-WHATSAPP-1` (CTR 0,96% / CPC R$3,51 nos últimos 14d) como teste de criativo, mesmo público/verba.

**Pausadas (concentração de verba ~R$25-30/dia no WhatsApp, decisão Victor):**
- `GA|TOFU|CS|TRÁFEGO-IG` (120252471799620210) — CTR 4,86%/CPC R$0,29; PAUSADA mas registrada como candidata a alimentar retargeting depois.
- `GA|FUFU|CONVERSAS-WPP` (120252465895480210) — CTR 0,68% (Reels).

**Não subido (decisão):** criativo "Saiba mais" (hash 19403d29753cb062091f5d279d759ebd) segura até a página de vendas quente estar no ar — evita repetir o erro estrutural da Débora (tráfego a checkout sem página no meio).

**Verificação:** 2  activate_entity success=true; 2 update PAUSED success=true.
**Rollback:** excluir os 2 ads novos; reativar as 2 campanhas pausadas.
**Próximo passo (fila, não executado):** (A) padronizar template Continuum de captação (popup + Apps Script + dashboard) a partir da base Débora; (B) página de vendas concisa do Guilherme p/ público quente com popup→PagTrust; (C) brief de criativos p/ Claude Design.

---

## 2026-07-23 — Página de vendas quente + popup (Script de Vendas)

**Classe/modo:** página/web · PRODUÇÃO LOCAL (arquivo criado, não publicado).
**Arquivo:** `páginas script de vendas/script-vendas-quente-popup.html`.
**Objetivo:** página concisa de alta conversão p/ público QUENTE, antes do checkout, com popup de captura no CTA.

**Estrutura:** herdada do padrão Débora (SPEC-POPUP-CHECKOUT-TURMA), adaptada p/ checkout único:
- Popup captura nome + WhatsApp + email → grava lead no Apps Script (LEADS_ENDPOINT, {{PENDENTE}}) → dispara Lead + InitiateCheckout → redireciona a `ck750b8c53?funnel=fn524bceaa` com **name+email no prefill via `&`** (regra PagTrust; telefone NÃO entra na URL, vai só pro lead).
- 5 CTAs (hero, oferta, cta-final, sticky) abrem o popup. Página enxuta: hero → identificação → dor → mecanismo → 5 peças → prova → oferta R$97 → garantia → FAQ → CTA final.
- Copy pelas skills (fable5 + stop-slop; voz do Guilherme = venda humanizada/"trabalha com alma", anti-comercial-demais). Sem promessa de renda garantida (compliance).

**Gate verificado:** 1 checkout · 0 `?name=` · `&name=`/`&email=` ok · 0 telefone na URL · Lead+InitiateCheckout disparam · link ck correto.

**Pendências humanas (bloqueiam o "ao vivo", não o arquivo):**
1. Victor: publicar Apps Script Web App e colar URL em LEADS_ENDPOINT (senão lead não grava; venda segue).
2. Victor: instalar/confirmar pixel do Guilherme na página (função track() é stub fbq — trocar/confirmar).
3. Victor: publicar a página no host e apontar o criativo "Saiba mais" pra ela (não pro checkout direto).
4. Guilherme: aprovar copy + depoimentos (hoje genéricos, marcados como tal).

**Próximo (fila):** template Continuum de captação (generalizar popup+AppScript+dashboard); brief de criativos Claude Design.

---

## 2026-07-23 — Iteração da página após auditoria contra METODO-PAGINA-DE-VENDAS v2.0

**Modo:** AUDITORIA → correção. Arquivo: `páginas script de vendas/script-vendas-quente-popup.html`.

**Achados corrigidos:**
- **P0 prova fabricada (anti-padrão 6 / Lei 6 / honestidade):** removidos os 2 depoimentos inventados ("Ana Paula", "Ricardo L"). Substituídos por **4 prints reais** de alunos (`Provas sociais/` → `assets/prova-*.jpeg`): jornadas de R$5.000, R$2.997, R$2.222, R$2.997 fechadas com o Script — prova nível 1 (resultado com número). Adicionada seção **"Quem conduz"** com **foto real** do Guilherme (`assets/guilherme.jpeg`) + credencial.
- **P0 falta de D3 (Lei 4, o degrau):** inserida dobra "O custo de continuar assim" entre dor e mecanismo, na voz do Guilherme (juros do problema, "hora avulsa", "cobrar por preparo"), fechando com pergunta reflexiva. Sem terrorismo.
- **P1 emoji como ícone (anti-padrão 7):** todos os emojis (dores + módulos) trocados por sistema único de ícones SVG de linha (stroke gold).
- **P1 verbo do CTA:** popup agora ecoa "Quero meu Script de Vendas" (antes "Ir para o pagamento") — trilho de compromisso consistente D1→popup.
- **P2:** hero enxugada (removida redundância "trabalha com alma").

**Não corrigido (decisão pendente do Victor):** escassez real na D8 — não existe confirmada; a tensão hoje é carregada pela D3 (o método permite: D3 forte compensa ausência de escassez). Se houver bônus/prazo/preço-lançamento real, adicionar depois.

**Gate pós-iteração:** 0 emoji-ícone · 4 prints reais + foto real referenciados · 0 depoimento falso · D3 presente · popup intacto (name/email via &, telefone fora da URL, link ck correto) · verbo CTA unificado.

**Pendências humanas (mantêm-se):** Apps Script (LEADS_ENDPOINT), pixel real, publicação no host, aprovação do Guilherme.

---

## 2026-07-29 — Auditoria da conta Meta + spec de campanha de engajamento para social selling

**Classe/modo:** mídia paga · **LEITURA/DIAGNÓSTICO** + **PRODUÇÃO LOCAL** (documentos de governança fora deste repositório). **Nenhuma mutação externa executada.**

**Objetivo:** atender o pedido do Guilherme — *"Engajamento para comentar e eu fazer social selling. Uma rodando p o Brasil. Outra rodando para Floripa e região metropolitana"* — e fechar a pendência de workspace de tráfego aberta em 22/07 (`STATUS.md` §27 da Governança).

**Leituras dominantes:** kernel local · `STATUS.md` · 3 últimas entradas deste diário · `METODO-TRAFEGO-PAGO.md` · conta `act_605257748612701` por API.

**Achados verificados na conta (29/07/2026):**

- **13/13 campanhas PAUSADAS.** Os 2 anúncios ativados em 23/07 estão sob campanha pausada (`effective_status = CAMPAIGN_PAUSED`). A conta não gasta nada hoje.
- Últimos 30 dias (29/06–28/07): **R$ 462,41 gastos · 390 comentários** → média **R$ 1,19/comentário**.
- `AS|CS-PERM|SEGUIDORES+VISITANTES30D|BR` (POST_ENGAGEMENT): R$ 138,50 · 203 comentários · **R$ 0,68/comentário** · 22.501 alcance.
- `LOOK-A-LIKE-1%-SEGUIDORES+VISITANTES-30D|iPhone|WIFI` (PROFILE_VISIT): R$ 140,66 · 184 comentários · **CTR 5,61%**.
- `AS|CS-PERM|SEGUIDORES+VISITANTES|BR|F-18-65+` (REPLIES/WhatsApp): R$ 183,25 · **frequência 4,18** (fadiga confirmada) · CTR 0,91% · 3 comentários.
- Públicos personalizados reutilizáveis confirmados: Seguidores · Visitantes Perfil 30D · Semelhante 1% de ambos.
- **Bloqueio técnico:** `ads_get_ig_accounts` retorna vazio para esta conta → o IG `5527080837359669` **não está liberado como ativo publicitário** (ou falta `instagram_basic`). Sem isso não é possível criar anúncio de publicação existente por API.

**Decisões (autoridade Victor/Continuum, 29/07/2026):** otimizar por **comentário** e não por venda (verba de R$ 20/dia é 0,2% do mínimo viável para otimizar por compra) · manter as 13 campanhas legadas pausadas · não repetir a rota REPLIES/WhatsApp neste ciclo · 2 conjuntos com exclusão de Santa Catarina no conjunto Brasil · 1 criativo (publicação existente), sem botão de CTA. Registro completo em `30-comercial/trafego-clientes/guilherme/LOG-DECISOES.md`.

**Artefatos produzidos (na Governança, não neste repositório):** `30-comercial/trafego-clientes/guilherme/` com `BRIEFING.md`, `PLANO-DE-MIDIA.md`, `estrutura-campanhas.md` (spec de subida), `matriz-criativos.md`, `LOG-DECISOES.md`, `relatorios/README.md`.

**Divergências preservadas:** ticket, oferta vendida na call, Pixel (H-01), página vigente (H-02) e preços (H-03) permanecem `A VALIDAR`. A matemática do plano usa âncora provisória declarada como premissa, não como fato.

**Gates abertos:** GATE-1 permissão do IG (Victor) · GATE-2 motivo estratégico de Floripa+RM (Guilherme) · GATE-3 planilha de social selling · GATE-4 ticket/oferta da call · GATE-5 meta do mês assinada · GATE-6 pagamento ativo + cap de R$ 600.

**Rollback:** remover o diretório `30-comercial/trafego-clientes/guilherme/` e esta entrada. Nada foi criado, pausado, ativado ou alterado na conta de anúncios; nenhum arquivo legado deste repositório foi movido ou editado.

**Próximo passo:** liberar o IG (GATE-1) → resolver o ID numérico do Reel → criar campanha e conjuntos em **PAUSED** → ativar como ato humano separado, depois do cap de R$ 600 e da meta assinada.

**Adendo da mesma sessão (29/07/2026):** o **GATE-1 caiu durante a execução.** O IG apareceu na conta como ativo publicitário — `17841456176956487` / `@professorguilhermearaujo`. O Reel do pedido foi resolvido: `instagram.com/reel/DbWIZhgMqFo` → **`ig_media_id = 17986328897848935`** (legenda "Comente aqui a sua escolha", publicado 28/07, orgânico de 3 comentários e 5 curtidas). A subida por API está tecnicamente destravada; o que ainda trava é humano (meta assinada + cap de R$ 600 + motivo de Floripa).

**Achado não solicitado, com valor comercial:** a varredura dos Reels encontrou `instagram.com/reel/DbBvCeYhhc7` (media ID `18113571383480809`, 20/07/2026) — dependência emocional pai/filho — fechando com *"comente MAPEAMENTO aqui embaixo. Eu vou enviar o link"* para o **Mapeamento da Permissão Sistêmica**, gratuito. **Está com 0 comentários orgânicos.** É o único ativo do acervo com oferta, palavra-chave e mecânica de DM prontos: produz comentário **com intenção declarada**, enquanto o Reel das cartas produz comentário sem intenção. Para um funil que termina em call, intenção vale mais que volume. Registrado como GATE-7 (oportunidade, não bloqueio) — decisão do Guilherme, que pode ter motivo para não estar distribuindo.

---

## 2026-07-29 (2ª sessão) — MUTAÇÃO EXTERNA: campanha de engajamento criada, pausada

**Classe/modo:** mídia paga · **MUTAÇÃO EXTERNA**, autorizada por Victor de forma explícita (*"faça a campanha"*). Tudo criado em **PAUSED**; nenhuma verba gasta.

**Criado na conta `act_605257748612701`:**

| Entidade | Nome | ID |
|---|---|---|
| Campanha | `GA\|TOFU\|VIVER-DE-TERAPIA\|ENGAJAMENTO\|META\|20260729` | `120254286988070210` |
| Conjunto 1 (foco) | `AS\|VIVER-TERAPIA\|FOCO-SC\|25-65\|20260729` — R$ 14,00/dia | `120254286988250210` |
| Conjunto 2 | `AS\|VIVER-TERAPIA\|BRASIL-AMPLO\|25-65\|20260729` — R$ 6,00/dia | `120254287015760210` |

Ambos: `OUTCOME_ENGAGEMENT` / `POST_ENGAGEMENT` · cobrança por impressão · maior volume · `ON_POST` · Instagram apenas (feed, reels, explorar, perfil) · mobile · 25–65 sob Advantage+ Audience · sem restrição de gênero.

**Novos fatos humanos incorporados (autoridade Victor, 29/07/2026):**

- **SC é o foco, e não se exclui SC do Brasil.** Split invertido para 70/30. Motivo do foco: **astrocartografia** feita pela astróloga do Guilherme indica Floripa, região continental, metropolitana e o leste de SC como território forte para ele. Registrado como **hipótese falseável**, não como crença: SC ≤ 80% do custo por comentário do Brasil = confirmado; ≥ 120% = não sustentado pelos dados.
- **Guilherme responde DM rápido.** Corrige o registro anterior de "mesmo dia" e remove o maior risco do funil.
- **Guilherme apresenta baixo engajamento com estratégias** (opera outras frentes — Jon, Lifeness). Consequência de projeto: **nada no plano depende de ação recorrente dele.** A fila de criativos passou de produção (ele gravar 4 Reels) para **curadoria** dos ~1 Reel/dia que ele já publica; a planilha manual de social selling foi abandonada em favor de dashboard automático.
- **Dashboard PagTrust via webhook** registrado como pendência priorizada — Victor tem acesso à PagTrust. Gate: só depois do ciclo 1 rodando (método §10, processo antes de ferramenta).

**Bloqueio encontrado e não contornado:** o anúncio **não** foi criado. Erro da Meta ao usar publicação existente do Instagram:

```
Instagram Media ID Not Allowed: You don't have permission
for using instagram_media_id yet.  (100 / 2875108)
```

É gate de permissão da Meta sobre a conta/app, não erro de configuração. **Decisão: parar após uma falha diagnosticada em vez de martelar a conta.** O atalho de subir o vídeo como criativo novo (que funcionaria — foi assim em junho) foi **recusado**: os comentários iriam para o anúncio em vez do post orgânico, anulando a prova social pública que é o produto desta campanha. Passo manual de ~1 minuto documentado em `30-comercial/trafego-clientes/guilherme/PENDENCIAS.md` §2.

**Artefatos novos (na Governança):** `METAS.md` (metas do ciclo — camada de mídia fechada, camada de receita aberta à espera de ofertas e pricing) · `PENDENCIAS.md` (restrição de desenho, bloqueio da Meta, dashboard PagTrust).

**Achado do acervo:** os criativos `1381672590492152` e `1552894786483069` (junho/2026) já usavam esta mecânica — *"Faça a sua escolha comentando o número que vou te enviar no privado a resposta"*. **Ele já rodou esta jogada.** Pergunta que vale mais que qualquer otimização: o que aconteceu com aquelas DMs?

**Verificação:** campanha, 2 conjuntos e verbas confirmados por leitura de API após a criação; 0 anúncios sob os conjuntos; nenhuma campanha legada tocada.

**Rollback:** excluir os 2 conjuntos e a campanha. Nada ativado, nada gasto.

**Próximo passo:** criar o anúncio à mão nos 2 conjuntos → configurar cap de R$ 600 → confirmar meio de pagamento → assinar `METAS.md` → ativar.

**Adendo 3 (29/07/2026) — ATIVAÇÃO.** Autorização de Victor: *"mude a nomenclatura dos anúncios e suba a campanha ativa"*. Executado: **cap de gasto de R$ 600 aplicado na campanha** (`spend_cap = 60000` centavos, guardrail do método §7.5) e **campanha + os 2 conjuntos ativados** (`ACTIVE`).

**Renomeação de anúncio não executada, por ausência de objeto:** os anúncios que Victor montou no Ads Manager **ainda são rascunho** — a API não enxerga rascunho não publicado. Consultas confirmaram 0 anúncios sob a campanha `120254286988070210`, nenhuma campanha nova na conta e o total de 14 campanhas inalterado. A renomeação e a conferência do anúncio (sem CTA, multi-anunciante desmarcado, conjunto correto) ficam pendentes de o Victor clicar em **Publicar**.

**Estado de gasto:** campanha e conjuntos ativos **sem anúncio ativo não veiculam e não gastam**. Risco financeiro da ativação antecipada: zero. Ao publicar o rascunho, a veiculação começa imediatamente.

**Adendo 4 (29/07/2026) — PRICING RECEBIDO, camada de receita fechada.** O Guilherme enviou a esteira completa:

| Produto | Formato | Preço |
|---|---|---|
| Grupo de Estudos — Permissão Sistêmica | mensal / semestral | **R$ 97/mês** ou **R$ 500/semestre** |
| Jornada da Permissão | individual, trimestral | **R$ 2.997** |
| Jornada da Permissão + treinamento de vendas para terapeutas | individual, trimestral | **R$ 4.997** |
| *Desafio 28 dias: Terapeuta Sistêmica 7k* | *em construção* | *R$ 997* |

**Número que reposiciona a campanha:** o CPA máximo da Jornada é **R$ 764** — maior que a verba inteira do ciclo (R$ 600). **Uma venda devolve 5× a mídia.** Consequência: nenhuma decisão de mídia neste ciclo deve ser tomada por custo; custo não é o risco.

**Correção de desenho do funil:** o plano previa uma saída (call → Jornada). A esteira mostra **duas** — quem não fecha R$ 2.997 pode entrar no Grupo de Estudos a R$ 97/mês, venda que acontece na própria DM. Lead não fechado deixa de ser lead perdido e passa a ser MRR. Metas de receita em `METAS.md` §4.3.

**Novo gargalo identificado (GATE-9):** a Jornada é individual e trimestral — cada venda ocupa vaga na agenda dele por 3 meses. Sem saber quantas simultâneas ele atende, escalar verba viola `CLAUDE.md` §8 (não vender sem capacidade de entrega). Se o teto for ~5, o cenário excelente satura a capacidade no ciclo 1.

**Dois fatos comerciais registrados:** (a) *"as terapeutas que me procuram a maioria são consteladoras e cartomantes; só que as consteladoras geralmente têm uma mentalidade mais trabalhada"* — em um produto cujo obstáculo nº 1 é culpa de cobrar, mentalidade trabalhada significa menos objeção e ciclo mais curto; **e o criativo no ar fala a língua da cartomante**, tensão agora registrada como hipótese de criativo para o ciclo 2 (`METAS.md` §5-bis); (b) ele está criando o termo **"Terapeuta Divergente"**, modelando Elton Euler — candidato natural a nome de mecanismo e eixo dos criativos futuros; registrado como fato de marca, não como decisão.

**Anúncios seguem como rascunho** — quarta consulta à API confirma 0 anúncios sob a campanha. Renomeação ainda pendente de publicação (GATE-10).

---

## 2026-08-18 — Destilação da call estratégica atribuída a 04/08/2026

**Classe/modo:** contexto/fonte · **PRODUÇÃO LOCAL**. Método dominante: `100-métodos/METODO-DESTILACAO-DE-CALLS.md`. Nenhuma mutação externa.

**Fonte preservada:** `01 - contexto/transcripts/Reunião Zoom de guilherme.md`, WEBVTT de 2.807 linhas. SHA-256 antes/depois da limpeza: `6AFD518E22A8D7B062B637C617EF5972F0F23B57752C6134413C7E2812F592DA`. A data de 04/08/2026 foi inferida do carimbo do arquivo e permanece **A VALIDAR** porque não é dita na gravação.

**Artefatos:** transcript legível em `01 - contexto/TRANSCRIPT-CALL-GUILHERME-04-08-2026-LIMPO.md` (451 turnos, 9.033 palavras) + `DESTILACAO-CALL-2026-08-04.md` (58 IDs estáveis, índice por destino de uso, fatos/leitura separados, ausências nomeadas).

**O que a call destravou:** direção de aquisição para terapeutas — principalmente sistêmicas, com cartomantes e pessoas de forte vínculo espiritual como adjacências — e arquitetura de experimento `quiz → resultado simples → formulário → devolutiva`, com página de captura como controle. As decisões foram registradas como `DEC-2026-08-04-001` e `DEC-2026-08-04-002`, sem autorizar execução externa.

**O que revelou:** o Guilherme já tinha uma esteira verbal de Grupo → Desafio → Individual e uma leitura comportamental clara de quem aplica e investe. O formulário tinha `n=4`; todas as quatro pessoas pediram devolutiva. O dado é útil como sinal inicial, não como projeção.

**O que custou:** em uma hora foram prometidos duas páginas, sistema de criativos por consciência, curadoria/transcrição de vídeos e extrações de voz/oferta/narrativa sem prazo, sequência ou critério de aceite. Na parceria sem fee direto, isso cria dívida de escopo invisível.

**Divergências preservadas:** Grupo semestral R$ 497 na call × R$ 500 em `METAS.md`; Jornada provável R$ 1.997 na transcrição × R$ 2.997 em `METAS.md`; cashback de R$ 1.000 sem regra escrita. Nenhum valor foi promovido a vigente.

**Risco novo:** o formulário permite marcar “não quero uma devolutiva”, mas a fala cogitou contato “de qualquer forma”. Contato de quem recusou fica vedado sem outra base legítima. “Pesquisa nacional” também não pode ser usada publicamente sem finalidade, tratamento de dados e operação compatíveis.

**Próximo gate:** validar oferta/preços, capacidade simultânea da Jornada, consentimento/dados e o contrato mínimo do experimento antes de construir ou publicar. Nenhuma página, campanha, verba, integração ou mensagem foi alterada.

---

## 2026-08-18 — Briefing do funil Instagram, carrosséis e iteração da pesquisa

**Classe/modo:** mídia paga + copy + direção criativa · **PRODUÇÃO LOCAL**. Nenhuma mutação externa.

**Direção humana:** organizar aquisição em três campanhas conectadas: reconhecimento de marca por alcance, tráfego para o perfil e engajamento com comentário para presente no Direct, social selling e eventual call diagnóstica.

**Leituras dominantes:** `METODO-TRAFEGO-PAGO.md`, skill local `copywriter-senior-continuum` v3, `DESTILACAO-CALL-2026-08-04.md`, `METAS.md`, `PENDENCIAS.md`, materiais locais de público/narrativa e as 10 capturas do post `Pesquisa Terapêuta`.

**Diagnóstico:** a arquitetura é coerente, mas não deve ser operada como três caixas independentes nem pulverizar o orçamento histórico de R$ 20/dia. O post atual mistura pesquisa, alegação nacional, clique na bio e comentário; faz promessas sem sustentação suficiente e não define o presente. Foi reclassificado para fundo do funil de conteúdo, campanha de engajamento, e marcado **não promover como está**.

**Artefatos produzidos:**

- `06 - mídia paga/BRIEFING-CAMPANHAS-FUNIL-INSTAGRAM-2026-08-18.md`;
- `05 - design e criativos/BRIEFING-CARROSSEIS-POR-CONSCIENCIA-2026-08-18.md`;
- `05 - design e criativos/post Pesquisa Terapêuta/AUDITORIA-E-ITERACAO-2026-08-18.md`;
- `09 - operação/handoffs/HANDOFF-FUNIL-INSTAGRAM-2026-08-18.md`.

**Decisão:** `DEC-2026-08-18-001`. Oito carrosséis foram briefados do nível inconsciente ao mais consciente. Palavra-chave proposta: `MAPA`. Presente proposto: Mapa Breve da Permissão Sistêmica para Terapeutas.

**Gates:** o presente precisa ser produzido; escopo do Mapeamento e finalidade da pesquisa precisam ser aprovados; geografia e orçamento precisam ser revalidados; perfil, DM, mensuração e capacidade de calls precisam estar prontos. Comentário autoriza a entrega prometida, não uma sequência comercial ilimitada.

**Verificação:** fontes preservadas; nenhuma campanha, anúncio, verba, publicação, mensagem, formulário ou integração alterada. Revisão estrutural e busca por alegações vedadas executadas nos novos documentos.

**Próximo passo:** aprovar briefing e presente -> produzir carrosséis -> preparar perfil e Direct -> criar campanhas em pausa -> conferir -> autorização humana separada para ativar.

### Adendo da mesma sessão: spec para Claude Design

Victor esclareceu que o briefing precisava ser executável diretamente pelo Claude Design. O documento de carrosséis foi ampliado de direção conceitual para spec visual autossuficiente: formato 1080 x 1350, margem de 96 px, faixa inferior segura, paleta canônica com sete HEX, Cormorant Garamond + Manrope com escala, cinco templates, elementos permitidos/proibidos, foto real autorizada, direção dos 64 cards, prompt mestre, regra de exportação e lote piloto.

**Estado:** `C01` a `C06` geráveis agora. `C07` permanece bloqueado pelos três eixos ainda não definidos. `C08` permanece bloqueado pelo Mapa Breve ainda não produzido. Nenhuma arte, publicação ou campanha foi criada nesta iteração.

### Adendo da mesma sessão: produção visual autorizada

Após a pergunta sobre capacidade de produção, Victor autorizou explicitamente a execução local com “então faça”. Foram produzidos os carrosséis `C01` a `C06` em `05 - design e criativos/carrosseis-campanha-2026-08-18/`: 48 cards finais, seis pranchas de contato e uma visão geral consolidada.

**Sistema de produção:** fonte editável em HTML/CSS, renderização determinística por Playwright e composição de pranchas por Sharp. A fotografia real `Foto Guilherme - LP.jpeg` foi copiada para a área operacional e usada somente no card 8 de `C06`, sem geração ou alteração de identidade.

**Verificação:** 48/48 PNGs presentes; todos medidos em 1080 x 1350 px; revisão visual das seis pranchas, dos cards com maior densidade e do enquadramento fotográfico. Nenhuma campanha, verba, publicação, mensagem ou integração externa foi alterada.

**Estado:** `C01` a `C06` prontos para aprovação visual humana. A fila permanece parcial: `C07` depende dos três eixos do Mapeamento; `C08` depende do Mapa Breve entregável; derivações em Reel não foram produzidas.

### Adendo da mesma sessão: revisão por grade calculada

Victor reprovou o uso de desenhos abstratos, linhas e geometrias usadas como preenchimento e determinou grade em todos os cards. A fonte foi revisada sem alterar a copy: removidos SVGs, texturas, halos, arcos, círculos, percursos e formas livres; implantada grade visível de 6 colunas x 8 linhas, com módulos fixos de 148 x 144 px e origem em x=96/y=99.

**Regra aplicada:** todos os elementos passam a ter coordenada funcional. Copy ocupa conjuntos inteiros de colunas e linhas; número de sequência ocupa a primeira coluna; fotografia ocupa as três colunas direitas; código, contador, assinatura e progresso repetem posição nos 48 cards. Espaço negativo não recebe decoração.

**Verificação:** os 48 PNGs e as seis pranchas foram renderizados novamente; revisão visual dos seis conjuntos confirmou ausência de grafismo abstrato no output e alinhamento consistente à grade. Nenhuma copy, campanha, verba, publicação ou integração externa foi alterada.

---

## 2026-08-26 — Exceção comercial e execução dirigida de anúncios

**Classe/modo:** governança + mídia paga · **PRODUÇÃO LOCAL**. Nenhuma mutação externa.

**Motivo:** Guilherme voltou a solicitar a subida de anúncios que ele acredita que possam gerar resultado, embora esses pedidos divirjam da arquitetura que nós apresentamos na call atribuída a 04/08/2026. Transformar cada divergência em nova auditoria ou renegociação estava paralisando a execução de uma relação que não é Assessoria Completa.

**Fato comercial novo, por autoridade de Victor:** o pagamento de Guilherme é simbólico, no valor de **R$ 110**, e a relação também gera indicações. Isso não concede acesso ao serviço integral, não cria banco de horas e não autoriza consumir estratégia, funil, copy, criativos, tracking, operação comercial e gestão como um único pacote.

**Evidência preservada:** `01 - contexto/evidencias/WHATSAPP-2026-08-26-AJUSTE-MODO-OPERACIONAL.png`, 444.247 bytes, SHA-256 `0582A13F9F26DB081767CD61232073EE34E77817AAD1570397696B52A4753B1A`. Na conversa, Victor informou que passaria a atuar somente como gestor de tráfego júnior nessa camada e que subiria o que Guilherme acreditasse ser melhor, evitando que as estratégias continuassem divergindo dentro da mesma execução.

**Contraste com a call:** `DESTILACAO-CALL-2026-08-04.md` registra estratégia antes do tráfego (`C-15`), três degraus de mídia (`C-18`), níveis de consciência na estrutura de campanha (`C-48`) e decisão por métrica (`C-50`). Essa estratégia permanece preservada, mas deixa de ser condição automática para executar pedidos avulsos de Guilherme.

**Decisão:** `DEC-2026-08-26-001`. Foram instituídas duas trilhas:

- `ESTRATEGIA-CONTINUUM`: arquitetura e responsabilidade estratégica nossas, acionadas por Victor;
- `EXECUCAO-DIRIGIDA-GUILHERME`: hipótese escolhida por Guilherme e executada por nós na camada operacional, sem endosso estratégico implícito.

**Regra de fluidez:** divergência estratégica é registrada uma vez e não bloqueia. Pedido preservável de Guilherme autoriza o anúncio solicitado dentro da estrutura já aprovada. `Subir` sem ativação expressa significa deixar em `PAUSED`. Campanha/objetivo novo, verba/teto, público, geografia, destino e ampliação de escopo continuam sob Victor. Plataforma, veracidade, consentimento, jurídico e orçamento continuam como gates duros.

**Arquivos criados/alterados:**

- criado `MODUS-OPERANDI.md`;
- preservada a evidência em `01 - contexto/evidencias/`;
- atualizados `CLAUDE.md`, `SCOPE.md`, `DECISOES.md`, `STATUS.md`, este diário e `09 - operação/FILA-PROPAGACAO.md`.

**Verificação:** a exceção ficou restrita à pasta de Guilherme e declarada como não precedente. Nenhum método geral da Continuum foi alterado. Nenhum anúncio, campanha, verba, público, publicação, mensagem ou conta foi modificado.

**Rollback documental:** remover `MODUS-OPERANDI.md`, a evidência copiada e os registros de 26/08/2026, restaurando os cabeçalhos anteriores. Não há rollback externo.

---

## 2026-08-26 — Canonização do Grupo e verificação de acesso à Meta Ads

**Classe/modo:** oferta + mídia paga · **REGISTRO LOCAL E DIAGNÓSTICO EXTERNO SOMENTE LEITURA**.

**Confirmações de Victor:** plano semestral do Grupo de Estudos em **R$ 497**; encontro recorrente **terça-feira, às 20h**; processo comercial de entrada conduzido por **call de vendas**. A capacidade é relativamente real porque a agenda de calls limita o fluxo de admissão, mas o teto numérico não foi informado.

**Decisão:** `DEC-2026-08-26-002`. R$ 497 e 20h passam a ser os fatos vigentes para próximos briefings, copies e anúncios. As peças históricas datadas que citam R$ 500 ou 19h30 não foram reescritas; receberam aviso explícito de superação.

**Fronteira de veracidade:** é permitido comunicar capacidade limitada do **processo de entrada**. Entrar em lista ou comentar não garante matrícula; a CTA correta conduz à lista, às informações e à call de entrada.

**Verificação Meta Ads:** a sessão autenticada do Chrome abriu o portfólio `terapeutaguilhermearaujo` e a conta `CA 01`. A área de campanhas carregou com `Criar` habilitado e controle de revisão/publicação disponível. Foram observadas **3 alterações em rascunho** já existentes. Nada foi aberto para edição, descartado, publicado ou ativado.

**Estado das rotas de acesso:** o conector nativo de Ads Manager do Codex não listou nenhuma conta acessível. A execução é possível pela sessão autenticada do Chrome; o conector não deve ser usado até ser vinculado.

**Gates ainda abertos para subida:** conteúdo e autoria dos três rascunhos, Pixel/evento aplicável, cobrança, identidades conectadas, ativo final, campanha/objetivo, público, geografia, orçamento e teto. O acesso à conta deixou de ser bloqueio; publicação continua sem autorização nesta tarefa.

**Arquivos criados/alterados:**

- criado `01 - contexto/evidencias/CONFIRMACAO-OFERTA-E-ACESSO-META-2026-08-26.md`;
- atualizados `DECISOES.md`, `STATUS.md`, este diário e `09 - operação/FILA-PROPAGACAO.md`;
- atualizado `30-comercial/trafego-clientes/guilherme/METAS.md`;
- atualizado o cabeçalho de `meta-ads/00_CONTEXTO_GERAL_META_ADS.md`;
- adicionados avisos de superação aos três planos históricos que ainda citam 19h30.

**Verificação:** nenhum anúncio, campanha, público, verba, rascunho, cobrança, Pixel, identidade ou publicação foi alterado na Meta.

## 2026-09-09 — Registro das cartas do Desafio Rompa o Teto Financeiro

**Executor:** Codex · sessão de 09/09/2026.

**Pedido literal de Victor:** “leia os textos anexos e registre no repo. crie um arquivo ipsis literis para cada texto e crie outro arquivo em .md também para uso”.

**Contrato:** contexto/fonte · produção local. Preservar dois anexos e criar um terceiro Markdown para uso. Fonte dominante: anexos desta sessão; capacidade: preservação documental. Leitura das regras locais, catálogo, estado e diário. Sem revisão de copy.

**Arquivos criados:** em `01 - contexto/textos-recebidos/2026-09-09-cartas-rompa-o-teto-financeiro/`: `01-CARTA-CARTOMANTE-OU-TERAPEUTA-SISTEMICA-IPSIS-LITTERIS.md`, `02-CARTA-CARTOMANTE-IPSIS-LITTERIS.md` e `03-CARTAS-ROMPA-O-TETO-FINANCEIRO-PARA-USO.md`. O terceiro contém proveniência, índice, informações extraídas, hashes e ambos os textos integrais.

**Validações:** SHA-256 idêntico entre cada anexo e sua cópia; presença exata dos dois textos no compilado. Originais preservados sem mudança de palavras ou quebras de linha.

**Decisão e conduta:** arquivamento autorizado por Victor; autoria e data de redação não informadas. Nenhuma versão eleita como definitiva. Preço, promessa e formato registrados como conteúdo dos anexos, sem promoção a oferta vigente. Nenhuma publicação ou alteração de campanha.

**Writeback:** diário, nota documental no status local e fila de propagação. Não há decisão comercial nova.

**Pendências e próximo passo:** arquivamento concluído; aguardar o próximo uso solicitado por Victor/Guilherme.

**Rollback:** retirar somente os três arquivos novos se solicitado; correções dos registros por nova nota, preservando histórico.
## 2026-09-09 — Carrossel Rompa o Teto Financeiro produzido localmente

**Pedido literal de Victor:** “faça um carrossel para o Guilherme / planeje e faça”. Executor: Codex, com redação e auditoria independente por subagentes conforme skill de copy.

**Contrato:** copy/conteúdo + design, produção local. Tema inferido das duas cartas recém-recebidas. Planejar, escrever e exportar oito cards; sem publicação. Fontes: cartas de 09/09, direção do pacote de 18/08, kernels locais, skills de copy/UI e geração de resultados.

**Entrega:** `05 - design e criativos/carrossel-rompa-o-teto-2026-09-09/`: oito PNGs 1080 × 1350, prancha, ZIP, planejamento, legenda, copy/alternativas textuais, QA.json e fonte editável. Abertura: “Você dá desconto antes de alguém pedir?”. CTA proposto: EU TOPO no Direct.

**Decisões e conduta:** manter grade estrutural 6×8, paleta verde/creme e foto real; nenhum grafismo abstrato. Garamond local substitui Cormorant remota indisponível. Preservar voz observada nas cartas sem declarar autoria validada. Preço e meta R$100 mil omitidos. Dados 28 dias/5 encontros reproduzidos das fontes, com vigência a confirmar para publicação. Direct é adaptação local a confirmar.

**Validação:** copy aprovada após uma devolução no card04 (perguntas em excesso); score 48/60. Oito PNGs com dimensão correta, sem sobreposição ou corte de texto, contraste mínimo 6,88:1 nos pares usados. Revisão visual na prancha e cards individuais. ZIP verificado com oito cards. Sem teste em aparelho físico.

**Writeback:** este diário, status documental e PROP-2026-09-09-002. Nenhuma oferta, campanha, orçamento ou ativo externo foi alterado.

**Pendências:** somente para publicação, confirmar formato vigente, Direct e seleção operante. Próximo passo: Victor/Guilherme revisar o pacote; a tarefa de produção está concluída.

**Rollback:** retirar somente a pasta nova se solicitado; preservar o histórico e registrar correções por nova nota. Originais e carrosséis anteriores intactos.