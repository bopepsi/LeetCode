//todo Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
//? A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    arr = s.split('');
    for (let i = t.length - 1; i >= 0; i--) {
        char = arr[arr.length - 1];
        if (t[i] === char) arr.pop();
    }
    return arr.length === 0;
};

var isSubsequenceV2 = function (s, t) {
    arr = s.split('');
    let i = 0, j = 0;
    while (j < t.length) {
        if (s[i] === t[j]) i++;
        j++;
    };
    return i === s.length;
};

//?     Input: s = "abc", t = "ahbgdc"
//?     Output: true

//?     Input: s = "axc", t = "ahbgdc"
//?     Output: false

console.log(isSubsequence('axc', 'ahbgdc'));