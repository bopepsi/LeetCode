/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {

    let arr = Array(n);
    for (let i = 0; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            arr[i - 1] = 'FizzBuzz';
        } else if (i % 3 === 0) {
            arr[i - 1] = 'Fizz';
        } else if (i % 5 === 0) {
            arr[i - 1] = 'Buzz';
        } else {
            arr[i - 1] = String(i);
        };
    };
    return arr;

};

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
//? Input: n = 15
//? Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]