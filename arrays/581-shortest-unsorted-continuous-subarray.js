//* Given an integer array nums, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order.
//* Return the shortest such subarray and output its length.

/**
 * @param {number[]} nums
 * @return {number}
 */

//* https://www.jiakaobo.com/leetcode/581.%20Shortest%20Unsorted%20Continuous%20Subarray.html

var findUnsortedSubarray = function (nums) {

    let end = -1;
    let start = nums.length;
    let max = nums[0];
    let min = nums[nums.length - 1];

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        max = Math.max(max, curr);
        if (max > curr) {
            end = i;
        }
    }

    for (let j = nums.length - 1; j >= 0; j--) {
        let curr = nums[j];
        min = Math.min(min, curr);
        if (min < curr) {
            start = j;
        }
    }

    if (end == -1) return 0;

    return end - start + 1;

};

var findUnsortedSubarrayV2 = function (nums) {

    let origin = [...nums]
    let sorted = origin.sort((a, b) => a - b);

    let s = 0, e = 0;

    for (let i = 0; i < nums.length; i++) {
        if (sorted[i] !== nums[i]) {
            s = i;
            break;
        }
    }
    for (let j = nums.length; j >= 0; j--) {
        if (sorted[j] !== nums[j]) {
            e = j;
            break;
        }
    }

    if (s == e) return 0

    return e - s + 1;

};

const nums = [2, 6, 4, 8, 10, 9, 15];
console.log(findUnsortedSubarray(nums));

//? Input: nums = [2,6,4,8,10,9,15]
//? Output: 5
//? Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.

//? Input: nums = [1,2,3,4]
//? Output: 0

//? Input: nums = [1]
//? Output: 0
