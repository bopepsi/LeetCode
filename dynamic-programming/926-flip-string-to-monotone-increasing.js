/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function (s) {
    let l = Array(s.length).fill(0);
    let r = Array(s.length).fill(0);
    if (s[0] == 1) l[0] = 1;
    if (s[s.length - 1] == 0) r[s.length - 1] = 1;
    else r[s.length - 1] = 0;

    for (let i = 1; i < s.length; i++) {
        if (s[i] == 1) l[i] = l[i - 1] + 1;
        else l[i] = l[i - 1];

    }

    for (let j = s.length - 2; j >= 0; j--) {
        if (s[j] == 0) r[j] = r[j + 1] + 1;
        else r[j] = r[j + 1];
    }

    console.log(l)
    console.log(r)

    let ans = Infinity;

    for (let k = 1; k < s.length; k++) {
        ans = Math.min(ans, l[k - 1] + r[k])
    }

    ans = Math.min(ans, l[s.length - 1], r[0])

    return ans;

};

var minFlipsMonoIncrV2 = function (s) {

    let dp = Array(s.length + 1).fill([0, 0]);

    for (let i = 1; i <= s.length; i++) {
        if (s[i - 1] == 1) {
            dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]);
            dp[i][0] = dp[i - 1][0] + 1;
        }
        if (s[i - 1] == 0) {
            dp[i][0] = dp[i - 1][0];
            dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + 1;
        }
    }
    
    return Math.min(dp[s.length][0], dp[s.length][1]);

    // let dp = [0, 0];
    // for (let i = 0; i < s.length; i++) {
    //     if (s[i] == 1) {
    //         dp[1] = Math.min(...dp);
    //         dp[0] = dp[0] + 1;
    //     } else {
    //         dp[1] = Math.min(dp[0], dp[1]) + 1;
    //         dp[0] = dp[0];

    //     }
    // }
    // return Math.min(dp[0], dp[1]);

};

console.log(minFlipsMonoIncrV2('010110'));

//? Input: s = "00110"
//? Output: 1
//? Explanation: We flip the last digit to get 00111.

//? Input: s = "010110"
//? Output: 2
//? Explanation: We flip to get 011111, or alternatively 000111.

//? Input: s = "00011000"
//? Output: 2
//? Explanation: We flip to get 00000000.