/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {

    let r = board.length;
    let c = board[0].length;
    let dp = Array.from({ length: r }, () => Array(c).fill(false));

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {

            if (board[i][j] === 'X') {
                dp[i][j] = true;
                if (i - 1 >= 0 && dp[i - 1][j]) {
                    dp[i - 1][j] = false;

                }
                else if (j - 1 >= 0 && dp[i][j - 1]) {
                    dp[i][j - 1] = false;

                }
            }
        }
    }

    let flat = dp.flat();
    let count = flat.reduce((p, c) => {
        if (c) {
            p++;
        }
        return p;
    }, 0);

    console.log(dp);
    return count;

};

let board = [
    ["X", ".", ".", "X"],
    ["X", ".", ".", "X"],
    ["X", ".", ".", "X"]];

console.log(countBattleships(board));
//? Input: board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]
//? Output: 2
//? Example 2:

//? Input: board = [["."]]
//? Output: 0