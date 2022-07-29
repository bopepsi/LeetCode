/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let f = n.toString(2);
    let count = f.split('').filter(e => e === '1').length;
    return count;
};

console.log(hammingWeight(00000000000000000000000010000000))