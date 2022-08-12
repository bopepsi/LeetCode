/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {

    let l = s.length;
    const helper = (start, end) => {
        if (start > end) return 0;

        let arr = Array(26).fill(0);
        for (let k = start; k < end; k++) {
            let char = s[k];
            let charPos = char.charCodeAt(0) - 'a'.charCodeAt(0);
            arr[charPos]++;
        }
        console.log(arr);
        for (let i = 0; i < 26; i++) {
            if (arr[i] > 0 && arr[i] < k) {
                for (let j = start; j < end; j++) {
                    if ((s[j].charCodeAt(0) - 'a'.charCodeAt(0)) === i) {
                        let left = helper(start, j);
                        let right = helper(j + 1, end);
                        let ans = Math.max(left, right);
                        return ans;
                    }
                }
            }
        }

        return end - start;

    }

    return helper(0, l);

};

//* a b c b a a
//* - - | - - -
//* | -   | - -


let s = "ababacb", k = 3;
console.log(longestSubstring(s, k));

//? Input: s = "aaabb", k = 3
//? Output: 3
//? Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.

//? Input: s = "ababbc", k = 2
//? Output: 5
//? Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
