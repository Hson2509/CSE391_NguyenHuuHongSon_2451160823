function ListRendering() {
  const fruits = ["Táo", "Chuối", "Cam", "Nho", "Dưa hấu"];
  const prices = [1200000, 150000, 300000, 15000000, 80000];
  const tongGia = prices.reduce((sum, price) => sum + price, 0);
  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách trái cây</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

      <h2>Danh sách Trái cây</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ background: "#f0f0f0" }}>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>STT</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Tên</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Giá</th>
          </tr>
        </thead>
        <tbody>
          {fruits.map((fruit, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {index + 1}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {fruit}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                {prices[index].toLocaleString()} VNĐ
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr style={{ background: "#e8f5e9", fontWeight: "bold" }}>
            <td
              colSpan="2"
              style={{
                border: "1px solid #ddd",
                padding: "8px",
                textAlign: "right",
              }}
            >
              Tổng cộng:
            </td>
            <td
              style={{ border: "1px solid #ddd", padding: "8px", color: "red" }}
            >
              {tongGia.toLocaleString()} VNĐ
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default ListRendering;
