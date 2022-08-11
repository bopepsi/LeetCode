/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
var numMatchingSubseq = function (s, words) {

    let pos = Array.from({ length: 26 }, () => []);
    for (let i = 0; i < s.length; i++) {
        pos[s[i].charCodeAt(0) - 'a'.charCodeAt(0)].push(i);
    }

    const lowerBound = (index, arr) => {
        let l = 0, r = arr.length;
        while (l < r) {
            let m = Math.floor((l + r) / 2);
            if (arr[m] >= index) r = m;
            else l = m + 1;
        }
        return l;
    };

    const check = word => {
        let s = 0;
        for (const char of word) {
            let targetArr = pos[char.charCodeAt(0) - 'a'.charCodeAt(0)];
            if (targetArr.length === 0) return false;
            let i = lowerBound(s, targetArr);
            if (i == targetArr.length) {
                return false;
            };
            s = targetArr[i] + 1;

        }
        return true;
    }

    let ans = 0;
    for (const str of words) {
        if (str.length > s.length) continue;
        if (check(str)) ans++;
    }

    return ans;

};

let s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"]
// let s = "abcde", words = ["a", "bb", "acd", "ace"];
console.log(numMatchingSubseq(s, words))

//? Input: s = "abcde", words = ["a","bb","acd","ace"]
//? Output: 3
//? Explanation: There are three strings in words that are a subsequence of s: "a", "acd", "ace".