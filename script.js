// Ruim oude Service Workers op (uit de tijd van de verwijderde zoekpagina). Mag weg zodra niemand er nog een heeft.
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.getRegistrations().then(function(registrations) {
    registrations.forEach(function(registration) { registration.unregister(); });
  }).catch(function() {});
}

/* -----------------------------
   HAMBURGER MENU LOGICA
----------------------------- */
function toggleMenu() {
  const navMenu = document.getElementById("navMenu");
  const hamburgerIcon = document.getElementById("hamburgerIcon");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  if (navMenu) {
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");
    if (hamburgerIcon) hamburgerIcon.className = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
    if (hamburgerBtn) hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
  }
}

// Menu sluiten als je ergens anders klikt
document.addEventListener("click", (event) => {
  const navMenu = document.getElementById("navMenu");
  if (!navMenu || !navMenu.classList.contains("active")) return;
  if (navMenu.contains(event.target)) return;
  if (event.target.closest && event.target.closest("#hamburgerBtn")) return;
  toggleMenu();
});

// Escape sluit het menu en alle popups
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const navMenu = document.getElementById("navMenu");
  if (navMenu && navMenu.classList.contains("active")) toggleMenu();
  ["submitModal", "profileModal"].forEach((id) => {
    const modal = document.getElementById(id);
    if (modal && modal.style.display && modal.style.display !== "none") modal.style.display = "none";
  });
});

// Kopieert tekst; werkt ook als de moderne klembord-API niet beschikbaar is
async function copyText(text) {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    console.warn("Klembord-API mislukt, fallback wordt gebruikt:", error);
  }
  try {
    const helper = document.createElement("textarea");
    helper.value = text;
    helper.setAttribute("readonly", "");
    helper.style.cssText = "position:fixed;top:-1000px;opacity:0;";
    document.body.appendChild(helper);
    helper.select();
    const ok = document.execCommand("copy");
    document.body.removeChild(helper);
    return ok;
  } catch (error) {
    return false;
  }
}

/* -----------------------------
   SMOES DATABASE
----------------------------- */
const SMOEZEN_URL = "smoezen.json?v=7.5";
let database = null;
let databasePromise = null;

// Laadt de vaste smoezen pas als ze nodig zijn (houdt script.js klein en snel)
function laadDatabase() {
  if (database) return Promise.resolve(database);
  if (!databasePromise) {
    databasePromise = fetch(SMOEZEN_URL)
      .then((response) => {
        if (!response.ok) throw new Error("smoezen.json status " + response.status);
        return response.json();
      })
      .then((data) => { database = data; return data; })
      .catch((error) => { databasePromise = null; throw error; });
  }
  return databasePromise;
}

// Alvast op de achtergrond ophalen zodra de browser even niets te doen heeft
(window.requestIdleCallback || ((cb) => setTimeout(cb, 1500)))(() => { laadDatabase().catch(() => {}); });

/* -----------------------------
   STRENGHEID BEPALEN
----------------------------- */
function bepaalGroep(strengheid) {
  if (strengheid <= 2) return "1-2";
  if (strengheid <= 4) return "3-4";
  if (strengheid <= 6) return "5-6";
  if (strengheid <= 8) return "7-8";
  return "9-10";
}

/* -----------------------------
   ELEMENTEN UIT HTML
----------------------------- */
const slider = document.getElementById("strengheid");
const waarde = document.getElementById("strengheidWaarde");
const knop = document.getElementById("generateButton");
const resultaat = document.getElementById("result");
const resultaatTekst = document.getElementById("resultText");
const shareBtn = document.getElementById("shareBtn");
const copyBtn = document.getElementById("copyBtn");
const probleemSelect = document.getElementById("probleem");
const customTopicField = document.getElementById("customTopicField");
const customTopicInput = document.getElementById("customTopic");
const generatorStatus = document.getElementById("generatorStatus");
const profileModal = document.getElementById("profileModal");
const profileAvatarBtn = document.getElementById("profileAvatarBtn");
const profileAvatarInitials = document.getElementById("profileAvatarInitials");
const profileForm = document.getElementById("profileForm");
const profileNameInput = document.getElementById("profileName");
const profilePremiumCodeInput = document.getElementById("profilePremiumCode");
const profileStatus = document.getElementById("profileStatus");
const historyList = document.getElementById("historyList");
const historyEmpty = document.getElementById("historyEmpty");
const profileStorageKey = "excuusExpertLocalProfile";
const historyStorageKey = "excuusExpertExcuseHistory";

