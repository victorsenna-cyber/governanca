const fs=require('fs'),path=require('path'),crypto=require('crypto'),assert=require('assert/strict');
const {ROOT,routes,route}=require('./foundation.cjs');
const qaDir=path.join(ROOT,'_qa/iteration-2026-09-26');
const qa=JSON.parse(fs.readFileSync(path.join(qaDir,'qa.json')));
const lh=JSON.parse(fs.readFileSync(path.join(qaDir,'lighthouse/summary.json')));
assert.equal(qa.pages.length,54);assert.equal(qa.failures.length,0);assert.equal(lh.results.length,12);
assert(lh.results.every(r=>r.scores.performance>=90));
const sha=b=>crypto.createHash('sha256').update(b).digest('hex');
const changeLog=JSON.parse(fs.readFileSync(path.join(qaDir,'changes.json')));
for(const row of changeLog.rows)assert.equal(sha(fs.readFileSync(path.join(ROOT,row.file))),row.after,'Runtime drift '+row.file);
const dest=path.join(ROOT,'_entrega/site');
const staging=path.join(ROOT,'_entrega/site-L1-L2-staging');
assert(!fs.existsSync(staging),'Staging already exists; inspect it before another run.');
const files=Object.keys(routes).flatMap(k=>[0,1,2].map(l=>route(k,l).slice(1)+'index.html')).concat(['404.html','.htaccess.proposta','robots.txt','sitemap.xml']);
const excluded=[];
for(const dir of ['css','js','assets'])for(const rel of fs.readdirSync(path.join(ROOT,dir),{recursive:true})){if(!fs.statSync(path.join(ROOT,dir,rel)).isFile())continue;const file=path.join(dir,rel);if(path.basename(file).startsWith('retrato-'))excluded.push(file.replaceAll('\\','/'));else files.push(file);}
const manifest=[];
for(const file of files){const target=path.join(staging,file);assert(target.startsWith(staging+path.sep));fs.mkdirSync(path.dirname(target),{recursive:true});fs.copyFileSync(path.join(ROOT,file),target);const bytes=fs.readFileSync(target);manifest.push({file:file.replaceAll('\\','/'),bytes:bytes.length,sha256:sha(bytes)});}
manifest.sort((a,b)=>a.file.localeCompare(b.file));
const missing=[];
for(const row of manifest.filter(r=>/\.(html|css|js)$/.test(r.file))){const text=fs.readFileSync(path.join(staging,row.file),'utf8');for(const m of text.matchAll(/(?:["'(])((?:\/assets\/|\/css\/|\/js\/)[^"'\s)>,]+)/g))if(!fs.existsSync(path.join(staging,m[1])))missing.push({file:row.file,url:m[1]});}
assert.equal(missing.length,0,JSON.stringify(missing));assert(!files.includes('.htaccess'));
// Recoverable replacement: validate both resolved directories inside this exact workspace.
const rootReal=fs.realpathSync(ROOT);
const old=path.join(ROOT,'_work/iteration-2026-09-26/before/delivery-site-active');
for(const target of [dest,staging,old])assert(path.resolve(target).startsWith(ROOT+path.sep));
assert(fs.realpathSync(path.dirname(dest)).startsWith(rootReal+path.sep));
assert(fs.realpathSync(path.dirname(old)).startsWith(rootReal+path.sep));
assert(!fs.existsSync(old),'Previous active delivery already archived; inspect before rerun.');
if(fs.existsSync(dest)){assert(fs.realpathSync(dest).startsWith(rootReal+path.sep));fs.renameSync(dest,old);}
fs.renameSync(staging,dest);
fs.writeFileSync(path.join(ROOT,'_entrega/SHA256SUMS.txt'),manifest.map(r=>r.sha256+'  '+r.file).join('\n')+'\n');
const report={date:new Date().toISOString(),files:manifest.length,html:manifest.filter(r=>r.file.endsWith('.html')).length,bytes:manifest.reduce((n,r)=>n+r.bytes,0),excludedAvatars:excluded,missingResources:missing,previousActiveDelivery:old,manifest};
fs.writeFileSync(path.join(qaDir,'package.json'),JSON.stringify(report,null,2));console.log({files:report.files,html:report.html,bytes:report.bytes,excludedAvatars:excluded.length,missingResources:0});
