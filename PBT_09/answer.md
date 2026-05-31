Câu A1 (5đ) — DOM Tree
Cho HTML:

<div id="app">
    <header>
        <h1>Todo App</h1>
        <nav>
            <a href="#" class="active">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
        </nav>
    </header>
    <main>
        <form id="todoForm">
            <input id="todoInput" type="text">
            <button type="submit">Add</button>
        </form>
        <ul id="todoList">
            <li class="todo-item">Learn HTML</li>
            <li class="todo-item completed">Learn CSS</li>
        </ul>
    </main>
</div>
1. Vẽ DOM tree (sơ đồ cây) cho HTML trên:

div#app
├── header
│ ├── h1 ("Todo App")
│ └── nav
│ ├── a.active ("All")
│ ├── a ("Active")
│ └── a ("Completed")
└── main
├── form#todoForm
│ ├── input#todoInput [type="text"]
│ └── button [type="submit"] ("Add")
└── ul#todoList
├── li.todo-item ("Learn HTML")
└── li.todo-item.completed ("Learn CSS")

Trò chuyện với Gemini
Câu A2 (5đ) — Scope & Closure

Không chạy code, dự đoán output:

// Đoạn 1:

function counter() {

let count = 0;

return {

increment: () => ++count,

decrement: () => --count,

getCount: () => count

};

}

const c = counter();

console.log(c.increment()); // ???

console.log(c.increment()); // ???

console.log(c.increment()); // ???

console.log(c.decrement()); // ???

console.log(c.getCount()); // ???

// Đoạn 2:

for (var i = 0; i < 3; i++) {

setTimeout(() => console.log("var:", i), 100);

}

for (let j = 0; j < 3; j++) {

setTimeout(() => console.log("let:", j), 200);

}

// Output sau 200ms: ???

Giải thích chi tiết: Tại sao var và let cho kết quả khác nhau trong vòng lặp setTimeout?

Câu A3 (5đ) — Array Methods

Đọc chương 06. Cho mảng: const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Viết 1 dòng code cho mỗi yêu cầu (dùng arrow function):

1. Lấy các số chẵn → [2, 4, 6, 8, 10]

2. Nhân mỗi số với 3 → [3, 6, 9, ..., 30]

3. Tính tổng tất cả → 55

4. Tìm số đầu tiên > 7 → 8

5. Kiểm tra CÓ số > 10 không → false

6. Kiểm tra TẤT CẢ đều > 0 → true

7. Tạo mảng "Số X là [chẵn/lẻ]" → ["Số 1 là lẻ", "Số 2 là chẵn", ...]

8. Đảo ngược mảng (không mutate gốc) → [10, 9, ..., 1]

Câu A4 (5đ) — Object Destructuring & Spread

Không chạy code, dự đoán output:

const product = {

name: "iPhone 16",

price: 25990000,

specs: { ram: 8, storage: 256, color: "Titan" }

};

// Destructuring

const { name, price, specs: { ram, color } } = product;

console.log(name, price, ram, color); // ???

console.log(specs); // ???

// Spread

const updated = { ...product, price: 23990000, sale: true };

console.log(updated.price); // ???

console.log(updated.sale); // ???

console.log(product.price); // ??? (gốc có đổi?)

// Spread gotcha

const copy = { ...product };

copy.specs.ram = 16;

console.log(product.specs.ram); // ??? (16 hay 8? Tại sao?)

Dưới đây là dự đoán kết quả và giải thích chi tiết cho từng phần bài tập của bạn.

Câu A2 (5đ) — Scope & Closure
Dự đoán Output:

JavaScript
// Đoạn 1:
console.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.increment()); // 3
console.log(c.decrement()); // 2
console.log(c.getCount()); // 2

// Đoạn 2 (Output sau khi chạy hết thời gian delay):
// var: 3
// var: 3
// var: 3
// let: 0
// let: 1
// let: 2
Giải thích chi tiết sự khác nhau giữa var và let trong vòng lặp setTimeout:

Từ khóa var (Function/Global Scope): Khi bạn dùng var i, biến i được khai báo trong phạm vi toàn cục (hoặc phạm vi hàm nếu bọc trong hàm). Vòng lặp chạy rất nhanh và kết thúc khiến giá trị của i đạt đến 3 trước khi các callback của setTimeout kịp thực thi (sau 100ms). Khi callback chạy, chúng đều trỏ đến cùng một ô nhớ chứa biến i đó, nên tất cả đều in ra 3.

Từ khóa let (Block Scope): Khi bạn dùng let j, biến j được gắn phạm vi theo từng khối (block scope). Nghĩa là với mỗi lần lặp, JavaScript tạo ra một "bản sao" mới (một môi trường từ vựng mới) cho j. Do đó, mỗi hàm callback bên trong setTimeout sẽ "nhớ" được (thông qua closure) giá trị cụ thể của j tại vòng lặp tương ứng. Kết quả in ra đúng thứ tự 0, 1, 2.

