/**
 * Returns a function targetted assertion.
 * @param {function(*): *} fn Tested function
 * @returns {function(*, *)} Expect caller
 */
const t = fn => (ex, ac) => expect(fn(ex)).toStrictEqual(ac);
/**
 * Returns a function targetted assertion where the function expects several arguments.
 * @param {function(*): *} fn Tested function
 * @returns {function(Array, *)} Expect caller
 */
const mt = fn => (ex, ac) => expect(fn(...ex)).toStrictEqual(ac);

module.exports = {
  t,
  mt
};