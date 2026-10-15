# PLANEJAMENTO DE COPY E COMPOSIÇÃO: site continuumsystems.com.br, v2

> **Tipo:** planejamento de peça (etapa 1 do circuito de página, `00-core/roteador/ARVORE-ESCRITA.md` §6) · **Criado em:** 15/10/2026 · **Alçada:** Victor
> **Estado:** 🟡 planejamento (revisto em 15/10: headline nova no §5, design mantido no §1, formulário na D8 no §6-bis). **A iteração não começou:** a cópia em `pagina-iteracao/` está idêntica à página que está no ar.
> **Peça nossa:** voz `10-skills/voz-victor.skill.md`, ICP em `30-comercial/ICP.md`.
> **Fontes que governam:** `30-comercial/aquisicao-continuum/NARRATIVA-CENTRAL-CONTINUUM-2026-09-07.md` · `OFERTA-MESTRE-CONTINUUM-2026-09-07.md` · `PILARES-DE-CONTEUDO-2026-10-07.md` · `PECA-DR-02-ANOTA-A-ORDEM-2026-09-20.md` · `30-comercial/ICP.md` §2 e §4-bis · `30-comercial/oferta.md` §3 · `30-comercial/PITCH-E-BIO-VICTOR.md` · `30-comercial/credenciais-prova.md` · `00-core/POLITICAS-DE-DECISAO.md` §5.

---

## 0. Núcleo executivo

| | |
|---|---|
| **Problema central** | O site vende a tese antiga, um "sistema de receita e operação com IA" para empresas de serviço, com SDR AI e dashboards. A casa já não vende isso como porta de entrada. Ela vende **a ordem**: cliente, promessa, oferta, preço e mecanismo decididos antes do volume, com o **Mapa da Ordem** como entrada paga. |
| **Gargalo dominante** | A página oferece **consultoria gratuita com plano de ação**. Isso fere a régua 8 da aquisição (*"diagnóstico gratuito é o erro estrutural mais caro da casa"*, `aquisicao-continuum/README.md` §3) e dá de graça o produto de R$ 1.997. |
| **Maior alavanca** | Fazer o site converter a **checagem de quem chegou por indicação** em conversa no WhatsApp que já começa com um dado da operação da pessoa: o resultado do teste das cinco perguntas, feito na própria página. |
| **O que NÃO será feito agora** | página nova por produto · blog e SEO · reescrever a partir do código-fonte do Lovable · vender Continuum OS ou SDR AI na página · publicar preço da Assessoria (decisão aberta A/B) · tráfego pago para o site. |

**Validação financeira (§9, resultado antes de construção).** **Qual dinheiro:** o Mapa da Ordem · Núcleo, R$ 1.997, abatido no setup da Assessoria se ela fechar em até 15 dias. **Quantos passos até o pagamento:** página → formulário na D8 → WhatsApp → call de 45 min → Pix do Mapa (4). *(A captura entrou em 15/10, por decisão do Victor, §6-bis: soma um passo e, em troca, o contato fica registrado mesmo quando a pessoa não abre o WhatsApp.)* **Em quantos dias:** o Mapa é entregue em 7 dias corridos. **A fronteira:** o site não gera demanda, porque o canal é indicação (`ICP.md` §2.1) e o link da bio vai direto para o WhatsApp (`PITCH-E-BIO-VICTOR.md` §2). O trabalho do site é **não perder quem foi indicado e veio conferir**, e tirar a consultoria grátis de circulação. Economia da página: `n=0`.

---

## 1. Ponto de partida

