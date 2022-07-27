/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {

    let dp = Array(s.length + 1).fill(false);
    dp[0] = true;
    console.log(dp)

    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j < i; j++) {
            if (dp[j] && wordDict.includes(s.substring(j, i))) {
                console.log(s.substring(j, i))
                dp[i] = true;
                break;
            }
        }
    }
    console.log(dp)
    return dp.pop();

};

//? Input: s = "applepenapple", wordDict = ["apple", "pen"]
//? Output: true
//? Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
//? Note that you are allowed to reuse a dictionary word.

console.log(wordBreak('applepen', ["apple", "pen"]));