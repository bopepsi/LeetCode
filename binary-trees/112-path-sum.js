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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) return false;
    let ans = false;
    const helper = (node, currSum) => {

        if (!node) return;

        let sum;
        if (node) sum = currSum + node.val;

        if (!node.left && !node.right && sum === targetSum) { ans = true; return; }

        if (node.left) {
            helper(node.left, sum);
        };

        if (node.right) {
            helper(node.right, sum);
        };
    }

    helper(root, 0);
    return ans;
};
