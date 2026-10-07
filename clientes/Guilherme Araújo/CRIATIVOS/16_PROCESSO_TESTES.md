# 16_PROCESSO_TESTES.md
Versão: 1.0 | Criado: 2026-05-24

---

## Princípio de testes

Testar é aprender com dado, não validar intuição.

Um teste válido tem: uma variável isolada, uma hipótese clara, um KPI principal e um critério de decisão definido antes de ativar.

---

## Ordem obrigatória de testes

Nunca pular etapas. Testar na seguinte sequência:

```
1. Hook
2. Ângulo
3. Estrutura narrativa
4. Formato
5. CTA
6. Visual
7. Oferta percebida
```

**Regra:** só avançar para a próxima variável quando a anterior tiver resultado definido (vitória ou corte).

**Motivo:** o hook determina se há atenção. Sem atenção, qualquer outro teste é inválido.

---

## Isolamento de variável

**Regra fundamental:** uma variável por teste.

| Teste | O que muda | O que permanece igual |
|---|---|---|
| Teste de hook | Abertura dos primeiros 3s | Ângulo, estrutura, CTA, visual |
| Teste de ângulo | Ponto de entrada estratégico | Hook da v1, estrutura, CTA, visual |
| Teste de estrutura | Modelo narrativo (A/B/C/D) | Hook validado, CTA, visual |
| Teste de formato | Reels / Estático / Carrossel | Hook e ângulo validados |
| Teste de CTA | Convite ao final | Hook e estrutura validados |
| Teste visual | Paleta, fundo, fonte | Hook e estrutura validados |
| Teste de oferta | Promessa percebida na comunicação | Hook e CTA validados |

**Exceção:** nunca válida — se duas variáveis mudarem, o resultado não ensina nada.

---

## KPIs por tipo de teste

| Variável testada | KPI principal | KPI secundário |
|---|---|---|
| Hook | Thumbstop rate (retenção aos 3s) | CTR link |
| Ângulo | CTR link | Comentários qualitativos |
| Estrutura narrativa | LPV rate (cliques → PageViews) | Retenção de vídeo (%) |
| Formato | CTR link + CPM | CPC link |
| CTA | CTR link | LPV rate |
| Visual | Thumbstop rate | CPM |
| Oferta percebida | LPV rate | Conversão |

---

## Hipóteses

Cada teste exige hipótese registrada antes da ativação.

**Formato de hipótese:**

```
VARIÁVEL TESTADA: [o que está sendo testado]
HIPÓTESE: [se X, então Y — resultado esperado com justificativa]
CRIATIVO DE CONTROLE: [versão de referência]
CRIATIVO DE TESTE: [versão nova]
KPI PRINCIPAL: [métrica de decisão]
CRITÉRIO DE VITÓRIA: [valor ou comparação que define vencedor]
CRITÉRIO DE CORTE: [valor que encerra o teste]
```

**Exemplo preenchido:**

```
VARIÁVEL TESTADA: Hook
HIPÓTESE: Hook de situação específica (cliente à frente sem saber o que dizer) terá thumbstop maior que hook de reconhecimento genérico (anos de experiência)
CRIATIVO DE CONTROLE: CR-001_v1 (Hook R1)
CRIATIVO DE TESTE: CR-001_v2 (Hook R3)
KPI PRINCIPAL: Thumbstop rate (retenção aos 3s)
CRITÉRIO DE VITÓRIA: Retenção aos 3s superior em ≥20% sobre v1 E CTR link ≥2%
CRITÉRIO DE CORTE: CTR link abaixo de 1% após 7 dias com R$40+ gasto
```

---

## Critérios de corte

Encerrar o teste quando qualquer condição abaixo for atingida:

| Condição | Critério de corte | Ação |
|---|---|---|
| CTR link muito baixo | <1% após 7 dias com R$40+ | Pausar — o ângulo ou hook não funciona |
| Thumbstop fraco | Retenção <20% aos 3s após 5 dias | Iterar hook antes de continuar |
| Gasto sem clique | R$100+ no ângulo sem LPV qualificada | Pausar o ângulo |
| Público fora do ICP | Comentários mostram audiência errada | Pausar e revisar hook de qualificação |
| Frequência alta com queda | Frequência >4 com CTR em declínio | Pausar por fadiga de audiência |

**Regra:** não pausar antes do dia 5 com menos de R$30 gasto. Dados insuficientes invalidam a decisão.

---

## Critérios de vitória

Declarar vencedor quando:

| Condição | Critério de vitória |
|---|---|
| Teste de hook | CTR link ≥2% E thumbstop ≥30% E frequência <2,5 |
| Teste de ângulo | CTR link ≥2% E LPV rate ≥40% após 7 dias |
| Teste de estrutura | LPV rate ≥40% E retenção de vídeo ≥50% aos 30s |
| Teste de formato | CTR link ≥2% E CPM dentro do benchmark da conta |
| Teste de CTA | CTR link ≥2% E LPV rate ≥40% |
| Teste visual | Thumbstop ≥30% E nenhum sinal de confusão nos comentários |
| Teste de oferta | LPV rate ≥40% E presença de intenção de compra nos comentários |

