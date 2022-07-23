//todo Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    if (n === 0) return [];

    let ans = Array(n).fill().map(() => Array(n).fill());

    let rowBegin = 0;
    let rowEnd = n - 1;
    let colBegin = 0;
    let colEnd = n - 1;

    let num = 1;

    while (rowBegin <= rowEnd && colBegin <= colEnd) {
        
        for (let i = colBegin; i <= colEnd; i++) {
            ans[rowBegin][i] = num;
            num++;
        }
        rowBegin++;

        for (let j = rowBegin; j <= rowEnd; j++) {
            ans[j][colEnd] = num;
            num++;
        }
        colEnd--;

        for (let m = colEnd; m >= colBegin; m--) {
            ans[rowEnd][m] = num;
            num++;
        }
        rowEnd--;

        for (let n = rowEnd; n >= rowBegin; n--) {
            ans[n][colBegin] = num;
            num++;
        }
        colBegin++;

    };
    return ans;

};

//?     Input: n = 3
//?     Output: [[1,2,3],[8,9,4],[7,6,5]]

//?     Input: n = 1
//?     Output: [[1]]

console.log(generateMatrix(3));