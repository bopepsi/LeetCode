/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        map[nums[i]] = i;
    }
    console.log(map)
    for (let j = 0; j < nums.length; j++) {
        let num2 = target - nums[j];
        console.log(map[3]);
        if (map[num2] && map[num2] !== j) return [j, map[num2]];
    }
};

Input: nums = [3, 3], target = 6

console.log(twoSum(nums, target));

var twoSumV2 = function (nums, target) {
    const getDigit = (num, place) => {
        return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
    }
    const digitCount = num => {
        if (num === 0) return 1;
        return Math.floor(Math.log10(num)) + 1;
    }
    const mostDigits = arr => {
        let mostDigits = 0;
        for (var i = 0; i < arr.length; i++) {
            mostDigits = Math.max(digitCount(arr[i]), mostDigits)
        }
        return mostDigits;
    }
    const radixSort = arr => {
        let loopsCount = mostDigits(arr);
        for (var i = 0; i < loopsCount; i++) {
            let bucket = Array.from({ length: 10 }, () => []);
            for (var j = 0; j < arr.length; j++) {
                let digit = getDigit(arr[j], i);
                bucket[digit].push(arr[j]);
            }
            arr = [].concat(...bucket)
        }
        return arr;
    }
    const sortedArr = radixSort(nums);
    console.log(sortedArr);
    let left = 0;
    let right = left + 1;
    while (left < right) {
        let sum = sortedArr[left] + sortedArr[right];
        if (sum === target) {
            leftVal = sortedArr[left];
            rightVal = sortedArr[right];
            left = nums.indexOf(leftVal);
            nums[left] = '';
            right = nums.indexOf(rightVal);
            return [left, right];
        }
        else if (Math.abs(sum) < Math.abs(target)) right++;
        else {
            right--;
            left++;
        }
    }
};
