/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

    const r = matrix.length;
    const c = matrix[0].length;
    let firstRowHasZero;
    let firstColHasZero;

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {

            if (matrix[i][j] === 0) {
                if (i === 0 || j === 0) {
                    if (i === 0) firstRowHasZero = true;
                    if (j === 0) firstColHasZero = true;
                    continue;
                }
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            };
        };
    };

    console.log(firstRowHasZero, firstColHasZero)

    for (let x = 1; x < c; x++) {
        if (matrix[0][x] === 0) {
            for (let y = 0; y < r; y++) {
                matrix[y][x] = 0;
            };
        };
    };

    for (let m = 1; m < r; m++) {
        if (matrix[m][0] === 0) {
            for (let n = 0; n < c; n++) {
                matrix[m][n] = 0;
            };
        };
    };

    if (firstRowHasZero) {
        for (let l = 0; l < c; l++) {
            matrix[0][l] = 0;
        }
    };

    if (firstColHasZero) {
        for (let k = 0; k < r; k++) {
            matrix[k][0] = 0;
        }
    };
    console.log(matrix)

};

const matrix = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]]
console.log(setZeroes(matrix));

//? Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
//? Output: [[1,0,1],[0,0,0],[1,0,1]]

//? Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
//? Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]