function readLocalData(key, fallback) {
  try {
    const savedValue = localStorage.getItem(key);
    return savedValue ? JSON.parse(savedValue) : fallback;
  } catch {
    return fallback;
  }
}

function writeLocalData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

let localProfile = readLocalData(profileStorageKey, { name: "", premiumCode: "" });
if (!localProfile || typeof localProfile !== "object") {
  localProfile = { name: "", premiumCode: "" };
}
localProfile.name = typeof localProfile.name === "string" ? localProfile.name : "";
localProfile = {
  name: localProfile.name,
  premiumCode: typeof localProfile.premiumCode === "string" ? localProfile.premiumCode : ""
};
writeLocalData(profileStorageKey, localProfile); // wist oude eigen API-sleutels uit de browser


let excuseHistory = readLocalData(historyStorageKey, []);
if (!Array.isArray(excuseHistory)) excuseHistory = [];

function updateProfileView() {
  const initials = Array.from(localProfile.name.trim()).slice(0, 2).join("").toUpperCase() || "?";
  profileAvatarInitials.textContent = initials;
  profileAvatarBtn.setAttribute(
    "aria-label",
    localProfile.name ? `Profiel van ${localProfile.name} openen` : "Lokaal profiel aanmaken"
  );
  profileNameInput.value = localProfile.name;
  profilePremiumCodeInput.value = localProfile.premiumCode;
}

function openProfileModal() {
  updateProfileView();
  profileStatus.textContent = "";
  profileStatus.classList.remove("profile-status-ok");
  profileModal.style.display = "flex";
  profileNameInput.focus();
}

function closeProfileModalDirect() {
  profileModal.style.display = "none";
}

function closeProfileModal(event) {
  if (event.target === profileModal) closeProfileModalDirect();
}

profileAvatarBtn.addEventListener("click", openProfileModal);

profileForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localProfile = {
    name: profileNameInput.value.trim(),
    premiumCode: profilePremiumCodeInput.value.trim().toUpperCase()
  };

  if (writeLocalData(profileStorageKey, localProfile)) {
    sessionStorage.removeItem("excuusExpertGroqApiKey");
    updateProfileView();
    profileStatus.classList.add("profile-status-ok");
    profileStatus.textContent = "✅ Profiel opgeslagen!";
  } else {
    profileStatus.classList.remove("profile-status-ok");
    profileStatus.textContent = "Opslaan is niet gelukt. Controleer de opslaginstellingen van je browser.";
  }
});

document.getElementById("clearProfileBtn").addEventListener("click", () => {
  if (!window.confirm("Profiel en premiumcode van dit apparaat verwijderen? Je geschiedenis blijft bewaard.")) return;
  localProfile = { name: "", premiumCode: "" };
  localStorage.removeItem(profileStorageKey);
  sessionStorage.removeItem("excuusExpertGroqApiKey");
  updateProfileView();
  profileStatus.classList.remove("profile-status-ok");
  profileStatus.textContent = "Profiel verwijderd. Je geschiedenis is bewaard.";
});

