/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    let dp = [nums[0], Math.max(nums[0], nums[1])];

    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])
    }

    return dp[nums.length - 1]

};

var robV2 = function (nums) {

    const dp = n => {
        if (n < 0) return 0;
        return Math.max(nums[n] + dp(n - 2), dp(n - 1));
    }
    return dp(nums.length - 1);

};

console.log(robV2([2, 7, 9, 3, 1]));
console.log(rob([2]));