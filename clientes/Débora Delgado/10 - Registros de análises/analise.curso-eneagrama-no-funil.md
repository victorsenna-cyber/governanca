# Análise — Curso Eneagrama no funil Seu Eixo (order bump / upsell / página própria)

> STATUS: HISTÓRICO · não editar
> Análise de 17/07 (Fable 5, Cowork). Decisões que derivarem daqui entram no `DECISOES.md` com "Propaga p/:". Base: DECISOES (até 16/07) · OFERTA-CANONICA (15/07) · GOVERNANCA-REPO · amostragem da transcrição do curso (92 aulas).

---

## 0. O que já está decidido (não reabrir)

- **Order bump existe desde 25/06** (curso de eneagrama, PagTrust). **Preço livre a critério do Victor desde 14/07** ("o que for mais estratégico; R$ 57 não tem problema nenhum"). Produto já renomeado na PagTrust para **"Curso Eneagrama"** (nome antigo vira subtítulo).
- Upsell ~R$ 997 segue **em avaliação** pelo Victor.
- Funil vigente: página → popup (nome/email/tel + turma) → checkout PagTrust (6 ofertas = 3 lotes × 2 turmas) → **obrigado-page por turma com o link do grupo de WhatsApp**.

Esta análise responde: quanto cobrar, ONDE inserir, e qual narrativa sustenta a percepção de valor — incluindo a página de vendas própria.

---

## 1. O que o produto realmente é (inventário da transcrição)

**92 aulas · 10 módulos · ~106 mil palavras transcritas (≈11–12h de aula).** Estrutura completa de identificação:

| Bloco | Conteúdo | Peso de valor |
|---|---|---|
| Mód. 1–2 | O que é o eneagrama (alegoria da casa de 9 quartos), símbolo, história + **método anti-erro de identificação** ("muitas pessoas passam anos achando que são outra personalidade") | Diferencial de credibilidade — ataca o erro nº 1 de quem já "fez teste na internet" |
| Mód. 3 | 3 centros de inteligência + pegadinhas | Didática própria |
| Mód. 4–6 | Os 9 tipos: **meditação guiada + questões centrais + características** por tipo (27 aulas) | Núcleo; as meditações são ativo raro em curso de entrada |
| Mód. 7 | Comparações tipo a tipo para sair da dúvida | Resolve a objeção "e se eu errar meu tipo?" |
| Mód. 8 | **27 subtipos** (instinto dominante × tipo, 28 aulas) | Quase nenhum curso de entrada no BR cobre subtipos — é argumento de profundidade |
| Mód. 9 | O maior arrependimento de cada tipo | Módulo emocional — gatilho honesto de urgência ("queria ter conhecido antes") |
| Mód. 10 | Próximos passos: auto-observação, asas/flechas, carreira, relacionamentos, instintos | Ponte natural para workshop e mentoria |

**Valor real:** é um curso completo e autossuficiente de identificação de tipo + subtipo, com voz calorosa e didática da Débora. Cursos equivalentes de eneagrama no mercado BR operam na faixa de R$ 197–997. E o fato mais valioso: **foi gravado como aula da mentoria — quem assistiu até hoje pagou R$ 4.000.** Essa é a única âncora 100% honesta disponível, e é forte.

**Limitações a respeitar na copy:** não certifica, não é formação profissional, e a promessa dele é autoconhecimento/identificação — **não** eficiência ou resolução de conflitos. A ponte com a promessa do workshop precisa ser construída (ver §5), nunca prometida como entrega do curso.

---

## 2. Viabilidade de execução

| Ponto de inserção | Fricção | Esforço | Veredito |
|---|---|---|---|
| **Order bump no checkout PagTrust** | 1 clique, zero desvio de fluxo | Configurar o bump nas **6 ofertas** + 1 bloco de copy | ✅ **Primário — fazer já** |
| **Bloco secundário na obrigado-page** (para quem não marcou o bump) | Baixa, mas divide atenção com o CTA do grupo | 1 bloco de HTML por obrigado-page (×6) | ✅ Secundário — **abaixo** do CTA do grupo, nunca competindo |
| **Upsell página cheia entre Purchase e obrigado** | ALTA sem 1-clique nativo (novo checkout = digitar tudo de novo) | Página + lógica de redirect | ❌ Não agora (ver risco §7) |
| **E-mail/WhatsApp D+1** (quem não pegou) | Zero no fluxo de compra | Usa a planilha de leads/compradores já existente | ✅ Terciário — recuperação |

**Verificações técnicas pendentes na PagTrust (Victor, ~1h):**
1. Bump nativo por oferta — confirmar que aparece nas 6 ofertas e que a marcação não quebra o **prefill** `name`/`email` via query string.
2. O evento `Purchase` reporta valor **com** o bump? (afeta ROAS no dashboard e o CPA-alvo da matemática reversa — sinalizar no `MATEMATICA-REVERSA-LANCAMENTO.md`.)
3. Entrega automática do curso pós-compra (área de membros/link) — comprador do bump precisa receber acesso **imediato**, porque "assistir antes do workshop" é o argumento central da oferta.

