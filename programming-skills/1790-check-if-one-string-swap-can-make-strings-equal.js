/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {

    let diff = [];    
    
    for (const i in s1)
        if (s1[i] !== s2[i])
            diff.push(s1[i], s2[i]);
    
    return (diff.length < 5) && (diff[0] === diff[3]) && (diff[1] === diff[2]);

};

console.log(areAlmostEqual('bf', 'dd'));