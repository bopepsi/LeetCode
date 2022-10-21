/**
 * @param {number[][]} pairs
 * @return {number}
 */
var findLongestChain = function (pairs) {

    //* 先按第二个数排列数组， 再比较后面第一个数与前面第二个数的大小， 链接在一起
    let sorted = pairs.sort((a, b) => a[1] - b[1]);
    let end = sorted[0][1]
    let count = 1;
    for (let i = 1; i < sorted.length; i++) {
        let curr = pairs[i];
        if (curr[0] > end) {
            end = curr[1]
            count++;
        }
    }
    return count;

};

//? Input: pairs = [[1,2],[2,3],[3,4]]
//? Output: 2
//? Explanation: The longest chain is [1,2] -> [3,4].

//? Input: pairs = [[1,2],[7,8],[4,5]]
//*                [[1,2],[4,5],[7,8],[6,9]]
//? Output: 3
//? Explanation: The longest chain is [1,2] -> [4,5] -> [7,8].
