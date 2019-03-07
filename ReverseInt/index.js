/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
  let res = '', num = `${Math.abs(x)}`;
  for (let i of num) res = `${i}${res}`;
  let rev = parseFloat(res);
  if (rev >= Math.pow(2, 31) - 1 || rev <= -Math.pow(2, 31)) return 0;
  let mult = x < 0 ? -1 : 1;
  return mult * rev;
};

module.exports = reverse