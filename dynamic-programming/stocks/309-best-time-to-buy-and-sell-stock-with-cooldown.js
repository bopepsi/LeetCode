/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let hold = -prices[0], sold = 0, empty = 0;
    for (let i = 1; i < prices.length; i++) {
        [hold, sold, empty] = [
            Math.max(hold, empty - prices[i]),
            hold + prices[i],
            Math.max(empty, sold)
        ]
    }
    return Math.max(sold, empty);
};

//? Input: prices = [1,2,3,0,2]
//? Output: 3
//? Explanation: transactions = [buy, sell, cooldown, buy, sell]