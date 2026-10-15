/**
 * Patricck Garbim · Google Ads · cria a campanha de Pesquisa de outubro/2026 (PAUSADA).
 *
 * Fonte: 30-comercial/trafego-clientes/patricck/PLANO-DE-MIDIA.md §4 · DEC-PG-29.
 *
 * Como usar (na conta do Patricck):
 *   Ferramentas → Ações em massa → Scripts → + → colar este arquivo → Autorizar.
 *   1. Clique em VISUALIZAR. Nada é criado; o registro mostra o que seria criado.
 *   2. Confira o registro. Só então clique em EXECUTAR.
 *   3. A campanha nasce PAUSADA. Ative pela interface depois de revisar.
 *
 * O script para sem criar nada se: já existir campanha com o mesmo nome,
 * algum local não for encontrado, ou qualquer operação falhar (tudo ou nada).
 *
 * 🟡 Os textos do anúncio são rascunho até passarem no gate de copy (plano §9, item 5).
 */

const CONFIG = {
  campanha: 'patricck-google-search-conversa-fundo-202610',
  grupo: 'intencao-alta-goiania-df',
  orcamentoDiario: 12.0,      // R$ (DEC-PG-26: R$ 300–400/mês)
  limiteCpc: 4.0,             // R$, Maximizar cliques com teto
  urlFinal: 'https://orientaacolhimento.com.br/orienta-familia-1',
  sufixoUrl: 'utm_source=google&utm_medium=paid&utm_campaign=patricck-search-202610&utm_term={keyword}',
  caminho1: 'goiania-df',
  caminho2: 'visita',

  // Locais: nome no Google + trecho obrigatório do nome canônico (evita Trindade de outro estado).
  locais: [
    { nomes: ['Goiania', 'Goiânia'], canonicoContem: 'Goias' },
    { nomes: ['Aparecida de Goiania', 'Aparecida de Goiânia'], canonicoContem: 'Goias' },
    { nomes: ['Senador Canedo'], canonicoContem: 'Goias' },
    { nomes: ['Trindade'], canonicoContem: 'Goias' },
    { nomes: ['Goianira'], canonicoContem: 'Goias' },
    { nomes: ['Federal District', 'Distrito Federal'], canonicoContem: 'Federal District' },
  ],

  // seg–sáb, 8h00 às 18h30 (atendimento dele: 8h–19h, DEC-PG-20)
  dias: ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'],
  inicio: { hora: 8, minuto: 'ZERO' },
  fim: { hora: 18, minuto: 'THIRTY' },

  palavras: [
    ['clínica de recuperação', 'PHRASE'],
    ['comunidade terapêutica', 'PHRASE'],
    ['clínica de recuperação em goiânia', 'EXACT'],
    ['clínica de recuperação goiânia', 'EXACT'],
    ['clínica de recuperação brasília', 'EXACT'],
    ['clínica de recuperação df', 'EXACT'],
    ['comunidade terapêutica goiânia', 'EXACT'],
    ['comunidade terapêutica brasília', 'EXACT'],
    ['internação masculina', 'PHRASE'],
    ['clínica para alcoólatra', 'PHRASE'],
  ],

  // Negativas da campanha. Negativa não pega variação de acento: as duas formas entram.
  negativas: [
    'grátis', 'gratis', 'gratuita', 'gratuito', 'sus', 'caps', 'plano de saúde', 'plano de saude',
    'unimed', 'ipasgo', 'convênio', 'convenio', 'feminina', 'mulher', 'mulheres', 'adolescente',
    'menor', 'idoso', 'idosos', 'emprego', 'vaga de emprego', 'trabalhar', 'salário', 'salario',
    'curso', 'tcc', 'o que é', 'o que e', 'notícia', 'noticia', 'polícia', 'policia', 'denúncia',
    'denuncia', 'reclame aqui', 'involuntária', 'involuntaria', 'compulsória', 'compulsoria',
    'resgate', 'fisioterapia', 'cirurgia',
  ],

  titulos: [
    ['Internação Masculina', 'HEADLINE_1'],
    ['Goiânia e Distrito Federal', 'HEADLINE_2'],
    ['Visite Antes de Pagar'],
    ['Sem Sinal Antes da Visita'],
    ['Homens de 18 a 59 Anos'],
    ['Tratamento de 90 Dias'],
    ['Orientação Sem Custo'],
    ['Fale com o Patricck'],
    ['Vaga em Poucos Dias'],
    ['Tratamento 100% Particular'],
    ['Atendimento das 8h às 19h'],
  ],
  descricoes: [
    'Uma vaga para o seu familiar em poucos dias, numa unidade que você visita antes de pagar.',
    'Quem orienta a sua família já esteve do lado de dentro. Conte o caso pelo WhatsApp.',
    'Unidades de Goiânia e do DF, só para homens de 18 a 59 anos. Tratamento particular.',
  ],
  destaques: ['Visita antes de pagar', 'Orientação sem custo'],
};

