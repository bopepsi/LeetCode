const lowerBound = (val, arr) => {
    let l = 0;
    let r = arr.length;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] >= val) r = mid;
        else l = mid + 1;
    }
    return l;
}

const upperBound = (val, arr) => {
    let l = 0;
    let r = arr.length;
    while (l < r) {
        let mid = Math.floor((l + r) / 2);
        if (arr[mid] > val) r = mid;
        else l = mid + 1;
    }
    return l;
}

console.log(lowerBound(5, [1, 2, 3, 5, 5, 5, 6, 7]));
console.log(upperBound(5, [1, 2, 3, 5, 5, 5, 6, 7]));