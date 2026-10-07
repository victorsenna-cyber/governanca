# ANCORAGEM DA PROPOSTA — Danilo · Kraken Rally

> **Tipo:** folha interna (`METODO-ANCORAGEM-DE-PROPOSTA.md` §5.1) · **Criado:** 09/08/2026 · **Dono:** Victor
> **⛔ NÃO VAI AO CLIENTE.** Contém breakeven nosso, horas, valor-hora e margem.
> **VIA:** caixa (Gate C) — a proposta se paga por venda, não por audiência.
> **Método:** `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md` · `00-core/POLITICAS-DE-DECISAO.md` §§4–5
> **Marcação obrigatória (Gate A):** `[dado dele]` · `[dado nosso]` · `[benchmark]` · `[hipótese]`

---

## ⚠️ VEREDITO ANTECIPADO — leia antes das contas

**A proposta de R$ 35.000 não pode ser enviada hoje.** Das cinco condições de recusa do §3:

| Condição | Estado |
|---|---|
| **#4 · Não temos capacidade de entrega** | 🟢 **DESATIVADA em 09/08/2026** — Prana declarada em ~90%, 1 dia para concluir (Victor). **Recálculo completo em §7-bis.** ⚠️ Jéssica permanece aberta |
| **#1 · Breakeven exige >30% de aumento sobre o volume atual** | 🟡 **INDETERMINADA** — não sabemos o volume atual. Sem esse número, a régua não pode ser aplicada, e §1 proíbe estimar em silêncio |
| **#3 · O conservador machuca o cliente** | ❓ **a perguntar** — âncora 6 |

**Com a #4 fora, o que ainda impede a proposta cheia não é nossa capacidade: é a ausência de `[dado dele]`.** Isso confirma, por outro caminho, a decisão de 09/08: **call diagnóstica primeiro** (§12).

---

## 1. ÂNCORA 1 — BREAKEVEN

### 1.1 O que falta para calcular ⛔

Estas cinco variáveis são **[dado dele]** e nenhuma está em nossas mãos. Declaradas como faltantes, conforme §1:

| # | Variável | Por que decide |
|---|---|---|
| 1 | **Preço da assinatura do competidor** | é a unidade de maior volume |
| 2 | **Margem real após loja de apps** | iOS/Android retêm 15–30% `[benchmark]`. Se a venda é in-app, a margem é bem menor que a intuição |
| 3 | **Preço e modelo da licença de campeonato** | por prova ou por temporada muda tudo |
| 4 | ⭐ **Volume atual de assinantes ativos** | **é a variável que decide se a proposta pode existir** (régua dos 30%) |
| 5 | **Retenção média em meses** | receita sazonal derruba o LTV pela metade |

### 1.2 Sensibilidade — quantas vendas pagam R$ 35.000

Todas as linhas são `[hipótese]`. Servem para **saber o que perguntar**, nunca para apresentar.

**Unidade A · Assinatura do competidor** (margem 70% após loja `[benchmark]`)

| Preço/mês | Margem/mês | Assinante-mês p/ breakeven | Se retém 12m | Se retém 6m (sazonal) |
|---:|---:|---:|---:|---:|
| R$ 30 | R$ 21 | 1.667 | **139 assinantes** | 278 assinantes |
| R$ 50 | R$ 35 | 1.000 | **84 assinantes** | 167 assinantes |
| R$ 80 | R$ 56 | 625 | **53 assinantes** | 105 assinantes |

> ⭐ **A sazonalidade dobra o breakeven.** Se o competidor assina só nos meses de prova, cada assinante vale metade. **Este número é o argumento matemático da licença anual** (`PLANO-CONSTRUCAO-MARCA` §3.3) — não é preferência comercial, é o que faz a conta fechar.

**Unidade B · Licença de campeonato/temporada** (margem 90% `[hipótese]`)

| Preço/temporada | Margem | Campeonatos p/ breakeven |
|---:|---:|---:|
| R$ 3.000 | R$ 2.700 | 13 |
| R$ 5.000 | R$ 4.500 | **8** |
| R$ 10.000 | R$ 9.000 | **4** |

