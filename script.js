/* ═══════════════════════════════════════
   LUMIÈRE — script.js
   ═══════════════════════════════════════ */

'use strict';

/* ── 18 Products data ── */
var PRODUCTS = [
  {
    name: 'Single Shell Pearl Pendant Necklace — 925 Sterling Silver',
    img:  'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Stone: natural shell pearl',
      'Style: dainty single pendant',
      'Hypoallergenic, nickel-free'
    ]
  },
  {
    name: 'Korean 925 Silver Freshwater Pearl Bracelet',
    img:  'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Stone: natural freshwater pearls',
      'Style: Korean minimalist',
      'Adjustable chain length'
    ]
  },
  {
    name: 'S925 V-Shape Half Pearl Half Zircon Pendant Necklace',
    img:  'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: S925 sterling silver',
      'Stones: pearl + AAA cubic zirconia',
      'Shape: elegant V pendant',
      'Anti-tarnish finish'
    ]
  },
  {
    name: '925 Silver Princess Cut Zirconia Halo Solitaire Ring',
    img:  'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Stone: princess-cut cubic zirconia',
      'Setting: halo solitaire',
      'Available in multiple sizes'
    ]
  },
  {
    name: 'French Luxury S925 14K Gold-Plated Tassel Zircon Necklace',
    img:  'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: S925 sterling silver',
      'Plating: 14K gold',
      'Stones: clear cubic zirconia',
      'Style: French luxury tassel'
    ]
  },
  {
    name: '925 Sterling Silver Open Ring with Zircon & Pearl',
    img:  'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Stones: zircon + freshwater pearl',
      'Style: open adjustable band',
      'One size fits most'
    ]
  },
  {
    name: 'French Geometric Sterling Silver Colored Zircon Necklace',
    img:  'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Stones: multicolor cubic zirconia',
      'Style: French geometric',
      'Gold-plated clasp'
    ]
  },
  {
    name: '925 Silver Blue Crystal Drop Clavicle Chain Necklace',
    img:  'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Stone: blue crystal drop',
      'Style: delicate clavicle chain',
      'Hypoallergenic, nickel-free'
    ]
  },
  {
    name: 'S925 18K Gold-Plated Blue Zircon Halo Drop Earrings',
    img:  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: S925 sterling silver',
      'Plating: 18K gold',
      'Stone: blue cubic zirconia halo',
      'Style: elegant drop earrings'
    ]
  },
  {
    name: 'Korean 925 Silver Geometric Zircon Earrings — 14K Gold Plated',
    img:  'https://images.unsplash.com/photo-1630009958963-78cc45f2e16d?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Plating: 14K gold',
      'Stones: geometric zirconia set',
      'Style: Korean contemporary'
    ]
  },
  {
    name: 'Korean Luxury Inlaid Zircon Flower Earrings',
    img:  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Stones: inlaid cubic zirconia',
      'Shape: blooming flower',
      'Style: Korean luxury'
    ]
  },
  {
    name: '925 Silver 14K Gold-Plated Long Tassel Zircon Flower Earrings',
    img:  'https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Plating: 14K gold',
      'Stones: zircon flower cluster',
      'Style: long tassel drop'
    ]
  },
  {
    name: '925 Silver Pearl Earrings — 14K Gold Plated',
    img:  'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Plating: 14K gold',
      'Stone: natural shell pearl',
      'Style: timeless classic studs'
    ]
  },
  {
    name: '925 Silver European Geometric Crystal Earrings — 14K Gold',
    img:  'https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Plating: 14K gold',
      'Stones: European crystal cut',
      'Style: geometric statement'
    ]
  },
  {
    name: '925 Silver French Pavé Crystal Earrings — 14K Gold Plated',
    img:  'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Plating: 14K gold',
      'Stones: pavé crystal set',
      'Style: French luxury'
    ]
  },
  {
    name: '925 Sterling Silver Hoop Earrings — Multi-Size, Silver / Gold',
    img:  'https://images.unsplash.com/photo-1630009958963-78cc45f2e16d?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Finish: silver or gold plated',
      'Style: classic hoops',
      'Available in multiple sizes'
    ]
  },
  {
    name: '925 Silver Oval Halo Red / Green Zirconia Earrings',
    img:  'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Stones: red or green zirconia',
      'Setting: oval halo',
      'Hypoallergenic, nickel-free'
    ]
  },
  {
    name: '925 Sterling Silver 14K Gold-Plated Shiny Zircon Wedding Earrings',
    img:  'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80&auto=format&fit=crop',
    details: [
      'Material: 925 sterling silver',
      'Plating: 14K gold',
      'Stones: AAA shiny zirconia',
      'Style: bridal / wedding'
    ]
  }
];

