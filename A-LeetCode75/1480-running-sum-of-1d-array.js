//todo Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
//? Return the running sum of nums.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let sum;
    let ans = [];
    for (let i = 0; i < nums.length; i++) {
        sum = (sum || 0) + nums[i];
        ans.push(sum);
    }
    return ans;
};

//?     Input: nums = [1,2,3,4]
//?     Output: [1,3,6,10]
//?     Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

//?     Input: nums = [1,1,1,1,1]
//?     Output: [1,2,3,4,5]
//?     Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

//?     Input: nums = [3,1,2,10,1]
//?     Output: [3,4,6,16,17]

console.log(runningSum([1,2,3,4]));