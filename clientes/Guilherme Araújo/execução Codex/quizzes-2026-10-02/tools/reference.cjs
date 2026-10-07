const fs=require('node:fs'), path=require('node:path');
const puppeteer=require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');
const out=path.resolve(__dirname,'..');
const root=path.resolve(out,'../../../..','920-referências lp/lp02-profissaohomesales-com-arquivo-literal');
const records=JSON.parse(fs.readFileSync(path.join(root,'_verificacao/manifesto.json'),'utf8'));
const lookup=new Map(records.map(r=>[r.url,r]));
(async()=>{
 fs.mkdirSync(path.join(out,'qa/reference'),{recursive:true});
 const browser=await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,userDataDir:path.join(out,'.browser-reference'),args:['--remote-debugging-port=9223','--no-first-run','--no-default-browser-check']});
 const page=await browser.newPage();await page.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
 await page.setRequestInterception(true);
 page.on('request',r=>{const item=lookup.get(r.url().split('#')[0]);if(item&&fs.existsSync(path.join(root,item.path)))return r.respond({status:item.status||200,headers:{'content-type':item.content_type||'application/octet-stream','access-control-allow-origin':'*'},body:fs.readFileSync(path.join(root,item.path))});if(['fetch','xhr'].includes(r.resourceType())||r.method()==='HEAD')return r.respond({status:204,body:''});return r.abort('internetdisconnected');});
 await page.goto('https://lp02.profissaohomesales.com/',{waitUntil:'networkidle2'});
 console.log('Reference ready on CDP 9223; archived requests only');
})();
