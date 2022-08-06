/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) ans -= roman[s[i]];
        else ans += roman[s[i]];
    }

    return ans;
};

//? Input: s = "III"
//? Output: 3
//? Explanation: III = 3.

//? Input: s = "LVIII"
//? Output: 58
//? Explanation: L = 50, V= 5, III = 3.

//? Input: s = "MCMXCIV"
//? Output: 1994
//? Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.