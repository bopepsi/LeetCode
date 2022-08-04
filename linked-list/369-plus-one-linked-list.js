//* Given a non-negative integer represented as a linked list of digits, plus one to the integer.
//todo The digits are stored such that the most significant digit is at the head of the list.


const plusOne = head => {
    let dummy = new Node();
    dummy.next = head;
    notNine = dummy;

    while (head !== null) {
        if (head.val != 9) {
            notNine = head;
        }
        head = head.next;
    }

    notNine.val++;
    let nine = notNine.next;
    while(nine!==null){
        nine.val = 0;
        nine = nine.next;
    }

    return dummy.val != 0 ? dummy : dummy.next;

}

//* dummy -> 1 -> 2 -> 3
//* dummy -> 1 -> 2 -> 4

//* dummy -> 1 -> 2 -> 3 -> 9 -> 9
//* dummy -> 1 -> 2 -> 4 -> 9 -> 9
//* dummy -> 1 -> 2 -> 4 -> 0 -> 0

//* dummy -> 9 -> 9 -> 9
//*     1 -> 9 -> 9 -> 9

//? Input: head = [1,2,3]
//? Output: [1,2,4]

//? Input: head = [0]
//? Output: [1]