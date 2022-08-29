/**
 * @param {number[]} nums
 * @return {boolean}
 */
var circularArrayLoop = function (nums) {

    const getNext = (index) => {
        let n = (index + nums[index]) % nums.length;
        if (n >= 0) return n;
        else return nums.length + n;
    }

    for (let i = 0; i < nums.length; i++) {
        let slow = i;
        let fast = getNext(i);
        while (nums[slow] * nums[fast] > 0) {
            if (slow === fast) {
                //* can not be on the same point
                if (slow === getNext(slow)) break;
                return true;
            }
            //* -2 "1" "-1" -2 -2 fast and fast.next must have same direction
            if (nums[fast] * nums[getNext(fast)] < 0) break;
            slow = getNext(slow);
            fast = getNext(getNext(fast));
        }
    }

    return false;

};

//? Input: nums = [2,-1,1,2,2]
//? Output: true
//? Explanation:
//? There is a cycle from index 0 -> 2 -> 3 -> 0 -> ...
//? The cycle's length is 3.

//? Input: nums = [-1,2]
//? Output: false
//? Explanation:
//? The sequence from index 1 -> 1 -> 1 -> ... is not a cycle because the sequence's length is 1.
//? By definition the sequence's length must be strictly greater than 1 to be a cycle.

//? Input: nums = [-2,1,-1,-2,-2]
//? Output: false
//? Explanation:
//? The sequence from index 1 -> 2 -> 1 -> ... is not a cycle because nums[1] is positive, but nums[2] is negative.
//? Every nums[seq[j]] must be either all positive or all negative.