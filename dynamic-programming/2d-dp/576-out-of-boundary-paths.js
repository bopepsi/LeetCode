//* There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.
//* Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 109 + 7.

/**
 * @param {number} m
 * @param {number} n
 * @param {number} maxMove
 * @param {number} startRow
 * @param {number} startColumn
 * @return {number}
 */
var findPaths = function (m, n, maxMove, startRow, startColumn) {

    let moves = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    let dp = Array.from({ length: m }, () => Array(n).fill(0));
    dp[startRow][startColumn] = 1;
    let res = 0;
    let mod = Math.pow(10, 9) + 7;

    for (let i = 0; i < maxMove; i++) {
        let curr = Array.from({ length: m }, () => Array(n).fill(0));
        for (let a = 0; a < m; a++) {
            for (let b = 0; b < n; b++) {
                if (dp[a][b] === 0) continue;

                for (let move of moves) {
                    let x = a + move[0];
                    let y = b + move[1];

                    if (x < 0 || x >= m || y < 0 || y >= n) {
                        res = (res + dp[a][b]) % mod;
                    } else {
                        curr[x][y] = (curr[x][y] + dp[a][b]) % mod;
                    }
                }
            }
        }
        dp = curr;
    }

    return res;

};

const m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0;
console.log(findPaths(m, n, maxMove, startRow, startColumn));

//? Input: m = 2, n = 2, maxMove = 2, startRow = 0, startColumn = 0
//? Output: 6

//? Input: m = 1, n = 3, maxMove = 3, startRow = 0, startColumn = 1
//? Output: 12