function renderExcuseHistory() {
  historyList.replaceChildren();
  historyEmpty.hidden = excuseHistory.length > 0;

  excuseHistory.forEach((item) => {
    const listItem = document.createElement("li");
    const button = document.createElement("button");
    const topic = document.createElement("span");
    const text = document.createElement("span");
    const date = document.createElement("time");

    button.className = "history-entry";
    button.type = "button";
    topic.className = "history-topic";
    topic.textContent = item.topic;
    text.className = "history-excuse";
    text.textContent = item.excuse;
    date.className = "history-date";
    date.dateTime = item.createdAt;
    date.textContent = new Date(item.createdAt).toLocaleString("nl-NL", {
      dateStyle: "short",
      timeStyle: "short"
    });

    button.append(topic, text, date);
    button.addEventListener("click", () => {
      resultaatTekst.textContent = item.excuse;
      resultaat.style.display = "block";
      resultaat.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    listItem.append(button);
    historyList.append(listItem);
  });
}

function addExcuseToHistory(topic, excuse) {
  excuseHistory.unshift({ topic, excuse, createdAt: new Date().toISOString() });
  excuseHistory = excuseHistory.slice(0, 30);
  writeLocalData(historyStorageKey, excuseHistory);
  renderExcuseHistory();
}

document.getElementById("clearHistoryBtn").addEventListener("click", () => {
  if (!excuseHistory.length || !window.confirm("Je hele smoesgeschiedenis wissen?")) return;
  excuseHistory = [];
  localStorage.removeItem(historyStorageKey);
  renderExcuseHistory();
});

updateProfileView();
renderExcuseHistory();

if (probleemSelect && customTopicField && customTopicInput) {
  probleemSelect.addEventListener("change", () => {
    const isCustom = probleemSelect.value === "custom";
    customTopicField.hidden = !isCustom;
    customTopicInput.required = isCustom;
    if (isCustom) customTopicInput.focus();
  });
}

/* -----------------------------
   SLIDER EVENTS
----------------------------- */
if (slider && waarde) {
  slider.addEventListener("input", function () {
    waarde.textContent = slider.value;
  });
}

/* -----------------------------
   EIGEN SMOES VIA ONZE API (Cloudflare Worker)
----------------------------- */
// Vul hier de URL van jouw Worker in nadat je hem hebt aangemaakt:
const EXCUSE_API_URL = "https://excuusexpert-api.hagedoornhessel.workers.dev";

// Anoniem apparaat-ID: bepaalt je 5 gratis smoezen per dag (niet je IP-adres, dus ook op school)
function getDeviceId() {
  const key = "excuusExpertDeviceId";
  try {
    const bestaand = localStorage.getItem(key);
    if (bestaand && /^[A-Za-z0-9_-]{16,64}$/.test(bestaand)) return bestaand;
  } catch (error) { /* opslag geblokkeerd */ }

  const nieuw = (window.crypto && crypto.randomUUID)
    ? crypto.randomUUID()
    : Array.from({ length: 4 }, () => Math.random().toString(36).slice(2, 10)).join("");
  try { localStorage.setItem(key, nieuw); } catch (error) { /* alleen voor deze sessie */ }
  return nieuw;
}

// Optionele onzichtbare beveiligingscontrole (Cloudflare Turnstile).
// Laat leeg om uit te zetten. Vul je "site key" in nadat je de Worker-secret TURNSTILE_SECRET hebt ingesteld.
const TURNSTILE_SITE_KEY = "";
let turnstileWidgetId = null;
let turnstileScriptPromise = null;
let turnstilePending = null;

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve();
  if (!turnstileScriptPromise) {
    turnstileScriptPromise = new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.onload = () => resolve();
      script.onerror = () => { turnstileScriptPromise = null; reject(new Error("turnstile script")); };
      document.head.appendChild(script);
    });
  }
  return turnstileScriptPromise;
}

async function getTurnstileToken() {
  if (!TURNSTILE_SITE_KEY) return "";
  await loadTurnstileScript();
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { turnstilePending = null; reject(new Error("turnstile timeout")); }, 20000);
    turnstilePending = {
      resolve: (token) => { clearTimeout(timer); resolve(token); },
      reject: (error) => { clearTimeout(timer); reject(error); }
    };
    if (turnstileWidgetId === null) {
      const holder = document.createElement("div");
      holder.id = "turnstileHolder";
      document.body.appendChild(holder);
      turnstileWidgetId = window.turnstile.render(holder, {
        sitekey: TURNSTILE_SITE_KEY,
        execution: "execute",
        appearance: "interaction-only",
        callback: (token) => { if (turnstilePending) turnstilePending.resolve(token); },
        "error-callback": () => { if (turnstilePending) turnstilePending.reject(new Error("turnstile error")); }
      });
    } else {
      window.turnstile.reset(turnstileWidgetId);
    }
    window.turnstile.execute(turnstileWidgetId);
  });
}

function apiError(message) {
  const error = new Error(message);
  error.isApiError = true;
  return error;
}

