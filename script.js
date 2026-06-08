const products = [
  {
    slug: "mini-bolones-maduro",
    name: "Mini bolones de maduro",
    line: "Tradicionales",
    filter: "tradicionales",
    image: "assets/products/mini-bolones-maduro.jpg",
    description: "El sabor del maduro en un formato práctico y listo en minutos.",
    madeWith: "Plátano maduro",
    ideal: "Retail y food service",
    presentation: "500 g",
    box: "10 kg (20 unidades)",
    production: "10 TM/mes",
    portion: "100 g (3 unidades aprox.)",
    calories: "249,56 kcal",
    prep: "Airfryer, horno convencional o sartén hasta dorar."
  },
  {
    slug: "mini-bolones-verde",
    name: "Mini bolones de verde",
    line: "Tradicionales",
    filter: "tradicionales",
    image: "assets/products/mini-bolones-verde.jpg",
    description: "El sabor tradicional del verde, con queso y textura dorada, listo para compartir.",
    madeWith: "Plátano verde",
    ideal: "Retail y food service",
    presentation: "500 g",
    box: "10 kg (20 unidades)",
    production: "10 TM/mes",
    portion: "100 g (3 unidades aprox.)",
    calories: "159,36 kcal",
    prep: "Airfryer, horno convencional o sartén hasta dorar."
  },
  {
    slug: "pan-yuca",
    name: "Pan de yuca",
    line: "Tradicionales",
    filter: "tradicionales",
    image: "assets/products/pan-yuca.jpg",
    description: "El sabor clásico del pan de yuca en un formato práctico y listo para disfrutar.",
    madeWith: "Almidón de yuca",
    ideal: "Retail y food service",
    presentation: "500 g",
    box: "10 kg (20 unidades)",
    production: "10 TM/mes",
    portion: "100 g (3 unidades aprox.)",
    calories: "262,73 kcal",
    prep: "Airfryer u horno convencional entre 13 y 15 minutos."
  },
  {
    slug: "mini-muchines-yuca",
    name: "Mini muchines de yuca",
    line: "Tradicionales",
    filter: "tradicionales",
    image: "assets/products/mini-muchines-yuca.jpg",
    description: "Crujientes por fuera, suaves por dentro y con el sabor auténtico de la yuca.",
    madeWith: "Yuca",
    ideal: "Retail y food service",
    presentation: "500 g",
    box: "10 kg (20 unidades)",
    production: "10 TM/mes",
    portion: "100 g (4 unidades aprox.)",
    calories: "180,5 kcal",
    prep: "Airfryer, horno convencional o sartén hasta dorar."
  },
  {
    slug: "maria-pipona-verde",
    name: "María Pipona de verde",
    line: "Gourmet",
    filter: "gourmet",
    image: "assets/products/maria-pipona-verde.jpg",
    description: "El sabor auténtico del plátano verde en una propuesta gourmet, práctica y lista para servir.",
    madeWith: "Plátano verde",
    ideal: "Menú gourmet",
    presentation: "400 g",
    box: "10 kg (25 unidades)",
    production: "5 TM/mes",
    portion: "100 g (1 unidad)",
    calories: "159,36 kcal",
    prep: "Airfryer, horno convencional o sartén hasta dorar."
  },
  {
    slug: "maria-pipona-maduro",
    name: "María Pipona de maduro",
    line: "Gourmet",
    filter: "gourmet",
    image: "assets/products/maria-pipona-maduro.jpg",
    description: "El equilibrio perfecto entre dulce y salado en una propuesta gourmet, práctica y lista para servir.",
    madeWith: "Plátano maduro",
    ideal: "Menú gourmet",
    presentation: "400 g",
    box: "10 kg (25 unidades)",
    production: "5 TM/mes",
    portion: "100 g (1 unidad)",
    calories: "249,56 kcal",
    prep: "Airfryer, horno convencional o sartén hasta dorar."
  },
  {
    slug: "muchin-yuca",
    name: "Muchín de yuca",
    line: "Gourmet",
    filter: "gourmet",
    image: "assets/products/muchin-yuca.jpg",
    description: "El sabor tradicional de la yuca en una propuesta gourmet, crujiente por fuera y suave por dentro.",
    madeWith: "Yuca",
    ideal: "Restaurantes",
    presentation: "400 g",
    box: "10 kg (25 unidades)",
    production: "5 TM/mes",
    portion: "80 g (1 unidad)",
    calories: "144,5 kcal",
    prep: "Airfryer, horno convencional o sartén hasta dorar."
  },
  {
    slug: "boccocitos-verde",
    name: "Boccocitos de verde",
    line: "Foodservice",
    filter: "foodservice",
    image: "assets/products/boccocitos-verde.jpg",
    description: "La versatilidad del plátano verde en un formato práctico para cocinas profesionales.",
    madeWith: "Plátano verde",
    ideal: "Retail y food service",
    presentation: "2 kg",
    box: "10 kg (5 unidades)",
    production: "10 TM/mes",
    portion: "100 g (16 unidades aprox.)",
    calories: "146,96 kcal",
    prep: "Freidora industrial a llama media hasta dorar."
  },
  {
    slug: "boccocitos-maduro",
    name: "Boccocitos de maduro",
    line: "Foodservice",
    filter: "foodservice",
    image: "assets/products/boccocitos-maduro.jpg",
    description: "El equilibrio ideal entre dulce y salado en una solución práctica para cocinas profesionales.",
    madeWith: "Plátano maduro",
    ideal: "Retail y food service",
    presentation: "2 kg",
    box: "10 kg (5 unidades)",
    production: "10 TM/mes",
    portion: "100 g (16 unidades aprox.)",
    calories: "292,59 kcal",
    prep: "Freidora industrial a llama media hasta dorar."
  },
  {
    slug: "boccocitos-yuca",
    name: "Boccocitos de yuca",
    line: "Foodservice",
    filter: "foodservice",
    image: "assets/products/boccocitos-yuca.jpg",
    description: "La suavidad tradicional de la yuca en un formato práctico para cocinas profesionales.",
    madeWith: "Yuca",
    ideal: "Restaurantes",
    presentation: "2 kg",
    box: "10 kg (5 unidades)",
    production: "10 TM/mes",
    portion: "100 g (16 unidades aprox.)",
    calories: "159,55 kcal",
    prep: "Freidora industrial a llama media hasta dorar."
  }
];

