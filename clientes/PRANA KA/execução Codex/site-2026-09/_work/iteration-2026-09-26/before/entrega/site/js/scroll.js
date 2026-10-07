(()=>{'use strict';const preference=matchMedia('(prefers-reduced-motion: reduce)');let pending=null,frame=0;
 const motion=window.TEMPLE_MOTION={reduced:preference.matches,lenis:null};
 function load(lib){return new Promise(resolve=>{const script=document.createElement('script');script.src=lib.src;script.integrity=lib.integrity;script.crossOrigin='anonymous';script.defer=true;script.onload=()=>resolve(true);script.onerror=()=>resolve(false);document.head.append(script)})}
 async function start(){if(preference.matches)return;if(!pending)pending=(async()=>{const libs=window.TEMPLE_CONFIG.libraries;await Promise.all([load(libs[0]),load(libs[1])]);if(window.gsap)await load(libs[2])})();await pending;if(preference.matches)return;
 if(window.gsap&&window.ScrollTrigger)gsap.registerPlugin(ScrollTrigger);
 if(window.Lenis&&!motion.lenis){motion.lenis=new Lenis({lerp:.08,smoothWheel:true,anchors:true});if(window.ScrollTrigger)motion.lenis.on('scroll',ScrollTrigger.update);const tick=time=>{motion.lenis?.raf(time);if(motion.lenis)frame=requestAnimationFrame(tick)};frame=requestAnimationFrame(tick)}
 document.dispatchEvent(new CustomEvent('temple:motion-ready'));
 }
 preference.addEventListener('change',()=>{motion.reduced=preference.matches;if(preference.matches){cancelAnimationFrame(frame);motion.lenis?.destroy();motion.lenis=null;document.dispatchEvent(new CustomEvent('temple:motion-stop'));}else start()});start();
})();
