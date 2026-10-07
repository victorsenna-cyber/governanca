const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const puppeteer = require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');

const root = path.resolve(__dirname, '..');
const source = 'https://lp02.profissaohomesales.com/';
const browserPath = 'C:/Program Files/Google/Chrome/Application/chrome.exe';
const records = new Map();
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));
const safeName = (url, contentType) => {
  const parsed = new URL(url);
  const extension = path.extname(parsed.pathname) || ({'text/html':'.html','text/css':'.css','text/javascript':'.js','application/javascript':'.js','application/json':'.json','font/woff2':'.woff2','image/png':'.png','image/jpeg':'.jpg','image/webp':'.webp','image/svg+xml':'.svg'}[(contentType || '').split(';')[0]] || '.bin');
  return `${crypto.createHash('sha256').update(url).digest('hex').slice(0,16)}-${path.basename(parsed.pathname || 'index').replace(/[^a-zA-Z0-9._-]/g, '_').slice(0,80) || 'index'}${path.extname(parsed.pathname) ? '' : extension}`;
};
async function save(response) {
  const url = response.url().split('#')[0];
  if (!url.startsWith('http') || records.has(url)) return;
  const status = response.status();
  const headers = response.headers();
  const type = headers['content-type'] || 'application/octet-stream';
  let body;
  try { body = await response.buffer(); } catch { return; }
  const host = new URL(url).hostname;
  const relative = path.join('arquivos', host, safeName(url, type)).replace(/\\/g, '/');
  await fsp.mkdir(path.dirname(path.join(root, relative)), {recursive:true});
  await fsp.writeFile(path.join(root, relative), body);
  records.set(url, {url, path:relative, status, content_type:type, bytes:body.length, sha256:crypto.createHash('sha256').update(body).digest('hex'), resource_type:response.request().resourceType(), request_method:response.request().method()});
}
async function advance(page) {
  return page.evaluate(() => {
    const visible = el => { const s=getComputedStyle(el), r=el.getBoundingClientRect(); return s.display !== 'none' && s.visibility !== 'hidden' && r.width && r.height; };
    const input = [...document.querySelectorAll('input:not([type=hidden])')].filter(visible)[0];
    if (input) { input.focus(); input.value = input.type === 'email' ? 'referencia@local.test' : input.type === 'tel' ? '11999999999' : 'Referência Local'; input.dispatchEvent(new Event('input',{bubbles:true})); input.dispatchEvent(new Event('change',{bubbles:true})); }
    const candidates = [...document.querySelectorAll('button,[role=button],a')].filter(visible).filter(el => !el.disabled);
    const eligible = candidates.filter(el => /continuar|próximo|proximo|avançar|avancar|começar|comecar|sim|quero|ver|confirmar|finalizar/i.test((el.innerText||el.textContent||'').trim()));
    const target = eligible[0] || candidates.find(el => (el.innerText||el.textContent||'').trim().length > 1);
    if (!target) return false;
    target.click(); return true;
  });
}
(async () => {
  await fsp.mkdir(path.join(root, '_verificacao'), {recursive:true});
  const browser = await puppeteer.launch({executablePath:browserPath, headless:true, args:['--no-first-run','--no-default-browser-check']});
  const page = await browser.newPage();
  await page.setViewport({width:1440,height:1000});
  page.on('response', response => save(response).catch(() => {}));
  await page.goto(source,{waitUntil:'networkidle2',timeout:90000});
  for (let step=0; step<55; step++) { await wait(650); const moved=await advance(page); if(!moved) break; }
  await wait(2500);
  await fsp.writeFile(path.join(root,'_verificacao','manifesto.json'),JSON.stringify([...records.values()],null,2));
  await fsp.writeFile(path.join(root,'_verificacao','captura.json'),JSON.stringify({source,captured_at:new Date().toISOString(),resources:records.size},null,2));
  console.log(JSON.stringify({resources:records.size, urls:[...records.keys()].filter(url=>new URL(url).hostname==='lp02.profissaohomesales.com').length},null,2));
  await browser.close();
})().catch(error => { console.error(error); process.exitCode=1; });
