/**
 * Recebe os contatos da página do presente "Mapa do repositório Continuum"
 * e grava na aba "Leads" desta planilha.
 * Instalação: LEIA-ME.md, nesta mesma pasta.
 */
const ABA = 'Leads';

function doPost(e) {
  const p = (e && e.parameter) || {};

  // isca para robô: o campo invisível "site" preenchido não grava
  if ((p.site || '').trim() !== '') return resposta_('ok');

  const nome = String(p.nome || '').replace(/[\r\n\t]+/g, ' ').trim().slice(0, 80);
  const wpp = String(p.whatsapp || '').replace(/\D/g, '');
  const origem = String(p.origem || 'perfil').replace(/[^\w.\-]/g, '').slice(0, 30);
  if (nome.length < 2 || wpp.length < 10 || wpp.length > 11) return resposta_('invalido');

  const trava = LockService.getScriptLock();
  trava.waitLock(10000);
  try {
    const planilha = SpreadsheetApp.getActiveSpreadsheet();
    let aba = planilha.getSheetByName(ABA);
    if (!aba) {
      aba = planilha.insertSheet(ABA);
      aba.appendRow(['data e hora', 'nome', 'whatsapp', 'link do whatsapp', 'origem']);
      aba.setFrozenRows(1);
    }
    // o apóstrofo impede que a planilha trate nome ou número como fórmula
    aba.appendRow([new Date(), "'" + nome, "'55" + wpp, 'https://wa.me/55' + wpp, origem]);
  } finally {
    trava.releaseLock();
  }
  return resposta_('ok');
}

function doGet() {
  return resposta_('Apps Script do presente no ar.');
}

function resposta_(texto) {
  return ContentService.createTextOutput(texto).setMimeType(ContentService.MimeType.TEXT);
}
