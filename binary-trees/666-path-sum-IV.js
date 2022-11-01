//* If the depth of a tree is smaller than 5, then this tree can be represented by an array of three-digit integers. For each integer in this array:

//* The hundreds digit represents the depth d of this node where 1 <= d <= 4.
//* The tens digit represents the position p of this node in the level it belongs to where 1 <= p <= 8. The position is the same as that in a full binary tree.
//* The units digit represents the value v of this node where 0 <= v <= 9.
//* Given an array of ascending three-digit integers nums representing a binary tree with a depth smaller than 5, return the sum of all paths from the root towards the leaves.
//* It is guaranteed that the given array represents a valid connected binary tree.

const pathSum = nums => {

    //* Max depth is 4 and max nodes at bottom is 8, so we can create a 4*8 matrix to store sum for that path
    let dp = Array.from({ length: 5 }, () => Array(8).fill(0));

    for (let n of nums) {
        let depth = Math.floor(n / 100);
        let index = (Math.floor(n / 10)) % 10 - 1;
        let value = n % 10;
        dp[depth][index] = dp[depth - 1][Math.floor(index / 2)] + value
    }
    console.log(dp)
    //* loop thru dp to add up path sums
    let res = 0;
    for (let i = 1; i <= 4; i++) {
        for (let j = 0; j < 8; j++) {
            if (i === 4 || (dp[i][j] !== 0 && dp[i + 1][j * 2] === 0 && dp[i + 1][j * 2 + 1] === 0)) {
                res += dp[i][j]
            }
        }
    }

    return res;

}

const nums = [113, 215, 221];
console.log(pathSum(nums));

//? Input: nums = [113,215,221]
//? Output: 12
//? Explanation: The tree that the list represents is shown.
//? The path sum is (3 + 5) + (3 + 1) = 12.

//? Input: nums = [113,221]
//? Output: 4
//? Explanation: The tree that the list represents is shown.
//? The path sum is (3 + 1) = 4.
