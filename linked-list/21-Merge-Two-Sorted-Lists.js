//todo You are given the heads of two sorted linked lists list1 and list2.
//todo Merge the two lists in a one sorted list.The list should be made by splicing together the nodes of the first two lists.
//todo Return the head of the merged linked list.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoListsRecursive = function (list1, list2) {
    if (!list1 || !list2) return list1 ? list1 : list2;
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    else {
        list2.next = mergeTwoLists(list2.next, list1);
        return list2;
    }
};

var mergeTwoLists = function (l1, l2) {
    let temp = { val: -1, next: null }
    let curr = temp;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            curr.next = l1;
            l1 = l1.next;
        } else {
            curr.next = l2;
            l2 = l2.next;
        }
        curr = curr.next;
    }
    curr.next = l1 ? l1 : l2;
    return temp.next;
};

//?     Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
//?     Output: [1, 1, 2, 3, 4, 4]

//?     Input: list1 = [], list2 = []
//?     Output: []

//?     Input: list1 = [], list2 = [0]
//?     Output: [0]