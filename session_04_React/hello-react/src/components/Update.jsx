import { useState } from "react";

function UpdateItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ]);

  // State quản lý chế độ sửa
  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState("");

  // State cho Thử thách 2 & 3: Lỗi và Thông báo thành công
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  function startEdit(item) {
    setEditingId(item.id);
    setEditName(item.name);
    setEditAge(item.age.toString());
    // Reset thông báo nếu đang có
    setErrorMsg("");
    setSuccessMsg("");
  }

  function saveEdit() {
    // --- Thử thách 2: Validate không cho lưu nếu trống ---
    if (editName.trim() === "") {
      setErrorMsg("❌ Tên không được để trống!");
      return;
    }
    if (editAge === "") {
      setErrorMsg("❌ Tuổi không được để trống!");
      return;
    }

    // Pattern Update: Quét qua mảng, nếu đúng id thì đè dữ liệu mới vào
    setItems(
      items.map((item) =>
        item.id === editingId
          ? { ...item, name: editName, age: parseInt(editAge) }
          : item,
      ),
    );

    setEditingId(null); // Thoát chế độ sửa
    setErrorMsg("");

    // --- Thử thách 3: Hiển thị "Đã lưu!" ---
    setSuccessMsg("✅ Đã lưu thành công!");
    setTimeout(() => {
      setSuccessMsg(""); // Tự động ẩn đi sau 3 giây
    }, 3000);
  }

  function cancelEdit() {
    setEditingId(null);
    setErrorMsg("");
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") saveEdit();
    if (event.key === "Escape") cancelEdit();
  }

  return (
    <div
      style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px" }}
    >
      <h2>Sửa thông tin sinh viên</h2>

      {/* Khu vực hiển thị thông báo lưu thành công */}
      {successMsg && (
        <div
          style={{
            padding: "10px",
            marginBottom: "15px",
            background: "#d4edda",
            color: "#155724",
            borderRadius: "4px",
            border: "1px solid #c3e6cb",
          }}
        >
          {successMsg}
        </div>
      )}

      {items.map((item) => (
        <div
          key={item.id}
          style={{
            padding: "12px",
            margin: "8px 0",
            // --- Thử thách 1: Highlight nền thẻ div khi đang sửa ---
            background: editingId === item.id ? "#e8f4f8" : "#f9f9f9",
            border:
              editingId === item.id ? "1px solid #3498db" : "1px solid #eee",
            borderRadius: "4px",
            transition: "all 0.2s ease", // Hiệu ứng chuyển màu mượt
          }}
        >
          {editingId === item.id ? (
            // === CHẾ ĐỘ SỬA ===
            <div>
              <div
                style={{ display: "flex", gap: "10px", alignItems: "center" }}
              >
                <input
                  value={editName}
                  onChange={(e) => {
                    setEditName(e.target.value);
                    if (errorMsg) setErrorMsg(""); // Tự xóa lỗi khi bắt đầu gõ
                  }}
                  onKeyDown={handleKeyDown}
                  autoFocus
                  style={{
                    padding: "6px",
                    // --- Thử thách 1 & 2: Highlight ô input (Xanh khi gõ, Đỏ khi lỗi) ---
                    border:
                      errorMsg && editName.trim() === ""
                        ? "2px solid red"
                        : "2px solid #3498db",
                    outline: "none",
                    borderRadius: "4px",
                  }}
                />
                <input
                  type="number"
                  value={editAge}
                  onChange={(e) => {
                    setEditAge(e.target.value);
                    if (errorMsg) setErrorMsg("");
                  }}
                  onKeyDown={handleKeyDown}
                  style={{
                    padding: "6px",
                    width: "60px",
                    border:
                      errorMsg && editAge === ""
                        ? "2px solid red"
                        : "2px solid #3498db",
                    outline: "none",
                    borderRadius: "4px",
                  }}
                />
                <button
                  onClick={saveEdit}
                  style={{
                    background: "#27ae60",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  ✓ Lưu
                </button>
                <button
                  onClick={cancelEdit}
                  style={{
                    background: "#95a5a6",
                    color: "white",
                    border: "none",
                    padding: "6px 12px",
                    borderRadius: "4px",
                    cursor: "pointer",
                  }}
                >
                  ✕ Hủy
                </button>
              </div>
              {/* Dòng chữ báo lỗi đỏ ngay dưới ô input */}
              {errorMsg && (
                <div
                  style={{ color: "red", fontSize: "0.85em", marginTop: "8px" }}
                >
                  {errorMsg}
                </div>
              )}
            </div>
          ) : (
            // === CHẾ ĐỘ XEM ===
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span>
                <strong>{item.name}</strong> - {item.age} tuổi
              </span>
              <button
                onClick={() => startEdit(item)}
                style={{
                  background: "#3498db",
                  color: "white",
                  border: "none",
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
              >
                ✏️ Sửa
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default UpdateItem;
