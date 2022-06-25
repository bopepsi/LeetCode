//todo Given an m x n matrix, return all elements of the matrix in spiral order.

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {

    let row = matrix.length;
    if (row === 0) return [];
    let col = matrix[0].length;
    let ans = [...matrix[0]];

    if (row > 1) {
        for (let i = 1; i < row; i++) {
            ans.push(matrix[i][col - 1]);
        }
        for (let j = col - 2; j > -1; j--) {
            ans.push(matrix[row - 1][j]);
        }
    }
    if (col > 1) {
        for (let k = row - 2; k > 0; k--) {
            ans.push(matrix[k][0]);
        }
    }

    let m = [];
    if (col > 2) {
        for (let t = 1; t < row - 1; t++) {
            let p = matrix[t].slice(1, -1);
            m.push([...p]);
        }
    }

    return ans.concat(spiralOrder(m));
};

//?     Input: matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
//?     Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

//?     Input: matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]
//?     Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

console.log(spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]))
console.log(spiralOrder([[1, 2, 3, 4], [5, 6, 7, 8]]))
console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))
const t = [[1, 11], [2, 12], [3, 13], [4, 14], [5, 15], [6, 16], [7, 17], [8, 18], [9, 19], [10, 20]]
console.log(spiralOrder(t));
