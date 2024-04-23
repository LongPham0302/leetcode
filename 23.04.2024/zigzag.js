//huy
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows == 1 || numRows >= s.length) {
        return s;
    }

    let A = Array(numRows).fill('');
    let index = 0, step = 1;

    for (let x of s) {
        A[index] += x;
        if (index == 0) {
            step = 1;
        } else if (index == numRows -1) {
            step = -1;
        }
        index += step;
    }

    return res.join('');
};
//huy
