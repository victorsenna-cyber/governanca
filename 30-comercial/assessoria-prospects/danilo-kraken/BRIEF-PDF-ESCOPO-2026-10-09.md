# BRIEF · PDF de apresentação do escopo · Kraken · 09/10/2026

> **Para:** sessão no Claude Code CLI · **Decidido por:** Victor, em chat, 09/10/2026
> **Árvores:** CONTA (estado) → ESCRITA (documento para o próprio cliente, não trava em pilares) → OPERAÇÃO (PDF)
> **Ler antes:** `clientes/Danilo/STATUS.md` §6 · `REGISTRO.md` §8-vicies-quater e §8-vicies-quinquies · `MSG-DANILO-2026-09-24-SO-VENDA.md` · `INVENTARIO-PILARES-KRAKEN-2026-09-24.md` · `90-templates/pdf-noturno/README.md` (§3-bis e restrições de SVG)

---

## 1. Decisões fechadas

| | |
|---|---|
| **Classe** | ESTRUTURA (o leitor precisa VER o que recebe). Não é DECISÃO |
| **Gerador** | `90-templates/pdf-noturno/` · HTML + `noturno.css` · `python3 -m weasyprint` · **sem CSS novo por documento** |
| **Escopo** | o da mensagem de 24/09: loja + página do Logger + lista de espera + o que já está pronto da marca, num repositório exclusivo · **R$ 6.500** |
| 🔴 **Parcelamento** | **NÃO aparece.** "Até 12x" entra só se ele pedir (Victor, 09/10) |
| **Tamanho** | ~6 páginas |
| **Destino** | `30-comercial/assessoria-prospects/danilo-kraken/PDF-ESCOPO-KRAKEN-2026-10-09.html` e `.pdf` |

## 2. 🔴 Proibido no documento

- **Nenhuma conta:** margem, %, retorno, breakeven, "30%", unidades de lucro. Foi a conta que virou objeção duas vezes (REGISTRO §8-vicies-quater, régua já propagada ao `METODO-ANCORAGEM`)
- **Nada da negociação** (Régua 4): proposta anterior, versões, correções, "ontem", "terceira"
- **Nenhuma frase iniciada em "Eu"** · menções à Kraken × a nós ≥ 5:1
- **Nada sobre CBA/CBM** (não sabemos o que o veto afetaria)
- **Nenhuma data inventada** para o produto. A trilha dele termina em *"quando você liberar"*
- **Nenhuma cena ou fala de competidor inventada** (léxico do público: uma única fala `D`)
- Gate anti-slop: zero travessão, zero aspas curvas, sem emoji (não renderiza)

## 3. Estrutura

| Pág. | Título | Conteúdo |
|---|---|---|
| 1 | **Capa** · *"A casa arrumada para quando as vendas baterem na porta"* | Kraken · R$ 6.500 · sem parcelamento |
| 2 | **O mapa inteiro** | gráfico 1 |
| 3 | **O dia da abertura** | gráfico 2 |
| 4 | **O que entra** | gráfico 3 + uma linha por item |
| 5 | **A lista de espera** | gráfico 4 |
| 6 | **O que é nosso, o que é de vocês, e o que este documento não promete** | lista curta (abaixo) · tempo dele: uma lista e uma revisão de congruência · não promete: data de lançamento, volume de venda, escala (*"escala não tem tanta assim"*, 15/09) |

Metáfora de **preparo** abre e fecha (`voz-victor` §10.1). Fecho sem pedido de prazo.

## 4. Os quatro gráficos (SVG inline, `<style>` DENTRO do `<svg>`, qualitativos)

**1 · Duas trilhas que se encontram.** Trilha de cima, Kraken: testes → validação → lote (sem datas). Trilha de baixo, nós: loja montada e testada → página do Logger → lista de espera captando → marca no repositório. As duas convergem num nó **"abertura das vendas"**. Legenda: *a estrutura anda junto e não espera o produto.*

**2 · O dia da abertura, com e sem a casa arrumada.** Antes × depois. Duas colunas, mesma lista de tarefas, mostrando **onde cai cada uma**: link de pagamento, nota fiscal, frete, etiqueta, acerto com parceiro, lote sem saber a demanda. Sem a casa arrumada: tudo no colo dele, na semana do lançamento. Com: no sistema. **Fonte:** a lista dele, 18/09 16h05 (*"tudo isso aí precisa estar pronto para a parte de lançamento"*).

**3 · O que entra e o que fica para depois.** Cinco blocos acesos: loja (PIX, parcelado, nota, frete, etiqueta) · página do Logger · lista de espera · marca (posicionamento, direção para o book, para quem o Logger é, promessa, por que mede melhor que o celular, a história da Kraken) · repositório exclusivo. Dois blocos apagados com rótulo *"quando tiver tração"*: regras dos parceiros em documento · plano de receita.

**4 · Da lista de espera à demanda medida.** Post e grupos de WhatsApp → página → formulário (**qual equipamento usa hoje · em que campeonato e região corre**) → mapa de demanda por região → tamanho do lote. Legenda ancorada no medo dele, sem citar: produzir sabendo quantos querem, e onde.

## 5. A lista curta (página 6)

garantia e prazo de entrega · unidades por lote e pré-venda · fotos, peso e medidas embalado · conta de recebimento e quem emite nota · origem do envio e quem despacha · **quem do lado de vocês usaria o repositório, e com que ferramenta**

## 6. Antes de entregar

- [x] gates da seção 2, contados
- [x] PDF renderizado e conferido página a página (PyMuPDF; pdftoppm não existe nesta máquina)
- [x] `verificar-propagacao.py` em ✅
- [x] linha no `REGISTRO.md` com o caminho do PDF (§8-vicies-sexies) · **envio só com OK do Victor**

## 7. Em aberto (não bloqueia a construção)

- 🟡 **O Danilo respondeu depois de 23/09?** Sem resposta registrada. Se não respondeu, o PDF sai acompanhado de algo útil, nunca como lembrete (`CULTURA.md` §8)
- 🟡 **Divergência do `STATUS` §6.7** (23/09 × 24/09): o brief assume a de 24/09
