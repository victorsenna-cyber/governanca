const fs=require('fs'),path=require('path');const {launch,ROOT}=require('./browser.cjs'),{route,routes}=require('./foundation.cjs');
(async()=>{const b=await launch(),results=[];try{for(let lang=0;lang<3;lang++)for(const key of Object.keys(routes)){
 const c=await b.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}}),p=await c.newPage();await p.goto('http://127.0.0.1:8794'+route(key,lang));
 await p.keyboard.press('Tab');const skipFocused=await p.locator('.skip-link').evaluate(e=>e===document.activeElement);await p.keyboard.press('Enter');
 const nojsText=(await p.locator('main').innerText()).length;await p.locator('.mobile-menu summary').focus();await p.keyboard.press('Enter');const menu=await p.locator('.mobile-menu nav').isVisible();
 const equivalent=await p.locator('.language-nav a').evaluateAll(es=>es.map(e=>new URL(e.href).pathname));for(let i=0;i<3;i++)if(equivalent[i]!==route(key,i))throw Error('wrong language route');
 const faq=p.locator('main details summary').first();let faqWorks=null;if(await faq.count()){await faq.focus();await p.keyboard.press('Enter');faqWorks=await faq.evaluate(e=>e.parentElement.open)}
 const focus=await (await faq.count()?faq:p.locator('.mobile-menu summary')).evaluate(e=>({outline:getComputedStyle(e).outlineStyle,width:getComputedStyle(e).outlineWidth}));
 await p.locator('.language-nav a').nth((lang+1)%3).click();const languageNavigated=p.url().endsWith(route(key,(lang+1)%3));
 await c.close();const normal=await b.newContext({viewport:{width:390,height:844}}),n=await normal.newPage(),errors=[],external=[];
 n.on('console',m=>{if(m.type()==='error')errors.push(m.text())});n.on('pageerror',e=>errors.push(e.message));n.on('request',r=>{if(!r.url().startsWith('http://127.0.0.1:8794'))external.push(r.url())});
 await n.goto('http://127.0.0.1:8794'+route(key,lang));await n.waitForFunction(()=>window.TEMPLE_MOTION&&window.gsap&&window.ScrollTrigger,{},{timeout:30000});
 const widths=[];for(const width of [390,768,1440]){await n.setViewportSize({width,height:900});widths.push(await n.evaluate(()=>({width:innerWidth,overflow:document.documentElement.scrollWidth>innerWidth+1})));}
 await n.emulateMedia({reducedMotion:'reduce'});await n.waitForFunction(()=>!window.TEMPLE_MOTION.lenis);const reduced=await n.evaluate(()=>({lenis:!!window.TEMPLE_MOTION.lenis,triggers:window.ScrollTrigger?.getAll().length||0,depth:document.querySelector('.depth-stage')?.dataset.state||null}));
 // CSS zoom is a reflow approximation; not a substitute for physical-device testing.
 await n.setViewportSize({width:780,height:900});await n.evaluate(()=>document.documentElement.style.zoom='2');const zoomOverflow=await n.evaluate(()=>document.documentElement.scrollWidth>document.documentElement.clientWidth+1);
 const item={key,lang,skipFocused,nojsText,menu,equivalent,faqWorks,focus,languageNavigated,widths,reduced,zoomOverflow,errors,external:[...new Set(external)]};results.push(item);console.log(JSON.stringify({key,lang,errors,zoomOverflow}));await normal.close();
 }
 const failures=results.filter(r=>!r.skipFocused||r.nojsText<80||!r.menu||!r.languageNavigated||r.faqWorks===false||r.focus.outline==='none'||r.widths.some(w=>w.overflow)||r.reduced.lenis||r.reduced.triggers||r.reduced.depth==='active'||r.zoomOverflow||r.errors.length||r.external.some(u=>!u.startsWith('https://cdn.jsdelivr.net/npm/')));
 fs.writeFileSync(path.join(ROOT,'_qa/L7-flows.json'),JSON.stringify({date:new Date().toISOString(),failures,results},null,2));console.log({cases:results.length,failures:failures.length});if(failures.length)process.exitCode=1;
}finally{await b.close()}})().catch(e=>{console.error(e);process.exitCode=1});
