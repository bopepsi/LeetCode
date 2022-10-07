/**
 * @param {string[]} paths
 * @return {string[][]}
 */
var findDuplicate = function (paths) {

    let res = [];
    let map = {};
    for (const ele of paths) {
        let str = ele.split(' ');
        let pre = str[0];
        let files = str.slice(1);

        for (let item of files) {
            let temp = item.split("(");
            let docName = temp[0];
            let content = temp[1];
            let path = pre + "/" + docName
            if (!map[content]) {
                map[content] = [path]
            } else {
                map[content].push(path);
            }
        }
    }

    for (const key in map) {
        if (map[key].length > 1)
            res.push(map[key]);
    }

    return res;

};

const paths = ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]
console.log(findDuplicate(paths))

//? Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)","root 4.txt(efgh)"]
//? Output: [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]

//? Input: paths = ["root/a 1.txt(abcd) 2.txt(efgh)","root/c 3.txt(abcd)","root/c/d 4.txt(efgh)"]
//? Output: [["root/a/2.txt","root/c/d/4.txt"],["root/a/1.txt","root/c/3.txt"]]
