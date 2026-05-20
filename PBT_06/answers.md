Câu A1 (10đ) — Grid System

Đọc tài liệu Grid System. Không chạy code, vẽ layout cho HTML sau ở 3 kích thước:

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-6 col-lg-3">Box 1</div>
    <div class="col-12 col-md-6 col-lg-3">Box 2</div>
    <div class="col-12 col-md-6 col-lg-3">Box 3</div>
    <div class="col-12 col-md-6 col-lg-3">Box 4</div>
  </div>
</div>
```

| Kích thước | < 768px    | 768px - 991px | ≥ 992px    |
| ---------- | ---------- | ------------- | ---------- |
| Số cột     | 12         | 6             | 3          |
| Box layout | 1 box/hàng | 2 box/hàng    | 4 box/hàng |

- Vẽ layout cho từng trường hợp
- Kích thước < 768px (Mặc định / Mobile)

  +-----------------------------------+
  | Box 1 | (col-12)
  +-----------------------------------+
  | Box 2 | (col-12)
  +-----------------------------------+
  | Box 3 | (col-12)
  +-----------------------------------+
  | Box 4 | (col-12)
  +-----------------------------------+
  - Kích thước 768px - 991px (Tablet - md)

  +-----------------+-----------------+
  | Box 1 | Box 2 | (Mỗi ô col-md-6)
  +-----------------+-----------------+
  | Box 3 | Box 4 | (Mỗi ô col-md-6)
  +-----------------+-----------------+
  - Kích thước ≥ 992px (Desktop - lg)

  +--------+--------+--------+--------+
  | Box 1 | Box 2 | Box 3 | Box 4 | (Mỗi ô col-lg-3)
  +--------+--------+--------+--------+

**Câu hỏi thêm:** `col-md-6` nghĩa là gì? Tại sao không cần viết `col-sm-12`?

- "col-md-6" là thuộc tính quy định phần tử sẽ chiếm một nửa chiều rộng màn hình khi người dùng truy cập bằng thiết bị có kích thước màn hình dạng Medium (Tablet) trở lên.

- Không cần viết `col-sm-12' vì Khi bạn đã khai báo class cơ sở là col-12, trình duyệt sẽ hiểu mặc định từ màn hình nhỏ nhất (Mobile) trở lên thì ô đó sẽ rộng 12 cột. Thuộc tính này sẽ tự động áp dụng cho cả kích thước Small (sm - từ 576px) cho đến khi nó gặp một breakpoint lớn hơn đứng chặn phía trên (ở đây là col-md-6 tại mốc 768px). => vt thêm col-sm-12 là thừa thãi

Câu A2 (10đ) — Utilities & Components

1.  Giải thích class d-none d-md-block.
    - Sự kết hợp này sử dụng nguyên lý Mobile-First để điều khiển trạng thái hiển thị (Display) của phần tử dựa trên kích thước màn hình.
    - d-none: (Display: None) Áp dụng từ màn hình nhỏ nhất (Mobile). Phần tử sẽ bị ẩn hoàn toàn và không chiếm không gian trên trang web.
    - d-md-block: (Display: Block tại breakpoint md). Khi màn hình đạt kích thước từ 768px trở lên (Tablet, Desktop), thuộc tính này sẽ ghi đè lên d-none, đưa phần tử về trạng thái hiển thị dạng Block.

- Element này hiển thị khi nào, ẩn khi nào?
  - Ẩn khi : Khi màn hình nhỏ hơn 768px (Giao diện Mobile).
  - Hiển thị khi : Khi màn hình từ 768px trở lên (Giao diện Tablet, Laptop, Desktop).

2. Liệt kê 5 spacing utilities (margin/padding) và giải thích. VD: mt-3, px-4, mb-auto
   - mt-3 (Margin Top - Mức 3): Tạo một khoảng trống phía trên bên ngoài phần tử. Mức 3 thường tương đương với 1rem

   - px-4 (Padding X - Mức 4): Tạo khoảng đệm bên trong ở cả 2 bên trái (Left) và phải (Right) của phần tử. Mức 4 thường tương đương với 1.5rem (24px). Giúp chữ không bị dính sát vào mép viền trái/phải.

   - mb-auto (Margin Bottom Auto): Tự động tính toán và đẩy khoảng trống phía dưới của phần tử ra mức tối đa có thể. Kỹ thuật này cực kỳ hay dùng trong Flexbox để đẩy các phần tử con khác xuống đáy khung chứa

   - py-2 (Padding Y - Mức 2): Tạo khoảng đệm bên trong ở cả trên (Top) và dưới (Bottom) của phần tử. Mức 2 tương đương với 0.5rem (8px), thường dùng để giãn khoảng cách dòng cho các nút bấm (button).

   - ms-3 hoặc ml-3 (Margin Start / Left - Mức 3): Tạo khoảng cách bên ngoài ở phía bên trái phần tử, giúp đẩy phần tử này dịch sang phải một chút để tránh dính vào phần tử đứng trước nó.

3. Sự khác nhau giữa .container, .container-fluid, .container-md?
   - .container: Rộng 100% màn hình. Thu lại thành một khung cố định (Ví dụ: 960px hoặc 1140px) và căn giữa.
   - .container-fluid: Rộng 100% màn hình.Luôn rộng 100% màn hình. Tràn viền (Full-width) ở mọi kích thước thiết bị, không bao giờ để lại khoảng trống thừa 2 bên.
   - .container-md: Rộng 100% màn hình Thu lại thành một khung cố định (giống hệt .container). Nó hoạt động như container-fluid (full 100%) ở các màn hình nhỏ, và lập tức biến thành container cố định ngay khi màn hình đạt từ mốc md (768px) trở lên.

