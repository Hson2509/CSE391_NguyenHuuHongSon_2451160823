BÀI A1: (Tài liệu tham chiếu: tuan_1_html5/07_forms_interactive.md -> Các Input Types HTML5)

1. type="email" → Ô nhập text, tự kiểm tra có @ → Dùng cho form đăng ký
2. type="text" → Ô nhập text cho phép nhập chữ, số và ký tự đặc biệt, Không có sẵn Validation nhưng có thể dùng thuộc tính required, minlength, maxlength.-> Dùng cho các ô nhập dữ liệu ví dụ như tên , ô nhập trong thanh tìm kiếm
3. type="password"-> Các ký tự nhập vào sẽ được che đi (hiện dấu chấm tròn hoặc dấu sao), thường kết hợp với pattern (Regex) để bắt buộc mật khẩu có chữ hoa, số. -> Dùng cho các ô dữ liệu cần bảo mật như ô nhập mật khẩu
4. type ="number" -> Ô nhập số, thường có hai nút mũi tên lên/xuống ở góc phải để tăng/giảm giá trị, chỉ cho phép nhập số -> Dùng cho các ô cần nhập số lượng
5. type="tel" -> Trên di động, nó sẽ tự động kích hoạt bàn phím số, Không tự động kiểm tra định dạng số điện thoại -> Dùng cho Ô Nhập SDT của khách hàng
6. tpye="date" -> Hiển thị một trình chọn lịch (Date picker) để người dùng chọn ngày/tháng/năm ,Đảm bảo dữ liệu là một ngày hợp lệ -> Dùng chọn ngày hẹn giao hàng
7. type="color" -> Một ô màu nhỏ, khi nhấn vào sẽ mở bảng chọn màu (Color picker) của hệ điều hành ,Luôn trả về giá trị mã màu Hex -> Dùng trong bộ lọc để khách hàng chọn màu của sản phẩm muốn xem
8. type="range" -> Một thanh trượt (Slider) để chọn giá trị trong một khoảng xác định, Trả về số nằm trong khoảng min và max -> Dùng cho việc lọc khoảng giá của sản phẩm muốn mua
9. type="checkbox" -> Một ô vuông nhỏ, cho phép tích chọn (on) hoặc bỏ chọn (off), Có thể dùng required để bắt buộc người dùng phải tích vào -> Khách hàng tích chọn vào ô "Tôi đồng ý với điều khoản dịch vụ" trước khi thanh toán.
10. type="file" -> Một nút bấm (thường là "Choose File"), khi nhấn sẽ mở cửa sổ chọn tệp từ máy tính/điện thoại ,Có thể giới hạn loại tệp bằng thuộc tính accept -> Cho phép khách hàng Tải lên ảnh thực tế khi viết đánh giá (Review) sản phẩm.

BÀI A2: (Tài liệu tham chiếu: tuan_1_html5/07_forms_interactive.md -> Form cơ bản — Anatomy + HTML5 Validation Attributes)

- Khi bấm Submit :

<!-- Trường hợp 1 -->

<input type="text" required value=""> <!-- User để trống -->

- Thông báo : "Please fill out this field" vì thuộc tính required bắt buộc người dùng không được để trống ô nhập liệu trước khi submit form.

<!-- Trường hợp 2 -->

<input type="email" value="abc"> <!-- User gõ "abc" -->

- Thông báo : "Please include an '@' in the email address". Vì thuộc tính type="email" yêu cầu phải có cấu trúc như là 1 cái email (gồm @ ) chuỗi "abc" bị th iếu kí tự @ nên bị lỗi

<!-- Trường hợp 3 -->

<input type="number" min="1" max="10" value="15"> <!-- User gõ 15 -->

- Thông báo : Value must be less than or equal to 10" vì đã thiết lập max="10". Khi người dùng nhập 15, giá trị này vi phạm giới hạn trên của trường dữ liệu.

<!-- Trường hợp 4 -->

<input type="text" pattern="[0-9]{10}" value="abc123"> <!-- User gõ "abc123" -->

- Thông báo : "Please match the requested format" vì thuộc tính pattern="[0-9]{10}" yêu cầu người dùng phải nhập chính xác 10 chữ số (từ 0 đến 9). Vì abc123 chứa chữ cái và chỉ có 6 ký tự nên không khớp với biểu thức chính quy (Regex).

<!-- Trường hợp 5 -->

<input type="password" minlength="8" value="123"> <!-- User gõ "123" -->

- Thông báo : "Please lengthen this text to 8 characters or more" vì thuộc tính minlength="8" quy định chuỗi nhập vào phải có ít nhất 8 ký tự. Giá trị 123 chỉ có 3 ký tự nên không đạt yêu cầu về độ bảo mật tối thiểu đã thiết lập.

BÀI A3: (Tài liệu tham chiếu: tuan_1_html5/07_forms_interactive.md -> Accessibility — Form cho mọi người)

1. <label for="email"> quan trọng cho người dùng screen reader vì

