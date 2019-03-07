/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  if (x === 1) return 1;
  let r = x / 2,
    m = -1;

  for(let i = 0; i < 20 && m !== 0; ++i) {
    let p = r**2;
    m = (x - p) / ((r + 1)**2 - p);
    // process.stdout.write('\tp=' + p + '\nm=' + m + '\n\t\tr=' + r + '\n');
    r += m;
  }
  return r | 0;
};

module.exports = mySqrt;