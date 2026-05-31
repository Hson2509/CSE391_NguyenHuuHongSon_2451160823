import { useState } from "react";

function FormEvents() {
  // 1. Thêm password và confirmPassword vào state tổng
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Hàm dùng chung cho mọi ô input
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value, // Dynamic key: tự động cập nhật đúng trường đang gõ
    });
  }

  // === LOGIC KIỂM TRA LỖI REAL-TIME (Tự động chạy mỗi khi gõ) ===
  const emailError =
    formData.email.length > 0 && !formData.email.includes("@")
      ? "❌ Email bắt buộc phải có ký tự @"
      : "";

  const confirmError =
    formData.confirmPassword.length > 0 &&
    formData.confirmPassword !== formData.password
      ? "❌ Mật khẩu xác nhận không khớp!"
      : "";

  // Form chỉ hợp lệ khi không có lỗi và các trường bắt buộc đã được điền
  const isFormValid =
    formData.name.trim() !== "" &&
    formData.email.includes("@") &&
    formData.password !== "" &&
    formData.password === formData.confirmPassword;

  // Hàm xử lý khi bấm nút Gửi
  function handleSubmit(event) {
    event.preventDefault(); // LUÔN LUÔN CÓ dòng này trong Form!

    // Cảnh báo dự phòng trường hợp user tìm cách lách qua giao diện
    if (!isFormValid) {
      alert("Vui lòng điền đúng và đủ thông tin trước khi gửi!");
      return;
    }

    setSubmitted(true);
  }

  function handleReset() {
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
    });
    setSubmitted(false);
  }

  return (
    <div
      style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "500px" }}
    >
      <h2>Form Đăng Ký (Real-time Validation)</h2>

      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "15px" }}
        >
          {/* HỌ VÀ TÊN */}
          <div>
            <label style={{ fontWeight: "bold" }}>Tên: </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nhập họ tên"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          {/* EMAIL */}
          <div>
            <label style={{ fontWeight: "bold" }}>Email: </label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@gmail.com"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
            {/* Hiện lỗi Email real-time */}
            {emailError && (
              <div
                style={{ color: "red", fontSize: "0.85em", marginTop: "5px" }}
              >
                {emailError}
              </div>
            )}
          </div>

          {/* MẬT KHẨU */}
          <div>
            <label style={{ fontWeight: "bold" }}>Mật khẩu: </label>
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Nhập mật khẩu"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          {/* XÁC NHẬN MẬT KHẨU */}
          <div>
            <label style={{ fontWeight: "bold" }}>Xác nhận mật khẩu: </label>
            <input
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Nhập lại mật khẩu"
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
            {/* Hiện lỗi Xác nhận mật khẩu real-time */}
            {confirmError && (
              <div
                style={{ color: "red", fontSize: "0.85em", marginTop: "5px" }}
              >
                {confirmError}
              </div>
            )}
          </div>

          {/* LỜI NHẮN */}
          <div>
            <label style={{ fontWeight: "bold" }}>
              Tin nhắn (Không bắt buộc):{" "}
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              style={{ width: "100%", padding: "8px", marginTop: "5px" }}
            />
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            {/* Nút Submit bị vô hiệu hóa (disabled) nếu Form chưa hợp lệ */}
            <button
              type="submit"
              disabled={!isFormValid}
              style={{
                padding: "10px 20px",
                background: isFormValid ? "#28a745" : "#ccc",
                color: "white",
                border: "none",
                cursor: isFormValid ? "pointer" : "not-allowed",
              }}
            >
              Đăng Ký
            </button>
            <button
              type="button"
              onClick={handleReset}
              style={{ padding: "10px 20px" }}
            >
              Xóa trắng
            </button>
          </div>
        </form>
      ) : (
        <div
          style={{
            background: "#d4edda",
            padding: "20px",
            borderRadius: "8px",
            border: "1px solid #c3e6cb",
          }}
        >
          <h3 style={{ color: "#155724", marginTop: 0 }}>
            ✅ Đăng ký thành công!
          </h3>
          <p>
            <strong>Tên:</strong> {formData.name}
          </p>
          <p>
            <strong>Email:</strong> {formData.email}
          </p>
          <p>
            <strong>Mật khẩu:</strong> Đã lưu bảo mật (***)
          </p>
          {formData.message && (
            <p>
              <strong>Tin nhắn:</strong> {formData.message}
            </p>
          )}
          <button
            onClick={handleReset}
            style={{ marginTop: "15px", padding: "8px 16px" }}
          >
            Quay lại
          </button>
        </div>
      )}
    </div>
  );
}

export default FormEvents;
