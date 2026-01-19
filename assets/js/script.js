(function () {
  const phoneE164 = "5547984212803";
  const defaultMsg =
    "Olá! Vim pelo site do Albano Tech. Quero um orçamento.\n" +
    "Equipamento: PC/Notebook —\n" +
    "Problema: —\n" +
    "Cidade/bairro: —";

  function waLink(message) {
    return (
      "https://api.whatsapp.com/send?phone=" +
      phoneE164 +
      "&text=" +
      encodeURIComponent(message)
    );
  }

  function bindCta(id, message) {
    const el = document.getElementById(id);
    if (!el) return;

    el.setAttribute("href", waLink(message));

    el.removeAttribute("target");
    el.removeAttribute("rel");

    el.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = waLink(message);
    });
  }

  // Bind CTAs 
  bindCta("ctaHeader", defaultMsg);
  bindCta("ctaHero", defaultMsg);
  bindCta("ctaServicos", defaultMsg);
  bindCta("ctaContact", defaultMsg);
  bindCta("ctaPhone", defaultMsg);
  bindCta("fabWhatsapp", defaultMsg);

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();