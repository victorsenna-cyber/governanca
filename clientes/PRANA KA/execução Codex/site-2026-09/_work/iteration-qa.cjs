const fs=require('fs'),path=require('path'),crypto=require('crypto'),assert=require('assert/strict');
const {ROOT,route,routes}=require('./foundation.cjs');const {launch}=require('./browser.cjs');const {sharp}=require('./DEPENDENCIES.cjs');
const out=path.join(ROOT,'_qa/iteration-2026-09-26');fs.mkdirSync(out,{recursive:true});
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const baseline=path.join(ROOT,'_work/iteration-2026-09-26/before');
const original=JSON.parse(fs.readFileSync(path.join(baseline,'manifest.json')));
const changes=JSON.parse(fs.readFileSync(path.join(out,'changes.json')));
const result={date:new Date().toISOString(),static:{},pages:[],errorPage:[],failures:[],consoleErrors:[],pageErrors:[],networkFailures:[]};
function check(value,label,detail){if(!value)result.failures.push({label,detail});}
const allowed=new Set(changes.rows.map(r=>r.file).concat(['css/pages/home.css','css/quality.css']));
const unrelated=original.files.filter(r=>!allowed.has(r.file)&&sha(fs.readFileSync(path.join(ROOT,r.file)))!==r.sha256);
check(!unrelated.length,'No unrelated runtime changes',unrelated);
for(const r of changes.rows)check(sha(fs.readFileSync(path.join(ROOT,r.file)))===r.after,'Allowlisted HTML diff',r.file);
const canonicalChanges=original.sources.filter(r=>sha(fs.readFileSync(path.join(ROOT,'../..',r.file)))!==r.sha256);
check(!canonicalChanges.length,'Canonical sources preserved',canonicalChanges);
const proposal=fs.readFileSync(path.join(ROOT,'.htaccess.proposta'),'utf8');
const contract=fs.readFileSync(path.join(ROOT,'../../ITERACAO-SITE-2026-09-25.md'),'utf8');
const requested=contract.match(/```apache\r?\n([\s\S]*?)```/)[1];
check(proposal.trim().replaceAll('\r','')===requested.trim().replaceAll('\r',''),'Exact Apache proposal');
check(!fs.existsSync(path.join(ROOT,'.htaccess')),'No active .htaccess created');
const og=awaitableMetadata();function awaitableMetadata(){return sharp(path.join(ROOT,'assets/og/og-default.jpg')).metadata();}
const changedCSS=[];
for(const file of ['css/pages/home.css','css/quality.css']){const b=fs.readFileSync(path.join(baseline,'site',file),'utf8'),a=fs.readFileSync(path.join(ROOT,file),'utf8');check(a.includes(b),'CSS additions only',file);changedCSS.push(file);}
result.static={html:changes.pages,unrelatedChanges:unrelated,canonicalChanges,changedCSS,apache:'Literal comparison only; redirects/status require Apache after L3'};
(async()=>{
 const meta=await og;check(meta.format==='jpeg'&&meta.width===1200&&meta.height===630,'OG dimensions/type',meta);result.static.og={format:meta.format,width:meta.width,height:meta.height,size:fs.statSync(path.join(ROOT,'assets/og/og-default.jpg')).size};
 const browser=await launch();try{
 for(const lang of [0,1,2])for(const key of Object.keys(routes)){
  const url=route(key,lang),source=fs.readFileSync(path.join(ROOT,url.slice(1),'index.html'),'utf8');
  check(!source.includes('retrato-'),'No avatar reference',url);
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'no-preference'});const page=await context.newPage();
  let width=390;
  page.on('console',msg=>{if(msg.type()==='error')result.consoleErrors.push({route:url,width,text:msg.text(),location:msg.location()});});
  page.on('pageerror',e=>result.pageErrors.push({route:url,width,text:e.message}));
  page.on('requestfailed',request=>result.networkFailures.push({route:url,width,url:request.url(),error:request.failure()?.errorText}));
  for(width of [390,1440]){
   await page.setViewportSize({width,height:width===390?844:1000});const response=await page.goto('http://127.0.0.1:8794'+url,{waitUntil:'networkidle'});check(response.status()===200,'Page 200',url);
   await page.evaluate(()=>{document.querySelectorAll('details').forEach(d=>{if(!d.classList.contains('mobile-menu'))d.open=true;});});
   // Actual scroll lets all lazy images and the approved iframe load. No request interception.
   const height=await page.evaluate(()=>document.body.scrollHeight);
   for(let y=0;y<height;y+=700){await page.evaluate(y=>window.scrollTo(0,y),y);await page.waitForTimeout(45);}
   await page.waitForTimeout(1200);
   const data=await page.evaluate(()=>({text:document.body.innerText.replace(/\s+/g,' '),width:document.documentElement.scrollWidth,viewport:innerWidth,h1:document.querySelectorAll('h1').length,images:[...document.images].filter(i=>!i.complete||i.naturalWidth===0).map(i=>i.src),og:Object.fromEntries([...document.querySelectorAll('meta[property^="og:image"]')].map(m=>[m.getAttribute('property'),m.content])),title:document.title}));
   const forbidden=data.text.match(/PENDENTE|PENDING|PENDIENTE|12\s+(?:group\s+)?(?:encontros|encuentros|meetings|sessions)|checkout|R\$\s*97\b|R\$333/gi)||[];
   check(!forbidden.length,'Rendered text gate',{url,width,forbidden});check(data.width<=width,'No horizontal overflow',{url,width,scrollWidth:data.width});check(data.h1===1,'One h1',{url,width});check(!data.images.length,'Images loaded',{url,width,images:data.images});
   check(data.og['og:image']==='https://thegoldentemple.io/assets/og/og-default.jpg'&&data.og['og:image:width']==='1200'&&data.og['og:image:height']==='630','OG metadata',{url,width});
   if(key==='home'){
    const video=page.locator('.proof-video');check(await video.count()===1,'Carol video count',url);
    const attrs=await video.locator('iframe').evaluate(f=>({src:f.src,lazy:f.loading,title:f.title,autoplay:f.allow.includes('autoplay'),width:f.getBoundingClientRect().width,height:f.getBoundingClientRect().height}));
    check(attrs.src==='https://www.youtube-nocookie.com/embed/3NbO7HBGbkU'&&attrs.lazy==='lazy'&&!!attrs.title&&!attrs.autoplay,'Carol iframe attributes',{url,attrs});check((await video.locator('figcaption').innerText())==='Carol','Carol caption',url);
    if(lang===0){await video.scrollIntoViewIfNeeded();await video.screenshot({path:path.join(out,`video-${width}.png`)});}
   }
   if(key==='mentoria'){
    const seal=(await page.locator('.hero__seal').innerText()).replace(/\s+/g,' ').trim();check(seal===['a cada 14 dias','every 14 days','cada 14 días'][lang],'Cadence seal',{url,seal});check(!/12\s+(?:encontros|encuentros|meetings|sessions)/i.test(source),'No old cadence in metadata/body',url);
    if(lang===0){await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:path.join(out,`mentoria-${width}.png`)});}
    await page.locator('.deliverables').scrollIntoViewIfNeeded();await page.locator('.deliverables').screenshot({path:path.join(out,`cadence-${lang}-${width}.png`)});
   }
   if(key==='visao'){
    const top=await page.locator('.hero [data-whatsapp]').first().getAttribute('href');check(new URL(top).searchParams.get('text')==='Olá, Prana! Vim pela página da Visão Uterina e quero agendar minha sessão.','Top WhatsApp message',url);
    const price=(await page.locator('.price-figure').innerText()).replace(/\s+/g,' ').trim();check(price==='R$ 333','Price spacing',{url,price});
   }
   if(key==='curso'){
    const hiddenPrices=await page.locator('[hidden]').evaluateAll(nodes=>nodes.filter(n=>/R\$\s*97/.test(n.textContent.replace(/\s+/g,' '))).length);check(hiddenPrices===2,'Two hidden course prices',{url,hiddenPrices});
    const ctas=await page.locator('[data-course-link]').evaluateAll(a=>a.map(a=>a.href));check(ctas.length>0&&ctas.every(u=>u.startsWith('https://wa.me/5548984248922?')),'Course WhatsApp preserved',{url,ctas});
   }
   result.pages.push({route:url,width,status:response.status(),forbidden,overflow:data.width-width,missingImages:data.images.length});
  }
  // Accessibility audit on every changed route; details stay expanded.
  if(['home','mentoria','visao','curso'].includes(key)){
   await page.addScriptTag({path:path.join(ROOT,'_work/qa-tools/node_modules/axe-core/axe.min.js')});
   const axe=await page.evaluate(async()=>{const r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}});return {violations:r.violations.map(v=>({id:v.id,impact:v.impact,nodes:v.nodes.map(n=>n.target)})),incomplete:r.incomplete.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}))};});
   check(!axe.violations.length,'Axe accessibility',{url,...axe});result.pages.at(-1).axe=axe;
  }
  fs.writeFileSync(path.join(out,'qa-progress.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({route:url,cases:2,failures:result.failures.length,console:result.consoleErrors.length}));await context.close();
 }
 const context=await browser.newContext({javaScriptEnabled:false});const page=await context.newPage();
 for(const width of [390,1440]){
  await page.setViewportSize({width,height:width===390?844:1000});await page.goto('http://127.0.0.1:8794/404.html');await page.screenshot({path:path.join(out,`404-${width}.png`),fullPage:true});
  const data=await page.evaluate(()=>({width:document.documentElement.scrollWidth,robots:document.querySelector('meta[name=robots]').content,lang:document.documentElement.lang,en:document.querySelector('[lang=en]').textContent,es:document.querySelector('[lang=es]').textContent,links:[...document.querySelectorAll('a')].map(a=>a.getAttribute('href'))}));check(data.robots.includes('noindex')&&data.lang==='pt-BR'&&data.en&&data.es,'404 multilingual/noindex',data);check(data.width<=width,'404 overflow',data);check(JSON.stringify(data.links)===JSON.stringify(['/','/visao-uterina/','/mentoria/']),'404 exact destinations',data);await page.keyboard.press('Tab');check(await page.locator('a:focus').count()===1,'404 keyboard',width);result.errorPage.push({width,...data});
 }
 await context.close();
 const accessible=await browser.newContext();const errorTest=await accessible.newPage();
 await errorTest.goto('http://127.0.0.1:8794/404.html');await errorTest.addScriptTag({path:path.join(ROOT,'_work/qa-tools/node_modules/axe-core/axe.min.js')});
 const errorAxe=await errorTest.evaluate(async()=>{const r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa']}});return r.violations.map(v=>({id:v.id,nodes:v.nodes.map(n=>n.target)}));});
 check(!errorAxe.length,'404 axe',errorAxe);result.errorPageAxe=errorAxe;await accessible.close();
 // No-JS validation of hidden prices, corrected content and hero native CTA.
 result.noJS=[];
 for(const lang of [0,1,2]){
  const ctx=await browser.newContext({javaScriptEnabled:false});const p=await ctx.newPage();
  await p.goto('http://127.0.0.1:8794'+route('curso',lang));check(!/R\$\s*97/.test(await p.locator('body').innerText()),'No-JS hidden price',lang);
  await p.goto('http://127.0.0.1:8794'+route('visao',lang));const href=await p.locator('.hero [data-whatsapp]').first().getAttribute('href');check(new URL(href).searchParams.get('text').endsWith('quero agendar minha sessão.'),'No-JS native hero CTA',lang);result.noJS.push({lang,passed:true});await ctx.close();
 }
 }finally{await browser.close();}
 check(!result.pageErrors.length,'No unhandled JS errors',result.pageErrors);
 check(!result.consoleErrors.length,'Console clean',result.consoleErrors);
 fs.writeFileSync(path.join(out,'qa.json'),JSON.stringify(result,null,2));console.log(JSON.stringify({cases:result.pages.length,failures:result.failures,console:result.consoleErrors,pageErrors:result.pageErrors,networkFailures:result.networkFailures},null,2));if(result.failures.length)process.exitCode=1;
})().catch(e=>{result.failures.push({label:'QA interrupted',detail:e.stack});fs.writeFileSync(path.join(out,'qa.json'),JSON.stringify(result,null,2));console.error(e);process.exitCode=1});
