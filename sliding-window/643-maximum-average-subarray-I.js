/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {

    let res = 0;
    let sum = 0;

    for (let i = 0; i < k; i++) {
        sum += nums[i];
    }

    res = sum / k;

    for (let j = k; j < nums.length; j++) {
        sum = sum + nums[j] - nums[j - k];
        res = Math.max(sum / k, res);
    }

    return res;

};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4))

//? Input: nums = [1,12,-5,-6,50,3], k = 4
//? Output: 12.75000
//? Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
//? Example 2:

//? Input: nums = [5], k = 1
//? Output: 5.00000