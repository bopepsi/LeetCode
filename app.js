// Add Two Nums
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var addTwoNumbers = function (l1, l2) {
    let sum = 0;
    let curr = new ListNode(0);
    let result = curr;
    while (l1 || l2) {
        if (l1) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if (l2) {
            sum = sum + l2.val;
            l2 = l2.next;
        }
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
        sum = (sum >= 10) ? 1 : 0;
    }
    if (sum) {
        curr.next = new ListNode(sum);
    }
    return result.next;
};

l1 = [9, 9, 9, 9, 9, 9, 9, 9];
l2 = [9, 9, 9, 9];

const arrayOfDigits = [1, 2, 3, 4, 5];

const singleNumber = Number(arrayOfDigits.join(''));

console.log(addTwoNumbers(l1, l2));


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
    let start = 0;
    let long = -1;
    let seen = {};
    for (var i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        long = Math.max(long, i + 1 - start)
        seen[char] = i + 1;
    }
    return long;
};



//  LongestPalindrome
/**
 * @param {string} s
 * @return {string}
 */
/*
Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
*/

var longestPalindrome = function (str) {
    const findPalindrome = (start, end, s, palindrome) => {
        while (start >= 0 && end < s.length) {
            if (s[start] === s[end]) {
                palindrome = s[start] + palindrome;
                palindrome = palindrome + s[end];
                start--;
                end++;
                continue;
            }
            break;
        }
        return palindrome;
    }

    let longest = '';
    for (var i = 0; i < str.length; i++) {
        let left = findPalindrome(i - 1, i, str, '');
        let mid = findPalindrome(i - 1, i + 1, str, str[i]);
        let right = findPalindrome(i, i + 1, str, '');

        if (left.length > longest.length) longest = left;
        if (mid.length > longest.length) longest = mid;
        if (right.length > longest.length) longest = right;
    }
    return longest;
};

console.log(longestPalindrome('cbbd'));

// 704. Bianry Search
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor(arr.length / 2);
    while (arr[mid] !== target && left < right) {
        if (arr[mid] > target) right = mid - 1;
        if (arr[mid] < target) left = mid + 1;
        mid = Math.floor((right + left) / 2);
    }
    return arr[mid] === target ? mid : -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 3))

/*
Input: nums = [-1, 0, 3, 5, 9, 12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/



// 278. First Bad Version
/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */
/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let l = 1;
        let r = n;
        let m;
        while (l <= r) {
            m = Math.floor((l + r) / 2);
            if (isBadVersion(m)) {
                if (!isBadVersion(m - 1)) return m;
                r = m - 1;
            } else {
                if (isBadVersion(m + 1)) return m + 1;
                l = m + 1;
            }
        }
    };
};
/*
Input: n = 5, bad = 4
Output: 4
Explanation:
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.
*/



// 35. Search Insert Position
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let m = Math.floor(nums.length / 2);
    if (target <= nums[0]) return 0;
    if (target === nums[nums.length - 1]) return nums.length - 1;
    if (target > nums[nums.length - 1]) return nums.length;
    while (l < r) {
        if (nums[m] === target) return m
        if (nums[m] < target) {
            if (nums[m + 1] > target) return m + 1;
            l = m;
        }
        if (nums[m] > target) {
            if (nums[m - 1] < target) return m;
            r = m;
        }
        m = Math.floor((r + l) / 2);
    }
};


var searchInsert = function (nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (target <= nums[i]) return i;
    }
    return nums.length;
};
/*
Input: nums = [1, 3, 5, 6], target = 5
Output: 2
*/

console.log(searchInsert([1, 3, 5, 9], 99))



// 977. Squares of a Sorted Array
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let squared = nums.map(val => Math.pow(val, 2));
    let length = nums.length;
    let left = 0;
    let right = nums.length - 1;
    let result = [];
    for (var i = length - 1; i >= 0; i--) {
        if (squared[right] > squared[left]) {
            result[i] = squared[right];
            right--;
        } else {
            result[i] = squared[left];
            left++;
        }
    }
    return result;
};
/*
Input: nums = [-4, -1, 0, 3, 10]
Output: [0, 1, 9, 16, 100]
Explanation: After squaring, the array becomes[16, 1, 0, 9, 100].
After sorting, it becomes[0, 1, 9, 16, 100].
*/
console.log(sortedSquares([-4, -1, 0, 3, 4, 10, 100]));



// 189. Rotate Array
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (nums.length === 1) return nums;
    const reverse = (arr, start, end) => {
        while (start < end) {
            [arr[start], arr[end]] = [arr[end], arr[start]];
            start++;
            end--;
        }
        return arr;
    }
    k = k % nums.length;
    reverse(nums, 0, nums.length - k - 1);
    reverse(nums, nums.length - k, nums.length - 1);
    reverse(nums, 0, nums.length - 1);
    return nums;
};
/*
Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3
Output: [5, 6, 7, 1, 2, 3, 4]
Explanation:
rotate 1 steps to the right: [7, 1, 2, 3, 4, 5, 6]
rotate 2 steps to the right: [6, 7, 1, 2, 3, 4, 5]
rotate 3 steps to the right: [5, 6, 7, 1, 2, 3, 4]
*/
console.log(rotate([1, 2, 3, 4, 5, 6, 7], 8))



