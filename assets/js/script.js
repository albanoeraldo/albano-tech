(function () {
  const phoneE164 = "5547984212803";
  const defaultMsg =
    "Olá! Vim pelo site da Albano Tech. Quero um orçamento.\n" +
    "Equipamento: PC/Notebook —\n" +
    "Problema: —\n" +
    "Cidade/bairro: —";

  function isMobile() {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent || "");
  }

  function waWeb(message) {
    return `https://wa.me/${phoneE164}?text=${encodeURIComponent(message)}`;
  }

  function waIosScheme(message) {
    const enc = encodeURIComponent(message);
    return `whatsapp://send?phone=${phoneE164}&text=${enc}`;
  }

  function waAndroidIntent(message) {
    const enc = encodeURIComponent(message);
    return (
      `intent://send?phone=${phoneE164}&text=${enc}` +
      `#Intent;scheme=whatsapp;package=com.whatsapp;end`
    );
  }

  function openWhatsAppMobile(message) {
    const urlWeb = waWeb(message);
    const ua = navigator.userAgent || "";

    if (/Android/i.test(ua)) {
      window.location.href = waAndroidIntent(message);
      setTimeout(() => (window.location.href = urlWeb), 900);
      return;
    }

    if (/iPhone|iPad|iPod/i.test(ua)) {
      window.location.href = waIosScheme(message);
      setTimeout(() => (window.location.href = urlWeb), 900);
      return;
    }

    window.location.href = urlWeb;
  }

  function bindCta(id, message) {
    const el = document.getElementById(id);
    if (!el) return;

    el.setAttribute("href", waWeb(message));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener noreferrer");

    el.addEventListener("click", function (e) {
      if (!isMobile()) return; 
      e.preventDefault();      
      openWhatsAppMobile(message);
    });
  }

  ["ctaHeader", "ctaHero", "ctaServicos", "ctaContact", "ctaPhone"].forEach((id) =>
    bindCta(id, defaultMsg)
  );

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();