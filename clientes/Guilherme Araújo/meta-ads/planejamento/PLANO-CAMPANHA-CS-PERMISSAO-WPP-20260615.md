# PLANO DE CAMPANHA — Cartomancia Sistêmica da Permissão (Conversas WhatsApp)

> **ATUALIZAÇÃO POSTERIOR — 26/08/2026:** horário vigente do Grupo: **terça-feira, às 20h**. As menções a 19h30 abaixo são histórico do plano de 15/06 e não podem ser reutilizadas em anúncio novo. Plano semestral vigente: **R$ 497**. Ver `DEC-2026-08-26-002`.

Data: 2026-06-15
Criativo: `01 - Criativos/Cartomancia Sistêmica da Permissão/WhatsApp Image 2026-06-14 at 19.16.19.jpeg`
Conta: CA 01 / terapeutaguilhermearaujo — `act_605257748612701` (BRL)
Página: `103620069213113`
Objetivo: ENGAJAMENTO → Conversas no WhatsApp (Click-to-WhatsApp), venda 1x1
Teto de orçamento: R$ 25/dia
Produto: Grupo de Cartomancia Sistêmica da Permissão — R$ 97/mês (aula toda terça 19:30)

---

## 1. DIAGNÓSTICO

**Problema real**
O criativo "Teto do Quase" tem promessa forte (expandir vida profissional/financeira sem culpa) e oferta de baixa fricção (R$ 97/mês). Mas oferta de assinatura recorrente NÃO se vende sozinha no anúncio — vende-se na conversa. O risco é o anúncio gerar curioso místico em vez de comprador.

**Impacto no negócio**
Com objetivo de Conversas no WhatsApp, o anúncio não precisa fechar a venda: precisa gerar a conversa certa. A venda do R$ 97/mês acontece na triagem do WhatsApp, onde se nomeia a dor ("teto do quase", culpa de prosperar) e se apresenta o grupo como próximo passo natural. O gargalo a vigiar é qualidade da conversa, não volume.

---

## 2. ARQUITETURA

**Módulos envolvidos:** Atração (Meta Ads) → Captação (WhatsApp triagem) → Conversão (oferta R$ 97/mês na conversa) → Entrega (grupo terça 19:30).

**Como se conectam:**
Anúncio Click-to-WhatsApp → mensagem pré-preenchida com palavra-chave → script de triagem → link de pagamento do grupo → onboarding (entrada no grupo + lembrete da 1ª aula).

Com teto de R$ 25/dia, a estrutura é **enxuta de propósito**: 1 campanha, 1 conjunto principal, 2 anúncios (mesma imagem, copy diferente). Orçamento baixo não comporta muitos conjuntos competindo — fragmentar mata o aprendizado.

---

## 3. FLUXO OPERACIONAL

1. Meta Ads (criativo "Teto do Quase") chama atenção com ângulo "expandir sem culpa".
2. Clique abre WhatsApp com mensagem pré-preenchida: palavra-chave `PERMISSÃO`.
3. Resposta automática/manual inicia triagem (3 perguntas curtas).
4. Qualificação: momento, área de bloqueio (dinheiro/decisão/direção), disposição de investir R$ 97/mês.
5. Apresentação do grupo como próximo passo (aula terça, formato, valor).
6. Envio do link de pagamento.
7. Confirmação → entrada no grupo em até 24h + lembrete da 1ª aula.
8. Registro: origem = campanha, criativo, status no CRM/planilha.

---

## 4. EXECUÇÃO ETO

### ESTRATÉGICO
Validar se o ângulo "teto do quase / prosperar sem culpa" gera conversa qualificada para uma oferta de assinatura de R$ 97/mês — antes de escalar verba. A campanha é um teste de mensagem-mercado com risco financeiro mínimo.

### TÁTICO — Estrutura proposta

**CAMPANHA**
`GA|MOFU|CS-PERM|CONVERSAS-WPP|META|20260615`
- Objetivo: Engajamento (Outcome Engagement)
- Meta de conversão: Conversas por mensagem (WhatsApp)
- Orçamento: CBO desligado (orçamento no conjunto, para controlar o teto)

**CONJUNTO 1 (principal — público aberto/interesses)**
`AS|CS-PERM|INTERESSES-AUTOCONHEC|BR|F-28-55|ADV+|20260615`
- Orçamento diário: **R$ 18/dia**
- Otimização: Conversas (CONVERSATIONS)
- Destino: Click-to-WhatsApp
- Público: Mulheres, 28–55, Brasil
- Interesses: autoconhecimento, espiritualidade, tarô/cartomancia, terapias holísticas, desenvolvimento pessoal, empreendedorismo feminino
- Posicionamento: Advantage+ (deixar o Meta otimizar com verba baixa)

**CONJUNTO 2 (lookalike — ativar só após 1ª semana, se houver folga)**
`AS|CS-PERM|LAL-ENGAJAMENTO-IG-1-3|BR|F-28-55|ADV+|20260615`
- Orçamento diário: **R$ 7/dia** (completa o teto de R$ 25)
- Público: Lookalikes já existentes na conta — Engajamento Instagram:
  - `120215686200120210` — Semelhante 1% / IG 14d
  - `120215686200300210` — Semelhante 1-2% / IG 14d
  - `120215686200320210` — Semelhante 2-3% / IG 14d
- Obs.: estão INACTIVE; ativam automaticamente ao entrar num conjunto em veiculação.

> Recomendação para R$25/dia: **começar SÓ com o Conjunto 1 a R$25/dia** nos primeiros 5–7 dias para concentrar aprendizado. Quebrar em 2 conjuntos só após validar a conversa. (Decisão final é sua.)

**ANÚNCIOS (2 variações — mesma imagem, copy diferente)**