| | |
|---|---|
| **No ar** | `continuumsystems.com.br` na Hostinger, com um iframe para `continuum-ai-systems.vercel.app` |
| **Arquivos da página** | `index.html` (57 KB, scripts inline) + `assets/styles-7pl-t798.css`. Nenhum outro arquivo é carregado |
| **Original intocado** | `01 - Continuum\24 - Codex\Página de Vendas CONTINUUM\Continuum AI Systems\continuumsystems.com.br\continuum-growth-engine.lovable.app\` |
| **Cópia de trabalho** | `30-comercial/site-continuum/pagina-iteracao/` (idêntica à do ar, conferida com `cmp` em 15/10/2026) |
| **Destinos atuais** | CTA → Typeform `form.typeform.com/to/mggPWs1W` · GTM `GTM-KC7B45P` |
| **Destino novo** (15/10) | CTA → **formulário visível na D8** (nome, WhatsApp, e-mail → planilha via Apps Script) → **obrigado no mesmo cartão**, com o botão do WhatsApp. O Typeform sai. Detalhe no §6-bis |
| 🔴 **Restrição técnica** | o CSS é Tailwind **compilado**: só funcionam as classes que já estão no arquivo. **Não reconstruir pelo Lovable:** o código-fonte em `Downloads\continuum-growth-engine-main\` é mais antigo que a página do ar e não bate com ela |
| 🔴 **UI/UX mantido** (decisão do Victor, 15/10) | **o design atual fica:** paleta, tipografia, cartões, espaçamento, primeira dobra centralizada e H1 em duas linhas (a primeira em branco sólido, a segunda em degradê `from-white to-white/60`). **O que muda é a copy e a ordem dos blocos, não a linguagem visual.** Cada bloco novo é montado com um componente que já existe na página e com as classes já compiladas. A folha própria (`assets/continuum-v2.css`) fica restrita ao que não existe hoje: as caixas do teste, os campos do formulário e o estado de obrigado, sempre com os mesmos tokens |

---

## 2. Diagnóstico: a página atual contra as diretrizes vigentes

| # | A página diz | A casa decidiu | Fonte |
|---:|---|---|---|
| 1 | Categoria: "Sistema de Receita e Operação com IA", RevOps | mecanismo da marca: **A Ordem da Receita** · *"volume é a última camada, não é a primeira"* | `NARRATIVA-CENTRAL` §4 · `PITCH-E-BIO` §6 (divergência já registrada) |
| 2 | Público: "empresas de serviço que perdem receita entre áreas" | expert, mentor ou terapeuta **que já vende**, tem autoridade e não tem estrutura em volta | `ICP.md` §2 · `OFERTA-MESTRE` §2.2 (os quatro retratos) |
| 3 | Consultoria **gratuita** de 45 a 60 min com diagnóstico e plano | Mapa da Ordem **pago**, R$ 1.997, abatível · a call de 45 min é conversa de encaixe, não entrega diagnóstico | `README` aquisição §3 régua 8 · `oferta.md` §3 Degrau 0 |
| 4 | CTA: aplicação no Typeform | captura curta (3 campos) na própria página e, em seguida, conversa no WhatsApp que começa com o dado do teste (§1-bis dos pilares) | `PILARES-DE-CONTEUDO` §1-bis · `PITCH-E-BIO` §1 · decisão do Victor 15/10 (§6-bis) |
| 5 | Pilha: SDR AI, dashboards, BI, pipeline, onboarding orquestrado | o que se entrega são as **cinco camadas com critério de pronto**. Continuum OS e SDR AI são o degrau 2, por gatilho de resultado | `OFERTA-MESTRE` §3 e §4.2 |
| 6 | *"Nesta versão, não vamos usar prova social inventada"* (metatexto) | prova de raciocínio, prova de conduta e a credencial, sem comentário sobre o que falta | `OFERTA-MESTRE` §7.2 |
| 7 | Sem garantia | **garantia de execução, sempre colada à fronteira** (*"eu não garanto faturamento"*) | `NARRATIVA-CENTRAL` §8 · `OFERTA-MESTRE` §5 |
| 8 | Narrador "a Continuum", em terceira pessoa | primeira pessoa do Victor (*"eu entro na sua operação e a gente monta, junto"*) | `OFERTA-MESTRE` §1 · `CLAUDE.md` §1 (operação de uma pessoa) |
| 9 | Menu de navegação com 5 links e dois CTAs na primeira dobra | uma porta só por bloco, sem saída lateral | gerador, D0 e D1 |
| 10 | 11 seções, mais de 12 telas | ticket alto, tráfego morno: **7 a 9 telas** | gerador, módulo 00 §0.2 |
| 11 | Seis "dores" que listam operação (timing, BI, IA sem processo) | os sinais são **frases escutadas em call**, com fonte | `PILARES-DE-CONTEUDO` P-ICP-02 · `METODO-QUATRO-PILARES` §Pilar 1 |

**Conclusão:** não é ajuste de texto, é troca de oferta, e o circuito encolhe para **etapas 1 parcial, 3 e 5** (`ARVORE-ESCRITA.md` §6, "trocar a oferta"). Entra a etapa 2 também, porque a composição muda: saem blocos, entra o teste e entra a foto.

---

## 3. Classificação (os 4 eixos)

```
TICKET:            alto (Assessoria R$ 27k em 6 meses) · porta média (Mapa R$ 1.997)
                   -> a página vende a CONVERSA. Preço do Mapa visível; Assessoria sem preço
                   -> prova mínima: nível 3 (demonstração) + quem conduz
MODELO:            serviço feito com o cliente (construção guiada + operação semanal)
                   -> escassez real: data de início. Duas construções colidem e o que muda é a data, não o preço
ATO DE CONVERSÃO:  cadastro curto (nome, WhatsApp, e-mail) -> conversa por mensagem (WhatsApp, texto
                   pré-preenchido com o nome e o resultado do teste)
                   -> mecânica da oferta: o que a conversa resolve, quanto dura, o que vem depois
                   -> o cadastro é passagem, não aplicação: 3 campos, sem pergunta de qualificação
TEMPERATURA:       morno a quente (indicação que veio conferir, prospect que recebeu o link, busca pelo nome)
                   -> comprimento alvo: 7 a 9 telas
