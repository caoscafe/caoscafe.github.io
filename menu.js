// Menú de Caos Café — un solo lugar para precios y textos en español e inglés.
// Precios tomados del POS (oct 2026). Para cambiar un precio, cámbialo aquí:
// aplica en los dos idiomas.
//
// Cada producto: { name: "Nombre" | { es, en }, price: "$95", desc?: { es, en } }

window.CAOS_MENU = [
  {
    id: "cafe",
    tab: { es: "Café", en: "Coffee" },
    cards: [
      {
        title: { es: "Clásicos", en: "Classics" },
        items: [
          { name: "Espresso", price: "$60" },
          { name: "Americano", price: "$65" },
          { name: "Macchiato", price: "$70" },
          { name: "Cortado", price: "$70",
            desc: { es: "Mitad café, mitad leche.", en: "Half espresso, half milk." } },
          { name: "Flat White", price: "$75" },
        ],
      },
      {
        title: { es: "Con leche", en: "With milk" },
        items: [
          { name: "Cappuccino", price: "$75" },
          { name: "Latte", price: "$80" },
          { name: "Mocha", price: "$95",
            desc: { es: "Espresso, leche y chocolate.", en: "Espresso, milk and chocolate." } },
          { name: "Nola Latte", price: "$95",
            desc: { es: "Latte con cacao nibs.", en: "Latte with cacao nibs." } },
          { name: "La Ramera", price: "$95" },
        ],
      },
      {
        title: { es: "Fríos", en: "Iced" },
        items: [
          { name: "Cold Brew", price: "$90" },
          { name: "Cold Brew Tonic", price: "$95",
            desc: { es: "Cold brew con tónica y jugo de naranja.", en: "Cold brew with tonic water and orange juice." } },
          { name: "Mace Tonic", price: "$95",
            desc: { es: "Cold brew, tónica y nuestro jarabe de macis.", en: "Cold brew, tonic water and our house mace syrup." } },
          { name: "Frappé", price: "$105",
            desc: { es: "Incluye sabor a elegir.", en: "Includes a flavor of your choice." } },
        ],
      },
    ],
  },
  {
    id: "especiales",
    tab: { es: "Especiales", en: "Specials" },
    cards: [
      {
        title: { es: "De la casa", en: "House specials" },
        items: [
          { name: "Escandaloso", price: "$95",
            desc: { es: "Latte shake con leche de avena y un toque de sal. Miel de abeja, agave o maple.",
                    en: "Oat milk latte shake with a pinch of salt. Choose honey, agave or maple." } },
          { name: "Dirty Chai", price: "$95",
            desc: { es: "Chai especiado con espresso y leche.", en: "Spiced chai with espresso and milk." } },
        ],
      },
      {
        title: { es: "De temporada", en: "Seasonal" },
        items: [
          { name: { es: "Latte Sésamo", en: "Sesame Latte" }, price: "$105",
            desc: { es: "Latte con jarabe de sésamo negro y cold foam de queso crema.",
                    en: "Latte with black sesame syrup and cream cheese cold foam." } },
          { name: { es: "Latte Zanahoria", en: "Carrot Latte" }, price: "$105",
            desc: { es: "Jarabe de zanahoria especiado, leche y cold foam de queso crema.",
                    en: "Spiced carrot syrup, milk and cream cheese cold foam." } },
          { name: { es: "Cardamomo", en: "Cardamom" }, price: "$95" },
          { name: "Hojicha Latte", price: "$95" },
        ],
      },
    ],
  },
  {
    id: "sincafe",
    tab: { es: "Sin café", en: "No coffee" },
    cards: [
      {
        title: { es: "Matcha y té", en: "Matcha & tea" },
        items: [
          { name: "Matcha Latte", price: "$105" },
          { name: { es: "Té Matcha", en: "Matcha Tea" }, price: "$75" },
          { name: "Chai Latte", price: "$80",
            desc: { es: "Chai especiado con leche.", en: "Spiced chai with milk." } },
          { name: { es: "Té", en: "Tea" }, price: "$65" },
        ],
      },
      {
        title: { es: "Algo más", en: "Something else" },
        items: [
          { name: "Chocolate", price: "$80",
            desc: { es: "Chocolate con leche.", en: "Chocolate with milk." } },
          { name: { es: "Soda Italiana", en: "Italian Soda" }, price: "$65" },
          { name: "Rusa", price: "$70" },
          { name: { es: "Agua mineral", en: "Sparkling water" }, price: "$40" },
          { name: "Lechita", price: "$60" },
        ],
      },
      {
        title: { es: "Extras para tu bebida", en: "Drink add-ons" },
        items: [
          { name: { es: "Espresso extra", en: "Extra shot" }, price: "+$30" },
          { name: "Cold Foam", price: "+$20",
            desc: { es: "Espuma fría de queso crema.", en: "Cream cheese cold foam." } },
          { name: { es: "Sabor", en: "Flavor" }, price: "+$15" },
        ],
      },
    ],
  },
  {
    id: "comida",
    tab: { es: "Comida", en: "Food" },
    cards: [
      {
        title: { es: "Sandwiches", en: "Sandwiches" },
        items: [
          { name: "Sandwich Caos", price: "$230",
            desc: { es: "Pan de masa madre, jamón de pavo, mozzarella, pesto, tomate cherry y arúgula.",
                    en: "Sourdough, turkey ham, mozzarella, pesto, cherry tomatoes and arugula." } },
          { name: "Lorenz", price: "$260",
            desc: { es: "Focaccia, prosciutto, mozzarella, pesto, tomate deshidratado, arúgula y glaseado balsámico.",
                    en: "Focaccia, prosciutto, mozzarella, pesto, sun-dried tomatoes, arugula and balsamic glaze." } },
          { name: "Caprese", price: "$230",
            desc: { es: "Focaccia, mozzarella, pesto, tomate cherry y glaseado balsámico.",
                    en: "Focaccia, mozzarella, pesto, cherry tomatoes and balsamic glaze." } },
          { name: "Fico", price: "$290",
            desc: { es: "Focaccia, prosciutto, mascarpone, mermelada de higo y miel.",
                    en: "Focaccia, prosciutto, mascarpone, fig jam and honey." } },
          { name: "Salame e Zucchini", price: "$260",
            desc: { es: "Focaccia, salami genoa, burrata, zucchini caramelizado y tomate deshidratado.",
                    en: "Focaccia, Genoa salami, burrata, caramelized zucchini and sun-dried tomatoes." } },
          { name: "Veggie", price: "$230",
            desc: { es: "Focaccia, hummus, mozzarella, zucchini caramelizado, tomate cherry y arúgula.",
                    en: "Focaccia, hummus, mozzarella, caramelized zucchini, cherry tomatoes and arugula." } },
        ],
      },
      {
        title: { es: "Toast y extras", en: "Toast & add-ons" },
        items: [
          { name: "Toast Sprott", price: "$175",
            desc: { es: "Pan de masa madre, aguacate, hummus, tomate cherry, cebolla curtida y arúgula.",
                    en: "Sourdough, avocado, hummus, cherry tomatoes, pickled onion and arugula." } },
          { name: { es: "Huevo extra", en: "Add egg" }, price: "+$25" },
          { name: { es: "Proteína o queso doble", en: "Extra protein or double cheese" }, price: "+$60" },
        ],
      },
    ],
  },
  {
    id: "postres",
    tab: { es: "Postres", en: "Desserts" },
    cards: [
      {
        title: { es: "Postres", en: "Desserts" },
        items: [
          { name: { es: "Galleta Betty", en: "Betty Cookie" }, price: "$65",
            desc: { es: "Galleta de chispas de chocolate, receta de la abuela Betty.",
                    en: "Chocolate chip cookie, Grandma Betty's recipe." } },
          { name: { es: "Galleta Chocolate Doble", en: "Double Chocolate Cookie" }, price: "$65",
            desc: { es: "Galleta de chocolate con chispas de chocolate.", en: "Chocolate cookie with chocolate chips." } },
          { name: { es: "Galleta Pistache", en: "Pistachio Cookie" }, price: "$75",
            desc: { es: "Galleta con crema de pistache y nuez.", en: "Cookie with pistachio cream and walnuts." } },
          { name: { es: "Bolitas de Nuez", en: "Pecan Snowballs" }, price: "1 × $15 / 3 × $40",
            desc: { es: "Nuez pecana, mantequilla y azúcar glass.", en: "Pecans, butter and powdered sugar." } },
        ],
      },
      {
        title: { es: "Para acompañar", en: "Pair it with" },
        note: {
          es: "Tus postres favoritos junto a café de especialidad, matcha o algo frío para tomarte el tiempo con calma.",
          en: "Your favorite dessert with specialty coffee, matcha or something cold — take your time.",
        },
        items: [],
      },
    ],
  },
  {
    id: "merch",
    tab: { es: "Merch", en: "Merch" },
    cards: [
      {
        title: { es: "Merch", en: "Merch" },
        items: [
          { name: { es: "Tazas", en: "Mugs" }, price: "$450" },
          { name: { es: "Gorras", en: "Caps" }, price: "$380" },
          { name: "Stickers", price: "$20" },
          { name: { es: "Vasitos 1 y 2 oz", en: "Small cups (1 & 2 oz)" }, price: "$150" },
        ],
      },
      {
        title: { es: "Café para casa", en: "Coffee to take home" },
        items: [
          { name: { es: "Café 250 g", en: "Coffee 250 g" }, price: "$325",
            desc: { es: "El mismo café que servimos en barra.", en: "The same coffee we brew at the bar." } },
          { name: { es: "Café 500 g", en: "Coffee 500 g" }, price: "$650" },
        ],
      },
    ],
  },
];

