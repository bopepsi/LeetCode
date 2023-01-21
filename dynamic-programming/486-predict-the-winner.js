/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {

    function Node(v1, v2) {
        this.p1 = v1;
        this.p2 = v2;
    }

    let len = nums.length;
    let dp = Array.from({ length: len }, () => Array(len).fill());

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let newN = new Node(0, 0);
            dp[i][j] = newN;
            if (i === j) newN.p1 = nums[i];
        }
    }
    //console.log(dp);

    for (let l = 2; l <= nums.length; l++) {
        for (let i = 0; i <= nums.length - l; i++) {
            let j = i + l - 1;
            let startSelect = nums[i] + dp[i + 1][j]["p2"];
            let endSelect = nums[j] + dp[i][j - 1]["p2"];
            if (startSelect > endSelect) {
                dp[i][j]["p1"] = startSelect;
                dp[i][j]["p2"] = dp[i + 1][j]["p1"];
            } else {
                dp[i][j]["p1"] = endSelect;
                dp[i][j]["p2"] = dp[i][j - 1]["p1"];
            }
        }
    }

    let res = dp[0][len - 1]
    return res["p1"] >= res["p2"];

};

console.log(PredictTheWinner([3, 9, 1, 2]))
