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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    if (!root) return [];
    let ans = [];

    const trav = node => {
        if (!node) return;
        ans.push(node.val);
        trav(node.left);
        trav(node.right);
    };

    trav(root);
    return ans;
};