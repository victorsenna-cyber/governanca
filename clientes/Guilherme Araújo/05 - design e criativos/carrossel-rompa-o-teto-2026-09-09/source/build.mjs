import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const dir=path.dirname(fileURLToPath(import.meta.url));
const slides=JSON.parse(await fs.readFile(path.join(dir,'copy.json'),'utf8'));
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
const cards=slides.map((s,i)=>`<article class="card ${s.layout}" id="card-${i+1}" aria-label="Card ${i+1} de 8">
<header><span>${i===0?'CARTOMANTES & TERAPEUTAS SISTÊMICAS':'GUILHERME ARAÚJO'}</span><span>${String(i+1).padStart(2,'0')} / 08</span></header>
${s.layout==='portrait'?'<img class="portrait-image" src="assets/guilherme-original.jpeg" alt="Guilherme segurando cartas, sentado em uma poltrona.">':''}
<div class="main"><p class="eyebrow">${esc(s.label)}</p><h1>${esc(s.title)}</h1></div>
<p class="body">${esc(s.body)}</p>
${s.cta?`<div class="cta"><span>Envie</span><strong>EU TOPO</strong><span>no Direct para participar da seleção.</span></div>`:''}
<footer><span>${i===0?'Guilherme Araújo':'Desafio Rompa o Teto Financeiro'}</span><span>${i===7?'':'CONTINUA'}</span></footer>
</article>`).join('\n');
const css=await fs.readFile(path.join(dir,'style.css'),'utf8');
await fs.writeFile(path.join(dir,'index.html'),`<!doctype html><html lang="pt-BR"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Guilherme Araújo · Rompa o Teto Financeiro</title><style>${css}</style></head><body><main class="deck">${cards}</main></body></html>`);
console.log('HTML gerado: 8 cards');
