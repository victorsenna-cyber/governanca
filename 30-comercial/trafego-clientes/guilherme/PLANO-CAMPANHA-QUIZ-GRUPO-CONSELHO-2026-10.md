# PLANO DE CAMPANHA — Quiz → grupo do Conselho do Cigano · 15 a 31/10/2026

> **Tipo:** plano (estado, camada 3) · Escrito em 14/10/2026 · Método `METODO-TRAFEGO-PAGO.md` §5.2, §5.3, §7.3
> **Status:** 🟡 PROPOSTA. Campanha nova, objetivo novo e verba são alçada do Victor (`clientes/Guilherme Araújo/MODUS-OPERANDI.md`). Nada foi criado na conta por esta tarefa.
> Criativos: `clientes/Guilherme Araújo/01 - Criativos/Conselho do Cigano - grupo 2026-10-14/CRIATIVO.md` §0 (lote de 7).

## ⭐ Execução — 14/10/2026, noite (pedido do Victor: *"pause a campanha que envia para o quiz anterior e faça uma nova campanha para este quiz"*)

| Item | Estado | ID |
|---|---|---|
| Quiz `/permissao-mentoras/` v2 no ar | ✅ conferido: config publicada idêntica à local | — |
| `GA\|QUIZ\|PERMISSAO\|VENDAS\|CBO\|20261005` | ✅ **PAUSED** (pausa no objeto publicado, conferida) | `120255556333180210` |
| Campanha `GA\|HG\|TOFU\|LEADS\|QUIZ-GRUPO-CONSELHO\|20261015` | 🟡 **rascunho** · Leads · CBO R$ 20/dia · 15/10 00h a 31/10 23h59 | `120255723458970210` |
| Conjunto `CJ\|BR\|ABERTO\|25-65\|IG-STORY-REELS\|20261015` | 🟡 **rascunho** · só Instagram Stories + Reels · conversão no site · evento personalizado `Lead` do Pixel (`custom_event_type OTHER`, `custom_event_str Lead`), o que dispensa a conversão personalizada do B2 · BR, Advantage+ de público, 25–65 como sugestão | `120255723461560210` |
| 7 anúncios | ❌ **não criados**: as artes não aparecem na biblioteca de imagens da conta para o conector (a mais recente é de 05/10) | — |

**Atualização 14/10, ~21h (pedido do Victor: *"pause a campanha de engajamento e suba uma campanha de tráfego para o perfil com o reel que está na de engajamento. ative as novas campanhas"*):**

| Item | Estado | ID |
|---|---|---|
| `GA\|HG\|TOFU\|ENGAJAMENTO\|POST\|REELS-DIRIGIDOS\|20261008` | ✅ **PAUSED** (conferido) | `120255608873840210` |
| Campanha `GA\|HG\|TOFU\|TRAFEGO\|PERFIL-IG\|REEL-DZu9VpARUsE\|20261014` | ✅ **ACTIVE** · Tráfego · CBO **R$ 12/dia** (a mesma verba da de engajamento) · sem data de fim | `120255723560990210` |
| Conjunto `CJ\|BR\|MULHERES\|18-65\|PERFIL-IG\|IG-STORY-REELS\|20261014` | ✅ **ACTIVE** · visitas ao perfil do Instagram · mulheres BR 18–65 (o mesmo público do engajamento) · **só IG Stories + Reels** (conferido na leitura) | `120255723563140210` |
| Anúncio `AD\|CARTA-REPOSTAR-MARCAR\|POST-EXISTENTE\|DZu9VpARUsE\|20261014\|E` | 🟡 **IN_PROCESS** (análise da Meta) · reel `DZu9VpARUsE` (mídia `17970189429119090`) · botão "Ver perfil do Instagram" → `instagram.com/professorguilhermearaujo` | `120255723579960210` |
| Campanha do quiz | ✅ **ACTIVE** (começa 15/10) | `120255723458970210` |
| Conjunto do quiz | 🔴 **continua em rascunho**: duas publicações voltaram "PUBLISHING" e nada subiu, sem erro. Leitura: conjunto sem anúncio não publica. Sobe junto com os 7 anúncios | `120255723461560210` |

**Atualização 14/10, ~22h — campanha do quiz completa e publicada:**

