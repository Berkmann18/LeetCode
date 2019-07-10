const t = require('../t').mt(require('./').default);

test('ex.1', () => t(['Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']], 'ball'));
test('ex 0', () =>
  t(['John was a man, a man of culture, John was good... a good man', ['hit', 'a']], 'man'));
