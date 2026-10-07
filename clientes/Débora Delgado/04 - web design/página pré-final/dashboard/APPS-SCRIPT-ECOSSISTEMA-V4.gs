/*
 * Apps Script v4 - hub do ecossistema + Dashboard v2
 *
 * Cole este arquivo inteiro no mesmo projeto Apps Script da implantacao atual.
 * Depois: Implantar > Gerenciar implantacoes > editar > Nova versao > Implantar.
 * A URL /exec permanece a mesma.
 *
 * Meta Ads fica inativa ate existirem META_TOKEN e META_AD_ACCOUNT nas
 * Propriedades do script e um trigger diario ser criado para fetchMetaAds_.
 * META_GRAPH_VERSION e opcional (padrao: v25.0).
 */

/* ===== CONFIG ===== */
var WEBHOOK_TOKEN = 'COLE_O_TOKEN_AQUI';

var SH_LEADS = 'Leads';
var SH_VENDAS = 'Vendas';
var SH_CICLO = 'CicloVida';
var SH_FUNIL = 'Funil';
var SH_ENGAJ = 'Engajamento';
var SH_ADS = 'Ads';
var SH_DEBUG = '_webhook_debug';

var H_LEADS = ['timestamp','nome','telefone','email','turma','lote','utm_source','utm_medium','utm_campaign','utm_content','utm_term','sid'];
var H_VENDAS = ['timestamp','evento','email','nome','telefone','produto','produto_id','valor','liquido','pagamento','is_order_bump','parent_tx','transacao','utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
var H_CICLO = ['timestamp','evento','email','nome','produto','plano','assinatura_status','transacao'];
var H_FUNIL = ['timestamp','ev','sid','utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
var H_ENGAJ = ['timestamp','ev','dobra','sid','seg','idx','utm_source','utm_medium','utm_campaign','utm_content','utm_term'];
var H_ADS = ['timestamp','campaign_name','spend','impressions','clicks'];

var ORDEM_DOBRAS = ['D1 Hero','D2 Espelho','D3 Custo','D4 Virada','D5 Pilha','D8 Oferta','D9 FAQ','D10 Fecho'];

function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) data = JSON.parse(e.postData.contents);

    /* Eventos leves enviados pela pagina. */
    if (data.tipo === 'funil') {
      appendObjectRow_(SH_FUNIL, H_FUNIL, {
        timestamp: data.ts || new Date().toISOString(),
        ev: data.ev || '',
        sid: data.sid || '',
        utm_source: data.utm_source || '',
        utm_medium: data.utm_medium || '',
        utm_campaign: data.utm_campaign || '',
        utm_content: data.utm_content || '',
        utm_term: data.utm_term || ''
      });
      return json_({ok:true,tipo:'funil'});
    }

    if (data.tipo === 'engaj') {
      appendObjectRow_(SH_ENGAJ, H_ENGAJ, {
        timestamp: data.ts || new Date().toISOString(),
        ev: data.ev || '',
        dobra: data.dobra || '',
        sid: data.sid || '',
        seg: data.seg === undefined ? '' : data.seg,
        idx: data.idx === undefined ? '' : data.idx,
        utm_source: data.utm_source || '',
        utm_medium: data.utm_medium || '',
        utm_campaign: data.utm_campaign || '',
        utm_content: data.utm_content || '',
        utm_term: data.utm_term || ''
      });
      return json_({ok:true,tipo:'engaj'});
    }

    /* Lead do popup: tem nome no topo e nao tem event/evento. */
    if (data.nome !== undefined && data.event === undefined && data.evento === undefined) {
      appendObjectRow_(SH_LEADS, H_LEADS, {
        timestamp: data.ts || new Date().toISOString(),
        nome: data.nome || '',
        telefone: data.telefone || '',
        email: data.email || '',
        turma: data.turma || '',
        lote: data.lote || '',
        utm_source: data.utm_source || '',
        utm_medium: data.utm_medium || '',
        utm_campaign: data.utm_campaign || '',
        utm_content: data.utm_content || '',
        utm_term: data.utm_term || '',
        sid: data.sid || ''
      });
      return json_({ok:true,tipo:'lead'});
    }

    /* Webhook PagTrust. Para validar por query string, habilite checkToken_. */
    // if (!checkToken_(e, data)) return json_({ok:false,error:'token'});
    sh_(SH_DEBUG).appendRow([new Date().toISOString(), JSON.stringify(data)]);

    var ev = data.event || '';
    var d = data.data || {};
    var buyer = d.buyer || {};
    var prod = d.product || {};
    var pur = d.purchase || {};
    var sub = d.subscription || {};
    var email = (buyer.email || '').toLowerCase();
    var nome = buyer.name || '';
    var fone = buyer.checkout_phone || buyer.phone || '';
    var full = (pur.full_price && pur.full_price.value) || 0;
    var liq = (pur.price && pur.price.value) || 0;
    var pay = (pur.payment && pur.payment.type) || '';
    var ob = pur.order_bump || {};
    var tx = pur.transaction || d.transactionId || '';

    var o = pur.origin || {};
    var u = d.utms || {};
    var us = o.utmsource || u.utm_source || '';
    var um = o.utmmedium || u.utm_medium || '';
    var uc = o.utmcampaign || u.utm_campaign || '';
    var ux = o.content || u.utm_content || '';
    var ut = o.term || u.utm_term || '';

    var ciclo = ['SUBSCRIPTION_CREATED','SUBSCRIPTION_RENEWED','SUBSCRIPTION_CANCELLED','ACCESS_ENDED','CERTIFICATE_ISSUED','LESSON_COMPLETED'];
    if (ciclo.indexOf(ev) >= 0) {
      appendObjectRow_(SH_CICLO, H_CICLO, {
        timestamp: new Date().toISOString(), evento: ev, email: email, nome: nome,
        produto: prod.name || '', plano: (sub.plan && sub.plan.name) || '',
        assinatura_status: sub.status || '', transacao: tx
      });
      return json_({ok:true,tipo:'ciclo',evento:ev});
    }

    appendObjectRow_(SH_VENDAS, H_VENDAS, {
      timestamp: new Date().toISOString(), evento: ev, email: email, nome: nome,
      telefone: fone, produto: prod.name || '', produto_id: prod.id || '',
      valor: full, liquido: liq, pagamento: pay,
      is_order_bump: ob.is_order_bump || false,
      parent_tx: ob.parent_purchase_transaction || '', transacao: tx,
      utm_source: us, utm_medium: um, utm_campaign: uc, utm_content: ux, utm_term: ut
    });
    return json_({ok:true,tipo:'venda',evento:ev});
  } catch (err) {
    return json_({ok:false,error:String(err)});
  }
}

