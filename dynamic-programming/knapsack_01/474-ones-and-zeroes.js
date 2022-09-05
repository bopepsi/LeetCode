/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function (strs, m, n) {

    let dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    //* rows(m) zeros, cols(n) ones
    for (let str of strs) {
        let zeros = 0;
        let ones = 0;
        for (let c of str) {
            c == 0 && zeros++;
            c == 1 && ones++;
        }
        console.log(zeros, ones);
        for (let i = m; i >= zeros; i--) {
            for (let j = n; j >= ones; j--) {
                dp[i][j] = Math.max(dp[i][j], dp[i - zeros][j - ones] + 1);
            }
        }
    }
    console.log(dp);
    return dp[m][n];

};

const strs = ["10", "0001", "111001", "1", "0"], m = 5, n = 3;
console.log(findMaxForm(strs, m, n));

// Input: strs = ["10","0001","111001","1","0"], m = 5, n = 3
// Output: 4
// Explanation: The largest subset with at most 5 0's and 3 1's is {"10", "0001", "1", "0"}, so the answer is 4.
// Other valid but smaller subsets include {"0001", "1"} and {"10", "1", "0"}.
// {"111001"} is an invalid subset because it contains 4 1's, greater than the maximum of 3.

// Input: strs = ["10","0","1"], m = 1, n = 1
// Output: 2
// Explanation: The largest subset is {"0", "1"}, so the answer is 2.