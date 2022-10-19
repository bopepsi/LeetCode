/**
 * @param {string} s
 * @return {number}
 */
var strangePrinter = function (s) {

    let n = s.length;
    let t = Array.from({ length: n }, () => Array(n).fill(0));

    const helper = (j, i) => {
        //* Empty string
        if (j > i) return 0;

        //* One char
        if (j === i) return 1;

        if (t[j][i] > 0) return t[j][i];

        //* Default behaviour, add one operation
        let ans = helper(j, i - 1) + 1;

        for (let k = j; k < i; k++) {
            if (s[k] === s[i]) {
                ans = Math.min(ans, helper(j, k) + helper(k + 1, i - 1))
            }
        };

        t[j][i] = ans;
        return ans;

    }

    return helper(0, n - 1);
    //* or return t[0][n - 1];

};

let s = "aaabbb";
console.log(strangePrinter(s));

//? Input: s = "aaabbb"
//? Output: 2
//? Explanation: Print "aaa" first and then print "bbb".

//? Input: s = "aba"
//? Output: 2
//? Explanation: Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character 'a'.