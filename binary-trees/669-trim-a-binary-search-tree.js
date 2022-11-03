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
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */

//* Recursion
//* Check node val, bottom up rebuild binary search tree
var trimBST = function (root, low, high) {

    if (root == null) return root;
    
    if (root.val >= low && root.val <= high) {
        root.left = trimBST(root.left, low, high);
        root.right = trimBST(root.right, low, high);
    } else {
        if (root.val > high) {
            root = trimBST(root.left, low, high);
        } else {
            root = trimBST(root.right, low, high);
        }
    }

    return root;

};

//? Input: root = [1,0,2], low = 1, high = 2
//? Output: [1,null,2]

//? Input: root = [3,0,4,null,2,null,null,1], low = 1, high = 3
//? Output: [3,2,null,1]
