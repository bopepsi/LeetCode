// let arr = [
//     { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
//     { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
//     { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
//     { winner: 'Elise', loser: 'Carol', loser_points: 4 },
//     { winner: 'Alice', loser: 'Carol', loser_points: 2 },
//     { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
//     { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
//   ]

// const getMatchInfo = (arr) => {

//     let ans = {}; //const

//     for (let item of arr) {

//         let winner = item["winner"]
//         let loser = item["loser"]

//         ans[winner] = ans[winner] ?
//             (!ans[winner].includes(loser) && ans[winner].push(loser)) : [];

//         ans[loser] = ans[loser] ? ans[loser] : [];

//         console.log(ans[winner])

//     }

//     return ans;

// }

// console.log(getMatchInfo(arr));

var plusOne = function (digits) {
    let endIndex = digits.length - 1;
    const plus1 = (index) => {
        if (index === -1) {
            digits.unshift(1);
            return digits;
        }
        if (digits[index] === 9) {
            digits[index] = 0;
            return plus1(index - 1)
        } else {
            digits[index]++;
            return digits;
        }
    }
    return plus1(endIndex);
};