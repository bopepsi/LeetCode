/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map = {};
    for (const ele of s) {
        map[ele] = (map[ele] || 0) + 1;
    }
    for (const ele of t) {
        map[ele] = map[ele] - 1;
    }

    for (const ele in map) {
        if (map[ele] !== 0) return false;
    }

    return true;
};

//? Input: s = "anagram", t = "nagaram"
//? Output: true

//? Input: s = "rat", t = "car"
//? Output: false

console.log(isAnagram('anagram', 'nagaram'))