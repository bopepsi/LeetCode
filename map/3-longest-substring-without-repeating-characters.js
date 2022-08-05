/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {

    let start = 0;
    let ans = 1;
    let seen = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) start = Math.max(start, seen[char]);
        ans = Math.max(ans, i - start + 1);
        seen[char] = i + 1;
    }

    return ans;

};

//? Input: s = "abcabcbb"
//? Output: 3
//? Explanation: The answer is "abc", with the length of 3.

//? Input: s = "bbbbb"
//? Output: 1
//? Explanation: The answer is "b", with the length of 1.

//? Input: s = "pwwkew"
//? Output: 3
//? Explanation: The answer is "wke", with the length of 3.
//? Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.