// 283. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            i--;
            console.log(nums);
        }
        if (nums[i] !== 0 && nums[i + 1] === 0) {
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[j] !== 0) break
            }
        }
        if (j === nums.length) break
    }
    return nums;
};
var moveZeroesV2 = function (nums) {
    let pointer = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pointer] = nums[i];
            pointer++;
        }
    }
    for (var j = pointer; j < nums.length; j++) {
        nums[j] = 0;
    }
    return nums;
};
var moveZeroesV3 = function (nums) {
    let pointer = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[pointer] = nums[i];
            pointer++;
        }
    }
    for (var j = pointer; j < nums.length; j++) {
        nums[j] = 0;
    }
    return nums;
};
/*
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/
console.log(moveZeroesV3([0, 1, 0, 3, 2]));



// 167. Two Sum II - Input Array Is Sorted
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] + nums[right] > target) right--;
        else if (nums[left] + nums[right] < target) left++;
        else return [left + 1, right + 1];
    }
    return -1;
};
/*
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].
*/
console.log(twoSum([-1, 0], -1))



// 344. Reverse String
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
    return s;
};
/*
Input: s = ["h", "e", "l", "l", "o"]
Output: ["o", "l", "l", "e", "h"]
*/
console.log(reverseString(["h", "e", "l", "l", "o"]));



// 557. Reverse Words in a String III
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    let pointer = 0;
    let result = '';
    const reverse = (arr, start, end) => {
        let chars = arr.split('');
        while (start < end) {
            [chars[start], chars[end]] = [chars[end], chars[start]];
            start++;
            end--;
        }
        return chars.join('');
    }
    for (var i = 0; i < s.length; i++) {
        if (s[i + 1] === ' ' || s[i + 1] === undefined) {
            let reversedWord = reverse(s, pointer, i).slice(pointer, i + 1);
            result = result.concat(' ').concat(reversedWord);
            pointer = i + 2;
        }
    }
    return result.trim();
};
var reverseWordsV2 = function (s) {
    return s.split(' ').map(s => s.split('').reverse().join('')).join(' ');
}
/*
Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
*/
console.log(reverseWordsV2("God Ding"))



// 876. Middle of the Linked List
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
var middleNode = function (head) {
    let count = 0;
    let curr = head;
    while (curr.next) {
        curr = curr.next;
        count++;
    }
    let index = Math.ceil(count / 2);
    let result = head;
    for (var i = 0; i < index; i++) {
        result = result.next;
    };
    return result;
};

var middleNodeV2 = function (head) {
    let result = head, end = head;
    while (end !== null) {
        end = end.next;
        if (end == null) break;
        else end = end.next;
        result = result.next;
    }
    return result;
};
/*
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
*/



// 19. Remove Nth Node From End of List
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let slow = head;
    let fast = head;
    for (var i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast) return head.next;
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};
/*
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/



// 567. Permutation in String
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    let lenS1 = s1.length;
    let lenS2 = s2.length;
    let short = {};
    const check = obj => {
        for (var key in obj) {
            if (obj[key] !== 0) return false;
        }
        return true;
    }
    for (var i = 0; i < lenS1; i++) {
        short[s1[i]] = short[s1[i]] ? short[s1[i]] + 1 : 1;
    }
    let temp;
    for (var i = 0; i <= lenS2 - lenS1; i++) {
        temp = { ...short };
        for (var j = 0; j < lenS1; j++) {
            temp[s2[i + j]] = temp[s2[i + j]] ? temp[s2[i + j]] - 1 : -1;
        }
        if (check(temp)) return true
    }
    return false;
};

var checkInclusionV2 = function (s1, s2) {
    let long = s2.split('');
    let shortLength = s1.length;
    for (var i = 0; i <= long.length - shortLength; i++) {
        let short = s1.split('');
        for (var j = 0; j < shortLength; j++) {
            console.log(long[i + j]);
            let pos = short.indexOf(long[i + j]);
            if (pos !== -1) {
                short.splice(pos, 1);
            }
        }
        if (short.length === 0) return true
    }
    return false;
};
/*
Input: s1 = "ab", s2 = "eidbaooo"
Output: true
Explanation: s2 contains one permutation of s1 ("ba").
*/
console.log(checkInclusion('ad', 'eidbadooo'))



//  733. Flood Fill
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor, first = image[sr][sc]) {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[sr].length || image[sr][sc] !== first || image[sr][sc] === newColor) return image;
    image[sr][sc] = newColor;
    floodFill(image, sr + 1, sc, newColor, first);
    floodFill(image, sr, sc + 1, newColor, first);
    floodFill(image, sr - 1, sc, newColor, first);
    floodFill(image, sr, sc - 1, newColor, first);

    return image;
};

