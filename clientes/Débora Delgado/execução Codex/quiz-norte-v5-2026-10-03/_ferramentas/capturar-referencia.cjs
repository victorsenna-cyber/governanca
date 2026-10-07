const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');

const referenceRoot = path.resolve(__dirname, '../../../../../920-referências lp/lp02-profissaohomesales-com-clone-local-integral-2026-10-03');
const outputRoot = path.resolve(__dirname, '..', 'referencia');
const manifestPath = path.join(referenceRoot, '_verificacao', 'manifesto.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const lookup = new Map(manifest.map(item => [item.url.split('#')[0], item]));
const trackers = /(?:facebook\.net|googletagmanager\.com|google-analytics\.com|vkdigital\.com\.br|inlead\.tech|fypro\.com\.br|kairosgrowth\.com\.br|assiny\.com\.br)/i;
const video = /pandavideo\.com\.br/i;
const source = 'https://lp02.profissaohomesales.com/';

function visible(el) {
  const r = el.getBoundingClientRect();
  const s = getComputedStyle(el);
  return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none';
}

async function run(width, height, mobile) {
  const browser = await puppeteer.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-first-run', '--no-default-browser-check'],
  });
  const page = await browser.newPage();
  await page.setViewport({ width, height, isMobile: mobile, hasTouch: mobile });
  await page.evaluateOnNewDocument(() => {
    document.addEventListener('click', event => {
      const a = event.target.closest('a');
      if (a && a.href && new URL(a.href).origin !== location.origin) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    }, true);
    document.addEventListener('submit', event => {
      event.preventDefault();
      event.stopImmediatePropagation();
    }, true);
  });
  await page.setRequestInterception(true);
  page.on('request', request => {
    const url = request.url().split('#')[0];
    if (trackers.test(url)) return request.respond({ status: 204, body: '' });
    if (video.test(url) && /embed|player/i.test(url)) {
      return request.respond({ status: 200, contentType: 'text/html; charset=utf-8', body: '<!doctype html><meta name="viewport" content="width=device-width"><body>Vídeo indisponível na cópia local</body>' });
    }
    const item = lookup.get(url);
    if (item && fs.existsSync(path.join(referenceRoot, item.path))) {
      return request.respond({ status: 200, contentType: item.content_type || 'application/octet-stream', body: fs.readFileSync(path.join(referenceRoot, item.path)) });
    }
    return request.abort('internetdisconnected');
  });
  await page.goto(source, { waitUntil: 'networkidle2', timeout: 90000 });
  await new Promise(resolve => setTimeout(resolve, 1200));

  const screens = [];
  for (let index = 1; index <= 45; index++) {
    const data = await page.evaluate(visibleFn => {
      const isVisible = Function(`return (${visibleFn})`)();
      const candidates = [...document.querySelectorAll('[role="main"], main, form, section, article, [class]')]
        .filter(isVisible)
        .map(el => ({ el, r: el.getBoundingClientRect(), text: (el.innerText || '').trim() }))
        .filter(x => x.text.length > 0)
        .sort((a, b) => (b.r.width * b.r.height) - (a.r.width * a.r.height));
      const main = document.querySelector('[role="main"]') || document.querySelector('main') || candidates[0]?.el || document.body;
      const controls = [...document.querySelectorAll('button,[role="button"]')]
        .filter(el => isVisible(el) && !el.disabled && (el.innerText || '').trim().length > 1)
        .filter(el => !/voltar|back/i.test(`${el.innerText} ${el.getAttribute('aria-label') || ''}`));
      const input = [...document.querySelectorAll('input:not([type="hidden"]),textarea')].find(isVisible);
      const rect = main.getBoundingClientRect();
      const styles = [...main.querySelectorAll('*')].slice(0, 300).map(el => {
        const cs = getComputedStyle(el);
        return { selector: el.tagName.toLowerCase() + (el.id ? `#${el.id}` : '') + (typeof el.className === 'string' && el.className.trim() ? '.' + el.className.trim().split(/\s+/).join('.') : ''), display: cs.display, position: cs.position, width: cs.width, height: cs.height, margin: cs.margin, padding: cs.padding, font: cs.font, color: cs.color, backgroundColor: cs.backgroundColor, border: cs.border, borderRadius: cs.borderRadius, boxShadow: cs.boxShadow, gap: cs.gap, lineHeight: cs.lineHeight };
      });
      return {
        title: document.title,
        text: document.body.innerText.replace(/\s+/g, ' ').trim().slice(0, 1400),
        componentTag: main.tagName.toLowerCase(),
        componentClass: typeof main.className === 'string' ? main.className : '',
        componentId: main.id || '',
        componentRect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        componentHTML: main.outerHTML,
        computed: { viewport: { width: innerWidth, height: innerHeight }, document: { width: document.documentElement.scrollWidth, height: document.documentElement.scrollHeight }, component: { display: getComputedStyle(main).display, position: getComputedStyle(main).position, width: getComputedStyle(main).width, maxWidth: getComputedStyle(main).maxWidth, padding: getComputedStyle(main).padding, margin: getComputedStyle(main).margin, font: getComputedStyle(main).font, color: getComputedStyle(main).color, backgroundColor: getComputedStyle(main).backgroundColor, borderRadius: getComputedStyle(main).borderRadius, boxShadow: getComputedStyle(main).boxShadow }, descendants: styles },
        controls: controls.length,
        hasInput: !!input,
      };
    }, visible.toString());

    const n = String(screens.length + 1).padStart(2, '0');
    const folder = path.join(outputRoot, String(width));
    fs.mkdirSync(folder, { recursive: true });
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.screenshot({ path: path.join(folder, `tela-${n}.png`), fullPage: false });
    fs.writeFileSync(path.join(folder, `tela-${n}-componente.json`), JSON.stringify(data, null, 2), 'utf8');
    screens.push({ n: Number(n), width, text: data.text, componentTag: data.componentTag, componentClass: data.componentClass, componentId: data.componentId, controls: data.controls, hasInput: data.hasInput, screenshot: `referencia/${width}/tela-${n}.png`, computed: `referencia/${width}/tela-${n}-componente.json` });

    if (!data.controls) {
      if (/carregando|calculando/i.test(data.text)) {
        const startedAt = Date.now();
        let advanced = false;
        while (Date.now() - startedAt < 90000) {
          await new Promise(resolve => setTimeout(resolve, 500));
          const current = await page.evaluate(() => ({ text: document.body.innerText.replace(/\s+/g, ' ').trim().slice(0, 1400), controls: [...document.querySelectorAll('button,[role="button"]')].filter(el => { const r = el.getBoundingClientRect(), s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && !el.disabled && (el.innerText || '').trim().length > 1; }).length }));
          if (!/carregando|calculando/i.test(current.text) || current.controls > 0) { advanced = true; break; }
        }
        if (!advanced) throw new Error(`A tela de carregamento não avançou em 90 segundos no viewport ${width}px.`);
        continue;
      }
      break;
    }

    if (data.hasInput) {
      await page.evaluate(() => {
        const el = [...document.querySelectorAll('input:not([type="hidden"]),textarea')].find(x => x.getBoundingClientRect().width > 0 && x.getBoundingClientRect().height > 0);
        if (el) {
          el.value = 'Referência Local';
          el.dispatchEvent(new Event('input', { bubbles: true }));
          el.dispatchEvent(new Event('change', { bubbles: true }));
        }
      });
    }
    await page.evaluate(() => {
      const el = [...document.querySelectorAll('button,[role="button"]')].find(x => {
        const r = x.getBoundingClientRect(), s = getComputedStyle(x);
        return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none' && !x.disabled && (x.innerText || '').trim().length > 1 && !/voltar|back/i.test(`${x.innerText} ${x.getAttribute('aria-label') || ''}`);
      });
      if (el) el.click();
    });
    await new Promise(resolve => setTimeout(resolve, 850));
  }
  const ending = await page.evaluate(() => document.body.innerText.replace(/\s+/g, ' ').trim().slice(0, 1400));
  await browser.close();
  return { viewport: width, count: screens.length, ending, screens };
}

(async () => {
  fs.mkdirSync(outputRoot, { recursive: true });
  const mobile = await run(390, 844, true);
  const desktop = await run(1440, 1000, false);
  fs.writeFileSync(path.join(outputRoot, 'inventario-telas.json'), JSON.stringify({ source, capturedAt: new Date().toISOString(), method: 'Puppeteer, interceptação offline do manifesto do clone, clique sucessivo em controles visíveis; sem scripts de tracking', mobile, desktop }, null, 2), 'utf8');
  console.log(JSON.stringify({ mobile: mobile.count, desktop: desktop.count, mobileEnd: mobile.ending, desktopEnd: desktop.ending, inventory: path.join(outputRoot, 'inventario-telas.json') }, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
