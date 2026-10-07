# PLANO DE INTEGRAÇÃO — Onboarding Orquestrado (GitHub → repo offline)

> **Aberto:** 16/08/2026 · **Regra nº 1 (Victor):** nada que já existe aqui é deletado ou substituído. **Integração aditiva.**
> **Estado:** 🔴 **conteúdo ainda não disponível** — o zip entregue é da branch errada (§1).

---

## 1. O zip entregue não contém o trabalho do Claude Code

`900-criação-implementação-victor/governan-a-main.zip` (330 MB) foi extraído e auditado em 16/08/2026. **É a branch `main`, congelada em 02/08/2026 11:28.**

| Verificação | Resultado |
|---|---|
| `70-metodologias-chave/ONBOARDING-ORQUESTRADO/` | **0 arquivos** — a pasta não existe no zip |
| `CLAUDE.md` — menções a `ONBOARDING-ORQUESTRADO` | **0** |
| `CLAUDE.md` §6 — linha do roteador de onboarding | **inalterada** (aponta só para a skill) |
| `30-comercial/onboarding.md` | **byte a byte idêntico** ao offline — sem o cabeçalho novo |
| `head-onboarding-orquestrado.skill.md` | **byte a byte idêntico** ao offline — ainda diz *"Esqueleto — preencher"* |
| `STATUS.md` — menções a "onboarding orquestrado" | **0** — sem o registro de 02/08 |

**Causa:** os dois commits (`35952fd`, `80d2079`) estão na branch **`claude/eager-bell-x9zhss`**, que não foi merjada no `main`. O GitHub nomeia o download como `<repo>-<branch>.zip` — daí `governan-a-main.zip`.

**O que falta:** o zip da branch certa, ou apenas a pasta `70-metodologias-chave/ONBOARDING-ORQUESTRADO/` e os 7 arquivos alterados.

---

## 2. Por que nenhum merge automático pode ser usado

O offline evoluiu 14 dias depois do ponto em que o Claude Code partiu:

| Arquivo | zip (02/08/2026) | offline (16/08/2026) | delta |
|---|---:|---:|---:|
| `CLAUDE.md` | 21.066 | 28.619 | **+7.553 (+36%)** |
| `STATUS.md` | 37.706 | 102.909 | **+65.203 (+173%)** |
| `README.md` | 2.853 | 3.494 | +641 |

**Aplicar o patch dele por cima destruiria de 7 a 65 mil bytes** — método de ancoragem de proposta, destilação de calls, check diário, filas, registros de agosto, Danilo, Carolina, Guilherme.

**Regra desta integração: nada de `git merge`, `git apply` ou cópia de arquivo inteiro nos 7 arquivos alterados. Só reescrita cirúrgica das linhas que ele tocou, no contexto atual.**

---

## 3. Mapa de integração, arquivo a arquivo

### 3.1 Aditivo puro — copiar inteiro, risco zero

| Origem | Destino | Nota |
|---|---|---|
| `70-metodologias-chave/ONBOARDING-ORQUESTRADO/` (7 arquivos, ~1.350 linhas) | mesmo caminho | **a pasta não existe no offline.** Nada a colidir |

### 3.2 Cirúrgico — reescrever 1–2 linhas no arquivo atual

| Arquivo | O que muda | Risco |
|---|---|---|
| `CLAUDE.md` §6 | linha `ativação, kickoff, TTFV, onboarding` passa a carregar **método + persona + artefato**, nessa ordem | baixo — 1 linha |
| `CLAUDE.md` §7 | linha do `70-metodologias-chave/` deixa de dizer *"Blitzscaling; demais pendentes"* e descreve a pasta nova | baixo — 1 linha |
| `README.md` | linha no mapa de pastas + linha na tabela de estado | **mesclar** — o offline já foi atualizado em 14/08/2026 pela scheduled |
| `STATUS.md` | registro de 02/08 do Claude Code | entra como **item novo no formato atual**, sem tocar nos existentes |

### 3.3 Diff aplica limpo — os arquivos são idênticos nos dois lados

| Arquivo | O que muda | Nota |
|---|---|---|
| `30-comercial/onboarding.md` | cabeçalho aponta para o método; declara as 8 etapas como **vista de sistema** das 6 canônicas | **aditivo** — acrescenta, não remove as 8 etapas |
| `10-skills/heads/head-onboarding-orquestrado.skill.md` | cabeçalho separa **persona** (decide, cobra, aprova) de **método** (vive na metodologia) | oportunidade: subir junto para o **template v2**, fechando parte da pendência `STATUS.md` §16 |