Câu A3 (5đ) — Array Methods
Dưới đây là mã thực thi 1 dòng (one-liners) cho từng yêu cầu, xử lý mảng nums:

JavaScript
// 1. Lấy các số chẵn
const evens = nums.filter(n => n % 2 === 0);

// 2. Nhân mỗi số với 3
const multiplied = nums.map(n => n \* 3);

// 3. Tính tổng tất cả
const sum = nums.reduce((acc, n) => acc + n, 0);

// 4. Tìm số đầu tiên > 7
const firstOver7 = nums.find(n => n > 7);

// 5. Kiểm tra CÓ số > 10 không
const hasOver10 = nums.some(n => n > 10);

// 6. Kiểm tra TẤT CẢ đều > 0
const allPositive = nums.every(n => n > 0);

// 7. Tạo mảng "Số X là [chẵn/lẻ]"
const strArray = nums.map(n => `Số ${n} là ${n % 2 === 0 ? 'chẵn' : 'lẻ'}`);

// 8. Đảo ngược mảng (không mutate gốc)
const reversed = [...nums].reverse(); // Hoặc nums.toReversed() nếu dùng ES2023+
Câu A4 (5đ) — Object Destructuring & Spread
Dự đoán Output:

JavaScript
// Destructuring
console.log(name, price, ram, color);  
// Output: iPhone 16 25990000 8 Titan

console.log(specs);  
// Output: ReferenceError: specs is not defined
Lưu ý cho Destructuring: Lỗi ReferenceError xảy ra vì khi dùng cú pháp specs: { ram, color }, bạn đang yêu cầu JS đi sâu vào thuộc tính specs để lấy ra ram và color, chứ bạn không khởi tạo biến specs nào cả.

JavaScript
// Spread
console.log(updated.price);  
// Output: 23990000

console.log(updated.sale);  
// Output: true

console.log(product.price);  
// Output: 25990000 (Gốc không bị đổi vì price là kiểu nguyên thủy và đã được copy giá trị)
JavaScript
// Spread gotcha
console.log(product.specs.ram);  
// Output: 16
Tại sao lại là 16? Toán tử spread (...) chỉ thực hiện Shallow Copy (sao chép nông). Nó chỉ sao chép giá trị của các thuộc tính ở cấp độ đầu tiên. Đối với thuộc tính specs (là một object lồng nhau), nó không tạo ra object mới mà chỉ sao chép tham chiếu (reference) trỏ tới ô nhớ của object specs ban đầu. Do đó, cả product.specs và copy.specs đều trỏ chung về một chỗ. Khi bạn thay đổi copy.specs.ram, giá trị gốc cũng bị thay đổi theo.

Viết các hàm (BẮT BUỘC dùng map, filter, reduce, sort, find):

// 1. Lọc sản phẩm còn hàng (stock > 0)function getInStock(products) { /_ ... _/ }// 2. Lọc theo category VÀ khoảng giáfunction filterProducts(products, category, minPrice, maxPrice) { /_ ... _/ }// 3. Sắp xếp theo giá (tăng/giảm)function sortByPrice(products, order = "asc") { /_ ... _/ }// 4. Tìm sản phẩm rẻ nhất mỗi categoryfunction cheapestByCategory(products) { /_ ... _/ }// → { phone: {...}, laptop: {...}, tablet: {...}, accessory: {...} }// 5. Tính tổng giá trị kho (price × stock cho mỗi SP)function totalInventoryValue(products) { /_ ... _/ }// 6. Tạo mảng chỉ chứa { name, formattedPrice }function formatProductList(products) { /_ ... _/ }// → [{ name: "iPhone 16", formattedPrice: "25.990.000đ" }, ...]// 7. Tính rating trung bình toàn bộfunction averageRating(products) { /_ ... _/ }// 8. Tìm sản phẩm theo keyword (tìm trong name, case-insensitive)function searchProducts(products, keyword) { /_ ... _/ }

Dưới đây là mã nguồn cho các hàm bạn yêu cầu, tuân thủ nghiêm ngặt việc sử dụng các phương thức của mảng (map, filter, reduce, sort, find).

Tôi có thêm một số bình luận nhỏ bên trong để giải thích logic, đặc biệt là cách xử lý tham chiếu (mutation) với hàm sort hoặc cách gom nhóm với reduce.

JavaScript
// 1. Lọc sản phẩm còn hàng (stock > 0)
// Sử dụng: filter()
function getInStock(products) {
return products.filter(product => product.stock > 0);
}

// 2. Lọc theo category VÀ khoảng giá
// Sử dụng: filter()
function filterProducts(products, category, minPrice, maxPrice) {
return products.filter(product =>
product.category === category &&
product.price >= minPrice &&
product.price <= maxPrice
);
}

