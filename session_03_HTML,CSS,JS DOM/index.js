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
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(div => div.innerText = '');
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

function validateData(id, name, birth, stuClass, average, email) {
    let isValid = true; // Ban đầu mặc định là đúng hết

    // 1. Quét sạch lỗi cũ trước khi kiểm tra lại
    const errorDivs = document.querySelectorAll('.error');
    errorDivs.forEach(div => div.innerText = '');

    // 2. Kiểm tra Mã Sinh Viên
    if (id === '') {
        document.getElementById('error-student-id').innerText = 'Vui lòng nhập Mã SV';
        isValid = false;
    }
    else if (id.length >= 5) {
        document.getElementById('error-student-id').innerText = 'Mã SV phải ít hơn 5 ký tự (VD: SV01)';
        isValid = false;
    }

    // 3. Kiểm tra Họ Tên
    if (name === '') {
        document.getElementById('error-student-name').innerText = 'Vui lòng nhập Họ tên';
        isValid = false;
    }

    // 4. Kiểm tra Ngày sinh
    if (birth === '') {
        document.getElementById('error-student-birthday').innerText = 'Vui lòng chọn Ngày sinh';
        isValid = false;
    }

    // 5. Kiểm tra Lớp học
    if (stuClass === '') {
        document.getElementById('error-student-class').innerText = 'Vui lòng nhập Lớp học';
        isValid = false;
    }
    else if (stuClass.length > 3) {
        document.getElementById('error-student-class').innerText = 'Lớp học tối đa 3 ký tự (VD: K66)';
        isValid = false;
    }

    // 6. Kiểm tra Điểm trung bình
    if (average === '') {
        document.getElementById('error-student-average').innerText = 'Vui lòng nhập Điểm trung bình';
        isValid = false;
    } else {
        const score = parseFloat(average);
        if (isNaN(score) || score < 0 || score > 10) {
            document.getElementById('error-student-average').innerText = 'Điểm phải là số hợp lệ từ 0 đến 10';
            isValid = false;
        }
    }

    // 7. Kiểm tra Email
    if (email === '') {
        document.getElementById('error-student-email').innerText = 'Vui lòng nhập Email';
        isValid = false;
    } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('error-student-email').innerText = 'Email không đúng định dạng (VD: a@gmail.com)';
            isValid = false;
        }
    }

    // Trả về kết quả: Nếu có ô nào dính lỗi thì isValid sẽ là false, chặn Submit!
    return isValid;
}


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

    const isValid = validateData(studentID, studentName, studentBirth, studentClass, studentAverage, studentEmail);
    if (!isValid) {
        return;
    }
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