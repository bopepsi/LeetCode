/**
 * @param {string} s
 * @return {number}
 */
var minCut = function (s) {

    let l = s.length;
    const isValid = Array.from({ length: l }, () => Array(l).fill(1));
    for (let i = 2; i <= l; i++) {      //* length of substr to be tested
        for (let b = 0, e = b + i - 1; e < l; b++, e++) {
            if (isValid[b + 1][e - 1] && s[b] === s[e]) {
                isValid[b][e] = 1;
            } else {
                isValid[b][e] = 0;
            }
        }
    }

    console.log(isValid);
    let dp = Array(l).fill(l - 1);      //* 已 i 结尾时最小 cut 的次数, 最大cut次数可能为 n-1
    for (let i = 0; i < l; i++) {
        if (isValid[0][i]) {        //* 如果从 0 到 i 已经满足条件， 则不用 cut， 直接赋值 dp[i] 为 0
            dp[i] = 0;
            continue;
        }
        for (let j = 0; j < i; j++) {   //* 从 0 - i 中遍历， 若 j+1 到 i 已经是满足条件对称字符串， 则 dp[i] 为 dp[j]+1 与 dp[i] 中取最小值
            if (isValid[j + 1][i]) {
                dp[i] = Math.min(dp[j] + 1, dp[i]);
            }
        }
    }

    return dp[l - 1];

};

const str = "aab";
console.log(minCut(str));

//? Input: s = "aab"
//? Output: 1
//? Explanation: The palindrome partitioning ["aa","b"] could be produced using 1 cut.

//? Input: s = "a"
//? Output: 0

//? Input: s = "ab"
//? Output: 1