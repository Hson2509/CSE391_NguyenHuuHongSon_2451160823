// ==========================================
// 1. DATA VÀ TRẠNG THÁI (STATE)
// ==========================================
const products = [
    { id: 1, name: "iPhone 16 Pro", price: 28990000, category: "phone", image: "https://placehold.co/200x200?text=iPhone", rating: 4.8, inStock: true },
    { id: 2, name: "Galaxy S24 Ultra", price: 25990000, category: "phone", image: "https://placehold.co/200x200?text=Samsung", rating: 4.7, inStock: true },
    { id: 3, name: "Xiaomi 14", price: 19990000, category: "phone", image: "https://placehold.co/200x200?text=Xiaomi", rating: 4.5, inStock: false },
    { id: 4, name: "MacBook Pro M3", price: 39990000, category: "laptop", image: "https://placehold.co/200x200?text=MacBook", rating: 4.9, inStock: true },
    { id: 5, name: "Dell XPS 15", price: 35000000, category: "laptop", image: "https://placehold.co/200x200?text=Dell+XPS", rating: 4.6, inStock: true },
    { id: 6, name: "ThinkPad X1", price: 42000000, category: "laptop", image: "https://placehold.co/200x200?text=ThinkPad", rating: 4.8, inStock: true },
    { id: 7, name: "iPad Pro M4", price: 28990000, category: "tablet", image: "https://placehold.co/200x200?text=iPad+Pro", rating: 4.9, inStock: true },
    { id: 8, name: "Galaxy Tab S9", price: 19990000, category: "tablet", image: "https://placehold.co/200x200?text=Tab+S9", rating: 4.4, inStock: true },
    { id: 9, name: "iPad Air 6", price: 16990000, category: "tablet", image: "https://placehold.co/200x200?text=iPad+Air", rating: 4.5, inStock: false },
    { id: 10, name: "AirPods Pro 2", price: 6190000, category: "accessory", image: "https://placehold.co/200x200?text=AirPods", rating: 4.8, inStock: true },
    { id: 11, name: "Sony WH-1000XM5", price: 7990000, category: "accessory", image: "https://placehold.co/200x200?text=Sony+WH", rating: 4.7, inStock: true },
    { id: 12, name: "Logitech MX Master", price: 2490000, category: "accessory", image: "https://placehold.co/200x200?text=Logitech", rating: 4.8, inStock: true },
];

let state = {
    cartCount: 0,
    searchQuery: "",
    currentCategory: "all",
    currentSort: "default"
};

// ==========================================
// 2. HELPER FUNCTION (Tạo Element Nhanh)
// ==========================================
// Thay vì viết document.createElement liên tục, ta dùng hàm h()
function h(tag, attributes = {}, ...children) {
    const el = document.createElement(tag);
    for (const key in attributes) {
        if (key.startsWith('on')) {
            el.addEventListener(key.substring(2).toLowerCase(), attributes[key]);
        } else if (key === 'className') {
            el.className = attributes[key];
        } else {
            el[key] = attributes[key];
        }
    }
    children.forEach(child => {
        if (typeof child === 'string' || typeof child === 'number') {
            el.appendChild(document.createTextNode(child));
        } else if (child instanceof Node) {
            el.appendChild(child);
        }
    });
    return el;
}

// Format tiền tệ VNĐ
const formatMoney = (amount) => amount.toLocaleString('vi-VN') + "đ";

