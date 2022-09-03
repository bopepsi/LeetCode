/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */


//* v1 --> [1, 2, 3, 4, 5,] 6, 7
//*               100%

//* v2 --> [1, 2, 3][4, 5, 6], 7
//*           50%      50%

var rand10 = function () {

    let v1 = rand7();
    let v2 = rand7();

    while (v1 > 5)
        v1 = rand7();
    while (v2 === 7)
        v2 = rand7();

    return v2 <= 3 ? v1 : v1 + 5;

};
