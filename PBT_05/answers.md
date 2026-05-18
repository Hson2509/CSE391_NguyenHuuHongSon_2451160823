Câu A1 (5đ) — Viewport & Mobile-First

1. Viết chính xác thẻ <meta viewport> chuẩn. Giải thích từng thuộc tính.
<meta name="viewport" content="width=device-width, initial-scale=1.0">

- name="viewport": Báo cho trình duyệt biết rằng thẻ meta này dùng để kiểm soát viewport (vùng hiển thị nội dung của trang web trên thiết bị).

- width=device-width: Yêu cầu trình duyệt thiết lập chiều rộng của trang web bằng chính xác chiều rộng vật lý của màn hình thiết bị đang hiển thị (thay vì dùng một kích thước cố định).

- initial-scale=1.0: Mức độ thu phóng ban đầu khi trang web vừa được tải. Giá trị 1.0 có nghĩa là tỷ lệ 1:1 (hiển thị đúng kích thước thực, không phóng to hay thu nhỏ).

2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị trang web như thế nào? (Đọc chương 13)

- Thiếu dòng này: iPhone giả định trang rộng 980px (như desktop) → thu nhỏ lại → chữ bé xíu → UX tệ.

3. Mobile-First và Desktop-First khác nhau thế nào? Viết ví dụ CSS cho mỗi cách với breakpoint 768px. Tại sao Mobile-First được khuyên dùng?

- Mobile-First và Desktop-First khác nhau thế nào?
  Mobile-Fist: Bắt đầu từ cái cốt lõi, nhỏ nhất rồi đắp thêm tính năng/bố cục phức tạp khi màn hình to ra, Code CSS bên ngoài Media Query là dành cho điện thoại.Sử dụng min-width để kích hoạt CSS ở các màn hình LỚN HƠN.

- Desktop-First: Thiết kế đầy đủ cho màn hình lớn trước, sau đó gọt giũa, ẩn bớt hoặc xếp chồng lại khi màn hình nhỏ đi,Code CSS bên ngoài Media Query là dành cho máy tính.Sử dụng max-width để kích hoạt CSS ở các màn hình NHỎ HƠN.

-CSS Cho Mobile-First
.container {
display: block; /_ Xếp dọc trên điện thoại _/
width: 100%;
}

@media (min-width: 768px) {
.container {
display: flex; /_ Xếp ngang trên màn hình lớn _/
}
}

-CSS cho Desktop-First
.container {
display: flex; /_ Xếp ngang trên máy tính _/
width: 100%;
}

/_ Khi màn hình dưới 768px (Điện thoại) _/
@media (max-width: 767px) {
.container {
display: block; /_ Ép xếp dọc trên điện thoại _/
}
}

- Mobile-First được khuyên dùng vì :
  Mobile tải ít CSS hơn (mobile chỉ tải mobile styles, không download desktop styles)
  Buộc bạn ưu tiên nội dung quan trọng trước (content thinking)
  Google và performance tools đánh giá cao hơn

Câu A2 (5đ) — Breakpoints
Ghi lại breakpoints chuẩn (theo Bootstrap).

- xs (Extra small)
  Kích thước pixel: < 576px
  Thiết bị đại diện: Điện thoại di động (Màn hình dọc)
  Lưới sản phẩm nên hiển thị mấy cột: 1 cột (hoặc 2 cột nếu card rất nhỏ)

- sm(small)
  Kích thước pixel: >=576px
  Thiết bị đại diện: Điện thoại (Ngang) / Phablet
  Lưới sản phẩm nên hiển thị mấy cột: 2 cột

- md (Medium)
  Kích thước pixel: >= 768px
  Thiết bị đại diện: Máy tính bảng (Tablet)
  Lưới sản phẩm nên hiển thị mấy cột: 2-3 cột

- lg (Large)
  Kích thước pixel: >= 992px
  Thiết bị đại diện: Laptop / Desktop nhỏ
  Lưới sản phẩm nên hiển thị mấy cột: 3-4 cột

- xl (Extra large)
  Kích thước pixel: >= 1200px
  Thiết bị đại diện: Desktop tiêu chuẩn / Màn hình lớn
  Lưới sản phẩm nên hiển thị mấy cột: 4 cột

- xxl (Extra extra large)
  Kích thước pixel: >= 1400px
  Thiết bị đại diện: Màn hình siêu rộng (Ultrawide)
  Lưới sản phẩm nên hiển thị mấy cột: 5 - 6 cột

