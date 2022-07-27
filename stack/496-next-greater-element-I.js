/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let stack = [];
    let ans = {};
    for (let i = nums2.length - 1; i >= 0; i--) {
        while (stack.length > 0 && nums2[i] >= stack[stack.length - 1]) {
            stack.pop();
        }
        if (stack.length === 0) {
            ans[nums2[i]] = -1;
        } else {
            ans[nums2[i]] = stack[stack.length - 1];
        }

        stack.push(nums2[i])
    }
    return nums1.map(e => ans[e]);
};

//? Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
//? Output: [-1,3,-1]
//? Explanation: The next greater element for each value of nums1 is as follows:
//? - 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
//? - 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
//? - 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.

// console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]));

var nextGreaterElementV2 = function (nums1, nums2) {
    let s = [];
    let ans = {};
    for (let i = 0; i < nums2.length; i++) {
        while (nums2.length > 0 && nums2[i] > s[s.length - 1]) {
            let num = s.pop();
            ans[num] = nums2[i];
        }
        s.push(nums2[i]);
    }
    return nums1.map(e => ans[e] || -1);
};
console.log(nextGreaterElementV2([4, 1, 2], [1, 3, 4, 2]));