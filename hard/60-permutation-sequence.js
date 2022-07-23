//todo The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
// By listing and labeling all of the permutations in order, we get the following sequence for n = 3:
// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {

    k = k - 1;

    let nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    let fac = [1];
    for (let i = 1; i < n; i++) {
        fac[i] = fac[i - 1] * i;
    }

    let ans = '';
    for (let i = n - 1; i >= 0; i--) {
        let num = nums.splice(k / fac[i], 1)
        ans = ans + num;
        k = k % fac[i];
    }
    return ans;

};

// Input: n = 3, k = 3
// Output: "213"

// Input: n = 4, k = 9
// Output: "2314"

// Input: n = 3, k = 1
// Output: "123"


console.log(getPermutation(4, 9))
