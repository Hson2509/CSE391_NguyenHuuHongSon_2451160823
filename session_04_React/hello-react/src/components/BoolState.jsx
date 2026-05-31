import { useState } from "react";

function BooleanState() {
  // --- State cho các ví dụ ban đầu ---
  const [isVisible, setIsVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  // --- State cho 3 Thử thách mới ---
  const [showPassword, setShowPassword] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isLightOn, setIsLightOn] = useState(false);

  const themeStyle = {
    backgroundColor: isDarkMode ? "#333" : "#fff",
    color: isDarkMode ? "#fff" : "#333",
    padding: "20px",
    minHeight: "100vh",
    fontFamily: "sans-serif",
  };

  return (
    <div style={themeStyle}>
      <h2>Toggle Demo & Thử Thách</h2>

      {/* 1. Toggle Dark Mode */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        style={{ marginBottom: "20px" }}
      >
        {isDarkMode ? "☀️ Chuyển sang Light Mode" : "🌙 Chuyển sang Dark Mode"}
      </button>

      <hr />

      {/* === PHẦN VÍ DỤ CŨ BỊ THIẾU CỦA BẠN === */}
      <div style={{ margin: "20px 0" }}>
        <h3>Ví dụ cũ: Ẩn/Hiện và Like</h3>

        {/* Toggle ẩn/hiện */}
        <button
          onClick={() => setIsVisible(!isVisible)}
          style={{ marginRight: "10px" }}
        >
          {isVisible ? "Ẩn nội dung" : "Hiện nội dung"}
        </button>

        {/* Toggle like */}
        <button onClick={() => setIsLiked(!isLiked)}>
          {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
        </button>

        {isVisible && (
          <div
            style={{
              marginTop: "10px",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          >
            <p>Đây là nội dung có thể ẩn/hiện!</p>
          </div>
        )}
      </div>

      <hr />

      {/* === THỬ THÁCH 1: ẨN/HIỆN MẬT KHẨU === */}
      <div style={{ margin: "20px 0" }}>
        <h3>1. Ẩn/Hiện Mật Khẩu</h3>
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Nhập mật khẩu bí mật..."
          style={{ padding: "8px", marginRight: "10px" }}
        />
        <button onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? "🙈 Ẩn" : "👁️ Hiện"}
        </button>
      </div>

      <hr />

      {/* === THỬ THÁCH 2: ACCORDION === */}
      <div style={{ margin: "20px 0" }}>
        <h3>2. Accordion (Menu thu gọn)</h3>
        <div
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            maxWidth: "400px",
            overflow: "hidden",
          }}
        >
          <div
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            style={{
              padding: "15px",
              backgroundColor: isDarkMode ? "#555" : "#f0f0f0",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              fontWeight: "bold",
            }}
          >
            <span>Câu hỏi thường gặp (FAQ)</span>
            <span>{isAccordionOpen ? "▲" : "▼"}</span>
          </div>

          {isAccordionOpen && (
            <div style={{ padding: "15px", borderTop: "1px solid #ccc" }}>
              Đây là nội dung chi tiết của Accordion.
            </div>
          )}
        </div>
      </div>

      <hr />

      {/* === THỬ THÁCH 3: BÓNG ĐÈN === */}
      <div style={{ margin: "20px 0" }}>
        <h3>3. Bóng đèn 💡</h3>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: isLightOn ? "#ffeb3b" : "#555",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            fontSize: "40px",
            marginBottom: "15px",
            transition: "background-color 0.3s ease",
          }}
        >
          {isLightOn ? "💡" : "🌑"}
        </div>
        <button onClick={() => setIsLightOn(!isLightOn)}>
          {isLightOn ? "Công tắc: TẮT" : "Công tắc: BẬT"}
        </button>
      </div>
    </div>
  );
}

export default BooleanState;
