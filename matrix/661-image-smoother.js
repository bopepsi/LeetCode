//* An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).

/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {

    let rows = img.length;
    let cols = img[0].length;
    let res = Array.from({ length: rows }, () => Array(cols));
    const div = (n1, n2) => {
        return Math.floor(n1 / n2);
    }
    //* eight directions
    let dirs = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let sum = img[i][j];
            let count = 1;
            for (const dir of dirs) {
                let x = i + dir[0];
                let y = j + dir[1];
                if (x >= 0 && x < rows && y >= 0 && y < cols) {
                    sum += img[x][y];
                    count++;
                }
            }
            res[i][j] = div(sum, count);
        }
    }
    return res;

};

const img = [[100, 200, 100], [200, 50, 200], [100, 200, 100]];
console.log(imageSmoother(img));

//? Input: img = [[1,1,1],[1,0,1],[1,1,1]]
//? Output: [[0,0,0],[0,0,0],[0,0,0]]
//? Explanation:
//? For the points (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0
//? For the points (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0
//? For the point (1,1): floor(8/9) = floor(0.88888889) = 0

//? Input: img = [[100,200,100],[200,50,200],[100,200,100]]
//? Output: [[137,141,137],[141,138,141],[137,141,137]]
//? Explanation:
//? For the points (0,0), (0,2), (2,0), (2,2): floor((100+200+200+50)/4) = floor(137.5) = 137
//? For the points (0,1), (1,0), (1,2), (2,1): floor((200+200+50+200+100+100)/6) = floor(141.666667) = 141
//? For the point (1,1): floor((50+200+200+200+200+100+100+100+100)/9) = floor(138.888889) = 138
