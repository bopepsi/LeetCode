/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {

    let ans = 0;
    let rowNum = 1;

    while (true) {
        n = n - rowNum;
        rowNum++;
        ans++;
        if (n < rowNum) return ans;
        if (n === rowNum) return ans + 1;
    };

};


//? Input: n = 5
//? Output: 2
//? Explanation: Because the 3rd row is incomplete, we return 2.

//? Input: n = 8
//? Output: 3
//? Explanation: Because the 4th row is incomplete, we return 3.