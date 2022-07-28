/**
 * @param {number} n
 * @return {number}
 */
var nextGreaterElement = function (n) {

    let s = [];
    n = n.toString().split('').map(e => Number(e));

    for (let i = n.length - 1; i >= 0; i--) {

        if (s.length > 0 && n[i] < s[s.length - 1]) {
            s.push(n[i]);

            for (let j = 0; j < s.length; j++) {
                if (s[j] > n[i]) {
                    [s[s.length - 1], s[j]] = [s[j], s[s.length - 1]];
                    break;
                }
            }
            let ans = Number(n.slice(0, i).join('') + s.pop() + s.slice(0, s.length).join(''));
            if (ans < 1 || ans > Math.pow(2, 31) - 1) return -1;
            return ans;

        }
        s.push(n[i]);
    }
    return -1;
};

//* X X 2 4 3 2 1
//* 1 2 3 4 2

console.log(nextGreaterElement(2147483486))