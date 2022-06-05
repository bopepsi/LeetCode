//todo A permutation of an array of integers is an arrangement of its members into a sequence or linear order.
//todo The replacement must be in place and use only constant extra memory.
// For example, for arr = [1, 2, 3], the following are considered permutations of arr: [1, 2, 3], [1, 3, 2], [3, 1, 2], [2, 3, 1].
// The next permutation of an array of integers is the next lexicographically greater permutation of its integer.More formally, if all the permutations of the array are sorted in one container according to their lexicographical order, then the next permutation of that array is the permutation that follows it in the sorted container.If such arrangement is not possible, the array must be rearranged as the lowest possible order(i.e., sorted in ascending order).

// For example, the next permutation of arr = [1, 2, 3] is[1, 3, 2].
//     Similarly, the next permutation of arr = [2, 3, 1] is[3, 1, 2].
// While the next permutation of arr = [3, 2, 1] is[1, 2, 3] because[3, 2, 1] does not have a lexicographical larger rearrangement.
// Given an array of integers nums, find the next permutation of nums.

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let i = nums.length - 1;
    let j = nums.length - 1;
    //* Step 1, find first Desc num.
    for (i; i > 0; i--) {
        if (nums[i - 1] < nums[i]) break;
    }
    let ax = i - 1;
    //? If no Desc num, just reverse the order and return.
    if (i === 0) {
        reverse(0);
        return nums;
    }
    //* Step 2, find first num that is greater than first Desc num just found.
    for (j; j > 0; j--) {
        if (nums[j] > nums[i - 1]) {
            break;
        }
    }
    let ay = j;
    //* Swap A(x), A(y)
    //* Reverse nums after first Desc num
    swap(ax, ay);
    reverse(ax + 1);
    return nums;
    function swap(num1, num2) {
        [nums[num1], nums[num2]] = [nums[num2], nums[num1]];
    }
    function reverse(start) {
        let end = nums.length - 1;
        while (start < end) {
            swap(start, end);
            start++;
            end--;
        }
    }
};

//* Steps
//*     1. From end to start, find the first descending number A(x).
//*     2. From end to start, find the first number that is greater than A(x), A(y).
//*     3. Swap A(x) and A(y).
//*     4. Reorder nums after A(x).

//*     [1,5,8,4,7,6,5,3,1]
//*            / 
//*     [1,5,8,4,7,6,5,3,1]
//*                  /
//*     [1,5,8,5,7,6,4,3,1]
//*     swap 4 5
//*     [1,5,8,5,1,3,4,6,7]
//*     reorder nums after 5

//?     Input: nums = [1, 2, 3]
//?     Output: [1, 3, 2]

//?     Input: nums = [3, 2, 1]
//?     Output: [1, 2, 3]

//?     Input: nums = [1, 1, 5]
//?     Output: [1, 5, 1]

console.log(nextPermutation([4,3,2,1]));