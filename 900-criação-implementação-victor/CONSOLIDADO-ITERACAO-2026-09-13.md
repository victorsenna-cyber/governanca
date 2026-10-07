# CONSOLIDADO — ciclo de iteração de método · 03 a 13/09/2026

> **Tipo:** artefato de transferência (camada 3) · **Fechado:** 13/09/2026 · **Dono:** Victor
> **Para que serve:** levar este ciclo inteiro para outro projeto, outro chat ou outro repositório, **sem depender do histórico da conversa que o produziu.**
> **Como ler:** §1 é o inventário com caminhos · §2 os métodos · §3 as réguas · §4 as correções de fato · ⭐ **§5 é o padrão de trabalho — a parte replicável** · §6 as pendências · §7 o que transfere e o que não.

---

## 0. O QUE ACONTECEU, EM UMA FRASE

**Um transcript de podcast sobre VSL virou quatro métodos-raiz, uma mudança de régua-mãe, um gate novo de memória e a correção de três fatos estruturais do repositório** — e o caminho de como isso foi feito é mais transferível que o conteúdo.

---

## 1. INVENTÁRIO COMPLETO

### 1.1 Criados

| # | Caminho | O que é |
|---:|---|---|
| 1 | `100-métodos/METODO-FUNIL-DE-VSL.md` | método-raiz do funil completo |
| 2 | `100-métodos/METODO-BENCHMARKING.md` | método-raiz, toda peça de conversão |
| 3 | `100-métodos/METODO-ESTRUTURA-INVISIVEL.md` | método-raiz transversal |
| 4 | `100-métodos/METODO-PONTOS-LOGICOS.md` | método-raiz de argumentação |
| 5 | `900-criação-implementação-victor/DESTILACAO-VSL-FILEMON.md` | a destilação da fonte, 72 pontos com ID e procedência |
| 6 | `90-templates/benchmark-vsl/` | `MATRIZ.md` · `ESTRUTURA-INVISIVEL.md` · `ESPACO-VAZIO.md` |
| 7 | `90-templates/CONTRATO-EXECUTOR.md` | contrato de tarefa para executor |
| 8 | `30-comercial/swipe-file/` | `README.md` + `nosso/` + `mercado/` |
| 9 | `80-juridico/registros/MORADIA-SAIDA-2026-09-03.md` | registro 4 camadas |
| 10 | `clientes/Débora Delgado/RENOVACAO-2026-09-03.md` | registro 4 camadas |
| 11 | `clientes/Renata Betta/MSG-RENATA-2026-09-03.md` | peça + relatório de gate |

### 1.2 Alterados estruturalmente

| Caminho | O que mudou |
|---|---|
| **`CLAUDE.md`** | §3 fronteira `CLAUDE.md`×`AGENTS.md` · §6 quatro linhas novas no roteador · §6.1 duas camadas transversais · §7 mapa · **§9 régua-mãe alterada** · **§11.5 swipe file como gate** |
| **`AGENTS.md`** | 🔴 **reescrito por inteiro** — de "leia o CLAUDE.md" para contrato de executor |
| `00-core/PROTOCOLO-MULTI-MODELO.md` | §1-bis dono por etapa · §1-ter diagnóstico do Codex |
| `00-core/POLITICAS-DE-DECISAO.md` | §1 societário · §4 carga corrigida · **§4-ter curva de carga** · §4-quater hora se mede · §5 capital de teste |
| `100-métodos/METODO-GERACAO-DE-RESULTADOS.md` | §3-quater-bis — **onde a régua-mãe de fato morava** |
| `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md` | Gate C com exceção · tabela de recusa · §7-bis curva de carga · §7-ter IA |
| `100-métodos/METODO-TESTE-DE-PILARES.md` | §1-bis correspondência com as 4 peças · §1-ter o que não cobre · §1-quater ordem de criação |
| `METODO-TRAFEGO-PAGO.md` | §4 — **o par vira anúncio↔lead** |
| `30-comercial/oferta.md` | frente VSL aberta em `n=0`, sem preço |
| `README.md` | índice de métodos |
| `PROJECT.md` · `10-skills/c-level/*` · `40-operacao-rotinas/RITUAIS.md` · `30-comercial/produtos.md` e outros 8 | correção societária |

---

## 2. OS QUATRO MÉTODOS

### 2.1 `METODO-FUNIL-DE-VSL.md`

