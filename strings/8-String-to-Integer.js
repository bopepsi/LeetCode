//todo Implement the myAtoi(string s) function, which converts a string to a 32 - bit signed integer

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (str) {
    let i = 0, sign = 1, num = 0, MIN = -2147483648, MAX = 2147483647;

    str = str.trim();
    
    if (str[i] == '-' || str[i] == '+') sign = str[i++] == '-' ? -1 : 1;

    while (str[i] && str[i].charCodeAt(0) - 48 <= 9 && str[i].charCodeAt(0) - 48 >= 0) {

        num = num * 10 + (str[i++].charCodeAt(0) - 48);
    }

    num = sign * num;

    return num <= MIN ? MIN : num >= MAX ? MAX : num;
};

//* Line12  -   Check sign, the first char has to be '-' or '+', if not while loop runs, by default set to 1(positive).
//* Line14  -   check if the char is a number by checking char code using 'char'.charCodeAt(0).
//* Line16  -   Line Add on the the num, increment i by 1, and num by *10.

//?     Input: s = "42"
//?     Output: 42
//?     Since 42 is in the range[-231, 231 - 1], the final result is 42.

//?     Input: s = "   -42"
//?     Output: -42
//?     Since - 42 is in the range[-231, 231 - 1], the final result is - 42.

//?     Input: s = "4193 with words"
//?     Output: 4193
//?     Since 4193 is in the range[-231, 231 - 1], the final result is 4193.

console.log(myAtoi(" 0  -42"));