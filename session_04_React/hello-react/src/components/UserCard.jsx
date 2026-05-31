function UserCard({ name, email, avatar }) {
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        padding: "15px",
        margin: "10px 0",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
      }}
    >
      <img
        src={avatar}
        alt={name}
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          objectFit: "cover",
        }}
      />
      <div>
        <h3 style={{ margin: "0 0 5px 0", color: "#333" }}>{name}</h3>
        <p style={{ margin: 0, color: "#777", fontSize: "0.9em" }}>{email}</p>
      </div>
    </div>
  );
}
export default UserCard;