/* ── Pagination state ── */
var PER_PAGE    = 6;
var TOTAL_PAGES = Math.ceil(PRODUCTS.length / PER_PAGE);
var currentPage = 1;

/* ── DOM refs ── */
var grid     = document.getElementById('products-grid');
var btnPrev  = document.getElementById('btn-prev');
var btnNext  = document.getElementById('btn-next');
var pageInfo = document.getElementById('page-info');

/* ── Build one card ── */
function buildCard(product) {
  var li = product.details.map(function(d) {
    return '<li><span class="dot">&#8226;</span><span>' + d + '</span></li>';
  }).join('');

  var card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML =
    '<div class="product-img-wrap">' +
      '<img src="' + product.img + '" alt="' + product.name + '" loading="lazy" class="product-img" />' +
    '</div>' +
    '<div class="product-body">' +
      '<h3 class="product-name">' + product.name + '</h3>' +
      '<p class="details-label">Product details</p>' +
      '<ul class="details-list">' + li + '</ul>' +
      '<div class="product-footer">' +
        '<span class="product-price">Price: 80 SAR</span>' +
      '</div>' +
    '</div>';
  return card;
}

/* ── Render page ── */
function renderPage(page) {
  /* clear */
  while (grid.firstChild) { grid.removeChild(grid.firstChild); }

  var start = (page - 1) * PER_PAGE;
  var slice = PRODUCTS.slice(start, start + PER_PAGE);

  slice.forEach(function(product, i) {
    var card = buildCard(product);
    card.style.transitionDelay = (i * 0.07) + 's';
    grid.appendChild(card);
    /* trigger animation next frame */
    requestAnimationFrame(function() {
      requestAnimationFrame(function() {
        card.classList.add('visible');
      });
    });
  });

  /* update pagination controls */
  pageInfo.textContent = 'Page ' + page + ' of ' + TOTAL_PAGES;
  btnPrev.disabled = (page === 1);
  btnNext.disabled = (page === TOTAL_PAGES);

  /* scroll to section (not on first load) */
  if (page > 1 || currentPage !== page) {
    var sec = document.getElementById('products');
    if (sec) { sec.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  }
}

/* ── Pagination clicks ── */
btnPrev.addEventListener('click', function() {
  if (currentPage > 1) { currentPage--; renderPage(currentPage); }
});
btnNext.addEventListener('click', function() {
  if (currentPage < TOTAL_PAGES) { currentPage++; renderPage(currentPage); }
});

/* ═══════════════════════════════════════
   THEME TOGGLE
   ═══════════════════════════════════════ */
var themeBtn = document.getElementById('theme-toggle');
var iconMoon = document.getElementById('icon-moon');
var iconSun  = document.getElementById('icon-sun');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('lumiere-theme', theme);
  if (theme === 'dark') {
    iconMoon.style.display = 'none';
    iconSun.style.display  = 'block';
  } else {
    iconMoon.style.display = 'block';
    iconSun.style.display  = 'none';
  }
}

