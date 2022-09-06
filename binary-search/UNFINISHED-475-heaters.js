/**
 * @param {number[]} houses
 * @param {number[]} heaters
 * @return {number}
 */
var findRadius = function (houses, heaters) {

    const findNearest = (house, heaters) => {
        let l, r;
        for (let i = 0; i < heaters.length; i++) {
            if (house >= heaters[i]) {
                l = i;
            };
        }
        for (let i = 0; i < heaters.length; i++) {
            if (house < heaters[i]) {
                r = i;
                break;
            };
        }
        return Math.min(heaters[l] ? (house - heaters[l]) : Infinity, heaters[r] ? (heaters[r] - house) : Infinity);
    }
    let res = -Infinity;
    for (let i = 0; i < houses.length; i++) {
        let curr = findNearest(houses[i], heaters);
        res = Math.max(curr, res);
    }
    return res;

};

const houses = [1, 2, 3], heaters = [2]
console.log(findRadius(houses, heaters));

//? Input: houses = [1,2,3], heaters = [2]
//? Output: 1
//? Explanation: The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.

//? Input: houses = [1,2,3,4], heaters = [1,4]
//? Output: 1
//? Explanation: The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.

//? Input: houses = [1,2,3,4,5], heaters = [2]
//? Output: 3