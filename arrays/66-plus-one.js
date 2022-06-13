//todo You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer.The digits are ordered from most significant to least significant in left - to - right order.The large integer does not contain any leading 0's.

//? Increment the large integer by one and return the resulting array of digits.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let endIndex = digits.length - 1;

    const plus1 = (index) => {
        if (index === -1) {                     // Already run out of digits, means prev digit was 9,
            digits.unshift(1);                  // So we add 1 at the beginning of the arr
            return digits;
        }

        if (digits[index] === 9) {              // If curr num is 9, we need to plus 1 to the next digit
            digits[index] = 0;                  // set curr digit to 10. (9+1=0)
            return plus1(index - 1);            // call plus1 again, with the next index
        } else {
            digits[index]++;                    // We just need to plus 1 to curr digit
            return digits;
        }
    }

    return plus1(endIndex);                     // Call plus1 with the last index in the digits arr
};

//?     Input: digits = [1, 2, 3]
//?     Output: [1, 2, 4]
//?     Explanation: The array represents the integer 123.
//?     Incrementing by one gives 123 + 1 = 124.
//?     Thus, the result should be[1, 2, 4].

//?     Input: digits = [4, 3, 2, 1]
//?     Output: [4, 3, 2, 2]
//?     Explanation: The array represents the integer 4321.
//?     Incrementing by one gives 4321 + 1 = 4322.
//?     Thus, the result should be[4, 3, 2, 2].

//?     Input: digits = [9]
//?     Output: [1, 0]
//?     Explanation: The array represents the integer 9.
//?     Incrementing by one gives 9 + 1 = 10.
//?     Thus, the result should be[1, 0].

console.log(plusOne([4, 3, 2, 1]))