### 3.4 Já executado no offline em 16/08/2026 — não repetir

| Arquivo | Estado |
|---|---|
| `CLAUDE.md` §8 · `00-core/POLITICAS-DE-DECISAO.md` §3 · `00-core/MANIFESTO.md` | ✅ **ponteiro do Blitzscaling corrigido** — apontavam para `70-metodologias-chave/BLITZSCALING.md`, que não existe; o arquivo real é `00-core/BLITZSCALING.md`. 1 ocorrência por arquivo, −14 bytes cada, 2 linhas de diff cada. Nada mais tocado |

> **Validação cruzada:** o Claude Code identificou esse mesmo ponteiro quebrado, de forma independente, partindo da versão de 02/08. Dois diagnósticos convergentes sobre o mesmo defeito — o achado é real, não artefato de leitura.

---

## 4. Duas reconciliações que ninguém apontou

### 4.1 O TTFV já tem número vigente, e ele conflita com os propostos

`00-core/POLITICAS-DE-DECISAO.md` §7 já traz um tripwire ativo: **`TTFV > 30 dias em 2 clientes seguidos` → revisar onboarding.** É número vigente, não proposto.

Os TTFV por oferta do Claude Code (site ≤ 14d · Base ≤ 21d · Completa ≤ 30d · CORE ≤ 30d) são **refinamento por produto** de um teto que já existe. Não são novidade isolada: precisam ser reconciliados com o tripwire, ou o repo passa a ter duas réguas de TTFV.

**Ele acertou em não escrever nas POLÍTICAS antes de calibrar com 3 casos** (`§6 ICP: segmento só é validado com n ≥ 3`). Fica como pendência com gate, não como número.

### 4.2 A lacuna do embarque é a mesma que a ancoragem de proposta atacou

O achado central dele — *"faltava a etapa de embarque; nosso processo começava depois do sim"* — é **a mesma lacuna** que `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md` (instituído 10/08/2026) atacou pelo outro lado.

| Método | Onde entra | O que declara |
|---|---|---|
| Ancoragem de proposta | **antes** do sim | breakeven, payback, curva de gerações, custo da inação, condições de validade |
| Onboarding Orquestrado | **depois** do sim | fases, first value, TTFV, plano de sucesso |

**A Âncora 5 (condições de validade) já pergunta "de quem depende e o que quebra". O embarque é a resposta operacional dessa pergunta** — e hoje a proposta não a responde.

**A integração de maior valor não é copiar arquivo: é fechar o circuito.** A proposta passa a declarar, como parte da ancoragem, as fases da entrega, o first value e o prazo. Isso:

- responde a Âncora 5 com processo em vez de promessa;
- transforma o TTFV em **compromisso ancorado**, não em métrica interna;
- fecha o buraco do anti-padrão Débora — serviços necessários entram **antes** da assinatura.

**Isso é alçada do Victor** (mexe em script de venda e proposta padrão) e fica registrado aqui como proposta, não como feito.

---

## 5. Ordem de execução, quando o conteúdo chegar

1. Copiar `70-metodologias-chave/ONBOARDING-ORQUESTRADO/` (aditivo puro).
2. Ler os 7 arquivos e conferir se as 6 etapas canônicas batem com as 8 do `onboarding.md` e com as 8 da skill — **as três enumerações precisam reconciliar, e a reconciliação vai no método, não nos artefatos.**
3. Reescrever as 2 linhas do `CLAUDE.md` (§6 e §7) no texto atual.
4. Aditar cabeçalhos de `onboarding.md` e da skill do head.
5. Mesclar as linhas do `README.md`.
6. Registrar no `STATUS.md`: o que entrou, o que ficou de fora, as reconciliações da §4 e as 7 pendências com dono e gate.
7. Apagar `90-staging-remoto/`.

**Não entra nesta integração** (alçada Victor, decisão registrada): script de vendas, proposta padrão, contrato, TTFV como política, arquivos de cliente, módulo de onboarding como produto.

---

*Auditoria do zip e correção do ponteiro do Blitzscaling executadas em 16/08/2026. Nenhum arquivo do repo vivo foi deletado ou substituído.*
