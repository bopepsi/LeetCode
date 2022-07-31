/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {

    let map = {};

    for (const num of nums) {
        map[num] = (map[num] || 0) + 1;
    };

    let arr = Object.entries(map);
    arr = arr.sort((a, b) => b[1] - a[1]);

    arr = arr.map(e => Number(e[0]));
    return arr.slice(0, k);

};

let nums = [1, 1, 1, 2, 2, 2, 2, 3], k = 2;
console.log(topKFrequent(nums, k));

//? Input: nums = [1,1,1,2,2,3], k = 2
//? Output: [1,2]

//? Input: nums = [1], k = 1
//? Output: [1]