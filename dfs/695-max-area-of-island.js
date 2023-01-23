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

//? Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
//? Output: 6
//? Explanation: The answer is not 11, because the island must be connected 4-directionally.

//? Input: grid = [[0,0,0,0,0,0,0,0]]
//? Output: 0