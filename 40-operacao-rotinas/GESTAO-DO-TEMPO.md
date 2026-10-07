# GESTÃO DO TEMPO — Ritmo Circadiano + Janela de Tokens

> **Tipo:** rotina (camada 3) · **Criado:** 2026-07-20 · **Dono:** Victor.
> Complementa `RITUAIS.md` (cadência de negócio, a dois) com a camada **pessoal do Victor**: quando o corpo trabalha e como a IA é racionada.
> Princípio: **a energia é o recurso mais escasso da empresa — mais que caixa. O dia é desenhado para gastar a melhor energia no trabalho de maior alavanca, e a IA cara na hora certa.**
> Precedência: em conflito de horário com `RITUAIS.md`, os blocos que exigem a Nakielly ou clientes (daily, prospecção, calls) vencem — eles são a dois; o resto se adapta a este ritmo.

---

## 1. O RITMO — dormir 20h30, acordar 04h30

Ciclo alvo: **8h de sono (20h30 → 04h30)**. A madrugada é o ativo pessoal mais caro do Victor: 4 horas de foco solo, sem WhatsApp, sem cliente, sem ruído — antes de o mundo comercial acordar.

Regra de ouro: **a madrugada é para CRIAR e DECIDIR, não para reagir.** Nada de e-mail, grupo ou prospecção nesse bloco. O comercial (que precisa do horário do outro) fica na janela comercial.

### 1.1 O dia padrão (segunda a sexta)

| Horário | Bloco | Natureza | Energia |
|---|---|---|---|
| **04h30–05h00** | **Abertura do dia** — água, corpo, ler `STATUS.md` + o plano do dia. Sem tela de rede social. | ritual | despertar |
| **05h00–08h30** | **BLOCO SAGRADO DE CRIAÇÃO (solo)** — a peça de maior alavanca do dia: página, decisão estrutural, arquitetura de funil, trabalho com IA pesada. Uma coisa só, profunda. | criação profunda | **pico** |
| 08h30–08h50 | Transição — café, preparar a daily, olhar placar. | buffer | — |
| **08h50–09h05** | **Daily com a Nakielly** (RITUAIS §3.1) | coordenação | social |
| **09h05–11h30** | **Bloco de prospecção (com a Nakielly)** (RITUAIS §2) | comercial | ativa |
| 11h30–12h00 | Registrar pipeline (RITUAIS §2) | registro | — |
| 12h00–13h30 | **Almoço + descanso real** (o corpo que acorda 04h30 precisa disto) | recuperação | vale |
| 13h30–16h30 | **Calls de fechamento · produção de sites · onboarding** (RITUAIS §2) | execução/comercial | média |
| **16h30–17h00** | **Check-out** (RITUAIS §2/§3.3) — placar do dia, bloqueio de amanhã nomeado, **fila de IA da madrugada montada (§4.3)** | registro | — |
| 17h00–19h30 | **Vida / desligamento** — sem trabalho de alavanca. Tarefas leves no máximo (responder, arrumar). | desaceleração | queda |
| **19h30–20h30** | **Ritual de sono** — telas desligam, luz baixa, sem tela azul. Deixar a fila da madrugada pronta é o que permite soltar. | desligamento | — |
| **20h30** | **DORMIR** | — | — |

### 1.2 Gatilhos de horário (alarmes — você configura no celular)

| Hora | Alarme | Ação |
|---|---|---|
| **04h30** | "Abrir o dia" | levantar, água, ler STATUS + plano |
| **05h00** | "Bloco sagrado começa" | 1 tarefa de criação, sem rede |
| **08h45** | "Daily em 5" | fechar o bloco solo, salvar o trabalho |
| **16h30** | "Check-out + montar fila da madrugada" | placar + fila de IA (§4.3) |
| **19h30** | "Desligar telas" | início do ritual de sono |
| **20h15** | "15 min para dormir" | luz baixa, deitar |

> Quando quiser, eu converto estes 6 gatilhos em tarefas agendadas nesta interface (você escolheu "só documento" por ora — o protocolo está pronto para automatizar depois).

### 1.3 Fim de semana e proteção
- Sábado: regime de guerra permitido (criação/sistema/buffer), **mesmo ritmo de sono**. Sem prospecção fria (RITUAIS §2).
- **Domingo: recuperação protegida — mínimo meio dia** (`STATUS.md` §4 · política de capacidade). Inegociável: o burnout do Victor é o maior risco operacional único da empresa.
- **Regra do ritmo quebrado:** dormiu tarde uma noite? No dia seguinte, **acordar no mesmo 04h30 e dormir mais cedo à noite** — nunca "compensar" dormindo até tarde (isso desregula o ciclo por dias). Uma noite ruim é evento; duas seguidas é alerta amarelo — cortar a causa.

---

## 2. GESTÃO DE JANELA DE TOKENS — o arsenal disponível

Três fontes de IA, cada uma com sua janela de reset. A regra-mãe: **nunca queimar inteligência cara em trabalho barato, e nunca ficar sem a janela certa na hora que ela é insubstituível.**

