import { useState } from "react";

function MultipleStates() {
  // 1. Khai báo thêm state cho email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [isStudent, setIsStudent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    // Cập nhật điều kiện kiểm tra rỗng cho cả email
    if (name.trim() === "" || email.trim() === "" || age === "") {
      alert("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    // 2. Validate tuổi: Phải > 0 và < 100
    const ageNumber = parseInt(age, 10);
    if (ageNumber <= 0 || ageNumber >= 100) {
      alert("Tuổi không hợp lệ! Vui lòng nhập số từ 1 đến 99.");
      return;
    }

    setSubmitted(true);
  }

  function handleReset() {
    setName("");
    setEmail(""); // Đừng quên reset cả email
    setAge("");
    setIsStudent(false);
    setSubmitted(false);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Form đăng ký</h2>

      {!submitted ? (
        <div>
          <div style={{ marginBottom: "10px" }}>
            <label>Tên: </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nhập họ tên..."
            />
          </div>

          {/* UI thêm trường Email */}
          <div style={{ marginBottom: "10px" }}>
            <label>Email: </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập email..."
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>Tuổi: </label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Nhập tuổi..."
            />
          </div>

          <div style={{ marginBottom: "10px" }}>
            <label>
              <input
                type="checkbox"
                checked={isStudent}
                onChange={(e) => setIsStudent(e.target.checked)}
              />
              Là sinh viên
            </label>
          </div>

          <button
            onClick={handleSubmit}
            style={{ padding: "5px 15px", cursor: "pointer" }}
          >
            Đăng ký
          </button>
        </div>
      ) : (
        <div
          style={{
            background: "#d4edda",
            padding: "15px",
            borderRadius: "4px",
            border: "1px solid #c3e6cb",
          }}
        >
          {/* 3. Hiển thị lời chào cá nhân hóa */}
          <h3 style={{ color: "#155724", marginTop: 0 }}>
            ✅ Đăng ký thành công! Xin chào {name}!
          </h3>
          <p>
            <strong>Tên:</strong> {name}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
          <p>
            <strong>Tuổi:</strong> {age}
          </p>
          <p>
            <strong>Sinh viên:</strong> {isStudent ? "Có" : "Không"}
          </p>

          <button
            onClick={handleReset}
            style={{
              marginTop: "10px",
              padding: "5px 15px",
              cursor: "pointer",
            }}
          >
            Đăng ký lại
          </button>
        </div>
      )}
    </div>
  );
}

export default MultipleStates;
