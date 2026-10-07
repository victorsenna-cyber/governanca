import {createRequire} from 'node:module';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import fs from 'node:fs/promises';
import http from 'node:http';
const require=createRequire(import.meta.url);
const {chromium}=require('playwright');
const sharp=require('sharp');
const dir=path.dirname(fileURLToPath(import.meta.url));
const out=path.resolve(dir,'../exports');
await fs.mkdir(out,{recursive:true});
const server=http.createServer(async(req,res)=>{try{const name=decodeURIComponent((req.url||'/').split('?')[0]);const file=path.join(dir,name==='/'?'index.html':name);if(!file.startsWith(dir+path.sep)){res.writeHead(403);return res.end();}const types={'.html':'text/html; charset=utf-8','.woff2':'font/woff2','.jpeg':'image/jpeg'};res.setHeader('Content-Type',types[path.extname(file)]||'application/octet-stream');res.end(await fs.readFile(file));}catch{res.writeHead(404);res.end();}});
await new Promise(r=>server.listen(0,'127.0.0.1',r));
const browser=await chromium.launch({headless:true,args:['--font-render-hinting=none']});
try{
const page=await browser.newPage({viewport:{width:2280,height:1500},deviceScaleFactor:1});
const errors=[];page.on('pageerror',e=>errors.push(String(e)));
await page.goto(`http://127.0.0.1:${server.address().port}/`,{waitUntil:'networkidle'});
await page.evaluate(()=>document.fonts.ready);
const checks=await page.locator('.card').evaluateAll(cards=>cards.map(card=>{const r=card.getBoundingClientRect();const main=card.querySelector('.main').getBoundingClientRect();const body=card.querySelector('.body').getBoundingClientRect();const footer=card.querySelector('footer').getBoundingClientRect();const cta=card.querySelector('.cta')?.getBoundingClientRect();return {id:card.id,width:r.width,height:r.height,mainBodyGap:Math.round(body.top-main.bottom),bodyFooterGap:Math.round(footer.top-body.bottom),bodyCtaGap:cta?Math.round(cta.top-body.bottom):null,ctaFooterGap:cta?Math.round(footer.top-cta.bottom):null,overflow:[...card.querySelectorAll('h1,p,header,footer,.cta')].filter(n=>{const b=n.getBoundingClientRect();return b.left<r.left+90||b.right>r.right-90||b.bottom>r.bottom-90||n.scrollWidth>n.clientWidth+1}).map(n=>n.className||n.tagName)};}));
const files=[];
for(let i=1;i<=8;i++){const name=`GA-TETO-${String(i).padStart(2,'0')}.png`;await page.locator(`#card-${i}`).screenshot({path:path.join(out,name),animations:'disabled'});const meta=await sharp(path.join(out,name)).metadata();if(meta.width!==1080||meta.height!==1350)throw Error('Dimensão incorreta');files.push(name);}
const comps=[];
for(let i=0;i<8;i++){comps.push({input:await sharp(path.join(out,files[i])).resize(324,405).png().toBuffer(),left:24+(i%4)*344,top:24+Math.floor(i/4)*429});}
await sharp({create:{width:1404,height:858,channels:3,background:'#242b25'}}).composite(comps).png().toFile(path.join(out,'VISAO-GERAL.png'));
const hex=s=>s.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);
const ratio=(a,b)=>{const x=hex(a),y=hex(b);return +((Math.max(x,y)+.05)/(Math.min(x,y)+.05)).toFixed(2)};
const contrast={creamOnGreen:ratio('f2ebda','0c1410'),goldOnGreen:ratio('c9a961','0c1410'),mutedOnGreen:ratio('b3bfb4','0c1410'),inkOnCream:ratio('435347','f2ebda')};
const report={cards:checks,errors,contrast,fonts:await page.evaluate(()=>({manrope:document.fonts.check('48px Manrope'),serif:getComputedStyle(document.querySelector('h1')).fontFamily})),dimensions:'8 PNGs de 1080 x 1350',origin:'HTTP local; sem serviços externos'};
await fs.writeFile(path.resolve(dir,'../QA.json'),JSON.stringify(report,null,2));
console.log(JSON.stringify(report,null,2));
if(errors.length||checks.some(c=>c.overflow.length||c.mainBodyGap<0||c.bodyFooterGap<0||c.bodyCtaGap<0||c.ctaFooterGap<0))process.exitCode=1;
}finally{await browser.close();server.close();}