**Arquitetura:** `anúncio → página → VSL → checkout → upsell`. O upsell é obrigatório desde o MVP — com margem de 30–40% e ticket baixo, a venda principal financia a aquisição e pouco mais.

**Três gates de entrada:** congruência (teste de pilares + léxico) · **caixa (2 a 3 tentativas, nunca uma)** · ativos mínimos (rosto, produto na faixa, prova coletável).

**Distribuição 40/40/20** — público, oferta, copy. A copy é 20% **porque as outras duas já decidiram 80% antes dela existir.**

**Dois elementos de alta conversão:** done-for-you e demonstração. **O done-for-you ataca a objeção que nenhuma promessa alcança** — *"seu método funciona, mas eu não vou conseguir executar"*.

**9 lacunas declaradas, 3 de gravidade alta:** como escrever o upsell · leitura da retenção do player · a faixa de ticket do nosso ICP.

### 2.2 `METODO-BENCHMARKING.md`

**Serve a toda peça de conversão.** 6 fases, gate de evidência (**referência entra por prova de que vende, nunca por impressão**), teto de 3 referências.

**Contagem em três níveis:** bloco · elemento (taxonomia fechada de 30+ rótulos em 6 famílias) · **métricas derivadas** — densidade de prova, **razão prova/promessa**, distância até a primeira prova, densidade lógica.

**15 dimensões** em três blocos, e a 15ª é a que produz vantagem: **o espaço vazio.** Preencher as 14 primeiras produz a média do mercado.

**Teste de discriminação:** convergência entre referências vem de evidência ou de eco? **Se a mais antiga é a única com dado próprio, as outras são eco — e o padrão vale um terço.**

### 2.3 `METODO-ESTRUTURA-INVISIVEL.md`

> **A copy não é o texto. É uma sequência de atos persuasivos.**

**Três níveis:** bloco (esqueleto) · **elemento (o corpo — invisível sem marcação)** · superfície (pele, e é o que quase todo mundo copia por engano).

**A cadeia causal:** nicho = mesmo desejo → mesmas objeções → mesma ordem de resolução → **a sequência pertence ao nicho, não ao autor.** Logo é **descobrível, não inventável.**

**5 regras de boa formação**, e a primeira explica "promessa agressiva": **promessa gera dívida de prova — não é o tamanho da promessa, é a dívida não paga.**

🔴 **Não se aplica a peça de degrau 3 (reenquadre)** — ali a quebra da sequência é o argumento.

### 2.4 `METODO-PONTOS-LOGICOS.md`

> **Autoria: João Campos.** Registrado porque a fonte de um método muda quem procurar quando ele falha.

**Cadeia, não lista.** O gate é o **teste de encadeamento**: remova o elo N — se o N+1 ainda se sustenta, era lista com numeração.

**Dose 5 a 8.** O erro típico observado é 20.

**Monta-se de trás para frente, e a conclusão não vai para a peça** — o último passo é do leitor, e é por isso que ele o defende.

⚠️ **O limite ético é de forma indistinguível:** a técnica funciona porque a conclusão parece própria. **Se os elos forem verdadeiros ela é própria; se algum for falso, vira manipulação.**

---

## 3. AS RÉGUAS INSTITUÍDAS

### 3.1 Comerciais e de proposta

| # | Régua |
|---:|---|
| 1 | **Prazo de recebimento nunca excede prazo de entrega** sem preço de crédito embutido. Alongamento longo é função do cartão |
| 2 | **Desconto sem razão declarada não é desconto — é confissão de que o preço era inflado.** A razão é sobre o que muda no trabalho, nunca sobre o que sentimos pelo cliente |
| 3 | **Reparação e venda nunca dividem a mesma mensagem.** O que se deve, entrega-se sem cobrar e antes de ser cobrado |
| 4 | **Taxa de meio de pagamento é sempre repassada** |
| 5 | **Capital de teste de mídia: 2 a 3 tentativas, nunca uma.** Quem tem capital para uma não tem capital para a frente |

### 3.2 De custo e capacidade

| # | Régua |
|---:|---|
| 6 | ⭐ **Curva de carga: carga de conta não é constante — é curva com duas fases.** Construção alta, operação baixa |
| 7 | **Preço único para contrato de duas fases é sempre errado.** Sai em setup + mensal, ou o cliente que sai no fim do ciclo 1 leva o subsídio embora |
| 8 | **Hora se mede, não se presume.** Proveniência marcada: `[medido]` · `[estimado por analogia]` · `[hipótese]` |
| 9 | **Ganho de IA sobe a margem, não desce o preço** |
| 10 | **Despesa diária é a forma mais cara e a única que não se renegocia.** Toda moradia temporária nasce com data de término escrita |

