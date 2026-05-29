function customFizzBuzz(n, rules) {
    for (let i = 1; i <= n; i++) {
        let output = "";

        // Duyệt qua từng quy tắc trong mảng rules
        for (let j = 0; j < rules.length; j++) {
            let rule = rules[j];
            if (i % rule.divisor === 0) {
                output += rule.word;
            }
        }
        if (output) {
            console.log(`${i} -> ${output}`);
        }
    }

}


// Chạy test với bộ quy tắc yêu cầu
const myRules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];

customFizzBuzz(105, myRules);