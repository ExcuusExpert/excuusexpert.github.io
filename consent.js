/* Toestemming voor advertenties (Google AdSense)
   - Zonder toestemming wordt er GEEN advertentiescript van Google geladen.
   - De keuze wordt in de browser bewaard (localStorage) en kan altijd worden gewijzigd
     via de link "Advertentie-instellingen" onderaan de pagina. */
(function () {
  "use strict";

  var ADSENSE_CLIENT = "ca-pub-7016523155337156";
  var STORAGE_KEY = "excuusExpertConsent";
  var adsLoaded = false;

  function readChoice() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      return data && typeof data.ads === "boolean" ? data.ads : null;
    } catch (e) { return null; }
  }

  function saveChoice(ads) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify({ ads: ads, ts: Date.now() })); } catch (e) { /* geen opslag */ }
  }

  function loadAds() {
    if (adsLoaded) return;
    adsLoaded = true;
    var script = document.createElement("script");
    script.async = true;
    script.crossOrigin = "anonymous";
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + ADSENSE_CLIENT;
    document.head.appendChild(script);

    // Vaste advertentieblokken op de onderwerp-pagina's activeren
    var slots = document.querySelectorAll("ins.adsbygoogle");
    for (var i = 0; i < slots.length; i++) {
      if (slots[i].getAttribute("data-adsbygoogle-status")) continue;
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (e) { /* advertentie mislukt */ }
    }
  }

  function removeBanner() {
    var banner = document.getElementById("consentBanner");
    if (banner) banner.remove();
  }

  function choose(ads) {
    var hadAds = adsLoaded;
    saveChoice(ads);
    removeBanner();
    if (ads) {
      loadAds();
    } else if (hadAds) {
      // Een al geladen advertentiescript kun je niet "uitladen": ververs de pagina.
      window.location.reload();
    }
  }

  function showBanner() {
    if (document.getElementById("consentBanner")) return;
    var banner = document.createElement("div");
    banner.id = "consentBanner";
    banner.className = "consent-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Advertenties en privacy");
    banner.innerHTML =
      '<p class="consent-text"><strong>Advertenties?</strong> ExcuusExpert is gratis en wordt betaald met advertenties van Google. ' +
      'Daarvoor gebruikt Google cookies en vergelijkbare technieken. Zonder jouw toestemming laden we geen advertenties. ' +
      'Ben je jonger dan 16? Kies dan &ldquo;Weigeren&rdquo; of vraag het aan een ouder of verzorger. ' +
      '<a href="privacy.html">Lees onze privacyverklaring</a>.</p>' +
      '<div class="consent-actions">' +
      '<button type="button" class="consent-btn" data-choice="no">Weigeren</button>' +
      '<button type="button" class="consent-btn" data-choice="yes">Accepteren</button>' +
      '</div>';
    banner.addEventListener("click", function (event) {
      var button = event.target.closest("button[data-choice]");
      if (!button) return;
      choose(button.getAttribute("data-choice") === "yes");
    });
    document.body.appendChild(banner);
  }

  // Voor de link "Advertentie-instellingen" in de voettekst
  window.openConsentSettings = function () { showBanner(); };

  function start() {
    var choice = readChoice();
    if (choice === true) loadAds();
    else if (choice === null) showBanner();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
