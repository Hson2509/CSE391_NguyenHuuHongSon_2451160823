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

Câu B4: (chọn trang Tiki.vn)

    1. Trang Tiki đã su dụng các thẻ semantic HTML5 là <header> , <main> , <footer> (các chỗ khoanh đỏ)
    2. Như ảnh ở trong mục Screenshot thì dòng khoanh đỏ chính là 1 table (do web dùng div nên nó lỗi semantic)
        - Table đó chứa các thông số chi tiết của nồi cơm điện
        - Table đó chỉ có dùng <tbody>
    3.  - Ô tìm kiếm có action là /search và menthod là "GET". Input type được sử dụng là dang "Text"

Bài C1: Thiết kế cấu trúc HTML cho trang chi tiết sản phẩm

<header> <!--Đây là phần đầu trang-->
    <nav> --- <!--Đây là thanh điều hướng -->
        <ul> 
            <li></li> 
        </ul>
    </nav>
</header>

<main> <!--Đây là nội dung chính -->
    <nav aria-label="Breadcrumb"> <!-- nav vì đây là điều hướng -->
        <ol> <!-- ol vì breadcrumb có thứ tự -->
            <li></li> 
            <li></li> 
            <li></li> 
        </ol>
    </nav>

    <div class="product-layout">

        <article>   <!-- dùng để bao lấy toàn bộ nội dung sản phẩm -->
            <section class="gallery">
                <figure> <img src="" alt="">     <!-- Đây là dùng để bao hình minh họa -->
                </figure>
                <div class="thumbnails">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                    <img src="" alt="">
                </div>
            </section>

            <section class="info">                 <!-- Dùng để phân chia các khu vực thông tin khác nhau trong cùng 1 nội dung -->
                <h1></h1>                        <!-- Dùng để thể hiện tiêu đề sản phẩm -->
                <p class="price"></p>
                <div class="rating"></div>
                <article class="description">
                    <h2></h2>
                    <p></p>
                </article>
            </section>

            <section class="specs">
                <h2></h2>
                <table>  <!-- Dùng cho phần bảng thông số kỹ thuật-->
                    <thead>  <!-- Chứa tiêu đề cột để người dùng dễ phân biệt.-->
                        <tr>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>  <!-- Chứa thông số cụ thể.-->
                        <tr>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section class="reviews">
                <h2></h2>
                <form action="">
                    <textarea></textarea>         <!-- Dùng textarea vì đây là chỗ vt bình luận nên thường cần để 1 ô to-->
                    <button type="submit"></button>
                </form>
            </section>

        </article>

        <aside> <!-- thẻ bổ trợ thông tin-->
            <h3></h3>
            <section class="related-items">
                <figure></figure>
            </section>
        </aside>

    </div>

</main>

<footer> <!-- Đây là phần chân trang -->
    <address></address>   <!-- Đây là phần cung cấp các liên hệ của chủ Website -->  
</footer>

Bài C2: Bài làm
Việc lạm dụng <div> cho mọi thành phần trên trang web là một tư duy "mì ăn liền" và sẽ gây ra nhiều hệ lụy kỹ thuật nghiêm trọng về lâu dài. Đầu tiên, xét về góc độ SEO, các công cụ tìm kiếm như Google không "nhìn" giao diện bằng mắt mà đọc cấu trúc mã nguồn. Khi sử dụng Semantic HTML như <h1>, <article> hay <main>, chúng ta đang trực tiếp cung cấp từ khóa và sơ đồ nội dung quan trọng cho Robot, giúp trang web có thứ hạng tốt hơn hẳn so với một "biển" <div> vô hồn. Thứ hai, về Accessibility (Khả năng tiếp cận), những người khiếm thị sử dụng trình đọc màn hình sẽ hoàn toàn lạc lối nếu trang web không có các thẻ ngữ nghĩa. Các thẻ như <nav> hay <header> đóng vai trò là các cột mốc định vị, cho phép họ nhảy nhanh đến phần mình cần, điều mà các thẻ <div> gắn class không bao giờ làm được.
Một ví dụ cụ thể là khi thiết kế trang chi tiết sản phẩm: nếu dùng thẻ <table> cho bảng thông số kỹ thuật, trình duyệt và các thiết bị hỗ trợ sẽ mặc định hiểu đây là dữ liệu đối chiếu giữa thuộc tính và giá trị. Ngược lại, nếu dùng <div>, bạn sẽ phải tốn gấp đôi công sức viết CSS và JavaScript để giả lập lại các hành vi mà lẽ ra thẻ <table> đã có sẵn. Tuy nhiên, <div> không phải là vô dụng; nó vẫn là lựa chọn hoàn hảo trong các trường hợp thuần về Layout và Styling. Ví dụ, khi bạn cần một cái bọc trung lập để sử dụng display: flex căn chỉnh vị trí hoặc tạo các lớp nền trang trí mà không mang ý nghĩa nội dung cụ thể, <div> chính là công cụ sạch nhất để không làm nhiễu cấu trúc dữ liệu của trang. Tóm lại, Semantic HTML là tiêu chuẩn của một lập trình viên chuyên nghiệp, giúp sản phẩm bền vững và thân thiện hơn với mọi đối tượng người dùng.