**Unidade C · Kraken Academy** (margem 85% `[hipótese]` — custo marginal quase zero)

| Preço/aluno | Margem | Alunos p/ breakeven |
|---:|---:|---:|
| R$ 1.500 | R$ 1.275 | 27 |
| R$ 2.500 | R$ 2.125 | **16** |

**Unidade D · Hardware** (margem 45% `[hipótese]`)

| Preço | Margem | Unidades |
|---:|---:|---:|
| R$ 1.200 | R$ 540 | 65 |
| R$ 2.000 | R$ 900 | 39 |

### 1-bis. 🚨 CORREÇÃO DE 09/08/2026 — a unidade de receita provavelmente está errada acima

Os stories de 09/08 (`REGISTRO.md` §8-sexies) mostram **dezenas de Kraken Loggers numerados, com QR code, sendo preparados em lote** para uma etapa da Mitsubishi em Itaipava/RJ ✅.

**Isso não descreve venda de assinatura. Descreve operação de prova com parque próprio de equipamentos.**

| Toda a tabela 1.2 assume | 🟡 O que os stories sugerem |
|---|---|
| unidade = assinante/mês | **unidade = etapa (ou temporada)** |
| hardware = venda unitária com margem 45% | **hardware = ativo da Kraken, com custo de capital, manutenção e logística** |
| breakeven em 84–278 assinantes | ❓ **breakeven em N etapas** — número desconhecido |

> **Se confirmado, a tabela 1.2 vira exercício, não ancoragem.** A unidade certa passa a ser:
>
> ```
> Breakeven = R$ 35.000 ÷ margem de contribuição por ETAPA
> ```
>
> ❓ A R$ 8.000/etapa com 60% de margem (equipamento, deslocamento, equipe) = R$ 4.800 → **~7 etapas**. Todos os números aqui são `[hipótese]`.

**Três perguntas novas, que entram na diagnóstica com prioridade:**

1. ❓ **A receita principal vem da etapa ou do assinante?**
2. ❓ **O parque de Loggers é ativo de vocês?** Se sim: quantos, qual custo unitário, quantas etapas por ano ele atende, e **qual é o gargalo físico** — porque parque limitado é teto de crescimento que nenhuma campanha resolve
3. ❓ **Quanto custa operar uma etapa** (deslocamento, equipe, equipamento) e **quanto ela paga**?

⚠️ **Isto reforça, não enfraquece, a decisão de 09/08:** a proposta cheia não podia sair mesmo. **Sem essas respostas, qualquer breakeven que escrevêssemos seria ficção com aparência de rigor** — o erro que o §4 do método chama de *"o mais caro".*

### 1.3 ⭐ O que a matemática decide sobre a estratégia

| Se a conta for paga por… | Breakeven | Leitura |
|---|---|---|
| **assinante individual** | 84–278 assinantes novos | ❓ provavelmente **>30% do volume atual** → **a régua do §1 reprova** |
| **campeonato** | 4–8 contratos | plausível dentro da janela de 2027 |
| **Academy** | 16–27 alunos | 1 a 2 turmas — **o mais rápido de todos** |
| **combinado provável** | 3 campeonatos (R$ 13.500) + 1 turma de 12 alunos (R$ 20.400) = **R$ 33.900** | **fecha quase sozinho** |

> **A ancoragem valida a estratégia por conta própria:** a proposta só fecha bem se o objeto for **campeonato + Academy**, não assinante individual. É a mesma conclusão do `OFERTA-E-NARRATIVA` §4-bis, chegando por outro caminho.

### 1.4 Breakeven nosso ⛔ interno

| Fase | Preço | Horas-teto | Valor-hora | Ponto de prejuízo |
|---|---:|---:|---:|---|
| Fundação | R$ 8.000 | 32h | R$ 250/h ✅ | **acima de 32h**: 40h → R$ 200/h ❌ |
| Motor | R$ 4.500/mês | 18h/mês | R$ 250/h ✅ | **acima de 18h/mês** |

**O teto de horas É o nosso breakeven.** Estourar não é generosidade — é trabalhar abaixo do piso da política.

---

## 2. ÂNCORA 2 — PAYBACK

