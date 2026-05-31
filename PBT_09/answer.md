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

Câu C1 (8đ) — Debug DOM Code
Dưới đây là 7+ lỗi nghiêm trọng trong đoạn code ban đầu:

1.Lỗi gán lại hằng số và sai thuộc tính DOM: Trong #resetBtn, countDisplay = count; sẽ gây lỗi vì countDisplay được khai báo bằng const. Ngoài ra, bạn không thể gán trực tiếp một số vào một tham chiếu DOM, mà phải gán vào countDisplay.textContent.

2.Sai tên sự kiện: Trong #decrementBtn, sử dụng "onclick" trong addEventListener là sai, tên sự kiện chuẩn phải là "click".

3.Lỗi xóa nội dung HTML: historyList.innerHTML = null; sẽ bị ép kiểu thành chuỗi "null" và in ra màn hình.Sửa Cách đúng là gán bằng chuỗi rỗng "".

4.Lỗi gọi phương thức: Trong #clearHistory, item.remove; thiếu dấu ngoặc đơn. Nó phải là item.remove(); để thực thi hàm.

5.Lỗi kiểu dữ liệu khi lấy từ localStorage: localStorage chỉ lưu chuỗi. Khi tải lại trang, count sẽ mang giá trị chuỗi (ví dụ "1"). Phải dùng parseInt() hoặc Number() kết hợp với giá trị mặc định || 0 để tránh NaN.

6.Thiếu logic phục hồi dữ liệu: Code có lưu historyList.innerHTML vào localStorage ở sự kiện beforeunload, nhưng lại quên lấy nó ra (restore) ở sự kiện load.

7.Mất Event Listener khi phục hồi bằng innerHTML (Lỗi logic DOM): Nếu bạn tải lại chuỗi innerHTML từ localStorage, các thẻ <li> sẽ hiển thị lại nhưng bị mất toàn bộ sự kiện click để xóa. Giải pháp là áp dụng Event Delegation (như sẽ đề cập ở Câu C2).

Câu C2 (7đ) — Performance
Giải thích: Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE? Event Delegation giải quyết thế nào?

- Tại sao bind event lên 1000 elements riêng lẻ là BAD PRACTICE?

Tốn bộ nhớ (Memory Leak): Trình duyệt phải tạo ra và quản lý 1000 Object sự kiện (Event Listener) riêng biệt.

Hiệu năng chậm: Vòng lặp gán sự kiện cho 1000 phần tử sẽ khóa luồng chính (Main thread) của trình duyệt trong lúc khởi tạo.

Vấn đề DOM động: Khi thêm mới các phần tử (như các thẻ <li> ở Câu C1), các phần tử mới sinh ra sẽ chưa có sự kiện. Bạn phải viết thêm code để bind sự kiện cho chúng rất cồng kềnh.

- Event Delegation giải quyết thế nào?

Thay vì gắn sự kiện cho 1000 phần tử con, ta chỉ gắn 1 sự kiện duy nhất lên phần tử cha chứa chúng.

Dựa vào cơ chế Event Bubbling (Sự kiện nổi bọt), khi click vào con, sự kiện sẽ lan lên cha. Tại hàm xử lý của cha, ta dùng event.target để xác định chính xác phần tử con nào bị click và xử lý.

Cho code:

for (let i = 0; i < 1000; i++) {
const div = document.createElement("div");
div.textContent = `Item ${i}`;
document.body.appendChild(div); // ← 1000 lần reflow!
}
Refactor dùng DocumentFragment để chỉ gây 1 lần reflow.:

const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
const div = document.createElement("div");
div.textContent = `Item ${i}`;
// Thêm div vào fragment thay vì body
fragment.appendChild(div);  
}
document.body.appendChild(fragment);

Giải thích tại sao nhanh hơn:
Mỗi lần bạn thao tác trực tiếp lên Live DOM (như document.body.appendChild), trình duyệt phải thực hiện Reflow (tính toán lại kích thước, vị trí các phần tử) và Repaint (vẽ lại giao diện). Thực hiện điều này 1000 lần sẽ làm trang web bị đơ/giật (jank).

DocumentFragment là một cấu trúc DOM "ảo" nằm trong bộ nhớ (Memory) và tách rời khỏi cây DOM hiện tại. Các thao tác appendChild vào fragment không hề kích hoạt Reflow hay Repaint. Khi vòng lặp kết thúc, thao tác document.body.appendChild(fragment) sẽ chuyển toàn bộ hàng nghìn node con từ fragment vào cây DOM thực chỉ trong 1 lần duy nhất, giúp hiệu suất tăng lên đột phá.
