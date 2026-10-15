"use strict";

/**
 * Gates de publicação.
 *
 * O WhatsApp é o destino obrigatório: o formulário sempre abre a conversa,
 * com nome e objetivo já na mensagem. O `leadsEndpoint` é um registro
 * paralelo e opcional — quando estiver configurado, o lead também vai para a
 * planilha; quando não estiver, a conversa acontece do mesmo jeito.
 */
const CONFIG = Object.freeze({
  isPreview: false,
  whatsappNumber: "5531983015499",
  leadsEndpoint: "https://script.google.com/macros/s/AKfycbwfFvP2CENf98q9-xoJahfz57kOF0lvQnjUhlRJgohxfGKAzBfOuSEnNwR4Nd8JO7m8/exec",
  pageName: "pagina-1-ingles-para-brasileiros",
});

document.documentElement.classList.add("has-js");

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const revealElements = Array.from(document.querySelectorAll(".reveal"));

if ("IntersectionObserver" in window && !reducedMotion.matches) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const testimonialCarousel = document.querySelector("[data-testimonial-carousel]");

if (testimonialCarousel) {
  const testimonialSlides = Array.from(
    testimonialCarousel.querySelectorAll("[data-testimonial-slide]"),
  );
  const testimonialPrevious = testimonialCarousel.querySelector("[data-testimonial-prev]");
  const testimonialNext = testimonialCarousel.querySelector("[data-testimonial-next]");
  const testimonialStatus = testimonialCarousel.querySelector("[data-testimonial-status]");
  let testimonialIndex = 0;
  let testimonialTimer = 0;

  const showTestimonial = (nextIndex) => {
    testimonialIndex = (nextIndex + testimonialSlides.length) % testimonialSlides.length;

    testimonialSlides.forEach((slide, index) => {
      const isActive = index === testimonialIndex;
      const link = slide.querySelector("a");
      slide.classList.toggle("is-active", isActive);
      slide.setAttribute("aria-hidden", String(!isActive));
      if (link) link.tabIndex = isActive ? 0 : -1;
    });

    testimonialStatus.textContent = `Depoimento ${testimonialIndex + 1} de ${testimonialSlides.length}`;
  };

  const stopTestimonialRotation = () => {
    window.clearInterval(testimonialTimer);
    testimonialTimer = 0;
  };

  const startTestimonialRotation = () => {
    stopTestimonialRotation();
    const isBeingUsed =
      testimonialCarousel.matches(":hover") ||
      testimonialCarousel.contains(document.activeElement);
    if (reducedMotion.matches || document.hidden || testimonialSlides.length < 2 || isBeingUsed) {
      return;
    }
    testimonialTimer = window.setInterval(() => showTestimonial(testimonialIndex + 1), 9000);
  };

  testimonialPrevious.addEventListener("click", () => {
    showTestimonial(testimonialIndex - 1);
  });

  testimonialNext.addEventListener("click", () => {
    showTestimonial(testimonialIndex + 1);
  });

  testimonialCarousel.addEventListener("mouseenter", stopTestimonialRotation);
  testimonialCarousel.addEventListener("mouseleave", startTestimonialRotation);
  testimonialCarousel.addEventListener("focusin", stopTestimonialRotation);
  testimonialCarousel.addEventListener("focusout", (event) => {
    if (!testimonialCarousel.contains(event.relatedTarget)) startTestimonialRotation();
  });

  testimonialCarousel.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    showTestimonial(testimonialIndex + (event.key === "ArrowRight" ? 1 : -1));
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopTestimonialRotation();
    else startTestimonialRotation();
  });

  reducedMotion.addEventListener("change", startTestimonialRotation);
  showTestimonial(0);
  startTestimonialRotation();
}

const dialog = document.querySelector("#lead-dialog");
const form = document.querySelector("#lead-form");
const openButtons = Array.from(document.querySelectorAll("[data-lead-open]"));
const closeButton = document.querySelector("[data-dialog-close]");
const firstNameInput = document.querySelector("#first-name");
const phoneInput = document.querySelector("#whatsapp");
const submitButton = document.querySelector(".button--submit");
const submitLabel = document.querySelector("[data-submit-label]");
const formStatus = document.querySelector("#form-status");

