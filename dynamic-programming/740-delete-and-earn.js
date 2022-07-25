/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {

    let max = Math.max(...nums);
    let houses = Array(max).fill(0);
    nums.forEach(ele => {
        houses[ele] = (houses[ele] || 0) + ele;
    });

    let dp = [houses[0] || 0, Math.max(houses[1] || 0, houses[0] || 0)];

    for (let i = 2; i < houses.length; i++) {
        dp.push(Math.max((houses[i] + dp[i - 2]), dp[i - 1]));
    }

    return dp.pop();

};

console.log(deleteAndEarn([2, 2, 3, 3, 3, 4]))
console.log(deleteAndEarn([3, 1]))