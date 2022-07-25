/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
    let tri = [0, 1, 1]
    for (let i = 3; i <= n; i++) {
        tri[i] = tri[i - 3] + tri[i - 2] + tri[i - 1];
    };
    return tri[n];
};