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
var sumNumbers = function (root) {

    if (!root) return 0;

    let ans = 0;
    const helper = (node, val) => {
        if (!node) return;
        if (!node.left && !node.right) {
            return ans = ans + val * 10 + node.val;
        }

        helper(node.left, val * 10 + node.val);
        helper(node.right, val * 10 + node.val);

    }
    helper(root, 0);
    return ans;
};