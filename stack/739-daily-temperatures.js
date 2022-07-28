/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
    let stack = [];
    let ans = Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {

        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            let n = stack.pop();
            ans[n] = i - n;
        }
        stack.push(i);
    }
    return ans;
};
//* 73 74
//? Input: temperatures = [73,74,75,71,69,72,76,73]
//? Output: [1,1,4,2,1,1,0,0]

//? Input: temperatures = [30,40,50,60]
//? Output: [1,1,1,0]

//? Input: temperatures = [30,60,90]
//? Output: [1,1,0]

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));