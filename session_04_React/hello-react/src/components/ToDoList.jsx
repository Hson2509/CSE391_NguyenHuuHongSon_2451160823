import { useState, useEffect } from "react";
// Đổi đường dẫn import vì bây giờ TodoList, TodoItem, TodoFilter đứng cạnh nhau trong thư mục components
import TodoItem from "./ToDoItems"; // Hoặc "./TodoItem" tùy tên file bạn đặt
import TodoFilter from "./TodoFilter";

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todosData");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [inputValue, setInputValue] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("todosData", JSON.stringify(todos));
  }, [todos]);

  function addTodo() {
    if (inputValue.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      done: false,
      createdAt: new Date().toLocaleDateString("vi-VN"),
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") addTodo();
  }

  function toggleTodo(id) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function editTodo(id, newText) {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo)),
    );
  }

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.filter((todo) => todo.done).length;

  const getPlaceholder = () => {
    if (filter === "active") return "Nhập việc cần làm...";
    if (filter === "completed") return "Thêm việc đã hoàn thành...";
    return "Nhập công việc...";
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "20px",
        background: "white", // Thêm màu nền cho box nổi bật
        borderRadius: "8px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ textAlign: "center" }}>📋 Todo List</h1>

      <div style={{ display: "flex", marginBottom: "20px" }}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          placeholder={getPlaceholder()}
          style={{
            flex: 1,
            padding: "10px",
            fontSize: "16px",
            border: "2px solid #ddd",
            borderRadius: "4px 0 0 4px",
            outline: "none",
          }}
        />
        <button
          onClick={addTodo}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            background: "#3498db",
            color: "white",
            border: "none",
            borderRadius: "0 4px 4px 0",
            cursor: "pointer",
          }}
        >
          Thêm
        </button>
      </div>

      <TodoFilter filter={filter} setFilter={setFilter} />

      {filteredTodos.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px", color: "#999" }}>
          {todos.length === 0
            ? "📝 Chưa có công việc nào"
            : "Không có công việc phù hợp"}
        </div>
      ) : (
        filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={editTodo}
          />
        ))
      )}

      {todos.length > 0 && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "15px",
            padding: "10px",
            background: "#f9f9f9",
            borderRadius: "4px",
            fontSize: "0.9em",
          }}
        >
          <strong>Tổng: {todos.length} việc</strong>
          <span>
            {activeCount} chưa xong | {completedCount} đã xong
          </span>
        </div>
      )}
    </div>
  );
}

export default TodoList;
