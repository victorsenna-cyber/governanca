const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const puppeteer = require('C:/Users/zioni/AppData/Local/npm-cache/_npx/0f94ee7615faf582/node_modules/puppeteer-core');
const root = path.resolve(__dirname, '..');
(async () => {
 const browser = await puppeteer.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true,userDataDir:path.join(root,'.browser-final')});
 const checks = [];
 try {
  const page = await browser.newPage();
  for (const quiz of ['permissao','teto','signos']) {
   const config = JSON.parse(fs.readFileSync(path.join(root,`public/config/${quiz}.json`),'utf8'));
   await page.goto(`http://127.0.0.1:4173/${quiz}.html`);
   for (const width of [360,390,1440]) {
    await page.setViewport({width,height:width<500?844:1000});
    for (let step=0;step<config.steps.length;step++) {
     const state={step,answers:Object.fromEntries(config.steps.slice(0,step).filter(s=>s.options).map(s=>[s.key,0])),contact:{},lead_id:'qa-final',momento:'A',utm:{},started:step>0};
     await page.evaluate((key,value)=>sessionStorage.setItem(key,JSON.stringify(value)),`quiz:${quiz}:1.0`,state);
     await page.reload();
     await page.waitForSelector(`main[data-step="${config.steps[step].id}"]`);
     await page.evaluate(()=>document.fonts.ready);
     const dimensions=await page.evaluate(()=>({viewport:innerWidth,document:document.documentElement.scrollWidth,raw:/\{\{[^}]+\}\}/.test(document.body.innerText),pending:document.body.innerText.includes('[[COPY PENDENTE')}));
     assert.ok(dimensions.document<=width,`${quiz} ${width} ${step}: overflow`);
     assert.equal(dimensions.raw,false);
     assert.equal(dimensions.pending,false,`${quiz} ${width} ${step}: placeholder visível`);
     assert.ok(fs.existsSync(path.join(root,`qa/screens/${quiz}/${width}/${config.steps[step].id}.png`)));
     checks.push({quiz,width,step:config.steps[step].id,...dimensions});
    }
   }
  }
  fs.writeFileSync(path.join(root,'qa/final-check.json'),JSON.stringify({complete:true,checks},null,2));
  console.log(`${checks.length} telas/larguras: capturas presentes, sem overflow ou variável crua.`);
 } finally { await browser.close(); }
})().catch(error=>{console.error(error);process.exitCode=1;});
