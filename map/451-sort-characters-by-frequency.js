/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

    let map = {};
    for (let char of s) {
        if (map[char]) map[char]++;
        else map[char] = 1;
    };
    let arr = Object.entries(map);
    arr = arr.sort((a, b) => b[1] - a[1]);
    let ans = '';
    for (let pair of arr) {
        let count = 0;
        while (count < pair[1]) {
            ans = ans + pair[0];
            count++;
        };
    };
    return ans;

};

const str = "tree";
console.log(frequencySort(str));

//? Input: s = "tree"
//? Output: "eert"
//? Explanation: 'e' appears twice while 'r' and 't' both appear once.
//? So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.

//? Input: s = "cccaaa"
//? Output: "aaaccc"
//? Explanation: Both 'c' and 'a' appear three times, so both "cccaaa" and "aaaccc" are valid answers.
//? Note that "cacaca" is incorrect, as the same characters must be together.