/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    let ans = [];

    for (let i = nums.length - 1; i >= 0; i--) {

        //* use index to check
        //* n-1 对应 nums 的 index， 若 nums[n-1]<0，代表之前出现过， 加入 n 到 ans
        
        let n = Math.abs(nums[i]);
        if (nums[n - 1] < 0) ans.push(n);
        else nums[n - 1] = 0 - nums[n - 1];

    }

    return ans;

};

//*                0 1 2 3 4 5 6 7
//? Input: nums = [4,3,2,7,8,2,3,1]
//? Output: [2,3]

//? Input: nums = [1,1,2]
//? Output: [1]

//? Input: nums = [1]
//? Output: []