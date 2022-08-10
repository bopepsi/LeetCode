/**
 * @param {number} n
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var nthUglyNumber = function (n, a, b, c) {

    const calculateLCM = (...arr) => {
        const gcd2 = (a, b) => {
            // Greatest common divisor of 2 integers
            if (!b) return b === 0 ? a : NaN;
            return gcd2(b, a % b);
        };
        const lcm2 = (a, b) => {
            // Least common multiple of 2 integers
            return a * b / gcd2(a, b);
        }
        // Least common multiple of a list of integers
        let n = 1;
        for (let i = 0; i < arr.length; ++i) {
            n = lcm2(arr[i], n);
        }
        return n;
    };
    let ab = calculateLCM(a, b);
    let ac = calculateLCM(a, c);
    let bc = calculateLCM(b, c);
    let abc = calculateLCM(a, b, c);

    let l = 1; r = 2 * Math.pow(10, 9) + 1;
    
    while (l < r) {
        let m = Math.floor((r + l) / 2);
        let k = Math.floor(m / a) + Math.floor(m / b) + Math.floor(m / c) - Math.floor(m / ab)
            - Math.floor(m / ac) - Math.floor(m / bc) + Math.floor(m / abc);
        if (k >= n) r = m;
        else l = m + 1;

    }
    return l;

};

let n = 3, a = 2, b = 3, c = 5;
console.log(nthUglyNumber(n, a, b, c));

//? Input: n = 3, a = 2, b = 3, c = 5
//? Output: 4
//? Explanation: The ugly numbers are 2, 3, 4, 5, 6, 8, 9, 10... The 3rd is 4.

//? Input: n = 4, a = 2, b = 3, c = 4
//? Output: 6
//? Explanation: The ugly numbers are 2, 3, 4, 6, 8, 9, 10, 12... The 4th is 6.

//? Input: n = 5, a = 2, b = 11, c = 13
//? Output: 10
//? Explanation: The ugly numbers are 2, 4, 6, 8, 10, 11, 12, 13... The 5th is 10.