| Item | Estado | ID |
|---|---|---|
| Conjunto `CJ\|BR\|ABERTO\|25-65\|IG-STORY-REELS\|20261015` | ✅ **ACTIVE** (começa 15/10 0h, termina 31/10 23h59) · só IG Stories + Reels (conferido) · otimiza o **`LEAD` padrão** do Pixel | `120255723461560210` |
| 7 anúncios | 🟡 em análise da Meta (`IN_PROCESS`/`PENDING_REVIEW`) · cada um com a 4:5 como mídia principal e a 9:16 em Stories e Reels (personalização por posicionamento) | rico `120255723687340210` · liso `120255723698570210` · moldura-terapeuta `120255723698850210` · spoiler `120255723699070210` · retrato `120255723699480210` · whatsapp `120255723699600210` · roda `120255723699710210` |
| Anúncio de tráfego do reel (`|E`) | ✅ **ACTIVE** (aprovado) | `120255723579960210` |

**Por que o evento mudou de `custom_event_str: Lead` para `LEAD` padrão:** o conjunto com o evento personalizado falhou três vezes na publicação assíncrona, sem erro; com o evento padrão, publicou na primeira. **Consequência:** o quiz precisava mandar o cadastro como evento padrão. Feito na **v3 do quiz** (`hostinger/permissao-mentoras-v3.zip`: o `engine.js` manda `track:Lead`), testado no navegador. ✅ **v3 no ar desde 14/10, noite** (arquivos publicados idênticos aos locais; teste no site publicado como Terapeuta: `trackCustom:QuizStart` → `trackCustom:QuizResult` → `track:Lead` → tela do grupo).

**Artes:** o Victor subiu as 18 artes primeiro na conta `143255485867453` (outra conta de anúncios) e depois na `CA 01`. Na `CA 01` o conector usou as imagens sem problema.

**Rascunhos (14/10, noite):** o conector não apaga rascunho (`DELETED` → erro 1487839). Os quatro abaixo e o rascunho antigo `120255608885010210` (engajamento, 08/10) foram **pausados** e estão com erro de validação: não publicam. Para sumirem da lista, descartar no Gerenciador (Rascunhos → Descartar).

**Lixo no rascunho (detalhe):** quatro tentativas do anúncio do reel (`…20261014`, `|B`, `|C`, `|D`), que ficaram em rascunho; o conector não apaga rascunho. A primeira usou o ID de mídia errado (`18090376619204564`, o "efetivo" do criativo), que valida mas não publica.

**Conta agora:** R$ 12/dia no ar (tráfego) + R$ 20/dia a partir de 15/10 quando o quiz tiver anúncios = R$ 32/dia.

**Publicar = ativar:** no conector, o rascunho sobe ATIVO quando publicado.



**1 campanha de Leads · 1 conjunto · 7 anúncios · R$ 20/dia de 15 a 31/10 · só Instagram Stories e Reels · otimizando para o cadastro do quiz `/permissao-mentoras/`.** Antes de publicar, dois bloqueios precisam cair (§2).

## 1. Estado da conta, lido em 14/10/2026 (conta `605257748612701`)

| Campanha ativa | Objetivo | Verba | 14 dias | Posicionamento |
|---|---|---|---|---|
| `GA\|HG\|TOFU\|ENGAJAMENTO\|POST\|REELS-DIRIGIDOS\|20261008` | engajamento com o reel | R$ 12/dia | R$ 67,99 · 17.911 engajamentos | 🔴 automático (Facebook, Instagram, Audience Network, Threads) |
| `GA\|QUIZ\|PERMISSAO\|VENDAS\|CBO\|20261005` | vendas, otimizando **compra** | R$ 15/dia | R$ 160,28 · **1 compra** | 🔴 Facebook, Instagram e WhatsApp |

**Pixel `1259363302489132`, últimos 28 dias:**
- o cadastro do quiz chega como `Lead`: **10 cadastros** entre 06 e 13/10. Cada um aparece duas vezes, uma do navegador e uma do servidor;
- o quiz manda **todos** os eventos como evento personalizado (`fbq('trackCustom', …)`), inclusive `Lead`;
- `JoinGroup` (clique no botão do grupo) **nunca disparou**;
- leitura grosseira: R$ 160 por 10 cadastros dá **~R$ 16 por cadastro** na campanha que otimiza para compra. É a única referência que existe, e ela não otimizava para cadastro.

**Verba:** o teto registrado no `STATUS.md` do cliente é R$ 25/dia; em 05/10 o Victor aprovou R$ 30/dia para as campanhas de quiz (`DIARIO-DE-BORDO.md`). Hoje rodam **R$ 27/dia**.

## 2. 🔴 Bloqueios antes de publicar