Câu A3 (5đ) — Media Queries
Đọc CSS sau, cho biết ở mỗi kích thước màn hình, .container có width bao nhiêu? Điền bảng.

.container { width: 100%; padding: 10px; }

@media (min-width: 576px) { .container { width: 540px; } }
@media (min-width: 768px) { .container { width: 720px; } }
@media (min-width: 992px) { .container { width: 960px; } }
@media (min-width: 1200px) { .container { width: 1140px; } }

| Chiều rộng màn hình | `.container` width |
| ------------------- | ------------------ |
| 375px (iPhone SE)   | 100%               |
| 600px               | 540px              |
| 800px               | 720px              |
| 1000px              | 960px              |
| 1400px              | 1140px             |

Câu A4 (5đ) — SCSS Basics
Đọc chương 16. Giải thích 4 tính năng chính của SCSS và cho ví dụ:

1. Variables ($primary-color)

- Giải thích: SCSS cho phép bạn lưu trữ các giá trị thường xuyên sử dụng (như mã màu, font chữ, kích thước) vào một "biến" bắt đầu bằng ký tự $. Việc này giúp bạn dễ dàng đồng bộ và thay đổi giao diện toàn trang chỉ bằng cách sửa giá trị biến ở một nơi duy nhất.
- Ví dụ:
  $primary-color: #3182ce;
  $base-font: 'Helvetica', sans-serif;
  body {color: $primary-color; font-family: $base-font; }

2. Nesting (viết CSS lồng nhau)

- Giải thích: Thay vì phải lặp lại các CSS Selector dài dòng, SCSS cho phép bạn viết các class con nằm lồng bên trong class cha, giống hệt với cấu trúc phân cấp của thẻ HTML. Ký tự & được dùng để đại diện cho chính class cha đó (thường dùng cho các trạng thái như :hover, :active).
- Ví dụ :
  .navbar {
  background-color: #333;
  ul { list-style: none; }
  li { display: inline-block; }
  a {
  color: white;
  text-decoration: none;
  &:hover { color: #3182ce; } /_ Dịch ra CSS sẽ là: .navbar a:hover _/
  }
  }

3. Mixins (@mixin, @include)

- Giải thích: Mixin hoạt động giống như một "hàm" trong lập trình. Bạn có thể đóng gói một cụm các thuộc tính CSS thường xuyên đi chung với nhau vào một Mixin. Đặc biệt, Mixin có thể nhận tham số truyền vào để thay đổi linh hoạt. Để gọi Mixin ra sử dụng, ta dùng @include.
- Ví dụ:
  @mixin flex-center($direction: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
  }
  .box {
  @include flex-center(column);
  width: 200px;
  height: 200px;
  }

4. @extend / Inheritance

- Giải thích: Lệnh @extend cho phép một class "kế thừa" toàn bộ thuộc tính CSS của một class khác. Điểm hay của @extend là khi biên dịch ra CSS, nó sẽ gộp chung các selector lại với nhau (ví dụ: .btn, .btn-danger { ... }), giúp file CSS nhẹ hơn và code SCSS không bị lặp lại

- Ví dụ:
  .btn {
  padding: 10px 20px;
  border-radius: 4px;
  border: none;
  font-weight: bold;
  }

  .btn-danger {
  @extend .btn;
  background-color: red;
  color: white;
  }

- Trình duyệt KHÔNG đọc được file .scss vì
  Trình duyệt (như Chrome, Safari, Edge) được lập trình sẵn các bộ phân tích cú pháp (parser) chỉ có khả năng hiểu được 3 ngôn ngữ cốt lõi của web: HTML, CSS và JavaScript chuẩn.SCSS (Sassy CSS) thực chất là một Preprocessor (Ngôn ngữ tiền xử lý). Nó chứa các quy tắc logic, biến số ($), vòng lặp (@for), điều kiện (@if), và các từ khóa đặc biệt (@mixin, @extend) mà bộ Parser CSS của trình duyệt hoàn toàn không biết cách giải mã. Nếu bạn nhúng trực tiếp file .scss vào HTML bằng thẻ <link>, trình duyệt sẽ báo lỗi hoặc bỏ qua nó hoàn toàn.

- Các bước để chuyển SCSS thành CSS
  Để chuyển đổi mã SCSS thành CSS (quá trình này gọi là biên dịch hoặc compilation), bạn cần sử dụng một công cụ trung gian gọi là Sass Compiler (Trình biên dịch Sass), vì trình duyệt web mặc định không thể đọc và hiểu trực tiếp file .scss.
