//todo Given an integer array nums sorted in non - decreasing order, return an array of the squares of each number sorted in non - decreasing order.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let arr = nums.map(num => num * num);
    let ans = [], left = 0, right = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[right] > arr[left]) {
            ans[i] = arr[right];
            right--;
        } else {
            ans[i] = arr[left];
            left++;
        }
    }
    return ans;
};

//?     Input: nums = [-4, -1, 0, 3, 10]
//?     Output: [0, 1, 9, 16, 100]
//?     Explanation: After squaring, the array becomes[16, 1, 0, 9, 100].
//?     After sorting, it becomes[0, 1, 9, 16, 100].

//?     Input: nums = [-7, -3, 2, 3, 11]
//?     Output: [4, 9, 9, 49, 121]
