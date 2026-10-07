# PLANO DE PROPAGAÇÃO — Diagnóstico de Operação no repo

> **Criado em:** 12/09/2026 · **Revisado no mesmo dia** · **Alçada:** Victor
>
> ## ✅ STATUS: APLICADO EM 12/09/2026
>
> **Todos os patches deste plano já foram aplicados no repo.** Este arquivo fica como **registro do que mudou e por quê** — útil para auditoria e para refazer a propagação se algum canônico for restaurado de backup. **Os trechos de patch abaixo estão na versão original; onde divergirem do arquivo canônico, vale o canônico.**
>
> **O que ficou no repo:** `servicos.md` §0 e §0-bis · `oferta.md` §3 (Degrau 0 + trilho ICP B) · `ICP.md` §4-bis e §5 · `onboarding.md` §2.1-bis · `POLITICAS` §5 · `CLAUDE.md` §9.1 · `METODO-ANCORAGEM-DE-PROPOSTA` (nota de entrada). Métodos em `100-métodos/`, template em `90-templates/diagnostico-operacao/`, skill em `10-skills/`.
>
> **Objetivo original:** fazer o diagnóstico virar **default de conta nova**, não iniciativa por cliente.
>
> **⚠️ REVISÃO DE 12/09 — o que mudou depois da decisão do Victor:**
> ① nome fechado: **Mapa da Ordem** · ② duas versões por **amplitude**: **Núcleo** R$ 1.997 (5 dimensões: 4 pilares + **Pivô de Conversão**) e **Operação** R$ 5.000+ (10 dimensões, com tráfego e dados/tracking) · ③ a casa passa a atender **dois ICPs**, e o segundo tem produto próprio (**Alicerce**, a partir de R$ 6.000) · ④ **todos os preços no piso de R$ 250/h — a exceção de piso deixou de existir.**
> Arquitetura completa, contas de viabilidade e patches do `ICP.md` em **`ARQUITETURA-DOIS-ICPS-2026-09-12.md`**.

---

## 0. RESUMO

| # | Arquivo | Ação | Risco |
|---:|---|---|---|
| 1 | `100-métodos/METODO-DIAGNOSTICO-DE-OPERACAO.md` | **criar** | nenhum |
| 2 | `90-templates/diagnostico-operacao/TEMPLATE-DIAGNOSTICO-OPERACAO.md` | **criar** | nenhum |
| 3 | `10-skills/diagnostico-operacao.skill.md` | **criar** | nenhum |
| 4 | `30-comercial/servicos.md` | patch — novo serviço §0 | baixo |
| 5 | `30-comercial/oferta.md` | patch — Degrau 0 na escada §3 | **médio** — mexe em preço |
| 6 | `30-comercial/onboarding.md` | patch — §2.1, o diagnóstico alimenta o plano de sucesso | baixo |
| 7 | `30-comercial/ICP.md` | patch — §5, apontar o roteamento para o método | baixo |
| 8 | `CLAUDE.md` da Governança | patch — promover `G0 diagnóstico` a regra geral | **médio** — é o kernel |
| 9 | `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md` | patch — ligação diagnóstico → âncoras | baixo |
| 10 | Kernel de cliente (`clientes/<nome>/CLAUDE.md`) | patch de padrão — `DIAGNOSTICO-<data>.md` no mapa de arquivos | baixo |
| 11 | `40-operacao-rotinas/FILA-MELHORIAS-REPO.md` | registrar as pendências | nenhum |

---

## 1. ARQUIVOS NOVOS

**Já escritos, prontos para entrar:**

- `100-métodos/METODO-DIAGNOSTICO-DE-OPERACAO.md`
- `90-templates/diagnostico-operacao/TEMPLATE-DIAGNOSTICO-OPERACAO.md`

**A criar (esboço abaixo):** `10-skills/diagnostico-operacao.skill.md` — para qualquer modelo rodar a rubrica sobre os insumos de uma conta, seguindo a mesma régua de linguagem. Estrutura sugerida:

```
1. Quando aplicar / quando não
2. Insumos obrigatórios (recusar rodar sem eles)
3. As 8 dimensões, com os testes de cada uma
4. A rubrica de conteúdo + a matriz de leitura cruzada
5. A régua de linguagem (lista banida + as 6 regras de entrega)
6. Gate de saída (a checklist)
7. Saída: preencher o TEMPLATE, nunca inventar formato
```