### 2.1 Dois paybacks, e o segundo é o problema

| Camada | Prazo | Faixa (§Âncora 2) |
|---|---|---|
| **Payback curto** — Academy + correção do vazamento de conversão | **60–120 dias** `[hipótese]` | ✅ forte a "exige prova" |
| **Payback estrutural** — campeonatos de 2027 | **180–240 dias** (set/2026 → jan–mar/2027) | ⚠️ **frágil** pela régua |

### 2.2 A consequência honesta

> Pela régua, payback > 180 dias é **frágil** e *"só com contrato longo que justifique a curva (§3), ou não propor"*.

**É exatamente o nosso caso — e é por isso que o contrato tem 6 meses com destino declarado.** Mas isso proíbe uma coisa: **não podemos prometer receita no mês 2.** A promessa autorizada pelo §3.3 é outra:

> *"Em 30 dias você tem o mapa e o dossiê que hoje não existem. Em 90, a base medida e o selo rodando. Em 180, você chega na mesa dos campeonatos com prova em vez de conversa."*

### 2.3 ⭐ A Academy deixa de ser produto novo e vira âncora de payback

A conta acima revela algo que não estava no plano: **sem uma receita de curto prazo, o cliente paga 7 meses para colher em 2027.** Isso é peso de caixa e torna o cenário conservador duro.

**A Academy resolve:** acontece na entressafra, custo marginal quase zero, 16–27 alunos pagam o contrato inteiro `[hipótese]`. **Ela sobe de "ideia interessante" para item obrigatório da Fundação** — é o que torna o payback defensável.

### 2.4 Payback do esforço dele ⚠️

Ele executa: relação institucional com organizadores, gravação em prova, operação da Academy, decisão sobre o selo. **Proposta que ignora isso produz cliente que paga, não executa e culpa a entrega** (§Âncora 2). Vira condição de validade em §5.

---

## 3. ÂNCORA 3 — CURVA DE GERAÇÕES E PROBABILIDADE

### 3.1 As gerações deste contrato

| Ger. | Janela | O que produz | Gate nomeado para a próxima |
|---|---|---|---|
| **G0** | set/2026 | baseline medido: assinantes, provas, receita por unidade, contatos/mês | ⛔ **hoje não existe — é a primeira entrega** |
| **G1** | set–out/2026 | mapa de campeonatos, dossiê de precisão, site de 2 portas, processo de captura | site converte > 0 e contato entrante é atendido |
| **G2** | nov/2026–jan/2027 | cases, selo no ar, base declarável, 1ª turma Academy | **breakeven atingido pela Academy** + ≥1 organizador em conversa formal |
| **G3** | fev–mar/2027 | ≥2 campeonatos fechados, modelo de temporada validado | permite escalar mídia e replicar |
| **G4** | 2027+ | Chronus, outras modalidades | fora deste contrato |

### 3.2 A probabilidade de consolidação nas provas — o que Victor pediu

**Resposta honesta: `n=0`.**

Nunca operamos um cliente até uma decisão institucional de campeonato. Não temos base para dizer "aumentamos em X% a chance de consolidação". **Escrever um percentual aqui seria o anti-padrão nomeado no §7 do método** — indefensável na primeira pergunta que ele fizer.

**O que se pode afirmar, e é mais forte que um número inventado:** não elevamos a probabilidade por persuasão. Elevamos por **remover as causas conhecidas de perda de decisão.**

| Critério real do organizador (`PLANO-CONSTRUCAO-MARCA` §0) | Sem nós | Com a entrega |
|---|---|---|
| Risco de contestação do resultado | precisão existe, **prova não está escrita** | **dossiê técnico de precisão** |
| Base instalada de competidores | existe, **não é declarável** | base **medida e citável** |
| Histórico em prova grande | Mitsubishi, rally_pe, campeão ✅ | virados em **case apresentável** |
| Ser lembrado na hora da decisão | ❓ depende de relação pessoal | **mapa com data e critério de cada campeonato** |
| Credibilidade pública | dispersa | **selo "Prova Aferida por Kraken"** |

