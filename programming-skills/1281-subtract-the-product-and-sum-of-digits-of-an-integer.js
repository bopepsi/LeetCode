/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let s = n.toString().split('').map(e => Number(e));
    let product = s.reduce((p, c) => p * c, 1);
    let sum = s.reduce((p, c) => p + c, 0);
    return product - sum;
};

// Input: n = 234
// Output: 15 
// Explanation: 
// Product of digits = 2 * 3 * 4 = 24 
// Sum of digits = 2 + 3 + 4 = 9 
// Result = 24 - 9 = 15

// Input: n = 4421
// Output: 21
// Explanation: 
// Product of digits = 4 * 4 * 2 * 1 = 32 
// Sum of digits = 4 + 4 + 2 + 1 = 11 
// Result = 32 - 11 = 21