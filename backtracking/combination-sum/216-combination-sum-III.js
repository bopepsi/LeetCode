/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
    let ans = [];
    let path = [];
    let helper = (curr, sum) => {
        if (path.length === k) {
            if (sum === n) {
                ans.push([...path]);
            };
            return;
        }
        for (let i = curr; i < 10; i++) {
            let newSum = sum + i;
            if (newSum > n) return;
            if (newSum <= n) {
                path.push(i);
                helper(i + 1, newSum);
                path.pop();
            }
        }
    }
    helper(1, 0);
    return ans;
};

//? Input: k = 3, n = 9
//? Output: [[1,2,6],[1,3,5],[2,3,4]]
//? Explanation:
//? 1 + 2 + 6 = 9
//? 1 + 3 + 5 = 9
//? 2 + 3 + 4 = 9
//? There are no other valid combinations.

console.log(combinationSum3(2, 18))