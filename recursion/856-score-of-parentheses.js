/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function (s) {
    
    const helper = (l, r) => {
        if ((l + 1) === r) return 1;

        let tmp = 0;
        for (let i = l; i < r; i++) {
            if (s[i] === '(') tmp++;
            if (s[i] === ')') tmp--;
            if (tmp === 0) return helper(l, i) + helper(i + 1, r);
        }

        return 2 * helper(l + 1, r - 1);
    }

    return helper(0, s.length - 1);
};

let s = "()()()"
console.log(scoreOfParentheses(s));

//* The score of a balanced parentheses string is based on the following rule:
//* "()" has score 1.
//* AB has score A + B, where A and B are balanced parentheses strings.
//* (A) has score 2 * A, where A is a balanced parentheses string.

//? Input: s = "()"
//? Output: 1

//? Input: s = "(())"
//? Output: 2

//? Input: s = "()()"
//? Output: 2