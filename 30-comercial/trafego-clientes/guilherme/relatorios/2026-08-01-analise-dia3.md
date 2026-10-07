# ANÁLISE — ciclo 1, dia 3 · Guilherme Araújo

> **Tipo:** estado (camada 3) · Lida na API em 01/08/2026 · Campanha `120254286988070210` no ar desde 29/07/2026
> Veredito: **o objetivo contratado não está sendo entregue.** A entrega de mídia está ótima; o evento que importa é zero.

---

## 1. Números

| Indicador | Valor | Leitura |
|---|---|---|
| Gasto | **R$ 51,60** de R$ 600 (8,6% do ciclo) | ~R$ 17,20/dia — entregando quase a verba cheia |
| Impressões | 11.114 | |
| Alcance | 10.183 | |
| Frequência | 1,09 | **público fresco, zero fadiga** — não é problema de saturação |
| CPM | **R$ 4,64** | **excelente.** A conta compra atenção barata |
| ThruPlay | 904 · R$ 0,06 cada | |
| **Tempo médio de visualização** | **8 segundos** (vídeo de 59s) | **o número que explica tudo** |
| Assistiram até o fim | 111 (**1,0%**) | |
| Reações | 130 | |
| Salvamentos / compartilhamentos | 4 / 3 | irrelevante |
| **Comentários novos** | **0** | **o objetivo da campanha** |
| Custo por clique no link | R$ 8,60 | irrelevante aqui (destino é o post) |

**Verificação independente do dado que decide:** o Reel `17986328897848935` tinha **3 comentários e 5 curtidas** em 29/07, antes de a campanha subir. Em 01/08, depois de R$ 51,60 e 10.183 pessoas alcançadas, continua com **3 comentários e 5 curtidas**. Não é ruído de atribuição da plataforma — é o contador do próprio post.

### Por conjunto

| | **FOCO SC** | **Brasil amplo** |
|---|---|---|
| Gasto | R$ 35,86 | R$ 15,74 |
| Impressões | 7.420 | 3.694 |
| CPM | R$ 4,83 | **R$ 4,26** |
| CTR | 0,11% | **0,30%** |
| Frequência | 1,11 | 1,01 |
| Assistiu 25% | 604 (8,1%) | 303 (8,2%) |
| Assistiu 100% | 81 (**1,09%**) | 30 (0,81%) |
| Comentários | 0 | 0 |

## 2. Erro estrutural: 4 anúncios, 2 por conjunto

| Conjunto | Anúncio | Gasto | CTR |
|---|---|---|---|
| SC | `120254287074700210` | R$ 30,92 | 0,13% |
| SC | `120254287215110210` — **"Cópia"** | R$ 4,94 | **0,00%** |
| Brasil | `120254287071590210` | R$ 13,07 | 0,36% |
| Brasil | `120254287206430210` | R$ 2,67 | **0,00%** |

Dois anúncios idênticos por conjunto disputam o mesmo leilão, fatiam o aprendizado e um deles não entrega nada. **R$ 7,61 já foram para anúncios com CTR zero.** Correção: pausar as duas duplicatas — reversível, não reseta o aprendizado do principal (melhora, porque para de competir consigo mesmo).

## 3. Diagnóstico (ordem do método §7.4 — não tratar sintoma como causa)

1. **Tracking?** Evento é nativo da plataforma. Descartado.
2. **Oferta?** Não existe oferta no criativo. É conteúdo puro, sem promessa e sem troca. Contribui.
3. **Página/atendimento?** N/A — o destino é o próprio post.
4. **Criativo — causa nº 1.** **8 segundos de retenção média num vídeo de 59 segundos.** A instrução "escolha uma carta e comente" só existe para quem chega lá, e 99% não chega. Não é o gancho que falha (8s é gancho ok); é que a mecânica de comentário está enterrada no meio de um vídeo de um minuto.
5. **Público — causa nº 2, e é onde eu errei.**

### O erro de premissa que assumo

O plano ancorou a meta em **R$ 1,19/comentário**, apresentado como "média real da conta". Os três conjuntos que formaram essa média eram:

- seguidores + visitantes 30 dias (quente) → 203 comentários
- lookalike 1% + visitantes (semi-quente) → 184 comentários
- seguidores + visitantes, otimizado para REPLIES (quente) → 3 comentários

**Nenhum era broad frio.** Não havia um único dado de público frio nesta conta, e o plano tratou a média de públicos aquecidos como se fosse válida para público novo. Isso foi extrapolação apresentada como benchmark. O leilão corrigiu em três dias.

