/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {

    let b = 0, e = 0; //* begin, end
    let count = Array(26).fill(0);
    let maxCount = 0;
    let res = -Infinity;

    for (e; e < s.length; e++) {
        const ePos = s[e].charCodeAt(0) - 'A'.charCodeAt(0);
        count[ePos]++;
        maxCount = Math.max(maxCount, count[ePos]);

        if (e - b + 1 - maxCount > k) {
            const bPos = s[b].charCodeAt(0) - 'A'.charCodeAt(0);
            count[bPos]--;
            b++;
        }

        res = Math.max(res, e - b + 1);

    }

    return res;

};

let s = "ABABCCEDFEEE";
console.log(characterReplacement(s, 2));

//* 刚开始 start, end 为0
//* 找到start到end位置中最大数量的字符， 尝试把其他字符转化为这个字符
//* 若果操作次数小于等于k， 则可以完成转化 更新最大长度。 若不大于最大长度， 无法完成操作， 把start+1， count数组里面原本start的字符数量减一

//* A B A B C C E D F E E E

//* <----->                 4
//*   <------->             5
//*            ...
//*             <---------> 6

//? Input: s = "ABAB", k = 2
//? Output: 4
//? Explanation: Replace the two 'A's with two 'B's or vice versa.

//? Input: s = "AABABBA", k = 1
//? Output: 4
//? Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
//? The substring "BBBB" has the longest repeating letters, which is 4.