//todo Given a string s consisting of words and spaces, return the length of the last word in the string.

//? A word is a maximal substring consisting of non - space characters only.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let count = 0;
    let end = s.length - 1;
    let hitChar = false;                           // start count if reach a char, set to false
    for (end; end >= 0; end--) {
        if (s[end] !== ' ') hitChar = true;        // reach a char, set hit char to true
        if (hitChar) {      
            if (s[end] !== ' ') count++            // If char is not ' ', char count plus one
            else break;                            // If char is ' ', break the loop and return count
        }
    }
    return count;
};

//?     Input: s = "Hello World"
//?     Output: 5
//?     Explanation: The last word is "World" with length 5.

//?     Input: s = "   fly me   to   the moon  "
//?     Output: 4
//?     Explanation: The last word is "moon" with length 4.

//?     Input: s = "luffy is still joyboy"
//?     Output: 6
//?     Explanation: The last word is "joyboy" with length 6.

console.log(lengthOfLastWord("   fly me   to   the moon  "));
