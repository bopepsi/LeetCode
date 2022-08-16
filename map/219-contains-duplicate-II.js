/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {

    let map = {};
    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];
        if (map[n]) map[n].push(i);
        else map[n] = [i];
    }

    for (const key in map) {
        const arr = map[key];
        if (arr.length > 1) {
            for (let i = 0; i < arr.length - 1; i++) {
                console.log(arr[i]-arr[i + 1])
                if (Math.abs(arr[i + 1] - arr[i]) <= k) return true;
            }
        }
    }

    return false

};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));

// Input: nums = [1,2,3,1], k = 3
// Output: true

// Input: nums = [1,0,1,1], k = 1
// Output: true

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false