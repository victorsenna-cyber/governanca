const ABAS = { permissao: 'permissao', signos: 'signos', teto: 'teto', permissao_mentoras: 'permissao_mentoras', teto_mentoras: 'teto_mentoras' };
// ordem pedida pelo Victor em 15/10/2026: nome, telefone, email, quiz e o resto
const FIXAS = ['nome', 'telefone', 'email', 'quiz', 'resultado', 'pontos',
               'momento', 'recebido_em', 'clicou_checkout', 'checkout_em',
               'quiz_versao', 'lead_id', 'porta_principal', 'email_enviado'];
const FIXAS_FUNIL = ['lead_id', 'quiz_versao', 'passo', 'ultima_tela', 'recebido_em', 'atualizado_em'];

// e-mail do Raio-X (16/10/2026): só para quiz com config publicada aqui. O texto vem do config do site; o cliente nunca manda texto.
const RAIOX = { permissao_mentoras: 'https://professorguilhermearaujo.com.br/permissao-mentoras/config/permissao_mentoras.json' };
const REMETENTE = 'Guilherme Araújo';
const RESPONDER_PARA = '';           // e-mail do Gui, quando houver
const TETO_DIA = 90;                 // a conta gratuita do Google envia 100 por dia

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const d = JSON.parse(e.postData.contents);
    const aba = ABAS[d.quiz];
    if (!aba || !d.lead_id) return out({ ok: false, erro: 'payload' });
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    if (d.funil) {                                            // percurso tela a tela, sem dado pessoal
      const sh = ss.getSheetByName('funil_' + aba) || ss.insertSheet('funil_' + aba);
      const flat = { lead_id: d.lead_id, quiz_versao: d.quiz_versao, passo: Number(d.passo) || '', ultima_tela: String(d.ultima_tela || '').slice(0, 10), atualizado_em: new Date() };
      Object.keys(d.utm || {}).forEach(j => flat['utm_' + j] = d.utm[j]);
      const r = gravar(sh, FIXAS_FUNIL, flat, d.lead_id);
      if (r.novo) sh.getRange(r.linha, r.head.indexOf('recebido_em') + 1).setValue(new Date());
      return out({ ok: true });
    }

    const suspeito = d.hp ? 'sim' : '';                       // campo-armadilha preenchido: grava e marca, nunca descarta
    const sh = ss.getSheetByName(aba) || ss.insertSheet(aba);
    const flat = achatar(d);
    if (suspeito) flat.suspeito_robo = suspeito;
    const r = gravar(sh, FIXAS, flat, d.lead_id);
    if (r.novo) sh.getRange(r.linha, r.head.indexOf('recebido_em') + 1).setValue(new Date());

    if (RAIOX[d.quiz] && d.email && d.respostas && !suspeito) {
      const col = r.head.indexOf('email_enviado') + 1;
      if (col && !sh.getRange(r.linha, col).getValue()) {
        let status;
        try { status = enviarRaioX(d); } catch (err) { status = 'erro: ' + String(err).slice(0, 120); }
        sh.getRange(r.linha, col).setValue(status);
      }
    }
    return out({ ok: true });
  } catch (err) {
    return out({ ok: false, erro: String(err) });
  } finally {
    lock.releaseLock();
  }
}

// grava uma linha por lead_id: cria, ou atualiza só o que veio
function gravar(sh, fixas, flat, id) {
  let head = sh.getLastColumn()
    ? sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0].filter(String)
    : [];
  if (!head.length) head = fixas.slice();
  Object.keys(flat).forEach(k => { if (head.indexOf(k) < 0) head.push(k); });
  sh.getRange(1, 1, 1, head.length).setValues([head]);

  let linha = 0;
  const last = sh.getLastRow();
  if (last > 1) {
    const achou = sh.getRange(2, head.indexOf('lead_id') + 1, last - 1, 1)
      .createTextFinder(id).matchEntireCell(true).findNext();
    if (achou) linha = achou.getRow();
  }
  if (linha) {
    const atual = sh.getRange(linha, 1, 1, head.length).getValues()[0];
    sh.getRange(linha, 1, 1, head.length).setValues([head.map((k, i) => (k in flat) ? limpar(flat[k]) : atual[i])]);
    return { linha, head, novo: false };
  }
  sh.appendRow(head.map(k => (k in flat) ? limpar(flat[k]) : ''));
  return { linha: sh.getLastRow(), head, novo: true };
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

// ---------- Raio-X por e-mail ----------

