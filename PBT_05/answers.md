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

Câu C1: Mở trang VNExpress

- Mobile (375px)

1. Navigation thay đổi thế nào?
   Sử dụng Hamburger Menu: Ở góc trên cùng bên trái (ngay cạnh logo VNExpress) đã xuất hiện biểu tượng Hamburger (3 dấu gạch ngang). Khi bấm vào đây, một Dropdown/Off-canvas menu sẽ trượt ra chứa toàn bộ danh mục của báo.

Thanh cuộn ngang (Horizontal Scroll): Thay vì dàn ngang toàn bộ các chuyên mục (Thời sự, Góc nhìn, Thế giới...) ra màn hình như trên Desktop, VNExpress sử dụng một thanh menu phụ nhỏ ngay dưới Header cho phép người dùng vuốt ngang để chọn nhanh.

2. Lưới content thay đổi mấy cột?
   Giao diện đã chuyển hoàn toàn về lưới 1 cột (1 column).

Trên Desktop, VNExpress thường có layout 3 cột (cột bài đinh bên trái, cột bài phụ ở giữa, và cột quảng cáo/tin xem nhiều bên phải). Tuy nhiên trên Mobile, mọi thứ được "bẻ gãy" và xếp chồng lên nhau thành một trục dọc duy nhất (Ảnh ở trên, Tiêu đề và Tóm tắt nằm ngay dưới).

3. Elements nào bị ẩn trên mobile?
   Sidebar (Cột bên phải): Toàn bộ không gian chứa quảng cáo lớn, banner, hoặc các widget phụ (như giá vàng, chứng khoán, thời tiết) nằm ở cột phải trên Desktop đều bị ẩn đi hoặc bị đẩy xuống dưới cùng của trang web.

Đoạn tóm tắt dài (Sapo): Với các bài báo nhỏ ở phía dưới, phần văn bản tóm tắt thường bị ẩn đi (hoặc cắt ngắn đáng kể), chỉ hiển thị Ảnh thumbnail + Tiêu đề nhằm tiết kiệm không gian lướt cho ngón tay.

Thanh tìm kiếm mở rộng: Ô nhập chữ tìm kiếm bị ẩn đi, chỉ còn giữ lại một Icon hình kính lúp (🔍) nhỏ gọn trên Header.

4. Font size có thay đổi không?
   Có, font size thay đổi để tối ưu hóa khả năng đọc (Readability).

Dù màn hình nhỏ lại, nhưng kích thước chữ của các Tiêu đề bài viết lại cho cảm giác to và đậm hơn tương đối so với tỷ lệ màn hình. Khoảng cách giữa các dòng (line-height) và khoảng cách giữa các bài viết (margin) cũng được nới lỏng ra để ngón tay dễ dàng chạm (Touch target) mà không bị ấn nhầm sang bài khác.

- Tablet (768px)

1. Navigation thay đổi thế nào?
   Vẫn dùng Hamburger Menu: Tương tự như Mobile, biểu tượng Hamburger (3 dấu gạch ngang) vẫn nằm ở góc trái trên cùng để chứa các menu mở rộng.

Xuất hiện lại Thanh menu ngang (Navbar): Khác với Mobile (phải vuốt ngang khó khăn), màn hình Tablet đã đủ độ rộng để hiển thị một thanh menu ngang chứa rất nhiều chuyên mục (Thời sự, Góc nhìn, Thế giới, Kinh doanh...) ngay bên dưới Header, rất giống với trải nghiệm trên Desktop.

Các nút công cụ bổ sung như Kính lúp (Tìm kiếm) và Đăng nhập đã có không gian rộng rãi hơn ở góc phải.

2. Lưới content thay đổi mấy cột?
   Trên Tablet, layout đã bắt đầu có sự phân chia cột phức tạp hơn thay vì chỉ 1 cột xếp dọc như Mobile:

Tin nổi bật (Bài đinh trên cùng): Chia thành 2 cột (Cột trái chứa ảnh to, cột phải chứa Tiêu đề và Sapo).

Khối tin phụ ngay bên dưới: Chia thành 3 cột (2 cột là tin tức có ảnh nhỏ, cột thứ 3 ngoài cùng bên phải là khối "Góc nhìn").

