# PLANO DE MÍDIA — Patricck Garbim · Google Ads · outubro/novembro 2026

> **Tipo:** plano de mídia (método `100-métodos/METODO-TRAFEGO-PAGO.md` §2.2) · **Escrito em:** 14/10/2026 · **Por:** Claude (CEO)
> **Status:** 🟡 **plano — nada criado na conta.** Criação só depois de: credenciais do MCP, leitura da conta (passo 0) e meta assinada pelo Patricck (§2).
> **Decisões que este plano executa:** DEC-PG-24 (Victor, CVO: anúncios sobem no Google, página white) · DEC-PG-26 (verba R$ 300–400/mês) · DEC-PG-27 (Goiânia + DF) · DEC-PG-28 (páginas no ar). Fonte de fato: `clientes/Patricck Garbim/`.
> 🔴 **Risco escrito, sem alterar a decisão (DEC-PG-05/24):** a política de saúde do Google não lista o Brasil para serviço de tratamento de dependência. **Um anúncio do Orienta Acolhimento já foi reprovado na conta dele, com página white** (W10-10). Reprovação repetida pode suspender a conta, que é do Patricck, com o cartão dele.

---

## 0. Passo zero: ler a conta antes de criar (MCP, somente leitura)

O MCP instalado (`google-ads`, oficial do Google) **só lê**: busca na conta, metadados e lista de contas. Ele não cria campanha. O uso dele aqui é diagnóstico e rotina diária.

Antes de criar qualquer coisa, consultar:
1. **Por que o anúncio de 10/10 foi reprovado:** `ad_group_ad.policy_summary` (tópico da política, tipo de evidência). Se o motivo for o serviço (saúde/dependência), a próxima reprovação é provável; se for destino, texto ou outra coisa, é corrigível.
2. **Estado da conta:** status, moeda, fuso, forma de pagamento, saldo (R$ 40 creditados, W10-09), restrições ativas.
3. **A campanha pausada antiga:** Patricck pediu para excluir (W10-09). Excluir na criação.

🔴 **Regra de parada:** se a conta mostrar restrição de anunciante, verificação pendente ou suspensão, **nada sobe** e a decisão volta ao Victor.

## 1. Matemática reversa (método §2.2)

| Passo | Valor | Fonte |
|---|---|---|
| Lucro por internação = comissão (50% da 1ª parcela) | **R$ 2.000 / 2.667 / 3.334** em Goiânia · DF `A CONFIRMAR` (unidades de R$ 1,8–2,5 mil/mês → ~R$ 900–1.250) | C-06, DEC-PG-17, C-45 pendente |
| CPA máximo por internação (≤ 30% do lucro) | **R$ 600** (Goiânia, quarto coletivo) | calculado |
| Conversão conversa → internação | **10%** · premissa `a calibrar`, `n=0` neste canal (histórico dele: 5 de 10 *leads bons* fechavam na ligação, C-07 — lead de anúncio é mais frio) | premissa |
| CPL máximo (conversa no WhatsApp) | **R$ 60** | calculado |
| CPL de referência do nicho | R$ 35–40 por lead | C-38 |
| Verba mínima viável pelo método (10–15× CPA alvo) | R$ 400–600/dia | 🔴 **inalcançável** |
| **Verba disponível/mês** | **R$ 360** (R$ 12/dia), em recargas | W10-04, W10-05 |

**Leitura:** com R$ 360 a conta **não valida canal** (método §2.2.5 pede 30 a 50 vezes mais). É **teste de mensagem** (R10-02, `POLITICAS-DE-DECISAO.md` §5): mede se a família de Goiânia/DF clica e chama no WhatsApp, e a que custo. O método de verba pequena (§5.3) dobra todos os prazos.

**Por que vale assim mesmo:** **1 internação em Goiânia paga cerca de 5,5 meses dessa verba.** O risco financeiro é pequeno; o risco real é a conta (topo deste arquivo).

## 2. Meta do mês (linha para o Patricck assinar)

> **Verba R$ 360/mês → 6 a 10 conversas no WhatsApp esperadas → 0 a 1 internação → até R$ 2.000 de comissão. Custo por conversa alvo: até R$ 60.** Primeira leitura de resultado em 14 dias; decisão de manter, ajustar ou parar em 30 dias.

🔴 **Sem o "ok" dele por escrito (WhatsApp vale), a campanha não sobe** (método §2.2). Mensagem pronta no §10.

## 3. Estágio da conta (método §2.3)

**Aprendizado, em teste de mensagem.** Expectativa combinada: o mês 1 compra **dado**, não volume. Nunca vender como previsibilidade (CLAUDE.md §9, G1).

