/**
 * @param {number[]} nums
 * @return {number[]}
 */

//* O(n) best solution
var findDisappearedNumbers = function (nums) {

    const arr = Array(nums.length);
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        let index = nums[i];
        arr[index - 1] = true;
    };

    for (let j = 0; j < arr.length; j++) {
        if (!arr[j]) ans.push(j + 1);
    };
    return ans;

};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));

//*                0 1 2 3 4 5 6 7
//? Input: nums = [4,3,2,7,8,2,3,1]
//*                0 0 0 0     0 0              
//? Output: [5,6]

//? Input: nums = [1,1]
//? Output: [2]

//! slow but works
var findDisappearedNumbersV2 = function (nums) {

    const arr = [];
    for (let i = 0; i < nums.length; i++) {
        arr.push(i + 1);
    }
    const numsSet = Array.from(new Set(nums))
    const arrSet = new Set(arr);

    for (let j = 0; j < numsSet.length; j++) {
        arrSet.delete(numsSet[j]);
    }
    return Array.from(arrSet);

};
