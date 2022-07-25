/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
    let dp = [cost[0], cost[1]];
    for (let i = 2; i <= cost.length; i++) {
        dp[i] = (cost[i] || 0) + Math.min(dp[i - 2], dp[i - 1]);
    }
    return dp[cost.length];
};

console.log(minCostClimbingStairs([10, 15, 20]))