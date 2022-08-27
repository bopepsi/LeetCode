/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//* 2D-dp
var largestSumOfAverages = function (nums, k) {

    let l = nums.length;
    let dp = Array.from({ length: k + 1 }, () => Array(nums.length + 1).fill(0));
    let sum = [0];

    for (let i = 1; i <= l; i++) {
        sum[i] = sum[i - 1] + nums[i - 1];
        dp[1][i] = sum[i] / i;
    }

    for (let n = 2; n <= k; n++) {
        for (let i = n; i <= l; i++) {
            for (let j = n - 1; j < i; j++) {
                dp[n][i] = Math.max(dp[n][i], dp[n - 1][j] + (sum[i] - sum[j]) / [i - j]);
            }
        }
    }

    return dp[k][l];
};

//* 1D-dp
var largestSumOfAveragesV2 = function (nums, k) {

    let l = nums.length;
    let dp = Array(l + 1).fill(0);
    let sum = [0];

    for (let i = 1; i <= l; i++) {
        sum[i] = sum[i - 1] + nums[i - 1];
        dp[i] = sum[i] / i;
    }

    for (let n = 2; n <= k; n++) {
        let temp = Array(l + 1).fill(0);
        for (let i = n; i <= l; i++) {
            for (let j = n - 1; j < i; j++) {
                temp[i] = Math.max(temp[i], dp[j] + (sum[i] - sum[j]) / (i - j));
            }
        }
        dp = temp;
    }

    return dp[l];

};

let nums = [9, 1, 2, 3, 9], k = 3;
console.log(largestSumOfAverages(nums, k));

//? Input: nums = [9,1,2,3,9], k = 3
//? Output: 20.00000
//? Explanation: 
//? The best choice is to partition nums into [9], [1, 2, 3], [9]. The answer is 9 + (1 + 2 + 3) / 3 + 9 = 20.
//? We could have also partitioned nums into [9, 1], [2], [3, 9], for example.
//? That partition would lead to a score of 5 + 2 + 6 = 13, which is worse.

//? Input: nums = [1,2,3,4,5,6,7], k = 4
//? Output: 20.50000