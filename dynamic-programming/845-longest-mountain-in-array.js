/**
 * @param {number[]} arr
 * @return {number}
 */
var longestMountain = function (arr) {

    let inc = Array(arr.length).fill(0);
    let dec = Array(arr.length).fill(0);
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            inc[i] = inc[i - 1] + 1;
        }
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1]) {
            dec[i] = dec[i + 1] + 1;
        }
    }

    let ans = 0;

    for (let i = 0; i < arr.length; i++) {
        if (inc[i] && dec[i])
            ans = Math.max((inc[i] + dec[i] + 1), ans)
    }

    return ans;

};

console.log(longestMountain([2, 2, 2]))

//? Input: arr = [2,1,4,7,3,2,5]
//? Output: 5
//? Explanation: The largest mountain is [1,4,7,3,2] which has length 5.

//? Input: arr = [2,2,2]
//? Output: 0
//? Explanation: There is no mountain.