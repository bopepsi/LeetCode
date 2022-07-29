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
var reverseList = function (head) {

    if (!head || !head.next) return head;

    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return p;

    //* 1 -> 2 -> 3 -> 4
    //* 4 -> 3 -> null
    //* 4 -> 3 -> 2 -> null

};

var reverseListV2 = function (head) {
    let curr = head;
    let prev = null;
    while (curr) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

//* 1 -> 2
//? Input: head = [1,2,3,4,5]
//? Output: [5,4,3,2,1]