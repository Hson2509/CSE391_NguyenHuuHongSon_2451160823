Tài liệu tham chiếu: tuan_1_html5/01_introduction_html_universe.md → 05_tables_hyperlinks.md

Câu A1: (Tài liệu: 01_introduction_html_universe.md/1_WEB HOẠT ĐỘNG NHƯ THẾ NÀO)

    1.Khi bạn gõ https://shopee.vn vào trình duyệt và nhấn Enter, 5 bước xảy ra (từ DNS lookup đến render) là :
        B1: Phân giải tên miền (DNS Lookup)
            -   Đầu tiên, trình duyệt kiểm tra bộ nhớ đệm (cache) của chính nó, sau đó là cache của hệ điều hành.
                Nếu không thấy, nó sẽ gửi yêu cầu đến DNS Resolver (thường là của nhà mạng ISP).
            -   DNS sẽ trả về địa chỉ IP của máy chủ Shopee

        B2: Thiết lập kết nối TCP (TCP Handshake)
            -   Sau khi có địa chỉ IP, trình duyệt cần "bắt tay" với máy chủ để thiết lập đường truyền dữ liệu. Quá trình này gọi là Three-way  Handshake(bắt tay 3 bên)

        B3: Bắt tay TLS/SSL (TLS Handshake)
            -   Shopee sử dụng giao thức https, nên một bước bảo mật cực kỳ quan trọng diễn ra ngay sau TCP.
            -   Hai bên thống nhất thuật toán mã hóa để đảm bảo dữ liệu (như mật khẩu, thông tin thanh toán) không bị đánh cắp trên đường truyền.

        B4: Gửi yêu cầu HTTP và nhận phản hồi (HTTP Request/Response)
            -   Sau khi đường truyền đã bảo mật, trình duyệt gửi một bản tin HTTP GET đến máy chủ Shopee để yêu cầu nội dung trang web.
                Máy chủ nhận yêu cầu, xử lý (kiểm tra bạn là ai, lấy dữ liệu sản phẩm từ database...).
            -   Máy chủ gửi trả lại một phản hồi HTTP Response, thường đi kèm với mã trạng thái 200 OK và nội dung file HTML của trang chủ.

        B5: Browser Rendering (Parsing & Rendering)
            1. 🏗️ Parse HTML     → Đọc bản vẽ kiến trúc (cấu trúc trang)
            2. 🎨 Parse CSS      → Đọc bản thiết kế nội thất (màu sắc, font, layout)
            3. ⚡ Execute JS     → Xử lý các hiệu hứng, banner (tương tác, animation)
            4. 🖌️ Paint & Render → Trình duyệt "vẽ" các điểm ảnh lên màn hình để bạn thấy logo Shopee, thanh tìm kiếm và các sản phẩm.

    2.Trong DevTools của Chrome, tab Network cho ta thấy những thông tin sau

        -   Danh sách tài nguyên: HTML, CSS, JS, hình ảnh, font, API... được tải về.
        -   Hiệu suất: Thời gian tải từng file, file nào đang làm chậm trang web.
        -   Trạng thái: Request thành công hay thất bại (Status Code).
        -   Kích thước: Dung lượng dữ liệu đã tiêu tốn.

Câu A2: (Tài liệu: 04_visible_part_html.md/Semantic HTML5 — "Thẻ có ý nghĩa")

        # Trang web dưới đây bị Google đánh giá SEO thấp vì nó đang mắc lỗi "Div-itis" (lạm dụng thẻ <div>). Google Bot khi quét trang này sẽ thấy một cấu trúc "vô hồn", không biết đâu là nội dung quan trọng, đâu là thanh điều hướng hay thông tin bản quyền.

        # Các lỗi Semantic HTML trong đoạn code
            - <div class="header"></div> -> <header class =""></header>
            - <div class="footer">© 2026 ShopTLU</div> -> <footer class ="">© 2026 ShopTLU<</footer>
            - <div class="product"></div> -> <article class ="product"></article>
            - <div class="title">iPhone 16 Pro</div> -> <h1 class ="">iPhone 16 Pro</h1>
            - <div class="image"><img src="iphone.jpg"></div> -> <figure class="image"><img src="iphone.jpg"></figure>

Câu A3: (Tài liệu: 04_visible_part_html.md/Block vs Inline — Hai loại element cơ bản)

    # Kết quả của đoạn code:
    Hộp 1
    Text A Text B
    Hộp 2
    Text C Text D
    Hộp 3

    # Lý do có kết quả trên
        - Thẻ <div>: là loại thẻ Block, bắt đầu bằng 1 dòng mới là chiếm cả dòng đó
        - Thẻ <span>, <strong>: Kiểu inline ,chỉ chiếm hết phần nội dung và cho phép nhiều thẻ nằm trên 1 dòng

Câu A4: (Tài liệu: 05_tables_hyperlinks.md/Table — Bảng dữ liệu)

    # Sự khác nhau giữa <thead>, <tbody>, <tfoot>:

        - <thead>: tiêu đề bảng
        - <tbody>: Dữ liệu chính của bảng
        - <tfoot>: Tổng kểt bảng

    # Lý do không nên dùng table để tạo layout trang web?

        - Table để trình bày dữ liệu (bảng lương, thông số), không phải để chia cột web.
        - Rất khó làm Responsive. Trên điện thoại, table sẽ bị tràn màn hình hoặc vỡ nát, không co giãn tốt như Flexbox/Grid.
        - Load chậm: Trình duyệt phải đọc hết nội dung trong table mới hiển thị được, gây cảm giác trang web bị "đơ" lúc mới vào.
        - Khó sửa: Code lồng nhau dày đặc <tr>, <td> cực kỳ rối mắt, khó bảo trì và không tốt cho SEO.

Câu B3:

- Lỗi 1: Dòng 1 - Thiếu khai báo kiểu tài kiệu và ngôn ngữ - Cách sửa : <!Doctype html ><html lang = "vi">
- Lỗi 2: Dòng 2 - Thẻ <tilte> chưa có thẻ đóng - Cách sửa : <title>Trang Web </title>
- Lỗi 3: Dòng 4 - Thẻ <h1> bị thiếu thẻ đóng - Cách sửa : <h1>Welcome to ShopTLU</h1>
- Lỗi 4: Dòng 12,13 : Thẻ <a> thiếu thẻ đóng - Cách sửa : <a href="home">Trang chủ</a>
  <a href="products">Sản phẩm</a>
- Lỗi 5: Dòng 20 - Text chỗ thẻ <src> bị thiếu " " - Cách sửa : <img src="iphone.jpg">
- Lỗi 6: Dòng 22 - Lỗi sai thứ tự đóng thẻ - Cách sửa : <p>Giá: <b>25.990.000đ</b></p>
- Lỗi 7: Dòng 26 — Table thiếu cấu trúc phân cấp chuẩn (thead, tbody) và thẻ tiêu đề th — Cách sửa: Bọc hàng đầu tiên trong <thead> và dùng thẻ <th> thay cho <td>., bọc các hàng còn lại trg thẻ <tbody>
- Lỗi 8: Dòng 41 — Sử dụng 2 thẻ <main> — Cách sửa: <aside> <p>Sidebar content</p> </aside>
- Lỗi 9: Dòng 44 — Thẻ <p> trong footer chưa được đóng — Cách sửa: <p>Copyright 2026</p> - Lỗi 10: Dòng 3 — Thiếu thuộc tính viewport trong thẻ meta khiến web không hiển thị tốt trên điện thoại — Cách sửa: Thêm <meta charset="utf8"name="viewport" content="width=device-width, initial-scale=1.0">.
