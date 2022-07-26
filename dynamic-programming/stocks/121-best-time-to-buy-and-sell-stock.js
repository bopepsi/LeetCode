/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minL = prices[0];
    let max = 0;
    for (let i = 1; i < prices.length; i++) {
        max = Math.max(max, prices[i] - minL);
        minL = Math.min(prices[i], minL);
    }
    return max;
};

//? Input: prices = [7,1,5,3,6,4]
//? Output: 5
//? Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//? Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.