// ==========================================
// 3. LOGIC LỌC & SẮP XẾP SẢN PHẨM
// ==========================================
function getFilteredAndSortedProducts() {
    let result = products;

    // Lọc theo Category
    if (state.currentCategory !== "all") {
        result = result.filter(p => p.category === state.currentCategory);
    }

    // Lọc theo Search (Tên sản phẩm)
    if (state.searchQuery) {
        const query = state.searchQuery.toLowerCase();
        result = result.filter(p => p.name.toLowerCase().includes(query));
    }

    // Sắp xếp
    if (state.currentSort === "price-asc") {
        result.sort((a, b) => a.price - b.price);
    } else if (state.currentSort === "price-desc") {
        result.sort((a, b) => b.price - a.price);
    } else if (state.currentSort === "name-asc") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (state.currentSort === "rating") {
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
}

// ==========================================
// 4. CÁC HÀM XỬ LÝ SỰ KIỆN
// ==========================================
const handleSearch = (e) => {
    state.searchQuery = e.target.value;
    renderGrid();
};

const handleSort = (e) => {
    state.currentSort = e.target.value;
    renderGrid();
};

const handleCategory = (category, btnElement) => {
    state.currentCategory = category;
    // Cập nhật UI nút active
    document.querySelectorAll('.filter-group button').forEach(btn => btn.classList.remove('active'));
    btnElement.classList.add('active');
    renderGrid();
};

const handleAddToCart = (e, product) => {
    e.stopPropagation(); // Ngăn sự kiện click lan lên Card mở Modal
    if (!product.inStock) {
        alert("Sản phẩm đã hết hàng!");
        return;
    }
    state.cartCount++;
    document.getElementById("cartBadge").textContent = state.cartCount;
};

const toggleDarkMode = () => {
    document.body.classList.toggle("dark-mode");
};

// ==========================================
// 5. RENDER CHÍNH BẰNG DOM
// ==========================================
const app = document.getElementById("app");

// Khởi tạo layout ban đầu
function initApp() {
    // --- Tạo Header ---
    const header = h('header', {},
        h('h1', {}, "Tech Store"),
        h('div', { className: 'actions' },
            h('button', { className: 'icon-btn', onClick: toggleDarkMode }, "🌙 Dark Mode"),
            h('div', { className: 'cart-wrapper', style: 'margin-left: 15px' },
                h('span', { className: 'icon-btn' }, "🛒 Giỏ hàng"),
                h('span', { className: 'badge', id: 'cartBadge' }, state.cartCount)
            )
        )
    );

    // --- Tạo Controls (Lọc & Tìm kiếm) ---
    const categories = [
        { id: 'all', name: 'Tất cả' },
        { id: 'phone', name: 'Điện thoại' },
        { id: 'laptop', name: 'Laptop' },
        { id: 'tablet', name: 'Tablet' },
        { id: 'accessory', name: 'Phụ kiện' }
    ];

    const filterGroup = h('div', { className: 'filter-group' });
    categories.forEach(cat => {
        const btn = h('button', {
            className: cat.id === 'all' ? 'active' : '',
            onClick: function () { handleCategory(cat.id, this) }
        }, cat.name);
        filterGroup.appendChild(btn);
    });

    const controls = h('div', { className: 'controls-bar' },
        filterGroup,
        h('div', { className: 'search-sort' },
            h('input', { type: 'text', placeholder: 'Tìm kiếm sản phẩm...', onInput: handleSearch }),
            h('select', { style: 'margin-left: 10px', onChange: handleSort },
                h('option', { value: 'default' }, "Sắp xếp mặc định"),
                h('option', { value: 'price-asc' }, "Giá: Thấp đến Cao"),
                h('option', { value: 'price-desc' }, "Giá: Cao đến Thấp"),
                h('option', { value: 'name-asc' }, "Tên: A - Z"),
                h('option', { value: 'rating' }, "Đánh giá cao nhất")
            )
        )
    );

    // --- Container cho Grid và Modal ---
    const gridContainer = h('div', { className: 'product-grid', id: 'productGrid' });

    app.appendChild(header);
    app.appendChild(controls);
    app.appendChild(gridContainer);

    renderGrid(); // Gọi lần đầu để vẽ sản phẩm
}

// Hàm vẽ lại danh sách sản phẩm
function renderGrid() {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = ""; // Xóa grid cũ trước khi vẽ grid mới

    const productsToRender = getFilteredAndSortedProducts();

    if (productsToRender.length === 0) {
        grid.appendChild(h('h3', { style: 'grid-column: 1/-1; text-align: center' }, "Không tìm thấy sản phẩm nào."));
        return;
    }

    productsToRender.forEach(p => {
        const card = h('div', { className: 'card', onClick: () => showModal(p) },
            h('img', { src: p.image, alt: p.name }),
            h('h3', {}, p.name),
            h('p', { className: 'price' }, formatMoney(p.price)),
            h('p', { style: `color: ${p.inStock ? 'green' : 'red'}; margin-top: 5px; font-size: 0.9em;` },
                p.inStock ? "Còn hàng" : "Hết hàng"
            ),
            h('button', {
                className: 'add-to-cart',
                onClick: (e) => handleAddToCart(e, p)
            }, "Thêm vào giỏ")
        );
        grid.appendChild(card);
    });
}

// ==========================================
// 6. XÂY DỰNG MODAL BẰNG DOM
// ==========================================
function showModal(product) {
    // Nếu modal cũ đang mở, xóa nó đi
    const existingModal = document.querySelector('.modal-overlay');
    if (existingModal) existingModal.remove();

    const overlay = h('div', {
        className: 'modal-overlay',
        // Đóng modal khi click ra ngoài vùng nội dung
        onClick: (e) => { if (e.target === overlay) overlay.remove() }
    },
        h('div', { className: 'modal-content' },
            h('span', { className: 'modal-close', onClick: () => overlay.remove() }, "×"),
            h('img', { src: product.image, alt: product.name, style: 'width: 200px; border-radius: 8px' }),
            h('h2', { style: 'margin: 15px 0' }, product.name),
            h('h3', { className: 'price' }, formatMoney(product.price)),
            h('p', { style: 'margin: 10px 0' }, `Đánh giá: ⭐ ${product.rating} / 5`),
            h('button', {
                className: 'add-to-cart',
                onClick: (e) => { handleAddToCart(e, product); overlay.remove(); }
            }, "Thêm vào giỏ hàng")
        )
    );

    document.body.appendChild(overlay);
}

initApp();