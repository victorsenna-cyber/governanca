/* Débora Delgado — Core JS | Sprint 1 */
(function () {
  'use strict';

  function initSmoothScroll() {
    document.querySelectorAll('.debora-artifact a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var id = this.getAttribute('href');
        if (!id || id === '#') return;
        var target = document.querySelector(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  function initActiveNav() {
    var artifact = document.querySelector('.debora-artifact');
    if (!artifact) return;

    var sections = artifact.querySelectorAll('.artifact-section[id]');
    var navItems = artifact.querySelectorAll('.sidebar-nav-item[href^="#"], .mobile-nav-item[href^="#"]');

    if (!sections.length || !navItems.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        var id = entry.target.getAttribute('id');
        navItems.forEach(function (item) {
          item.classList.remove('active');
          if (item.getAttribute('href') === '#' + id) {
            item.classList.add('active');
          }
        });
      });
    }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });

    sections.forEach(function (s) { observer.observe(s); });
  }

  function init() {
    initSmoothScroll();
    initActiveNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
