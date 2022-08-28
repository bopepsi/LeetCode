/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function (nums) {

    let n = nums.length;
    let k = -Infinity;
    let stack = [];

    for (let i = n - 1; i >= 0; i--) {
        if (nums[i] < k) return true;
        while (stack.length > 0 && nums[i] > stack[stack.length - 1]) {
            k = stack.pop();
        }
        stack.push(nums[i]);
    }

    return false;

};

const nums = [3, 1, 4, 2];
console.log(find132pattern(nums));

//? Input: nums = [1,2,3,4]
//? Output: false
//? Explanation: There is no 132 pattern in the sequence.

//? Input: nums = [3,1,4,2]
//? Output: true
//? Explanation: There is a 132 pattern in the sequence: [1, 4, 2].

//? Input: nums = [-1,3,2,0]
//? Output: true
//? Explanation: There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].