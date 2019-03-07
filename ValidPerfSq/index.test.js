const t = require('../t').t(require('./'));

test('ex.1', () => t(16, true));
test('ex.2', () => t(14, false));
test('#0', () => t(1, true));
test('#1', () => t(9, true));
test('#2', () => t(808201, true));
test('#3', () => t(2401, true));