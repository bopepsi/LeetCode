/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */

//* 拓扑排序 https://www.youtube.com/watch?v=oa6uR2yNG_s
var canFinish = function (numCourses, prerequisites) {

    let indegree = Array(numCourses).fill(0);
    for (let i = 0; i < prerequisites.length; i++) {
        let curr = prerequisites[i][0];
        indegree[curr]++;
    }
    let queue = [];
    for (let j = 0; j < numCourses; j++) {
        if (indegree[j] === 0) queue.push(j);
    }

    while (queue.length > 0) {
        let c = queue.pop();
        for (let pair of prerequisites) {
            if (indegree[pair[0]] === 0)
                continue;
            if (pair[1] === c)
                indegree[pair[0]]--;
            if (indegree[pair[0]] === 0)
                queue.push(pair[0]);
        }
    }

    console.log(indegree)
    for (let count of indegree) {
        if (count !== 0) return false;
    }

    return true;

};

const numCourses = 2, prerequisites = [[1, 0]];
console.log(canFinish(numCourses, prerequisites))

//? Input: numCourses = 2, prerequisites = [[1,0]]
//? Output: true
//? Explanation: There are a total of 2 courses to take. 
//? To take course 1 you should have finished course 0. So it is possible.

//? Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
//? Output: false
//? Explanation: There are a total of 2 courses to take. 
//? To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.