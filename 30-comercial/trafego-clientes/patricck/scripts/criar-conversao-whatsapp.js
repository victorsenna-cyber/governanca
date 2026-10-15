/**
 * Patricck Garbim · Google Ads · cria a ação de conversão "Clique no WhatsApp" e mostra o send_to.
 *
 * Fonte: DEC-PG-30 · PLANO-DE-MIDIA.md §5.
 *
 * Como usar (na conta do Patricck):
 *   Ferramentas → Ações em massa → Scripts → + → colar este arquivo → Autorizar → EXECUTAR.
 *   (Visualizar não cria a ação, então não mostra o send_to.)
 *   No fim do registro aparece:  SEND_TO = AW-.../...   → mandar essa linha para o Claude.
 *
 * Se a ação já existir com o mesmo nome, o script não cria outra: só mostra o send_to dela.
 */

const NOME = 'Clique no WhatsApp';

function main() {
  const cid = AdsApp.currentAccount().getCustomerId().replace(/-/g, '');

  if (!buscar()) {
    if (AdsApp.getExecutionInfo().isPreview()) {
      Logger.log('Modo VISUALIZAR: a ação "%s" seria criada. Clique em EXECUTAR para criar e ver o send_to.', NOME);
      return;
    }
    const res = AdsApp.mutate({ conversionActionOperation: { create: {
      name: NOME,
      type: 'WEBPAGE',
      category: 'CONTACT',
      status: 'ENABLED',
      countingType: 'ONE_PER_CLICK',
      clickThroughLookbackWindowDays: 7,
      viewThroughLookbackWindowDays: 1,
      primaryForGoal: true,
      valueSettings: { defaultValue: 0, alwaysUseDefaultValue: true },
    } } });
    if (!res.isSuccessful()) {
      throw new Error('Falhou ao criar a conversão: ' + res.getErrorMessages().join(' | '));
    }
    Logger.log('✔ Ação criada: %s', res.getResourceName());
  }

  const sendTo = buscar();
  if (!sendTo) throw new Error('Ação existe, mas o send_to não apareceu. Mande este registro para o Claude.');
  Logger.log('Conta %s', cid);
  Logger.log('SEND_TO = %s', sendTo);
}

/** Procura a ação pelo nome e devolve o send_to do snippet de evento, ou null. */
function buscar() {
  const q = 'SELECT conversion_action.resource_name, conversion_action.tag_snippets ' +
    `FROM conversion_action WHERE conversion_action.name = '${NOME}' ` +
    "AND conversion_action.status != 'REMOVED'";
  const it = AdsApp.search(q);
  if (!it.hasNext()) return null;
  const snippets = it.next().conversionAction.tagSnippets || [];
  for (const s of snippets) {
    const m = String(s.eventSnippet || '').match(/send_to['"]?\s*:\s*['"](AW-\d+\/[\w-]+)['"]/);
    if (m) return m[1];
  }
  return 'existe, sem snippet de página ainda';
}
