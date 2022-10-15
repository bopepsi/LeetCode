//* Given a positive integer num, return the smallest positive integer x whose multiplication of each digit equals num.If there is no answer or the answer is not fit in 32 - bit signed integer, return 0.

const smallestFactorization = num => {

    let res = 0;
    let digit = 0;

    for (let i = 9; i >= 2; i--) {
        let div = num % i;
        if (div === 0) {
            res = res + Math.pow(10, digit) * i;
            num = num / i;
            digit++;
        }
    }

    if (num > 9 || num > Math.pow(2, 32) - 1) {
        return 0;
    }

    return res;

}

console.log(smallestFactorization(15))

//* 把数字从大到小（9-0）试着能否整除。 若能整除， 可以拿出一位加入答案， 然后继续执行试着整除。

//? Input: num = 48
//? Output: 68

//? Input: num = 15
//? Output: 35
