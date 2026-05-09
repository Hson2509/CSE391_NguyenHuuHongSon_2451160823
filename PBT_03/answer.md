BÀI A1: (Tài liệu tham chiếu: tuan_2_css_core/08_introduction_css.md -> 3 cách thêm CSS)

- Có 3 cách để chèn CSS:

1. Inline Css: Cách này sử dụng thuộc tính style ngay bên trong thẻ mở của phần tử HTML.
   Ex: <h1 style="color: blue; font-size: 24px;">Đây là tiêu đề </h1>

- Uu và nhược điểm:

* Uu: Tiện lợi cho việc test nhanh 1 thuộc tính hoặc khi chỉ muốn áp dụng css cho duy nhất 1 phần tử
* Nhược : Khó bảo trì code , code dễ bị rối và khó cho việc tái sử dụng

- Cách 1 thường sử dụng khi chỉ muốn thay đổi duy nhất 1 phần tử

2. Internal CSS (CSS nội bộ): Cách này sử dụng thẻ <style> đặt bên trong phần đầu <head> của file HTML
   Ex: <head>
   <style>
   p {
   color: red;
   }
   </style>
   </head>
   <body>
   <p>Xin chào Việt Nam.</p>
   </body>

- Uu và nhược điểm:

* Uu: Có thể định kiểu cho nhiều phần tử trong cùng một trang web mà không cần lặp lại code. Không cần quản lý nhiều file.
* Nhược: Chỉ có tác dụng trong phạm vi của một file HTML đó. Nếu website có 10 trang, bạn phải copy đoạn code này sang cả 10 trang.

- Cách 2 thường được sử dụng khi website của bạn chỉ có duy nhất một trang hoặc khi bạn muốn Css 1 trang mà các trang khác không có.

3. External CSS (CSS bên ngoài): tách biệt hoàn toàn code CSS ra một file riêng (đuôi .css) và liên kết vào HTML bằng thẻ <link>.
   Ex: Tạo file style.css:
   body {
   background-color: black
   }
   button {
   background-color: green;
   }
   Tạo file Index.html
   <head>
   <link rel="stylesheet" href="style.css">
   </head>
   <body>
   <button>Send</button>
   </body>
   -Uu và nhươc điểm:

- Uu:Giúp dễ quản lý và bảo trì. Một file CSS có thể dùng cho hàng nghìn trang HTML, giúp giảm dung lượng file và tăng tốc độ tải trang
- Nhược: Trình duyệt phải thực hiện thêm một yêu cầu tải file CSS về, nếu đường dẫn sai thì trang web sẽ mất toàn bộ định dạng.

* Cách 3 này thường được sử dụng cho các dự án chuyên nghiệp , có nhiều giao diện phức tạp

-Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách Inline Css sẽ thắng vì theo như quy tắc uu tiên của Css thì kiểu inline dc coi là ưu tiên cao nhất vì nó nằm trực tiếp trên phần tử, trình duyệt coi đây là chỉ thị cụ thể và quan trọng nhất Còn 2 cách còn lại là Internal & External CSS thì có độ ưu tiên ngang nhau và trình duyệt sẽ áp dụng trình đọc từ trên xuống cái nào nằm dưới thì thắng.

Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả

- Mỗi selector sau chọn được element:

1. h1 → Chọn: ShopTLU
2. .price → Chọn: 25.990.000đ và 45.990.000đ
3. #app header → Chọn: toàn bộ nội dung trong thẻ <header>
4. nav a:first-child → Chọn: Home (vì đó là thẻ a đầu tiên)
5. .product.featured h2 → Chọn: MacBook Pro
6. article > p → Chọn: 25.990.000đ ,Mô tả sản phẩm... ,45.990.000đ ,Mô tả sản phẩm... (Vì nó chọn tất cả thẻ p là con trực tiếp của thẻ <article>)
7. a[href="/"] → Chọn: Home (Thẻ <a> có thuộc tính href chính xác là "/").
8. .top-bar.dark h1 → Chọn: ShopTLU

- Kết quả hiển thị và giải thích:

* Thẻ <h1> (ShopTLU): nó đang có 2 selector chỉ đến nó đó là h1 (Màu đỏ) và .top-bar.dark h1 (rgb(238, 130, 130)) Kết quả hiển thị trên web là màu rgb(238, 130, 130) vì Selector .top-bar.dark h1 có độ ưu tiên (Specificity) cao hơn so với thẻ h1

