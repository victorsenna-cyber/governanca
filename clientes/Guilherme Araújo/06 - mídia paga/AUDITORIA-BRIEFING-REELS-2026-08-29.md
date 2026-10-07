# AUDITORIA — BRIEFING DE CAMPANHAS REELS DIRIGIDOS

> STATUS: VIGENTE · auditoria de briefing + verificação de conta
> Data: 2026-08-29 · America/Sao_Paulo
> Objeto: `06 - mídia paga/BRIEFING-CAMPANHAS-REELS-DIRIGIDOS-2026-08-29.md`, produzido pelo Codex
> Régua aplicada: `MODUS-OPERANDI.md` (`DEC-2026-08-26-001`) · `METODO-TRAFEGO-PAGO.md` · leitura direta da conta `605257748612701`
> Mutação externa nesta auditoria: **nenhuma**

---

## 0. Enquadramento

Esta auditoria roda sob `MODUS-OPERANDI.md`. Isso muda o que ela é.

A trilha vigente para este pedido é `EXECUCAO-DIRIGIDA-GUILHERME`. Divergência estratégica **não bloqueia** e não é objeto desta auditoria. O briefing não precisa convergir com a arquitetura recomendada em `DEC-2026-08-18-001` para ser executado.

O que esta auditoria verifica, e só:

1. **fatos** que o briefing declara e a conta contradiz;
2. **gates duros** do `MODUS-OPERANDI.md` §3.3;
3. **duplicação estrutural** e rastreabilidade;
4. **o que precisa ser propagado, e para onde.**

Ressalvas técnicas aparecem uma vez, marcadas como tal, conforme §3.1. Elas não condicionam a execução.

---

## 1. O achado que muda tudo

**O briefing planeja gates para uma campanha que já está no ar.**

O documento trata `GA|TOFU|FORMACAO|ENGAJAMENTO|DESPERTAR|20260826` como estrutura "publicada **em pausa**" e escreve, na §3: *"Esta campanha não pode ser ativada enquanto não estiverem testados o arquivo ou link real do áudio…"*

A conta, lida em 29/08:

| Campo | Briefing §5 declara | Conta responde |
|---|---|---|
| Status | publicada **em pausa** | **`ACTIVE`**, desde 26/08 às 18h43 |
| Orçamento | "então configurado em R$ 25,00/dia" | **R$ 15,00/dia** no conjunto |
| Gasto | não mencionado | **R$ 37,75** |
| Alcance | não mencionado | **8.950** pessoas |
| Comentários | não mencionado | **62** |

O próprio briefing declara a limitação com honestidade: *"Não houve nova verificação da conta para produzir este briefing."* A declaração está correta e é a razão de os três fatos estarem errados. **O documento é um plano escrito sobre um estado que já tinha mudado.**

---

## 2. Gate duro acionado

Um só, e é real. `MODUS-OPERANDI.md` §3.3 lista como bloqueio duro *"promessa, prova ou alegação materialmente falsa"* e *"ausência de ativo, acesso ou configuração técnica indispensável"*.

**Há até 62 pessoas que comentaram `DESPERTAR` e estão esperando o áudio "Decreto de Ativação Sistêmica".** O briefing declara que a existência e a entrega desse áudio não foram testadas.

Isso não é divergência estratégica. É promessa em circulação, com contrapartes reais, e uma verba correndo que aumenta a fila a cada dia.

**Três saídas, e a escolha é de Victor com Guilherme. Todas exigem ação hoje:**

| # | Ação | Quando cabe |
|---|---|---|
| 1 | Confirmar que o áudio existe e que os 62 já receberam | se a entrega está operando e só não foi registrada |
| 2 | Entregar o backlog hoje e seguir com a campanha ativa | se o áudio existe e a fila está parada |
| 3 | Pausar a campanha até a entrega estar operável | se o áudio não existe |

**A opção que não existe é continuar como está.** A cada dia de R$ 15,00 a fila cresce.

*(Verificação de gate, não julgamento de estratégia. O briefing acertou ao escrever o gate; ele só chegou depois da campanha.)*

---

## 3. Duplicação estrutural

O briefing manda criar `GA|TOFU|IG|TRAFEGO-PERFIL|IMATURA-MADURA|20260829`: Tráfego, `PROFILE_VISIT`, R$ 15/dia, Brasil, mulheres, 18–65, com semelhante 1% de seguidores, semelhante 1% de visitantes e visitantes 30D.

Já existe na conta, em pausa e sem nenhum gasto:

**`GA|TOFU|IG|TRAFEGO-PERFIL|LOOKALIKE|20260818`** · `120254780918080210`
Conjunto `120254780928790210` · `PROFILE_VISIT` · Brasil · mulheres · 18–65 · **exatamente os três públicos pedidos** · Advantage+ desligado · R$ 20/dia.

É a mesma campanha. O briefing §4.2 diz *"não duplicar campanhas pelo nome"* e a §5 reconhece que a estrutura de 18/08 existe, mas não manda reutilizá-la.

**Correção:** reutilizar `120254780918080210`. Ajustar o orçamento de R$ 20 para R$ 15, anexar o Reel `DYS-lPOBu4a` como publicação existente e renomear o conjunto para refletir o criativo.

**Ganho colateral que importa:** criar campanha nova é ato que o `MODUS-OPERANDI.md` §3.2 reserva a Victor. Reutilizar a estrutura existente mantém a execução dentro da alçada já aprovada e dispensa uma autorização nova.

---

## 4. Performance real — benchmark que não estava em lugar nenhum

A campanha ativa produziu números que nenhum documento do repositório registra ainda. Eles valem mais que o plano.

