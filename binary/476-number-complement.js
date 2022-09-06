/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {

    let b = Number(num).toString(2).split('');
    for (let i = 0; i < b.length; i++) {
        if (b[i] == 0) b[i] = 1;
        else if (b[i] == 1) b[i] = 0;
    }
    let r = b.join('');
    return parseInt(r, 2);

};

console.log(findComplement(5));

//? Input: num = 5
//? Output: 2
//? Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.

//? Input: num = 1
//? Output: 0
//? Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.