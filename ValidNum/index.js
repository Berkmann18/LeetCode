/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
  return (s - s === 0 && s.trim() !== '') || Number(s) === Infinity || Number(s) === -Infinity
};

module.exports = isNumber