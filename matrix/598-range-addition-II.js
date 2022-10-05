/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {

    let minX = m, minY = n;

    for (const ele of ops) {
        minX = Math.min(ele[0], minX);
        minY = Math.min(ele[1], minY);
    }

    return minX * minY;

};

// Input: m = 3, n = 3, ops = [[2,2],[3,3]]
// Output: 4
// Explanation: The maximum integer in M is 2, and there are four of it in M. So return 4.

// Input: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
// Output: 4

// Input: m = 3, n = 3, ops = []
// Output: 9