| Métrica | Valor | Leitura |
|---|---:|---|
| CTR | **7,74%** | **segundo melhor da conta**, atrás só de `A-CARTA-DO-JULGAMENTO` (12,67%). Supera `ESCOLHA1CARTA` (5,85%) |
| CPM | **R$ 3,29** | **o mais barato já registrado** nesta conta |
| Alcance | 8.950 | |
| Frequência | 1,28 | sem sinal de fadiga |
| Comentários | **62** | |
| **Custo por comentário** | **R$ 0,61** | primeiro número real de custo por intenção declarada desta conta |
| Engajamentos | 8.760 | |

**O criativo funciona.** Isso é fato medido, não opinião, e passa a ser a referência de comentário para os próximos ciclos.

O que o dado **não** diz: se comentário virou seguidor, conversa ou call. `instagram_profile_follow_v2` não é medido em campanha de engajamento, e não existe registro de comentário → DM → resposta. Sem essa camada, R$ 0,61 por comentário é custo, não resultado.

---

## 5. Ressalvas técnicas (registradas uma vez, não bloqueiam)

**5.1 — Posicionamentos abertos demais.** O conjunto ativo entrega em `audience_network`, `threads`, `marketplace`, `search` e `instream_video`, além de Facebook e Instagram. Para um Reel que pede comentário, essas superfícies compram alcance barato que não comenta, e explicam parte do CPM de R$ 3,29. O briefing especifica posicionamento para a campanha 1 e omite para a 2. Restringir a Instagram tende a subir o CPM e a taxa de comentário ao mesmo tempo.

**5.2 — Rastreabilidade de hipótese ausente.** `MODUS-OPERANDI.md` §4 exige `HG` ou `HIP-GUILHERME` no identificador dos testes originados de hipótese do Guilherme, e `HC`/`HIP-CONTINUUM` nos nossos. Nenhum dos dois nomes propostos carrega a marca, e o briefing não menciona a regra. Daqui a um mês, ninguém distingue de quem foi cada hipótese, que é exatamente o que a regra existe para evitar.

**Nomes corrigidos:**
`GA|HG|TOFU|IG|TRAFEGO-PERFIL|IMATURA-MADURA|20260829`
`GA|HG|TOFU|FORMACAO|ENGAJAMENTO|DESPERTAR|20260826`

**5.3 — Teto e realidade.** O teto de R$ 25/dia está sendo respeitado: há R$ 15/dia ativos. Com a campanha de tráfego a R$ 15 e DESPERTAR ajustada a R$ 10, fecha exatamente R$ 25. A instrução da §1 de *"pausar qualquer outra campanha ativa"* não tem alvo: a única campanha ativa da conta é a do próprio briefing.

---

## 6. Estado do repositório que ficou falso

Um fato registrado em `STATUS.md` deixou de ser verdade e precisa de correção, porque hoje ele desautoriza uma rota que funciona:

> `STATUS.md`, 26/08: *"conector nativo de Ads Manager: nenhuma conta acessível retornada — não usar como rota de execução até vinculação; Chrome é a rota disponível"*

**Falso em 29/08.** O conector Meta Ads lê e escreve na conta `605257748612701` sem intermediação de navegador. Toda a leitura desta auditoria, e a criação da campanha de 18/08, saíram por ele.

---

## 7. O que precisa ser propagado, e para onde

| # | Destino | O que muda | Estado |
|---|---|---|---|
| 1 | `06 - mídia paga/AUDITORIA-BRIEFING-REELS-2026-08-29.md` | este documento | criado |
| 2 | `STATUS.md` | campanha ativa desde 26/08, gasto, 62 comentários, benchmark novo, correção do conector | a escrever |
| 3 | `DECISOES.md` | o briefing entra como **PROPOSTA — NÃO VIGENTE**; a ativação de 26/08 entra como fato datado | a escrever |
| 4 | `DIARIO-DE-BORDO.md` | entrada da sessão | a escrever |
| 5 | `09 - operação/FILA-PROPAGACAO.md` | linha do gate do áudio e linha da reutilização da estrutura | a escrever |
| 6 | `09 - operação/RUNBOOK-SUBIDA-ONDA-1-TRAFEGO-PERFIL.md` | o runbook aponta para um plano superado pela execução dirigida | a ajustar |
| 7 | scheduled task `Onda 1 Guilherme` | mesma razão | a ajustar |
| 8 | Governança · `METODO-TRAFEGO-PAGO.md` §10 | R$ 0,61 por comentário e CTR 7,74% são candidatos a calibração de default | **SINALIZADA**, não executar aqui |

---

## 8. Veredito

**O briefing é executável.** A arquitetura de duas campanhas dentro de R$ 25/dia é coerente, os critérios de leitura da §6 estão certos, e o gate do áudio na §3 é a regra correta.

Três correções antes de executar, e nenhuma delas é estratégica:

1. **o áudio** — verificar hoje se os 62 comentários foram atendidos, e decidir entre entregar ou pausar;
2. **reutilizar** `120254780918080210` em vez de criar uma terceira campanha de tráfego;
3. **marcar `HG`** nos dois nomes, conforme a própria política do cliente.

E uma correção de fato no próprio documento: a §5 descreve a campanha DESPERTAR como pausada a R$ 25/dia. Ela está ativa a R$ 15/dia, com R$ 37,75 gastos e 62 comentários.

---

*Auditoria produzida sem qualquer mutação na conta de anúncio. Nenhuma campanha, conjunto, anúncio, verba ou publicação foi criado, alterado, pausado ou ativado.*
