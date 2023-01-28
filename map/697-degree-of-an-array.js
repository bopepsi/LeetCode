/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {

    let map = {};
    let maxApperence = 1;

    //todo map[n][0] => times of apperence
    //todo map[n][1] => first apperence
    //todo map[n][2] => gap

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (map[n]) {
            map[n][0]++;
            map[n][2] = i - map[n][1] + 1;
            maxApperence = Math.max(map[n][0], maxApperence);
        } else {
            map[n] = [];
            map[n][0] = 1;
            map[n][1] = i;
            map[n][2] = 1;
        }
    }

    console.log(map);
    console.log(maxApperence)


    let minGap = Infinity;
    let temp = [];
    for (const item in map) {
        if (map[item][0] == maxApperence) {
            temp.push(map[item]);
            minGap = Math.min(minGap, map[item][2]);
        }
    }

    console.log(temp);
    console.log(minGap)
    for (const k of temp) {
        if (k[2] == minGap) {
            return k[2];
        }
    }


};

console.log(findShortestSubArray(nums = [1, 2, 2, 3, 1]));

//? Input: nums = [1,2,2,3,1]
//? Output: 2
//? Explanation: 
//? The input array has a degree of 2 because both elements 1 and 2 appear twice.
//? Of the subarrays that have the same degree:
//? [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
//? The shortest length is 2. So return 2.

//? Input: nums = [1,2,2,3,1,4,2]
//? Output: 6
//? Explanation: 
//? The degree is 3 because the element 2 is repeated 3 times.
//? So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.