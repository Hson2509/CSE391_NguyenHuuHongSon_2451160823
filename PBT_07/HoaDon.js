function formatVND(amount) {
    return amount.toLocaleString('vi-VN') + 'đ';
}

function formatK(amount) {
    return (amount / 1000) + 'k';
}

function tinhHoaDon(danhSachMon, isWednesday = false, hasTip = false) {
    let tongCong = 0;
    let chietKhauPhanTram = 0;

    // 1. Tính tổng tiền gốc
    for (let mon of danhSachMon) {
        tongCong += mon.price * mon.quantity;
    }

    // 2. Xét các điều kiện giảm giá
    if (tongCong > 1000000) {
        chietKhauPhanTram = 15;
    } else if (tongCong > 500000) {
        chietKhauPhanTram = 10;
    }

    // Nếu là Thứ 3 (Wednesday), cộng dồn thêm 5%
    if (isWednesday) {
        chietKhauPhanTram += 5;
    }

    // 3. Tính toán chi tiết các phí
    const tienGiamGia = tongCong * (chietKhauPhanTram / 100);
    const tienVAT = tongCong * 0.08;
    const tienTip = hasTip ? (tongCong * 0.05) : 0;
    const thanhToan = tongCong - tienGiamGia + tienVAT + tienTip;


    const WIDTH = 38;
    const lineTop = "╔" + "═".repeat(WIDTH) + "╗";
    const lineMid = "╠" + "═".repeat(WIDTH) + "╣";
    const lineBot = "╚" + "═".repeat(WIDTH) + "╝";

    let receipt = [];
    receipt.push(lineTop);

    // In Tiêu đề (Căn giữa)
    const title = "HÓA ĐƠN NHÀ HÀNG";
    const paddingTitle = Math.floor((WIDTH - title.length) / 2);
    const titleRow = " ".repeat(paddingTitle) + title + " ".repeat(WIDTH - title.length - paddingTitle);
    receipt.push(`║${titleRow}║`);

    receipt.push(lineMid);

    // In danh sách món ăn
    danhSachMon.forEach((mon, index) => {
        const itemTotal = mon.price * mon.quantity;

        let sttName = ` ${index + 1}. ${mon.name}`.padEnd(16, ' ');
        let qty = `x${mon.quantity}`.padEnd(6, ' ');
        let price = `@${formatK(mon.price)}`.padEnd(6, ' ');
        let total = `= ${formatK(itemTotal)}`.padEnd(8, ' ');

        let rowStr = (sttName + qty + price + total).padEnd(WIDTH, ' ');
        receipt.push(`║${rowStr}║`);
    });

    receipt.push(lineMid);

    const printRow = (label, value) => {
        let textLeft = ` ${label}`;
        let textRight = `${value}   `;
        let spaceBetween = WIDTH - textLeft.length - textRight.length;
        return `║${textLeft}${" ".repeat(Math.max(0, spaceBetween))}${textRight}║`;
    };

    receipt.push(printRow("Tổng cộng:", formatVND(tongCong)));
    receipt.push(printRow(`Giảm giá (${chietKhauPhanTram}%):`, formatVND(tienGiamGia)));
    receipt.push(printRow("VAT (8%):", formatVND(tienVAT)));
    receipt.push(printRow("Tip (5%):", formatVND(tienTip)));

    receipt.push(lineMid);

    receipt.push(printRow("THANH TOÁN:", formatVND(thanhToan)));
    receipt.push(lineBot);

    console.log(receipt.join('\n'));
}


const order = [
    { name: "Phở bò", quantity: 2, price: 65000 },
    { name: "Trà đá", quantity: 3, price: 5000 },
    { name: "Bún chả", quantity: 1, price: 55000 }
];

tinhHoaDon(order, false, true);