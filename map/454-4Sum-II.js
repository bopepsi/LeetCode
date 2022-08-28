/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {

    //* 将 nums1， nums2 中的各个数字相加的和放在 leftmap 里
    //* 将 nums3， nums4 中的各个数字相加的和放在 rightmap 里
    const lSum = {};
    const rSum = {};
    for (let n1 of nums1) {
        for (let n2 of nums2) {
            let sum = n1 + n2;
            if (lSum[sum]) lSum[sum]++;
            else lSum[sum] = 1;
        }
    }
    for (let n3 of nums3) {
        for (let n4 of nums4) {
            let sum = n3 + n4;
            if (rSum[sum]) rSum[sum]++;
            else rSum[sum] = 1;
        }
    }

    // console.log(lSum, rSum)  {0: 2, 1: 1, -1: 1}, {1: 1, 2: 1, 4: 1, -1: 1}
    //* 若 leftmap, rightmap 中和相加为0， 将其可能性相乘， 驾到答案里
    let ans = 0;
    for (let k in lSum) {
        if (rSum[-Number(k)]) {
            ans += lSum[k] * rSum[-Number(k)]
        }
    }
    return ans;

};

const nums1 = [1, 2], nums2 = [-2, -1], nums3 = [-1, 2], nums4 = [0, 2];
console.log(fourSumCount(nums1, nums2, nums3, nums4));

// Input: nums1 = [1,2], nums2 = [-2,-1], nums3 = [-1,2], nums4 = [0,2]
// Output: 2
// Explanation:
// The two tuples are:
// 1. (0, 0, 0, 1) -> nums1[0] + nums2[0] + nums3[0] + nums4[1] = 1 + (-2) + (-1) + 2 = 0
// 2. (1, 1, 0, 0) -> nums1[1] + nums2[1] + nums3[0] + nums4[0] = 2 + (-1) + (-1) + 0 = 0

// Input: nums1 = [0], nums2 = [0], nums3 = [0], nums4 = [0]
// Output: 1