(() => {
  "use strict";

  /* -------------------------------------------------------------------------
     Destino do CTA — atualizado 19/09/2026.

     DEC-2026-08-11-003: o Curso tem checkout automático (R$ 97, impulso), e o
     critério de sucesso dele não é receita — é volume de sessões de Visão
     Uterina agendadas.

     O link de pagamento do Curso ainda não existe no repositório (P-CR-05).
     Ele NÃO é inventado e NÃO é substituído pelo link da Masterclass — enviar
     a compradora para o produto errado é pior do que não vender.

     Por isso a página passa a operar em dois estágios:
       · sem checkoutUrl  → o botão abre a conversa e a venda acontece por lá
       · com checkoutUrl  → o botão passa a abrir o pagamento direto, sozinho

     Trocar de estágio é preencher uma linha. Enquanto ela estiver vazia, a
     página converte — que é o que ela não fazia desde 04/08.
     ------------------------------------------------------------------------- */
  const CONFIG = Object.freeze({
    checkoutUrl: "",
    contactUrl:
      "https://wa.me/5548984248922?text=" +
      encodeURIComponent(
        "Oi Prana! Quero entrar no Despertar do Prazer Sagrado. Como faço?"
      ),
    analyticsEnabled: false,
    origin: "curso-despertar"
  });

  const root = document.documentElement;
  const dialog = document.querySelector("#checkout-dialog");
  const dialogClose = document.querySelector("#checkout-dialog-close");
  const progressFill = document.querySelector("#page-progress-fill");

  function track(eventName, detail = {}) {
    if (!CONFIG.analyticsEnabled) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...detail });
  }

  function buildCheckoutUrl() {
    const raw = CONFIG.checkoutUrl || CONFIG.contactUrl;
    if (!raw) return "";

    const destination = new URL(raw);

    // UTM só faz sentido em checkout. O WhatsApp descarta parâmetro
    // desconhecido e o link fica sujo à toa.
    if (!CONFIG.checkoutUrl) return destination.toString();

    const current = new URLSearchParams(window.location.search);

    current.forEach((value, key) => {
      if (key.startsWith("utm_") || key === "funnel" || key === "origem") {
        if (!destination.searchParams.has(key)) destination.searchParams.set(key, value);
      }
    });

    if (!destination.searchParams.has("origem")) {
      destination.searchParams.set("origem", CONFIG.origin);
    }

    return destination.toString();
  }

  function openCheckout(trigger) {
    const target = buildCheckoutUrl();
    track("cta_click", { origem: trigger.closest("[data-section]")?.dataset.section || "header" });

    if (target) {
      window.location.assign(target);
      return;
    }

    if (dialog && typeof dialog.showModal === "function") {
      dialog.showModal();
      return;
    }

    window.alert("O checkout ainda não foi conectado nesta prévia local.");
  }

  document.querySelectorAll(".js-checkout").forEach((trigger) => {
    trigger.addEventListener("click", () => openCheckout(trigger));
  });

  dialogClose?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  function updateProgress() {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    progressFill?.style.setProperty("transform", `scaleX(${progress})`);
  }

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  if ("IntersectionObserver" in window) {
    root.classList.add("motion-ready");

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) track(`view_${entry.target.dataset.section}`);
      });
    }, { threshold: 0.48 });

    document.querySelectorAll("[data-section]").forEach((section) => sectionObserver.observe(section));
  }

  document.querySelectorAll(".faq details").forEach((item, index) => {
    item.addEventListener("toggle", () => {
      if (item.open) track(`faq_open_${index + 1}`);
    });
  });
})();
