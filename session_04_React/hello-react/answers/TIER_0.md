Bài 0.1 — Chạy React đầu tiên (5 phút)

File .jsx khác gì file .js?
-js (JavaScript): Định dạng mã nguồn tiêu chuẩn của ngôn ngữ JavaScript.
.jsx (JavaScript XML): Tiện ích mở rộng cú pháp do React phát triển. Nó giúp bạn viết cấu trúc giao diện giống HTML ngay trong file logic. Trình duyệt không hiểu trực tiếp .jsx. Công cụ như Babel sẽ dịch .jsx thành các hàm .js tiêu chuẩn trước khi chạy.

Tại sao phải export default App?

Lệnh này giúp chia sẻ component App để các file khác trong dự án có thể tái sử dụng.Tách biệt mã nguồn: Dự án React chia nhỏ giao diện thành nhiều file để dễ quản lý.Cú pháp kết nối: File main.jsx (hoặc index.js) cần nạp component App vào để hiển thị lên màn hình. Nó sử dụng lệnh import App from './App'.Quyền truy cập: Nếu không export, component App sẽ bị cô lập hoàn toàn bên trong file chứa nó. Các file bên ngoài không thể nhìn thấy hoặc gọi nó ra.

Thử xóa export default → chuyện gì xảy ra?
Nếu bạn xóa dòng export default App, ứng dụng sẽ bị lỗi lập tức và không thể hiển thị.Lỗi biên dịch: Trình đóng gói (như Vite hoặc Webpack) sẽ báo lỗi tại file main.jsx.Thông báo lỗi phổ biến: Bạn sẽ thấy dòng chữ "The requested module './App.jsx' does not provide an export named 'default'".Trang web trống trơn: Trình duyệt sẽ hiện màn hình trắng xóa do không tìm thấy thành phần chính để khởi chạy.
