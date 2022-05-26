//todo The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

//*     P   A   H   N
//*     A P L S I I G
//*     Y   I   R

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1 || s.length < numRows) return s;
    //* prepare rows
    let rows = Array.from({ length: numRows }, () => []);
    let count = 0;
    let reverse = false;
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        rows[count].push(char);
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    let result = rows.flat().join('');
    return result;
};

//?     Input: s = "PAYPALISHIRING", numRows = 3
//?     Output: "PAHNAPLSIIGYIR"

//?     Input: s = "PAYPALISHIRING", numRows = 4
//?     Output: "PINALSIGYAHRPI"
//?     Explanation:
//?     P     I    N
//?     A   L S  I G
//?     Y A   H R
//?     P     I
let s = "PAYPALISHIRING"
let numRows = 4
console.log(convert(s, numRows));


//? Another similar solution
var convert2 = function (s, numRows) {
    let result = [];
    let row = 0;
    let goingUp = false;
    for (let i = 0; i < s.length; i++) {
        //? append letter to active row
        result[row] = (result[row] || '') + s[i];
        if (goingUp) {
            row--;
            //? reverse direction if goingUp and reaching top
            if (row === 0) goingUp = false;
        } else {
            row++;
            //? reverse direction after reaching bottom
            if (row === numRows - 1) goingUp = true;
        }

    }
    return result.join('');
};