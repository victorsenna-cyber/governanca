"use strict";

/* ---------------------------------------------------------------------------
   OFERTA — modelo de AGENDAMENTO (não de compra direta)
   Atualizado 19/09/2026.

   O ato de conversão desta página mudou em 19/08/2026 (DEC-2026-08-19-001):
   deixou de ser checkout e passou a ser agendamento da Visão Uterina.
   Razão da titular: "é bom eu farejar o campo antes da pessoa entrar,
   esses mistérios não podem ser compartilhados com quem é curioso".

   Por isso a lista de campos obrigatórios abaixo MUDOU. A lista antiga exigia
   preço e política de reembolso — corretos para compra direta, sem sentido
   para agendamento, e era o que mantinha a página no ar sem conseguir operar.
   --------------------------------------------------------------------------- */

const OFFER_CONFIG = Object.freeze({
  // Preço NÃO aparece nesta página, por decisão da titular (DEC-2026-09-02-001,
  // reconfirmado na call de 02/09). O valor vigente é R$ 3.369 pelo ciclo de
  // 3 meses, e ele é apresentado na conversa, não na página.
  price: null,
  installments: null,

  cohortStart: "Entrada a qualquer momento — o ciclo é contínuo",
  meetingSchedule: "Encontros a cada 14 dias, às quartas, 19h",

  // Turmas heterogêneas são desenho, não acaso: cada mulher percorre os portais
  // no próprio ritmo (DEC-2026-08-11-002). Não há limite de vagas declarado.
  capacity: "Sem limite de vagas — cada mulher percorre no próprio ritmo",
  enrollmentDeadline: "Sem prazo de inscrição — a entrada é perene",

  // Destino do CTA: conversa direta. Número confirmado em 05/09/2026.
  checkoutUrl:
    "https://wa.me/5548984248922?text=" +
    encodeURIComponent(
      "Oi Prana! Vim pelo site do Templo Dourado e quero saber mais sobre a mentoria."
    ),

  // DELIBERADAMENTE NULO — não se inventa cláusula com efeito jurídico.
  // Enquanto for nulo, o bloco de política não é exibido (fail-closed local).
  refundOrCancellationPolicy: null,

  postPurchaseSteps:
    "Depois da conversa, você recebe o acesso à plataforma e o caminho dos oito Portais do Ventre, para percorrer no seu tempo.",

  metaPixelId: null,
  campaignOfferFelinas: null
});

/* Obrigatórios do modelo de agendamento: o que a página precisa para funcionar
   e ser honesta. Preço e política saíram — não há compra acontecendo aqui. */
const REQUIRED_OFFER_FIELDS = [
  "cohortStart",
  "meetingSchedule",
  "capacity",
  "enrollmentDeadline",
  "checkoutUrl",
  "postPurchaseSteps"
];

const query = new URLSearchParams(window.location.search);
const source = (query.get("origem") || "").toLowerCase();
const isFelinas = source === "felinas";
const offerIsReady = REQUIRED_OFFER_FIELDS.every((field) => {
  const value = OFFER_CONFIG[field];
  return typeof value === "string" && value.trim().length > 0;
});

const analyticsContext = {
  origem: source || "padrao",
  path: window.location.pathname
};

