// Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function (nums) {

    nums.sort((a, b) => a - b);
    let ans = 0;

    for (let i = nums.length - 1; i >= 2; i--) {
        let n = nums[i];
        let left = 0;
        let right = i - 1;
        while (left < right) {
            if ((nums[left] + nums[right]) > n) {
                console.log(left, right)
                ans = ans + (right - left);
                right--;
            } else {
                left++;
            }
        }
    }

    return ans;
    
};

const nums = [4, 2, 3, 4];
console.log(triangleNumber(nums));

//? Input: nums = [2,2,3,4]
//? Output: 3
//? Explanation: Valid combinations are: 
//? 2,3,4 (using the first 2)
//? 2,3,4 (using the second 2)
//? 2,2,3

//? Input: nums = [4,2,3,4]
//? Output: 4
