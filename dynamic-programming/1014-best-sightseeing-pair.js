/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
    let l = values[0] + 0;
    let max = values[0] + 0;
    for (let i = 1; i < values.length; i++) {
        max = Math.max(max, l + (values[i] - i));
        l = Math.max(l, values[i] + i);
    }
    return max;
};

//* (v[i] + i) + (v[j] - j)

//? Input: values = [8,1,5,2,6]
//? Output: 11
//? Explanation: i = 0, j = 2, values[i] + values[j] + i - j = 8 + 5 + 0 - 2 = 11