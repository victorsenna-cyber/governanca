# PLANO DE INTEGRAÇÃO — pasta `fundação/` → estrutura do repo

> **Aberto:** 20/08/2026 · **Origem:** 12 artefatos em `fundação/`, ~80 KB, datados 20/08/2026
> **Regra:** integração **aditiva**. Nada existente é substituído ou apagado. Onde há destilação prévia no repo, o artefato de fundação entra como **fonte primária**, e o destilado passa a citá-la.

---

## 1. O que estes 12 arquivos são

**São as fontes primárias que o `PROJECT.md` já referenciava como externas e que nunca estiveram no repositório:**

| Referência existente | Artefato que chegou |
|---|---|
| `PROJECT.md` §8: *"Acordo sistêmico societário e mapeamento: `07 - Desenho Humano (societário)`"* | Acordo Sistêmico · Human Design · Blueprint · Fricção · INFRA |
| `PROJECT.md` §10: *"Tese de investimento / deck: `20 - Tese Investimento/`"* | Tese Investimento |
| `CLAUDE.md` §7: *"`20-projeto-escopo/` — pendente"* | Organograma · Estatuto · Narrativa |

**Não são material novo: são o alicerce que faltava sob o que já está escrito.**

---

## 2. ⚠️ O achado que vale mais que os arquivos

**A fundação previu, por escrito, quase tudo o que de fato aconteceu.**

`Acordo Sistêmico Societário` §4 — *Riscos estruturais previsíveis*:

| # | Risco previsto | Status hoje |
|---:|---|---|
| 1 | *"Victor assumir tudo → **Burnout estratégico**"* | ✅ **materializado** — registrado como risco operacional nº 1 desde julho |
| 2 | *"Nakielly não reconhecida → **Amargura silenciosa**"* | ✅ **materializado** — e "Amargura" é literalmente o Tema do Não-Ser dela no Human Design (Projetora) |
| 3 | *"Ithallo pressionado emocionalmente → **Decisões instáveis**"* | ✅ **materializado** — saiu da operação |
| 4 | *"Mistura de espiritualidade + empresa → Confusão de papéis"* | parcial |
| 5 | *"**Falta de estrutura formal** → Conflitos velados"* | ✅ **materializado** — nenhum instrumento assinado até hoje |

**Quatro de cinco.** E para cada um havia prevenção escrita — **nenhuma executada**:

| Instrumento previsto | Status |
|---|---|
| **Indicadores de saúde societária** (clareza de papéis · confiança mútua · sobrecarga individual · alinhamento estratégico, 0–10, mensal, **gatilho: qualquer item < 7 → reunião de ajuste**) | ❌ nunca rodado |
| Ritual semanal de alinhamento (4 perguntas fixas) | ❌ nunca rodado |
| Reunião emocional/relacional mensal | ❌ nunca rodada |
| Conselho Fundador mensal · Comitê Executivo semanal | ❌ não instalados |
| Regra das 24h para decisão sob tensão | ❌ não aplicada |
| Uma prioridade central a cada 15 dias | ❌ não aplicada |
| Reconhecimento explícito periódico | ❌ não feito |

> **O indicador de saúde societária teria disparado meses antes da ruptura.** São quatro perguntas, uma vez por mês, com gatilho automático.
>
> **Lição de método para o repositório: sistema previsto e não executado não protege ninguém.** É exatamente o diagnóstico que vendemos a clientes — e a mesma régua vale aqui dentro.

---

## 3. Destino de cada artefato

### 3.1 Fonte primária de algo já destilado — entra como âncora, não substitui

| Artefato | Destino | Ação |
|---|---|---|
| `Manifesto Continuum` | `00-core/fundacao/MANIFESTO-FUNDACAO.md` | `00-core/MANIFESTO.md` **já é a destilação deste texto** (mesma tese, mesmas 4 primeiras linhas). Preservar os dois; o destilado passa a citar a fonte |
| `Manual de Decisões e Autoridade` | `00-core/fundacao/` | já destilado em `POLITICAS-DE-DECISAO.md` §1 (alçadas). Preservar como origem e **reconciliar a matriz de 3 sócios com a realidade de 2** |

### 3.2 Conteúdo societário que o repo não tem — entra inteiro

| Artefato | Destino | Nota |
|---|---|---|
| `Acordo Sistêmico Societário` | **`00-core/ACORDO-SISTEMICO-SOCIETARIO.md`** | é **política e identidade** (camada 1–2). Contém ordem, pertencimento, equilíbrio, protocolo de conflito, regra de decisão, 4 camadas de governança e os 5 riscos. **Documento mais importante do lote** |
| `Prevenção de Cenários de Conflitos Futuros` | seção do arquivo acima | 763 bytes — complementa, não merece arquivo próprio |
| `Estatuto Societário Estratégico` | **`80-juridico/societario/ESTATUTO-BASE.md`** | é o **documento-base para formalização jurídica**, e traz o **Protocolo de Saída §VI** que legitima retroativamente a compra da parte do Ithallo |
| `Organograma Oficial Futuro` | `20-projeto-escopo/ORGANOGRAMA.md` | é estrutura-alvo, não estado atual. **Marcar como futuro**, para não conflitar com a realidade de 2 pessoas |

### 3.3 Camada energética/sistêmica — pasta nova

