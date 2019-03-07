/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  if (x < 0) return false;
  let s = '' + x,
    len = s.length / 2 | 0;
  for (let i = 0; i < len; ++i) {
    if (s[i] !== s[s.length - 1 - i]) return false;
  }
  return true
};

module.exports = isPalindrome