> **A formulação que substitui o percentual:** *"Não sei dizer quanto aumenta a chance. Sei dizer que hoje vocês chegam nessa mesa sem quatro das cinco coisas que o organizador avalia — e que dá para chegar com as cinco."*

**Régua 2 do §3.2 aplicada — o que precisa ser verdade:** ❓ a hipótese da distribuição (campeonato adotado ⇒ competidor obrigado ao app). **Se falsa, G3 muda de objeto e a proposta encolhe.** É a pergunta nº 1 da call.

### 3.3 Amadurecimento estrutural do serviço `[dado nosso]`

Por que o mês 6 rende mais que o mês 1 pelo mesmo preço: **dado** (custo de aprendizado pago uma vez) · **ativos** (páginas, dossiê, selo, criativos não zeram) · **contexto** (conhecer a operação encurta cada entrega). É o argumento honesto para 6 meses: contratação curta compra G1, que por definição ainda não devolve.

---

## 4. ÂNCORA 4 — CUSTO DA INAÇÃO

| Fonte | Estado |
|---|---|
| **Demanda que chega e não é atendida** | ✅ comentário público parado há 1 semana. ❓ quantificar: contatos/mês × conversão × ticket |
| **Tráfego do feed desperdiçado** | ✅ todo clique da bio cai em página de Rally Náutico de 2020. **Quanto melhor o conteúdo, maior a perda** |
| **Receita presa ao calendário** | 🟡 meses sem prova rendem pouco. Academy e temporada corrigiriam |
| ⭐ **A janela de 2027 fechando** | **o maior, e não é mensal** |

> ### O custo da inação aqui não é R$/mês. É uma temporada inteira.
>
> Campeonato fecha parceiro técnico uma vez por ano. Se a Kraken chega na mesa de jan–mar/2027 sem dossiê, sem base declarável e sem selo, **o concorrente entra e trava aquele campeonato por doze meses** — junto com todos os competidores dele, se a hipótese da distribuição for verdadeira.
>
> **Cada campeonato perdido custa a temporada, não o mês.** `[hipótese]` A R$ 5.000/temporada, três campeonatos perdidos = R$ 15.000 diretos, mais a base que viria junto.

**Gate de recusa §Âncora 4:** o custo da inação precisa ser maior que o preço. ⚠️ **Só passa com a leitura da janela.** Se ele disser que os campeonatos decidem em 2027 mesmo, sem antecedência, **o custo da inação desaba e a proposta precisa encolher.**

---

## 5. ÂNCORA 5 — CONDIÇÕES DE VALIDADE

| Categoria | Condição | Dono | O que quebra se falhar |
|---|---|---|---|
| **Insumo** ⭐ | dados do §1.1 (preço, margem, volume, retenção, modelo) | Danilo | **sem eles não há breakeven — a proposta não existe** |
| **Insumo** | calendário e contatos dos campeonatos-alvo | Danilo | G1 perde o entregável principal; a janela vira palpite |
| **Decisão** | aval ao selo ❓ e possivelmente de federação | Danilo | cai a peça de maior alcance por menor custo |
| **Execução dele** | sentar com organizador — **relação institucional é dele, não nossa** | Danilo | G3 não acontece. Preparamos a mesa; quem senta é ele |
| **Execução dele** | operação da Academy (aulas, turma, atendimento) | Danilo | cai a âncora de payback curto (§2.3) |
| **Execução dele** | captação de imagem em prova — **não temos equipe em campo** | Danilo | pilar 2 (bastidor) não roda, e é o que convence organizador |
| **Verba** | mídia fora do fee | Danilo | tráfego não entra; orgânico segue |
| **Técnico** | acesso a site, domínio, analytics, dados de assinatura | Danilo | G0 não fecha |
| **Aprovação** | copy, identidade, publicação | Danilo | tudo desloca |
| **Nosso** | Prana e Jéssica encerradas antes do início | Victor | 🔴 **condição de recusa #4 hoje ativa** |

---

## 6. ÂNCORA 6 — TRÊS CENÁRIOS

