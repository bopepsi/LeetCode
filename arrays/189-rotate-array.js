//todo Given an array, rotate the array to the right by k steps, where k is non-negative.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length === 1) return nums;
    //* Swap nums in an arr, given arr, start index and end index
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
        return arr;
    }
    k = k % nums.length;
    //* Ex.                nums ===> [1,2,3,4,5,6,7], k = 3.
    reverse(nums, 0, nums.length - k - 1);
    //* After 1st reverse: nums===> [4,3,2,1,5,6,7]
    reverse(nums, nums.length - k, nums.length - 1);
    //* After 2nd reverse: nums===> [4,3,2,1,7,6,5]
    reverse(nums, 0, nums.length - 1);
    //* After 3rd reverse: nums===> [5,6,7,1,2,3,4]
    return nums;
};

//?     Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
//?     Output: [5, 6, 7, 1, 2, 3, 4]
//?     Explanation:
//?     rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
//?     rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
//?     rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]

//?     Input: nums = [-1, -100, 3, 99], k = 2
//?     Output: [3, 99, -1, -100]
//?     Explanation: 
//?     rotate 1 steps to the right: [99, -1, -100, 3]
//?     rotate 2 steps to the right: [3, 99, -1, -100]