## 4. Estrutura da campanha (Search pura, método §5.4)

| Item | Configuração | Por quê |
|---|---|---|
| **Nome** | `patricck-google-search-conversa-fundo-202610` | nomenclatura do método |
| Tipo | **Pesquisa**. Rede de Display **desligada**, parceiros de pesquisa **desligados** | verba curta vai só para quem buscou; parceiro e Display são onde o clique inválido mora |
| Orçamento | **R$ 12/dia** (≈ R$ 365/mês) | W10-04 |
| Lance | **Maximizar cliques com limite de CPC de R$ 4,00** no início. Muda para *Maximizar conversões* só com ≥ 15 conversões/mês | sem histórico de conversão, lance automático de conversão não aprende |
| Locais | **Goiânia e região metropolitana** (Goiânia, Aparecida de Goiânia, Senador Canedo, Trindade, Goianira) **+ Distrito Federal** | DEC-PG-27. **Nunca Goiás inteiro** |
| Opção de local | **"Presença: pessoas que estão ou costumam estar nos locais"** (não "interesse") | o padrão do Google mostra o anúncio para quem só pesquisou sobre o local |
| Programação | **seg–sáb, 8h às 18h30** | atendimento dele é 8h–19h (DEC-PG-20); para 30 min antes para o último clique ser atendido. 🟡 domingo: confirmar com ele |
| Idioma | português | |
| Grupos de anúncio | **1 grupo** (`intencao-alta-goiania-df`) | R$ 12/dia não sustenta mais de um (método §5.2) |
| Página final | `https://orientaacolhimento.com.br/orienta-familia-1` | página A, white, fora do índice (DEC-PG-22/28) |
| Rastreamento de URL | `{lpurl}?utm_source=google&utm_medium=paid&utm_campaign=patricck-search-202610&utm_term={keyword}` | separar origem por palavra |

### 4.1 Palavras-chave (correspondência de frase e exata, nunca ampla)

Com a segmentação geográfica já restrita, a palavra não precisa da cidade; as variações com cidade capturam quem busca de fora da região para dentro dela.

| Palavra-chave | Correspondência |
|---|---|
| "clínica de recuperação" | frase |
| "comunidade terapêutica" | frase |
| [clínica de recuperação em goiânia] | exata |
| [clínica de recuperação goiânia] | exata |
| [clínica de recuperação brasília] | exata |
| [clínica de recuperação df] | exata |
| [comunidade terapêutica goiânia] | exata |
| [comunidade terapêutica brasília] | exata |
| "internação masculina" | frase |
| "clínica para alcoólatra" | frase |

⚠️ **Estas palavras são o próprio assunto restrito.** É a escolha do Victor (DEC-PG-24) e o motivo mais provável de reprovação. Alternativa de menor risco, se a primeira rodada for reprovada pelo serviço: palavras de **saúde mental e acolhimento** (faixa 2 da DEC-PG-05), só se a página descrever esse serviço com verdade.

### 4.2 Palavras negativas (lista da campanha)

`grátis` · `gratuita` · `gratuito` · `sus` · `caps` · `plano de saúde` · `unimed` · `ipasgo` · `convênio` · `feminina` · `mulher` · `mulheres` · `adolescente` · `menor` · `idoso` · `idosos` · `emprego` · `vaga de emprego` · `trabalhar` · `salário` · `curso` · `tcc` · `o que é` · `notícia` · `polícia` · `denúncia` · `reclame aqui` · `involuntária` · `compulsória` · `resgate` · `fisioterapia` · `cirurgia`

Motivo de cada grupo: fora do produto (gratuito, SUS, plano, mulher, menor, idoso — C-05, C-16) · busca de emprego e estudo · notícia e denúncia · **involuntária, compulsória e resgate** (as unidades não fazem; DEC-PG-08) · "recuperação" de outro tipo (fisioterapia, cirurgia).

### 4.3 Anúncio responsivo de pesquisa (rascunho — passa pelo gate de copy antes de subir)

Derivado **só** da página A, que já foi auditada (procedência: copy v1.2, DEC-PG-20). **Sem** o assunto pelo nome, **sem** atributo pessoal (*"seu filho é dependente?"*), **sem** promessa de cura ou prazo (DEC-PG-08).

**Títulos (até 30 caracteres):**
1. Internação Masculina
2. Goiânia e Distrito Federal
3. Visite Antes de Pagar
4. Sem Sinal Antes da Visita
5. Homens de 18 a 59 Anos
6. Tratamento de 90 Dias
7. Orientação Sem Custo
8. Fale com o Patricck
9. Vaga em Poucos Dias
10. Tratamento 100% Particular
11. Atendimento das 8h às 19h

