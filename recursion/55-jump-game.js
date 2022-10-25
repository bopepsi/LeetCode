//* You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.
//* Return true if you can reach the last index, or false otherwise.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {

    let dp = [];

    const helper = i => {
        if (dp[i] !== undefined) return dp[i]
        if (i >= nums.length - 1) return true;
        if (i + nums[i] >= nums.length - 1) return true;
        for (let j = 1; j <= nums[i]; j++) {
            if (helper(i + j)) {
                dp[i + j] = true;
                return true;
            };
        }
        dp[i] = false;
        return false
    }

    return helper(0);

};

var canJumpV2 = function (nums) {

    let end = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] + i >= end) {
            end = i;
        }
    }
    return i === 0;

}

//? Input: nums = [2,3,1,1,4]
//? Output: true
//? Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

//? Input: nums = [3,2,1,0,4]
//? Output: false
//? Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
