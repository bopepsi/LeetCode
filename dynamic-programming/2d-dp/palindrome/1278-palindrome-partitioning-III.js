/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var palindromePartition = function (s, k) {

    let n = s.length;
    let minOps = Array.from({ length: n }, () => Array(n).fill(0));     //* 将 i-j 变为合法的最小操作次数
    for (let l = 2; l <= n; l++) {      //* l ===> length of the substr
        for (let b = 0, e = b + l - 1; e < n; b++, e++) {
            if (s[b] !== s[e]) minOps[b][e] = minOps[b + 1][e - 1] + 1;
            else minOps[b][e] = minOps[b + 1][e - 1];
        }
    }
    console.log(minOps);
    let dp = Array.from({ length: n }, () => Array(k + 1).fill(n));     //* dp[i][k] min ops to make k strings using first i letters
    for (let i = 0; i < n; i++) {
        dp[i][1] = minOps[0][i];
        for (let s = 2; s <= k; s++) {
            for (j = 0; j < i; j++) {
                dp[i][s] = Math.min(dp[j][s - 1] + minOps[j + 1][i], dp[i][s]);
            }
        }
    }
    console.log(dp)
    return dp[n - 1][k]

};

const s = "zepagxqjowzac", k = 2;
console.log(palindromePartition(s, k));

//? Input: s = "abc", k = 2
//? Output: 1
//? Explanation: You can split the string into "ab" and "c", and change 1 character in "ab" to make it palindrome.

//? Input: s = "aabbc", k = 3
//? Output: 0
//? Explanation: You can split the string into "aa", "bb" and "c", all of them are palindrome.

//? Input: s = "leetcode", k = 8
//? Output: 0