| | **Conservador** | **Provável** | **Otimista** |
|---|---|---|---|
| **Premissa que muda** | hipótese da distribuição **falsa**; campeonatos não decidem com antecedência | distribuição verdadeira; 2–3 campeonatos na janela | + Chronus abre modalidade nova |
| **Receita atribuível em 12m** `[hipótese]` | 1 turma Academy + ganho de conversão ≈ **R$ 20.000–25.000** | 3 campeonatos + 1–2 turmas + assinantes ≈ **R$ 45.000–60.000** | **R$ 90.000+** |
| **Breakeven de R$ 35.000** | ❌ **não atingido em 12 meses** | ✅ ~mês 8–10 | ✅ ~mês 6 |
| **Payback** | > 365 dias | 240–300 dias | ~180 dias |

### ⚠️ O conservador é aceitável?

> **Regra §Âncora 6: se no pior caso o investimento machuca o cliente, a proposta não deve ser feita.**

**❓ Não sabemos, e é pergunta obrigatória.** No conservador ele fica R$ 10.000–15.000 negativo em 12 meses, com ativos permanentes (site, dossiê, marca, selo) mas sem retorno em caixa.

| Se… | Então |
|---|---|
| a Kraken tem caixa e trata isso como investimento em ano de posicionamento | ✅ aceitável — **e é preciso ouvir ele dizer isso** |
| a Kraken opera apertada e R$ 35.000 pesa | ❌ **propor apenas a Fundação** (§7) |

---

## 7. ÂNCORA 7 — VIABILIDADE NOSSA ⛔ interno

| Régua | Fonte | Estado |
|---|---|---|
| Valor-hora ≥ R$ 250 | POLÍTICAS §5 | ✅ R$ 250/h nas duas fases, **no teto de horas** |
| Margem ≥ 70% em recorrência | POLÍTICAS §5 | ✅ custo é hora + ferramenta |
| Desconto ≤ 10%, só no setup | POLÍTICAS §5 | ✅ à vista R$ 7.200 |
| Entrada ≥ 50% do setup | POLÍTICAS §5 | ✅ R$ 4.000 |
| **Capacidade** | POLÍTICAS §4 · CLAUDE.md §8 | 🟢 **PASSA** após o recálculo de 09/08 — ver §7-bis. **Nakielly ainda valida antes do aceite** (alçada, POLÍTICAS §1) |
| Escopo bate com a faixa | POLÍTICAS §5 | ✅ Assessoria Completa = R$ 4.500 |
| Concentração ≤ 40% | POLÍTICAS §6 | 🟡 com MRR R$ 0, será 100%. Ponto de partida, não folga |

---

## 7-bis. ⭐ RECÁLCULO DE CAPACIDADE — 09/08/2026

### ⚠️ Divergência de fonte, resolvida

| Fonte | Número | Precedência |
|---|---|---|
| `POLITICAS-DE-DECISAO.md` §4 | Victor 20h/sem + Nakielly 30h/sem ≈ **200h/mês**, marcado *(calibrar)* | política, **não calibrada** |
| `STATUS.md` §4 | Victor 8–12h/dia, 7 dias/sem ≈ **240–360h/mês** | ✅ **prevalece** — `CLAUDE.md` §3: fato atual vence |

**Base adotada: 240h/mês (extremo conservador da faixa do Victor).** Teto de comprometimento 70% = **168h/mês**.

### O que está comprometido de fato

| Frente | Horas/mês | Nota |
|---|---:|---|
| **Débora** (assessoria com termo) | **40–60h** → uso 50h | `STATUS.md` §4, ainda `a calibrar`. **É o maior consumidor único** |
| **Guilherme** | ~4h | curadoria do que ele já publica · **fee R$ 0** (parceria de indicação) |
| **Prana** | **≈ 0 a partir de 10/08** | 90% concluído, 1 dia para fechar |
| **Jéssica** | ⚠️ **`a calibrar`** | prazo vencido em 06/08. Página 2 sem registro de estado |
| **Total recorrente** | **~54h/mês** | |

### O veredito

| | Horas |
|---|---:|
| Teto de comprometimento (70% de 240h) | **168h/mês** |
| Comprometido hoje | ~54h/mês |
| **Livre** | **~114h/mês** |
| Danilo · Fundação | 32h **uma vez**, em 30 dias |
| Danilo · Motor | 18h/mês |

