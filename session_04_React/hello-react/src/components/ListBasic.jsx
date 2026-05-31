import { useState } from "react";

function ListBasics() {
  const [fruits] = useState(["Táo", "Chuối", "Cam", "Nho"]);

  const [students] = useState([
    { id: 1, name: "Minh", age: 20 },
    { id: 2, name: "An", age: 21 },
    { id: 3, name: "Linh", age: 19 },
  ]);

  // === THỬ THÁCH 3: Tính tuổi trung bình ===
  const totalAge = students.reduce((sum, student) => sum + student.age, 0);
  const averageAge = (totalAge / students.length).toFixed(1);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>Danh sách trái cây</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <hr style={{ margin: "20px 0" }} />

      <h2>Danh sách sinh viên</h2>
      {students.map((student, index) => (
        <div
          key={student.id}
          style={{
            padding: "10px",
            margin: "8px 0",
            backgroundColor: "#f9f9f9",
            border: "1px solid #ddd",
            borderRadius: "4px",
            color: student.age >= 20 ? "#0056b3" : "#333",
            fontWeight: student.age >= 20 ? "bold" : "normal",
          }}
        >
          <span>{index + 1}. </span>
          {student.name} - {student.age} tuổi
        </div>
      ))}
      <div
        style={{
          marginTop: "15px",
          padding: "10px",
          backgroundColor: "#e8f4f8",
          borderRadius: "4px",
          display: "inline-block",
        }}
      >
        <strong>Tuổi trung bình của lớp: </strong> {averageAge} tuổi
      </div>
    </div>
  );
}

export default ListBasics;
