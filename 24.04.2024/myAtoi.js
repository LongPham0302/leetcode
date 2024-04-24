//huy
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let b = s.toString().trim();
    
    if (!/^[0-9+\-]/.test(b)) return 0;
  
    let a = parseInt(b);
  
    const min = Math.pow(-2, 31);
    const max = Math.pow(2, 31) - 1;
  
    if (isNaN(a)) return 0;
    if (a < min) return min;
    if (a > max) return max;
  
    return a;
  };
//huy
