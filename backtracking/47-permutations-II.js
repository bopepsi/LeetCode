//todo Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let map = {};
    let ans = [];
    let permutation = [];
    for (const num of nums) {
        map[num] = map[num] ? map[num] + 1 : 1
    }
    backtrack = function () {
        // console.log(permutation);
        if (permutation.length == nums.length) {
            ans.push([...permutation]);
            return;
        }
        for (const n in map) {
            if (map[n] > 0) {
                permutation.push(n);
                map[n] -= 1;
                backtrack();
                map[n] += 1;
                permutation.pop();
            }
        }
    }
    backtrack();
    return ans;
};

//?     Input: nums = [1,1,2]
//?     Output:
//?     [[1,1,2],
//?     [1,2,1],
//?     [2,1,1]]

//?     Input: nums = [1,2,3]
//?     Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

console.log(permuteUnique([1, 1, 2]));