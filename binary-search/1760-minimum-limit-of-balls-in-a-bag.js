/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {

    const getOps = (balls) => {
        let ops = 0;
        for (const num of nums) {
            //* 向上取整再减一
            ops += (Math.ceil(num / balls) - 1);
            // ops += Math.floor((num + balls - 1) / balls) - 1;
            // ops += Math.floor((num - 1) / balls)
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

// Input: nums = [9], maxOperations = 2
// Output: 3
// Explanation: 
// - Divide the bag with 9 balls into two bags of sizes 6 and 3. [9] -> [6,3].
// - Divide the bag with 6 balls into two bags of sizes 3 and 3. [6,3] -> [3,3,3].
// The bag with the most number of balls has 3 balls, so your penalty is 3 and you should return 3.

// Input: nums = [2,4,8,2], maxOperations = 4
// Output: 2
// Explanation:
// - Divide the bag with 8 balls into two bags of sizes 4 and 4. [2,4,8,2] -> [2,4,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,4,4,4,2] -> [2,2,2,4,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,4,4,2] -> [2,2,2,2,2,4,2].
// - Divide the bag with 4 balls into two bags of sizes 2 and 2. [2,2,2,2,2,4,2] -> [2,2,2,2,2,2,2,2].
// The bag with the most number of balls has 2 balls, so your penalty is 2 an you should return 2.

// Input: nums = [7,17], maxOperations = 2
// Output: 7