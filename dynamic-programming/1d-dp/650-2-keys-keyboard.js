//* There is only one character 'A' on the screen of a notepad. You can perform one of two operations on this notepad for each step:
//* Copy All: You can copy all the characters present on the screen (a partial copy is not allowed).
//* Paste: You can paste the characters which are copied last time.
//* Given an integer n, return the minimum number of operations to get the character 'A' exactly n times on the screen.

/**
 * @param {number} n
 * @return {number}
 */
var minSteps = function (n) {
    let dp = Array(n + 1);
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        dp[i] = i;
        for (let j = i - 1; j > 1; j--) {
            let diff = i - j;
            if (i % j === 0) {
                dp[i] = Math.min(dp[i], dp[j] + 1 + diff / j)
                break;
            }
        }
    }
    console.log(dp)
    return dp[n];

};

console.log(minSteps(9))

//* 0AAAAAA
//* 0123456