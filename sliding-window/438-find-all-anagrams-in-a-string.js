/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    const check = (cur, tar) => {
        for (let k = 0; k < 26; k++) {
            if (cur[k] !== tar[k]) return false;
        };
        return true;
    }

    if (p.length > s.length) return [];

    let target = Array(26).fill(0);
    let curr = Array(26).fill(0);
    let ans = [];

    for (let m = 0; m < p.length; m++) {
        let pos = p[m].charCodeAt(0) - 'a'.charCodeAt(0);
        target[pos]++;
        let currPos = s[m].charCodeAt(0) - 'a'.charCodeAt(0);
        curr[currPos]++;
    }

    if (check(curr, target)) ans.push(0);

    for (let i = p.length; i < s.length; i++) {

        let pos = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        let prevPos = s[i - p.length].charCodeAt(0) - 'a'.charCodeAt(0);
        curr[prevPos]--;
        curr[pos]++;
        if (check(curr, target)) ans.push(i - p.length + 1);

    }

    return ans;

};

let s = "abab", p = "ab";
console.log(findAnagrams(s, p))

//? Input: s = "cbaebabacd", p = "abc"
//? Output: [0,6]
//? Explanation:
//? The substring with start index = 0 is "cba", which is an anagram of "abc".
//? The substring with start index = 6 is "bac", which is an anagram of "abc".

//? Input: s = "abab", p = "ab"
//? Output: [0,1,2]
//? Explanation:
//? The substring with start index = 0 is "ab", which is an anagram of "ab".
//? The substring with start index = 1 is "ba", which is an anagram of "ab".
//? The substring with start index = 2 is "ab", which is an anagram of "ab".