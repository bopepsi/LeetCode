/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {

    let count = 0;
    const r = board.length, c = board[0].length;

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            const char = board[i][j];
            if (char === 'X') {
                if (i > 0 && board[i - 1][j] === 'X') continue;
                if (j > 0 && board[i][j - 1] === 'X') continue;
                count++;
            }
        }
    }

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