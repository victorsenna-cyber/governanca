// Authoring only: the deployed HTML never fetches a translation dictionary.
function collect(d){const units=[],tags='h1,h2,h3,h4,p,blockquote,a,button,summary,li,dt,dd,figcaption,small,cite,label';const norm=s=>s.replace(/\s+/g,' ').trim();function walk(el){if(['SCRIPT','STYLE','SVG'].includes(el.tagName))return;if(el.matches?.(tags)&&!el.querySelector(tags)&&!el.querySelector('img')&&norm(el.textContent)){
 units.push({el,text:norm(el.textContent),html:el.innerHTML,type:'html',proof:!!el.closest('.proof-card')&&el.tagName==='BLOCKQUOTE'});return}
 for(const child of el.childNodes){if(child.nodeType===1)walk(child);else if(child.nodeType===3&&/[A-Za-zÀ-ÿ]/.test(child.textContent))units.push({el:child,text:norm(child.textContent),html:child.textContent,type:'text',proof:false});}}
 walk(d.body);for(const el of d.querySelectorAll('[alt],[aria-label],meta[name="description"]'))for(const attr of ['alt','aria-label',...(el.tagName==='META'?['content']:[])])if(el.hasAttribute(attr)&&norm(el.getAttribute(attr)))units.push({el,attr,text:norm(el.getAttribute(attr)),type:'attribute',proof:false});return units;}
module.exports={collect};
