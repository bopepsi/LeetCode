/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {

    let map = {};
    for (let n of nums) {
        if (map[n]) map[n]++;
        else map[n] = 1;
    };

    let arr = Object.entries(map);

    arr = arr.sort((a, b) => {
        if (a[1] === b[1]) {
            return b[0] - a[0]
        } else {
            return a[1] - b[1];
        }
    })

    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        while (count < arr[i][1]) {
            ans.push(arr[i][0]);
            count++;
        }
    }

    return ans;
};

const nums = [-1, 1, -6, 4, 5, -6, 1, 4, 1]
console.log(frequencySort(nums));

//? Input: nums = [1,1,2,2,2,3]
//? Output: [3,1,1,2,2,2]
//? Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.

//? Input: nums = [1,3,3,2,2]
//? Output: [1,3,3,2,2]
//? Explanation: '2' and '3' both have a frequency of 2, so they are sorted in decreasing order.

//? Input: nums = ç
//? Output: [5,-1,4,4,-6,-6,1,1,1]