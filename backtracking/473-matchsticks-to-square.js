/**
 * @param {number[]} matchsticks
 * @return {boolean}
 */
var makesquare = function (matchsticks) {

    let sticks = matchsticks.sort((a, b) => b - a);
    console.log(sticks);

    let total = sticks.reduce((p, c) => p + c, 0);
    if (total % 4 !== 0) return false;
    let side = total / 4;
    console.log(side)

    let sums = Array(4).fill(0);

    const dfs = (index, sums) => {
        console.log(sums);
        if (index === sticks.length - 1) {
            if (sums[0] === side && sums[1] === side && sums[2] === side)
                return true;
            else
                return false;
        }
        let num = sticks[index];
        for (let i = 0; i < 4; i++) {
            if (sums[i] + num > side) continue;
            sums[i] += num;
            if (dfs(index + 1, sums)) return true;
            sums[i] -= num;
        }
        return false;
    }

    return dfs(0, sums);

};

const matchsticks = [1, 1, 2, 2, 2];
console.log(makesquare(matchsticks));

//? Input: matchsticks = [1, 1, 2, 2, 2]
//? Output: true
//? Explanation: You can form a square with length 2, one side of the square came two sticks with length 1.

//? Input: matchsticks = [3, 3, 3, 3, 4]
//? Output: false
//? Explanation: You cannot find a way to form a square with all the matchsticks.