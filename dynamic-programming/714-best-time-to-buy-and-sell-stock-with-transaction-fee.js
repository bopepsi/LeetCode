/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function (prices, fee) {
    let balance = -prices[0];
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        [profit, balance] = [
            Math.max(profit, balance + prices[i] - fee),
            Math.max(balance, profit - prices[i])
        ]
    }
    return profit;
};

//? Input: prices = [1,3,2,8,4,9], fee = 2
//? Output: 8
//? Explanation: The maximum profit can be achieved by:
//? - Buying at prices[0] = 1
//? - Selling at prices[3] = 8
//? - Buying at prices[4] = 4
//? - Selling at prices[5] = 9
//? The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.