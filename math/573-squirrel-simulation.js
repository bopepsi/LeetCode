//* You are given two integers height and width representing a garden of size height x width. You are also given:

//* an array tree where tree = [tree_r, tree_c] is the position of the tree in the garden,
//* an array squirrel where squirrel = [squirrel_r, squirrel_c] is the position of the squirrel in the garden,
//* and an array nuts where nuts[i] = [nut_ir, nut_ic] is the position of the ith nut in the garden.
//* The squirrel can only take at most one nut at one time and can move in four directions: up, down, left, and right, to the adjacent cell.

//* Return the minimal distance for the squirrel to collect all the nuts and put them under the tree one by one.
//* The distance is the number of moves.

const minDistance = (height, width, tree, squirrel, nuts) => {

    //* distance = 2*(d1 + d2 + d3 + ... + dn) - dtree_nut + dnut_squirrel
    //* distance = 2*(d1 + d2 + d3 + ... + dn) - (dtree_nut - dnut_squirrel)
    //*                 const                    need to find max (dtree_nut - dnut_squirrel)

    let sum = 0;
    let max = 0;

    for (const nut of nuts) {

        let treeToNut = Math.abs(nut[0] - tree[0]) + Math.abs(nut[1] - tree[1]);
        sum = sum + 2 * treeToNut;
        
        let nutToSquirrel = Math.abs(squirrel[0] - nut[0]) + Math.abs(squirrel[1] - nut[1]);
        max = Math.max(max, treeToNut - nutToSquirrel);

    }

    return sum - max;

}

const height = 5, width = 7, tree = [2, 2], squirrel = [4, 4], nuts = [[3, 0], [2, 5]];
console.log(minDistance(height, width, tree, squirrel, nuts))

//? Input: height = 5, width = 7, tree = [2,2], squirrel = [4,4], nuts = [[3,0], [2,5]]
//? Output: 12
//? Explanation: The squirrel should go to the nut at [2, 5] first to achieve a minimal distance.
