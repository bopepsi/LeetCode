let arr = [
    { winner: 'Alice', loser: 'Bob',   loser_points: 3 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 1 },
    { winner: 'Elise', loser: 'Bob',   loser_points: 2 },
    { winner: 'Elise', loser: 'Carol', loser_points: 4 },
    { winner: 'Alice', loser: 'Carol', loser_points: 2 },
    { winner: 'Carol', loser: 'Dean',  loser_points: 3 },
    { winner: 'Dean',  loser: 'Elise', loser_points: 2 },
  ]

const getMatchInfo = (arr) => {

    let ans = {}; //const

    for (let item of arr) {

        let winner = item["winner"]
        let loser = item["loser"]

        ans[winner] = ans[winner] ?
            (!ans[winner].includes(loser) && ans[winner].push(loser)) : [];

        ans[loser] = ans[loser] ? ans[loser] : [];

        console.log(ans[winner])

    }

    return ans;

}

console.log(getMatchInfo(arr));