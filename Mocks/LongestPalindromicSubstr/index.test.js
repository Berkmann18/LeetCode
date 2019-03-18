const t = require('../../t').t(require('./'));

// test('hello', () => t('hello', ''))
test('hih', () => t('hih', 'hih'))
test('abba', () => t('abba', 'abba'))

test('ex.1', () => t('babad', 'bab'))
test('ex.2', () => t('cbbd', 'bb'))
test('#0', () => t('a', 'a'))
test('#1', () => t('ac', 'a'))
test('#2', () => t('', ''))