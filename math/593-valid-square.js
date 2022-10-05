//* Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.
//* The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.
//* A valid square has four equal sides with positive length and four equal angles (90-degree angles).

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {

    let arr = [p1, p2, p3, p4];
    arr.sort((a, b) => a[0] == b[0] ? a[1] - b[1] : a[0] - b[0]);
    var getDistance = (a, b) => {
        let d = Math.sqrt(Math.pow((a[0] - b[0]), 2) + Math.pow((a[1] - b[1]), 2));
        return d;
    }
    let d12 = getDistance(arr[0], arr[1]);
    let d13 = getDistance(arr[0], arr[2]);
    let d34 = getDistance(arr[2], arr[3]);
    let d24 = getDistance(arr[1], arr[3]);
    let l = d12;

    let c14 = getDistance(arr[0], arr[3]);
    let c23 = getDistance(arr[1], arr[2]);

    return d13 == l && d34 == l && d24 == l && c14 == c23 && l > 0;

};

const p1 = [0, 0], p2 = [1, 1], p3 = [1, 0], p4 = [0, 1];
console.log(validSquare(p1, p2, p3, p4));

//? Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
//? Output: true

//? Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
//? Output: false

//? Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
//? Output: true