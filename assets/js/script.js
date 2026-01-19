(function () {
  const phoneE164 = "5547984212803"; // +55 47 98421-2803
  const defaultMsg =
    "Olá! Vim pelo site da Albano Tech. Quero um orçamento.\n" +
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

    // mantém um href válido (bom pra acessibilidade e fallback)
    el.setAttribute("href", waLink(message));

    // NÃO usar target _blank (causa bloqueio em mobile/IG)
    el.removeAttribute("target");
    el.removeAttribute("rel");

    // garante o clique no mobile
    el.addEventListener("click", function (e) {
      e.preventDefault();
      window.location.href = waLink(message);
    });
  }

  // Bind CTAs (apenas os que existem no seu index atual)
  bindCta("ctaHeader", defaultMsg);
  bindCta("ctaHero", defaultMsg);
  bindCta("ctaServicos", defaultMsg);
  bindCta("ctaContact", defaultMsg);
  bindCta("ctaPhone", defaultMsg);
  bindCta("fabWhatsapp", defaultMsg);

  // Se você voltar a usar esses IDs no futuro, pode descomentar:
  // bindCta("ctaAtendimento", defaultMsg);
  // bindCta("ctaCard", defaultMsg);
  // bindCta("ctaStrip", defaultMsg);

  // Year in footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();