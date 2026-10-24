// Español / English para cafecaos.com
// - Idioma: ?lang=es|en en la URL > elección guardada > idioma del celular/navegador
//   (si el teléfono está en español → español; cualquier otro idioma → inglés).
// - El texto en español vive en el HTML; aquí solo va la traducción al inglés.
// - Elementos traducibles: data-i18n="clave" (contenido) y
//   data-i18n-attr="atributo:clave;atributo:clave" (alt, aria-label, title...).

(function () {
  const EN = {
    "meta.title": "Caos Café | San José del Cabo",
    "meta.description": "Caos Café is a cozy spot in San José del Cabo to meet, work, relax and enjoy great coffee, food and desserts.",

    "nav.toggle": "Menu",
    "nav.toggleLabel": "Open menu",
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.products": "Drinks & food",
    "nav.about": "About us",
    "nav.visit": "Visit us",
    "nav.invoice": "Invoicing",
    "brand.logoAlt": "Caos Café logo",

    "hero.tag": "Your café in San José del Cabo",
    "hero.title": "A place to meet, work and enjoy great coffee",
    "hero.text": "Caos is a comfortable, beautiful and human space to take a break, catch up, get on with your day — and come back for that feeling of being exactly where you want to be.",
    "hero.directions": "Get directions",
    "hero.hours": "Monday to Friday 7:00 am – 6:30 pm · Saturday 8:00 am – 6:00 pm",
    "hero.imgAlt": "Inside Caos Café",
    "hero.cardTitle": "A space to stay",
    "hero.cardText": "Coffee, food, desserts and an atmosphere made for working, socializing or simply hanging out.",

    "info.coffeeTitle": "Great coffee",
    "info.coffeeText": "Classics, specials and an experience cared for from the cup to the space.",
    "info.workTitle": "Work comfortably",
    "info.workText": "A place to get out of the house or office and feel at ease while you get things done.",
    "info.foodTitle": "Food & desserts",
    "info.foodText": "Options made to keep you company all day, from something light to something indulgent.",
    "info.designTitle": "Design with intention",
    "info.designText": "A japandi look with an artistic, experimental side — warm but polished.",

    "menu.eyebrow": "Our menu",
    "menu.title": "Drinks, food and something to come back for.",
    "menu.intro": "A menu made for meetings, work, long breaks and good times.",
    "menu.prices": "Prices in Mexican pesos (MXN).",

    "products.eyebrow": "Seen and craved",
    "products.title": "Drinks, food and house details.",
    "products.carouselLabel": "Product image carousel",
    "products.drinks": "Drinks",
    "products.drinksText": "Specialty coffee, matcha, hojicha and drinks for every pace of the day.",
    "products.drinksAlt": "Coffee drink",
    "products.food": "Food",
    "products.foodText": "Sandwiches, toast and options made for your break or workday.",
    "products.foodAlt": "Café food",
    "products.desserts": "Desserts",
    "products.dessertsText": "Little treats to bring you back again and again.",
    "products.dessertsAlt": "Desserts and the café space",
    "products.merch": "Merch",
    "products.merchText": "Mugs, caps, stickers and little things from the Caos universe.",
    "products.merchAlt": "Caos merch",
    "products.prev": "Previous image",
    "products.next": "Next image",
    "worlds.eyebrow": "Three worlds",
    "worlds.intro": "We have everything to satisfy your cravings, with homemade recipes and a few different things you won't find anywhere else.",
    "worlds.drinks": "<strong>Drinks</strong><br />Coffee, matcha, seasonal drinks and the odd drink you'll only find at Caos.",
    "worlds.food": "<strong>Food</strong><br />Sandwiches, toast and the best desserts.",
    "worlds.merch": "<strong>Merch</strong><br />Mugs, caps, stickers and small cups.",

    "about.eyebrow": "About us",
    "about.title": "Even in chaos there is order.",
    "about.p1": "Caos was born from the need for a meeting place — somewhere to hang out, work without being at home or the office, and find a calm space to relax and enjoy good coffee.",
    "about.p2": "The name <strong>CAOS</strong> (chaos) comes from the idea that what looks negative isn't always so. There is order in disorder, and being different isn't bad: it's part of what makes us better, unique and human.",
    "about.p3": "We believe coffee isn't just a drink but a tool — or an excuse — to bring people together, keep each other company and be part of everyday life. We care about the quality of our coffee and food to offer the best possible experience.",
    "about.p4": "The space is curated to feel beautiful, comfortable and alive: a place where we ourselves would want to spend time, and one that makes you want to come back.",
    "about.imgAlt": "Inside the café",

    "visit.eyebrow": "Visit us",
    "visit.title": "Come for coffee, stay a while.",
    "visit.intro": "We're at Plaza del Cabo in San José del Cabo. Come work, meet up or simply slow down.",
    "visit.address": "Address",
    "visit.hours": "Hours",
    "visit.hoursText": "Monday to Friday 7:00 am – 6:30 pm<br />Saturday 8:00 am – 6:00 pm",
    "visit.phone": "Phone / WhatsApp",
    "visit.write": "Message us",
    "visit.mapTitle": "Caos Café map",

    "footer.tagline": "Good coffee, good company and a place to stay.",
    "whatsapp.label": "Open WhatsApp",
    "lang.switchLabel": "Ver en español",
  };

  const STORAGE_KEY = "caos_lang";
  const ES = {}; // se llena con el texto original del HTML

  function detect() {
    const param = new URLSearchParams(location.search).get("lang");
    if (param === "es" || param === "en") return param;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === "es" || saved === "en") return saved;
    } catch (e) {}
    const langs = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || "es"];
    return String(langs[0]).toLowerCase().startsWith("es") ? "es" : "en";
  }

  function snapshotSpanish() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      ES[el.dataset.i18n] = el.innerHTML;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        ES[key] = el.getAttribute(attr);
      });
    });
    ES["meta.title"] = document.title;
    ES["meta.description"] = document.querySelector('meta[name="description"]').content;
    ES["lang.switchLabel"] = "View in English";
  }

  function apply(lang) {
    const dict = lang === "en" ? EN : ES;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = dict[el.dataset.i18n];
      if (v != null) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
      el.dataset.i18nAttr.split(";").forEach((pair) => {
        const [attr, key] = pair.split(":");
        if (dict[key] != null) el.setAttribute(attr, dict[key]);
      });
    });
    document.title = dict["meta.title"];
    document.querySelector('meta[name="description"]').content = dict["meta.description"];

    const btn = document.getElementById("langToggle");
    if (btn) {
      btn.textContent = lang === "en" ? "ES" : "EN";
      btn.setAttribute("aria-label", dict["lang.switchLabel"]);
      btn.title = dict["lang.switchLabel"];
    }
    if (window.renderCaosMenu) window.renderCaosMenu(lang);
    window.CAOS_LANG = lang;
  }

  snapshotSpanish();
  apply(detect());

  document.getElementById("langToggle")?.addEventListener("click", () => {
    const next = window.CAOS_LANG === "en" ? "es" : "en";
    try { localStorage.setItem(STORAGE_KEY, next); } catch (e) {}
    apply(next);
  });
})();
