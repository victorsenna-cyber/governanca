const configName = document.documentElement.dataset.quiz;
const CONFIG = await fetch(`config/${configName}.json`).then(r => r.json());
const root = document.querySelector('main');
const key = `quiz:${CONFIG.quiz}:${CONFIG.quiz_versao}`;
const query = new URLSearchParams(location.search);
const moment = query.get('m') === 'B' ? 'B' : 'A';
let state;
try { state = JSON.parse(sessionStorage.getItem(key)); } catch {}
if (!state || state.momento !== moment) state = { step: 0, answers: {}, contact: {}, lead_id: crypto.randomUUID(), momento: moment, utm: {}, started: false };
for (const [k, v] of query) if (/^utm_[a-z_]+$/.test(k)) state.utm[k.slice(4)] = v;
let timer;
const save = () => { try { sessionStorage.setItem(key, JSON.stringify(state)); } catch {} };
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html !== undefined) e.innerHTML = html; return e; };
function derive() {
 const vars = {}, answers = {}; let points = 0;
 for (const step of CONFIG.steps) {
  const i = state.answers[step.key]; if (!Number.isInteger(i) || !step.options?.[i]) continue;
  const option = step.options[i]; answers[step.key] = option.label;
  if (step.points) { answers[`${step.key}_pts`] = step.points[i]; points += step.points[i]; }
  if (step.variable && !step.private) vars[step.variable] = step.values?.[i] ?? option.label;
 }
 let result, tone = 'success', group;
 if (CONFIG.resultMode === 'score') { result = CONFIG.resultBands.find(b => points >= b.min && points <= b.max); vars.nivel = result.label; vars.NIVEL = result.label.toUpperCase(); tone = result.tone; }
 else { group = CONFIG.groups.find(g => g.members.includes(answers[CONFIG.groupQuestion])); if (group) { result = { label: group.label }; vars.elemento = group.label; vars.ELEMENTO = group.label.toUpperCase(); vars.SIGNO = vars.signo.toUpperCase(); vars.EMOJI = group.emoji; vars.outros_dois_signos = group.members.filter(s => s !== vars.signo).join(CONFIG.joiner); } }
 if (state.contact.nome) vars.nome = state.contact.nome.charAt(0).toLocaleUpperCase('pt-BR') + state.contact.nome.slice(1);
 for (const responseKey of CONFIG.alwaysIncludeResponseKeys || []) if (!(responseKey in answers)) answers[responseKey] = '';
 return { vars, answers, points, result, tone, group };
}
function rich(value) {
 if (typeof value === 'object' && value) value = CONFIG[value.key] || value.pending;
 let missing = false; const vars = derive().vars;
 let str = String(value ?? '').replace(/\{\{([^}]+)\}\}/g, (_, name) => { if (vars[name] === undefined) { missing = true; return ''; } return escape(vars[name]); });
 if (missing) return '';
 return str.replace(/<g>/g, '<span class="positive">').replace(/<r>/g, '<span class="negative">').replace(/<\/(g|r)>/g, '</span>');
}
function event(name, detail = {}) {
 window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: name, quiz: CONFIG.quiz, ...detail });
 if (CONFIG.pixel_id) {
  if (!window.fbq) { !function(f,b,e,v,n,t,s){n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init', CONFIG.pixel_id); fbq('track', 'PageView'); }
  fbq('trackCustom', name, { quiz: CONFIG.quiz });
 }
}
function send(payload, attempt = 0, beacon = false) {
 state.payload = payload; save();
 if (!CONFIG.apps_script_url) { console.info('quiz_payload', payload); return; }
 if (beacon) {
  try { if (navigator.sendBeacon(CONFIG.apps_script_url, new Blob([JSON.stringify(payload)], {type:'text/plain;charset=utf-8'}))) return; } catch {}
 }
 try { Promise.resolve(fetch(CONFIG.apps_script_url, {method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify(payload),keepalive:beacon})).catch(() => { if (!attempt) setTimeout(() => send(payload, 1, beacon), 0); }); }
 catch { if (!attempt) setTimeout(() => send(payload, 1, beacon), 0); }
}
function payload() { const d=derive(); return {lead_id:state.lead_id,quiz:CONFIG.quiz,quiz_versao:CONFIG.quiz_versao,momento:state.momento,...state.contact,resultado:d.result?.label,...(CONFIG.resultMode==='score'?{pontos:d.points}:{}),respostas:d.answers,utm:state.utm,clicou_checkout:''}; }
function checkoutURL() {
 const d=derive(), raw=CONFIG.resultMode==='score'?CONFIG.checkout_diagnostico:CONFIG[d.group?.checkoutKey];
 if (!raw) return '';
 const url=new URL(raw); if (!['http:','https:'].includes(url.protocol)) return '';
 const allowed=new Set(['funnel']); for(const k of [...url.searchParams.keys()]) if(!allowed.has(k)) url.searchParams.delete(k);
 for (const [k,v] of Object.entries(state.utm)) url.searchParams.set(`utm_${k}`,v);
 url.searchParams.set('quiz',CONFIG.quiz); url.searchParams.set(CONFIG.resultMode==='score'?'nivel':'elemento',d.result.label); return url.href;
}
function go(index) { clearInterval(timer); state.step=Math.max(0,Math.min(CONFIG.steps.length-1,index)); save(); render(); window.scrollTo(0,0); }
function advance(step) { const route=step.nextByResult?.[derive().result?.label];const target=typeof route==='object'?route:route?{id:route}:null;for(const answerKey of target?.clearAnswers||[])delete state.answers[answerKey];const index=target?.id?CONFIG.steps.findIndex(item=>item.id===target.id):state.step+1;go(index<0?state.step+1:index); }
function itemValue(item, field, data) {
 if (field === 'title') {
  const [variable, values] = Object.entries(item.variableVariants || {})[0] || [];
  return values?.[data.vars[variable]] ?? item.title;
 }
 if (field === 'text') return item.resultVariants?.[data.result?.label] ?? item.variants?.cases?.[data.answers[item.variants?.key]] ?? item.text;
 return item[field];
}
function button(text, action, cls='') { const b=el('button',`button ${cls}`,rich(text)); b.type='button'; b.addEventListener('click',action); return b; }
function textBlock(text,style='body') { const html=rich(text); if(!html)return null;const wrap=el('div','layer');const box=el('div',`text-block ${style}`);box.append(el(/^h[1-3]$/.test(style)?style:'p','',html));wrap.append(box);return wrap; }
function legalLinks() {const wrap=el('span','legal-links');for(const [label,k] of [[CONFIG.ui.terms,'url_termos'],[CONFIG.ui.privacy,'url_privacidade']]){const a=el('a','',escape(label));if(CONFIG[k])a.href=CONFIG[k];else a.setAttribute('aria-disabled','true');wrap.append(a);}return wrap;}
function footer(note='') {const f=el('footer','layer');f.append(textBlock(CONFIG.dados_legais||CONFIG.ui.legalPending,'small'));f.append(textBlock(CONFIG.ui.footer,'small'));f.append(legalLinks());if(note)f.append(textBlock(note,'small'));return f;}
function alertBlock(text,tone='success',full=false,opening=false) {const html=rich(text);if(!html)return null; const wrap=el('div','layer');const a=el('div',`alert ${tone} ${full?'full':''} ${opening?'opening-alert':''}`);a.append(el(full?'h2':'p','',html));wrap.append(a);return wrap;}
function renderBlock(block) {
 const d=derive();if(block.onlyResult&&block.onlyResult!==d.result?.label||block.exceptResult===d.result?.label)return null;
 let value=block.resultVariants?.[d.result?.label]??block.variants?.cases?.[state.answers[block.variants?.key]]??block.text;
 if(block.type==='text')return textBlock(block.emphasis?`<strong>${value}</strong>`:value,block.style);
 if(block.type==='alert')return alertBlock(value,block.tone,block.full);
 if(block.type==='resultBanner')return alertBlock(value,d.tone,true);
 if(block.type==='resultParagraph')return textBlock(d.result?.text);
 if(block.type==='footer')return footer(value);
 if(block.type==='testimonials') {
  if(!CONFIG.depoimentos_ativos||!CONFIG.depoimentos.length)return null;
  const wrap=el('div','layer testimonials');for(const item of CONFIG.depoimentos){const c=el('figure','argument');if(item.type==='image'){const img=el('img');img.src=item.src;img.alt=item.alt;c.append(img);}else{c.append(el('blockquote','',rich(item.text)));c.append(el('figcaption','',rich(item.name)));c.append(el('p','',rich(item.role)));}wrap.append(c);}return wrap;
 }
 if(block.type==='map'&&!CONFIG.imagem_mapa)return null;
 const wrap=el('div','layer');
 if(block.type==='photo'||block.type==='map'){const img=el('img',`photo ${block.ratio||''}`);img.src=block.type==='map'?CONFIG.imagem_mapa:CONFIG.photo;img.alt=block.type==='map'?CONFIG.ui.mapAlt:CONFIG.ui.photoAlt;wrap.append(img);}
 if(block.type==='cards'){const list=el('div','arguments');for(const item of block.items){const title=rich(itemValue(item,'title',d)),text=rich(itemValue(item,'text',d));if(!title)continue;const c=el('article','argument');c.append(el('h3','',title),el('p','',text));list.append(c);}wrap.append(list);}
 if(block.type==='list'){const list=el('ul','copy-list');for(const text of block.items){const html=rich(text);if(html)list.append(el('li','',html));}wrap.append(list);}
 if(block.type==='echo'){for(const text of block.items){const a=alertBlock(text);if(a)wrap.append(a);}}
 if(block.type==='metric'){const pct=Math.max(8,Math.round(100-d.points/CONFIG.scoreMax*100));wrap.append(el('p','metric-label',rich(value)));const bar=el('div','metric');const fill=el('div',`metric-fill ${d.tone}`);fill.style.width=`${pct}%`;bar.append(fill);wrap.append(bar);}
 if(block.type==='comparison'){const grid=el('div','comparison');for(const col of block.columns){const box=el('div','argument');box.append(el('h2','',rich(col.title)));for(const t of col.items)box.append(el('p','',rich(t)));grid.append(box);}wrap.append(grid);}
 if(block.type==='price'){const box=el('div','price');box.append(el('h3','',rich(block.title)),el('div','price-value',rich(block.value??(CONFIG[block.valueKey]||block.valuePending))),el('p','',rich(block.support??(CONFIG[block.supportKey]||block.supportPending))));wrap.append(box);}
 if(block.type==='checkout'){const b=button(value,()=>{const url=checkoutURL();if(!url)return;send({lead_id:state.lead_id,quiz:CONFIG.quiz,clicou_checkout:'sim',checkout_em:new Date().toISOString()},0,true);event('InitiateCheckout');location.assign(url);},'green checkout');b.disabled=!checkoutURL();wrap.className='fixed-action';wrap.append(b);}
 if(block.type==='faq'){wrap.append(textBlock(CONFIG.ui.faq,'h2'));const list=el('div','faq');block.items.forEach(([question,answer],i)=>{const item=el('details');item.open=i===0;item.append(el('summary','',rich(question)),el('div','faq-answer',rich(answer)));item.addEventListener('toggle',()=>{if(item.open)for(const other of list.children)if(other!==item)other.open=false;});list.append(item);});wrap.append(list);}
 return wrap;
}
function question(step,content) {
 if(step.type==='opening'){content.append(alertBlock(step.banner,'warning',false,true),textBlock(`<strong>${step.headline}</strong>`,'h1'));const sub=el('div','layer');const inner=el('div','text-block');inner.append(el('h3','',`<strong class="subheadline">${rich(step.subheadline)}</strong>`),el('p','cue',`<span>${rich(step.cue)}</span>`));sub.append(inner);content.append(sub,textBlock(step.title,'h2'));}
 else {const t=textBlock(`<strong>${step.title}</strong>`,'h1');t.classList.add('question-title');content.append(t);}
 const wrap=el('div','layer'),grid=el('div',`options ${step.layout==='grid'?'grid-options':'line-options'} ${step.type==='opening'?'opening-options':''}`);grid.style.setProperty('--columns',step.columns||1);
 step.options.forEach((o,i)=>{const b=el('button',`option ${state.answers[step.key]===i?'selected':''}`);b.type='button';b.dataset.option=i;b.setAttribute('aria-pressed',String(state.answers[step.key]===i));const media=el('span','option-media');if(o.image){const img=el('img');img.src=o.image;img.alt=o.alt||'';media.append(img);}else media.append(el('span','emoji',escape(o.emoji)));media.setAttribute('aria-hidden','true');b.append(media,el('span','option-label',escape(o.label)));b.addEventListener('click',()=>{state.answers[step.key]=i;if(!state.started){state.started=true;event('QuizStart');}go(state.step+1);});grid.append(b);});wrap.append(grid);content.append(wrap);if(step.type==='opening')content.append(footer());
}
function capture(step,content) {
 content.append(textBlock(`<strong>${step.title}</strong>`,'h2'));
 const form=el('form','layer capture-form');form.noValidate=true;
 for(const f of CONFIG.ui.fields){const group=el('div','field');const label=el('label','',escape(f.label));label.htmlFor=f.key;const input=el('input');Object.assign(input,{id:f.key,name:f.key,type:f.type,placeholder:f.placeholder,autocomplete:f.autocomplete,value:state.contact[f.key]||''});input.required=true;input.maxLength=f.key==='nome'?80:f.key==='email'?254:15;if(f.key==='whatsapp')input.inputMode='tel';const error=el('p','field-error');error.id=`error-${f.key}`;error.hidden=true;input.setAttribute('aria-describedby',error.id);input.addEventListener('input',()=>{if(f.key==='whatsapp'){const digits=input.value.replace(/\D/g,'').slice(0,11);input.value=digits.length>2?`(${digits.slice(0,2)}) ${digits.slice(2,digits.length>10?7:6)}${digits.length>6?'-'+digits.slice(digits.length>10?7:6):''}`:digits;}state.contact[f.key]=input.value;save();});group.append(label,input,error);form.append(group);}
 const hp=el('input','honeypot');hp.name='hp';hp.tabIndex=-1;hp.autocomplete='off';hp.setAttribute('aria-hidden','true');form.append(hp);
 const submit=button(step.button,()=>{});submit.type='submit';const fixed=el('div','fixed-action');fixed.append(submit);form.append(fixed);
 const consent=el('p','consent',escape(CONFIG.ui.consent));consent.append(legalLinks());form.append(consent);
 form.addEventListener('submit',e=>{e.preventDefault();let valid=true;for(const f of CONFIG.ui.fields){const input=form.elements[f.key],v=input.value.trim();const ok=f.key==='nome'?/^[\p{L}][\p{L}\p{M}'’ -]*$/u.test(v)&&v.length>=2:f.key==='whatsapp'?/^[1-9]{2}9?\d{8}$/.test(v.replace(/\D/g,'')):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);const error=form.querySelector(`#error-${f.key}`);error.hidden=ok;error.textContent=ok?'':f.error;input.setAttribute('aria-invalid',String(!ok));if(!ok)valid=false;state.contact[f.key]=v;}if(!valid)return;state.contact.hp=hp.value;send(payload());event('Lead');go(state.step+1);});content.append(form);
}
function render() {
 clearInterval(timer);root.replaceChildren();const step=CONFIG.steps[state.step];root.dataset.step=step.id;root.className=`screen ${step.type}`;
 if(step.type!=='offer'){const header=el('header','header');const backWrap=el('div','back-wrap');const back=button('',()=>go(state.step-1),'back');back.setAttribute('aria-label',CONFIG.ui.back);back.innerHTML='<svg aria-hidden="true" viewBox="0 0 448 512"><path d="M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686-4.686 12.284-4.686 16.971-.001z"/></svg>';back.disabled=state.step===0;backWrap.append(back);const bar=el('div','progress');bar.role='progressbar';bar.setAttribute('aria-label',CONFIG.ui.progress);bar.setAttribute('aria-valuemin','0');bar.setAttribute('aria-valuemax',CONFIG.steps.length);bar.setAttribute('aria-valuenow',state.step+1);const fill=el('div');fill.style.width=`${(state.step+1)/CONFIG.steps.length*100}%`;bar.append(fill);header.append(backWrap,bar,el('div','header-end'));root.append(header);}
 const outer=el('div','column'),content=el('div','layers');outer.append(content);root.append(outer,el('div','bottom-space'));
 if(step.options)question(step,content);
 else if(step.type==='capture')capture(step,content);
 else if(step.type==='loading'){const wrap=el('div','layer');const row=el('div','loading-label');const pct=el('span','','0%');row.append(el('span','',escape(CONFIG.ui.loading)),pct);const bar=el('div','loading-bar');const fill=el('div');bar.append(fill);wrap.append(row,bar,textBlock(step.text));content.append(wrap);const start=performance.now();timer=setInterval(()=>{const amount=Math.min(100,Math.round((performance.now()-start)/step.duration*100));pct.textContent=`${amount}%`;fill.style.width=`${amount}%`;if(amount===100)go(state.step+1);},50);}
 else {for(const block of step.blocks||[]){const e=renderBlock(block);if(e)content.append(e);}if(step.button){const wrap=el('div','fixed-action');wrap.append(button(step.button,()=>advance(step),step.type==='result'?'green':''));content.append(wrap);}}
 event('quiz_step',{tela:step.id});if(step.type==='result'){const d=derive();event('QuizResult',CONFIG.resultMode==='score'?{nivel:d.result.label}:{elemento:d.result.label});}
}
document.title=CONFIG.title;for(const [name,content] of [['description',CONFIG.description],['og:title',CONFIG.title],['og:description',CONFIG.description]]){let meta=document.createElement('meta');meta.setAttribute(name.startsWith('og:')?'property':'name',name);meta.content=content;document.head.append(meta);}
save();event('PageView');render();
