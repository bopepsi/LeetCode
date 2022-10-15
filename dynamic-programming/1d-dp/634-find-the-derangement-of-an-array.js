//* In combinatorial mathematics, a derangement is a permutation of the elements of a set, such that no element appears in its original position.

//* You are given an integer n.There is originally an array consisting of n integers from 1 to n in ascending order, return the number of derangements it can generate.Since the answer may be huge, return it modulo. 10^7

const findDerangement = n => {

    let dp = Array(n + 1);
    dp[0] = 0;
    dp[1] = 0;
    dp[2] = 1;
    let mod = Math.pow(10, 7);

    for (let i = 3; i <= n; i++) {
        dp[i] = (i - 1) * (dp[i - 2] + dp[i - 1]) % mod;
    }

    return dp[n];

}

//* 1 2 3 4 5
//*     5   3  5可以在（n-1）种位置， 3与5互换， dp[n-2]
//*     5      5可以在（n-1）种位置， 3可以在其余任何位置, dp[n-1]

console.log(findDerangement(3));

//? Input: n = 3
//? Output: 2
//? Explanation: The original array is [1,2,3]. The two derangements are [2,3,1] and [3,1,2].

//? Input: n = 2
//? Output: 1