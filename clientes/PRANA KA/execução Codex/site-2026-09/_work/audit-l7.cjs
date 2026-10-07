const fs=require('fs'),path=require('path');
const {ROOT,route,routes}=require('./foundation.cjs');
const {launch}=require('./browser.cjs');
const axePath=require.resolve('./qa-tools/node_modules/axe-core/axe.min.js');
(async()=>{const browser=await launch(),results=[];try{
 for(let lang=0;lang<3;lang++)for(const key of Object.keys(routes)){
  const context=await browser.newContext({viewport:{width:390,height:844},reducedMotion:'reduce'}),p=await context.newPage(),errors=[];
  p.on('pageerror',e=>errors.push(e.message));p.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
  await p.goto('http://127.0.0.1:8794'+route(key,lang));await p.evaluate(()=>document.fonts.ready);
  await p.locator('img').evaluateAll(imgs=>imgs.forEach(i=>i.loading='eager'));await p.evaluate(()=>Promise.all([...document.images].map(i=>i.decode().catch(()=>{}))));
  await p.addScriptTag({path:axePath});
  const axe=await p.evaluate(async()=>{const r=await axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21aa','wcag22aa','best-practice']}});return {violations:r.violations,incomplete:r.incomplete}});
  const viewports=[];for(const width of [390,768,1440,320]){await p.setViewportSize({width,height:900});viewports.push(await p.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth+1,h1:document.querySelectorAll('h1').length,brokenImages:[...document.images].filter(i=>!i.naturalWidth).map(i=>i.src),lightHeadings:[...document.querySelectorAll('h1,h2,h3,h1 em,h2 em,h3 em')].filter(e=>+getComputedStyle(e).fontWeight<600).length})));}
  results.push({key,lang,route:route(key,lang),errors,viewports,...axe});
  fs.writeFileSync(path.join(ROOT,'_qa/L7-accessibility.json'),JSON.stringify({date:new Date().toISOString(),results},null,2));
  console.log(JSON.stringify({key,lang,violations:axe.violations.map(v=>({id:v.id,count:v.nodes.length})),errors,overflow:viewports.filter(v=>v.overflow)}));await context.close();
 }
}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
