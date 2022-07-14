//todo Given the root of a binary tree, determine if it is a valid binary search tree (BST).
//? A valid BST is defined as follows:
//* The left subtree of a node contains only nodes with keys less than the node's key.
//* The right subtree of a node contains only nodes with keys greater than the node's key.
//* Both the left and right subtrees must also be binary search trees.

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
 * @return {boolean}
 */
var isValidBST = function (root) {
    let curr = root;
    let queue = [];
    queue.push(curr);
    while (queue.length !== 0) {
        let node = queue.pop();
        if (node.left) {
            if (node.left.val >= node.val) return false;
            queue.push(node.left);
        }
        if (node.right) {
            if (node.right.val <= node.val) return false;
            queue.push(node.right);
        }
    }
    return true;
};

//?     Input: root = [2,1,3]
//?     Output: true

//?     Input: root = [5,1,4,null,null,3,6]
//?     Output: false
//?     Explanation: The root node's value is 5 but its right child's value is 4.