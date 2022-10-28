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

    let l = 0;
    let r = arr.length - k;
    while (l < r) {
        mid = Math.floor((l + r) / 2);
        if (arr[mid + k] - x < x - arr[mid]) {      // mid+k is closer to x
            l = mid + 1;
        } else {
            r = mid
        }
    }
    return arr.slice(l, l + k);

};

const arr = [0, 1, 1, 1, 2, 3, 6, 7, 8, 9], k = 9, x = 4
// console.log(findClosestElements(arr, k, x))

//? Input: arr = [1,2,3,4,5], k = 4, x = 3
//? Output: [1,2,3,4]

//? Input: arr = [1,2,3,4,5], k = 4, x = -1
//? Output: [1,2,3,4]
