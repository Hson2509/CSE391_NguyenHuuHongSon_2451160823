import { useState } from "react";

function DeleteItem() {
  const [items, setItems] = useState([
    { id: 1, name: "Mô hình Goku Resin" },
    { id: 2, name: "Mô hình Gojo Satoru" },
    { id: 3, name: "Mô hình Vegeta PVC" },
  ]);

  // State lưu trữ thông tin phần tử vừa xóa để phục vụ việc Hoàn tác (Undo)
  // Cấu trúc object: { item: {}, index: number, timeoutId: number }
  const [deletedInfo, setDeletedInfo] = useState(null);

  function handleDelete(item, index) {
    // 1. Thử thách 3: Chỉ cho xóa khi confirm
    if (
      window.confirm(`Bạn có chắc chắn muốn xóa "${item.name}" khỏi danh sách?`)
    ) {
      // Xóa phần tử khỏi mảng hiện tại
      const newItems = items.filter((i) => i.id !== item.id);
      setItems(newItems);

      // Nếu người dùng xóa liên tiếp, phải dọn dẹp bộ đếm thời gian cũ
      if (deletedInfo && deletedInfo.timeoutId) {
        clearTimeout(deletedInfo.timeoutId);
      }

      // Cài đặt hẹn giờ 5 giây (5000ms) để tự động ẩn thông báo hoàn tác
      const timeoutId = setTimeout(() => {
        setDeletedInfo(null);
      }, 5000);

      // Lưu lại thông tin phần tử bị xóa, vị trí ban đầu của nó và ID của bộ hẹn giờ
      setDeletedInfo({
        item: item,
        index: index,
        timeoutId: timeoutId,
      });
    }
  }

  function handleUndo() {
    if (deletedInfo) {
      // Hủy bỏ lệnh tự động ẩn thông báo
      clearTimeout(deletedInfo.timeoutId);

      // Tạo bản sao của mảng hiện tại
      const restoredItems = [...items];

      // Chèn lại phần tử vào đúng vị trí ban đầu (index) bằng hàm splice
      restoredItems.splice(deletedInfo.index, 0, deletedInfo.item);

      // Cập nhật lại state và ẩn thông báo
      setItems(restoredItems);
      setDeletedInfo(null);
    }
  }

  function handleDeleteAll() {
    if (window.confirm("Cảnh báo: Bạn sắp xóa tất cả. Tiếp tục?")) {
      setItems([]);
      setDeletedInfo(null); // Ẩn luôn thông báo hoàn tác (nếu có)
    }
  }

  return (
    <div
      style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px" }}
    >
      <h2>Quản lý sản phẩm</h2>

      {items.length > 0 && (
        <button
          onClick={handleDeleteAll}
          style={{
            marginBottom: "15px",
            background: "#e74c3c",
            color: "white",
            padding: "8px 16px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          🗑 Xóa tất cả
        </button>
      )}

      {/* --- THỬ THÁCH 1 & 2: Khu vực thông báo xóa và nút Hoàn tác --- */}
      {deletedInfo && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "#333",
            color: "white",
            padding: "10px 15px",
            borderRadius: "4px",
            marginBottom: "15px",
          }}
        >
          <span>
            Đã xóa: <strong>{deletedInfo.item.name}</strong>
          </span>
          <button
            onClick={handleUndo}
            style={{
              background: "transparent",
              color: "#f1c40f",
              border: "1px solid #f1c40f",
              padding: "4px 10px",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            ↩ Hoàn tác
          </button>
        </div>
      )}

      {/* --- Render Danh sách --- */}
      {items.length === 0 ? (
        <p style={{ color: "#999", fontStyle: "italic" }}>
          Danh sách hiện đang trống.
        </p>
      ) : (
        items.map((item, index) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px",
              margin: "8px 0",
              background: "#f8f9fa",
              border: "1px solid #e9ecef",
              borderRadius: "4px",
            }}
          >
            <span>{item.name}</span>
            <button
              // Truyền cả item và index vào hàm để phục vụ việc Undo đúng vị trí
              onClick={() => handleDelete(item, index)}
              style={{
                background: "#e74c3c",
                color: "white",
                border: "none",
                padding: "6px 12px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Xóa
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default DeleteItem;
