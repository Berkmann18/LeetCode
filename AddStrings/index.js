/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  let carry = 0,
    sum = '';
  for (let i = num1.length - 1, j = num2.length - 1; i >= 0 || j >= 0 || carry > 0; --i, --j) {
    const dgt1 = i < 0 ? 0 : num1.charAt(i) - 0;
    const dgt2 = j < 0 ? 0 : num2.charAt(j) - 0;
    const nextDgt = dgt1 + dgt2 + carry;
    sum = `${nextDgt % 10}${sum}`;
    carry = (nextDgt / 10) | 0;
  }
  return sum;
};

module.exports = addStrings