CONSCIÊNCIA:       sabe que tem problema e acha que ele é aquisição ("preciso de tráfego/copy/volume")
                   -> a primeira dobra começa invertendo a crença 1: "meu problema pode não ser aquisição"
TOM DE MARCA:      par, direto, sem hype, autoridade por raciocínio
                   -> picos poucos e altos: D4 (a inversão da ordem) e D8 (a decisão)
DESVIOS DA ORDEM CANÔNICA: D6 (prova) entra ANTES de D5 (pilha), na forma de autoteste
                   -> motivo: a prova mais forte disponível é a demonstração do raciocínio, e ela
                      precisa quitar o débito do mecanismo (D4) na dobra vizinha. Sem caso numérico
                      de Assessoria, a autoridade de quem conduz desce para junto da oferta (regra D6)
```

---

## 4. Brief de 9 campos

| # | Campo | Conteúdo | Tipo e estado |
|---:|---|---|---|
| 1 | **Oferta** | Herói: **Mapa da Ordem · Núcleo**, 5 dimensões (pra quem, pra quê, o quê e por quanto, por que em você, e o Pivô de Conversão), 7 dias, devolutiva de 45 min, R$ 1.997, abatido no setup da Assessoria em até 15 dias. Depois: Assessoria Estratégica, 6 meses, as cinco camadas com critério de pronto, garantia de execução. A versão Operação (R$ 5.000+) e o Alicerce ficam para a conversa | fato ✅ (`POLITICAS` §5) · **estrutura decidida:** um herói só (gerador §0.3, serviço + menu de pacotes) · 🟡 **n=0: nenhum Mapa rodou até hoje** |
| 2 | **ICP e léxico** | Recorte da página: expert, mentor ou terapeuta que já vende, com demanda chegando e nada estruturado em volta (ICP A). Léxico disponível com fonte: os cinco sinais (frases de call) e as frases dos quatro retratos | fato ✅ com fonte · 🟡 **não existe arquivo de léxico do nosso ICP** (`PILARES` P-ICP-01 já registrou). Não bloqueia: o espelho usa frases com fonte apontada |
| 3 | **Promessa** | Estado de chegada: *saber quem compra, o que se vende, por quanto, com qual história e por qual caminho, construído e não só decidido* | estrutura, decidida (`NARRATIVA-CENTRAL` §8) |
| 4 | **Mecanismo** | **A Ordem da Receita**, nas cinco perguntas públicas (pra quem → pra quê → o quê → por quanto → por que em você), e só depois o caminho e o volume | estrutura, decidida. ⚠️ divergência sinalizada no §10 |
| 5 | **Provas** | (a) leitura das três contas que pediram tráfego, sem nome e sem número de resultado · (b) 175 abordagens frias e zero vendas contra 5 de 5 por indicação, caso nosso · (c) **mais de 4 anos de gestão de tráfego pago** · (d) garantia de execução · (e) escopo com critério de pronto · (f) reação da Jéssica, **só com autorização escrita** | fato ✅ (a–e) · 🔴 (f) pendente. **O buraco de caso numérico de Assessoria vira estratégia:** prova de raciocínio em forma de teste |
| 6 | **Origem do tráfego** | indicação conferindo · link enviado em conversa ou proposta · busca pelo nome. O link da bio vai para o WhatsApp, não para o site | fato ✅ · **estrutura:** a página fala o vocabulário do perfil (as cinco perguntas, "a ordem"), para quem viu um Reels se reconhecer |
| 7 | **Classificação** | §3 | estrutura, decidida |
| 8 | **Voz** | `voz-victor` v2.0, primeira pessoa, tom de par. Glossário público da marca (`NARRATIVA-CENTRAL` §11): "ICP" sai como *"quem é o seu cliente, e quem não é"* | fato, extraído ✅ |
| 9 | **Destino do clique** | formulário na D8 → obrigado no mesmo cartão → WhatsApp com mensagem pré-preenchida | 🔴 **lacuna de fato:** número, prazo de resposta, planilha de destino (§9). **Estrutura decidida:** o ato é conversa. O cadastro é passagem de 3 campos, sem aplicação (§6-bis) |

---

## 5. Headline: direção e candidatas

**Por que a atual sai inteira.** *"Sua empresa não precisa só de mais leads. Precisa de um sistema para crescer sem aumentar o caos"* tem três problemas. É um contraste binário de manual. Fala com "empresa" e não com quem vende o próprio trabalho. E promete "sistema", que é a categoria abandonada. A nova não pode ecoar "leads", "sistema", "caos" nem "IA".

### 5.1 As réguas que o título tem que passar (todas as fontes da casa)

| # | Régua | Fonte |
|---:|---|---|
| R1 | **Promessa de estado**, específica, na língua do cliente, nunca o nome do produto. Teste dos 5 segundos: o que é, para quem, o que ganha, próximo passo | gerador `02-dobras-canonicas` D1 · `06-gate` |
| R2 | **Título encontrado vence título inventado:** todo H1 aponta a origem, uma fala real lapidada | copy `01-arqueologia` · SKILL, regras de decisão |
| R3 | **O estágio de consciência decide a primeira linha.** Nosso leitor é consciente do problema com a causa errada ("preciso de tráfego"), então a primeira linha é **espelho, com as palavras dele** | copy `00-diagnostico`, matriz de abertura |
| R4 | **Sofisticação:** em mercado cansado, não se promete mais alto, se promete diferente. Reenquadre no degrau certo | copy `00-diagnostico` §3 · `08-reenquadre` Parte 3 |
| R5 | **Reenquadre honesto:** passa nos testes da inversão, da verdade e do custo (admitir B custa algo a quem escreve) | `08-reenquadre` Partes 2 e 6 |
| R6 | **Promessa no positivo**, com evidência, específica e na identidade de quem lê. Nunca o que a pessoa deixa de sentir | `geracao-de-resultados` · `METODO-QUATRO-PILARES` Pilar 2, sintomas |
| R7 | **Teto:** sem caso documentado, vende-se a lógica, não o resultado. A frase vai até o que o serviço faz | copy `03-escrita`, anúncios |
| R8 | **Proibições:** sem superlativo, sem promessa absoluta, sem enumeração decorativa, sem contraste binário de manual | gerador `06-gate` · copy `04-gate-antislop` |
| R9 | **O fecho ecoa o título uma oitava acima**, com palavra literal em comum | copy `02-regua` traço 11 |
| R10 | **Cabe no desenho que fica:** duas linhas, a primeira sólida (cerca de 40 caracteres) e a segunda em degradê (cerca de 55). A linha 1 abre e a linha 2 vira, o que já é o E/Mas do pivô | §1, UI/UX mantido |

### 5.2 Por que as candidatas anteriores saem

| Candidata | Onde reprova |
|---|---|
| A · *"Cliente, oferta, preço e caminho decididos. Aí sim, mais gente."* | **R2:** inventada, sem fala de origem · **R8:** enumeração de quatro substantivos · **R1:** no teste dos 5 segundos não se sabe o que é, nem quem decide · **R6:** termina prometendo "mais gente", que é exatamente a camada que a marca diz vir por último |
| B · *"Três clientes me chamaram para resolver tráfego…"* | **R4:** é o degrau 2 do reenquadre ("o problema não é tráfego"), e esse território está ocupado: cerca de **5.700 anúncios ativos no Brasil** com esses termos (Biblioteca de Anúncios, 15/10/2026; a busca é por palavras e não pela frase exata, então é sinal e não medição fina) · **R1:** fala de nós, não do estado de quem lê. **Continua como a abertura da D2**, onde ela é prova e não promessa |
| C · *"Volume é a última camada…"* | **R3:** abre no mecanismo, que é a primeira linha de quem já tem consciência da solução, e o nosso leitor ainda não tem |

### 5.3 A nova headline

> **Linha 1 (branco sólido):** Chega gente, mas não é o seu cliente.
> **Linha 2 (degradê):** Antes do próximo anúncio, a gente decide quem compra de você e por quanto.

| Régua | Como passa |
|---|---|
| R2 · encontrado | a linha 1 é o **sinal 1** das calls, *"chega gente, mas não é o meu cliente"*, lapidado para a segunda pessoa (`METODO-QUATRO-PILARES` §Pilar 1, sintomas · `PILARES-DE-CONTEUDO` P-ICP-02). ⚠️ **Grau de procedência:** o método registra a frase como escutada em call, **sem ID nem timestamp**. Confirmar em qual call ela apareceu e anotar a origem antes da etapa 5 |
| R3 · espelho | a pessoa se lê na primeira linha antes de qualquer tese |
| R4 · degrau | **degrau 3, por concessão:** a página **não briga com o tráfego**, ele está na frase ("antes do *próximo* anúncio"). O que entra é a **ordem**, que é a lente própria da casa. Ninguém que vende anúncio consegue dizer "antes do anúncio" sem perder a venda |
| R5 · custo | quem escreve é gestor de tráfego há mais de 4 anos e manda segurar o anúncio. Admitir isso custa a ele, e é por isso que a frase é crível |
| R6 · positivo | a promessa é um estado decidido ("quem compra de você e por quanto"), não o alívio de uma dor |
| R7 · teto | promete o que o serviço faz (decidir junto), não faturamento |
| R1 · 5 segundos | para quem: sobretítulo · o que ganha: cliente certo e preço decididos · o que é: a gente decide junto (serviço feito com você) · próximo passo: CTA |
| R10 · desenho | linha 1 com 37 caracteres e linha 2 com 75. **A linha 2 passa da medida.** Versão curta para o mesmo lugar, a validar no celular: *"Antes do próximo anúncio, decidimos quem compra e por quanto."* (61) |

**O que a frase escolhe deixar de fora, de propósito:** promessa, mecanismo, narrativa e caminho, ou seja, as outras três perguntas. Título com as cinco vira a enumeração da candidata A. Quem carrega o resto é o subtítulo, *"cinco perguntas, nesta ordem"*.

**Fecho (D10), uma oitava acima, com eco literal de "chega":** *"Agora, quem chega é o seu cliente."*

**Sobretítulo:** *Assessoria para quem já vende o próprio trabalho* (pertencimento e formato, R1).

**Subtítulo (direção, não texto final):** reconhece (*quem me chama pedindo tráfego quase sempre tem uma decisão aberta antes dele*) · aponta o como (*cinco perguntas, nesta ordem, e o anúncio por último*) · cita o ofício em meia linha (*quatro anos de gestão de tráfego*, que quita o débito "o problema não é tráfego" já na D1, §8).

**Alternativa, se você preferir prometer dinheiro e não decisão:** linha 1 igual · linha 2 *"Antes de pagar por mais gente, eu acho o dinheiro que já está parado na sua operação."* (crença 5, `NARRATIVA-CENTRAL` §5, a única promessa honesta de velocidade da casa). **Por que não é a recomendada:** a linha 2 abre um segundo assunto que não responde à linha 1, e "já está parado" pressupõe algo que, com `n=0` de Mapa, ainda não medimos em toda conta.

**CTA da D1:** verbo **Conversar** (o mesmo em todas as portas). Microcopy: *uma conversa de 45 minutos para ver qual das cinco perguntas está aberta no seu negócio. Não é diagnóstico grátis, e eu digo isso antes.* Sinal de esforço: *Mapa da Ordem em 7 dias*.

---

## 6. Esqueleto e composição, dobra a dobra

Os títulos abaixo são **títulos-marcador** (intenção do bloco). O texto final é da etapa 3.

| Dobra | Pergunta | Título-marcador e conteúdo | Procedência | Composição | Altura |
|---|---|---|---|---|---|
| **D0** | — | Marca **Continuum** à esquerda, um único link **Conversar** à direita. Sai o menu de 5 itens | gerador D0 | barra fina, fixa, sem fundo de vidro | — |
| **D1** | 1, 2, 3, 12 | Sobretítulo + **H1 do §5.3** + subtítulo + CTA **Conversar** + microcopy + sinal de esforço | §5 | **o desenho atual, intacto:** centralizado, H1 em duas linhas (sólida e degradê), um CTA só. ~~60/40 com foto da folha~~ *(sai: UI/UX mantido, 15/10)* | 90–100vh |
| **D2** | 4a | **"Três pediram tráfego."** Três cartões *o que ela pediu × o que faltava* (copy e tráfego × quatro preços para a mesma entrega · volume × agenda cheia e o método sem nome · funil × cliente indefinido e produto sem nome). Depois os **cinco sinais** em frases de call (*"chega gente, mas não é o meu cliente"*, *"eles acham caro"*…) | `NARRATIVA-CENTRAL` §1 · `PILARES` P-ICP-02 | 3 cartões lado a lado (empilhados no mobile), lista de 5 abaixo em tipografia de citação | 70–90vh |
| **D3** | 4b | **"Com uma pergunta aberta, o anúncio aprende errado."** Cada real ensina a plataforma a trazer mais gente parecida com quem já não comprou · desconto ensina a base a esperar · *"você está pagando para mais gente descobrir que a sua oferta não está pronta"*. Fecha com pergunta reflexiva | `PILARES` P-ICP-02 e P-OFE-01 · `NARRATIVA-CENTRAL` §2 | bloco curto, uma coluna, fundo um tom mais claro. Sem ícone | 50–60vh |
| **D4** | 5, 6 | **Ponte:** quem fez o tráfego provavelmente fez bem, a camada de cima já estava aberta quando ele entrou (não atacar profissional). **Mecanismo nomeado: A Ordem da Receita.** As cinco perguntas na ordem, cada uma com uma linha. **A inversão em destaque:** o "pra quê" vem antes do "o quê". Fecho: *só então o caminho até o pagamento, e por último o volume* | `NARRATIVA-CENTRAL` §2 e §4 · `PECA-DR-02` §1 e §2 | **o pico 1 da página:** escada vertical numerada de 1 a 5, com "volume" fora da escada, em cinza, no fim. A seta da inversão 2↔3 é o único elemento de cor | 100–120vh |
| **D6** (sobe) | 8, 9 | **"Faz o teste agora."** As cinco perguntas em sim ou não, *"mais ou menos conta como não"*. O leitor conta os nãos. **Porta:** *me manda quantos deram não no WhatsApp; eu te devolvo a pergunta que vem depois* | `PECA-DR-02` §2 (CTA) · `PILARES` §1-bis | 5 linhas com caixas de marcar **funcionais** (JS inline), no estilo dos cartões que já existem. O botão rola até o formulário da D8 levando o número de nãos, que vai para a planilha e para a mensagem do WhatsApp | 70–90vh |
| **D5** | 7 | **"O que você leva."** (1) **Mapa da Ordem:** as cinco dimensões, a ordem de execução e **a primeira alavanca que já está paga** (preço, base, prova ou audiência parados) · (2) **Se seguirmos juntos:** as cinco camadas, cada uma com o **"pronto quando"** (ex.: *pronto quando a sua equipe qualifica um lead sozinha com o documento*) | `oferta.md` §3 · `OFERTA-MESTRE` §3 e §4.2 · `NARRATIVA-CENTRAL` §5 | duas colunas: Mapa (aceso) e Assessoria (contexto). Tabela "camada · entregável · pronto quando" em linhas finas | 70–90vh |
| **D7** | 9 | **É para você se:** já vende e tem demanda chegando · vende pelo WhatsApp · decide sozinho(a) ou com quem assina · aceita revisar o que vende antes de comprar mais gente. **Talvez ainda não seja se:** quer só tráfego (e a recusa vem com a razão) · procura garantia de faturamento · ainda não vende (para isso existe outro caminho, o Alicerce, e a conversa é outra) | `ICP.md` §4 e §4-bis · `OFERTA-MESTRE` §2.3 | duas colunas, ✓ e ×, respiro | 40–60vh |
| **D8** | 10, 11 | Recap em 1 linha · **Mapa da Ordem · R$ 1.997**, abatido integralmente no setup se a Assessoria fechar em até 15 dias · a Assessoria tem o valor escrito depois do Mapa, **com o breakeven calculado no número do seu negócio** · restrição real: *poucas construções ao mesmo tempo; quando colide, muda a data de início, nunca o preço* · **o formulário, visível, aqui dentro** (nome, WhatsApp, e-mail, botão **Conversar**, §6-bis) · **garantia colada:** *se uma entrega marcada como minha atrasar por minha causa, você não paga aquele mês. Eu não garanto faturamento, porque não controlo isso* · **quem conduz:** foto real, *mais de 4 anos de gestão de tráfego pago*, razão pessoal em 1 linha | `POLITICAS` §5 · `OFERTA-MESTRE` §4.2, §5, §6, §10 · `credenciais-prova.md` §0 | **o clímax de contraste:** único cartão claro sobre o fundo escuro. Foto e credencial em faixa logo abaixo do botão | 100–120vh |
| **D9** | 11 | 7 objeções, na voz cética: *é caro* · *quanto tempo até dar retorno* · *já tenho quem faz meu tráfego* · *você garante resultado* · *já contratei gente que não entregou* · *por que pagar pelo diagnóstico* · *quero começar só pelo tráfego* | `OFERTA-MESTRE` §8 · régua 8 | acordeão fechado | 60–80vh |
| **D10** | 12 | Eco do título uma oitava acima (*"Agora, quem chega é o seu cliente."*, §5.3), 2 linhas de convite, CTA **Conversar** (rola até o formulário), lembrete da data de início | §5.3 | centralizado, sereno | 50–70vh |
| **Rodapé** | — | © 2026 Continuum · Victor Senna · contato · política de privacidade (há GTM) | LGPD | uma linha | — |

**Total: 8 a 9 telas** (a atual passa de 12). **Saem inteiros:** "O custo invisível" (absorvido pela D3) · os 6 cards de dor operacional · "Pilha de valor" de SDR AI e BI · "Demonstração de processo" com o metatexto · "Como começa a Assessoria" (vira uma linha da D8) · o Typeform.

---

## 6-bis. Fluxo de conversão: telas 2 e 3 (decisão do Victor, 15/10/2026)

**O pedido:** sai o Typeform. Entra um cadastro (nome, WhatsApp e e-mail) gravado numa planilha por script, seguido de um obrigado com o botão do WhatsApp. **Sem pop-up e sem carregar página nova.** ~~Cadastro em tela 2 oculta, aberta como quiz~~ *(substituído no mesmo dia pelo Victor)*: **o formulário fica visível na própria página, como a dobra da oferta (D8).**

**Como funciona:** um `index.html` só. As portas **Conversar** da D0, D1 e D10 **rolam suavemente até o formulário da D8**, e o botão do teste (D6) faz o mesmo, levando o número de nãos.

| Estado | O que aparece | Comportamento |
|---|---|---|
| **Formulário (D8)** | dentro do cartão da oferta, logo depois do preço e da restrição de data: **nome · WhatsApp · e-mail** · botão **Conversar** · garantia colada embaixo · linha de LGPD com link para a política · se a pessoa fez o teste: *"você marcou {n} não. Isso vai junto"* | sempre visível. Ao chegar pela rolagem, o foco vai para o campo nome. Campos e botão seguem os tokens do cartão atual |
| **Obrigado (no mesmo lugar)** | *"Recebi, {nome}."* · o que acontece agora (a conversa, os 45 minutos, o prazo de resposta) · botão **Abrir conversa no WhatsApp** | **o cartão do formulário troca de estado ali mesmo**, numa transição de até 250 ms, sem carregar página. O botão abre `wa.me/<número>?text=` com o texto pronto: *"Oi, Victor. Sou {nome}. Fiz o teste das cinco perguntas e deram {n} não."* (sem o teste: *"Vim pelo site e quero conversar."*) |

**Por que o formulário à vista é melhor que a tela oculta, e a decisão fica registrada assim:** a pessoa vê o tamanho do pedido (três campos) antes de clicar, então não há surpresa no meio do caminho. O formulário fica colado no preço e na garantia, que são as duas objeções do momento da decisão. E a D8, que é o clímax visual da página, passa a ser também o lugar onde se age.

**Regras de construção (decisão nossa, Regra Nº 0):**
- **Três campos, nenhum a mais.** Pergunta de qualificação fica para a conversa. Cada campo extra custa conversão, e o teste da D6 já qualifica.
- **WhatsApp com máscara BR** (`(11) 9 9999-9999`), teclado numérico (`inputmode="tel"`) e validação de 10 ou 11 dígitos. E-mail com `type="email"`. Erro aparece embaixo do campo, nunca em alerta.
- **O obrigado não espera a planilha.** O envio sai em segundo plano (`fetch` com `text/plain`, sem preflight de CORS, e `sendBeacon` como reserva), e o obrigado aparece na hora. Planilha fora do ar **nunca** bloqueia o WhatsApp, porque o WhatsApp é a conversão de verdade.
- **Campos ocultos que vão para a planilha:** data e hora · origem do clique · nãos do teste (0–5, ou vazio) · `utm_source`, `utm_medium`, `utm_campaign` e `fbclid`/`gclid`, se houver · `document.referrer` · se clicou no WhatsApp (segundo envio, coluna `whatsapp_click`).
- **Medição:** se o GTM continuar, cada passo vira um evento (`form_visto`, `form_iniciado`, `lead_enviado`, `whatsapp_click`). As duas quedas que importam: **formulário iniciado → envio** e **obrigado → WhatsApp**. Se a primeira passar de 50%, o cadastro está custando caro demais e a decisão volta à mesa com o dado.
- **Planilha:** Google Sheets com Apps Script `doPost`, publicado como app da web. Eu escrevo o script e as colunas. **A implantação é sua**, na conta Google que vai guardar os leads, e devolve a URL que entra na página.
- 🔴 **LGPD:** com dado pessoal sendo coletado, **a política de privacidade passa a ser obrigatória, com ou sem GTM** (antes ela dependia só do GTM, §9 item 6). Ela diz o que se guarda, para quê (contato sobre a conversa) e como pedir a exclusão.

**O que muda no resto do plano:**
- O teste da D6 passa a mandar o número de nãos para o formulário da D8, e não direto para o WhatsApp.
- A curva de portas (§7) continua igual: as portas da D1, D6 e D10 levam ao formulário, e a D8 é a própria porta.
- O mapa de quitação (§8) ganha um risco: **formulário quebrado no celular zera as portas.** O teste em celular real é condição de saída da etapa 4.

---

## 7. Curva de tensão e portas

| Dobra | D1 | D2 | D3 | D4 | D6 | D5 | D7 | D8 | D9 | D10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Voltagem (0–10) | 6 | 7 | 8 | **9** | 7 | 6 | 5 | **10** | 5 | 6 |
| Porta de CTA | ✅ | | | | ✅ | | | ✅ | | ✅ |

Nenhum trecho passa de 2 telas sem porta (D2–D4 somam cerca de 2,3 telas: a porta da D6 entra logo no começo do bloco). **Degrau antes da virada:** D3 sobe para 8 antes do 9 da D4. Clímax único, coincidente com a decisão (D8).

---

## 8. Extrato de crença e mapa de quitação

| Débito aberto | Onde abre | Onde quita | Distância |
|---|---|---|---|
| "decididos" é possível em pouco tempo | D1 | D5 (7 dias, critério de pronto) e D8 (data de início) | dentro do limite com a D6 subida (mesma tela de rolagem) ⚠️ conferir na etapa 4 |
| o problema não é tráfego | D1 / D2 | D2 (três contas) + D8 (quem fala faz tráfego há 4 anos) | 0 e 6 · a credencial chega tarde: **subtítulo da D1 cita o ofício em meia linha** |
| a ordem importa | D4 | D6 (o leitor vê a própria pergunta aberta) | 1 |
| vale pagar R$ 1.997 | D8 | D5 (primeira alavanca já paga) + abatimento | 1 |
| e se não entregar | D8 | garantia colada ao botão | 0 |

**Saldo na fronteira da D8: positivo**, desde que o teste da D6 funcione no celular. Teste quebrado zera a principal quitação.

---

## 9. Lacunas de FATO: perguntas ao Victor

1. **Destino:** número do WhatsApp que recebe a conversa, e se você quer outro destino (o pedido falou em "mudar destino").
2. **Prazo de resposta** que você cumpre (vai escrito na microcopy).
3. **Foto real sua** para a D8. ~~Foto da folha para a D1~~ *(sai: a D1 mantém o desenho atual)*.
4. **Jéssica:** existe autorização escrita para a frase *"conseguiu traduzir tudo que tentei nesses anos todos"*? Sem ela, a frase não entra.
5. **Marca exibida:** manter "Continuum AI Systems" no topo ou exibir só "Continuum"? "AI Systems" puxa a tese antiga. Recomendo "Continuum" no topo e o nome completo só no rodapé, mas o nome é identidade e a decisão é sua.
6. **GTM `GTM-KC7B45P`:** continua? *(A política de privacidade entra de qualquer forma, por causa do cadastro, §6-bis.)*
7. **Hostinger:** você sobe pelo gerenciador de arquivos ou me passa o acesso FTP.
8. **Planilha dos leads:** qual conta Google guarda os leads. Eu entrego o Apps Script e as colunas, você implanta e me devolve a URL do app da web.
9. **Nome do responsável na política de privacidade:** Victor Senna, pessoa física (não há CNPJ), e o e-mail de contato para pedido de exclusão.

---

## 10. Divergências sinalizadas (`CLAUDE.md` §3)

| Divergência | Leitura adotada na página |
|---|---|
| `NARRATIVA-CENTRAL` §4 lista cinco **camadas** (cliente, oferta, narrativa, caminho, volume); `PECA-DR-02` fixa cinco **perguntas** (pra quem, pra quê, o quê, por quanto, por que em você) e declara que *"esta é a lista pública canônica"* | vale a lista das perguntas (20/09, mais recente, é a que o perfil usa). O nome **A Ordem da Receita** continua. Caminho e volume ficam depois da escada. **Corrigir a narrativa central numa tarefa de CASA** |
| `ICP.md` §2: faturamento R$ 30k–150k · `OFERTA-MESTRE` §2.1: R$ 15k–150k (decisão aberta nº 5) | a página não cita faixa. A qualificação é por situação ("já vende, tem demanda") |
| `oferta.md` §1 ainda promete RevOps | a página segue a narrativa. O alinhamento do `oferta.md` continua pendente (`PITCH-E-BIO` §6) |
| 🔴 **REGRA Nº 2:** nenhuma referência escalada declarada para a oferta "diagnóstico pago como porta para assessoria" nem para a arquitetura da página | **gate antes da etapa 3:** buscar 1 a 3 referências escaladas (mesmo nicho Brasil primeiro) pela árvore LEITURA, com estado, sinal e fonte. Sem referência, a página sobe declarada como **teste** |

---

## 11. Próximos passos (circuito de página)

| # | Etapa | Entrega | Dono |
|---:|---|---|---|
| 0 | Respostas do §9 e martelo na headline do §5.3 (recomendada ou alternativa) | 9 fatos + 1 escolha | Victor |
| 0-bis | Planilha | Apps Script + cabeçalho de colunas (Claude) → implantação e URL (Victor) | Claude + Victor |
| 1 | Referência escalada (§10, REGRA Nº 2) | ficha de 1–3 referências ou declaração de teste | Claude |
| 2 | Inventário do design atual | **o design fica (§1).** Mapa de qual componente existente recebe cada bloco novo · **limite de caracteres por bloco**, medido nos componentes de hoje (a linha 2 do H1 é o primeiro caso) · `continuum-v2.css` só para teste, formulário e obrigado, com os tokens atuais (fundo `#020618`, cartão `#0f172b`, texto `#f8fafc`) | Claude, `ui-ux-designer-senior-continuum` |
| 3 | Copy final | texto por bloco com pivô · `voz-victor` · gate anti-slop · `geracao-de-resultados` (a página define resultado) | Claude, `copywriter-senior-continuum` |
| 4 | Execução | edição de `pagina-iteracao/index.html` + formulário e obrigado na D8 (§6-bis) + política de privacidade + teste em celular real: caixas, máscara, voltar, gravação na planilha e abertura do WhatsApp + `<title>` e meta novos | Claude |
| 5 | Gate | 8 passes do gerador · qualquer P0 reprova | Claude, juiz |
| 6 | Publicação | upload na Hostinger, remoção do iframe, **conferência na URL de produção** · a Vercel só se desativa depois disso | Victor + Claude |

**Pivô da página, para a etapa 3 (E · Mas · Por isso):** você já vende **E** acha que o próximo passo é trazer mais gente. **MAS** com uma das cinco perguntas aberta, mais gente é mais gente que não compra, e o anúncio aprende a trazer essa pessoa. **POR ISSO** as cinco se fecham primeiro, na ordem, e o volume entra por último.

---
*Criado em 15/10/2026. Nenhum texto final foi escrito: as frases entre aspas são da fonte citada ou direção de bloco. Iteração bloqueada até as respostas do §9.*
