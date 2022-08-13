/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let pre = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(pre) !== 0) {
            pre = pre.substring(0, pre.length - 1);
        }
    }
    return pre;
};

var longestCommonPrefixV2 = function (strs) {
    if (!strs.length) return '';
    let ans = '';
    strs.sort((a, b) => { if (a.length > b.length) return 1; if (a.length < b.length) return -1 });
    console.log(strs);
    let maxLength = strs[0].length;

    for (var i = 0; i < maxLength; i++) {
        let char = strs[0][i];
        if (strs.every(str => str[i] === char)) ans += char;
        else break;
    };
    return ans;
};

var longestCommonPrefixV3 = function (strs) {
    if (strs === undefined || strs.length === 0) { return ''; }

    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        console.log(prev, next, i)
        return prev.slice(0, i);
    });
};
// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.