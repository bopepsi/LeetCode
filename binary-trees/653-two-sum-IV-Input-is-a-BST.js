//* Given the root of a Binary Search Tree and a target number k, return true if there exist two elements in the BST such that their sum is equal to the given target.

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
 * @param {number} k
 * @return {boolean}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var findTarget = function (root, k) {

    let map = {};
    let queue = [root];

    while (queue.length > 0) {
        let l = queue.length;
        for (let i = 0; i < l; i++) {
            let node = queue.shift();
            map[node.val] = true;
            if (node.right) queue.push(node.right);
            if (node.left) queue.push(node.left);
        }
    }

    let ks = Object.keys(map).sort((a, b) => a - b);

    let l = 0, r = ks.length - 1;
    while (l < r) {
        let currSum = Number(ks[l]) + Number(ks[r]);
        if (currSum === k) return true;
        if (currSum > k) {
            r--;
        } else {
            l++;
        }
    }

    return false;

};

var findTargetV2 = function (root, k) {

    let map = {};
    const helper = (node) => {
        if (!node) return false;
        let target = k - node.val;
        if (map[target]) return true;
        map[node] = true;
        return helper(node.left) || helper(node.right)
    }
    return helper(root)

};
