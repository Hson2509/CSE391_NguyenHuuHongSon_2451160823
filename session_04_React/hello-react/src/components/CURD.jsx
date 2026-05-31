import { useState, useRef } from "react";

function CreateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
  ]);
  const [newName, setNewName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const inputRef = useRef(null);

  function handleAdd() {
    if (newName.trim() === "") {
      setErrorMsg("❌ Tên môn học không được để trống!");
      setShowSuccess(false);
      inputRef.current.focus(); // Focus lại để user gõ tiếp
      return;
    }

    const newItem = {
      id: Date.now(), // Tạo id duy nhất dựa trên thời gian thực
      name: newName,
    };

    // Thêm vào cuối mảng (hoặc đảo ngược lại để thêm vào đầu)
    setItems([...items, newItem]);

    // Reset trạng thái sau khi thêm thành công
    setNewName("");
    setErrorMsg("");

    // 2. Hiển thị thông báo thành công
    setShowSuccess(true);
    // (Tùy chọn) Tự động ẩn thông báo thành công sau 2.5 giây
    setTimeout(() => {
      setShowSuccess(false);
    }, 2500);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      handleAdd();
    }
  }

  return (
    <div
      style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "400px" }}
    >
      <h2>Thêm môn học</h2>

      <div style={{ marginBottom: "15px" }}>
        <input
          // Gắn ref vào thẻ input
          ref={inputRef}
          value={newName}
          onChange={(e) => {
            setNewName(e.target.value);
            // Xóa lỗi khi người dùng bắt đầu gõ lại
            if (errorMsg) setErrorMsg("");
          }}
          onKeyDown={handleKeyDown}
          placeholder="Nhập tên môn học..."
          style={{
            padding: "8px",
            marginRight: "10px",
            width: "200px",
            border: errorMsg ? "1px solid red" : "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
        <button
          onClick={handleAdd}
          style={{
            padding: "8px 16px",
            backgroundColor: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          ➕ Thêm
        </button>
      </div>

      {/* Khu vực hiển thị thông báo (Lỗi hoặc Thành công) */}
      <div
        style={{ minHeight: "25px", marginBottom: "10px", fontSize: "0.9em" }}
      >
        {errorMsg && <span style={{ color: "red" }}>{errorMsg}</span>}
        {showSuccess && (
          <span style={{ color: "green", fontWeight: "bold" }}>
            ✅ Đã thêm thành công!
          </span>
        )}
      </div>

      <h3>Danh sách ({items.length} môn):</h3>
      <div
        style={{ background: "#f9f9f9", borderRadius: "8px", padding: "10px" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #eee",
            }}
          >
            • {item.name}
          </div>
        ))}
        {items.length === 0 && (
          <p style={{ color: "#777", fontStyle: "italic" }}>
            Chưa có môn học nào.
          </p>
        )}
      </div>
    </div>
  );
}

export default CreateItem;
