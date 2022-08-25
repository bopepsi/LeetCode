/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    
    const getDist = (a, b) => {
        let x = b[0] - a[0];
        let y = b[1] - a[1];
        return x * x + y * y;
    };

    let ans = 0;

    for (let i = 0; i < points.length; i++) {
        let curr = points[i];
        let map = {};       //* distance: number of points that have the same distance to point i.
        for (let j = 0; j < points.length; j++) {
            let float = points[j];
            let dist = getDist(curr, float);
            if (map[dist]) map[dist]++;
            else map[dist] = 1;
        };
        for (let k in map) {
            ans = ans + map[k] * (map[k] - 1);
        }
        console.log(map)
    }

    return ans;

};

const points = [[0, 0], [1, 0], [2, 0]];
console.log(numberOfBoomerangs(points))

//? Input: points = [[0,0],[1,0],[2,0]]
//? Output: 2
//? Explanation: The two boomerangs are [[1,0],[0,0],[2,0]] and [[1,0],[2,0],[0,0]].

//? Input: points = [[1,1],[2,2],[3,3]]
//? Output: 2

//? Input: points = [[1,1]]
//? Output: 0