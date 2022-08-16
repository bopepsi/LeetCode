/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let set = new Set(nums);
    return Array.from(set).length !== nums.length;
};

//? Input: nums = [1,2,3,1]
//? Output: true

//? Input: nums = [1,2,3,4]
//? Output: false

//? Input: nums = [1,1,1,3,3,4,3,2,4,2]
//? Output: true