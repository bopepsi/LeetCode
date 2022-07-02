function reverse(str) {
    if (str.length === 1) return str;
    return reverse(str.slice(1)) + str[0]
}

//?     reverse('awesome') 
//?     'emosewa'

//?     reverse('rithmschool') 
//?     'loohcsmhtir'

console.log(reverse('ikr'));

// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false

function isPalindrome(str) {
    let length = str.length;
    if (length === 1) return true;
    if (length === 2) return str[0] === str[1]
    if (str[0] === str[length - 1]) return isPalindrome(str.slice(1, -1));
    return false;
}

//?     isPalindrome('awesome') // false
//?     isPalindrome('foobar') // false
//?     isPalindrome('tacocat') // true
//?     isPalindrome('amanaplanacanalpanama') // true
//?     isPalindrome('amanaplanacanalpandemonium') // false

console.log(isPalindrome('foof'));

const isOdd = num => num % 2 !== 0;
function someRecursive(numArr, callback) {
    if (numArr.length === 0) return false;
    if (callback(numArr[0])) return true;
    someRecursive(numArr.slice(1), callback)
}

//?     someRecursive([1,2,3,4], isOdd) 
//?     true
//?     someRecursive([4,6,8,9], isOdd) 
//?     true
//?     someRecursive([4,6,8], isOdd) 
//?     false
//?     someRecursive([4,6,8], val => val > 10); 
//?     false

console.log(someRecursive([1, 2, 3, 4], isOdd));

function flatten(arr) {
    let newArr = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            newArr = newArr.concat(flatten(item))
        } else {
            newArr.push(item);
        }
    }
    return newArr;
}

//?     flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
//?     flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
//?     flatten([[1],[2],[3]]) // [1,2,3]
//?     flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

console.log(flatten([1, [2, [3, 4], [[5]]]]));

function capitalizeFirst(arr) {
    let result = [];
    const helper = arr => {
        if (arr.length === 0) return
        let newItem = arr[0].split('');
        newItem[0] = newItem[0].toUpperCase();
        newItem = newItem.join('');
        result.push(newItem);
        helper(arr.slice(1))
    }
    helper(arr);
    return result;
}

//?     capitalizeFirst(['car','taco','banana']); 
//?     ['Car','Taco','Banana']

console.log(capitalizeFirst(['car', 'taco', 'banana']))