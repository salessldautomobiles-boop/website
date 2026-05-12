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
 *   cat        {string}   Category: 'SUV' | 'Sedan' | 'Hatchback' | 'MPV'
 *   fuel       {string}   'Petrol' | 'Diesel' | 'CNG' | 'Electric' | 'Petrol/CNG'
 *   trans      {string}   'Automatic' | 'Manual' | 'iMT' | 'CVT' — use '' if unknown, displays as '—'
 *   km         {number}   Odometer reading
 *   price      {number|null} Price in INR (e.g. 1250000 = ₹12.5L), null = Price on Request
 *   badge      {string}   Short label shown on card ('' = no badge)
 *   badgeClass {string}   '' | 'badge-red' | 'badge-dark'
 *   image      {string}   Path to primary car image (relative to HTML files), '' = placeholder
 *   images     {string[]} Additional gallery images (duplicates of image are auto-skipped)
 *   featured   {boolean}  If true, eligible to appear on the home page
 *   desc       {string}   Description shown on the detail page
 *   owners     {number}   Number of previous owners
 *   insurance  {string}   Insurance validity string, e.g. 'Nov 2026', '' = unknown
 *   color      {string}   Colour of the car, '' = unknown
 *   rto        {string}   RTO/registration location, '' = unknown
 */

