/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {

    if (str.length <= 1) return str;

    const findPalindrome = (left, right) => {
        let res = '';

        while (left >= 0 && right <= str.length - 1) {

            if (left == right) {
                res = str[left];
                left--;
                right++;
                continue;
            }

            if (str[left] === str[right] && left != right) {
                res = str[left] + res + str[right];
                left--;
                right++;
                continue;
            }
            break;
        }
        return res;
    }

    let ans = '';
    for (let i = 0; i < str.length; i++) {
        let oneChar = findPalindrome(i, i);
        let twoChars = findPalindrome(i, i + 1);

        if (oneChar.length > ans.length) ans = oneChar;
        if (twoChars.length > ans.length) ans = twoChars;
    }

    return ans;

};

//* a b b a 
//* | |
//*   | |
//*     | |

//* or 

//* a b b a 
//* | 
//*   | 
//*     | 
//*       | 


//? Input: s = "babad"
//? Output: "bab"
//? Explanation: "aba" is also a valid answer.

//? Input: s = "cbbd"
//? Output: "bb"