A regra crítica de UX: **a obrigado-page tem UM job — colocar o comprador no grupo da turma.** Comparecimento é o que vende a mentoria de R$ 4.000. Nada ali pode competir com esse clique.

---

## 3. Pricing

Regra prática de order bump: preço que se decide **sem deliberar** (idealmente ≤ ~40% do ticket principal).

| Preço do bump | % do L1 (R$97) | % do L2 (R$197) | % do L3 (R$257) |
|---|---|---|---|
| R$ 47 | 48% | 24% | 18% |
| **R$ 57** | 59% | **29%** | **22%** |
| R$ 97 | 100% | 49% | 38% |

**Recomendação: R$ 57 fixo em todos os lotes.**
- Endosso literal da Débora (14/07), preço psicológico abaixo de 60, e a proporção melhora sozinha quando o lote vira (a maior parte das vendas tende a vir de L2/L3, onde 57 fica em 22–29% — zona ótima).
- No L1 fica em 59% do ticket — acima do conforto teórico, mas o comprador de L1 é o mais quente do funil; não vale operar dois preços de bump pela margem de ganho hipotética de R$ 10.
- **Não escalar o bump com o lote** — complexidade sem retorno e quebra a percepção de "condição do checkout".

**Âncora de preço — regra de honestidade:** não inventar "de R$ 497 por R$ 57". Duas âncoras verdadeiras disponíveis:
1. *"Material que até hoje só quem entrou na mentoria (R$ 4.000) assistiu — primeira vez fora dela."* — usável desde já.
2. **Preço de tabela real** (sugestão: **R$ 297**) estabelecido pela página própria do curso (§6). Aí "R$ 297 → R$ 57 só neste checkout" vira aritmética verificável, não teatro.

**Matemática de ticket médio** (base: 40 vendas, 2 turmas cheias, ticket médio workshop ~R$ 150 no mix de lotes):
- Bump R$ 57 @ take 25% → +R$ 14,25/venda (**+9,5%** no ticket médio) · @ 35% → +R$ 20 (+13%).
- Resgate na obrigado/e-mail @ 10% × R$ 97 → +R$ 6–9/venda.
- **Teto realista combinado: +15–18% de ticket médio ≈ R$ 570–800 no lançamento.**

Leitura estratégica: em absoluto é pouco — o dinheiro real do funil segue sendo **1 venda de mentoria = R$ 4.000**. O valor do bump é triplo: (a) sobe ticket/ROAS marginalmente; (b) cria **comprador multi-produto** (propensão maior à mentoria); (c) — o mais importante — **quem faz o curso chega no Dia 1 já sabendo seu tipo**, o workshop rende mais, e o pitch da mentoria cai em terreno preparado. O bump é um investimento na conversão da mentoria disfarçado de receita incremental.

**Sobre o upsell ~R$ 997 em avaliação:** **não** usar o Curso Eneagrama nesse slot. A R$ 997 ele canibaliza a escada (fica a 25% da mentoria sem sustentar essa comparação) e mata o take rate. Se um dia existir upsell de R$ 997, precisa ser outro produto (ex.: laboratório/sessão em grupo). Fora do escopo desta análise.

---

## 4. Onde adicionar — desenho recomendado

```
Página → Popup (turma) → Checkout PagTrust
                              └─ [ORDER BUMP R$ 57 — 1 clique]
        → Obrigado-page da turma
              1º) CTA GRANDE: entrar no grupo do WhatsApp da turma   ← job único
              2º) bloco discreto abaixo: "Não marcou o Curso Eneagrama?
                  Ainda dá tempo de chegar no Dia 1 sabendo seu tipo" → checkout do curso
        → D+1 e-mail/WhatsApp p/ quem não pegou (mesma oferta R$ 57, janela de 48h honesta)
```

---

## 5. Narrativa de valor (percepção ↑ sem inflar promessa)

**Ângulo-mestre — o curso é a preparação para o workshop:**
O workshop lê os 3 sistemas *à luz do* eneagrama (regra 09/07: nunca ferramenta única). O Dia 1 é "o melhor em você é o que é natural → o mapa da sua maestria". O curso é onde o participante **aprende a se localizar nesse mapa antes de entrar na sala**. Não é um produto paralelo — é o Dia 1 estendido.

**Frase da própria Débora na aula 1 (usável, literal):** *"conhecer um pouco mais **como você funciona**"* — é exatamente o registro certo para o ICP líder, sem jargão de método.

**Elementos de percepção de valor (todos verificáveis):**
10 módulos · 92 aulas · 9 meditações guiadas (uma por tipo) · os 27 subtipos · módulo de comparação para não errar o tipo · o módulo dos arrependimentos · acesso imediato · material original da mentoria de R$ 4.000.

