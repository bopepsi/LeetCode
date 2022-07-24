/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {

    const eat = (piles, mid) => {
        let t = 0;
        for (const ele of piles) {
            if (ele % mid === 0) {
                t += ele / mid;
            } else {
                t += (Math.floor(ele / mid) + 1);
            }
        }
        console.log(t);
        return t;
    }

    let l = 1;
    let r = Math.max(...piles) + 1;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        console.log(mid)
        if (eat(piles, mid) <= h) {
            r = mid;
        } else {
            l = mid + 1;
        }
    }
    return l;
};

let piles = [3, 6, 7, 11], h = 8

console.log(minEatingSpeed(piles, h))