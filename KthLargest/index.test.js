const t = require('../t').mt(require('./'));

test('ex.1', () => t([[3,2,1,5,6,4], 2], 5))
test('ex.2', () => t([[3,2,3,1,2,4,5,5,6], 4], 4))