// 3. Sắp xếp theo giá (tăng/giảm)
// Sử dụng: sort(). Lưu ý: Tôi dùng spread operator [...] để copy mảng
// nhằm tránh mutate (làm thay đổi) mảng gốc.
function sortByPrice(products, order = "asc") {
return [...products].sort((a, b) => {
return order === "asc" ? a.price - b.price : b.price - a.price;
});
}

// 4. Tìm sản phẩm rẻ nhất mỗi category
// Sử dụng: reduce() để gom nhóm (grouping) và so sánh
function cheapestByCategory(products) {
return products.reduce((acc, product) => {
const cat = product.category;
// Nếu category này chưa có trong object tích lũy,
// hoặc sản phẩm hiện tại rẻ hơn sản phẩm đã lưu -> ghi đè
if (!acc[cat] || product.price < acc[cat].price) {
acc[cat] = product;
}
return acc;
}, {}); // {} là giá trị khởi tạo của accumulator
}

// 5. Tính tổng giá trị kho (price × stock cho mỗi SP)
// Sử dụng: reduce() để cộng dồn
function totalInventoryValue(products) {
return products.reduce((total, product) => {
return total + (product.price \* product.stock);
}, 0); // 0 là giá trị tổng ban đầu
}

// 6. Tạo mảng chỉ chứa { name, formattedPrice }
// Sử dụng: map() để biến đổi từng phần tử
function formatProductList(products) {
return products.map(product => ({
name: product.name,
// Dùng toLocaleString để format số thành định dạng tiền tệ VN
formattedPrice: `${product.price.toLocaleString('vi-VN')}đ`
}));
}

// 7. Tính rating trung bình toàn bộ
// Sử dụng: reduce()
function averageRating(products) {
if (products.length === 0) return 0; // Tránh chia cho 0
const totalRating = products.reduce((sum, product) => sum + product.rating, 0);
return totalRating / products.length;
}

// 8. Tìm sản phẩm theo keyword (tìm trong name, case-insensitive)
// Sử dụng: filter() (nếu muốn lấy danh sách tất cả sản phẩm khớp keyword)
// Hoặc find() (nếu chỉ muốn lấy phần tử đầu tiên khớp keyword)
function searchProducts(products, keyword) {
const lowerKeyword = keyword.toLowerCase();

    // Trả về mảng CÁC sản phẩm khớp (Dùng filter)
    return products.filter(product =>
        product.name.toLowerCase().includes(lowerKeyword)
    );

    /* * CHÚ Ý VỀ HÀM FIND:
    * Nếu yêu cầu của bạn là chỉ lấy MỘT sản phẩm đầu tiên tìm thấy,
    * hãy dùng find() thay vì filter() như sau:
    * * return products.find(product =>
    * product.name.toLowerCase().includes(lowerKeyword)
    * );
    */

}
Một lưu ý nhỏ cho bạn: Trong thực tế làm việc, hãy luôn cẩn thận với hàm sort(). Nó là hàm duy nhất trong nhóm trên thực hiện sửa đổi trực tiếp lên mảng gốc (mutative). Việc sử dụng spread syntax [...products].sort(...) như tôi đã viết sẽ giúp bạn tạo ra một Shallow Copy trước khi sắp xếp, bảo vệ được dữ liệu gốc an toàn!

Bài B2 (20đ) — Giỏ hàng (Shopping Cart)

Tạo file shopping_cart.js:

Viết module giỏ hàng dùng Closure (không dùng class):

function createCart() {

// Private data

let items = [];

return {

// Thêm sản phẩm (nếu đã có → tăng quantity)

addItem(product, quantity = 1) { /_ ... _/ },

// Xóa sản phẩm theo id

removeItem(productId) { /_ ... _/ },

// Cập nhật số lượng

updateQuantity(productId, newQuantity) { /_ ... _/ },

// Tính tổng tiền

getTotal() { /_ ... _/ },

// Áp dụng mã giảm giá

applyDiscount(code) { /_ ... _/ },

// Codes: "SALE10" → -10%, "SALE20" → -20%, "FREESHIP" → -30000

// In giỏ hàng dạng bảng

printCart() { /_ ... _/ },

// Lấy tổng số sản phẩm (tổng quantity)

getItemCount() { /_ ... _/ },

// Xóa toàn bộ giỏ

clearCart() { /_ ... _/ }

};}// === TEST ===const cart = createCart();cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2cart.printCart();// Kỳ vọng:// ┌──────────────────────────────────────────────┐// │ # │ Sản phẩm │ SL │ Đơn giá │ Tổng │// │ 1 │ iPhone 16 │ 2 │ 25.990.000 │ 51.980.000 │// │ 2 │ AirPods Pro │ 2 │ 6.990.000 │ 13.980.000 │// ├──────────────────────────────────────────────┤// │ Tổng cộng: 65.960.000đ │// └──────────────────────────────────────────────┘cart.applyDiscount("SALE10");cart.printCart();// → Tổng: 59.364.000đ (giảm 10%)console.log("Số SP:", cart.getItemCount()); // → 4cart.removeItem(3);console.log("Sau xóa:", cart.getItemCount()); // → 2