**Copy direcional do bump** (sujeita a `debora-voice` + varredura do léxico morto + aprovação Débora):

> **☐ Sim, quero chegar no Dia 1 já sabendo como eu funciono — R$ 57**
> Curso Eneagrama (10 módulos, 92 aulas, com as meditações de cada tipo): o material que até hoje só quem entrou na mentoria da Débora assistiu. Identifique sua personalidade e seu subtipo antes do workshop — e faça os 3 dias renderem em cima do **seu** mapa, não de um exemplo genérico. Acesso imediato.

Varredura léxico morto (§4 da governança) nesta copy: 0 hits. Sem "padrões", sem "talentos", sem NR-1, sem família da promessa antiga.

**O que NÃO fazer na narrativa:**
- Não vender como "curso de autoconhecimento" genérico — dilui o ICP líder. A moldura é sempre *preparação para o Seu Eixo*.
- Não prometer eficiência/conflitos→energia como entrega do curso (isso é o workshop). O curso entrega **identificação**.
- Não diagnosticar o lead como quebrado (régua de 30/06, viva no §6 da oferta).
- Não usar o eneagrama como sinônimo do método TRES ("à luz de", nunca "pela leitura de").

---

## 6. Página de vendas própria — viável e recomendada, como FASE 2

**Papel da página:** (a) estabelecer o **preço de tabela R$ 297** que torna o bump uma âncora aritmética honesta; (b) destino do resgate da obrigado-page e do e-mail D+1; (c) ativo perene (bio do Instagram, orgânico) que vende sozinho fora do lançamento.

**Execução na sequência do workshop:** mesmo design system (papel/musgo/petróleo/dourado, tokens do index v3), mesmo padrão de engenharia (HTML único autocontido), hospedada em `deboradelgado.space/eneagrama`, pixel base no head. Esforço: ~1 sessão de build + gates.

**Estrutura concisa (6 dobras):**
1. **Hero** — promessa de leitura de si na língua do líder (direcional: *"Antes de ler qualquer pessoa, aprenda a ler a que decide por você"* — copy final via `debora-voice`).
2. **O erro** — anos se identificando com o tipo errado (teste de internet vs. método; a Débora nomeia isso na aula 1).
3. **O mapa** — alegoria da casa de 9 quartos (literal da aula 2, é a melhor peça didática do curso).
4. **O que tem dentro** — números + os 10 módulos em 1 linha cada; destaque para meditações, subtipos e módulo anti-dúvida.
5. **Quem guia + procedência** — Débora + "material original da mentoria de R$ 4.000".
6. **Oferta** — R$ 297 · garantia 7 dias (CDC) · FAQ mínima (3 perguntas) · 1 CTA.

**Prioridade honesta:** a página **não bloqueia o bump** — o bump vai ao ar sem ela. E ela **não pode competir** com a fila P1 vigente (pacote v3 + criativos + verba). Sequência certa: bump agora → página quando o pacote v3 estiver aprovado/no ar.

---

## 7. Riscos

1. **Distração do objetivo do lançamento.** O prêmio é encher 2 turmas e vender mentoria. Bump = horas; página = 1 sessão. Nada além disso agora.
2. **Upsell pós-checkout com fricção** — sem 1-clique confirmado na PagTrust, upsell de página cheia atrasa o clique do grupo de WhatsApp. Por isso ficou de fora do desenho.
3. **Purchase com bump distorce CPA/ROAS** se a matemática reversa considerar só o ticket do workshop — 1 linha de ajuste no `MATEMATICA-REVERSA-LANCAMENTO.md` e no dashboard.
4. **Entrega do acesso** — se o acesso ao curso não for imediato/automático, o argumento "assista antes do workshop" quebra. Confirmar antes de ligar.
5. **Reembolso CDC 7 dias** — marginal a este preço; monitorar na PagTrust.

---

## 8. Decisões a bater (sinalizadas — não tomadas aqui; regra 16/07)

| # | Decisão | Alçada |
|---|---|---|
| 1 | Preço do bump **R$ 57 fixo nos 3 lotes** | Victor (já delegada pela Débora 14/07) |
| 2 | Configurar bump nas 6 ofertas + verificação técnica (§2) | Victor |
| 3 | Copy do bump (bloco do §5) | Débora aprova (SLA 3 dias úteis) |
| 4 | Preço de tabela do curso (**R$ 297** sugerido) — pré-requisito da âncora "de/por" | Victor + Débora |
| 5 | Fase 2: página própria + bloco na obrigado + e-mail D+1 | Victor (sequência pós-pacote v3) |

**Se aprovadas → linha no DECISOES com "Propaga p/:"** `OFERTA-CANONICA §2` (preço do bump deixa de ser "livre a definir") · `07/funil-debora` · obrigado-pages (×6) · `MATEMATICA-REVERSA-LANCAMENTO.md` (ticket médio c/ bump) · dashboard (Purchase value) · `04/LINKS CHECKOUTS` (se página própria ganhar checkout dedicado).
