/**
 * @param {number} n
 * @return {number}
 */

//* Similar to LC.790
var numOfWays = function (n) {

    const mod = Math.pow(10, 9) + 7;

    let dp = Array.from({ length: n + 1 }, () => [0, 0]);
    dp[1][0] = 6;   //* 2 colors
    dp[1][1] = 6;   //* 3 colors

    for (let i = 2; i <= n; i++) {
        dp[i][0] = (dp[i - 1][0] * 3 + dp[i - 1][1] * 2) % mod;
        dp[i][1] = (dp[i - 1][0] * 2 + dp[i - 1][1] * 2) % mod;
    }

    return (dp[n][0] + dp[n][1]) % mod;

};

let n = 5000;
console.log(numOfWays(n));

//? Input: n = 1
//? Output: 12
//? Explanation: There are 12 possible way to paint the grid as shown.

//? Input: n = 5000
//? Output: 30228214

//* R G Y --> 3 colors --> 可以从3个颜色 或者两个颜色发展出（可以发展出2或3个颜色）
//* 3个颜色*2    2个颜色*2
//* Y R G       G Y G
//* G Y R       G R G

//* R Y R --> 2 colors --> 可以从3个颜色 或者两个颜色发展出（可以发展出2或3个颜色）
//* 3个颜色*2    2个颜色*3
//* Y R G       G R G
//* G R Y       Y G Y
//*             Y R Y

