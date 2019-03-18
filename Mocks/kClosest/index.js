/**
 * @description Euclidian distance between two points
 * @param {number[]} a Initial point
 * @param {number[]} b Final point
 * @returns {number} Distance
 */
const euclideanDist = (a, b) => Math.sqrt(Math.pow(a[0] - b[0], 2) + Math.pow(a[1] - b[1], 2));

/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = (points, K) => {
  const O = [0, 0];
  let dists = points.map(pt => ({
      pt,
      dist: euclideanDist(O, pt)
    })),
    res = [];
  let pts = dists.sort((a, b) => a.dist - b.dist);
  for (let i = 0; i < K; ++i) res[i] = pts[i].pt;
  return res;
};

module.exports = kClosest;