Câu C1:

1. Quy trình đổi màu $primary sang #E63946
   Để đổi màu chủ đạo của Bootstrap một cách hệ thống, bạn không sửa file .css đã biên dịch mà phải can thiệp vào mã nguồn SASS của nó.
   - Công cụ cần thiết:
     Node.js & NPM: Để cài đặt bộ biên dịch.
     Sass Compiler: Cài đặt gói sass (Dart Sass) qua npm để biên dịch file .scss thành .css.
     Mã nguồn Bootstrap SASS: Cài đặt qua lệnh npm install bootstrap.
     Các bước thực hiện và file cần modify:
     Bước 1: Tạo một file SASS riêng của bạn, ví dụ tên là main.scss.
     Bước 2: Trong file main.scss, bạn tiến hành định nghĩa lại biến $primary trước khi import Bootstrap.
   Bước 3: Chạy lệnh biên dịch file main.scss thành file style.css để nhúng vào HTML.
   Cú pháp trong file main.scss:
// 1. Ghi đè biến màu sắc (Phải đặt trước khi import)
$primary: #E63946;
     // 2. Import toàn bộ cấu trúc SASS của Bootstrap từ thư mục node_modules
     @import "../node_modules/bootstrap/scss/bootstrap";

2. Tại sao KHÔNG nên ghi đè trực tiếp .btn-primary { background: red; }?
   - Việc sử dụng SASS variables mang lại lợi ích vượt trội so với việc override CSS thủ công vì:

   - Tính đồng bộ hệ thống: Trong Bootstrap, màu $primary không chỉ áp dụng cho mỗi nút bấm (.btn-primary), nó còn liên kết với hàng loạt class khác như màu chữ (.text-primary), màu nền (.bg-primary), viền (.border-primary), trạng thái hover/active, các nút Alert, Badge, và thanh Navbar. Nếu bạn chỉ ghi đè .btn-primary, các thành phần còn lại vẫn sẽ giữ màu xanh mặc định, khiến giao diện bị "vỡ" màu.

   - Tự động tính toán (Color Functions): Khi bạn đổi màu qua biến SASS, Bootstrap sẽ tự động dùng các hàm để tính toán ra màu hover (tối hơn 10%), màu active, màu bóng đổ (box-shadow outline) phù hợp một cách hoàn hảo mà bạn không cần mò mẫm chỉnh từng thuộc tính CSS.

   - Code sạch (DRY): Tránh việc lặp lại mã và tăng kích thước file CSS vô ích.

CÂU C2:

- CSS Thuần (Vanilla CSS)
  - Số dòng CSS cần viết
  * Rất nhiều (80 - 150 dòng). Phải tự viết từng thuộc tính Flexbox, Grid, Media Queries cho Navbar, thiết lập hiệu ứng ẩn/hiện Hamburger, thiết lập border, padding cho card.
  - Thời gian phát triển
    - Chậm (Tốn nhiều giờ). Mất thời gian căn chỉnh pixel, test lỗi Responsive trên nhiều thiết bị, tự bắt sự kiện ẩn/hiện menu.
  - Khả năng tùy biến
    - Vô hạn. Bạn làm chủ 100% thuộc tính, có thể tạo ra những giao diện độc lạ, không đụng hàng và tối ưu dung lượng file ở mức nhẹ nhất.
      Khi nào NÊN và KHÔNG NÊN dùng Bootstrap?

- Bootstrap Version
  - Số dòng CSS cần viết
    Hầu như bằng 0 (hoặc vài dòng tinh chỉnh). Bạn chỉ cần gọi các class có sẵn như navbar navbar-expand-md, card, col-md-4 vào thẻ HTML.
  - Thời gian phát triển
    Cực nhanh (Vài phút). Copy-paste component chuẩn từ tài liệu của Bootstrap và sửa lại nội dung.
  - Khả năng tùy biến
    Bị giới hạn nếu chỉ dùng CSS thuần để đè. Website dễ bị dính giao diện "rập khuôn" (nhìn vào biết ngay dùng Bootstrap) trừ khi cấu hình sâu bằng SASS.

- Khi nào NÊN và KHÔNG NÊN dùng Bootstrap?

* NÊN dùng Bootstrap khi:

Dự án cần làm gấp (Deadlines ngắn), các dự án Hackathon hoặc xây dựng các trang quản trị (Admin Dashboard), trang nội bộ (CMS) không quá khắt khe về tính độc quyền của giao diện.

Làm việc trong đội nhóm (Teamwork): Bootstrap cung cấp một chuẩn đặt tên class chung (Bootstrap Convention), giúp tất cả thành viên đọc code của nhau là hiểu ngay lập tức mà không cần giải thích.

Bạn chưa mạnh về cấu trúc Responsive và muốn một hệ thống lưới hoạt động an toàn, không lỗi trên mọi thiết bị.

- KHÔNG NÊN dùng Bootstrap khi:

Dự án đòi hỏi thiết kế độc lạ, mang tính nghệ thuật cao hoặc các trang Landing Page sáng tạo của các Brand lớn (Lúc này sửa các class mặc định của Bootstrap còn tốn thời gian hơn tự viết).

Cần tối ưu tốc độ tải trang tuyệt đối: Khai báo cả thư viện Bootstrap đồng nghĩa với việc bạn phải tải một file CSS/JS khá nặng chứa hàng ngàn class mà dự án có thể chỉ dùng tới 10% trong số đó.

Quan trọng nhất: Khi bạn đang trong quá trình học lập trình Web cơ bản. Dựa dẫm vào Bootstrap quá sớm sẽ khiến bạn bị hổng kiến thức cốt lõi về Flexbox, Grid, và Media Queries.
