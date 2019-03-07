/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = (c) => {
  if (c === 0) return true;
  let i = 1,
    j = i * i;

  for (; j <= c; ++i) {
    let sq = Math.sqrt(c - j)
    if (sq === (sq | 0)) return true;
    j = i * i;
  }
  return false;
};

module.exports = judgeSquareSum;