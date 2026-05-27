Câu A1:
// Đoạn 1
console.log(x);
var x = 5;
Kết quả: undefined
Giải thích: Kết quả này không báo lỗi mà in ra undefined là do cơ chế Hoisting của JavaScript. Trình biên dịch sẽ "kéo" phần khai báo biến (var x) lên trên cùng của phạm vi (scope), nhưng phần gán giá trị (= 5) vẫn nằm ở vị trí cũ.

// Đoạn 2
console.log(y);
let y = 10;
Kết quả: ReferenceError: Cannot access 'y' before initialization
Giải thích: Tương tự var, từ khóa let (và cả const) cũng được hoisting. Tuy nhiên, JavaScript áp dụng một quy tắc bảo vệ gọi là Temporal Dead Zone (TDZ) — Vùng tử vong tạm thời. Từ đầu phạm vi cho đến dòng khai báo let y = 10, biến y nằm trong TDZ và mọi nỗ lực truy cập vào nó sẽ bị báo lỗi. Điều này giúp code an toàn và dễ dự đoán hơn so với var.

// Đoạn 3
const z = 15;
z = 20;
console.log(z);
Kết quả : Lỗi
Giải thích: Từ khóa const (constant) được dùng để khai báo một hằng số. Khi một biến đã được gán giá trị ban đầu qua const, bạn tuyệt đối không thể gán lại cho nó một giá trị hoàn toàn mới (reassignment).
Giải thích: Nhiều người lầm tưởng const nghĩa là giá trị hoàn toàn bất biến (immutable). Thực tế, const chỉ khóa địa chỉ tham chiếu (reference) của biến đó trong bộ nhớ.

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
Kết quả: [1,2,3,4]

// Đoạn 5
let a = 1;
{
let a = 2;
console.log("Trong block:", a);
}
console.log("Ngoài block:", a);

Kết quả: Trong block: 2
Ngoài block: 1
Giải thích: let và const có tính chất Block Scope, nghĩa là chúng chỉ tồn tại bên trong cặp ngoặc nhọn {} chứa chúng. Biến let a = 2 bên trong block là một biến hoàn toàn độc lập, được phân bổ ở một vùng nhớ khác và che khuất (shadowing) biến a ở bên ngoài. Khi thoát ra khỏi block, biến a bên ngoài không hề bị ảnh hưởng. Nếu bạn thay let bằng var trong trường hợp này, var sẽ phớt lờ block scope và ghi đè giá trị khiến cả hai console.log đều in ra 2.

Câu A2 (5đ) — Data Types & Coercion
Không chạy code, dự đoán kết quả:

console.log(typeof null); // object
console.log(typeof undefined); // undefined
console.log(typeof NaN); // Number
console.log("5" + 3); // 53
console.log("5" - 3); // 2
console.log("5" \* "3"); // 15
console.log(true + true); // 2
console.log([] + []); // ""
console.log([] + {}); // "[object Object]"
console.log({} + []); // "[object Object]"

Sau khi trả lời, chạy code kiểm tra. Giải thích tại sao "5" + 3 và "5" - 3 cho kết quả khác nhau.

typeof null === "object": Đây là một lỗi (bug) lịch sử từ những phiên bản JavaScript đầu tiên và chưa bao giờ được sửa để tránh làm hỏng các trang web cũ. null thực chất là một giá trị nguyên thủy (primitive), không phải object.

typeof NaN === "number": NaN viết tắt của "Not a Number", nhưng trong chuẩn IEEE 754, nó vẫn thuộc kiểu dữ liệu số (đại diện cho một phép toán số học thất bại).

[] + [] === "": Mảng bị ép kiểu thành chuỗi. Mảng rỗng biến thành chuỗi rỗng "". Phép cộng hai chuỗi rỗng cho ra chuỗi rỗng.

[] + {} === "[object Object]": Mảng ép thành "", Object ép thành chuỗi mặc định là "[object Object]". Nối lại với nhau ta có kết quả này.

Giải thích tại sao "5" + 3 và "5" - 3 cho kết quả khác nhau.
Sự khác biệt cốt lõi nằm ở cách JavaScript ưu tiên các toán tử:

\*Trường hợp "5" + 3 (Kết quả: "53")

Toán tử + trong JavaScript có hai vai trò: Cộng toán học và Nối chuỗi.
Quy tắc: Nếu có ít nhất một toán hạng (operand) là chuỗi (String), JavaScript sẽ ưu tiên hành vi Nối chuỗi.
Nó sẽ tự động ép kiểu số 3 thành chuỗi "3", sau đó thực hiện nối chuỗi: "5" + "3" = "53".

\*Trường hợp "5" - 3 (Kết quả: 2)

Toán tử - (cùng với \*, /, %) chỉ có một vai trò duy nhất: Toán học.
Quy tắc: Vì không thể thực hiện phép trừ trên một chuỗi chữ, JavaScript sẽ cố gắng ép kiểu ngầm định chuỗi "5" thành số nguyên 5.
Phép toán trở thành phép trừ toán học thông thường: 5 - 3 = 2.

Câu A3 (5đ) — So sánh == vs ===
Dự đoán true hay false:

console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(NaN == NaN); // false
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
Quy tắc: Từ giờ trở đi, bạn nên dùng == hay ===? Tại sao?
Nên dùng === vì:

- Dễ dự đoán và An toàn hơn: Phép toán == chứa quá nhiều quy tắc ép kiểu ngầm định phức tạp và phi logic (như việc "" == false trả về true). Dùng === giúp bạn loại bỏ hoàn toàn các bug tiềm ẩn do sai lệch kiểu dữ liệu, đảm bảo logic code hoạt động đúng như những gì bạn đọc bằng mắt.

- Hiệu suất: Về mặt lý thuyết, === chạy nhanh hơn == một chút vì trình biên dịch không phải tốn thêm bước kiểm tra và thực hiện ép kiểu ngầm định.

- Tiêu chuẩn công nghiệp: Trong các dự án thực tế, đặc biệt là khi làm việc với các framework hướng tới tính chặt chẽ và mở rộng như NestJS, hoặc khi viết logic backend, frontend bằng TypeScript, thói quen sử dụng === gần như là tiêu chuẩn bắt buộc (Best Practice). Việc kiểm soát chặt chẽ kiểu dữ liệu ngay từ đầu giúp hệ thống ổn định và dễ bảo trì hơn rất nhiều.

Câu A4 (5đ) — Truthy & Falsy
Liệt kê TẤT CẢ giá trị Falsy trong JavaScript (đọc tài liệu). Sau đó dự đoán kết quả:

if ("0") console.log("A"); // In ra "A"
if ("") console.log("B"); // Không in
if ([]) console.log("C"); // In ra "C"
if ({}) console.log("D"); // In ra "D"
if (null) console.log("E"); // Không in
if (0) console.log("F"); // Không in
if (-1) console.log("G"); // In ra "G"
if (" ") console.log("H"); // In ra "H"

Câu A5 (5đ) — Template Literals
Viết lại 3 cách nối chuỗi sau bằng template literal (backtick):

// Cách 1:

const greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
const url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
const html = `

<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>
`;
