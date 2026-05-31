// === QUẢN LÝ TRẠNG THÁI (STATE) ===
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// === CACHE DOM ELEMENTS ===
const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoFooter = document.getElementById("todoFooter");
const todoCount = document.getElementById("todoCount");
const filterBtns = document.querySelectorAll(".filter-btn");
const clearCompletedBtn = document.getElementById("clearCompleted");

// === CÁC HÀM XỬ LÝ DỮ LIỆU ===
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function addTodo(text) {
    const newTodo = { id: Date.now().toString(), text, completed: false };
    todos.push(newTodo);
    saveTodos();
    render();
}

function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    saveTodos();
    render();
}

function toggleTodo(id) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos();
        render();
    }
}

function editTodo(id, newText) {
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.text = newText;
        saveTodos();
        render();
    }
}

// === CÁC SỰ KIỆN (EVENTS) ===

// 1. Thêm Todo
todoForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Chặn reload trang
    const text = todoInput.value.trim();
    if (text) {
        addTodo(text);
        todoInput.value = "";
    }
});

// 2. EVENT DELEGATION cho Delete và Toggle (Click)
todoList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;
    const id = li.dataset.id;

    // Nếu click vào nút Xóa
    if (e.target.classList.contains("delete-btn")) {
        deleteTodo(id);
    }
    // Nếu click vào chữ (Toggle)
    else if (e.target.classList.contains("todo-text")) {
        toggleTodo(id);
    }
});

// 3. EVENT DELEGATION cho Edit (Double Click)
todoList.addEventListener("dblclick", (e) => {
    if (e.target.classList.contains("todo-text")) {
        const li = e.target.closest("li");
        const id = li.dataset.id;

        // Tạo ô input để sửa
        const input = document.createElement("input");
        input.type = "text";
        input.value = e.target.textContent;
        input.className = "edit-input";

        // Thay thế thẻ span bằng ô input
        li.replaceChild(input, e.target);
        input.focus();

        // Hàm lưu dữ liệu khi sửa xong
        const saveEdit = () => {
            const newText = input.value.trim();
            if (newText) editTodo(id, newText);
            else render(); // Nếu để trống thì huỷ sửa
        };

        // Lưu khi blur ra ngoài hoặc bấm Enter
        input.addEventListener("blur", saveEdit);
        input.addEventListener("keydown", (event) => {
            if (event.key === "Enter") input.blur();
        });
    }
});

// 4. Các nút Filter
filterBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.preventDefault();
        // Xóa class active ở nút cũ, thêm vào nút mới
        document.querySelector(".filter-btn.active").classList.remove("active");
        e.target.classList.add("active");

        currentFilter = e.target.dataset.filter;
        render();
    });
});

// 5. Nút Clear Completed
clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(todo => !todo.completed);
    saveTodos();
    render();
});

// === HÀM RENDER GIAO DIỆN ===
function render() {
    // 1. Xóa sạch list cũ để vẽ lại
    todoList.innerHTML = "";

    // 2. Lọc danh sách theo currentFilter
    let filteredTodos = todos;
    if (currentFilter === "active") {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(t => t.completed);
    }

    // 3. Tạo elements bằng createElement (KHÔNG DÙNG innerHTML)
    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.className = `todo-item ${todo.completed ? "completed" : ""}`;
        li.dataset.id = todo.id;

        const span = document.createElement("span");
        span.className = "todo-text";
        span.textContent = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "❌"; // Chữ X là icon nên xài innerHTML được, hoặc dùng textContent

        li.appendChild(span);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });

    // 4. Cập nhật Count
    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;

    // 5. Ẩn/hiện Footer nếu có/không có todo nào
    todoFooter.classList.toggle("hidden", todos.length === 0);
}

// Khởi chạy lần đầu tiên
render();