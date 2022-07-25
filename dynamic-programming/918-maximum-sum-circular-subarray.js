/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function (nums) {

    const findMin = arr => {
        let dp = [arr[0]];
        let min = arr[0];

        for (let i = 1; i < arr.length; i++) {
            dp[i] = Math.min((dp[i - 1] + arr[i]), arr[i]);
            min = Math.min(dp[i], min);
        }

        return min;
    }

    const findMax = arr => {
        let dp = [arr[0]];
        let max = arr[0];

        for (let i = 1; i < arr.length; i++) {
            dp[i] = Math.max((dp[i - 1] + arr[i]), arr[i]);
            max = Math.max(dp[i], max);
        }

        return max;
    }

    if (Math.max(...nums) < 0) { return findMax(nums) };

    let sum = 0;
    nums.forEach(ele => {
        sum += ele;
    });
    

    return Math.max((sum - findMin(nums)), findMax(nums))

};

//? Input: nums = [5,-3,5]
//? Output: 10
//? Explanation: Subarray [5,5] has maximum sum 5 + 5 = 10.

console.log(maxSubarraySumCircular([1, -2, 3, -2]));
console.log(maxSubarraySumCircular([5, -3, 5]));