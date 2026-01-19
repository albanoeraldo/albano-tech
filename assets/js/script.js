(function () {
  const phoneE164 = "5547984212803"; // +55 47 98421-2803
  const defaultMsg =
    "Olá! Vim pelo site da Albano Tech. Quero um orçamento para (formatação/limpeza/upgrade). Meu computador é: ___ e o problema é: ___.";

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

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
