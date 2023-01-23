/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {

    let dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];
    let area = 0;
    let res = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                area = 0;
                dfs(i, j);
                res = Math.max(res, area);
            }
        }
    }

    function dfs(i, j) {
        if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] != 1) return;
        grid[i][j] = 0;
        area++;
        for (const dir of dirs) {
            let x = i + dir[0];
            let y = j + dir[1];
            dfs(x, y);
        }
    }

    return res;



};

var maxAreaOfIslandV2 = function (grid) {
    let max = 0, rowCount = grid.length, colCount = grid[0].length;
    const traverse = (r, c) => {
        if (r < 0 || c < 0 || r >= rowCount || c >= colCount || !grid[r][c]) return 0;
        grid[r][c] = 0;
        return 1 + traverse(r + 1, c) + traverse(r - 1, c) + traverse(r, c - 1) + traverse(r, c + 1);
    }
    for (var i = 0; i < rowCount; i++)
        for (var j = 0; j < colCount; j++)
            if (grid[i][j]) max = Math.max(max, traverse(i, j));
    return max;
};

//? Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
//? Output: 6
//? Explanation: The answer is not 11, because the island must be connected 4-directionally.

//? Input: grid = [[0,0,0,0,0,0,0,0]]
//? Output: 0