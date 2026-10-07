"use strict";

/* ============================================================================
   LADIES FLUENCY EXPERIENCE — configuração da edição
   ----------------------------------------------------------------------------
   TUDO que muda de uma edição para outra está neste bloco e em nenhum
   outro lugar. Para publicar uma nova edição, edite apenas o CONFIG,
   salve e publique. Nenhum texto da página precisa ser reescrito.
   ========================================================================== */

const CONFIG = Object.freeze({
  // ---- identificação da edição -------------------------------------------
  edicao: "1ª edição",
  nomeEvento: "Ladies Fluency Experience",

  // ---- quando e onde ------------------------------------------------------
  // Janeiro de 2027. Dia e local fecham em novembro (Casa Viva abre reservas
  // de 2027 em novembro; há um espaço alternativo em avaliação).
  // Quando fechar: trocar data, dataCurta, horario, local e bairro.
  data: "janeiro de 2027",
  dataCurta: "jan/2027",
  horario: "dia anunciado primeiro a quem já garantiu",
  local: "Florianópolis",
  bairro: "Santa Catarina",

  // ---- lotes --------------------------------------------------------------
  // A troca de lote é por DATA, não por venda. Nenhum lote tem cota de vagas.
  // Cada lote tem o PRÓPRIO link de pagamento. Ao virar a data, trocar
  // loteVigente: o preço, o prazo e o link viram juntos.
  lotes: [
    {
      nome: "Pré-venda",
      preco: "R$ 147",
      ate: "até 29/11",
      link: "https://link.infinitepay.io/teacherjey/VC1D-GZWvcpKFXt-147,00",
    },
    {
      nome: "Primeiro lote",
      preco: "R$ 197",
      ate: "a partir de 30/11",
      link: "https://link.infinitepay.io/teacherjey/VC1D-rnPhOh3Bcu-197,00",
    },
  ],
  loteVigente: 0, // 0 = pré-venda (até 29/11) · 1 = primeiro lote (a partir de 30/11)

  // ---- inscrição ----------------------------------------------------------
  prazoInscricao: "O valor de pré-venda vale até 29/11.",

  // Registro paralelo na planilha. Vazio = a inscrição funciona do mesmo jeito.
  leadsEndpoint: "https://script.google.com/macros/s/AKfycbwfFvP2CENf98q9-xoJahfz57kOF0lvQnjUhlRJgohxfGKAzBfOuSEnNwR4Nd8JO7m8/exec",
  whatsapp: "", // opcional, só para dúvidas. Deixe vazio para ocultar.

  // ---- estado da página ---------------------------------------------------
  // "abertas" | "ultimas" | "esgotado" | "proxima"
  status: "abertas",
});

/* ========================================================================== */

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));

const loteAtual = () => CONFIG.lotes[CONFIG.loteVigente] || CONFIG.lotes[0];

/* --- preenchimento dos campos variáveis ---------------------------------- */

function preencherCampos() {
  const lote = loteAtual();
  const mapa = {
    data: CONFIG.data,
    "data-curta": CONFIG.dataCurta,
    horario: CONFIG.horario,
    local: CONFIG.local,
    bairro: CONFIG.bairro,
    "local-completo": `${CONFIG.local} · ${CONFIG.bairro}`,
    "lote-nome": lote.nome,
    "lote-preco": lote.preco,
    "lote-ate": lote.ate,
    prazo: CONFIG.prazoInscricao,
    edicao: CONFIG.edicao,
    evento: CONFIG.nomeEvento,
  };

  $$("[data-campo]").forEach((el) => {
    const chave = el.dataset.campo;
    if (chave in mapa) el.textContent = mapa[chave];
  });

  // tabela de lotes
  const trilha = $("#trilha-lotes");
  if (trilha) {
    trilha.innerHTML = "";
    CONFIG.lotes.forEach((l, i) => {
      const item = document.createElement("li");
      item.className = "lote" + (i === CONFIG.loteVigente ? " lote--vigente" : " lote--apagado");
      item.innerHTML = `
        <span class="lote__nome">${l.nome}</span>
        <span class="lote__preco">${l.preco}</span>
        <span class="lote__vagas">${l.ate}</span>
      `;
      if (i === CONFIG.loteVigente) {
        item.insertAdjacentHTML("beforeend", '<span class="lote__selo">vigente</span>');
      }
      trilha.appendChild(item);
    });
  }
}

