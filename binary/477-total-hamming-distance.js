/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function (nums) {

    let ans = 0;

    for (let i = 0; i < 32; i++) {

        let ones = 0;
        let zeros = 0;

        for (let num of nums) {

            let dis = num & (1 << i);
            console.log(dis)
            if (dis !== 0) ones++;
            else zeros++;

        }

        ans += ones * zeros;

    }

    return ans;

};

console.log(totalHammingDistance([4, 14, 2]));

//? Input: nums = [4,14,2]
//? Output: 6
//? Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
//? showing the four bits relevant in this case).
//? The answer will be:
//? HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.

//? Input: nums = [4,14,4]
//? Output: 4