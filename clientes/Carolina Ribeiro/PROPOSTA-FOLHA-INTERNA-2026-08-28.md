# FOLHA INTERNA — Proposta Carolina (IVS) · v0 pré-diagnóstico

> ⛔ **ESTA FOLHA NUNCA SAI DA CASA.** Contém Âncora 7 (hora, margem, capacidade). `ANCORAGEM` §5.1 · `POLITICAS` §5.
> **Data:** 28/08/2026 · **Dono:** Victor · **Status:** 🟡 **v0 — âncoras 1 a 4 e 6 declaradas FALTANTES por ausência de dado.**
> Objetivo desta v0: **provar que a proposta ainda não pode existir, e nomear exatamente o que a torna possível.**
> **Atualização 28/08/2026 (2ª):** a **oferta e a estrutura da proposta estão desenhadas** — `OFERTA-CAROLINA-2026-08-28.md` e `proposta/ESTRUTURA-PROPOSTA.md`. O que continua faltando são as âncoras 1, 2, 4 e 6, que só o diagnóstico preenche, mais o custo por conversa (DEC-CA-12), que é nosso. **A Âncora 7 completa e ratificável vive agora no §8 do arquivo da oferta.**

---

```
PROPOSTA: Carolina Ribeiro (IVS Itapema · Tijucas) · 28/08/2026
VIA: caixa  (atendimento e recontato que já têm demanda paga chegando)
─────────────────────────────────────────────────────────────────
1. BREAKEVEN   dele: FALTANTE — sem ticket e sem margem de contribuição
               nosso: A = 24h de setup · 10h/mês  |  B = 100h de setup · 20h/mês
2. PAYBACK     FALTANTE — depende de margem × vendas recuperadas/mês
3. GERAÇÕES    G0 7d → G1 30d → G2 60d → G3 90-120d
               probabilidade de avanço: n=0  (nenhum caso nosso em franquia multi-loja)
4. INAÇÃO      FALTANTE — fórmula fechada, faltam 4 variáveis (ver §2)
5. CONDIÇÕES   nomeadas abaixo (§3) — únicas âncoras completas hoje, junto com a 7
6. CENÁRIOS    FALTANTE — sem base para conservador
7. NOSSO       ver §4 — entrega de A cabe · entrega de B ACIONA CONTRATAÇÃO D1
               (hora virou linha de custo, não veto — POLITICAS §4-bis)
─────────────────────────────────────────────────────────────────
GATES   A (procedência) ❌ não aplicável — não há número
        B (fronteira)   ✅ escrita em DEC-CA-07
        C (via)         ✅ caixa
RECUSA §3: NENHUMA das 5 condições ativa.
        (condição 4 reescrita em 28/08: só reprova se a entrega exigir
         estratégia delegada antes do piso de D4 — esta não exige)
VEREDITO v0: ⛔ NÃO PROPOR AINDA — por falta de DADO DELA, não por capacidade
             rodar G0 · propor A e B depois do diagnóstico
```

---

## 1. Por que o veredito é este, e não "manda um valor por alto"

Ela **pediu orçamento** (F-10) e há **concorrente sendo avaliado** (R-1). A pressão para mandar um número rápido é real e é exatamente o que o método existe para impedir.

Um número mandado hoje seria comparado, ponto a ponto, com o do concorrente — **numa comparação que só tem preço, porque é a única variável que os dois lados teriam**. Com os números dela na mesa, a comparação muda de eixo: deixa de ser "quanto custa" e vira "quanto está vazando".

**Não é lentidão. É a única forma de a conversa não ser sobre preço.**

---

## 2. Âncora 4 — custo da inação: a fórmula está pronta, faltam 4 números

```
Custo da inação (R$/mês) =
      leads_mês
    × % sem resposta ou parados no 1º toque
    × conversão histórica lead→venda
    × margem de contribuição por venda
  + ( base_inativa × % reativável × margem )        ← reativação
  + ( horas/mês da Carolina em tarefa operacional × valor da hora dela )  ← Oferta B
```

| Variável | Origem | Bloco da call |
|---|---|---|
| leads/mês por loja | relatório da agência | 1 |
| % sem resposta / parados no 1º toque | ela + planilha de 6 toques | 2 |
| conversão lead→venda | ela | 2 |
| **margem de contribuição** (nunca ticket) | ela | 3 |
| base de clientes + ciclo de recompra | cadastro/sistema | 3 |
| horas dela em operacional e financeiro | ela | 4 |

**Gate de recusa nº 2 do método:** se o custo da inação vier **menor que o preço**, a proposta não existe naquela forma — reduz escopo ou recusa. Esta conta parece grande; **parecer não é medir.**

---

## 3. Âncora 5 — condições de validade (completa desde já)

