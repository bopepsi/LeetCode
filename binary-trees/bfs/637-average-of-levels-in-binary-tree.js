//* Given the root of a binary tree, return the average value of the nodes on each level in the form of an array.Answers within 10 - 5 of the actual answer will be accepted.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {number[]}
 */

//* 一层一层看
var averageOfLevels = function (root) {

    let res = [];
    let queue = [root];

    while (queue.length > 0) {
        let size = queue.length;
        let sum = 0;
        for (let i = 0; i < size; i++) {
            let currNode = queue.shift();
            sum += currNode.val;
            if (currNode.left) queue.push(currNode.left);
            if (currNode.right) queue.push(currNode.right);
        }
        res.push(sum / size);
    }

    return res;

};

//? Input: root = [3,9,20,null,null,15,7]
//? Output: [3.00000,14.50000,11.00000]
//? Explanation: The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11.
//? Hence return [3, 14.5, 11].