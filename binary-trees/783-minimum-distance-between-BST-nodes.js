/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function (root) {

    let vals = [];

    const trav = node => {
        if (!node) return;
        trav(node.left);
        vals.push(node.val);
        trav(node.right);
    };

    trav(root);
    let min = Infinity;
    for (let i = 1; i < vals.length; i++) {
        min = Math.min((vals[i] - vals[i - 1]), min);
    };
    return min;

};

//? Input: root = [4,2,6,1,3]
//? Output: 1

//? Input: root = [1,0,48,null,null,12,49]
//? Output: 1