/**
 * @param {string} s
 * @return {boolean}
 */
var checkPartitioning = function (s) {

    const n = s.length;
    let isValid = Array.from({ length: n }, () => Array(n).fill(1));
    for (let l = 2; l <= n; l++) {      //* 先便利一遍， isValid[b][e] 表示从 b 到 e 是否为合法对称字符串
        for (let b = 0, e = b + l - 1; e < n; b++, e++) {
            if (isValid[b + 1][e - 1] && s[b] === s[e]) isValid[b][e] = 1;
            else isValid[b][e] = 0;
        }
    }
    
    for (let i = 1; i < n - 1; i++) {       //* 用 i 和 j 将字符串分割成3份， 若3份全部满足条件， 则返回 true
        for (let j = i + 1; j < n; j++) {
            if (isValid[0][i - 1] && isValid[i][j - 1] && isValid[j][n - 1]) return true;
        }
    }
    return false;

};

const s = "acab";
console.log(checkPartitioning(s));

//? Input: s = "abcbdd"
//? Output: true
//? Explanation: "abcbdd" = "a" + "bcb" + "dd", and all three substrings are palindromes.

//? Input: s = "bcbddxy"
//? Output: false
//? Explanation: s cannot be split into 3 palindromes.