/**
 * @param {string} senate
 * @return {string}
 */

//* 分别创建两个Queue， 将R，D所在的位置加入对应的Queue中
//* 每次取Queue中第一个元素， 比较两个位置的大小， 大的index将会被永久从Queue中拿掉， 小的index则放到senate最后的index的位置
//* 最后Queue中有剩余的一方获胜

var predictPartyVictory = function (senate) {

    let rQ = [], dQ = [];
    let l = senate.length;

    for (let i = 0; i < senate.length; i++) {
        let char = senate[i];
        if (char === 'R') {
            rQ.push(i)
        } else {
            dQ.push(i)
        }
    }

    while (rQ.length > 0 && dQ.length > 0) {
        let r = rQ.shift();
        let d = dQ.shift();
        if (r < d) {
            rQ.push(r + l);
        } else {
            dQ.push(d + l);
        }
    }

    return rQ.length > 0 ? 'Radiant' : 'Dire'

};

//? Input: senate = "RD"
//? Output: "Radiant"
//? Explanation: 
//? The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
//? And the second senator can't exercise any rights anymore since his right has been banned. 
//? And in round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.

//? Input: senate = "RDD"
//? Output: "Dire"
//? Explanation: 
//? The first senator comes from Radiant and he can just ban the next senator's right in round 1. 
//? And the second senator can't exercise any rights anymore since his right has been banned. 
//? And the third senator comes from Dire and he can ban the first senator's right in round 1. 
//? And in round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.
