//todo Given two strings s and t, determine if they are isomorphic.
//? Two strings s and t are isomorphic if the characters in s can be replaced to get t.
//? All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let h1 = {};
    let h2 = {};
    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        let c1 = s[i], c2 = t[i];
        if (!h1[c1] && !h2[c2]) {
            h1[c1] = c2;
            h2[c2] = c1;
            continue;
        } else if (h1[c1] !== c2 || h2[c2] !== c1) {
            return false;
        }
    }
    console.log(h1)
    console.log(h2)
    return true;
};

//?     Input: s = "egg", t = "add"
//?     Output: true

//?     Input: s = "foo", t = "bar"
//?     Output: false

//?     Input: s = "paper", t = "title"
//?     Output: true

console.log(isIsomorphic('egew', 'adae'));