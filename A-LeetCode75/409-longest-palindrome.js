//todo Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.
// Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = {};
    let ans = 0;
    let odd = 0;
    for (const char of s) {
        map[char] = map[char] ? map[char] + 1 : 1;
    }
    for (const char in map) {

        if (map[char] % 2 === 1) {
            ans += (map[char] - 1);
            odd = 1;
            continue;
        }
        if (map[char] % 2 === 0) {
            ans += map[char]
            continue;
        }
    }
    return ans + odd;
};

//?     Input: s = "abccccdd"
//?     Output: 7
//?     Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

//?     Input: s = "a"
//?     Output: 1
//?     Explanation: The longest palindrome that can be built is "a", whose length is 1.

console.log(longestPalindrome('ccc'));