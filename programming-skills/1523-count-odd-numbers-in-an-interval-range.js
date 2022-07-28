/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    let count = 0;
    for (let i = low; i <= high; i++) {
        if (i % 2 !== 0) count++;
    }
    return count;
};

//? Input: low = 3, high = 7
//? Output: 3
//? Explanation: The odd numbers between 3 and 7 are [3,5,7].

//? Input: low = 8, high = 10
//? Output: 1
//? Explanation: The odd numbers between 8 and 10 are [9].