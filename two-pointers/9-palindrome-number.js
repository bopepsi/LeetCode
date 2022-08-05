/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let strx = x.toString();
    let left = 0;
    let right = strx.length - 1;
    while (left < right) {
        if (strx[left] !== strx[right]) return false;
        left++;
        right--;
    };
    return true;
};