# DEPLOY — as três páginas no domínio dela, pela Hostinger

> **Decisão do Victor, 13/10/2026:** *"vamos passar todos os arquivos para o gerenciador de arquivos do domínio dela na Hostinger.. sem Vercel"* (DEC-032).
> **Pacote:** `hostinger/` · **Remontar:** `py -I montar-hostinger.py` · **Estado:** ✅ **no ar desde 16/10/2026**, testado pelo Victor nas três páginas, leads gravando na planilha
> **Domínio:** **`jessicaoliveira.space`** (informado pelo Victor em 16/10/2026). Onde abaixo estiver `{{DOMINIO}}`, é este.
> **Redirecionamento das URLs antigas da Vercel:** `bash redirecionar-vercel.sh`, depois de `npx vercel login`.

---

## O que sobe, e para onde

Três pastas dentro de `public_html`. **Nada entra na raiz do domínio**, para não encostar no que já existir lá (site, WordPress, página em construção).

| Pasta | Página | Endereço final | Zip |
|---|---|---|---|
| `ingles/` | inglês para brasileiras (P1) | `{{DOMINIO}}/ingles/` | `hostinger/ingles.zip` (20 arquivos, 1,9 MB) |
| `portuguese/` | português para estrangeiros (P2, em inglês) | `{{DOMINIO}}/portuguese/` | `hostinger/portuguese.zip` (5 arquivos) |
| `experience/` | Ladies Fluency Experience (P3) | `{{DOMINIO}}/experience/` | `hostinger/experience.zip` (6 arquivos) |

Os nomes das pastas são decisão nossa e viram o endereço. **Para trocar um nome, edite a lista `PAGINAS` em `montar-hostinger.py` e rode de novo**; não renomeie só no painel, ou o manifesto deixa de bater.

Cada zip já traz a pasta dentro. As páginas só usam caminho relativo (conferido: nenhum `/` absoluto em HTML, CSS ou JS), então funcionam em subpasta sem ajuste.

---

## Passos, no hPanel

1. **Sites → o domínio dela → Gerenciador de Arquivos → `public_html`.**
2. **Upload** dos três zips para dentro de `public_html`.
3. Em cada zip: botão direito → **Extract** → destino `.` (a própria `public_html`). Aparecem as pastas `ingles`, `portuguese` e `experience`.
4. **Apagar os três zips** do servidor depois de extrair.
5. **HTTPS:** abrir `https://{{DOMINIO}}/experience/` e conferir o cadeado. Se não houver, hPanel → Segurança → SSL.

**Se o domínio tem WordPress na raiz:** pasta real tem precedência sobre a reescrita do WordPress, então as três abrem normalmente. Se alguma cair na página 404 do tema, é cache: testar em aba anônima.

---

## Gate, depois de subir

- [ ] As três abrem em HTTPS, no celular e no computador, sem rolagem lateral.
- [ ] **Experience:** mostra *janeiro de 2027*, *Florianópolis · Santa Catarina*, *Pré-venda · R$ 147 · até 29/11*. Nenhum *17/10*, nenhum número de vagas.
- [ ] **Experience:** o botão abre o popup; preenchendo, vai para o InfinitePay de R$ 147.
- [ ] **Inglês:** o botão abre o popup; preenchendo, abre o WhatsApp `5531983015499` com nome e objetivo na mensagem.
- [ ] **Portuguese:** nenhum *"preview"* na tela; o formulário termina no botão *Open WhatsApp*.
- [ ] **Planilha:** depois de preencher o popup uma vez em cada página, há uma linha nova em cada aba (`P1 · Emotional Speaking`, `P2 · Português`, `P3 · Evento`). É o teste de fumaça aberto desde 19/08.
- [ ] **Conferência de arquivo:** `curl -s https://{{DOMINIO}}/experience/script.js | sha256sum` bate com a linha de `experience/script.js` em `hostinger/MANIFESTO.txt`.

---

## Três coisas que só existem depois de o domínio estar no ar

| O quê | Por quê | Quem |
|---|---|---|
| **Redirecionar os dois endereços da Vercel** (`jessica-emotional-speaking.vercel.app` e `jessica-portugues-brasileiro.vercel.app`) para as pastas novas | foram entregues a ela em 06/08 e podem estar circulando. Hoje servem a versão de 11/08, com o formulário morto. **Redirecionar, não apagar** | Continuum, com o domínio em mãos |
| **Imagem de compartilhamento com endereço completo** | as três páginas apontam a imagem de prévia por caminho relativo (`assets/…`). WhatsApp e Instagram só mostram a prévia do link com endereço absoluto | Continuum: trocar no `index.html` e remontar o pacote |
| **Link da bio** | `{{DOMINIO}}/experience/` | Jéssica, depois da mensagem 2 |

---

## Atualizações que já têm data

Sempre o mesmo caminho: editar o `site/` da página → `py -I montar-hostinger.py` → subir o zip daquela pasta → extrair por cima → conferir o hash.

| Quando | O que muda | Onde |
|---|---|---|
| no anúncio da data (novembro) | `data`, `dataCurta`, `horario`, `local`, `bairro` | `pagina-3-evento/site/script.js`, bloco `CONFIG` |
| **seg. 30/11/2026** | `loteVigente: 1` e `prazoInscricao` | idem |

Depois de mexer no `script.js` ou no `styles.css`, trocar o `?v=` deles no `index.html`. Sem isso o navegador de quem já visitou continua com a versão antiga.

---

**Base:** `DECISOES.md` DEC-032 e CORR-030 · `montar-hostinger.py` · precedente da casa: `../Débora Delgado/04 - web design/página pré-final/pagina/DEPLOY-HOSTINGER.md`
