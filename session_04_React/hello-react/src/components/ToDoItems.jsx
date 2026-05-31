import { useState } from "react";

function TodoItem({ todo, onToggle, onDelete, onEdit }) {
  // State quản lý chế độ sửa (Level 2)
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  // Xử lý lưu khi ấn Enter hoặc bấm ra ngoài
  function handleSave() {
    if (editText.trim() === "") {
      setEditText(todo.text); // Phục hồi nếu để trống
    } else {
      onEdit(todo.id, editText);
    }
    setIsEditing(false);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") handleSave();
    if (e.key === "Escape") {
      setEditText(todo.text); // Hủy sửa
      setIsEditing(false);
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "12px",
        margin: "5px 0",
        background: todo.done ? "#f0fff0" : "#fff",
        border: "1px solid #eee",
        borderRadius: "4px",
        transition: "all 0.2s",
      }}
    >
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        style={{
          marginRight: "12px",
          transform: "scale(1.2)",
          cursor: "pointer",
        }}
      />

      <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {isEditing ? (
          // Trạng thái đang sửa
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave} // Bấm ra ngoài tự động lưu
            onKeyDown={handleKeyDown}
            autoFocus
            style={{
              padding: "4px",
              fontSize: "16px",
              border: "1px solid #3498db",
              borderRadius: "4px",
            }}
          />
        ) : (
          // Trạng thái xem bình thường (Double-click để sửa)
          <span
            onDoubleClick={() => setIsEditing(true)}
            style={{
              textDecoration: todo.done ? "line-through" : "none",
              color: todo.done ? "#999" : "#333",
              cursor: "text",
            }}
            title="Double-click để sửa"
          >
            {todo.text}
          </span>
        )}

        {/* Hiển thị ngày tạo (Level 1) */}
        <span style={{ fontSize: "0.75em", color: "#aaa", marginTop: "4px" }}>
          Tạo ngày: {todo.createdAt}
        </span>
      </div>

      <div style={{ display: "flex", gap: "5px", marginLeft: "10px" }}>
        {/* Nút sửa inline (Level 2) */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          style={{
            background: isEditing ? "#2ecc71" : "#f1c40f",
            color: isEditing ? "white" : "#333",
            border: "none",
            padding: "6px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {isEditing ? "💾" : "✏️"}
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          style={{
            background: "#e74c3c",
            color: "white",
            border: "none",
            padding: "6px",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🗑
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
