/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    if (nums.some(e => e === 0)) return 0;
    if (nums.filter(e => e < 0).length % 2 !== 0) return -1;
    return 1;
};

//? Input: nums = [-1,-2,-3,-4,3,2,1]
//? Output: 1
//? Explanation: The product of all values in the array is 144, and signFunc(144) = 1

//? Input: nums = [1,5,0,2,-3]
//? Output: 0
//? Explanation: The product of all values in the array is 0, and signFunc(0) = 0

//? Input: nums = [-1,1,-1,1,-1]
//? Output: -1
//? Explanation: The product of all values in the array is -1, and signFunc(-1) = -1