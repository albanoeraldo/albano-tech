(function () {
  const phoneE164 = "5547984212803"; // +55 47 98421-2803
  const defaultMsg =
    "Olá! Vim pelo site da Albano Tech. Quero um orçamento.\n" +
    "Equipamento: PC/Notebook —\n" +
    "Problema: —\n" +
    "Cidade/bairro: —";

  function waHttp(message) {
    return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
  }

  function openWhatsApp(message) {
    const enc = encodeURIComponent(message);
    const ua = navigator.userAgent || "";

    // ANDROID (abre o app via intent)
    if (/Android/i.test(ua)) {
      const intent =
        `intent://send?phone=${phoneE164}&text=${enc}` +
        `#Intent;scheme=whatsapp;package=com.whatsapp;end`;

      window.location.href = intent;

      // fallback para web, se o intent falhar
      setTimeout(() => {
        window.location.href = waHttp(message);
      }, 900);

      return;
    }

    // iOS (abre o app via esquema)
    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.href = `whatsapp://send?phone=${phoneE164}&text=${enc}`;

      // fallback para web, se não abrir
      setTimeout(() => {
        window.location.href = waHttp(message);
      }, 900);

      return;
    }

    // Desktop / outros
    window.location.href = waHttp(message);
  }

  function bindCta(id, message) {
    const el = document.getElementById(id);
    if (!el) return;

    // deixa um href válido como fallback
    el.setAttribute("href", waHttp(message));

    el.addEventListener("click", function (e) {
      e.preventDefault();
      openWhatsApp(message);
    });
  }

  // IDs que existem no seu index atual
  ["ctaHeader", "ctaHero", "ctaServicos", "ctaContact", "ctaPhone", "fabWhatsapp"].forEach((id) =>
    bindCta(id, defaultMsg)
  );

  // Ano no footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();