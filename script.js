// بيانات المنتجات
const products = [
    { id: 1, name: "الأرز بجميع أنواعه", unit: "كيلو", quantity: 4500, price: 4.88, category: "food" },
    { id: 2, name: "المكرونة بجميع أنواعها", unit: "كيلو", quantity: 600, price: 9.54, category: "food" },
    { id: 3, name: "المكرونة بجميع أنواعها", unit: "كيلو", quantity: 600, price: 9.54, category: "food" },
    { id: 4, name: "دقيق ناعم بنوعيه", unit: "كيلو", quantity: 1012, price: 2, category: "food" },
    { id: 5, name: "نشا ذرة", unit: "كيلو", quantity: 216, price: 6, category: "food" },
    { id: 6, name: "العدس بنوعية اخضر", unit: "كيلو", quantity: 282, price: 4.33, category: "food" },
    { id: 7, name: "سميد مطحون/برغل/فريكة", unit: "كيلو", quantity: 57, price: 3.73, category: "food" },
    { id: 8, name: "فاصوليا جافة/لوبيا بعين سوداء, حب /علب", unit: "كيلو", quantity: 170, price: 7, category: "food" },
    { id: 9, name: "سكر بأنواعه/ناعم /خشن /حصص", unit: "كيلو", quantity: 675, price: 2.9, category: "food" },
    { id: 10, name: "شاهي بأنواعه", unit: "كيلو", quantity: 102, price: 31.2, category: "food" },
    // يمكنك إضافة باقي المنتجات هنا
];

// الدوال المساعدة
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.dataset.category = product.category;

    card.innerHTML = `
        <div class="product-header">
            <span class="product-number">${product.id}</span>
            <h3>${product.name}</h3>
        </div>
        <div class="product-details">
            <div>الوحدة: ${product.unit}</div>
            <div class="quantity-badge">الكمية: ${product.quantity}</div>
        </div>
        <div class="product-price">
            <span class="price-label">السعر الفردي:</span>
            ${product.price ? 
                `<span class="price-value">${product.price} ريال</span>` :
                `<span class="no-price">غير مسعر</span>`
            }
        </div>
    `;

    return card;
}

// تهيئة العرض
function initializeDisplay() {
    const productsGrid = document.getElementById('productsGrid');
    products.forEach(product => {
        productsGrid.appendChild(createProductCard(product));
    });
}

// البحث
document.getElementById('searchInput').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = document.querySelectorAll('.product-card');

    cards.forEach(card => {
        const productName = card.querySelector('h3').textContent.toLowerCase();
        if (productName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// تصفية الفئات
document.querySelectorAll('.category-btn').forEach(button => {
    button.addEventListener('click', () => {
        // إزالة الفئة النشطة من جميع الأزرار
        document.querySelectorAll('.category-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // إضافة الفئة النشطة للزر المحدد
        button.classList.add('active');

        const category = button.dataset.category;
        const cards = document.querySelectorAll('.product-card');

        cards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// تهيئة العرض عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', initializeDisplay);