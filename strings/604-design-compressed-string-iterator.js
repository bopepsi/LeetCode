let str;
let index;
let curr;
let count;

function initStr(inputStr) {
    str = inputStr;
    curr = '';
    index = 0;
    count = 0;
}

function next() {

    if (!hasNext()) return '';

    if (count == 0) curr = str[index];
    index++;

    while (index < str.length && !isNaN(str[index])) {
        count = count * 10 + Number(str[index]);
        index++;
    }
    count--;

    return curr;

}

function hasNext() {
    return index < str.length || count > 0;
}

// Input
// ["StringIterator", "next", "next", "next", "next", "next", "next", "hasNext", "next", "hasNext"]
// [["L1e2t1C1o1d1e1"], [], [], [], [], [], [], [], [], []]
// Output
// [null, "L", "e", "e", "t", "C", "o", true, "d", true]

// Explanation
// StringIterator stringIterator = new StringIterator("L1e2t1C1o1d1e1");
// stringIterator.next(); // return "L"
// stringIterator.next(); // return "e"
// stringIterator.next(); // return "e"
// stringIterator.next(); // return "t"
// stringIterator.next(); // return "C"
// stringIterator.next(); // return "o"
// stringIterator.hasNext(); // return True
// stringIterator.next(); // return "d"
// stringIterator.hasNext(); // return True