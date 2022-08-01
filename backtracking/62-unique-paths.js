/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {

    let ans = 0;

    let backTrack = (i, j) => {

        if (i > m - 1 || j > n - 1) {
            return;
        }

        if (i === m - 1 && j === n - 1) {
            return ans++;
        }

        backTrack(i + 1, j);
        backTrack(i, j + 1);

    }

    backTrack(0, 0);

    return ans;

};

console.log(uniquePaths(3, 7));

//? Input: m = 3, n = 2
//? Output: 3
//? Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
//? 1. Right -> Down -> Down
//? 2. Down -> Down -> Right
//? 3. Down -> Right -> Down