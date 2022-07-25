/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    let end = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i + nums[i] >= end) end = i;
    }
    return end === 0;
};

var canJumpV2 = function (nums) {
    let far = 0;
    for (let i = 0; i < nums.length; i++) {
        if (i > far) return false;
        far = Math.max(far, i + nums[i]);
    }
    return true;
};

console.log(canJumpV2([2, 3, 1, 1, 4]));