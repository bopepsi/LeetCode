/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

//* dp
var minDistance = function (word1, word2) {

    let l1 = word1.length;
    let l2 = word2.length;

    let dp = Array.from({ length: l1 + 1 }, () => Array(l2 + 1));

    for (let i = 0; i <= l1; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= l2; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= l1; i++) {
        for (let j = 1; j <= l2; j++) {
            let curr = (word1[i - 1] === word2[j - 1]) ? 0 : 1;
            dp[i][j] = Math.min(
                dp[i - 1][j - 1] + curr,
                Math.min(dp[i - 1][j],
                    dp[i][j - 1]) + 1
            )
        }
    }

    return dp[l1][l2];
};

//* memorize recursion
var minDistanceV2 = function (word1, word2) {

    let dp = Array.from({ length: word1.length + 1 }, () => Array(word2.length + 1));

    const helper = (i, j) => {

        if (i === 0) return j;
        if (j === 0) return i;

        if (dp[i][j]) return dp[i][j];

        let res;

        if (word1[i - 1] === word2[j - 1]) res = helper(i - 1, j - 1);
        else res = Math.min(
            helper(i - 1, j),
            helper(i, j - 1),
            helper(i - 1, j - 1)
        ) + 1;

        dp[i][j] = res;
        return res;

    }

    return helper(word1.length, word2.length);

};

let word1 = "horse", word2 = "ross";
console.log(minDistance(word1, word2));