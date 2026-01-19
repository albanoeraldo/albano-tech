(function () {
  const phoneE164 = "5547984212803"; // +55 47 98421-2803
  const defaultMsg =
    "Olá! Vim pelo site do Albano Tech. Quero um orçamento.\n" +
    "Equipamento: PC/Notebook —\n" +
    "Problema: —\n" +
    "Cidade/bairro: —";

  function waLink(message) {
    const text = encodeURIComponent(message);
    return `https://wa.me/${phoneE164}?text=${text}`;
  }

  function bindCta(id, message) {
    const el = document.getElementById(id);
    if (!el) return;
    el.setAttribute("href", waLink(message));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");
  }

  // Bind CTAs
  bindCta("ctaHeader", defaultMsg);
  bindCta("ctaHero", defaultMsg);
  bindCta("ctaCard", defaultMsg);
  bindCta("ctaStrip", defaultMsg);
  bindCta("ctaContact", defaultMsg);
  bindCta("fabWhatsapp", defaultMsg);
  bindCta("ctaServicos", defaultMsg);
  bindCta("ctaAtendimento", defaultMsg);
  bindCta("ctaPhone", defaultMsg);

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
