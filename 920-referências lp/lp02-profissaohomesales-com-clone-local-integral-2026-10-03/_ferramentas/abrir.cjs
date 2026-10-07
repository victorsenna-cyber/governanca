const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');
const root = path.resolve(__dirname, '..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, '_verificacao', 'manifesto.json'), 'utf8'));
const lookup = new Map(manifest.map(item => [item.url.split('#')[0], item]));
const tracker = /(?:facebook\.net|googletagmanager\.com|google-analytics\.com|vkdigital\.com\.br|inlead\.tech|fypro\.com\.br|kairosgrowth\.com\.br|assiny\.com\.br)/i;
const video = /pandavideo\.com\.br/i;
const source = 'https://lp02.profissaohomesales.com/';
(async () => {
  const mobile = process.argv.includes('--mobile');
  const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:false,args:['--no-first-run','--no-default-browser-check']});
  const page = await browser.newPage();
  await page.setViewport(mobile ? {width:390,height:844,isMobile:true,hasTouch:true} : {width:1440,height:1000});
  await page.evaluateOnNewDocument(() => {
    document.addEventListener('click', event => { const a=event.target.closest('a'); if(a && a.href && new URL(a.href).origin!==location.origin){event.preventDefault();event.stopImmediatePropagation();}}, true);
    document.addEventListener('submit', event => {event.preventDefault();event.stopImmediatePropagation();}, true);
  });
  await page.setRequestInterception(true);
  page.on('request', req => {
    const url=req.url().split('#')[0];
    if(video.test(url) && /embed|player/i.test(url)) return req.respond({status:200,contentType:'text/html; charset=utf-8',body:'<!doctype html><meta name="viewport" content="width=device-width"><style>body{margin:0;background:#111;color:white;font:16px Arial;display:grid;place-items:center;height:100vh}</style><div>Vídeo indisponível na cópia local<br><small>VIDEO_URL_PLACEHOLDER</small></div>'});
    if(tracker.test(url)) return req.respond({status:204,body:''});
    const item=lookup.get(url);
    if(item && fs.existsSync(path.join(root,item.path))) return req.respond({status:200,contentType:item.content_type||'application/octet-stream',body:fs.readFileSync(path.join(root,item.path))});
    return req.abort('internetdisconnected');
  });
  await page.goto(source,{waitUntil:'networkidle2',timeout:90000});
  console.log('Cópia integral carregada do disco, sem acesso à rede. Feche o Chrome para encerrar.');
  browser.on('disconnected',()=>process.exit(0));
})().catch(error=>{console.error(error);process.exitCode=1});
