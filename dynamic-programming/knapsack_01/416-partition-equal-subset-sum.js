/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {

    let sum = nums.reduce((p, c) => { return c += p }, 0);
    if (sum % 2 !== 0) return false;
    const target = sum / 2;

    //* dp数组为sum是否可能出现
    let dp = Array(nums.length + 1).fill(false);
    //* sum为0， 什么数字都不取的情况下有解
    dp[0] = true;

    for (const n of nums) {
        for (let i = sum; i >= 0; i--) {
            //* sum从大到小遍历， 这样可以避免数组本轮赋值后被使用
            if (dp[i]) dp[i + n] = true;
            //* 遍历过后如果sum为target已经有解， 返回true
            if (dp[target]) return true;
        }
    }
    return false;

};

let nums = [1, 5, 11, 5];
console.log(canPartition(nums));


// Input: nums = [1,5,11,5]
// Output: true
// Explanation: The array can be partitioned as [1, 5, 5] and [11].

// Input: nums = [1,2,3,5]
// Output: false
// Explanation: The array cannot be partitioned into equal sum subsets.