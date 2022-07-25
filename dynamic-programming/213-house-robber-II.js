/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {

    if (nums.length === 1) return nums[0];

    const helper = arr => {

        let dp = [arr[0] || 0, Math.max(arr[0] || 0, arr[1] || 0)];

        for (let i = 2; i < arr.length; i++) {
            dp.push(Math.max((dp[i - 2] + arr[i]), dp[i - 1]))
        }

        return dp.pop();
    }

    return Math.max(helper(nums.slice(0, -1)), helper(nums.slice(1)));


};

console.log(rob([1, 2, 3, 1]));