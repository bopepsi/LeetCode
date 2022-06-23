//todo Determine if a 9 x 9 Sudoku board is valid.Only the filled cells need to be validated according to the following rules:
//* Each row must contain the digits 1 - 9 without repetition.
//* Each column must contain the digits 1 - 9 without repetition.
//* Each of the nine 3 x 3 sub - boxes of the grid must contain the digits 1 - 9 without repetition.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    let rset = [];
    let cset = [];
    let bset = [];
    for (let i = 0; i < 9; i++) {
        rset[i] = new Set();
        cset[i] = new Set();
        bset[i] = new Set();
    }

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let v = board[i][j];

            if (v === '.') continue;

            if (rset[i].has(v) || cset[j].has(v) || bset[Math.floor(i / 3) * 3 + Math.floor(j / 3)].has(v)) return false;

            rset[i].add(v);
            cset[j].add(v);
            bset[Math.floor(i / 3) * 3 + Math.floor(j / 3)].add(v);
        }
    }
    return true;
};