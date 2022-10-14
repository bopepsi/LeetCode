//* Given an integer array nums, find three numbers whose product is maximum and return the maximum product.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    let l = nums.length;
    let inc = nums.sort((a, b) => a - b);
    return Math.max(inc[0] * inc[1] * inc[2], inc[0] * inc[1] * inc[l - 1], inc[0] * inc[l - 2] * inc[l - 1], inc[l - 3] * inc[l - 2] * inc[l - 1])
};

//* O(n) solution
//todo https://www.jiakaobo.com/leetcode/628.%20Maximum%20Product%20of%20Three%20Numbers.html

console.log(maximumProduct([1, 2, 4]))

// Input: nums = [1, 2, 3]
// Output: 6

// Input: nums = [1, 2, 3, 4]
// Output: 24

// Input: nums = [-1, -2, -3]
// Output: -6
