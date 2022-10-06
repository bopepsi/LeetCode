//* Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.
//* In other words, return true if one of s1's permutations is the substring of s2.

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    var checkEqual = (a1, a2) => {
        for (let i = 0; i < 26; i++) {
            if (a1[i] !== a2[i]) return false;
        }
        return true;
    }

    if (s1.length > s2.length) return false;

    let s1Arr = Array(26).fill(0);
    let s2Arr = Array(26).fill(0);

    for (let i = 0; i < s1.length; i++) {
        let s1Char = s1[i];
        let s2Char = s2[i];
        s1Arr[s1Char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        s2Arr[s2Char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    if (checkEqual(s1Arr, s2Arr)) return true;

    for (let i = 1; i <= s2.length - s1.length; i++) {
        let s2Prev = s2[i - 1];
        let s2New = s2[i + s1.length - 1];
        s2Arr[s2New.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        s2Arr[s2Prev.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        if (checkEqual(s1Arr, s2Arr)) return true;
    }

    return false;

};

'ab'
'eidaooo'

const s1 = "ab", s2 = "eidbaooo";
console.log(checkInclusion(s1, s2));

//? Input: s1 = "ab", s2 = "eidbaooo"
//? Output: true
//? Explanation: s2 contains one permutation of s1 ("ba").

//? Input: s1 = "ab", s2 = "eidboaoo"
//? Output: false
