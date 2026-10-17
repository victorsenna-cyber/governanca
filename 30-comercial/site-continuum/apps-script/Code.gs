/**
 * Continuum · recebimento dos leads do site (15/10/2026)
 *
 * Como implantar (uma vez, na conta Google que vai guardar os leads):
 * 1. Criar uma planilha nova no Google Sheets. Nome sugerido: "Leads site Continuum".
 * 2. Na planilha: Extensões > Apps Script. Apagar o conteúdo do Code.gs e colar este arquivo.
 * 3. Implantar > Nova implantação > tipo "App da Web".
 *    Executar como: Eu. Quem pode acessar: Qualquer pessoa.
 * 4. Autorizar quando o Google pedir.
 * 5. Copiar a URL que termina em /exec e colar em CONFIG.planilha, no index.html.
 *
 * A página manda dois tipos de envio:
 *  - "lead": uma linha nova por formulário enviado.
 *  - "whatsapp_click": marca a coluna whatsapp_click da linha com o mesmo id.
 */

const ABA = "leads";
const COLUNAS = [
  "id", "data", "nome", "whatsapp", "email", "origem", "naos", "primeira_aberta",
  "utm_source", "utm_medium", "utm_campaign", "utm_content", "fbclid", "gclid",
  "referrer", "pagina", "whatsapp_click"
];

function aba_() {
  const planilha = SpreadsheetApp.getActiveSpreadsheet();
  let aba = planilha.getSheetByName(ABA);
  if (!aba) aba = planilha.insertSheet(ABA);
  if (aba.getLastRow() === 0) {
    aba.appendRow(COLUNAS);
    aba.setFrozenRows(1);
  }
  return aba;
}

function doPost(e) {
  const trava = LockService.getScriptLock();
  trava.waitLock(10000);
  try {
    const dados = JSON.parse(e.postData.contents || "{}");
    const aba = aba_();

    if (dados.tipo === "whatsapp_click" && dados.id) {
      const ids = aba.getRange(2, 1, Math.max(aba.getLastRow() - 1, 1), 1).getValues();
      for (let i = ids.length - 1; i >= 0; i--) {
        if (ids[i][0] === dados.id) {
          aba.getRange(i + 2, COLUNAS.indexOf("whatsapp_click") + 1).setValue(dados.data || new Date().toISOString());
          break;
        }
      }
      return resposta_("ok");
    }

    if (dados.tipo === "lead") {
      aba.appendRow(COLUNAS.map(function (c) {
        const v = dados[c] === undefined ? "" : dados[c];
        /* O apóstrofo impede o Sheets de converter o WhatsApp em número e perder o zero ou o 55. */
        return c === "whatsapp" && v ? "'" + v : v;
      }));
      return resposta_("ok");
    }

    return resposta_("tipo desconhecido");
  } catch (erro) {
    return resposta_("erro: " + erro);
  } finally {
    trava.releaseLock();
  }
}

function resposta_(texto) {
  return ContentService.createTextOutput(texto).setMimeType(ContentService.MimeType.TEXT);
}
