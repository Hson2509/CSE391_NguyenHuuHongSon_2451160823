Bài 1.1 — Component render lần đầu (8 phút)

Tại sao component chỉ render 1 lần?
Cơ chế khởi tạo: Lần render đầu tiên (gọi là Initial Render hoặc Mount) là lúc React chạy hàm component của bạn để tạo ra giao diện HTML ban đầu và gắn nó vào trình duyệt.

2. Khi nào component sẽ render lại (Re-render)?
   Trường hợp 1: Trạng thái nội bộ (State) thay đổiĐây là lý do phổ biến nhất. Khi bạn dùng useState và gọi hàm cập nhật giá trị của nó, component chứa state đó sẽ render lại để cập nhật giao diện mới.

Trường hợp 2: Dữ liệu từ bên ngoài truyền vào (Props) thay đổiKhi component cha truyền dữ liệu (props) vào cho component con, nếu dữ liệu ở component cha thay đổi, component con cũng sẽ tự động render lại để hiển thị dữ liệu mới nhất.

Trường hợp 3: Component cha bị render lạiTheo cơ chế mặc định của React, khi một component cha bị re-render, tất cả các component con nằm bên trong nó cũng sẽ bị kéo theo và render lại, bất kể props của con có thay đổi hay không.
