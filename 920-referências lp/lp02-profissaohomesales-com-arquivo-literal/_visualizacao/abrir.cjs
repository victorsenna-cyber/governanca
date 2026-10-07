const fs = require('node:fs');
const path = require('node:path');
const puppeteer = require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');
const root = path.resolve(__dirname, '..');
const source = 'https://lp02.profissaohomesales.com/';
const records = JSON.parse(fs.readFileSync(path.join(root,'_verificacao','manifesto.json'),'utf8'));
const lookup = new Map(records.map(item=>[item.url,item]));
const missing = new Set();
const mobile = process.argv.includes('--mobile');
(async () => {
 const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:false,args:['--no-first-run','--no-default-browser-check']});
 const page = await browser.newPage(); await page.setViewport(mobile?{width:390,height:844,isMobile:true,hasTouch:true}:{width:1440,height:1000});
 await page.setRequestInterception(true);
 page.on('request', request => { const item=lookup.get(request.url().split('#')[0]); if(item && fs.existsSync(path.join(root,item.path))) return request.respond({status:item.status||200,headers:{'content-type':item.content_type||'application/octet-stream'},body:fs.readFileSync(path.join(root,item.path))}); if(['fetch','xhr'].includes(request.resourceType()) || request.method()==='HEAD') return request.respond({status:204,body:''}); missing.add(request.url()); return request.abort('internetdisconnected'); });
 await page.goto(source,{waitUntil:'networkidle2',timeout:90000});
 console.log('Arquivo literal aberto sem rede. Feche o Chrome para encerrar.'); browser.on('disconnected',()=>process.exit(0));
})().catch(error=>{console.error(error);process.exitCode=1});
