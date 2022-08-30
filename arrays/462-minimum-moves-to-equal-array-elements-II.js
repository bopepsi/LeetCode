/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {

    let arr = nums.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    let ans = 0;
    for (let n of arr) {
        ans = ans + Math.abs(n - arr[mid]);
    };
    return ans;

};

//* 从小到大 a, b, c
//*       1. 全部变成a b-a+c-a
//*       2. 全部变成b b-a+c-b
//*       3. 全部变成c c-a+c-b
//* 1 - 2 > 0 && 3 - 2 > 0 所以取中间数字时可以满足操作步数最少

//? Input: nums = [1,2,3]
//? Output: 2
//? Explanation:
//? Only two moves are needed (remember each move increments or decrements one element):
//? [1,2,3]  =>  [2,2,3]  =>  [2,2,2]

//? Input: nums = [1,10,2,9]
//? Output: 16