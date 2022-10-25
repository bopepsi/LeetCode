/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

    let dp = [];        // min step to reach n-1 from i
    let l = nums.length;

    const helper = i => {
        if (dp[i] !== undefined) return dp[i];
        if (i >= l - 1) return 0;
        if (i + nums[i] >= l - 1) return 1;
        let ans = l;
        for (let j = 1; j <= nums[i]; j++) {
            ans = Math.min(ans, helper(i + j) + 1)
        }
        dp[i] = ans;
        return dp[i];
    }

    return helper(0)

};

//? Input: nums = [2,3,1,1,4]
//? Output: 2
//? Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
