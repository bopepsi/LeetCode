/**
 * @param {number} n
 * @return {number}
 */
var lastRemaining = function (n) {

    let head = 1;
    let step = 1;
    let remain = n;
    let atLeft = true;

    while (remain !== 1) {
        if (atLeft || remain % 2 !== 0) {
            head += step;
        }
        step *= 2;
        remain = Math.floor(remain / 2);
        atLeft = !atLeft;
    }

    return head;

};

console.log(lastRemaining(9));

//? Input: n = 9
//? Output: 6
//? Explanation:
//? arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//? arr = [2, 4, 6, 8]
//? arr = [2, 6]
//? arr = [6]

//* 1 2 3 4 5 6 7 8 9 head: 1, step: 1, remain: 9
//*   2   4   6   8   head: 2, step: 2, remain: 4
//*   2       6       head: 2, step: 4, remain: 2
//*           6       head: 6, step: 4, remain: 1

//* 1 2 3 4 5 6 7 8 9 10   head: 1, step: 1, remain: 9
//*   2   4   6   8   10   head: 2, step: 2, remain: 5
//*       4       8        head: 2, step: 4, remain: 2
//*               8        head: 6, step: 4, remain: 1