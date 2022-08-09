/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    let arr = Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        let charCode = s[i].charCodeAt(0) - 'a'.charCodeAt(0);
        arr[charCode]++;
    };
    let ans = -1;
    for (let j = 0; j < s.length; j++) {
        const char = s[j];
        if (arr[char.charCodeAt(0) - 'a'.charCodeAt(0)] === 1) {
            ans = j;
            break;
        }
    }
    return ans;
};

console.log(firstUniqChar('aabb'));

//? Input: s = "leetcode"
//? Output: 0

//? Input: s = "loveleetcode"
//? Output: 2

//? Input: s = "aabb"
//? Output: -1