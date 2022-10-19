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

var minCostClimbingStairsV2 = function (cost) {

    let l = cost.length;
    let dp = Array(l + 1);
    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i < l + 1; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }

    return dp[l];

};

var minCostClimbingStairsV3 = function (cost) {

    let l = cost.length;
    let dp = [cost[0], cost[1]];
    for (let i = 2; i < l; i++) {
        dp[i] = cost[i] + Math.min(dp[i - 2], dp[i - 1]);
    }
    return Math.min(dp[l - 2], dp[l - 1])

};


console.log(minCostClimbingStairs([10, 15, 20]))