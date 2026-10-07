// Idempotent technical post-processing; run after the L1-L6 assemblers.
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {ROOT,routes,route}=require('./foundation.cjs'),{sharp}=require('./DEPENDENCIES.cjs');
const out=path.join(ROOT,'assets/responsive');fs.mkdirSync(out,{recursive:true});
const pages=Object.keys(routes).flatMap(key=>[0,1,2].map(lang=>({key,lang,file:path.join(ROOT,route(key,lang),'index.html')})));
const hash=s=>crypto.createHash('sha256').update(s).digest('hex');
const text=s=>s.replace(/<!--[\s\S]*?-->/g,'').replace(/<[^>]*>/g,'').replace(/\s+/g,' ').trim();
(async()=>{const assets=new Map(),report=[];
for(const p of pages){const source=fs.readFileSync(p.file,'utf8');let html=source;
 for(const [tag] of [...html.matchAll(/<img\b[^>]*>/g)]){const src=tag.match(/\bsrc="([^"]+)"/)?.[1];if(!src?.startsWith('/assets/')||src.endsWith('.svg'))continue;
 if(!assets.has(src)){const input=path.join(ROOT,src),meta=await sharp(input).metadata(),stem=path.basename(src,path.extname(src))+'-'+hash(src).slice(0,6),variants=[];
 for(const width of [...new Set([160,240,480,640,960,Math.min(meta.width,1440)].filter(n=>n<=meta.width))].sort((a,b)=>a-b)){const name=`${stem}-${width}.webp`;await sharp(input).rotate().resize({width,withoutEnlargement:true}).webp({quality:78}).toFile(path.join(out,name));variants.push({width,url:'/assets/responsive/'+name})}assets.set(src,{meta,variants});}
 const {meta,variants}=assets.get(src),cls=tag.match(/\bclass="([^"]*)"/)?.[1]||'';
 const sizes=/brand-seal|hero-seal/.test(cls)?'92px':/footer-seal/.test(cls)?'112px':/passagens\//.test(src)?'88px':/retrato-/.test(src)?'52px':/method-art|ornament/.test(cls)?'180px':/selo-templo/.test(src)?'(max-width: 550px) 278px, 42vw':/portal-arco-rosa/.test(src)?'(max-width: 550px) 200px, 300px':'(max-width: 600px) calc(100vw - 40px), (max-width: 1000px) 80vw, 50vw';
 let changed=tag.replace(/\s(?:srcset|sizes|decoding)="[^"]*"/g,'').replace(/\bwidth="\d+"/,`width="${meta.width}"`).replace(/\bheight="\d+"/,`height="${meta.height}"`);
 changed=changed.replace(/>$/,` srcset="${variants.map(v=>v.url+' '+v.width+'w').join(', ')}" sizes="${sizes}" decoding="async">`);html=html.replace(tag,changed);
 }
 html=html.replace(/<meta name="robots" content="[^"]*">/,'<meta name="robots" content="index,follow">').replace(/(<a class="wordmark"[^>]*?) aria-label="[^"]*"/,'$1');
 if(p.key==='home')html=html.replace('aria-labelledby="portals-title"',`aria-label="${['Dois portais de entrada','Two entry portals','Dos portales de entrada'][p.lang]}"`);
 if(p.lang===0)html=html.replace(/(<a class="text-link" href="#[^"]*")>↓<\/a>/g,'$1 aria-label="Explorar esta página">↓</a>');
 html=html.replace(/data-stage="[^"]*"/,'data-stage="L7-review"');
 if(!html.includes('href="/css/quality.css"'))html=html.replace('</head>','<link rel="stylesheet" href="/css/quality.css"></head>');
 const backdrop=p.key==='home'?'/assets/responsive/texture-gold-640.webp':p.key==='curso'?'/assets/responsive/course-hero.webp':null;
 if(backdrop&&!html.includes('as="image" href="'+backdrop+'"'))html=html.replace('<meta charset="utf-8">',`<meta charset="utf-8"><link rel="preload" as="image" href="${backdrop}" fetchpriority="high">`);
 if(!html.includes('property="og:type"')){const title=html.match(/<title>(.*?)<\/title>/s)[1],description=html.match(/<meta name="description" content="([^"]*)"/)[1];html=html.replace('</head>',`<meta property="og:type" content="website"><meta property="og:title" content="${title}"><meta property="og:description" content="${description}"><meta property="og:url" content="https://thegoldentemple.io${route(p.key,p.lang)}"><meta property="og:image" content="https://thegoldentemple.io/assets/biblioteca/selo-templo.webp"></head>`);}
 if(text(source)!==text(html))throw Error('Visible text changed: '+p.file);
 fs.writeFileSync(p.file,html);report.push({route:route(p.key,p.lang),visibleTextUnchanged:true,before:hash(source),after:hash(html)});
}
await sharp(path.join(ROOT,'assets/biblioteca/textura-ouro-folha.webp')).resize({width:320}).webp({quality:55}).toFile(path.join(out,'texture-gold-640.webp'));
await sharp(path.join(ROOT,'assets/images/rosa-fonte.jpg')).resize({width:720}).webp({quality:78}).toFile(path.join(out,'course-hero.webp'));
fs.writeFileSync(path.join(ROOT,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'+pages.map(p=>`  <url><loc>https://thegoldentemple.io${route(p.key,p.lang)}</loc>${['pt-BR','en','es','x-default'].map((l,i)=>`<xhtml:link rel="alternate" hreflang="${l}" href="https://thegoldentemple.io${route(p.key,i===3?0:i)}"/>`).join('')}</url>`).join('\n')+'\n</urlset>\n');
fs.writeFileSync(path.join(ROOT,'robots.txt'),'User-agent: *\nAllow: /\n\nSitemap: https://thegoldentemple.io/sitemap.xml\n');
fs.writeFileSync(path.join(ROOT,'_qa/L7-finalization.json'),JSON.stringify({date:new Date().toISOString(),report,assets:[...assets].map(([src,x])=>({src,variants:x.variants}))},null,2));console.log({pages:report.length,assets:assets.size,visibleTextUnchanged:true});
})().catch(e=>{console.error(e);process.exitCode=1});
