/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {

    let dummy = new ListNode(0);
    let ans = dummy;

    let sum = 0;

    while (l1 || l2) {
        if (l1) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        dummy.next = new ListNode(sum % 10);
        dummy = dummy.next;
        sum = (sum > 10) ? 1 : 0;
    };

    if (sum) {
        dummy.next = new ListNode(sum);
    };

    return ans.next();

};

//* dummy
//*   | 
//*   0 --> node --> node --> node 
//*   |         |
//*  curr       |
//*           curr
//* return dummy.next as result

//? Input: l1 = [2,4,3], l2 = [5,6,4]
//? Output: [7,0,8]
//? Explanation: 342 + 465 = 807.

//? Input: l1 = [0], l2 = [0]
//? Output: [0]

//? Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//? Output: [8,9,9,9,0,0,0,1]
