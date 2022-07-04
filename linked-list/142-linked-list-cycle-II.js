//todo Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
//* There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
//* Do not modify the linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if (fast == null || fast.next == null) return null;

    fast = head;
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }

    return slow;

};

//?     Input: head = [3,2,0,-4], pos = 1
//?     Output: tail connects to node index 1
//?     Explanation: There is a cycle in the linked list, where tail connects to the second node.

//?     Input: head = [1,2], pos = 0
//?     Output: tail connects to node index 0
//?     Explanation: There is a cycle in the linked list, where tail connects to the first node.

//?     Input: head = [1], pos = -1
//?     Output: no cycle
//?     Explanation: There is no cycle in the linked list.