const SLD_INVENTORY = [
    {
        id: 1,
        name: 'Hyundai Creta | 1.5 MPI MT S+ | 2023',
        year: 2023,
        cat: 'SUV',
        fuel: 'Petrol',
        trans: 'Manual',
        km: 47000,
        price: 1250000,
        badge: 'Featured',
        badgeClass: '',
        image: 'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/main.png',
        images: [
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/1.jpeg',
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/2.jpeg',
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/3.jpeg',
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/4.jpeg',
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/5.jpeg',
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/6.jpeg',
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/7.jpeg',
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/8.jpeg',
            'media/car_images/Hyundai_Creta_1.5_MPI_MT_S_2023/9.jpeg',
        ],
        featured: true,
        desc: 'A well-maintained November 2023 Hyundai Creta 1.5 MPI S+ (Manual), designed for a comfortable and refined driving experience. Powered by a reliable 1.5L petrol engine paired with a smooth manual transmission, it delivers balanced performance along with good fuel efficiency—perfect for both city commutes and highway drives. Owned by a single user, the vehicle has covered 47,000 km and remains in excellent overall condition. The cabin is spacious, comfortable, and feature-rich, making it a great choice for families as well as daily use. An added advantage is the insurance validity till November 2026, ensuring peace of mind and reduced ownership costs.',
        owners: 1,
        insurance: 'Nov 2026',
        color: '',
        rto: '',
    },
    {
        id: 2,
        name: 'KIA Carens | G1.5 iMT Prestige Plus | 2023',
        year: 2023,
        cat: 'MPV',
        fuel: 'Petrol',
        trans: 'iMT',
        km: 42000,
        price: 1095000,
        badge: 'Featured',
        badgeClass: '',
        image: 'media/car_images/KIA_Carens_2023/main.png',
        images: [
            'media/car_images/KIA_Carens_2023/1.png',
            'media/car_images/KIA_Carens_2023/2.jpg',
            'media/car_images/KIA_Carens_2023/3.jpg',
            'media/car_images/KIA_Carens_2023/4.png',
            'media/car_images/KIA_Carens_2023/5.jpeg',
            'media/car_images/KIA_Carens_2023/6.jpeg',
            'media/car_images/KIA_Carens_2023/7.jpeg',
            'media/car_images/KIA_Carens_2023/8.jpeg',
            'media/car_images/KIA_Carens_2023/9.jpeg',
        ],
        featured: true,
        desc: 'A well-maintained 2023 KIA Carens G1.5 iMT Prestige Plus, designed for comfort, practicality, and smooth everyday driving. Powered by a refined petrol engine paired with intelligent manual transmission (iMT), it offers a convenient and efficient driving experience for both city and highway use. Owned by a single user, the vehicle has covered 42,000 km and remains in excellent overall condition with a spacious and feature-rich cabin ideal for family usage.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 3,
        name: 'Maruti Suzuki Swift | VXI AGS | 2021',
        year: 2021,
        cat: 'Hatchback',
        fuel: 'Petrol/CNG',
        trans: 'Automatic',
        km: 64000,
        price: 595000,
        badge: '',
        badgeClass: '',
        image: '',
        images: [],
        featured: false,
        desc: 'A reliable and fuel-efficient 2021 Maruti Suzuki Swift VXI AGS, perfect for daily commutes and city driving. Equipped with an automatic gearbox and dual-fuel Petrol/CNG setup, it offers economical running costs along with smooth performance. Owned by a single user, the car has covered 64,000 km and remains in good overall condition.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 4,
        name: 'Tata Tiago EV | XZ Plus Tech Lux | 2025',
        year: 2025,
        cat: 'Hatchback',
        fuel: 'Electric',
        trans: 'Automatic',
        km: 27000,
        price: 795000,
        badge: 'Electric',
        badgeClass: '',
        image: 'media/car_images/Tata_Tiago_EV_2025/main.png',
        images: [
            'media/car_images/Tata_Tiago_EV_2025/1.png',
            'media/car_images/Tata_Tiago_EV_2025/2.png',
            'media/car_images/Tata_Tiago_EV_2025/3.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/4.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/5.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/6.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/7.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/8.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/9.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/10.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/11.jpeg',
            'media/car_images/Tata_Tiago_EV_2025/12.jpeg',
        ],
        featured: true,
        desc: 'A premium 2025 Tata Tiago EV XZ Plus Tech Lux, offering a modern electric driving experience with impressive practicality and comfort. The vehicle has covered 27,000 km and remains in excellent condition. Packed with advanced features and smooth electric performance, it is an ideal choice for eco-friendly city commuting.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 5,
        name: 'MG Astor | VTI Tech MT Sprint | 2024',
        year: 2024,
        cat: 'SUV',
        fuel: 'Petrol',
        trans: 'Manual',
        km: 9000,
        price: 995000,
        badge: 'Low KM',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A barely-driven 2024 MG Astor VTI Tech MT Sprint, offering premium styling, modern technology, and a comfortable driving experience. Powered by a refined petrol engine paired with a manual transmission, the SUV has covered only 9,000 km and is maintained in excellent condition by its first owner.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 6,
        name: 'Hyundai Alcazar | Prestige Turbo 7 STR MT | 2023',
        year: 2023,
        cat: 'SUV',
        fuel: 'Petrol',
        trans: 'Manual',
        km: 21000,
        price: 500000,            
        badge: '7 Seater',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A spacious and premium 2023 Hyundai Alcazar Prestige Turbo 7-Seater Manual, designed for family comfort and long-distance travel. Powered by a turbo petrol engine with manual transmission, it delivers strong performance along with a refined cabin experience. Owned by a single user, the SUV has covered 21,000 km and remains in excellent condition.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 7,
        name: 'Hyundai i20 | Magna 1.2 Kappa MT | 2023',
        year: 2023,
        cat: 'Hatchback',
        fuel: 'Petrol',
        trans: 'Manual',
        km: 53000,
        price: 595000,
        badge: '',
        badgeClass: '',
        image: '',
        images: [],
        featured: false,
        desc: 'A stylish and practical 2023 Hyundai i20 Magna 1.2 Kappa MT, offering a refined petrol engine and comfortable driving dynamics. Owned by a single user, the vehicle has covered 53,000 km and remains in good condition, making it suitable for daily driving and long journeys alike.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 8,
        name: 'MG Hector | Select Pro | 2024',
        year: 2024,
        cat: 'SUV',
        fuel: 'Petrol',
        trans: '',              // Unknown — renders as '—' in UI
        km: 20000,
        price: 1550000,
        badge: 'Featured',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A feature-loaded 2024 MG Hector Select Pro, known for its spacious cabin, premium comfort, and modern technology features. Powered by a refined petrol engine, the SUV has covered 20,000 km and remains in excellent condition under single ownership. Insurance is valid till September 2027, ensuring added peace of mind.',
        owners: 1,
        insurance: 'Sep 2027',
        color: '',
        rto: '',
    },
    {
        id: 9,
        name: 'Tata Safari | XZ+ 2.0 BS6 | 2021',
        year: 2021,
        cat: 'SUV',
        fuel: 'Diesel',
        trans: '',              // Unknown — renders as '—' in UI
        km: 80000,
        price: 1295000,
        badge: '',
        badgeClass: '',
        image: '',
        images: [],
        featured: false,
        desc: 'A rugged and spacious 2021 Tata Safari XZ+ 2.0 BS6, built for comfort and long-distance touring. Powered by a reliable diesel engine, the SUV has covered 80,000 km and continues to deliver a strong road presence along with a comfortable cabin experience.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 10,
        name: 'Hyundai Creta | 1.5 MPI MT S+ | 2023',
        year: 2023,
        cat: 'SUV',
        fuel: 'Petrol',
        trans: 'Manual',
        km: 47000,
        price: 500000,            
        badge: 'Featured',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A well-maintained November 2023 Hyundai Creta 1.5 MPI MT S+, offering a refined petrol engine with smooth manual transmission for balanced performance and fuel efficiency. Owned by a single user, the SUV has covered 47,000 km and remains in excellent condition. Insurance validity till November 2026 adds further value.',
        owners: 1,
        insurance: 'Nov 2026',
        color: '',
        rto: '',
    },
    {
        id: 11,
        name: 'MG Hector | Sharp Pro CVT | 2024',
        year: 2024,
        cat: 'SUV',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 20000,
        price: 1550000,
        badge: 'Top Model',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A premium 2024 MG Hector Sharp Pro CVT, offering a luxurious cabin, advanced features, and effortless automatic driving comfort. Powered by a refined petrol engine paired with CVT transmission, the SUV has covered 20,000 km and remains in excellent condition. Insurance is valid till July 2027.',
        owners: 1,
        insurance: 'Jul 2027',
        color: '',
        rto: '',
    },
    {
        id: 12,
        name: 'Skoda Slavia | Ambition 1.0 TSI AT | 2022',
        year: 2022,
        cat: 'Sedan',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 34000,
        price: 1525000,
        badge: '',
        badgeClass: '',
        image: '',
        images: [],
        featured: false,
        desc: 'A refined 2022 Skoda Slavia Ambition 1.0 TSI AT, combining elegant styling with turbo petrol performance and smooth automatic transmission. Owned by a single user, the sedan has covered 34,000 km and remains in excellent overall condition.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 13,
        name: 'Volkswagen Virtus | Topline TSI AT | 2022',
        year: 2022,
        cat: 'Sedan',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 29000,
        price: 1295000,
        badge: 'Premium',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A premium 2022 Volkswagen Virtus Topline TSI AT, offering sporty performance, German engineering, and a feature-rich cabin. Powered by a turbo petrol engine with automatic transmission, the sedan has covered 29,000 km and remains in excellent condition under first ownership.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 14,
        name: 'Toyota Innova Crysta | 2.4 G MT 8 STR | 2018',
        year: 2018,
        cat: 'MPV',
        fuel: 'Diesel',
        trans: 'Manual',
        km: 147000,
        price: 1250000,
        badge: '8 Seater',
        badgeClass: '',
        image: '',
        images: [],
        featured: false,
        desc: 'A dependable 2018 Toyota Innova Crysta 2.4 G MT 8-Seater, widely known for reliability, comfort, and long-distance capability. Powered by a durable diesel engine paired with manual transmission, the vehicle has covered 147,000 km and remains in good running condition.',
        owners: 2,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 15,
        name: 'Tata Tiago EV | XZ Plus Tech Lux | 2023',
        year: 2023,
        cat: 'Hatchback',
        fuel: 'Electric',
        trans: 'Automatic',
        km: 42000,
        price: 795000,
        badge: 'Electric',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A feature-packed 2023 Tata Tiago EV XZ Plus Tech Lux, delivering smooth electric performance and modern technology features. The vehicle has covered 42,000 km and remains in excellent condition under single ownership.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 16,
        name: 'Volkswagen Virtus | GT Plus | 2025',
        year: 2025,
        cat: 'Sedan',
        fuel: 'Petrol',
        trans: '',              // Unknown — renders as '—' in UI
        km: 24000,
        price: 1295000,
        badge: 'GT',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A sporty and premium 2025 Volkswagen Virtus GT Plus, offering strong turbo petrol performance with modern styling and advanced features. Owned by a single user, the vehicle has covered 24,000 km and remains in excellent overall condition.',
        owners: 1,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 17,
        name: 'Hyundai i20 | Sportz | 2017',
        year: 2017,
        cat: 'Hatchback',
        fuel: 'Diesel',
        trans: '',           
        km: 62000,
        price: 425000,
        badge: '',
        badgeClass: '',
        image: '',
        images: [],
        featured: false,
        desc: 'A well-kept 2017 Hyundai i20 Sportz Diesel, known for its comfortable cabin, refined driving experience, and fuel-efficient diesel engine. The vehicle has covered 62,000 km, remains in excellent condition, and retains all original components.',
        owners: 2,
        insurance: '',
        color: '',
        rto: '',
    },
    {
        id: 18,
        name: 'Skoda Superb | 1.8 AT | 2015',
        year: 2015,
        cat: 'Sedan',
        fuel: 'Petrol',
        trans: 'Automatic',
        km: 54000,
        price: 522000,
        badge: 'Luxury',
        badgeClass: '',
        image: '',
        images: [],
        featured: true,
        desc: 'A premium Skoda Superb 1.8 AT December 2015 model, offering luxury, comfort, and refined petrol automatic performance. The vehicle has covered approximately 54,000 km and comes with new Michelin Pilot Sport 4 tyres, a new battery, and pending AMC package with one service remaining. Insurance is valid till February 2027.',
        owners: 3,
        insurance: 'Feb 2027',
        color: '',
        rto: '',
    },
];

