/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {

    let l = 0;
    let r = x + 1;

    //* find first m, that m^2 - x > 0
    //* ex x = 9, find m = 4, then ans = 4 - 1;
    //* ex x = 8, find m = 3, then ans = 3 - 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        console.log(l, m, r);
        if (m > x / m) r = m;
        else l = m + 1;
    }

    return l - 1;

};

console.log(mySqrt(8));

//? Input: x = 4
//? Output: 2

//? Input: x = 8
//? Output: 2
//? Explanation: The square root of 8 is 2.82842..., and since the decimal part is truncated, 2 is returned.