### 3.3 De método e produção

| # | Régua |
|---:|---|
| 11 | 🔴 **Régua-mãe alterada:** funil de VSL é via de caixa desde o início, **desde que a congruência esteja provada antes do primeiro real de mídia** |
| 12 | ⭐ **Estrutura se modela, cena se colhe.** A peça alheia diz em que ordem as objeções morrem; nunca o que o nosso público sente |
| 13 | **Volume é parte do modelo.** Peça fora de escala falha antes de o conteúdo ser julgado |
| 14 | **O par de tráfego para VSL é anúncio↔lead**, não anúncio↔dobra |
| 15 | **A ordem de criação é o inverso da de leitura:** `oferta → mecanismo → história → lead` |

### 3.4 De governança

| # | Régua |
|---:|---|
| 16 | ⭐ **`CLAUDE.md` governa quem DECIDE; `AGENTS.md` governa quem EXECUTA.** Não se leem juntos |
| 17 | ⭐ **Swipe file como gate:** nenhuma peça que bate o gatilho de performance termina o ciclo sem entrar, **na mesma tarefa em que o dado aparece** |
| 18 | **Correção de fato estrutural não termina no arquivo onde o fato mora** — termina quando a varredura não retorna nada na camada de identidade e política |

---

## 4. AS TRÊS CORREÇÕES DE FATO

| # | O que estava errado | O que é | Como foi descoberto |
|---:|---|---|---|
| **1** | repositório dizia "2 sócios" em 17 lugares | **100% Victor desde 22/08** | pergunta do dono → varredura |
| **2** | carga de uma conta registrada como ~40h/mês | **< 8h/mês** — erro de 5× | correção do dono → recálculo |
| **3** | conceito atribuído ao entrevistado | **é do entrevistador** | leitura do transcript com atenção à atribuição |

> ⭐ **As três só apareceram porque alguém perguntou.** Nenhuma foi detectada por rotina. **Isso é dado sobre o processo, não sobre as pessoas: um repositório não audita a si mesmo — a auditoria é sempre provocada.**

---

## 5. ⭐ O PADRÃO DE TRABALHO — a parte replicável

**É o que transfere para qualquer projeto. O conteúdo acima é específico; isto não é.**

### 5.1 O ciclo de sete passos

```
1. FONTE          material externo bruto (transcript, livro, curso, peça)
2. DESTILAÇÃO     vira artefato com ID por ponto e PROCEDÊNCIA marcada
3. COLISÃO        onde isso contradiz o que já temos?  ← o passo que ninguém dá
4. MÉTODO         reescrita como método NOSSO: gates, recusas, integração
5. PROPAGAÇÃO     varredura por menções, correção onde a regra antiga vive
6. REGISTRO       estado + o que foi descartado e por quê
7. LACUNAS        o que a fonte não cobre, declarado e não preenchido
```

### 5.2 As sete regras que fizeram o ciclo funcionar

| # | Regra | Por que |
|---:|---|---|
| **1** | ⭐ **Destilar ≠ adotar** | separa entender de decidir. A destilação é insumo; o método é decisão |
| **2** | ⭐ **Procedência em tudo** — `[D]` dado / `[P]` princípio de terceiro / `[O]` opinião / `[G]` caso único / `[benchmark]` | **é o que impede a fonte de virar autoridade**, e o que permite substituir por dado próprio depois |
| **3** | 🔴 **Nomear onde a fonte COLIDE com o repo** | é o passo de maior valor e o mais pulado. Absorver sem colidir cria duas regras contraditórias em silêncio |
| **4** | **Declarar lacunas sem preencher** | preencher por inferência é o modo mais comum de estragar método bom |
| **5** | **Não deletar — tachar e datar** | sem histórico de git, o tachado é a única memória de por que a regra mudou |
| **6** | ⭐ **Toda régua nova declara o que a antiga protegia** | mudança de régua que não faz isso perde metade da proteção sem ninguém notar |
| **7** | **Método publicado antes de rodar contra caso real tem a ressalva escrita** | e a primeira aplicação vira teste, não exceção |

### 5.3 A regra 6, que é a mais importante

**Quando a régua-mãe mudou, a pergunta que salvou o ciclo foi:** *o que a régua antiga protegia?*

