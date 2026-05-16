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
