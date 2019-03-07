const clamp = (num, a, b) => Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b));

const LMT = 2**31;

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = (x, n) => {
  if (n <= -LMT) return Math.abs(x) === 1 ? 1 : 0;
  if (n >= LMT) return Infinity;

  let r = 1;
  if (n > 0) for (let i = 0; i < n; ++i) r *= x;
  else if (n < 0) for (let i = 0; i < -n; ++i) r /= x;
  else return 1;

  return parseFloat(r.toFixed(10));
};

module.exports = myPow