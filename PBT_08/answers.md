Câu A1

1. Ba cách khai báo hàm
   Cách 1: Function Declaration (Khai báo hàm truyền thống)

JavaScript
function tinhThueBaoHiem_Declaration(luong) {
const thue = luong > 11000000 ? luong \* 0.1 : 0;
const thuc_nhan = luong - thue;
return { thue, thuc_nhan };
}
Cách 2: Function Expression (Biểu thức hàm)

JavaScript
const tinhThueBaoHiem_Expression = function(luong) {
const thue = luong > 11000000 ? luong \* 0.1 : 0;
const thuc_nhan = luong - thue;
return { thue, thuc_nhan };
};
Cách 3: Arrow Function (Hàm mũi tên - ES6)

JavaScript
const tinhThueBaoHiem_Arrow = (luong) => {
const thue = luong > 11000000 ? luong \* 0.1 : 0;
const thuc_nhan = luong - thue;
return { thue, thuc_nhan };
};

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
cconsole.log(c.increment()); // 1
console.log(c.increment()); // 2
console.log(c.increment()); // 3
console.log(c.decrement()); // 2
console.log(c.getCount()); // 2

// Đoạn 2:
for (var i = 0; i < 3; i++) {
setTimeout(() => console.log("var:", i), 100);
}
for (let j = 0; j < 3; j++) {
setTimeout(() => console.log("let:", j), 200);
}

Kết quả:
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
Đọc chương 06. Cho mảng: const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Viết 1 dòng code cho mỗi yêu cầu (dùng arrow function):

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
const reversed = [...nums].reverse();

Câu A4 (5đ) — Object Destructuring & Spread
Không chạy code, dự đoán output:

const product = {
name: "iPhone 16",
price: 25990000,
specs: { ram: 8, storage: 256, color: "Titan" }
};

// Destructuring
const { name, price, specs: { ram, color } } = product;
console.log(name, price, ram, color); // Output: iPhone 16 25990000 8 Titan
console.log(specs); // Output: ReferenceError: specs is not defined

// Spread
const updated = { ...product, price: 23990000, sale: true };
console.log(updated.price); // Output: 23990000
console.log(updated.sale); // Output: true
console.log(product.price); // Output: 25990000 (Gốc không bị đổi vì price là kiểu nguyên thủy và đã được copy giá trị)

// Spread gotcha
const copy = { ...product };
copy.specs.ram = 16;
console.log(product.specs.ram); // Output: 16
Tại sao lại là 16? :Toán tử spread (...) chỉ thực hiện Shallow Copy (sao chép nông). Nó chỉ sao chép giá trị của các thuộc tính ở cấp độ đầu tiên. Đối với thuộc tính specs (là một object lồng nhau), nó không tạo ra object mới mà chỉ sao chép tham chiếu (reference) trỏ tới ô nhớ của object specs ban đầu. Do đó, cả product.specs và copy.specs đều trỏ chung về một chỗ. Khi bạn thay đổi copy.specs.ram, giá trị gốc cũng bị thay đổi theo.

Câu C1 (10đ) — Refactor Code

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

Câu C2 (10đ) — Thiết kế API

const miniArray = {
map(arr, fn) {
const result = [];
for (let i = 0; i < arr.length; i++) {
result.push(fn(arr[i], i, arr));
}
return result;
},

    filter(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            if (fn(arr[i], i, arr)) {
                result.push(arr[i]);
            }
        }
        return result;
    },

    reduce(arr, fn, initialValue) {
        let accumulator = initialValue !== undefined ? initialValue : arr[0];
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