function doGet(e) {
  var rep = (e && e.parameter && e.parameter.report) || '';
  if (rep === 'funnel') {
    return json_(buildFunnel_(
      (e.parameter && e.parameter.from) || '',
      (e.parameter && e.parameter.to) || ''
    ));
  }
  return ContentService.createTextOutput('ok');
}

function buildFunnel_(from, to) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var range = dateRange_(from, to);

  /* Todas as fontes sao filtradas antes de qualquer agregacao. */
  var leads = filterRange_(rows_(ss, SH_LEADS), range);
  var vendas = filterRange_(rows_(ss, SH_VENDAS), range);
  var ciclo = filterRange_(rows_(ss, SH_CICLO), range);
  var funilRows = filterRange_(rows_(ss, SH_FUNIL), range);
  var eng = filterRange_(rows_(ss, SH_ENGAJ), range);
  var adsRows = filterRange_(rows_(ss, SH_ADS), range);

  var leadByEmail = {};
  var byUtm = {};
  var leadTurma = {};
  leads.forEach(function(r) {
    var em = String(r.email || '').toLowerCase();
    if (em) leadByEmail[em] = r;
    var s = r.utm_source || '(direto)';
    byUtm[s] = byUtm[s] || {lead:0,venda:0,receita:0};
    byUtm[s].lead++;
    var t = r.turma || '?';
    leadTurma[t] = (leadTurma[t] || 0) + 1;
  });

  var aprov = uniqueRows_(vendas.filter(function(v) {
    return v.evento === 'PURCHASE_APPROVED';
  }), function(v, i) {
    return v.transacao || (String(v.email || '').toLowerCase() + '|approved|' + i);
  });

  var receita = 0;
  var vendaEmail = {};
  var porProduto = {};
  aprov.forEach(function(v) {
    var val = num_(v.valor);
    receita += val;
    var em = String(v.email || '').toLowerCase();
    if (em) vendaEmail[em] = v;
    var p = v.produto || '?';
    porProduto[p] = porProduto[p] || {qtd:0,receita:0};
    porProduto[p].qtd++;
    porProduto[p].receita += val;
    var lead = leadByEmail[em];
    var s = lead ? (lead.utm_source || '(direto)') : (v.utm_source || '(direto)');
    byUtm[s] = byUtm[s] || {lead:0,venda:0,receita:0};
    byUtm[s].venda++;
    byUtm[s].receita += val;
  });

  var refund = vendas.filter(function(v) {
    return ['PURCHASE_REFUNDED','PURCHASE_CANCELED','PURCHASE_CHARGEBACK'].indexOf(v.evento) >= 0;
  }).length;
  var pix = uniqueEventCount_(vendas, ['PIX_GENERATED']);

  var subCreated = countEvent_(ciclo, 'SUBSCRIPTION_CREATED');
  var subRenewed = countEvent_(ciclo, 'SUBSCRIPTION_RENEWED');
  var subCancel = countEvent_(ciclo, 'SUBSCRIPTION_CANCELLED');
  var accessEnded = countEvent_(ciclo, 'ACCESS_ENDED');

  var abandono = [];
  Object.keys(leadByEmail).forEach(function(em) {
    if (!vendaEmail[em]) {
      var r = leadByEmail[em];
      abandono.push({nome:r.nome,email:em,telefone:r.telefone,turma:r.turma,ts:r.timestamp});
    }
  });

  var ads = buildAds_(adsRows);
  var pageview = uniqueSidCount_(funilRows, 'pageview');
  var viewcontent = uniqueSidCount_(funilRows, 'view_offer');
  var cta = uniqueSidCount_(funilRows, 'cta_click');
  var leadCount = uniqueLeadCount_(leads);
  var initiate = uniqueEventCount_(vendas, ['PIX_GENERATED','INITIATE_CHECKOUT','PURCHASE_INITIATED']);
  var purchase = aprov.length;

  var rawSteps = [
    {etapa:'impressoes', n:ads ? ads.impressions : null},
    {etapa:'cliques', n:ads ? ads.clicks : null},
    {etapa:'pageview', n:pageview},
    {etapa:'viewcontent', n:viewcontent},
    {etapa:'cta_click', n:cta},
    {etapa:'lead', n:leadCount},
    {etapa:'initiate_checkout', n:initiate},
    {etapa:'purchase', n:purchase}
  ];
  var funilVendas = monotonicFunnel_(rawSteps);

  var heatDobra = buildHeatDobra_(eng);
  var entrouCheckout = initiate;
  var comprouCheckout = Math.min(purchase, entrouCheckout);
  var heatCheckout = {
    entrou: entrouCheckout,
    comprou: comprouCheckout,
    abandono: entrouCheckout ? (entrouCheckout - comprouCheckout) / entrouCheckout : 0
  };

  var ticket = aprov.length ? receita / aprov.length : 0;
  return {
    updated: new Date().toISOString(),
    periodo: {from:from || null,to:to || null},
    funil: {leads:leads.length,pix:pix,vendas:aprov.length,conv:leads.length ? aprov.length/leads.length : 0},
    receita: receita,
    ticket: ticket,
    refunds: refund,
    porProduto: porProduto,
    porUtm: byUtm,
    cicloVida: {subCreated:subCreated,subRenewed:subRenewed,subCancel:subCancel,accessEnded:accessEnded},
    abandono: abandono.slice(0,300),
    funilVendas: funilVendas,
    heatDobra: heatDobra,
    heatCheckout: heatCheckout,
    engajamento: buildEngajamentoCompat_(eng, heatDobra),
    ads: ads
  };
}

