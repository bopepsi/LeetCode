/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {

    let arr = nums.sort((a, b) => b - a);
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] < arr[i + 1] + arr[i + 2]) {
            return arr[i] + arr[i + 1] + arr[i + 2]
        }
    };
    return 0;
    
};

console.log(largestPerimeter([2, 3, 2]))