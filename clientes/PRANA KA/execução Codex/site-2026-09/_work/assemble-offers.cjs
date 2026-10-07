// Mechanical transplant of approved Portuguese DOM. No copy generation.
const fs=require('fs'),path=require('path'),vm=require('vm'),crypto=require('crypto');const {ROOT,page,write,route,geometry}=require('./foundation.cjs');const {launch}=require('./browser.cjs');
const sourceRoot=path.resolve(ROOT,'..','..','04 - web design');
(async()=>{const browser=await launch();try{const p=await browser.newPage();await p.route('**/*',r=>r.abort());const manifest=[];for(const [key,folder] of [['visao','visao-uterina'],['mentoria','mentoria'],['curso','curso']]){
 const html=fs.readFileSync(path.join(sourceRoot,folder,'index.html'),'utf8');let offer=null;
 if(key==='mentoria'){const js=fs.readFileSync(path.join(sourceRoot,folder,'script.js'),'utf8');offer=vm.runInNewContext(js.slice(0,js.indexOf('/* Obrigatórios'))+';OFFER_CONFIG',{encodeURIComponent});}
 const transformed=await p.evaluate(({html,key,offer,geom})=>{const d=new DOMParser().parseFromString(html,'text/html');const main=d.querySelector('main');const norm=s=>s.replace(/\s+/g,' ').trim();const sourceText=norm(main.textContent);let bindings=[];
 main.querySelectorAll('[src]').forEach(el=>{let src=el.getAttribute('src');if(src.startsWith('assets/biblioteca/'))src='/'+src;else if(src.startsWith('assets/images/'))src='/'+src;else if(src.startsWith('assets/'))src='/assets/images/'+src.slice(7);el.setAttribute('src',src)});
 if(key==='mentoria'){
   main.querySelector('[data-offer-pending]').hidden=true;main.querySelector('[data-offer-confirmed]').hidden=false;main.querySelector('[data-offer-gate]').hidden=true;main.querySelector('[data-offer-next]').hidden=false;
   for(const [field,selector] of [['cohortStart','[data-cohort-start]'],['meetingSchedule','[data-meeting-schedule]'],['capacity','[data-capacity]'],['enrollmentDeadline','[data-enrollment-deadline]'],['postPurchaseSteps','[data-post-purchase]']]){const el=main.querySelector(selector);el.textContent=offer[field];el.closest('[data-detail]')?.removeAttribute('hidden');bindings.push(offer[field])}
   main.querySelectorAll('.js-cta').forEach(a=>{if(['d8','d10'].includes(a.dataset.placement)){a.href=offer.checkoutUrl;a.removeAttribute('aria-disabled');a.dataset.external='mentoria'}});
 }
 if(key==='curso')main.querySelectorAll('.js-checkout').forEach(button=>{const a=d.createElement('a');for(const attr of button.attributes)if(attr.name!=='type')a.setAttribute(attr.name,attr.value);a.setAttribute('data-course-link','');a.href='https://wa.me/5548984248922?text='+encodeURIComponent('Oi Prana! Quero entrar no Despertar do Prazer Sagrado. Como faço?');a.innerHTML=button.innerHTML;button.replaceWith(a)});
 main.querySelectorAll(':scope>section').forEach((section,i)=>{section.dataset.composition=String(i+1);if(i>0&&i%2===0)section.insertAdjacentHTML('beforeend',geom);if(!section.querySelector('img,svg')&&i>0)section.insertAdjacentHTML('beforeend',geom);});
 if(key==='curso')main.querySelector('.mirror').insertAdjacentHTML('beforeend',geom);
 main.querySelectorAll('.proof-card').forEach((card,i)=>{const names=['monica','natalia','taynah','sami'];card.querySelector('figcaption').insertAdjacentHTML('afterbegin',`<img src="/assets/biblioteca/retrato-${names[i]}.webp" width="112" height="112" alt="" loading="lazy">`)});
 main.querySelectorAll('.hero-image,.hero__image-frame img,.course-cover img').forEach(img=>img.setAttribute('data-parallax',''));
 const comparable=main.cloneNode(true);comparable.querySelectorAll('[data-cohort-start],[data-meeting-schedule],[data-capacity],[data-enrollment-deadline],[data-post-purchase]').forEach(el=>el.textContent='');
 return {main:main.outerHTML,sourceText,outputText:norm(comparable.textContent),bindings,description:d.querySelector('meta[name=description]')?.content||''};
 },{html,key,offer,geom:geometry()});
 if(transformed.sourceText!==transformed.outputText)throw Error('Copy divergence '+key);
 write(route(key),page(key,transformed.main,{css:['pages/oferta'],description:transformed.description,draft:false}));
 manifest.push({page:route(key),source:path.join(sourceRoot,folder,'index.html'),sha256:crypto.createHash('sha256').update(html).digest('hex'),copyEqual:true,bindings:transformed.bindings});
 }fs.writeFileSync(path.join(ROOT,'_qa','copy-L3.json'),JSON.stringify(manifest,null,2));console.log(manifest.map(x=>({page:x.page,copyEqual:x.copyEqual})));}finally{await browser.close()}})().catch(e=>{console.error(e);process.exitCode=1});
