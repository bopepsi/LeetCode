/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
    if(n===0) return false;
    const f = [2, 3, 5];
    for (let i = 0; i < f.length; i++) {
        while (n % f[i] == 0) n /= f[i];
    }
    return n === 1;
};

//? Input: n = 6
//? Output: true
//? Explanation: 6 = 2 × 3

//? Input: n = 1
//? Output: true
// Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.

//? Input: n = 14
//? Output: false
//? Explanation: 14 is not ugly since it includes the prime factor 7.