async function generateExcuse(topic, strictness) {
  if (EXCUSE_API_URL.includes("JOUW-NAAM")) {
    throw apiError("De smoes-server is nog niet ingesteld. Vul EXCUSE_API_URL in script.js in.");
  }

  let turnstileToken = "";
  try {
    turnstileToken = await getTurnstileToken();
  } catch (error) {
    console.error("Beveiligingscontrole mislukt:", error);
    throw apiError("De beveiligingscontrole is mislukt. Ververs de pagina en probeer het opnieuw.");
  }

  const response = await fetch(EXCUSE_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, strictness, premiumCode: localProfile.premiumCode, deviceId: getDeviceId(), turnstileToken })
  });
  const data = await response.json().catch(() => ({}));

  if (response.status === 429 && data.error === "slow") {
    throw apiError("Rustig aan! Wacht een paar seconden voordat je opnieuw een smoes maakt.");
  }
  if (response.status === 403 && data.error === "captcha") {
    throw apiError("De beveiligingscontrole is mislukt. Ververs de pagina en probeer het opnieuw.");
  }
  if (response.status === 422 && data.error === "refused") {
    throw apiError("Dit onderwerp kan ik niet gebruiken. Kies een ander onderwerp. Je smoes wordt hierbij niet afgeschreven.");
  }
  if (response.status === 429 && data.error === "ipcap") {
    throw apiError("Via dit netwerk zijn vandaag al heel veel eigen smoezen gemaakt. Probeer het morgen opnieuw.");
  }
  if (response.status === 429 && data.error === "limit") {
    throw apiError(data.premium
      ? "Je dagelijkse premium-limiet is bereikt. Probeer het morgen opnieuw."
      : data.codeExpired
        ? `Je premiumcode is verlopen (die is 3 weken geldig) en je ${data.limit} gratis eigen smoezen van vandaag zijn op. Vraag een nieuwe code aan via Snapchat.`
        : `Je hebt vandaag je ${data.limit} gratis eigen smoezen gebruikt. Wil je er meer? Voeg een premiumcode toe in je profiel (vraag er een via Snapchat).`);
  }
  if (response.status === 503) throw apiError("De AI is op dit moment even vol (de dagelijkse limiet is bereikt). Probeer het over een poosje of morgen opnieuw. Je gratis smoezen worden hierbij niet afgeschreven.");
  if (!response.ok || typeof data.excuse !== "string") {
    throw apiError("Er ging iets mis bij het maken van je smoes. Probeer het opnieuw.");
  }
  return data;
}

/* -----------------------------
   SMOES GENEREREN & COOLDOWN
----------------------------- */
let vorigeIndex = -1;

// Link vanaf een onderwerp-pagina (bv. /?onderwerp=te-laat) kiest het onderwerp alvast
const ONDERWERP_MAP = {
  "te-laat": "Te laat",
  "huiswerk-vergeten": "Huiswerk vergeten",
  "proefwerk-niet-geleerd": "Proefwerk niet geleerd",
  "boek-vergeten": "Boek vergeten",
  "te-weinig-tijd": "Te weinig tijd gehad"
};
const onderwerpParam = new URLSearchParams(window.location.search).get("onderwerp");
if (probleemSelect && ONDERWERP_MAP[onderwerpParam]) probleemSelect.value = ONDERWERP_MAP[onderwerpParam];

// Smoes tonen met een korte "typemachine"-animatie
let typeTimer = null;
function toonSmoes(tekst) {
  clearInterval(typeTimer);
  resultaatTekst.dataset.full = tekst;
  resultaat.style.display = "block";
  resultaat.classList.remove("pop");
  void resultaat.offsetWidth;
  resultaat.classList.add("pop");

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || tekst.length < 2) {
    resultaatTekst.textContent = tekst;
    return;
  }
  const stap = Math.max(1, Math.ceil(tekst.length / 45));
  let i = 0;
  resultaatTekst.textContent = "";
  typeTimer = setInterval(() => {
    i += stap;
    resultaatTekst.textContent = tekst.slice(0, i);
    if (i >= tekst.length) clearInterval(typeTimer);
  }, 16);
}

// Leuk label bij de strengheid-schuif
const strengheidLabel = document.getElementById("strengheidLabel");
function updateStrengheidLabel() {
  if (!strengheidLabel || !slider) return;
  const v = Number(slider.value);
  strengheidLabel.textContent = v <= 2 ? "superchill 😎" : v <= 4 ? "relaxed 🙂" : v <= 6 ? "gemiddeld 😐" : v <= 8 ? "streng 😬" : "bikkelhard 😈";
}
if (slider) { slider.addEventListener("input", updateStrengheidLabel); updateStrengheidLabel(); }

