/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */

//* 拓扑排序 https://www.youtube.com/watch?v=YwxSKBGwgH0
var findAllRecipes = function (recipes, ingredients, supplies) {

    const n = recipes.length;
    let indegree = {};
    let map = {};

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < ingredients[i].length; j++) {
            if (map[ingredients[i][j]])
                map[ingredients[i][j]].push(recipes[i]);
            else
                map[ingredients[i][j]] = [recipes[i]];
            indegree[recipes[i]] = indegree[recipes[i]] ? indegree[recipes[i]] + 1 : 1;
        }
    }
    console.log(map);
    console.log(indegree);
    let res = [];
    let queue = [...supplies];

    while (queue.length > 0) {
        let ele = queue.pop();
        console.log(map[ele])
        if (recipes.includes(ele)) {
            res.push(ele);
        }
        if (map[ele])
            for (const item of map[ele]) {
                indegree[item]--;
                if (indegree[item] === 0)
                    queue.push(item);
            }
    }

    return res;


};

const recipes = ["bread", "sandwich"], ingredients = [["yeast", "flour"], ["bread", "meat"]], supplies = ["yeast", "flour", "meat"]
console.log(findAllRecipes(recipes, ingredients, supplies));

// ["ju", "fzjnm", "x", "e", "zpmcz", "h", "q"]
// [["d"], ["hveml", "f", "cpivl"], ["cpivl", "zpmcz", "h", "e", "fzjnm", "ju"], ["cpivl", "hveml", "zpmcz", "ju", "h"], ["h", "fzjnm", "e", "q", "x"], ["d", "hveml", "cpivl", "q", "zpmcz", "ju", "e", "x"], ["f", "hveml", "cpivl"]]
//    ju         fzjnm                           x                                      e                           zpmcz                                 h                                  q
// ["f", "hveml", "cpivl", "d"]


// Input: recipes = ["bread"], ingredients = [["yeast", "flour"]], supplies = ["yeast", "flour", "corn"]
// Output: ["bread"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".

// Input: recipes = ["bread", "sandwich"], ingredients = [["yeast", "flour"], ["bread", "meat"]], supplies = ["yeast", "flour", "meat"]
// Output: ["bread", "sandwich"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".

// Input: recipes = ["bread", "sandwich", "burger"], ingredients = [["yeast", "flour"], ["bread", "meat"], ["sandwich", "meat", "bread"]], supplies = ["yeast", "flour", "meat"]
// Output: ["bread", "sandwich", "burger"]
// Explanation:
// We can create "bread" since we have the ingredients "yeast" and "flour".
// We can create "sandwich" since we have the ingredient "meat" and can create the ingredient "bread".
// We can create "burger" since we have the ingredient "meat" and can create the ingredients "bread" and "sandwich".