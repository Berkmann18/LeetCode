const r2i = require('./').default;
const t = require('../t').t(r2i);

test('ex.1', () => t('III', 3));
test('ex.2', () => t('IV', 4));
test('ex.3', () => t('IX', 9));
test('ex.4', () => t('LVIII', 58));
test('ex.4.9', () => t('XC', 90));
test('ex.5', () => t('XCIV', 94));
test('ex.5.9', () => t('CM', 900));
test('ex.6', () => t('CMXCIV', 994));
test('ex.6.9', () => t('MXCIV', 1094));
test('ex.7', () => t('MCMXCIV', 1994));
test('#0-', () => t('XL', 40));
test('#0', () => t('XLI', 41));
test('#1-', () => t('CD', 400));
test('#1', () => t('CDI', 401));
