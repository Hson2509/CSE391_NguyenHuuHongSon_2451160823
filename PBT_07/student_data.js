const students = [
    { name: "An", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Bình", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Chi", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Dũng", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Em", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Phong", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Giang", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Huy", math: 4, physics: 6, cs: 3, gender: "M" },
];

let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;
let maxTB = -1, minTB = 11;
let maxStudent = "", minStudent = "";
let totalMath = 0, totalPhysics = 0, totalCS = 0;
let totalM_TB = 0, countM = 0;
let totalF_TB = 0, countF = 0;

console.log("| STT | Tên      | TB   | Xếp loại      |");
console.log("|-----|----------|------|---------------|");

for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let avg = student.math * 0.4 + student.physics * 0.3 + student.cs * 0.3;
    let rank = "";

    if (avg >= 8) {
        rank = "Giỏi";
        countGioi++;
    }
    else if (avg >= 6.5) {
        rank = "Khá";
        countKha++;
    }
    else if (avg >= 5) {
        rank = "Trung Bình";
        countTB++;
    }
    else {
        rank = "Yếu";
        countYeu++;
    }
    console.log(`| ${(i + 1).toString().padEnd(3)} | ${student.name.padEnd(8)} | ${avg.toFixed(2).padEnd(4)} | ${rank.padEnd(13)} |`);

    // Tìm Max, Min
    if (avg > maxTB) {
        maxTB = avg;
        maxStudent = student.name;
    }
    if (avg < minTB) {
        minTB = avg;
        minStudent = student.name;
    }

    // Cộng dồn điểm các môn
    totalMath += student.math;
    totalPhysics += student.physics;
    totalCS += student.cs;

    // Tính tổng điểm theo giới tính (Đã sửa tên biến cho khớp với khai báo)
    if (student.gender === "M") {
        totalM_TB += avg;
        countM++;
    } else if (student.gender === "F") {
        totalF_TB += avg;
        countF++;
    }
}

console.log("\n--- THỐNG KÊ CHI TIẾT ---");
console.log(`1. Số lượng: Giỏi: ${countGioi}, Khá: ${countKha}, Trung bình: ${countTB}, Yếu: ${countYeu}`);
console.log(`2. Điểm cao nhất: ${maxStudent} (${maxTB.toFixed(2)}đ)`);
console.log(`3. Điểm thấp nhất: ${minStudent} (${minTB.toFixed(2)}đ)`);

let len = students.length;
console.log(`4. Điểm TB toàn lớp môn Toán: ${(totalMath / len).toFixed(2)}`);
console.log(`   Điểm TB toàn lớp môn Lý: ${(totalPhysics / len).toFixed(2)}`);
console.log(`   Điểm TB toàn lớp môn CS: ${(totalCS / len).toFixed(2)}`);

if (countM > 0) console.log(`5. Điểm TB nhóm Nam (M): ${(totalM_TB / countM).toFixed(2)}`);
if (countF > 0) console.log(`   Điểm TB nhóm Nữ (F): ${(totalF_TB / countF).toFixed(2)}`);