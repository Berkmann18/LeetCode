const t = require('../t').t(require('./'));

test('ex.1', () => t('42', 42));
test('ex.2', () => t('   -42', -42));
test('ex.3', () => t('4193 with words', 4193))
test('ex.4', () => t('words and 987', 0))
test('ex.5', () => t('-91283472332', -2147483648))