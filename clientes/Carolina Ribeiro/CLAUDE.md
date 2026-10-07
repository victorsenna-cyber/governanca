# CLAUDE.md — Kernel da conta Carolina Ribeiro (IVS · Eskimó)

> **Tipo:** kernel de cliente (camada 2 local) · **Aberto em:** 28/08/2026 · **Dono:** Victor
> Governa fatos, voz, oferta, decisões e estado **desta conta**. A política geral continua vindo de
> `01 - Governança/CLAUDE.md` + `00-core/POLITICAS-DE-DECISAO.md`.
> Precedência: política da Governança → `DECISOES.md` desta conta → `STATUS.md` desta conta → skill dominante → artefato da tarefa.

---

## 1. Quem é a conta

**Carolina Ribeiro** — franqueada, multi-unidade, Santa Catarina + Mato Grosso.
Relação: **amiga de longa data do Victor**, de Cáceres-MT. Não é lead frio, não é indicação: é **rede quente direta**.

| Unidade | Marca | Praça | Estado |
|---|---|---|---|
| Loja 1 | **IVS** (ótica) | Itapema-SC | em operação há mais tempo |
| Loja 2 | **IVS** (ótica) | Tijucas-SC | **inaugurada 25/08/2026** (pré-inauguração 24/08) |
| Loja 3 (projeto) | **IVS** | Palhoça-SC | declarada como intenção |
| Loja 4 e 5 | **Eskimó Sorvetes** | Cáceres-MT | duas franquias |

Sociedade: **Carolina + Ítalo, marido e sócio na IVS** (confirmado 05/09/2026). Ítalo cuida de **anúncios, infraestrutura digital e contato com prestadores**; Carolina cuida do atendimento e da loja. **Decidem juntos — confirmar na call se um bate o martelo.**

---

## 2. A regra que governa esta conta

> **É amizade antes de ser conta.** Isso não afrouxa a régua — aperta.
> Proposta mal ancorada aqui não custa uma venda, custa uma relação de anos.
> Nenhum número sai sem as 7 âncoras (`100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md`). Nenhum desconto de amizade: se o preço não couber, **reduz escopo, não preço** (`POLITICAS` §5).

**Segunda regra:** ela **já paga uma agência de tráfego** especializada em óticas/IVS e está satisfeita com o tráfego.
**Nunca vender tráfego nesta conta.** Nosso território é o que acontece **depois que o lead chega**: atendimento, recontato, reativação, governança e financeiro. Tocar em tráfego aqui cria conflito com fornecedor dela sem necessidade e queima o enquadramento.

---

## 3. Fronteira de escopo (o que é e o que não é)

| É nosso | Não é nosso |
|---|---|
| Recepção e diagnóstico inicial do lead no WhatsApp | Gestão de mídia paga (agência dela) |
| Handoff com contexto para vendedor | Vender óculos por ela |
| Cadência de recontato (a metodologia de 6 contatos que hoje vive em planilha) | Substituir o sistema do franqueador IVS sem autorização dele |
| Reativação de base, aniversário, ciclo de recompra | Operar o dia a dia da loja (não somos contratação) |
| Governança multi-loja, RBAC, BI executivo | Prometer resultado sem instrumento de medição |
| Financeiro consolidado (CAP/CAR/fluxo/DRE) | Tratar dado de saúde (grau/receita oftálmica) na camada de IA — ver §5 |

---

## 4. Estado de contratação

**Nada vendido. Nada precificado. Nada prometido em número.**
O que existe: interesse declarado por ela ("exatamente isso que estávamos buscando"), pedido explícito de orçamento, e **reunião aceita e ainda não marcada**.

Ordem obrigatória, sem atalho:
`G0 diagnóstico → âncoras preenchidas → folha interna → veredito → proposta`.
Enquanto o diagnóstico não rodar, **toda a economia desta conta é `n=0`** e é assim que se escreve.

---

## 5. Restrição dura: LGPD e dado de saúde

Ótica trabalha com **grau, receita oftálmica e histórico visual** — isso é **dado pessoal sensível de saúde** (LGPD art. 5º, II e art. 11). Consequência de arquitetura, não de advogado:

- O agente de IA **não coleta, não armazena e não trafega grau, receita ou diagnóstico**. Ele agenda o exame e passa a bola.
- Dado clínico permanece no sistema do franqueador / prontuário. Nosso núcleo guarda **fatos comerciais** (contato, origem, etapa, data de compra, data de aniversário, ciclo de recompra).
- Qualquer campanha de recompra usa **data da última compra**, nunca conteúdo clínico.
- Isso vira **cláusula na proposta**, não nota de rodapé. Ver `80-juridico/POLITICAS-JURIDICAS.md`.

---

## 6. Mapa de arquivos desta conta

| Arquivo | O que é |
|---|---|
| `STATUS.md` | estado vivo da conta — o que sabemos e o que está `a calibrar` |
| `DECISOES.md` | log de decisões (DEC-CA-xx), com o descartado e o porquê |
| `01-contexto/REGISTRO-CONVERSA-2026-08-23.md` | registro literal da conversa (4 camadas do `CLAUDE.md` §11.1) |
| `DOSSIE-CONTA-2026-08-28.md` | leitura da conta: operação, gargalos, hipóteses, riscos |
| `ROTEIRO-CALL-2026-09-08-CAROLINA-ITALO.md` | **roteiro executável da call de 08/09 com os dois sócios** — blocos por dono, elicitação da economia, tratamento do concorrente, gate de 10 números |
| `ROTEIRO-DIAGNOSTICO-CALL.md` | banco de perguntas base (28/08). Para a call de 08/09, vale o roteiro acima |
| `BLUEPRINT-SISTEMA-MULTI-LOJA.md` | arquitetura do sistema sob a marca Continuum |
| `PROPOSTA-FOLHA-INTERNA-2026-08-28.md` | folha interna das 7 âncoras — **nunca sai da casa** |
| `OFERTA-CAROLINA-2026-08-28.md` | **arquitetura da oferta** — mecanismo (O Fio Contínuo), escopo, marcos, preços-alvo, gate A→B, portas de pagamento. ⛔ interno |
| `proposta/ESTRUTURA-PROPOSTA.md` | **estrutura da proposta** — 12 dobras na ordem da decisão dela + esqueleto com `{{placeholders}}` |
| `proposta/ESQUELETO-ESCADA-A-B.md` | ponteiro — substituído em 28/08/2026 pela `ESTRUTURA-PROPOSTA.md` |

---

## 7. Voz

Peça que a Carolina lê é escrita na **voz do Victor** (`10-skills/voz-victor.skill.md` v2.0) — é ele quem fala com ela, e eles já se falam há anos.
Peça que **ela** ou um vendedor dela vai falar (script do agente, mensagem de reativação) usa a **voz da loja**, extraída dela — nunca `voz-victor`.

---
*Base: `01 - Governança/CLAUDE.md` §§6, 9, 11 · `00-core/POLITICAS-DE-DECISAO.md` §§4-5 · `100-métodos/METODO-ANCORAGEM-DE-PROPOSTA.md`.*
