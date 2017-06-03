/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */
module.exports = function(digits){
  // console.log(digits);
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;

  var numPlaces = [9, 99, 999, 9999, 99999];
  var max = numPlaces[digits - 1];
  console.log('check... ', numPlaces[digits - 1]);
  // console.log('max...', max);

  // do your work here

  function isPalindrome(num) {
    if ( num.toString() === num.toString().split('').reverse().join('') ) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isPalindrome(9009));

  function largestPalNum() {
    for ( var i = 0; i <= max; i++ ) {
      for ( var k = 0; k <= max; k++) {
        factor_0 = i;
        factor_1 = k;
        var product = i * k;
        // console.log(product);

        if ( isPalindrome(product) ) {
          if ( product > palindromeNumber ) {
          palindromeNumber = product;
          // console.log(isPalindrome(product));
        }
      }
    }
      // console.log(factor_0 + ' x ' + factor_1 + ' = ' + product);
    }
  }
  largestPalNum();


  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};