> ✅ **Cabe com folga.** A Fundação consome 28% da capacidade livre de um mês; o Motor, 16%/mês. **Onboardings simultâneos: 2/3** (Débora + Danilo).

### Três ressalvas que a folga não apaga

1. ⚠️ **Jéssica continua aberta e não entrou nesta conta.** Prazo venceu em 06/08 e não há registro do estado da Página 2. **Enquanto ela não fechar, a condição #4 não está integralmente resolvida** — está resolvida para a Prana.
2. ⚠️ **A base de 240h pressupõe 7 dias por semana.** O próprio `STATUS.md` §4 registra isso como *"regime de guerra"* e nomeia o **burnout do Victor como o maior risco operacional único da empresa**. Capacidade calculada sobre um regime que a nossa própria governança classifica como excepcional é **capacidade emprestada do futuro**, não capacidade real.
3. **Nakielly ainda valida.** Aceitar cliente é alçada de dois gates (`POLITICAS` §1): Victor aprova, Nakielly valida capacidade. Este recálculo é insumo dela, não substituto.

---

## 8. GATES DE SAÍDA

| Gate | Estado |
|---|---|
| **A · todo número com fonte** | ✅ marcado — e a maioria é `[hipótese]`, o que **é o achado, não a falha** |
| **B · fronteira do que não se promete** | ✅ escrita: não prometemos decisão de campeonato (depende dele e de terceiros), nem volume de assinantes sem o dado de base. **Sem garantia de resultado neste contrato** |
| **C · via declarada** | ✅ **via de caixa** — paga-se por venda de campeonato, Academy e assinatura |

## 9. CONDIÇÕES DE RECUSA (§3 do método)

| # | Condição | Estado |
|---|---|---|
| 1 | breakeven > 30% do volume atual | 🟡 **indeterminada** — falta o volume |
| 2 | custo da inação < preço | ✅ passa **se** a janela de decisão for antecipada ❓ |
| 3 | conservador machuca o cliente | ❓ **a perguntar** |
| 4 | **sem capacidade de entrega** | 🟢 **desativada** (§7-bis) · ⚠️ Jéssica ainda aberta · Nakielly valida |
| 5 | só fecha violando nossa régua | ✅ **não viola** — bônus removido em 09/08 (§12.2). Zero hora doada, R$ 250/h íntegro |

---

# 10. ⭐ VEREDITO E PROPOSTA CORRIGIDA

## VEREDITO: **REDUZIR ESCOPO** — propor a Fundação isolada

> *"Recusar não é perder a venda. Em três dos cinco casos o caminho correto é reduzir escopo e propor a versão que fecha."* (§3)

### A proposta que passa em todas as cinco condições

**FUNDAÇÃO — 30 dias — R$ 8.000** (R$ 7.200 à vista, dentro do teto de 10%)

| Condição | Como fica |
|---|---|
| #1 breakeven | **calculável**: 4–7 alunos de Academy `[hipótese]`, ou 2 licenças de campeonato — muito abaixo dos 30% |
| #2 custo da inação | a janela de 2027 sozinha justifica R$ 8.000 |
| #3 conservador | mesmo sem nenhuma venda, ele fica com mapa, dossiê, site e marca. **Não machuca** |
| #4 capacidade | 32h em setembro cabem, com Prana e Jéssica encerradas |
| #5 nossa régua | R$ 250/h ✅ |

**E — o mais importante — a Fundação produz o G0 que hoje não existe.** Depois dela, a proposta do Motor sai **ancorada em dado real** em vez de `[hipótese]`. É literalmente o §4 do método: *vender a validação, não a escala.*

### O Motor não some — fica condicionado

> *"Ao fim da Fundação eu te mostro a conta: quantos campeonatos, a que preço, em quanto tempo. Se a conta fechar, a gente segue seis meses. Se não fechar, eu te digo."*

**Janela de validade:** contratando o Motor em até 30 dias após a entrega da Fundação, vale a tabela de R$ 4.500/mês. Depois, revisão. **Não é desconto — é condição de validade** (permitido; desconto só existiria no setup, e já está usado no à vista).