// Anti-spam: na elke smoes moet je even wachten voor de volgende
const KNOP_TEKST = "✨ Genereer mijn smoes";
const COOLDOWN_VAST_MS = 2000;   // vaste onderwerpen
const COOLDOWN_AI_MS = 8000;     // eigen onderwerp (AI)
const COOLDOWN_FOUT_MS = 3000;   // na een mislukte poging
let cooldownTot = 0;
let cooldownTimer = null;

function startCooldown(ms) {
  cooldownTot = Date.now() + ms;
  clearInterval(cooldownTimer);
  knop.disabled = true;

  const tick = () => {
    const over = Math.ceil((cooldownTot - Date.now()) / 1000);
    if (over <= 0) {
      clearInterval(cooldownTimer);
      knop.disabled = false;
      knop.textContent = KNOP_TEKST;
      return;
    }
    knop.textContent = `Even wachten (${over}s)`;
  };
  tick();
  cooldownTimer = setInterval(tick, 250);
}

if (knop) {
  knop.addEventListener("click", async function () {
    if (Date.now() < cooldownTot) return; // nog aan het wachten
    const selectedTopic = probleemSelect.value;
    const topic = selectedTopic === "custom" ? customTopicInput.value.trim() : selectedTopic;
    const strictness = Number(slider.value);

    if (!topic) {
      generatorStatus.textContent = "Vul eerst een onderwerp in.";
      customTopicInput.focus();
      return;
    }

    if (selectedTopic !== "custom") {
      let db;
      try {
        db = await laadDatabase();
      } catch (error) {
        console.error("Smoezen laden mislukt:", error);
        generatorStatus.textContent = "De smoezen konden niet worden geladen. Controleer je internet en probeer het opnieuw.";
        return;
      }
      const groep = bepaalGroep(strictness);
      const opties = db[selectedTopic][groep];
      let willekeurigeIndex;
      do {
        willekeurigeIndex = Math.floor(Math.random() * opties.length);
      } while (willekeurigeIndex === vorigeIndex && opties.length > 1);

      vorigeIndex = willekeurigeIndex;
      toonSmoes(opties[willekeurigeIndex]);
      addExcuseToHistory(selectedTopic, opties[willekeurigeIndex]);
      generatorStatus.textContent = "";
      startCooldown(COOLDOWN_VAST_MS);
      return;
    }

    knop.disabled = true;
    knop.textContent = "Even bedenken...";
    generatorStatus.textContent = "Een smoes op maat wordt gemaakt...";
    let cooldownMs = COOLDOWN_AI_MS;

    try {
      const data = await generateExcuse(topic, strictness);
      toonSmoes(data.excuse);
      addExcuseToHistory(topic, data.excuse);
      if (data.codeBlocked) {
        generatorStatus.textContent = "Er zijn vanaf dit netwerk te veel ongeldige premiumcodes geprobeerd. Premium werkt hier vandaag even niet; de gratis limiet is gebruikt.";
      } else if (data.codeInvalid) {
        generatorStatus.textContent = "Deze premiumcode is niet geldig, dus de gratis limiet is gebruikt.";
      } else if (data.codeExpired) {
        generatorStatus.textContent = `Je premiumcode is verlopen (3 weken geldig), dus de gratis limiet is gebruikt. Nog ${data.remaining} van ${data.limit} eigen smoezen vandaag.`;
      } else if (data.premium) {
        const dagen = data.premiumDaysLeft;
        generatorStatus.textContent = `Nog ${data.remaining} van ${data.limit} eigen smoezen vandaag (premium, nog ${dagen} ${dagen === 1 ? "dag" : "dagen"} geldig).`;
      } else {
        generatorStatus.textContent = `Nog ${data.remaining} van ${data.limit} eigen smoezen vandaag.`;
      }
    } catch (error) {
      console.error("Smoes-aanvraag mislukt:", error);
      cooldownMs = COOLDOWN_FOUT_MS;
      generatorStatus.textContent = error.isApiError
        ? error.message
        : "Verbinding mislukt. Controleer je internet en probeer het opnieuw.";
    } finally {
      startCooldown(cooldownMs);
    }
  });
}

