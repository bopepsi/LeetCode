/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {

    let stack = [];

    for (const ele of tokens) {

        if (ele === '+') {
            let b = stack.pop(), a = stack.pop();
            stack.push(Number(a) + Number(b));
        }
        else if (ele === '-') {
            let b = stack.pop(), a = stack.pop();
            stack.push(Number(a) - Number(b));
        }
        else if (ele === '*') {
            let b = stack.pop(), a = stack.pop();
            stack.push(a * b);
        }
        else if (ele === '/') {
            let b = stack.pop(), a = stack.pop();
            let num = a / b > 0 ? Math.floor(a / b) : Math.ceil(a / b);
            stack.push(num);
        }
        else {
            stack.push(Number(ele));
        }
    }

    return stack[0];

};

//? Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
//? Output: 22
//? Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
//? = ((10 * (6 / (12 * -11))) + 17) + 5
//? = ((10 * (6 / -132)) + 17) + 5
//? = ((10 * 0) + 17) + 5
//? = (0 + 17) + 5
//? = 17 + 5
//? = 22

console.log(evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]))