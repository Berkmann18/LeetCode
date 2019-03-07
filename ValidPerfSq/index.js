const isNotPerfect = r => r !== (r | 0),
  modulable = (x, m) => x % m === 0;

/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = (num) => {
  if (num === 1) return true;
  if (num < -4) return false;
  let r = num / 2,
    m = -1;

  // process.stdout.write('inp=' + isNotPerfect(r) + '\t%5=' + modulable(num, 5) + '\t%3=' + modulable(num, 3) + '\n');

  if (isNotPerfect(r) && !modulable(num, 5) && !modulable(num, 3) && num < 1000) return false;
  for(let i = 0; i < 20 && m !== 0; ++i) {
    let p = r**2;
    m = (num - p) / ((r + 1)**2 - p);
    // process.stdout.write('\tr=' + r + '\np=' + p + '\tm=' + m + '\tnotPS=' + isNotPerfect(r) + '\n');
    r += m;
  }
  return !isNotPerfect(r)
};

module.exports = isPerfectSquare;