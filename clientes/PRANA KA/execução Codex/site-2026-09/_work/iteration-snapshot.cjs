const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {ROOT,routes,route}=require('./foundation.cjs');
const backup=path.join(ROOT,'_work/iteration-2026-09-26/before');
if(fs.existsSync(path.join(backup,'manifest.json')))throw Error('Snapshot already complete; never overwrite it.');
const files=Object.keys(routes).flatMap(k=>[0,1,2].map(l=>route(k,l).slice(1)+'index.html')).concat(['robots.txt','sitemap.xml']);
for(const dir of ['css','js','assets']) for(const rel of fs.readdirSync(path.join(ROOT,dir),{recursive:true}))if(fs.statSync(path.join(ROOT,dir,rel)).isFile())files.push(path.join(dir,rel));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const manifest=[];
function safeCopy(source,target){fs.mkdirSync(path.dirname(target),{recursive:true});if(fs.existsSync(target)){if(sha(fs.readFileSync(source))!==sha(fs.readFileSync(target)))throw Error('Snapshot mismatch '+target);}else fs.copyFileSync(source,target);}
for(const rel of files){const target=path.join(backup,'site',rel);safeCopy(path.join(ROOT,rel),target);manifest.push({file:rel.replaceAll('\\','/'),sha256:sha(fs.readFileSync(target))});}
for(const rel of fs.readdirSync(path.join(ROOT,'_entrega'),{recursive:true}))if(fs.statSync(path.join(ROOT,'_entrega',rel)).isFile())safeCopy(path.join(ROOT,'_entrega',rel),path.join(backup,'entrega',rel));
const sourceFiles=['ITERACAO-SITE-2026-09-25.md','DECISOES.md','STATUS.md'];
const sources=sourceFiles.map(file=>({file,sha256:sha(fs.readFileSync(path.join(ROOT,'../..',file)))}));
fs.writeFileSync(path.join(backup,'manifest.json'),JSON.stringify({date:new Date().toISOString(),files:manifest,sources},null,2));
console.log({backup,files:manifest.length,sources});
