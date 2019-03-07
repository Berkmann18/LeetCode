/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = (s) => {
  return (s - s === 0 && s.trim() !== '') || Number(s) === Infinity || Number(s) === -Infinity
};

module.exports = isNumber