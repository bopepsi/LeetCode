//* Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.
//* In one step, you can delete exactly one character in either string.

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

    let l1 = word1.length;
    let l2 = word2.length;
    let dp = Array.from({ length: l1 + 1 }, () => Array(l2 + 1));

    for (let i = 0; i < dp.length; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j < dp[0].length; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            let c1 = word1[i - 1], c2 = word2[j - 1];
            if (c1 == c2) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + 1;
            }
        }
    }
    
    return dp[l1][l2];

};

const word1 = "leetcode", word2 = "etco";
console.log(minDistance(word1, word2));

//? Input: word1 = "sea", word2 = "eat"
//? Output: 2
//? Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".

//? Input: word1 = "leetcode", word2 = "etco"
//? Output: 4
