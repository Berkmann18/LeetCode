/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  let l1 = num1.length - 1,
    l2 = num2.length - 1,
    prod = 0;
  for (let i = l1; i >= 0; --i) {
    const dgt1 = i < 0 ? 0 : num1.charAt(i) * 10**(l1 - i);
    for (let j = l2; j >= 0; --j) {
      const dgt2 = j < 0 ? 0 : num2.charAt(j) * 10**(l2 - j);
      prod += dgt1 * dgt2
      // console.log('d1=', dgt1, 'd2=', dgt2, 'prod=', prod, '*=', dgt1 * dgt2)
    }
  }
  return '' + prod;
};

module.exports = multiply