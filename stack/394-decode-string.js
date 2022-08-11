/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let ns = [];
    let ls = [];
    for (let i = 0; i < s.length; i++) {
        let char = s[i];

        if (char > 0 && char <= 9) {
            console.log(char)
            let num = Number(char);
            while (s[i + 1] >= 0 && s[i + 1] <= 9) {
                num = num * 10 + Number(s[i+1]);
                i++;
                console.log(num)
            }
            ns.push(num);
            continue;
        }

        if (char === '[') {
            ls.push(char);
            continue;
        }
        else if (char === ']') {
            let str = '';
            while (ls[ls.length - 1] !== '[') {
                let curr = ls.pop();
                str = curr + str;
            }
            ls.pop();
            let repeat = ns.pop();
            let local = '';
            while (repeat > 0) {
                local = local + str;
                repeat--;
            }
            console.log(local);
            ls.push(local);
        }
        else {
            ls.push(char);
        }

    }
    console.log(ns, ls)
    let ans = '';
    for (const str of ls) {
        ans = ans + str;
    }
    return ans;
};

let s = "10[a]";
console.log(decodeString(s));

//? Input: s = "3[a]2[bc]"
//? Output: "aaabcbc"

//? Input: s = "3[a2[c]]"
//? Output: "accaccacc"

//? Input: s = "2[abc]3[cd]ef"
//? Output: "abcabccdcdcdef"