Dưới đây là mã nguồn hoàn chỉnh cho file shopping_cart.js sử dụng kỹ thuật Closure. Tôi đã triển khai đầy đủ các phương thức bạn yêu cầu, kết hợp thêm logic hiển thị giao diện bảng cho console rất gần với kỳ vọng của bạn.

JavaScript
// shopping_cart.js

function createCart() {
// Private data
let items = [];
let currentDiscountCode = null;

    // Helper: Định dạng tiền tệ VNĐ
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
            console.log("│ # │ Sản phẩm           │ SL │ Đơn giá      │ Tổng         │");
            console.log("├─────────────────────────────────────────────────────────────┤");

            items.forEach((item, index) => {
                const lineTotal = item.product.price * item.quantity;

                // Căn lề cho các cột
                const num = String(index + 1).padStart(1);
                const name = item.product.name.padEnd(18);
                const qty = String(item.quantity).padStart(2);
                const price = formatMoney(item.product.price).padStart(12);
                const totalStr = formatMoney(lineTotal).padStart(12);

                console.log(`│ ${num} │ ${name} │ ${qty} │ ${price} │ ${totalStr} │`);
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
Bài B3 (20đ) — Higher-Order Functions Challenge

Tạo file higher_order.js:

Viết các hàm higher-order (hàm nhận hàm làm tham số hoặc trả về hàm):

// 1. pipe() — Nối chuỗi functionsfunction pipe(...fns) { /_ ... _/ }const process = pipe(

x => x \* 2, // 5 → 10

x => x + 10, // 10 → 20

x => x.toString(), // 20 → "20"

x => "Kết quả: " + x);console.log(process(5)); // → "Kết quả: 20"// 2. memoize() — Cache kết quảfunction memoize(fn) { /_ ... _/ }const expensiveCalc = memoize((n) => {

console.log("Đang tính...");

let result = 0;

for (let i = 0; i < n; i++) result += i;

return result;});console.log(expensiveCalc(1000000)); // → "Đang tính..." → 499999500000console.log(expensiveCalc(1000000)); // → (không in "Đang tính...", lấy cache!)// 3. debounce() — Chờ user ngừng gõ mới thực hiệnfunction debounce(fn, delay) { /_ ... _/ }const search = debounce((query) => {

console.log("Searching:", query);}, 500);// Gọi liên tục → chỉ lần cuối mới chạy// 4. retry() — Thử lại nếu lỗiasync function retry(fn, maxAttempts = 3) { /_ ... _/ }

Dưới đây là mã nguồn hoàn chỉnh cho file higher_order.js. Những hàm này (đặc biệt là debounce và memoize) là những pattern cực kỳ phổ biến và quan trọng khi tối ưu hóa hiệu năng trong các dự án thực tế.

File higher_order.js
JavaScript
// ==========================================
// 1. pipe() — Nối chuỗi functions
// ==========================================
// Sử dụng Array.prototype.reduce để truyền kết quả của hàm trước
// làm đầu vào (argument) cho hàm sau.
function pipe(...fns) {
return (initialValue) => {
return fns.reduce((currentValue, currentFunction) => {
return currentFunction(currentValue);
}, initialValue);
};
}

const process = pipe(
x => x _ 2, // 5 _ 2 = 10
x => x + 10, // 10 + 10 = 20
x => x.toString(), // "20"
x => "Kết quả: " + x
);
console.log(process(5)); // → "Kết quả: 20"

// ==========================================
// 2. memoize() — Cache kết quả
// ==========================================
// Dùng Closure để lưu trữ một biến 'cache' (Object hoặc Map).
// Biến cache này sẽ không bị mất đi giữa các lần gọi hàm.
function memoize(fn) {
const cache = new Map();

    return function(...args) {
        // Biến args thành string để làm key cho cache
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            // Trả về kết quả trong cache nếu đã tính toán trước đó
            return cache.get(key);
        }

        // Nếu chưa có, tiến hành gọi hàm gốc
        const result = fn.apply(this, args);
        cache.set(key, result); // Lưu vào cache

        return result;
    };

}

const expensiveCalc = memoize((n) => {
console.log("Đang tính...");
let result = 0;
for (let i = 0; i < n; i++) result += i;
return result;
});

console.log(expensiveCalc(1000000)); // → In ra "Đang tính..." rồi in kết quả
console.log(expensiveCalc(1000000)); // → Trả thẳng kết quả, KHÔNG in "Đang tính..."

