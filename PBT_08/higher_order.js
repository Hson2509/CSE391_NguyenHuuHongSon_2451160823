function pipe(...fns) {
    return function (x) {
        let result = x;

        for (let i = 0; i < fns.length; i++) {
            result = fns[i](result);
        }

        return result;
    }
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);
console.log(process(5)); // → "Kết quả: 20"


function memoize(fn) {
    let cache = {};
    return function (n) {
        if (cache[n] !== undefined) {
            return cache[n];
        }
        let result = fn(n);
        cache[n] = result;
        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});

console.log(expensiveCalc(1000000));
console.log(expensiveCalc(1000000));


function debounce(fn, delay) {
    let timer;

    return function (query) {
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn(query);
        }, delay);
    };
}
const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

// Chạy thử
search("a");
search("app");
search("apple");

async function retry(fn, maxAttempts = 3) {
    for (let i = 1; i <= maxAttempts; i++) {
        try {
            let result = await fn();
            return result;

        } catch (error) {
            console.log("Bị lỗi ở lần thử thứ: " + i);
            if (i === maxAttempts) {
                console.log("Hết lượt thử!");
                throw error;
            }
        }
    }
}