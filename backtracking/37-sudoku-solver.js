//todo Write a program to solve a Sudoku puzzle by filling the empty cells.
//* A sudoku solution must satisfy all of the following rules:
//* Each of the digits 1 - 9 must occur exactly once in each row.
//* Each of the digits 1 - 9 must occur exactly once in each column.
//* Each of the digits 1 - 9 must occur exactly once in each of the 9 3x3 sub - boxes of the grid.
//* The '.' character indicates empty cells.

/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function (board) {

    var rset = Array(9).fill([]).map(item => Array(10).fill(0));
    var cset = Array(9).fill([]).map(item => Array(10).fill(0));
    var bset = Array(9).fill([]).map(item => Array(10).fill(0));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            let num = board[i][j];
            if (num !== '.') {
                rset[i][num] = 1;
                cset[j][num] = 1;
                bset[Math.floor(i / 3) * 3 + Math.floor(j / 3)][num] = 1;
            }
        }
    }

    const backTrackFill = (row, col) => {
        if (row === 9) return true;

        let ncol = (col + 1) % 9;
        let nrow = ncol === 0 ? row + 1 : row;

        if (board[row][col] !== '.') return backTrackFill(nrow, ncol);

        let box = Math.floor(row / 3) * 3 + Math.floor(col / 3);
        for (let i = 1; i <= 9; i++) {
            if (!rset[row][i] && !cset[col][i] && !bset[box][i]) {
                rset[row][i] = 1;
                cset[col][i] = 1;
                bset[box][i] = 1;
                board[row][col] = i.toString();
                if(backTrackFill(nrow, ncol)) return true;
                rset[row][i] = 0;
                cset[col][i] = 0;
                bset[box][i] = 0;
                board[row][col] = '.';
            }
        }
        return false;
    }
    backTrackFill(0, 0);
    return board;

};

let board = [["5", "3", ".", ".", "7", ".", ".", ".", "."], ["6", ".", ".", "1", "9", "5", ".", ".", "."], [".", "9", "8", ".", ".", ".", ".", "6", "."], ["8", ".", ".", ".", "6", ".", ".", ".", "3"], ["4", ".", ".", "8", ".", "3", ".", ".", "1"], ["7", ".", ".", ".", "2", ".", ".", ".", "6"], [".", "6", ".", ".", ".", ".", "2", "8", "."], [".", ".", ".", "4", "1", "9", ".", ".", "5"], [".", ".", ".", ".", "8", ".", ".", "7", "9"]]

console.log(solveSudoku(board))
