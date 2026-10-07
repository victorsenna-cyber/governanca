(()=>{'use strict';
 let observer,context;
 function stop(){observer?.disconnect();context?.revert();document.querySelectorAll('.geometry').forEach(el=>el.classList.remove('is-visible'))}
 function start(){
  stop();if(matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  observer=new IntersectionObserver(entries=>entries.forEach(({target,isIntersecting})=>{if(isIntersecting){target.classList.add('is-visible');observer.unobserve(target)}}),{threshold:.15});
  document.querySelectorAll('.geometry').forEach(el=>observer.observe(el));
  if(!window.gsap||!window.ScrollTrigger)return;
  context=gsap.context(()=>{
   const base={autoAlpha:0,y:24,duration:.7,ease:'power2.out',immediateRender:false};
   document.querySelectorAll('.reveal,[data-reveal]').forEach(el=>{
    if(el.matches('.path-card,.portal,.home-art>.reveal')||el.getBoundingClientRect().top<innerHeight)return;
    gsap.from(el,{...base,scrollTrigger:{trigger:el,start:'top 93%',once:true}});
   });
   for(const [selector,trigger,stagger] of [['.credo-line','.credo',.09],['.path-card','.path-grid',.12],['.portal','.portal-pair',.12]]){
    if(document.querySelector(selector))gsap.from(selector,{...base,stagger,scrollTrigger:{trigger,start:'top 85%',once:true}});
   }
   document.querySelectorAll('.home-art>.reveal').forEach((el,i)=>gsap.from(el,{...base,x:i?24:-24,y:0,scrollTrigger:{trigger:el,start:'top 90%',once:true}}));
   if(document.querySelector('.home-closing'))gsap.from('.home-closing h2,.home-closing .button',{...base,duration:1,stagger:.12,scrollTrigger:{trigger:'.home-closing',start:'top 85%',once:true}});
   document.querySelectorAll('[data-parallax]').forEach(el=>gsap.fromTo(el,{scale:1},{scale:1.06,ease:'none',scrollTrigger:{trigger:el.parentElement,start:'top bottom',end:'bottom top',scrub:1}}));
  });
 }
 document.addEventListener('temple:motion-ready',start);document.addEventListener('temple:motion-stop',stop);start();
})();