/* --- estado da inscrição -------------------------------------------------- */

const ESTADOS = {
  abertas: {
    rotulo: null,
    cta: "Garantir minha vaga",
    ativo: true,
  },
  ultimas: {
    rotulo: "Últimas vagas",
    cta: "Garantir minha vaga",
    ativo: true,
  },
  esgotado: {
    rotulo: "Vagas esgotadas",
    cta: "Entrar na lista da próxima edição",
    ativo: false,
    aviso:
      "Esta edição está com todas as vagas preenchidas. Deixe seu contato e você é a primeira a saber da próxima.",
  },
  proxima: {
    rotulo: "Inscrições em breve",
    cta: "Quero ser avisada",
    ativo: false,
    aviso: "As inscrições da próxima edição abrem em breve. Deixe seu contato e eu te aviso.",
  },
};

function aplicarEstado() {
  const estado = ESTADOS[CONFIG.status] || ESTADOS.abertas;
  const link = (loteAtual().link || "").trim();
  const semLink = !link;

  $$("[data-estado-rotulo]").forEach((el) => {
    if (estado.rotulo) {
      el.textContent = estado.rotulo;
      el.hidden = false;
    } else {
      el.hidden = true;
    }
  });

  $$("[data-cta]").forEach((btn) => {
    btn.textContent = estado.cta;
    btn.setAttribute("href", "#");
    btn.removeAttribute("target");
    // O botão nunca é desligado: sem vagas ele vira captação de lista de espera.
    btn.classList.remove("is-inativo");
  });

  const aviso = $("#aviso-estado");
  if (aviso) {
    const texto = estado.aviso || (semLink && estado.ativo ? PENDENTE_LINK : "");
    aviso.textContent = texto;
    aviso.hidden = !texto;
  }

  document.body.dataset.status = CONFIG.status;
}

const PENDENTE_LINK =
  "Link de pagamento em configuração. Enquanto isso, a inscrição é confirmada por mensagem.";

/* --- acordeão do FAQ ------------------------------------------------------ */

function montarAcordeao() {
  $$(".faq__item").forEach((item) => {
    const botao = $(".faq__pergunta", item);
    const corpo = $(".faq__resposta", item);
    if (!botao || !corpo) return;
    botao.addEventListener("click", () => {
      const aberto = item.classList.toggle("is-aberto");
      botao.setAttribute("aria-expanded", String(aberto));
      corpo.hidden = !aberto;
    });
  });
}

/* --- revelação por scroll ------------------------------------------------- */

function montarRevelacao() {
  const alvos = $$(".reveal");
  const reduz = window.matchMedia("(prefers-reduced-motion: reduce)");
  if (!("IntersectionObserver" in window) || reduz.matches) {
    alvos.forEach((el) => el.classList.add("is-visivel"));
    return;
  }
  const obs = new IntersectionObserver(
    (entradas, o) => {
      entradas.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.add("is-visivel");
        o.unobserve(e.target);
      });
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );
  alvos.forEach((el) => obs.observe(el));
}

/* --- barra de âncora ------------------------------------------------------ */

function montarBarra() {
  const barra = $(".barra");
  const hero = $("#hero");
  if (!barra || !hero || !("IntersectionObserver" in window)) return;
  const obs = new IntersectionObserver(
    ([e]) => barra.classList.toggle("barra--densa", !e.isIntersecting),
    { threshold: 0.05 }
  );
  obs.observe(hero);
}


/* --- popup de inscrição --------------------------------------------------- */

let origemCta = "indefinida";

function getUtms() {
  const q = new URLSearchParams(window.location.search);
  return ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"]
    .reduce((acc, k) => { acc[k] = q.get(k) || ""; return acc; }, {});
}

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

function registrarLead(dados) { enviarLead(CONFIG.leadsEndpoint, dados); }

