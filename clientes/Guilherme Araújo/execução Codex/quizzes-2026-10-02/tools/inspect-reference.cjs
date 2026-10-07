const fs=require('node:fs'),path=require('node:path');
const p=require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');
const out=path.resolve(__dirname,'../qa/reference');
const pause=ms=>new Promise(r=>setTimeout(r,ms));
(async()=>{const b=await p.connect({browserURL:'http://127.0.0.1:9223'}),t=(await b.pages()).find(t=>t.url().includes('profissao'));await t.setViewport({width:390,height:844,isMobile:false,hasTouch:false});await pause(1000);
let seen=new Set();
for(let loop=0;loop<41;loop++){
 await t.evaluate(index=>{let e=document.querySelector('main button')||document.querySelector('main'),f=e[Object.keys(e).find(k=>k.startsWith('__reactFiber'))];while(f){for(let c=f.dependencies?.firstContext;c;c=c.next)if(c.memoizedValue?.globalContext){const ctx=c.memoizedValue;ctx.patchGlobalContext({activeStep:ctx.globalContext.funnel.steps[index].id,goTo:''});return}f=f.return}},loop);
 await pause(800);const id=await t.$eval('[id^=step_]',e=>e.id);
 seen.add(id);const n=String(loop+1).padStart(2,'0');
 for(const [label,width,height] of [['mobile',390,844],['desktop',1440,1000]]){
 await t.setViewport({width,height,isMobile:false,hasTouch:false});await pause(200);
 const data=await t.evaluate(()=>({id:document.querySelector('[id^=step_]').id,text:document.querySelector('main').innerText,html:document.querySelector('main').outerHTML,styles:[...document.querySelectorAll('main *')].map(e=>{let c=getComputedStyle(e);return {tag:e.tagName,cls:e.className,text:e.children.length?'':e.textContent,rect:{width:e.getBoundingClientRect().width,height:e.getBoundingClientRect().height},css:Object.fromEntries(['font-family','font-size','font-weight','line-height','color','background-color','border-radius','border-width','border-color','box-shadow','padding','margin','gap','min-height','max-width','transition','display','align-items','justify-content'].map(k=>[k,c.getPropertyValue(k)]))}})}));
 fs.writeFileSync(path.join(out,`${n}-${label}.json`),JSON.stringify(data,null,2));await t.screenshot({path:path.join(out,`${n}-${label}.png`),fullPage:true});
 }
 await t.setViewport({width:390,height:844,isMobile:false,hasTouch:false});
 console.log(n,id,(await t.$eval('main',e=>e.innerText)).slice(0,110).replace(/\n/g,' '));
 if(n==='41')break;
 const inputs=await t.$$('input');for(const i of inputs){const type=await i.evaluate(e=>e.type);if(['hidden','checkbox'].includes(type))continue;await i.type(type==='email'?'teste@example.test':type==='tel'?'11999999999':'Teste',{delay:5});}
 const choices=await t.$$('.group\\/item button');
 if(choices.length){await choices[0].click()}else{
 const clicked=await t.evaluate(()=>{let bs=[...document.querySelectorAll('main button')].filter(e=>e.innerText.trim()&&!e.disabled);let el=bs.find(e=>!/voltar/i.test(e.innerText));if(el){el.click();return true}return false});
 if(!clicked)await pause(6200);
 }
 await pause(150);
 }
 await b.disconnect();})();