function enviarRaioX(d) {
  const para = String(d.email).trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(para) || para.length > 254) return 'erro: e-mail inválido';
  const props = PropertiesService.getScriptProperties();
  const hoje = Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'yyyy-MM-dd');
  const enviados = Number(props.getProperty('raiox_' + hoje) || 0);
  if (enviados >= TETO_DIA || MailApp.getRemainingDailyQuota() < 5) return 'adiado: teto do dia';
  const cache = CacheService.getScriptCache();
  if (cache.get('para_' + para)) return 'pulado: mesmo e-mail há pouco';

  const cfg = config(d.quiz);
  const rx = calcular(cfg, d.respostas || {});
  const nome = String(d.nome || '').trim().split(/\s+/)[0].slice(0, 40);
  const vars = { nome: nome ? nome.charAt(0).toLocaleUpperCase() + nome.slice(1) : '', nivel: rx.banda.label, NIVEL: rx.banda.label.toUpperCase(), porta: rx.principal.label, PORTA: rx.principal.label.toUpperCase() };
  const em = cfg.raiox.email;

  const msg = { to: para, subject: plano(em.assunto, vars), htmlBody: html(cfg, rx, vars), body: texto(cfg, rx, vars), name: REMETENTE };
  if (RESPONDER_PARA) msg.replyTo = RESPONDER_PARA;
  MailApp.sendEmail(msg);
  props.setProperty('raiox_' + hoje, String(enviados + 1));
  cache.put('para_' + para, '1', 21600);
  return Utilities.formatDate(new Date(), 'America/Sao_Paulo', 'dd/MM/yyyy HH:mm');
}

function config(quiz) {
  const cache = CacheService.getScriptCache();
  const k = 'cfg_' + quiz;
  const guardado = cache.get(k);
  if (guardado) return JSON.parse(guardado);
  const txt = UrlFetchApp.fetch(RAIOX[quiz]).getContentText('UTF-8');
  JSON.parse(txt);
  if (txt.length < 95000) cache.put(k, txt, 600);
  return JSON.parse(txt);
}

// mesma conta do engine.js: pontos pela resposta escrita, portas em %, porta principal = menor Permissão (empate: ordem do config)
function calcular(cfg, respostas) {
  const pontosDe = key => {
    const s = cfg.steps.find(x => x.key === key);
    if (!s || !s.points) return null;
    const i = s.options.findIndex(o => o.label === respostas[key]);
    return { pts: i >= 0 ? s.points[i] : 0, max: Math.max.apply(null, s.points), i };
  };
  let total = 0;
  cfg.steps.forEach(s => { if (s.points) total += pontosDe(s.key).pts; });
  const banda = cfg.resultBands.find(b => total >= b.min && total <= b.max) || cfg.resultBands[0];
  const portas = cfg.raiox.portas.map(p => {
    let pts = 0, max = 0;
    p.keys.forEach(k => { const r = pontosDe(k); if (r) { pts += r.pts; max += r.max; } });
    return { id: p.id, label: p.label, hint: p.hint || '', perm: max ? Math.round(100 - pts / max * 100) : 100 };
  });
  const principal = portas.reduce((a, b) => b.perm < a.perm ? b : a, portas[0]);
  const og = cfg.steps.find(x => x.key === cfg.raiox.origemKey);
  const origemIdx = og ? og.options.findIndex(o => o.label === respostas[cfg.raiox.origemKey]) : -1;
  return { total, banda, portas, principal, origemIdx };
}

function esc(v) { return String(v == null ? '' : v).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])); }
function sub(t, vars) { return String(t || '').replace(/\{\{([^}]+)\}\}/g, (_, n) => vars[n] == null ? '' : vars[n]); }
function plano(t, vars) { return sub(t, vars).replace(/<[^>]+>/g, ''); }
// texto do config: escapa tudo e só devolve as marcas de destaque que o quiz usa
function rico(t, vars) {
  return esc(sub(t, vars))
    .replace(/&lt;(g|strong)&gt;/g, '<strong>').replace(/&lt;\/(g|strong)&gt;/g, '</strong>')
    .replace(/&lt;r&gt;/g, '<strong>').replace(/&lt;\/r&gt;/g, '</strong>')
    .replace(/&lt;\/?(u|em)&gt;/g, '');
}

