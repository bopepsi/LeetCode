/**
 * @param {string} p
 * @return {number}
 */
var findSubstringInWraproundString = function (p) {

    let dp = Array(26).fill(0);
    let count = 1;

    //* 找到以当前字母结尾的最大长度， 为可行的字串个数

    for (let i = 0; i < p.length; i++) {
        let curr = p[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if (i === 0) {
            dp[curr] = 1;
            continue;
        }
        if (i > 0) {
            let prev = p[i - 1].charCodeAt(0) - 'a'.charCodeAt(0);
            console.log(curr,prev)
            if ((curr - prev) === 1 || (curr === 0 && prev === 25)) {
                count++;
            } else {
                count = 1;
            }
            dp[curr] = Math.max(dp[curr], count);
        }
    }
console.log(dp);
    let res = 0;
    for (let e of dp) {
        res += e;
    }
    return res;

};

console.log(findSubstringInWraproundString('zab'))

//? Input: p = "a"
//? Output: 1
//? Explanation: Only the substring "a" of p is in s.

//? Input: p = "cac"
//? Output: 2
//? Explanation: There are two substrings ("a", "c") of p in s.

//? Input: p = "zab"
//? Output: 6
//? Explanation: There are six substrings ("z", "a", "b", "za", "ab", and "zab") of p in s.