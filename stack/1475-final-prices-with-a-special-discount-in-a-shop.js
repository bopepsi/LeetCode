/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
    let stack = [];
    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] <= prices[(stack[stack.length - 1])]) {
            prices[stack.pop()] -= prices[i];
        }
        stack.push(i);
        console.log(stack)
    }
    return prices;
};

//? Input: prices = [8,4,6,2,3]
//? Output: [4,2,4,2,3]
//? Explanation: 
//? For item 0 with price[0]=8 you will receive a discount equivalent to prices[1]=4, therefore, the final price you will pay is 8 - 4 = 4. 
//? For item 1 with price[1]=4 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 4 - 2 = 2. 
//? For item 2 with price[2]=6 you will receive a discount equivalent to prices[3]=2, therefore, the final price you will pay is 6 - 2 = 4. 
//? For items 3 and 4 you will not receive any discount at all.

// console.log(finalPrices([8, 4, 6, 2, 3]))
console.log(finalPrices([10,1,1,6]))