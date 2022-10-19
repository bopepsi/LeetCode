/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    let dp = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }
    console.log(dp)
    return dp[nums.length - 1]
};

const nums = [0];
console.log(rob(nums))