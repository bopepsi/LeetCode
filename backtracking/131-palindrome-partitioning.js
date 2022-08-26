/**
 * @param {string} s
 * @return {string[][]}
 */

//* Classic backtracking
var partition = function (s) {

    let ans = [];

    const isValid = (str) => {
        let left = 0, right = str.length - 1;
        while (left < right) {
            if (str[left] !== str[right]) return false;
            left++;
            right--;
        };
        return true;
    }

    const helper = (temp, start) => {
        if (start === s.length) {
            ans.push([...temp]);
            return;
        }
        for (let i = start + 1; i <= s.length; i++) {
            //* 若当前从 start 到 i 合法， 则把这个字段加进 temp， 继续从 start 为 i 开始验证
            if (isValid(s.substring(start, i))) {
                temp.push(s.substring(start, i));
                helper(temp, i);
                temp.pop();
            }
        }
    }
    helper([], 0);
    return ans;

};

const s = 'aab';
console.log(partition(s));

//? Input: s = "aab"
//? Output: [["a","a","b"],["aa","b"]]

//? Input: s = "a"
//? Output: [["a"]]