| # | Bloqueio | Por que trava | Como cai | Dono |
|---|---|---|---|---|
| ~~**B1**~~ ✅ *corrigido localmente em 14/10, falta subir `permissao-mentoras-v2.zip` na Hostinger* | No quiz no ar, **só "Mentora" recebe o link do grupo**. Terapeuta, Cartomante e "Estou começando" vão para o checkout | os anúncios chamam terapeutas e cartomantes para o grupo; elas respondem o quiz e não entram | mudar a config da cópia `permissao-mentoras/` para as quatro opções levarem ao grupo e subir na Hostinger. **Ou** publicar só a abertura "Mentora," até corrigir | Victor |
| **B2** | O `Lead` do quiz é evento **personalizado**, não o `Lead` padrão da Meta | o conjunto precisa de um evento de conversão que a Meta aceite para otimizar | **agora:** criar no Events Manager uma conversão personalizada `Lead quiz grupo` = evento personalizado `Lead` + URL contém `permissao-mentoras`. **No próximo deploy:** trocar no `engine.js` o `trackCustom` por `track` para os eventos padrão (`Lead`, `InitiateCheckout`) | Victor |
| B3 | `JoinGroup` nunca disparou | não dá para medir entrada no grupo | depois de B1, fazer um teste de ponta a ponta como Terapeuta e conferir o evento no Events Manager | Victor |

**Não trava, mas muda a leitura:** o `Lead` contado duas vezes (navegador + servidor) dobra o número na plataforma se os dois não compartilharem `event_id`. **A fonte de verdade é a planilha do quiz** (Apps Script), não a contagem da Meta.

## 3. Especificação

### Campanha

| Campo | Valor |
|---|---|
| Nome | `GA\|HG\|TOFU\|LEADS\|QUIZ-GRUPO-CONSELHO\|20261015` (convenção da conta, mantida por comparabilidade: `estrutura-campanhas.md` §2) |
| Objetivo | **Leads** (`OUTCOME_LEADS`) |
| Verba | **R$ 20/dia**, no conjunto |
| Início · fim | 15/10/2026 · **31/10/2026 23h59**. A data de fim é a trava: a arte diz "gratuito durante outubro" e não pode rodar em novembro |
| Gasto máximo | R$ 340 (17 dias × R$ 20) |
| Lance | maior volume (sem limite) |
| Categoria especial | nenhuma |

### Conjunto

| Campo | Valor |
|---|---|
| Nome | `CJ\|BR\|ABERTO\|25-65\|IG-STORY-REELS\|20261015` |
| Local da conversão | site |
| Meta de desempenho | maximizar conversões · evento **`Lead quiz grupo`** (B2) |
| Público | Brasil · Advantage+ de público ligado · 25–65 como sugestão · **sem restrição de gênero** (o criativo segmenta: `LOG-DECISOES.md` 29/07) · sem interesses |
| 🔴 **Posicionamento** | **personalizado: só Instagram Stories e Instagram Reels.** Todo o resto desmarcado (regra da casa de 14/10, método §5.2) |
| Atribuição | 7 dias após o clique, 1 dia após a visualização |

### Anúncios (7)

Em todos: arte **4:5 na mídia principal** e **9:16 em Stories e Reels** · melhorias automáticas de criativo **desligadas** · botão **Saiba mais** · título *Grupo gratuito durante outubro* · descrição *Conselho do Cigano no WhatsApp* · texto principal do `CRIATIVO.md` §5 · URL `https://professorguilhermearaujo.com.br/permissao-mentoras/?utm_source=meta&utm_medium=paid&utm_campaign=quiz-grupo-conselho&utm_content={{ad.name}}`.

Artes em `01 - Criativos/Conselho do Cigano - grupo 2026-10-14/artes/`, prefixo `guilherme-grupo-conselho-estatico-`:

| # | Nome do anúncio | Arte 4:5 | Arte 9:16 | Hipótese (o que este anúncio testa) |
|---|---|---|---|---|
| 1 | `AD\|CONSELHO\|RICO\|GRADE\|V2\|20261015` | `rico-v2-feed` | `rico-v2-story` | a entrega explicada em quatro quadros segura quem não conhece o Gui |
| 2 | `AD\|CONSELHO\|LISO\|TEXTO\|V2\|20261015` | `liso-v2-feed` | `liso-v2-story` | texto nativo do Instagram parece post, não anúncio |
| 3 | `AD\|CONSELHO\|MOLDURA\|TERAPEUTA\|V2\|20261015` | `moldura-terapeuta-v2-feed` | `moldura-terapeuta-v2-story` | chamar a profissão pelo nome separa o público mais barato |
| 4 | `AD\|CONSELHO\|SPOILER\|HOROSCOPO\|V1\|20261015` | `spoiler-v1-feed` | `spoiler-v1-story` | o "não é previsão" do Gui, virado em gancho, para quem desconfia de horóscopo |
| 5 | `AD\|CONSELHO\|RETRATO\|GRATUITA\|V1\|20261015` | `retrato-v1-feed` | `retrato-v1-story` | o rosto do Gui com as cartas gera mais confiança que arte sem pessoa |
| 6 | `AD\|CONSELHO\|WHATSAPP\|CONVITE\|V1\|20261015` | `whatsapp-v1-feed` | `whatsapp-v1-story` | mostrar o destino (o grupo no WhatsApp) antes do clique |
| 7 | `AD\|CONSELHO\|RODA\|SIGNOS\|V1\|20261015` | `roda-v1-feed` | `roda-v1-story` | a roda dos 12 signos faz a pessoa procurar o próprio signo |