const prepMethods = {
  retail: [
    { name: "Airfryer", detail: "140°C - 150°C", time: "13-15 min", icon: "◴" },
    { name: "Horno", detail: "140°C - 150°C", time: "13-15 min", icon: "▤" },
    { name: "Sartén", detail: "Llama media", time: "Hasta dorar", icon: "◒" }
  ],
  foodservice: [
    { name: "Freidora industrial", detail: "Llama media", time: "Hasta dorar", icon: "▥" },
    { name: "Servicio", detail: "Ideal para cocina profesional", time: "Listo en minutos", icon: "◷" }
  ]
};

const grid = document.querySelector("#product-grid");
const filters = document.querySelectorAll(".filter");
const weeklyGrid = document.querySelector("#weekly-grid");
const weeklyFeature = document.querySelector("#weekly-feature");
const weeklyFilters = document.querySelectorAll(".weekly-filter");
const weekRange = document.querySelector("#week-range");
const drawer = document.querySelector(".product-drawer");
const drawerContent = document.querySelector(".drawer-content");
const backdrop = document.querySelector(".drawer-backdrop");
const drawerClose = document.querySelector(".drawer-close");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const navProduct = document.querySelector(".nav-product");
const productTrigger = document.querySelector(".product-trigger");
const siteHeader = document.querySelector(".site-header");
const backToTop = document.querySelector(".back-to-top");
const sectionLinks = document.querySelectorAll('.site-nav > a[href^="#"]');
const heroMedia = document.querySelector(".hero-media");
const interactiveCards = ".category-cards article, .product-card, .channel-grid article";
let activeWeeklyProduct = products[0].slug;

function formatWeekRange() {
  const today = new Date();
  const day = today.getDay() || 7;
  const monday = new Date(today);
  monday.setDate(today.getDate() - day + 1);
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const formatter = new Intl.DateTimeFormat("es-EC", { day: "numeric", month: "long" });
  weekRange.textContent = `${formatter.format(monday)} - ${formatter.format(sunday)}`;
}

function productTone(product) {
  if (product.filter === "foodservice") return "Para cocinas profesionales";
  if (product.filter === "gourmet") return "Para elevar el menú";
  return "Para vender y compartir";
}

