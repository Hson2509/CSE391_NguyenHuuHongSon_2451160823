import { useState } from "react";

function StringState() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Thêm state để lưu mật khẩu và trạng thái ẩn/hiện
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Nhập thông tin</h2>

      {/* --- Yêu cầu 1: Đếm số ký tự (X/100) --- */}
      <div style={{ marginBottom: "15px" }}>
        <label>Tên: </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nhập tên..."
          maxLength={100}
        />
        <span style={{ marginLeft: "10px", fontSize: "0.9em", color: "gray" }}>
          {name.length}/100
        </span>
      </div>

      {/* --- Yêu cầu 2: Hiển thị "Email hợp lệ" --- */}
      <div style={{ marginBottom: "15px" }}>
        <label>Email: </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email..."
        />
        {/* Chỉ hiển thị thông báo khi người dùng đã gõ thứ gì đó */}
        {email.length > 0 && (
          <span
            style={{
              marginLeft: "10px",
              fontSize: "0.9em",
              color: email.includes("@") ? "green" : "red",
            }}
          >
            {email.includes("@") ? "✅ Email hợp lệ" : "❌ Thiếu ký tự @"}
          </span>
        )}
      </div>

      {/* --- Yêu cầu 3: Ô nhập mật khẩu với nút ẩn/hiện --- */}
      <div style={{ marginBottom: "15px" }}>
        <label>Mật khẩu: </label>
        <input
          // Thay đổi type dựa vào state showPassword
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Nhập mật khẩu..."
        />
        <button
          onClick={() => setShowPassword(!showPassword)}
          style={{ marginLeft: "10px", cursor: "pointer" }}
        >
          {showPassword ? "Ẩn" : "Hiện"}
        </button>
      </div>

      <h3>Thông tin đã nhập:</h3>
      <p>Tên: {name || "(chưa nhập)"}</p>
      <p>Email: {email || "(chưa nhập)"}</p>
      {/* Làm mờ mật khẩu khi in ra màn hình */}
      <p>Mật khẩu: {password ? "*".repeat(password.length) : "(chưa nhập)"}</p>

      {/* Preview realtime */}
      {name && (
        <p
          style={{
            background: "#f0f0f0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Xin chào <strong>{name}</strong>! Email của bạn là {email}
        </p>
      )}
    </div>
  );
}

export default StringState;
