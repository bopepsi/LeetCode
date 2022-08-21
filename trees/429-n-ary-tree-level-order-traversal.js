/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {

    if (!root) return [];

    let queue = [root];
    let ans = [];

    while (queue.length > 0) {

        let size = queue.length;
        let temp = [];

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();
            temp.push(curr.val);
            for (let node of curr.children) {
                queue.push(node);
            }
        }

        ans.push(temp);

    }

    return ans;

};

const root = [1, null, 3, 2, 4, null, 5, 6];


//? Input: root = [1,null,3,2,4,null,5,6]
//? Output: [[1],[3,2,4],[5,6]]

//? Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
//? Output: [[1],[2,3,4,5],[6,7,8,9,10],[11,12,13],[14]]