/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

var generateTrees = function (n) {

    const helper = (start, end) => {

        let list = [];
        if (start > end) {
            list.push(null);
            return list;
        }
        for (let i = start; i <= end; i++) {
            let leftNodes = helper(start, i - 1);
            let rightNodes = helper(i + 1, end);
            
            for (const left of leftNodes) {
                for (const right of rightNodes) {
                    let root = new TreeNode(i, left, right);

                    list.push(root);
                }
            }
        }

        return list;
    };

    return helper(1, n);
};

console.log(generateTrees(3));

//* 1 2 3 4 5