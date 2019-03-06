const t = (a, b, ac) => expect(require('./')(a, b)).toStrictEqual(ac)
const ListNode = require('./list');

test('ex', () => {
  let l0 = new ListNode(2, new ListNode(4, new ListNode(3))),
    l1 = new ListNode(5, new ListNode(6, new ListNode(4)))

  return t(l0, l1, 807)
});

test('#0', () => t(
  new ListNode(2, new ListNode(4, new ListNode(3))),
  new ListNode(5, new ListNode(6, new ListNode(4))),
  new ListNode(7, new ListNode(0, new ListNode(8))))
)