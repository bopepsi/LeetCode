//* You are given an integer num. You can swap two digits at most once to get the maximum valued number.

//* Return the maximum valued number you can get.

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {

    let map = {};
    let arr = num.toString().split("");
    for (let i = 0; i < arr.length; i++) {
        map[Number(arr[i])] = i;
    }
    console.log(map)
    for (let i = 0; i < arr.length; i++) {
        let n = Number(arr[i])
        console.log(n)
        for (let j = 9; j > n; j--) {
            if (map[j] > i) {
                [arr[i], arr[map[j]]] = [arr[map[j]], arr[i]]
                return Number(arr.join(""));
            }
        }
    }
    return num

};

console.log(maximumSwap(27936))

//? Input: num = 27936
//? Output: 97236
//? Explanation: Swap the number 2 and the number 7.

//? Input: num = 9973
//? Output: 9973
//? Explanation: No swap.
