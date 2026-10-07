const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');
const puppeteer = require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');

const packageRoot = path.resolve(__dirname, '..');
const pageFile = path.join(packageRoot, 'quiz', 'preview.html');
const outputRoot = path.join(packageRoot, 'evidencia', 'etapa-1');
const views = ['opening', 'age', 'list', 'insert', 'insert-mid', 'desire', 'loading', 'result', 'capture', 'nextstep'];
const chromePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';

(async () => {
  fs.mkdirSync(outputRoot, { recursive: true });
  const browser = await puppeteer.launch({ executablePath: chromePath, headless: true, args: ['--no-first-run', '--no-default-browser-check'] });
  const page = await browser.newPage();
  const results = [];
  for (const viewport of [{ width: 390, height: 844, mobile: true }, { width: 1440, height: 1000, mobile: false }]) {
    await page.setViewport({ width: viewport.width, height: viewport.height, isMobile: viewport.mobile, hasTouch: viewport.mobile });
    const folder = path.join(outputRoot, String(viewport.width));
    fs.mkdirSync(folder, { recursive: true });
    for (const view of views) {
      const url = `${pathToFileURL(pageFile).href}?view=${encodeURIComponent(view)}`;
      await page.goto(url, { waitUntil: 'networkidle0' });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({ path: path.join(folder, `${view}.png`), fullPage: false });
      if (view === 'result' || view === 'nextstep') {
        await page.screenshot({ path: path.join(folder, `${view}-pagina.png`), fullPage: true });
      }
      const details = await page.evaluate(() => {
        const box = selector => {
          const element = document.querySelector(selector);
          if (!element) return null;
          const rect = element.getBoundingClientRect();
          return { x: Math.round(rect.x), y: Math.round(rect.y), width: Math.round(rect.width), height: Math.round(rect.height) };
        };
        return { screen: box('.preview-screen.is-visible'), topbar: box('.topline, .opening-progress'), list: box('.list-shell'), heading: box('.question-title') };
      });
      results.push({ viewport: viewport.width, view, fontLoaded: await page.evaluate(() => document.fonts.check('16px Inter')), details, screenshot: `evidencia/etapa-1/${viewport.width}/${view}.png` });
    }
  }
  await browser.close();
  fs.writeFileSync(path.join(outputRoot, 'capturas.json'), JSON.stringify({ capturedAt: new Date().toISOString(), results }, null, 2), 'utf8');
  console.log(JSON.stringify({ captures: results.length, fontsLoaded: results.every(item => item.fontLoaded), outputRoot }, null, 2));
})().catch(error => { console.error(error); process.exitCode = 1; });
