/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {

    let n = nums.length;
    //* 以nums[i]结尾最长子序列的数量
    let c = Array(n).fill(1);
    //* 以nums[i]结尾最长子序列的长度
    let l = Array(n).fill(1);

    for (let i = 1; i < n; i++) {       //* 以 i 结尾， 从index0 到 i-1 进行遍历
        for (let j = 0; j < i; j++) {       //* 若nums[j]<nums[i]， 看下最长子序列长度并更新 c 和 l 数组
            if (nums[i] > nums[j]) {
                if (l[j] + 1 > l[i]) {
                    l[i] = l[j] + 1;
                    c[i] = c[j];
                } else if (l[j] + 1 === l[i]) {
                    c[i] += c[j];
                }
            }
        }
    }
    let maxLength = Math.max(...l);
    let ans = 0;
    for (let k = 0; k < n; k++) {
        if (l[k] === maxLength) ans += c[k];
    }
    return ans;
    
};

let nums = [1, 3, 5, 4, 7];
console.log(findNumberOfLIS(nums));

//? Input: nums = [1,3,5,4,7]
//? Output: 2
//? Explanation: The two longest increasing subsequences are [1, 3, 4, 7] and [1, 3, 5, 7].

//? Input: nums = [2,2,2,2,2]
//? Output: 5
//? Explanation: The length of the longest increasing subsequence is 1, and there are 5 increasing subsequences of length 1, so output 5.