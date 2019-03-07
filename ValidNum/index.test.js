const t = require('../t').t(require('./'));

test('ex.1', () => t('0', true));
test('ex.2', () => t(' 0.1 ', true));
test('ex.3', () => t('abc', false))
test('ex.4', () => t('1 a', false))
test('ex.5', () => t('2e10', true))
test('ex.6', () => t(' -90e3   ', true))
test('ex.7', () => t(' 1e', false))
test('ex.8', () => t('e3', false))
test('ex.9', () => t(' 6e-1', true))
test('ex.10', () => t(' 99e2.5 ', false))
test('ex.11', () => t('53.5e93', true))
test('ex.12', () => t(' --6 ', false))
test('ex.13', () => t('-+3', false))
test('ex.14', () => t('95a54e53', false))
test('#0', () => t('078332e437', true))