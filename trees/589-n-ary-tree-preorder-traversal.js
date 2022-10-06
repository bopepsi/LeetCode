//* Given the root of an n - ary tree, return the preorder traversal of its nodes' values.
//* Nary - Tree input serialization is represented in their level order traversal.Each group of children is separated by the null value(See examples)

/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {

    let arr = [];
    
    var trav = (node) => {
        if (!node) return;

        arr.push(node.val)
        for (const ele of node.children) {
            trav(ele)
        }
    }

    trav(root);
    return arr;

};

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]