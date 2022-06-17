//todo Given an array nums of distinct integers, return all the possible permutations.You can return the answer in any order.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let ans = [];
    let used = Array(nums.length).fill(false);
    backtrack(nums, [], ans, used);
    return ans;
};

function backtrack(nums, path, ans, used) {
    if (path.length === nums.length) {
        //* Make a deep copy, otherwise we'd be append the same list over and over.
        ans.push([...path]);
        return;
    };
    for (let i = 0; i < nums.length; i++) {
        //* If that num already used, skip it.
        if (used[i]) continue;
        //* If not used, mark it used and add it to the permutation.
        used[i] = true;
        path.push(nums[i]);
        backtrack(nums, path, ans, used);
        //* Result added to the ans, remove the nums from permutation, then set used to false.
        path.pop();
        used[i] = false;
        //* Continue to a fresh number.
    }
}

//?     Input: nums = [1, 2, 3]
//?     Output: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]

//?     Input: nums = [0, 1]
//?     Output: [[0, 1], [1, 0]]

//?     Input: nums = [1]
//?     Output: [[1]]

console.log(permute([1, 2, 3]));

//todo  Back tracking
    //* 3 Keys of back tracking.
    //*     1. Choices
    //*         Choose a Number.
    //*     2. Constraints
    //*         We only can use one number, and we cannot use that number again.
    //*     3. Goal
    //*         Build a permutation.

    //* Template
    //?     Backtrack(res, args){
    //?         if(GOAL REACHED)
    //?             add solution to res
    //?             return
            
    //?         for(let i = 0; i< NUMBER OF CHOICES; i++)
    //?             if(CHOICE[i] is valid)
    //?                 make choice[i]
    //?                 Backtrack(res, args)
    //?                 undo choice[i]
    //?     }







// Classic combinatorial search problem, we can solve it using 3 - step system

//  1. Identify states
//      What state do we need to know whether we have reached a solution(and using it to construct a solution if the problem asks for it).
//      We need a state to keep track of the list of letters we have chosen for the current permutation
//      What state do we need to decide which child nodes should be visited next and which ones should be pruned ?
//      We have to know what are the letters left that we can still use(since each letter can only be used once).

//  2. Draw the State - space Tree

//  3. DFS on the State - space tree
//      Using the backtracking template as basis, we add the two states we identified in step 1:

//  A list to represent permutation constructed so far, path
//  A list to record which letters are already used, used, used[i] == true means ith letter in the origin list has been used.