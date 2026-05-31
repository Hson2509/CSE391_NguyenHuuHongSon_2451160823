import { useState } from "react";

function ConditionalChallenge() {
  // Giả lập dữ liệu hoặc bạn có thể chuyển thành useState để bấm nút test
  const [isOnline, setIsOnline] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [stock, setStock] = useState(0);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <section style={{ marginBottom: "20px" }}>
        <h2>1. Trạng thái người dùng</h2>
        <p>Tài khoản: {isOnline ? "🟢 Online" : "🔴 Offline"}</p>
        <button onClick={() => setIsOnline(!isOnline)}>
          Đổi trạng thái mạng
        </button>
      </section>

      <hr />

      {/* Thử thách 2: Hiện/ẩn menu dựa vào isLoggedIn */}
      <section style={{ margin: "20px 0" }}>
        <h2>2. Menu tài khoản</h2>

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Đăng xuất" : "Đăng nhập"}
        </button>

        {isLoggedIn && (
          <ul
            style={{
              background: "#f0f0f0",
              padding: "15px",
              listStyle: "none",
              marginTop: "10px",
            }}
          >
            <li>👤 Trang cá nhân</li>
            <li>⚙️ Cài đặt tài khoản</li>
            <li>💳 Lịch sử mua hàng</li>
          </ul>
        )}

        {!isLoggedIn && (
          <p style={{ color: "gray" }}>
            Vui lòng đăng nhập để xem menu bí mật.
          </p>
        )}
      </section>

      <hr />

      {/* Thử thách 3: Hiển thị "Hết hàng" khi stock = 0 */}
      <section style={{ marginTop: "20px" }}>
        <h2>3. Trạng thái kho hàng</h2>
        <p>
          Sản phẩm: <b>Giày Sneaker X</b>
        </p>
        <p>Số lượng còn lại: {stock} đôi</p>

        {/* Điều kiện hiển thị thông báo Hết hàng */}
        {stock === 0 ? (
          <span
            style={{
              background: "#f8d7da",
              color: "#721c24",
              padding: "5px 10px",
              borderRadius: "4px",
              fontWeight: "bold",
            }}
          >
            ❌ Hết hàng
          </span>
        ) : (
          <span
            style={{
              background: "#d4edda",
              color: "#155724",
              padding: "5px 10px",
              borderRadius: "4px",
            }}
          >
            📦 Còn hàng (Múc ngay!)
          </span>
        )}

        {/* Nút bấm để bạn test tăng giảm số lượng kho */}
        <div style={{ marginTop: "10px" }}>
          <button onClick={() => setStock(5)}>
            Nhập thêm hàng (stock = 5)
          </button>
          <button onClick={() => setStock(0)} style={{ marginLeft: "10px" }}>
            Xả hết hàng (stock = 0)
          </button>
        </div>
      </section>
    </div>
  );
}

export default ConditionalChallenge;
