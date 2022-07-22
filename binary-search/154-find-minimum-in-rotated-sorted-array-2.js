// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

// [4,5,6,7,0,1,4] if it was rotated 4 times.
// [0,1,4,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

// You must decrease the overall operation steps as much as possible.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    const find = (arr, left, right) => {
        if (left + 1 >= right) {
            return Math.min(arr[left], arr[right]);
        }
        if (arr[left] < arr[right]) {
            return arr[left];
        }
        let mid = Math.floor((left + right) / 2);
        return Math.min(find(arr, left, mid - 1), find(arr, mid, right));
    }
    return find(nums, 0, nums.length - 1);
    
};

//?     Input: nums = [1,3,5]
//?     Output: 1

//?     Input: nums = [2,2,2,0,1]
//?     Output: 0