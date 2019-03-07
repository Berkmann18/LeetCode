const t = require('../t').mt(require('./'));

test('ex.1', () => t([[1, 3], [2]], 2));
test('ex.2', () => t([[1, 2], [3, 4]], 2.5));
