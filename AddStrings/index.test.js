const t = (a, b, ac) => expect(require('./')(a, b)).toStrictEqual(ac)

test('#0', () => t('0', '0', '0'));