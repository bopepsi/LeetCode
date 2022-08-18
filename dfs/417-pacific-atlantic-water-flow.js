/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function (heights) {

    let r = heights.length;
    let c = heights[0].length;

    let dpP = Array.from({ length: r }, () => Array(c));
    let dpA = Array.from({ length: r }, () => Array(c));

    const dfs = (matrix, prev, row, col) => {

        if (row < 0 || row >= r || col >= c || col < 0) return;
        if (matrix[row][col]) return;
        if (heights[row][col] < prev) return;

        matrix[row][col] = true;
        dfs(matrix, heights[row][col], row - 1, col);
        dfs(matrix, heights[row][col], row + 1, col);
        dfs(matrix, heights[row][col], row, col - 1);
        dfs(matrix, heights[row][col], row, col + 1);

    }

    for (let k = 0; k < r; k++) {
        dfs(dpP, -1, k, 0);
        dfs(dpA, -1, k, c - 1);
    }
    for (let l = 0; l < c; l++) {
        dfs(dpP, -1, 0, l);
        dfs(dpA, -1, r - 1, l);
    }

    let ans = [];
    for (let m = 0; m < r; m++) {
        for (let n = 0; n < c; n++) {
            if (dpP[m][n] && dpA[m][n]) {
                ans.push([m, n]);
            }
        }
    }
    console.log(dpP);
    console.log(dpA);
    return ans;

};

let heights = [ [1, 2, 2, 3, 5], 
                [3, 2, 3, 4, 4],
                [2, 4, 5, 3, 1],
                [6, 7, 1, 4, 5],
                [5, 1, 1, 2, 4]];
console.log(pacificAtlantic(heights));