- Tạo mối liên kết ngữ nghĩa: Khi dùng thuộc tính for khớp với id của input, trình đọc màn hình sẽ biết chính xác nhãn nào đi với ô nhập liệu nào
- Cải thiện trải nghiệm người dùng phổ thông: Thuộc tính này giúp phần văn bản của nhãn có thể click được. Khi nhấn vào chữ "Email", con trỏ chuột sẽ tự động nhảy vào ô nhập liệu

2. Dùng <fieldset> + <legend> khi :

- Thường dùng cho các nhóm Radio buttons hoặc Checkboxes nơi mà một tiêu đề chung là cần thiết để hiểu ý nghĩa của các lựa chọn con.

3. aria-label dùng khi:

- aria-label dùng để đặt tên cho một phần tử khi không có văn bản hiển thị trên màn hình.

Lý do không nên dùng aria-label khi đã có <label> vì

- Ghi đè nội dung: Nếu có cả hai, trình đọc màn hình thường ưu tiên aria-label và "lờ" đi nội dung trong thẻ <label>
- Vấn đề dịch thuật: Các công cụ như Google Translate thường dịch nội dung bên trong thẻ <label> nhưng có thể bỏ qua các thuộc tính ẩn như aria-label.
- Nguyên tắc ưu tiên HTML thuần: Quy tắc vàng của Accessibility là: "Nếu có thể dùng thẻ HTML mặc định (như ), thì đừng dùng ARIA". HTML thuần luôn có độ tương thích và hỗ trợ tốt nhất trên mọi trình duyệt và thiết bị.

BÀI A4: (Tài liệu tham chiếu: tuan_1_html5/06_graphics_multimedia.md -> Images — Responsive và tối ưu)

1. loading="lazy" là kỹ thuật trì hoãn việc tải hình ảnh cho đến khi người dùng cuộn trang đến gần vị trí của ảnh đó.

Thuộc tính trên cải thiện :

- Tốc độ tải trang (LCP): Giảm dung lượng dữ liệu cần tải ban đầu, giúp trang web hiện ra nhanh hơn.
- Tiết kiệm băng thông: Chỉ tải ảnh khi thực sự cần thiết. Nếu người dùng không cuộn xuống cuối trang, những ảnh ở dưới sẽ không bao giờ được tải.
- Hiệu năng thiết bị: Giảm tải cho bộ nhớ và CPU của trình duyệt.

Khi nào KHÔNG nên dùng?

- Ảnh ở đầu trang (Above the fold): Những ảnh đập vào mắt người dùng ngay khi vừa mở trang (như banner, logo, ảnh sản phẩm chính)

2. Lý do nên cung cấp nhiều <source> trong thẻ <video>:

- Trình duyệt web rất đa dạng và không phải trình duyệt nào cũng hỗ trợ mọi định dạng video. Khi cung cấp nhiều thẻ <source>, trình duyệt sẽ kiểm tra từ trên xuống dưới, thấy cái nào "đọc" được thì sẽ phát cái đó. Điều này đảm bảo video của bạn chạy được trên cả Chrome, Safari, Firefox và các trình duyệt cũ.

- 3 định dạng video web phổ biến:

- MP4 (H.264): Định dạng "quốc dân", hỗ trợ trên hầu hết mọi trình duyệt và thiết bị hiện nay.

- WebM: Định dạng do Google phát triển, cho chất lượng cao với dung lượng cực thấp, hoạt động tốt trên Chrome và Firefox.

- Ogg (Theora): Một định dạng mã nguồn mở, ít phổ biến hơn nhưng vẫn được dùng để hỗ trợ các trình duyệt cũ hơn hoặc môi trường mã nguồn mở hoàn toàn.

3. Thuộc tính alt trên <img> dùng để làm Hiển thị khi ảnh bị lỗi (không tải được), Giúp trình đọc màn hình (Screen Reader) đọc cho người khiếm thị hiểu ảnh nói gì và hỗ trợ SEO: Giúp Google hiểu nội dung bức ảnh để xếp hạng tìm kiếm ảnh.

- viết alt cho 3 trg hợp
- Ảnh sản phẩm iPhone 16: alt="Điện thoại iPhone 16 Pro Max màu Titan Sa mạc góc nhìn nghiêng"
- Ảnh trang trí (Decorative) alt=""
- Ảnh biểu đồ doanh thu Q1/2026: alt="Biểu đồ cột cho thấy doanh thu Q1/2026 tăng 15% so với cùng kỳ năm ngoái"

CÂU A5: So sánh <img> và <figure>

- <img>: chỉ là một phần tử hiển thị hình ảnh
- <figure>: là một đơn vị nội dung độc lập có chứa hình ảnh và các thông tin bổ trợ.
- Dùng <img> khi hình ảnh là một phần không thể tách rời của nội dung văn bản hoặc chỉ đóng vai trò minh họa bổ trợ ngay tại vị trí đó. Nếu xóa ảnh đi, đoạn văn có thể trở nên khó hiểu hoặc thiếu sót.
- Dùng <figure> khi hình ảnh là một khối nội dung tự thân, có chú thích rõ ràng. <figure> có thể được di chuyển đến vị trí khác trong bài viết
