//todo Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];
    let queue = [], ans = [], node;
    let curr = root;
    queue.push([curr, 0]);

    while (queue.length !== 0) {
        const [node, level] = queue.shift();

        ans[level] = ans[level] ? ans[level] : [];

        ans[level].push(node.val);

        node.left && queue.push([node.left, level + 1]);

        node.right && queue.push([node.right, level + 1]);

    }
    return ans;
};

//?     Input: root = [3,9,20,null,null,15,7]
//?     Output: [[3],[9,20],[15,7]]

//?     Input: root = [1]
//?     Output: [[1]]

//?     Input: root = []
//?     Output: []