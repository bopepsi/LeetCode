//todo Given an array of strings strs, group the anagrams together.You can return the answer in any order.
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let ans = {};
    for (let str of strs) {
        let word = str;
        let sorted = word.split('').sort().join('');
        if(!ans[sorted]) ans[sorted] = [];
        ans[sorted].push(str);
    }
    return Object.values(ans);
};

//?     Input: strs = ["eat", "tea", "tan", "ate", "nat", "bat"]
//?     Output: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]

//?     Input: strs = [""]
//?     Output: [[""]]

//?     Input: strs = ["a"]
//?     Output: [["a"]]

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));