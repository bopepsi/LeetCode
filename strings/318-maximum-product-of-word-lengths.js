/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let letters = words.map(word => [...new Set(word)]);
    let ans = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!letters[i].some(e => letters[j].includes(e))) {
                ans = Math.max(words[i].length * words[j].length, ans);
            }
        }
    }
    return ans;
};

let words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
//? Input: words = ["abcw","baz","foo","bar","xtfn","abcdef"]
//? Output: 16
//? Explanation: The two words can be "abcw", "xtfn".

//? Input: words = ["a","ab","abc","d","cd","bcd","abcd"]
//? Output: 4
//? Explanation: The two words can be "ab", "cd".

console.log(maxProduct(["eae", "ea", "aaf", "bda", "fcf", "dc", "ac", "ce", "cefde", "dabae"]));