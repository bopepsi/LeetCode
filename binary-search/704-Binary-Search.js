//todo Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums.If target exists, then return its index.Otherwise, return -1.
//todo You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while (left <= right) {
        mid = Math.floor((right + left) / 2);
        
        if (arr[mid] > target) right = mid - 1;     //* continue search from left half
        
        if (arr[mid] < target) left = mid + 1;      //* continue search from right half

        if (arr[mid] === target) return mid;        //* found
    }   

    return -1;
    
};

var searchV2 = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(arr.length / 2);
    while (arr[mid] !== target && left < right) {
        if (arr[mid] > target) right = mid - 1;
        if (arr[mid] < target) left = mid + 1;
        mid = Math.floor((right + left) / 2);
    }
    return arr[mid] === target ? mid : -1;
};

//?     Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
//?     Output: 4
//?     Explanation: 9 exists in nums and its index is 4

//?     Input: nums = [-1, 0, 3, 5, 9, 12], target = 2
//?     Output: -1
//?     Explanation: 2 does not exist in nums so return -1