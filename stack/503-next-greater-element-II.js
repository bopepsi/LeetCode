/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let s = [];
    let ori = nums.length;
    nums = nums.concat(nums);
    let ans = Array(nums.length).fill(-1);
    for (let i = 0; i < nums.length - 1; i++) {
        while (s.length > 0 && nums[i] > nums[s[s.length - 1]]) {
            let n = s.pop();
            ans[n] = nums[i];
        }
        s.push(i);
    }
    return ans.slice(0, ori);
};

//? Input: nums = [1,2,1]
//? Output: [2,-1,2]
//? Explanation: The first 1's next greater number is 2; 
//? The number 2 can't find next greater number. 
//? The second 1's next greater number needs to search circularly, which is also 2.

console.log(nextGreaterElements([5, 4, 3, 2, 1]));