// ==========================================
// 3. debounce() — Chờ user ngừng gõ mới thực hiện
// ==========================================
// Hủy bỏ timeout cũ và tạo timeout mới mỗi khi hàm bị gọi lại liên tục.
// Hàm gốc chỉ chạy khi khoảng thời gian trôi qua lớn hơn 'delay'.
function debounce(fn, delay) {
let timeoutId;

    return function(...args) {
        // Xóa bộ đếm thời gian trước đó nếu user tiếp tục thao tác
        clearTimeout(timeoutId);

        // Thiết lập bộ đếm thời gian mới
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };

}

const search = debounce((query) => {
console.log("Searching:", query);
}, 500);

// Nếu bạn gọi hàm này 3 lần liên tiếp, nó chỉ in ra "Searching: apple" sau 500ms
search("a");
search("app");
search("apple");

// ==========================================
// 4. retry() — Thử lại nếu lỗi
// ==========================================
// Sử dụng vòng lặp for kết hợp với async/await và try/catch.
async function retry(fn, maxAttempts = 3) {
for (let attempt = 1; attempt <= maxAttempts; attempt++) {
try {
// Cố gắng thực thi hàm async
return await fn();
} catch (error) {
console.log(`Lỗi ở lần thử ${attempt}...`);

            // Nếu đã là lần thử cuối cùng thì ném lỗi ra ngoài
            if (attempt === maxAttempts) {
                throw new Error(`Thất bại sau ${maxAttempts} lần thử. Lỗi gốc: ${error.message}`);
            }
        }
    }

}

// Giả lập một hàm gọi API có tỷ lệ lỗi cao
const mockApiCall = async () => {
const success = Math.random() > 0.7; // 30% thành công
if (!success) throw new Error("Network Error");
return "Lấy dữ liệu thành công!";
};

// Test thử hàm retry (Bỏ comment để chạy thử)
// retry(mockApiCall, 3)
// .then(res => console.log(res))
// .catch(err => console.error(err.message));
vt như 1 người mới học js thôi

À, mình hiểu rồi! Khi mới học JavaScript, nhìn vào mấy hàm như reduce, Map, hay cách dùng .apply(this, args) thực sự rất "xoắn não" và khó hình dung luồng chạy.

Khi mới bắt đầu, chúng ta ưu tiên dùng vòng lặp for, object {} cơ bản và viết rõ từng bước ra. Chạy được và hiểu được luồng đi của dữ liệu mới là quan trọng nhất.

Dưới đây là phiên bản viết lại theo phong cách "newbie-friendly" (thân thiện với người mới học), siêu dễ đọc và giải thích cặn kẽ từng dòng:

File higher_order.js (Phiên bản cơ bản)
JavaScript
// ==========================================
// 1. pipe() — Nối chuỗi functions
// ==========================================
// Thay vì dùng reduce khó hiểu, mình dùng vòng lặp for bình thường.
function pipe(...fns) {
// Trả về một hàm nhận vào giá trị ban đầu (ví dụ: x = 5)
return function(x) {
let result = x; // Gán giá trị ban đầu vào biến result

        // Chạy lần lượt từng hàm truyền vào
        for (let i = 0; i < fns.length; i++) {
            result = fns[i](result); // Lấy kết quả hiện tại ném vào hàm tiếp theo
        }

        return result; // Trả về kết quả cuối cùng
    }

}

const process = pipe(
x => x \* 2,  
 x => x + 10,  
 x => x.toString(),
x => "Kết quả: " + x
);
console.log(process(5)); // → "Kết quả: 20"

// ==========================================
// 2. memoize() — Cache kết quả
// ==========================================
// Mới học thì mình dùng một object {} bình thường để làm "bộ nhớ" (cache),
// thay vì dùng Map() hay Set().
function memoize(fn) {
let cache = {}; // Tạo một object rỗng để lưu kết quả

    // Giả sử hàm truyền vào chỉ nhận 1 tham số n cho dễ hiểu
    return function(n) {
        // Kiểm tra xem trong cache đã có kết quả của n chưa
        if (cache[n] !== undefined) {
            return cache[n]; // Nếu có rồi thì lấy ra xài luôn, không tính lại
        }

        // Nếu chưa có, thì gọi hàm fn để tính toán
        let result = fn(n);

        // Tính xong thì cất vào cache để lần sau n gọi lại thì có sẵn
        cache[n] = result;

        return result;
    };

}

const expensiveCalc = memoize((n) => {
console.log("Đang tính...");
let result = 0;
for (let i = 0; i < n; i++) result += i;
return result;
});

console.log(expensiveCalc(1000000)); // Lần 1: In "Đang tính..." -> Lưu vào cache
console.log(expensiveCalc(1000000)); // Lần 2: Có sẵn trong cache rồi, lấy ra luôn!

