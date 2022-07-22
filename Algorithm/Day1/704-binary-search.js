// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid;
    while (lefr <= right) {
        mid = Mah.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] > target) right = mid - 1;
        if (arr[mid] < target) left = mid + 1;
    };
    return false;
};