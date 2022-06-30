//todo Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0])

    if (!intervals.length) return intervals
    intervals.sort((a, b) => a[0] - b[0])
    let res = [intervals[0]]
    let j = 0
    for (let i = 1; i < intervals.length; i++) {
        if (res[j][1] >= intervals[i][0]) {
            res[j][1] = Math.max(res[j][1], intervals[i][1])
        } else {
            res.push(intervals[i])
            j++
        }
    }
    return res

};

//?     Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//?     Output: [[1,6],[8,10],[15,18]]
//?     Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

//?     Input: intervals = [[1,4],[4,5]]
//?     Output: [[1,5]]
//?     Explanation: Intervals [1,4] and [4,5] are considered overlapping.

console.log(merge([[1, 4], [0, 2], [3, 5]]))