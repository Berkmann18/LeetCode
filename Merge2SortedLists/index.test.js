const t = require('../t').mt(require('./'));
const ListNode = require('../list');

test('ex.1', () => t([
  new ListNode(1, new ListNode(2, new ListNode(4))),
  new ListNode(1, new ListNode(3, new ListNode(4))),
], new ListNode(1, new ListNode(1,
  new ListNode(2, new ListNode(3,
    new ListNode(4, new ListNode(4)))
  ))
))
)