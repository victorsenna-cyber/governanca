const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');
const crypto = require('node:crypto');
const puppeteer = require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');
const root = path.resolve(__dirname, '..');
const source = 'https://lp02.profissaohomesales.com/';
const records = JSON.parse(fs.readFileSync(path.join(root,'_verificacao','manifesto.json'),'utf8'));
const lookup = new Map(records.map(item => [item.url,item]));
const mobile = process.argv.includes('--mobile');
const label = mobile ? 'mobile' : 'desktop';
const viewport = mobile ? {width:390,height:844,isMobile:true,hasTouch:true} : {width:1440,height:1000};
const pause = ms => new Promise(resolve=>setTimeout(resolve,ms));
async function metrics(page) { await pause(1200); return page.evaluate(() => ({title:document.title,text:document.body.innerText,height:document.documentElement.scrollHeight,width:document.documentElement.scrollWidth,images:[...document.images].map(image=>({src:image.currentSrc,loaded:image.complete&&image.naturalWidth>0})).filter(image=>image.src)})); }
(async () => {
 await fsp.mkdir(path.join(root,'_verificacao'),{recursive:true});
 const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,args:['--no-first-run','--no-default-browser-check']});
 const originalPage=await browser.newPage(); await originalPage.setViewport(viewport); await originalPage.goto(source,{waitUntil:'networkidle2',timeout:90000}); const original=await metrics(originalPage); await originalPage.screenshot({path:path.join(root,'_verificacao',`original-${label}.png`),fullPage:true});
 const localPage=await browser.newPage(); await localPage.setViewport(viewport); const missing=[], neutralized=[]; await localPage.setRequestInterception(true); localPage.on('request',request=>{const item=lookup.get(request.url().split('#')[0]); if(item && fs.existsSync(path.join(root,item.path))) return request.respond({status:item.status||200,headers:{'content-type':item.content_type||'application/octet-stream'},body:fs.readFileSync(path.join(root,item.path))}); if(['fetch','xhr'].includes(request.resourceType()) || request.method()==='HEAD') {neutralized.push({url:request.url(),type:request.resourceType(),method:request.method()}); return request.respond({status:204,body:''});} missing.push({url:request.url(),type:request.resourceType(),method:request.method()}); return request.abort('internetdisconnected');}); await localPage.goto(source,{waitUntil:'networkidle2',timeout:90000}); const local=await metrics(localPage); await localPage.screenshot({path:path.join(root,'_verificacao',`copia-local-${label}.png`),fullPage:true});
 const result={validated_at:new Date().toISOString(),source,viewport,original,local,textIdentical:original.text===local.text,dimensionsIdentical:original.height===local.height&&original.width===local.width,missing,neutralized,sha256Checks:records.map(item=>({path:item.path,ok:fs.existsSync(path.join(root,item.path))&&crypto.createHash('sha256').update(fs.readFileSync(path.join(root,item.path))).digest('hex')===item.sha256}))};
 await fsp.writeFile(path.join(root,'_verificacao',`validacao-${label}.json`),JSON.stringify(result,null,2)); console.log(JSON.stringify({label,textIdentical:result.textIdentical,dimensionsIdentical:result.dimensionsIdentical,original:{height:original.height,width:original.width},local:{height:local.height,width:local.width},missing:missing.length,hashes:result.sha256Checks.length,hashesValid:result.sha256Checks.every(item=>item.ok)},null,2)); await browser.close();
})().catch(error=>{console.error(error);process.exitCode=1});