function buildAds_(rows) {
  if (!rows.length) return null;
  var out = {spend_total:0,impressions:0,clicks:0,porCampanha:{}};
  rows.forEach(function(r) {
    var name = r.campaign_name || '(sem campanha)';
    var spend = num_(r.spend);
    var impressions = Math.max(0, Math.round(num_(r.impressions)));
    var clicks = Math.max(0, Math.round(num_(r.clicks)));
    out.spend_total += spend;
    out.impressions += impressions;
    out.clicks += clicks;
    out.porCampanha[name] = out.porCampanha[name] || {spend:0,impressions:0,clicks:0};
    out.porCampanha[name].spend += spend;
    out.porCampanha[name].impressions += impressions;
    out.porCampanha[name].clicks += clicks;
  });
  return out;
}

function buildHeatDobra_(eng) {
  var viu = {};
  var tempos = {};
  var tempoN = {};
  eng.forEach(function(r) {
    if (r.ev === 'viu' && r.dobra && r.sid) {
      viu[r.dobra] = viu[r.dobra] || {};
      viu[r.dobra][r.sid] = 1;
    }
    if (r.ev === 'tempo' && r.dobra && num_(r.seg) > 0) {
      tempos[r.dobra] = (tempos[r.dobra] || 0) + num_(r.seg);
      tempoN[r.dobra] = (tempoN[r.dobra] || 0) + 1;
    }
  });
  var total = Object.keys(viu['D1 Hero'] || {}).length;
  if (!total) {
    var todas = {};
    Object.keys(viu).forEach(function(dobra) {
      Object.keys(viu[dobra]).forEach(function(sid) { todas[sid] = 1; });
    });
    total = Object.keys(todas).length;
  }
  var anterior = total;
  return ORDEM_DOBRAS.map(function(nome) {
    var sessoes = Object.keys(viu[nome] || {}).length;
    sessoes = Math.min(sessoes, anterior);
    anterior = sessoes;
    return {
      dobra: nome,
      sessoes: sessoes,
      pct: total ? sessoes / total : 0,
      tempoMedio: tempoN[nome] ? Math.round(tempos[nome] / tempoN[nome]) : 0
    };
  });
}

