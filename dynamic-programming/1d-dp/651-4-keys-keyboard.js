//* Imagine you have a special keyboard with the following keys:

//* A: Print one ‘A’ on the screen.
//* Ctrl-A: Select the whole screen.
//* Ctrl-C: Copy selection to buffer.
//* Ctrl-V: Print buffer on screen appending it after what has already been printed.
//* Given an integer n, return the maximum number of ‘A’ you can print on the screen with at most n presses on the keys.

//* https://www.jiakaobo.com/leetcode/651.%204%20Keys%20Keyboard.html
const maxA = num => {
    let dp = Array(num + 1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= num; i++) {
        dp[i] = i;
        for (let j = 1; j < i - 2; j++) {
            let total = dp[j] + (i - j - 2) * dp[j];
            dp[i] = Math.max(total, dp[i])
        }
    }
    console.log(dp)
    return dp[num]
}

console.log(maxA(7))

// Input: n = 3
// Output: 3
// Explanation: We can at most get 3 A's on screen by pressing the following key sequence:
// A, A, A

// Input: n = 7
// Output: 9
// Explanation: We can at most get 9 A's on screen by pressing following key sequence:
// A, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V