### Por que isto é mais forte comercialmente, e não mais fraco

| | R$ 35.000 hoje | Fundação primeiro |
|---|---|---|
| O que ele decide | contrato de 7 meses, sobre hipótese | 30 dias, sobre um problema que ele já declarou |
| Nosso risco | vender G3 no preço de G1 | ✅ vendemos G1 como G1 |
| Convicção na conversa | hesitação — sabemos que os números são `[hipótese]` | ✅ **cada número tem fonte** |
| Caixa em agosto | R$ 4.000–7.200 | **os mesmos R$ 7.200** |
| Capacidade | 🔴 viola | ✅ cabe |

**O caixa imediato é idêntico.** A diferença é que uma versão respeita nossa própria régua e a outra não.

---

## 11. As cinco perguntas que destravam a proposta cheia

Sem estas, o Motor não pode ser ancorado:

1. ⭐ **Quantos assinantes ativos hoje?** — decide a régua dos 30%
2. **Preço e margem da assinatura** — a venda é in-app? (loja retém 15–30% `[benchmark]`)
3. **Modelo com organizador: por prova ou por temporada? Quanto?**
4. ⭐ **Os campeonatos de 2027 fecham parceiro técnico quando?** — sem antecedência, o custo da inação desaba
5. **R$ 35.000 em 7 meses pesa no caixa da Kraken?** — âncora 6, conservador aceitável

---

# 12. DECISÕES DE 09/08/2026 (Victor)

## 12.1 ✅ DECIDIDO — call diagnóstica primeiro

Eliciar os dados antes de qualquer número. **Converge com o veredito do §10** e com o `REGISTRO.md` §8-quater.

**Duas proteções obrigatórias**, senão a diagnóstica vira consultoria grátis:

1. **Fecho com direito de retorno**, já escrito no §8-quater: *"deixa eu organizar o que a gente falou e te mando em uma página."* Sem isso, a call termina sem próximo passo e o lead esfria de novo.
2. **Devolver a meta, não o diagnóstico** (`METODO-GERACAO-DE-RESULTADOS` §180). Entregar os oito problemas do `REGISTRO.md` §5 numa call gratuita é entregar o produto.

**Pauta da call = as 5 perguntas do §11 + as 6 do `OFERTA-E-NARRATIVA` §4-bis.** A pergunta nº 1 continua sendo a da distribuição (campeonato adotado ⇒ competidor obrigado ao app).

## 12.2 ✅ BÔNUS DÉBORA — **REMOVIDO** (decisão final do Victor, 09/08/2026)

> ### DECISÃO VIGENTE
>
> **Não existe bônus de +2 meses.** Nenhuma cortesia da Débora entra na negociação com o Danilo — nem na Fundação, nem no Motor, nem como alavanca de fechamento.
>
> **Mantido, em outro lugar:** a **Direção do ciclo seguinte** para a Débora, reclassificada de *bônus* para **movimento de renovação** da conta dela. Sai da mesa do Danilo e entra na trilha comercial da Débora — ver §12.3.
>
> **Efeito na ancoragem:** valor-hora do contrato permanece em **R$ 250/h** ✅ e a condição de recusa #5 fica limpa. **A proposta não carrega nenhuma hora doada.**

### Registro do porquê (não apagar — é a régua que nasceu daqui)

A proposta original era +2 meses de assessoria estratégica à Débora como bônus "pessoal", justificada como *baixo custo operacional e alto retorno*.

### O mérito é real

A Débora abriu a porta (*"conversa com ele mesmo"*, 01/08 ✅), participa da estruturação da Kraken e estará na conversa. Reconhecer isso é relacionalmente correto e comercialmente inteligente.

### 🔴 Mas a premissa "baixo custo operacional" não sobrevive ao número

**A entrega da Débora consome 40–60h/mês** (`STATUS.md` §4). Dois meses = **80–120h** — mais que o contrato inteiro do Danilo em horas (140h). Não é baixo custo: **é o maior consumidor único de capacidade que temos.**

Mesmo restringindo a "só estratégico", o preço não tem folga para absorver:

