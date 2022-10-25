/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {

    let n1Pos = m - 1;
    let n2Pos = n - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        let n1 = n1Pos >= 0 ? nums1[n1Pos] : -Infinity;
        let n2 = n2Pos >= 0 ? nums2[n2Pos] : -Infinity;
        if (n1 >= n2) {
            nums1[i] = n1;
            n1Pos--;
        } else {
            nums1[i] = n2;
            n2Pos--;
        }
    }

};

const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3;

console.log(merge(nums1, m, nums2, n));

//? Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
//? Output: [1,2,2,3,5,6]
//? Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
//? The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

//? Input: nums1 = [1], m = 1, nums2 = [], n = 0
//? Output: [1]
//? Explanation: The arrays we are merging are [1] and [].
//? The result of the merge is [1].

//? Input: nums1 = [0], m = 0, nums2 = [1], n = 1
//? Output: [1]
//? Explanation: The arrays we are merging are [] and [1].
//? The result of the merge is [1].
//? Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
