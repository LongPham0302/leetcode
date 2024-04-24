//huy
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
};

if(isPalindrome(121)){
    console.log('true');
}
else{
    console.log('false');
}
//huy
