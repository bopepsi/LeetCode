// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    // for (let i = 0; i < nums.length; i++) {
    //     if (target === nums[i]) return i;
    // }
    // return nums.length;

    let l = 0;
    let r = nums.length;
    while (l < r) {
        let m = Math.floor((l + r) / 2);
        if (nums[m] >= target) r = m
        else l = m + 1;
    }
    return l;

};

// Input: nums = [1,3,5,6], target = 5
// Output: 2

// Input: nums = [1,3,5,6], target = 2
// Output: 1

// Input: nums = [1,3,5,6], target = 7
// Output: 4

// let high = nums.length - 1;
// let low = 0;
// while (low <= high) {
//     let mid = Math.floor((high + low) / 2);
//     if (nums[mid] == target) return mid;
//     else if (nums[mid] > target) {
//         high = mid - 1;
//     } else {
//         low = mid + 1;
//     }
// }
// return low;