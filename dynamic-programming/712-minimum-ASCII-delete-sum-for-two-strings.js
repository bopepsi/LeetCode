/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */

//* Similar to LC-72

var minimumDeleteSum = function (s1, s2) {

    let dp = Array.from({ length: s1.length + 1 }, () => Array(s2.length + 1));

    dp[0][0] = 0;

    for (let i = 1; i <= s1.length; i++) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }

    for (let j = 1; j <= s2.length; j++) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }

    for (let i = 1; i <= s1.length; i++) {
        for (let j = 1; j <= s2.length; j++) {

            if (s1[i - 1] === s2[j - 1]) { dp[i][j] = dp[i - 1][j - 1]; continue; }

            dp[i][j] = Math.min(
                dp[i - 1][j] + s1.charCodeAt(i - 1),
                dp[i][j - 1] + s2.charCodeAt(j - 1)
            )
        }
    }

    return dp[s1.length][s2.length];

};

let s1 = "delete", s2 = "leet";
console.log(minimumDeleteSum(s1, s2));

//? Input: s1 = "sea", s2 = "eat"
//? Output: 231
//? Explanation: Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.
//? Deleting "t" from "eat" adds 116 to the sum.
//? At the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.

//? Input: s1 = "delete", s2 = "leet"
//? Output: 403
//? Explanation: Deleting "dee" from "delete" to turn the string into "let",
//? adds 100[d] + 101[e] + 101[e] to the sum.
//? Deleting "e" from "leet" adds 101[e] to the sum.
//? At the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.
//? If instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.