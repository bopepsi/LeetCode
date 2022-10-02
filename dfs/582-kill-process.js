function killProcess(pid, ppid, kill) {
    
    let map = {}
    for (let i = 0; i < pid.length; i++) {
        let p = ppid[i];
        let c = pid[i];
        if (map[p]) {
            map[p].push(c)
        } else {
            map[p] = [c]
        }
    }
    console.log(map);

    let res = [];

    var dfs = function (kill) {
        res.push(kill);
        if (!map[kill] || map[kill].length == 0) return;
        for (const ele of map[kill])
            dfs(ele);
    }

    dfs(kill);

    return res;

}

const pid = [1, 3, 10, 5], ppid = [3, 0, 5, 3], kill = 5;
console.log(killProcess(pid, ppid, kill));

// Input: pid = [1,3,10,5], ppid = [3,0,5,3], kill = 5
// Output: [5,10]
// Explanation: The processes colored in red are the processes that should be killed.