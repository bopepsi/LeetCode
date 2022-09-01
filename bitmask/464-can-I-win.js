/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
//* binary arr
var canIWin = function (maxChoosableInteger, desiredTotal) {

    const sum = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
    if (sum < desiredTotal) return false;
    if (desiredTotal <= 0) return true;

    const arr = Array(1 << maxChoosableInteger).fill(0);

    const canWin = (currTotal, state) => {
        if (currTotal <= 0) return false;
        if (arr[state] !== 0) return arr[state] === 1;

        for (let i = 0; i < maxChoosableInteger; i++) {
            if ((state & (1 << i))) continue;
            if (!canWin(currTotal - (i + 1), state | (1 << i))) {
                arr[state] = 1;
                return true;
            }
        }
        arr[state] = -1;
        return false;
    }

    return canWin(desiredTotal, 0);

};

//* map
var canIWinV2 = function (maxChoosableInteger, desiredTotal) {

    const sum = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
    if (sum < desiredTotal) return false;
    if (desiredTotal <= 0) return true;

    const map = {};

    const canWin = (currTotal, state) => {
        console.log(state)
        if (currTotal <= 0) return false;
        if (map[state] !== undefined) return map[state];

        for (let i = 0; i < maxChoosableInteger; i++) {
            if (state & (1 << i)) continue;
            if (!canWin(currTotal - (i + 1), state | (1 << i))) {
                map[state] = true;
                return true;
            }
        }
        map[state] = false;
        return false;
    }

    return canWin(desiredTotal, 0);

};

const maxChoosableInteger = 10, desiredTotal = 11
// Output: true
console.log(canIWinV2(maxChoosableInteger, desiredTotal));