function renderWeeklyFeature(product) {
  weeklyFeature.innerHTML = `
    <div class="weekly-feature-copy">
      <p>${product.line}</p>
      <h3>${product.name}</h3>
      <span>${product.description}</span>
      <div class="weekly-feature-meta">
        <strong>${product.presentation}</strong>
        <strong>${product.madeWith}</strong>
        <strong>${product.calories}</strong>
      </div>
      <div class="weekly-feature-actions">
        <button type="button" data-product="${product.slug}">Ver ficha interactiva</button>
        <a href="#contacto">Quiero venderlo</a>
      </div>
    </div>
    <div class="weekly-feature-visual">
      <img src="${product.image}" alt="${product.name}">
      <span>${productTone(product)}</span>
    </div>
  `;
}

function renderWeekly(filter = "all") {
  const visible = (filter === "all" ? products : products.filter((product) => product.filter === filter)).slice(0, 6);
  const active = visible.find((product) => product.slug === activeWeeklyProduct) || visible[0] || products[0];
  activeWeeklyProduct = active.slug;
  renderWeeklyFeature(active);
  weeklyGrid.innerHTML = visible.map((product, index) => `
    <button type="button" class="weekly-card ${product.slug === activeWeeklyProduct ? "active" : ""}" data-week-product="${product.slug}" style="--reveal-delay: ${index * 55}ms">
      <img src="${product.image}" alt="">
      <span>${product.line}</span>
      <strong>${product.name}</strong>
      <small>${productTone(product)}</small>
    </button>
  `).join("");
}

