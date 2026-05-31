import { useState } from "react";

// Hàm tiện ích: Lấy ngẫu nhiên một chữ cái từ a-z
const getRandomLetter = () => {
  const letters = "abcdefghijklmnopqrstuvwxyz";
  return letters[Math.floor(Math.random() * letters.length)];
};

function KeyboardEvents() {
  // --- State cho Thử thách 1: Game đoán phím ---
  const [targetKey, setTargetKey] = useState(getRandomLetter());
  const [score, setScore] = useState(0);
  const [gameMsg, setGameMsg] = useState("Nhấn phím tương ứng!");

  // --- State cho Thử thách 2: Di chuyển ô vuông ---
  const [boxPos, setBoxPos] = useState({ x: 0, y: 0 });

  // --- State cho Thử thách 3: Phím tắt Ctrl+D ---
  const [isDarkBg, setIsDarkBg] = useState(false);

  // Hàm xử lý sự kiện bàn phím TỔNG cho toàn bộ khu vực
  function handleKeyDown(event) {
    // 1. Xử lý Thử thách 3 (Ctrl + D)
    if (event.ctrlKey && event.key.toLowerCase() === "d") {
      event.preventDefault(); // QUAN TRỌNG: Chặn trình duyệt mở hộp thoại Bookmark!
      setIsDarkBg(!isDarkBg);
      return; // Dừng lại, không chạy các logic bên dưới
    }

    // 2. Xử lý Thử thách 2 (Di chuyển ô vuông)
    const step = 20; // Mỗi lần di chuyển 20px
    if (event.key === "ArrowUp") {
      event.preventDefault(); // Chặn cuộn trang web
      setBoxPos((prev) => ({ ...prev, y: prev.y - step }));
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setBoxPos((prev) => ({ ...prev, y: prev.y + step }));
    }
    if (event.key === "ArrowLeft") {
      setBoxPos((prev) => ({ ...prev, x: prev.x - step }));
    }
    if (event.key === "ArrowRight") {
      setBoxPos((prev) => ({ ...prev, x: prev.x + step }));
    }

    // 3. Xử lý Thử thách 1 (Game đoán phím)
    // Bỏ qua nếu người dùng bấm các phím điều khiển (Shift, Ctrl, Arrow...)
    if (event.key.length === 1) {
      if (event.key.toLowerCase() === targetKey) {
        setScore(score + 1);
        setGameMsg("🎉 Chính xác!");
        setTargetKey(getRandomLetter()); // Đổi phím mới
      } else {
        setGameMsg("❌ Sai rồi, thử lại nhé!");
      }
    }
  }

  return (
    <div
      // tabIndex={0} giúp thẻ div này có thể nhận "focus" và bắt sự kiện bàn phím
      tabIndex={0}
      onKeyDown={handleKeyDown}
      style={{
        padding: "20px",
        minHeight: "100vh",
        fontFamily: "sans-serif",
        outline: "none", // Xóa viền xanh mặc định khi click vào
        transition: "all 0.3s ease",
        backgroundColor: isDarkBg ? "#2c3e50" : "#ffffff",
        color: isDarkBg ? "#ecf0f1" : "#333333",
      }}
    >
      <h1 style={{ textAlign: "center" }}>🕹️ Khu vực Test Bàn Phím</h1>
      <p style={{ textAlign: "center", color: "#e74c3c", fontWeight: "bold" }}>
        (Vui lòng CLICK CHUỘT VÀO NỀN TRANG WEB trước khi gõ phím)
      </p>

      <hr
        style={{ margin: "20px 0", borderColor: isDarkBg ? "#7f8c8d" : "#eee" }}
      />

      {/* === THỬ THÁCH 3 === */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h2>1. Phím tắt</h2>
        <p>
          Hãy nhấn tổ hợp phím <strong>Ctrl + D</strong> để đổi màu nền trang
          web.
        </p>
      </div>

      <hr
        style={{ margin: "20px 0", borderColor: isDarkBg ? "#7f8c8d" : "#eee" }}
      />

      {/* === THỬ THÁCH 1 === */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h2>2. Mini Game: Gõ phím nhanh</h2>
        <p>Hãy tìm và nhấn phím có chữ cái dưới đây:</p>
        <div
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            color: "#3498db",
            margin: "10px 0",
          }}
        >
          {targetKey.toUpperCase()}
        </div>
        <p style={{ fontSize: "1.2em" }}>
          Điểm của bạn: <strong>{score}</strong>
        </p>
        <p>{gameMsg}</p>
      </div>

      <hr
        style={{ margin: "20px 0", borderColor: isDarkBg ? "#7f8c8d" : "#eee" }}
      />

      {/* === THỬ THÁCH 2 === */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <h2>3. Di chuyển vật thể</h2>
        <p>Sử dụng 4 phím mũi tên (↑ ↓ ← →) để di chuyển ô vuông.</p>

        <div
          style={{
            width: "400px",
            height: "300px",
            border: "2px dashed #95a5a6",
            margin: "0 auto",
            position: "relative",
            overflow: "hidden",
            backgroundColor: isDarkBg ? "#34495e" : "#f9f9f9",
          }}
        >
          {/* Ô vuông di chuyển */}
          <div
            style={{
              width: "50px",
              height: "50px",
              backgroundColor: "#e74c3c",
              borderRadius: "8px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(calc(-50% + ${boxPos.x}px), calc(-50% + ${boxPos.y}px))`,
              transition: "transform 0.1s ease-out",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default KeyboardEvents;
