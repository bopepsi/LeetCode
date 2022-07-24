/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {

    const getOps = (balls) => {
        let ops = 0;
        for (const num of nums) {
            ops += Math.floor((num - 1) / balls)
        };
        return ops;
    }

    let l = 1;
    let r = Math.max(...nums) + 1;
    while (l < r) {
        let m = Math.floor((l + r) / 2);

        if (getOps(m) <= maxOperations) r = m;
        else l = m + 1;
    }

    return l;
};