---

## 2. PATCH · `30-comercial/servicos.md`

**Onde:** antes do atual §1, como novo §0 (é o serviço que antecede todos).

```markdown
## 0. Mapa da Ordem *(porta de entrada paga · ICP A)*

**O que é:** mapeamento das dimensões de uma operação que já vende —
ICP, promessa, oferta, narrativa, página, funil, conteúdo e tráfego —
entregue como documento único, com o que está de pé, o que está travado,
quanto isso custa e em que ordem resolver.

| | Núcleo | Operação |
|---|---|---|
| Amplitude | 5 dimensões: ICP, promessa, oferta, narrativa e **Pivô de Conversão** | 10 dimensões: as 5 + página, funil, conteúdo, tráfego e dados/tracking |
| Prazo | 7 dias · devolutiva 45 min | 14 dias · devolutiva 90 min |
| Preço | **R$ 1.997** | **a partir de R$ 5.000** |

**Abatimento:** integral no setup da Assessoria, se fechada em até 15 dias
da devolutiva. O Núcleo abate no Operação dentro de 60 dias.
**Nas duas versões o cliente sai com o mapa E as sugestões de execução.**

⛔ **Não vender ao ICP B (quem ainda não fatura), nem com desconto.** Seis
das oito dimensões dependem de evidência que ele não tem. O produto daquele
ICP é o **Alicerce**.

**Por que existe:** a fase de descoberta é a que mais consome hora e era a
que sempre foi dada de graça. Na conta Bárbara Rosa o contrato só coube
porque a descoberta já tinha sido paga — do zero, a resposta correta seria
recusar. **Cobrar a descoberta é a correção estrutural mais cara que estava
em aberto.**

**O que ele NÃO é:** execução · plano de mídia · consultoria continuada ·
diagnóstico gratuito.

**Método:** `100-métodos/METODO-DIAGNOSTICO-DE-OPERACAO.md`
**Template:** `90-templates/diagnostico-operacao/`
```

**E logo depois, o segundo produto novo:**

```markdown
## 0-bis. Assessoria Estratégica · Alicerce *(ICP B — constrói do zero)*

**O que é:** construção dos 4 pilares para quem quer começar ou recomeçar:
ICP, promessa, oferta e narrativa, montados junto e testados em conversa real.

**Escopo fechado:** os 4 pilares. **Página, funil e campanha ficam fora**,
nomeados com o preço do degrau.
**Preço:** a partir de **R$ 6.000** (24h ao piso de R$ 250/h).
**Gate de saída:** a oferta foi levada a **pelo menos 10 conversas reais**
com o ICP definido, e as respostas estão registradas. **Não é "vendeu" —
é "foi testada".** Obrigação de meio, verificável pelas duas partes.

⚠️ **Teto de capacidade: 1 cliente de Alicerce por vez**, até haver um caso
completo. É construção pura, a fase de ~40h/mês da curva de carga.
```

**E no §8 (matriz serviço → dor → oferta), acrescentar as linhas:**

```markdown
| "quero alavancar e não sei por onde começar" | falta de visão de fora da própria operação | **Mapa da Ordem** → Assessoria |
| "quero começar, não sei montar nada disso" | não existe estrutura para diagnosticar | **Alicerce** (4 pilares, escopo fechado) |
```

---

## 3. PATCH · `30-comercial/oferta.md`

> ⚠️ **Risco médio: mexe em preço.** `POLITICAS-DE-DECISAO.md` §5 continua sendo a fonte de preço. Se este patch entrar, a linha precisa nascer lá também, ou nasce divergência igual à já registrada no §3 daquele arquivo.

**Onde:** no §3, acima da tabela da escada CORE.

```markdown
### Degrau 0 — Diagnóstico de Operação *(porta de entrada paga)*

| | |
|---|---|
| Preço | **R$ 1.997** |
| Entrega | documento único (8 dimensões) + devolutiva de 45 min, em 7 dias |
| Abatimento | **integral no setup**, se a Assessoria fechar em até 15 dias da devolutiva |
| Função na escada | filtra curioso · transforma descoberta em receita · **ancora a
proposta contra número real do cliente em vez de promessa** |

**Régua:** nenhuma proposta de Assessoria sai sem diagnóstico rodado — pago
como Degrau 0, ou coberto por fase de descoberta já executada e registrada.
Proposta sem diagnóstico é `n=0` e se escreve assim.
```

