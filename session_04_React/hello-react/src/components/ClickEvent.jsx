import { useState } from "react";

function ClickEvents() {
  // --- State cho ví dụ mẫu ---
  const [message, setMessage] = useState("Chưa click");
  const [clickCount, setClickCount] = useState(0);

  // --- State cho Thử thách 1: Màu ngẫu nhiên ---
  const [boxColor, setBoxColor] = useState("#f0f0f0");

  // --- State cho Thử thách 2: Đếm click riêng biệt ---
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  // --- State cho Thử thách 3: Like toggle ---
  const [isLiked, setIsLiked] = useState(false);

  // Hàm xử lý của ví dụ mẫu
  function handleMainClick() {
    setMessage("Đã click lúc " + new Date().toLocaleTimeString());
    setClickCount(clickCount + 1);
  }

  // Hàm tạo màu ngẫu nhiên (Thử thách 1)
  function handleRandomColor() {
    // Tạo mã màu HEX ngẫu nhiên (VD: #ff5733)
    // padStart(6, '0') đảm bảo chuỗi luôn đủ 6 ký tự
    const randomHex =
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");
    setBoxColor(randomHex);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      {/* === VÍ DỤ MẪU === */}
      <h2>1. Click Events Cơ Bản</h2>
      <p>{message}</p>
      <p>Số lần click tổng: {clickCount}</p>
      <button
        onClick={handleMainClick}
        style={{ marginRight: "10px", padding: "8px 16px" }}
      >
        Click me!
      </button>
      <button
        onClick={() => {
          setMessage("Đã reset!");
          setClickCount(0);
        }}
        style={{ padding: "8px 16px" }}
      >
        Reset
      </button>

      <hr style={{ margin: "30px 0" }} />

      {/* === THỬ THÁCH 1: ĐỔI MÀU NGẪU NHIÊN === */}
      <h2>2. Đổi màu ngẫu nhiên</h2>
      <div
        style={{
          width: "250px",
          height: "100px",
          backgroundColor: boxColor,
          border: "2px solid #333",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "15px",
          transition: "background-color 0.3s ease", // Hiệu ứng chuyển màu mượt mà
          fontWeight: "bold",
          color: "#333",
        }}
      >
        Màu hiện tại: {boxColor}
      </div>
      <button onClick={handleRandomColor} style={{ padding: "8px 16px" }}>
        🎨 Đổi màu
      </button>

      <hr style={{ margin: "30px 0" }} />

      {/* === THỬ THÁCH 2: ĐẾM CLICK RIÊNG BIỆT === */}
      <h2>3. Đếm Click Riêng Biệt</h2>
      <p>Mỗi nút sở hữu một State độc lập, không ảnh hưởng đến nhau:</p>
      <button
        onClick={() => setCountA(countA + 1)}
        style={{
          marginRight: "10px",
          padding: "10px",
          background: "#3498db",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Nút A (Đã bấm: {countA})
      </button>

      <button
        onClick={() => setCountB(countB + 1)}
        style={{
          padding: "10px",
          background: "#e67e22",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Nút B (Đã bấm: {countB})
      </button>

      <hr style={{ margin: "30px 0" }} />

      {/* === THỬ THÁCH 3: NÚT LIKE === */}
      <h2>4. Toggle Nút Like</h2>
      <button
        onClick={() => setIsLiked(!isLiked)}
        style={{
          fontSize: "18px",
          padding: "8px 20px",
          cursor: "pointer",
          background: "white",
          border: "1px solid #ccc",
          borderRadius: "20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        {isLiked ? "❤️ Đã thích" : "🤍 Thích"}
      </button>
    </div>
  );
}

export default ClickEvents;
