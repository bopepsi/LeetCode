/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {

    let set = [...(new Set(nums))].sort((a, b) => b - a);
    console.log(set);
    return (set[2] === undefined) ? set[0] : set[2];
};

var thirdMaxV2 = function (nums) {

    let m1 = -Infinity;
    let m2 = -Infinity;
    let m3 = -Infinity;
    for (let num of nums) {
        if (num === m1 || num === m2 || num === m3) continue;
        if (num > m1) {
            m3 = m2;
            m2 = m1;
            m1 = num;
        } else if (num > m2) {
            m3 = m2;
            m2 = num;
        } else if (num > m3) {
            m3 = num;
        }
    };

    return (m3 === -Infinity) ? m1 : m3;

};

let nums = [3, 3, 2, 1];
console.log(thirdMaxV2(nums));

//? Input: nums = [3,2,1]
//? Output: 1
//? Explanation:
//? The first distinct maximum is 3.
//? The second distinct maximum is 2.
//? The third distinct maximum is 1.

//? Input: nums = [1,2]
//? Output: 2
//? Explanation:
//? The first distinct maximum is 2.
//? The second distinct maximum is 1.
//? The third distinct maximum does not exist, so the maximum (2) is returned instead.

//? Input: nums = [2,2,3,1]
//? Output: 1
//? Explanation:
//? The first distinct maximum is 3.
//? The second distinct maximum is 2 (both 2's are counted together since they have the same value).
//? The third distinct maximum is 1.