**Regra:** o vencedor substitui o controle como nova referência para o próximo teste.

---

## Cadência de testes

| Dia | Ação |
|---|---|
| Dia 1–3 | Verificar entrega: CPM, alcance, aprovação |
| Dia 3–5 | Verificar thumbstop e CTR iniciais — não decidir ainda |
| Dia 5 | Checar se gasto mínimo de R$30 foi atingido |
| Dia 7 | Decisão formal: vitória / corte / aguardar |
| Dia 7–14 | Se inconclusivo: aguardar até R$80 ou dia 14 |
| Após vitória | Escalar vencedor — iniciar próximo teste na sequência |
| Após corte | Registrar aprendizado — criar nova versão com hipótese diferente |

**Regra:** máximo de 2 iterações no mesmo ângulo sem resultado. Após 2 cortes, pausar o ângulo e registrar.

---

## Checklist pré-teste

Confirmar antes de ativar qualquer teste:

- [ ] ID do criativo registrado em `10_BACKLOG_CRIATIVOS.md`
- [ ] Hipótese registrada (formato acima)
- [ ] Variável isolada — apenas uma mudança em relação ao controle
- [ ] KPI principal definido
- [ ] Critério de vitória definido
- [ ] Critério de corte definido
- [ ] Nomenclatura do anúncio no Meta Ads correta (`15_NAMING_CONVENTION.md`)
- [ ] URL de destino verificada (LP correta)
- [ ] Pixel PageView ativo na LP
- [ ] QA aplicado (`12_CHECKLIST_QUALIDADE.md`)
- [ ] Orçamento de teste definido (R$20–40/dia por variante)
- [ ] Duração mínima do teste definida (7 dias)

---

## Checklist pós-teste

Confirmar ao encerrar qualquer teste:

- [ ] Dados coletados: CTR, LPV rate, CPM, frequência, retenção, comentários
- [ ] KPI principal registrado
- [ ] Resultado comparado com critério de vitória/corte
- [ ] Decisão documentada: VENCEDOR / CORTE / AGUARDAR
- [ ] Aprendizado registrado em `13_WORKFLOW_ITERACAO.md` (log de aprendizados)
- [ ] `10_BACKLOG_CRIATIVOS.md` atualizado com status e resultado
- [ ] Se vencedor: próxima variável de teste identificada
- [ ] Se corte: hipótese para nova versão registrada
- [ ] Log diário atualizado em `meta-ads/logs/YYYY-MM-DD.md`

---

## Tabela de decisão

| Resultado | CTR link | LPV rate | Thumbstop | Decisão | Próximo passo |
|---|---|---|---|---|---|
| Vencedor claro | ≥2% | ≥40% | ≥30% | Escalar — declarar vencedor | Testar próxima variável na sequência |
| CTR baixo, thumbstop ok | <2% | — | ≥30% | Iterar CTA ou estrutura | Criar v2 com CTA diferente |
| CTR ok, LPV baixo | ≥2% | <30% | — | Problema na LP, não no criativo | Auditar LP — não pausar o criativo |
| Thumbstop fraco | <20% aos 3s | — | <20% | Iterar hook | Criar v2 com hook diferente |
| Tudo baixo | <1% | <20% | <20% | Cortar ângulo | Pausar — registrar e criar novo ângulo |
| Público fora do ICP | qualquer | qualquer | qualquer | Cortar | Revisar hook de qualificação |
| Inconclusivo (d7) | 1–2% | 30–40% | 20–30% | Aguardar | Verificar no dia 14 ou com R$80 gasto |

---

## Estrutura de registro de teste

Cada teste recebe um registro próprio. Usar este formato em `13_WORKFLOW_ITERACAO.md`:

```
DATA DE ATIVAÇÃO: 2026-MM-DD
CRIATIVO CONTROLE: CR-001_v1
CRIATIVO TESTE: CR-001_v2
VARIÁVEL TESTADA: Hook
HIPÓTESE: [hipótese registrada antes da ativação]
KPI PRINCIPAL: CTR link
RESULTADO AO DIA 7:
  - CTR link controle: X%
  - CTR link teste: Y%
  - Thumbstop controle: X%
  - Thumbstop teste: Y%
  - LPV rate: X%
  - Frequência: X
  - Comentários: [qualitativo]
DECISÃO: VENCEDOR / CORTE / AGUARDAR
APRENDIZADO: [o que isso ensina sobre o ICP]
PRÓXIMO PASSO: [próxima variável ou nova versão]
```

---

## O que não fazer em testes

- Ativar dois testes de variáveis diferentes ao mesmo tempo
- Mudar o orçamento durante o período de teste (afeta aprendizado do algoritmo)
- Pausar antes do critério de corte ser atingido
- Declarar vitória sem atingir o critério definido (confirmar por número, não por feeling)
- Testar formato antes de validar hook e ângulo
- Reusar criativo pausado como controle sem registrar que estava pausado
- Escalar criativo sem validar que o pixel está registrando eventos corretamente
