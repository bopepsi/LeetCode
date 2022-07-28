/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
    let stack = [];
    for (let i = 0; i < pushed.length; i++) {
        
        stack.push(pushed[i]);

        while (stack.length && popped[0] === stack[stack.length - 1]) {
            stack.pop();
            popped.shift();
        }

    }

    return stack.length === 0;
};

//? Input: pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
//? Output: true
//? Explanation: We might do the following sequence:
//? push(1), push(2), push(3), push(4),
//? pop() -> 4,
//? push(5),
//? pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1

//? Input: pushed = [1,2,3,4,5], popped = [4,3,5,1,2]
//? Output: false
//? Explanation: 1 cannot be popped before 2.

let pushed = [1, 2, 3, 4, 5], popped = [4, 3, 5, 1, 2]
console.log(validateStackSequences(pushed, popped));