//todo Given an array of integers nums, calculate the pivot index of this array.
//? The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.
//? If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.
//* Return the leftmost pivot index. If no such index exists, return -1.

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    let lastIndex = nums.length - 1;

    const checkSum = (pivot) => {
        console.log(pivot, lastIndex)
        let left = 0;
        let right = 0;
        for (let i = 0; i < pivot; i++) {
            left = (left || 0) + nums[i];
            console.log(left, 'left')
        }
        for (let j = pivot + 1; j <= lastIndex; j++) {
            right = (right || 0) + nums[j];
            console.log(right, 'right')
        }
        return left === right;
    }

    for (let k = 0; k <= lastIndex; k++) {
        if (checkSum(k)) return k;
    }

    return -1;

};

//?     Input: nums = [1,7,3,6,5,6]
//?     Output: 3
//?     Explanation:
//?     The pivot index is 3.
//?     Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
//?     Right sum = nums[4] + nums[5] = 5 + 6 = 11

//?     Input: nums = [1,2,3]
//?     Output: -1
//?     Explanation:
//?     There is no index that satisfies the conditions in the problem statement.

//?     Input: nums = [2,1,-1]
//?     Output: 0
//?     Explanation:
//?     The pivot index is 0.
//?     Left sum = 0 (no elements to the left of index 0)
//?     Right sum = nums[1] + nums[2] = 1 + -1 = 0

var pivotIndex2 = (nums) => {

    let sum = nums.reduce((a, b) => a + b)
    let left = 0;
    let right = sum;

    for (let i = 0; i < nums.length; i++) {
        right = sum - left - nums[i]
        if (left == right) return i;
        else left += nums[i]
    }

    return -1
};

console.log(pivotIndex2([1, 7, 3, 6, 5, 6]))