**Descrições (até 90 caracteres):**
1. Uma vaga para o seu familiar em poucos dias, numa unidade que você visita antes de pagar.
2. Quem orienta a sua família já esteve do lado de dentro. Conte o caso pelo WhatsApp.
3. Unidades de Goiânia e do DF, só para homens de 18 a 59 anos. Tratamento particular.

**Fixar:** título 1 na posição 1 e título 2 na posição 2 (sem cidade, o anúncio perde a razão do clique).
**Recursos:** extensão de chamada **não** (número pessoal, C-33) · sitelinks não (página única) · frase de destaque: *Visita antes de pagar* · *Orientação sem custo*.

## 5. Conversão e fonte de verdade (método §6)

| Camada | Como | Estado |
|---|---|---|
| **Fonte de verdade** | a mensagem automática do WhatsApp: *"Vim pelo anúncio de Goiânia e DF."* O Patricck conta as conversas que chegam com ela e as internações que saem delas | ✅ já está na página A |
| Conversão no Google Ads | ação **"Clique no WhatsApp"** (primária), disparada pelo botão da página A | ✅ tag instalada, **inativa até o `send_to`** (DEC-PG-30) |
| Consentimento | a `/privacidade` diz que tag do Google só carrega com aceite. A página A precisa do mesmo aviso de cookies da home (`cs_consent_v1`), com o Modo de Consentimento do Google em "negado" até o aceite | ✅ aviso igual ao da home; tag só carrega com aceite (subconta: DEC-PG-30) |
| Atribuição | 7 dias clique / 1 dia visualização, travada | definir na criação |

**Sem a tag de conversão, o lance não aprende e o relatório não fecha.** É o primeiro trabalho técnico antes de subir (§9, item 4).

## 6. Proteção contra clique inválido (Iago, C-35)

1. Página A na Cloudflare: Bot Fight Mode e limite de requisições **com exceção para bots verificados** — o AdsBot do Google passa livre e vê a mesma página (DEC-PG-05; bloquear o AdsBot reprova por destino).
2. Google Ads: coluna **"Cliques inválidos"** na checagem diária; exclusão de IP quando um padrão aparecer.
3. Programação 8h–18h30 e parceiros desligados já cortam a maior parte da exposição.
4. **Sinal de ataque:** gasto do dia acima de R$ 12 com zero conversa, ou cliques concentrados em minutos → pausar no mesmo dia e registrar no `LOG-DECISOES.md`.

## 7. Thresholds calibrados (método §7.3, verba pequena §5.3)

| Regra | Default do método | Calibrado para esta conta |
|---|---|---|
| Kill hard | 3× CPA sem conversão | **R$ 120 gastos sem nenhuma conversa no WhatsApp** → pausar e ler termos de pesquisa |
| Reprovação | kill imediato | **1ª reprovação:** ler o motivo (MCP) e corrigir se não for o serviço. **2ª reprovação pelo serviço:** parar o Google nesta conta e devolver a decisão de canal ao Victor. **Nunca reenviar em série** (método §4.3) |
| CTR baixo | < 0,5% com ≥ 2.000 impressões | igual |
| Kill normal | CPA > 3× alvo por 3 dias | **custo por conversa > R$ 120 por 6 dias** (prazo dobrado, §5.3) |
| Ajuste | não mexer em 72h | **não mexer em 6 dias**, salvo kill hard ou ataque |
| Escala | +20% a cada 48–72h | só com recarga do Patricck e custo por conversa ≤ R$ 60 por 14 dias |

## 8. Cadência e relatório (método §7.1 e §8)

- **Diária (10 min, via MCP):** gasto, cliques, cliques inválidos, conversões, reprovações, termos de pesquisa novos. Anomalia → `LOG-DECISOES.md`.
- **Ter e sex:** decisão de manter, ajustar ou pausar, registrada no log.
- **Semanal:** resumo de 5 linhas ao Patricck (gasto, conversas, internações, próxima ação).
- **Mensal:** relatório em `relatorios/2026-11.md`. Manchete = conversas e internações, nunca cliques ou impressões.

## 9. Ordem de execução

