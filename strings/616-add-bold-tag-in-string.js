//* You are given a string s and an array of strings words.
//* You should add a closed pair of bold tag and to wrap the substrings in s that exist in words.
//* If two such substrings overlap, you should wrap them together with only one pair of closed bold-tag.
//* If two substrings wrapped by bold tags are consecutive, you should combine them.
//* Return s after adding the bold tags.

var addBoldTag = (s, words) => {

    //* init arr to store if the char should be bold or not
    let bArr = Array(s.length).fill(false);

    let boldEnd = 0;
    for (let i = 0; i < s.length; i++) {
        for (const w of words) {
            if (s.startsWith(w, i)) {
                boldEnd = i + w.length;
            }
        }
        bArr[i] = (i < boldEnd);
    }
    console.log(bArr)
    let res = '';
    for (let i = 0; i < bArr.length; i++) {
        let c = s[i];

        if (!bArr[i]) {     //* not bold, just append to result
            res = res.concat(c);
            continue;
        }

        if (i == 0 || !bArr[i - 1]) {     //* if at index 0, or prev pos is not bold, append <b>
            res = res.concat('<b>');
        }
        res = res.concat(c);
        if (i == s.length - 1 || !bArr[i + 1]) {
            res = res.concat('</b>');
        }
    }

    return res;

}

const s = "abcxyz123", words = ["abc", "123"];
console.log(addBoldTag(s, words));

//? Input: s = "abcxyz123", words = ["abc","123"]
//? Output: "<b>abc</b>xyz<b>123</b>"
//? Explanation: The two strings of words are substrings of s as following: "abcxyz123".
//? We add <b> before each substring and </b> after each substring.

//? Input: s = "aaabbb", words = ["aa","b"]
//? Output: "<b>aaabbb</b>"
//? Explanation: 
//? "aa" appears as a substring two times: "aaabbb" and "aaabbb".
//? "b" appears as a substring three times: "aaabbb", "aaabbb", and "aaabbb".
//? We add <b> before each substring and </b> after each substring: "<b>a<b>a</b>a</b><b>b</b><b>b</b><b>b</b>".
//? Since the first two <b>'s overlap, we merge them: "<b>aaa</b><b>b</b><b>b</b><b>b</b>".
//? Since now the four <b>'s are consecuutive, we merge them: "<b>aaabbb</b>".