function prepareRevealItems(scope = document) {
  const standalone = scope.querySelectorAll(".reveal");
  const grouped = scope.querySelectorAll(".reveal-group > *");
  [...standalone, ...grouped].forEach((element, index) => {
    if (!element.style.getPropertyValue("--reveal-delay")) {
      element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 280)}ms`);
    }
  });
}

function watchRevealItems(scope = document) {
  const revealItems = scope.querySelectorAll(".reveal, .reveal-group > *");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible", "was-visible");
      } else if (entry.target.classList.contains("was-visible")) {
        entry.target.classList.remove("is-visible");
      }
    });
  }, {
    rootMargin: "-10% 0px -12% 0px",
    threshold: 0.08
  });

  revealItems.forEach((element) => observer.observe(element));
}

function renderProducts(filter = "all") {
  const visible = filter === "all" ? products : products.filter((product) => product.filter === filter);
  grid.innerHTML = visible.map((product) => `
    <article class="product-card reveal is-entering" id="producto-${product.slug}" data-category="${product.filter}">
      <button class="product-card-hotspot" type="button" data-card-product="${product.slug}" aria-label="Abrir ficha de ${product.name}"></button>
      <img src="${product.image}" alt="${product.name}">
      <div>
        <small>${product.line}</small>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <span class="product-mini-meta">${product.presentation} · ${product.madeWith}</span>
        <button type="button" data-product="${product.slug}">Explorar ficha</button>
      </div>
    </article>
  `).join("");

  grid.querySelectorAll(".product-card").forEach((card, index) => {
    card.style.setProperty("--reveal-delay", `${Math.min(index * 55, 275)}ms`);
    setTimeout(() => card.classList.remove("is-entering"), 520);
  });

  prepareRevealItems(grid);
  watchRevealItems(grid);
}

function setFilter(filter) {
  filters.forEach((item) => {
    item.classList.toggle("active", item.dataset.filter === filter);
  });
  renderProducts(filter);
}

function openDrawer(slug) {
  const product = products.find((item) => item.slug === slug);
  if (!product) return;
  const related = products
    .filter((item) => item.slug !== product.slug && (item.filter === product.filter || item.madeWith === product.madeWith))
    .slice(0, 3);
  const methods = product.filter === "foodservice" ? prepMethods.foodservice : prepMethods.retail;
  const channelText = product.filter === "foodservice"
    ? "Formato profesional para operación constante, porcionado y alto rendimiento."
    : product.filter === "gourmet"
      ? "Propuesta premium para menús especiales y experiencias de mayor valor."
      : "Formato familiar y versátil para venta retail y consumo práctico.";

  navProduct.classList.remove("open");
  productTrigger.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("open");
  navToggle.setAttribute("aria-expanded", "false");

  drawerContent.innerHTML = `
    <section class="drawer-hero">
      <div class="drawer-visual">
        <img src="${product.image}" alt="${product.name}">
        <span>${product.presentation}</span>
      </div>
      <div class="drawer-intro">
        <p class="drawer-line">${product.line}</p>
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <div class="drawer-actions">
          <a href="#contacto" class="drawer-cta">Cotizar producto</a>
          <button type="button" class="drawer-soft-action" data-copy-product="${product.name}">Copiar nombre</button>
        </div>
      </div>
    </section>

    <section class="drawer-scoreboard" aria-label="Datos rápidos">
      <div><span>Presentación</span><strong>${product.presentation}</strong></div>
      <div><span>Vida útil</span><strong>12 meses</strong></div>
      <div><span>Producción</span><strong>${product.production}</strong></div>
    </section>

    <section class="drawer-tabs" aria-label="Información del producto">
      <div class="drawer-tablist" role="tablist">
        <button type="button" class="drawer-tab active" data-tab="preparacion">Preparación</button>
        <button type="button" class="drawer-tab" data-tab="comercial">Comercial</button>
        <button type="button" class="drawer-tab" data-tab="nutricion">Nutrición</button>
      </div>

      <div class="drawer-panel active" data-panel="preparacion">
        <div class="prep-methods">
          ${methods.map((method, index) => `
            <button type="button" class="prep-card ${index === 0 ? "active" : ""}" data-prep="${index}">
              <span>${method.icon}</span>
              <strong>${method.name}</strong>
              <small>${method.time}</small>
            </button>
          `).join("")}
        </div>
        <div class="prep-detail">
          <span>${methods[0].name}</span>
          <strong>${methods[0].detail}</strong>
          <p>${product.prep}</p>
        </div>
      </div>

      <div class="drawer-panel" data-panel="comercial">
        <div class="drawer-info-grid">
          <div><span>Canal ideal</span><strong>${product.ideal}</strong></div>
          <div><span>Caja</span><strong>${product.box}</strong></div>
          <div><span>Conservación</span><strong>Mantener congelado</strong></div>
          <div><span>Uso recomendado</span><strong>${channelText}</strong></div>
        </div>
      </div>

      <div class="drawer-panel" data-panel="nutricion">
        <div class="nutrition-rings">
          <div><strong>${product.calories}</strong><span>Energía</span></div>
          <div><strong>${product.portion}</strong><span>Porción</span></div>
        </div>
        <p class="drawer-note">Producto sin gluten. Información referencial tomada del catálogo Boccocitos 2026.</p>
      </div>
    </section>

    <section class="drawer-chips" aria-label="Características">
      <button type="button">Listos en minutos</button>
      <button type="button">Hechos con ${product.madeWith.toLowerCase()}</button>
      <button type="button">Sin gluten</button>
      <button type="button">${product.ideal}</button>
    </section>

    <section class="related-products">
      <p>También puede interesarte</p>
      <div>
        ${related.map((item) => `
          <button type="button" data-related-product="${item.slug}">
            <img src="${item.image}" alt="">
            <span>${item.name}</span>
          </button>
        `).join("")}
      </div>
    </section>
  `;
  drawer.classList.add("open");
  backdrop.classList.add("open");
  document.body.classList.add("drawer-open");
  drawer.setAttribute("aria-hidden", "false");
}

function closeDrawer() {
  drawer.classList.remove("open");
  backdrop.classList.remove("open");
  document.body.classList.remove("drawer-open");
  drawer.setAttribute("aria-hidden", "true");
}

renderProducts();
formatWeekRange();
renderWeekly();

filters.forEach((button) => {
  button.addEventListener("click", () => {
    setFilter(button.dataset.filter);
  });
});

weeklyFilters.forEach((button) => {
  button.addEventListener("click", () => {
    weeklyFilters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderWeekly(button.dataset.weekFilter);
  });
});

weeklyGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-week-product]");
  if (!card) return;
  activeWeeklyProduct = card.dataset.weekProduct;
  const activeFilter = document.querySelector(".weekly-filter.active")?.dataset.weekFilter || "all";
  renderWeekly(activeFilter);
});

weeklyFeature.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product]");
  if (button) openDrawer(button.dataset.product);
});

document.querySelectorAll("[data-filter-link]").forEach((link) => {
  link.addEventListener("click", () => {
    setFilter(link.dataset.filterLink);
  });
});

grid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-product], [data-card-product]");
  if (button) {
    openDrawer(button.dataset.product || button.dataset.cardProduct);
  }
});

drawerContent.addEventListener("click", async (event) => {
  const tab = event.target.closest("[data-tab]");
  if (tab) {
    const tabName = tab.dataset.tab;
    drawerContent.querySelectorAll(".drawer-tab").forEach((item) => item.classList.toggle("active", item === tab));
    drawerContent.querySelectorAll(".drawer-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === tabName);
    });
  }

  const prep = event.target.closest("[data-prep]");
  if (prep) {
    const activeProductTitle = drawerContent.querySelector(".drawer-intro h2")?.textContent;
    const activeProduct = products.find((product) => product.name === activeProductTitle);
    const methods = activeProduct?.filter === "foodservice" ? prepMethods.foodservice : prepMethods.retail;
    const method = methods[Number(prep.dataset.prep)];
    drawerContent.querySelectorAll(".prep-card").forEach((item) => item.classList.toggle("active", item === prep));
    const detail = drawerContent.querySelector(".prep-detail");
    detail.innerHTML = `<span>${method.name}</span><strong>${method.detail}</strong><p>${activeProduct.prep}</p>`;
    detail.classList.remove("pulse");
    requestAnimationFrame(() => detail.classList.add("pulse"));
  }

  const related = event.target.closest("[data-related-product]");
  if (related) {
    openDrawer(related.dataset.relatedProduct);
  }

  const copy = event.target.closest("[data-copy-product]");
  if (copy) {
    try {
      await navigator.clipboard.writeText(copy.dataset.copyProduct);
      copy.textContent = "Copiado";
      setTimeout(() => {
        copy.textContent = "Copiar nombre";
      }, 1300);
    } catch {
      copy.textContent = "No se pudo copiar";
    }
  }
});

document.querySelectorAll(".mega-menu a, .strip-track a").forEach((link) => {
  link.addEventListener("click", () => {
    const slug = link.getAttribute("href").replace("#producto-", "");
    setTimeout(() => openDrawer(slug), 250);
    navProduct.classList.remove("open");
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

drawerClose.addEventListener("click", closeDrawer);
backdrop.addEventListener("click", closeDrawer);
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDrawer();
});

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

productTrigger.addEventListener("click", () => {
  const isOpen = navProduct.classList.toggle("open");
  productTrigger.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".site-nav > a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-strip]").forEach((button) => {
  button.addEventListener("click", () => {
    const track = document.querySelector(".strip-track");
    const direction = button.dataset.strip === "right" ? 1 : -1;
    track.scrollBy({ left: direction * 280, behavior: "smooth" });
  });
});

function updateScrollState() {
  const scrolled = window.scrollY > 24;
  const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
  const progress = Math.min(window.scrollY / maxScroll, 1);
  siteHeader.classList.toggle("is-scrolled", scrolled);
  backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.9);
  document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));

  if (heroMedia) {
    heroMedia.style.setProperty("--hero-parallax", `${Math.min(window.scrollY, 900)}px`);
  }
}

function updateActiveNav() {
  const sections = [...sectionLinks]
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);
  const current = sections.reduce((active, section) => {
    const top = section.getBoundingClientRect().top;
    return top <= 130 ? section : active;
  }, sections[0]);

  sectionLinks.forEach((link) => {
    link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
  });
}

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  updateScrollState();
  updateActiveNav();
}, { passive: true });

window.addEventListener("resize", () => {
  updateScrollState();
  updateActiveNav();
}, { passive: true });

setInterval(() => {
  updateScrollState();
  updateActiveNav();
}, 300);

document.addEventListener("pointermove", (event) => {
  const card = event.target.closest(interactiveCards);
  if (!card || window.innerWidth < 820) return;

  const rect = card.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width - 0.5;
  const y = (event.clientY - rect.top) / rect.height - 0.5;
  card.style.transform = `perspective(900px) rotateX(${(-y * 3).toFixed(2)}deg) rotateY(${(x * 4).toFixed(2)}deg) translateY(-4px)`;
});

document.addEventListener("pointerout", (event) => {
  const card = event.target.closest(interactiveCards);
  if (!card) return;
  card.style.transform = "";
});

document.addEventListener("click", (event) => {
  if (!navProduct.contains(event.target)) {
    navProduct.classList.remove("open");
    productTrigger.setAttribute("aria-expanded", "false");
  }
});

prepareRevealItems();
watchRevealItems();
updateScrollState();
updateActiveNav();