/* ============================================================
   SHARED HELPERS — used by home.html, shop.html, car_detail.html
   ============================================================ */

/**
 * Format price safely.
 * Handles null, undefined, 0, and '' — all treated as "Price on Request".
 * Examples: 1250000 → '₹12.50L' | 595000 → '₹5.95L' | 85000 → '₹85,000'
 */
function sldFmtPrice(p) {
    if (!p) return 'Price on Request';
    if (p >= 100000) return '₹' + (p / 100000).toFixed(2) + 'L';
    return '₹' + Number(p).toLocaleString('en-IN');
}

/**
 * Format km safely.
 * Example: 47000 → '47,000 km'
 */
function sldFmtKm(k) {
    if (!k && k !== 0) return '—';
    return Number(k).toLocaleString('en-IN') + ' km';
}

/**
 * Build the inner HTML for a car card.
 * Used by home.html, shop.html, and the similar-cars section in car_detail.html.
 * Empty trans is shown as '—' instead of a blank cell.
 */
function sldBuildCard(car, extraClass = '') {
    const imgContent = car.image
        ? `<img src="${car.image}" alt="${car.name}">`
        : `<div class="car-img-inner">CAR IMAGE</div>`;

    const badgeHtml = car.badge
        ? `<div class="car-badge ${car.badgeClass || ''}">${car.badge}</div>`
        : '';

    // FIX: show '—' when transmission is unknown/empty
    const transDisplay = car.trans || '—';

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
        <div class="spec-item"><div class="spec-val">${transDisplay}</div><div class="spec-key">Trans</div></div>
      </div>
      <div class="car-footer">
        <div class="car-price">${sldFmtPrice(car.price)}</div>
        <button class="car-cta" onclick="event.preventDefault();event.stopPropagation();window.location.href='car_detail.html?id=${car.id}'">View Details</button>
      </div>
    </div>`;
}

/**
 * Shared custom cursor logic.
 * Call once after DOM is ready: sldInitCursor()
 */
function sldInitCursor() {
    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;
    document.documentElement.classList.add('sld-cursor-active');
    let mx = 0, my = 0, rx = 0, ry = 0;
    document.addEventListener('mousemove', e => {
        mx = e.clientX;
        my = e.clientY;
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
 * Shared scroll-reveal observer.
 * Call once after DOM is ready: sldInitReveal()
 */
function sldInitReveal() {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add('visible');
                obs.unobserve(e.target);
            }
        });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
}
