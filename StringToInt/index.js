/**
 * @param {string} str
 * @return {number}
 */
const myAtoi = (str) => {
  const MIN = -2147483648,
    MAX = 2147483647
  let [, sign, other, digits] = /^ *([\+|\-]?)(\D*)(\d*)/.exec(str)

  if (other || !digits) return 0
  if (sign === '-') digits = -1 * digits
  if (digits < MIN) return MIN
  if (digits > MAX) return MAX
  return digits
};

module.exports = myAtoi