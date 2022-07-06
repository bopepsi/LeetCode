//todo You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

//* Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

//* You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

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

//?     Input: n = 5, bad = 4
//?     Output: 4
//?     Explanation:
//?     call isBadVersion(3) -> false
//?     call isBadVersion(5) -> true
//?     call isBadVersion(4) -> true
//?     Then 4 is the first bad version.

//?     Input: n = 1, bad = 1
//?     Output: 1
