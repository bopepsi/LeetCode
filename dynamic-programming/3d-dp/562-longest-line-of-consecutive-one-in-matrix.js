//* Given an m x n binary matrix mat, return the length of the longest line of consecutive one in the matrix.
//* The line could be horizontal, vertical, diagonal, or anti - diagonal.

const longestLine = (mat) => {

    let r = mat.length;
    let c = mat[0].length;

    let max = 0;

    let dp = Array.from({ length: r }, () => Array.from({ length: c }, () => Array(4).fill(0)));
    console.log(dp);

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {

            if (mat[i][j] === 0) continue;

            //* horizontal 0, vertical 1, cross 2, antiCross 3.
            for (let t = 0; t < 4; t++) {
                dp[i][j][t] = 1;
            }

            //* horizontally
            if (j > 0) {
                dp[i][j][0] += dp[i][j - 1][0];
            }

            //* vertically
            if (i > 0) {
                dp[i][j][1] += dp[i - 1][j][1];
            }

            //* cross
            if (i > 0 && j > 0) {
                dp[i][j][2] += dp[i - 1][j - 1][2];
            }

            //* anti-cross
            if (i > 0 && j < c - 1) {
                dp[i][j][3] += dp[i - 1][j + 1][3];
            }

            max = Math.max(dp[i][j][0], dp[i][j][1], dp[i][j][2], dp[i][j][3], max);
        }
    }

    return max;

}

const mat = [[0, 1, 1, 0], [0, 1, 1, 0], [0, 0, 0, 1]]
console.log(longestLine(mat));

//? Input: mat = [[0,1,1,0],[0,1,1,0],[0,0,0,1]]
//? Output: 3

//? Input: mat = [[1,1,1,1],[0,1,1,0],[0,0,0,1]]
//? Output: 4
