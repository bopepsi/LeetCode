/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function (nums) {


    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) continue;

        let negCount = 0;
        let k = -1;
        let j = i;
        while (j < nums.length && nums[j] !== 0) {

            if (nums[j] < 0) negCount++;

            if (nums[j] < 0 && k === -1) k = j;

            if (negCount % 2 === 0) ans = Math.max(ans, j - i + 1);
            if (negCount % 2 !== 0 && k !== -1) ans = Math.max(ans, j - k);

            j++;

        }
        i = j;
    }

    return ans;

};

//? Input: nums = [0,-1,-2,-3,-4]
//? Output: 3
//? Explanation: The longest subarray with positive product is [1,-2,-3] which has a product of 6.
//? Notice that we cannot include 0 in the subarray since that'll make the product 0 which is not positive.

//* to have postive products, need to have even number of negative nums in the subarray
//* k is the 'first' negative number
//* ..... 0 X X k [X X X j] 0 .....
//*         i