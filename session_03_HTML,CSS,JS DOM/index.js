// ==========================================
// 1. DỮ LIỆU MẶC ĐỊNH & KHỞI TẠO KHO
// ==========================================
const defaultStudents = [
    { id: 'SV001', name: 'Nguyễn Văn A', birth: '2000-01-01', class: 'K66', average: '8.5', email: 'nguyenvana@email.com' },
    { id: 'SV002', name: 'Trần Thị B', birth: '2000-05-15', class: 'K66', average: '9.0', email: 'tranthib@email.com' },
    { id: 'SV003', name: 'Trần Thị C', birth: '2000-08-20', class: 'K66', average: '8.5', email: 'tranthic@email.com' },
    { id: 'SV004', name: 'Nguyễn Văn D', birth: '2000-06-15', class: 'K66', average: '9.0', email: 'nguyenvand@email.com' },
    { id: 'SV005', name: 'Phạm Văm Tùng', birth: '2000-07-15', class: 'K66', average: '9.0', email: 'Phamvantung@email.com' }
];

let students = JSON.parse(localStorage.getItem('studentsList'));
if (!students || students.length === 0) {
    students = defaultStudents;
}

let currentEditId = null; // null = Thêm mới, có giá trị = Đang sửa

function saveToLocalStorage() {
    localStorage.setItem('studentsList', JSON.stringify(students));
}

// ==========================================
// 2. KHAI BÁO CÁC PHẦN TỬ HTML
// ==========================================
const FormOverlay = document.getElementById('student-modal');
const btnAddStudent = document.querySelector('.add-btn');
const btnCloseModal = document.getElementById('btn-close-modal');
const addStudentForm = document.getElementById('add-student-form');
const stuList = document.querySelector('.stu-list');
const lblTotalSV = document.getElementById('lbl-total-sv');
const lblAverageScore = document.getElementById('lbl-average-score');


// ==========================================
// 3. CÁC HÀM TIỆN ÍCH (MỞ, ĐÓNG FORM)
// ==========================================
function CloseAndResetForm() {
    FormOverlay.classList.remove('open');
    addStudentForm.reset();
    currentEditId = null; // Reset lại sổ
    document.getElementById('student-id').readOnly = false; // Mở khóa ô Mã SV
}

// Mở Pop-up khi bấm nút "Thêm sinh viên" ở ngoài bảng
btnAddStudent.addEventListener('click', function () {
    FormOverlay.classList.add('open');
});

// Đóng Pop-up
btnCloseModal.addEventListener('click', CloseAndResetForm);
FormOverlay.addEventListener('click', function (event) {
    if (event.target === FormOverlay) {
        CloseAndResetForm();
    }
});


// ==========================================
// 4. XỬ LÝ SỰ KIỆN LƯU FORM (THÊM / SỬA)
// ==========================================
addStudentForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const studentID = document.getElementById('student-id').value.trim();
    const studentName = document.getElementById('student-name').value.trim();
    const studentBirth = document.getElementById('student-birthday').value;
    const studentClass = document.getElementById('student-class').value.trim();
    const studentAverage = document.getElementById('student-average').value;
    const studentEmail = document.getElementById('student-email').value.trim();

    if (currentEditId === null) {
        // Kiểm tra xem mã sinh viên đã tồn tại chưa
        const isExist = students.some(s => s.id === studentID);
        if (isExist) {
            alert('Mã sinh viên này đã tồn tại, vui lòng nhập mã khác!');
            return;
        }

        const newStudent = { id: studentID, name: studentName, birth: studentBirth, class: studentClass, average: studentAverage, email: studentEmail };
        students.push(newStudent);
        alert('Thêm sinh viên thành công!');
        addStudentForm.reset();

    } else {
        const index = students.findIndex(s => s.id === currentEditId);
        if (index !== -1) {
            students[index] = { id: studentID, name: studentName, birth: studentBirth, class: studentClass, average: studentAverage, email: studentEmail };
            alert('Cập nhật thông tin thành công!');
        }
    }
    saveToLocalStorage();
    renderStudentList();
    CloseAndResetForm();
});


// ==========================================
// 5. ỦY QUYỀN SỰ KIỆN CHO NÚT EDIT VÀ DELETE
// ==========================================
stuList.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-edit')) {
        const id = event.target.getAttribute('data-id');
        editStudent(id);
    }
    if (event.target.classList.contains('btn-delete')) {
        const id = event.target.getAttribute('data-id');
        deleteStudent(id);
    }
});

function editStudent(id) {
    const student = students.find(s => s.id === id);
    if (!student) return;

    document.getElementById('student-id').value = student.id;
    document.getElementById('student-name').value = student.name;
    document.getElementById('student-birthday').value = student.birth;
    document.getElementById('student-class').value = student.class;
    document.getElementById('student-average').value = student.average;
    document.getElementById('student-email').value = student.email;
    document.getElementById('student-id').readOnly = true; // Khóa Mã SV không cho sửa
    currentEditId = id;
    FormOverlay.classList.add('open');
}

function deleteStudent(id) {
    if (confirm('Bạn có chắc muốn xóa sinh viên này?')) {
        students = students.filter(s => s.id !== id);
        saveToLocalStorage();
        renderStudentList();
    }
}
// ==========================================
// 6. HÀM HIỂN THỊ DỮ LIỆU RA BẢNG
// ==========================================
function renderStudentList() {
    stuList.innerHTML = '';
    let totalScore = 0;

    students.forEach(function (student) {
        const row = document.createElement('tr');
        row.innerHTML = `     
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.birth}</td>
        <td>${student.class}</td>
        <td>${student.average}</td>
        <td>${student.email}</td>   
        <td>
            <button class="bg-primary btn-choose btn-edit" data-id="${student.id}">Edit</button>
            <button class="bg-danger btn-choose btn-delete" data-id="${student.id}">Delete</button>
        </td>
        `;
        stuList.appendChild(row);
        totalScore += parseFloat(student.average);
    });

    const totalStudents = students.length;
    lblTotalSV.innerText = totalStudents;
    if (totalStudents > 0) {
        lblAverageScore.innerText = (totalScore / totalStudents).toFixed(2);
    } else {
        lblAverageScore.innerText = 0;
    }
}
renderStudentList();