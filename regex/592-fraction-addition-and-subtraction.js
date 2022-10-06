//* Given a string expression representing an expression of fraction addition and subtraction, return the calculation result in string format.
//* The final result should be an irreducible fraction. If your final result is an integer, change it to the format of a fraction that has a denominator 1. So in this case, 2 should be converted to 2/1.

/**
 * @param {string} expression
 * @return {string}
 */
var fractionAddition = function (expression) {

    let nums = expression.split(/\/|(?=[+-])/).map(e => Number(e));
    let i = 0;
    let A = 0;
    let B = 1;

    //* great common dividor
    var gcd = (x, y) => {
        return (x % y == 0) ? y : gcd(y, x % y);
    }

    while (i < nums.length) {
        let a = nums[i];
        let b = nums[i + 1];

        A = A * b + a * B;
        B = B * b;

        let d = gcd(Math.abs(A), Math.abs(B));
        A = A / d;
        B = B / d;

        i += 2;
    }
    return A + "/" + B;
    
};

const expression = "-1/2+1/2+1/3";
console.log(fractionAddition(expression))

//? Input: expression = "-1/2+1/2"
//? Output: "0/1"

//? Input: expression = "-1/2+1/2+1/3"
//? Output: "1/3"

//? Input: expression = "1/3-1/2"
//? Output: "-1/6"
