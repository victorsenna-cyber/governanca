var SPREADSHEET_ID = "1_uO8I7yUHRxmIPX12MPZngfkCkrULrwdRGxCbuk6BcI";
var SHEET_NAME = "Leads - Portal das Felinas";
var HEADERS = [
  "criadoEm",
  "nome",
  "telefone",
  "email",
  "produto",
  "consentimento",
  "origem",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "pagina"
];

function doGet() {
  try {
    var spreadsheet = getSpreadsheet_();

    return jsonResponse_({
      ok: true,
      service: "portal-das-felinas-leads",
      spreadsheetId: spreadsheet.getId()
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      service: "portal-das-felinas-leads",
      error: String(error && error.message ? error.message : error)
    });
  }
}

function doPost(event) {
  try {
    var lead = parseLead_(event);

    if (lead.website) {
      return jsonResponse_({ ok: true });
    }

    validateLead_(lead);

    var duplicateKey = hash_([
      lead.email,
      lead.telefone,
      lead.produto,
      String(new Date().getUTCMinutes())
    ].join("|"));
    var cache = CacheService.getScriptCache();

    if (cache.get(duplicateKey)) {
      return jsonResponse_({ ok: true, duplicate: true });
    }

    var lock = LockService.getScriptLock();
    lock.waitLock(10000);

    try {
      var spreadsheet = getSpreadsheet_();
      var sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

      if (sheet.getLastRow() === 0) {
        sheet.appendRow(HEADERS);
        sheet.setFrozenRows(1);
      }

      sheet.appendRow(HEADERS.map(function (header) {
        return safeCell_(lead[header]);
      }));
    } finally {
      lock.releaseLock();
    }

    cache.put(duplicateKey, "1", 300);
    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: String(error && error.message ? error.message : error)
    });
  }
}

function getSpreadsheet_() {
  if (!SPREADSHEET_ID) {
    throw new Error("SPREADSHEET_ID não configurado.");
  }

  return SpreadsheetApp.openById(SPREADSHEET_ID);
}

function parseLead_(event) {
  if (!event || !event.postData || !event.postData.contents) {
    throw new Error("Corpo da requisição ausente.");
  }

  var parsed = JSON.parse(event.postData.contents);
  var lead = {};

  HEADERS.concat(["website"]).forEach(function (key) {
    if (typeof parsed[key] === "boolean") {
      lead[key] = parsed[key];
      return;
    }

    lead[key] = String(parsed[key] || "").trim().slice(0, 500);
  });

  return lead;
}

function validateLead_(lead) {
  if (!lead.nome || !lead.telefone || !lead.email) {
    throw new Error("Nome, telefone e e-mail são obrigatórios.");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    throw new Error("E-mail inválido.");
  }

  if (lead.consentimento !== true) {
    throw new Error("Consentimento ausente.");
  }
}

function safeCell_(value) {
  if (typeof value === "boolean") return value;

  var text = String(value || "");
  if (/^[=+\-@]/.test(text)) return "'" + text;
  return text;
}

function hash_(value) {
  var digest = Utilities.computeDigest(
    Utilities.DigestAlgorithm.SHA_256,
    value,
    Utilities.Charset.UTF_8
  );

  return digest.map(function (byte) {
    var normalized = byte < 0 ? byte + 256 : byte;
    return ("0" + normalized.toString(16)).slice(-2);
  }).join("");
}

function jsonResponse_(payload) {
  return ContentService
    .createTextOutput(JSON.stringify(payload))
    .setMimeType(ContentService.MimeType.JSON);
}