* Thẻ <a> đầu tiên (Home): nó đang có 2 selector chỉ đến nó đó là nav a:first-child (Màu đen) và a[href="/"] (Màu xanh lá) Kết quả hiển thị web là màu đen vì selector nav a:first-child mạnh hơn(Specificity Score = 12) so với a[href="/"] (Specificity Score = 11)

* Thẻ <p> : nó đang có 2 selector chỉ đến nó đó là .price (Màu xanh lá) và article > p (Màu nâu). Kết quả hiển thị: Hiển thị trên web là màu xanh lá vì Selector sử dụng Class (.price) luôn có độ ưu tiên cao hơn Selector chỉ sử dụng Tag (article > p).

Câu A3 (7đ) — Box Model — Tính toán kích thước (Tài liệu tham chiếu tuan_2_css_core/11_box_model.md)

.box-1 {
width: 400px;
padding: 20px;
border: 5px solid black;
margin: 10px;
}
→ Chiều rộng hiển thị = 450px
→ Không gian chiếm trên trang = 470px

/_ Trường hợp 2: border-box _/
.box-2 {
box-sizing: border-box;
width: 400px;
padding: 20px;
border: 5px solid black;
margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 350px
→ Không gian chiếm trên trang = 420px

/_ Trường hợp 3: Margin collapse _/
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40px
→ Nó không phải là 65px vì Khi hai thẻ block nằm chồng dọc, margin của chúng không cộng dồn mà gộp làm một (lấy cái lớn hơn): mà 40px >25px -> lấy 40px

/_ Trường hợp 4: Margin collapse _/
.box-a { margin-bottom: -10px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 30px

Câu A4 (5đ) — Specificity (Độ ưu tiên)

- Cho các CSS rules sau cùng target 1 element <p class="price" id="main-price">:
  p { color: black; } /_ Rule A _/
  .price { color: blue; } /_ Rule B _/
  #main-price { color: red; } /_ Rule C _/
  p.price { color: green; } /_ Rule D _/

1. Tính specificity score (a, b, c) cho mỗi rule

- Rule A: 1đ (do nó có 1 thẻ element là p)
- Rule B: 10đ ( do nó là class)
- rule C: 100đ ( do nó là ID)
- rule D: 11đ ( do nó có 1 thẻ element + 1 class)

2. Element sẽ có màu gì? Giải thích

- Element đó sẽ có màu đỏ vì trình duyệt sẽ so sánh cái specificity score giữa các selector cùng chỉ vào nó và rule C dùng ID Selector(#main-price) có điểm là 100đ nên nó có thắng 3 rule còn lại

3. Nếu thêm <p class="price" id="main-price" style="color: orange;">, element có màu gì?

- Element sẽ có màu cam vì theo thứ tự ưu tiên thì Inline Css là cái có độ ưu tiên cao nhất hơn tất cả các selector trong file Css(chỉ sau !important)

4. Nếu Rule A thêm !important, element có màu gì? Tại sao?

- Element sẽ có màu đen vì thuộc tính (!important) có điểm specificity score là cao nhất cho dù nó nằm ở bất kì đâu

Bài B1 (20đ) — Style trang Profile

- Trong file css em đã sử dụng
  - element: body, header
  - class : .intro
  - id : #contact
  - descendant: nav ul
  - pseudo-class: nav a:hover

Bài B2 (20đ) — Box Model Lab

- Phần 1:
- Hộp 1 (content-box): chiều rộng thực tế = 300+ (20*2)+(5*2) = 350 px (đo từ DevTools)
- Hộp 2 (border-box): chiều rộng thực tế = 300 px (đo từ DevTools)
- Sự khác biệt:
  Content-box: Thuộc tính width chỉ tính cho phần nội dung bên trong. Khi thêm padding và border, kích thước hộp sẽ bị nở to ra ngoài.
  Border-box: Thuộc tính width bao gồm cả nội dung, padding và border. Khi thêm padding/border, phần nội dung sẽ bị thu hẹp lại để đảm bảo tổng chiều rộng hộp không thay đổi.

- Phần 2: sreenshots

Bài B3 (15đ) — Specificity Battle

- Liệt kê 10 rules + specificity score
  - body : 0,0,0 (Inheritance)
  - p : 0,0,1
  - body p : 0,0,2
  - .text : 0,1,0
  - p.text : 0,1,1
  - .text.highlight : 0,2,0
  - p.text.highlight : 0,2,1
  - #demo : 1,0,0
  - p#demo : 1,0,1
  - p#demo.text.highlight : 1,2,1
- Element cuối cùng hiển thị màu gì? Tại sao?
- Element cuối cùng hiển thị màu đỏ vì Selector p#demo.text.highlight có độ ưu tiên (specificity score) cao nhất (1 ID, 2 Classes, 1 Element). Trong CSS Cascade, quy tắc có điểm cao nhất sẽ thắng, bất kể nó nằm ở vị trí nào trong file.
- Thay đổi thứ tự rules trong CSS file. Kết quả có đổi không? Giải thích.
- Thay đổi thứ tự rules trong CSS file. Kết quả Không đổi vẫn là màu đỏ vì thứ tự trong css chỉ có tác dụng vs các selector có độ ưu tiên ngang nhau. Trong trường hợp trên các selector có độ uu tiên khác nhau nên rule có điểm cao hơn sẽ thắng bất kể vị trí

Câu C1 (10đ) — Debug CSS Layout
Layout dưới đây bị vỡ. Container rộng 960px, sidebar + content phải nằm cạnh nhau. Nhưng content bị đẩy xuống dòng mới.

.container {
width: 960px;
margin: 0 auto;
}
.sidebar {
width: 300px;
padding: 20px;
border: 1px solid #ccc;
float: left;
}
.content {
width: 660px;
padding: 30px;
border: 1px solid #ccc;
float: left;
}
1.Tính chiều rộng thực tế của sidebar và content (content-box!)

- Chiều rộng thực tế của sidebar là: 300 + 40 + 2 = 342px
- Chiều rộng thực tế của sidebar là: 660 + 60 + 2 = 722px
  2.Giải thích tại sao layout bị vỡ
- Layout bị vỡ vì cái container bao chúng chỉ có maxwidth là 960px trong khi đó tổng chiều rộng của sidebar + content là 1064px.
  3.Đưa ra 2 cách sửa khác nhau (1 cách dùng border-box, 1 cách không dùng)
  -Cách 1: Dùng border-box:
  .container {
  width: 960px;
  margin: 0 auto;
  }
  .sidebar {
  width: 300px;
  box-sizing: border-box
  padding: 20px;
  border: 1px solid #ccc;
  float: left;
  }
  .content {
  width: 660px;
  padding: 30px;
  box-sizing: border-box
  border: 1px solid #ccc;
  float: left;
  }

  -Cách 2: Không dùng border-box
  .container {
  width: 960px;
  margin: 0 auto;
  }
  .sidebar {
  width: 258px;
  padding: 20px;
  border: 1px solid #ccc;
  float: left;
  }
  .content {
  width: 598px;
  padding: 30px;
  border: 1px solid #ccc;
  float: left;
  }

Câu C2 (10đ) — Cascade Puzzle

- "Sản phẩm A" (h2) có font-size = 20 và color = green
  - font-size = 20 :Trình duyệt tìm thấy selector .card .title có font-size: 20px. Mặc dù nó nằm trong .container (14px), nhưng selector trực tiếp luôn thắng giá trị thừa kế.
  - color = green: Có 3 selector tác động lên màu sắc: .highlight (green), #featured .title (red) và .card (blue). Nhưng selector .highlight (green) có thuộc tính !important nên nó sẽ đè lên 2 selector còn lại

- "Mô tả sản phẩm" (p trong card featured) có color = blue
  - Phần tử cha .card có color: blue.Phần tử p có thuộc tính color: inherit, nghĩa là nó bắt buộc phải lấy giá trị màu từ cha của nó.Do đó, nó nhận màu xanh từ .card thay vì màu đen của body

- "Sản phẩm B" (h2) có font-size = 20 và color = blue
  - font-size = 20 :Trình duyệt tìm thấy selector .card .title có font-size: 20px. Mặc dù nó nằm trong .container (14px), nhưng selector trực tiếp luôn thắng giá trị thừa kế.
  - color: blue: Do nó không nằm trong #feature và nó ko có class "highlight" , nó kế thừa màu từ thằng cha của nó .card (blue).

- "Mô tả sản phẩm B" (p.highlight) có color = green
  - Mặc dù phần tử p này có lệnh color: inherit (đang cố lấy màu xanh từ .card), nhưng class .highlight được viết trực tiếp trên chính nó và có !important nên màu xanh lá cây thắng
