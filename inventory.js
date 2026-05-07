/**
 * inventory.js — Single source of truth for SLD Automobiles car data.
 *
 * To add/edit/remove a car:
 *   - Update this file only.
 *   - home.html automatically shows the first 3 cars marked featured:true
 *   - shop.html shows all cars with full filtering
 *
 * Fields:
 *   id         {number}   Unique ID
 *   name       {string}   Display name (make + model + variant)
 *   year       {number}   Model year
 *   cat        {string}   Category: 'SUV' | 'Sedan' | 'Hatchback' | 'Compact SUV'
 *   fuel       {string}   'Petrol' | 'Diesel' | 'CNG'
 *   trans      {string}   'Automatic' | 'Manual'
 *   km         {number}   Odometer reading
 *   price      {number}   Price in INR (e.g. 1250000 = ₹12.5L)
 *   badge      {string}   Short label shown on card ('' = no badge)
 *   badgeClass {string}   '' | 'badge-red' | 'badge-dark'
 *   image      {string}   Path to car image (relative to HTML files)
 *   featured   {boolean}  If true, eligible to appear on the home page
 */

const SLD_INVENTORY = [
    {
        id: 1,
        name: 'Hyundai Creta SX+',
        year: 2022,
        cat: 'SUV',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 28000,
        price: 1250000,
        badge: 'Featured',
        badgeClass: '',
        image: 'media/car_images/creta/ChatGPT-Image-May-5-2026-03_46_56-PM.png',
        featured: true,
    },
    {
        id: 2,
        name: 'Honda City ZX CVT',
        year: 2023,
        cat: 'Sedan',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 12000,
        price: 1475000,
        badge: 'New In',
        badgeClass: '',
        image: '',
        featured: true,
    },
    {
        id: 3,
        name: 'Maruti Swift ZXI+',
        year: 2021,
        cat: 'Hatchback',
        fuel: 'Petrol',
        trans: 'Manual',
        km: 35000,
        price: 680000,
        badge: 'Hot Deal',
        badgeClass: 'badge-red',
        image: '',
        featured: true,
    },
    {
        id: 4,
        name: 'Tata Nexon XZ+',
        year: 2022,
        cat: 'Compact SUV',
        fuel: 'Diesel',
        trans: 'Manual',
        km: 42000,
        price: 920000,
        badge: 'Diesel',
        badgeClass: 'badge-dark',
        image: '',
        featured: false,
    },
    {
        id: 5,
        name: 'Kia Seltos GTX+',
        year: 2023,
        cat: 'SUV',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 8000,
        price: 1680000,
        badge: 'Almost New',
        badgeClass: '',
        image: '',
        featured: false,
    },
    {
        id: 6,
        name: 'Maruti Baleno Alpha',
        year: 2022,
        cat: 'Hatchback',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 22000,
        price: 740000,
        badge: '',
        badgeClass: '',
        image: '',
        featured: false,
    },
    {
        id: 7,
        name: 'Toyota Innova 2.4G',
        year: 2020,
        cat: 'SUV',
        fuel: 'Diesel',
        trans: 'Manual',
        km: 65000,
        price: 1580000,
        badge: '',
        badgeClass: '',
        image: '',
        featured: false,
    },
    {
        id: 8,
        name: 'Honda Amaze VX CVT',
        year: 2021,
        cat: 'Sedan',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 30000,
        price: 820000,
        badge: '',
        badgeClass: '',
        image: '',
        featured: false,
    },
    {
        id: 9,
        name: 'Hyundai Venue SX',
        year: 2022,
        cat: 'Compact SUV',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 18000,
        price: 1020000,
        badge: 'Popular',
        badgeClass: '',
        image: '',
        featured: false,
    },
    {
        id: 10,
        name: 'Maruti Dzire VXI',
        year: 2021,
        cat: 'Sedan',
        fuel: 'CNG',
        trans: 'Manual',
        km: 48000,
        price: 620000,
        badge: 'CNG',
        badgeClass: 'badge-dark',
        image: '',
        featured: false,
    },
    {
        id: 11,
        name: 'Hyundai i20 Asta',
        year: 2023,
        cat: 'Hatchback',
        fuel: 'Petrol',
        trans: 'Manual',
        km: 9000,
        price: 870000,
        badge: 'New In',
        badgeClass: '',
        image: '',
        featured: false,
    },
    {
        id: 12,
        name: 'Mahindra Scorpio N',
        year: 2023,
        cat: 'SUV',
        fuel: 'Diesel',
        trans: 'Manual',
        km: 15000,
        price: 1920000,
        badge: 'Premium',
        badgeClass: '',
        image: '',
        featured: false,
    },
];

/**
 * Shared helpers — used by both pages.
 */

/** Format price → ₹12.50L or ₹99,000 */
function sldFmtPrice(p) {
    if (p >= 100000) return '₹' + (p / 100000).toFixed(2) + 'L';
    return '₹' + p.toLocaleString('en-IN');
}

/** Format km → 28,000 km */
function sldFmtKm(k) {
    return k.toLocaleString('en-IN') + ' km';
}

/**
 * Build the inner HTML for a car card.
 * Works on both home.html and shop.html since they share the same CSS classes.
 */
function sldBuildCard(car, extraClass = '') {
    const imgContent = car.image
        ? `<img src="${car.image}" alt="${car.name}">`
        : `<div class="car-img-inner">CAR IMAGE</div>`;

    const badgeHtml = car.badge
        ? `<div class="car-badge ${car.badgeClass}">${car.badge}</div>`
        : '';

    return `
    <div class="car-top-line"></div>
    <div class="car-img">
      ${imgContent}
      ${badgeHtml}
      <div class="car-wishlist" onclick="event.preventDefault();this.textContent=this.textContent==='🤍'?'❤️':'🤍'">🤍</div>
    </div>
    <div class="car-body">
      <div class="car-cat">${car.cat}</div>
      <div class="car-name">${car.name}</div>
      <div class="car-specs">
        <div class="spec-item"><div class="spec-val">${car.year}</div><div class="spec-key">Year</div></div>
        <div class="spec-item"><div class="spec-val">${sldFmtKm(car.km)}</div><div class="spec-key">Mileage</div></div>
        <div class="spec-item"><div class="spec-val">${car.fuel}</div><div class="spec-key">Fuel</div></div>
        <div class="spec-item"><div class="spec-val">${car.trans}</div><div class="spec-key">Trans</div></div>
      </div>
      <div class="car-footer">
        <div class="car-price">${sldFmtPrice(car.price)}</div>
        <div class="car-cta">View Details</div>
      </div>
    </div>`;
}

/**
 * Shared cursor logic — call once after DOM ready.
 */
function sldInitCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX; my = e.clientY;
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
    });
    (function anim() {
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
        requestAnimationFrame(anim);
    })();
}

/**
 * Shared scroll-reveal observer — call once after DOM ready.
 */
function sldInitReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}