# Ladies Fluency Experience — página de eventos

> **Atualizado em 13/10/2026.** A versão anterior deste arquivo descrevia o `CONFIG` de agosto (vagas, lotes por quantidade, Casa Viva). O `CONFIG` mudou em 27/09 e este arquivo não tinha acompanhado.

## Estado

- **Conteúdo:** janeiro de 2027, Florianópolis/SC, só mulheres, pré-venda R$ 147 até 29/11, sem número de vagas (`?v=20260927a`).
- 🔴 **Publicação:** **nunca foi publicada.** Vai para o domínio dela, na Hostinger, em `/experience/` (DEC-032). Pacote e passos: `../../DEPLOY-HOSTINGER.md`. Depois de editar este `site/`, rodar `py -I montar-hostinger.py` na raiz da conta e subir `hostinger/experience.zip`.
- **Conferido em 13/10/2026:** nenhuma ocorrência de 17/10, outubro, Casa Viva, Campeche, 15 vagas ou `{{ }}` no HTML e no JS · os dois links do InfinitePay respondem · o endpoint da planilha grava (`?teste=1` devolveu `ok`) · layout em 1440 px e em 390 px sem estouro.

## Como publicar uma mudança

**Você edita um bloco só.** Abra `script.js`, mude o `CONFIG` no topo, salve, publique.

```js
const CONFIG = Object.freeze({
  edicao: "1ª edição",
  nomeEvento: "Ladies Fluency Experience",

  data: "janeiro de 2027",          // ← no anúncio: "20 de janeiro de 2027"
  dataCurta: "jan/2027",            // ← no anúncio: "20/01"
  horario: "dia anunciado primeiro a quem já garantiu",   // ← no anúncio: "quarta, 14h às 18h"
  local: "Florianópolis",           // ← no anúncio: nome do espaço
  bairro: "Santa Catarina",         // ← no anúncio: "bairro, Florianópolis"

  lotes: [
    { nome: "Pré-venda",     preco: "R$ 147", ate: "até 29/11",         link: "…147,00" },
    { nome: "Primeiro lote", preco: "R$ 197", ate: "a partir de 30/11", link: "…197,00" },
  ],
  loteVigente: 0,                   // ← em 30/11: trocar para 1

  prazoInscricao: "O valor de pré-venda vale até 29/11.",
  leadsEndpoint: "https://script.google.com/…/exec",
  whatsapp: "",
  status: "abertas",                // "abertas" | "ultimas" | "esgotado" | "proxima"
});
```

**A troca de lote é por data.** Nenhum lote tem cota de vagas. Cada lote carrega o próprio link de pagamento: ao trocar `loteVigente` de `0` para `1`, o preço, o prazo e o link de cobrança viram juntos.

## As duas atualizações que já têm data

| Quando | O que mudar | Onde |
|---|---|---|
| **no anúncio da data** (novembro) | `data`, `dataCurta`, `horario`, `local`, `bairro` | `CONFIG` |
| **seg. 30/11/2026** | `loteVigente: 1` e `prazoInscricao` | `CONFIG` |

Depois de mexer: trocar o `?v=` do `styles.css` e do `script.js` no `index.html`, para o navegador não servir a versão antiga.

## Os quatro estados

| `status` | O que a página faz |
|---|---|
| `"abertas"` | comportamento normal: CTA abre o popup, o popup registra e leva ao pagamento |
| `"ultimas"` | acende o selo "Últimas vagas". **Só usar com capacidade real definida** |
| `"esgotado"` | CTA vira "Entrar na lista da próxima edição" |
| `"proxima"` | CTA vira "Quero ser avisada" |

## Arquivos

```
site/
  index.html     estrutura e copy
  styles.css     sistema visual (tokens herdados da página 1)
  script.js      CONFIG + comportamento
  assets/        logo (2) e foto dela
  index1/        variante antiga do hero, de 25/08. Não é publicada
```

Sem dependência externa além das fontes do Google (Fraunces e Inter).

## O que não está aqui, por decisão

- **Foto do local.** O local muda a cada edição. As fotos vão para os posts.
- **Depoimentos.** Os que existem são de aula e provam aula. O bloco de prova aceita depoimentos de evento a partir da 2ª edição.
- **Menção à turma de English Therapy.** Ela é vendida na sala, não na página.
- **Número de vagas.** Só entra quando o local definir a capacidade (DEC-024).
