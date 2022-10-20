/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
    
    let max = Math.max(...nums);
    let houses = Array(max + 1).fill(0);
    nums.forEach(ele => {
        houses[ele] += ele;
    });

    let dp = [houses[0] || 0, Math.max(houses[0] || 0, houses[1] || 0)];
    for (let i = 2; i < houses.length; i++) {
        dp[i] = Math.max(houses[i] + dp[i - 2], dp[i - 1])
    }

    return dp.pop()

};

const nums = [2, 2, 3, 3, 3, 4];
console.log(deleteAndEarn(nums))

// Input: nums = [3,4,2]
// Output: 6
// Explanation: You can perform the following operations:
// - Delete 4 to earn 4 points. Consequently, 3 is also deleted. nums = [2].
// - Delete 2 to earn 2 points. nums = [].
// You earn a total of 6 points.
// Example 2:

// Input: nums = [2,2,3,3,3,4]
// Output: 9
// Explanation: You can perform the following operations:
// - Delete a 3 to earn 3 points. All 2's and 4's are also deleted. nums = [3,3].
// - Delete a 3 again to earn 3 points. nums = [3].
// - Delete a 3 once more to earn 3 points. nums = [].
// You earn a total of 9 points.