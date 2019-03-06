const t = fn => (ex, ac) => expect(fn(ex)).toStrictEqual(ac)

module.exports = t;