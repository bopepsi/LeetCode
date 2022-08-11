/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {

    let r = t.length;
    let c = s.length;
    let dp = Array.from({ length: r + 1 }, () => Array(c + 1).fill(false));

    for (let k = 0; k <= r; k++) {
        dp[k][0] = true;
    };

    for (let i = 1; i <= r; i++) {
        for (let j = 1; j <= c; j++) {
            if (t[i - 1] === s[j - 1] && dp[i - 1][j - 1] === true) {
                dp[i][j] = true;
            } else if (dp[i - 1][j] === true) {
                dp[i][j] = true;
            }
        }
    }

    return dp[r][c];

};

console.log(isSubsequence('abc', 'ahbgdc'));

//?     Input: s = "abc", t = "ahbgdc"
//?     Output: true

//?     Input: s = "axc", t = "ahbgdc"
//?     Output: false