// ==========================================
// 3. debounce() — Chờ user ngừng gõ mới thực hiện
// ==========================================
function debounce(fn, delay) {
let timer; // Tạo một cái đồng hồ hẹn giờ

    return function(query) {
        // Nếu user gõ chữ mới, hủy cái hẹn giờ cũ đi
        clearTimeout(timer);

        // Đặt lại một cái hẹn giờ mới
        timer = setTimeout(function() {
            fn(query); // Sau khi đợi đủ thời gian (delay) thì mới chạy hàm
        }, delay);
    };

}

const search = debounce((query) => {
console.log("Searching:", query);
}, 500);

// Chạy thử
search("a");
search("app");
search("apple"); // Dù gọi 3 lần, nhưng chỉ lần cuối cùng chạy sau 500ms

// ==========================================
// 4. retry() — Thử lại nếu lỗi
// ==========================================
// Dùng vòng lặp for kết hợp với try/catch. Lỗi thì bắt lại, chạy lại.
async function retry(fn, maxAttempts = 3) {
for (let i = 1; i <= maxAttempts; i++) {
try {
// Chạy thử hàm xem sao
let result = await fn();
return result; // Nếu chạy ngon lành thì trả về kết quả luôn và thoát vòng lặp

        } catch (error) {
            console.log("Bị lỗi ở lần thử thứ: " + i);

            // Nếu i đã bằng số lần cho phép tối đa mà vẫn lỗi
            if (i === maxAttempts) {
                console.log("Hết lượt thử!");
                throw error; // Báo lỗi đỏ ra màn hình
            }
        }
    }

}
Tóm lại tư duy cho người mới:

pipe: Cứ lấy kết quả hàm này bỏ vào hàm kia bằng vòng lặp for.

memoize: Dùng một Object {} để làm cái túi thần kỳ, tính xong nhớ nhét kết quả vào túi, lần sau hỏi thì thò tay lấy trong túi ra chứ đừng tính lại.

debounce: Giống như bấm thang máy, hễ ai đó bấm nút là thang máy chờ thêm vài giây. Cứ có người bấm mới là thời gian đếm lại từ đầu, đến khi không ai bấm nữa thang mới chạy.

retry: Thất bại thì thử lại (vòng lặp), bao giờ hết số mạng (maxAttempts) thì báo game over (throw error).

Câu C1 (10đ) — Refactor Code

Code sau hoạt động đúng nhưng viết rất tệ. Refactor sử dụng array methods + arrow functions:

// TRƯỚC (ugly code):function processOrders(orders) {

var result = [];

for (var i = 0; i < orders.length; i++) {

if (orders[i].status === "completed") {

if (orders[i].total > 100000) {

var item = {};

item.id = orders[i].id;

item.customer = orders[i].customer;

item.total = orders[i].total;

item.discount = orders[i].total \* 0.1;

item.finalTotal = orders[i].total - item.discount;

result.push(item);

}

}

}

// Sort by finalTotal descending

for (var j = 0; j < result.length; j++) {

for (var k = j + 1; k < result.length; k++) {

if (result[j].finalTotal < result[k].finalTotal) {

var temp = result[j];

result[j] = result[k];

result[k] = temp;

}

}

}

return result;}

Viết lại thành ≤ 10 dòng dùng filter, map, sort, destructuring, arrow functions.

Câu C2 (10đ) — Thiết kế API

Bạn đang thiết kế một thư viện JS nhỏ miniArray cung cấp map, filter, reduce TỰ VIẾT (không dùng built-in).

const miniArray = {

map(arr, fn) {

// Implement: giống Array.prototype.map

},

filter(arr, fn) {

// Implement: giống Array.prototype.filter

},

reduce(arr, fn, initialValue) {

// Implement: giống Array.prototype.reduce

}};// Test phải pass:console.log(miniArray.map([1,2,3], x => x \* 2)); // → [2,4,6]console.log(miniArray.filter([1,2,3,4], x => x > 2)); // → [3,4]console.log(miniArray.reduce([1,2,3,4], (a,b) => a+b, 0)); // → 10

Dưới đây là đáp án cho hai câu hỏi nâng cao của bạn. Vì đây là bài tập về tư duy và tối ưu code, mình sẽ đưa ra giải pháp kèm theo một chút giải thích ngắn gọn để bạn nắm bắt trọn vẹn ý tưởng nhé.

Câu C1 (10đ) — Refactor Code
Thay vì dùng vòng lặp for lồng nhau, gán từng thuộc tính thủ công và tự viết thuật toán Bubble Sort, chúng ta có thể chuyển sang phong cách lập trình khai báo (declarative) bằng cách chaining (nối chuỗi) các phương thức mảng.

Code đã được refactor:

