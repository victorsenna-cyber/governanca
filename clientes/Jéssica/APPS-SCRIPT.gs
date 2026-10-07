/**
 * LADIES FLUENCY · captação de leads das 3 páginas
 * ---------------------------------------------------------------------------
 * Uma planilha, uma aba por página. O roteamento é pelo campo "page".
 *
 * Este script foi escrito para NÃO TER como falhar em silêncio:
 *  · cria a aba sozinho se ela não existir  → acaba o erro de nome de aba
 *  · cria e amplia o cabeçalho sozinho      → acaba o erro de coluna faltando
 *  · grava qualquer erro na aba "_erros"    → acaba a falha invisível
 *  · responde no navegador via doGet        → dá para testar sem a página
 *
 * COMO INSTALAR
 *  1. Planilha → Extensões → Apps Script
 *  2. Apagar TUDO e colar este arquivo
 *  3. Salvar (disquete)
 *  4. Implantar → Gerenciar implantações → ✏️ (lápis)
 *       Versão: **Nova versão**   ← o passo que quase todo mundo pula
 *       Executar como: Eu
 *       Quem pode acessar: **Qualquer pessoa**
 *     → Implantar
 *  5. Testar no navegador (ver TESTE, abaixo)
 *
 * TESTE, sem depender da página:
 *   Cole no navegador, trocando pela sua URL /exec:
 *     <SUA_URL>/exec?teste=1
 *   Resposta esperada: {"ok":true,"acao":"teste",...} e uma linha nova
 *   na aba "_teste". Se pedir login, o passo 4 está errado.
 */

var ABAS = {
  'pagina-1-emotional-speaking': 'P1 · Emotional Speaking',
  'pagina-1-ingles-para-brasileiros': 'P1 · Emotional Speaking',
  'pagina-2-portugues': 'P2 · Português',
  'pagina-2-portugues-para-estrangeiros': 'P2 · Português',
  'pagina-3-evento': 'P3 · Evento'
};

/* ------------------------------------------------------------------ GET --- */

function doGet(e) {
  var q = (e && e.parameter) || {};

  if (q.teste) {
    try {
      var linha = gravar({
        page: '_teste',
        timestamp: new Date().toISOString(),
        nome: 'teste manual',
        origem: 'doGet'
      });
      return json({ ok: true, acao: 'teste', aba: linha.aba, linha: linha.linha });
    } catch (err) {
      return json({ ok: false, acao: 'teste', erro: String(err) });
    }
  }

  return json({
    ok: true,
    servico: 'Ladies Fluency · captação de leads',
    dica: 'Adicione ?teste=1 nesta URL para gravar uma linha de teste.'
  });
}

/* ----------------------------------------------------------------- POST --- */

function doPost(e) {
  try {
    var dados = ler(e);
    if (!dados) throw new Error('corpo vazio ou ilegível');
    var linha = gravar(dados);
    return json({ ok: true, aba: linha.aba, linha: linha.linha });
  } catch (err) {
    registrarErro(err, e);
    return json({ ok: false, erro: String(err) });
  }
}

/** Aceita JSON puro (text/plain), form-encoded e multipart. */
function ler(e) {
  if (!e) return null;

  if (e.postData && e.postData.contents) {
    var bruto = e.postData.contents;
    try {
      return JSON.parse(bruto);
    } catch (ignorado) {
      // veio como form-encoded: chave=valor&chave=valor
      var obj = {};
      bruto.split('&').forEach(function (par) {
        var p = par.split('=');
        if (p[0]) obj[decodeURIComponent(p[0])] = decodeURIComponent((p[1] || '').replace(/\+/g, ' '));
      });
      if (obj.payload) { try { return JSON.parse(obj.payload); } catch (x) {} }
      return Object.keys(obj).length ? obj : null;
    }
  }

  if (e.parameter && Object.keys(e.parameter).length) {
    if (e.parameter.payload) {
      try { return JSON.parse(e.parameter.payload); } catch (x) {}
    }
    return e.parameter;
  }

  return null;
}

/* --------------------------------------------------------------- gravar --- */

/**
 * Grava o objeto na aba certa. Cria a aba e as colunas que faltarem.
 * Trava a planilha durante a escrita para não perder envio simultâneo.
 */
function gravar(dados) {
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);

  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var nomeAba = ABAS[dados.page] || String(dados.page || 'sem-pagina');
    var aba = ss.getSheetByName(nomeAba) || ss.insertSheet(nomeAba);

    // cabeçalho atual
    var largura = aba.getLastColumn();
    var cabecalho = largura
      ? aba.getRange(1, 1, 1, largura).getValues()[0].filter(String)
      : [];

    // colunas novas entram no fim, sem quebrar o que já existe
    var novas = Object.keys(dados).filter(function (k) {
      return cabecalho.indexOf(k) === -1;
    });

    if (novas.length) {
      cabecalho = cabecalho.concat(novas);
      aba.getRange(1, 1, 1, cabecalho.length).setValues([cabecalho]);
      aba.getRange(1, 1, 1, cabecalho.length).setFontWeight('bold');
      aba.setFrozenRows(1);
    }

    var linha = cabecalho.map(function (chave) {
      var v = dados[chave];
      return v === undefined || v === null ? '' : String(v);
    });

    aba.appendRow(linha);
    return { aba: nomeAba, linha: aba.getLastRow() };
  } finally {
    lock.releaseLock();
  }
}

/* ---------------------------------------------------------------- erros --- */

function registrarErro(err, e) {
  try {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var aba = ss.getSheetByName('_erros') || ss.insertSheet('_erros');
    if (aba.getLastRow() === 0) {
      aba.appendRow(['quando', 'erro', 'corpo recebido']);
      aba.getRange(1, 1, 1, 3).setFontWeight('bold');
      aba.setFrozenRows(1);
    }
    var corpo = '';
    try { corpo = e && e.postData ? e.postData.contents : JSON.stringify(e && e.parameter); } catch (x) {}
    aba.appendRow([new Date(), String(err), String(corpo).slice(0, 4000)]);
  } catch (x) {
    // se nem o log de erro grava, não há mais o que fazer aqui
  }
}

/* --------------------------------------------------------------- saída --- */

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
