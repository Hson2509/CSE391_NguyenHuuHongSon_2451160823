

function createCart() {
    let items = [];
    let currentDiscountCode = null;
    const formatMoney = (amount) => amount.toLocaleString('vi-VN');

    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) {
            const existingItem = items.find(item => item.product.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ product, quantity });
            }
        },

        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter(item => item.product.id !== productId);
        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            if (newQuantity <= 0) {
                this.removeItem(productId);
                return;
            }
            const item = items.find(item => item.product.id === productId);
            if (item) {
                item.quantity = newQuantity;
            }
        },

        // Tính tổng tiền
        getTotal() {
            let subtotal = items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

            // Xử lý mã giảm giá
            if (currentDiscountCode === "SALE10") {
                subtotal *= 0.9;
            } else if (currentDiscountCode === "SALE20") {
                subtotal *= 0.8;
            } else if (currentDiscountCode === "FREESHIP") {
                subtotal = Math.max(0, subtotal - 30000);
            }

            return subtotal;
        },

        // Áp dụng mã giảm giá
        applyDiscount(code) {
            const validCodes = ["SALE10", "SALE20", "FREESHIP"];
            if (validCodes.includes(code)) {
                currentDiscountCode = code;
                console.log(`Đã áp dụng mã: ${code}`);
            } else {
                console.log("Mã giảm giá không hợp lệ.");
            }
        },

        // In giỏ hàng dạng bảng
        printCart() {
            console.log("┌─────────────────────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm           │ SL │ Đơn giá      │ Tổng           │");
            console.log("├─────────────────────────────────────────────────────────────┤");

            items.forEach((item, index) => {
                const lineTotal = item.product.price * item.quantity;

                // Căn lề cho các cột
                const num = String(index + 1).padStart(1);
                const name = item.product.name.padEnd(18);
                const qty = String(item.quantity).padStart(2);
                const price = formatMoney(item.product.price).padStart(12);
                const totalStr = formatMoney(lineTotal).padStart(12);

                console.log(`│ ${num} │ ${name} │ ${qty} │ ${price} │ ${totalStr}   │`);
            });

            console.log("├─────────────────────────────────────────────────────────────┤");

            const finalTotal = this.getTotal();
            const totalText = `${formatMoney(finalTotal)}đ`.padStart(15);
            console.log(`│ Tổng cộng:                                  ${totalText} │`);

            if (currentDiscountCode) {
                const discountText = `(Mã: ${currentDiscountCode})`;
                console.log(`│ ${discountText.padEnd(59)} │`);
            }

            console.log("└─────────────────────────────────────────────────────────────┘");
        },

        // Lấy tổng số sản phẩm (tổng quantity)
        getItemCount() {
            return items.reduce((count, item) => count + item.quantity, 0);
        },

        // Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            currentDiscountCode = null;
        }
    };
}

// === TEST ===
const cart = createCart();

cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

console.log("\n--- TRƯỚC KHI GIẢM GIÁ ---");
cart.printCart();

console.log("\n--- ÁP DỤNG GIẢM GIÁ ---");
cart.applyDiscount("SALE10");
cart.printCart();

console.log("\nSố SP:", cart.getItemCount()); // → 4

cart.removeItem(3);
console.log("Sau xóa AirPods Pro, Số SP còn:", cart.getItemCount()); // → 2