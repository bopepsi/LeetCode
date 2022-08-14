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
var connect = function (root) {

    let curr = root;

    while (curr && curr.left) {
        let temp = curr;

        while (temp) {
            temp.left.next = temp.right;
            temp.right.next = temp.next ? temp.next.left : null;
            temp = temp.next;
        }

        curr = curr.left;
    }

    return root;

};

var connectV2 = function (root) {
    if (!root) return root;
    let queue = [root];

    while (queue.length !== 0) {

        let prev = queue.shift();
        if (prev.left) {
            prev.left.next = prev.right;
            prev.right.next = prev.next ? prev.next.left : null;
            queue.push(prev.left);
            queue.push(prev.right);
        }
        console.log(queue);
        console.log(count);

    }
    return root;
};


//? Input: root = [1,2,3,4,5,6,7]
//? Output: [1,#,2,3,#,4,5,6,7,#]
//? Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.