var floodFillV2 = function (image, sr, sc, newColor) {
    let start = image[sr][sc];
    let rowCount = image.length - 1;
    let colCount = image[sr].length - 1;
    let helper = (row, col) => {
        if (row <= rowCount && row >= 0 && col <= colCount && col >= 0) {
            if (image[row][col] === start) {
                image[row][col] = newColor;
                helper(row + 1, col);
                helper(row, col + 1);
                helper(row - 1, col);
                helper(row, col - 1);
            } else return;
        } else return;
    }
    helper(sr, sc);
    return image;
};
/*
Input: image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]], sr = 1, sc = 1, newColor = 2
Output: [[2, 2, 2], [2, 2, 0], [2, 0, 1]]
Explanation: From the center of the image with position(sr, sc) = (1, 1)(i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel(i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4 - directionally connected to the starting pixel.
*/
console.log(floodFill([[0, 0], [1, 0], [1, 1]], 1, 1, 2));



// 695. Max Area of Island
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max = 0, rowCount = grid.length, colCount = grid[0].length;
    const traverse = (r, c) => {
        if (r < 0 || c < 0 || r >= rowCount || c >= colCount || !grid[r][c]) return 0;
        grid[r][c] = 0;
        return 1 + traverse(r + 1, c) + traverse(r - 1, c) + traverse(r, c - 1) + traverse(r, c + 1);
    }
    for (var i = 0; i < rowCount; i++)
        for (var j = 0; j < colCount; j++)
            if (grid[i][j]) max = Math.max(max, traverse(i, j));
    return max;
};
/*
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.
*/
console.log(maxAreaOfIsland([[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]));



// 9. Palindrome Number
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    let strx = x.toString();
    let left = 0;
    let right = strx.length - 1;
    while (left < right) {
        if (strx[left] !== strx[right]) return false;
        left++;
        right--;
    };
    return true;
};
/*
Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/
console.log(isPalindrome(111));



// 13. Roman to Integer
// Object
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let roman = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let ans = 0;
    for (var i = 0; i < s.length; i++) {
        roman[s[i]] < roman[s[i + 1]] ? ans -= roman[s[i]] : ans += roman[s[i]];
    }
    return ans;
};
/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Input: s = "LVIII"
Output: 58
Explanation: L = 50, V = 5, III = 3.
Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
*/
console.log(romanToInt("LVIII"));



// 14. Longest Common Prefix
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';
    let ans = '';
    strs.sort((a, b) => { if (a.length > b.length) return 1; if (a.length < b.length) return -1 });
    console.log(strs);
    let maxLength = strs[0].length;

    for (var i = 0; i < maxLength; i++) {
        let char = strs[0][i];
        if (strs.every(str => str[i] === char)) ans += char;
        else break;
    };
    return ans;
};
var longestCommonPrefixV2 = function (strs) {
    if (strs === undefined || strs.length === 0) { return ''; }

    return strs.reduce((prev, next) => {
        let i = 0;
        while (prev[i] && next[i] && prev[i] === next[i]) i++;
        console.log(prev, next, i)
        return prev.slice(0, i);
    });
};
/*
Input: strs = ["flower","flow","flight"]
Output: "fl"
*/
console.log(longestCommonPrefixV2(["flower", "flo", "flight"]))



// 20. Valid Parentheses
// Stack
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let map = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    let stack = [];
    for (var i = 0; i < s.length; i++) {
        if (map[s[i]]) stack.push(map[s.charAt(i)]);
        else {
            if (s.charAt(i) !== stack.pop()) return false;
        }
    }
    return stack.length === 0;
};
/*
Input: s = "()[]{}"
Output: true
*/
console.log(isValid("()[]{}{}{"));
console.log(isValid("{([])}()"));



// 26. Remove Duplicates from Sorted Array
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let store = {};
    let count = 0;
    let length = nums.length;
    for (let i = 0; i < length; i++) {
        if (!store[nums[i]]) { store[nums[i]] = true; continue };
        if (store[nums[i]]) {
            nums.splice(i, 1);
            length--;
            count++;
            i--;
        }
    };
    return nums.length;
};
var removeDuplicatesV2 = function (nums) {
    //two pointers, one pass
    var slow = 0;
    for (var fast = 1; fast < nums.length; fast++) {
        console.log(nums[slow], nums[fast])
        if (nums[slow] !== nums[fast]) {
            nums[++slow] = nums[fast];
        }
        console.log(nums);
        console.log('=============')
    };
    return slow;
};
/*
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
*/
console.log(removeDuplicatesV2([1, 1, 1, 2, 2, 2, 3, 3, 12]))

var obj = {};
console.log(obj);
obj.foo = 'bar';
// my outcome: Object{}; 'bar';
// The book outcome: {foo:bar};

//* 27. Remove Element
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let count = 0;
    let end = nums.length - 1;
    for (let i = 0; i <= end; i++) {
        if (nums[i] !== val) {
            nums[count] = nums[i];
            count++;
        };

    };
    return count;
};
/*
Input: nums = [0, 1, 2, 2, 3, 0, 4, 2], val = 2
Output: 5, nums = [0, 1, 4, 0, 3, _, _, _]
Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
Note that the five elements can be returned in any order.
It does not matter what you leave beyond the returned k(hence they are underscores).
*/
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 2));