/**
 * @param {number} n
 * @return {number}
 */

var nthUglyNumber = function (n) {
    let p2 = 0, p3 = 0, p5 = 0;
    let stack = [1];
    while (stack.length < n) {
        let temp = Math.min(stack[p2] * 2, stack[p3] * 3, stack[p5] * 5);
        stack.push(temp);

        if (temp === stack[p2] * 2) p2++;
        if (temp === stack[p3] * 3) p3++;
        if (temp === stack[p5] * 5) p5++;
    }

    return stack[n - 1];
};

var nthUglyNumberV2 = function (n) {
    let stack = [2, 3, 5];
    let ans = [1, 2, 3, 5];

    let factors = [2, 3, 5];

    let count = 0

    while (count <= n) {

        let num = Math.min(...stack);

        stack = stack.filter(e => e !== num);

        for (const ele of factors) {

            let temp = num * ele;

            if (!ans.includes(temp)) {
                ans.push(num * ele);
            }
            if (!stack.includes(temp)) {
                stack.push(num * ele);
            }
        }
        count++;
    }

    ans.sort((a, b) => a - b);
    return ans[n - 1];
};

console.log(nthUglyNumber(87));

//* 1 <= n <= 1690

//? Input: n = 10
//? Output: 12
//? Explanation: [1, 2, 3, 4, 5, 6, 8, 9, 10, 12] is the sequence of the first 10 ugly numbers.

//? Input: n = 1
//? Output: 1
//? Explanation: 1 has no prime factors, therefore all of its prime factors are limited to 2, 3, and 5.