| Condição | Dono | Se falhar |
|---|---|---|
| Equipe usa o handoff (abre o dossiê e responde) | **Carolina** | a métrica de conversão deixa de valer; ficam só TMR e cobertura |
| Número de WhatsApp por loja liberado, com acesso administrativo | **Carolina** | G1 desloca; não há entrega parcial de canal |
| Relatório mensal da agência acessível | **Carolina / agência** | CAC por loja sai do painel |
| Base de clientes exportável com data de compra e nascimento | **Carolina** | reativação e aniversário saem do escopo da fase |
| Franqueador IVS não bloqueia integração/comunicação | **franqueador** | integração vira leitura manual; escopo e prazo mudam |
| Aprovação de voz, oferta e teto de desconto do agente | **Carolina + Ítalo** | o agente não entra no ar |
| **WhatsApp governado e persistência autenticada prontos do nosso lado** | **Victor** | 🔴 **G1 desloca por causa nossa — e aí a garantia de execução paga o mês** |

---

## 4. Âncora 7 — viabilidade nossa (agora custo, não veto)

> 🔴 **Reescrita em 28/08/2026.** A v0 original desta folha reprovava a Oferta B por teto de horas. **Errado na raiz:** hora é insumo comprável; o que a Continuum vende é a forma de pensar estratégia, e isso não se delega. `POLITICAS` §4-bis · `100-métodos/METODO-GATE-DE-CONTRATACAO.md`.

| Régua | Oferta A | Oferta B |
|---|---|---|
| Preço de referência (`POLITICAS` §5) | CORE Essencial: **setup R$ 6.000 + R$ 2.500/mês** | CORE Full: **setup R$ 25.000 + R$ 5.000/mês** |
| Teto de horas implícito (÷ R$ 250/h) | 24h setup · **10h/mês** | 100h setup · **20h/mês** |
| **Quem entrega** | Victor | **Victor (arquitetura, diagnóstico, calibração) + contratado D1 (build, integração, deploy, QA)** |
| Cabe na agenda hoje? | 🟡 sim, no limite | **não sozinho — e isso não reprova nada.** Aciona contratação |
| **Receita que paga a contratação** | — | **parcela de setup da própria Oferta B** (nomeada, com data) |
| **Rampa no prazo** | — | **2 a 4 semanas** (`n=0`), com hora do Victor em dobro no período |
| Exige D4 (estratégia) delegada antes do piso? | ❌ não | ❌ **não** — diagnóstico, oferta, preço e call seguem 100% Victor |
| Margem ≥ 70% em recorrência | 🟡 verificar após medir horas reais | 🟡 recalcular já com o custo do contratado dentro |
| Desconto | **zero.** Amizade não é desconto | zero |
| Gate institucional | ✅ livre | 🟡 **DEC-CA-08** — gate de foco do Continuum OS, decisão do Victor |

**Segunda loja (Tijucas) na Oferta A:** entra como **incremento de configuração**, não como projeto novo. Régua: loja adicional **não pode custar o mesmo que a primeira**, ou o modelo não escala e vira serviço por hora disfarçado.

⭐ **A leitura que substitui a anterior:** as duas ofertas são vendáveis. O que muda entre elas não é permissão, é **estrutura de entrega** — A sai da mão do Victor, B sai da mão do Victor **mais uma contratação D1 com custo, receita nomeada e rampa declarada**. O que ainda decide é o dado dela (âncoras 1, 2, 4 e 6) e o gate de foco da DEC-CA-08. **Nada mais.**

**Freio que continua de pé (§5 do método de contratação):** a contratação só é acionada com receita nomeada. Contratar para a Carolina **antes** de a Oferta B estar assinada só acontece pelo gatilho de cobertura de pipeline ≥ 3× — hoje **não atingido** (`STATUS.md` geral §3: sem cobertura). Na prática: **contratação disparada na assinatura**, com a entrada de 50% do setup cobrindo o primeiro ciclo.

## 5. O que muda o veredito

| Evento | Novo veredito possível |
|---|---|
| Call de diagnóstico com os 7 números do gate | **propor A**, com breakeven, payback e três cenários reais |
| Custo da inação < preço de A | **reduzir escopo** — versão só de recepção + T1..T3, sem reativação |
| Volume pequeno (breakeven exige > +30% de vendas) | **recusar A na forma atual** e propor G0 pago como produto (`ANCORAGEM` §4) |
| **DEC-CA-08 fechada em (i)** — manter o gate do OS | B fica **desenhada, precificada e datada**, não vendida agora |
| **DEC-CA-08 fechada em (ii)** — abrir nominalmente | B vendida como **caso fundador**, com contratação D1 na assinatura e rampa no prazo |

---

## 6. Registro de exposição

- **Obrigação aberta com prazo informal:** orçamento pedido em ~23/08/2026, ainda não entregue. Cada dia sem data marcada aumenta a chance de o concorrente do Ítalo ocupar o espaço. **A mitigação não é mandar preço — é marcar a call.**
- **Risco de relação:** proposta mal ancorada aqui custa mais que a venda. Registrado em `CLAUDE.md` desta conta §2.
- **Exposição nova, criada pela decisão de 28/08:** se a Oferta B fechar, a Continuum passa a depender de uma contratação que ainda não existe. **Mitigação obrigatória:** PJ por escopo (custo variável), entrada de 50% do setup antes de qualquer compromisso de prazo, e rampa declarada no contrato. Sem as três, o freio de caixa do §5.1 do método está sendo furado.
