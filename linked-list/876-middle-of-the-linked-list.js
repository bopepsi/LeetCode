//todo Given the head of a singly linked list, return the middle node of the linked list.
//* If there are two middle nodes, return the second middle node.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let result = head;
    let end = head;
    while (end !== null) {
        end = end.next;
        if (end === null) {
            break;
        } else end = end.next;
        result = result.next;
    };
    return result;
};

//?     Input: head = [1,2,3,4,5]
//?     Output: [3,4,5]
//?     Explanation: The middle node of the list is node 3.

//?     Input: head = [1,2,3,4,5,6]
//?     Output: [4,5,6]
//?     Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.