// 617. Merge Two Binary Trees
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
// Depth First Search + Tres
var mergeTrees = function (root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;
    root1.val += root2.val;
    root1.left = mergeTrees(root1.left, root2.left);
    root1.right = mergeTrees(root1.right, root2.right);
    return root1;
};



// 116. Populating Next Right Pointers in Each Node
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// Linked List + Tree
var connect = function (root) {
    if (!root) return root;
    let queue = [root];
    let counter = 0;
    while (queue.length !== 0) {
        let count = Math.pow(2, counter);
        let prev = queue.shift();
        if (prev.left) {
            for (var i = 0; i < count; i++) {
                prev.left.next = prev.right;
                prev.right.next = prev.next ? prev.next.left : null;
            }
            queue.push(prev.left);
            queue.push(prev.right);
        }
        console.log(queue);
        console.log(count);
        counter++;
    }
    return root;
};

var connect = function (root) {
    let result = root;
    while (root && root.left) {
        let temp = root;
        while (temp) {
            temp.left.next = temp.right;
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;
        }
        root = root.left;
    }
    return result;
};



