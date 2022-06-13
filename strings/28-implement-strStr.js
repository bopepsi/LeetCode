//todo Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.
// Clarification:
// What should we return when needle is an empty string ? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string.This is consistent to C's strstr() and Java's indexOf().

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle.length === 0) return 0;
    for (let i = 0; i < haystack.length; i++) {
        if (needle[0] === haystack[i]) {                    // If first char matches, then we check if other char matches as well
            let temp = i;                                   // Create a temp var, so we don't change i
            for (let j = 0; j < needle.length; j++) {       // Loop through every char in needle, if one of the char not equal, break immediately
                if (needle[j] === haystack[temp]) {
                    temp = temp + 1;
                } else break;
                if (temp === i + needle.length) return i;   // If temp === startIndex + needle.length
                                                            // All chars matched, then we return i, which is the index we started with
            }
        }
    }
    return -1;
};

//?     Input: haystack = "hello", needle = "ll"
//?     Output: 2

//?     Input: haystack = "aaaaa", needle = "bba"
//?     Output: -1

console.log(strStr('aaaaaa', 'bba'));