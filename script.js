const products = [
    {
        id: 1,
        name: "خاتم ألماس كلاسيكي",
        category: "rings",
        categoryAr: "خواتم",
        price: 4500,
        oldPrice: 5200,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
        badge: "جديد",
        rating: 5,
        description: "خاتم ألماس كلاسيكي مصنوع من الذهب الأبيض عيار 18، مرصع بألماسة بقطع brilliant تزن 1 قيراط. تصميم أنيق يناسب جميع المناسبات."
    },
    {
        id: 2,
        name: "قلادة لؤلؤ طبيعية",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 3200,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&q=80",
        badge: null,
        rating: 5,
        description: "قلادة فاخرة من اللؤلؤ الطبيعي مع سلسلة من الذهب الأصفر عيار 18. لؤلؤ مختار بعناية فائقة بلمعان استثنائي."
    },
    {
        id: 3,
        name: "أقراط زفير أزرق",
        category: "earrings",
        categoryAr: "أقراط",
        price: 2800,
        oldPrice: 3500,
        image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
        badge: "خصم",
        rating: 4,
        description: "أقراط أنيقة مرصعة بحجر الزفير الأزرق الطبيعي محاط بالألماس الصغير. تصميم عصري يضفي لمسة من الفخامة."
    },
    {
        id: 4,
        name: "سوار ذهب مرصع",
        category: "bracelets",
        categoryAr: "أساور",
        price: 5800,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
        badge: "مميز",
        rating: 5,
        description: "سوار فاخر من الذهب الوردي عيار 18 مرصع بالألماس والزمرد. قطعة فريدة تجمع بين الأناقة والفخامة."
    },
    {
        id: 5,
        name: "خاتم ياقوت أحمر",
        category: "rings",
        categoryAr: "خواتم",
        price: 7200,
        oldPrice: 8000,
        image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a8?w=600&q=80",
        badge: "حصري",
        rating: 5,
        description: "خاتم استثنائي مرصع بحجر الياقوت الأحمر الطبيعي محاط بهالة من الألماس. قطعة نادرة لهواة المجوهرات الفاخرة."
    },
    {
        id: 6,
        name: "قلادة ألماس متدلية",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 6500,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
        badge: null,
        rating: 5,
        description: "قلادة متدلية بتصميم عصري مرصعة بالألماس على شكل قطرة ماء. تضفي لمسة من البريق على أي إطلالة."
    },
    {
        id: 7,
        name: "أقراط ذهب دائرية",
        category: "earrings",
        categoryAr: "أقراط",
        price: 1800,
        oldPrice: 2200,
        image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&q=80",
        badge: "خصم",
        rating: 4,
        description: "أقراط دائرية أنيقة من الذهب الأصفر عيار 18 بتصميم بسيط وعصري. مناسبة للاستخدام اليومي والمناسبات الخاصة."
    },
    {
        id: 8,
        name: "سوار تنس ألماس",
        category: "bracelets",
        categoryAr: "أساور",
        price: 9500,
        oldPrice: null,
        image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&q=80",
        badge: "فاخر",
        rating: 5,
        description: "سوار تنس كلاسيكي مرصع بالألماس المتواصل. قطعة مجوهرات خالدة تضيف لمسة من الأناقة الراقية."
    }
];
// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const productModal = document.getElementById('productModal');
const modalClose = document.getElementById('modalClose');
const modalOverlay = document.querySelector('.modal-overlay');
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');
const navbar = document.getElementById('navbar');
const suggestionForm = document.getElementById('suggestionForm');
const formStatus = document.getElementById('formStatus');
const langToggle = document.getElementById('langToggle');
// Initialize EmailJS (replace with your actual keys)
(function() {
    if (typeof emailjs !== 'undefined') {
        emailjs.init('YOUR_PUBLIC_KEY');
    }
})();
// Render Products
function renderProducts(filter = 'all') {
    const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
    
    productsGrid.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <p class="product-category">${product.categoryAr}</p>
                <h3 class="product-name">${product.name}</h3>
                <div class="product-price">
                    <div>
                        <span class="price">${product.price.toLocaleString()} ر.س</span>
                        ${product.oldPrice ? `<span class="old-price">${product.oldPrice.toLocaleString()} ر.س</span>` : ''}
                    </div>
                    <div class="product-rating">
                        ${'<i class="fas fa-star"></i>'.repeat(product.rating)}${'<i class="far fa-star"></i>'.repeat(5 - product.rating)}
                    </div>
                </div>
            </div>
        </div>
    `).join('');
    // Add click event to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => openModal(parseInt(card.dataset.id)));
    });
}
// Filter Products
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProducts(btn.dataset.filter);
    });
});
// Modal Functions
function openModal(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('modalImage').src = product.image;
    document.getElementById('modalImage').alt = product.name;
    document.getElementById('modalTitle').textContent = product.name;
    document.getElementById('modalCategory').textContent = product.categoryAr;
    document.getElementById('modalDescription').textContent = product.description;
    document.getElementById('modalPrice').textContent = `${product.price.toLocaleString()} ر.س`;
    productModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}
function closeModal() {
    productModal.classList.remove('active');
    document.body.style.overflow = '';
}
modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});
// Mobile Menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
});
// Close mobile menu on link click
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});
// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = 'var(--shadow)';
    }
});
// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});
// Form Submission with EmailJS
suggestionForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = suggestionForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'جاري الإرسال...';
    try {
        // Replace with your actual EmailJS service and template IDs
        await emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            suggestionForm,
            'YOUR_PUBLIC_KEY'
        );
        formStatus.textContent = 'تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.';
        formStatus.className = 'form-status success';
        suggestionForm.reset();
    } catch (error) {
        formStatus.textContent = 'حدث خطأ أثناء الإرسال. يرجى المحاولة مرة أخرى.';
        formStatus.className = 'form-status error';
        console.error('EmailJS Error:', error);
    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'إرسال الرسالة';
    }
});
// Language Toggle (placeholder)
let isArabic = true;
langToggle.addEventListener('click', () => {
    isArabic = !isArabic;
    langToggle.textContent = isArabic ? 'EN' : 'ع';
    document.documentElement.dir = isArabic ? 'rtl' : 'ltr';
    document.documentElement.lang = isArabic ? 'ar' : 'en';
});
// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
// Initialize
renderProducts();
