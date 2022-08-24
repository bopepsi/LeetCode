/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {

    let ans = '';
    for (let i = num.length - 1; i >= 0; i--) {
        console.log(num[i])
        if (num[i] % 2 !== 0) return ans = num.substring(0, i + 1);
    }

    return ans;

};

console.log(largestOddNumber('4207'))

//? Input: num = "52"
//? Output: "5"
//? Explanation: The only non-empty substrings are "5", "2", and "52". "5" is the only odd number.

//? Input: num = "4206"
//? Output: ""
//? Explanation: There are no odd numbers in "4206".

//? Input: num = "35427"
//? Output: "35427"
//? Explanation: "35427" is already an odd number.