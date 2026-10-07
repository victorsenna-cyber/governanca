(function () {
  "use strict";

  const config = window.SITE_CONFIG || { links: {}, analytics: {}, debug: false };
  const root = document.documentElement;
  const header = document.querySelector("[data-header]");
  const artField = document.querySelector(".art-field");
  const soundWeave = document.querySelector(".sound-weave");
  const pranaSection = document.querySelector(".prana-section");
  const pranaImage = document.querySelector(".prana-portrait__frame img");
  const method = document.querySelector(".method");
  const methodSteps = Array.from(document.querySelectorAll("[data-method-step]"));
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const trackedViews = new Set();
  let ticking = false;
  let belowFoldReady = false;
  let belowFoldTimer;

  function track(name, detail) {
    if (!name) return;
    const payload = Object.assign(
      {
        event: name,
        page: "the-golden-temple",
        timestamp: new Date().toISOString()
      },
      detail || {}
    );

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    if (config.debug) {
      console.info("[The Golden Temple]", payload);
    }
  }

  function preserveCampaignParameters(destination) {
    try {
      const target = new URL(destination, window.location.href);
      const source = new URLSearchParams(window.location.search);
      source.forEach((value, key) => {
        if (key === "origem" || key.startsWith("utm_")) {
          target.searchParams.set(key, value);
        }
      });
      return target.toString();
    } catch (_error) {
      return destination;
    }
  }

  function hydrateLinks() {
    document.querySelectorAll("[data-config-link]").forEach((link) => {
      const key = link.getAttribute("data-config-link");
      const destination = config.links && config.links[key];
      const pending = document.querySelector(`[data-config-pending="${key}"]`);
      if (!destination || typeof destination !== "string") {
        link.hidden = true;
        if (pending) pending.hidden = false;
        return;
      }
      link.href = preserveCampaignParameters(destination);
      link.hidden = false;
      link.rel = "noopener";
      if (pending) pending.hidden = true;
    });

    document.querySelectorAll("template[data-config-link-template]").forEach((template) => {
      const key = template.getAttribute("data-config-link-template");
      const destination = config.links && config.links[key];
      const pending = document.querySelector(`[data-config-pending="${key}"]`);
      if (!destination || typeof destination !== "string") {
        if (pending) pending.hidden = false;
        return;
      }

      const fragment = template.content.cloneNode(true);
      const link = fragment.querySelector("[data-config-link]");
      if (!link) return;
      link.href = preserveCampaignParameters(destination);
      link.rel = "noopener";
      if (pending) pending.hidden = true;
      template.replaceWith(fragment);
    });

    const seasonalPortal = document.querySelector("[data-seasonal-portal]");
    if (seasonalPortal) {
      seasonalPortal.hidden = !(config.links && config.links.felinas);
    }
  }

  function prepareReveals() {
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    if (!elements.length || reduceMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    root.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.16,
        rootMargin: "0px 0px -7% 0px"
      }
    );

    elements.forEach((element) => {
      if (!element.classList.contains("is-visible")) {
        revealObserver.observe(element);
      }
    });
  }

  function prepareViewTracking() {
    if (!("IntersectionObserver" in window)) return;
    const sections = document.querySelectorAll("[data-track]");
    const viewObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.getAttribute("data-track");
          if (trackedViews.has(id)) return;
          trackedViews.add(id);
          track(`view_${id}`);
        });
      },
      { threshold: 0.34 }
    );
    sections.forEach((section) => viewObserver.observe(section));
  }

  function prepareSceneVisibility() {
    const scenes = document.querySelectorAll(".method, .art-field, .prana-section, .closing");
    if (!scenes.length || !("IntersectionObserver" in window)) {
      scenes.forEach((scene) => scene.classList.add("is-scene-visible"));
      return;
    }

    const sceneObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-scene-visible", entry.isIntersecting);
        });
      },
      {
        threshold: 0.01,
        rootMargin: "18% 0px 18% 0px"
      }
    );
    scenes.forEach((scene) => sceneObserver.observe(scene));
  }

  function prepareCtas() {
    document.querySelectorAll("[data-cta]").forEach((cta) => {
      cta.addEventListener("click", () => {
        const position = cta.getAttribute("data-cta");
        const route = cta.getAttribute("data-route");
        track(`cta_click_${position}`, {
          label: cta.textContent.trim().replace(/\s+/g, " "),
          destination: cta.getAttribute("href")
        });
        if (route) {
          track(`path_select_${route}`, {
            position,
            destination: cta.getAttribute("href")
          });
        }
      });
    });
  }

  function setActiveMethodStep() {
    if (!methodSteps.length) return;
    const center = window.innerHeight * 0.52;
    let activeIndex = 0;
    let nearest = Infinity;

    methodSteps.forEach((step, index) => {
      const rect = step.getBoundingClientRect();
      const stepCenter = rect.top + rect.height * 0.5;
      const distance = Math.abs(stepCenter - center);
      if (distance < nearest) {
        nearest = distance;
        activeIndex = index;
      }
    });

    methodSteps.forEach((step, index) => {
      step.classList.toggle("is-active", index === activeIndex);
    });
  }

  function updateScrollState() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop <= 0) {
      root.style.setProperty("--scroll-progress", "0");
    } else {
      const scrollRange = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      root.style.setProperty("--scroll-progress", Math.min(1, scrollTop / scrollRange).toFixed(4));
    }

    if (header) {
      header.classList.toggle("is-scrolled", scrollTop > 36);
    }

    if (method && methodSteps.length) {
      const rect = method.getBoundingClientRect();
      const isNearMethod = rect.top < window.innerHeight * 1.35 && rect.bottom > -window.innerHeight * 0.35;
      if (isNearMethod) {
        const total = Math.max(1, rect.height - window.innerHeight);
        const progress = Math.max(0, Math.min(1, -rect.top / total));
        setActiveMethodStep();
        method.style.setProperty("--method-progress", progress.toFixed(4));
      }
    }

    if (artField && soundWeave && !reduceMotion.matches) {
      const rect = artField.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.25 && rect.bottom > -window.innerHeight * 0.25) {
        const progress = Math.max(-1, Math.min(1, (window.innerHeight * 0.5 - rect.top) / window.innerHeight));
        soundWeave.style.transform = `translate3d(${progress * -24}px, ${progress * 16}px, 0)`;
      }
    }

    if (pranaSection && pranaImage && !reduceMotion.matches) {
      const rect = pranaSection.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.25 && rect.bottom > -window.innerHeight * 0.25) {
        const progress = Math.max(-1, Math.min(1, (window.innerHeight * 0.5 - rect.top) / window.innerHeight));
        pranaImage.style.transform = `scale(1.08) translate3d(0, ${progress * 15}px, 0)`;
      }
    }

    ticking = false;
  }

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(updateScrollState);
  }

  function prepareAnchors() {
    const lazySections = Array.from(
      document.querySelectorAll(".remember, .cost-band, .method, .art-field, .experiences, .prana-section, .dedication, .closing")
    );

    const scrollToTarget = (target, behavior) => {
      lazySections.forEach((section) => {
        section.style.contentVisibility = "visible";
      });

      requestAnimationFrame(() => {
        const headerOffset = header ? header.offsetHeight : 0;
        const top = window.scrollY + target.getBoundingClientRect().top - headerOffset;
        window.scrollTo({ top: Math.max(0, top), behavior });
      });
    };

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", (event) => {
        const id = link.getAttribute("href");
        if (!id || id === "#") return;
        const target = document.querySelector(id);
        if (!target) return;
        event.preventDefault();
        scrollToTarget(target, reduceMotion.matches ? "auto" : "smooth");
        history.replaceState(null, "", id);
      });
    });

    if (window.location.hash) {
      const initialTarget = document.querySelector(window.location.hash);
      if (initialTarget) {
        window.addEventListener(
          "load",
          () => window.setTimeout(() => scrollToTarget(initialTarget, "auto"), 80),
          { once: true }
        );
      }
    }
  }

  function setYear() {
    document.querySelectorAll("[data-year]").forEach((node) => {
      node.textContent = String(new Date().getFullYear());
    });
  }

  function prepareBelowFold() {
    if (belowFoldReady) return;
    belowFoldReady = true;
    window.clearTimeout(belowFoldTimer);
    window.removeEventListener("scroll", prepareBelowFold);
    window.removeEventListener("touchstart", prepareBelowFold);
    window.removeEventListener("keydown", prepareBelowFold);
    prepareReveals();
    prepareViewTracking();
    prepareSceneVisibility();
    onScroll();
  }

  function init() {
    hydrateLinks();
    prepareCtas();
    prepareAnchors();
    setYear();
    updateScrollState();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    window.addEventListener("scroll", prepareBelowFold, { passive: true, once: true });
    window.addEventListener("touchstart", prepareBelowFold, { passive: true, once: true });
    window.addEventListener("keydown", prepareBelowFold, { once: true });
    belowFoldTimer = window.setTimeout(prepareBelowFold, 5000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