`AD|PERMISSAO|TETO-QUASE|ESTATICO|CONVERSAR|20260615` — Ângulo "Permissão"
`AD|DECISAO|TETO-QUASE|ESTATICO|CONVERSAR|20260615` — Ângulo "Clareza/Decisão"

### OPERACIONAL
- Auditar diariamente em `meta-ads/logs/YYYY-MM-DD.md`.
- Não mexer nos primeiros 3–4 dias (fase de aprendizado).
- Trocar copy antes de trocar imagem; trocar imagem antes de trocar público.

---

## 5. COPYS (prontas — conforme política do CLAUDE.md, linguagem contextual, sem afirmar condição do leitor)

### Anúncio 1 — Ângulo "Permissão"
**Primary text:**
Existe um lugar onde a vida parece sempre travar no "quase". Quase o próximo nível. Quase a renda que você sabe que é possível. Quase a leveza de prosperar sem aquele peso no peito.

O Grupo de Cartomancia Sistêmica da Permissão é um encontro semanal para profissionais do autoconhecimento que querem expandir vida profissional e financeira com mais clareza, propósito e leveza.

Aula online toda terça, às 19:30.

Quer entender como funciona? Me chama no WhatsApp.

**Título:** Chega de viver no teto do quase
**Descrição:** Expansão com leveza, propósito e abundância
**CTA:** Enviar mensagem
**Mensagem pré-preenchida:** `Oi! Vi o anúncio do Grupo da Permissão e quero saber mais. (PERMISSÃO)`

### Anúncio 2 — Ângulo "Clareza/Decisão"
**Primary text:**
Para quem já entende muito de transformação, mas sente que algo invisível segura a própria expansão.

A Cartomancia Sistêmica olha o que o campo familiar, emocional e financeiro está pedindo para ser visto — e abre direção prática para desbloquear padrões e se permitir prosperar.

Um grupo, aula ao vivo toda terça às 19:30, para caminhar com mais foco e confiança.

Curioso(a) pra entender o método? Chama no WhatsApp que eu te explico.

**Título:** Desbloqueie padrões. Permita-se prosperar.
**Descrição:** Grupo de Cartomancia Sistêmica da Permissão
**CTA:** Enviar mensagem
**Mensagem pré-preenchida:** `Oi! Quero entender o Grupo da Permissão. (PERMISSÃO)`

### Script de triagem no WhatsApp (3 passos)
1. "Que bom que você veio! Pra eu te explicar do jeito certo: o que mais pesa hoje — dinheiro, decisão ou direção?"
2. "E você já faz algum trabalho com autoconhecimento / atende pessoas, ou está buscando isso pra você?"
3. "O grupo é um encontro ao vivo toda terça (19:30), por R$ 97/mês. Faz sentido eu te mandar como entrar?"

---

## 6. MÉTRICAS (KPIs)

| Camada | KPI | Meta inicial (referência, validar com dados) |
|---|---|---|
| Anúncio | CTR link | > 1,2% |
| Anúncio | CPM | acompanhar (sem meta fixa no início) |
| Conversão Meta | Conversas iniciadas | volume diário |
| Conversão Meta | Custo por conversa | < R$ 8–12 |
| WhatsApp | Taxa de resposta à triagem | > 50% das conversas |
| Comercial | Conversa → pagamento | medir a partir da 1ª venda |
| Negócio | CAC por assinante R$97/mês | payback ideal ≤ 1 mês |

Frequência: vigiar para não passar de ~2,0 com verba baixa.

---

## 7. RISCOS

1. **Curioso místico em vez de comprador** → triagem filtra na pergunta 2; se vier muito curioso, reforçar promessa operacional na copy.
2. **Volume baixo de dados com R$25/dia** → não tirar conclusão antes de ~50 conversas acumuladas; evitar otimização por ansiedade.
3. **Página com leadgen_tos não aceito** → irrelevante aqui (Conversas não exige leadgen ToS), mas confirmar que a página `103620069213113` é a oficial do Guilherme antes de publicar.
4. **Oferta recorrente esfria** → onboarding no grupo em até 24h + lembrete da 1ª aula de terça.
5. **Copy violar política Meta** (tema sensível: dinheiro, bloqueio, espiritualidade) → copys já escritas em linguagem contextual, sem afirmar condição do leitor nem prometer resultado garantido.

---

## 8. OTIMIZAÇÃO (ciclo)

1. Dia 1–4: não mexer (aprendizado).
2. Dia 5: ler CTR e custo por conversa. CTR baixo → revisar hook/copy. CTR bom + poucas conversas → revisar mensagem pré-preenchida e velocidade de resposta no WhatsApp.
3. Conversa boa + sem venda → revisar script de triagem e oferta percebida.
4. Validou conversa qualificada + 1ª venda → ativar Conjunto 2 (lookalike) e/ou subir verba gradualmente (+20%).
5. Registrar cada ajuste em `meta-ads/logs/`.

---

## PRÓXIMA AÇÃO — Aguardando sua confirmação

Este é o **plano**. Criar a campanha no Meta exige confirmação (regra do CLAUDE.md). Quando quiser que eu execute:

```
AÇÃO PROPOSTA: Criar campanha + 1 conjunto (R$25/dia) + 2 anúncios Click-to-WhatsApp na conta act_605257748612701, em modo PAUSED para revisão.
IMPACTO ESPERADO: Estrutura pronta na conta, sem gasto até você ativar.
RISCO: Baixo — nada veicula enquanto estiver pausado.
COMO REVERTER: Excluir os ativos criados antes de ativar.
CONFIRMAR COM: executar
```

Antes disso, preciso de 1 dado que não está nos arquivos: **o número de WhatsApp de destino** (ou confirmar que a página `103620069213113` já tem WhatsApp conectado no Gerenciador).
