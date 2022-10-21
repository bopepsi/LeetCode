//* Given a string s, return the number of palindromic substrings in it.
//* A string is a palindrome when it reads the same backward as forward.
//* A substring is a contiguous sequence of characters within the string.

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {

    let len = s.length;
    let dp = Array.from({ length: len }, () => Array(len).fill(false));
    let count = 0;

    for (let l = 1; l <= len; l++) {        //* length of substr, check from 1 to len
        for (let i = 0; i < len; i++) {
            let j = i + l - 1;
            if (s[i] === s[j]) {
                if (j - i <= 2 || dp[i + 1][j - 1]) {
                    dp[i][j] = true;
                    count++;
                }
            }
        }
    }

    return count;

};

const s = "aaa";
console.log(countSubstrings(s));

//? Input: s = "abc"
//? Output: 3
//? Explanation: Three palindromic strings: "a", "b", "c".

//? Input: s = "aaa"
//? Output: 6
//? Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
