# Apps Script — captura de leads do popup (Google Sheet, grátis)

> Endpoint que a página chama no submit do popup. Grava cada lead numa linha do Google Sheet, com UTMs. **Custo zero, sem serviço terceiro.** Quem publica é o Victor; a URL resultante vai em `LEADS_ENDPOINT` na `index-v2.html`.

---

## 1. Estrutura da planilha (aba `Leads`)

Crie um Google Sheet (ex.: **"Seu Eixo — Leads"**). A **primeira aba** deve se chamar `Leads`. O script cria o cabeçalho sozinho na primeira gravação, mas para referência, as colunas são:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| timestamp | nome | telefone | email | turma | lote | utm_source | utm_medium | utm_campaign | utm_content | utm_term |

- **turma**: `fds` (fim de semana) ou `semana` (meio de semana).
- **lote**: 1, 2 ou 3 (lote vigente na hora do submit).
- Leads chegam **antes** do pagamento → cruzar com PagTrust (por e-mail) diz quem abandonou → recuperação por WhatsApp (telefone da coluna C).

---

## 2. O script (colar em Extensões → Apps Script)

No Sheet: **Extensões → Apps Script**, apague o conteúdo padrão e cole:

```javascript
var SHEET_NAME = 'Leads';
var HEADERS = ['timestamp','nome','telefone','email','turma','lote',
               'utm_source','utm_medium','utm_campaign','utm_content','utm_term'];

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sh = ss.getSheetByName(SHEET_NAME) || ss.insertSheet(SHEET_NAME);

    // cabeçalho na primeira vez
    if (sh.getLastRow() === 0) {
      sh.appendRow(HEADERS);
    }

    var row = [
      data.ts || new Date().toISOString(),
      data.nome || '',
      data.telefone || '',
      data.email || '',
      data.turma || '',
      data.lote || '',
      data.utm_source || '',
      data.utm_medium || '',
      data.utm_campaign || '',
      data.utm_content || '',
      data.utm_term || ''
    ];
    sh.appendRow(row);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// opcional: testa no navegador se o Web App está no ar
function doGet() {
  return ContentService.createTextOutput('ok');
}
```

---

## 3. Publicar como Web App (é isso que gera a URL)

1. No editor do Apps Script: **Implantar → Nova implantação**.
2. Tipo: **App da Web** (Web app).
3. **Executar como:** Eu (sua conta).
4. **Quem pode acessar:** **Qualquer pessoa** (precisa ser "qualquer pessoa", senão o `fetch` da página é bloqueado).
5. **Implantar** → autorizar as permissões → copiar a **URL do app da Web** (termina em `/exec`).
6. Colar essa URL em `LEADS_ENDPOINT` na `index-v2.html` (constante no `<script>`).

> A cada alteração no script, **Implantar → Gerenciar implantações → editar → nova versão** (senão a URL antiga serve a versão velha).

---

## 4. Nota técnica sobre CORS

A página envia com `mode:'no-cors'` e `Content-Type: text/plain` (por isso o script lê `e.postData.contents` e faz `JSON.parse`). Com `no-cors` o navegador **não devolve a resposta** para a página — tudo bem: a gravação acontece no servidor do Google, e a página não depende da resposta para redirecionar ao checkout. O lead é gravado; a venda segue.

---

## 5. Teste de fumaça (Victor, 2 min)
1. Com a URL colada, abrir a página, clicar no CTA da oferta, preencher o popup, escolher turma, enviar.
2. Conferir: (a) uma linha nova na aba `Leads` com os dados certos; (b) o checkout abriu **com nome e e-mail preenchidos**; (c) a URL do checkout tem `&name=…&email=…` (e as UTMs, se veio de anúncio).
3. Repetir marcando a **outra turma** → conferir que caiu no checkout da turma certa (link `ck…` diferente).
