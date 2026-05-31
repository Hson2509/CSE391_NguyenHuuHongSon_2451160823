const form = document.getElementById('registerForm');
const inputs = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPwd: document.getElementById('confirmPwd'),
    phone: document.getElementById('phone')
};
const submitBtn = document.getElementById('submitBtn');

// Trạng thái hợp lệ của từng field
const validity = { name: false, email: false, password: false, confirmPwd: false, phone: false };

// Kiểm tra toàn bộ form để mở khóa nút Submit
const checkFormValid = () => {
    const isValid = Object.values(validity).every(val => val === true);
    submitBtn.disabled = !isValid;
};

// 1. Validate Name
inputs.name.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    const statusIcon = document.getElementById('nameStatus');
    validity.name = val.length >= 2 && val.length <= 50;
    statusIcon.textContent = val.length === 0 ? "" : (validity.name ? "✅" : "❌");
    checkFormValid();
});

// 2. Validate Email
inputs.email.addEventListener('input', (e) => {
    const val = e.target.value.trim();
    const errorEl = document.getElementById('emailError');
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (val.length === 0) {
        errorEl.textContent = "";
        validity.email = false;
    } else if (!regex.test(val)) {
        errorEl.textContent = "Email không đúng định dạng (VD: abc@gmail.com)";
        validity.email = false;
    } else {
        errorEl.textContent = "";
        validity.email = true;
    }
    checkFormValid();
});

// 3. Password Strength
inputs.password.addEventListener('input', (e) => {
    const val = e.target.value;
    const bar = document.getElementById('strengthBar');
    const text = document.getElementById('strengthText');

    bar.className = 'strength-bar'; // Reset classes
    validity.password = false;

    if (val.length === 0) {
        text.textContent = "";
    } else if (val.length < 8) {
        bar.classList.add('weak');
        text.textContent = "Yếu";
        text.style.color = "#dc3545";
    } else {
        const hasLetter = /[a-zA-Z]/.test(val);
        const hasNumber = /[0-9]/.test(val);
        const hasUpper = /[A-Z]/.test(val);
        const hasLower = /[a-z]/.test(val);
        const hasSpecial = /[^A-Za-z0-9]/.test(val);

        if (hasUpper && hasLower && hasNumber && hasSpecial) {
            bar.classList.add('strong');
            text.textContent = "Mạnh";
            text.style.color = "#28a745";
            validity.password = true;
        } else if (hasLetter && hasNumber) {
            bar.classList.add('medium');
            text.textContent = "Trung bình";
            text.style.color = "#ffc107";
            validity.password = true; // Chấp nhận TB cũng là hợp lệ
        } else {
            bar.classList.add('weak');
            text.textContent = "Yếu";
            text.style.color = "#dc3545";
        }
    }

    // Trigger lại confirm password vì password gốc đã đổi
    inputs.confirmPwd.dispatchEvent(new Event('input'));
    checkFormValid();
});

// 4. Confirm Password
inputs.confirmPwd.addEventListener('input', (e) => {
    const val = e.target.value;
    const statusIcon = document.getElementById('confirmStatus');

    if (val.length === 0) {
        statusIcon.textContent = "";
        validity.confirmPwd = false;
    } else {
        validity.confirmPwd = (val === inputs.password.value);
        statusIcon.textContent = validity.confirmPwd ? "✅" : "❌";
    }
    checkFormValid();
});

// 5. Phone Validator (Chỉ nhập số, không gạch ngang)
inputs.phone.addEventListener('input', (e) => {
    let val = e.target.value.replace(/\D/g, '').substring(0, 10);
    e.target.value = val;
    validity.phone = val.length === 10;

    // Hiển thị thông báo lỗi
    const errorEl = document.getElementById('phoneError');
    errorEl.textContent = (!validity.phone && val.length > 0) ? "Số điện thoại phải đủ 10 số." : "";
    checkFormValid();
});

// 6. Submit logic
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const modalData = document.getElementById('modalData');
    modalData.innerHTML = `
        <strong>Tên:</strong> ${inputs.name.value} <br>
        <strong>Email:</strong> ${inputs.email.value} <br>
        <strong>SĐT:</strong> ${inputs.phone.value}
    `;

    document.getElementById('successModal').classList.remove('hidden');
});

document.getElementById('closeModal').addEventListener('click', () => {
    document.getElementById('successModal').classList.add('hidden');
    form.reset();
    Object.keys(validity).forEach(k => validity[k] = false);
    checkFormValid();
    document.querySelectorAll('.icon-status, .error-msg, .strength-text').forEach(el => el.textContent = "");
    document.getElementById('strengthBar').className = "strength-bar";
});