Danh sách tin tức phía dưới: Chuyển sang dạng List (Danh sách), bản chất là bố cục 2 cột (Ảnh nhỏ bên trái, Chữ bên phải) nằm trên cùng 1 hàng.

3. Elements nào bị ẩn (so với Desktop)?
   Mặc dù Tablet đã rộng hơn, nhưng Sidebar (Cột bên phải) - nơi chứa các quảng cáo banner dọc khổ lớn, tiện ích tỷ giá/thời tiết, và danh sách "Tin xem nhiều" trên bản Desktop - vẫn bị ẩn hoàn toàn (hoặc bị đẩy tít xuống dưới đáy trang).

Lý do là kích thước 768px vẫn chưa đủ để chứa đồng thời cột nội dung chính và cột Sidebar mà không làm chữ bị ép quá nhỏ.

4. Font size có thay đổi không?
   Có. So với cảm quan trên Mobile, font size trên Tablet có cảm giác nhỏ hơn tương đối so với khung hình.

Do chiều ngang đã rộng hơn (768px), các đoạn văn bản tóm tắt (Sapo) dưới tiêu đề được hiển thị đầy đủ và dài hơn thay vì bị cắt gọt như trên điện thoại. Chiều cao dòng (line-height) được giữ ở mức chuẩn giúp người dùng đọc lướt khối lượng thông tin lớn dễ dàng hơn.

- Desktop (1440px)

1. Navigation thay đổi thế nào?
   Thanh menu ngang (Navbar) đầy đủ: Thay vì ẩn sau Hamburger Menu (như trên Mobile) hay hiển thị một phần (như trên Tablet), thanh menu ngang trên Desktop trải dài toàn bộ chiều rộng, hiển thị tất cả các chuyên mục chính một cách rõ ràng.

Mega Menu/Dropdown: Khi bạn rê chuột (hover) vào các chuyên mục, các menu con thả xuống (dropdown) sẽ xuất hiện, cho phép truy cập nhanh vào các chuyên mục phụ mà không cần nhấp chuột.

Các công cụ phụ trợ: Thanh tìm kiếm, nút Đăng nhập, và các liên kết phụ (như "Mới nhất", "Quốc tế") được bố trí rộng rãi và dễ nhìn hơn.

2. Lưới content thay đổi mấy cột?
   Bố cục chuyển sang hệ thống lưới 3 cột (3 columns) phức tạp hơn nhiều so với Mobile (1 cột) và Tablet (2 cột):

Cột trái: Dành cho bài viết chính nổi bật nhất (Ảnh lớn, tiêu đề lớn, Sapo đầy đủ).

Cột giữa: Chứa các tin tức quan trọng khác, thường được sắp xếp theo dạng danh sách hoặc các khối tin nhỏ.

Cột phải (Sidebar): Đây là cột mới xuất hiện trên Desktop, dành riêng cho các thành phần phụ.

3. Elements nào bị ẩn trên mobile nhưng xuất hiện lại trên Desktop?
   Sidebar (Cột bên phải): Khu vực này chứa các Banner quảng cáo khổ lớn, danh sách "Tin xem nhiều", và các Widget tiện ích (ví dụ: Tỷ giá vàng, Chứng khoán, Lịch thi đấu bóng đá). Đây là những phần bị ẩn hoàn toàn trên Mobile để ưu tiên nội dung chính.

Sapo (Tóm tắt bài viết): Sapo xuất hiện đầy đủ dưới hầu hết các tiêu đề bài báo trên Desktop, trong khi trên Mobile thường bị cắt ngắn hoặc ẩn đi để tiết kiệm không gian.

4. Font size có thay đổi không?
   Kích thước tương đối: Mặc dù font size thực tế (theo pixel) có thể không lớn hơn nhiều so với Mobile, nhưng so với diện tích màn hình khổng lồ của Desktop, font chữ tạo cảm giác nhỏ gọn lại.

Mật độ thông tin (Information Density): Việc giữ font chữ ở mức vừa phải (khoảng 14px - 16px) kết hợp với màn hình lớn giúp VNExpress hiển thị một khối lượng tin tức cực kỳ dày đặc trên cùng một màn hình, phù hợp với thói quen đọc lướt của người dùng máy tính. Chiều cao dòng (line-height) cũng được tinh chỉnh để các đoạn Sapo dài không bị dính vào nhau.

