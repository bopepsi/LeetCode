/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    let temp = 0;
    for (let i = 0; i < nums.length; i++) {
        temp = Math.max(temp + nums[i], nums[i]);
        max = Math.max(temp, max);
    }
    return max;
};

var maxSubArrayV2 = function (nums) {

    let dp = [nums[0]];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max((dp[i - 1] + nums[i]), nums[i]);
        max = Math.max(dp[i], max);
    }

    return max;

};



//? Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
//? Output: 6
//? Explanation: [4,-1,2,1] has the largest sum = 6.

console.log(maxSubArrayV2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));