/* -----------------------------
   SMOES KOPIËREN
----------------------------- */
if (copyBtn) {
  copyBtn.addEventListener("click", async () => {
    const smoesTekst = resultaatTekst ? (resultaatTekst.dataset.full || resultaatTekst.textContent) : "";
    
    if (!smoesTekst) {
      const origineleTekst = copyBtn.textContent;
      copyBtn.textContent = "⚠️ Niks om te kopiëren!";
      setTimeout(() => {
        copyBtn.textContent = origineleTekst;
      }, 2000);
      return;
    }

    const gelukt = await copyText(smoesTekst);
    const origineleTekst = copyBtn.textContent;
    copyBtn.textContent = gelukt ? "✅ Gekopieerd!" : "⚠️ Kopiëren mislukt";
    setTimeout(() => {
      copyBtn.textContent = origineleTekst;
    }, 2000);
  });
}

/* -----------------------------
   SMOES DELEN
----------------------------- */
if (shareBtn) {
  shareBtn.addEventListener("click", async () => {
    const smoesTekst = resultaatTekst ? (resultaatTekst.dataset.full || resultaatTekst.textContent) : "";

    if (!smoesTekst) {
      const origineleShareTekst = shareBtn.textContent;
      shareBtn.textContent = "⚠️ Genereer eerst een smoes!";
      setTimeout(() => {
        shareBtn.textContent = origineleShareTekst;
      }, 2000);
      return;
    }

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'ExcuusExpert Smoes',
          text: smoesTekst,
          url: window.location.href,
        });
      } catch (err) {
        console.log("Delen geannuleerd");
      }
    } else {
      const gelukt = await copyText(smoesTekst);
      const origineleShareTekst = shareBtn.textContent;
      shareBtn.textContent = gelukt ? "✅ Gekopieerd!" : "⚠️ Kopiëren mislukt";
      setTimeout(() => {
        shareBtn.textContent = origineleShareTekst;
      }, 2000);
    }
  });
}

/* ================================
   INZEND MODAL LOGICA
================================= */
function openSubmitModal() {
  document.getElementById('submitModal').style.display = 'flex';
}

function closeSubmitModalDirect() {
  document.getElementById('submitModal').style.display = 'none';
}

function closeSubmitModal(event) {
  if (event.target.id === 'submitModal') {
    closeSubmitModalDirect();
  }
}

async function handleFormSubmit(event) {
  event.preventDefault(); // voorkomt dat je naar de Formspree-pagina wordt gestuurd
  const form = document.getElementById('excuseForm');
  const status = document.getElementById('submitStatus');
  const button = document.getElementById('submitBtn');
  const original = button ? button.textContent : "";

  if (button) { button.disabled = true; button.textContent = "Versturen..."; }
  if (status) status.textContent = "";

  try {
    const response = await fetch(form.action, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: new FormData(form)
    });
    if (!response.ok) throw new Error("Formspree status " + response.status);
    form.reset();
    if (status) status.textContent = "Bedankt! Je smoes is ingestuurd. 🎉";
    setTimeout(() => {
      closeSubmitModalDirect();
      if (status) status.textContent = "";
    }, 1800);
  } catch (error) {
    console.error("Insturen mislukt:", error);
    if (status) status.textContent = "Versturen mislukt. Probeer het later opnieuw.";
  } finally {
    if (button) { button.disabled = false; button.textContent = original; }
  }
}
/* -----------------------------
   LICHT / DONKER MODUS LOGICA
----------------------------- */
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  const isLight = document.body.classList.contains("light-mode");
  
  const themeIcon = document.getElementById("themeIcon");
  if (themeIcon) {
    themeIcon.className = isLight ? "fa-solid fa-moon" : "fa-solid fa-sun";
  }
  
  localStorage.setItem("themePreference", isLight ? "light" : "dark");
}

// Opgeslagen voorkeur laden zodra de pagina laadt
document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("themePreference") === "light") {
    document.body.classList.add("light-mode");
    const themeIcon = document.getElementById("themeIcon");
    if (themeIcon) {
      themeIcon.className = "fa-solid fa-moon";
    }
  }
});