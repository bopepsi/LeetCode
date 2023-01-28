/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {

    let pre = 0;
    let cur = 1;
    let res = 0;
    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            cur++;
        } else {
            res += Math.min(pre, cur);
            pre = cur;
            cur = 1;
        }
    }
    return res += Math.min(pre, cur);

};

//? Input: s = "00110011"
//? Output: 6
//? Explanation: There are 6 substrings that have equal number of consecutive 1's and 0's: "0011", "01", "1100", "10", "0011", and "01".
//? Notice that some of these substrings repeat and are counted the number of times they occur.
//? Also, "00110011" is not a valid substring because all the 0's (and 1's) are not grouped together.

//? Input: s = "10101"
//? Output: 4
//? Explanation: There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1's and 0's.