| Fonte | Reset | Papel (cruzar com PROTOCOLO-MULTI-MODELO §1) | Escassez |
|---|---|---|---|
| **Claude Pro — Conta A** | janela de ~5h (rolling) | conta primária do dia: Cowork, Code, decisões e builds | recarrega ao longo do dia |
| **Claude Pro — Conta B** | janela de ~5h (rolling) | **reserva de continuidade**: assume quando a A satura no meio de um bloco | recarrega ao longo do dia |
| **ChatGPT Business — Codex** | **janela SEMANAL** | volume técnico: refino de código, revisão cruzada, direções de design | **o mais escasso — não recarrega no dia; some até a virada da semana** |

### 2.1 A regra de ouro da janela semanal (Codex)
O Codex é o único recurso que **não volta se acabar** — a janela é semanal. Portanto:
- **Codex é planejado, não improvisado.** Entra na fila da semana com tarefas nomeadas, não "vou usando".
- Reservar Codex para o que **só ele faz bem**: refino de código em paralelo ao Claude Code, revisão cruzada técnica, direção de design que já provou (PROTOCOLO §1).
- **Nunca** usar Codex para o que uma conta Claude Pro (que recarrega) resolve. Gastar recurso semanal em tarefa diária é o erro mais caro.
- **Meio da semana (quarta): checar o saldo da janela semanal.** Se já gastou >60%, racionar o resto para o que é crítico até a virada.

### 2.2 Alternância das 2 contas Claude Pro
- **Conta A é a padrão.** Abre o dia, carrega o bloco sagrado.
- **Conta B entra quando:** (a) a A atinge o limite no meio de um bloco de criação e você não pode parar; (b) você quer **paralelizar** — A construindo, B auditando (a "revisão cruzada barata" do PROTOCOLO §1, sem gastar Codex).
- **Não alternar à toa:** trocar de conta perde contexto da conversa. Só troca por saturação ou paralelização deliberada.
- **Sinal de saturação chegando:** respostas cortadas, lentidão, aviso de limite → salvar o estado no log do projeto ANTES de trocar, para a outra conta retomar do contrato, não do zero (PROTOCOLO §2).

---

## 3. PRIORIDADE DE TASK POR CUSTO DE TOKEN

Toda tarefa recebe um **peso de token** e é roteada pela janela mais adequada. Isso cruza o custo de IA com a energia do bloco (§1).

### 3.1 Classificação por peso

| Peso | O que é | Exemplos | Onde roda |
|---|---|---|---|
| 🟢 **LEVE** | edição mecânica, contexto curto, resposta rápida | propagar data/preço, renomear, formatar, 1 pergunta objetiva, checklist | Code Assist grátis · Conta Pro (sobra) · **fim do dia, energia baixa** |
| 🟡 **MÉDIO** | 1 arquivo/peça, contexto médio, alguma decisão dentro de contrato | 1 página de copy sobre matriz travada, 1 script, ler 1 síntese e agir | Claude Pro (A) · Codex se for código · **manhã comercial ou tarde** |
| 🔴 **PESADO** | contexto longo, criação nova, múltiplos arquivos, decisão estrutural | arquitetar funil, peça-mestra, auditoria de método, ler projeto inteiro | **Bloco sagrado 05h00 (pico)** · Conta A (+B se saturar) · Fable quando disponível |

### 3.2 As duas regras que decidem

**Regra do casamento energia × token:** trabalho 🔴 PESADO só no bloco de pico (05h00–08h30), quando a sua cabeça e a janela de tokens estão ambas cheias. 🟢 LEVE vai para o fim do dia, quando a energia cai — não desperdiça o pico com trabalho barato.

**Regra do reset:** antes de começar um 🔴 PESADO, confirmar que a janela aguenta o bloco inteiro. Se a Conta A está no fim da janela, **começar já na B** — não iniciar peça pesada com token contado. Codex (semanal) nunca entra em 🔴 improvisado: se for pesado e técnico, planejar na fila da semana.

### 3.3 Fila diária (montada no check-out 16h30, para a madrugada seguinte)
No check-out, deixar escrito no plano do dia seguinte:
1. **A tarefa 🔴 do bloco sagrado** (uma só — a de maior alavanca).
2. Qual **conta/ferramenta** ela usa (A, B, ou aguarda Fable).
3. **Contrato pronto** (PROTOCOLO §2): arquivo-contrato + fontes + skills (máx 3) + saída/gate. Assim, às 05h00, você executa — não decide o que fazer.
4. Fila 🟡/🟢 para os outros blocos.

> Deixar a fila pronta na véspera é o que permite dormir 20h30 em paz: a madrugada já sabe o que fazer.

---

## 4. RESUMO — os 4 hábitos que sustentam tudo

1. **04h30 acorda, 20h30 dorme** — e o bloco 05h00–08h30 é sagrado para criação solo.
2. **Codex é semanal: planejar, nunca improvisar** — checar saldo na quarta.
3. **Peso de token casa com energia:** 🔴 no pico da madrugada, 🟢 no fim do dia.
4. **Fila da madrugada montada no check-out de 16h30** — véspera pronta = sono tranquilo.

---
*Base: `RITUAIS.md` (cadência a dois) · `00-core/PROTOCOLO-MULTI-MODELO.md` (roteamento de ferramentas §1, contrato §2) · `STATUS.md` §4 (proteção de recuperação · burnout como risco nº 1) · realidade: 2 contas Claude Pro + ChatGPT Business/Codex (janela semanal). Registro: 2026-07-20 — criação.*
