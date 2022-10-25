/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {

    let currEnd = 0;
    let currFarthest = 0;
    let jumps = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        currFarthest = Math.max(currFarthest, i + nums[i]);
        if (currEnd === i) {
            currEnd = currFarthest;
            jumps++;
        }
    }

    return jumps;

};

//? Input: nums = [2,3,1,1,4]
//? Output: 2
//? Explanation: The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index.
