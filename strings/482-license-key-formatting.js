/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {

    let count = 0;
    let ans = ""

    for (let i = s.length - 1; i >= 0; i--) {
        let char = s[i].toUpperCase();
        if (char === "-") continue;

        if (count < k) {
            ans = char + ans;
            count++;
        } else {
            ans = char + "-" + ans;
            count = 1;
        }
    }

    return ans;

};

let s = "5F3Z-2e-9-w", k = 4
licenseKeyFormatting(s, k)

//? Input: s = "5F3Z-2e-9-w", k = 4
//? Output: "5F3Z-2E9W"
//? Explanation: The string s has been split into two parts, each part has 4 characters.
//? Note that the two extra dashes are not needed and can be removed.

//? Input: s = "2-5g-3-J", k = 2
//? Output: "2-5G-3J"
//? Explanation: The string s has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.