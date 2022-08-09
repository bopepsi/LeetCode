/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    let n = nums.length;
    let dp = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        let max = 0;
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                max = Math.max(max, dp[j]);
            }
        }
        if (max) dp[i] = max + 1;
    }
    return Math.max(...dp);
};

const nums = [0,1,0,3,2,3]
console.log(lengthOfLIS(nums));

//? Input: nums = [10,9,2,5,3,7,101,18]
//? Output: 4
//? Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

//? Input: nums = [0,1,0,3,2,3]
//? Output: 4

//? Input: nums = [7,7,7,7,7,7,7]
//? Output: 1