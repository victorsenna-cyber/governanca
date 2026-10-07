/* ============================================================
   Liderança na Raiz — menu inteligente (público x membros)
   - Deslogada: menu público (com "Entrar").
   - Logada (senha raiz2026): menu de membros com os 4 pilares.
   Uma única senha controla tudo. Para trocar, gere um novo hash.
   ============================================================ */
(function(){
  var KEY = 'lnr_membro';

  function loggedIn(){
    try{ return localStorage.getItem(KEY)==='ok' || sessionStorage.getItem(KEY)==='ok'; }
    catch(e){ return false; }
  }

  // menu deslogada
  var PUBLIC = [
    ['index.html','Início'],
    ['comece.html','Comece por aqui'],
    ['sobre.html','Sobre mim'],
    ['servicos.html','Serviços'],
    ['membros.html','Entrar'],
    ['consultoria.html','Conversa gratuita','cta']
  ];

  // menu logada — os 4 pilares
  var MEMBER = [
    ['membros.html','Área de membros'],
    ['maestria.html','Maestria'],
    ['metodo-raiz.html','Método Raiz'],
    ['p-lideranca.html','Liderança'],
    ['eneagrama.html','Eneagrama'],
    ['__sair__','Sair','cta']
  ];

  function linkHtml(it){
    var isCta = it[2]==='cta';
    var cls = isCta ? ' class="lnr-cta"' : '';
    if(it[0]==='__sair__'){
      return '<a href="#"'+cls+' onclick="lnrSair();return false;">'+it[1]+'</a>';
    }
    return '<a href="'+it[0]+'"'+cls+'>'+it[1]+'</a>';
  }

  function render(){
    var box = document.querySelector('.lnr-links');
    if(!box) return;
    var items = loggedIn() ? MEMBER : PUBLIC;
    box.innerHTML = items.map(linkHtml).join('\n    ');
  }

  window.lnrRenderNav = render;
  window.lnrSair = function(){
    try{ localStorage.removeItem(KEY); sessionStorage.removeItem(KEY); }catch(e){}
    location.href = 'index.html';
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();
