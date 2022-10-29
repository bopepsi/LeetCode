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

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var widthOfBinaryTree = function (root) {

    function TreeIndex(node, index) {
        this.node = node;
        this.index = index;
    }

    let maxWidth = 0;
    let rootNode = new TreeIndex(root, BigInt(0))
    let queue = [rootNode];

    let two = BigInt(2)
    let one = BigInt(1)

    while (queue.length > 0) {
        let size = queue.length;
        let startIndex = BigInt(-1);
        let tailIndex = BigInt(-1);

        for (let i = 0; i < size; i++) {
            let treeNodeIndex = queue.shift();
            let treeNode = treeNodeIndex.node;
            let index = treeNodeIndex.index;

            if (i == 0) {
                startIndex = index;
            }
            tailIndex = index;

            if (treeNode.left !== null) {
                let left = new TreeIndex(treeNode.left, index * two);
                queue.push(left);
            }
            if (treeNode.right !== null) {
                let right = new TreeIndex(treeNode.right, index * two + one);
                queue.push(right)
            }
        }
        maxWidth = Math.max(Number(maxWidth), Number(tailIndex - startIndex + one));
    }

    return maxWidth

};

//? Input: root = [1,3,2,5,3,null,9]
//? Output: 4
//? Explanation: The maximum width exists in the third level with length 4 (5,3,null,9).

//? Input: root = [1,3,2,5,null,null,9,6,null,7]
//? Output: 7
//? Explanation: The maximum width exists in the fourth level with length 7 (6,null,null,null,null,null,7).

//? Input: root = [1,3,2,5]
//? Output: 2
//? Explanation: The maximum width exists in the second level with length 2 (3,2).
