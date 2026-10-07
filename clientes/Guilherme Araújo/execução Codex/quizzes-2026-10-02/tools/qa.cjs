const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const puppeteer=require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');
const root=path.resolve(__dirname,'..'),qa=path.join(root,'qa');const pause=ms=>new Promise(r=>setTimeout(r,ms));
const configs=Object.fromEntries(['permissao','teto','signos'].map(k=>[k,JSON.parse(fs.readFileSync(path.join(root,`public/config/${k}.json`)))]));
let report={runs:[],errors:[],externalRequests:[],checks:{}};
async function run(browser,quiz,width,mode='highpoints',capture=false,sign=0){
 const c=configs[quiz],page=await browser.newPage();await page.setViewport({width,height:width<500?844:1000});const requests=[];
 await page.setRequestInterception(true);page.on('request',r=>{if(/^https?:/.test(r.url())&&!r.url().startsWith('http://127.0.0.1:4173/')){requests.push(r.url());return r.abort();}r.continue();});page.on('pageerror',e=>report.errors.push(e.message));
 await page.goto(`http://127.0.0.1:4173/${quiz}.html?m=B&utm_source=qa`,{waitUntil:'networkidle0'});
 const folder=path.join(qa,'screens',quiz,String(width));fs.mkdirSync(folder,{recursive:true});let maxOverflow=0,seen=[],consentVisible=false;
 for(let index=0;index<c.steps.length;index++){
  const s=c.steps[index];if(index&&await page.$eval('main',e=>e.dataset.step)!==s.id)continue;await page.waitForSelector(`main[data-step="${s.id}"]`);await pause(80);
  const metrics=await page.evaluate(()=>({overflow:document.documentElement.scrollWidth-innerWidth,text:document.querySelector('main').innerText}));maxOverflow=Math.max(maxOverflow,metrics.overflow);assert(!/\{\{|undefined/.test(metrics.text),s.id);seen.push(s.id);
  if(capture)await page.screenshot({path:path.join(folder,`${s.id}.png`),fullPage:true});
  if(s.options){let choice=0;if(s.points)choice=mode==='zero'?s.points.indexOf(0):mode==='mixed'?s.points.indexOf(s.points.includes(2)?2:1):s.points.indexOf(3);if(s.key==='p01_signo')choice=sign;await page.click(`[data-option="${choice}"]`);
   if(index===0){await page.click('.back');assert.equal(await page.$eval('main',e=>e.dataset.step),s.id);assert.equal(await page.$eval(`[data-option="${choice}"]`,e=>e.getAttribute('aria-pressed')),'true');await page.click(`[data-option="${choice}"]`);await page.reload({waitUntil:'networkidle0'});assert.equal(await page.$eval('main',e=>e.dataset.step),c.steps[1].id);}
  }else if(s.type==='loading'){await page.waitForSelector(`main[data-step="${c.steps[index+1].id}"]`,{timeout:10000});}
  else if(s.type==='capture'){
   await page.click('button[type=submit]');assert.equal(await page.$$eval('.field-error:not([hidden])',es=>es.length),3);
   await page.type('#nome','teste');await page.type('#whatsapp','11999999999');await page.type('#email','teste@example.test');
   consentVisible=await page.$eval('.consent',e=>{let r=e.getBoundingClientRect();return r.top>=0&&r.bottom<=innerHeight-72;});
   await page.click('button[type=submit]');
  }else if(s.type!=='offer')await page.click('.fixed-action .button');
 }
 const saved=await page.evaluate(k=>JSON.parse(sessionStorage.getItem(k)),`quiz:${quiz}:1.0`);assert.equal(saved.payload.momento,'B');assert.equal(Object.keys(saved.payload.respostas).length,c.resultMode==='score'?23:10);assert.equal(await page.$$('.testimonials').then(x=>x.length),0);
 if(c.resultMode==='score'){assert.equal(saved.payload.resultado,mode==='zero'?'ALTO':mode==='mixed'?'MÉDIO':'BAIXO');if(mode==='zero'){assert(!seen.includes('T20')&&!seen.includes('T21')&&!seen.includes('T22'));const text=await page.$eval('main',e=>e.innerText);assert(!text.includes('Por que estudar mais'));assert(!text.includes('Conforme você respondeu'));assert(text.includes('NÃO PARECE SER'));}await page.click('.checkout');await pause(200);assert(requests.some(x=>x.startsWith(c.checkout_diagnostico)));assert(!requests.some(x=>/teste|999999999|%40|email=|nome=|whatsapp=/.test(x)));}
 else {const name=c.steps[0].options[sign].label,group=c.groups.find(g=>g.members.includes(name)),raw=c[group.checkoutKey];assert.equal(saved.payload.resultado,group.label);assert.equal(await page.$eval('.checkout',e=>e.disabled),!raw);if(raw){await page.click('.checkout');await pause(200);assert(requests.some(x=>x.startsWith(raw)));}}
 report.runs.push({quiz,width,mode,sign,result:saved.payload.resultado,points:saved.payload.pontos,steps:seen.length,overflow:maxOverflow,consentVisible,keys:Object.keys(saved.payload.respostas),requests});await page.close();
}
(async()=>{const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,userDataDir:path.join(root,'.browser-qa'),args:['--remote-debugging-port=9224','--no-first-run']});
try{for(const width of [390,360,1440])for(const q of ['permissao','teto','signos'])await run(browser,q,width,'highpoints',true);for(const q of ['permissao','teto'])for(const mode of ['zero','mixed'])await run(browser,q,390,mode,false);for(let i=1;i<12;i++)await run(browser,'signos',390,'highpoints',false,i);report.checks.complete=true;}catch(e){report.errors.push(e.stack);console.error(e);}finally{fs.writeFileSync(path.join(qa,'browser.json'),JSON.stringify(report,null,2));console.log(JSON.stringify(report));await browser.close();}})();
