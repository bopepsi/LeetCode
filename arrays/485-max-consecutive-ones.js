//* Given a binary array nums, return the maximum number of consecutive 1's in the array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {

    let ans = 0;
    let count = 0;
    for (const ele of nums) {
        if (ele === 1) {
            count++;
        } else {
            count = 0;
        }
        ans = Math.max(ans, count);
    }
    return ans;

};

console.log(findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]))

//? Input: nums = [1,1,0,1,1,1]
//? Output: 3
//? Explanation: The first two digits or the last three digits are consecutive 1s. The maximum number of consecutive 1s is 3.

//? Input: nums = [1,0,1,1,0,1]
//? Output: 2