Público quente comenta porque já conhece quem pediu. Público frio assiste 8 segundos e passa.

### O dado orgânico que fecha o argumento

Todos os Reels dele publicados entre 25/07 e 31/07 estão com **0 comentários orgânicos**. O Reel das cartas, com 3, é o campeão da safra.

**O formato não gera comentário nem com a audiência própria dele.** Mídia distribui; não conserta criativo que não pede nada com clareza.

## 4. Regra acionada

**Kill hard (§7.3):** a régua calibrada era *"gastou R$ 3,60 (3× o alvo) sem 1 comentário"*. Gastamos **R$ 51,60 — 14× o gatilho — com zero comentários.** Aciona mesmo dentro da janela de 72h.

**Kill hard NÃO se aplica pela régua de CTR.** O plano previa "CTR < 0,5% com ≥ 2.000 impressões" e os dois conjuntos estão abaixo disso — mas em campanha com destino no próprio post, clique não é o evento contratado. Aplicar essa régua aqui seria tratar sintoma como causa. **A régua de CTR do `PLANO-DE-MIDIA.md` §5 está mal calibrada para este tipo de campanha e precisa ser corrigida.**

**O que NÃO matar:** a campanha e a estrutura. CPM de R$ 4,64 e frequência de 1,09 dizem que a entrega está barata e o público está fresco. O erro é criativo e público, não arquitetura.

## 5. Correções propostas, em ordem de retorno

| # | Ação | Custo | Efeito esperado |
|---|---|---|---|
| **1** | **Pausar os 2 anúncios duplicados** (CTR 0,00%) | zero | para de queimar verba e de competir consigo mesmo |
| **2** | **Trocar o criativo** para o Reel `DbBvCeYhhc7` — *"comente MAPEAMENTO que eu envio o link"* | zero | instrução explícita + palavra-chave + **oferta gratuita** = a única peça do acervo com mecânica real de comentário. Ataca exatamente a causa nº 1 |
| **3** | **Abrir 3º conjunto com público quente** — Seguidores + Visitantes 30d + Lookalike 1% (já existem na conta) | remanejar verba | é onde os R$ 0,68/comentário aconteceram de verdade |
| **4** | **Reconsiderar o evento otimizado** — ver §6 | — | pode tornar as ações 2 e 3 desnecessárias |

### A tensão que ele precisa decidir (ação 3)

**O que gera comentário barato nesta conta é a base dele. O que ele pediu é Santa Catarina.** Os públicos personalizados são nacionais — não dá para ter os dois no mesmo conjunto sem esvaziar a amostra. Ou o ciclo persegue comentário barato (quente, nacional), ou persegue território (frio, SC). **Decisão do Guilherme, não nossa.**

## 6. A recomendação de fundo: talvez comentário seja o evento errado

O fim da linha é **call → Jornada da Permissão (R$ 2.997)**. O comentário é meio, não fim — e é um meio que exige a pessoa assistir 59 segundos, entender a mecânica, comentar um número, esperar a DM e então conversar. **Cinco passos antes da primeira palavra trocada.**

O Guilherme **responde DM rápido** — é o ativo mais forte dele. Com CPM de R$ 4,64, uma campanha de **Mensagens (`CONVERSATIONS` → Instagram Direct)** coloca a pessoa direto na DM: **um passo**, e cai exatamente onde ele é bom.

**O contra-argumento honesto:** (a) ele queria comentário público como prova social acumulando no post — isso se perde; (b) a rota `REPLIES` já queimou em junho. Mas queimou com **frequência 4,18 em público quente esgotado** — foi fadiga de audiência, não falha de conceito. Em público novo, a hipótese nunca foi testada.

**Proposta:** rodar as ações 1 e 2 primeiro (custo zero, atacam a causa provável) e dar mais 4 dias. Se o comentário continuar em zero com um criativo que **pede** comentário, o problema não é o criativo — é o evento. Aí migra para Mensagens sem culpa e sem achismo.

## 7. Projeção se nada mudar

No ritmo atual, os R$ 600 do ciclo compram **~129.000 impressões, ~118.000 pessoas alcançadas e zero comentários.** A meta era 500 comentários e 20 calls.

Alcance não é resultado. É a métrica que o método proíbe como manchete (§8), e é a única que esta campanha está entregando bem.

---
*Base: conta act_605257748612701 lida por API em 01/08/2026 · `METAS.md` · `PLANO-DE-MIDIA.md` · `METODO-TRAFEGO-PAGO.md` §7.3 e §7.4.*
