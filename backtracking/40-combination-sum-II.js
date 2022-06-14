//todo Given a collection of candidate numbers(candidates) and a target number(target), find all unique combinations in candidates where the candidate numbers sum to target.
//* Each number in candidates may only be used once in the combination.
//* Note: The solution set must not contain duplicate combinations.

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    let nums = candidates.sort((a, b) => a - b);
    let temp = [], ans = [];
    const backTrack = function (start, sum) {
        if (sum > target) return;
        if (sum === target) { ans.push([...temp]); return; }
        for (let i = start; i < nums.length; i++) {
            let newSum = sum + nums[i];
            if (newSum <= target) {
                temp.push(nums[i]);
                backTrack(i + 1, newSum);
                temp.pop();
            }
            while (nums[i] === nums[i + 1]) i++;
        }
    }
    backTrack(0, 0);
    return ans;

};

//?     Input: candidates = [10, 1, 2, 7, 6, 1, 5], target = 8
//?     Output:
//?     [
//?         [1, 1, 6],
//?         [1, 2, 5],
//?         [1, 7],
//?         [2, 6]
//?     ]

//?     Input: candidates = [2, 5, 2, 1, 2], target = 5
//?     Output:
//?     [
//?         [1, 2, 2],
//?         [5]
//?     ]

console.log(combinationSum2([2, 2, 2],2))