//todo Given a linked list, swap every two adjacent nodes and return its head.You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

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
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let l1 = head, l2 = head.next, l3 = l2.next;
    l2.next = l1;
    l1.next = swapPairs(l3);
    return l2;
};

//?     Input: head = [1, 2, 3, 4]
//?     Output: [2, 1, 4, 3]

//?     Input: head = []
//?     Output: []

//?     Input: head = [1]
//?     Output: [1]


var swapPairsS2 = function (head) {
    // Store head to return list, Only instance of new data so space is O(1)
    let dummy = new ListNode(-1);
    dummy.next = head;
    let prev = dummy
    // Traverse list
    while (head && head.next) {
        // Declare
        let n1 = head
        let n2 = head.next
        // Swap
        prev.next = n2
        n1.next = n2.next
        n2.next = n1
        // Assign
        prev = n1
        head = n1.next
    }
    // The variable prev has been used to create the dummy list. dummy.next is still the head of new list
    return dummy.next;
};