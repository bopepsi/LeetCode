/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
    if (n === 1) return true;
    if (n < 1) return false;
    if (n > 1) return isPowerOfFour(n / 4);
};