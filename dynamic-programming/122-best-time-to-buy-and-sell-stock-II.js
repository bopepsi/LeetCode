/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let ans = 0;
    for (i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) ans += (prices[i] - prices[i - 1]);
    }
    return ans;
};

var maxProfitV2 = function (prices) {
    let dp = [0];
    for (let i = 1; i < prices.length; i++) {
        dp[i] = dp[i - 1] + Math.max(0, prices[i] - prices[i - 1]);
    }
    return dp.pop();
};

var maxProfitV3 = function (prices) {
    let balance = -prices[0], profit = 0;
    for (let i = 1; i < prices.length; i++) {
        [balance, profit] = [
            Math.max(balance, profit - prices[i]),
            Math.max(profit, balance + prices[i])
        ]
    }
    return profit;
};