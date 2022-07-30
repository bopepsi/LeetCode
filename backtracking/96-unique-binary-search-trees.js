/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {

    let res = [1, 1, 2];
    for (let i = 3; i < n + 1; i++) {
        let temp = 0;
        for (let j = 0; j < i; j++) {
            temp = temp + res[j] * res[i - 1 - j];
        }
        res[i] = temp;
    }

    return res[n];

};

var numTreesV2 = function (n) {

    if (n <= 1) return 1;
    let count = 0;
    for (let i = 0; i < n; i++) {
        count += numTreesV2(i) * numTreesV2(n - 1 - i);
    }
    return count;

};


console.log(numTrees(3));