function track(eventName, extra = {}) {
  const payload = {
    event: eventName,
    ...analyticsContext,
    ...extra
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  window.dispatchEvent(new CustomEvent("prana:analytics", { detail: payload }));

  if (typeof window.fbq === "function") {
    window.fbq("trackCustom", eventName, payload);
  }
}

function initializeMetaPixel(pixelId) {
  if (!pixelId || typeof pixelId !== "string") return;

  if (!window.fbq) {
    const fbq = function () {
      fbq.callMethod ? fbq.callMethod.apply(fbq, arguments) : fbq.queue.push(arguments);
    };
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/pt_BR/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq("init", pixelId);
  window.fbq("track", "PageView");
}

function buildCheckoutUrl(rawUrl) {
  const checkout = new URL(rawUrl, window.location.href);
  const preservedKeys = ["origem", "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];

  preservedKeys.forEach((key) => {
    const value = query.get(key);
    if (value) checkout.searchParams.set(key, value);
  });

  return checkout.toString();
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element && value) element.textContent = value;
}

function revealDetail(field, selector, value) {
  if (!value) return;
  const wrapper = document.querySelector(`[data-detail="${field}"]`);
  setText(selector, value);
  if (wrapper) wrapper.hidden = false;
}

function validFelinasCampaign(campaign) {
  if (!campaign || typeof campaign !== "object") return false;
  const required = ["label", "value", "validUntil"];
  return required.every((field) => typeof campaign[field] === "string" && campaign[field].trim().length > 0);
}

function renderOffer() {
  const pending = document.querySelector("[data-offer-pending]");
  const confirmed = document.querySelector("[data-offer-confirmed]");
  const gate = document.querySelector("[data-offer-gate]");
  const policy = document.querySelector("[data-offer-policy]");
  const next = document.querySelector("[data-offer-next]");
  const offerButton = document.querySelector('.js-cta[data-placement="d8"]');

  if (!offerIsReady) {
    document.body.classList.add("offer-pending");
    return;
  }

  document.body.classList.add("offer-ready");
  if (pending) pending.hidden = true;
  if (confirmed) confirmed.hidden = false;
  if (gate) gate.hidden = true;
  if (offerButton) offerButton.removeAttribute("aria-disabled");

  // Preço e política só aparecem se existirem. Bloco vazio revelado é pior
  // que bloco ausente: o visitante vê um rótulo sem resposta.
  const priceWrap = document.querySelector("[data-price-wrap]");
  if (priceWrap) priceWrap.hidden = !OFFER_CONFIG.price;
  if (policy) policy.hidden = !OFFER_CONFIG.refundOrCancellationPolicy;
  if (next) next.hidden = !OFFER_CONFIG.postPurchaseSteps;

  setText("[data-price]", OFFER_CONFIG.price);
  setText("[data-installments]", OFFER_CONFIG.installments);

  revealDetail("cohortStart", "[data-cohort-start]", OFFER_CONFIG.cohortStart);
  revealDetail("meetingSchedule", "[data-meeting-schedule]", OFFER_CONFIG.meetingSchedule);
  revealDetail("capacity", "[data-capacity]", OFFER_CONFIG.capacity);
  revealDetail("enrollmentDeadline", "[data-enrollment-deadline]", OFFER_CONFIG.enrollmentDeadline);
  setText("[data-policy]", OFFER_CONFIG.refundOrCancellationPolicy);
  setText("[data-post-purchase]", OFFER_CONFIG.postPurchaseSteps);

  const campaign = OFFER_CONFIG.campaignOfferFelinas;
  if (isFelinas && validFelinasCampaign(campaign)) {
    const campaignBlock = document.querySelector("[data-campaign-offer]");
    setText("[data-campaign-label]", campaign.label);
    setText("[data-campaign-value]", campaign.value);
    setText("[data-campaign-validity]", campaign.validUntil);
    if (campaignBlock) campaignBlock.hidden = false;
  }
}

function applySourceMatch() {
  const bridge = document.querySelector("[data-origin-bridge]");
  if (!bridge || !isFelinas) return;

  bridge.textContent =
    "O que você viveu no Portal das Felinas foi a porta. Agora começa o caminho completo.";
  document.body.classList.add("origin-felinas");
}

function checkoutTargetFor(placement) {
  const directPlacements = ["d8", "d10"];
  const shouldOpenCheckout = offerIsReady && (isFelinas || directPlacements.includes(placement));
  return shouldOpenCheckout ? buildCheckoutUrl(OFFER_CONFIG.checkoutUrl) : "#oferta";
}

function wireCtas() {
  document.querySelectorAll(".js-cta").forEach((cta) => {
    const placement = cta.dataset.placement || "unknown";
    cta.href = checkoutTargetFor(placement);

    cta.addEventListener("click", (event) => {
      track(cta.dataset.event || `cta_click_${placement}`, { placement });

      if (!offerIsReady) {
        event.preventDefault();
        document.querySelector("#oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }

      const opensCheckout = isFelinas || placement === "d8" || placement === "d10";
      if (opensCheckout) track("checkout_start", { placement });
    });
  });
}

function wireFoldViews() {
  const seen = new Set();
  const folds = document.querySelectorAll("[data-fold]");

  if (!("IntersectionObserver" in window)) {
    folds.forEach((fold) => track(`view_${fold.dataset.fold}`));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const fold = entry.target.dataset.fold;
        if (seen.has(fold)) return;
        seen.add(fold);
        track(`view_${fold}`);
      });
    },
    { threshold: 0.08, rootMargin: "0px 0px -18% 0px" }
  );

  folds.forEach((fold) => observer.observe(fold));
}

function wireReveals() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
  );

  elements.forEach((element) => observer.observe(element));
}

function wireFaq() {
  document.querySelectorAll(".faq__item").forEach((item, index) => {
    item.addEventListener("toggle", () => {
      if (item.open) track(`faq_open_${index + 1}`, { faq_number: index + 1 });
    });
  });
}

function wireAxis() {
  let ticking = false;

  const update = () => {
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / documentHeight)) : 0;
    document.documentElement.style.setProperty("--axis-progress", progress.toFixed(4));
    ticking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(update);
    },
    { passive: true }
  );

  update();
}

function wireStickyEntry() {
  const sticky = document.querySelector("[data-sticky-entry]");
  const offer = document.querySelector("#oferta");
  if (!sticky || !offer || !offerIsReady) return;

  sticky.hidden = false;

  const update = () => {
    const offerBottom = offer.offsetTop + offer.offsetHeight;
    const shouldShow = window.scrollY > offerBottom - window.innerHeight * 0.35;
    sticky.classList.toggle("is-visible", shouldShow);
  };

  window.addEventListener("scroll", update, { passive: true });
  update();
}

function exposePurchaseBridge() {
  window.pranaTrackPurchase = (purchaseData = {}) => {
    track("purchase", purchaseData);
  };
}

applySourceMatch();
renderOffer();
initializeMetaPixel(OFFER_CONFIG.metaPixelId);
wireCtas();
wireFoldViews();
wireReveals();
wireFaq();
wireAxis();
wireStickyEntry();
exposePurchaseBridge();
