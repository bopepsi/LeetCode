//todo Given an array nums of n integers, return an array of all the unique quadruplets[nums[a], nums[b], nums[c], nums[d]] such that:
//* 0 <= a, b, c, d < n
//* a, b, c, and d are distinct.
//* nums[a] + nums[b] + nums[c] + nums[d] == target
//todo You may return the answer in any order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    let numsArr = nums.sort((a, b) => a - b);
    let ans = [];
    //* i and j to be the start pointers, then left and right to be the floating pointers.
    for (let i = 0; i < numsArr.length - 3; i++) {
        for (let j = i + 1; j < numsArr.length - 2; j++) {
            let left = j + 1;
            let right = numsArr.length - 1;
            while (left < right) {
                if ((numsArr[i] + numsArr[j] + numsArr[left] + numsArr[right]) === target) {
                    ans.push([numsArr[i], numsArr[j], numsArr[left], numsArr[right]]);
                    //* Need to skip duplicate numbers
                    while (nums[left] === nums[left + 1]) left++;
                    while (nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if ((numsArr[i] + numsArr[j] + numsArr[left] + numsArr[right]) > target) {
                    right--;
                } else {
                    left++;
                }
            }
            //* Need to skip duplicate numbers
            while (numsArr[j] === numsArr[j + 1]) j++;
        }
        //* Need to skip duplicate numbers
        while (numsArr[i] === numsArr[i + 1]) i++;
    }
    return ans;
};

//?     Input: nums = [1, 0, -1, 0, -2, 2], target = 0
//?     Output: [[-2, -1, 1, 2], [-2, 0, 0, 2], [-1, 0, 0, 1]]

//?     Input: nums = [2, 2, 2, 2, 2], target = 8
//?     Output: [[2, 2, 2, 2]]

console.log(fourSum([1, 0, -1, 0, -2, 2], 0))
