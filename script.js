/* ═══════════════════════════════════════
   LUMIÈRE — FINAL VERSION
   ═══════════════════════════════════════ */

'use strict';

/* ── 32 Products (8 per page × 4 pages) ── */
const PRODUCTS = [
  // Page 1
  { name: 'Single Shell Pearl Pendant Necklace — 925 Sterling Silver', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop' },
  { name: 'Korean 925 Silver Freshwater Pearl Bracelet', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop' },
  { name: 'S925 V-Shape Half Pearl Half Zircon Pendant Necklace', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Silver Princess Cut Zirconia Halo Solitaire Ring', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80&auto=format&fit=crop' },
  { name: 'French Luxury S925 14K Gold-Plated Tassel Zircon Necklace', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Sterling Silver Open Ring with Zircon & Pearl', img: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80&auto=format&fit=crop' },
  { name: 'French Geometric Sterling Silver Colored Zircon Necklace', img: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Silver Blue Crystal Drop Clavicle Chain Necklace', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80&auto=format&fit=crop' },
  
  // Page 2
  { name: 'S925 18K Gold-Plated Blue Zircon Halo Drop Earrings', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80&auto=format&fit=crop' },
  { name: 'Korean 925 Silver Geometric Zircon Earrings — 14K Gold Plated', img: 'https://images.unsplash.com/photo-1630009958963-78cc45f2e16d?w=600&q=80&auto=format&fit=crop' },
  { name: 'Korean Luxury Inlaid Zircon Flower Earrings', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Silver 14K Gold-Plated Long Tassel Zircon Flower Earrings', img: 'https://images.unsplash.com/photo-1601821765780-754fa98637c1?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Silver Pearl Earrings — 14K Gold Plated', img: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Silver European Geometric Crystal Earrings — 14K Gold', img: 'https://images.unsplash.com/photo-1608042314453-ae338d682c93?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Silver French Pavé Crystal Earrings — 14K Gold Plated', img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Sterling Silver Hoop Earrings — Multi-Size, Silver / Gold', img: 'https://images.unsplash.com/photo-1630009958963-78cc45f2e16d?w=600&q=80&auto=format&fit=crop' },
  
  // Page 3
  { name: '925 Silver Oval Halo Red / Green Zirconia Earrings', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80&auto=format&fit=crop' },
  { name: '925 Sterling Silver 14K Gold-Plated Shiny Zircon Wedding Earrings', img: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80&auto=format&fit=crop' },
  { name: 'Minimalist 925 Silver Bar Pendant Necklace', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80&auto=format&fit=crop' },
  { name: 'Vintage 925 Silver Rose Flower Ring', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80&auto=format&fit=crop' },
  { name: 'Elegant 925 Silver Chain Bracelet with Heart Charm', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop' },
  { name: 'Dainty 925 Silver Infinity Necklace', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80&auto=format&fit=crop' },
  { name: 'Classic 925 Silver Stud Earrings with CZ', img: 'https://images.unsplash.com/photo-1620656798579-1984d9e87df7?w=600&q=80&auto=format&fit=crop' },
  { name: 'Modern 925 Silver Geometric Ring', img: 'https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=600&q=80&auto=format&fit=crop' },
  
  // Page 4
  { name: 'Delicate 925 Silver Layered Necklace Set', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&q=80&auto=format&fit=crop' },
  { name: 'Bohemian 925 Silver Turquoise Ring', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80&auto=format&fit=crop' },
  { name: 'Elegant 925 Silver Tennis Bracelet', img: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80&auto=format&fit=crop' },
  { name: 'Romantic 925 Silver Heart Pendant', img: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80&auto=format&fit=crop' },
  { name: 'Statement 925 Silver Cocktail Ring', img: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&q=80&auto=format&fit=crop' },
  { name: 'Vintage 925 Silver Filigree Earrings', img: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80&auto=format&fit=crop' },
  { name: 'Minimalist 925 Silver Cuff Bracelet', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&auto=format&fit=crop' },
  { name: 'Chic 925 Silver Bar Earrings', img: 'https://images.unsplash.com/photo-1630009958963-78cc45f2e16d?w=600&q=80&auto=format&fit=crop' }
];

const PER_PAGE = 8;
const TOTAL_PAGES = Math.ceil(PRODUCTS.length / PER_PAGE);
let currentPage = 1;

/* ── DOM refs ── */
const grid = document.getElementById('products-grid');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');
const pageInfo = document.getElementById('page-info');

/* ── Build card ── */
function buildCard(product) {
  const card = document.createElement('article');
  card.className = 'product-card';
  card.innerHTML = `
    <div class="product-img-wrap">
      <img src="${product.img}" alt="${product.name}" loading="lazy" class="product-img">
    </div>
    <div class="product-body">
      <h3 class="product-name">${product.name}</h3>
      <div class="product-footer">
        <div class="product-price">Price: 80 SAR</div>
        <span class="product-details-link">View details</span>
      </div>
    </div>
  `;
  return card;
}

/* ── Render page ── */
function renderPage(page) {
  grid.innerHTML = '';
  
  const start = (page - 1) * PER_PAGE;
  const slice = PRODUCTS.slice(start, start + PER_PAGE);
  
  slice.forEach((product, i) => {
    const card = buildCard(product);
    card.style.transitionDelay = (i * 0.06) + 's';
    grid.appendChild(card);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        card.classList.add('visible');
      });
    });
  });
  
  pageInfo.textContent = `Page ${page} of ${TOTAL_PAGES}`;
  btnPrev.disabled = (page === 1);
  btnNext.disabled = (page === TOTAL_PAGES);
  
  if (page > 1) {
    const sec = document.getElementById('products');
    if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ── Pagination ── */
btnPrev.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
  }
});

btnNext.addEventListener('click', () => {
  if (currentPage < TOTAL_PAGES) {
    currentPage++;
    renderPage(currentPage);
  }
});

/* ═══════════════════════════════════════
   THEME TOGGLE
   ═══════════════════════════════════════ */
const themeBtn = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('lumiere-theme', theme);
}

const savedTheme = localStorage.getItem('lumiere-theme') ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
applyTheme(savedTheme);

themeBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

/* ═══════════════════════════════════════
   FORM HANDLING
   ═══════════════════════════════════════ */
const form = document.getElementById('suggestions-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Simple alert for demo purposes
  alert('Thank you for your suggestion! We will review it soon.');
  form.reset();
});

/* ═══════════════════════════════════════
   STICKY HEADER SHADOW
   ═══════════════════════════════════════ */
const header = document.getElementById('site-header');
window.addEventListener('scroll', () => {
  header.style.boxShadow = window.scrollY > 10
    ? '0 2px 20px rgba(100,70,30,0.12)'
    : 'none';
}, { passive: true });

/* ═══════════════════════════════════════
   INIT
   ═══════════════════════════════════════ */
renderPage(1);