| # | Passo | Dono | Trava |
|---:|---|---|---|
| 1 | Credenciais do MCP (token de desenvolvedor, autorização, ID da conta) — roteiro no §12 | **Victor** | sem isso não há leitura |
| 2 | Ler a conta: reprovação de 10/10, estado, saldo (passo 0) | Claude, via MCP | restrição de conta para tudo |
| 3 | Meta assinada pelo Patricck (§2) e confirmação: domingo, número do WhatsApp para anúncio (DEC-PG-20 item 4) | Victor → Patricck | método §2.2 |
| 4 | Tag de conversão + aviso de cookies na página A, publicar e testar o clique | Claude | método §6 |
| 5 | Gate de copy nos anúncios (§4.3): skill de copy + stop-slop | Claude | CLAUDE.md §6.1 |
| 6 | Criar a campanha **pausada** (ver "como criar" abaixo) e excluir a campanha antiga | Claude / Victor | |
| 7 | Victor revisa na interface e ativa | **Victor** | primeiro real gasto |
| 8 | Rotina diária começa no dia seguinte | Claude | |

**Como criar (decidido 14/10): script dentro do Google Ads** — `scripts/criar-campanha-search-202610.js`. Não precisa de token de desenvolvedor. Cria tudo **pausado** numa operação só (tudo ou nada), para se a campanha já existir ou se algum local não for encontrado, e confere os limites de caractere antes de enviar. Simulado em 14/10 com conta falsa: 73 operações, sintaxe ok. **Rodar primeiro em VISUALIZAR.**

~~**Como criar, já que o MCP só lê:** recomendado, **script pela API do Google Ads** com as mesmas credenciais do MCP, criando tudo **pausado** para o Victor revisar e ativar. Depende do nível de acesso do token de desenvolvedor (o nível de teste não mexe em conta real). Alternativas: criação guiada na interface pela extensão do Chrome (hoje desconectada) ou o Victor criando com este plano como roteiro.~~

## 10. Mensagem ao Patricck (meta do mês)

> Patricck, campanha do Google desenhada. Pra você saber o que esperar:
> R$ 12 por dia, uns R$ 360 no mês, só Goiânia, região e DF, de segunda a sábado das 8h às 18h30.
> Com isso a gente espera de 6 a 10 conversas no seu WhatsApp no mês. Todas chegam com "Vim pelo anúncio de Goiânia e DF", então você sabe de onde veio.
> Uma internação já paga uns cinco meses dessa verba. Mas esse primeiro mês é pra gente medir, não pra prometer volume.
> E o risco você já conhece: o Google pode reprovar de novo. Se reprovar pelo assunto duas vezes, a gente para ali e não insiste, pra não arriscar a sua conta.
> Tá de acordo? Me confirma e me diz se domingo você atende.

## 11. O que NÃO será feito este mês

PMax · Display · parceiros de pesquisa · remarketing (é saúde: proibido segmentar por isso) · correspondência ampla · mais de um grupo de anúncio · VSL na página do anúncio (DEC-PG-05) · Meta Ads (fora até o Victor decidir) · qualquer contorno de revisão: página para o revisor, domínio descartável, cloaking (DEC-PG-05, vetado) · reenviar anúncio reprovado em série.

## 12. Roteiro de credenciais do MCP (Victor)

O servidor está instalado e registrado no Claude Code (`google-ads`, escopo de usuário). Os arquivos ficam em `C:\Users\zioni\.google-ads-mcp\`, **fora do repositório**: `run.cmd` (lançador), `credenciais.env` (valores) e `autorizar.py` (gera o acesso sem gcloud).

1. **Conta de administrador (MCC):** o token de desenvolvedor só existe numa conta de administrador do Google Ads. Usar a da Continuum (ou criar uma) e **vincular a conta do Patricck** a ela (o Patricck aceita o convite).
2. **Token de desenvolvedor:** na MCC, *Ferramentas → Central de API* → solicitar. O nível **de teste** não acessa conta real; é preciso o **acesso Explorer ou Básico**. Colar em `credenciais.env` → `GOOGLE_ADS_DEVELOPER_TOKEN`. O ID da MCC (só números) vai em `GOOGLE_ADS_LOGIN_CUSTOMER_ID`.
3. **Projeto no Google Cloud:** criar um projeto, ativar a **Google Ads API**, configurar a tela de consentimento OAuth (externo, em teste, com o seu e-mail como usuário de teste) e criar um **ID do cliente OAuth do tipo "App para computador"**. Baixar o JSON.
4. **Autorizar:** no terminal, dentro de `C:\Users\zioni\.google-ads-mcp\`:
   `uv run --with google-auth-oauthlib python autorizar.py CAMINHO\DO\client_secret.json`
   O navegador abre, você entra com a conta Google que acessa a MCC e autoriza. Gera `adc.json`.
5. **Reiniciar o Claude Code.** As ferramentas `google-ads` aparecem; o primeiro teste é listar as contas acessíveis.

🔴 Nenhum desses valores entra no repositório, em mensagem ou em print.
