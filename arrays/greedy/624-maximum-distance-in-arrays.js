//* You are given m arrays, where each array is sorted in ascending order.
//* You can pick up two integers from two different arrays(each array picks one) and calculate the distance.We define the distance between two integers a and b to be their absolute difference | a - b |.
//* Return the maximum distance.

//? Input: arrays = [[1,2,3],[4,5],[1,2,3]]
//? Output: 4
//? Explanation: One way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.
//? Example 2:

//? Input: arrays = [[1],[1]]
//? Output: 0

const maxDistance = (arr) => {

    let res = 0;
    let min = arr[0][0], max = arr[0][arr[0].length - 1];

    for (let i = 1; i < arr.length; i++) {
        let tempH = arr[i][arr[i].length - 1];
        let tempL = arr[i][0];
        let maxMinusMin = Math.abs(tempH - min);
        let minMinusMax = Math.abs(max - tempL);
        res = Math.max(res, maxMinusMin, minMinusMax);
        min = Math.min(min, tempL);
        max = Math.max(max, tempH);
    }
    return res;

}

const arrays = [[1, 2, 3], [4, 5], [1, 2, 3]];

console.log(maxDistance(arrays))
