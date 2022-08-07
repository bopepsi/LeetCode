/**
 * @param {number} n
 * @return {number}
 */

//* Check out attached images for details

var numTilings = function (n) {

    let kMod = Math.pow(10, 9) + 7;

    let dp = Array(n + 1).fill(0).map(e => [0, 0]);

    dp[0][0] = 1;
    dp[1][0] = 1;

    dp[0][1] = 1;
    dp[1][1] = 0;

    for (let i = 2; i <= n; i++) {
        dp[i][0] = (dp[i - 2][0] + dp[i - 1][0] + 2 * dp[i - 1][1]) % kMod;
        dp[i][1] = (dp[i - 2][0] + dp[i - 1][1]) % kMod;
    }

    return dp[n][0];

};

var numTilingsOriginal = function (n) {

    let kMod = Math.pow(10, 9) + 7;

    let dp = Array(n + 1).fill(0).map(e => [0, 0, 0]);

    dp[0][0] = 1;
    dp[1][0] = 1;

    dp[0][1] = 1;
    dp[1][1] = 0;

    dp[0][2] = 1;
    dp[1][2] = 0;

    for (let i = 2; i <= n; i++) {
        dp[i][0] = (dp[i - 2][0] + dp[i - 1][0] + dp[i - 1][1] + dp[i - 1][2]) % kMod;
        dp[i][1] = (dp[i - 2][0] + dp[i - 1][2]) % kMod;
        dp[i][2] = (dp[i - 1][0] + dp[i - 1][1]) % kMod;
    }

    console.log(dp);

    return dp[n][0];

};

console.log(numTilings(3));