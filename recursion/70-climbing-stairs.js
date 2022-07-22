// You are climbing a staircase. It takes n steps to reach the top.
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let prev = 0;
    let curr = 1;
    for (i = 0; i < n; i++) {
        const temp = prev;
        prev = curr;
        curr = temp + curr;
    }
    return curr;
};