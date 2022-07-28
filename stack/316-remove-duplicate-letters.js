/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicateLetters = function (s) {
    let stack = [];
    let last = {};
    let seen = {};
    for (let i = 0; i < s.length; i++) {
        last[s[i]] = i;
    }

    for (let i = 0; i < s.length; i++) {
        if (!seen[s[i]]) {
            while (stack.length > 0 && s[i] < stack[stack.length - 1] && i < last[stack[stack.length - 1]]) {
                seen[stack.pop()] = false;
            }
            seen[s[i]] = true;
            stack.push(s[i]);
        }
    }
    
    return stack.join('');
};

//? Input: s = "bcabc"
//? Output: "abc"

//? Input: s = "cbacdcbc"
//? Output: "acdb"

//* c b a c

console.log(removeDuplicateLetters("cbacdcbc"))