| Escopo do bônus | Horas | Valor-hora do contrato cheio (R$ 35.000) | Piso R$ 250 |
|---|---:|---:|---|
| sem bônus | 140h | R$ 250/h | ✅ |
| 2 sessões de 2h | +4h | R$ 243/h | ❌ |
| 2 sessões de 3h | +6h | R$ 240/h | ❌ |
| "estratégico", 8h/mês | +16h | R$ 224/h | ❌ |
| escopo atual replicado | +80–120h | R$ 159–125/h | ❌❌ |

> ### O achado: **nosso preço não tem folga para bônus em horas.**
>
> Precificamos **exatamente no piso** de R$ 250/h. Qualquer hora doada fura a régua. Isso não é rigidez — é a aritmética de um preço sem gordura.

### Dois riscos além das horas

1. **Ancora "grátis" bem antes da renovação.** O contrato da Débora termina ~18/12/2026. Dois meses de bônus empurram para ~18/02/2027 e colocam a palavra *cortesia* na mesa exatamente na janela em que precisamos falar de **renovação paga**. **O bônus pode custar a renovação.**
2. **Desconto antes de ser pedido** é o anti-padrão nomeado no §7 do método — sintoma de proposta sem ancoragem. E aqui apareceria **antes mesmo da call diagnóstica**, sobre números que ainda são `[hipótese]`.

### ✅ Régua instituída: **bonificar com ativo, nunca com hora**

Ativo tem custo marginal próximo de zero e valor percebido alto. Hora é custo linear que sai direto do valor-hora.

| Em vez de | Fazer |
|---|---|
| 2 meses de assessoria à Débora | **um ativo** de custo marginal ~zero e alto valor (ex.: agente de voz — `MAPA-DE-RECEITA` §3.1: *"o produto de maior margem que temos"*) |
| bônus na Fundação (R$ 8.000) | se algum dia houver bônus, é alavanca do **Motor**, nunca do bloco de entrada |
| bônus anunciado na diagnóstica | **nada de bônus na call** |

**Esta régua fica vigente para toda proposta**, não só para esta. Motivo: precificamos no piso, e piso não comporta doação de hora.

---

## 12.3 ✅ DIREÇÃO DO CICLO SEGUINTE — Débora (mantida, reclassificada)

**O que é:** uma sessão de direção estratégica do próximo ciclo com a Débora.

**O que NÃO é:** bônus, cortesia, extensão de contrato ou qualquer vínculo com a negociação do Danilo. **É abertura de renovação.**

| Item | Definição |
|---|---|
| **Natureza** | movimento comercial de renovação — **venda, não desconto** |
| **Custo** | 2–3h · não impacta o valor-hora de nenhum contrato |
| **Vínculo com o Danilo** | ❌ **nenhum.** Não se menciona na call dele, não entra na proposta, não é usado como argumento |
| **Contrato dela** | R$ 12k/6m pagos à vista, entrega desde 19/06/2026 → **termina ~18/12/2026** |
| **Janela de abertura** | **outubro/2026** (~60 dias antes do término), depois do workshop reposicionado |
| **Objetivo** | que a conversa de dezembro seja sobre *qual ciclo*, não sobre *se haverá ciclo* |
| **Dono** | Victor |

> **Por que isto vale mais que dois meses de graça:** dois meses grátis empurram o vencimento para fevereiro e ensinam que o próximo ciclo pode ser cortesia. A sessão de direção faz o oposto — **coloca a renovação em pauta com antecedência e com valor declarado.**

⚠️ **Ação de continuidade:** o vencimento de ~18/12/2026 e a janela de outubro precisam entrar no `STATUS.md` e na trilha da Débora. **Renovação que não tem data no repo é renovação que se descobre em janeiro** (`CLAUDE.md` §11).

---
*Criado 09/08/2026 sob `METODO-ANCORAGEM-DE-PROPOSTA.md`. **Nenhum número apresentado ao Danilo.** A maioria das âncoras do lado dele está marcada `[hipótese]` por ausência de dado — declaradas faltantes conforme §1, nunca estimadas em silêncio. Refazer esta folha após a call, com `[dado dele]` no lugar das hipóteses.*
