//* Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most one element.
//* We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function (nums) {

    let nums1 = [...nums];
    let nums2 = [...nums];
    let endToBegin = 0;
    let beginToEnd = 0;
    if (nums.length === 1) return true;

    //* go from end to begin
    //* [4, 2, 8] ===> [4, 8, 8]
    for (let i = nums1.length - 2; i >= 0; i--) {
        if (nums1[i] > nums1[i + 1]) {
            nums1[i] = nums1[i + 1];
            endToBegin++;
        }
    }
    //* go from begin to end
    //* [3, 5, 1, 7] ===> [3, 5, 5, 7]
    for (let i = 0; i < nums2.length - 1; i++) {
        if (nums2[i + 1] < nums2[i]) {
            nums2[i + 1] = nums2[i];
            beginToEnd++;
        }
    }

    return endToBegin <= 1 || beginToEnd <= 1;

};

//? Input: nums = [4,2,3]
//? Output: true
//? Explanation: You could modify the first 4 to 1 to get a non-decreasing array.

//? Input: nums = [4,2,1]
//? Output: false
//? Explanation: You cannot get a non-decreasing array by modifying at most one element.