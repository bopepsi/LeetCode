/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minSwap = function (nums1, nums2) {

    let keep = Array(nums1.length).fill(Infinity);
    let swap = Array(nums1.length).fill(Infinity);

    keep[0] = 0;
    swap[0] = 1;

    for (let i = 1; i < nums1.length; i++) {

        let keepPrev = keep[i - 1];
        let swapPrev = swap[i - 1];
        if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
            keep[i] = keepPrev;
            swap[i] = swapPrev + 1;
        }
        if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
            swap[i] = Math.min(swap[i], keepPrev + 1);
            keep[i] = Math.min(swapPrev, keep[i]);
        }
    }

    return Math.min(keep[keep.length - 1], swap[swap.length - 1]);

};

var minSwapV2 = function (nums1, nums2) {

    //* dp[i][0], dp[i][1] <== dp[i-1][0], dp[i-1][1]

    //* A[i-1] -> A[i]
    //* B[i-1] -> B[i]

    //* A[i-1] -> B[i]
    //* B[i-1] -> A[i]

    //* B[i-1] -> A[i]
    //* A[i-1] -> B[i]

    //* B[i-1] -> B[i]
    //* A[i-1] -> A[i]

    let swaped = 1;
    let keeped = 0;

    for (let i = 1; i < nums1.length; i++) {
        let swapedPrev = swaped;
        let keepedPrev = keeped;

        keeped = Infinity, swaped = Infinity

        if (nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1])
            keeped = Math.min(keeped, keepedPrev);

        if (nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1])
            keeped = Math.min(keeped, swapedPrev);

        if (nums2[i] > nums1[i - 1] && nums1[i] > nums2[i - 1])
            swaped = Math.min(swaped, keepedPrev + 1)

        if (nums2[i] > nums2[i - 1] && nums1[i] > nums1[i - 1])
            swaped = Math.min(swaped, swapedPrev + 1);
    }

    return Math.min(swaped, keeped);

};

let nums1 = [0, 4, 4, 5, 9], nums2 = [0, 1, 6, 8, 10];
console.log(minSwapV2(nums1, nums2));

//? Input: nums1 = [1,3,5,4], nums2 = [1,2,3,7]
//? Output: 1
//? Explanation: 
//? Swap nums1[3] and nums2[3]. Then the sequences are:
//? nums1 = [1, 3, 5, 7] and nums2 = [1, 2, 3, 4]
//? which are both strictly increasing.