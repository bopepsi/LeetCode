const validWordSquare = words => {

    let r = words.length;
    let c = words[0].length;
    if (r !== c) return false;

    for (let i = 0; i < c; i++) {
        for (let j = i; j < r; j++) {
            let h = words[j][i];
            let v = words[i][j];
            console.log(h, v);
            if (h !== v) return false;
        }
    };
    return true;
    
}

const input = [
    "abcd",
    "bnrt",
    "crm",
    "dt"
];

console.log(validWordSquare(input));

//? Input:
//? [
//?   "abcd",
//?   "bnrt",
//?   "crm",
//?   "dt"
//? ]
//? Output:
//? true
//? Explanation:
//? The first row and first column both read "abcd".
//? The second row and second column both read "bnrt".
//? The third row and third column both read "crm".
//? The fourth row and fourth column both read "dt".
//? Therefore, it is a valid word square.

//? Input:
//? [
//?   "ball",
//?   "area",
//?   "read",
//?   "lady"
//? ]
//? Output:
//? false
//? Explanation:
//? The third row reads "read" while the third column reads "lead".
//? Therefore, it is NOT a valid word square.