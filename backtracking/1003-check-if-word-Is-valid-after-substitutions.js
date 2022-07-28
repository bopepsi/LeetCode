/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const remove = str => {

        if (str.length === 0) return true;

        if (str.includes('abc')) {
            k = str.replaceAll('abc', '');
            return remove(k);
        } else {
            return false;
        }

    }
    return remove(s);
};

var isValidV2 = function (s) {
    while (s.includes('abc')) {
        s.replaceAll('abc', '');
    };
    return s.length === 0;
};