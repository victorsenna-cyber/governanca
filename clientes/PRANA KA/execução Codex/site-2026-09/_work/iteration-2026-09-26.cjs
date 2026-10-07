/* Strict, repeatable post-process for ITERACAO-SITE-2026-09-25.md.
   Run after legacy assembly/finalize scripts. Baseline is immutable; drift aborts. */
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const {ROOT,routes,route}=require('./foundation.cjs');
const baseline=path.join(ROOT,'_work/iteration-2026-09-26/before/site');
const reportDir=path.join(ROOT,'_qa/iteration-2026-09-26');
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const marker='<!-- REVISAR: transcriação -->';
const rows=[];
const previousFile=path.join(reportDir,'changes.json');
const previous=fs.existsSync(previousFile)?JSON.parse(fs.readFileSync(previousFile)).rows:[];
for(const key of Object.keys(routes)) for(const lang of [0,1,2]) {
  const file=route(key,lang).slice(1)+'index.html';
  const before=fs.readFileSync(path.join(baseline,file),'utf8');let html=before;
  const changes=[];
  function edit(item,pattern,replacement,count=1){
    let n=0;html=html.replace(pattern,(...args)=>{const old=args[0],start=args.at(-2);const value=typeof replacement==='function'?replacement(...args):replacement;n++;changes.push({item,start,before:old,after:value});return value});
    if(n!==count)throw Error(`${file}: item ${item}: expected ${count}, found ${n}`);
  }
  if(key==='home') {
    const title=['Depoimento de Carol','Carol testimonial','Testimonio de Carol'][lang];
    edit(1,/<p class="video-pending">\[(?:COPY PENDENTE|COPY PENDING|TEXTO PENDIENTE)\]<\/p><!-- A inclusão do vídeo da Carol[\s\S]*?-->/,
      `<figure class="proof-video"><iframe src="https://www.youtube-nocookie.com/embed/3NbO7HBGbkU" width="960" height="540" loading="lazy" title="${title}" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><figcaption>Carol</figcaption></figure>`);
  }
  if(key==='home'||key==='visao')edit(6,/<img\b[^>]*src="[^"]*retrato-[^>]*>/g,'',4);
  if(key==='mentoria'){
    const cadenceCard=[
      '<dt>encontros</dt>\n              <dd>a cada 14 dias, em grupo, para transmissão, prática e integração</dd>',
      '<dt>sessions</dt>\n              <dd>every 14 days, in a group, for transmission, practice and integration</dd>',
      '<dt>encuentros</dt>\n              <dd>cada 14 días, en grupo, para transmisión, práctica e integración</dd>'
    ][lang];
    edit(2,/<dt>12<\/dt>\s+<dd>[^<]*<\/dd>/,(lang?marker:'')+cadenceCard);
    if(lang===0){
      edit(2,/mentoria em grupo de 12 encontros/g,'mentoria em grupo com encontros a cada 14 dias',3);
      edit(2,'•</span> 12 encontros','•</span> encontros a cada 14 dias');
      edit(2,'Como funcionam os 12 encontros?','Como funcionam os encontros a cada 14 dias?');
      edit(2,'São 12 encontros em grupo','São encontros em grupo a cada 14 dias');
    }else if(lang===1){
      edit(2,/group mentorship of 12 sessions/g,'group mentorship with sessions every 14 days',3);
      edit(2,'Group mentorship • 12 sessions','Group mentorship • sessions every 14 days');
      edit(2,'How do the 12 sessions work?','How do the sessions every 14 days work?');
      edit(2,'There are 12 group sessions','There are group sessions every 14 days');
    }else{
      edit(2,/mentoría en grupo de 12 encuentros/g,'mentoría en grupo con encuentros cada 14 días',3);
      edit(2,'Mentoría en grupo • 12 encuentros','Mentoría en grupo • encuentros cada 14 días');
      edit(2,'¿Cómo funcionan los 12 encuentros?','¿Cómo funcionan los encuentros cada 14 días?');
      edit(2,'Son 12 encuentros en grupo','Son encuentros en grupo cada 14 días');
    }
    const seal=[['a cada','dias'],['every','days'],['cada','días']][lang];
    edit(2,/<div class="hero__seal">[\s\S]*?<\/div>/,`<div class="hero__seal"><small>${seal[0]}</small><span>14</span><small>${seal[1]}</small></div>`);
    const entrance=[
      'A entrada começa numa conversa com a Prana. Depois dela, você recebe o acesso à plataforma e o caminho dos oito Portais do Ventre.',
      'Your journey begins with a conversation with Prana. After that, you receive access to the platform and the path through the eight Portais do Ventre (Womb Portals).',
      'La entrada comienza con una conversación con Prana. Después, recibes acceso a la plataforma y al camino de los ocho Portais do Ventre (Portales del Vientre).'
    ][lang];
    const first=[/O calendário e a\s+cadência completos serão apresentados antes da abertura do checkout\./,
      'The full schedule and frequency will be presented before checkout opens.',
      'El calendario y la frecuencia completos se presentarán antes de abrir el pago en línea.'][lang];
    const second=[/Quando as inscrições estiverem abertas, sua entrada será confirmada após a aprovação do pagamento\s+no checkout\. O próximo passo chegará pelo canal informado na própria oferta\./,
      'When enrollment is open, your place will be confirmed after payment is approved at checkout. The next step will reach you through the channel stated in the offer itself.',
      'Cuando las inscripciones estén abiertas, tu entrada se confirmará tras la aprobación del pago en línea. El siguiente paso llegará por el canal indicado en la propia oferta.'][lang];
    edit(3,first,entrance);edit(3,second,entrance);
    if(lang) {
      // Mark every changed metadata/body block, not just headings/buttons.
      edit('2–3 review',/<meta\b[^>]*14[^>]*>|<p\b[^>]*>[^<]*(?:14|Your journey begins|La entrada comienza)[\s\S]*?<\/p>|<summary>[^<]*14[^<]*<\/summary>|<div class="hero__seal">[\s\S]*?<\/div>/g,
        block=>before.includes(block)?block:marker+block,lang===2?9:8);
    }
  }
  if(key==='visao'){
    const details=[
      ['Sessão individual e online, conduzida por Prana Ka.','Sessão individual de 1h30, online ou presencial, conduzida por Prana Ka.'],
      ['An individual online session, guided by Prana Ka.','An individual 90-minute session, online or in person, guided by Prana Ka.'],
      ['Sesión individual en línea, guiada por Prana Ka.','Sesión individual de 1 h 30 min, en línea o presencial, guiada por Prana Ka.']
    ][lang];
    edit(4,`<p class="price-detail">${details[0]}</p>`,`${lang?marker:''}<p class="price-detail">${details[1]}</p>`);
    const oldText=encodeURIComponent('Olá, Prana! Vim pela página da Visão Uterina e quero saber o valor e os horários para uma sessão individual.');
    const newText=encodeURIComponent('Olá, Prana! Vim pela página da Visão Uterina e quero agendar minha sessão.');
    // Only the first (hero) CTA is in item 7. The secondary invitation is unchanged.
    edit(7,oldText,newText);
    edit(8,'<span class="price-currency">R$</span><span class="price-number">333</span>','<span class="price-currency">R$</span> <span class="price-number">333</span>');
  }
  if(key==='curso'){
    if(lang===0)edit(5,'<strong>R$ 97</strong> <span aria-hidden="true">·</span>','<span hidden><strong>R$ 97</strong> <span aria-hidden="true">·</span></span>');
    else edit(5,'R$ 97 ·','<span hidden>R$ 97 ·</span>');
    edit(5,'<p class="price">','<p class="price" hidden>');
  }
  edit(11,'<meta property="og:image" content="https://thegoldentemple.io/assets/biblioteca/selo-templo.webp">',
    '<meta property="og:image" content="https://thegoldentemple.io/assets/og/og-default.jpg"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">');
  const current=fs.readFileSync(path.join(ROOT,file),'utf8');
  if(current!==before&&current!==html&&sha(current)!==previous.find(r=>r.file===file)?.after)throw Error('Unaccounted current changes: '+file);
  // Reconstruct the result using only the explicitly item-numbered replacements.
  let replay=before;for(const c of changes){const position=replay.indexOf(c.before);if(position<0)throw Error('Replay failure '+file);replay=replay.slice(0,position)+c.after+replay.slice(position+c.before.length);}
  if(replay!==html)throw Error('Diff contains changes outside the allowlist: '+file);
  rows.push({file,before:sha(before),after:sha(html),changes});
}
// Validate all 27 before any write, so an unexpected source aborts atomically.
fs.mkdirSync(reportDir,{recursive:true});
for(const row of rows){let html=fs.readFileSync(path.join(baseline,row.file),'utf8');for(const c of row.changes)html=html.replace(c.before,c.after);fs.writeFileSync(path.join(ROOT,row.file),html);}
if(fs.existsSync(previousFile)&&!fs.existsSync(path.join(reportDir,'changes-initial.json')))fs.copyFileSync(previousFile,path.join(reportDir,'changes-initial.json'));
fs.writeFileSync(previousFile,JSON.stringify({date:new Date().toISOString(),source:'ITERACAO-SITE-2026-09-25.md',pages:rows.length,outsideAllowlist:0,rows},null,2));
console.log({pages:rows.length,changes:rows.reduce((n,r)=>n+r.changes.length,0),outsideAllowlist:0});
