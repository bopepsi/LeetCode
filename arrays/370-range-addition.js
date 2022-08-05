const getModifiedArr = (length, updates) => {
    
    let arr = Array(length).fill(0);

    for (let i = 0; i < updates.length; i++) {
        console.log(updates[i]);
        for (let j = updates[i][0]; j <= updates[i][1]; j++) {
            arr[j] = arr[j] + updates[i][2];
        }
    }

    return arr;
}

let length = 5, updates = [[1, 3, 2], [2, 4, 3], [0, 2, -2]];

console.log(getModifiedArr(length, updates));