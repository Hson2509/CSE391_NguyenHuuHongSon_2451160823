import { useState } from "react";

function InputEvents() {
  // State cho văn bản (dùng để đếm chữ/từ)
  const [text, setText] = useState("");

  // State cho email
  const [email, setEmail] = useState("");

  // Hàm xử lý khi gõ vào ô Text
  function handleTextChange(event) {
    setText(event.target.value);
  }

  // Hàm xử lý khi gõ vào ô Email
  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  // === LOGIC TÍNH TOÁN (Tự động chạy lại mỗi khi gõ phím) ===

  // 1. Đếm ký tự (như ví dụ gốc)
  const charCount = text.length;

  // 2. Đếm số từ (Thử thách 3)
  // - trim(): Cắt khoảng trắng ở hai đầu
  // - split(/\s+/): Tách chuỗi thành mảng dựa trên khoảng trắng (dấu cách, enter, tab...)
  // - Nếu chuỗi rỗng thì trả về 0 từ
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  // 3. Kiểm tra Email hợp lệ (Thử thách 1)
  const isEmailValid = email.includes("@");

  return (
    <div
      style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px" }}
    >
      <h2>Input Events & Thử Thách</h2>

      {/* --- Ô NHẬP VĂN BẢN (ĐẾM TỪ) --- */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Nhập nội dung: </label>
        <textarea
          value={text}
          onChange={handleTextChange}
          placeholder="Gõ một đoạn văn vào đây..."
          style={{
            width: "100%",
            height: "80px",
            padding: "10px",
            marginTop: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Hiển thị đếm ký tự và đếm từ */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "5px",
            fontSize: "0.9em",
            color: "#555",
          }}
        >
          <span>Ký tự: {charCount}</span>
          <span>
            <strong>Số từ: {wordCount}</strong>
          </span>
        </div>
      </div>

      {/* --- Ô NHẬP EMAIL (VALIDATION) --- */}
      <div style={{ marginBottom: "20px" }}>
        <label style={{ fontWeight: "bold" }}>Nhập Email: </label>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="example@gmail.com"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />

        {/* Chỉ hiện thông báo lỗi khi người dùng đã nhập ít nhất 1 ký tự */}
        {email.length > 0 && (
          <p
            style={{
              color: isEmailValid ? "green" : "red",
              margin: "5px 0 0 0",
              fontSize: "0.9em",
            }}
          >
            {isEmailValid
              ? "✅ Email hợp lệ!"
              : "❌ Email bắt buộc phải có ký tự '@'"}
          </p>
        )}
      </div>

      <hr style={{ margin: "30px 0", borderTop: "1px dashed #ccc" }} />

      {/* --- BẢN XEM TRƯỚC (PREVIEW REAL-TIME) --- */}
      <h3>👀 Bản Xem Trước (Preview)</h3>
      <div
        style={{
          background: "#f8f9fa",
          padding: "15px",
          borderRadius: "8px",
          border: "1px solid #e9ecef",
        }}
      >
        <p style={{ margin: "0 0 10px 0" }}>
          <strong>Email đăng ký:</strong>{" "}
          <span style={{ color: "#0056b3" }}>{email || "..."}</span>
        </p>
        <p style={{ margin: 0 }}>
          <strong>Nội dung:</strong> <br />
          {text ? (
            <span style={{ whiteSpace: "pre-wrap" }}>{text}</span>
          ) : (
            <span style={{ color: "gray" }}>(Chưa có nội dung)</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default InputEvents;
