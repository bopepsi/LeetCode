/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {

    let r = grid.length;
    let c = grid[0].length;
    let ans = 0;

    //* 初始时每个格子都有四个边 若有一个相邻的岛屿 则边长减去一个边
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let temp = 4;
            if (grid[i][j] === 1) {
                if (grid[i - 1] && grid[i - 1][j] === 1) {
                    temp--;
                }
                if (grid[i + 1] && grid[i + 1][j] === 1) {
                    temp--;
                }
                if (grid[i][j - 1] && grid[i][j - 1] === 1) {
                    temp--;
                }
                if (grid[i][j + 1] && grid[i][j + 1] === 1) {
                    temp--;
                }
                console.log(temp);
                ans += temp;
            }
        }
    }
    return ans;

};

const grid = [[1,1]];
console.log(islandPerimeter(grid));

//? Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
//? Output: 16
//? Explanation: The perimeter is the 16 yellow stripes in the image above.

//? Input: grid = [[1]]
//? Output: 4

//? Input: grid = [[1,0]]
//? Output: 4