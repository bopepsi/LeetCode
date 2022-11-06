//* Given a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly two or zero sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. More formally, the property root.val = min(root.left.val, root.right.val) always holds.

//* Given such a binary tree, you need to output the second minimum value in the set made of all the nodes' value in the whole tree.
//* If no such second minimum value exists, output -1 instead.


/**
 * @param {TreeNode} root
 * @return {number}
 */
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

//* bfs
var findSecondMinimumValue = function (root) {

    let queue = [root];
    let nums = [];
    while (queue.length > 0) {
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            let node = queue.pop();
            if (node.left) {
                queue.push(node.left, node.right);
            }
            nums.push(node.val);
        }
    }

    let min = Math.min(...nums);
    nums.sort((a, b) => a - b);

    for (const n of nums) {
        if (n > min) return n;
    }
    return -1;

};

//* recursion
var findSecondMinimumValue = function (root) {

    if (root.left == null || root.right == null) return -1;

    if (root.left.val == root.right.val) {
        let left = findSecondMinimumValue(root.left);
        let right = findSecondMinimumValue(root.right);
        if (left != -1 && right != -1) {
            return Math.min(left, right);
        }
        return left == -1 ? right : left;
    }

    if (root.left.val > root.val) {
        let right = findSecondMinimumValue(root.right);
        if (right == -1) {
            return root.left.val;
        }
        return Math.min(root.left.val, right);
    }

    if (root.right.val > root.val) {
        let left = findSecondMinimumValue(root.left);
        if (left == -1) {
            return root.right.val;
        }
        return Math.min(left, root.right.val);
    }

    return -1;

};
