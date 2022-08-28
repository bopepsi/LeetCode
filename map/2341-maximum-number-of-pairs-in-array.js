/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function (nums) {

    let set = new Set();
    let pairs = 0;
    //* set中若已经有数字， 则删除该数字， pair 加一。
    for (let n of nums) {
        if (set.has(n)) {
            set.delete(n)
            pairs++;
        } else {
            set.add(n);
        }
    }
    //* 剩余在 set 中的数字都没有配对成功
    let left = Array.from(set).length;
    return [pairs, left];

};

const nums = [1, 3, 2, 1, 3, 2, 2];
console.log(numberOfPairs(nums));

//? Input: nums = [1,3,2,1,3,2,2]
//? Output: [3,1]
//? Explanation:
//? Form a pair with nums[0] and nums[3] and remove them from nums. Now, nums = [3,2,3,2,2].
//? Form a pair with nums[0] and nums[2] and remove them from nums. Now, nums = [2,2,2].
//? Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [2].
//? No more pairs can be formed. A total of 3 pairs have been formed, and there is 1 number leftover in nums.

//? Input: nums = [1,1]
//? Output: [1,0]
//? Explanation: Form a pair with nums[0] and nums[1] and remove them from nums. Now, nums = [].
//? No more pairs can be formed. A total of 1 pair has been formed, and there are 0 numbers leftover in nums.

//? Input: nums = [0]
//? Output: [0,1]
//? Explanation: No pairs can be formed, and there is 1 number leftover in nums.
