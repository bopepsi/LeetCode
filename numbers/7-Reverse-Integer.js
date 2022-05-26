//todo Given a signed 32 - bit integer x, return x with its digits reversed.If reversing x causes the value to go outside the signed 32 - bit integer range[-231, 231 - 1], then return 0.
//todo Assume the environment does not allow you to store 64 - bit integers(signed or unsigned).

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let neg;
    if (x < 0) {
        neg = true;
    }
    x = Math.abs(x);
    let ans = '';
    let res;
    while (x > 9) {
        res = x % 10;
        // console.log(res);
        ans += res;
        x = Math.floor(x / 10);
        // console.log(x);
    }
    ans += x;
    ans = neg ? (0 - ans) : (0 + ans);
    if (ans > (Math.pow(2, 31) - 1) || ans < (-Math.pow(2, 31))) {
        return 0;
    }
    return ans;
};

//?     Input: x = 123
//?     Output: 321
//?     Input: x = -123
//?     Output: -321
//?     Input: x = 120
//?     Output: 21
-231, 231 - 1

console.log(reverse(-10020));

console.log(Math.pow(2, 31))
console.log(Number(Infinity))


//? Another solution by using array to reverse
var reverse2 = function (x) {
    const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')) * Math.sign(x);
    return (reversed <= 0x7fffffff && reversed >= -0x80000000) ? reversed : 0;
};