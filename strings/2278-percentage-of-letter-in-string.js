/**
 * @param {string} s
 * @param {character} letter
 * @return {number}
 */
var percentageLetter = function (s, letter) {

    const l = s.length;
    let c = 0;
    for (let i = 0; i < l; i++) {
        if (s[i] === letter) c++;
    };
    return Math.floor(100 * c / l);

};

const s = "foobar", letter = "o";
console.log(percentageLetter(s, letter));

//? Input: s = "foobar", letter = "o"
//? Output: 33
//? Explanation:
//? The percentage of characters in s that equal the letter 'o' is 2 / 6 * 100% = 33% when rounded down, so we return 33.

//? Input: s = "jjjj", letter = "k"
//? Output: 0
//? Explanation:
//? The percentage of characters in s that equal the letter 'k' is 0%, so we return 0.