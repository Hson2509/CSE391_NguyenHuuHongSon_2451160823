Câu A1 (10đ) — 5 Loại Positioning(Tài liệu tham chiếu: tuan_2_css_core/12_css_positioning.md`->5 Giá trị Position)

| Position   | Chiếm chỗ ? | Tham chiếu vị trí                            | Cuộn theo trang?         | Use case                                  |
| ---------- | ----------- | -------------------------------------------- | ------------------------ | ----------------------------------------- |
| `static`   | Có          | Luồng văn bản mặc định                       | Có                       | Layout bình thường, mặc định của mọi thẻ. |
| `relative` | Có          | Vị trí ban đầu của chính nó                  | Có                       | Làm gốc tọa độ cho phần tử con absolute.  |
| `absolute` | Không       | Phần tử cha gần nhất có position khác static | Có                       | Tạo icon trên góc ảnh, tooltip, menu con. |
| `fixed`    | Không       | Khung hình trình duyệt (Viewport)            | Không                    | Thanh Header luôn ở trên cùng của trang". |
| `sticky`   | Có          | Container chứa nó và Viewport                | Có(đến giới hạn của cha) | Menu giữ lại khi cuộn tới vị trí đó.      |

- Khi nào absolute tham chiếu body? Khi nào tham chiếu parent? Giải thích khái niệm "nearest positioned ancestor
- absolute tham chiếu body khi không có thẻ cha nào là relative/fix/absolute thì nó sẽ lấy thẻ body làm gốc
- absolute tham chiếu parent nếu thẻ cha của nó có thuộc tính relative hoặc fix
- khái niệm "nearest positioned ancestor: Trong CSS, một "Positioned Ancestor" là bất kỳ phần tử cha, ông, cố... nào có thuộc tính position khác với static (nghĩa là có giá trị relative, absolute, fixed, hoặc sticky). Còn Nearest: Trình duyệt sẽ đi ngược từ phần tử hiện tại lên trên. Nó sẽ dừng lại ở phần tử đầu tiên mà nó gặp có position khác static.

Câu A2 (10đ) — Flexbox vs Grid

/_ Trường hợp 1 _/
.container { display: flex; }
.item { flex: 1; }
/\_ 4 items → Bố cục = 1 hàng 4 cột bằng nhau

+-------------------------------------------------------------------------+
| Container |
| +----------------+ +----------------+ +----------------+ +-------+ |
| | Item 1 | | Item 2 | | Item 3 | | Item 4| |
| +----------------+ +----------------+ +----------------+ +-------+ |
+-------------------------------------------------------------------------+

/_ Trường hợp 2 _/
.container { display: flex; flex-wrap: wrap; }
.item { width: 45%; margin: 2.5%; }
/\_ 6 items → Bố cục = 3 hàng 2 cột

+-------------------------------------------------------------------------+
| Container |
| +--------------------------+ +--------------------------+ |
| | Item 1 | | Item 2 | |
| +--------------------------+ +--------------------------+ |
| |
| +--------------------------+ +--------------------------+ |
| | Item 3 | | Item 4 | |
| +--------------------------+ +--------------------------+ |
| |
| +--------------------------+ +--------------------------+ |
| | Item 5 | | Item 6 | |
| +--------------------------+ +--------------------------+ |
+-------------------------------------------------------------------------+

/_ Trường hợp 3 _/
.container { display: flex; justify-content: space-between; align-items: center; }
/\_ 3 items → Bố cục = 1 hàng 3 cột. Cột 1 nằm sát lề trái , cột 2 nằm chính giữa container, cột 3 nằm ở sát lề phải

+-------------------------------------------------------------------------+
| Container |
| +----------+ +----------+ |
| | Item 1 | +----------+ | Item 3 | |
| +----------+ | Item 2 | +----------+ |
| +----------+ |
+-------------------------------------------------------------------------+

/_ Trường hợp 4 _/
.container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; }
/\_ 3 items → Bố cục = 1 hàng, 3 cột. Cột 1 và 3 : chiếm 200px , Cột còn lại chiếm phần diện tích còn lại( có khoảng cách giữa các cột)

+-------------------------------------------------------------------------+
| Container |
| +----------+ [gap] +------------------------------+ [gap] +------+ |
| | Item 1 | | Item 2 | |Item 3| |
| | (200px) | | (1fr) | |(200) | |
| +----------+ +------------------------------+ +------+ |
+-------------------------------------------------------------------------+

/_ Trường hợp 5 _/
.container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
/\_ 7 items → Bố cục = 3 hàng, 3 cột .Hàng 1: 3 items.Hàng 2: 3 items.Hàng 3: Chỉ có 1 item nằm ở cột đầu tiên bên trái, 2 ô còn lại để trống.

+-------------------------------------------------------------------------+
| Container |
| +-------------------+ +-------------------+ +-------------------+ |
| | Item 1 | | Item 2 | | Item 3 | |
| +-------------------+ +-------------------+ +-------------------+ |
| |
| +-------------------+ +-------------------+ +-------------------+ |
| | Item 4 | | Item 5 | | Item 6 | |
| +-------------------+ +-------------------+ +-------------------+ |
| |
| +-------------------+ |
| | Item 7 | (trống) (trống) |
| +-------------------+ |
+-------------------------------------------------------------------------+

Câu C1 (10đ) — Flexbox vs Grid: Khi nào dùng gì?
Cho 5 tình huống layout thực tế. Với mỗi tình huống, trả lời: dùng Flexbox, Grid, hay kết hợp cả hai? Giải thích ngắn gọn tại sao.

1. Navigation bar ngang (logo + menu + buttons)

- Lựa chọn: Flexbox
- Giải thích: Đây là bố cục 1 chiều (hàng ngang). Flexbox sinh ra để xử lý xuất sắc việc căn chỉnh các phần tử trên một trục. Nó giúp bạn dễ dàng căn giữa theo chiều dọc (align-items: center) và đẩy các nhóm phần tử dạt ra hai bên màn hình hoặc cách đều nhau (justify-content: space-between).

2. Lưới ảnh Instagram (3 cột đều nhau, số ảnh không biết trước)

- Lựa chọn: Grid
- Giải thích: Đây là bố cục 2 chiều (cả hàng lẫn cột). Grid cho phép bạn "khóa" cấu trúc lưới một cách cứng cáp (ví dụ: grid-template-columns: repeat(3, 1fr)). Khi dữ liệu (ảnh) được đổ vào với số lượng bất kỳ, chúng sẽ tự động điền vào các ô lưới và rớt xuống hàng mới một cách tuần tự, giữ nguyên tỷ lệ 3 cột hoàn hảo.

3. Layout blog: main content + sidebar

- Lựa chọn: Grid (ở cấp độ container)
- Giải thích: Grid được thiết kế đặc biệt cho các bố cục vĩ mô (macro-layout) của trang. Bạn có thể dễ dàng thiết lập cột chính linh hoạt và sidebar có kích thước cố định (ví dụ: grid-template-columns: 1fr 300px). Code CSS sẽ rất ngắn gọn, rõ ràng và dễ dàng thay đổi thứ tự hiển thị (dùng grid-template-areas) khi chuyển sang giao diện mobile.

4. Footer với 4 cột thông tin (Về chúng tôi, Liên kết, Hỗ trợ, Liên hệ)

- Lựa chọn: Grid (Khuyên dùng) hoặc Flexbox
- Giải thích: Mặc dù Flexbox có thể làm được (flex: 1 cho 4 cột), nhưng Grid là lựa chọn tối ưu hơn (grid-template-columns: repeat(4, 1fr)). Grid ép các cột phải có chiều rộng bằng nhau một cách nghiêm ngặt bất kể lượng text bên trong cột đó ngắn hay dài, giúp giao diện footer thẳng hàng tuyệt đối.

5. Card sản phẩm (ảnh trên, text giữa, nút dưới — nút luôn dính đáy)

- Lựa chọn: Flexbox
- Giải thích: Đây là bài toán quản lý không gian 1 chiều dọc (column). Bằng cách set card là display: flex; flex-direction: column;, bạn chỉ cần gán thuộc tính margin-top: auto; cho nút bấm. Thuộc tính này sẽ tự động nuốt trọn toàn bộ không gian trống còn dư phía trên nút, từ đó đẩy nút cắm chặt xuống đáy thẻ card một cách thanh lịch mà không cần dùng đến position: absolute.

CÂU C2:

Layout sau bị lỗi. Mô tả lỗi và sửa.

Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy lên/xuống

.card-container { display: flex; flex-wrap: wrap; }
.card { width: 30%; margin: 1.5%; }
.card img { width: 100%; }
.card h3 { font-size: 18px; }
.card .btn { padding: 10px; }

- Mô tả lỗi: Mặc định trong .card-container (Flexbox), các .card sẽ tự động kéo giãn chiều cao bằng nhau (align-items: stretch). Tuy nhiên, nội dung bên trong mỗi card (như thẻ h3 dài ngắn khác nhau) không tự động dàn đều. Kết quả là nút .btn nằm ngay sát dưới đoạn text, khiến vị trí các nút trên cùng một hàng không đồng đều.

Sửa lại code:

.card-container { display: flex; flex-wrap: wrap; }
.card { width: 30%; margin: 1.5%; display: flex; flex-direction: column; }
.card img { width: 100%; }
.card h3 { font-size: 18px; }
.card .btn { padding: 10px; margin-top: auto; }

Lỗi 2: Muốn items nằm giữa cả ngang lẫn dọc trong container 100vh, nhưng item vẫn dính góc trái trên

.hero {
height: 100vh;
display: flex;
}
.hero-content {
text-align: center;
}

- Mô tả lỗi: Khi set display: flex; cho .hero, nó sẽ biến thành một Flex container nhưng mặc định các phần tử con sẽ nằm ở điểm bắt đầu trục chính (justify-content: flex-start) và trục chéo (align-items: stretch/flex-start). Thuộc tính text-align: center; ở .hero-content chỉ căn giữa chữ bên trong khối content đó, chứ không căn giữa cả khối content bên trong .hero.

- Code sửa:

.hero {
height: 100vh;
display: flex;
justify-content: center; /_ Sửa ở đây: Căn giữa theo chiều ngang _/
align-items: center; /_ Sửa ở đây: Căn giữa theo chiều dọc _/
}
.hero-content {
text-align: center; /_ Giữ nguyên để chữ trong khối được căn giữa _/
}
Lỗi 3: Sidebar bị co lại khi content quá dài

.layout { display: flex; }
.sidebar { width: 250px; }
.content { flex: 1; }

- Mô tả lỗi: Đặc tính mặc định của các phần tử con trong Flexbox là flex-shrink: 1 (cho phép bị co lại nếu thẻ cha không đủ chỗ). Khi .content có chứa văn bản quá dài hoặc hình ảnh lớn không rớt dòng được, nó sẽ chiếm thêm diện tích. Lúc này Flexbox sẽ "ép" .sidebar co nhỏ lại để nhường chỗ, khiến giá trị width: 250px ban đầu bị phá vỡ.

- Code sửa:
  .layout {
  display: flex;
  }
  .sidebar {
  width: 250px;
  flex-shrink: 0; /_ Sửa ở đây: Tuyệt đối không cho phép co lại _/
  }
  .content {
  flex: 1;
  /_ Tuỳ chọn thêm để tránh nội dung tràn phá layout: _/
  min-width: 0;
  }
