const t = require('../t').t(require('./'));

test('ex.1', () => t(121, true));
test('ex.2', () => t(-121, false));
test('ex.3', () => t(10, false));
test('ex.4', () => t(11, true));