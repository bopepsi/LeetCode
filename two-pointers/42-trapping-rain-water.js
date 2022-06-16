//todo Given n non - negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if (height.length === 0) return 0;
    let ans = 0;
    let left = 0;
    let right = height.length - 1;
    let maxL = height[left];
    let maxR = height[right];
    while (left < right) {
        if (maxL < maxR) {
            ans = ans + maxL - height[left];
            left = left + 1;
            maxL = Math.max(maxL, height[left])
        } else {
            ans = ans + maxR - height[right];
            right = right - 1;
            maxR = Math.max(maxR, height[right]);
        }
    }
    return ans;
};

//?     Input: height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
//?     Output: 6
//?     Explanation: The above elevation map(black section) is represented by array[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1].In this case, 6 units of rain water(blue section) are being trapped.

//?     Input: height = [4, 2, 0, 3, 2, 5]
//?     Output: 9

console.log(trap([4, 2, 0, 3, 2, 5]))