//todo You are given an integer array height of length n.There are n vertical lines drawn such that the two endpoints of the ith line are(i, 0) and(i, height[i]).
//todo Find two lines that together with the x - axis form a container, such that the container contains the most water.
//todo Return the maximum amount of water a container can store.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxContain = 0;
    let head = 0;
    let tail = height.length - 1;
    let area;
    while (head < tail) {
        area = ((height[head] > height[tail]) ? height[tail] : height[head]) * (tail - head);
        maxContain = Math.max(maxContain, area);
        if (height[head] > height[tail]) tail--;
        else head++;
    };
    //* double for loop really bad, O(n^2), exceeds time limit
    // for (let i = 0; i < height.length; i++) {
    //     head = height[i];
    //     for (let j = height.length - 1; j > i; j--) {
    //         tail = height[j];
    //         maxContain = Math.max(Math.min(head,tail)*Math.abs(i-j),maxContain);
    //     }
    // }
    return maxContain;
};

//?     Input: height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
//?     Output: 49
//?     Explanation: The above vertical lines are represented by array[1, 8, 6, 2, 5, 4, 8, 3, 7].In this case, the max area of water(blue section) the container can contain is 49.

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
console.log(maxArea(height));