let activeTrigger = null;
let ctaOrigin = "indefinida";

const setStatus = (message = "", state = "") => {
  formStatus.textContent = message;
  if (state) {
    formStatus.dataset.state = state;
  } else {
    delete formStatus.dataset.state;
  }
};

const setLoading = (isLoading) => {
  submitButton.disabled = isLoading;
  submitButton.classList.toggle("is-loading", isLoading);
  submitButton.setAttribute("aria-busy", String(isLoading));
  submitLabel.textContent = isLoading
    ? "Preparando sua conversa..."
    : "Continuar para o WhatsApp";
};

const clearFieldError = (name) => {
  const error = form.querySelector(`[data-error-for="${name}"]`);
  const field = form.elements.namedItem(name);

  if (error) error.textContent = "";

  if (field instanceof RadioNodeList) {
    Array.from(form.querySelectorAll(`[name="${name}"]`)).forEach((input) => {
      input.removeAttribute("aria-invalid");
    });
  } else if (field instanceof HTMLElement) {
    field.removeAttribute("aria-invalid");
  }
};

const setFieldError = (name, message) => {
  const error = form.querySelector(`[data-error-for="${name}"]`);
  const field = form.elements.namedItem(name);

  if (error) error.textContent = message;

  if (field instanceof RadioNodeList) {
    Array.from(form.querySelectorAll(`[name="${name}"]`)).forEach((input) => {
      input.setAttribute("aria-invalid", "true");
    });
  } else if (field instanceof HTMLElement) {
    field.setAttribute("aria-invalid", "true");
  }
};

const clearErrors = () => {
  ["firstName", "whatsapp", "objective", "consent"].forEach(clearFieldError);
  setStatus();
};

const validateForm = () => {
  clearErrors();

  const data = new FormData(form);
  const firstName = String(data.get("firstName") || "").trim();
  const whatsapp = String(data.get("whatsapp") || "").replace(/\D/g, "");
  const objective = String(data.get("objective") || "");
  const consent = data.get("consent") === "on";
  const invalid = [];

  if (firstName.length < 2) {
    setFieldError("firstName", "Digite seu primeiro nome.");
    invalid.push(firstNameInput);
  }

  if (whatsapp.length < 10 || whatsapp.length > 15) {
    setFieldError("whatsapp", "Digite um WhatsApp válido, com DDD.");
    invalid.push(phoneInput);
  }

  if (!objective) {
    setFieldError("objective", "Escolha o objetivo que mais se aproxima do seu momento.");
    invalid.push(form.querySelector('[name="objective"]'));
  }

  if (!consent) {
    setFieldError("consent", "Confirme o uso dos dados para este contato.");
    invalid.push(form.querySelector("#consent"));
  }

  if (invalid.length) {
    setStatus("Revise os campos indicados e tente novamente.", "error");
    invalid[0]?.focus();
    return null;
  }

  return {
    firstName,
    whatsapp,
    objective,
    consent,
  };
};

const getAttribution = () => {
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];

  return keys.reduce((result, key) => {
    result[key] = params.get(key) || "";
    return result;
  }, {});
};

const buildPayload = (lead) => ({
  ...lead,
  page: CONFIG.pageName,
  ctaOrigin,
  timestamp: new Date().toISOString(),
  origin: document.referrer || "direto",
  url: window.location.href,
  ...getAttribution(),
});

/**
 * Envia o lead por POST de formulário dentro de um iframe oculto.
 *
 * POR QUE NÃO É fetch: com `mode: "no-cors"` o navegador entrega a
 * requisição mas DESCARTA o corpo no destino. O Apps Script recebia
 * `e.postData === undefined` e registrava "corpo vazio ou ilegível".
 * Formulário é uma requisição de navegação de verdade: o corpo sempre
 * chega, não existe CORS no caminho, e sobrevive à saída da página.
 */
