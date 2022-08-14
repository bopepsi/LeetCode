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
var sumOfLeftLeaves = function (root) {

    let ans = 0;

    const trav = (node, isLeft) => {

        if (!node) return;
        if (!node.left && !node.right && isLeft) ans += node.val;
        trav(node.left, true);
        trav(node.right);

    }

    trav(root);
    return ans;

};

//? Input: root = [3,9,20,null,null,15,7]
//? Output: 24
//? Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.