function montarModal() {
  const modal = $("#modal-inscricao");
  const form = $("#form-inscricao");
  if (!modal || !form) return;

  const nota = $("[data-modal-nota]");
  const erro = (campo, msg) => {
    const el = $(`[data-erro-de="${campo}"]`, form);
    if (el) el.textContent = msg || "";
  };

  const vendendo = () => {
    const estado = ESTADOS[CONFIG.status] || ESTADOS.abertas;
    return Boolean(estado.ativo) && Boolean((loteAtual().link || "").trim());
  };

  const abrir = (gatilho) => {
    origemCta = gatilho?.dataset?.ctaOrigem || "indefinida";
    const vende = vendendo();
    const titulo = $("#modal-titulo");
    const intro = $(".modal__intro", modal);
    const enviar = $(".modal__enviar", modal);
    const resumo = $(".modal__resumo", modal);
    if (titulo) {
      titulo.textContent = vende
        ? "Antes de ir para o pagamento, me diz quem é você."
        : "Quero te avisar da próxima edição.";
    }
    if (intro) {
      intro.textContent = vende
        ? "Leva menos de um minuto. Se você desistir no meio do caminho, eu consigo te avisar da próxima edição."
        : "Esta edição já está com as vagas preenchidas. Deixe seu contato e você é a primeira a saber quando a próxima abrir.";
    }
    if (enviar) enviar.textContent = vende ? "Ir para o pagamento" : "Quero ser avisada";
    if (resumo) resumo.hidden = !vende;
    ["nome", "whatsapp", "consent"].forEach((c) => erro(c, ""));
    if (nota) nota.textContent = "";
    modal.showModal();
    window.setTimeout(() => $("#insc-nome")?.focus(), 0);
  };

  // O popup abre em qualquer estado. Com vagas: coleta e leva ao pagamento.
  // Sem vagas: coleta para a lista da próxima edição. Lead nunca se perde.
  $$("[data-cta]").forEach((btn) => {
    btn.addEventListener("click", (ev) => {
      ev.preventDefault();
      abrir(btn);
    });
  });

  $("[data-modal-fechar]", modal)?.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (ev) => {
    if (ev.target === modal) modal.close();
  });

  form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    const dados = new FormData(form);
    const nome = String(dados.get("nome") || "").trim();
    const zap = String(dados.get("whatsapp") || "").replace(/\D/g, "");
    const aceite = dados.get("consent") === "on";
    let invalido = false;

    erro("nome", ""); erro("whatsapp", ""); erro("consent", "");

    if (nome.length < 2) { erro("nome", "Digite seu primeiro nome."); invalido = true; }
    if (zap.length < 10 || zap.length > 15) { erro("whatsapp", "Digite um WhatsApp válido, com DDD."); invalido = true; }
    if (!aceite) { erro("consent", "Confirme para continuar."); invalido = true; }
    if (invalido) return;

    const lote = loteAtual();
    registrarLead({
      page: "pagina-3-evento",
      timestamp: new Date().toISOString(),
      nome,
      whatsapp: zap,
      consent: "sim",
      evento: CONFIG.nomeEvento,
      edicao: CONFIG.edicao,
      data: CONFIG.data,
      lote: lote.nome,
      preco: lote.preco,
      ctaOrigin: origemCta,
      origin: document.referrer || "direto",
      url: window.location.href,
      ...getUtms(),
    });

    const destino = vendendo() ? (lote.link || "").trim() : "";
    if (destino) {
      if (nota) nota.textContent = "Abrindo o pagamento...";
      window.setTimeout(() => window.open(destino, "_blank", "noopener"), 350);
      window.setTimeout(() => modal.close(), 900);
    } else if (nota) {
      nota.textContent = vendendo()
        ? "Recebi seus dados. A Jéssica entra em contato para confirmar a vaga."
        : "Pronto. Você entra na lista e é avisada primeiro.";
      form.reset();
    }
  });
}

/* --- boot ----------------------------------------------------------------- */

document.documentElement.classList.add("has-js");

document.addEventListener("DOMContentLoaded", () => {
  preencherCampos();
  aplicarEstado();
  montarAcordeao();
  montarRevelacao();
  montarBarra();
  montarModal();
  $$("[data-ano]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
});
