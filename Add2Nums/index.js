const ListNode = require('./list');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) => {
  let res = new ListNode(0),
    head = res,
    sum = 0,
    carry = 0;

  while(l1 !== null || l2 !== null || sum > 0) {

    if(l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if(l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    if(sum >= 10) {
      carry = 1;
      sum -= 10;
    }

    head.next = new ListNode(sum);
    head = head.next;

    sum = carry;
    carry = 0;
  }

  return res.next;
};

module.exports = addTwoNumbers