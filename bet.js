function returnWinRate(home, draw, away) {

    const recieve = 100;
    const homeWin = 100 / home;
    const awayWin = 100 / away;
    let drawWin = 100 / draw;

    betAmount = homeWin + drawWin + awayWin;

    const data = {
        'Home Bet Amount': homeWin.toFixed(2),
        'Away Bet Amount': awayWin.toFixed(2),
        'Draw Bet Amount': drawWin.toFixed(2),
        'Total Bet Amount': betAmount,
        'Return rate': (recieve / betAmount).toFixed(2),
    }
    return data;

}

console.log('-----------------------------------------------CHECK-----------------------------------------------')


console.log('myBet', returnWinRate(2.95, 2.25, 7.06));
