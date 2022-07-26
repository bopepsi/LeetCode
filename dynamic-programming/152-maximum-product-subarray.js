/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let dp1 = [nums[0]];
    let dp2 = [nums[0]];

    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {

        dp1[i] = Math.max(dp1[i - 1] * nums[i], dp2[i - 1] * nums[i], nums[i]);
        dp2[i] = Math.min(dp1[i - 1] * nums[i], dp2[i - 1] * nums[i], nums[i]);

        max = Math.max(dp1[i], max);
    }
    return max;
};

// Input: nums = [2, 3, -2, 4]
// Output: 6
// Explanation: [2, 3] has the largest product 6.