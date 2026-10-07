(()=>{'use strict'; document.querySelectorAll('.language-nav a').forEach(link=>{link.addEventListener('click',()=>{try{localStorage.setItem('temple-language',link.hreflang)}catch{}})});})();
