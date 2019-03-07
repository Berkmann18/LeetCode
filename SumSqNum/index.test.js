const t = require('../t').t(require('./'));

test('ex.1', () => t(5, true));
test('ex.2', () => t(3, false));