function html(cfg, rx, vars) {
  const em = cfg.raiox.email, P = 'font-family:Arial,Helvetica,sans-serif;color:#111827;';
  const cor = p => p < 34 ? '#fb2c36' : p < 67 ? '#ffb900' : '#09de5e';
  let h = '<div style="' + P + 'max-width:560px;margin:0 auto;padding:16px;font-size:16px;line-height:24px">';
  h += '<p>' + rico(em.abertura, vars) + '</p>';
  h += '<h2 style="font-size:20px;margin:24px 0 8px">' + rico(em.titulo_nivel, vars) + '</h2>';
  h += '<p>' + rico(rx.banda.text, vars) + '</p>';
  h += '<h2 style="font-size:20px;margin:24px 0 8px">' + rico(em.titulo_portas, vars) + '</h2>';
  rx.portas.forEach(p => {
    const main = p.id === rx.principal.id;
    h += '<div style="border:' + (main ? '2px solid #111827' : '1px solid #e5e5e5') + ';border-radius:12px;padding:10px 12px;margin:0 0 10px">';
    h += '<div style="font-weight:bold">' + esc(p.label) + (main ? ' · ' + esc(em.selo_principal) : '') + ' — ' + p.perm + '%</div>';
    h += '<div style="background:#ededed;border-radius:8px;height:10px;margin:6px 0"><div style="background:' + cor(p.perm) + ';height:10px;border-radius:8px;width:' + Math.max(6, p.perm) + '%"></div></div>';
    if (p.hint) h += '<div style="font-size:13px;color:#585b60">' + rico(p.hint, vars) + '</div>';
    h += '</div>';
  });
  h += '<h2 style="font-size:20px;margin:24px 0 8px">' + rico(em.titulo_leitura, vars) + '</h2>';
  h += '<p>' + rico(cfg.raiox.leituras[rx.principal.id], vars) + '</p>';
  if (rx.origemIdx >= 0 && cfg.raiox.origem[String(rx.origemIdx)]) {
    h += '<h2 style="font-size:20px;margin:24px 0 8px">' + rico(em.titulo_origem, vars) + '</h2>';
    h += '<p>' + rico(cfg.raiox.origem[String(rx.origemIdx)], vars) + '</p>';
  }
  h += '<h2 style="font-size:20px;margin:24px 0 8px">' + rico(em.titulo_acoes, vars) + '</h2>';
  (cfg.raiox.acoes[rx.principal.id] || []).forEach(a => {
    h += '<div style="border:1px solid #e5e5e5;border-radius:12px;padding:12px;margin:0 0 10px"><strong>' + rico(a.title, vars) + '</strong><br>' + rico(a.text, vars) + '</div>';
  });
  h += '<p>' + rico(em.fronteira, vars) + '</p>';
  const grupo = cfg.link_grupo_mentoras;
  if (grupo && /^https:\/\/chat\.whatsapp\.com\//.test(grupo)) {
    h += '<p>' + rico(em.grupo, vars) + '</p>';
    h += '<p style="margin:16px 0"><a href="' + esc(grupo) + '" style="background:#17a34a;color:#fff;text-decoration:none;padding:12px 20px;border-radius:12px;display:inline-block;font-weight:bold">' + esc(em.botao_grupo) + '</a></p>';
  }
  h += '<p>' + rico(em.assinatura, vars) + '</p>';
  h += '<p style="font-size:12px;color:#6b7280;margin-top:24px">' + rico(em.rodape, vars) + '</p></div>';
  return h;
}

function texto(cfg, rx, vars) {
  const em = cfg.raiox.email, L = [];
  L.push(plano(em.abertura, vars), '', plano(em.titulo_nivel, vars), plano(rx.banda.text, vars), '', plano(em.titulo_portas, vars));
  rx.portas.forEach(p => L.push('- ' + p.label + ': ' + p.perm + '%' + (p.id === rx.principal.id ? ' (' + em.selo_principal + ')' : '')));
  L.push('', plano(em.titulo_leitura, vars), plano(cfg.raiox.leituras[rx.principal.id], vars));
  if (rx.origemIdx >= 0 && cfg.raiox.origem[String(rx.origemIdx)]) L.push('', plano(em.titulo_origem, vars), plano(cfg.raiox.origem[String(rx.origemIdx)], vars));
  L.push('', plano(em.titulo_acoes, vars));
  (cfg.raiox.acoes[rx.principal.id] || []).forEach(a => L.push('- ' + plano(a.title, vars) + ' ' + plano(a.text, vars)));
  L.push('', plano(em.fronteira, vars));
  if (cfg.link_grupo_mentoras) L.push('', plano(em.grupo, vars), cfg.link_grupo_mentoras);
  L.push('', plano(em.assinatura, vars), '', plano(em.rodape, vars));
  return L.join('\n');
}

// rodar uma vez no editor (▶) para autorizar o envio de e-mail e a leitura do config
function autorizar() {
  UrlFetchApp.fetch(RAIOX.permissao_mentoras);
  Logger.log('cota de e-mail restante hoje: ' + MailApp.getRemainingDailyQuota());
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