**E no §5 (lógica de ancoragem), acrescentar:**

```markdown
- **O diagnóstico é o instrumento de ancoragem.** Ele preenche as âncoras 1
a 6 com número do próprio cliente, que é o que o `METODO-ANCORAGEM-DE-PROPOSTA`
exige e o que faltava nas propostas anteriores.
```

---

## 4. PATCH · `30-comercial/onboarding.md`

**Onde:** no §2.1, depois da tabela "antes da venda / no kickoff".

```markdown
**⭐ De onde vem o esboço (instituído 12/09/2026):** o esboço do plano de
sucesso **não se escreve do zero**. Ele é derivado do Diagnóstico de
Operação (`100-métodos/METODO-DIAGNOSTICO-DE-OPERACAO.md`): a ordem de
execução do §7 do diagnóstico vira as fases do plano, e a primeira alavanca
do §6 vira o **first value com data**.

**Por que isso fecha um buraco:** antes, o esboço era montado a partir da
call de vendas, e a call de vendas nem sempre produzia número. **O
diagnóstico produz número por construção** — é o que ele é. Com ele, o
plano de sucesso deixa de ser estimativa apresentada como caminho e passa
a ser o caminho que o próprio cliente já viu descrito.
```

---

## 5. PATCH · `30-comercial/ICP.md`

**Onde:** no §5, no roteamento por score. A linha de 60–79 já cita "diagnóstico pago" — agora ela ganha destino.

```markdown
- **≥ 80 — Entrar:** proposta CORE Avançado/Full. **O diagnóstico entra como
  Degrau 0 abatível**, e é o que ancora a proposta.
- **60–79 — Amadurecer:** **Diagnóstico de Operação como porta**
  (`100-métodos/METODO-DIAGNOSTICO-DE-OPERACAO.md`). É o roteamento
  preferencial desta faixa: converte nutrição em receita e produz a
  ancoragem que a proposta vai precisar.
- **40–59 — Porta de entrada:** diagnóstico, ou oferta introdutória.
- **< 40 — Não aderente agora:** conteúdo/nutrição. **Não vender
  diagnóstico aqui** — sem demanda chegando, o mapa não tem o que mapear.
```

> ⭐ **A última linha é a mais importante deste patch.** O anti-ICP do diagnóstico é **quem ainda não vende**. O produto pressupõe operação em funcionamento; sem ela, seis das oito dimensões não têm evidência.

---

## 6. PATCH · `CLAUDE.md` da Governança (kernel)

> ⚠️ **Risco médio: é o kernel.** A regra abaixo já existe, instanciada na conta Carolina (`clientes/Carolina Ribeiro/CLAUDE.md` §4). O patch a **promove de regra de conta para regra da casa**.

```markdown
### Ordem obrigatória de toda conta nova

`G0 diagnóstico → âncoras preenchidas → folha interna → veredito → proposta`

**Sem atalho.** Enquanto o diagnóstico não rodar, toda a economia da conta é
`n=0` e é assim que se escreve.

**O diagnóstico é produto pago** (`100-métodos/METODO-DIAGNOSTICO-DE-OPERACAO.md`),
com uma exceção: conta cuja fase de descoberta já foi executada e está
registrada no repositório. **Nesse caso o diagnóstico já foi pago em hora,
e é isso que a exceção reconhece.**
```

---

## 7. PATCH · `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md`

**Onde:** no início, como nota de entrada.

```markdown
> **De onde vêm as âncoras (12/09/2026):** as âncoras 1 a 6 são preenchidas
> pelo **Diagnóstico de Operação**. Este método consome o diagnóstico; não o
> substitui. Âncora que o diagnóstico não conseguiu apurar entra aqui como
> **declarada faltante**, nunca estimada em silêncio.
```

---

## 8. PATCH DE PADRÃO · kernel de cliente

**Onde:** no `§ Mapa de arquivos` de todo `clientes/<nome>/CLAUDE.md`, e no template de conta nova.