window.renderCaosMenu = function (lang) {
  const t = (v) => (typeof v === "string" ? v : v[lang] || v.es);
  const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const tabsEl = document.getElementById("menuTabs");
  const panelsEl = document.getElementById("menuPanels");
  if (!tabsEl || !panelsEl) return;

  const activeId = (tabsEl.querySelector(".tab-btn.active") || {}).dataset?.tab || window.CAOS_MENU[0].id;

  tabsEl.innerHTML = window.CAOS_MENU.map((s) =>
    `<button class="tab-btn${s.id === activeId ? " active" : ""}" data-tab="${s.id}">${esc(t(s.tab))}</button>`
  ).join("");

  panelsEl.innerHTML = window.CAOS_MENU.map((s) => `
    <div class="menu-panel${s.id === activeId ? " active" : ""}" id="${s.id}">
      <div class="menu-grid">
        ${s.cards.map((c) => `
          <div class="menu-card">
            <h3>${esc(t(c.title))}</h3>
            <div class="menu-list">
              ${c.items.map((i) => `
                <div class="menu-item">
                  <div class="menu-topline"><span>${esc(t(i.name))}</span><span>${esc(i.price)}</span></div>
                  ${i.desc ? `<div class="menu-desc">${esc(t(i.desc))}</div>` : ""}
                </div>`).join("")}
              ${c.note ? `<div class="menu-item"><div class="menu-desc">${esc(t(c.note))}</div></div>` : ""}
            </div>
          </div>`).join("")}
      </div>
    </div>`).join("");

  tabsEl.querySelectorAll(".tab-btn").forEach((button) => {
    button.addEventListener("click", () => {
      tabsEl.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
      panelsEl.querySelectorAll(".menu-panel").forEach((p) => p.classList.remove("active"));
      button.classList.add("active");
      document.getElementById(button.dataset.tab).classList.add("active");
    });
  });
};
