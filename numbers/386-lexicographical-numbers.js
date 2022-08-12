/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {

    let curr = 1;
    let ans = [];
    while (ans.length < n) {
        
        ans.push(curr);
        if (curr * 10 <= n) {
            curr *= 10;
        } else if (curr % 10 !== 9 && curr + 1 <= n) {
            curr++;
        } else {
            if (curr === n) curr = Math.floor(curr / 10);

            while (curr % 10 === 9) {
                curr = Math.floor(curr / 10);
            };
            curr++;
        }
        console.log(curr);
    }
    return ans;

};

console.log(lexicalOrder(39))

//? Input: n = 13
//? Output: [1,10,11,12,13,2,3,4,5,6,7,8,9]

//? Input: n = 2
//? Output: [1,2]