```markdown
| `DIAGNOSTICO-<AAAA-MM-DD>.md` | **o mapa das 8 dimensões** — entregue ao
cliente. Fonte de toda leitura desta conta |
| `DIAGNOSTICO-<AAAA-MM-DD>-FOLHA-INTERNA.md` | rubrica preenchida, score de
ICP, âncoras cobertas e leitura comercial. ⛔ **nunca sai da casa** |
```

**Estrutura padrão de conta nova, a partir de agora:**

```
clientes/<nome>/
├── CLAUDE.md                  kernel da conta
├── STATUS.md                  estado vivo
├── DECISOES.md                log de decisões
├── DIAGNOSTICO-<data>.md      ⭐ o mapa (cliente)
├── DIAGNOSTICO-<data>-FOLHA-INTERNA.md   ⛔ interno
├── 01-contexto/               transcrições, registros, materiais
└── proposta/                  estrutura e peças
```

---

## 9. ORDEM DE APLICAÇÃO

| # | O quê | Estado |
|---:|---|---|
| ~~1~~ | ~~Bater o nome~~ | ✅ **Mapa da Ordem**, 12/09 |
| **2** | Criar método + template + matriz de leitura | ✅ **feito** |
| **3** | ⭐ **Bater o nome da linha do ICP B** (Alicerce ou Fundação) | 🔴 **trava os itens 4 a 8** |
| **4** | Patch em `servicos.md` (§0 Mapa da Ordem + §0-bis Alicerce) | aguarda item 3 |
| **5** | Patch em `ICP.md` (§4 anti-ICP revisto + §4-bis dois ICPs) | aguarda item 3 |
| **6** | Patch em `onboarding.md` (§2.1) | pode ir agora |
| **7** | Levar preços a `POLITICAS` §5 **antes** de `oferta.md` | decisão sua |
| **8** | Patch em `oferta.md` (Degrau 0 com as duas versões + Alicerce) | aguarda item 7 |
| **9** | Patch no `CLAUDE.md` da Governança | itens 4 a 8 estáveis |
| **10** | Patch em `METODO-ANCORAGEM-DE-PROPOSTA` | pode ir agora |
| **11** | Skill `diagnostico-operacao.skill.md` | método estável |
| **12** | Aplicar o padrão nos kernels das contas existentes | — |

---

## 10. PRIMEIRO USO — o teste de campo

**A conta Carolina é o candidato natural.** O `ROTEIRO-DIAGNOSTICO-CALL.md` dela já existe, a call já rodou, e o gate de saída dela pede 8 números. **O diagnóstico das 8 dimensões é a versão generalizada do que já foi feito ali** — rodar o método sobre aquela conta valida a rubrica sem custo de aquisição.

**Duas ressalvas daquela conta:** tráfego é território da agência dela (dimensão 8 entra como leitura, nunca como oferta), e existe restrição de dado sensível de saúde que o documento precisa respeitar.

> **Régua: rodar em duas contas antes de promover o método a canônico.** Uma conta valida a forma; duas validam a rubrica.

---

## 11. DECISÕES ABERTAS

| # | Decisão | Trava |
|---:|---|---|
| ~~1~~ | ~~O nome do diagnóstico~~ | ✅ **Mapa da Ordem**, 12/09 |
| **2** | ⭐ **Nome da linha do ICP B** — `Alicerce` recomendado · `Fundação` era a sua sugestão | itens 4 e 5 da §9 |
| ~~3~~ | ~~Preço e versões do Mapa~~ ✅ **resolvido 12/09**: Núcleo R$ 1.997 · Operação R$ 5.000+, ambos no piso | — |
| **4** | O Alicerce entra no catálogo **agora**, ou depois do primeiro Mapa rodado? | são dois produtos novos de uma vez |
| **5** | Mapa vira **pré-requisito obrigatório** de proposta, ou porta opcional? | patch do kernel (§6) |
| **6** | Teto de clientes de Alicerce simultâneos — recomendo **1** | capacidade da carteira |
| **7** | Quem executa quando a carteira encher — o Mapa é delegável? | gate de contratação |

---
*Criado e revisado em 12/09/2026. Arquivos novos prontos e no repo; patches escritos e não aplicados.*
