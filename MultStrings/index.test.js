const t = require('../t').mt(require('./'));

test('#0', () => t(['0', '0'], '0'));
test('ex.1', () => t(['2', '3'], '6'));
test('ex.2', () => t(['2', '5'], '10'));
test('ex.3', () => t(['2', '15'], '30'));
test('ex.1', () => t(['89', '21'], '1869'));
// test('#1', () => t('123456789', '987654321', '121932631112635269'))