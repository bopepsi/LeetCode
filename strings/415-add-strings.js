/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {

    let num1Arr = num1.split('');
    let num2Arr = num2.split('');
    console.log(num1Arr, num2Arr)

    let addOne = 0;
    let i = num1Arr.length - 1;
    let j = num2Arr.length - 1;

    let ans = '';

    while (i >= 0 || j >= 0) {
        
        const n1 = num1Arr[i] !== undefined ? num1Arr[i] : 0;
        const n2 = num2Arr[j] !== undefined ? num2Arr[j] : 0;
        console.log(n1, n2);
        const sum = (+n1) + (+n2) + addOne;
        console.log(sum)

        if (sum > 9) {
            let residul = sum % 10;
            console.log(residul);
            ans = residul + ans;
            addOne = 1;
        } else {
            ans = sum + ans;
            addOne = 0;
        }
        j--;
        i--;
    }

    if (addOne === 1) ans = '1' + ans;

    return ans;

};

let num1 = "917", num2 = "123"
console.log(addStrings(num1, num2));

//? Input: num1 = "11", num2 = "123"
//? Output: "134"

//? Input: num1 = "456", num2 = "77"
//? Output: "533"

//? Input: num1 = "0", num2 = "0"
//? Output: "0"