(function() {
  var saved = localStorage.getItem('lumiere-theme');
  if (!saved) {
    saved = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  applyTheme(saved);
})();

themeBtn.addEventListener('click', function() {
  var current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ═══════════════════════════════════════
   LANGUAGE TOGGLE  (EN ↔ AR + RTL)
   ═══════════════════════════════════════ */
var langBtn = document.getElementById('lang-toggle');
var lang    = 'en';

var T = {
  'nav-products': { en: 'Products',        ar: 'المنتجات'            },
  'nav-about':    { en: 'About',            ar: 'من نحن'              },
  'nav-contact':  { en: 'Contact',          ar: 'تواصل'               },
  'mnav-products':{ en: 'Products',         ar: 'المنتجات'            },
  'mnav-about':   { en: 'About',            ar: 'من نحن'              },
  'mnav-contact': { en: 'Contact',          ar: 'تواصل'               },
  'hero-eyebrow': { en: 'Curated Luxury',   ar: 'فخامة مختارة بعناية' },
  'hero-title':   { en: 'Accessories that tell your story', ar: 'إكسسوارات تحكي قصتك' },
  'hero-sub':     { en: 'A handpicked edit of fine 925 sterling silver jewelry — pearls, zircons, gold-plated finishes.', ar: 'مجموعة مختارة من مجوهرات الفضة الإسترلينية 925 — لؤلؤ، زركون، وطلاء ذهبي.' },
  'btn-shop':     { en: 'Shop Collection',  ar: 'تسوق المجموعة'       },
  'btn-discover': { en: 'Discover',         ar: 'اكتشف'               },
  'coll-title':   { en: 'The Collection',   ar: 'المجموعة'            },
  'coll-sub':     { en: 'Hand-selected pieces.', ar: 'قطع مختارة يدويًا.' },
  'btn-prev':     { en: 'Previous',         ar: 'السابق'              },
  'btn-next':     { en: 'Next',             ar: 'التالي'              },
  'why-title':    { en: 'Why Lumière',      ar: 'لماذا لوميير'        },
  'f1-title':     { en: 'Authentic',        ar: 'أصالة'               },
  'f1-body':      { en: 'Genuine 925 sterling silver and natural pearls.', ar: 'فضة إسترلينية 925 حقيقية ولؤلؤ طبيعي.' },
  'f2-title':     { en: 'Worldwide',        ar: 'حول العالم'          },
  'f2-body':      { en: 'Fast shipping to your door.', ar: 'شحن سريع إلى باب منزلك.' },
  'f3-title':     { en: 'Guaranteed',       ar: 'مضمون'               },
  'f3-body':      { en: 'Quality guarantee on every order.', ar: 'ضمان الجودة على كل طلب.' },
  'footer-copy':  { en: '© 2026 Lumière. All rights reserved.', ar: '© 2026 لوميير. جميع الحقوق محفوظة.' }
};

function applyLang(l) {
  lang = l;
  var isAr = (l === 'ar');
  document.documentElement.lang = l;
  document.documentElement.dir  = isAr ? 'rtl' : 'ltr';
  langBtn.textContent = isAr ? 'English' : 'العربية';

  /* translate all keyed elements */
  Object.keys(T).forEach(function(id) {
    var el = document.getElementById(id);
    if (el) { el.textContent = T[id][l]; }
  });

  /* translate live product cards (details label + price) */
  document.querySelectorAll('.details-label').forEach(function(el) {
    el.textContent = isAr ? 'تفاصيل المنتج' : 'Product details';
  });
  document.querySelectorAll('.product-price').forEach(function(el) {
    el.textContent = isAr ? 'السعر: ٨٠ ر.س' : 'Price: 80 SAR';
  });

  /* page info */
  pageInfo.textContent = (isAr ? 'صفحة ' : 'Page ') + currentPage +
                         (isAr ? ' من '  : ' of ')  + TOTAL_PAGES;
}

langBtn.addEventListener('click', function() {
  applyLang(lang === 'en' ? 'ar' : 'en');
});

/* ═══════════════════════════════════════
   MOBILE MENU
   ═══════════════════════════════════════ */
var menuBtn  = document.getElementById('menu-toggle');
var mobileNav = document.getElementById('mobile-nav');

menuBtn.addEventListener('click', function() {
  mobileNav.classList.toggle('open');
});

document.querySelectorAll('.mobile-link').forEach(function(a) {
  a.addEventListener('click', function() {
    mobileNav.classList.remove('open');
  });
});

/* ═══════════════════════════════════════
   STICKY HEADER SHADOW
   ═══════════════════════════════════════ */
var siteHeader = document.getElementById('site-header');
window.addEventListener('scroll', function() {
  siteHeader.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(100,70,30,0.12)'
    : 'none';
}, { passive: true });

/* ═══════════════════════════════════════
   INIT
   ═══════════════════════════════════════ */
renderPage(1);