function main() {
  const cid = AdsApp.currentAccount().getCustomerId().replace(/-/g, '');
  const preview = AdsApp.getExecutionInfo().isPreview();
  Logger.log('Conta %s · modo %s', cid, preview ? 'VISUALIZAR (nada é criado)' : 'EXECUTAR');

  validarTextos();
  barrarDuplicata();
  const locais = buscarLocais();

  const r = (tipo, id) => `customers/${cid}/${tipo}/${id}`;
  const ORC = r('campaignBudgets', -1);
  const CAMP = r('campaigns', -2);
  const GRUPO = r('adGroups', -3);
  const micros = (reais) => Math.round(reais * 1e6);
  const ops = [];

  ops.push({ campaignBudgetOperation: { create: {
    resourceName: ORC,
    name: CONFIG.campanha + ' · orçamento',
    amountMicros: micros(CONFIG.orcamentoDiario),
    deliveryMethod: 'STANDARD',
    explicitlyShared: false,
  } } });

  ops.push({ campaignOperation: { create: {
    resourceName: CAMP,
    name: CONFIG.campanha,
    status: 'PAUSED',
    advertisingChannelType: 'SEARCH',
    campaignBudget: ORC,
    targetSpend: { cpcBidCeilingMicros: micros(CONFIG.limiteCpc) },
    networkSettings: {
      targetGoogleSearch: true,
      targetSearchNetwork: false,
      targetContentNetwork: false,
      targetPartnerSearchNetwork: false,
    },
    geoTargetTypeSetting: { positiveGeoTargetType: 'PRESENCE', negativeGeoTargetType: 'PRESENCE' },
    finalUrlSuffix: CONFIG.sufixoUrl,
    containsEuPoliticalAdvertising: 'DOES_NOT_CONTAIN_EU_POLITICAL_ADVERTISING',
  } } });

  locais.forEach((geo) => ops.push({ campaignCriterionOperation: { create: {
    campaign: CAMP, location: { geoTargetConstant: geo },
  } } }));

  ops.push({ campaignCriterionOperation: { create: {
    campaign: CAMP, language: { languageConstant: 'languageConstants/1014' }, // português
  } } });

  CONFIG.dias.forEach((dia) => ops.push({ campaignCriterionOperation: { create: {
    campaign: CAMP,
    adSchedule: {
      dayOfWeek: dia,
      startHour: CONFIG.inicio.hora, startMinute: CONFIG.inicio.minuto,
      endHour: CONFIG.fim.hora, endMinute: CONFIG.fim.minuto,
    },
  } } }));

  CONFIG.negativas.forEach((texto) => ops.push({ campaignCriterionOperation: { create: {
    campaign: CAMP, negative: true, keyword: { text: texto, matchType: 'PHRASE' },
  } } }));

  ops.push({ adGroupOperation: { create: {
    resourceName: GRUPO,
    campaign: CAMP,
    name: CONFIG.grupo,
    status: 'ENABLED',
    type: 'SEARCH_STANDARD',
    cpcBidMicros: micros(CONFIG.limiteCpc),
  } } });

  CONFIG.palavras.forEach(([texto, tipo]) => ops.push({ adGroupCriterionOperation: { create: {
    adGroup: GRUPO, status: 'ENABLED', keyword: { text: texto, matchType: tipo },
  } } }));

  ops.push({ adGroupAdOperation: { create: {
    adGroup: GRUPO,
    status: 'ENABLED',
    ad: {
      finalUrls: [CONFIG.urlFinal],
      responsiveSearchAd: {
        headlines: CONFIG.titulos.map(([text, pin]) => (pin ? { text, pinnedField: pin } : { text })),
        descriptions: CONFIG.descricoes.map((text) => ({ text })),
        path1: CONFIG.caminho1,
        path2: CONFIG.caminho2,
      },
    },
  } } });

  CONFIG.destaques.forEach((texto, i) => {
    const asset = r('assets', -(10 + i));
    ops.push({ assetOperation: { create: { resourceName: asset, calloutAsset: { calloutText: texto } } } });
    ops.push({ campaignAssetOperation: { create: { campaign: CAMP, asset, fieldType: 'CALLOUT' } } });
  });

  Logger.log('%s operações montadas. Enviando (tudo ou nada)...', ops.length);
  const resultados = AdsApp.mutateAll(ops, { partialFailure: false });

  let falhas = 0;
  resultados.forEach((res, i) => {
    const tipo = Object.keys(ops[i])[0];
    if (res.isSuccessful()) {
      Logger.log('✔ %s %s', tipo, res.getResourceName() || '');
    } else {
      falhas++;
      Logger.log('✘ %s: %s', tipo, res.getErrorMessages().join(' | '));
    }
  });

  if (falhas) {
    Logger.log('🔴 %s falha(s). Nada foi criado. Mande este registro para o Claude.', falhas);
  } else {
    Logger.log(preview
      ? '✅ Visualização limpa. Se o registro estiver certo, clique em EXECUTAR.'
      : '✅ Campanha criada PAUSADA. Revise na interface antes de ativar.');
  }
}

