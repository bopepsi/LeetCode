/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//* DP
var findTargetSumWays = function (nums, target) {

    let sum = nums.reduce((p, c) => p += c, 0)
    if (sum < Math.abs(target)) return 0;

    let dp = Array(sum * 2 + 1).fill(0);
    let offset = sum;
    dp[offset] = 1;

    for (const num of nums) {
        let temp = Array(sum * 2 + 1).fill(0);
        // for (let i = 0; i < sum * 2 + 1; i++) {
        for (let i = num; i < sum * 2 + 1 - num; i++) {
            if (dp[i]) {
                temp[i + num] += dp[i];
                temp[i - num] += dp[i];
            }
        }
        dp = temp;
    }

    return dp[target + offset];

};

//* 2D-DP
var findTargetSumWaysV2 = function (nums, target) {

    let sum = nums.reduce((p, c) => p += c, 0)
    if (sum < Math.abs(target)) return 0;

    let dp = Array.from({ length: nums.length + 1 }, () => Array(sum * 2 + 1).fill(0));

    let offset = sum;
    dp[0][offset] = 1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = nums[i]; j < sum * 2 + 1 - nums[i]; j++) {
            if (dp[i][j]) {
                dp[i + 1][j + nums[i]] += dp[i][j];
                dp[i + 1][j - nums[i]] += dp[i][j];
            }
        }
    }
    console.log(dp);
    return dp[nums.length][target + offset];

};

//* DFS
var findTargetSumWaysV3 = function (nums, target) {
    let res = 0

    const backTracking = (i, total) => {
        if (i === nums.length) {
            if (total === target) {
                res++
            }
            return
        } else {
            total += nums[i]
            backTracking(i + 1, total)
            total -= nums[i]

            total -= nums[i]
            backTracking(i + 1, total)
            total += nums[i]
        }
    }
    backTracking(0, 0)
    return res
};

let nums = [1, 1, 1, 1, 1], target = 3
console.log(findTargetSumWaysV2(nums, target));

//? Input: nums = [1,1,1,1,1], target = 3
//? Output: 5
//? Explanation: There are 5 ways to assign symbols to make the sum of nums be target 3.
//? -1 + 1 + 1 + 1 + 1 = 3
//? +1 - 1 + 1 + 1 + 1 = 3
//? +1 + 1 - 1 + 1 + 1 = 3
//? +1 + 1 + 1 - 1 + 1 = 3
//? +1 + 1 + 1 + 1 - 1 = 3

//? Input: nums = [1], target = 1
//? Output: 1