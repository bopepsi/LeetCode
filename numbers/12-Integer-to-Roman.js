//todo Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

//* Symbol       Value
//* I             1
//* V             5
//* X             10
//* L             50
//* C             100
//* D             500
//* M             1000
//* For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.
// I can be placed before V(5) and X(10) to make 4 and 9. 
// X can be placed before L(50) and C(100) to make 40 and 90. 
// C can be placed before D(500) and M(1000) to make 400 and 900.

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const rom = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
    let res = '';

    for (let i = 0; num; i++) {
        while (num >= val[i]) {
            res += rom[i];
            num -= val[i];
        }
    }
    return res;
};

//?     Input: num = 3
//?     Output: "III"
//?     Explanation: 3 is represented as 3 ones.

//?     Input: num = 58
//?     Output: "LVIII"
//?     Explanation: L = 50, V = 5, III = 3.

//?     Input: num = 1994
//?     Output: "MCMXCIV"
//?     Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

console.log(intToRoman(1994))