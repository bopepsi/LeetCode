/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let min = Math.min(...salary);
    let max = Math.max(...salary);
    let sum = salary.reduce((p, c) => p += c, 0);
    return (sum - min - max) / (salary.length - 2);
};

//? Input: salary = [4000,3000,1000,2000]
//? Output: 2500.00000
//? Explanation: Minimum salary and maximum salary are 1000 and 4000 respectively.
//? Average salary excluding minimum and maximum salary is (2000+3000) / 2 = 2500

//? Input: salary = [1000,2000,3000]
//? Output: 2000.00000
//? Explanation: Minimum salary and maximum salary are 1000 and 3000 respectively.
//? Average salary excluding minimum and maximum salary is (2000) / 1 = 2000