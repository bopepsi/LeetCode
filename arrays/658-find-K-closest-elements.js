//* Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array. The result should also be sorted in ascending order.

//* An integer a is closer to x than an integer b if:
//* |a - x| < |b - x|, or
//* |a - x| == |b - x| and a < b

/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

    let sorted = arr.sort((a, b) => Math.abs(x - a) - Math.abs(x - b))
    let ans = [];
    for (let i = 0; i < k; i++) {
        ans.push(sorted[i])
    }

    return ans.sort((a, b) => a - b);
};

const arr = [0, 1, 1, 1, 2, 3, 6, 7, 8, 9], k = 9, x = 4
console.log(findClosestElements(arr, k, x))

//? Input: arr = [1,2,3,4,5], k = 4, x = 3
//? Output: [1,2,3,4]

//? Input: arr = [1,2,3,4,5], k = 4, x = -1
//? Output: [1,2,3,4]
