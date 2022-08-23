/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {

    //* sort by second num in pair
    let arrs = intervals.sort((a, b) => a[1] - b[1]);
    console.log(arrs);
    let head = arrs[0];

    let ans = 0;
    for (let i = 1; i < arrs.length; i++) {
        //* ruo guo
        if (arrs[i][0] < head[1]) {
            ans++;
        } else {
            head = arrs[i];
        }
    };

    return ans;

};

let intervals = [[1, 100], [11, 22], [1, 11], [2, 12]]
console.log(eraseOverlapIntervals(intervals));

//* [1,3]   1->2       a[1]
//* [2,5]   1->2->3    b[0]
//* [5,7]      2->3
//* [7,9]         3->4

//* [1, 11]
//* [2, 12]
//* [11, 22]
//* [1, 100]

//* 1  2  3  4  5  6  7  8  9 
//*       /     /    /     /


//? Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
//? Output: 1
//? Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

//? Input: intervals = [[1,2],[1,2],[1,2]]
//? Output: 2
//? Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

//? Input: intervals = [[1,2],[2,3]]
//? Output: 0
//? Explanation: You don't need to remove any of the intervals since they're already non-overlapping.