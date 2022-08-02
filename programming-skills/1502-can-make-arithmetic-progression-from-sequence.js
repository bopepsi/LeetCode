/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canMakeArithmeticProgression = function (arr) {
    arr = arr.sort((a, b) => a - b);
    let stack = [arr[1] - arr[0]];
    for (let i = 2; i < arr.length; i++) {
        if (stack.pop() !== arr[i] - arr[i - 1]) return false;
        stack.push(arr[i] - arr[i - 1]);
    }
    return true;
};

//? Input: arr = [3,5,1]
//? Output: true
//? Explanation: We can reorder the elements as [1,3,5] or [5,3,1] with differences 2 and -2 respectively, between each consecutive elements.

//? Input: arr = [1,2,4]
//? Output: false
//? Explanation: There is no way to reorder the elements to obtain an arithmetic progression.