Câu C2 (10đ) — Thiết kế Responsive Strategy
A. Mobile (Dưới 768px)
Layout: 1 cột xếp dọc (100% width). Cuộn từ trên xuống dưới theo thứ tự quan trọng.

Bị ẩn: Chữ "Số điện thoại" trên Header (chỉ giữ lại Icon 📞 để tiết kiệm chỗ).

Vị trí Form: Form nằm ngay dưới lưới ảnh món ăn, chiếm 100% chiều rộng để người dùng dễ nhập liệu bằng ngón tay. Bản đồ bị đẩy xuống dưới cùng (ngay trên Footer).

Sơ đồ:

Plaintext
[ MOBILE LAYOUT ]
+-------------------------+
| [Logo] [📞] | <- Header (Chỉ hiện icon)
+-------------------------+
| HERO IMAGE | <- Chiều cao thấp
| "Đặt bàn ngay" |
+-------------------------+
| [Ảnh 1] [Ảnh 2] | <- Grid 2 cột
| [Ảnh 3] [Ảnh 4] |
| [Ảnh 5] [Ảnh 6] |
+-------------------------+
| FORM ĐẶT BÀN | <- Nằm trên Map, full 100%
| [Ngày] [Giờ] [Số người] |
| [Ghi chú] [Nút Đặt] |
+-------------------------+
| GOOGLE MAPS | <- Full 100% width
+-------------------------+
| FOOTER |
+-------------------------+
B. Tablet (768px - 1023px)
Layout: Bắt đầu có sự phân chia cột. Header hiển thị đầy đủ (Logo + Icon + Số điện thoại).

Grid ảnh: Chia làm 3 cột (2 hàng ngang).

Vị trí Bản đồ & Form: Nằm song song cạnh nhau (chia tỷ lệ 50/50 hoặc 40/60). Form bên trái, Bản đồ bên phải giúp tối ưu không gian mà không bắt người dùng cuộn quá nhiều.

Sơ đồ:

Plaintext
[ TABLET LAYOUT ]
+-----------------------------------+
| [Logo] [📞 090-123-4567] |
+-----------------------------------+
| HERO IMAGE |
| "Đặt bàn ngay" |
+-----------------------------------+
| [ Ảnh 1 ] [ Ảnh 2 ] [ Ảnh 3 ] | <- Grid 3 cột
| [ Ảnh 4 ] [ Ảnh 5 ] [ Ảnh 6 ] |
+-----------------------------------+
| FORM ĐẶT BÀN | GOOGLE MAPS | <- Nằm ngang (2 cột)
| [Inputs...] | [Bản đồ...] |
+-----------------------------------+
| FOOTER |
+-----------------------------------+
C. Desktop (Từ 1024px trở lên)
Layout: Bố cục tổng thể chia làm 2 cột chính (Tỷ lệ khoảng 2:1 hoặc 7:3). Có Sidebar.

Sidebar: Có. Form đặt bàn sẽ được tách ra làm Sidebar nằm cố định (Sticky) bên phải. Lưới ảnh và Bản đồ nằm ở cột nội dung chính bên trái.

Ưu điểm: Khách hàng có thể vừa cuộn xem ảnh món ăn, xem bản đồ, vừa thấy Form đặt bàn luôn dính ở bên phải để chốt đơn bất cứ lúc nào.

Sơ đồ:

Plaintext
[ DESKTOP LAYOUT ]
+-----------------------------------------------------+
| [Logo] [📞 090-123-4567] |
+-----------------------------------------------------+
| HERO IMAGE |
| "Đặt bàn ngay" |
+-----------------------------------------------------+
| CỘT CHÍNH (MAIN) | CỘT PHỤ (SIDEBAR) |
| | |
| [Ảnh 1] [Ảnh 2] [Ảnh 3] | +----------------+ |
| [Ảnh 4] [Ảnh 5] [Ảnh 6] | | FORM ĐẶT BÀN | |
| | | (Sticky) | |
| +------------------------+ | | [Ngày/Giờ] | |
| | GOOGLE MAPS | | | [Số người] | |
| +------------------------+ | | [Nút Đặt] | |
| | +----------------+ |
+-----------------------------------------------------+
| FOOTER |
+-----------------------------------------------------+
