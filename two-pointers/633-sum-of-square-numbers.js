//* Given a non-negative integer c, decide whether there're two integers a and b such that a2 + b2 = c.

/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {

    let max = Math.floor(Math.sqrt(c));
    let min = 0;
    console.log(max)
    while (min <= max) {
        let powSum = Math.pow(min, 2) + Math.pow(max, 2);
        if (powSum === c) return true;
        if (powSum > c) max--;
        else min++;
    }

    return false;

};

console.log(judgeSquareSum(19));

//? Input: c = 5
//? Output: true
//? Explanation: 1 * 1 + 2 * 2 = 5

//? Input: c = 3
//? Output: false
