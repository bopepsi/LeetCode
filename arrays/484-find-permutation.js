var findPermutation = function (str) {

    let arr = [];
    for (let i = 0; i <= str.length; i++) {
        arr[i] = i + 1;
    }

    var reverse = function (b, e) {
        console.log(b, e)
        while (b < e) {
            [arr[b], arr[e]] = [arr[e], arr[b]];
            b++;
            e--;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] === "I") continue;
        let head = i;
        while (str[i] === "D") {
            i++;
        }
        reverse(head, i)
    }

    return arr;

}

const s = "DIDDI";
console.log(findPermutation(s));


// Input: s = "I"
// Output: [1, 2]
// Explanation: [1, 2] is the only legal permutation that can represented by s, where the number 1 and 2 construct an increasing relationship.

// Input: s = "DI"
// Output: [2,1,3]
// Explanation: Both [2,1,3] and [3,1,2] can be represented as "DI", but since we want to find the smallest lexicographical permutation, you should return [2,1,3]