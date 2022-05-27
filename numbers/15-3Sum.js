//todo Given an integer array nums, return all the triplets[nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
//todo Notice that the solution set must not contain duplicate triplets.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let ans = [];
    let sum;
    if (nums.length < 3) {
        return ans;
    }

    let arr = nums.sort((a, b) => a - b);

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > 0) { return ans; }
        if (i > 0 && arr[i] == arr[i - 1]) { continue };

        for (let j = i + 1, k = arr.length - 1; j < k;) {
            sum = arr[i] + arr[j] + arr[k];
            if (sum === 0) {
                ans.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
                while (j < k && arr[j] == arr[j - 1]) {
                    j++;
                }
                while (j < k && arr[k] == arr[k + 1]) {
                    k--;
                }
            } else if (sum > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return ans;
};

//* This is 3-pointer problem.
//* Fix head at the start, then fix tail at the last for each iteration
//* Set mid at head + 1, head increase by 1 for each iteration, if curr head === prev head, then head + 1, escape the curr value. the rest works like two pointers.
//* But if curr mid or tail === prev mid or tail, escape that value as well. Iterate until mid > tail.

//?     Input: nums = [-1, 0, 1, 2, -1, -4]
//?     Output: [[-1, -1, 2], [-1, 0, 1]]

//?     Input: nums = []
//?     Output: []

//?     Input: nums = [0]
//?     Output: []

console.log(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]))