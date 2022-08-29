/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {

    g = g.sort((a, b) => b - a);
    s = s.sort((a, b) => b - a);

    let ans = 0;
    while (s.length > 0) {

        let child = g[g.length - 1];
        let lvl = s[s.length - 1];

        if (lvl >= child) {
            ans++;
            g.pop();
            s.pop();
        } else {
            s.pop();
        }

    }
    return ans;

};

const g = [2, 1], s = [1, 2, 3];
console.log(findContentChildren(g, s));

//* 10 9 8 7
//*  8 7 6 5

//? Input: g = [1,2,3], s = [1,1]
//? Output: 1
//? Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. 
//? And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
//? You need to output 1.

//? Input: g = [1,2], s = [1,2,3]
//? Output: 2
//? Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. 
//? You have 3 cookies and their sizes are big enough to gratify all of the children, 
//? You need to output 2.