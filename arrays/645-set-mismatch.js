//* Find the number that occurs twice and the number that is missing and return them in the form of an array.

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {

    let arr = Array(nums.length + 1).fill(false);
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (arr[num]) {
            res[0] = num;
        };
        arr[num] = true;
    }
    for (let j = 1; j < arr.length; j++) {
        if (!arr[j]) {
            res[1] = j;
        }
    }

    return res

};

const nums = [ 2, 2]
console.log(findErrorNums(nums));

//? Input: nums = [1, 2, 2, 4]
//? Output: [2, 3]

//? Input: nums = [1, 1]
//? Output: [1, 2]
