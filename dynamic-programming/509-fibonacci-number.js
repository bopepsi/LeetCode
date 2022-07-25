/**
 * @param {number} n
 * @return {number}
 */
var fib = function (n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) {
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr[n];
};

var fibV2 = function (n) {
    if (n <= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

//? Input: n = 2
//? Output: 1
//? Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

//? Input: n = 3
//? Output: 2
//? Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

//? Input: n = 4
//? Output: 3
//? Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.

console.log(fib(4))