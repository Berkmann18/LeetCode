const t = require('../t').mt(require('./'));
const ListNode = require('../list');

test('#0', () => t([
  new ListNode(2, new ListNode(4, new ListNode(3))),
  new ListNode(5, new ListNode(6, new ListNode(4))),
], new ListNode(7, new ListNode(0, new ListNode(8))))
)