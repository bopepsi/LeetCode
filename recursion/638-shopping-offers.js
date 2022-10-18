/**
 * @param {number[]} price
 * @param {number[][]} special
 * @param {number[]} needs
 * @return {number}
 */
var shoppingOffers = function (price, special, needs) {

    let map = new Map();

    const helper = (p, s, n) => {
        
        let strNeeds = n.toString();
        if (map.has(strNeeds)) return map.get(strNeeds);

        let noSpecialTotal = 0;
        for (let i = 0; i < p.length; i++) {
            noSpecialTotal += (p[i] * n[i]);
        }

        for (const spe of s) {
            let currNeed = [...n];
            let i = 0;
            for (i; i < currNeed.length; i++) {
                let afterSpe = currNeed[i] - spe[i];
                if (afterSpe < 0) break;
                currNeed[i] = afterSpe;
            }

            if (i === currNeed.length) {
                noSpecialTotal = Math.min(noSpecialTotal, spe[i] + helper(p, s, currNeed));
            }
        }

        map.set(strNeeds, noSpecialTotal)
        return noSpecialTotal;
    }

    
    return helper(price, special, needs);

};

const price = [2, 5], special = [[3, 0, 5], [1, 2, 10]], needs = [3, 2];
console.log(shoppingOffers(price, special, needs))

//? Input: price = [2,5], special = [[3,0,5],[1,2,10]], needs = [3,2]
//? Output: 14
//? Explanation: There are two kinds of items, A and B. Their prices are $2 and $5 respectively. 
//? In special offer 1, you can pay $5 for 3A and 0B
//? In special offer 2, you can pay $10 for 1A and 2B. 
//? You need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.

//? Input: price = [2,3,4], special = [[1,1,0,4],[2,2,1,9]], needs = [1,2,1]
//? Output: 11
//? Explanation: The price of A is $2, and $3 for B, $4 for C. 
//? You may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C. 
//? You need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C. 
//? You cannot add more items, though only $9 for 2A ,2B and 1C.
