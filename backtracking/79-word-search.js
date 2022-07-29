/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let row = board.length;
    let col = board[0].length;

    let seen = [];
    for (let i = 0; i < board.length; i++) {
        seen[i] = Array(board[i].length).fill(false);
    }

    const dfs = (index, i, j) => {
        
        if (index === word.length) return true;
        if (i < 0 || i >= row || j < 0 || j >= col || seen[i][j] || board[i][j] !== word[index]) return false;

        seen[i][j] = true;

        if (dfs(index + 1, i, j - 1) || dfs(index + 1, i, j + 1) || dfs(index + 1, i - 1, j) || dfs(index + 1, i + 1, j)) return true;

        seen[i][j] = false;

        return false;
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (word[0] === board[i][j]) {
                if (dfs(0, i, j)) return true;
            }
        }
    }
    return false;
};

console.log(exist([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]]
    , "AAB"))