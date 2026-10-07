/* ============================================================
   Liderança na Raiz — mecânica da área de membros
   - controla o login (senha única) e o estado "conectada"
   - revela as seções .membros-only e esconde as .membros-lock
   - preenche os cartões de login (.membros-lock vazios)
   - renderiza fatias do Eneagrama (.ene-slice) puxando de eneagrama-data.js
   Para trocar a senha, gere um novo código com o hash e troque LNR_HASH.
   Senha atual: raiz2026
   ============================================================ */
(function(){
  const KEY = 'lnr_membro';
  const TIPO_KEY = 'lnr_tipo';
  const LNR_HASH = '1ochuhx';

  function hash(s){ s=(s||'').trim().toLowerCase(); let x=5381; for(let i=0;i<s.length;i++){ x=((x<<5)+x)+s.charCodeAt(i); x=x>>>0; } return x.toString(36); }
  function loggedIn(){ try{ return localStorage.getItem(KEY)==='ok' || sessionStorage.getItem(KEY)==='ok'; }catch(e){ return false; } }
  function setLogin(remember){ try{ (remember?localStorage:sessionStorage).setItem(KEY,'ok'); }catch(e){} }
  function logout(){ try{ localStorage.removeItem(KEY); sessionStorage.removeItem(KEY); }catch(e){} apply(); }
  function apply(){ document.body.classList.toggle('lnr-in', loggedIn()); }
  function getTipo(){ try{ return localStorage.getItem(TIPO_KEY)||''; }catch(e){ return ''; } }
  function setTipo(n){ try{ localStorage.setItem(TIPO_KEY, String(n)); }catch(e){} }

  window.LNR = { loggedIn, setLogin, logout, apply, hash, getTipo, setTipo };

  /* ---- estilos injetados (uma vez) ---- */
  const CSS = `
  body:not(.lnr-in) .membros-only{display:none !important;}
  body.lnr-in .membros-lock{display:none !important;}
  .membros-lock{background:linear-gradient(160deg,#3f6b57,#2f5245); color:#fff; border-radius:18px; box-shadow:0 8px 30px rgba(60,70,55,.14); padding:30px 26px; text-align:center; margin:18px 0;}
  .membros-lock .ml-ico{font-size:1.7rem;}
  .membros-lock h3{font-family:'Fraunces',Georgia,serif; font-weight:600; font-size:1.4rem; margin:8px 0 6px; color:#fff;}
  .membros-lock p{margin:0 auto 16px; max-width:420px; color:#e6f0ea; font-size:.95rem;}
  .membros-lock .ml-form{display:flex; flex-direction:column; align-items:center; gap:10px; max-width:320px; margin:0 auto;}
  .membros-lock input[type=password]{width:100%; padding:12px 14px; border:none; border-radius:12px; font-size:1rem; font-family:inherit; text-align:center; color:#3d352e;}
  .membros-lock button{width:100%; background:#fff; color:#2f5245; border:none; padding:12px; font-size:1rem; font-weight:700; border-radius:24px; cursor:pointer; font-family:inherit;}
  .membros-lock button:hover{background:#eef4f0;}
  .membros-lock .ml-remember{display:flex; align-items:center; gap:7px; font-size:.85rem; color:#dbe8e0;}
  .membros-lock .ml-err{min-height:18px; font-size:.86rem; color:#ffd9c9;}
  .membros-lock .ml-cta{margin-top:10px; font-size:.85rem;}
  .membros-lock .ml-cta a{color:#fff; text-decoration:underline;}
  .lnr-logout{display:inline-block; margin-top:6px; font-size:.82rem; color:#6f6459; text-decoration:underline; cursor:pointer; background:none; border:none; font-family:inherit;}

  .ene-slice{background:#fffdf9; border:1px solid #e7ddd1; border-radius:16px; box-shadow:0 8px 30px rgba(60,70,55,.10); padding:22px 24px; margin:16px 0;}
  .ene-slice .es-pick{display:flex; flex-wrap:wrap; gap:7px; align-items:center; margin-bottom:8px;}
  .ene-slice .es-pick .es-lbl{font-size:.86rem; color:#6f6459; margin-right:4px;}
  .ene-slice .es-num{width:34px; height:34px; border-radius:50%; border:1.5px solid #e7ddd1; background:#fff; color:#6f6459; font-weight:700; cursor:pointer; font-family:inherit; font-size:.95rem;}
  .ene-slice .es-num:hover{border-color:#7f9c78;}
  .ene-slice .es-num.on{background:#3f6b57; color:#fff; border-color:#3f6b57;}
  .ene-slice .es-title{font-family:'Fraunces',Georgia,serif; font-weight:600; color:#2f5245; font-size:1.25rem; margin:10px 0 2px;}
  .ene-slice .es-empty{color:#6f6459; font-size:.95rem; padding:8px 0;}
  .ene-slice h4{font-family:'Fraunces',Georgia,serif; font-weight:600; color:#a86b52; font-size:1.05rem; margin:18px 0 6px; padding-top:12px; border-top:1px solid #f0e7db;}
  .ene-slice h5{font-weight:700; color:#3f6b57; font-size:.94rem; margin:12px 0 3px; text-transform:none;}
  .ene-slice p{margin:0 0 10px; font-size:.98rem; line-height:1.65; color:#3d352e;}
  .ene-slice ul{margin:0 0 10px; padding-left:20px;} .ene-slice li{margin-bottom:5px;}
  `;
  function injectCss(){ const s=document.createElement('style'); s.textContent=CSS; document.head.appendChild(s); }

  /* ---- cartão de login dentro de cada .membros-lock vazio ---- */
  function fillLocks(){
    document.querySelectorAll('.membros-lock').forEach(box=>{
      if(box.dataset.ready) return; box.dataset.ready='1';
      const titulo = box.dataset.titulo || 'Conteúdo de membro';
      const desc = box.dataset.desc || 'Este aprofundamento faz parte da mentoria. Entre com a senha que a Débora te passou para acessar.';
      box.innerHTML = `
        <div class="ml-ico">🔒</div>
        <h3>${titulo}</h3>
        <p>${desc}</p>
        <div class="ml-form">
          <input type="password" placeholder="Senha de acesso" autocomplete="off">
          <label class="ml-remember"><input type="checkbox" checked> Continuar conectada neste aparelho</label>
          <button type="button">Entrar</button>
          <div class="ml-err"></div>
        </div>
        <div class="ml-cta">Ainda não é mentorada? <a href="consultoria.html">Comece por uma conversa gratuita</a></div>`;
      const pwd = box.querySelector('input[type=password]');
      const rem = box.querySelector('.ml-remember input');
      const btn = box.querySelector('button');
      const err = box.querySelector('.ml-err');
      function tryLogin(){
        if(hash(pwd.value)===LNR_HASH){ setLogin(rem.checked); err.textContent=''; apply(); window.scrollTo({top:0,behavior:'smooth'}); }
        else { err.textContent='Senha incorreta. Tente de novo ou fale com a Débora.'; pwd.value=''; pwd.focus(); }
      }
      btn.addEventListener('click', tryLogin);
      pwd.addEventListener('keydown', e=>{ if(e.key==='Enter') tryLogin(); });
    });
  }

  /* ---- render das fatias do Eneagrama ---- */
  function renderSlice(box){
    const BOOK = window.LNR_BOOK, SUB = window.LNR_SUBTITLES;
    if(!BOOK){ box.innerHTML = '<p class="es-empty">Conteúdo do Eneagrama indisponível.</p>'; return; }
    const sections = (box.dataset.sections||'').split('|').map(s=>s.trim()).filter(Boolean);
    const onlySubs = (box.dataset.subs||'').split('|').map(s=>s.trim()).filter(Boolean);
    let tipo = box.dataset.tipo || getTipo() || '1';

    function draw(){
      const t = BOOK[tipo];
      let body = '';
      if(!t){ body = '<p class="es-empty">Escolha o seu tipo acima.</p>'; }
      else {
        body += `<div class="es-title">${t.title}</div>`;
        sections.forEach(secName=>{
          const sec = t.sections.find(s=> s.name===secName || s.name.startsWith(secName));
          if(!sec) return;
          body += `<h4>${sec.name}</h4>`;
          (sec.subsections||[]).forEach(sub=>{
            if(onlySubs.length && sub.name && !onlySubs.includes(sub.name)) return;
            if(sub.name) body += `<h5>${sub.name}</h5>`;
            body += sub.html || '';
          });
        });
      }
      const picker = box.querySelector('.es-pick');
      let inner = box.querySelector('.es-body');
      if(!inner){ inner=document.createElement('div'); inner.className='es-body'; box.appendChild(inner); }
      inner.innerHTML = body;
      if(picker){ picker.querySelectorAll('.es-num').forEach(b=> b.classList.toggle('on', b.dataset.n===String(tipo))); }
    }

    let pick = '<div class="es-pick"><span class="es-lbl">Seu tipo:</span>';
    for(let n=1;n<=9;n++) pick += `<button class="es-num" data-n="${n}">${n}</button>`;
    pick += '</div>';
    box.innerHTML = pick;
    box.querySelectorAll('.es-num').forEach(b=>{
      b.addEventListener('click', ()=>{ tipo=b.dataset.n; setTipo(tipo); draw(); });
    });
    draw();
  }
  function renderSlices(){ document.querySelectorAll('.ene-slice').forEach(renderSlice); }

  function boot(){ injectCss(); apply(); fillLocks(); renderSlices(); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
