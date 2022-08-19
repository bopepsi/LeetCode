/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {

    let ans = [];
    let s1 = people.sort((a, b) => {
        if (a[0] === b[0]) return b[1] - a[1];
        else return a[0] - b[0];
    })

    console.log([...s1]);
    while (s1.length > 0) {
        let p = s1.pop();
        let index = p[1];
        ans.splice(index, 0, p);
    }

    return ans;

};

let people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
console.log(reconstructQueue(people));

//* 身高从小到达排序， 前面有几个人从大到小排序， 这样使用 Array.pop() 速度更快
[[4, 4], [5, 2], [5, 0], [6, 1], [7, 1], [7, 0]];
//* 依次添加
[[7, 0]];
[[7, 0], [7, 1]];
[[7, 0], [6, 1], [7, 1]];
[[5, 0], [7, 0], [6, 1], [7, 1]];
[[5, 0], [7, 0], [5, 2], [6, 1], [7, 1]];
[[5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]];



//? Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
//? Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
//? Explanation:
//? Person 0 has height 5 with no other people taller or the same height in front.
//? Person 1 has height 7 with no other people taller or the same height in front.
//? Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
//? Person 3 has height 6 with one person taller or the same height in front, which is person 1.
//? Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
//? Person 5 has height 7 with one person taller or the same height in front, which is person 1.
//? Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.