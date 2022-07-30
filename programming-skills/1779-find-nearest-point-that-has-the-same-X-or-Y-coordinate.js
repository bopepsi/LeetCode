/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let arr = [];
    let minIndex = -1;
    let min = Infinity;
    for (let i = 0; i < points.length; i++) {
        if (points[i][0] === x || points[i][1] === y) {
            arr[i] = points[i];
        }
    };
    for (let j = 0; j < arr.length; j++) {
        if (!arr[j]) continue;
        let newMin = Math.abs((x - arr[j][0] + y - arr[j][1]));
        if (newMin < min) {
            min = newMin;
            minIndex = j;
        }
    }
    return minIndex;

};

let x = 3, y = 4, points = [[1, 2], [3, 1], [2, 4], [2, 3], [4, 4]];
console.log(nearestValidPoint(x, y, points));