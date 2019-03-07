const t = require('../t').t(require('./'));

test('ex.1', () => t(123, 321))
test('ex.2', () => t(-123, -321))
test('ex.3', () => t(120, 21))
test('test #0', () => t(1534236469, 0))

/*LeetCode expect 0 on:
 1534236469
 2147483647
-2147483648
*/