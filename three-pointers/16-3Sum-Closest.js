//todo Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.
//todo Return the sum of the three integers.
//todo You may assume that each input would have exactly one solution.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let sum, ans = Infinity;

    let arr = nums.sort((a, b) => a - b);
    console.log(arr);
    for (let i = 0; i < nums.length - 1; i++) {
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            sum = arr[i] + arr[left] + arr[right];
            if (Math.abs(sum - target) < Math.abs(ans - target)) ans = sum;
            if (sum > target) right--;
            else left++;
        }
    }
    return ans;
};


//?     Input: nums = [-1, 2, 1, -4], target = 1
//?     Output: 2
//?     Explanation: The sum that is closest to the target is 2.(-1 + 2 + 1 = 2).

//?     Input: nums = [0, 0, 0], target = 1
//?     Output: 0

console.log(threeSumClosest([-1, 2, 1, -4], 1))

const r = (nums, target) => {
    let sum = Infinity;
    let ans = Infinity;
    let arr = nums.sort((a, b) => a - b);

    for (i = 0; i < nums.length - 1; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            sum = arr[i] + arr[left] + arr[right];
            if (Math.abs(sum - target) < Math.abs(ans - target)) ans = sum;
            if (sum > target) right--;
            else left++;
        }
    }
    return ans;
}