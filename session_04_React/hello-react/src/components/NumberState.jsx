import { useState } from "react";

function NumberState() {
  const [count, setCount] = useState(0);
  const textColor = count > 0 ? "green" : count < 0 ? "red" : "black";
  const statusText = count > 0 ? "Số dương" : count < 0 ? "Số âm" : "Số không";

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2 style={{ color: textColor }}>
        Bộ đếm: {count} <br />
        <small style={{ fontSize: "0.6em", color: "#666" }}>
          ({statusText})
        </small>
      </h2>

      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "20px",
        }}
      >
        <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>

        <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>

        <button onClick={() => setCount(0)}>Reset</button>

        <button onClick={() => setCount(count * 2)}>Nhân đôi</button>

        {/* Thêm nút Tăng 5 */}
        <button onClick={() => setCount(count + 5)}>Tăng 5 (+5)</button>
      </div>
    </div>
  );
}

export default NumberState;