A resposta foi **duas coisas** — congruência **e** caixa. O instrumento novo resolvia a primeira. **A segunda continuava desprotegida**, e sem essa pergunta a mudança teria trocado um risco por outro, pior.

> **Toda mudança de régua tem essa pergunta como gate.** Régua velha quase sempre protege mais de uma coisa, e o argumento para mudá-la costuma cobrir só uma.

### 5.4 O padrão de propagação

**Quando um fato estrutural muda, a varredura obedece a esta ordem:**

```
1. o arquivo onde o fato mora
2. a CAMADA DE POLÍTICA (números, alçadas, pisos)   ← onde mais se esquece
3. o KERNEL (identidade, roteamento)
4. as SKILLS e personas que citam a regra
5. os ARTEFATOS COMERCIAIS que a usam como argumento  ← risco de conduta com cliente
6. o estado
```

🔴 **O passo 5 é o que mais dói:** neste ciclo, uma régua revogada estava sendo usada como **argumento de venda** com uma cliente. Mudar a régua sem tratar isso teria produzido contradição na frente dela.

---

## 6. PENDÊNCIAS ABERTAS

| # | O quê | Prioridade |
|---:|---|---|
| **1** | 🔴 **Módulos da skill de copy** — estrutura invisível e pontos lógicos. **São os dois que mudam como a skill trabalha, e enquanto não forem portados existem como método e não como prática** | **alta** |
| 2 | As 3 lacunas altas do método de VSL: upsell · retenção do player · faixa de ticket do nosso ICP | alta |
| 3 | Preço e escopo da frente VSL (3 decisões travando) | alta |
| 4 | Rodar os métodos contra uma conta real — **a ressalva de publicação antecipada está escrita e não resolvida** | alta |
| 5 | `RITUAIS.md` reescrito para operação solo (foi desenhado como cadência a dois) | média |
| 6 | Gerador de página e abordagem fria recebendo a camada de estrutura invisível | média |
| 7 | Instrumento societário assinado — **terceiro acordo verbal da operação sem papel** | 🔴 vencida |

---

## 7. O QUE TRANSFERE PARA OUTRO PROJETO

### 7.1 Transfere inteiro

- **§5 — o ciclo de sete passos e as sete regras.** É o núcleo replicável
- **A gramática de procedência** (`[D]`/`[P]`/`[O]`/`[G]`/`[benchmark]`)
- **A pergunta de mudança de régua:** *o que a antiga protegia?*
- **A ordem de propagação** (§5.4)
- **`METODO-ESTRUTURA-INVISIVEL.md` e `METODO-PONTOS-LOGICOS.md`** — são de argumentação, não de nicho
- **`METODO-BENCHMARKING.md`** — a taxonomia e as três camadas de contagem
- **O conceito de swipe file como gate automático**

### 7.2 Transfere com adaptação

- `METODO-FUNIL-DE-VSL.md` — a arquitetura transfere; **as faixas de ticket e os benchmarks são do infoproduto brasileiro**
- Os templates de `90-templates/` — estrutura sim, campos conforme o negócio
- O contrato de executor — depende de quais agentes o outro projeto usa

### 7.3 🔴 NÃO transfere

- Todos os **números de política** (piso de valor-hora, teto de desconto, capital de teste) — são calibração desta operação
- Os **registros de cliente** e o societário
- A **correção de carga** — é fato de uma conta específica
- **Qualquer coisa marcada `[dado nosso]`**

---

## 8. FONTES DESTE CICLO

| Fonte | Caminho | Natureza |
|---|---|---|
| Transcript íntegro | `900-criação-implementação-victor/transcript-vsl-tiago-filemon.md` + 5 partes | conteúdo público de terceiro, **com viés comercial declarado** |
| Destilação | `900-criação-implementação-victor/DESTILACAO-VSL-FILEMON.md` | 72 pontos, ID e procedência |
| Estado | `STATUS.md` — registros de 03/09 e 13/09 | seis entradas |

> ⚠️ **Sobre a fonte: quem a produziu vende formação no método descrito, no canal de quem vende a hospedagem do formato.** Os casos citados são reais; **a tendência de mercado afirmada é tese comercial.** Isso está registrado na destilação e não se apaga na transferência.

---
*Fechado em 13/09/2026. **Este arquivo é retrato de um ciclo, não fonte viva** — em divergência, valem os métodos em `100-métodos/` e o `CLAUDE.md`.*
