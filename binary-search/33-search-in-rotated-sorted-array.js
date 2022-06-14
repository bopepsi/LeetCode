//todo There is an integer array nums sorted in ascending order(with distinct values).
//todo Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k(1 <= k < nums.length) such that the resulting array is[nums[k], nums[k + 1], ..., nums[n - 1], nums[0], nums[1], ..., nums[k - 1]](0 - indexed).For example, [0, 1, 2, 4, 5, 6, 7] might be rotated at pivot index 3 and become[4, 5, 6, 7, 0, 1, 2].

//? Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or - 1 if it is not in nums.
//? You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0, r = nums.length - 1

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (target == nums[mid]) return mid;
        if (target >= nums[0]) {
            //* condition to loop through righ half
            if (nums[mid] >= nums[0] && target > nums[mid]) l = mid + 1;
            else r = mid - 1;
        } else {
            //* condition to loop through righ half
            if (nums[mid] >= nums[0] || target > nums[mid]) l = mid + 1;
            else r = mid - 1;
        }
    }
    return -1;
};


//?     Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 0
//?     Output: 4

//?     Input: nums = [4, 5, 6, 7, 0, 1, 2], target = 3
//?     Output: -1

//?     Input: nums = [1], target = 0
//?     Output: -1

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));