/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let fib = [1, 1]
    for (let i = 2; i <= n; i++) {
        fib[i] = fib[i - 2] + fib[i - 1];
    }
    return fib[n];
};

var climbStairsV2 = function (n) {
    if (n <= 1) return 1;
    return climbStairs(n - 2) + climbStairs(n - 1);     //* can climb from n-2 or n-1, so sum up to get result
}