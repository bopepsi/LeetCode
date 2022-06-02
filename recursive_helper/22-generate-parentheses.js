//todo Given n pairs of parentheses, write a function to generate all combinations of well - formed parentheses.

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    let ans = [];
    //* Here we know we can only start with an opening bracket => use 1 open:
    //* but we can also start with an empty string and 0 like so:
    //* buildCombinationFrom('', 0, 0, n, combinations);
    combine('(', 1, 0, n, ans);
    return ans;
};

/**
 * Helper method generates combinations uses backtracking.
 * @param {string} string 
 * @param {number} openUsed 
 * @param {number} closeUsed 
 * @param {number} n 
 * @param {string[]} combinations 
 */
function buildCombinationFrom(string, openUsed, closeUsed, n, combinations) {
    //* Base case: when we reach 2n length
    if (string.length === 2 * n) {
        //* Add the string to the list of combination:
        combinations.push(string);
        //* Exit from this recursive call.
        return;
    }
    //* Case: when we can add more opening bracket:
    //* If we haven't used all opening bracket (n pairs = n opens)
    if (openUsed < n) {
        //* Add 1 opening, update opening used:
        buildCombinationFrom(string + '(', openUsed + 1, closeUsed, n, combinations);
    }
    //* Case: when we can add more closing bracket:
    //* If we have more opening than closing:
    if (openUsed > closeUsed) {
        //* Add 1 closing, update closing used:
        buildCombinationFrom(string + ')', openUsed, closeUsed + 1, n, combinations);
    }
}

//?     Input: n = 3
//?     Output: ["((()))", "(()())", "(())()", "()(())", "()()()"]

//?     Input: n = 1
//?     Output: ["()"]

//todo // Remember: you can either add more closing or opening if you're still within the constraints:
// '(' -> '()' -> '()(' -> '()()' -> '()()('=> '()()()'
//     -> '()((' -> '()(()'=> '()(())'
//         -> '((' -> '(()' -> '(()(' -> '(()()'=> '(())())'
//             -> '(())' -> '(())('=> '(())()'
//                 -> '((('=> '((()))'

