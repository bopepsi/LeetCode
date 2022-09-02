/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

//* The Hamming distance between two integers is the number of positions at which the corresponding bits are different.
var hammingDistance = function (x, y) {

    let n = x ^ y;
    let s = Number(n).toString(2);
    let res = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 1) res++;
    }
    return res;

};

//? Input: x = 1, y = 4
//? Output: 2
//? Explanation:
//? 1   (0 0 0 1)
//? 4   (0 1 0 0)
//?        ↑   ↑
//? The above arrows point to positions where the corresponding bits are different.

//? Input: x = 3, y = 1
//? Output: 1