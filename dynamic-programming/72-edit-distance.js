/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {

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