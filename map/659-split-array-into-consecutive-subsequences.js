//* You are given an integer array nums that is sorted in non-decreasing order.
//* Determine if it is possible to split nums into one or more subsequences such that both of the following conditions are true:
//* Each subsequence is a consecutive increasing sequence (i.e. each integer is exactly one more than the previous integer).
//* All subsequences have a length of 3 or more.

//* Return true if you can split nums according to the above conditions, or false otherwise.
//* A subsequence of an array is a new array that is formed from the original array by deleting some (can be none) of the elements without disturbing the relative positions of the remaining elements. (i.e., [1,3,5] is a subsequence of [1,2,3,4,5] while [1,3,2] is not).

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function (nums) {

    let end = {};       //* can concat this num to prev arr
    let count = {};     //* counter for num in nums
    for (let ele of nums) {
        count[ele] = count[ele] ? count[ele] + 1 : 1;
    }

    for (let n of nums) {

        if (count[n] == 0) {
            continue;
        }

        if (end[n] > 0) {
            end[n]--;
            end[n + 1] = end[n + 1] ? end[n + 1] + 1 : 1;
        } else if (count[n + 1] > 0 && count[n + 2] > 0) {
            count[n + 1]--;
            count[n + 2]--;
            end[n + 3] = end[n + 3] ? end[n + 3] + 1 : 1;
        } else {
            return false;
        }
        count[n]--;
    }

    return true;

};

const nums = [1, 2, 3, 3, 4, 4, 5, 5];
console.log(isPossible(nums));

//? Input: nums = [1,2,3,3,4,5]
//? Output: true
//? Explanation: nums can be split into the following subsequences:
//? [1,2,3,3,4,5] --> 1, 2, 3
//? [1,2,3,3,4,5] --> 3, 4, 5

//? Input: nums = [1,2,3,3,4,4,5,5]
//? Output: true
//? Explanation: nums can be split into the following subsequences:
//? [1,2,3,3,4,4,5,5] --> 1, 2, 3, 4, 5
//? [1,2,3,3,4,4,5,5] --> 3, 4, 5

//? Input: nums = [1,2,3,4,4,5]
//? Output: false
//? Explanation: It is impossible to split nums into consecutive increasing subsequences of length 3 or more.