/** Para se já existir campanha com o mesmo nome (evita duplicar ao rodar duas vezes). */
function barrarDuplicata() {
  const q = `SELECT campaign.id FROM campaign WHERE campaign.name = '${CONFIG.campanha}' AND campaign.status != 'REMOVED'`;
  if (AdsApp.search(q).hasNext()) {
    throw new Error(`Já existe a campanha "${CONFIG.campanha}". Nada foi criado.`);
  }
}

/** Busca os locais no Google e para se algum não for encontrado. */
function buscarLocais() {
  const nomes = [].concat(...CONFIG.locais.map((l) => l.nomes)).map((n) => `'${n}'`).join(', ');
  const q = 'SELECT geo_target_constant.resource_name, geo_target_constant.name, ' +
    'geo_target_constant.canonical_name, geo_target_constant.target_type ' +
    'FROM geo_target_constant WHERE geo_target_constant.country_code = \'BR\' ' +
    `AND geo_target_constant.status = 'ENABLED' AND geo_target_constant.name IN (${nomes})`;

  const achados = [];
  const it = AdsApp.search(q);
  while (it.hasNext()) achados.push(it.next().geoTargetConstant);

  const escolhidos = CONFIG.locais.map((alvo) => {
    const ok = achados.filter((g) => alvo.nomes.indexOf(g.name) >= 0 &&
      String(g.canonicalName).indexOf(alvo.canonicoContem) >= 0);
    if (ok.length !== 1) {
      Logger.log('Candidatos para %s: %s', alvo.nomes[0],
        achados.filter((g) => alvo.nomes.indexOf(g.name) >= 0)
          .map((g) => `${g.canonicalName} [${g.targetType}]`).join(' · ') || 'nenhum');
      throw new Error(`Local "${alvo.nomes[0]}" não resolvido (${ok.length} resultados). Nada foi criado.`);
    }
    Logger.log('Local: %s [%s]', ok[0].canonicalName, ok[0].targetType);
    return ok[0].resourceName;
  });
  return escolhidos;
}

/** Confere os limites de caractere antes de enviar. */
function validarTextos() {
  const erros = [];
  CONFIG.titulos.forEach(([t]) => { if (t.length > 30) erros.push(`título > 30: ${t}`); });
  CONFIG.descricoes.forEach((d) => { if (d.length > 90) erros.push(`descrição > 90: ${d}`); });
  CONFIG.destaques.forEach((d) => { if (d.length > 25) erros.push(`destaque > 25: ${d}`); });
  [CONFIG.caminho1, CONFIG.caminho2].forEach((p) => { if (p.length > 15) erros.push(`caminho > 15: ${p}`); });
  if (erros.length) throw new Error('Textos fora do limite: ' + erros.join(' · '));
}
