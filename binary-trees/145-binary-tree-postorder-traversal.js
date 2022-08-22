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
var postorderTraversal = function (root) {

    if (!root) return [];
    let ans = [];

    const trav = node => {
        if (!node) return;
        if (node.left) trav(node.left);
        if (node.right) trav(node.right);
        ans.push(node.val);
    };

    trav(root);

    return ans;

};

//? Input: root = [1,null,2,3]
//? Output: [3,2,1]

//? Input: root = []
//? Output: []

//? Input: root = [1]
//? Output: [1]