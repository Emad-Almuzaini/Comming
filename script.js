const products = [
    {
        id: 1,
        name: "أقراط فضية عيار 925 بتصميم هالة بيضاوية",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdd190233430a40c0abfc354afab140a3a.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "أقراط فضية عيار 925 بتصميم هالة بيضاوية، مرصعة بأحجار الزركونيا الحمراء/الخضراء، مجوهرات فضية مضادة للحساسية هدية للنساء.",
        link: ""
    },
    {
        id: 2,
        name: "قلادة من الفضة الإسترلينية عيار 925 مع حجر زركون بيضاوي",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S22b8c6b79a474d7ca85764663888892bN.jpg_960x960q75.jpg_.avif",
        badge: "عرض خاص",
        rating: 4,
        description: "قلادة من الفضة الإسترلينية عيار 925 مع حجر زركون بيضاوي، مطلية بالذهب عيار 18 قيراط، قلادة أنيقة، مجوهرات عصرية، هدية للنساء.",
        link: ""
    },
    {
        id: 3,
        name: "قلادة بدلاية من اللؤلؤ للنساء، صدفة واحدة",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S23f311c92d1a4ba898b1ad0bc08d7a89Q.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "قلادة بدلاية من اللؤلؤ للنساء ، مجوهرات لطيفة ، صدفة واحدة ، رقبة رفيعة ، فضة إسترليني ، فاخرة.",
        link: ""
    },
    {
        id: 4,
        name: "سوار فضة عيار 925 بلؤلؤ مستزرع في الماء العذب",
        category: "bracelets",
        categoryAr: "أساور",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S8f157a652c094aeaa5811b441edb09508.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 4,
        description: "كوريا 925 فضة لؤلؤ مستزرع في الماء العذب رقيقة سوار للنساء بسيطة مزاجه اكسسوارات اليد اكسسوارات.",
        link: ""
    },
    {
        id: 5,
        name: "قلادة S925 فضة بشكل V نصف لؤلؤ ونصف زركون",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf5747bdbd6a246668696b17a95ea0faf9.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "S925 فضة الخامس شكل نصف اللؤلؤ نصف دلاية من حجر الزركون قلادة للنساء ضوء بسيط فاخر مجوهرات الزفاف اكسسوارات.",
        link: ""
    },
    {
        id: 6,
        name: "خاتم فضة عيار 925 بقطع الأميرة مرصع بالزركونيا",
        category: "rings",
        categoryAr: "خواتم",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S92b0dd634bd94070843799876288536eg.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "خاتم فضة عيار 925 بقطع الأميرة مرصع بالزركونيا للنساء، خاتم زفاف ووعد أنيق بتصميم هالو سوليتير، مجوهرات فاخرة خالدة.",
        link: ""
    },
    {
        id: 7,
        name: "قلادة فرنسية فاخرة S925 فضة مطلية 14K ذهب مع دلاية زركون",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S3b211b0f80bb4518882def56ee4156756.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "الفرنسية الفاخرة S925 فضة مطلي 14K عقد ذهب رائع خمر شرابة دلاية من حجر الزركون قلادة للنساء مجوهرات.",
        link: ""
    },
    {
        id: 8,
        name: "خاتم مفتوح من الفضة الإسترليني عيار 925 بالزركون واللؤلؤ",
        category: "rings",
        categoryAr: "خواتم",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S6eb271e938be4d8e86d3f0c4f437fe74z.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "خاتم مفتوح من الفضة الإسترليني عيار 925 بسيط من الزركون واللؤلؤ للنساء هدية مجوهرات يدوية لطيفة بمزاج فرنسي.",
        link: ""
    },
    {
        id: 9,
        name: "قلادة هندسية فرنسية من الفضة الإسترليني للنساء",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa5fc719707154db6944ec94fbfd2e979N.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "قلادة هندسية فرنسية من الفضة الإسترليني للنساء ، زركون ملون ، أزياء بسيطة ، مجوهرات مزاجية ، هدية.",
        link: ""
    },
    {
        id: 10,
        name: "قلادة قطرة كريستال أزرق من الفضة عيار 925",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Hc1ec9b02808d4ae0ba290a9ee4669a76P.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "925 فضة فرنسي بسيط أزرق كريستال قطرة قلادة سلسلة الترقوة قلادة المرأة الحلو لطيف طالب مجوهرات هدية.",
        link: ""
    },
    {
        id: 11,
        name: "أقراط متدلية فاخرة مطلية بالذهب عيار 18 قيراط بزركون أزرق",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S8a8c511e261e489596538ba8f951c54c8.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "أقراط متدلية فاخرة مطلية بالذهب عيار 18 قيراط من الفضة الإسترلينية S925 مرصعة بالزركون الأزرق على شكل هالة، أقراط أنيقة متدلية مضادة للحساسية للنساء.",
        link: ""
    },
    {
        id: 12,
        name: "أقراط هندسية كورية من الفضة عيار 925 بالزركون والذهب 14K",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Hefdd00dcc0fd4ea4acd490d69e6affd88.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "925 فضة الكورية بسيطة مزاجه هندسية الزركون وأقراط النساء تصفيح 14k الذهب مجوهرات الزفاف.",
        link: ""
    },
    {
        id: 13,
        name: "أقراط زهرة كورية فاخرة مطعمة بالزركون",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/H7cf68e056e26431082ecc93243aa261fo.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "الكورية الفاخرة الرائعة زهرة مطعمة الزركون أقراط للنساء مزاجه الزفاف يؤرخ مجوهرات هدايا.",
        link: ""
    },
    {
        id: 14,
        name: "أقراط زهرة طويلة من الفضة عيار 925 مطلية بالذهب 14K مع زركون",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Hdfff64ca69364990847010121c5833a5f.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "925 فضة مطلي 14K الذهب شرابة طويلة الزركون زهرة أقراط fou المرأة الحلو مزاجه مجوهرات الزفاف اكسسوارات.",
        link: ""
    },
    {
        id: 15,
        name: "أقراط لؤلؤ من الفضة عيار 925 مطلية بالذهب 14K",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/He5441a93a8a647ff867ea899aac7e1ea3.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "925 فضة أقراط اللؤلؤ للنساء تصفيح 14k الذهب ضوء الفاخرة مزاجه حفل زفاف مجوهرات هدية عيد الأم.",
        link: ""
    },
    {
        id: 16,
        name: "أقراط كريستال هندسية من الفضة عيار 925 مطلية بالذهب 14K",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/H57eac42a08654a50ab0e5e7e5f56bc13M.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "925 فضة الأوروبي الإبداعية هندسية كريستال أقراط النساء ضوء فاخر الزفاف 14k الذهب تصفيح مجوهرات هدية.",
        link: ""
    },
    {
        id: 17,
        name: "أقراط دائرية من الفضة الإسترليني عيار 925",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Scbf753ba48e64c498cbb91ab2654c3abr.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "أقراط دائرية من الفضة الإسترليني عيار 925 بمقاسات متعددة (فضي/ذهبي اللون) أقراط دائرية خفيفة الوزن للنساء.",
        link: ""
    },
    {
        id: 18,
        name: "أقراط فضية عيار 925 بتصميم هالة بيضاوية",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdd190233430a40c0abfc354afab140a3a.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "أقراط فضية عيار 925 بتصميم هالة بيضاوية، مرصعة بأحجار الزركونيا الحمراء/الخضراء، مجوهرات فضية مضادة للحساسية هدية للنساء.",
        link: ""
    },
    {
        id: 19,
        name: "أقراط من الفضة الإسترليني عيار 925 مطلية بالذهب عيار 14 قيراط",
        category: "earrings",
        categoryAr: "أقراط",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/H519b51bd5a6643b9925007891a88b388m.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "أقراط من الفضة الإسترليني عيار 925 مطلية بالذهب عيار 14 قيراط للنساء أقراط رائعة صغيرة لامعة من الزركون مجوهرات الزفاف.",
        link: ""
    },
    {
        id: 20,
        name: "سوار من الفضة الإسترليني 925 بثلاثة فراشات براقة",
        category: "bracelets",
        categoryAr: "أساور",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S86fad77d251640cfb3bcb81096b3678fz.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "سوار من الفضة الإسترليني 925 مزود بثلاثة فراشات براقة من بافي الزركون للنساء مجوهرات رائعة مطلية بالذهب عيار 14.",
        link: ""
    },
    {
        id: 21,
        name: "قلادة لؤلؤ قصيرة من الفضة عيار 925",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S1e3c41eb1c1a459da95a837d5e6a689ej.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "925 فضة ضوء الفاخرة بسيطة اللؤلؤ قلادة سلسلة قصيرة تصل إلى عظمة الترقوة للنساء الفرنسية مزاجه مجوهرات الزفاف اكسسوارات.",
        link: ""
    },
    {
        id: 22,
        name: "قلادة زهرة زركون ملون من الفضة عيار 925",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sdd7a8ff6391642858cbd443e1266ff4fV.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "حقيقي 925 فضة ملون الزركون زهرة سلسلة قلادة للنساء فتاة هدية طوق جديد.",
        link: ""
    },
    {
        id: 23,
        name: "قلادة قوس من الفضة عيار 925 مطعمة بالزركون",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S234620a17dbc401abd4eb8909fef9f0cK.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "925 فضة مطعمة الزركون القوس قلادة للنساء أنيقة الحلو سلسلة قصيرة تصل إلى عظمة الترقوة كل مباراة مجوهرات هدية.",
        link: ""
    },
    {
        id: 24,
        name: "سوار بعقدة من الفضة الإسترليني عيار 925",
        category: "bracelets",
        categoryAr: "أساور",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S1f1a1822a49f4feeb5757c7b1ebee3e5W.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "سوار بعقدة من الفضة الإسترليني عيار 925 - سوار أنيق من الزركونيا المكعب المطلي بالذهب للنساء، مجوهرات أنيقة وبسيطة.",
        link: ""
    },
    {
        id: 25,
        name: "قلادة من الفضة الإسترليني عيار 925 مطلية بالذهب عيار 14 قيراط بتصميم زهرة",
        category: "necklaces",
        categoryAr: "قلائد",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S87e0a35d20a14e4c80b70d76607663a1Y.jpg_960x960q75.jpg_.avif",
        badge: "خصم",
        rating: 5,
        description: "قلادة من الفضة الإسترليني عيار 925 مطلية بالذهب عيار 14 قيراط بتصميم زهرة، مجوهرات أنيقة للنساء.",
        link: ""
    },
    {
        id: 26,
        name: "مجموعة مجوهرات الزركون من سلسلة Ailmay 925",
        category: "sets",
        categoryAr: "أطقم",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sf2ad98bf0bae4b939823faf455faa370W.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "مجموعة مجوهرات الزركون من سلسلة Ailmay 925 من الفضة الإسترليني الأزرق للنساء مجوهرات خطوبة الزفاف.",
        link: ""
    },
    {
        id: 27,
        name: "مجموعة قلادة وأقراط Ailmay أنيقة من الفضة عيار 925 بالزركون البنفسجي",
        category: "sets",
        categoryAr: "أطقم",
        price: 80.00,
        oldPrice: null,
        image: "https://ae-pic-a1.aliexpress-media.com/kf/Sc248cdd4ea034032a0c8a86f0d4c17fao.jpg_960x960q75.jpg_.avif",
        badge: null,
        rating: 5,
        description: "Ailmay أنيقة 925 فضة البنفسجي جولة الزركون قلادة قلادة أقراط للنساء حزب الأزياء والمجوهرات والمجوهرات مجموعة.",
        link: ""
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
                <a href="${product.link}" target="_blank" rel="noopener noreferrer" class="product-link" onclick="event.stopPropagation()">
                    <i class="fas fa-external-link-alt"></i>
                    اشتري الآن
                </a>
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
    
    const modalLink = document.getElementById('modalLink');
    if (modalLink) {
        modalLink.href = product.link;
    }
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