JavaScript
const processOrders = orders => orders
// 1. Lọc đơn hàng hoàn tất & giá trị > 100k (Dùng Destructuring lấy status, total)
.filter(({ status, total }) => status === "completed" && total > 100000)
// 2. Biến đổi dữ liệu sang format mới
.map(({ id, customer, total }) => ({
id, customer, total,
discount: total _ 0.1,
finalTotal: total _ 0.9 // Rút gọn phép tính (total - total \* 0.1)
}))
// 3. Sắp xếp giảm dần theo finalTotal
.sort((a, b) => b.finalTotal - a.finalTotal);
Tại sao cách này tốt hơn?

Ngắn gọn và dễ đọc: Code đọc như một câu tiếng Anh (Lọc các đơn hàng -> Biến đổi cấu trúc -> Sắp xếp).

Destructuring: Trích xuất thẳng status, total, id, customer ngay trên tham số giúp bỏ bớt cụm orders[i] lặp đi lặp lại.

Hiệu năng & Tái sử dụng: Tận dụng thuật toán sort được tối ưu sẵn của JavaScript engine thay vì dùng Bubble Sort (vốn rất chậm với mảng lớn).

Câu C2 (10đ) — Thiết kế API (Tự viết lại các hàm của Mảng)
Để tự viết lại các hàm này, chúng ta sẽ quay về sử dụng vòng lặp for cơ bản nhất. Điều quan trọng là phải tuân thủ đúng định dạng callback fn(element, index, array) mà JavaScript quy định chuẩn.

Code triển khai miniArray:

JavaScript
const miniArray = {
map(arr, fn) {
const result = [];
for (let i = 0; i < arr.length; i++) {
// Truyền đủ 3 tham số: phần tử hiện tại, chỉ mục, mảng gốc
result.push(fn(arr[i], i, arr));
}
return result;
},

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            // Nếu hàm callback trả về true (truthy), đưa phần tử vào mảng kết quả
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        // Nếu không truyền initialValue, lấy phần tử đầu tiên làm giá trị khởi tạo
        let accumulator = initialValue !== undefined ? initialValue : arr[0];

        // Nếu đã có initialValue thì lặp từ 0, nếu chưa có thì lặp từ 1 (bỏ qua phần tử đầu đã lấy)
        let startIndex = initialValue !== undefined ? 0 : 1;

        for (let i = startIndex; i < arr.length; i++) {
            // Gán lại accumulator bằng kết quả của lần chạy hiện tại
            accumulator = fn(accumulator, arr[i], i, arr);
        }
        return accumulator;
    }

};

// === TEST ===
console.log(miniArray.map([1, 2, 3], x => x \* 2)); // → [2, 4, 6]
console.log(miniArray.filter([1, 2, 3, 4], x => x > 2)); // → [3, 4]
console.log(miniArray.reduce([1, 2, 3, 4], (a, b) => a + b, 0)); // → 10
Lưu ý ở hàm reduce: Độ khó lớn nhất của việc tự build hàm reduce là xử lý trường hợp người dùng không truyền initialValue. Theo chuẩn JS, nếu không có initialValue, hàm sẽ lấy phần tử đầu tiên arr[0] làm giá trị tích lũy ban đầu, và vòng lặp phải bắt đầu chạy từ phần tử thứ 2 (tức index = 1). Code trên đã xử lý gọn gàng logic này!

Câu A1 (5đ) — DOM Tree

Cho HTML:

<div id="app">

<header>

<h1>Todo App</h1>

<nav>

<a href="#" class="active">All</a>

<a href="#">Active</a>

<a href="#">Completed</a>

</nav>

</header>

<main>

<form id="todoForm">

<input id="todoInput" type="text">

<button type="submit">Add</button>

</form>

<ul id="todoList">

<li class="todo-item">Learn HTML</li>

<li class="todo-item completed">Learn CSS</li>

</ul>

</main></div>

Vẽ DOM tree (sơ đồ cây) cho HTML trên

Viết querySelector cho mỗi yêu cầu:Chọn thẻ <h1>

Chọn input trong form

Chọn tất cả .todo-item

Chọn link đang active

Chọn <li> đầu tiên trong #todoList

Chọn tất cả <a> bên trong <nav>

Câu A2 (5đ) — innerHTML vs textContent

Giải thích sự khác nhau. Cho ví dụ khi nào dùng mỗi cái.

Câu hỏi bảo mật: Tại sao innerHTML có thể gây lỗ hổng XSS? Viết 1 ví dụ code minh họa:

// Giả sử user nhập vào input: <img src=x onerror="alert('Hacked!')">const userInput = document.querySelector("#search").value;document.querySelector("#result").innerHTML = userInput; // ← Nguy hiểm!// Sửa thế nào?

Câu A3 (5đ) — Event Bubbling

Không chạy code, dự đoán thứ tự console.log:

