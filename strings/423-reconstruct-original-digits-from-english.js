/**
 * @param {string} s
 * @return {string}
 */
var originalDigits = function (s) {

    //* zero, one, two, three, four, five, six, seven, eight, nine
    let nums = Array(10).fill(0);
    for (let c of s) {
        if (c === 'z') nums[0]++;   //* 0
        if (c === 'o') nums[1]++;   //* 1 - 0 - 2 - 4
        if (c === 'w') nums[2]++;   //* 2
        if (c === 't') nums[3]++;   //* 3 - 8 - 2
        if (c === 'u') nums[4]++;   //* 4
        if (c === 'f') nums[5]++;   //* 5 - 4
        if (c === 's') nums[6]++;   //* 6 - 7
        if (c === 'v') nums[7]++;   //* 7 - 5
        if (c === 'g') nums[8]++;   //* 8
        if (c === 'i') nums[9]++;   //* 9 - 5 - 6 - 8
    }

    nums[3] -= (nums[8] + nums[2]);
    nums[5] -= nums[4];
    nums[7] -= nums[5];
    nums[6] -= nums[7];
    nums[9] -= (nums[5] + nums[6] + nums[8]);
    nums[1] -= (nums[0] + nums[2] + nums[4]);

    let ans = '';
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < nums[i]; j++) {
            ans = ans + i;
        }
    }
    return ans;

};

let s = "owoztneoer";
console.log(originalDigits(s));

//? Input: s = "owoztneoer"
//? Output: "012"

//? Input: s = "fviefuro"
//? Output: "45"