//todo You are given an array of k linked - lists lists, each linked - list is sorted in ascending order.
//? Merge all the linked - lists into one sorted linked - list and return it.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeTwoList = function (l1, l2) {
    let temp = { val: -1, next: null };
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
}

var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    //* priority queue
    while (lists.length > 1) {
        let l1 = lists.shift();
        let l2 = lists.shift();
        const m = mergeTwoList(l1, l2);
        lists.push(m);
    }
    return lists[0];
};

//?     Input: lists = [[1,4,5],[1,3,4],[2,6]]
//?     Output: [1,1,2,3,4,4,5,6]
//?     Explanation: The linked-lists are:
//?         [
//?             1->4->5,
//?             1->3->4,
//?             2->6
//?         ]
//?     merging them into one sorted list:
//?     1->1->2->3->4->4->5->6

//?     Input: lists = []
//?     Output: []

//?     Input: lists = [[]]
//?     Output: []