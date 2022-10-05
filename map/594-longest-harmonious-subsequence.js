//* We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.
//* Given an integer array nums, return the length of its longest harmonious subsequence among all its possible subsequences.
//* A subsequence of array is a sequence that can be derived from the array by deleting some or no elements without changing the order of the remaining elements.

/**
 * @param {number[]} nums
 * @return {number}
 */

var findLHS = function (nums) {

    let res = 0, map = new Map();

    nums.forEach(n => map.has(n) ? map.set(n, map.get(n) + 1) : map.set(n, 1));

    for (let key of map.keys()) {
        if (map.has(key - 1)) {
            res = Math.max(res, map.get(key) + map.get(key - 1));
        }
    }

    return res;
    
};

var findLHSV2 = function (nums) {

    let ans = 0;

    var getUpperAndLowerMax = function (v, subNums) {

        let upper = 0, lower = 0;
        if (subNums.includes(v + 1)) {
            upper = subNums.filter(e => (e - v) <= 1 && (e - v) >= 0).length;
            console.log("includes v+1, has ", upper)
        }
        if (subNums.includes(v - 1)) {
            lower = subNums.filter(e => (v - e) <= 1 && (v - e) >= 0).length;
            console.log("includes v-1, has ", lower)
        }
        return Math.max(upper, lower)
    }

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        let temp = getUpperAndLowerMax(curr, nums.slice(i))
        console.log(temp)
        ans = Math.max(ans, temp);
    }
    return ans;

};

const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));

//? Input: nums = [1,3,2,2,5,2,3,7]
//? Output: 5
//? Explanation: The longest harmonious subsequence is [3,2,2,2,3].

//? Input: nums = [1,2,3,4]
//? Output: 2

//? Input: nums = [1,1,1,1]
//? Output: 0
