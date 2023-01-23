//* You are given an m x n binary matrix grid. An island is a group of 1’s (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.
//? An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.
//? Return the number of distinct islands.

const getDistinctIslands = (grid) => {

    let dirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];

    let rows = grid.length;
    let cols = grid[0].length;
    let res = new Set();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1) {
                let s = [];
                dfs(i, j, i, j, s);
                res.add(s.toString());
            }
        }
    }

    function dfs(i0, j0, i, j, str) {
        if (i >= rows || i < 0 || j >= cols || j < 0 || grid[i][j] == 0) return;
        grid[i][j] = 0;
        str.push((i - i0).toString() + "-" + ((j - j0).toString()))

        for (const dir of dirs) {
            let x = i + dir[0];
            let y = j + dir[1];
            dfs(i0, j0, x, y, str);
        }
    }

    console.log(res);

    return res.size;

}

console.log(getDistinctIslands([[1, 1, 0, 1, 1], [1, 0, 0, 0, 0], [0, 0, 0, 0, 1], [1, 1, 0, 1, 1]]))

//? Input: grid = [[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]
//? Output: 1

//? Input: grid = [[1,1,0,1,1],[1,0,0,0,0],[0,0,0,0,1],[1,1,0,1,1]]
//? Output: 3