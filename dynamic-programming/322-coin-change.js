/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function (coins, amount) {

    coins = coins.sort((a, b) => a - b);

    let dp = Array(amount + 1).fill(Infinity);
    dp[0] = 0;


    for (const coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }

    if (dp[amount] === Infinity) return -1;

    return dp[amount];

};

var coinChangeV2 = function (coins, amount) {

    if (amount === 0) return 0;

    let arr = [];
    let path = [];
    let ans = -1;

    const helper = (index, sum) => {

        const temp = path.reduce((partialSum, a) => partialSum + a, 0);

        if (temp > amount) return;
        if (temp === amount) {
            arr.push([...path]);
            return;
        }

        for (let i = index; i < coins.length; i++) {

            if (sum + coins[index] > amount) continue;
            path.push(coins[i]);
            helper(i, sum + coins[index]);
            path.pop();

        }
    }

    helper(0, 0);

    if (arr.length === 0) return ans;

    let resArr = arr.map(e => e.length);

    ans = Math.min(...resArr);

    return ans;

};

let coins = [1, 2, 5], amount = 11
console.log(coinChange(coins, amount));

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1

// Input: coins = [2], amount = 3
// Output: -1

// Input: coins = [1], amount = 0
// Output: 0