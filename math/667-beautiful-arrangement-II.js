/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function (n, k) {
    
    let ans = [];
    let l = 1;
    let r = n;
    for (let i = 0; i < n; i++) {
        if (k % 2 === 0) {
            ans[i] = l++;
        } else {
            ans[i] = r--;
        }
        if (k > 1) k--;
    }
    return ans;

};

//? Input: n = 3, k = 1
//? Output: [1,2,3]
//? Explanation: The [1,2,3] has three different positive integers ranging from 1 to 3, and the [1,1] has exactly 1 distinct integer: 1

//? Input: n = 3, k = 2
//? Output: [1,3,2]
//? Explanation: The [1,3,2] has three different positive integers ranging from 1 to 3, and the [2,1] has exactly 2 distinct integers: 1 and 2.