function enviarLead(url, payload) {
  url = String(url || "").trim();
  if (!url) return;
  try {
    var id = "lead_" + Date.now() + "_" + Math.floor(Math.random() * 1e6);

    var iframe = document.createElement("iframe");
    iframe.name = id;
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.cssText = "position:absolute;width:0;height:0;border:0;left:-9999px";
    document.body.appendChild(iframe);

    var form = document.createElement("form");
    form.action = url;
    form.method = "POST";
    form.target = id;
    form.acceptCharset = "UTF-8";
    form.style.display = "none";

    var campo = document.createElement("input");
    campo.type = "hidden";
    campo.name = "payload";
    campo.value = JSON.stringify(payload);
    form.appendChild(campo);

    document.body.appendChild(form);
    form.submit();

    window.setTimeout(function () {
      if (form.parentNode) form.parentNode.removeChild(form);
      if (iframe.parentNode) iframe.parentNode.removeChild(iframe);
    }, 20000);
  } catch (e) {
    // Registro nunca bloqueia a conversão.
  }
}

const sendLead = async (payload) => enviarLead(CONFIG.leadsEndpoint, payload);

const buildWhatsAppUrl = (lead) => {
  const number = CONFIG.whatsappNumber.replace(/\D/g, "");
  const objetivo = typeof lead === "string" ? lead : lead.objective;
  const nome = typeof lead === "string" ? "" : (lead.firstName || "").trim();
  const abertura = nome ? `Oi, Jéssica! Aqui é a ${nome}.` : "Oi, Jéssica!";
  const message =
    `${abertura} Vim pela página do Emotional Speaking. Quero conhecer o método ` +
    `e entender qual formato combina com meu objetivo. Meu foco principal é: ${objetivo}.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
};

openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTrigger = button;
    ctaOrigin = button.dataset.ctaOrigin || "indefinida";
    clearErrors();
    dialog.scrollTop = 0;
    dialog.showModal();
    window.requestAnimationFrame(() => firstNameInput.focus({ preventScroll: true }));
  });
});

closeButton.addEventListener("click", () => dialog.close());

dialog.addEventListener("close", () => {
  setLoading(false);
  activeTrigger?.focus();
});

dialog.addEventListener("click", (event) => {
  const bounds = dialog.getBoundingClientRect();
  const outside =
    event.clientX < bounds.left ||
    event.clientX > bounds.right ||
    event.clientY < bounds.top ||
    event.clientY > bounds.bottom;

  if (outside) dialog.close();
});

dialog.addEventListener("keydown", (event) => {
  if (event.key !== "Tab") return;

  const focusable = Array.from(
    dialog.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((element) => element.offsetParent !== null);

  if (!focusable.length) return;

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

firstNameInput.addEventListener("blur", () => {
  if (firstNameInput.value.trim().length >= 2) {
    clearFieldError("firstName");
  }
});

phoneInput.addEventListener("input", () => {
  const digits = phoneInput.value.replace(/\D/g, "").slice(0, 11);
  let formatted = digits;

  if (digits.length > 2) {
    formatted = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  }
  if (digits.length > 7) {
    formatted = `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  phoneInput.value = formatted;
});

phoneInput.addEventListener("blur", () => {
  const digits = phoneInput.value.replace(/\D/g, "");
  if (digits.length >= 10 && digits.length <= 15) {
    clearFieldError("whatsapp");
  }
});

form.querySelectorAll('[name="objective"]').forEach((input) => {
  input.addEventListener("change", () => clearFieldError("objective"));
});

form.querySelector("#consent").addEventListener("change", (event) => {
  if (event.currentTarget.checked) clearFieldError("consent");
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const lead = validateForm();
  if (!lead) return;

  // O WhatsApp é o destino obrigatório. A planilha é um registro paralelo:
  // se o endpoint não estiver configurado, o lead NÃO se perde — ele chega
  // na conversa com nome e objetivo já na mensagem.
  if (!CONFIG.whatsappNumber.trim()) {
    setStatus(
      "O canal de contato ainda não foi configurado. Tente novamente em instantes.",
      "error",
    );
    return;
  }

  setLoading(true);
  setStatus("Tudo certo. Abrindo o WhatsApp para você continuar a conversa.", "success");

  if (CONFIG.leadsEndpoint.trim()) {
    try {
      await sendLead(buildPayload(lead));
    } catch (error) {
      // Falha de registro não pode impedir a conversa. Segue para o WhatsApp.
    }
  }

  window.setTimeout(() => {
    window.location.assign(buildWhatsAppUrl(lead));
  }, 900);
});