document.querySelector("#outer").addEventListener("click", () => {

console.log("OUTER");});document.querySelector("#inner").addEventListener("click", () => {

console.log("INNER");});document.querySelector("#btn").addEventListener("click", (e) => {

console.log("BUTTON");

// e.stopPropagation(); ← nếu bỏ comment → output thay đổi thế nào?});

<div id="outer">

<div id="inner">

<button id="btn">Click me</button>

</div></div>

Khi click vào button, output = ???. Nếu uncomment stopPropagation(), output = ???

Chào bạn! Dưới đây là phần giải đáp chi tiết cho các câu hỏi về DOM và Sự kiện (Events) của bạn. Mình tiếp tục giữ phong cách thân thiện, rõ ràng, giải thích cặn kẽ từng bước để bạn dễ hình dung nhé!

Câu A1 (5đ) — DOM Tree & querySelector

1. Sơ đồ cây (DOM Tree) cho HTML:

Bạn có thể hình dung DOM Tree giống như một cái cây gia phả. div#app là "ông nội", header và main là 2 người con, và bên trong chứa các cháu chắt...

Plaintext
div#app
├── header
│ ├── h1 ("Todo App")
│ └── nav
│ ├── a.active ("All")
│ ├── a ("Active")
│ └── a ("Completed")
└── main
├── form#todoForm
│ ├── input#todoInput [type="text"]
│ └── button [type="submit"] ("Add")
└── ul#todoList
├── li.todo-item ("Learn HTML")
└── li.todo-item.completed ("Learn CSS")

2. Viết querySelector cho từng yêu cầu:

Chọn thẻ <h1>: document.querySelector("h1");

Chọn input trong form:

- document.querySelector("#todoInput"); (hoặc document.querySelector("#todoForm input");)

Chọn TẤT CẢ .todo-item:

- document.querySelectorAll(".todo-item");

Chọn link đang active:

- document.querySelector("a.active");

Chọn <li> đầu tiên trong #todoList:

- document.querySelector("#todoList li"); (hoặc document.querySelector("#todoList .todo-item");)

Chọn TẤT CẢ <a> bên trong <nav>:

- document.querySelectorAll("nav a");

Câu A2 (5đ) — innerHTML vs textContent
Giải thích sự khác nhau

\*innerHTML

- Tác dụng: Đọc hoặc ghi nội dung dưới dạng Mã HTML. Trình duyệt sẽ dịch các thẻ (ví dụ <b>, <img>) thành giao diện thật.
- Khi nào sử dụng: Khi bạn muốn dùng JavaScript để tự động tạo ra các thẻ HTML mới và gắn vào trang.

\*textContent

- Tác dụng: Chỉ đọc hoặc ghi Văn bản thuần túy (raw text). Trình duyệt coi mọi thứ bạn gán vào chỉ là chữ, dù có chứa thẻ HTML thì nó cũng in y nguyên cái thẻ đó ra màn hình.
- Khi nào sử dụng : Khi bạn muốn hiển thị nội dung do người dùng nhập vào (tên, bình luận, tin nhắn...).

2.  Tại sao innerHTML có thể gây lỗ hổng XSS?

Lỗ hổng xảy ra vì innerHTML quá "tin người". Khi bạn dùng innerHTML để hiển thị nội dung người dùng nhập, nếu một hacker nhập mã độc như: <img src=x onerror="alert('Hacked!')">
Trình duyệt sẽ hiểu đây là một thẻ HTML thật. Nó cố tải hình ảnh nhưng bị lỗi (vì src=x), thế là nó kích hoạt sự kiện onerror và chạy đoạn mã JavaScript ác ý bên trong alert('Hacked!').

// Giả sử user nhập vào input: <img src=x onerror="alert('Hacked!')">
const userInput = document.querySelector("#search").value;
document.querySelector("#result").innerHTML = userInput; // ← Nguy hiểm!

// Sửa thế nào?

const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput;

Câu A3 (5đ) — Event Bubbling
Không chạy code, dự đoán thứ tự console.log:

document.querySelector("#outer").addEventListener("click", () => {
console.log("OUTER"); // Output: OUTER
});

document.querySelector("#inner").addEventListener("click", () => {
console.log("INNER"); // Output: INNER
});

document.querySelector("#btn").addEventListener("click", (e) => {
console.log("BUTTON"); // Output: BUTTON
// e.stopPropagation();  
});

<div id="outer">
    <div id="inner">
        <button id="btn">Click me</button>
    </div>
</div>

2. Nếu uncomment e.stopPropagation(); -> output: BUTTON

Hàm stopPropagation() giống như một cái khiên chặn bọt khí lại. Nó bảo trình duyệt: "Xử lý xong cái click của tôi ở đây thì dừng lại luôn, đừng lan lên các thẻ cha nữa!".

Do đó, các sự kiện click của #inner và #outer sẽ không bao giờ bị kích hoạt.