function buildEngajamentoCompat_(eng, heatDobra) {
  var sessoes = {};
  var saiuEm = {};
  eng.forEach(function(r) {
    if (r.sid) sessoes[r.sid] = 1;
    if (r.ev === 'saida' && r.dobra) saiuEm[r.dobra] = (saiuEm[r.dobra] || 0) + 1;
  });
  var tempoMedio = {};
  heatDobra.forEach(function(r) { tempoMedio[r.dobra] = r.tempoMedio; });
  return {
    totalSessoes: Object.keys(sessoes).length,
    leitura: heatDobra.map(function(r) { return {dobra:r.dobra,chegou:r.sessoes,pct:r.pct}; }),
    tempoMedio: tempoMedio,
    saiuEm: saiuEm
  };
}

function monotonicFunnel_(steps) {
  var previous = null;
  return steps.map(function(step) {
    var n = step.n === null || step.n === undefined ? null : Math.max(0, Math.round(num_(step.n)));
    if (n !== null && previous !== null) n = Math.min(n, previous);
    var conv = (n !== null && previous !== null && previous > 0) ? n / previous : null;
    if (n !== null) previous = n;
    return {etapa:step.etapa,n:n,convDaAnterior:conv};
  });
}

/* ===== Meta Ads: pronta, mas inativa ate o trigger ser criado ===== */
function fetchMetaAds_() {
  var props = PropertiesService.getScriptProperties();
  var token = props.getProperty('META_TOKEN');
  var account = props.getProperty('META_AD_ACCOUNT');
  var graphVersion = props.getProperty('META_GRAPH_VERSION') || 'v25.0';
  if (!token || !account) {
    console.log('Meta Ads nao executada: configure META_TOKEN e META_AD_ACCOUNT.');
    return {ok:false,reason:'missing_properties'};
  }
  if (account.indexOf('act_') !== 0) account = 'act_' + account;

  var metaDay = new Date();
  metaDay.setDate(metaDay.getDate() - 1);
  var day = isoDate_(metaDay);
  var fields = 'campaign_name,spend,impressions,clicks';
  var timeRange = JSON.stringify({since:day,until:day});
  var url = 'https://graph.facebook.com/' + encodeURIComponent(graphVersion) + '/' + encodeURIComponent(account) + '/insights' +
    '?level=campaign&fields=' + encodeURIComponent(fields) +
    '&time_range=' + encodeURIComponent(timeRange) +
    '&limit=500&access_token=' + encodeURIComponent(token);
  var data = fetchAllMetaPages_(url);

  var sheet = sh_(SH_ADS, H_ADS);
  removeAdsDay_(sheet, day);
  data.forEach(function(row) {
    appendObjectRow_(SH_ADS, H_ADS, {
      timestamp: day + 'T12:00:00',
      campaign_name: row.campaign_name || '(sem campanha)',
      spend: num_(row.spend),
      impressions: num_(row.impressions),
      clicks: num_(row.clicks)
    });
  });
  return {ok:true,date:day,rows:data.length};
}

/* Rode manualmente UMA vez depois de configurar as propriedades Meta. */
function installMetaAdsDailyTrigger_() {
  ScriptApp.getProjectTriggers().forEach(function(trigger) {
    if (trigger.getHandlerFunction() === 'fetchMetaAds_') ScriptApp.deleteTrigger(trigger);
  });
  ScriptApp.newTrigger('fetchMetaAds_').timeBased().everyDays(1).atHour(3).create();
  return {ok:true,handler:'fetchMetaAds_',frequency:'daily',hour:3};
}

function fetchAllMetaPages_(url) {
  var out = [];
  var next = url;
  var guard = 0;
  while (next && guard < 20) {
    var response = UrlFetchApp.fetch(next, {muteHttpExceptions:true});
    var code = response.getResponseCode();
    var parsed = JSON.parse(response.getContentText() || '{}');
    if (code < 200 || code >= 300 || parsed.error) {
      throw new Error('Meta API: ' + JSON.stringify(parsed.error || parsed));
    }
    out = out.concat(parsed.data || []);
    next = parsed.paging && parsed.paging.next ? parsed.paging.next : '';
    guard++;
  }
  return out;
}

