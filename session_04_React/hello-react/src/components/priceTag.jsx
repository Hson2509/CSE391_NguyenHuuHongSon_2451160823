function PriceTag({ originalPrice, salePrice }) {
  return (
    <div
      style={{
        padding: "10px 15px",
        border: "2px dashed #f39c12",
        borderRadius: "8px",
        display: "inline-block",
        margin: "10px 0",
      }}
    >
      {/* Giá gốc bị gạch ngang */}
      <span
        style={{
          textDecoration: "line-through",
          color: "#95a5a6",
          marginRight: "10px",
        }}
      >
        {originalPrice.toLocaleString()}đ
      </span>
      {/* Giá khuyến mãi nổi bật */}
      <span style={{ color: "#e74c3c", fontWeight: "bold", fontSize: "1.2em" }}>
        {salePrice.toLocaleString()}đ
      </span>
    </div>
  );
}
export default PriceTag;
