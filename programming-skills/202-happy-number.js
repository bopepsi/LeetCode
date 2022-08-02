/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let seen = {};
    const helper = num => {

        if (seen[num]) return false;
        seen[num] = true;
        let nums = num.toString();
        let sum = 0;
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i] * nums[i];
        }
        if (sum === 1) return true;
        return helper(sum);
    }
    return helper(n);
};

console.log(isHappy(19));