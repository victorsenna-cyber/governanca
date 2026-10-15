const ABAS = { permissao: 'permissao', signos: 'signos', teto: 'teto', permissao_mentoras: 'permissao_mentoras', teto_mentoras: 'teto_mentoras' };
// ordem pedida pelo Victor em 15/10/2026: nome, telefone, email, quiz e o resto
const FIXAS = ['nome', 'telefone', 'email', 'quiz', 'resultado', 'pontos',
               'momento', 'recebido_em', 'clicou_checkout', 'checkout_em',
               'quiz_versao', 'lead_id'];

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const suspeito = d.hp ? 'sim' : '';                       // campo-armadilha preenchido: grava e marca, nunca descarta (autopreenchimento do navegador também cai aqui)
    const aba = ABAS[d.quiz];
    if (!aba || !d.lead_id) return out({ ok: false, erro: 'payload' });

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const sh = ss.getSheetByName(aba) || ss.insertSheet(aba);
    const flat = achatar(d);
    if (suspeito) flat.suspeito_robo = suspeito;

    let head = sh.getLastColumn()
      ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].filter(String)
      : [];
    if (!head.length) head = FIXAS.slice();
    Object.keys(flat).forEach(k => { if (head.indexOf(k) < 0) head.push(k); });
    sh.getRange(1, 1, 1, head.length).setValues([head]);

    let row = 0;
    const last = sh.getLastRow();
    if (last > 1) {
      const ids = sh.getRange(2, head.indexOf('lead_id') + 1, last - 1, 1).getValues();
      for (let i = 0; i < ids.length; i++) {
        if (ids[i][0] === d.lead_id) { row = i + 2; break; }
      }
    }

    if (row) {                                                // atualiza só o que veio
      const atual = sh.getRange(row, 1, 1, head.length).getValues()[0];
      const novo = head.map((k, i) => (k in flat) ? limpar(flat[k]) : atual[i]);
      sh.getRange(row, 1, 1, head.length).setValues([novo]);
    } else {
      flat.recebido_em = new Date();
      sh.appendRow(head.map(k => (k in flat) ? limpar(flat[k]) : ''));
    }
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, erro: String(err) });
  } finally {
    lock.releaseLock();
  }
}

function achatar(d) {
  const o = {};
  Object.keys(d).forEach(k => {
    if (k === 'hp') return;
    if (k === 'respostas') Object.keys(d[k] || {}).forEach(j => o[j] = d[k][j]);
    else if (k === 'utm') Object.keys(d[k] || {}).forEach(j => o['utm_' + j] = d[k][j]);
    else if (k === 'whatsapp') o.telefone = d[k];             // a coluna se chama telefone
    else o[k] = d[k];
  });
  return o;
}

// corta tamanho e neutraliza fórmula: valor que começa com = + - @ vira texto
function limpar(v) {
  if (v instanceof Date) return v;
  const s = String(v == null ? '' : v).slice(0, 500);
  return /^[=+\-@]/.test(s) ? "'" + s : s;
}

function out(o) {
  return ContentService.createTextOutput(JSON.stringify(o))
    .setMimeType(ContentService.MimeType.JSON);
}