| Artefato | Destino |
|---|---|
| `Human Design` | **`00-core/mapa-energetico/HUMAN-DESIGN-SOCIOS.md`** |
| `Blueprint Energético` | `00-core/mapa-energetico/BLUEPRINT.md` |
| `FRICÇÃO ENERGÉTICA` | `00-core/mapa-energetico/FRICCAO.md` |

**Por que em `00-core/`:** o `CLAUDE.md` §3 define `00-core/` como identidade — *"quem somos, como nos comportamos"*. O mapa energético é exatamente isso. E o `PROJECT.md` §8 já o declarava como fonte societária.

**Guardrail obrigatório no cabeçalho dos três**, espelhando o que o `MANIFESTO.md` já faz: *inspira e explica padrões de comportamento, **não decide**. Decisão operacional continua com número e critério (`POLITICAS-DE-DECISAO.md`).*

### 3.4 Operacional — vira ritual, não fica como leitura

| Artefato | Destino | Ação |
|---|---|---|
| `INFRA ALINHAMENTO SISTÊMICO` | **`40-operacao-rotinas/RITUAIS.md`** | ⭐ **é o de maior valor prático do lote.** Extrair para rituais executáveis: indicador de saúde societária, ritual semanal de alinhamento, regra das 24h, prioridade única quinzenal. O texto íntegro vai para `00-core/mapa-energetico/` |

### 3.5 Comercial e investimento

| Artefato | Destino | Nota |
|---|---|---|
| `Narrativa Estratégico-Comercial` | `30-comercial/NARRATIVA-CONTINUUM.md` | 5 pilares em sequência + frase de posicionamento. **Verificar contra `MAPA-DE-RECEITA.md` e `oferta.md`** antes de tratar como vigente |
| `Tese Investimento` | `20-projeto-escopo/TESE-INVESTIMENTO.md` | ⚠️ **números desatualizados** — a tese registra MRR R$ 2.000 e pipeline R$ 110.000; o `STATUS.md` hoje registra **MRR perpétuo R$ 0 e caixa R$ 0**. **Entra com selo de data e aviso de defasagem no cabeçalho**, nunca como fato corrente |

---

## 4. Reconciliações obrigatórias antes de qualquer uso

| # | Divergência | Resolução |
|---:|---|---|
| 1 | **Matriz de decisão de 3 sócios** (`Acordo Sistêmico` §V: Receita/Mercado → Ithallo) × realidade de 2 | reescrever a linha de Receita; hoje é Victor. Preservar o original com marca de data |
| 2 | **Cargo da Nakielly**: fundação diz **CSO** (Chief System Officer); `PROJECT.md` §8 e uso corrente dizem **COO** | decidir e propagar. A fundação é mais precisa quanto à função descrita (Sistema e Qualidade) |
| 3 | **Perfil HD do Ithallo**: `Human Design` diz **4/6**; `FRICÇÃO` diz **4/8** | **4/8 não existe** em Human Design. Vale 4/6 até confirmação |
| 4 | **Organograma futuro** × 2 pessoas | marcar explicitamente como estrutura-alvo |
| 5 | **Tese de investimento** × `STATUS.md` | selo de defasagem no cabeçalho |
| 6 | **Camadas de governança** (Conselho mensal · Comitê semanal) × `RITUAIS.md` vigente | fundir sem duplicar cadência |

---

## 5. Ordem de execução proposta

| # | Ação | Por que nesta ordem |
|---:|---|---|
| 1 | ✅ **Registrar o Ithallo** (`REGISTRO-ITHALLO-SOCIO-FUNDADOR.md`) | **feito em 20/08/2026** — repara a ordem de pertencimento, que precede tudo |
| 2 | `ACORDO-SISTEMICO-SOCIETARIO.md` em `00-core/` + roteamento no `CLAUDE.md` §7 | é a política societária que hoje não existe no repo |
| 3 | **Instalar o indicador de saúde societária em `RITUAIS.md`** | o único instrumento que, rodando, muda o resultado — e custa 4 perguntas por mês |
| 4 | `ESTATUTO-BASE.md` em `80-juridico/societario/` | base do instrumento a assinar |
| 5 | Mapa energético (3 arquivos) com guardrail | contexto, não decisão |
| 6 | Reconciliações §4 | evita duas verdades no repo |
| 7 | Narrativa, Organograma, Tese | menor urgência |
| 8 | Rotear tudo no `CLAUDE.md` §6 e §7 e registrar no `STATUS.md` | fecha o circuito |
| 9 | Esvaziar `fundação/` só após 1–8 | a pasta é staging, não destino |

---

## 6. O que este lote fecha e o que abre

**Fecha:** a lacuna de `20-projeto-escopo/` (declarada pendente no `CLAUDE.md` §7) · a referência externa a `07 - Desenho Humano (societário)` · a ausência de política societária no repo · **a ausência do Ithallo na memória da empresa**.

**Abre:** a obrigação de reconciliar uma estrutura desenhada para 3 sócios com uma operação de 2 — e a de executar instrumentos que existem no papel desde a fundação e nunca rodaram.

> **O maior ganho deste lote não é documental.** É a constatação de que a empresa **sabia** o que ia acontecer, **escreveu** a prevenção e **não executou**. Isso muda o diagnóstico do conflito societário atual: não é falha de previsão, é falha de execução de governança — e falha de execução tem conserto conhecido.
