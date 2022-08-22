/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var postorder = function (root) {

    if (!root) return [];
    let ans = [];
    const trav = (node) => {
        if (!node) return;

        let children = node.children;
        for (let n of children) {
            trav(n);
            ans.push(n.val);
        }
    }

    trav(root);
    ans.push(root.val);
    return ans;

};

//? Input: root = [1,null,3,2,4,null,5,6]
//? Output: [5,6,3,2,4,1]

//? Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
//? Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]