**Se B1 não cair a tempo:** trocar o anúncio 3 pela abertura `moldura-mentora` e publicar só ele, até a correção do quiz. Os outros seis chamam terapeutas e cartomantes.

## 4. Matemática e o que esperar (`n=0` para cadastro otimizado)

| Item | Valor | Base |
|---|---|---|
| Custo por cadastro hoje | ~R$ 16 | campanha otimizando **compra** (§1); não é a mesma otimização |
| **Custo por cadastro alvo** | **≤ R$ 8** | hipótese: otimizar para o próprio cadastro deve ao menos dobrar a eficiência. Calibrar no dia 7 |
| Cadastros esperados, 17 dias | **25 a 40** a R$ 8–14 | R$ 340 ÷ custo |
| Volume por semana | ~15 a 17 | **abaixo dos 30–50 que estabilizam o aprendizado** (método §5.3): janela de decisão dobrada, ver abaixo |

**O que esta campanha compra:** gente do autoconhecimento no grupo, que é o plano do Gui (conselhos no grupo → conversa no privado → oferta). **Venda não é medida aqui:** o Gui ainda não descreveu o que oferece no privado. Sem isso, o cadastro é o resultado contratado.

**Regras de decisão** (método §7.3, prazos dobrados por verba pequena):
- não mexer nas primeiras **72 horas**;
- anúncio com **R$ 24 gastos (3× o alvo) e zero cadastro**: pausar;
- anúncio com **CTR de link < 0,5% depois de 2 mil impressões**: pausar;
- conjunto com **custo por cadastro > R$ 24 por 3 dias seguidos**: revisar a página do quiz antes do criativo (ordem de diagnóstico, §7.4);
- uma mudança por vez, e toda mudança no `LOG-DECISOES.md`.

## 5. Verba total e as campanhas que já rodam (decisão do Victor)

Somando a campanha nova às duas ativas: **R$ 47/dia**, acima dos R$ 30 aprovados.

**Recomendação: pausar `GA|QUIZ|PERMISSAO|VENDAS|CBO|20261005` e levar a verba para a campanha nova.** Ela gastou R$ 160,28 para 1 compra, otimiza para um evento com volume baixo demais para aprender a R$ 15/dia (método §5.3) e leva ao quiz original, sem o grupo. Com a pausa, o total fica em **R$ 32/dia** (R$ 12 do reel + R$ 20 da nova).

**As duas campanhas ativas estão fora da regra de posicionamento.** Corrigir reinicia o aprendizado:
- **reel de engajamento:** foi pedido pelo Gui (execução dirigida). Recomendação: corrigir na próxima edição, ou deixar terminar como está;
- **quiz de vendas:** some com a pausa recomendada.

## 6. Checklist de subida

- ☐ B1 resolvido (quiz manda as quatro opções ao grupo), **ou** só a abertura "Mentora," publicada
- ☐ B2: conversão personalizada `Lead quiz grupo` criada e selecionada no conjunto
- ☐ Conjunto com **só Instagram Stories + Instagram Reels**
- ☐ Cada anúncio: 4:5 na mídia principal, 9:16 em Stories e Reels, prévias de Stories e Reels conferidas sem corte de texto
- ☐ Melhorias automáticas de criativo desligadas
- ☐ UTM em todas as URLs
- ☐ Data de fim 31/10 23h59
- ☐ Decisão sobre a campanha de vendas do quiz (pausar ou manter) registrada no `LOG-DECISOES.md`
- ☐ Teste de ponta a ponta: clicar no anúncio publicado, responder como Terapeuta, chegar ao grupo, conferir `Lead` e `JoinGroup` no Events Manager

---
*Base: leitura da conta e do Pixel via conector Meta em 14/10/2026 · `CRIATIVO.md` · `METODO-TRAFEGO-PAGO.md` §5.2–§7.4 · config publicada de `/permissao-mentoras/`.*
