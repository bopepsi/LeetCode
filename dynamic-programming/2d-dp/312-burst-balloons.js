/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function (nums) {

    let n = nums.length;
    nums.unshift(1);
    nums.push(1);
    //* dp[i][j] = maxCoin(nums[i] ~ nums[j])
    let dp = Array.from({ length: n + 2 }, () => Array(n + 2).fill(0));

    //* l nums of ballons destoryed
    for (let l = 1; l <= n; l++) {
        for (let i = 1; i <= n - l + 1; i++) {
            //* max j is n --> which is i + l - 1
            let j = i + l - 1;
            for (let k = i; k <= j; k++) {
                dp[i][j] = Math.max(dp[i][j], dp[i][k - 1] + nums[i - 1] * nums[k] * nums[j + 1] + dp[k + 1][j]);
            }
        }
    }

    return dp[1][n];

};

let nums = [3, 1, 5, 8];
console.log(maxCoins(nums));

//? Input: nums = [3,1,5,8]
//? Output: 167
//? Explanation:
//? nums = [3,1,5,8] --> [3,5,8] --> [3,8] --> [8] --> []
//? coins =  3*1*5    +   3*5*8   +  1*3*8  + 1*8*1 = 167

//? Input: nums = [1,5]
//? Output: 10