function playGuessingGame() {
    // 1. Máy tạo số ngẫu nhiên từ 1 đến 100
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    const maxGuesses = 7;
    let attempts = 0;

    // Mảng lưu trữ các số người dùng đã nhập
    let guessedNumbers = [];

    // 2. Bắt đầu vòng lặp game
    while (attempts < maxGuesses) {
        let input = prompt(`Đoán một số từ 1 đến 100.\nBạn còn ${maxGuesses - attempts} lượt đoán:`);

        // Xử lý trường hợp người chơi bấm Cancel để thoát game
        if (input === null) {
            alert("Bạn đã thoát game!");
            return;
        }

        // Chuyển đổi input từ chuỗi sang số
        let guess = Number(input);

        // 3. Xử lý logic Validate (Kiểm tra dữ liệu đầu vào)
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("Lỗi: Vui lòng chỉ nhập số nguyên từ 1 đến 100!");
            continue;
        }

        // Kiểm tra xem số này đã từng đoán chưa
        if (guessedNumbers.includes(guess)) {
            alert("Bạn đã đoán số này rồi! Hãy chọn một số khác.");
            continue; // Không tính là một lượt đoán
        }

        // 4. Nếu input hợp lệ, bắt đầu xử lý logic game
        guessedNumbers.push(guess); // Lưu số vừa đoán vào mảng
        attempts++;                 // Tăng số lần đoán lên 1

        if (guess === targetNumber) {
            alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
            return; // Kết thúc hàm, thoát game chiến thắng
        } else if (guess < targetNumber) {
            alert("Cao hơn! Số bí mật lớn hơn " + guess);
        } else {
            alert("Thấp hơn! Số bí mật nhỏ hơn " + guess);
        }
    }

    // 5. Nếu vòng lặp kết thúc mà chưa return (chưa đoán đúng)
    alert(`Bạn đã hết ${maxGuesses} lượt! Số bí mật là ${targetNumber}. Game Over!`);
}

playGuessingGame();