function removeAdsDay_(sheet, day) {
  if (!sheet || sheet.getLastRow() < 2) return;
  var values = sheet.getDataRange().getValues();
  var header = values[0];
  var idx = header.indexOf('timestamp');
  for (var i = values.length - 1; i >= 1; i--) {
    var value = idx >= 0 ? values[i][idx] : '';
    if (isoDate_(value) === day) sheet.deleteRow(i + 1);
  }
}

/* ===== helpers ===== */
function json_(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

function sh_(name, head) {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var s = ss.getSheetByName(name) || ss.insertSheet(name);
  if (head) ensureHeaders_(s, head);
  return s;
}

function ensureHeaders_(sheet, headers) {
  if (sheet.getLastRow() === 0) {
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
    return;
  }
  var lastCol = Math.max(sheet.getLastColumn(), 1);
  var current = sheet.getRange(1, 1, 1, lastCol).getValues()[0];
  headers.forEach(function(h) {
    if (current.indexOf(h) < 0) {
      current.push(h);
      sheet.getRange(1, current.length).setValue(h);
    }
  });
}

function appendObjectRow_(name, headers, obj) {
  var sheet = sh_(name, headers);
  var current = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  sheet.appendRow(current.map(function(h) { return obj[h] === undefined ? '' : obj[h]; }));
}

function rows_(ss, name) {
  var s = ss.getSheetByName(name);
  if (!s || s.getLastRow() < 2) return [];
  var d = s.getDataRange().getValues();
  var h = d.shift();
  return d.map(function(r) {
    var o = {};
    h.forEach(function(k, i) { o[k] = r[i]; });
    return o;
  });
}

function dateRange_(from, to) {
  var start = parseDateOnly_(from, false);
  var end = parseDateOnly_(to, true);
  return {start:start,end:end};
}

function parseDateOnly_(value, endExclusive) {
  if (!value || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return null;
  var p = value.split('-').map(Number);
  var d = new Date(p[0], p[1] - 1, p[2] + (endExclusive ? 1 : 0));
  return isNaN(d.getTime()) ? null : d;
}

function filterRange_(rows, range) {
  if (!range.start && !range.end) return rows;
  return rows.filter(function(r) {
    var d = rowDate_(r);
    if (!d) return false;
    if (range.start && d < range.start) return false;
    if (range.end && d >= range.end) return false;
    return true;
  });
}

function rowDate_(r) {
  var value = r.timestamp || r.date || '';
  if (Object.prototype.toString.call(value) === '[object Date]') return value;
  var d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
}

function uniqueRows_(rows, keyFn) {
  var seen = {};
  return rows.filter(function(r, i) {
    var key = String(keyFn(r, i));
    if (seen[key]) return false;
    seen[key] = 1;
    return true;
  });
}

function uniqueSidCount_(rows, eventName) {
  var seen = {};
  rows.forEach(function(r, i) {
    if (r.ev === eventName) seen[r.sid || (eventName + '|' + i)] = 1;
  });
  return Object.keys(seen).length;
}

function uniqueLeadCount_(rows) {
  var seen = {};
  rows.forEach(function(r, i) {
    var key = r.sid || String(r.email || '').toLowerCase() || ('lead|' + i);
    seen[key] = 1;
  });
  return Object.keys(seen).length;
}

function uniqueEventCount_(rows, events) {
  var seen = {};
  rows.forEach(function(r, i) {
    if (events.indexOf(r.evento) < 0) return;
    var key = r.transacao || String(r.email || '').toLowerCase() || (r.evento + '|' + i);
    seen[key] = 1;
  });
  return Object.keys(seen).length;
}

function countEvent_(rows, eventName) {
  return rows.filter(function(r) { return r.evento === eventName; }).length;
}

function num_(v) {
  if (typeof v === 'number') return isFinite(v) ? v : 0;
  return parseFloat(String(v || '').replace(/[^0-9.,-]/g, '').replace(/\.(?=\d{3})/g, '').replace(',', '.')) || 0;
}

function isoDate_(value) {
  var d = Object.prototype.toString.call(value) === '[object Date]' ? value : new Date(value);
  if (isNaN(d.getTime())) return '';
  return Utilities.formatDate(d, Session.getScriptTimeZone() || 'America/Sao_Paulo', 'yyyy-MM-dd');
}

function checkToken_(e, data) {
  return !!(e && e.parameter && e.parameter.token === WEBHOOK_TOKEN);
}
