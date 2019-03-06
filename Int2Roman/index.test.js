const t = require('../t')(require('./'));

// test('ex.1', () => t(3, 'III'));
// test('ex.2', () => t(4, 'IV'));
// test('ex.3', () => t(9, 'IX'));
// test('ex.4', () => t(58, 'LVIII'));
// test('ex.4.9', () => t(90, 'XC'));
// test('ex.5', () => t(94, 'XCIV'));
// test('ex.5.9', () => t(900, 'CM'));
// test('ex.6', () => t(994, 'CMXCIV'));
// test('ex.6.9', () => t(1094, 'MXCIV'));
// test('ex.7', () => t(1994, 'MCMXCIV'));
// test('#0-', () => t(40, 'XL'));
// test('#0', () => t(41, 'XLI'));
// test('#1-', () => t(400, 'CD'));
test('#1', () => t(401, 'CDI'));