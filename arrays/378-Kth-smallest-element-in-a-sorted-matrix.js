/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {

    let row = matrix.length;
    let arr = [];

    for (let i = 0; i < row; i++) {
        arr.push(...matrix[i]);
    }
    arr = arr.sort((a, b) => a - b);

    return arr[k - 1];

};

let matrix = [[1, 2], [1, 3]], k = 2;
// let matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]], k = 8;
//? Input: matrix = [[1,5,9],[10,11,13],[12,13,15]], k = 8
//? Output: 13
//? Explanation: The elements in the matrix are [1,5,9,10,11,12,13,13,15], and the 8th smallest number is 13

console.log(kthSmallest(matrix, k));