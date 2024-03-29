/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
var arithmeticTriplets = function (nums, diff) {

    const set = new Set([...nums]);
    let ans = 0;
    for (let i = 1; i < nums.length - 1; i++) {
        let l = nums[i] - diff;
        let r = nums[i] + diff;
        if (set.has(l) && set.has(r)) ans++;
    };
    return ans;

};

let nums = [0, 1, 4, 6, 7, 10], diff = 3;
console.log(arithmeticTriplets(nums, diff));

//? Input: nums = [0,1,4,6,7,10], diff = 3
//? Output: 2
//? Explanation:
//? (1, 2, 4) is an arithmetic triplet because both 7 - 4 == 3 and 4 - 1 == 3.
//? (2, 4, 5) is an arithmetic triplet because both 10 - 7 == 3 and 7 - 4 == 3. 

//? Input: nums = [4,5,6,7,8,9], diff = 2
//? Output: 2
//? Explanation:
//? (0, 2, 4) is an arithmetic triplet because both 8 - 6 == 2 and 6 - 4 == 2.
//? (1, 3, 5) is an arithmetic triplet because both 9 - 7 == 2 and 7 - 5 == 2.