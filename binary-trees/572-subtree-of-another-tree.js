//* Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure and node values of subRoot and false otherwise.

//* A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree tree could also be considered as a subtree of itself.

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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

//* Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//* https://www.youtube.com/watch?v=Th49uUEvlwE
var isSubtree = function (root, subRoot) {

    const checkEqual = (n1, n2) => {
        if (n1 == null && n2 == null) return true;
        if (n1 == null || n2 == null) return false;
        if (n1.val != n2.val) return false;
        return checkEqual(n1.left, n2.left) && checkEqual(n1.right, n2.right);
    }

    if (!root) return false;
    if (!subRoot) return true;

    if (root.val == subRoot.val) {
        if (checkEqual(root, subRoot)) return true;
    }

    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);

};