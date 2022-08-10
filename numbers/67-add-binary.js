/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {

    let aArr = a.split('');
    let bArr = b.split('');
    let ans = '';
    let n = 0;
    while (aArr.length || bArr.length) {
        let charA = aArr.pop();
        let charB = bArr.pop();
        let sum = n + Number(charA || 0) + Number(charB || 0);
        if (sum === 2) {
            n = 1;
            ans = '0'.concat(ans);
        } else if (sum > 2) {
            n = 1;
            ans = '1'.concat(ans);
        }
        else if (sum === 1) {
            n = 0;
            ans = '1'.concat(ans);
        } else {
            n = 0;
            ans = '0'.concat(ans);
        }

    }
    if (n === 1) ans = '1'.concat(ans);

    return ans;

};

let a = "10", b = "0"
console.log(addBinary(a, b));

//? Input: a = "11", b = "1"
//? Output: "100"

//? Input: a = "1010", b = "1011"
//? Output: "10101"