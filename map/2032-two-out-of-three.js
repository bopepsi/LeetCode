/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function (nums1, nums2, nums3) {

    let n1 = Array.from(new Set(nums1));
    let n2 = Array.from(new Set(nums2));
    let n3 = Array.from(new Set(nums3));

    let map = {};

    let arr = [...n1, ...n2, ...n3];
    
    let res = [];
    for (const num of arr) {
        map[num] = map[num] ? map[num] + 1 : 1;
        if (map[num] >= 2) res.push(num);
    }

    return Array.from(new Set(res));

};

console.log(twoOutOfThree([1, 1, 3, 2], [2, 3], [3]))

//? Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
//? Output: [3,2]
//? Explanation: The values that are present in at least two arrays are:
//? - 3, in all three arrays.
//? - 2, in nums1 and nums2.

//? Input: nums1 = [3,1], nums2 = [2,3], nums3 = [1,2]
//? Output: [2,3,1]
//? Explanation: The values that are present in at least two arrays are:
//? - 2, in nums2 and nums3.
//? - 3, in nums1 and nums2.
//? - 1, in nums1 and nums3.

//? Input: nums1 = [1,2,2], nums2 = [4,3,3], nums3 = [5]
//? Output: []
//? Explanation: No value is present in at least two arrays.