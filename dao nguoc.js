//huy
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);
  
  if (x >= INT_MIN && x <= INT_MAX) {
      let a = x.toString();
      if (a[0] === '-') {
          let b = "";
          for (let i = a.length - 1; i >= 1; i--) {
              b += a[i];
          }

          let c = b.split('');
          for (let i = 0; i < c.length; i++) {
              if (c[i] !== '0') {
                  break;
              } else {
                  delete c[i];
              }
          }
          let d = c.join('')
          let e = '-' + d;
          return parseInt(e) >= INT_MIN ? parseInt(e) : 0;
      } else {
          let b = "";
          for (let i = a.length - 1; i >= 0; i--) {
              b += a[i];
          }

          let c = b.split('');
          for (let i = 0; i < c.length; i++) {
              if (c[i] !== '0') {
                  break;
              } else {
                  delete c[i];
              }
          }
          let d = c.join('')
          return parseInt(d) <= INT_MAX ? parseInt(d) : 0;
      }
  } else {
      return 0;
  }
};
//huy
