//todo Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.
//? A subarray is a contiguous part of an array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    let prev = 0;
    for (let i = 0; i < nums.length; i++) {
        prev = Math.max(prev+nums[i], nums[i]);
        max = Math.max(prev, max);
    }
    return max;
};

//? Input: nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
//? Output: 6
//? Explanation: [4, -1, 2, 1] has the largest sum = 6.

//? Input: nums = [1]
//? Output: 1

//? Input: nums = [5, 4, -1, 7, 8]
//? Output: 23

console.log(maxSubArray([5, 4, -1, 7, 8]))