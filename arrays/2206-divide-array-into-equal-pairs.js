/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {

    let map = {};
    for (let n of nums) {
        if (map[n]) map[n]++;
        else map[n] = 1;
    };
    const arr = Object.entries(map);
    return arr.every(e => e[1] % 2 === 0);

};

const nums = [3, 2, 3, 2, 2, 2];
console.log(divideArray(nums));

// Input: nums = [3,2,3,2,2,2]
// Output: true
// Explanation: 
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

// Input: nums = [1,2,3,4]
// Output: false
// Explanation: 
// There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.