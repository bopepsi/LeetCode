/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {

    let r = grid.length;
    let c = grid[0].length;

    let dp = Array.from({ length: r }, () => Array(c));
    console.log(dp);
    dp[0][0] = grid[0][0];
    for (let m = 1; m < r; m++) {
        dp[m][0] = dp[m - 1][0] + grid[m][0];
    };
    for (let n = 1; n < c; n++) {
        dp[0][n] = dp[0][n - 1] + grid[0][n];
    };
    console.log(dp);

    for (let i = 1; i < r; i++) {
        for (j = 1; j < c; j++) {
            dp[i][j] = Math.min(dp[i - 1][j] + grid[i][j], dp[i][j - 1] + grid[i][j]);
        }
    }

    console.log(dp);
    return dp[r - 1][c - 1];

};

let grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]];
console.log(minPathSum(grid));

//? Input: grid = [[1, 3, 1], [1, 5, 1], [4, 2, 1]]
//? Output: 7
//? Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.

//? Input: grid = [[1, 2, 3], [4, 5, 6]]
//? Output: 12