/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function (n, k) {
    k = k - 1;
    let helper = (n, k) => {
        if (n === 1) return 0;
        if (k % 2 === 0) return helper(n - 1, Math.floor(k / 2));
        else return 1 - helper(n - 1, Math.floor(k / 2));
    }
    return helper(n, k);

};

// 0
// 0   1
// 0   1   1   0
// 0 1 1 0 1 0 0 1