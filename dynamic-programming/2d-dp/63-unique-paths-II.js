/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {

    let r = obstacleGrid.length;
    let c = obstacleGrid[0].length;
    let dp = Array(c).fill(0);
    dp[0] = 1;
    console.log(dp);
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
            } else if (j > 0) {
                dp[j] = dp[j] + dp[j - 1]
            }
        }
    }
    console.log(dp);
    return dp[c - 1];
};

let obstacleGrid = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
console.log(uniquePathsWithObstacles(obstacleGrid));


//? Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
//? Output: 2
//? Explanation: There is one obstacle in the middle of the 3x3 grid above.
//? There are two ways to reach the bottom-right corner:
//? 1. Right -> Right -> Down -> Down
//? 2. Down -> Down -> Right -> Right

//? Input: obstacleGrid = [[0,1],[0,0]]
//? Output: 1